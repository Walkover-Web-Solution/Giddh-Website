const otpLogin = () => {

    async function initiateLogin(data) {
        await fetch(
            process.env.NEXT_PUBLIC_API_URL + '/v2/login',
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
                if (response && response.status == "success") {
                    if (response.body.statusCode === 'AUTHENTICATE_TWO_WAY') {
                        // open two way auth popup
                    } else {
                        if (response.body.user.isVerified) {
                            setGiddhSession(response.body.session.id);
                            window.location = process.env.NEXT_PUBLIC_APP_URL + "/token-verify?request=" + response.body.session.id;
                        } else {
                            console.log("Your account is not verified! Please verify your account to continue.");
                            // show verification section
                        }
                    }
                } else {
                    console.log(response?.message);
                }
            })
            .catch((err) => console.log("Something went wrong!", err));
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