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
  getSourceParam,
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
    handleGoogleApiSuccess({
      response,
      setEmailDetails,
      setShowEmailOtp,
      updateCurrentStep,
    });
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
              setGiddhRegionSession(response.body.session.id, region);

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
                "&ref=" +
                getLocalStorage("ref") +
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
                <h1>
                  {isAE && "Sign up for Giddh in the UAE and simplify your accounting. Access cloud tools for invoicing, VAT, and financial management."}
                  {isUK && "Create your Giddh account in the UK. Sign up to manage accounting, invoices, and VAT efficiently for your business."}
                  {isGlobal && "Sign up for Giddh and start managing your business finances efficiently. Create your account and access cloud accounting tools instantly."}
                  {isIndia && "Create your Giddh account in India. Sign up to manage GST, invoicing, and accounting seamlessly for your business."}
                </h1>
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
                                  {connectedChannels.map((item, index) => (
                                    <span key={item.value}>
                                      <span
                                        className="col-primary c-fw-600 ms-1 cursor-pointer "
                                        onClick={() => retrySendOtp(item.value)}
                                      >
                                        {" "}
                                        {item.name}{" "}
                                      </span>
                                      {connectedChannels.length > index + 1 &&
                                        "or"}
                                    </span>
                                  ))}
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
                      <a
                        className="text-wrap-nowrap"
                        href="https://giddh.com/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms and Service
                      </a>{" "}
                      and{" "}
                      <a
                        className="text-wrap-nowrap"
                        href="https://giddh.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>
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