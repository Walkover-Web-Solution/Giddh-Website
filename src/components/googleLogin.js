import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const googleLogin = (props) => {
    const [googleApiInProgress, setGoogleApiInProgress] = useState(false);
    const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const GOOGLE_REDIRECT_URI = process.env.NEXT_PUBLIC_SITE_URL + '/googleauth';

    useEffect(() => {
        window.addEventListener("message", function (event) {
            if (event.data && event.data.origin === "giddh" && event.data.accessToken) {
                getGoogleUserDetails(event.data.accessToken);
            }
        });
    }, []);

    function initGoogleSignup() {
        var width = 600;
        var height = 500;
        var left = (screen.width / 2) - (width / 2);
        var top = (screen.height / 2) - (height / 2);
        window.open("https://accounts.google.com/o/oauth2/auth?response_type=token&client_id=" + GOOGLE_CLIENT_ID + "&redirect_uri=" + GOOGLE_REDIRECT_URI + "&state&scope=email%20profile&approval_prompt=force", "Giddh - Google Login", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
    }

    async function getGoogleUserDetails(accessToken) {
        setGoogleApiInProgress(true);
        await fetch(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json`,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "authorization": "Bearer " + accessToken
                }
            }
        )
            .then((res) => res.json())
            .then((res) => {
                res.accessToken = accessToken;
                setGoogleApiInProgress(false);
                props.googleApiSuccessCallback(res);
            })
            .catch((err) => googleApiErrorCallback(err));
    }

    function googleApiErrorCallback(error) {
        setGoogleApiInProgress(false);
        toast(error, { type: "error"});
    }

    return (
        <>
            {!googleApiInProgress && (
                <button className="me-3" onClick={initGoogleSignup}>
                    <img
                        src="/img/google-logo.svg"
                        width="24px"
                        height="24px"
                        alt="Google Icon"
                    />
                    <span>Google</span>
                </button>
            )}
            {googleApiInProgress && (
                <button className="btn custom-signup-btn opacity-100">
                    <div className="spinner-border spinner-border-sm col-primary" role="status"></div>
                </button>
            )}
        </>
    )
}
export default googleLogin;