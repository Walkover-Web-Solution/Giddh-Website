import "@/scss/global.scss";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GlobalComponents from "@/components/globalComponents";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Toastify from "@/components/toastify";

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    var browserPath = router.asPath;   

    if (browserPath !== '/') {
        const pattern = /\/([^/?]+)/;
        const result = browserPath.match(pattern);    
        browserPath = result ? result[0] : browserPath;
      }
      
    var path = "/" + browserPath.split("/")[1];    

    path = {
      linkPrefix: path,
      baseURL: "https://giddh.com",
      isGlobal: path === "" || path ==="/?" || path.length > 3 && path.includes("?"),
      isIndia: path === "/in",
      isAE: path === "/ae",
      isUK: path === "/uk",
    };

    let currentPathArray = browserPath.split("/");
    let loginSignupPath = currentPathArray[currentPathArray.length - 1];
    let loginSignupPathStatus =
        loginSignupPath === "login" || loginSignupPath === "signup" || loginSignupPath === "googleauth" ? false : true;

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <>
            {loginSignupPathStatus ? <Navbar browserPath={browserPath} path={path} /> : null}
            <Header browserPath={browserPath} path={path} />
            <Component path={path} {...pageProps} />
            {loginSignupPathStatus ? <Footer path={path}/> : null}
            <GlobalComponents />
            <Toastify />
        </>
    );
}
