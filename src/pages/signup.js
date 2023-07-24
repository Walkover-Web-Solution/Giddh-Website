import { MdKeyboardArrowRight, MdDone } from "react-icons/md";
const signUp = () => {
  return (
    <>
      <section className="entry signup d-flex">
        <div className="entry__left_section col-xl-3 col-lg-4 col-md-5">
          <img
            src="/img/giddh-logo.svg"
            className="entry__left_section__brand_logo"
          />
          <div 
          className="entry__left_section__details pe-5">
            <h1 className="c-fs-3 mb-4">Signup to avail a complete suite of MSG91 products</h1>
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
        <div className="entry__right_section col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
          <div className="entry__right_section__container">
            <div className="d-none mb-5 entry__right_section__container--logo-visible-in-small">
              <img
                src="/img/giddh-logo.svg"
                width="auto"
                height="40px"
                alt="Giddh Icon"
                className=""
              />
            </div>
            <h1>Create an account</h1>

            <div className="entry__right_section__container__entry_with d-flex mb-4 me-4">
              <div className="signup_with__left pe-4">
                <span className="d-inline-block mb-4">Sign up with</span>

                <div className="d-flex align-items-center">
                  <button className="entry__right_section__container__entry_with--btn-with-text me-3">
                    <img
                      src="/img/google-logo.svg"
                      width="24px"
                      height="24px"
                      alt="Google Icon"
                    />
                    <span>Google</span>
                  </button>
                  <button className="me-3">
                    <img
                      src="/img/google-logo.svg"
                      width="24px"
                      height="24px"
                      alt="Google Icon"
                    />
                  </button>
                  <button>
                    <img
                      src="/img/google-logo.svg"
                      width="24px"
                      height="24px"
                      alt="Google Icon"
                    />
                  </button>
                </div>
              </div>

              <div className="signup_with__right ps-4">
                <span className="d-inline-block mb-4">Are you a developer?</span>

                <div className="d-flex align-items-center">
                  <button className="me-3">
                    <img
                      src="/img/google-logo.svg"
                      width="24px"
                      height="24px"
                      alt="Google Icon"
                    />
                  </button>
                  <button className="me-3">
                    <img
                      src="/img/google-logo.svg"
                      width="24px"
                      height="24px"
                      alt="Google Icon"
                    />
                  </button>
                  <button>
                    <img
                      src="/img/google-logo.svg"
                      width="24px"
                      height="24px"
                      alt="Google Icon"
                    />
                  </button>
                </div>
              </div>
            </div>

            <span className="d-block line_on_right c-fs-6 mb-4">or</span>

            <button className="entry__right_section__container__entry_button mb-4">
              Sign up with Email
              <MdKeyboardArrowRight />
            </button>

            <p className="c-fs-6 mb-4">
              If you already have an account,{" "}
              <a href="#" className="text_blue">
                Login
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default signUp;
