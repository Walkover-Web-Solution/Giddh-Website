const otpLogin = () => {

    async function initiateLogin(data) {
        await fetch(
            `https://apitest.giddh.com/v2/login`,
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
                            window.location = "https://test.giddh.com/token-verify?request=" + response.body.session.id;
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
        var configuration = {
            widgetId: "33686b716134333831313239",
            tokenAuth: "205968TmXguUAwoD633af103P1",
            success: function (data) {
                initiateLogin(data);
            }
        };

        /* OTP LOGIN */
        if (window['initSendOTP'] === undefined) {
            let scriptTag = document.createElement('script');
            scriptTag.src = "https://control.msg91.com/app/assets/otp-provider/otp-provider.js";
            scriptTag.type = 'text/javascript';
            scriptTag.defer = true;
            scriptTag.onload = () => {
                initSendOTP(configuration);
            };
            document.body.appendChild(scriptTag);
        } else {
            initSendOTP(configuration);
        }
    }

    return (
        <>
            <button className="entry__right_section__container__entry_button mb-4" onClick={initOtpLogin}>
                Login with OTP
            </button>
        </>
    )
}
export default otpLogin;