import React from "react";
import Image from "next/image";
import styles from "./GiddhPopUp.module.scss";
import { MdClose } from "react-icons/md";



export default function GiddhPopUp() {
    return (
        <div
            className={`modal fade ${styles.wrapper}`}
            id="giddhPopUp"
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-lg ">
                <div className="modal-content p-4 position-relative bg-soft-blue ">
                    <button
                        type="button"
                        className="btn-close position-absolute top-0 end-0 m-3 "
                        data-dismiss="modal"
                    >
                    </button>
                    <div className="container pt-5">
                        <div className="d-flex align-items-start mb-4">
                            <div>

                            </div>
                            <h1 className="fw-bold m-0 col-primary">Still stuck somewhere?</h1>
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
                        <div className="d-flex ">
                            <div>
                                <h2 className="mb-3  c-fs-3 pb-4">
                                    Don’t worry, getting started with Giddh is quick and simple.
                                </h2>

                                <div className="d-flex gap-3 ">
                                    <button
                                        onClick={() =>
                                            document
                                                .getElementById("SeeGiddhInAction")
                                                ?.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "center",
                                                })
                                        }
                                        className={`px-3 py-2 c-fs-5 rounded ${styles.getStarted}`}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                            <div className={`sm:pt-5 pt-3 lg:align-self-baseline md:align-self-end align-self-center`}>
                                <Image
                                    src="/img/laptop_mockup.svg"
                                    alt="Giddh dashboard screenshot"
                                    width={400}
                                    height={300}
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
