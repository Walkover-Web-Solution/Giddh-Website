const logIn = () => {
  return (
    <>
      <section className="entry d-flex  ">
        <div className="entry__left_section col-xl-3 col-lg-4 col-md-5">  
          <img
            src="/img/giddh-logo.svg"
            className="entry__left_section__brand_logo"
          />
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
                className=""
              />
            </div>
            <h1>Welcome back!</h1>
            <div className="entry__right_section__container__entry_with mb-4">
              <span className="d-inline-block mb-4">Login with</span>

              <div className="d-flex align-items-center">
                <button className="entry__right_section__container__entry_with--btn-with-text">
                  <img
                    src="/img/google-logo.svg"
                    width="24px"
                    height="24px"
                    alt="Google Icon"
                  />
                  <span>Google</span>
                </button>
              </div>
            </div>

            <span className="d-block line_on_right c-fs-6 mb-4">or</span>

            <button className="entry__right_section__container__entry_button mb-4">
              Login with OTP
            </button>

            <p className="c-fs-6 mb-4">
              Trouble logging in ? <a href="#" className="text_blue">Click here</a>
            </p>
            <a href="#" className="c-fs-6 text_blue">Create new account</a>
          </div>
        </div>
      </section>
    </>
  );
};
export default logIn;
