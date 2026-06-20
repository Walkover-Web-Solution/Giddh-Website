import { useState } from "react";
import { useRouter } from "next/router";
import {
  MdPerson,
  MdEmail,
  MdBusiness,
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

export default function AffiliateForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [fullNameError, setFullNameError] = useState("");
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
    resetEmailVerification,
    showToaster,
  } = useEmailOtpVerification();
  const { getFormattedPhone } = useIntlTelInput("affiliateMobileNo");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = e.target.fullName?.value?.trim() || "";
    const companyName = e.target.companyName?.value?.trim() || "";
    const email =
      emailDetails?.email ||
      document.getElementById("affiliateEmail")?.value?.trim() ||
      "";

    if (fullName.length < 3) {
      setFullNameError("Full name must be at least 3 characters");
      return;
    }

    setFullNameError("");

    if (!isEmailVerified) {
      showToaster("Please verify email", "error");
      return;
    }

    const { website_url, currency_code } = getAffiliateRegionMeta(
      router.asPath,
      window.location.origin
    );

    const payload = {
      email,
      phone: getFormattedPhone(),
      password: "Walkover", // Hardcoded until backend removes the mandatory password requirement.
      full_name: fullName,
      company_name: companyName,
      website_url,
      currency_code,
    };

    setSubmitting(true);

    try {
      await submitAffiliateRegistration(payload);
      showToaster("You have registered successfully!", "success");
      resetEmailVerification();
      setFullNameError("");
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
        aria-label="Affiliate registration"
      >
        <div>
          <label
            id="affiliate-full-name-label"
            className="font-xs font-600 font-slate-grey text-uppercase mb-2 d-block"
          >
            Full Name <span className="font-danger">*</span>
          </label>
          <div className="position-relative">
            <MdPerson
              className="position-absolute top-50 start-0 translate-middle-y ms-3 font-grey-faded font-md z-2 pe-none"
              aria-hidden="true"
            />
            <input
              type="text"
              name="fullName"
              className={`form-control border ${
                fullNameError ? "border-danger" : "border-light-gray"
              } ${style.formInput} ps-5`}
              placeholder="John Smith"
              aria-labelledby="affiliate-full-name-label"
              aria-describedby={
                fullNameError ? "affiliate-full-name-error" : undefined
              }
              aria-invalid={fullNameError ? "true" : undefined}
              aria-required="true"
              required
              onChange={() => fullNameError && setFullNameError("")}
            />
          </div>
          {fullNameError && (
            <p
              id="affiliate-full-name-error"
              className="font-danger font-xs mt-2 mb-0"
              role="alert"
            >
              {fullNameError}
            </p>
          )}
        </div>

        <div>
          <label
            id="affiliate-company-name-label"
            className="font-xs font-600 font-slate-grey text-uppercase mb-2 d-block"
          >
            Company Name{" "}
            <span className="font-grey-faded font-400 text-uppercase">
              (Optional)
            </span>
          </label>
          <div className="position-relative">
            <MdBusiness
              className="position-absolute top-50 start-0 translate-middle-y ms-3 font-grey-faded font-md z-2 pe-none"
              aria-hidden="true"
            />
            <input
              type="text"
              name="companyName"
              className={`form-control border border-light-gray ${style.formInput} ps-5`}
              placeholder="Company Name (optional)"
              aria-labelledby="affiliate-company-name-label"
            />
          </div>
        </div>

        <div>
          {!showEmailOtp && !isEmailVerified && (
            <>
              <label
                id="affiliate-email-label"
                className="font-xs font-600 font-slate-grey text-uppercase mb-2 d-block"
              >
                Work Email <span className="font-danger">*</span>
              </label>
              <div
                className={`d-flex flex-column flex-sm-row align-items-stretch gap-2`}
              >
                <div className="position-relative flex-grow-1 min-w-0">
                  <MdEmail
                    className="position-absolute top-50 start-0 translate-middle-y ms-3 font-grey-faded font-md z-2 pe-none"
                    aria-hidden="true"
                  />
                  <input
                    type="email"
                    id="affiliateEmail"
                    className={`form-control border border-light-gray ${style.formInput} ps-5`}
                    placeholder="john@company.com"
                    autoComplete="off"
                    aria-labelledby="affiliate-email-label"
                    aria-required="true"
                    required
                  />
                </div>
                <button
                  type="button"
                  className={`btn bg-faded-blue font-primary font-600 font-sm border-0 white-space-no-wrap flex-shrink-0 ${style.otpBtn}`}
                  onClick={sendEmailOtp}
                  disabled={emailGetOtpInProgress}
                  aria-label={
                    emailGetOtpInProgress ? "Sending OTP" : "Send OTP"
                  }
                  aria-busy={emailGetOtpInProgress}
                >
                  {emailGetOtpInProgress ? (
                    <div
                      className="spinner-border spinner-border-sm font-primary"
                      role="status"
                      aria-label="Sending OTP"
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
              <label
                id="affiliate-otp-label"
                className="font-xs font-600 font-slate-grey text-uppercase mb-2 d-block"
              >
                Enter OTP <span className="font-danger">*</span>
              </label>
              <div
                className="d-flex flex-wrap align-items-center gap-2"
                role="group"
                aria-labelledby="affiliate-otp-label"
              >
                {[1, 2, 3, 4].map((field) => (
                  <input
                    key={field}
                    type="tel"
                    className={`form-control border border-light-gray ${style.formInput} affiliate-email-otp-field text-center p-0 ${style.otpInput}`}
                    placeholder="*"
                    maxLength="1"
                    autoFocus={field === 1}
                    aria-label={`OTP digit ${field}`}
                  />
                ))}
                <button
                  type="button"
                  id="affiliate-verify-email-button"
                  className={`btn btn-primary font-600 font-sm ${style.verifyBtn}`}
                  onClick={verifyEmailOtp}
                  disabled={emailVerifyOtpInProgress}
                  aria-label={
                    emailVerifyOtpInProgress ? "Verifying OTP" : "Verify OTP"
                  }
                  aria-busy={emailVerifyOtpInProgress}
                >
                  {emailVerifyOtpInProgress ? (
                    <div
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-label="Verifying OTP"
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
                  aria-label="Resend OTP"
                >
                  Resend
                </button>
                <button
                  type="button"
                  className="btn btn-link font-primary font-600 font-xs p-0"
                  onClick={changeEmail}
                  disabled={emailGetOtpInProgress}
                  aria-label="Change email address"
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
              <label
                id="affiliate-email-verified-label"
                className="font-xs font-600 font-slate-grey text-uppercase mb-2 d-block"
              >
                Work Email <span className="font-danger">*</span>
              </label>
              <div className="position-relative">
                <MdEmail
                  className="position-absolute top-50 start-0 translate-middle-y ms-3 font-grey-faded font-md z-2 pe-none"
                  aria-hidden="true"
                />
                <input
                  type="email"
                  id="affiliateEmail"
                  className={`form-control border border-light-gray ${style.formInput} ps-5 pe-5`}
                  defaultValue={emailDetails?.email || ""}
                  autoComplete="off"
                  aria-labelledby="affiliate-email-verified-label"
                  aria-readonly="true"
                  disabled
                  required
                />
                <MdCheckCircle
                  className="position-absolute top-50 end-0 translate-middle-y me-3 font-success font-lg z-2"
                  aria-hidden="true"
                />
              </div>
            </>
          )}
        </div>

        <div>
          <label
            id="affiliate-phone-label"
            className="font-xs font-600 font-slate-grey text-uppercase mb-2 d-block"
          >
            Phone Number{" "}
            <span className="font-grey-faded font-400 text-uppercase">
              (Optional)
            </span>
          </label>
          <div className={`position-relative ${style.phoneField}`}>
            <input
              type="tel"
              id="affiliateMobileNo"
              className={`form-control border border-light-gray ${style.formInput} w-100`}
              placeholder="9876543210"
              autoComplete="off"
              aria-labelledby="affiliate-phone-label"
            />
          </div>
        </div>

        <button
          type="submit"
          className={`btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 font-600 mt-1 ${style.submitBtn}`}
          disabled={submitting}
          aria-label={
            submitting ? "Submitting" : "Submit"
          }
          aria-busy={submitting}
        >
          {submitting ? (
            <div
              className="spinner-border spinner-border-sm"
              role="status"
              aria-label="Submitting"
            />
          ) : (
            <>
              Submit <MdArrowForward />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
