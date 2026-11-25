import { useEffect, useState } from "react";
import { MdArrowForward, MdClose } from "react-icons/md";

import { saveProfile, startSession } from "@/utils/giddhCert/clientApi";
import { getResendChannels, initOtpWidget } from "@/utils/msg91Otp";
import { formatMobileNumber, showToaster } from "@/utils/signupHelpers";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function getUniqueChannels(resendChannels) {
  const seen = new Set();
  return resendChannels.filter((channel) => {
    if (!channel.value || seen.has(channel.value)) {
      return false;
    }
    seen.add(channel.value);
    return true;
  });
}

export default function ApplyOverlay({
  isOpen,
  onClose,
  flowPhase,
  setFlowPhase,
  mobile,
  setMobile,
  countryCode,
  onVerified,
  onRegistered,
  compData,
}) {
  const [otp, setOtp] = useState("");
  const [requestId, setRequestId] = useState("");
  const [resendChannels, setResendChannels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [termsAgree, setTermsAgree] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    profession: "",
    city: "",
  });

  useEffect(() => {
    if (!isOpen || typeof window === "undefined") {
      return;
    }
    initOtpWidget(() => setResendChannels(getResendChannels()));
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const fullMobileNo = formatMobileNumber(`${countryCode}${mobile}`);
  const uniqueChannels = getUniqueChannels(resendChannels);

  const handleSendOtp = (event) => {
    event.preventDefault();
    if (!termsAgree) {
      return;
    }
    setIsLoading(true);
    window.sendOtp(
      fullMobileNo,
      (data) => {
        setIsLoading(false);
        setRequestId(data.message);
        setOtp("");
        setFlowPhase("otp");
      },
      (error) => {
        setIsLoading(false);
        setRequestId("");
        showToaster(error.message, "error", "top-center");
      }
    );
  };

  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    if (!otp || !requestId) {
      return;
    }
    setIsLoading(true);
    window.verifyOtp(
      otp,
      async () => {
        try {
          const data = await startSession({ mobile, countryCode });
          if (data?.message) {
            showToaster(data.message, "success", "top-center");
          }
          onVerified?.(data);
        } catch (error) {
          showToaster(error.message, "error", "top-center");
        } finally {
          setIsLoading(false);
        }
      },
      (error) => {
        setIsLoading(false);
        setOtp("");
        showToaster(error.message, "error", "top-center");
      },
      requestId
    );
  };

  const handleResendOtp = (channel) => {
    if (!requestId) {
      return;
    }
    setIsLoading(true);
    setOtp("");
    window.retryOtp(
      channel,
      () => {
        setIsLoading(false);
      },
      (error) => {
        setIsLoading(false);
        showToaster(error.message, "error", "top-center");
      },
      requestId
    );
  };

  const handleChangeMobile = () => {
    setOtp("");
    setRequestId("");
    setFlowPhase("mobile");
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (
      !EMAIL_REGEX.test(form.email.trim()) ||
      !form.name.trim() ||
      !form.profession ||
      !form.city.trim()
    ) {
      return;
    }

    setIsLoading(true);
    try {
      const data = await saveProfile({
        mobile,
        countryCode,
        name: form.name.trim(),
        email: form.email.trim(),
        designation: form.profession,
        city: form.city.trim(),
      });
      onRegistered?.(data);
    } catch (error) {
      showToaster(error.message, "error", "top-center");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="modal fade show d-block bg-dark bg-opacity-75"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-content border-0 rounded-3 overflow-hidden outfit-font position-relative">
          <button
            type="button"
            className="btn border-0 bg-transparent position-absolute top-0 end-0 p-3 font-primary"
            aria-label={compData?.closeAriaLabel}
            onClick={onClose}
          >
            <MdClose size={20} />
          </button>

          <div className="row g-0">
            <div className="col-12 col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-center gap-3">
              {compData?.eyebrow && (
                <p className="font-xs font-600 font-grey-deep m-0">
                  {compData?.eyebrow}
                </p>
              )}
              {compData?.heading && (
                <h2 className="heading font-600 lh-sm m-0">
                  {compData?.heading}
                </h2>
              )}
              {compData?.description && (
                <p className="font-sm font-slate-grey m-0 lh-lg">
                  {compData?.description}
                </p>
              )}
            </div>

            <div className="col-12 col-lg-6 p-4 p-md-5 bg-extra-light-blue d-flex flex-column justify-content-center">
              {flowPhase === "mobile" && (
                <form
                  onSubmit={handleSendOtp}
                  className="d-flex flex-column gap-3"
                >
                  <div className="d-flex flex-column gap-2">
                    <label
                      className="font-xs font-600 font-grey-deep m-0"
                      htmlFor="certMobile"
                    >
                      {compData?.mobile?.label}
                    </label>
                    <input
                      id="certMobile"
                      type="tel"
                      className="form-control"
                      value={mobile}
                      onChange={(event) =>
                        setMobile(
                          event.target.value.replace(/\D/g, "").slice(0, 10)
                        )
                      }
                      placeholder={compData?.mobile?.placeholder}
                      required
                    />
                  </div>
                  {compData?.mobile?.termsAgreePrefix && (
                    <div className="d-flex align-items-start gap-2">
                      <input
                        id="certTermsAgree"
                        type="checkbox"
                        className="form-check-input m-0"
                        checked={termsAgree}
                        onChange={() => setTermsAgree((prev) => !prev)}
                        required
                      />
                      <label
                        className="font-xs font-grey-deep m-0"
                        htmlFor="certTermsAgree"
                      >
                        {compData?.mobile?.termsAgreePrefix}
                        {compData?.mobile?.termsLinkHref &&
                          compData?.mobile?.termsLinkText && (
                            <a
                              href={compData.mobile.termsLinkHref}
                              className="font-xs font-600 font-primary"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {compData.mobile.termsLinkText}
                            </a>
                          )}
                        {compData?.mobile?.termsAgreeSuffix}
                      </label>
                    </div>
                  )}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded-1 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
                    disabled={isLoading || !termsAgree}
                  >
                    <span>
                      {isLoading
                        ? compData?.mobile?.loadingText
                        : compData?.mobile?.submitText}
                    </span>
                    {!isLoading && (
                      <MdArrowForward size={16} aria-hidden="true" />
                    )}
                  </button>
                  {compData?.mobile?.helperText && (
                    <p className="font-xs font-grey-deep m-0">
                      {compData?.mobile?.helperText}
                    </p>
                  )}
                  {compData?.consentTextBefore && (
                    <p className="font-xs font-grey-deep m-0">
                      {compData?.consentTextBefore}
                      {compData?.consentLinkHref &&
                        compData?.consentLinkText && (
                          <a
                            href={compData.consentLinkHref}
                            className="font-xs font-600 font-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {compData.consentLinkText}
                          </a>
                        )}
                      {compData?.consentTextAfter}
                    </p>
                  )}
                </form>
              )}

              {flowPhase === "otp" && (
                <form
                  onSubmit={handleVerifyOtp}
                  className="d-flex flex-column gap-3"
                >
                  <div className="d-flex flex-column gap-2">
                    <label
                      className="font-xs font-600 font-grey-deep m-0"
                      htmlFor="certOtp"
                    >
                      {compData?.otp?.label}
                    </label>
                    <input
                      id="certOtp"
                      type="text"
                      className="form-control"
                      value={otp}
                      onChange={(event) =>
                        setOtp(
                          event.target.value.replace(/\D/g, "").slice(0, 6)
                        )
                      }
                      placeholder={compData?.otp?.placeholder}
                      required
                    />
                  </div>
                  <p className="font-xs font-grey-deep m-0">
                    {compData?.otp?.sentPrefix} +{countryCode} {mobile}.
                  </p>
                  {uniqueChannels.length > 0 && (
                    <p className="font-xs font-grey-deep m-0">
                      {compData?.otp?.resendPrefix}{" "}
                      {uniqueChannels.map((channel, index) => (
                        <span key={channel.value}>
                          <button
                            type="button"
                            className="btn btn-link p-0 font-xs font-600 align-baseline"
                            onClick={() => handleResendOtp(channel.value)}
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
                  )}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded-1 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
                    disabled={isLoading}
                  >
                    <span>
                      {isLoading
                        ? compData?.otp?.loadingText
                        : compData?.otp?.submitText}
                    </span>
                    {!isLoading && (
                      <MdArrowForward size={16} aria-hidden="true" />
                    )}
                  </button>
                  <button
                    type="button"
                    className="btn btn-link p-0 font-xs font-600 align-self-start"
                    onClick={handleChangeMobile}
                  >
                    {compData?.otp?.changeMobileText}
                  </button>
                </form>
              )}

              {flowPhase === "registration" && (
                <form
                  onSubmit={handleRegister}
                  className="d-flex flex-column gap-3"
                >
                  <div className="d-flex flex-column gap-2">
                    <label
                      className="font-xs font-600 font-grey-deep m-0"
                      htmlFor="certName"
                    >
                      {compData?.registration?.nameLabel}
                    </label>
                    <input
                      id="certName"
                      type="text"
                      className="form-control"
                      value={form.name}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          name: event.target.value,
                        }))
                      }
                      placeholder={compData?.registration?.namePlaceholder}
                      required
                    />
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <label
                      className="font-xs font-600 font-grey-deep m-0"
                      htmlFor="certEmail"
                    >
                      {compData?.registration?.emailLabel}
                    </label>
                    <input
                      id="certEmail"
                      type="email"
                      className="form-control"
                      value={form.email}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          email: event.target.value,
                        }))
                      }
                      placeholder={compData?.registration?.emailPlaceholder}
                      required
                    />
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <label
                      className="font-xs font-600 font-grey-deep m-0"
                      htmlFor="certProfession"
                    >
                      {compData?.registration?.professionLabel}
                    </label>
                    <select
                      id="certProfession"
                      className="form-select"
                      value={form.profession}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          profession: event.target.value,
                        }))
                      }
                      required
                    >
                      <option value="">
                        {compData?.registration?.professionPlaceholder}
                      </option>
                      {compData?.registration?.professions?.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <label
                      className="font-xs font-600 font-grey-deep m-0"
                      htmlFor="certCity"
                    >
                      {compData?.registration?.cityLabel}
                    </label>
                    <input
                      id="certCity"
                      type="text"
                      className="form-control"
                      value={form.city}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          city: event.target.value,
                        }))
                      }
                      placeholder={compData?.registration?.cityPlaceholder}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded-1 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
                    disabled={isLoading}
                  >
                    <span>
                      {isLoading
                        ? compData?.registration?.loadingText
                        : compData?.registration?.submitText}
                    </span>
                    {!isLoading && (
                      <MdArrowForward size={16} aria-hidden="true" />
                    )}
                  </button>
                  {compData?.registration?.helperText && (
                    <p className="font-xs font-grey-deep m-0">
                      {compData?.registration?.helperText}
                    </p>
                  )}
                  {compData?.consentTextBefore && (
                    <p className="font-xs font-grey-deep m-0">
                      {compData?.consentTextBefore}
                      {compData?.consentLinkHref &&
                        compData?.consentLinkText && (
                          <a
                            href={compData.consentLinkHref}
                            className="font-xs font-600 font-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {compData.consentLinkText}
                          </a>
                        )}
                      {compData?.consentTextAfter}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
