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
  const rawBrowserPath = router.asPath;
  const arrayBrawserPath = rawBrowserPath.split("/");
  var browserPath = `/${arrayBrawserPath[1]}`;
  if (browserPath.includes("?")) {
    var shortedPath = browserPath.slice(0, browserPath.indexOf("?"));
  } else if (browserPath === "/") {
    var shortedPath = "";
  } else if (browserPath.length > 3) {
    var shortedPath = "";
  } else {
    var shortedPath = browserPath;
  }

  const isGlobal =
    shortedPath === "" ||
    shortedPath === "/" ||
    shortedPath === "/?" ||
    shortedPath.length > 3;
  const isIndia = shortedPath === "/in";
  const isAE = shortedPath === "/ae";
  const isUK = shortedPath === "/uk";

  const path = {
    linkPrefix: shortedPath,
    baseURL: "https://giddh.com",
    isGlobal: isGlobal,
    isIndia: isIndia,
    isAE: isAE,
    isUK: isUK,
  };

  let currentPathArray = rawBrowserPath.split("/");
  let loginSignupPath = currentPathArray[currentPathArray.length - 1];
  let loginSignupPathStatus =
    loginSignupPath === "login" ||
    loginSignupPath === "signup" ||
    loginSignupPath === "googleauth"
      ? false
      : true;

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
       const script = document.createElement("script");
       script.src = "https://embed.typeform.com/embed.js";
       script.async = true;
       document.body.appendChild(script);
  }, []);
  return (
    <>
      {loginSignupPathStatus ? (
        <Navbar browserPath={rawBrowserPath} path={path} />
      ) : null}
      <Header browserPath={rawBrowserPath} path={path} />
      <Component path={path} {...pageProps} />
      {loginSignupPathStatus ? <Footer path={path} /> : null}
      <GlobalComponents />
      <Toastify />
    </>
  );
}
