const otpLogin = ({ sendOtpLoginCallbackToParent }) => {

    function initiateLogin(data) {
        sendOtpLoginCallbackToParent(data);
    }

    function initOtpLogin() {
        /* OTP LOGIN */
        if (window['initSendOTP'] === undefined) {
            addOtpWidgetScript(false, initiateLogin);
        } else {
            var configuration = getOtpwidgetConfiguration(false, initiateLogin);
            initSendOTP(configuration);
        }
    }

    return (
        <>
            <button className="entry__right_section__container__entry_button mb-4 me-0 me-md-3" onClick={initOtpLogin}>
                Login with OTP
            </button>
        </>
    )
}
export default otpLogin;