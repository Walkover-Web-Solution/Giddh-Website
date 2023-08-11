import {
    MdKeyboardArrowRight,
    MdKeyboardArrowLeft,
    MdDone,
    MdCheckCircle
} from "react-icons/md";
import { useState, useEffect } from "react";
import GoogleLogin from "@/components/googleLogin";
import Script from "next/script";

const signUp = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [currentStep, setCurrentStep] = useState(1);
    const [showEmailOtp, setShowEmailOtp] = useState(false);
    const [showMobileOtp, setShowMobileOtp] = useState(false);
    const [emailDetails, setEmailDetails] = useState(null);
    const [mobileDetails, setMobileDetails] = useState(null);

    useEffect(() => {
        var configuration = {
            widgetId: "33686b716134333831313239",
            tokenAuth: "205968TmXguUAwoD633af103P1",
            exposeMethods: true,
            success: function (data) {
                console.log(data);
            }
        };

        let scriptTag = document.createElement('script');
        scriptTag.src = "https://control.msg91.com/app/assets/otp-provider/otp-provider.js";
        scriptTag.type = 'text/javascript';
        scriptTag.defer = true;
        scriptTag.onload = () => {
            initSendOTP(configuration);
        };
        document.body.appendChild(scriptTag);

        window.addEventListener("message", function (event) {
            if (event.data && event.data.origin === "giddh" && event.data.accessToken) {
                getGoogleUserDetails(event.data.accessToken);
            }
        });
    }, []);

    async function getGoogleUserDetails(accessToken) {
        await fetch(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json`,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "authorization": "Bearer " + accessToken
                }
            }
        )
            .then((res) => res.json())
            .then((res) => {
                setEmailDetails({ email: res.email, accessToken: accessToken, isVerified: true, signupVia: 'google' });
                updateCurrentStep(2);
                setTimeout(() => {
                    document.getElementById("email").value = res.email;
                    setShowEmailOtp(false);
                });
            })
            .catch((err) => console.log("Something went wrong!", err));
    }

    function resetEverything() {
        setEmailDetails({ email: "", accessToken: "", isVerified: false, signupVia: '', requestId: '' });
        setShowEmailOtp(false);
        setShowMobileOtp(false);
        resetMessages();
        updateCurrentStep(2);

        setTimeout(() => {
            document.getElementById("email").value = "";
            document.getElementById("mobileNo").value = "";
        });
    }

    function resetMessages() {
        setSuccessMessage("");
        setErrorMessage("");
    }

    function setShowEmailOtpSection(showOtp) {
        setShowEmailOtp(showOtp);

        if (!showOtp) {
            emailDetails.requestId = '';
            setEmailDetails(emailDetails);
        }
    }

    function setShowMobileOtpSection(showOtp) {
        setShowMobileOtp(showOtp);

        if (!showOtp) {
            mobileDetails.requestId = '';
            setMobileDetails(mobileDetails);
        }
    }

    function sendEmailOtp() {
        resetMessages();

        if (!document.getElementById("email").value || !document.getElementById("email").value.trim() || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(document.getElementById("email").value)) {
            setErrorMessage("Please enter valid email!");
            return;
        }

        window.sendOtp(document.getElementById("email").value, (data) => { emailOtpSentCallback(data); }, (error) => { emailOtpFailedCallback(error) });
    }

    function sendMobileOtp() {
        resetMessages();

        if (!document.getElementById("mobileNo").value || !document.getElementById("mobileNo").value.trim()) {
            setErrorMessage("Please enter valid mobile number!");
            return;
        }

        window.sendOtp(document.getElementById("mobileNo").value, (data) => { mobileOtpSentCallback(data); }, (error) => { mobileOtpFailedCallback(error) });
    }

    function emailOtpSentCallback(data) {
        setSuccessMessage('OTP sent successfully.');
        setEmailDetails({ email: document.getElementById("email").value, accessToken: "", isVerified: false, signupVia: 'giddh', requestId: data.message });
        setShowEmailOtpSection(true);
    }

    function mobileOtpSentCallback(data) {
        setSuccessMessage('OTP sent successfully.');
        setMobileDetails({ mobileNo: document.getElementById("mobileNo").value, accessToken: "", isVerified: false, signupVia: 'giddh', requestId: data.message });
        setShowMobileOtpSection(true);
    }

    function emailOtpFailedCallback(error) {
        setErrorMessage(error.message);
        setShowEmailOtpSection(false);
        emailDetails.requestId = '';
        setEmailDetails(emailDetails);
    }

    function mobileOtpFailedCallback(error) {
        setErrorMessage(error.message);
        setShowMobileOtpSection(false);
        mobileDetails.requestId = '';
        setMobileDetails(mobileDetails);
    }

    function resetEmailOtp() {
        emailDetails.isVerified = false;
        emailDetails.accessToken = "";
        setEmailDetails(emailDetails);

        document.querySelectorAll('.email-otp-field').forEach(function (field) {
            field.value = '';
        });
    }

    function resetMobileOtp() {
        mobileDetails.isVerified = false;
        mobileDetails.accessToken = "";
        setMobileDetails(mobileDetails);

        document.querySelectorAll('.mobile-otp-field').forEach(function (field) {
            field.value = '';
        });
    }

    function retrySendOtp(channel) {
        resetMessages();
        if (channel == 3) {
            resetEmailOtp();
        } else {
            resetMobileOtp();
        }
        window.retryOtp(channel, (data) => { setSuccessMessage('OTP resent successfully.'); }, (error) => { setErrorMessage(error.message); })
    }

    function verifyOtp(type) {
        resetMessages();

        var otp = "";

        if (type == "email") {
            document.querySelectorAll('.email-otp-field').forEach(function (field) {
                otp += field.value;
            });
        } else {
            document.querySelectorAll('.mobile-otp-field').forEach(function (field) {
                otp += field.value;
            });
        }

        window.verifyOtp(otp, (data) => { verifyOtpSuccessCallback(type, data); }, (error) => { verifyOtpErrorCallback(type, error); })
    }

    function verifyOtpSuccessCallback(type, data) {
        setSuccessMessage('OTP verified successfully.');

        if (type == "email") {
            emailDetails.isVerified = true;
            emailDetails.accessToken = data.message;
            setEmailDetails(emailDetails);
        } else {
            mobileDetails.isVerified = true;
            mobileDetails.accessToken = data.message;
            setMobileDetails(mobileDetails);
        }
    }

    function verifyOtpErrorCallback(type, error) {
        setErrorMessage(error.message);

        if (type == "email") {
            emailDetails.isVerified = false;
            emailDetails.accessToken = "";
            setEmailDetails(emailDetails);
        } else {
            mobileDetails.isVerified = false;
            mobileDetails.accessToken = "";
            setMobileDetails(mobileDetails);
        }
    }

    function initiateSignup() {
        if (emailDetails.isVerified && mobileDetails.isVerified) {

        }
    }

    function updateCurrentStep(step) {
        setCurrentStep(step);
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

    function setFocusOnField(event) {
        // console.log(event);
        // setTimeout(() => {
        //     if(event && event.keyCode != 8 && event.target && event.target.nextElementSibling) {
        //         event.target.nextElementSibling.focus();
        //     }
        // });
    }

    function setFocusOnEmailVerifyButton(event) {
        // setTimeout(() => {
        //     if(event && event.keyCode != 8) {
        //         document.getElementById("verify-email-button").focus();
        //     }
        // });
    }

    return (
        <>
            <Script src="/js/helper.js"></Script>
            <section className="entry signup d-flex">
                <div className="entry__left_section col-xl-3 col-lg-4 col-md-5">
                    <img
                        src="/img/giddh-logo.svg"
                        className="entry__left_section__brand_logo"
                    />
                    <div className="entry__left_section__details pe-5">
                        <div className="container">
                            <h1 className="c-fs-3 mb-4">
                                Signup to avail a complete suite of MSG91 products
                            </h1>
                            <p>What can you build with MSG91?</p>
                            <ul className="ps-0 my-4">
                                <li className="d-flex align-items-center">
                                    <MdDone />
                                    Programmable SMS
                                </li>
                                <li className="d-flex align-items-center">
                                    <MdDone />
                                    Customer Contact Center
                                </li>
                                <li className="d-flex align-items-center">
                                    <MdDone />
                                    Virtual Number
                                </li>
                                <li className="d-flex align-items-center">
                                    <MdDone />
                                    Automated user segmentation
                                </li>
                                <li className="d-flex align-items-center">
                                    <MdDone />
                                    OTP invisible verification
                                </li>
                            </ul>
                            <p>Trusted by 30000+ startups and enterprises</p>
                        </div>
                    </div>
                </div>
                <div className="entry__right_section col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
                    <div className="container entry__right_section__container">
                        {/* STEP #1 */}
                        {currentStep == 1 && (
                            <div className="entry__right_section__container--step entry__right_section__container--active">
                                <div className="d-none entry__right_section__container--logo-visible-in-small">
                                    <img
                                        src="/img/giddh-logo.svg"
                                        width="auto"
                                        height="40px"
                                        alt="Giddh Icon"
                                    />
                                </div>
                                <h1>Create an account</h1>
                                <div className="entry__right_section__container__entry_with d-flex mb-4 me-4">
                                    <div className="signup_with__left pe-4">
                                        <span className="d-inline-block mb-4">Sign up with</span>

                                        <div className="d-flex align-items-center">
                                            <GoogleLogin />
                                        </div>
                                    </div>
                                </div>

                                <span className="d-block line_on_right c-fs-6 mb-4">or</span>

                                <button className="entry__right_section__container__entry_button mb-4" onClick={() => resetEverything()}>
                                    Sign up with Email
                                    <MdKeyboardArrowRight />
                                </button>

                                <p className="c-fs-6 mb-4">
                                    If you already have an account,{" "}
                                    <a href="login" className="text_blue">
                                        Login
                                    </a>
                                </p>
                            </div>
                        )}

                        {/* STEP #2 */}
                        {currentStep == 2 && (
                            <div className="entry__right_section__container--step entry__right_section__container--active">
                                <div className="d-none entry__right_section__container--logo-visible-in-small">
                                    <img
                                        src="/img/giddh-logo.svg"
                                        width="auto"
                                        height="40px"
                                        alt="Giddh Icon"

                                    />
                                </div>
                                <h1>Create an account</h1>
                                <div className="entry__right_section__container__step_one mt-5">
                                    <div className="step_status_bar d-flex justify-content-between align-items-center ps-0">
                                        <div>
                                            <MdCheckCircle className="step_status_bar--invisible-on-md" />{" "}
                                            Verify email & mobile number
                                        </div>
                                    </div>
                                    <div className="row mx-0 px-0 step_input_wrapper mt-4">
                                        <label htmlFor="email" className="mb-3 ps-0">
                                            Verify email
                                        </label>
                                        <div className="d-flex flex-wrap p-0">
                                            <div className="step_input_wrapper__left col-xl-6 col-lg-12">
                                                <div className="d-flex step_input_wrapper__mobile_veiw">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        placeholder="email@walkover.in"
                                                        autoComplete="off"
                                                        onKeyDown={onKeyDownEmail}
                                                        disabled={(showEmailOtp || (emailDetails && emailDetails.isVerified))}
                                                        autoFocus={!showEmailOtp && (!emailDetails || !emailDetails.isVerified)}
                                                    />
                                                    {emailDetails && emailDetails.isVerified && (
                                                        <span className="position-relative">
                                                            <MdCheckCircle className="icon-success otp_verified_icon" />
                                                        </span>
                                                    )}
                                                    {!showEmailOtp && (!emailDetails || !emailDetails.isVerified) && (
                                                        <button className="btn custom-signup-btn" onClick={sendEmailOtp}>
                                                            Get OTP
                                                        </button>
                                                    )}
                                                    {showEmailOtp && (
                                                        <button className="btn custom-signup-btn" onClick={() => setShowEmailOtpSection(false)}>
                                                            Change Email
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                            {showEmailOtp && (!emailDetails || !emailDetails.isVerified) && (
                                                <div className="step_input_wrapper__right col-xl-6 col-lg-12">
                                                    <div className="d-flex flex-column">
                                                        <div className="d-flex">
                                                            <input
                                                                type="text"
                                                                className="form-control otp_input email-otp-field"
                                                                placeholder="*"
                                                                maxLength="1"
                                                                id="emailOtpField1"
                                                                onKeyDown={setFocusOnField}
                                                                autoFocus={true}
                                                            />
                                                            <input
                                                                type="text"
                                                                className="form-control otp_input email-otp-field"
                                                                placeholder="*"
                                                                maxLength="1"
                                                                id="emailOtpField2"
                                                                onKeyDown={setFocusOnField}
                                                            />
                                                            <input
                                                                type="text"
                                                                className="form-control otp_input email-otp-field"
                                                                placeholder="*"
                                                                maxLength="1"
                                                                id="emailOtpField3"
                                                                onKeyDown={setFocusOnField}
                                                            />
                                                            <input
                                                                type="text"
                                                                className="form-control otp_input email-otp-field"
                                                                placeholder="*"
                                                                maxLength="1"
                                                                id="emailOtpField4"
                                                                onKeyDown={setFocusOnEmailVerifyButton}
                                                            />
                                                            <button id="verify-email-button" className="btn custom-signup-btn" onClick={() => verifyOtp('email')}>
                                                                Verify
                                                            </button>
                                                        </div>
                                                        <a href="#" className="col-dark mt-3 c-fs-6">
                                                            <span className="col-primary c-fw-600" onClick={() => retrySendOtp(3)}>Resend</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row mx-0 px-0 step_input_wrapper mt-4 mb-5">
                                        <label htmlFor="contact" className="mb-3 ps-0">
                                            Verify Mobile number
                                        </label>
                                        <div className="d-flex flex-wrap p-0">
                                            <div className="step_input_wrapper__left col-xl-6 col-lg-12">
                                                <div className="d-flex step_input_wrapper__mobile_veiw">
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        id="mobileNo"
                                                        placeholder="919876543210"
                                                        autoComplete="off"
                                                        onKeyDown={onKeyDownMobile}
                                                        disabled={(showMobileOtp || (mobileDetails && mobileDetails.isVerified))}
                                                    />
                                                    {mobileDetails && mobileDetails.isVerified && (
                                                        <span className="position-relative">
                                                            <MdCheckCircle className="icon-success otp_verified_icon" />
                                                        </span>
                                                    )}
                                                    {!showMobileOtp && (!mobileDetails || !mobileDetails.isVerified) && (
                                                        <button className="btn custom-signup-btn" onClick={sendMobileOtp}>
                                                            Get OTP
                                                        </button>
                                                    )}
                                                    {showMobileOtp && (
                                                        <button className="btn custom-signup-btn" onClick={() => setShowMobileOtpSection(false)}>
                                                            Change Mobile
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                            {showMobileOtp && (!mobileDetails || !mobileDetails.isVerified) && (
                                                <div className="step_input_wrapper__right col-xl-6 col-lg-12">
                                                    <div className="d-flex flex-column">
                                                        <div className="d-flex">
                                                            <input
                                                                type="text"
                                                                className="form-control otp_input mobile-otp-field"
                                                                placeholder="*"
                                                                maxLength="1"
                                                                id="mobileOtpField1"
                                                                autoFocus={true}
                                                            />
                                                            <input
                                                                type="text"
                                                                className="form-control otp_input mobile-otp-field"
                                                                placeholder="*"
                                                                maxLength="1"
                                                                id="mobileOtpField2"
                                                            />
                                                            <input
                                                                type="text"
                                                                className="form-control otp_input mobile-otp-field"
                                                                placeholder="*"
                                                                maxLength="1"
                                                                id="mobileOtpField3"
                                                            />
                                                            <input
                                                                type="text"
                                                                className="form-control otp_input mobile-otp-field"
                                                                placeholder="*"
                                                                maxLength="1"
                                                                id="mobileOtpField4"
                                                            />
                                                            <button id="verify-mobile-button" className="btn custom-signup-btn" onClick={() => verifyOtp('mobile')}>
                                                                Verify
                                                            </button>
                                                        </div>
                                                        <a href="#" className="col-dark mt-3 c-fs-6">
                                                            Resend on{" "}
                                                            <span className="col-primary c-fw-600" onClick={() => retrySendOtp(11)}>Text</span> or{" "}
                                                            <span className="col-primary c-fw-600" onClick={() => retrySendOtp(12)}>WhatsApp</span>{" "}
                                                            or <span className="col-primary c-fw-600" onClick={() => retrySendOtp(4)}>Call</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p className="col-success c-fs-6 c-fw-600 my-4">
                                            {successMessage}
                                        </p>
                                        <p className="col-error c-fs-6 c-fw-600 my-4">
                                            {errorMessage}
                                        </p>
                                        <div>
                                            <button className="me-3 btn back_btn" onClick={() => updateCurrentStep(1)}>
                                                {" "}
                                                <MdKeyboardArrowLeft />
                                                Back
                                            </button>
                                            <button className="btn next_btn col-white" onClick={() => updateCurrentStep(3)}>
                                                {" "}
                                                Submit <MdKeyboardArrowRight />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};
export default signUp;
