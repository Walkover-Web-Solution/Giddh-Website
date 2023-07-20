const logIn = () => {
  return (
    <>
      <section className="login d-flex  ">
        <div className="login__left_section">
            <img src="/img/login-dummy-img.png  " />
        </div>
        <div className="login__right_section">
          <div className="login__right_section__container">
            <div className="container">
                <div className="row">
                    {/* <div className="">
                    </div> */}
                    <h1>Welcome back!</h1>
                    <div>Login with</div>
                    <div className="d-flex align-items-center">
                        <button>
                            <img src="/img/" alt="Google Icon" />
                            <span>Google</span>
                        </button>
                        <button>
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
                        </button>
                    </div>
                </div>
                <div className="row">
                        <span className="line_on_right">or</span>
                </div>
                <div className="row">
                        <button>
                           Login with OTP
                        </button>

                        <p>Trouble logging in ? <span>Click here</span></p>
                        <p>Create new account</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default logIn;
