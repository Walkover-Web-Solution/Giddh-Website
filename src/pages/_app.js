import "@/scss/global.scss";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import DownloadFreeModal from"@/components/downloadFreeModal";
import { useEffect } from "react";
import { useRouter } from "next/router";


export default function MyApp({ Component, pageProps }) {

  const router = useRouter()
  var brawserPath = router.pathname;



  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
    <Navbar/>
      <Header brawserPath={brawserPath}/>
      <Component {...pageProps} />
      <Footer/>

      {/*======================== Download Free Modal======================  */}
      <DownloadFreeModal />
    </>
  );
}