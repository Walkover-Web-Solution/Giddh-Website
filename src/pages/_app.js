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
  const browserPath = router.asPath;

  const shortedPathArray = browserPath.match(/\/in/);
  const shortedPath = shortedPathArray && shortedPathArray[0];

  const isIndia = shortedPath === "/in";
  const isAE = shortedPath === "/ae";
  const isUK = shortedPath === "/uk";

  const path = {
    linkPrefix: shortedPath,
    baseURL: "https://giddh.com",
    isGlobal: shortedPath === "" || shortedPath === "/" || shortedPath === "/?",
    isIndia: isIndia,
    isAE: isAE,
    isUK: isUK,
  };

  let currentPathArray = browserPath.split("/");
  let loginSignupPath = currentPathArray[currentPathArray.length - 1];
  let loginSignupPathStatus =
    loginSignupPath === "login" ||
    loginSignupPath === "signup" ||
    loginSignupPath === "googleauth"
      ? false
      : true;

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      {loginSignupPathStatus ? (
        <Navbar browserPath={browserPath} path={path} />
      ) : null}
      <Header browserPath={browserPath} path={path} />
      <Component path={path} {...pageProps} />
      {loginSignupPathStatus ? <Footer path={path} /> : null}
      <GlobalComponents />
      <Toastify />
    </>
  );
}
