import { MdArrowForward } from "react-icons/md";

function ConsentNote({ compData }) {
  if (!compData?.consentDescription) {
    return null;
  }
  return (
    <p className="font-xs font-grey-deep m-0">
      {compData.consentDescription}
      {compData?.consentLinkUrl && compData?.consentLinkLabel ? (
        <a
          href={compData.consentLinkUrl}
          className="font-xs font-600 font-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {compData.consentLinkLabel}
        </a>
      ) : null}
      {compData?.consentSuffix}
    </p>
  );
}

export function MobileForm({
  mobile,
  setMobile,
  isTermsAccepted,
  setIsTermsAccepted,
  canSendOtp,
  isLoading,
  onSubmit,
  compData,
}) {
  return (
    <form onSubmit={onSubmit} className="d-flex flex-column gap-3">
      <div className="d-flex flex-column gap-2">
        <label
          className="font-xs font-600 font-grey-deep m-0"
          htmlFor="mobileNumberInput"
        >
          {compData?.mobile?.label}
        </label>
        <input
          id="mobileNumberInput"
          type="tel"
          className="form-control"
          value={mobile}
          onChange={(event) =>
            setMobile(event.target.value.replace(/\D/g, "").slice(0, 10))
          }
          placeholder={compData?.mobile?.placeholder}
          required
        />
      </div>
      {compData?.mobile?.termsDescription ? (
        <div className="d-flex align-items-start gap-2">
          <input
            id="termsAcceptanceCheckbox"
            type="checkbox"
            className="form-check-input m-0"
            checked={isTermsAccepted}
            onChange={() => setIsTermsAccepted((prev) => !prev)}
            required
          />
          <label
            className="font-xs font-grey-deep m-0"
            htmlFor="termsAcceptanceCheckbox"
          >
            {compData.mobile.termsDescription}
            {compData?.mobile?.termsLinkUrl &&
            compData?.mobile?.termsLinkLabel ? (
              <a
                href={compData.mobile.termsLinkUrl}
                className="font-xs font-600 font-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {compData.mobile.termsLinkLabel}
              </a>
            ) : null}
            {compData?.mobile?.termsSuffix}
          </label>
        </div>
      ) : null}
      <button
        type="submit"
        className="btn btn-primary w-100 rounded-3 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
        disabled={isLoading || !canSendOtp}
      >
        <span>
          {isLoading
            ? compData?.mobile?.loadingText
            : compData?.mobile?.submitText}
        </span>
        {!isLoading ? <MdArrowForward size={16} aria-hidden="true" /> : null}
      </button>
      {compData?.mobile?.helperText ? (
        <p className="font-xs font-grey-deep m-0">
          {compData.mobile.helperText}
        </p>
      ) : null}
      <ConsentNote compData={compData} />
    </form>
  );
}

export function OtpForm({
  otp,
  setOtp,
  mobile,
  countryCode,
  uniqueChannels,
  isLoading,
  onSubmit,
  onResend,
  onChangeMobile,
  compData,
}) {
  return (
    <form onSubmit={onSubmit} className="d-flex flex-column gap-3">
      <div className="d-flex flex-column gap-2">
        <label className="font-xs font-600 font-grey-deep m-0" htmlFor="otpInput">
          {compData?.otp?.label}
        </label>
        <input
          id="otpInput"
          type="text"
          className="form-control"
          value={otp}
          onChange={(event) =>
            setOtp(event.target.value.replace(/\D/g, "").slice(0, 6))
          }
          placeholder={compData?.otp?.placeholder}
          required
        />
      </div>
      <p className="font-xs font-grey-deep m-0">
        {compData?.otp?.sentLabel} +{countryCode} {mobile}.
      </p>
      {uniqueChannels.length > 0 ? (
        <p className="font-xs font-grey-deep m-0">
          {compData?.otp?.resendLabel}{" "}
          {uniqueChannels.map((channel, index) => (
            <span key={channel.value}>
              <button
                type="button"
                className="btn btn-link p-0 font-xs font-600 align-baseline"
                onClick={() => onResend(channel.value)}
                disabled={isLoading}
              >
                {channel.name}
              </button>
              {uniqueChannels.length > index + 1
                ? compData?.otp?.resendSeparator
                : ""}
            </span>
          ))}
        </p>
      ) : null}
      <button
        type="submit"
        className="btn btn-primary w-100 rounded-3 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
        disabled={isLoading}
      >
        <span>
          {isLoading ? compData?.otp?.loadingText : compData?.otp?.submitText}
        </span>
        {!isLoading ? <MdArrowForward size={16} aria-hidden="true" /> : null}
      </button>
      <button
        type="button"
        className="btn btn-link p-0 font-xs font-600 align-self-start"
        onClick={onChangeMobile}
      >
        {compData?.otp?.changeMobileText}
      </button>
    </form>
  );
}

export function RegistrationForm({
  form,
  setForm,
  isLoading,
  onSubmit,
  compData,
}) {
  return (
    <form onSubmit={onSubmit} className="d-flex flex-column gap-3">
      <div className="d-flex flex-column gap-2">
        <label
          className="font-xs font-600 font-grey-deep m-0"
          htmlFor="fullNameInput"
        >
          {compData?.registration?.nameLabel}
        </label>
        <input
          id="fullNameInput"
          type="text"
          className="form-control"
          value={form.name}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, name: event.target.value }))
          }
          placeholder={compData?.registration?.namePlaceholder}
          required
        />
      </div>
      <div className="d-flex flex-column gap-2">
        <label className="font-xs font-600 font-grey-deep m-0" htmlFor="emailInput">
          {compData?.registration?.emailLabel}
        </label>
        <input
          id="emailInput"
          type="email"
          className="form-control"
          value={form.email}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder={compData?.registration?.emailPlaceholder}
          required
        />
      </div>
      <div className="d-flex flex-column gap-2">
        <label
          className="font-xs font-600 font-grey-deep m-0"
          htmlFor="professionSelect"
        >
          {compData?.registration?.professionLabel}
        </label>
        <select
          id="professionSelect"
          className="form-select"
          value={form.profession}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, profession: event.target.value }))
          }
          required
        >
          <option value="">{compData?.registration?.professionPlaceholder}</option>
          {compData?.registration?.professions?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex flex-column gap-2">
        <label className="font-xs font-600 font-grey-deep m-0" htmlFor="cityInput">
          {compData?.registration?.cityLabel}
        </label>
        <input
          id="cityInput"
          type="text"
          className="form-control"
          value={form.city}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, city: event.target.value }))
          }
          placeholder={compData?.registration?.cityPlaceholder}
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary w-100 rounded-3 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
        disabled={isLoading}
      >
        <span>
          {isLoading
            ? compData?.registration?.loadingText
            : compData?.registration?.submitText}
        </span>
        {!isLoading ? <MdArrowForward size={16} aria-hidden="true" /> : null}
      </button>
      {compData?.registration?.helperText ? (
        <p className="font-xs font-grey-deep m-0">
          {compData.registration.helperText}
        </p>
      ) : null}
      <ConsentNote compData={compData} />
    </form>
  );
}
