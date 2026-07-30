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
    }, 120000);

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
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3 bg-soft-blue">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <Image
              src="/img/giddh-logo.svg"
              alt="Giddh Logo"
              width={100}
              height={30}
            />
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              id="closeModal"
              onClick={closeModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="text-center d-flex flex-column align-items-center gap-2">
            <span className="font-600 m-0 font-primary font-xl">
              Explore more?
            </span>
            <h2 className="font-md garmond-font mb-0">
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
              className="btn btn-primary-outline mt-1"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}