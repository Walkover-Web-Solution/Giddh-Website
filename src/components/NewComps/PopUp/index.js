import Image from "next/image";
import styles from "./PopUp.module.scss";
import { useEffect, useState } from "react";

export default function PopUp() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
      
      // Set up backdrop and body class
      document.body.classList.add("modal-open");
      
      // Create and add backdrop if it doesn't exist
      let backdrop = document.querySelector(".modal-backdrop");
      if (!backdrop) {
        backdrop = document.createElement("div");
        backdrop.className = "modal-backdrop fade show";
        document.body.appendChild(backdrop);
      }
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove("modal-open");
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      document.body.removeChild(backdrop);
    }
  };

  return (
    <div
      className={`modal fade ${showModal ? 'show' : ''}`}
      id="giddhPopUp"
      tabIndex="-1"
      aria-hidden="true"
      style={{ display: showModal ? 'block' : 'none' }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className={`modal-content p-4 ${styles.bgModal}`}>
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3 "
            data-dismiss="modal"
            id="closeModal"
            onClick={closeModal}
          ></button>
          <div className=" pt-5">
            <div className="d-flex align-items-start gap-2 mb-4 flex-column-reverse flex-md-row">
              <span className="fw-bold m-0 col-primary sub-heading">
                Still stuck somewhere?
              </span>
              <div className="ms-auto">
                <Image
                  src="/img/giddh-logo.svg"
                  alt="Giddh Logo"
                  width={120}
                  height={36}
                  priority
                />
              </div>
            </div>
            <div className="d-flex flex-column gap-2 flex-md-row">
              <div className="col-md-6">
                <h2 className="c-fs-3">
                  Don’t worry, getting started with Giddh is quick and simple.
                </h2>

                <button
                  onClick={() => {
                    document
                      .getElementById("SeeGiddhInAction")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    closeModal();
                  }}
                  className={`btn ${styles.getStarted}`}
                >
                  Get Started
                </button>
              </div>

              <div className="pt-3 pt-sm-5 align-self-center align-self-md-end align-self-lg-start">
                <Image
                  src="/img/laptop_mockup.svg"
                  alt="Giddh dashboard screenshot"
                  width={600}
                  height={400}
                  className={`w-100 h-auto `}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}