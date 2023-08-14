import { useEffect } from "react";
import GoogleLogin from "@/components/googleLogin";
import dynamic from "next/dynamic";
import Script from "next/script";
const OtpLogin = dynamic(() => import("@/components/otpLogin"), {
  ssr: false,
});

const logIn = () => {
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

  var adwordsParams = "";

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
      .catch((err) => console.log("Something went wrong!", err));
  }

  async function initiateLogin(accessToken) {
    await fetch(`https://apitest.giddh.com/v2/signup-with-google`, {
      method: "GET",
      mode: "cors",
      cache: "no-store",
      headers: { "access-token": accessToken },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.body.statusCode === "AUTHENTICATE_TWO_WAY") {
          // open verification modal
        } else {
          deleteUtmCookies();
          if (response.body.isNewUser === true) {
            window.location =
              "https://giddh.com/thankyou?token=" + accessToken + adwordsParams;
          } else {
            window.location =
              "https://test.giddh.com/token-verify?token=" +
              accessToken +
              adwordsParams;
          }
        }
      })
      .catch((err) => console.log("Something went wrong!", err));
  }

  return (
    <>
      <Script src="/js/helper.js"></Script>
      <section className="entry d-flex  ">
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

            <OtpLogin />

            {/* <p className="c-fs-6 mb-4">
              Trouble logging in ? <a href="#" className="text_blue">Click here</a>
            </p> */}
            <a href="signup" className="c-fs-6 text_blue">
              Create new account
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default logIn;
