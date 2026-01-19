import "@/scss/global.scss";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GlobalComponents from "@/components/globalComponents";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Toastify from "@/components/toastify";
import getPageData from "@/utils/getPageData";
import getPageInfo from "@/utils/getPageInfo";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const rawBrowserPath = router.asPath;
  const arrayBrawserPath = rawBrowserPath.split("/");
  const page =
    (arrayBrawserPath[1] === "in" ||
    arrayBrawserPath[1] === "ae" ||
    arrayBrawserPath[1] === "uk"
      ? arrayBrawserPath[2]
      : arrayBrawserPath[1]) || "home";
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
    country: shortedPath ? shortedPath.replace("/", "") : "global",
    linkPrefix: shortedPath,
    baseURL: process.env.NEXT_PUBLIC_SITE_URL || "https://giddh.com",
    page: page,
    isGlobal: isGlobal,
    isIndia: isIndia,
    isAE: isAE,
    isUK: isUK,
  };

  let currentPathArray = rawBrowserPath.split("/");
  let loginSignupPath = currentPathArray[currentPathArray.length - 1];
  const gTagId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  let loginSignupPathStatus =
    loginSignupPath === "login" ||
    loginSignupPath === "signup" ||
    loginSignupPath === "online-accounting-software" ||
    loginSignupPath === "thank-you" ||
    loginSignupPath === "googleauth"
      ? false
      : true;

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      const url = router.asPath?.split("?")[0] || window.location.pathname;
      window.gtag("config", gTagId, {
        page_path: url,
      });
    }
  }, [router.asPath, gTagId]);

  const rawPath = router.asPath?.split("#")[0]?.split("?")[0];
  const pageInfo = getPageInfo(rawPath);
  const pageData = getPageData(pageInfo);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gTagId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gTagId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SE84P2QQ7K"></script>
      {loginSignupPathStatus ? (
        <Navbar browserPath={rawBrowserPath} path={path} />
      ) : null}
      <Header browserPath={rawBrowserPath} path={path} />
      <Component path={path} {...pageProps} pageData={pageData} pageInfo={pageInfo} />
      {loginSignupPathStatus ? <Footer path={path} /> : null}
      <GlobalComponents path={arrayBrawserPath} />
      <Toastify />
    </>
  );
}
