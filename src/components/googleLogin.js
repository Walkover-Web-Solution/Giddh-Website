const googleLogin = () => {

    const REACT_APP_GG_APP_ID = '641015054140-3cl9c3kh18vctdjlrt9c8v0vs85dorv2.apps.googleusercontent.com';
    const REACT_APP_GG_REDIRECT_URI = 'http://localhost:8080/googleauth';

    function initGoogleSignup() {
        var width = 600;
        var height = 500;
        var left = (screen.width / 2) - (width / 2);
        var top = (screen.height / 2) - (height / 2);
        window.open("https://accounts.google.com/o/oauth2/auth?response_type=token&client_id=" + REACT_APP_GG_APP_ID + "&redirect_uri=" + REACT_APP_GG_REDIRECT_URI + "&state&scope=email%20profile&approval_prompt=force", "Giddh - Google Login", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
    }

    return (
        <>
            <button className="entry__right_section__container__entry_with--btn-with-text me-3" onClick={initGoogleSignup}>
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