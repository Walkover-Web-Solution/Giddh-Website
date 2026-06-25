import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { bindOtpInputs } from "@/utils/bindOtpInputs";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const EMAIL_OTP_CHANNEL = 3;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function loadOtpWidgetScript() {
  if (typeof window.addOtpWidgetScript === "function") {
    window.addOtpWidgetScript(true, false, () => {});
  }
}

// OTP script loads in the background — wait for it before sending.
async function waitForSendOtp() {
  loadOtpWidgetScript();

  for (let attempt = 0; attempt < 30; attempt += 1) {
    if (typeof window.sendOtp === "function") {
      return;
    }
    await sleep(200);
  }

  throw new Error(
    "OTP service is unavailable. Please refresh the page and try again."
  );
}
export default function useEmailOtpVerification({
  emailInputId = "affiliateEmail",
  otpFieldSelector = ".affiliate-email-otp-field",
  verifyButtonId = "affiliate-verify-email-button",
} = {}) {
  const [showEmailOtp, setShowEmailOtp] = useState(false);
  const [emailDetails, setEmailDetails] = useState(null);
  const [emailGetOtpInProgress, setEmailGetOtpInProgress] = useState(false);
  const [emailVerifyOtpInProgress, setEmailVerifyOtpInProgress] =
    useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof window.sendOtp === "function") return;

    loadOtpWidgetScript();
  }, []);

  useEffect(() => {
    if (showEmailOtp) {
      bindOtpInputs(otpFieldSelector, verifyButtonId);
    }
  }, [showEmailOtp, otpFieldSelector, verifyButtonId]);

  const showToaster = useCallback((message, type) => {
    toast.dismiss();
    toast(message, { type, position: "top-center" });
  }, []);

  const getEmailValue = useCallback(() => {
    return document.getElementById(emailInputId)?.value?.trim() || "";
  }, [emailInputId]);

  const resetEmailOtpFields = useCallback(() => {
    document.querySelectorAll(otpFieldSelector).forEach((field) => {
      field.value = "";
    });
  }, [otpFieldSelector]);

  const sendEmailOtp = useCallback(async () => {
    const email = getEmailValue();

    if (!email || !EMAIL_REGEX.test(email)) {
      showToaster("Please enter valid email!", "error");
      return;
    }

    setEmailGetOtpInProgress(true);

    try {
      await waitForSendOtp();
    } catch (error) {
      setEmailGetOtpInProgress(false);
      showToaster(error.message, "error");
      return;
    }

    window.sendOtp(
      email,
      (data) => {
        setEmailGetOtpInProgress(false);
        showToaster("OTP sent successfully.", "success");
        setEmailDetails({
          email,
          accessToken: "",
          isVerified: false,
          signupVia: "giddh",
          requestId: data.message,
        });
        setShowEmailOtp(true);
      },
      (error) => {
        setEmailGetOtpInProgress(false);
        showToaster(error.message, "error");
        setShowEmailOtp(false);
        setEmailDetails((prev) =>
          prev ? { ...prev, requestId: "" } : null
        );
      }
    );
  }, [getEmailValue, showToaster]);

  const changeEmail = useCallback(() => {
    setShowEmailOtp(false);
    setEmailDetails((prev) =>
      prev
        ? { ...prev, email: "", isVerified: false, requestId: "" }
        : null
    );
    resetEmailOtpFields();
  }, [resetEmailOtpFields]);

  const resetEmailVerification = useCallback(() => {
    setShowEmailOtp(false);
    setEmailDetails(null);
    resetEmailOtpFields();

    const emailInput = document.getElementById(emailInputId);
    if (emailInput) {
      emailInput.value = "";
    }
  }, [emailInputId, resetEmailOtpFields]);

  const retrySendOtp = useCallback(() => {
    if (!emailDetails?.requestId) return;

    setEmailGetOtpInProgress(true);
    setEmailDetails((prev) =>
      prev ? { ...prev, isVerified: false, accessToken: "" } : prev
    );
    resetEmailOtpFields();

    window.retryOtp(
      EMAIL_OTP_CHANNEL,
      () => {
        setEmailGetOtpInProgress(false);
        showToaster("OTP resent successfully.", "success");
      },
      (error) => {
        setEmailGetOtpInProgress(false);
        showToaster(error.message, "error");
      },
      emailDetails.requestId
    );
  }, [emailDetails?.requestId, resetEmailOtpFields, showToaster]);

  const verifyEmailOtp = useCallback(() => {
    let otp = "";

    document.querySelectorAll(otpFieldSelector).forEach((field) => {
      otp += field.value;
    });

    if (!otp) {
      showToaster("Please enter OTP!", "error");
      return;
    }

    if (!emailDetails?.requestId) {
      showToaster("Please send OTP first!", "error");
      return;
    }

    setEmailVerifyOtpInProgress(true);

    window.verifyOtp(
      otp,
      (data) => {
        setEmailVerifyOtpInProgress(false);
        showToaster("OTP verified successfully.", "success");
        setEmailDetails((prev) => ({
          ...prev,
          isVerified: true,
          accessToken: data.message,
        }));
      },
      (error) => {
        setEmailVerifyOtpInProgress(false);
        showToaster(error.message, "error");
        setEmailDetails((prev) =>
          prev ? { ...prev, isVerified: false, accessToken: "" } : prev
        );
      },
      emailDetails.requestId
    );
  }, [emailDetails?.requestId, otpFieldSelector, showToaster]);

  return {
    showEmailOtp,
    emailDetails,
    emailGetOtpInProgress,
    emailVerifyOtpInProgress,
    isEmailVerified: Boolean(emailDetails?.isVerified),
    sendEmailOtp,
    verifyEmailOtp,
    retrySendOtp,
    changeEmail,
    resetEmailVerification,
    showToaster,
  };
}
