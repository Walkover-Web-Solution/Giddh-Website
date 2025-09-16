import Image from "next/image";
import styles from "./GiddhPopUp.module.scss";

export default function GiddhPopUp() {
    return (
        <div
            className={`modal fade `}
            id="giddhPopUp"
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className={`modal-content p-4 ${styles.bgModal}`}>
                    <button
                        type="button"
                        className="btn-close position-absolute top-0 end-0 m-3 "
                        data-dismiss="modal"
                        id="closeModal"
                        onClick={() => {
                            const modalEl = document.getElementById("giddhPopUp");
                            modalEl.classList.remove("show");
                            modalEl.style.display = "none";
                            document.body.classList.remove("modal-open");
                            const backdrop = document.querySelector(".modal-backdrop");
                            if (backdrop) {
                                document.body.removeChild(backdrop);
                            }
                        }}
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
                                        const modalEl = document.getElementById("giddhPopUp");
                                        modalEl.classList.remove("show");
                                        modalEl.style.display = "none";
                                        document.body.classList.remove("modal-open");
                                        const backdrop = document.querySelector(".modal-backdrop");
                                        if (backdrop) {
                                            document.body.removeChild(backdrop);
                                        }
                                    }}
                                    className={`btn ${styles.getStarted}`}
                                >
                                    Get Started
                                </button>
                            </div>

                            <div
                                className="pt-3 pt-sm-5 align-self-center align-self-md-end align-self-lg-start"
                            >
                                <Image
                                    src="/img/laptop_mockup.svg"
                                    alt="Giddh dashboard screenshot"
                                    width={600}
                                    height={400}
                                    className={`w-100 h-auto `}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
