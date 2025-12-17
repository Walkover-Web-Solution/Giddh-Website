import Image from "next/image";
import { useEffect, useState } from "react";

export default function PopUp() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
      document.body.classList.add("modal-open");
      let backdrop = document.querySelector(".modal-backdrop");
      if (!backdrop) {
        backdrop = document.createElement("div");
        backdrop.className = "modal-backdrop fade show";
        document.body.appendChild(backdrop);
      }
    }, 20000);

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
      className={`modal fade ${showModal ? ' show d-block' : ''}`}
      id="giddhPopUp"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content p-4 bg-soft-blue">
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            data-dismiss="modal"
            id="closeModal"
            onClick={closeModal}
          ></button>
          <div className=" pt-5">
            <div className="d-flex align-items-start gap-2 mb-4 flex-column-reverse flex-md-row">
              <span className="font-600 m-0 font-primary font-sub-heading">
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
                <h2 className="font-md garmond-font">
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
                  className="btn btn-primary-outline"
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
                  className="w-100 h-auto"
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