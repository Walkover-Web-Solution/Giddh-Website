import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { toast } from 'react-toastify';
import GoogleLogin from "@/components/googleLogin";
const OtpLogin = dynamic(() => import("@/components/otpLogin"), {
    ssr: false
});
const OtpVerifyModal = dynamic(() => import("@/components/otpVerifyModal"), {
    ssr: false
});

const logIn = () => {
    const [authLoginInProgress, setAuthLoginInProgress] = useState(false);
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [userResponse, setUserResponse] = useState(null);
    const [link, setLink] = useState(process.env.NEXT_PUBLIC_SITE_URL);

    useEffect(() => {
        setLink(getCurrentSiteCountryUrl(process.env.NEXT_PUBLIC_SITE_URL));

        if (getCookie("giddh_session_id")) {
            validateUserSession(getCookie("giddh_session_id"));
        }
    }, []);

    async function validateUserSession(sessionId) {
        await fetch(process.env.NEXT_PUBLIC_API_URL + '/v2/user', {
            method: "GET",
            mode: "cors",
            cache: "no-store",
            headers: { "session-id": sessionId },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.status === "success") {
                    window.location = process.env.NEXT_PUBLIC_APP_URL + "/token-verify?request=" + response.body.session.id;
                } else {
                    removeGiddhSession();
                }
            })
    }

    async function initiateLogin(result) {
        await fetch(process.env.NEXT_PUBLIC_API_URL + '/v2/google-login', {
            method: "GET",
            mode: "cors",
            cache: "no-store",
            headers: { "access-token": result.accessToken },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.status === "success") {
                    if (response.body.statusCode === "AUTHENTICATE_TWO_WAY") {
                        showToaster(response.body.text, "success");
                        setUserResponse(response.body);
                        setShowVerificationModal(true);
                    } else {
                        setGiddhSession(response.body.session.id);
                        window.location = process.env.NEXT_PUBLIC_APP_URL + "/token-verify?token=" + result.accessToken;
                    }
                } else {
                    showToaster(response.message, "error");
                }
            })
            .catch((err) => showToaster(err, "error"));
    }

    async function sendOtpLoginCallbackToParent(data) {
        if (data.type == "success") {
            setAuthLoginInProgress(true);
            await fetch(
                process.env.NEXT_PUBLIC_API_URL + '/v2/auth-login',
                {
                    method: "POST",
                    mode: "cors",
                    cache: "no-store",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ accessToken: data.message }),
                }
            )
                .then((res) => res.json())
                .then((response) => {
                    if (response.status == "success") {
                        if (response.body.statusCode === 'AUTHENTICATE_TWO_WAY') {
                            setAuthLoginInProgress(false);
                            setUserResponse(response.body);
                            setShowVerificationModal(true);
                        } else {
                            setGiddhSession(response.body.session.id);
                            window.location = process.env.NEXT_PUBLIC_APP_URL + "/token-verify?request=" + response.body.session.id;
                        }
                    } else {
                        setAuthLoginInProgress(false);
                        showToaster(response.message, "error");
                    }
                })
                .catch((err) => showToaster(err, "error"));
        } else {
            showToaster(data.message, "error");
        }
    }

    function otpVerifyCallback(response) {
        setGiddhSession(response.session.id);
        window.location = process.env.NEXT_PUBLIC_APP_URL + "/token-verify?request=" + response.session.id;
    }

    function showToaster(message, type) {
        toast.dismiss();
        toast(message, { type: type });
    }

    return (
        <>
            <section className="entry d-flex">
                <div className="entry__left_section col-xl-3 col-lg-4 col-md-5">
                    <a href={link}>
                        <img
                            src="/img/giddh-logo.svg"
                            className="entry__left_section__brand_logo"
                        />
                    </a>
                    <div className="container">
                        <img
                            src="/img/login-page-left-section-banner.svg"
                            className="entry__left_section__banner pe-4 img-fluid"
                        />
                    </div>
                </div>
                <div className="entry__right_section col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
                    <div className="container entry__right_section__container">
                        <a href={link} className="d-none mb-5 entry__right_section__container--logo-visible-in-small">
                            <img
                                src="/img/giddh-logo.svg"
                                width="auto"
                                height="40px"
                                alt="Giddh Icon"
                            />
                        </a>
                        <h1>Welcome back!</h1>
                        <div className="entry__right_section__container__entry_with mb-4">
                            <span className="d-inline-block mb-4">Login with</span>

                            <div className="d-flex align-items-center">
                                <GoogleLogin googleApiSuccessCallback={initiateLogin} />
                            </div>
                        </div>

                        <span className="d-block line_on_right c-fs-6 mb-4">or</span>

                        <OtpLogin authLoginInProgress={authLoginInProgress} sendOtpLoginCallbackToParent={sendOtpLoginCallbackToParent} />
                        {showVerificationModal && (
                            <OtpVerifyModal userResponse={userResponse} otpVerifyCallback={otpVerifyCallback} hideVerificationModal={() => { setShowVerificationModal(false); document.body.classList.remove('otp-verification'); }} />
                        )}

                        <a href={link + '/signup'} className="c-fs-6 text_blue">
                            Create new account
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};
export default logIn;
