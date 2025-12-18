import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdDone,
  MdCheckCircle,
} from "react-icons/md";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import GoogleLogin from "@/components/googleLogin";
import Head from "next/head";
const OtpVerifyModal = dynamic(() => import("@/components/otpVerifyModal"), {
  ssr: false,
});
var intlRef;

const signUp = (path) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showEmailOtp, setShowEmailOtp] = useState(false);
  const [showMobileOtp, setShowMobileOtp] = useState(false);
  const [emailDetails, setEmailDetails] = useState(null);
  const [mobileDetails, setMobileDetails] = useState(null);
  const [connectedChannels, setConnectedChannels] = useState(null);
  const [intl, setIntl] = useState(null);
  const [emailGetOtpInProgress, setEmailGetOtpInProgress] = useState(false);
  const [emailVerifyOtpInProgress, setEmailVerifyOtpInProgress] =
    useState(false);
  const [mobileGetOtpInProgress, setMobileGetOtpInProgress] = useState(false);
  const [mobileVerifyOtpInProgress, setMobileVerifyOtpInProgress] =
    useState(false);
  const [signupInProgress, setSignupInProgress] = useState(false);
  const [termsAgree, setTermsAgree] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [userResponse, setUserResponse] = useState(null);
  const link = path.path.linkPrefix;
  const linkPath = path.path;
  const isIndia = linkPath.isIndia;
  const isGlobal = linkPath.isGlobal;
  const isAE = linkPath.isAE;
  const isUK = linkPath.isUK;
  const [mobileNo, setMobileNo] = useState(null);

  let region = link ? link.replace("/", "") : "gl";
  if (region) {
    region = region.toUpperCase();
  }

  useEffect(() => {
    setGiddhRegion(region.toLowerCase());
    initOtpSignup();
  }, []);

  useEffect(() => {
    if (showEmailOtp) {
      initiateOtpFieldsAutoMove(".email-otp-field");
    }
  }, [showEmailOtp]);

  useEffect(() => {
    if (showMobileOtp) {
      initiateOtpFieldsAutoMove(".mobile-otp-field");
    }
  }, [showMobileOtp]);

  function googleApiSuccessCallback(response) {
    setEmailDetails({
      email: response.email,
      accessToken: response.accessToken,
      isVerified: true,
      signupVia: "google",
    });
    setShowEmailOtp(false);
    updateCurrentStep(2);
    setInputValue("email", response.email);
  }

  async function initiateSignup() {
    if (emailDetails.isVerified && mobileDetails.isVerified) {
      setSignupInProgress(true);
      await fetch(
        (isUK
          ? process.env.NEXT_PUBLIC_UK_API_URL
          : process.env.NEXT_PUBLIC_API_URL) + "/v2/register",
        {
          method: "POST",
          mode: "cors",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            emailId: emailDetails.email,
            emailIdAccessToken: emailDetails.accessToken,
            emailIdAuthType: emailDetails.signupVia,
            mobileNo: mobileDetails.mobileNo,
            mobileNoAccessToken: mobileDetails.accessToken,
          }),
        }
      )
        .then((res) => res.json())
        .then((response) => {
          if (response.status == "success") {
            if (response.body.statusCode === "AUTHENTICATE_TWO_WAY") {
              setUserResponse(response.body);
              setSignupInProgress(false);
              setShowVerificationModal(true);
            } else {
              showToaster(
                "Your account has been created successfully.",
                "success",
                "top-center"
              );
              setGiddhSession(response.body.session.id);

              var utmParams =
                "&utm_source=" +
                getLocalStorage("utm_source") +
                "&utm_medium=" +
                getLocalStorage("utm_medium") +
                "&utm_campaign=" +
                getLocalStorage("utm_campaign") +
                "&utm_term=" +
                getLocalStorage("utm_term") +
                "&utm_content=" +
                getLocalStorage("utm_content") +
                "";
              window.location =
                process.env.NEXT_PUBLIC_APP_URL +
                "/token-verify?request=" +
                response.body.session.id +
                utmParams +
                "&region=" +
                region;
            }
          } else {
            setSignupInProgress(false);
            showToaster(response.message, "error", "top-center");
          }
        })
        .catch((err) => signupErrorCallback(err));
    } else if (!emailDetails.isVerified && !mobileDetails.isVerified) {
      if (
        document.getElementById("email").value &&
        document.getElementById("mobileNo").value
      ) {
        sendEmailOtp();
        setTimeout(() => {
          sendMobileOtp();
        }, 3000);
      } else {
        showToaster("Please verify email and mobile", "error", "top-center");
      }
    } else if (!emailDetails.isVerified && mobileDetails.isVerified) {
      showToaster("Please verify email", "error", "top-center");
    } else if (emailDetails.isVerified && !mobileDetails.isVerified) {
      showToaster("Please verify mobile", "error", "top-center");
    }
  }

  function setInputValue(fieldId, value) {
    const sanitizedValue = value ?? "";
    const tryAssignValue = (retries = 10) => {
      const targetInput = document.getElementById(fieldId);
      if (targetInput) {
        targetInput.value = sanitizedValue;
      } else if (retries > 0) {
        setTimeout(() => tryAssignValue(retries - 1), 50);
      }
    };

    tryAssignValue();
  }

  function initOtpSignup() {
    var userData = getLocalStorage("userData");
    if (userData) {
      if (userData.user.email) {
        setEmailDetails({
          email: userData.user.email,
          accessToken: userData.accessToken,
          isVerified: true,
          signupVia: userData.signupVia,
        });
        setShowEmailOtp(false);
        updateCurrentStep(2);
        setInputValue("email", userData.user.email);
      } else if (userData.user.mobileNo) {
        setMobileDetails({
          mobileNo: userData.user.mobileNo,
          accessToken: userData.accessToken,
          isVerified: true,
          signupVia: userData.signupVia,
        });
        updateCurrentStep(2);
        setShowMobileOtp(false);
        setInputValue("mobileNo", userData.user.mobileNo);
      }
    }

    addOtpWidgetScript(true, false, () => {
      setTimeout(() => {
        getWidgetData();
      }, 2000);
    });
  }

  function resetEverything() {
    removeLocalStorage("userData");
    setEmailDetails({
      email: "",
      accessToken: "",
      isVerified: false,
      signupVia: "",
      requestId: "",
    });
    setMobileDetails({
      mobileNo: "",
      accessToken: "",
      isVerified: false,
      signupVia: "",
      requestId: "",
    });
    setShowEmailOtp(false);
    setShowMobileOtp(false);
    updateCurrentStep(2);

    setInputValue("email", "");
    setInputValue("mobileNo", "");
  }

  function setShowEmailOtpSection(showOtp) {
    setShowEmailOtp(showOtp);

    if (!showOtp) {
      emailDetails.email = "";
      emailDetails.isVerified = false;
      emailDetails.requestId = "";
      setEmailDetails(emailDetails);
    }
  }

  function setShowMobileOtpSection(showOtp) {
    setShowMobileOtp(showOtp);

    if (!showOtp) {
      mobileDetails.mobileNo = "";
      mobileDetails.isVerified = false;
      mobileDetails.requestId = "";
      setMobileDetails(mobileDetails);
    }
  }

  function getWidgetData() {
    var widgetData = window.getWidgetData();
    if (widgetData && widgetData.processes) {
      var channels = [];
      widgetData.processes.forEach((process) => {
        if (process.channel.value != "3") {
          if (!channels[process.channel.value]) {
            channels[process.channel.value] = [];
          }
          channels[process.channel.value] = process.channel;
        }
      });
      setConnectedChannels(channels);
    }
  }

  function sendEmailOtp() {
    if (
      !document.getElementById("email").value ||
      !document.getElementById("email").value.trim() ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        document.getElementById("email").value
      )
    ) {
      showToaster("Please enter valid email!", "error", "top-center");
      return;
    }

    setEmailGetOtpInProgress(true);

    window.sendOtp(
      document.getElementById("email").value,
      (data) => {
        emailOtpSentCallback(data);
      },
      (error) => {
        emailOtpFailedCallback(error);
      }
    );
  }

  function sendMobileOtp() {
    var mobileNo = formatMobileNumber(intl.getNumber());
    if (!mobileNo || !mobileNo) {
      showToaster("Please enter valid mobile number!", "error", "top-center");
      return;
    }

    setMobileGetOtpInProgress(true);

    window.sendOtp(
      mobileNo,
      (data) => {
        mobileOtpSentCallback(data);
      },
      (error) => {
        mobileOtpFailedCallback(error);
      }
    );
  }

  function emailOtpSentCallback(data) {
    setEmailGetOtpInProgress(false);
    showToaster("OTP sent successfully.", "success", "top-center");
    setEmailDetails({
      email: document.getElementById("email").value,
      accessToken: "",
      isVerified: false,
      signupVia: "giddh",
      requestId: data.message,
    });
    setShowEmailOtpSection(true);
  }

  function mobileOtpSentCallback(data) {
    setMobileGetOtpInProgress(false);
    showToaster("OTP sent successfully.", "success", "top-center");
    var mobileNo = formatMobileNumber(intl.getNumber());

    setMobileDetails({
      mobileNo: mobileNo,
      accessToken: "",
      isVerified: false,
      signupVia: "giddh",
      requestId: data.message,
    });
    setShowMobileOtpSection(true);
  }

  function emailOtpFailedCallback(error) {
    setEmailGetOtpInProgress(false);
    showToaster(error.message, "error", "top-center");
    setShowEmailOtpSection(false);
    emailDetails.requestId = "";
    setEmailDetails(emailDetails);
  }

  function mobileOtpFailedCallback(error) {
    setMobileGetOtpInProgress(false);
    showToaster(error.message, "error", "top-center");
    setShowMobileOtpSection(false);
    mobileDetails.requestId = "";
    setMobileDetails(mobileDetails);
  }

  function resetEmailOtp() {
    emailDetails.isVerified = false;
    emailDetails.accessToken = "";
    setEmailDetails(emailDetails);

    document.querySelectorAll(".email-otp-field").forEach((field) => {
      field.value = "";
    });
  }

  function resetMobileOtp() {
    mobileDetails.isVerified = false;
    mobileDetails.accessToken = "";
    setMobileDetails(mobileDetails);

    document.querySelectorAll(".mobile-otp-field").forEach((field) => {
      field.value = "";
    });
  }

  function retrySendOtp(channel) {
    var requestId = "";
    if (channel == 3) {
      resetEmailOtp();
      setEmailGetOtpInProgress(true);
      requestId = emailDetails.requestId;
    } else {
      resetMobileOtp();
      setMobileGetOtpInProgress(true);
      requestId = mobileDetails.requestId;
    }
    window.retryOtp(
      channel,
      (data) => {
        retrySendOtpSuccessCallback(channel);
      },
      (error) => {
        retrySendOtpErrorCallback(channel, error);
      },
      requestId
    );
  }

  function retrySendOtpSuccessCallback(channel) {
    showToaster("OTP resent successfully.", "success", "top-center");

    if (channel == 3) {
      setEmailGetOtpInProgress(false);
    } else {
      setMobileGetOtpInProgress(false);
    }
  }

  function retrySendOtpErrorCallback(channel, error) {
    showToaster(error.message, "error", "top-center");

    if (channel == 3) {
      setEmailGetOtpInProgress(false);
    } else {
      setMobileGetOtpInProgress(false);
    }
  }

  function verifyOtp(type) {
    var otp = "";
    var requestId = "";

    if (type == "email") {
      document.querySelectorAll(".email-otp-field").forEach(function (field) {
        otp += field.value;
      });

      if (!otp) {
        showToaster("Please enter OTP!", "error", "top-center");
        return;
      }

      setEmailVerifyOtpInProgress(true);
      requestId = emailDetails.requestId;
    } else {
      document.querySelectorAll(".mobile-otp-field").forEach(function (field) {
        otp += field.value;
      });

      if (!otp) {
        showToaster("Please enter OTP!", "error", "top-center");
        return;
      }

      setMobileVerifyOtpInProgress(true);
      requestId = mobileDetails.requestId;
    }

    window.verifyOtp(
      otp,
      (data) => {
        verifyOtpSuccessCallback(type, data);
      },
      (error) => {
        verifyOtpErrorCallback(type, error);
      },
      requestId
    );
  }

  function verifyOtpSuccessCallback(type, data) {
    showToaster("OTP verified successfully.", "success", "top-center");

    if (type == "email") {
      setEmailVerifyOtpInProgress(false);
      emailDetails.isVerified = true;
      emailDetails.accessToken = data.message;
      setEmailDetails(emailDetails);
    } else {
      setMobileVerifyOtpInProgress(false);
      mobileDetails.isVerified = true;
      mobileDetails.accessToken = data.message;
      setMobileDetails(mobileDetails);
    }
  }

  function verifyOtpErrorCallback(type, error) {
    showToaster(error.message, "error", "top-center");

    if (type == "email") {
      setEmailVerifyOtpInProgress(false);
      emailDetails.isVerified = false;
      emailDetails.accessToken = "";
      setEmailDetails(emailDetails);
    } else {
      setMobileVerifyOtpInProgress(false);
      mobileDetails.isVerified = false;
      mobileDetails.accessToken = "";
      setMobileDetails(mobileDetails);
    }
  }

  function signupErrorCallback(error) {
    setSignupInProgress(false);
    showToaster(error, "error", "top-center");
  }

  function updateCurrentStep(step) {
    setCurrentStep(step);
    setTimeout(() => {
      loadTelLibrary();
    });
  }

  function onKeyDownEmail(event) {
    if (event.keyCode === 13) {
      sendEmailOtp();
    }
  }

  function onKeyDownMobile(event) {
    if (event.keyCode === 13) {
      sendMobileOtp();
    }
  }

  function inputMobile(event) {
    if (event) {
      displayEnterNumber();
    }
  }

  function displayEnterNumber() {
    if (!intlRef) {
      return;
    }

    if (intlRef.getSelectedCountryData()?.dialCode) {
      setDisplayMobileNumber();
    } else {
      intlRef.setCountry("in");
      setTimeout(() => {
        setDisplayMobileNumber();
      }, 100);
    }
  }

  function setDisplayMobileNumber() {
    if (!intlRef) {
      return;
    }

    let number = intlRef.getNumber();
    let displayMobileNumber = number.includes("+")
      ? number
      : `+${intlRef.getSelectedCountryData()?.dialCode}${intlRef.getNumber()}`;
    setMobileNo(displayMobileNumber);
  }

  function showToaster(message, type, position) {
    toast.dismiss();
    toast(message, { type: type, position: position });
  }

  function initiateOtpFieldsAutoMove(selector) {
    setTimeout(function () {
      const charInputs = document.querySelectorAll(selector);

      charInputs.forEach((input, index) => {
        if (input.dataset.listenersAttached === "true") {
          return;
        }

        input.addEventListener("input", (e) => {
          const value = e.target.value;

          if (value.length > 0) {
            if (index < charInputs.length - 1) {
              charInputs[index + 1].focus();
            } else {
              if (selector == ".email-otp-field") {
                document.getElementById("verify-email-button").focus();
              } else if (selector == ".mobile-otp-field") {
                document.getElementById("verify-mobile-button").focus();
              }
            }
          }
        });

        input.addEventListener("keydown", (e) => {
          if (e.key === "Backspace" && input.value.length === 0 && index > 0) {
            e.preventDefault(); // Prevent the browser's default backspace behavior
            charInputs[index - 1].focus();
          }
        });

        input.dataset.listenersAttached = "true";
      });
    });
  }

  function loadTelLibrary(retries = 20) {
    const input = document.getElementById("mobileNo");
    const isIntlAvailable =
      typeof window !== "undefined" &&
      typeof window.intlTelInput === "function";

    if (!input || !isIntlAvailable) {
      if (retries > 0) {
        setTimeout(() => loadTelLibrary(retries - 1), 100);
      }
      return;
    }

    if (input.dataset.intlTelInitialized === "true") {
      return;
    }

    const intl = window.intlTelInput(input, {
      nationalMode: true,
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
      autoHideDialCode: false,
      separateDialCode: false,
      initialCountry: "auto",
      geoIpLookup: (success, failure) => {
        let countryCode = "in";
        const fetchIPApi = fetch("https://api.db-ip.com/v2/free/self");
        fetchIPApi.then(
          (res) => {
            if (res?.ipAddress) {
              const fetchCountryByIpApi = fetch(
                "http://ip-api.com/json/" + `${res.ipAddress}`
              );
              fetchCountryByIpApi.then(
                (fetchCountryByIpApiRes) => {
                  if (fetchCountryByIpApiRes?.countryCode) {
                    return success(fetchCountryByIpApiRes.countryCode);
                  } else {
                    return success(countryCode);
                  }
                },
                (fetchCountryByIpApiErr) => {
                  const fetchCountryByIpInfoApi = fetch(
                    "https://ipinfo.io/" + `${res?.ipAddress}`
                  );

                  fetchCountryByIpInfoApi.then(
                    (fetchCountryByIpInfoApiRes) => {
                      if (fetchCountryByIpInfoApiRes?.country) {
                        return success(fetchCountryByIpInfoApiRes.country);
                      } else {
                        return success(countryCode);
                      }
                    },
                    (fetchCountryByIpInfoApiErr) => {
                      return success(countryCode);
                    }
                  );
                }
              );
            } else {
              return success(countryCode);
            }
          },
          (err) => {
            return success(countryCode);
          }
        );
      },
    });

    input.dataset.intlTelInitialized = "true";
    intlRef = intl;
    setIntl(intl);
    displayEnterNumber();
    input.addEventListener("countrychange", displayEnterNumber);
  }

  function otpVerifyCallback(response) {
    setGiddhSession(response.session.id);
    window.location =
      process.env.NEXT_PUBLIC_APP_URL +
      "/token-verify?request=" +
      response.session.id +
      "&region=" +
      region;
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/css/intlTelInput.css"
        ></link>
        <script src="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js"></script>
      </Head>
      <section className="entry signup d-flex">
        <div className="entry__left_section col-xl-3 col-lg-4 col-md-5">
          <a href={link == "" ? "/" : link}>
            <img
              src="/img/giddh-logo.svg"
              className="entry__left_section__brand_logo"
              alt="giddh logo"
            />
          </a>
          <div className="entry__left_section__details pe-5">
            <div className="container">
              <h2 className="c-fs-3 line-height-36 mb-4">
                {isGlobal && "Experience Easy Accounting with GIDDH"}
                {isIndia && "Join GIDDH for Simplified Accounting Solutions"}
                {isAE && "Join GIDDH: Effortless Accounting Software"}
                {isUK && "GIDDH: Simplified Accounting at Your Fingertips"}
              </h2>
              <p>Features:</p>
              <ul className="ps-0 my-4">
                <li className="d-flex align-items-center">
                  <MdDone />
                  {isGlobal && "Basic Ledger Accounting Made Easy"}
                  {isIndia && "Easy Steps for Basic Ledger Accounting"}
                  {isAE && "Basic Ledger Accounting Simplified"}
                  {isUK && "Master Basic Ledger Accounting"}
                </li>
                <li className="d-flex align-items-center">
                  <MdDone />
                  {isGlobal && "Efficiently Manage Branches & Warehouses"}
                  {isIndia && "Simplify Branches & Warehouses Management"}
                  {isAE && "Centralized Control for Branches & Warehouses"}
                  {isUK && "Optimize Branches & Warehouses Operations"}
                </li>
                <li className="d-flex align-items-center">
                  <MdDone />
                  {isGlobal && "Streamlined Inventory Management Solutions"}
                  {isIndia && "Simplify Your Inventory Management Process"}
                  {isAE && "Inventory Management Made Streamlined"}
                  {isUK && "Seamless and Streamlined Inventory Management"}
                </li>
                <li className="d-flex align-items-center">
                  <MdDone />
                  {isGlobal && "Easy Tax Reports Anywhere"}
                  {isIndia && "GST Reporting Anytime, Anywhere"}
                  {isAE && "VAT Reports on the Go"}
                  {isUK && "Fast VAT Reports on the Go"}
                </li>
                <li className="d-flex align-items-center">
                  <MdDone />
                  {isGlobal && "Native iOS & Android App Support"}
                  {isIndia && "Full Support for iOS & Android Apps"}
                  {isAE && "iOS & Android Apps Fully Supported"}
                  {isUK && "iOS & Android Native App Compatibility"}
                </li>
                <li className="d-flex align-items-center">
                  <MdDone />
                  {isGlobal && "Support for Unlimited Users"}
                  {isIndia && "Unlimited User Access Support"}
                  {isAE && "Unlimited Users, Full Support"}
                  {isUK && "Comprehensive Support for Unlimited Users"}
                </li>
                <li className="d-flex align-items-center">
                  <MdDone />
                  {isGlobal && "Simplified for Small Business Accounting"}
                  {isIndia && "Easy Accounting for Small Businesses"}
                  {isAE && "Small Business Accounting Made Easy"}
                  {isUK && "Streamlined Accounting for Small Businesses"}
                </li>
                <li className="d-flex align-items-center">
                  <MdDone />
                  {isGlobal && "Support for Multi-Currency Accounting"}
                  {isIndia && "Seamless Multi-Currency Accounting"}
                  {isAE && "Multi-Currency Accounting Solutions"}
                  {isUK && "Efficient Multi-Currency Accounting"}
                </li>
              </ul>
              <p>
                {isGlobal && "Trusted Globally by 5,000+ Businesses"}
                {isIndia && "Trusted by 5,000+ Businesses Worldwide"}
                {isAE && "Join 5,000+ Trusted Businesses Worldwide"}
                {isUK && "Trusted by Over 5,000 Global Businesses"}
              </p>
            </div>
          </div>
        </div>
        <div className="entry__right_section col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
          <div className="container entry__right_section__container">
            {/* STEP #1 */}
            {currentStep == 1 && (
              <div className="entry__right_section__container--step entry__right_section__container--active">
                <a
                  href={link == "" ? "/" : link}
                  className="d-none entry__right_section__container--logo-visible-in-small"
                >
                  <img
                    src="/img/giddh-logo.svg"
                    width="auto"
                    height="40px"
                    alt="Giddh Icon"
                  />
                </a>
                <h1>Create an account</h1>
                <div className="entry__right_section__container__entry_with d-flex mb-4 me-4">
                  <div>
                    <span className="d-inline-block mb-4">Sign up with</span>

                    <div className="d-flex align-items-center">
                      <GoogleLogin
                        googleApiSuccessCallback={googleApiSuccessCallback}
                      />
                    </div>
                  </div>
                </div>

                <span className="d-block line_on_right c-fs-6 mb-4">or</span>

                <button
                  className="entry__right_section__container__entry_button mb-4"
                  onClick={() => resetEverything()}
                >
                  Sign up with Email
                  <MdKeyboardArrowRight />
                </button>

                <p className="c-fs-6 mb-4">
                  If you already have an account,{" "}
                  <a href={link + "/login"}>Login</a>
                </p>
              </div>
            )}

            {/* STEP #2 */}
            {currentStep == 2 && (
              <div className="entry__right_section__container--step entry__right_section__container--active">
                <a
                  href={link == "" ? "/" : link}
                  className="d-none entry__right_section__container--logo-visible-in-small"
                >
                  <img
                    src="/img/giddh-logo.svg"
                    width="auto"
                    height="40px"
                    alt="Giddh Icon"
                  />
                </a>
                <h1>Create an account</h1>
                <div className="entry__right_section__container__step_one mt-5">
                  <div className="step_status_bar d-flex justify-content-between align-items-center ps-0">
                    <div className="d-flex align-items-center">
                      <MdCheckCircle
                        className={
                          "me-1 " +
                          (emailDetails &&
                          emailDetails.isVerified &&
                          mobileDetails &&
                          mobileDetails.isVerified
                            ? " icon-success"
                            : "")
                        }
                      />{" "}
                      Verify email & mobile number
                    </div>
                  </div>
                  <div className="row mx-0 px-0 step_input_wrapper mt-4">
                    <label htmlFor="email" className="mb-3 ps-0">
                      Verify email
                    </label>
                    <div className="step_input_wrapper--fixed-height d-flex flex-wrap p-0">
                      <div
                        className="step_input_wrapper__left col-xxl-6 col-xl-7 col-lg-12"
                        style={{
                          paddingRight:
                            showEmailOtp ||
                            (emailDetails && emailDetails.isVerified)
                              ? "0"
                              : null,
                        }}
                      >
                        <div className="d-flex step_input_wrapper__mobile_veiw">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="email@walkover.in"
                            autoComplete="off"
                            onKeyDown={onKeyDownEmail}
                            disabled={
                              showEmailOtp ||
                              (emailDetails && emailDetails.isVerified)
                            }
                            autoFocus={
                              !showEmailOtp &&
                              (!emailDetails || !emailDetails.isVerified)
                            }
                          />
                          {emailDetails && emailDetails.isVerified && (
                            <span className="position-relative">
                              <MdCheckCircle className="icon-success otp_verified_icon" />
                            </span>
                          )}
                          {!showEmailOtp &&
                            (!emailDetails || !emailDetails.isVerified) && (
                              <button
                                className="btn custom-signup-btn opacity-100"
                                onClick={sendEmailOtp}
                                disabled={emailGetOtpInProgress}
                              >
                                {emailGetOtpInProgress && (
                                  <div
                                    className="spinner-border spinner-border-sm col-primary"
                                    role="status"
                                  ></div>
                                )}

                                {!emailGetOtpInProgress && (
                                  <span>Verify Email</span>
                                )}
                              </button>
                            )}
                          {showEmailOtp && (
                            <button
                              className="btn custom-signup-btn opacity-100 wide-btn"
                              onClick={() => setShowEmailOtpSection(false)}
                              disabled={emailGetOtpInProgress}
                            >
                              {emailGetOtpInProgress && (
                                <div
                                  className="spinner-border spinner-border-sm col-primary"
                                  role="status"
                                ></div>
                              )}

                              {!emailGetOtpInProgress && (
                                <span>Change Email</span>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                      {showEmailOtp &&
                        (!emailDetails || !emailDetails.isVerified) && (
                          <div className="step_input_wrapper__right col-xxl-6 col-xl-5 col-lg-12">
                            <div className="d-flex flex-column">
                              <div className="d-flex">
                                <input
                                  type="tel"
                                  className="form-control otp_input email-otp-field"
                                  placeholder="*"
                                  maxLength="1"
                                  id="emailOtpField1"
                                  autoFocus={true}
                                />
                                <input
                                  type="tel"
                                  className="form-control otp_input email-otp-field"
                                  placeholder="*"
                                  maxLength="1"
                                  id="emailOtpField2"
                                />
                                <input
                                  type="tel"
                                  className="form-control otp_input email-otp-field"
                                  placeholder="*"
                                  maxLength="1"
                                  id="emailOtpField3"
                                />
                                <input
                                  type="tel"
                                  className="form-control otp_input email-otp-field"
                                  placeholder="*"
                                  maxLength="1"
                                  id="emailOtpField4"
                                />
                                <button
                                  id="verify-email-button"
                                  className="btn custom-signup-btn opacity-100"
                                  onClick={() => verifyOtp("email")}
                                  disabled={emailVerifyOtpInProgress}
                                >
                                  {emailVerifyOtpInProgress && (
                                    <div
                                      className="spinner-border spinner-border-sm col-primary"
                                      role="status"
                                    ></div>
                                  )}

                                  {!emailVerifyOtpInProgress && (
                                    <span>Verify</span>
                                  )}
                                </button>
                              </div>
                              <span
                                className="col-primary c-fw-600 mt-3 c-fs-6"
                                onClick={() => retrySendOtp(3)}
                              >
                                Resend
                              </span>
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                  <div className="row mx-0 px-0 step_input_wrapper mb-3">
                    <label htmlFor="contact" className="mb-3 ps-0">
                      Verify Mobile number
                    </label>
                    <div className="step_input_wrapper--fixed-height d-flex flex-wrap p-0">
                      <div
                        className="step_input_wrapper__left col-xxl-6 col-xl-7 col-lg-12"
                        style={{
                          paddingRight:
                            showMobileOtp ||
                            (mobileDetails && mobileDetails.isVerified)
                              ? "0"
                              : null,
                        }}
                      >
                        <div className="d-flex step_input_wrapper__mobile_veiw position-relative">
                          <input
                            type="tel"
                            className="form-control"
                            id="mobileNo"
                            placeholder="98********"
                            autoComplete="off"
                            onKeyDown={onKeyDownMobile}
                            onChange={inputMobile}
                            disabled={
                              showMobileOtp ||
                              (mobileDetails && mobileDetails.isVerified)
                            }
                          />
                          <span className="position-absolute mobile-number">
                            {mobileNo}
                          </span>
                          {mobileDetails && mobileDetails.isVerified && (
                            <span className="position-relative">
                              <MdCheckCircle className="icon-success otp_verified_icon" />
                            </span>
                          )}
                          {!showMobileOtp &&
                            (!mobileDetails || !mobileDetails.isVerified) && (
                              <button
                                className="btn custom-signup-btn opacity-100"
                                onClick={sendMobileOtp}
                                disabled={mobileGetOtpInProgress}
                              >
                                {mobileGetOtpInProgress && (
                                  <div
                                    className="spinner-border spinner-border-sm col-primary"
                                    role="status"
                                  ></div>
                                )}

                                {!mobileGetOtpInProgress && (
                                  <span>Verify number</span>
                                )}
                              </button>
                            )}
                          {showMobileOtp && (
                            <button
                              className="btn custom-signup-btn opacity-100 wide-btn"
                              onClick={() => setShowMobileOtpSection(false)}
                              disabled={mobileGetOtpInProgress}
                            >
                              {mobileGetOtpInProgress && (
                                <div
                                  className="spinner-border spinner-border-sm col-primary"
                                  role="status"
                                ></div>
                              )}

                              {!mobileGetOtpInProgress && (
                                <span>Change Mobile</span>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                      {showMobileOtp &&
                        (!mobileDetails || !mobileDetails.isVerified) && (
                          <div className="step_input_wrapper__right col-xxl-6 col-xl-5 col-lg-12">
                            <div className="d-flex flex-column">
                              <div className="d-flex">
                                <input
                                  type="tel"
                                  className="form-control otp_input mobile-otp-field"
                                  placeholder="*"
                                  maxLength="1"
                                  id="mobileOtpField1"
                                  autoFocus={true}
                                />
                                <input
                                  type="tel"
                                  className="form-control otp_input mobile-otp-field"
                                  placeholder="*"
                                  maxLength="1"
                                  id="mobileOtpField2"
                                />
                                <input
                                  type="tel"
                                  className="form-control otp_input mobile-otp-field"
                                  placeholder="*"
                                  maxLength="1"
                                  id="mobileOtpField3"
                                />
                                <input
                                  type="tel"
                                  className="form-control otp_input mobile-otp-field"
                                  placeholder="*"
                                  maxLength="1"
                                  id="mobileOtpField4"
                                />
                                <button
                                  id="verify-mobile-button"
                                  className="btn custom-signup-btn opacity-100"
                                  onClick={() => verifyOtp("mobile")}
                                  disabled={mobileVerifyOtpInProgress}
                                >
                                  {mobileVerifyOtpInProgress && (
                                    <div
                                      className="spinner-border spinner-border-sm col-primary"
                                      role="status"
                                    ></div>
                                  )}

                                  {!mobileVerifyOtpInProgress && (
                                    <span>Verify</span>
                                  )}
                                </button>
                              </div>
                              {connectedChannels && (
                                <div className="col-dark mt-3 c-fs-6 d-flex resend-text">
                                  Resend on{" "}
                                  <ul>
                                    {connectedChannels.map((item, index) => (
                                      <li key={item.value}>
                                        <span
                                          className="col-primary c-fw-600"
                                          onClick={() =>
                                            retrySendOtp(item.value)
                                          }
                                        >
                                          {" "}
                                          {item.name}{" "}
                                        </span>
                                        {connectedChannels.length >
                                          index + 1 && <span> or </span>}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="c-fs-6 mb-1 content-width">
                      I agree to receive OTP and Alerts SMS from Giddh at the
                      phone number provided. Message and Data rates may apply.
                      Message frequency varies. Reply HELP for help and STOP to
                      opt-out. View our{" "}
                      <a className="text-wrap-nowrap" href="https://giddh.com/terms" target="_blank" rel="noopener noreferrer">Terms and Service</a>{" "}
                      and <a className="text-wrap-nowrap" href="https://giddh.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                      .
                    </p>
                    <div class="d-flex align-items-center gap-2">
                      <input
                        className="form-check-input m-0"
                        type="checkbox"
                        id="agreeCheckBox"
                        value={termsAgree}
                        onChange={() => setTermsAgree(!termsAgree)}
                      />
                      <label
                        className="form-check-label c-fs-5"
                        htmlFor="agreeCheckBox"
                      >
                        Agree
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      <button
                        className="me-3 btn back_btn"
                        onClick={() => updateCurrentStep(1)}
                      >
                        {" "}
                        <MdKeyboardArrowLeft />
                        Back
                      </button>
                      <button
                        className="btn submit_btn col-white opacity-100"
                        onClick={() => initiateSignup()}
                        disabled={signupInProgress || !termsAgree}
                      >
                        {signupInProgress && (
                          <div
                            className="spinner-border spinner-border-sm col-white"
                            role="status"
                          ></div>
                        )}

                        {!signupInProgress && <span>Submit</span>}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showVerificationModal && (
              <OtpVerifyModal
                userResponse={userResponse}
                path={path}
                otpVerifyCallback={otpVerifyCallback}
                hideVerificationModal={() => {
                  setShowVerificationModal(false);
                  document.body.classList.remove("otp-verification");
                }}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default signUp;
