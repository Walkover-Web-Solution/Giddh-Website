import {
    MdKeyboardArrowRight,
    MdKeyboardArrowLeft,
    MdDone,
    MdCheckCircle
} from "react-icons/md";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
const GoogleLogin = dynamic(() => import('@/components/googleLogin'), {
    ssr: false
})

const signUp = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [currentStep, setCurrentStep] = useState(1);
    const [showEmailOtp, setShowEmailOtp] = useState(false);
    const [emailRequestId, setEmailRequestId] = useState("");
    const [showMobileOtp, setShowMobileOtp] = useState(false);
    const [mobileRequestId, setMobileRequestId] = useState("");

    useEffect(() => {
        var configuration = {
            widgetId: "326a63733354393830313330",
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
            console.log(event.data);
        });
    }, []);

    function resetMessages() {
        setSuccessMessage("");
        setErrorMessage("");
    }

    function setShowEmailOtpSection(showOtp) {
        setShowEmailOtp(showOtp);

        if (showOtp) {
            document.getElementById("email").setAttribute("disabled", "disabled")
        } else {
            document.getElementById("email").removeAttribute("disabled")
            setEmailRequestId("");
        }
    }

    function sendEmailOtp() {
        resetMessages();
        window.sendOtp(document.getElementById("email").value, (data) => { setEmailRequestId(data.message); setShowEmailOtpSection(true); setSuccessMessage('OTP sent successfully.'); }, (error) => { setEmailRequestId(""); setShowEmailOtpSection(false); setErrorMessage(error.message); });
    }

    function setShowMobileOtpSection(showOtp) {
        setShowMobileOtp(showOtp);

        if (showOtp) {
            document.getElementById("mobileNo").setAttribute("disabled", "disabled")
        } else {
            document.getElementById("mobileNo").removeAttribute("disabled")
            setMobileRequestId("");
        }
    }

    function sendMobileOtp() {
        resetMessages();
        window.sendOtp(document.getElementById("mobileNo").value, (data) => { setMobileRequestId(data.message); setShowMobileOtpSection(true); setSuccessMessage('OTP sent successfully.'); }, (error) => { setMobileRequestId(""); setShowMobileOtpSection(false); setErrorMessage(error.message); });
    }

    function retrySendOtp(channel) {
        resetMessages();
        window.retryOtp(channel, (data) => { setSuccessMessage('OTP resent successfully.'); }, (error) => { setErrorMessage(error.message); })
    }

    function verifyOtp(type) {
        resetMessages();

        var otp = "";

        if (type == "email") {
            otp += document.getElementById("emailOtpField1").value;
            otp += document.getElementById("emailOtpField2").value;
            otp += document.getElementById("emailOtpField3").value;
            otp += document.getElementById("emailOtpField4").value;
        } else {
            otp += document.getElementById("mobileOtpField1").value;
            otp += document.getElementById("mobileOtpField2").value;
            otp += document.getElementById("mobileOtpField3").value;
            otp += document.getElementById("mobileOtpField4").value;
        }

        window.verifyOtp(otp, (data) => { setSuccessMessage('OTP verified successfully.'); }, (error) => { setErrorMessage(error.message); })
    }

    function updateCurrentStep(step) {
        setCurrentStep(step);
    }
    return (
        <>
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

                                <button className="entry__right_section__container__entry_button mb-4" onClick={() => updateCurrentStep(2)}>
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
                                                        placeholder="dvndr@walkover.in"
                                                        autoComplete="off"
                                                    />
                                                    {showEmailOtp && (
                                                        <span className="position-relative">
                                                            <MdCheckCircle className="icon-success otp_verified_icon" />
                                                        </span>
                                                    )}
                                                    {!showEmailOtp && (
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
                                            {showEmailOtp && (
                                                <div className="step_input_wrapper__right col-xl-6 col-lg-12">
                                                    <div className="d-flex flex-column">
                                                        <div className="d-flex">
                                                            <input
                                                                type="text"
                                                                className="form-control otp_input"
                                                                placeholder="*"
                                                                maxLength="1"
                                                                id="emailOtpField1"
                                                            />
                                                            <input
                                                                type="text"
                                                                className="form-control otp_input"
                                                                placeholder="*"
                                                                maxLength="1"
                                                                id="emailOtpField2"
                                                            />
                                                            <input
                                                                type="text"
                                                                className="form-control otp_input"
                                                                placeholder="*"
                                                                maxLength="1"
                                                                id="emailOtpField3"
                                                            />
                                                            <input
                                                                type="text"
                                                                className="form-control otp_input"
                                                                placeholder="*"
                                                                maxLength="1"
                                                                id="emailOtpField4"
                                                            />
                                                            <button className="btn custom-signup-btn" onClick={() => verifyOtp('email')}>
                                                                Verify
                                                            </button>
                                                        </div>
                                                        <a href="#" className="col-dark mt-3 c-fs-6">
                                                            Resend on{" "}
                                                            <span className="col-primary c-fw-600" onClick={() => retrySendOtp(3)}>Email</span>
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
                                                        placeholder="Mobile number"
                                                    />
                                                    {showMobileOtp && (
                                                        <span className="position-relative">
                                                            <MdCheckCircle className="icon-success otp_verified_icon" />
                                                        </span>
                                                    )}
                                                    {!showMobileOtp && (
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
                                            {showMobileOtp && (
                                                <div className="step_input_wrapper__right col-xl-6 col-lg-12">
                                                    <div className="d-flex flex-column">
                                                        <div className="d-flex">
                                                            <input
                                                                type="text"
                                                                className="form-control otp_input"
                                                                placeholder="*"
                                                                maxLength="1"
                                                                id="mobileOtpField1"
                                                            />
                                                            <input
                                                                type="text"
                                                                className="form-control otp_input"
                                                                placeholder="*"
                                                                maxLength="1"
                                                                id="mobileOtpField2"
                                                            />
                                                            <input
                                                                type="text"
                                                                className="form-control otp_input"
                                                                placeholder="*"
                                                                maxLength="1"
                                                                id="mobileOtpField3"
                                                            />
                                                            <input
                                                                type="text"
                                                                className="form-control otp_input"
                                                                placeholder="*"
                                                                maxLength="1"
                                                                id="mobileOtpField4"
                                                            />
                                                            <button className="btn custom-signup-btn" onClick={() => verifyOtp('mobile')}>
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
