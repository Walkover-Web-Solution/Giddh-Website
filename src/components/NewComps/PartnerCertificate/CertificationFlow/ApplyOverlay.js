import { useEffect, useState } from "react";
import { MdArrowForward, MdClose } from "react-icons/md";

import { MODULE_PASS_PERCENT, PROFESSIONS } from "@/utils/giddhCert/constants";
import { saveProfile, startSession } from "@/utils/giddhCert/clientApi";
import { getResendChannels, initOtpWidget } from "@/utils/msg91Otp";
import { formatMobileNumber, showToaster } from "@/utils/signupHelpers";

import styles from "./CertificationFlow.module.scss";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function waitForOtpService() {
  if (
    typeof window !== "undefined" &&
    typeof window.sendOtp === "function" &&
    typeof window.verifyOtp === "function"
  ) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    initOtpWidget(() => {
      if (
        typeof window.sendOtp === "function" &&
        typeof window.verifyOtp === "function"
      ) {
        resolve();
        return;
      }

      reject(
        new Error(
          "OTP service is unavailable. Please refresh the page and try again."
        )
      );
    });
  });
}

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
}) {
  const [otp, setOtp] = useState("");
  const [requestId, setRequestId] = useState("");
  const [resendChannels, setResendChannels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSendOtp = async (event) => {
    event.preventDefault();
    if (!/^\d{10}$/.test(mobile)) {
      showToaster(
        "Please enter a valid 10-digit mobile number.",
        "error",
        "top-center"
      );
      return;
    }

    setIsLoading(true);
    try {
      await waitForOtpService();
    } catch (otpError) {
      setIsLoading(false);
      showToaster(otpError.message, "error", "top-center");
      return;
    }

    window.sendOtp(
      fullMobileNo,
      (data) => {
        setIsLoading(false);
        setRequestId(data.message);
        setOtp("");
        setFlowPhase("otp");
        showToaster("OTP sent successfully.", "success", "top-center");
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
    if (!otp) {
      showToaster("Please enter OTP!", "error", "top-center");
      return;
    }
    if (!requestId) {
      showToaster("Please send OTP first!", "error", "top-center");
      return;
    }

    setIsLoading(true);
    window.verifyOtp(
      otp,
      async () => {
        try {
          showToaster("OTP verified successfully.", "success", "top-center");
          const data = await startSession({ mobile, countryCode });
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
      showToaster("Please send OTP first!", "error", "top-center");
      return;
    }

    setIsLoading(true);
    setOtp("");
    window.retryOtp(
      channel,
      () => {
        setIsLoading(false);
        showToaster("OTP resent successfully.", "success", "top-center");
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
    if (!EMAIL_REGEX.test(form.email.trim())) {
      showToaster("Please enter a valid email address.", "error", "top-center");
      return;
    }
    if (!form.name.trim() || !form.profession || !form.city.trim()) {
      showToaster("Please fill all registration fields.", "error", "top-center");
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
    <div className={styles.overlayRoot} role="dialog" aria-modal="true">
      <div className={`${styles.panel} outfit-font`}>
        <button
          type="button"
          className={styles.closeBtn}
          aria-label="Close"
          onClick={onClose}
        >
          <MdClose size={20} />
        </button>

        <div className={styles.applyGrid}>
          <div className={styles.applyCopy}>
            <p className="font-xs font-600 font-grey-deep m-0">Get Started</p>
            <h2 className={styles.applyTitle}>
              Start now — it takes 30 seconds.
            </h2>
            <p className="font-sm font-slate-grey m-0 lh-lg">
              Verify your mobile, tell us who you are, then go straight through
              Module 1, 2, and 3 right here. Pass with {MODULE_PASS_PERCENT}% or
              higher on each module to get your certificate instantly.
            </p>
          </div>

          <div className={styles.applyFormWrap}>
            {flowPhase === "mobile" && (
              <form
                onSubmit={handleSendOtp}
                className="d-flex flex-column gap-3 position-relative"
              >
                <div>
                  <label className={styles.fieldLabel} htmlFor="certMobile">
                    Mobile number
                  </label>
                  <input
                    id="certMobile"
                    type="tel"
                    className={styles.fieldInput}
                    value={mobile}
                    onChange={(event) =>
                      setMobile(
                        event.target.value.replace(/\D/g, "").slice(0, 10)
                      )
                    }
                    placeholder="10-digit mobile number"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 rounded-1 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
                  disabled={isLoading}
                >
                  <span>{isLoading ? "Sending..." : "Send OTP"}</span>
                  {!isLoading && <MdArrowForward size={16} aria-hidden="true" />}
                </button>
                <p className="font-xs font-grey-deep m-0">
                  Progress is saved on the server for this mobile number.
                </p>
              </form>
            )}

            {flowPhase === "otp" && (
              <form
                onSubmit={handleVerifyOtp}
                className="d-flex flex-column gap-3 position-relative"
              >
                <div>
                  <label className={styles.fieldLabel} htmlFor="certOtp">
                    Enter OTP
                  </label>
                  <input
                    id="certOtp"
                    type="text"
                    className={styles.fieldInput}
                    value={otp}
                    onChange={(event) =>
                      setOtp(event.target.value.replace(/\D/g, "").slice(0, 6))
                    }
                    placeholder="Enter OTP"
                    required
                  />
                </div>
                <p className="font-xs font-grey-deep m-0">
                  Sent to +{countryCode} {mobile}.
                </p>
                {uniqueChannels.length > 0 && (
                  <p className="font-xs font-grey-deep m-0">
                    Resend on{" "}
                    {uniqueChannels.map((channel, index) => (
                      <span key={channel.value}>
                        <button
                          type="button"
                          className={styles.linkBtn}
                          onClick={() => handleResendOtp(channel.value)}
                          disabled={isLoading}
                        >
                          {channel.name}
                        </button>
                        {uniqueChannels.length > index + 1 ? " or " : ""}
                      </span>
                    ))}
                  </p>
                )}
                <button
                  type="submit"
                  className="btn btn-primary w-100 rounded-1 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
                  disabled={isLoading}
                >
                  <span>{isLoading ? "Verifying..." : "Verify & Continue"}</span>
                  {!isLoading && <MdArrowForward size={16} aria-hidden="true" />}
                </button>
                <button
                  type="button"
                  className={styles.linkBtn}
                  onClick={handleChangeMobile}
                >
                  Change mobile number
                </button>
              </form>
            )}

            {flowPhase === "registration" && (
              <form
                onSubmit={handleRegister}
                className="d-flex flex-column gap-3 position-relative"
              >
                <div>
                  <label className={styles.fieldLabel} htmlFor="certName">
                    Full name *
                  </label>
                  <input
                    id="certName"
                    type="text"
                    className={styles.fieldInput}
                    value={form.name}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, name: event.target.value }))
                    }
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className={styles.fieldLabel} htmlFor="certEmail">
                    Email *
                  </label>
                  <input
                    id="certEmail"
                    type="email"
                    className={styles.fieldInput}
                    value={form.email}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }))
                    }
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className={styles.fieldLabel} htmlFor="certProfession">
                    I am a...
                  </label>
                  <select
                    id="certProfession"
                    className={styles.fieldSelect}
                    value={form.profession}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        profession: event.target.value,
                      }))
                    }
                    required
                  >
                    <option value="">Choose one</option>
                    {PROFESSIONS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={styles.fieldLabel} htmlFor="certCity">
                    City *
                  </label>
                  <input
                    id="certCity"
                    type="text"
                    className={styles.fieldInput}
                    value={form.city}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, city: event.target.value }))
                    }
                    placeholder="Your city"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 rounded-1 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
                  disabled={isLoading}
                >
                  <span>
                    {isLoading ? "Saving..." : "Start the course"}
                  </span>
                  {!isLoading && <MdArrowForward size={16} aria-hidden="true" />}
                </button>
                <p className="font-xs font-grey-deep m-0">
                  No cost to enroll. By submitting, you agree to be contacted
                  about the GIDDH Certification and Partnership Program.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
