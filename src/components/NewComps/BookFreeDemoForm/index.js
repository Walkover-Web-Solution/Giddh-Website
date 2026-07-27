import { useState, useCallback, useEffect, useId, useRef } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import style from "./BookFreeDemoForm.module.scss";
import FormFields from "./FormFields";
import { getUtmParamsFromCookies } from "@/utils/utmParams";
import { initOtpWidget, getResendChannels } from "@/utils/msg91Otp";
import { setupPhoneInput } from "@/utils/phoneInput";
import { sendDataInSegmento } from "@/utils/segmento";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  business: "",
};

const initialOtpState = ["", "", "", ""];

function formatMobileNumber(number) {
  return String(number).replace("+", "").trim();
}

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

function showToast(message, type) {
  toast.dismiss();
  toast(message, { type, position: "top-center" });
}

export default function BookFreeDemoForm({
  hiddenAbsolute,
  location,
  heading,
  verticalFields,
}) {
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showMobileOtp, setShowMobileOtp] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [requestId, setRequestId] = useState("");
  const [otp, setOtp] = useState(initialOtpState);
  const [getOtpInProgress, setGetOtpInProgress] = useState(false);
  const [verifyOtpInProgress, setVerifyOtpInProgress] = useState(false);
  const [resendChannels, setResendChannels] = useState([]);

  const phoneInputRef = useRef(null);
  const intlRef = useRef(null);
  const formId = useId().replace(/:/g, "");
  const router = useRouter();
  const isBanner = location === "banner";

  useEffect(() => {
    initOtpWidget(() => setResendChannels(getResendChannels()));
    setupPhoneInput(phoneInputRef, intlRef);

    return () => {
      if (intlRef.current?.destroy) {
        intlRef.current.destroy();
        intlRef.current = null;
      }
      const input = phoneInputRef.current;
      if (input) {
        delete input.dataset.intlTelInitialized;
      }
    };
  }, []);

  const getMobileNo = useCallback(() => {
    return formatMobileNumber(intlRef.current?.getNumber?.() || "");
  }, []);

  const isValidMobile = useCallback(() => {
    const intl = intlRef.current;
    if (!intl) {
      return false;
    }

    if (typeof intl.isValidNumber === "function") {
      return intl.isValidNumber();
    }

    return getMobileNo().length >= 10;
  }, [getMobileNo]);

  const resetMobileVerification = useCallback(() => {
    setShowMobileOtp(false);
    setMobileVerified(false);
    setRequestId("");
    setOtp(initialOtpState);
    setFormData((prev) => ({ ...prev, phone: "" }));
    if (phoneInputRef.current) {
      phoneInputRef.current.value = "";
    }
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const sendMobileOtp = useCallback(async () => {
    if (!isValidMobile()) {
      showToast("Please enter valid mobile number!", "error");
      return;
    }

    const mobileNo = getMobileNo();
    setGetOtpInProgress(true);

    try {
      await waitForOtpService();
    } catch (otpError) {
      setGetOtpInProgress(false);
      showToast(otpError.message, "error");
      return;
    }

    window.sendOtp(
      mobileNo,
      (data) => {
        setGetOtpInProgress(false);
        showToast("OTP sent successfully.", "success");
        setRequestId(data.message);
        setShowMobileOtp(true);
        setOtp(initialOtpState);
      },
      (error) => {
        setGetOtpInProgress(false);
        showToast(error.message, "error");
        setShowMobileOtp(false);
        setRequestId("");
      }
    );
  }, [getMobileNo, isValidMobile]);

  const verifyMobileOtp = useCallback(() => {
    const otpValue = otp.join("");
    if (!otpValue) {
      showToast("Please enter OTP!", "error");
      return;
    }

    if (!requestId) {
      showToast("Please send OTP first!", "error");
      return;
    }

    setVerifyOtpInProgress(true);
    window.verifyOtp(
      otpValue,
      () => {
        setVerifyOtpInProgress(false);
        showToast("OTP verified successfully.", "success");
        setFormData((prev) => ({ ...prev, phone: getMobileNo() }));
        setMobileVerified(true);
        setShowMobileOtp(false);
      },
      (error) => {
        setVerifyOtpInProgress(false);
        showToast(error.message, "error");
        setOtp(initialOtpState);
      },
      requestId
    );
  }, [getMobileNo, otp, requestId]);

  const resendMobileOtp = useCallback(
    (channel) => {
      if (!requestId) {
        showToast("Please send OTP first!", "error");
        return;
      }

      setGetOtpInProgress(true);
      setOtp(initialOtpState);
      window.retryOtp(
        channel,
        () => {
          setGetOtpInProgress(false);
          showToast("OTP resent successfully.", "success");
        },
        (error) => {
          setGetOtpInProgress(false);
          showToast(error.message, "error");
        },
        requestId
      );
    },
    [requestId]
  );

  const handleOtpChange = useCallback(
    (index, value) => {
      if (value.length > 1) {
        const digits = value.replace(/\D/g, "").slice(0, 4);
        if (!digits) {
          return;
        }

        setOtp((prev) => {
          const next = [...prev];
          digits.split("").forEach((digit, digitIndex) => {
            if (index + digitIndex < next.length) {
              next[index + digitIndex] = digit;
            }
          });
          return next;
        });

        const nextFocusIndex = Math.min(index + digits.length, 3);
        document.getElementById(`${formId}-otp-${nextFocusIndex}`)?.focus();
        return;
      }

      if (value && !/^\d$/.test(value)) {
        return;
      }

      setOtp((prev) => {
        const next = [...prev];
        next[index] = value;
        return next;
      });

      if (value && index < 3) {
        document.getElementById(`${formId}-otp-${index + 1}`)?.focus();
      }
    },
    [formId]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!mobileVerified) {
        setError("Please verify your mobile number");
        showToast("Please verify your mobile number", "error");
        return;
      }

      setSubmitting(true);
      setError("");

      try {
        const data = await sendDataInSegmento({
          input: { ...formData, ...getUtmParamsFromCookies() },
        });

        if (data?.status === "success") {
          setFormData(initialFormState);
          resetMobileVerification();
          router.push("/thank-you");
        } else {
          setError(data?.errors || "Unknown error");
        }
      } catch (err) {
        setError("Submission failed. Please try again.");
        console.error("Error submitting form:", err);
      } finally {
        setSubmitting(false);
      }
    },
    [formData, mobileVerified, resetMobileVerification, router]
  );

  const submitLabel = submitting
    ? "Scheduling..."
    : location === "banner"
      ? "Book A Free Demo"
      : "Book Free Demo";

  const form = (
    <form
      onSubmit={handleSubmit}
      className="w-100 gap-3 d-flex flex-column"
      autoComplete="on"
    >
      <FormFields
        formData={formData}
        handleChange={handleChange}
        error={error}
        location={location}
        verticalFields={verticalFields}
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
      <button
        type="submit"
        className={`btn ${
          submitting || !mobileVerified ? "btn-disabled" : "btn-primary"
        } w-100 d-flex align-items-center justify-content-center ${
          isBanner
            ? "rounded-3 py-3 px-4 c-fw-600 c-fs-5 mt-1"
            : "px-3 py-2 rounded"
        }`}
        disabled={submitting || !mobileVerified}
      >
        {submitLabel}
      </button>
    </form>
  );

  if (isBanner) {
    return (
      <div
        className={`outfit-font col-lg-5 col-12 w-100 mx-auto ${style.bannerForm} d-flex flex-column bg-white rounded-4 p-4 overflow-visible`}
      >
        <div className="d-flex gap-3 mb-4">
          <div className="border-start border-4 border-primary rounded flex-shrink-0 align-self-stretch" />
          <div>
            <p className="font-sm font-grey-deep m-0 lh-base">
              Fill in your details below to activate your demo.
            </p>
          </div>
        </div>
        {form}
      </div>
    );
  }

  return (
    <div
      className={`${style.form_container} w-100 bg-extra-light-blue p-lg-5 p-md-4 p-3 d-flex align-items-center justify-content-center rounded`}
    >
      <div className="d-flex align-items-center justify-content-center flex-column gap-3 w-100">
        <p className="col-primary c-fw-600 mb-0 c-fs-3">
          {heading ? "Explore the Advanced Accounting Features of Giddh" : ""}
        </p>
        {form}
      </div>
    </div>
  );
}
