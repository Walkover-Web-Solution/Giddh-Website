import { MdClose } from "react-icons/md";
import { Modal } from "bootstrap";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const otpVerifyModal = (props) => {
  var verifyOtpModal;
  var twoWayAuthOtpField;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resendInProgress, setResendInProgress] = useState(false);
  const [verifyNumberInProgress, setVerifyNumberInProgress] = useState(false);
  const isUK = props.path.isUK;

  useEffect(() => {
    document.body.classList.add("otp-verification");
    if (!isModalOpen) {
      setIsModalOpen(true);
      verifyOtpModal = new Modal(document.getElementById("signWithOTP"), {
        backdrop: "static",
        keyboard: false,
      });
      verifyOtpModal.toggle();
    }
    twoWayAuthOtpField = document.getElementById("twoWayAuthOtp");
    setTimeout(() => {
      twoWayAuthOtpField.focus();
    }, 600);
  });

  async function resendOtp() {
    if (resendInProgress) {
      return;
    }
    twoWayAuthOtpField.value = "";
    setResendInProgress(true);
    await fetch(
      (isUK
        ? process.env.NEXT_PUBLIC_UK_API_URL
        : process.env.NEXT_PUBLIC_API_URL) + "/generate-otp",
      {
        method: "POST",
        mode: "cors",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          countryCode: props.userResponse.countryCode,
          mobileNumber: props.userResponse.contactNumber,
        }),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setResendInProgress(false);
        if (response.status === "success") {
          showToaster("Otp resent successfully.", "success");
          document.body.classList.remove("otp-verification");
        } else {
          resendOtpErrorCallback(response.message);
        }
      })
      .catch((err) => resendOtpErrorCallback(err));
  }

  function resendOtpErrorCallback(error) {
    setResendInProgress(false);
    showToaster(error, "error");
  }

  function verifyTwoWayAuthOtp(event) {
    event.preventDefault();
    event.stopPropagation();

    var twoWayAuthOtp = twoWayAuthOtpField.value;
    if (twoWayAuthOtp) {
      verifyNumber(twoWayAuthOtp);
    } else {
      showToaster("Please enter otp", "error");
    }
  }

  async function verifyNumber(otp) {
    if (verifyNumberInProgress) {
      return;
    }
    setVerifyNumberInProgress(true);
    await fetch(
      (isUK
        ? process.env.NEXT_PUBLIC_UK_API_URL
        : process.env.NEXT_PUBLIC_API_URL) + "/v2/verify-number",
      {
        method: "POST",
        mode: "cors",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          countryCode: props.userResponse.countryCode,
          mobileNumber: props.userResponse.contactNumber,
          oneTimePassword: otp,
        }),
      }
    )
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
    showToaster(error, "error");
  }

  function showToaster(message, type) {
    toast.dismiss();
    toast(message, { type: type });
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
            <div className="modal-header justify-content-between">
              <h4
                className="modal-title c-fs-5 col-white"
                id="signWithOTPLabel"
              >
                Sign In with Giddh
              </h4>
              <span
                className="col-white c-fs-3 cursor-pointer"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => props.hideVerificationModal()}
              >
                <MdClose />
              </span>
            </div>
            <div className="modal-body bg-light text-center">
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
                <button
                  type="button"
                  className="resend-btn-link col-primary"
                  onClick={resendOtp}
                  disabled={resendInProgress || verifyNumberInProgress}
                >
                  {resendInProgress && (
                    <div
                      className="spinner-border spinner-border-sm col-primary"
                      role="status"
                    ></div>
                  )}

                  {!resendInProgress && <span>Resend</span>}
                </button>
                <p className="mt-2 mb-3">
                  We have sent an OTP to your registered mobile number.
                </p>

                <button
                  type="submit"
                  className="btn col-white opacity-100"
                  onClick={verifyTwoWayAuthOtp}
                  disabled={verifyNumberInProgress || resendInProgress}
                >
                  {verifyNumberInProgress && (
                    <div
                      className="spinner-border spinner-border-sm"
                      role="status"
                    ></div>
                  )}

                  {!verifyNumberInProgress && <span>Submit</span>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default otpVerifyModal;
