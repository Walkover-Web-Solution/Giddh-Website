import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import GoogleLogin from "@/components/googleLogin";
const OtpLogin = dynamic(() => import("@/components/otpLogin"), {
    ssr: false
});
const OtpVerifyModal = dynamic(() => import("@/components/otpVerifyModal"), {
    ssr: false
});

const logIn = () => {
    var adwordsParams = ""; // is remaining
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [userResponse, setUserResponse] = useState(null);

    useEffect(() => {
        window.addEventListener("message", function (event) {
            if (
                event.data &&
                event.data.origin === "giddh" &&
                event.data.accessToken
            ) {
                getGoogleUserDetails(event.data.accessToken);
            }
        });
    }, []);

    async function getGoogleUserDetails(accessToken) {
        await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                authorization: "Bearer " + accessToken,
            },
        })
            .then((res) => res.json())
            .then((res) => {
                initiateLogin(accessToken);
            })
            .catch((err) => toast(err, { type: "error" }));
    }

    async function initiateLogin(accessToken) {
        await fetch(process.env.NEXT_PUBLIC_API_URL + '/v2/google-login', {
            method: "GET",
            mode: "cors",
            cache: "no-store",
            headers: { "access-token": accessToken },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.status === "success") {
                    if (response.body.statusCode === "AUTHENTICATE_TWO_WAY") {
                        setUserResponse(response.body);
                        setShowVerificationModal(true);
                    } else {
                        window.location = process.env.NEXT_PUBLIC_APP_URL + "/token-verify?token=" + accessToken + adwordsParams;
                    }
                } else {
                    toast(response.message, { type: "error" });
                }
            })
            .catch((err) => toast(err, { type: "error" }));
    }

    function otpVerifyCallback(response) {
        setGiddhSession(response.session.id);
        window.location = process.env.NEXT_PUBLIC_APP_URL + "/token-verify?request=" + response.session.id;
    }

    async function sendOtpLoginCallbackToParent(data) {
        if (data.type == "success") {
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
                            setUserResponse(response.body);
                            setShowVerificationModal(true);
                        } else {
                            setGiddhSession(response.body.session.id);
                            window.location = process.env.NEXT_PUBLIC_APP_URL + "/token-verify?token=" + data.message;
                        }
                    } else {
                        toast(response.message, { type: "error" });
                    }
                })
                .catch((err) => toast(err, { type: "error" }));
        } else {
            toast(data.message, { type: "error" });
        }
    }

    return (
        <>
            <Script src="/js/helper.js"></Script>
            <section className="entry d-flex">
                <div className="entry__left_section col-xl-3 col-lg-4 col-md-5">
                    <a href="/">
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
                        <div className="d-none mb-5 entry__right_section__container--logo-visible-in-small">
                            <img
                                src="/img/giddh-logo.svg"
                                width="auto"
                                height="40px"
                                alt="Giddh Icon"
                            />
                        </div>
                        <h1>Welcome back!</h1>
                        <div className="entry__right_section__container__entry_with mb-4">
                            <span className="d-inline-block mb-4">Login with</span>

                            <div className="d-flex align-items-center">
                                <GoogleLogin />
                            </div>
                        </div>

                        <span className="d-block line_on_right c-fs-6 mb-4">or</span>

                        <OtpLogin sendOtpLoginCallbackToParent={sendOtpLoginCallbackToParent} />
                        {showVerificationModal && (
                            <OtpVerifyModal userResponse={userResponse} otpVerifyCallback={otpVerifyCallback} />
                        )}

                        {/* <p className="c-fs-6 mb-4">
              Trouble logging in ? <a href="#" className="text_blue">Click here</a>
            </p> */}
                        <a href={process.env.NEXT_PUBLIC_SITE_URL + '/signup'} className="c-fs-6 text_blue">
                            Create new account
                        </a>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
};
export default logIn;
