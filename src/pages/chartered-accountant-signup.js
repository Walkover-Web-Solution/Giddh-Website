import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import Footer from "@/components/NewComps/Footer";
import Stats from "@/components/NewComps/Stats";
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
  const [googleApiInProgress, setGoogleApiInProgress] = useState(false);
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

    const handleGoogleMessage = (event) => {
      if (event.data && event.data.origin === "giddh" && event.data.accessToken) {
        getGoogleUserDetails(event.data.accessToken);
      }
    };
    window.addEventListener("message", handleGoogleMessage);
    return () => {
      window.removeEventListener("message", handleGoogleMessage);
    };
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

  function initGoogleSignup() {
    const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const GOOGLE_REDIRECT_URI = (process.env.NEXT_PUBLIC_SITE_URL || "https://giddh.com") + "/googleauth";
    const width = 600;
    const height = 500;
    const left = screen.width / 2 - width / 2;
    const top = screen.height / 2 - height / 2;
    window.open(
      "https://accounts.google.com/o/oauth2/auth?response_type=token&client_id=" +
      GOOGLE_CLIENT_ID +
      "&redirect_uri=" +
      GOOGLE_REDIRECT_URI +
      "&state&scope=email%20profile&approval_prompt=force",
      "Giddh - Google Login",
      "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
      width +
      ", height=" +
      height +
      ", top=" +
      top +
      ", left=" +
      left
    );
  }

  async function getGoogleUserDetails(accessToken) {
    setGoogleApiInProgress(true);
    try {
      const res = await fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: "Bearer " + accessToken,
        },
      });
      const data = await res.json();
      data.accessToken = accessToken;
      setGoogleApiInProgress(false);
      googleApiSuccessCallback(data);
    } catch (err) {
      setGoogleApiInProgress(false);
      showToaster("Google authentication failed. Please try again.", "error", "top-center");
    }
  }

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

  function getSourceParam() {
    var sourceData = typeof getLocalStorage === "function" ? getLocalStorage("source") : null;
    var sourceObj = {};

    if (sourceData) {
      if (typeof sourceData === "object") {
        sourceObj = { ...sourceData };
      } else {
        try {
          sourceObj = JSON.parse(sourceData);
        } catch (e) {
          sourceObj = { source: sourceData };
        }
      }
    } else if (typeof window !== "undefined" && window.location.search) {
      const searchParams = new URLSearchParams(window.location.search);
      const standardKeys = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "ref",
        "region",
      ];
      searchParams.forEach((value, key) => {
        if (!standardKeys.includes(key) && value) {
          sourceObj[key] = value;
        }
      });
    }

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
                getSourceParam() +
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
      setEmailDetails((prev) => ({
        ...prev,
        email: "",
        isVerified: false,
        requestId: "",
      }));
    }
  }

  function setShowMobileOtpSection(showOtp) {
    setShowMobileOtp(showOtp);
    if (!showOtp) {
      setMobileDetails((prev) => ({
        ...prev,
        mobileNo: "",
        isVerified: false,
        requestId: "",
      }));
    }
  }

  function getWidgetData() {
    if (typeof window !== "undefined" && typeof window.getWidgetData === "function") {
      var widgetData = window.getWidgetData();
      if (widgetData && widgetData.processes) {
        var channels = [];
        widgetData.processes.forEach((process) => {
          if (process.channel?.value != "3") {
            if (!channels[process.channel.value]) {
              channels[process.channel.value] = [];
            }
            channels[process.channel.value] = process.channel;
          }
        });
        setConnectedChannels(channels);
      }
    }
  }

  function sendEmailOtp() {
    const emailInput = document.getElementById("email");
    if (
      !emailInput?.value ||
      !emailInput.value.trim() ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailInput.value)
    ) {
      showToaster("Please enter valid email!", "error", "top-center");
      return;
    }

    setEmailGetOtpInProgress(true);

    if (typeof window.sendOtp === "function") {
      window.sendOtp(
        emailInput.value,
        (data) => {
          emailOtpSentCallback(data);
        },
        (error) => {
          emailOtpFailedCallback(error);
        }
      );
    } else {
      setEmailGetOtpInProgress(false);
      showToaster("OTP service is initializing. Please try again in a few seconds.", "error", "top-center");
    }
  }

  function sendMobileOtp() {
    if (!intl) {
      showToaster("Please enter valid mobile number!", "error", "top-center");
      return;
    }
    var currentMobileNo = formatMobileNumber(intl.getNumber());
    if (!currentMobileNo) {
      showToaster("Please enter valid mobile number!", "error", "top-center");
      return;
    }

    setMobileGetOtpInProgress(true);

    if (typeof window.sendOtp === "function") {
      window.sendOtp(
        currentMobileNo,
        (data) => {
          mobileOtpSentCallback(data);
        },
        (error) => {
          mobileOtpFailedCallback(error);
        }
      );
    } else {
      setMobileGetOtpInProgress(false);
      showToaster("OTP service is initializing. Please try again in a few seconds.", "error", "top-center");
    }
  }

  function formatMobileNumber(number) {
    return String(number).replace("+", "").trim();
  }

  function emailOtpSentCallback(data) {
    setEmailGetOtpInProgress(false);
    showToaster("OTP sent successfully to your email.", "success", "top-center");
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
    showToaster("OTP sent successfully to your mobile.", "success", "top-center");
    var currentMobileNo = formatMobileNumber(intl.getNumber());

    setMobileDetails({
      mobileNo: currentMobileNo,
      accessToken: "",
      isVerified: false,
      signupVia: "giddh",
      requestId: data.message,
    });
    setShowMobileOtpSection(true);
  }

  function emailOtpFailedCallback(error) {
    setEmailGetOtpInProgress(false);
    showToaster(error?.message || "Failed to send OTP", "error", "top-center");
    setShowEmailOtpSection(false);
    setEmailDetails((prev) => ({ ...prev, requestId: "" }));
  }

  function mobileOtpFailedCallback(error) {
    setMobileGetOtpInProgress(false);
    showToaster(error?.message || "Failed to send OTP", "error", "top-center");
    setShowMobileOtpSection(false);
    setMobileDetails((prev) => ({ ...prev, requestId: "" }));
  }

  function resetEmailOtp() {
    setEmailDetails((prev) => ({ ...prev, isVerified: false, accessToken: "" }));
    document.querySelectorAll(".email-otp-field").forEach((field) => {
      field.value = "";
    });
  }

  function resetMobileOtp() {
    setMobileDetails((prev) => ({ ...prev, isVerified: false, accessToken: "" }));
    document.querySelectorAll(".mobile-otp-field").forEach((field) => {
      field.value = "";
    });
  }

  function retrySendOtp(channel) {
    var requestId = "";
    if (channel == 3) {
      resetEmailOtp();
      setEmailGetOtpInProgress(true);
      requestId = emailDetails?.requestId;
    } else {
      resetMobileOtp();
      setMobileGetOtpInProgress(true);
      requestId = mobileDetails?.requestId;
    }
    if (typeof window.retryOtp === "function") {
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
    showToaster(error?.message || "Failed to resend OTP", "error", "top-center");
    if (channel == 3) {
      setEmailGetOtpInProgress(false);
    } else {
      setMobileGetOtpInProgress(false);
    }
  }

  function verifyOtp(type) {
    var otpVal = "";
    var requestId = "";

    if (type == "email") {
      document.querySelectorAll(".email-otp-field").forEach(function (field) {
        otpVal += field.value;
      });

      if (!otpVal) {
        showToaster("Please enter OTP!", "error", "top-center");
        return;
      }

      setEmailVerifyOtpInProgress(true);
      requestId = emailDetails?.requestId;
    } else {
      document.querySelectorAll(".mobile-otp-field").forEach(function (field) {
        otpVal += field.value;
      });

      if (!otpVal) {
        showToaster("Please enter OTP!", "error", "top-center");
        return;
      }

      setMobileVerifyOtpInProgress(true);
      requestId = mobileDetails?.requestId;
    }

    if (typeof window.verifyOtp === "function") {
      window.verifyOtp(
        otpVal,
        (data) => {
          verifyOtpSuccessCallback(type, data);
        },
        (error) => {
          verifyOtpErrorCallback(type, error);
        },
        requestId
      );
    }
  }

  function verifyOtpSuccessCallback(type, data) {
    showToaster("OTP verified successfully.", "success", "top-center");
    if (type == "email") {
      setEmailVerifyOtpInProgress(false);
      setEmailDetails((prev) => ({ ...prev, isVerified: true, accessToken: data.message }));
    } else {
      setMobileVerifyOtpInProgress(false);
      setMobileDetails((prev) => ({ ...prev, isVerified: true, accessToken: data.message }));
    }
  }

  function verifyOtpErrorCallback(type, error) {
    showToaster(error?.message || "OTP Verification failed", "error", "top-center");
    if (type == "email") {
      setEmailVerifyOtpInProgress(false);
      setEmailDetails((prev) => ({ ...prev, isVerified: false, accessToken: "" }));
    } else {
      setMobileVerifyOtpInProgress(false);
      setMobileDetails((prev) => ({ ...prev, isVerified: false, accessToken: "" }));
    }
  }

  function signupErrorCallback(error) {
    setSignupInProgress(false);
    showToaster(error?.message || "Error creating account", "error", "top-center");
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

      if (charInputs.length > 0 && !charInputs[0].dataset.pasteHandlerAttached) {
        charInputs[0].addEventListener("paste", (e) => {
          e.preventDefault();
          const pastedData = e.clipboardData.getData("text").trim();
          if (pastedData && /^\d+$/.test(pastedData)) {
            const pastedChars = pastedData.split("");
            for (let i = 0; i < Math.min(pastedChars.length, charInputs.length); i++) {
              charInputs[i].value = pastedChars[i];
            }
            if (pastedChars.length < charInputs.length) {
              charInputs[pastedChars.length].focus();
            } else {
              if (selector === ".email-otp-field") {
                document.getElementById("verify-email-button")?.focus();
              } else if (selector === ".mobile-otp-field") {
                document.getElementById("verify-mobile-button")?.focus();
              }
            }
          }
        });
        charInputs[0].dataset.pasteHandlerAttached = "true";
      }

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
              if (selector === ".email-otp-field") {
                document.getElementById("verify-email-button")?.focus();
              } else if (selector === ".mobile-otp-field") {
                document.getElementById("verify-mobile-button")?.focus();
              }
            }
          }
        });

        input.addEventListener("keydown", (e) => {
          if (e.key === "Backspace" && input.value.length === 0 && index > 0) {
            e.preventDefault();
            charInputs[index - 1].focus();
          }
        });

        input.addEventListener("paste", (e) => {
          if (index === 0) return;
          e.preventDefault();
          const pastedData = e.clipboardData.getData("text").trim();
          if (pastedData && /^\d+$/.test(pastedData)) {
            const pastedChars = pastedData.split("");
            for (let i = 0; i < Math.min(pastedChars.length, charInputs.length - index); i++) {
              charInputs[index + i].value = pastedChars[i];
            }
            if (pastedChars.length < charInputs.length - index) {
              charInputs[index + pastedChars.length].focus();
            } else {
              if (selector === ".email-otp-field") {
                document.getElementById("verify-email-button")?.focus();
              } else if (selector === ".mobile-otp-field") {
                document.getElementById("verify-mobile-button")?.focus();
              }
            }
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
    if (typeof setGiddhRegionSession === "function") {
      setGiddhRegionSession(response.session.id, region);
    }
    window.location =
      process.env.NEXT_PUBLIC_APP_URL +
      "/token-verify?request=" +
      response.session.id +
      "&region=" +
      region;
  }

  const statsData = {
    heading: "Our Commitment Backed by Data",
    stats: [
      {
        value: "4.8/5",
        label: "Average User Rating",
      },
      {
        value: "85%",
        label: "Improvement in Financial Visibility",
      },
      {
        value: "100%",
        label: "Data Security & Uptime Guarantee",
      },
    ],
  };

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
        <section
          className="py-5"
          style={{
            background: "linear-gradient(180deg, #f8fbfe 0%, #ffffff 100%)",
          }}
        >
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
                  <span
                    className="px-3 py-1 rounded-pill"
                    style={{
                      backgroundColor: "#e2f0ff",
                      color: "#1e75ba",
                      fontSize: "13px",
                      fontWeight: "700",
                      letterSpacing: "0.5px",
                    }}
                  >
                    GIDDH FOR CHARTERED ACCOUNTANTS
                  </span>
                </div>

                <h1
                  className="garmond-font mb-4"
                  style={{
                    fontSize: "calc(1.8rem + 1.2vw)",
                    lineHeight: "1.2",
                    color: "#1c2a38",
                    fontWeight: "700",
                  }}
                >
                  Empower Your Practice with Giddh for Chartered Accountants
                </h1>

                <p
                  className="lead text-secondary mb-4"
                  style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
                >
                  Manage multiple clients from a single dashboard, automate bookkeeping,
                  streamline GST compliance, and collaborate in real-time with your
                  team and clients.
                </p>

                <div className="row g-3 mb-4">
                  <div className="col-sm-6 d-flex align-items-center gap-2">
                    <MdCheckCircle className="text-success fs-5 flex-shrink-0" />
                    <span className="font-sm font-600">Multi-Company Management</span>
                  </div>
                  <div className="col-sm-6 d-flex align-items-center gap-2">
                    <MdCheckCircle className="text-success fs-5 flex-shrink-0" />
                    <span className="font-sm font-600">GST Return Filing & Invoicing</span>
                  </div>
                  <div className="col-sm-6 d-flex align-items-center gap-2">
                    <MdCheckCircle className="text-success fs-5 flex-shrink-0" />
                    <span className="font-sm font-600">Bank Sync & Reconciliation</span>
                  </div>
                  <div className="col-sm-6 d-flex align-items-center gap-2">
                    <MdCheckCircle className="text-success fs-5 flex-shrink-0" />
                    <span className="font-sm font-600">Real-Time Reports & Audit Trail</span>
                  </div>
                  <div className="col-sm-6 d-flex align-items-center gap-2">
                    <MdCheckCircle className="text-success fs-5 flex-shrink-0" />
                    <span className="font-sm font-600">Comparative Financial Analysis</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top d-flex align-items-center gap-2 text-muted font-sm">
                  <span>🔒 Bank-grade 256-bit encryption</span>
                  <span>•</span>
                  <span>Unlimited client organizations</span>
                  <span>•</span>
                  <span>Zero setup fees</span>
                </div>
              </div>

              <div className="col-lg-5 col-12" id="signup-card">
                <div
                  className="p-4 p-md-4 rounded-4 bg-white"
                  style={{
                    boxShadow: "0 16px 36px -12px rgba(16, 24, 40, 0.08), 0 1px 3px rgba(16, 24, 40, 0.05)",
                    border: "1px solid #e2e8f0",
                    paddingTop: "28px",
                    paddingBottom: "28px",
                  }}
                >
                  {currentStep === 1 && (
                    <div>
                      <div className="mb-3 pb-2 border-bottom">
                        <h2 className="h5 font-700 mb-1" style={{ color: "#1e293b", letterSpacing: "-0.3px" }}>
                          Create your CA Account
                        </h2>
                        <p className="text-muted font-sm mb-0" style={{ fontSize: "13px" }}>
                          Get started with unlimited client management.
                        </p>
                      </div>

                      <div className="mb-3">
                        <button
                          type="button"
                          className="w-100 py-2 px-3 d-flex align-items-center justify-content-center gap-2 border rounded-3 bg-white font-600 transition"
                          style={{
                            height: "46px",
                            fontSize: "14.5px",
                            color: "#334155",
                            borderColor: "#cbd5e1",
                            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
                            cursor: "pointer",
                          }}
                          onClick={initGoogleSignup}
                          disabled={googleApiInProgress}
                        >
                          {googleApiInProgress ? (
                            <div className="spinner-border spinner-border-sm text-primary" role="status" />
                          ) : (
                            <>
                              <Image src="/img/google-logo.svg" width={18} height={18} alt="Google" />
                              <span>Continue with Google</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="position-relative my-3 text-center">
                        <hr style={{ borderColor: "#e2e8f0", margin: 0 }} />
                        <span
                          className="position-absolute top-50 start-50 translate-middle bg-white px-3 font-sm text-muted"
                          style={{ fontSize: "12.5px" }}
                        >
                          or sign up with email
                        </span>
                      </div>

                      <button
                        type="button"
                        className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 font-600 rounded-3 shadow-sm mb-3"
                        style={{ height: "46px", fontSize: "14.5px" }}
                        onClick={() => resetEverything()}
                      >
                        <span>Continue with Email</span>
                        <MdArrowForward className="fs-5" />
                      </button>

                      <div className="pt-3 border-top text-center">
                        <p className="font-sm text-muted mb-0" style={{ fontSize: "13px" }}>
                          Already have an account?{" "}
                          <a href={link + "/login"} className="text-primary font-600 text-decoration-none">
                            Sign In
                          </a>
                        </p>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div>
                      <div className="mb-3 pb-2 border-bottom">
                        <h2 className="h5 font-700 mb-0" style={{ color: "#1e293b", letterSpacing: "-0.3px" }}>
                          Create your CA account
                        </h2>
                      </div>

                      <div className="mb-3 pb-1">
                        <label htmlFor="mrnNumber" className="form-label font-600 mb-1 d-block" style={{ color: "#334155", fontSize: "13px" }}>
                          Membership Registration Number (MRN) <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-3"
                          style={{ height: "46px", fontSize: "14px", borderColor: "#cbd5e1" }}
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
                        <label htmlFor="email" className="form-label font-600 mb-1 d-block" style={{ color: "#334155", fontSize: "13px" }}>
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <div className="d-flex gap-2">
                          <div className="flex-grow-1" style={{ minWidth: 0 }}>
                            <input
                              type="email"
                              className="form-control rounded-3 w-100"
                              style={{
                                height: "46px",
                                fontSize: "14px",
                                borderColor: emailDetails?.isVerified ? "#10b981" : "#cbd5e1",
                                backgroundColor: emailDetails?.isVerified ? "#f8fafc" : "#ffffff",
                              }}
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
                            <div
                              className="d-flex align-items-center justify-content-center text-success font-600 font-sm px-3 rounded-3 text-nowrap"
                              style={{ height: "46px", backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0", fontSize: "13.5px" }}
                            >
                              <MdCheckCircle className="fs-5 me-1 text-success" /> Verified
                            </div>
                          ) : !showEmailOtp ? (
                            <button
                              className="btn btn-outline-primary font-sm text-nowrap px-3 font-600 rounded-3"
                              style={{ height: "46px", minWidth: "90px" }}
                              onClick={sendEmailOtp}
                              disabled={emailGetOtpInProgress}
                              type="button"
                            >
                              {emailGetOtpInProgress ? "Sending..." : "Verify"}
                            </button>
                          ) : (
                            <button
                              className="btn btn-outline-secondary font-sm text-nowrap px-3 rounded-3"
                              style={{ height: "46px" }}
                              onClick={() => setShowEmailOtpSection(false)}
                              disabled={emailGetOtpInProgress}
                              type="button"
                            >
                              Change
                            </button>
                          )}
                        </div>

                        {showEmailOtp && (!emailDetails || !emailDetails.isVerified) && (
                          <div className="mt-2 p-3 bg-light rounded-3 border">
                            <div className="font-sm text-muted mb-2 font-500">Enter 4-digit code sent to your email:</div>
                            <div className="d-flex gap-2 align-items-center">
                              <input type="tel" className="form-control text-center email-otp-field rounded-2 bg-white" style={{ width: "42px", height: "42px", fontSize: "17px", fontWeight: "600" }} maxLength="1" id="emailOtpField1" autoFocus={true} />
                              <input type="tel" className="form-control text-center email-otp-field rounded-2 bg-white" style={{ width: "42px", height: "42px", fontSize: "17px", fontWeight: "600" }} maxLength="1" id="emailOtpField2" />
                              <input type="tel" className="form-control text-center email-otp-field rounded-2 bg-white" style={{ width: "42px", height: "42px", fontSize: "17px", fontWeight: "600" }} maxLength="1" id="emailOtpField3" />
                              <input type="tel" className="form-control text-center email-otp-field rounded-2 bg-white" style={{ width: "42px", height: "42px", fontSize: "17px", fontWeight: "600" }} maxLength="1" id="emailOtpField4" />
                              <button
                                id="verify-email-button"
                                className="btn btn-primary font-sm px-3 rounded-2 font-600"
                                style={{ height: "42px" }}
                                onClick={() => verifyOtp("email")}
                                disabled={emailVerifyOtpInProgress}
                                type="button"
                              >
                                {emailVerifyOtpInProgress ? "Verifying..." : "Verify OTP"}
                              </button>
                            </div>
                            <div className="mt-2 font-sm">
                              <span className="text-primary font-600" onClick={() => retrySendOtp(3)} style={{ cursor: "pointer" }}>
                                Resend OTP
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="mb-3 pb-1">
                        <label htmlFor="mobileNo" className="form-label font-600 mb-1 d-block" style={{ color: "#334155", fontSize: "13px" }}>
                          Mobile Number <span className="text-danger">*</span>
                        </label>
                        <div className="d-flex gap-2">
                          <div className="flex-grow-1" style={{ minWidth: 0 }}>
                            <input
                              type="tel"
                              className="form-control rounded-3 w-100"
                              style={{
                                height: "46px",
                                fontSize: "14px",
                                borderColor: mobileDetails?.isVerified ? "#10b981" : "#cbd5e1",
                                backgroundColor: mobileDetails?.isVerified ? "#f8fafc" : "#ffffff",
                              }}
                              id="mobileNo"
                              placeholder="Enter mobile number"
                              autoComplete="off"
                              onKeyDown={onKeyDownMobile}
                              onChange={inputMobile}
                              disabled={showMobileOtp || (mobileDetails && mobileDetails.isVerified)}
                            />
                          </div>
                          {mobileDetails?.isVerified ? (
                            <div
                              className="d-flex align-items-center justify-content-center text-success font-600 font-sm px-3 rounded-3 text-nowrap"
                              style={{ height: "46px", backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0", fontSize: "13.5px" }}
                            >
                              <MdCheckCircle className="fs-5 me-1 text-success" /> Verified
                            </div>
                          ) : !showMobileOtp ? (
                            <button
                              className="btn btn-outline-primary font-sm text-nowrap px-3 font-600 rounded-3"
                              style={{ height: "46px", minWidth: "90px" }}
                              onClick={sendMobileOtp}
                              disabled={mobileGetOtpInProgress}
                              type="button"
                            >
                              {mobileGetOtpInProgress ? "Sending..." : "Verify"}
                            </button>
                          ) : (
                            <button
                              className="btn btn-outline-secondary font-sm text-nowrap px-3 rounded-3"
                              style={{ height: "46px" }}
                              onClick={() => setShowMobileOtpSection(false)}
                              disabled={mobileGetOtpInProgress}
                              type="button"
                            >
                              Change
                            </button>
                          )}
                        </div>

                        {showMobileOtp && (!mobileDetails || !mobileDetails.isVerified) && (
                          <div className="mt-2 p-3 bg-light rounded-3 border">
                            <div className="font-sm text-muted mb-2 font-500">Enter 4-digit code sent via SMS:</div>
                            <div className="d-flex gap-2 align-items-center">
                              <input type="tel" className="form-control text-center mobile-otp-field rounded-2 bg-white" style={{ width: "42px", height: "42px", fontSize: "17px", fontWeight: "600" }} maxLength="1" id="mobileOtpField1" autoFocus={true} />
                              <input type="tel" className="form-control text-center mobile-otp-field rounded-2 bg-white" style={{ width: "42px", height: "42px", fontSize: "17px", fontWeight: "600" }} maxLength="1" id="mobileOtpField2" />
                              <input type="tel" className="form-control text-center mobile-otp-field rounded-2 bg-white" style={{ width: "42px", height: "42px", fontSize: "17px", fontWeight: "600" }} maxLength="1" id="mobileOtpField3" />
                              <input type="tel" className="form-control text-center mobile-otp-field rounded-2 bg-white" style={{ width: "42px", height: "42px", fontSize: "17px", fontWeight: "600" }} maxLength="1" id="mobileOtpField4" />
                              <button
                                id="verify-mobile-button"
                                className="btn btn-primary font-sm px-3 rounded-2 font-600"
                                style={{ height: "42px" }}
                                onClick={() => verifyOtp("mobile")}
                                disabled={mobileVerifyOtpInProgress}
                                type="button"
                              >
                                {mobileVerifyOtpInProgress ? "Verifying..." : "Verify OTP"}
                              </button>
                            </div>
                            {connectedChannels && (
                              <div className="mt-2 font-sm text-muted">
                                Resend on{" "}
                                {connectedChannels.map((item, idx) => (
                                  <span key={item.value}>
                                    <span
                                      className="text-primary font-600"
                                      onClick={() => retrySendOtp(item.value)}
                                      style={{ cursor: "pointer" }}
                                    >
                                      {item.name}
                                    </span>
                                    {connectedChannels.length > idx + 1 && " or "}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <p className="mb-2.5" style={{ fontSize: "12px", color: "#94a3b8" }}>
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
                          <label className="form-check-label font-xs text-muted" htmlFor="agreeCheckBox" style={{ fontSize: "12px", lineHeight: "1.4" }}>
                            I agree to receive verification OTP & Alerts and accept the{" "}
                            <a href="https://giddh.com/terms" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">Terms of Service</a>
                            {" "}and{" "}
                            <a href="https://giddh.com/privacy" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">Privacy Policy</a>.
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-2 pt-3 mt-2 border-top">
                        <button
                          className="btn btn-outline-secondary font-sm px-3 d-flex align-items-center justify-content-center gap-1 rounded-3 font-600"
                          style={{ height: "46px", minWidth: "90px", borderColor: "#cbd5e1", color: "#475569" }}
                          onClick={() => updateCurrentStep(1)}
                          type="button"
                        >
                          <MdKeyboardArrowLeft className="fs-5" /> Back
                        </button>
                        <button
                          className="btn btn-primary flex-grow-1 font-600 rounded-3 shadow-sm d-flex align-items-center justify-content-center"
                          style={{ height: "46px", fontSize: "14.5px" }}
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

        <Stats stats={statsData} />

        <section className="py-5">
          <div className="container py-lg-4">
            <div className="text-center max-w-700 mx-auto mb-5">
              <span
                className="px-3 py-1 rounded-pill"
                style={{
                  backgroundColor: "#e2f0ff",
                  color: "#1e75ba",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                CORE CAPABILITIES
              </span>
              <h2 className="garmond-font h1 mt-3 mb-3" style={{ color: "#1c2a38" }}>
                Everything You Need to Manage Client Accounting
              </h2>
              <p className="text-secondary lead font-sm" style={{ fontSize: "1.05rem" }}>
                Streamline bookkeeping, simplify GST compliance, and collaborate seamlessly
                with your clients and team on Giddh.
              </p>
            </div>

            <div className="row g-4">
              {caFeatures.map((feature, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div
                    className="p-4 rounded-4 h-100 border bg-white shadow-sm d-flex flex-column transition"
                    style={{ borderColor: "#edf2f7" }}
                  >
                    <div>{feature.icon}</div>
                    <h3 className="h5 font-600 mb-2" style={{ color: "#1c2a38" }}>
                      {feature.title}
                    </h3>
                    <p className="text-secondary font-sm mb-0" style={{ lineHeight: "1.6" }}>
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
