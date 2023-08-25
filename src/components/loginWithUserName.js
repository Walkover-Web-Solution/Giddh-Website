import { MdClose } from "react-icons/md";
import { Modal } from "bootstrap";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const loginWithUserName = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        if (!isModalOpen) {
            setIsModalOpen(true);
            loginWithUsernameModal = new Modal(document.getElementById("loginWithUsername"), {
                backdrop: "static",
                keyboard: false,
            });
            loginWithUsernameModal.toggle();
        }
    });

    function showToaster(message, type) {
        toast.dismiss();
        toast(message, { type: type });
    }

    return (
        <>
            <div
                className="modal fade"
                id="loginWithUsername"
                tabIndex="-1"
                aria-labelledby="loginWithUsernameLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered login-with-username-modal">
                    <div className="modal-content bg-transparent">
                        <div className="modal-header">
                            <h4
                                className="modal-title c-fs-5 col-white"
                                id="loginWithUsernameLabel"
                            >
                                Sign In with Username
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
                            <form id="loginForm">
                                <input
                                    type="text"
                                    placeholder="Enter Username / Email"
                                    minLength="4"
                                    pattern="[a-z]{50}"
                                    name="username"
                                    required
                                    autoFocus
                                    autoComplete="off"
                                />
                                  <input
                                    type="password"
                                    placeholder="******"
                                    minLength="4"
                                    name="password"
                                    required
                                    autoComplete="off"
                                />

                                <button
                                    type="submit"
                                    className="btn col-white opacity-100"
                                    disabled={loginInProgress}
                                >
                                    {loginInProgress && (
                                        <div
                                            className="spinner-border spinner-border-sm"
                                            role="status"
                                        ></div>
                                    )}

                                    {!loginInProgress && <span>Login</span>}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default loginWithUserName;
