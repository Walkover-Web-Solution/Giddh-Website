import { useState, useEffect } from "react";
import style from "./BookFreeDemoForm.module.scss";
import { MdCheckCircle } from "react-icons/md";

function OtpBlock({
  formId,
  otp,
  getOtpInProgress,
  verifyOtpInProgress,
  uniqueChannels,
  verifyMobileOtp,
  resendMobileOtp,
  handleOtpChange,
  isBanner,
}) {
  return (
    <div className="d-flex flex-column gap-2 w-100 mt-3">
      <div className="d-flex gap-2 w-100 align-items-center">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`${formId}-otp-${index}`}
            type="tel"
            className={`form-control ${
              isBanner ? style.bannerInput : "form-control-lg"
            } text-center flex-fill ${
              isBanner
                ? "bg-light border border-light-gray rounded-3 font-sm"
                : ""
            }`}
            placeholder="*"
            maxLength="1"
            value={digit}
            onChange={(event) => handleOtpChange(index, event.target.value)}
            autoFocus={index === 0}
          />
        ))}
        <button
          type="button"
          className={`btn btn-primary-outline flex-shrink-0 rounded-3 ${
            isBanner ? `c-fw-600 ${style.bannerActionBtn}` : ""
          }`}
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
      {uniqueChannels.length > 0 && (
        <div className="col-dark c-fs-6 d-flex flex-wrap align-items-center">
          Resend on
          {uniqueChannels.map((channel, index) => (
            <span
              key={channel.value}
              className="d-inline-flex align-items-center"
            >
              <button
                type="button"
                className="btn btn-link col-primary c-fw-600 p-0 ms-1 text-decoration-underline"
                onClick={() => resendMobileOtp(channel.value)}
                disabled={getOtpInProgress || verifyOtpInProgress}
              >
                {channel.name}
              </button>
              {uniqueChannels.length > index + 1 && (
                <span className="ms-1">or</span>
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function getUniqueChannels(resendChannels) {
  const seen = new Set();
  return (resendChannels || []).filter((channel) => {
    if (!channel?.value || seen.has(channel.value)) return false;
    seen.add(channel.value);
    return true;
  });
}

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
  inlineOtp = true,
  otpOnly = false,
}) {
  const isBanner = location === "banner";
  const [hasPhoneValue, setHasPhoneValue] = useState(false);
  const uniqueChannels = getUniqueChannels(resendChannels);

  useEffect(() => {
    if (!isBanner || otpOnly) return;
    const input = phoneInputRef.current;
    if (!input) return;

    const update = () => setHasPhoneValue(!!input.value?.trim());
    update();
    input.addEventListener("input", update);
    return () => input.removeEventListener("input", update);
  }, [isBanner, otpOnly, showMobileOtp, mobileVerified, phoneInputRef]);

  if (otpOnly) {
    if (!showMobileOtp || mobileVerified) return null;
    return (
      <OtpBlock
        formId={formId}
        otp={otp}
        getOtpInProgress={getOtpInProgress}
        verifyOtpInProgress={verifyOtpInProgress}
        uniqueChannels={uniqueChannels}
        verifyMobileOtp={verifyMobileOtp}
        resendMobileOtp={resendMobileOtp}
        handleOtpChange={handleOtpChange}
        isBanner={isBanner}
      />
    );
  }

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
        className={`btn btn-primary-outline d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded-3 c-fw-600 c-fs-7 px-3 ${style.bannerActionBtn}`}
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
        className={`btn btn-primary-outline d-inline-flex align-items-center justify-content-center flex-shrink-0 rounded-3 c-fw-600 c-fs-7 px-3 ${style.bannerActionBtn}`}
        onClick={resetMobileVerification}
        disabled={getOtpInProgress}
      >
        Change
      </button>
    ) : null;

  return (
    <div className={isBanner ? `min-w-0 ${style.bannerPhoneWrap}` : undefined}>
      <div
        className={
          isBanner
            ? `d-flex align-items-stretch gap-2 w-100 position-relative ${style.bannerPhoneIti}`
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

      {inlineOtp && showMobileOtp && !mobileVerified && (
        <OtpBlock
          formId={formId}
          otp={otp}
          getOtpInProgress={getOtpInProgress}
          verifyOtpInProgress={verifyOtpInProgress}
          uniqueChannels={uniqueChannels}
          verifyMobileOtp={verifyMobileOtp}
          resendMobileOtp={resendMobileOtp}
          handleOtpChange={handleOtpChange}
          isBanner={isBanner}
        />
      )}
    </div>
  );
}
