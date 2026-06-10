import style from "./BookFreeDemoForm.module.scss";
import PhoneField from "./PhoneField";
import { MdPerson, MdBusiness, MdEmail } from "react-icons/md";

export default function FormFields({
  formData,
  handleChange,
  error,
  location,
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

  const phoneFieldProps = {
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
  };

  if (location === "banner") {
    return (
      <div className="w-100 d-flex flex-column gap-3">
        <div className="row g-3">
          <div className="col-12 col-sm-6 position-relative">
            <MdPerson
              className="position-absolute top-50 start-0 translate-middle-y ms-3 font-grey-deep pe-none z-1"
              size={18}
            />
            <input
              type="text"
              name="name"
              className={`form-control bg-light border border-light-gray rounded-3 ps-5 font-sm ${style.bannerInput} ${style.formPlaceholder}`}
              placeholder="Full Name*"
              required
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>
          <div className="col-12 col-sm-6">
            <PhoneField {...phoneFieldProps} />
          </div>
          <div className="col-12 col-sm-6 position-relative">
            <MdBusiness
              className="position-absolute top-50 start-0 translate-middle-y ms-3 font-grey-deep pe-none z-1"
              size={18}
            />
            <input
              type="text"
              name="business"
              className={`form-control bg-light border border-light-gray rounded-3 ps-5 font-sm ${style.bannerInput} ${style.formPlaceholder}`}
              placeholder="Business Name"
              value={formData.business}
              onChange={handleChange}
              autoComplete="organization"
            />
          </div>
          <div className="col-12 col-sm-6 position-relative">
            <MdEmail
              className="position-absolute top-50 start-0 translate-middle-y ms-3 font-grey-deep pe-none z-1"
              size={18}
            />
            <input
              type="email"
              name="email"
              className={`form-control bg-light border border-light-gray rounded-3 ps-5 font-sm ${style.bannerInput} ${style.formPlaceholder}`}
              placeholder="Email Address*"
              required
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>
        </div>
        {error && (
          <div className="alert alert-danger w-100 mb-0" role="alert">
            Error submitting form: {error}
          </div>
        )}
      </div>
    );
  }

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
          <PhoneField {...phoneFieldProps} />
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
