import style from "./BookFreeDemoForm.module.scss";
import PhoneField from "./PhoneField";

export default function FormFields({
  formData,
  handleChange,
  error,
  verticalFields,
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
}) {
  const rowClass = `d-flex m-0 gap-4 flex-column ${
    verticalFields ? "flex-column" : "flex-md-row"
  }`;

  return (
    <div className="w-100 gap-4 d-flex flex-column">
      <div className={rowClass}>
        <div className="w-100">
          <input
            type="text"
            name="name"
            className={`form-control form-control-lg ${style.formPlaceholder}`}
            placeholder="Name*"
            required
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>
        <div className="w-100">
          <PhoneField
            formId={formId}
            phoneInputRef={phoneInputRef}
            showMobileOtp={showMobileOtp}
            mobileVerified={mobileVerified}
            otp={otp}
            getOtpInProgress={getOtpInProgress}
            verifyOtpInProgress={verifyOtpInProgress}
            resendChannels={resendChannels}
            sendMobileOtp={sendMobileOtp}
            verifyMobileOtp={verifyMobileOtp}
            resendMobileOtp={resendMobileOtp}
            resetMobileVerification={resetMobileVerification}
            handleOtpChange={handleOtpChange}
          />
        </div>
      </div>
      <div className={`${rowClass} mb-3`}>
        <div className="w-100">
          <input
            type="text"
            name="business"
            className={`form-control form-control-lg ${style.formPlaceholder}`}
            placeholder="Business Name"
            value={formData.business}
            onChange={handleChange}
            autoComplete="organization"
          />
        </div>
        <div className="w-100">
          <input
            type="email"
            name="email"
            className={`form-control form-control-lg ${style.formPlaceholder}`}
            placeholder="Email Address*"
            required
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>
      </div>
      {error && (
        <div className="alert alert-danger w-100" role="alert">
          Error submitting form: {error}
        </div>
      )}
    </div>
  );
}
