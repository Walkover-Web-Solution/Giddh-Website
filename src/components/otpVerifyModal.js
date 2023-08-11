import { MdClose } from "react-icons/md";

const otpVerifyModal = () => {
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
                <form>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    maxLength="4"
                    minLength="4"
                    pattern="[0-9]{4}"
                  />
                  <p className="mt-2 mb-3">
                    We have sent an OTP to your registered mobile number.
                  </p>

                  <button type="submit" className="btn col-white">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default otpVerifyModal;
