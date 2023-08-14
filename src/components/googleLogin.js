const googleLogin = () => {

    const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const GOOGLE_REDIRECT_URI = process.env.NEXT_PUBLIC_SITE_URL + '/googleauth';

    function initGoogleSignup() {
        var width = 600;
        var height = 500;
        var left = (screen.width / 2) - (width / 2);
        var top = (screen.height / 2) - (height / 2);
        window.open("https://accounts.google.com/o/oauth2/auth?response_type=token&client_id=" + GOOGLE_CLIENT_ID + "&redirect_uri=" + GOOGLE_REDIRECT_URI + "&state&scope=email%20profile&approval_prompt=force", "Giddh - Google Login", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
    }

    return (
        <>
            <button className="me-3" onClick={initGoogleSignup}>
                <img
                    src="/img/google-logo.svg"
                    width="24px"
                    height="24px"
                    alt="Google Icon"
                />
                <span>Google</span>
            </button>
        </>
    )
}
export default googleLogin;