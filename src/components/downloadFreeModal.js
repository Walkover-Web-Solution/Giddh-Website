import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";

const downloadFreeModal = () => {
  const [windowsApp, setWindowsApp] = useState("");
  const [macApp, setMacApp] = useState("");

  useEffect(() => {
    getAppVersion("win");
    getAppVersion("mac");

    //To get latest version of giddh app
    async function getAppVersion(os) {
      let forWhichOS = os === "win" ? "" : "-mac";

      const res = await fetch(
        `https://s3-ap-south-1.amazonaws.com/giddh-app-builds/latest${forWhichOS}.yml`,
        { cache: "no-store" }
      )
        .then((res) => res.blob())
        .then((blob) => blob.text())
        .then((res) => {
          if (res && typeof res === "string") {
            let version = res.split("files")[0];
            let versNum = version.split(" ")[1].trim();
            if (os === "win") {
              setWindowsApp(versNum);
            } else {
              setMacApp(versNum);
            }
          }
        })
        .catch((err) => console.log("yaml err:", err));
    }
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
            <div className="modal-header">
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
                  href={`https://s3-ap-south-1.amazonaws.com/giddh-app-builds/giddh Setup ${macApp}.exe`}
                  className="text-primary"
                >
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
              <div className="d-flex justify-content-center align-items-center flex-column flex-md-row column-gap-2 row-gap-3 mt-4 mb-2">
                <a
                  href={`https://s3-ap-south-1.amazonaws.com/giddh-app-builds/giddh-${windowsApp}.dmg`}
                  className="download-free-modal__btn_link"
                >
                  <img src="/img/mac_icon.svg" alt="Mac-Apple-Icon" />
                  Download for mac
                </a>
                <a
                  href={`https://s3-ap-south-1.amazonaws.com/giddh-app-builds/giddh Setup ${macApp}.exe`}
                  className="download-free-modal__btn_link"
                >
                  <img
                    src="/img/window-icon.svg"
                    alt="Windows-Microsoft-Icon"
                  />
                  Download for windows
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
