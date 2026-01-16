import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { getBucketName, getS3BaseUrl, getAppVersion } from "../utils/s3Config";

const downloadFreeModal = () => {
  const [windowsApp, setWindowsApp] = useState("");
  const [macApp, setMacApp] = useState("");

  useEffect(() => {
    getAppVersion("win", setWindowsApp, setMacApp);
    getAppVersion("mac", setWindowsApp, setMacApp);
  }, []);
  return (
    <>
      <div
        className="modal fade"
        id="downloadFree"
        tabIndex="-1"
        aria-labelledby="downloadFreeLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered download-free-modal">
          <div className="modal-content bg-transparent">
            <div className="modal-header justify-content-between">
              <h4
                className="modal-title c-fs-5 col-white"
                id="downloadFreeLabel"
              >
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
                <a
                  href={`${getS3BaseUrl()}/${getBucketName()}/giddh Setup ${windowsApp}.exe`}
                  className="text-primary"
                >
                  Direct download link
                </a>
              </p>
              <figure>
                <img
                  src="/img/laptop.webp"
                  alt="laptop-with-giddh-dashboard-image"
                  width="200px"
                  height="auto"
                />
              </figure>
              <div className="d-flex justify-content-center align-items-center column-gap-2 mt-4 mb-2">
                <a
                  href={`${getS3BaseUrl()}/${getBucketName()}/giddh-${macApp}.dmg`}
                  className="download-free-modal__btn_link"
                >
                  <img src="/img/mac_icon.svg" alt="Mac-Apple-Icon" />
                  Download <span> for mac</span> 
                </a>
                <a
                  href={`${getS3BaseUrl()}/${getBucketName()}/giddh Setup ${windowsApp}.exe`}
                  className="download-free-modal__btn_link"
                >
                  <img
                    src="/img/window-icon.svg"
                    alt="Windows-Microsoft-Icon"
                  />
                  Download <span> for windows</span> 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default downloadFreeModal;
