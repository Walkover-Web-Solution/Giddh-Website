import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import GoogleLogin from "@/components/googleLogin";
const OtpLogin = dynamic(() => import("@/components/otpLogin"), {
  ssr: false,
});
const OtpVerifyModal = dynamic(() => import("@/components/otpVerifyModal"), {
  ssr: false,
});

const logIn = (path) => {
  const [authLoginInProgress, setAuthLoginInProgress] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [userResponse, setUserResponse] = useState(null);
  const link = path.path.linkPrefix;
  const isUK = path.path.isUK;
  let region = link ? link.replace("/", "") : "gl";
  if (region) {
    region = region.toUpperCase();
  }

  useEffect(() => {
    setGiddhRegion(region.toLowerCase());
    if (getCookie("giddh_session_id")) {
      validateUserSession(getCookie("giddh_session_id"));
    }
  }, []);

  async function validateUserSession(sessionId) {
    await fetch(
      (isUK
        ? process.env.NEXT_PUBLIC_UK_API_URL
        : process.env.NEXT_PUBLIC_API_URL) + "/v2/user",
      {
        method: "GET",
        mode: "cors",
        cache: "no-store",
        headers: { "session-id": sessionId },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "success") {
          window.location =
            process.env.NEXT_PUBLIC_APP_URL +
            "/token-verify?request=" +
            response.body.session.id +
            "&region=" +
            region;
        } else {
          removeGiddhSession();
        }
      });
  }

  async function initiateLogin(result) {
    await fetch(
      (isUK
        ? process.env.NEXT_PUBLIC_UK_API_URL
        : process.env.NEXT_PUBLIC_API_URL) + "/v2/google-login",
      {
        method: "GET",
        mode: "cors",
        cache: "no-store",
        headers: { "access-token": result.accessToken },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "success") {
          if (response.body.statusCode === "AUTHENTICATE_TWO_WAY") {
            showToaster(response.body.text, "success");
            setUserResponse(response.body);
            setShowVerificationModal(true);
          } else {
            setGiddhSession(response.body.session.id);
            window.location =
              process.env.NEXT_PUBLIC_APP_URL +
              "/token-verify?token=" +
              result.accessToken +
              "&region=" +
              region;
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
        (isUK
          ? process.env.NEXT_PUBLIC_UK_API_URL
          : process.env.NEXT_PUBLIC_API_URL) + "/v2/auth-login",
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
            if (response.body.statusCode === "AUTHENTICATE_TWO_WAY") {
              setAuthLoginInProgress(false);
              setUserResponse(response.body);
              setShowVerificationModal(true);
            } else {
              setGiddhSession(response.body.session.id);
              window.location =
                process.env.NEXT_PUBLIC_APP_URL +
                "/token-verify?request=" +
                response.body.session.id +
                "&region=" +
                region;
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
    window.location =
      process.env.NEXT_PUBLIC_APP_URL +
      "/token-verify?request=" +
      response.session.id +
      "&region=" +
      region;
  }

  function showToaster(message, type) {
    toast.dismiss();
    toast(message, { type: type });
  }

  return (
    <>
      <section className="entry d-flex">
        <div className="entry__left_section col-xl-3 col-lg-4 col-md-5">
          <a href={link == "" ? "/" : link}>
            <img
              src="/img/giddh-logo.svg"
              className="entry__left_section__brand_logo"
              alt="giddh logo"
            />
          </a>
          <div className="container">
            <img
              src="/img/login-page-left-section-banner.svg"
              className="entry__left_section__banner px-4 img-fluid"
              alt="login page left section banner"
            />
          </div>
        </div>
        <div className="entry__right_section col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
          <div className="container entry__right_section__container">
            <a
              href={link == "" ? "/" : link}
              className="d-none mb-5 entry__right_section__container--logo-visible-in-small"
            >
              <img
                src="/img/giddh-logo.svg"
                width="auto"
                height="40px"
                alt="Giddh Icon"
              />
            </a>
            <h1>Welcome back!</h1>
            <div className="entry__right_section__container__entry_with mb-4">
              <h2 className="d-inline-block mb-4 c-fw-400 c-fs-5">Login with</h2>

              <div className="d-flex align-items-center">
                <GoogleLogin googleApiSuccessCallback={initiateLogin} />
              </div>
            </div>

            <span className="d-block line_on_right c-fs-6 mb-4">or</span>

            <OtpLogin
              authLoginInProgress={authLoginInProgress}
              sendOtpLoginCallbackToParent={sendOtpLoginCallbackToParent}
            />
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

            <a href={link + "/signup"} className="c-fs-6 text_blue">
              Create new account
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default logIn;
