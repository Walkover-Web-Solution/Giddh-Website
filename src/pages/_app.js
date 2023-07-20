import "@/scss/global.scss";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
    <Navbar/>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
