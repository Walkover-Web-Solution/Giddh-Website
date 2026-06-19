import { useState } from "react";
import { useRouter } from "next/router";
import {
  MdPerson,
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
  MdCheckCircle,
  MdArrowForward,
} from "react-icons/md";
import useEmailOtpVerification from "@/hooks/useEmailOtpVerification";
import useIntlTelInput from "@/hooks/useIntlTelInput";
import {
  getAffiliateRegionMeta,
  submitAffiliateRegistration,
} from "@/utils/affiliateRegistration";
import style from "./AffiliateForm.module.scss";

const FULL_NAME_REGEX = /^[\p{L}]+(?:['’-]?[\p{L}]+)*(?:\s+[\p{L}]+(?:['’-]?[\p{L}]+)*)+$/u;

export default function AffiliateForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const {
    showEmailOtp,
    emailDetails,
    emailGetOtpInProgress,
    emailVerifyOtpInProgress,
    isEmailVerified,
    sendEmailOtp,
    verifyEmailOtp,
    retrySendOtp,
    changeEmail,
    showToaster,
  } = useEmailOtpVerification();
  const { getFormattedPhone } = useIntlTelInput("affiliateMobileNo");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = e.target.fullName?.value?.trim() || "";
    const password = e.target.password?.value || "";
    const email =
      emailDetails?.email ||
      document.getElementById("affiliateEmail")?.value?.trim() ||
      "";

    if (!FULL_NAME_REGEX.test(fullName)) {
      showToaster("Please enter a valid full name", "error");
      return;
    }

    if (!isEmailVerified) {
      showToaster("Please verify email", "error");
      return;
    }

    if (!password) {
      showToaster("Please enter password", "error");
      return;
    }

    const { website_url, currency_code } = getAffiliateRegionMeta(
      router.asPath,
      window.location.origin
    );

    const payload = {
      email,
      phone: getFormattedPhone(),
      password,
      full_name: fullName,
      website_url,
      currency_code,
    };

    setSubmitting(true);

    try {
      const response = await submitAffiliateRegistration(payload);
      showToaster(
        response?.message || "Registration submitted successfully.",
        "success"
      );
      e.target.reset();
    } catch (error) {
      showToaster(error.message, "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      id="form"
      className={`outfit-font card border-0 rounded-4 p-4 p-md-5 bg-white d-flex flex-column w-100 mx-auto ${style.formCard}`}
    >
      <form
        className="w-100 d-flex flex-column gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="font-xs font-600 font-slate-grey text-uppercase mb-2 d-block">
            Full Name <span className="font-danger">*</span>
          </label>
          <div className="position-relative">
            <MdPerson
              className={`position-absolute top-50 start-0 translate-middle-y ms-3 font-grey-faded ${style.inputIcon}`}
            />
            <input
              type="text"
              name="fullName"
              className={`form-control ps-5 ${style.formInput}`}
              placeholder="Alice Johnson"
              required
            />
          </div>
        </div>

        <div>
          {!showEmailOtp && !isEmailVerified && (
            <>
              <label className="font-xs font-600 font-slate-grey text-uppercase mb-2 d-block">
                Work Email <span className="font-danger">*</span>
              </label>
              <div className="d-flex align-items-stretch gap-2">
                <div className="position-relative flex-grow-1">
                  <MdEmail
                    className={`position-absolute top-50 start-0 translate-middle-y ms-3 font-grey-faded ${style.inputIcon}`}
                  />
                  <input
                    type="email"
                    id="affiliateEmail"
                    className={`form-control ps-5 ${style.formInput}`}
                    placeholder="partner1@example.com"
                    autoComplete="off"
                    required
                  />
                </div>
                <button
                  type="button"
                  className={`btn bg-faded-blue font-primary font-600 font-sm border-0 white-space-no-wrap ${style.otpBtn}`}
                  onClick={sendEmailOtp}
                  disabled={emailGetOtpInProgress}
                >
                  {emailGetOtpInProgress ? (
                    <div
                      className="spinner-border spinner-border-sm font-primary"
                      role="status"
                    />
                  ) : (
                    "Send OTP"
                  )}
                </button>
              </div>
            </>
          )}

          {showEmailOtp && !isEmailVerified && (
            <>
              <label className="font-xs font-600 font-slate-grey text-uppercase mb-2 d-block">
                Enter OTP <span className="font-danger">*</span>
              </label>
              <div className="d-flex flex-wrap align-items-center gap-2">
                {[1, 2, 3, 4].map((field) => (
                  <input
                    key={field}
                    type="tel"
                    className={`form-control affiliate-email-otp-field ${style.formInput} ${style.otpInput}`}
                    placeholder="*"
                    maxLength="1"
                    autoFocus={field === 1}
                  />
                ))}
                <button
                  type="button"
                  id="affiliate-verify-email-button"
                  className={`btn btn-primary font-600 font-sm ${style.verifyBtn}`}
                  onClick={verifyEmailOtp}
                  disabled={emailVerifyOtpInProgress}
                >
                  {emailVerifyOtpInProgress ? (
                    <div
                      className="spinner-border spinner-border-sm"
                      role="status"
                    />
                  ) : (
                    "Verify"
                  )}
                </button>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <button
                  type="button"
                  className="btn btn-link font-primary font-600 font-xs p-0"
                  onClick={retrySendOtp}
                  disabled={emailGetOtpInProgress}
                >
                  Resend
                </button>
                <button
                  type="button"
                  className="btn btn-link font-primary font-600 font-xs p-0"
                  onClick={changeEmail}
                  disabled={emailGetOtpInProgress}
                >
                  Change Email
                </button>
              </div>
              <input
                type="hidden"
                id="affiliateEmail"
                defaultValue={emailDetails?.email || ""}
              />
            </>
          )}

          {isEmailVerified && (
            <>
              <label className="font-xs font-600 font-slate-grey text-uppercase mb-2 d-block">
                Work Email <span className="font-danger">*</span>
              </label>
              <div className="position-relative">
                <MdEmail
                  className={`position-absolute top-50 start-0 translate-middle-y ms-3 font-grey-faded ${style.inputIcon}`}
                />
                <input
                  type="email"
                  id="affiliateEmail"
                  className={`form-control ps-5 pe-5 ${style.formInput}`}
                  defaultValue={emailDetails?.email || ""}
                  autoComplete="off"
                  disabled
                  required
                />
                <MdCheckCircle
                  className={`position-absolute top-50 translate-middle-y font-success ${style.verifiedIcon}`}
                />
              </div>
            </>
          )}
        </div>

        <div>
          <label className="font-xs font-600 font-slate-grey text-uppercase mb-2 d-block">
            Password <span className="font-danger">*</span>
          </label>
          <div className="position-relative">
            <MdLock
              className={`position-absolute top-50 start-0 translate-middle-y ms-3 font-grey-faded ${style.inputIcon}`}
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className={`form-control ps-5 pe-5 ${style.formInput}`}
              placeholder="Enter password"
              required
            />
            <button
              type="button"
              className={`position-absolute top-50 end-0 translate-middle-y me-3 border-0 bg-transparent p-0 font-grey-faded ${style.toggleIcon}`}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </button>
          </div>
        </div>

        <div>
          <label className="font-xs font-600 font-slate-grey text-uppercase mb-2 d-block">
            Phone Number{" "}
            <span className="font-grey-faded font-400 text-uppercase">
              (Optional)
            </span>
          </label>
          <div className={`position-relative ${style.phoneField}`}>
            <input
              type="tel"
              id="affiliateMobileNo"
              className={`form-control w-100 ${style.formInput}`}
              placeholder="98********"
              autoComplete="off"
            />
          </div>
        </div>

        <button
          type="submit"
          className={`btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 font-600 mt-1 ${style.submitBtn}`}
          disabled={submitting}
        >
          {submitting ? (
            <div className="spinner-border spinner-border-sm" role="status" />
          ) : (
            <>
              Complete Registration <MdArrowForward />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
