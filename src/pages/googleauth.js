import { useEffect } from "react";

const googleAuth = () => {

    useEffect(() => {
        const hash = window.location.hash.split("#")[1];
        const parsedHash = new URLSearchParams(hash);
        const accessToken = parsedHash.get("access_token");
        window.parent.postMessage({ origin: 'giddh', accessToken: accessToken }, "*");
        window.close();
    })

    return (
        <>
            Loading...
        </>
    )
}
export default googleAuth;