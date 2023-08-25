import { MdClose } from "react-icons/md";
import { Modal } from "bootstrap";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const loginWithPassword = (props) => {
    var loginWithPasswordModal;
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!isModalOpen) {
            setIsModalOpen(true);
            loginWithPasswordModal = new Modal(document.getElementById("loginWithPassword"), {
                backdrop: "static",
                keyboard: false,
            });
            loginWithPasswordModal.toggle();
        }
    });

    function initiateLogin(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!document.getElementById("email").value) {
            showToaster("Please enter email", "error");
        } else if (!document.getElementById("password").value) {
            showToaster("Please enter password", "error");
        } else {
            
        }
    }

    function showToaster(message, type) {
        toast.dismiss();
        toast(message, { type: type });
    }

    return (
        <>
            <div
                className="modal fade"
                id="loginWithPassword"
                tabIndex="-1"
                aria-labelledby="loginWithPasswordLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered login-with-username-modal">
                    <div className="modal-content bg-transparent">
                        <div className="modal-header">
                            <h4
                                className="modal-title c-fs-5 col-white"
                                id="loginWithPasswordLabel"
                            >
                                Sign In with Email and Password
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
                                    type="email"
                                    placeholder="Enter email"
                                    minLength="4"
                                    pattern="[a-z]{50}"
                                    name="email"
                                    id="email"
                                    required
                                    autoFocus
                                    autoComplete="off"
                                />
                                  <input
                                    type="password"
                                    placeholder="******"
                                    minLength="4"
                                    name="password"
                                    id="password"
                                    required
                                    autoComplete="off"
                                />

                                <button
                                    type="submit"
                                    className="btn col-white opacity-100"
                                    onClick={initiateLogin}
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default loginWithPassword;
