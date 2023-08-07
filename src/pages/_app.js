import "@/scss/global.scss";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { MdClose } from "react-icons/md";


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
      <div
        className="modal fade"
        id="downloadFree"
        tabIndex="-1"
        aria-labelledby="downloadFreeLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered download-free-modal">
          <div className="modal-content bg-transparent">
            <div className="modal-header">
              <h4 className="modal-title c-fs-5 col-white" id="downloadFreeLabel">
                Download App
              </h4>
              <span
                className="col-white c-fs-3 cursor-pointer"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <MdClose />
              </span>
            </div>
            <div className="modal-body bg-light text-center">
              <h2 className="c-fs-4 c-fw-600">
                Thanks for downloading Giddh for Windows
              </h2>
              <p className="c-fs-6">
                Download not starting? Try{" "}
                <a href="#" className="text-primary">
                  Direct download link
                </a>
              </p>
              <figure>
                <img
                  src="/img/laptop.png"
                  alt="laptop-with-giddh-dashboard-image"
                  width="200px"
                />
              </figure>
              <div className="d-flex justify-content-center column-gap-2 mt-4 mb-2">
                <a href="#" className="download-free-modal__btn_link">
                  <img src="/img/mac_icon.svg" alt="Mac-Apple-Icon" />
                  Download for mac
                </a>
                <a href="#" className="download-free-modal__btn_link">
                <img src="/img/window-icon.svg"  alt="Windows-Microsoft-Icon"  />
                  Download for windows
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
