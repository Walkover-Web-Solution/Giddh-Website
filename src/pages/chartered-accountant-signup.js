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
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import GoogleLogin from "@/components/googleLogin";
import Head from "next/head";
import Image from "next/image";
import Footer from "@/components/NewComps/Footer";
import Stats from "@/components/NewComps/Stats";

import {
  showToaster,
  setInputValue,
  initiateOtpFieldsAutoMove,
  formatMobileNumber,
  getOtpFromFields,
  clearOtpFields,
  getWidgetChannels,
  handleDisplayMobileNumber,
  handleOtpVerifyRedirect,
  getSourceParam as getSourceParamHelper,
  executeRetryOtp,
  handleGoogleApiSuccess,
  handleMobileOtpSent,
  handleSignupError,
  handleKeyDownEnter,
  handleInitOtpSignup,
  handleResetEverything,
  handleSetShowOtpSection,
  handleSendEmailOtp,
  handleSendMobileOtp,
  handleEmailOtpSent,
  handleOtpFailed,
  handleResetOtp,
  handleVerifyOtp,
  handleVerifyOtpSuccess,
  handleVerifyOtpError,
  handleLoadTelLibrary,
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
    handleGoogleApiSuccess({
      response,
      setEmailDetails,
      setShowEmailOtp,
      updateCurrentStep,
    });
  }

  function getSourceParam() {
    if (mrnNumber && mrnNumber.trim()) {
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
      return getSourceParamHelper({ mrnNumber: mrnNumber.trim() });
    }
    return getSourceParamHelper();
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


  function initOtpSignup() {
    handleInitOtpSignup({
      setEmailDetails,
      setMobileDetails,
      setShowEmailOtp,
      setShowMobileOtp,
      updateCurrentStep,
      getWidgetData,
    });
  }

  function resetEverything() {
    handleResetEverything({
      setEmailDetails,
      setMobileDetails,
      setShowEmailOtp,
      setShowMobileOtp,
      updateCurrentStep,
    });
  }

  function setShowEmailOtpSection(showOtp) {
    handleSetShowOtpSection({
      type: "email",
      showOtp,
      setShowEmailOtp,
      setEmailDetails,
    });
  }

  function setShowMobileOtpSection(showOtp) {
    handleSetShowOtpSection({
      type: "mobile",
      showOtp,
      setShowMobileOtp,
      setMobileDetails,
    });
  }

  function getWidgetData() {
    var channels = getWidgetChannels();
    if (channels) {
      setConnectedChannels(channels);
    }
  }

  function sendEmailOtp() {
    handleSendEmailOtp({
      emailInputId: "email",
      setEmailGetOtpInProgress,
      onSuccess: emailOtpSentCallback,
      onError: emailOtpFailedCallback,
    });
  }

  function sendMobileOtp() {
    handleSendMobileOtp({
      intl,
      setMobileGetOtpInProgress,
      onSuccess: mobileOtpSentCallback,
      onError: mobileOtpFailedCallback,
    });
  }

  function emailOtpSentCallback(data) {
    handleEmailOtpSent({
      data,
      emailInputId: "email",
      setEmailGetOtpInProgress,
      setEmailDetails,
      setShowEmailOtpSection,
      successMessage: "OTP sent successfully.",
    });
  }

  function mobileOtpSentCallback(data) {
    handleMobileOtpSent({
      data,
      intl,
      setMobileGetOtpInProgress,
      setMobileDetails,
      setShowMobileOtpSection,
      successMessage: "OTP sent successfully.",
    });
  }

  function emailOtpFailedCallback(error) {
    handleOtpFailed({
      type: "email",
      error,
      setEmailGetOtpInProgress,
      setShowEmailOtpSection,
      setEmailDetails,
    });
  }

  function mobileOtpFailedCallback(error) {
    handleOtpFailed({
      type: "mobile",
      error,
      setMobileGetOtpInProgress,
      setShowMobileOtpSection,
      setMobileDetails,
    });
  }

  function resetEmailOtp() {
    handleResetOtp({
      type: "email",
      setEmailDetails,
    });
  }

  function resetMobileOtp() {
    handleResetOtp({
      type: "mobile",
      setMobileDetails,
    });
  }

  function retrySendOtp(channel) {
    executeRetryOtp({
      channel,
      emailDetails,
      mobileDetails,
      resetEmailOtp,
      resetMobileOtp,
      setEmailGetOtpInProgress,
      setMobileGetOtpInProgress,
    });
  }

  function verifyOtp(type) {
    handleVerifyOtp({
      type,
      emailDetails,
      mobileDetails,
      setEmailVerifyOtpInProgress,
      setMobileVerifyOtpInProgress,
      onSuccess: (data) => verifyOtpSuccessCallback(type, data),
      onError: (error) => verifyOtpErrorCallback(type, error),
    });
  }

  function verifyOtpSuccessCallback(type, data) {
    handleVerifyOtpSuccess({
      type,
      data,
      setEmailVerifyOtpInProgress,
      setMobileVerifyOtpInProgress,
      setEmailDetails,
      setMobileDetails,
    });
  }

  function verifyOtpErrorCallback(type, error) {
    handleVerifyOtpError({
      type,
      error,
      setEmailVerifyOtpInProgress,
      setMobileVerifyOtpInProgress,
      setEmailDetails,
      setMobileDetails,
    });
  }

  function signupErrorCallback(error) {
    handleSignupError(error, setSignupInProgress);
  }

  function updateCurrentStep(step) {
    setCurrentStep(step);
    setTimeout(() => {
      loadTelLibrary();
    });
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
    handleLoadTelLibrary({
      inputSelector: "mobileNo",
      setIntl,
      setIntlRef: (instance) => {
        intlRef = instance;
      },
      onCountryChange: () => displayEnterNumber(),
      retries,
    });
  }

  function otpVerifyCallback(response) {
    handleOtpVerifyRedirect(response, region);
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
        <section className="py-5 ca-signup__hero">
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
                  <span className="ca-signup__badge">
                    GIDDH FOR CHARTERED ACCOUNTANTS
                  </span>
                </div>

                <h1 className="garmond-font mb-4 ca-signup__heading">
                  Empower Your Practice with Giddh for Chartered Accountants
                </h1>

                <p className="lead text-secondary mb-4 ca-signup__subheading">
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
                <div className="ca-signup__card">
                  {currentStep === 1 && (
                    <div>
                      <div className="mb-4 pb-2 border-bottom">
                        <h2 className="h4 font-600 col-dark mb-1">
                          Create your CA Account
                        </h2>
                        <p className="text-muted c-fs-6 mb-0">
                          Get started with unlimited client management.
                        </p>
                      </div>

                      <div className="ca-signup__google_wrapper mb-3">
                        <GoogleLogin
                          googleApiSuccessCallback={googleApiSuccessCallback}
                        />
                      </div>

                      <div className="position-relative my-3 text-center">
                        <hr className="m-0" />
                        <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 c-fs-7 text-muted">
                          or sign up with email
                        </span>
                      </div>

                      <button
                        type="button"
                        className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 shadow-sm mb-4 py-2 font-600 ca-signup__email_btn"
                        onClick={() => resetEverything()}
                      >
                        <span>Continue with Email</span>
                        <MdArrowForward className="fs-5" />
                      </button>

                      <div className="pt-3 border-top text-center">
                        <p className="c-fs-6 text-muted mb-0">
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
                        <h2 className="h5 ca-signup__card_title mb-0">
                          Create your CA account
                        </h2>
                      </div>

                      <div className="mb-3 pb-1">
                        <label htmlFor="mrnNumber" className="form-label c-fs-6 font-600 col-dark mb-1">
                          Membership Registration Number (MRN) <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control ca-signup__input"
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
                        <label htmlFor="email" className="form-label c-fs-6 font-600 col-dark mb-1">
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <div className="d-flex gap-2">
                          <div className="flex-grow-1 min-w-0">
                            <input
                              type="email"
                              className={`form-control ca-signup__input w-100 ${emailDetails?.isVerified ? "ca-signup__input--verified" : ""}`}
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
                            <div className="ca-signup__verified_badge">
                              <MdCheckCircle className="fs-5 me-1 text-success" /> Verified
                            </div>
                          ) : !showEmailOtp ? (
                            <button
                              className="btn btn-outline-primary c-fs-6 font-600 px-3"
                              onClick={sendEmailOtp}
                              disabled={emailGetOtpInProgress}
                              type="button"
                            >
                              {emailGetOtpInProgress ? "Sending..." : "Verify"}
                            </button>
                          ) : (
                            <button
                              className="btn btn-outline-secondary c-fs-6 font-600 px-3"
                              onClick={() => setShowEmailOtpSection(false)}
                              disabled={emailGetOtpInProgress}
                              type="button"
                            >
                              Change
                            </button>
                          )}
                        </div>

                        {showEmailOtp && (!emailDetails || !emailDetails.isVerified) && (
                          <div className="ca-signup__otp_box">
                            <div className="font-sm text-muted mb-2 font-500">Enter 4-digit code sent to your email:</div>
                            <div className="d-flex gap-2 align-items-center">
                              <input type="tel" className="form-control ca-signup__otp_field email-otp-field" maxLength="1" id="emailOtpField1" autoFocus={true} />
                              <input type="tel" className="form-control ca-signup__otp_field email-otp-field" maxLength="1" id="emailOtpField2" />
                              <input type="tel" className="form-control ca-signup__otp_field email-otp-field" maxLength="1" id="emailOtpField3" />
                              <input type="tel" className="form-control ca-signup__otp_field email-otp-field" maxLength="1" id="emailOtpField4" />
                              <button
                                id="verify-email-button"
                                className="btn btn-primary c-fs-6 font-600 px-3"
                                onClick={() => verifyOtp("email")}
                                disabled={emailVerifyOtpInProgress}
                                type="button"
                              >
                                {emailVerifyOtpInProgress ? "Verifying..." : "Verify OTP"}
                              </button>
                            </div>
                            <div className="mt-2 font-sm">
                              <span className="text-primary font-600 cursor-pointer" onClick={() => retrySendOtp(3)}>
                                Resend OTP
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="mb-3 pb-1">
                        <label htmlFor="mobileNo" className="form-label c-fs-6 font-600 col-dark mb-1">
                          Mobile Number <span className="text-danger">*</span>
                        </label>
                        <div className="d-flex gap-2">
                          <div className="flex-grow-1 min-w-0">
                            <input
                              type="tel"
                              className={`form-control ca-signup__input w-100 ${mobileDetails?.isVerified ? "ca-signup__input--verified" : ""}`}
                              id="mobileNo"
                              placeholder="Enter mobile number"
                              autoComplete="off"
                              onKeyDown={onKeyDownMobile}
                              onChange={inputMobile}
                              disabled={showMobileOtp || (mobileDetails && mobileDetails.isVerified)}
                            />
                          </div>
                          {mobileDetails?.isVerified ? (
                            <div className="ca-signup__verified_badge">
                              <MdCheckCircle className="fs-5 me-1 text-success" /> Verified
                            </div>
                          ) : !showMobileOtp ? (
                            <button
                              className="btn btn-outline-primary c-fs-6 font-600 px-3"
                              onClick={sendMobileOtp}
                              disabled={mobileGetOtpInProgress}
                              type="button"
                            >
                              {mobileGetOtpInProgress ? "Sending..." : "Verify"}
                            </button>
                          ) : (
                            <button
                              className="btn btn-outline-secondary c-fs-6 font-600 px-3"
                              onClick={() => setShowMobileOtpSection(false)}
                              disabled={mobileGetOtpInProgress}
                              type="button"
                            >
                              Change
                            </button>
                          )}
                        </div>

                        {showMobileOtp && (!mobileDetails || !mobileDetails.isVerified) && (
                          <div className="ca-signup__otp_box">
                            <div className="font-sm text-muted mb-2 font-500">Enter 4-digit code sent via SMS:</div>
                            <div className="d-flex gap-2 align-items-center">
                              <input type="tel" className="form-control ca-signup__otp_field mobile-otp-field" maxLength="1" id="mobileOtpField1" autoFocus={true} />
                              <input type="tel" className="form-control ca-signup__otp_field mobile-otp-field" maxLength="1" id="mobileOtpField2" />
                              <input type="tel" className="form-control ca-signup__otp_field mobile-otp-field" maxLength="1" id="mobileOtpField3" />
                              <input type="tel" className="form-control ca-signup__otp_field mobile-otp-field" maxLength="1" id="mobileOtpField4" />
                              <button
                                id="verify-mobile-button"
                                className="btn btn-primary c-fs-6 font-600 px-3"
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
                                {connectedChannels.map((item, index) => (
                                  <span key={item.value}>
                                    <span
                                      className="text-primary font-600 cursor-pointer"
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

                      <p className="c-fs-7 text-muted mb-2">
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
                          <label className="form-check-label c-fs-7 text-muted line-height-24" htmlFor="agreeCheckBox">
                            I agree to receive verification OTP & Alerts and accept the{" "}
                            <a href="https://giddh.com/terms" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">Terms of Service</a>
                            {" "}and{" "}
                            <a href="https://giddh.com/privacy" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">Privacy Policy</a>.
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-2 pt-3 mt-2 border-top">
                        <button
                          className="btn btn-outline-secondary c-fs-6 font-600 px-3 d-flex align-items-center justify-content-center gap-1"
                          onClick={() => updateCurrentStep(1)}
                          type="button"
                        >
                          <MdKeyboardArrowLeft className="fs-5" /> Back
                        </button>
                        <button
                          className="btn btn-primary flex-grow-1 shadow-sm d-flex align-items-center justify-content-center py-2 font-600"
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
              <span className="ca-signup__badge ca-signup__badge--small">
                CORE CAPABILITIES
              </span>
              <h2 className="garmond-font h1 mt-3 mb-3 text-dark">
                Everything You Need to Manage Client Accounting
              </h2>
              <p className="text-secondary lead font-sm">
                Streamline bookkeeping, simplify GST compliance, and collaborate seamlessly
                with your clients and team on Giddh.
              </p>
            </div>

            <div className="row g-4">
              {caFeatures.map((feature, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="ca-signup__feature_card">
                    <div>{feature.icon}</div>
                    <h3 className="h5 font-600 mb-2 text-dark">
                      {feature.title}
                    </h3>
                    <p className="text-secondary font-sm mb-0">
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
