import { useState, useEffect } from "react";
import style from "./BookFreeDemoForm.module.scss";
import { MdCheckCircle } from "react-icons/md";

export default function PhoneField({
  formId,
  phoneInputRef,
  showMobileOtp,
  mobileVerified,
  otp,
  getOtpInProgress,
  verifyOtpInProgress,
  resendChannels,
  sendMobileOtp,
  verifyMobileOtp,
  resendMobileOtp,
  resetMobileVerification,
  handleOtpChange,
  location,
}) {
  const isBanner = location === "banner";
  const [hasPhoneValue, setHasPhoneValue] = useState(false);

  useEffect(() => {
    if (!isBanner) return;
    const input = phoneInputRef.current;
    if (!input) return;

    const update = () => setHasPhoneValue(!!input.value?.trim());
    update();
    input.addEventListener("input", update);
    return () => input.removeEventListener("input", update);
  }, [isBanner, showMobileOtp, mobileVerified, phoneInputRef]);

  const verifyButton = !showMobileOtp && !mobileVerified && (
    <button
      type="button"
      className="btn btn-primary-outline flex-shrink-0 opacity-100"
      onClick={sendMobileOtp}
      disabled={getOtpInProgress}
    >
      {getOtpInProgress ? (
        <div
          className="spinner-border spinner-border-sm col-primary"
          role="status"
        />
      ) : (
        "Verify"
      )}
    </button>
  );

  const changeButton = showMobileOtp && !mobileVerified && (
    <button
      type="button"
      className="btn btn-primary-outline flex-shrink-0 opacity-100"
      onClick={resetMobileVerification}
      disabled={getOtpInProgress}
    >
      Change
    </button>
  );

  const bannerVerifyChip =
    hasPhoneValue && !showMobileOtp && !mobileVerified ? (
      <button
        type="button"
        className="btn btn-sm btn-primary-outline d-inline-flex align-items-center justify-content-center align-self-end ms-auto mt-1 c-fw-600 c-fs-7"
        onClick={sendMobileOtp}
        disabled={getOtpInProgress}
      >
        {getOtpInProgress ? (
          <div
            className="spinner-border spinner-border-sm col-primary"
            role="status"
          />
        ) : (
          "Verify"
        )}
      </button>
    ) : null;

  const bannerChangeChip =
    showMobileOtp && !mobileVerified ? (
      <button
        type="button"
        className="btn btn-sm btn-primary-outline d-inline-flex align-items-center justify-content-center align-self-end ms-auto mt-1 c-fw-600 c-fs-7"
        onClick={resetMobileVerification}
        disabled={getOtpInProgress}
      >
        Change number
      </button>
    ) : null;

  return (
    <div className={isBanner ? `min-w-0 ${style.bannerPhoneWrap}` : undefined}>
      <div
        className={
          isBanner
            ? `d-flex flex-column align-items-stretch w-100 position-relative ${style.bannerPhoneIti}`
            : `d-flex align-items-stretch gap-2 w-100 ${style.phoneRow}`
        }
      >
        <div className="flex-grow-1 min-w-0 position-relative w-100">
          <input
            ref={phoneInputRef}
            type="tel"
            id={`${formId}-phone`}
            className={`form-control ${
              isBanner ? "" : "form-control-lg"
            } ${style.formPlaceholder}`}
            placeholder="Mobile Number*"
            disabled={showMobileOtp || mobileVerified}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                event.preventDefault();
                if (!isBanner || hasPhoneValue) sendMobileOtp();
              }
            }}
            autoComplete="tel"
          />
          {mobileVerified && (
            <MdCheckCircle className="icon-success position-absolute top-50 end-0 translate-middle-y me-3" />
          )}
        </div>
        {!isBanner && verifyButton}
        {!isBanner && changeButton}
        {isBanner && bannerVerifyChip}
        {isBanner && bannerChangeChip}
      </div>

      {showMobileOtp && !mobileVerified && (
        <div className="d-flex flex-column gap-2 mt-3 w-100">
          <div className="d-flex gap-2 w-100">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`${formId}-otp-${index}`}
                type="tel"
                className={`form-control ${
                  isBanner ? "" : "form-control-lg"
                } text-center flex-fill`}
                placeholder="*"
                maxLength="1"
                value={digit}
                onChange={(event) => handleOtpChange(index, event.target.value)}
                autoFocus={index === 0}
              />
            ))}
            <button
              type="button"
              className="btn btn-primary-outline flex-shrink-0"
              onClick={verifyMobileOtp}
              disabled={verifyOtpInProgress}
            >
              {verifyOtpInProgress ? (
                <div
                  className="spinner-border spinner-border-sm col-primary"
                  role="status"
                />
              ) : (
                "Verify"
              )}
            </button>
          </div>
          {resendChannels.length > 0 && (
            <div className="col-dark c-fs-6 d-flex flex-wrap">
              Resend on
              {resendChannels.map((channel, index) => (
                <span key={channel.value}>
                  <button
                    type="button"
                    className="btn btn-link col-primary c-fw-600 p-0 ms-1"
                    onClick={() => resendMobileOtp(channel.value)}
                    disabled={getOtpInProgress || verifyOtpInProgress}
                  >
                    {channel.name}
                  </button>
                  {resendChannels.length > index + 1 && " or"}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
