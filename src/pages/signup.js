import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdDone, MdCheckCircle } from "react-icons/md";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import GoogleLogin from "@/components/googleLogin";

const signUp = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [showEmailOtp, setShowEmailOtp] = useState(false);
    const [showMobileOtp, setShowMobileOtp] = useState(false);
    const [emailDetails, setEmailDetails] = useState(null);
    const [mobileDetails, setMobileDetails] = useState(null);
    const [connectedChannels, setConnectedChannels] = useState(null);
    const [intl, setIntl] = useState(null);
    const [emailGetOtpInProgress, setEmailGetOtpInProgress] = useState(false);
    const [emailVerifyOtpInProgress, setEmailVerifyOtpInProgress] = useState(false);
    const [mobileGetOtpInProgress, setMobileGetOtpInProgress] = useState(false);
    const [mobileVerifyOtpInProgress, setMobileVerifyOtpInProgress] = useState(false);
    const [signupInProgress, setSignupInProgress] = useState(false);
    const [link, setLink] = useState(process.env.NEXT_PUBLIC_SITE_URL);

    var x;

    useEffect(() => {
        initOtpSignup();
        setLink(getCurrentSiteCountryUrl(process.env.NEXT_PUBLIC_SITE_URL));
    }, []);

    function googleApiSuccessCallback(response) {
        setEmailDetails({ email: response.email, accessToken: response.accessToken, isVerified: true, signupVia: 'google' });
        updateCurrentStep(2);
        setTimeout(() => {
            document.getElementById("email").value = response.email;
            setShowEmailOtp(false);
        });
    }

    async function initiateSignup() {
        if (emailDetails.isVerified && mobileDetails.isVerified) {
            setSignupInProgress(true);
            await fetch(
                process.env.NEXT_PUBLIC_API_URL + '/v2/register',
                {
                    method: "POST",
                    mode: "cors",
                    cache: "no-store",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ emailId: emailDetails.email, emailIdAccessToken: emailDetails.accessToken, emailIdAuthType: emailDetails.signupVia, mobileNo: mobileDetails.mobileNo, mobileNoAccessToken: mobileDetails.accessToken }),
                }
            )
                .then((res) => res.json())
                .then((response) => {
                    if (response.status == "success") {
                        showToaster("Your account has been created successfully.", "success");
                        setGiddhSession(response.body.session.id);

                        var utmParams = "&utm_source=" + getLocalStorage("utm_source") + "&utm_medium=" + getLocalStorage("utm_medium") + "&utm_campaign=" + getLocalStorage("utm_campaign") + "&utm_term=" + getLocalStorage("utm_term") + "&utm_content=" + getLocalStorage("utm_content") + "";
                        x = utmParams;
                        window.location = process.env.NEXT_PUBLIC_APP_URL + "/token-verify?request=" + response.body.session.id + utmParams;
                    } else {
                        setSignupInProgress(false);
                        showToaster(response.message, "error");
                    }
                })
                .catch((err) => signupErrorCallback(err));
        } else if (!emailDetails.isVerified && !mobileDetails.isVerified) {
            showToaster("Please verify email and mobile", "error");
        } else if (!emailDetails.isVerified && mobileDetails.isVerified) {
            showToaster("Please verify email", "error");
        } else if (emailDetails.isVerified && !mobileDetails.isVerified) {
            showToaster("Please verify mobile", "error");
        }
    }

    function initOtpSignup() {
        var userData = getLocalStorage("userData");
        if (userData) {
            if (userData.user.email) {
                setEmailDetails({ email: userData.user.email, accessToken: userData.accessToken, isVerified: true, signupVia: userData.signupVia });
                updateCurrentStep(2);
                setTimeout(() => {
                    document.getElementById("email").value = userData.user.email;
                    setShowEmailOtp(false);
                });
            } else if (userData.user.mobileNo) {
                setMobileDetails({ mobileNo: userData.user.mobileNo, accessToken: userData.accessToken, isVerified: true, signupVia: userData.signupVia });
                updateCurrentStep(2);
                setTimeout(() => {
                    document.getElementById("mobileNo").value = userData.user.mobileNo;
                    setShowMobileOtp(false);
                });
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
        setEmailDetails({ email: "", accessToken: "", isVerified: false, signupVia: '', requestId: '' });
        setMobileDetails({ mobileNo: "", accessToken: "", isVerified: false, signupVia: '', requestId: '' });
        setShowEmailOtp(false);
        setShowMobileOtp(false);
        updateCurrentStep(2);

        setTimeout(() => {
            document.getElementById("email").value = "";
            document.getElementById("mobileNo").value = "";
        });
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
            mobileDetails.requestId = '';
            setMobileDetails(mobileDetails);
        }
    }

    function getWidgetData() {
        var widgetData = window.getWidgetData();
        if (widgetData && widgetData.processes) {
            var channels = [];
            widgetData.processes.forEach(process => {
                if (process.channel.value != '3') {
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
        if (!document.getElementById("email").value || !document.getElementById("email").value.trim() || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(document.getElementById("email").value)) {
            showToaster("Please enter valid email!", "error");
            return;
        }

        setEmailGetOtpInProgress(true);

        window.sendOtp(document.getElementById("email").value, (data) => { emailOtpSentCallback(data); }, (error) => { emailOtpFailedCallback(error) });
    }

    function sendMobileOtp() {
        var mobileNo = formatMobileNumber(intl.getNumber());
        if (!mobileNo || !mobileNo) {
            showToaster("Please enter valid mobile number!", "error");
            return;
        }

        setMobileGetOtpInProgress(true);

        window.sendOtp(mobileNo, (data) => { mobileOtpSentCallback(data); }, (error) => { mobileOtpFailedCallback(error) });
    }

    function emailOtpSentCallback(data) {
        setEmailGetOtpInProgress(false);
        showToaster('OTP sent successfully.', "success");
        setEmailDetails({ email: document.getElementById("email").value, accessToken: "", isVerified: false, signupVia: 'giddh', requestId: data.message });
        setShowEmailOtpSection(true);
        initiateOtpFieldsAutoMove('.email-otp-field');
    }

    function mobileOtpSentCallback(data) {
        setMobileGetOtpInProgress(false);
        showToaster('OTP sent successfully.', "success");
        var mobileNo = formatMobileNumber(intl.getNumber());
        setMobileDetails({ mobileNo: mobileNo, accessToken: "", isVerified: false, signupVia: 'giddh', requestId: data.message });
        setShowMobileOtpSection(true);
        initiateOtpFieldsAutoMove('.mobile-otp-field');
    }

    function emailOtpFailedCallback(error) {
        setEmailGetOtpInProgress(false);
        showToaster(error.message, "error");
        setShowEmailOtpSection(false);
        emailDetails.requestId = '';
        setEmailDetails(emailDetails);
    }

    function mobileOtpFailedCallback(error) {
        setMobileGetOtpInProgress(false);
        showToaster(error.message, "error");
        setShowMobileOtpSection(false);
        mobileDetails.requestId = '';
        setMobileDetails(mobileDetails);
    }

    function resetEmailOtp() {
        emailDetails.isVerified = false;
        emailDetails.accessToken = "";
        setEmailDetails(emailDetails);

        document.querySelectorAll('.email-otp-field').forEach(field => {
            field.value = '';
        });
    }

    function resetMobileOtp() {
        mobileDetails.isVerified = false;
        mobileDetails.accessToken = "";
        setMobileDetails(mobileDetails);

        document.querySelectorAll('.mobile-otp-field').forEach(field => {
            field.value = '';
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
        window.retryOtp(channel, (data) => { retrySendOtpSuccessCallback(channel); }, (error) => { retrySendOtpErrorCallback(channel, error); }, requestId)
    }

    function retrySendOtpSuccessCallback(channel) {
        showToaster('OTP resent successfully.', "success");

        if (channel == 3) {
            setEmailGetOtpInProgress(false);
        } else {
            setMobileGetOtpInProgress(false);
        }
    }

    function retrySendOtpErrorCallback(channel, error) {
        showToaster(error.message, "error");

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
            document.querySelectorAll('.email-otp-field').forEach(function (field) {
                otp += field.value;
            });

            if (!otp) {
                showToaster("Please enter OTP!", "error");
                return;
            }

            setEmailVerifyOtpInProgress(true);
            requestId = emailDetails.requestId;
        } else {
            document.querySelectorAll('.mobile-otp-field').forEach(function (field) {
                otp += field.value;
            });

            if (!otp) {
                showToaster("Please enter OTP!", "error");
                return;
            }

            setMobileVerifyOtpInProgress(true);
            requestId = mobileDetails.requestId;
        }

        window.verifyOtp(otp, (data) => { verifyOtpSuccessCallback(type, data); }, (error) => { verifyOtpErrorCallback(type, error); }, requestId)
    }

    function verifyOtpSuccessCallback(type, data) {
        showToaster('OTP verified successfully.', "success");

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
        showToaster(error.message, "error");

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
        showToaster(error, "error");
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

    function showToaster(message, type) {
        toast.dismiss();
        toast(message, { type: type });
    }

    function initiateOtpFieldsAutoMove(selector) {
        setTimeout(function () {
            const charInputs = document.querySelectorAll(selector);

            charInputs.forEach((input, index) => {
                input.addEventListener('input', (e) => {
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

                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
                        e.preventDefault(); // Prevent the browser's default backspace behavior
                        charInputs[index - 1].focus();
                    }
                });
            });
        });
    }

    function loadTelLibrary() {
        const input = document.querySelector("#mobileNo");
        if (input) {
            var intl = window.intlTelInput(input, {
                nationalMode: true,
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
                autoHideDialCode: false,
                separateDialCode: false,
                initialCountry: 'auto',
                geoIpLookup: (success, failure) => {
                    let countryCode = 'in';
                    const fetchIPApi = fetch('https://api.db-ip.com/v2/free/self');
                    fetchIPApi.then(
                        (res) => {
                            if (res?.ipAddress) {
                                const fetchCountryByIpApi = fetch('http://ip-api.com/json/' + `${res.ipAddress}`);
                                fetchCountryByIpApi.then(
                                    (fetchCountryByIpApiRes) => {
                                        if (fetchCountryByIpApiRes?.countryCode) {
                                            return success(fetchCountryByIpApiRes.countryCode);
                                        } else {
                                            return success(countryCode);
                                        }
                                    },
                                    (fetchCountryByIpApiErr) => {
                                        const fetchCountryByIpInfoApi = fetch('https://ipinfo.io/' + `${res?.ipAddress}`);

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
                }
            });
            setIntl(intl);
        }
    }
    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/css/intlTelInput.css"></link>
            <script src="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js"></script>
            <section className="entry signup d-flex">
                <div className="entry__left_section col-xl-3 col-lg-4 col-md-5">
                    <a href={link}>
                        <img
                            src="/img/giddh-logo.svg"
                            className="entry__left_section__brand_logo"
                        />
                    </a>
                    <div className="entry__left_section__details pe-5">
                        <div className="container">
                            <h2 className="c-fs-3 line-height-36 mb-4">
                                Join GIDDH for Easy Bookkeeping
                            </h2>
                            <p>Features:</p>
                            <ul className="ps-0 my-4">
                                <li className="d-flex align-items-center">
                                    <MdDone />
                                    Basic ledger accounting
                                </li>
                                <li className="d-flex align-items-center">
                                    <MdDone />
                                    Manage branches & warehouses
                                </li>
                                <li className="d-flex align-items-center">
                                    <MdDone />
                                    ICICI Bank connectivity
                                </li>
                                <li className="d-flex align-items-center">
                                    <MdDone />
                                    Streamlined inventory management
                                </li>
                            </ul>
                            <p>Trusted by over 5,000 businesses</p>
                        </div>
                    </div>
                </div>
                <div className="entry__right_section col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
                    <div className="container entry__right_section__container">
                        {/* STEP #1 */}
                        {currentStep == 1 && (
                            <div className="entry__right_section__container--step entry__right_section__container--active">
                                <a href={link} className="d-none entry__right_section__container--logo-visible-in-small">
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
                                            <GoogleLogin googleApiSuccessCallback={googleApiSuccessCallback} />
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
                                    <a href={link + '/login'} className="text_blue">
                                        Login
                                    </a>
                                </p>
                            </div>
                        )}

                        {/* STEP #2 */}
                        {currentStep == 2 && (
                            <div className="entry__right_section__container--step entry__right_section__container--active">
                                <a href={link} className="d-none entry__right_section__container--logo-visible-in-small">
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
                                            <MdCheckCircle className={"me-1 " + (emailDetails && emailDetails.isVerified && mobileDetails && mobileDetails.isVerified ? " icon-success" : "")} />{" "}
                                            Verify email & mobile number
                                        </div>
                                    </div>
                                    <div className="row mx-0 px-0 step_input_wrapper mt-4">
                                        <label htmlFor="email" className="mb-3 ps-0">
                                            Verify email
                                        </label>
                                        <div className="step_input_wrapper--fixed-height d-flex flex-wrap p-0">
                                            <div className="step_input_wrapper__left col-xxl-6 col-xl-7 col-lg-12" style={{ paddingRight: showEmailOtp || (emailDetails && emailDetails.isVerified) ? "0" : null }}>
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
                                                        <button className="btn custom-signup-btn opacity-100" onClick={sendEmailOtp} disabled={emailGetOtpInProgress}>
                                                            {emailGetOtpInProgress && (
                                                                <div className="spinner-border spinner-border-sm col-primary" role="status"></div>
                                                            )}

                                                            {!emailGetOtpInProgress && (
                                                                <span>Get OTP</span>
                                                            )}
                                                        </button>
                                                    )}
                                                    {showEmailOtp && (
                                                        <button className="btn custom-signup-btn opacity-100 wide-btn" onClick={() => setShowEmailOtpSection(false)} disabled={emailGetOtpInProgress}>
                                                            {emailGetOtpInProgress && (
                                                                <div className="spinner-border spinner-border-sm col-primary" role="status"></div>
                                                            )}

                                                            {!emailGetOtpInProgress && (
                                                                <span>Change Email</span>
                                                            )}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                            {showEmailOtp && (!emailDetails || !emailDetails.isVerified) && (
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
                                                            <button id="verify-email-button" className="btn custom-signup-btn opacity-100" onClick={() => verifyOtp('email')} disabled={emailVerifyOtpInProgress}>
                                                                {emailVerifyOtpInProgress && (
                                                                    <div className="spinner-border spinner-border-sm col-primary" role="status"></div>
                                                                )}

                                                                {!emailVerifyOtpInProgress && (
                                                                    <span>Verify</span>
                                                                )}
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
                                    <div className="row mx-0 px-0 step_input_wrapper mb-3">
                                        <label htmlFor="contact" className="mb-3 ps-0">
                                            Verify Mobile number
                                        </label>
                                        <div className="step_input_wrapper--fixed-height d-flex flex-wrap p-0">
                                            <div className="step_input_wrapper__left col-xxl-6 col-xl-7 col-lg-12" style={{ paddingRight: showMobileOtp || (mobileDetails && mobileDetails.isVerified) ? "0" : null }}>
                                                <div className="d-flex step_input_wrapper__mobile_veiw">
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        id="mobileNo"
                                                        placeholder="98********"
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
                                                        <button className="btn custom-signup-btn opacity-100" onClick={sendMobileOtp} disabled={mobileGetOtpInProgress}>
                                                            {mobileGetOtpInProgress && (
                                                                <div className="spinner-border spinner-border-sm col-primary" role="status"></div>
                                                            )}

                                                            {!mobileGetOtpInProgress && (
                                                                <span>Get OTP</span>
                                                            )}
                                                        </button>
                                                    )}
                                                    {showMobileOtp && (
                                                        <button className="btn custom-signup-btn opacity-100 wide-btn" onClick={() => setShowMobileOtpSection(false)} disabled={mobileGetOtpInProgress}>
                                                            {mobileGetOtpInProgress && (
                                                                <div className="spinner-border spinner-border-sm col-primary" role="status"></div>
                                                            )}

                                                            {!mobileGetOtpInProgress && (
                                                                <span>Change Mobile</span>
                                                            )}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                            {showMobileOtp && (!mobileDetails || !mobileDetails.isVerified) && (
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
                                                            <button id="verify-mobile-button" className="btn custom-signup-btn opacity-100" onClick={() => verifyOtp('mobile')} disabled={mobileVerifyOtpInProgress}>
                                                                {mobileVerifyOtpInProgress && (
                                                                    <div className="spinner-border spinner-border-sm col-primary" role="status"></div>
                                                                )}

                                                                {!mobileVerifyOtpInProgress && (
                                                                    <span>Verify</span>
                                                                )}
                                                            </button>
                                                        </div>
                                                        {connectedChannels && (
                                                            <a href="#" className="col-dark mt-3 c-fs-6 d-flex resend-text">
                                                                Resend on{" "}
                                                                <ul>
                                                                    {connectedChannels.map((item, index) => (
                                                                        <li key={item.value}><span className="col-primary c-fw-600" onClick={() => retrySendOtp(item.value)}> {item.name} </span>
                                                                            {connectedChannels.length > (index + 1) && (
                                                                                <span> or </span>
                                                                            )}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div>
                                            <button className="me-3 btn back_btn" onClick={() => updateCurrentStep(1)}>
                                                {" "}
                                                <MdKeyboardArrowLeft />
                                                Back
                                            </button>
                                            <button className="btn submit_btn col-white opacity-100" onClick={() => initiateSignup()} disabled={signupInProgress}>
                                                {signupInProgress && (
                                                    <div className="spinner-border spinner-border-sm col-white" role="status"></div>
                                                )}

                                                {!signupInProgress && (
                                                    <span>Submit</span>
                                                )}
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
