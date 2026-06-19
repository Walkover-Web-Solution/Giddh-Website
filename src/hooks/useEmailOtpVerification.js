import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { bindOtpInputs } from "@/utils/bindOtpInputs";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const EMAIL_OTP_CHANNEL = 3;

function pollOtpWidget(onReady, attempts = 25) {
  const widgetData =
    typeof window.getWidgetData === "function" ? window.getWidgetData() : null;

  if (widgetData?.processes && typeof window.sendOtp === "function") {
    onReady();
    return;
  }
  if (attempts <= 0) {
    return;
  }
  setTimeout(() => pollOtpWidget(onReady, attempts - 1), 200);
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
  const [otpWidgetReady, setOtpWidgetReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const markWidgetReady = () => {
      pollOtpWidget(() => setOtpWidgetReady(true));
    };

    if (typeof window.sendOtp === "function") {
      markWidgetReady();
      return;
    }

    addOtpWidgetScript(true, false, markWidgetReady);
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

  const sendEmailOtp = useCallback(() => {
    const email = getEmailValue();

    if (!email || !EMAIL_REGEX.test(email)) {
      showToaster("Please enter valid email!", "error");
      return;
    }

    if (
      typeof window.sendOtp !== "function" ||
      !otpWidgetReady
    ) {
      return;
    }

    setEmailGetOtpInProgress(true);

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
  }, [getEmailValue, otpWidgetReady, showToaster]);

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
