const otpLogin = (props) => {

    function initiateLogin(data) {
        props.sendOtpLoginCallbackToParent(data);
    }

    function initOtpLogin() {
        /* OTP LOGIN */
        if (window['initSendOTP'] === undefined) {
            addOtpWidgetScript(false, initiateLogin, false);
        } else {
            var configuration = getOtpwidgetConfiguration(false, initiateLogin);
            initSendOTP(configuration);
        }
    }

    return (
        <>
            {!props.authLoginInProgress && (
                <button className="entry__right_section__container__entry_button mb-4 me-0 me-md-3" onClick={initOtpLogin}>
                    Login with OTP
                </button>
            )}
            {props.authLoginInProgress && (
                <button className="btn custom-signup-btn otp-login-btn opacity-100 entry__right_section__container__entry_button me-0 me-md-3">
                    <div className="spinner-border spinner-border-sm col-primary" role="status"></div>
                </button>
            )}
        </>
    )
}
export default otpLogin;