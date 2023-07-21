const logIn = () => {
  return (
    <>
      <section className="login d-flex  ">
        <div className="login__left_section col-lg-3 col-md-6">
          <img src="/img/giddh-logo.svg" className="login__left_section__brand_logo"/>
          <img src="/img/login-page-left-section-banner.svg" className="login__left_section__banner pe-4 img-fluid" />
        </div>
        <div className="login__right_section col-lg-9 col-md-6 col-sm-12 col-12">
          <div className="login__right_section__container">
            <div className="d-none mb-5 login__right_section__container--logo-visible-in-small">
            <img
                    src="/img/giddh-logo.svg"
                    width="auto"
                    height="40px"
                    alt="Giddh Icon"
                    className=""
                  />
            </div>
            <h1>Welcome back!</h1>
            <div className="login__right_section__container__login_with mb-4">
              <span className="d-inline-block mb-4">
                Login with
              </span>

              <div className="d-flex align-items-center">
                <button className="login__right_section__container__login_with--btn-with-text">
                  <img
                    src="/img/google-logo.svg"
                    width="24px"
                    height="24px"
                    alt="Google Icon"
                  />
                  <span>Google</span>
                </button>
                {/* <button>
                            <img src="/img/" alt="Microsoft Icon" />
                        </button>
                        <button>
                            <img src="/img/" alt=" Icon" />
                        </button>
                        <button>
                            <img src="/img/" alt="Github Icon" />
                        </button>
                        <button>
                            <img src="/img/" alt="Gitlab Icon" />
                        </button>
                        <button>
                            <img src="/img/" alt="Google Icon" />
                        </button> */}
              </div>
            </div>

            <span className="d-block line_on_right c-fs-6 mb-4">or</span>

            <button className="login__right_section__container__login_button mb-4">Login with OTP</button>

            <p className="c-fs-6 mb-4">
              Trouble logging in ? <span className="text_blue">Click here</span>
            </p>
            <a className="c-fs-6 text_blue">Create new account</a>
          </div>
        </div>
      </section>
    </>
  );
};
export default logIn;
