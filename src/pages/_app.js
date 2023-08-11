import "@/scss/global.scss";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GlobalComponents from "@/components/globalComponents";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  var browserPath = router.pathname;

  let currentPathArray = browserPath.split("/");
  let loginSignupPath = currentPathArray[currentPathArray.length - 1];
  let loginSignupPathStatus =
    loginSignupPath === "login" || loginSignupPath === "signup" ? false : true;

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      {loginSignupPathStatus ? <Navbar /> : null}
      <Header browserPath={browserPath} />
      <Component {...pageProps} />
      {loginSignupPathStatus ? <Footer /> : null}
      <GlobalComponents />
    </>
  );
}
