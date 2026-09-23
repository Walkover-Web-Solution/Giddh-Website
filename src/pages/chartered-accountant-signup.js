import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import GoogleLogin from "@/components/googleLogin";
import Footer from "@/components/NewComps/Footer";
import Stats from "@/components/NewComps/Stats";
import homeData from "@/data/pagesdata/in/home.json";
import {
  MdCheckCircle,
  MdOutlineSecurity,
  MdOutlineSpeed,
  MdOutlineAccountBalance,
  MdOutlineGroups,
  MdOutlineFactCheck,
  MdOutlineDashboard,
  MdArrowForward,
  MdKeyboardArrowLeft,
} from "react-icons/md";

import {
  showToaster,
  setInputValue,
  formatMobileNumber,
  initiateOtpFieldsAutoMove,
  getOtpFromFields,
  clearOtpFields,
  getWidgetChannels,
  handleDisplayMobileNumber,
  handleOtpVerifyRedirect,
  handleKeyDownEnter,
  handleSignupError,
  handleStepUpdate,
  getSourceParam,
} from "@/utils/signupHelpers";

const OtpVerifyModal = dynamic(() => import("@/components/otpVerifyModal"), {
  ssr: false,
});

var intlRef;

export default function CharteredAccountantSignup({ path }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [showEmailOtp, setShowEmailOtp] = useState(false);
  const [showMobileOtp, setShowMobileOtp] = useState(false);
  const [emailDetails, setEmailDetails] = useState(null);
  const [mobileDetails, setMobileDetails] = useState(null);
  const [mrnNumber, setMrnNumber] = useState("");
  const [connectedChannels, setConnectedChannels] = useState(null);
  const [intl, setIntl] = useState(null);
  const [emailGetOtpInProgress, setEmailGetOtpInProgress] = useState(false);
  const [emailVerifyOtpInProgress, setEmailVerifyOtpInProgress] = useState(false);
  const [mobileGetOtpInProgress, setMobileGetOtpInProgress] = useState(false);
  const [mobileVerifyOtpInProgress, setMobileVerifyOtpInProgress] = useState(false);
  const [signupInProgress, setSignupInProgress] = useState(false);
  const [termsAgree, setTermsAgree] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [userResponse, setUserResponse] = useState(null);
  const [mobileNo, setMobileNo] = useState(null);

  const linkPath = path?.path || path || {};
  const link = linkPath?.linkPrefix || "";
  const isUK = Boolean(linkPath?.isUK);

  let region = link ? link.replace("/", "") : "gl";
  if (region) {
    region = region.toUpperCase();
  }

  useEffect(() => {
    if (typeof window !== "undefined" && typeof setGiddhRegion === "function") {
      setGiddhRegion(region.toLowerCase());
    }
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
    setMrnNumber("");
    setTermsAgree(false);
    setEmailDetails({
      email: response.email,
      accessToken: response.accessToken,
      isVerified: true,
      signupVia: "google",
    });
    setShowEmailOtp(false);
    setShowMobileOtp(false);
    updateCurrentStep(2);
    setInputValue("email", response.email);
    setInputValue("mobileNo", "");
    setInputValue("mrnNumber", "");
  }


  function getCaSourceParam() {
    var sourceStr = getSourceParam();
    var sourceObj = sourceStr ? JSON.parse(sourceStr) : {};

    if (mrnNumber && mrnNumber.trim()) {
      sourceObj.mrnNumber = mrnNumber.trim();
      if (typeof setLocalStorage === "function") {
        setLocalStorage("source", sourceObj);
      }
      var giddhQuery =
        typeof getCookie === "function" && getCookie("giddh_query")
          ? JSON.parse(getCookie("giddh_query"))
          : {};
      giddhQuery.source = {
        ...giddhQuery.source,
        mrnNumber: mrnNumber.trim(),
      };
      if (typeof setCookie === "function") {
        setCookie("giddh_query", JSON.stringify(giddhQuery), 30);
      }
    }

    if (Object.keys(sourceObj).length > 0) {
      return JSON.stringify(sourceObj);
    }
    return "";
  }

  async function initiateSignup() {
    if (!mrnNumber || !mrnNumber.trim()) {
      showToaster("Please enter Membership Registration Number (MRN)", "error", "top-center");
      return;
    }

    if (emailDetails?.isVerified && mobileDetails?.isVerified) {
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
                "Your Chartered Accountant account has been created successfully.",
                "success",
                "top-center"
              );
              if (typeof setGiddhRegionSession === "function") {
                setGiddhRegionSession(response.body.session.id, region);
              }

              var utmParams =
                "&utm_source=" +
                (typeof getLocalStorage === "function" ? getLocalStorage("utm_source") || "" : "") +
                "&utm_medium=" +
                (typeof getLocalStorage === "function" ? getLocalStorage("utm_medium") || "" : "") +
                "&utm_campaign=" +
                (typeof getLocalStorage === "function" ? getLocalStorage("utm_campaign") || "" : "") +
                "&utm_term=" +
                (typeof getLocalStorage === "function" ? getLocalStorage("utm_term") || "" : "") +
                "&utm_content=" +
                (typeof getLocalStorage === "function" ? getLocalStorage("utm_content") || "" : "") +
                "&ref=" +
                (typeof getLocalStorage === "function" ? getLocalStorage("ref") || "" : "") +
                "&source=" +
                getCaSourceParam() +
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
    } else if (!emailDetails?.isVerified && !mobileDetails?.isVerified) {
      if (
        document.getElementById("email")?.value &&
        document.getElementById("mobileNo")?.value
      ) {
        sendEmailOtp();
        setTimeout(() => {
          sendMobileOtp();
        }, 3000);
      } else {
        showToaster("Please verify email and mobile", "error", "top-center");
      }
    } else if (!emailDetails?.isVerified && mobileDetails?.isVerified) {
      showToaster("Please verify email", "error", "top-center");
    } else if (emailDetails?.isVerified && !mobileDetails?.isVerified) {
      showToaster("Please verify mobile", "error", "top-center");
    }
  }


  function initOtpSignup() {
    var userData = typeof getLocalStorage === "function" ? getLocalStorage("userData") : null;
    if (userData) {
      if (userData.user?.email) {
        setEmailDetails({
          email: userData.user.email,
          accessToken: userData.accessToken,
          isVerified: true,
          signupVia: userData.signupVia,
        });
        setShowEmailOtp(false);
        updateCurrentStep(2);
        setInputValue("email", userData.user.email);
      } else if (userData.user?.mobileNo) {
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

    if (typeof addOtpWidgetScript === "function") {
      addOtpWidgetScript(true, false, () => {
        setTimeout(() => {
          getWidgetData();
        }, 2000);
      });
    }
  }

  function resetEverything() {
    if (typeof removeLocalStorage === "function") {
      removeLocalStorage("userData");
    }
    setMrnNumber("");
    setTermsAgree(false);
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
    setInputValue("mrnNumber", "");
  }

  function handleBack() {
    setMrnNumber("");
    setTermsAgree(false);
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
    setInputValue("email", "");
    setInputValue("mobileNo", "");
    setInputValue("mrnNumber", "");
    updateCurrentStep(1);
  }

  function setShowEmailOtpSection(showOtp) {
    setShowEmailOtp(showOtp);
    if (!showOtp) {
      setEmailDetails({
        email: "",
        accessToken: "",
        isVerified: false,
        signupVia: "",
        requestId: "",
      });
      setInputValue("email", "");
    }
  }

  function setShowMobileOtpSection(showOtp) {
    setShowMobileOtp(showOtp);
    if (!showOtp) {
      setMobileDetails({
        mobileNo: "",
        accessToken: "",
        isVerified: false,
        signupVia: "",
        requestId: "",
      });
      setInputValue("mobileNo", "");
      setMobileNo("");
    }
  }

  function getWidgetData() {
    var channels = getWidgetChannels();
    if (channels) {
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
    clearOtpFields(".email-otp-field");
  }

  function resetMobileOtp() {
    mobileDetails.isVerified = false;
    mobileDetails.accessToken = "";
    setMobileDetails(mobileDetails);
    clearOtpFields(".mobile-otp-field");
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
      otp = getOtpFromFields(".email-otp-field");

      if (!otp) {
        showToaster("Please enter OTP!", "error", "top-center");
        return;
      }

      setEmailVerifyOtpInProgress(true);
      requestId = emailDetails.requestId;
    } else {
      otp = getOtpFromFields(".mobile-otp-field");

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
    handleSignupError(error, setSignupInProgress);
  }

  function updateCurrentStep(step) {
    handleStepUpdate(step, setCurrentStep, loadTelLibrary);
  }

  function onKeyDownEmail(event) {
    handleKeyDownEnter(event, sendEmailOtp);
  }

  function onKeyDownMobile(event) {
    handleKeyDownEnter(event, sendMobileOtp);
  }

  function inputMobile(event) {
    if (event) {
      displayEnterNumber();
    }
  }

  function displayEnterNumber() {
    handleDisplayMobileNumber(intlRef, setMobileNo);
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

    const intlInstance = window.intlTelInput(input, {
      nationalMode: true,
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
      autoHideDialCode: false,
      separateDialCode: false,
      initialCountry: "in",
    });

    input.dataset.intlTelInitialized = "true";
    intlRef = intlInstance;
    setIntl(intlInstance);
    displayEnterNumber();
    input.addEventListener("countrychange", displayEnterNumber);
  }

  function otpVerifyCallback(response) {
    handleOtpVerifyRedirect(response, region);
  }

  const caFeatures = [
    {
      icon: <MdOutlineDashboard className="font-primary fs-2 mb-3" />,
      title: "Multi-Company Management",
      description:
        "Create and manage multiple client companies from a single account. Easily switch between company books without multiple logins.",
    },
    {
      icon: <MdOutlineFactCheck className="font-primary fs-2 mb-3" />,
      title: "GST Return Filing & Compliance",
      description:
        "Generate and file GSTR-1 and GSTR-3B directly from Giddh with automated tax calculations, multi-state GSTIN support, and e-Invoicing.",
    },
    {
      icon: <MdOutlineAccountBalance className="font-primary fs-2 mb-3" />,
      title: "Bank Integration & Reconciliation",
      description:
        "Connect bank accounts or import statements (CSV/Excel). Reconcile transactions faster with smart matching and ledger syncing.",
    },
    {
      icon: <MdOutlineGroups className="font-primary fs-2 mb-3" />,
      title: "Multi-User Collaboration & Roles",
      description:
        "Invite your team, article assistants, and clients with custom role-based permissions to control access to accounts, ledgers, and reports.",
    },
    {
      icon: <MdOutlineSecurity className="font-primary fs-2 mb-3" />,
      title: "Financial Reports & Audit History",
      description:
        "Access real-time Trial Balance, Balance Sheet, and P&L. Drill down to voucher level with detailed audit history and export to Excel/PDF.",
    },
    {
      icon: <MdOutlineSpeed className="font-primary fs-2 mb-3" />,
      title: "Inventory, Multi-Branch & Multi-Currency",
      description:
        "Manage stock valuation and inventory across multiple branches, with built-in accounting support for 100+ global currencies.",
    },
  ];

  return (
    <>
      <Head>
        <title>Giddh for Chartered Accountants & CPAs | Cloud Practice Management</title>
        <meta
          name="description"
          content="Empower your CA practice with Giddh. Centralized multi-client management, automated bank reconciliation, and direct GST compliance for Chartered Accountants."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/css/intlTelInput.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js"></script>
      </Head>

      <div className="outfit-font bg-white">
        <section className="py-5 bg-light">
          <div className="container py-lg-4">
            <div className="row align-items-center justify-content-between g-5">
              <div className="col-lg-6 col-12">
                <div className="mb-4">
                  <a href={link === "" ? "/" : link}>
                    <Image
                      src="/img/giddh-logo.svg"
                      alt="Giddh Logo"
                      width={120}
                      height={28}
                      priority
                    />
                  </a>
                </div>
                <div className="d-inline-flex align-items-center mb-3">
                  <span className="badge rounded-pill bg-white font-primary border font-xs font-600 py-2 px-3">
                    GIDDH FOR CHARTERED ACCOUNTANTS
                  </span>
                </div>

                <h1 className="font-heading font-dark mb-4">
                  Empower Your Practice with Giddh for Chartered Accountants
                </h1>

                <p className="font-md font-slate-grey mb-4">
                  Manage multiple clients from a single dashboard, automate bookkeeping,
                  streamline GST compliance, and collaborate in real-time with your
                  team and clients.
                </p>

                <div className="row g-3 mb-4">
                  <div className="col-sm-6 d-flex align-items-center gap-2">
                    <MdCheckCircle className="font-success fs-5 flex-shrink-0" />
                    <span className="font-sm font-600 font-dark">Multi-Company Management</span>
                  </div>
                  <div className="col-sm-6 d-flex align-items-center gap-2">
                    <MdCheckCircle className="font-success fs-5 flex-shrink-0" />
                    <span className="font-sm font-600 font-dark">GST Return Filing & Invoicing</span>
                  </div>
                  <div className="col-sm-6 d-flex align-items-center gap-2">
                    <MdCheckCircle className="font-success fs-5 flex-shrink-0" />
                    <span className="font-sm font-600 font-dark">Bank Sync & Reconciliation</span>
                  </div>
                  <div className="col-sm-6 d-flex align-items-center gap-2">
                    <MdCheckCircle className="font-success fs-5 flex-shrink-0" />
                    <span className="font-sm font-600 font-dark">Real-Time Reports & Audit Trail</span>
                  </div>
                  <div className="col-sm-6 d-flex align-items-center gap-2">
                    <MdCheckCircle className="font-success fs-5 flex-shrink-0" />
                    <span className="font-sm font-600 font-dark">Comparative Financial Analysis</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top d-flex align-items-center gap-2 font-slate-grey font-sm">
                  <span>🔒 Bank-grade 256-bit encryption</span>
                  <span>•</span>
                  <span>Unlimited client organizations</span>
                  <span>•</span>
                  <span>Zero setup fees</span>
                </div>
              </div>

              <div className="col-lg-5 col-12" id="signup-card">
                <div className="card border rounded-4 p-4 p-lg-4 shadow-sm bg-white">
                  {currentStep === 1 && (
                    <div>
                      <div className="mb-3 pb-2 border-bottom">
                        <h2 className="font-lg font-600 font-dark mb-1">
                          Create your CA Account
                        </h2>
                        <p className="font-slate-grey font-sm mb-0">
                          Get started with unlimited client management.
                        </p>
                      </div>

                      <div className="google-btn-wrapper mb-3">
                        <GoogleLogin
                          googleApiSuccessCallback={googleApiSuccessCallback}
                        />
                      </div>

                      <div className="position-relative my-3 text-center">
                        <hr className="m-0" />
                        <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 font-xs font-slate-grey">
                          or sign up with email
                        </span>
                      </div>

                      <button
                        type="button"
                        className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 shadow-sm mb-3 py-2 font-600 font-sm"
                        onClick={() => resetEverything()}
                      >
                        <span>Continue with Email</span>
                        <MdArrowForward className="fs-5" />
                      </button>

                      <div className="pt-3 border-top text-center">
                        <p className="font-sm font-slate-grey mb-0">
                          Already have an account?{" "}
                          <a href={link + "/login"} className="font-primary font-600 text-decoration-none">
                            Sign In
                          </a>
                        </p>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div>
                      <div className="mb-3 pb-2 border-bottom">
                        <h2 className="font-lg font-600 font-dark mb-0">
                          Create your CA account
                        </h2>
                      </div>

                      <div className="mb-3 pb-1">
                        <label htmlFor="mrnNumber" className="form-label font-sm font-600 font-dark mb-1">
                          Membership Registration Number (MRN) <span className="font-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control font-sm"
                          id="mrnNumber"
                          name="mrnNumber"
                          placeholder="e.g. 123456"
                          autoComplete="off"
                          required
                          value={mrnNumber}
                          onChange={(e) => setMrnNumber(e.target.value)}
                        />
                      </div>

                      <div className="mb-3 pb-1">
                        <label htmlFor="email" className="form-label font-sm font-600 font-dark mb-1">
                          Email Address <span className="font-danger">*</span>
                        </label>
                        <div className="d-flex gap-2">
                          <div className="flex-grow-1 min-w-0">
                            <input
                              type="email"
                              className={`form-control font-sm w-100 ${emailDetails?.isVerified ? "border-success bg-light" : ""}`}
                              id="email"
                              name="email"
                              placeholder="ca.name@firm.com"
                              autoComplete="off"
                              onKeyDown={onKeyDownEmail}
                              disabled={showEmailOtp || (emailDetails && emailDetails.isVerified)}
                              autoFocus={!showEmailOtp && (!emailDetails || !emailDetails.isVerified)}
                            />
                          </div>
                          {emailDetails?.isVerified ? (
                            <div className="d-flex align-items-center gap-2">
                              <div className="badge bg-light font-success border border-success font-sm font-600 px-2 py-2 d-flex align-items-center justify-content-center">
                                <MdCheckCircle className="fs-5 me-1 font-success" /> Verified
                              </div>
                              <button
                                className="btn btn-outline-secondary font-sm font-600 px-3"
                                onClick={() => setShowEmailOtpSection(false)}
                                type="button"
                              >
                                Change
                              </button>
                            </div>
                          ) : !showEmailOtp ? (
                            <button
                              className="btn btn-primary-outline font-sm font-600 px-3"
                              onClick={sendEmailOtp}
                              disabled={emailGetOtpInProgress}
                              type="button"
                            >
                              {emailGetOtpInProgress ? "Sending..." : "Verify Email"}
                            </button>
                          ) : (
                            <button
                              className="btn btn-outline-secondary font-sm font-600 px-3"
                              onClick={() => setShowEmailOtpSection(false)}
                              disabled={emailGetOtpInProgress}
                              type="button"
                            >
                              Change Email
                            </button>
                          )}
                        </div>

                        {showEmailOtp && (!emailDetails || !emailDetails.isVerified) && (
                          <div className="mt-2 p-3 bg-light rounded-3 border">
                            <div className="font-sm font-slate-grey mb-2 font-500">Enter 4-digit code sent to your email:</div>
                            <div className="d-flex gap-2 align-items-center">
                              <input type="tel" className="form-control text-center font-600 p-0 otp_input email-otp-field" maxLength="1" id="emailOtpField1" autoFocus={true} />
                              <input type="tel" className="form-control text-center font-600 p-0 otp_input email-otp-field" maxLength="1" id="emailOtpField2" />
                              <input type="tel" className="form-control text-center font-600 p-0 otp_input email-otp-field" maxLength="1" id="emailOtpField3" />
                              <input type="tel" className="form-control text-center font-600 p-0 otp_input email-otp-field" maxLength="1" id="emailOtpField4" />
                              <button
                                id="verify-email-button"
                                className="btn btn-primary font-sm font-600 px-3"
                                onClick={() => verifyOtp("email")}
                                disabled={emailVerifyOtpInProgress}
                                type="button"
                              >
                                {emailVerifyOtpInProgress ? "Verifying..." : "Verify OTP"}
                              </button>
                            </div>
                            <div className="mt-2 font-sm">
                              <span className="font-primary font-600 cursor-pointer" onClick={() => retrySendOtp(3)}>
                                Resend OTP
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="mb-3 pb-1">
                        <label htmlFor="mobileNo" className="form-label font-sm font-600 font-dark mb-1">
                          Mobile Number <span className="font-danger">*</span>
                        </label>
                        <div className="d-flex gap-2">
                          <div className="flex-grow-1 min-w-0">
                            <input
                              type="tel"
                              className={`form-control font-sm w-100 ${mobileDetails?.isVerified ? "border-success bg-light" : ""}`}
                              id="mobileNo"
                              placeholder="Enter mobile number"
                              autoComplete="off"
                              onKeyDown={onKeyDownMobile}
                              onChange={inputMobile}
                              disabled={showMobileOtp || (mobileDetails && mobileDetails.isVerified)}
                            />
                          </div>
                          {mobileDetails?.isVerified ? (
                            <div className="d-flex align-items-center gap-2">
                              <div className="badge bg-light font-success border border-success font-sm font-600 px-2 py-2 d-flex align-items-center justify-content-center">
                                <MdCheckCircle className="fs-5 me-1 font-success" /> Verified
                              </div>
                              <button
                                className="btn btn-outline-secondary font-sm font-600 px-3"
                                onClick={() => setShowMobileOtpSection(false)}
                                type="button"
                              >
                                Change
                              </button>
                            </div>
                          ) : !showMobileOtp ? (
                            <button
                              className="btn btn-primary-outline font-sm font-600 px-3"
                              onClick={sendMobileOtp}
                              disabled={mobileGetOtpInProgress}
                              type="button"
                            >
                              {mobileGetOtpInProgress ? "Sending..." : "Verify number"}
                            </button>
                          ) : (
                            <button
                              className="btn btn-outline-secondary font-sm font-600 px-3"
                              onClick={() => setShowMobileOtpSection(false)}
                              disabled={mobileGetOtpInProgress}
                              type="button"
                            >
                              Change Mobile
                            </button>
                          )}
                        </div>

                        {showMobileOtp && (!mobileDetails || !mobileDetails.isVerified) && (
                          <div className="mt-2 p-3 bg-light rounded-3 border">
                            <div className="font-sm font-slate-grey mb-2 font-500">Enter 4-digit code sent via SMS:</div>
                            <div className="d-flex gap-2 align-items-center">
                              <input type="tel" className="form-control text-center font-600 p-0 otp_input mobile-otp-field" maxLength="1" id="mobileOtpField1" autoFocus={true} />
                              <input type="tel" className="form-control text-center font-600 p-0 otp_input mobile-otp-field" maxLength="1" id="mobileOtpField2" />
                              <input type="tel" className="form-control text-center font-600 p-0 otp_input mobile-otp-field" maxLength="1" id="mobileOtpField3" />
                              <input type="tel" className="form-control text-center font-600 p-0 otp_input mobile-otp-field" maxLength="1" id="mobileOtpField4" />
                              <button
                                id="verify-mobile-button"
                                className="btn btn-primary font-sm font-600 px-3"
                                onClick={() => verifyOtp("mobile")}
                                disabled={mobileVerifyOtpInProgress}
                                type="button"
                              >
                                {mobileVerifyOtpInProgress ? "Verifying..." : "Verify OTP"}
                              </button>
                            </div>
                            {connectedChannels && (
                              <div className="mt-2 font-sm font-slate-grey">
                                Resend on{" "}
                                {connectedChannels.map((item, index) => (
                                  <span key={item.value}>
                                    <span
                                      className="font-primary font-600 cursor-pointer"
                                      onClick={() => retrySendOtp(item.value)}
                                    >
                                      {item.name}
                                    </span>
                                    {connectedChannels.length > index + 1 && " or "}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <p className="font-xs font-slate-grey mb-2">
                        Your data will be stored in INDIA data center.
                      </p>

                      <div className="mb-3">
                        <div className="form-check d-flex align-items-start gap-2">
                          <input
                            className="form-check-input mt-1"
                            type="checkbox"
                            id="agreeCheckBox"
                            checked={termsAgree}
                            onChange={() => setTermsAgree(!termsAgree)}
                          />
                          <label className="form-check-label font-xs font-slate-grey line-height-24" htmlFor="agreeCheckBox">
                            I agree to receive verification OTP & Alerts and accept the{" "}
                            <a href="https://giddh.com/terms" target="_blank" rel="noopener noreferrer" className="text-decoration-none font-primary">Terms of Service</a>
                            {" "}and{" "}
                            <a href="https://giddh.com/privacy" target="_blank" rel="noopener noreferrer" className="text-decoration-none font-primary">Privacy Policy</a>.
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-2 pt-3 mt-2 border-top">
                        <button
                          className="btn btn-outline-secondary font-sm font-600 px-3 d-flex align-items-center justify-content-center gap-1"
                          onClick={() => handleBack()}
                          type="button"
                        >
                          <MdKeyboardArrowLeft className="fs-5" /> Back
                        </button>
                        <button
                          className="btn btn-primary flex-grow-1 shadow-sm d-flex align-items-center justify-content-center py-2 font-600 font-sm"
                          onClick={() => initiateSignup()}
                          disabled={signupInProgress || !termsAgree}
                          type="button"
                        >
                          {signupInProgress ? (
                            <div className="spinner-border spinner-border-sm text-white" role="status" />
                          ) : (
                            "Complete CA Registration"
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Stats stats={homeData?.stats} />

        <section className="py-5">
          <div className="container py-lg-4">
            <div className="text-center max-w-700 mx-auto mb-5">
              <span className="badge rounded-pill bg-light font-primary border font-xs font-600 py-2 px-3">
                CORE CAPABILITIES
              </span>
              <h2 className="font-heading mt-3 mb-3 font-dark">
                Everything You Need to Manage Client Accounting
              </h2>
              <p className="font-slate-grey font-md">
                Streamline bookkeeping, simplify GST compliance, and collaborate seamlessly
                with your clients and team on Giddh.
              </p>
            </div>

            <div className="row g-4">
              {caFeatures.map((feature, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="card border rounded-4 p-4 h-100 bg-white shadow-sm">
                    <div>{feature.icon}</div>
                    <h3 className="font-md font-600 mb-2 font-dark">
                      {feature.title}
                    </h3>
                    <p className="font-slate-grey font-sm mb-0">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        <Footer />
      </div>
    </>
  );
}