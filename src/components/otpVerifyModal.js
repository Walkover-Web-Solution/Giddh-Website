import { MdClose } from "react-icons/md";
import { Modal } from "bootstrap";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const otpVerifyModal = (props) => {
    var verifyOtpModal;
    var twoWayAuthOtpField;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [resendInProgress, setResendInProgress] = useState(false);
    const [verifyNumberInProgress, setVerifyNumberInProgress] = useState(false);

    useEffect(() => {
        if (!isModalOpen) {
            setIsModalOpen(true);
            verifyOtpModal = new Modal(document.getElementById('signWithOTP'), {
                backdrop: 'static',
                keyboard: false
            });
            verifyOtpModal.toggle();
        }
        twoWayAuthOtpField = document.getElementById("twoWayAuthOtp");
    });

    async function resendOtp() {
        if (resendInProgress) {
            return;
        }
        setResendInProgress(true);
        await fetch(process.env.NEXT_PUBLIC_API_URL + '/generate-otp', {
            method: "POST",
            mode: "cors",
            cache: "no-store",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ countryCode: props.userResponse.countryCode, mobileNumber: props.userResponse.contactNumber })
        })
            .then((res) => res.json())
            .then((response) => {
                setResendInProgress(false);
                if (response.status === "success") {
                    toast("Otp resent successfully.", { type: "success" });
                } else {
                    resendOtpErrorCallback(response.message);
                }
            })
            .catch((err) => resendOtpErrorCallback(err));
    }

    function resendOtpErrorCallback(error) {
        setResendInProgress(false);
        toast(error, { type: "error" });
    }

    function verifyTwoWayAuthOtp(event) {
        event.preventDefault();
        event.stopPropagation();

        var twoWayAuthOtp = twoWayAuthOtpField.value;
        if (twoWayAuthOtp) {
            verifyNumber(twoWayAuthOtp);
        } else {
            toast("Please enter otp", { type: "error" });
        }
    }

    async function verifyNumber(otp) {
        if (verifyNumberInProgress) {
            return;
        }
        setVerifyNumberInProgress(true);
        await fetch(process.env.NEXT_PUBLIC_API_URL + '/v2/verify-number', {
            method: "POST",
            mode: "cors",
            cache: "no-store",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ countryCode: props.userResponse.countryCode, mobileNumber: props.userResponse.contactNumber, oneTimePassword: otp })
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.status === "success") {
                    props.otpVerifyCallback(response.body);
                } else {
                    verifyNumberErrorCallback(response.message);
                }
            })
            .catch((err) => verifyNumberErrorCallback(err));
    }

    function verifyNumberErrorCallback(error) {
        setVerifyNumberInProgress(false);
        toast(error, { type: "error" });
    }

    return (
        <>
            <div
                className="modal fade"
                id="signWithOTP"
                tabIndex="-1"
                aria-labelledby="signWithOTPLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered otp-verify-modal">
                    <div className="modal-content bg-transparent">
                        <div className="modal-header">
                            <h4
                                className="modal-title c-fs-5 col-white"
                                id="signWithOTPLabel"
                            >
                                Sign Up with Giddh
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
                            <div className="otp-verify-modal__input">
                                <form id="otpForm">
                                    <input
                                        type="text"
                                        placeholder="Enter OTP"
                                        maxLength="4"
                                        minLength="4"
                                        pattern="[0-9]{4}"
                                        id="twoWayAuthOtp"
                                        name="twoWayAuthOtp"
                                        required
                                        autoFocus
                                        autoComplete="off"
                                    />
                                    <button type="button" className="btn col-white" onClick={resendOtp} disabled={resendInProgress}>
                                        {resendInProgress && (
                                            <div className="spinner-border spinner-border-sm col-primary" role="status"></div>
                                        )}

                                        {!resendInProgress && (
                                            <span>Resend</span>
                                        )}
                                    </button>
                                    <p className="mt-2 mb-3">
                                        We have sent an OTP to your registered mobile number.
                                    </p>

                                    <button type="submit" className="btn col-white" onClick={verifyTwoWayAuthOtp} disabled={verifyNumberInProgress}>
                                        {verifyNumberInProgress && (
                                            <div className="spinner-border spinner-border-sm" role="status"></div>
                                        )}

                                        {!verifyNumberInProgress && (
                                            <span>Submit</span>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default otpVerifyModal;
