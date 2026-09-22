import { toast } from "react-toastify";

export function showToaster(message, type, position = "top-center") {
  toast.dismiss();
  toast(message, { type: type, position: position });
}

export function setInputValue(fieldId, value) {
  const sanitizedValue = value ?? "";
  const tryAssignValue = (retries = 10) => {
    const targetInput = document.getElementById(fieldId);
    if (targetInput) {
      targetInput.value = sanitizedValue;
    } else if (retries > 0) {
      setTimeout(() => tryAssignValue(retries - 1), 50);
    }
  };

  tryAssignValue();
}

export function formatMobileNumber(number) {
  return String(number).replace("+", "").trim();
}

export function initiateOtpFieldsAutoMove(selector) {
  setTimeout(function () {
    const charInputs = document.querySelectorAll(selector);

    // Add paste handler to the first input field
    if (charInputs.length > 0 && !charInputs[0].dataset.pasteHandlerAttached) {
      charInputs[0].addEventListener("paste", (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").trim();

        // Only process if we have data and it looks like a numeric code
        if (pastedData && /^\d+$/.test(pastedData)) {
          // Distribute the pasted characters across input fields
          const pastedChars = pastedData.split("");

          // Fill as many inputs as we have characters (up to the max number of inputs)
          for (
            let i = 0;
            i < Math.min(pastedChars.length, charInputs.length);
            i++
          ) {
            charInputs[i].value = pastedChars[i];
          }

          // Focus on the next empty field or the verify button if all fields are filled
          if (pastedChars.length < charInputs.length) {
            charInputs[pastedChars.length].focus();
          } else {
            if (selector === ".email-otp-field") {
              document.getElementById("verify-email-button")?.focus?.() ||
                document.getElementById("verify-email-button")?.focus();
            } else if (selector === ".mobile-otp-field") {
              document.getElementById("verify-mobile-button")?.focus?.() ||
                document.getElementById("verify-mobile-button")?.focus();
            }
          }
        }
      });
      charInputs[0].dataset.pasteHandlerAttached = "true";
    }

    charInputs.forEach((input, index) => {
      if (input.dataset.listenersAttached === "true") {
        return;
      }

      input.addEventListener("input", (e) => {
        const value = e.target.value;

        if (value.length > 0) {
          if (index < charInputs.length - 1) {
            charInputs[index + 1].focus();
          } else {
            if (selector === ".email-otp-field") {
              document.getElementById("verify-email-button")?.focus?.() ||
                document.getElementById("verify-email-button")?.focus();
            } else if (selector === ".mobile-otp-field") {
              document.getElementById("verify-mobile-button")?.focus?.() ||
                document.getElementById("verify-mobile-button")?.focus();
            }
          }
        }
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value.length === 0 && index > 0) {
          e.preventDefault(); // Prevent the browser's default backspace behavior
          charInputs[index - 1].focus();
        }
      });

      // Add paste handler to all fields (not just the first)
      input.addEventListener("paste", (e) => {
        // Let the first input handle the paste event
        if (index === 0) return;

        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").trim();

        // Only process if we have data and it looks like a numeric code
        if (pastedData && /^\d+$/.test(pastedData)) {
          // Distribute the pasted characters across input fields starting from current position
          const pastedChars = pastedData.split("");

          // Fill as many inputs as we have characters (up to the max number of inputs)
          for (
            let i = 0;
            i < Math.min(pastedChars.length, charInputs.length - index);
            i++
          ) {
            charInputs[index + i].value = pastedChars[i];
          }

          // Focus on the next empty field or the verify button if all fields are filled
          if (pastedChars.length < charInputs.length - index) {
            charInputs[index + pastedChars.length].focus();
          } else {
            if (selector === ".email-otp-field") {
              document.getElementById("verify-email-button")?.focus?.() ||
                document.getElementById("verify-email-button")?.focus();
            } else if (selector === ".mobile-otp-field") {
              document.getElementById("verify-mobile-button")?.focus?.() ||
                document.getElementById("verify-mobile-button")?.focus();
            }
          }
        }
      });

      input.dataset.listenersAttached = "true";
    });
  });
}

export function getOtpFromFields(selector) {
  let otp = "";
  if (typeof document !== "undefined") {
    document.querySelectorAll(selector).forEach(function (field) {
      otp += field.value;
    });
  }
  return otp;
}

export function clearOtpFields(selector) {
  if (typeof document !== "undefined") {
    document.querySelectorAll(selector).forEach((field) => {
      field.value = "";
    });
  }
}

export function getWidgetChannels() {
  if (typeof window !== "undefined" && typeof window.getWidgetData === "function") {
    const widgetData = window.getWidgetData();
    if (widgetData && widgetData.processes) {
      const channels = [];
      widgetData.processes.forEach((process) => {
        if (process.channel?.value != "3") {
          if (!channels[process.channel.value]) {
            channels[process.channel.value] = [];
          }
          channels[process.channel.value] = process.channel;
        }
      });
      return channels;
    }
  }
  return null;
}

export function handleDisplayMobileNumber(intlRef, setMobileNo) {
  if (!intlRef) {
    return;
  }

  const setFormattedNumber = () => {
    const number = intlRef.getNumber();
    const displayMobileNumber = number.includes("+")
      ? number
      : `+${intlRef.getSelectedCountryData()?.dialCode}${intlRef.getNumber()}`;
    setMobileNo(displayMobileNumber);
  };

  if (intlRef.getSelectedCountryData()?.dialCode) {
    setFormattedNumber();
  } else {
    intlRef.setCountry("in");
    setTimeout(() => {
      setFormattedNumber();
    }, 100);
  }
}

export function handleOtpVerifyRedirect(response, region) {
  if (typeof setGiddhRegionSession === "function") {
    setGiddhRegionSession(response.session.id, region);
  }
  if (typeof window !== "undefined") {
    window.location =
      process.env.NEXT_PUBLIC_APP_URL +
      "/token-verify?request=" +
      response.session.id +
      "&region=" +
      region;
  }
}

export function getSourceParam(extraParams = {}) {
  let sourceData = null;
  if (typeof getLocalStorage === "function") {
    sourceData = getLocalStorage("source");
  }

  let sourceObj = {};

  if (sourceData) {
    if (typeof sourceData === "object") {
      sourceObj = { ...sourceData };
    } else {
      try {
        sourceObj = JSON.parse(sourceData);
      } catch (e) {
        sourceObj = { source: sourceData };
      }
    }
  } else if (typeof window !== "undefined" && window.location.search) {
    const searchParams = new URLSearchParams(window.location.search);
    const standardKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "ref",
      "region",
    ];
    searchParams.forEach((value, key) => {
      if (!standardKeys.includes(key) && value) {
        sourceObj[key] = value;
      }
    });
  }

  if (extraParams && typeof extraParams === "object") {
    Object.keys(extraParams).forEach((key) => {
      if (extraParams[key]) {
        sourceObj[key] = extraParams[key];
      }
    });
    if (Object.keys(extraParams).length > 0 && typeof setLocalStorage === "function") {
      setLocalStorage("source", sourceObj);
    }
  }

  if (Object.keys(sourceObj).length > 0) {
    return JSON.stringify(sourceObj);
  }
  return "";
}

export function executeRetryOtp({
  channel,
  emailDetails,
  mobileDetails,
  resetEmailOtp,
  resetMobileOtp,
  setEmailGetOtpInProgress,
  setMobileGetOtpInProgress,
}) {
  let requestId = "";
  if (channel == 3) {
    resetEmailOtp?.();
    setEmailGetOtpInProgress?.(true);
    requestId = emailDetails?.requestId || "";
  } else {
    resetMobileOtp?.();
    setMobileGetOtpInProgress?.(true);
    requestId = mobileDetails?.requestId || "";
  }

  const onSuccess = () => {
    showToaster("OTP resent successfully.", "success", "top-center");
    if (channel == 3) {
      setEmailGetOtpInProgress?.(false);
    } else {
      setMobileGetOtpInProgress?.(false);
    }
  };

  const onError = (error) => {
    showToaster(error?.message || error || "Failed to resend OTP", "error", "top-center");
    if (channel == 3) {
      setEmailGetOtpInProgress?.(false);
    } else {
      setMobileGetOtpInProgress?.(false);
    }
  };

  if (typeof window !== "undefined" && typeof window.retryOtp === "function") {
    window.retryOtp(channel, onSuccess, onError, requestId);
  } else if (typeof window !== "undefined" && window.retryOtp) {
    window.retryOtp(channel, onSuccess, onError, requestId);
  }
}

export function handleGoogleApiSuccess({
  response,
  setEmailDetails,
  setShowEmailOtp,
  updateCurrentStep,
}) {
  if (response?.email) {
    setEmailDetails({
      email: response.email,
      accessToken: response.accessToken,
      isVerified: true,
      signupVia: "google",
    });
    setInputValue("email", response.email);
    setShowEmailOtp(false);
    updateCurrentStep(2);
  }
}

export function handleMobileOtpSent({
  data,
  intl,
  setMobileGetOtpInProgress,
  setMobileDetails,
  setShowMobileOtpSection,
  successMessage = "OTP sent successfully.",
}) {
  setMobileGetOtpInProgress(false);
  showToaster(successMessage, "success", "top-center");
  const currentMobileNo = formatMobileNumber(intl?.getNumber ? intl.getNumber() : "");

  setMobileDetails({
    mobileNo: currentMobileNo,
    accessToken: "",
    isVerified: false,
    signupVia: "giddh",
    requestId: data?.message || data,
  });
  setShowMobileOtpSection(true);
}

export function handleSignupError(error, setSignupInProgress) {
  setSignupInProgress(false);
  showToaster(error?.message || error || "Error creating account", "error", "top-center");
}

export function handleKeyDownEnter(event, callback) {
  if (event.keyCode === 13 || event.key === "Enter") {
    callback?.();
  }
}

export function geoIpLookupHandler(success, failure) {
  let countryCode = "in";
  const fetchIPApi = fetch("https://api.db-ip.com/v2/free/self");
  fetchIPApi.then(
    (res) => {
      if (res?.ipAddress) {
        const fetchCountryByIpApi = fetch(
          "http://ip-api.com/json/" + `${res.ipAddress}`
        );
        fetchCountryByIpApi.then(
          (fetchCountryByIpApiRes) => {
            if (fetchCountryByIpApiRes?.countryCode) {
              return success(fetchCountryByIpApiRes.countryCode);
            } else {
              return success(countryCode);
            }
          },
          (fetchCountryByIpApiErr) => {
            const fetchCountryByIpInfoApi = fetch(
              "https://ipinfo.io/" + `${res?.ipAddress}`
            );

            fetchCountryByIpInfoApi.then(
              (fetchCountryByIpInfoApiRes) => {
                if (fetchCountryByIpInfoApiRes?.country) {
                  return success(fetchCountryByIpInfoApiRes.country);
                } else {
                  return success(countryCode);
                }
              },
              (fetchCountryByIpInfoApiErr) => {
                return success(countryCode);
              }
            );
          }
        );
      } else {
        return success(countryCode);
      }
    },
    (err) => {
      return success(countryCode);
    }
  );
}

export function handleLoadTelLibrary({
  inputSelector = "mobileNo",
  setIntl,
  setIntlRef,
  onCountryChange,
  retries = 20,
}) {
  const input = typeof document !== "undefined" ? document.getElementById(inputSelector) : null;
  const isIntlAvailable =
    typeof window !== "undefined" &&
    typeof window.intlTelInput === "function";

  if (!input || !isIntlAvailable) {
    if (retries > 0) {
      setTimeout(() => {
        handleLoadTelLibrary({
          inputSelector,
          setIntl,
          setIntlRef,
          onCountryChange,
          retries: retries - 1,
        });
      }, 100);
    }
    return;
  }

  if (input.dataset.intlTelInitialized === "true") {
    return;
  }

  const intl = window.intlTelInput(input, {
    nationalMode: true,
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    autoHideDialCode: false,
    separateDialCode: false,
    initialCountry: "auto",
    geoIpLookup: geoIpLookupHandler,
  });

  input.dataset.intlTelInitialized = "true";
  if (typeof setIntlRef === "function") {
    setIntlRef(intl);
  }
  setIntl?.(intl);
  if (typeof onCountryChange === "function") {
    onCountryChange(intl);
    input.addEventListener("countrychange", () => onCountryChange(intl));
  }
  return intl;
}

export function initializeTelInput({
  inputSelector = "mobileNo",
  setIntl,
  onCountryChange,
  initialCountry = "auto",
  geoIpLookup = geoIpLookupHandler,
  retries = 20,
}) {
  return handleLoadTelLibrary({
    inputSelector,
    setIntl,
    onCountryChange,
    retries,
  });
}

export function handleInitOtpSignup({
  setEmailDetails,
  setMobileDetails,
  setShowEmailOtp,
  setShowMobileOtp,
  updateCurrentStep,
  getWidgetData,
}) {
  const userData = typeof getLocalStorage === "function" ? getLocalStorage("userData") : null;
  if (userData) {
    if (userData.user?.email) {
      setEmailDetails({
        email: userData.user.email,
        accessToken: userData.accessToken,
        isVerified: true,
        signupVia: userData.signupVia,
      });
      setShowEmailOtp(false);
      updateCurrentStep(2);
      setInputValue("email", userData.user.email);
    } else if (userData.user?.mobileNo) {
      setMobileDetails({
        mobileNo: userData.user.mobileNo,
        accessToken: userData.accessToken,
        isVerified: true,
        signupVia: userData.signupVia,
      });
      updateCurrentStep(2);
      setShowMobileOtp(false);
      setInputValue("mobileNo", userData.user.mobileNo);
    }
  }

  if (typeof addOtpWidgetScript === "function") {
    addOtpWidgetScript(true, false, () => {
      setTimeout(() => {
        getWidgetData?.();
      }, 2000);
    });
  }
}

export function handleResetEverything({
  setEmailDetails,
  setMobileDetails,
  setShowEmailOtp,
  setShowMobileOtp,
  updateCurrentStep,
}) {
  if (typeof removeLocalStorage === "function") {
    removeLocalStorage("userData");
  }
  setEmailDetails({
    email: "",
    accessToken: "",
    isVerified: false,
    signupVia: "",
    requestId: "",
  });
  setMobileDetails({
    mobileNo: "",
    accessToken: "",
    isVerified: false,
    signupVia: "",
    requestId: "",
  });
  setShowEmailOtp(false);
  setShowMobileOtp(false);
  updateCurrentStep(2);

  setInputValue("email", "");
  setInputValue("mobileNo", "");
}

export function handleSetShowOtpSection({
  type,
  showOtp,
  setShowEmailOtp,
  setShowMobileOtp,
  setEmailDetails,
  setMobileDetails,
}) {
  if (type === "email") {
    setShowEmailOtp?.(showOtp);
    if (!showOtp) {
      setEmailDetails?.((prev) => ({
        ...prev,
        email: "",
        isVerified: false,
        requestId: "",
      }));
    }
  } else {
    setShowMobileOtp?.(showOtp);
    if (!showOtp) {
      setMobileDetails?.((prev) => ({
        ...prev,
        mobileNo: "",
        isVerified: false,
        requestId: "",
      }));
    }
  }
}

export function handleSendEmailOtp({
  emailInputId = "email",
  setEmailGetOtpInProgress,
  onSuccess,
  onError,
}) {
  const emailInput = typeof document !== "undefined" ? document.getElementById(emailInputId) : null;
  const emailValue = emailInput?.value?.trim() || "";

  if (!emailValue || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailValue)) {
    showToaster("Please enter valid email!", "error", "top-center");
    return;
  }

  setEmailGetOtpInProgress?.(true);

  if (typeof window !== "undefined" && typeof window.sendOtp === "function") {
    window.sendOtp(
      emailValue,
      (data) => onSuccess?.(data),
      (error) => onError?.(error)
    );
  } else {
    setEmailGetOtpInProgress?.(false);
    showToaster("OTP service is initializing. Please try again in a few seconds.", "error", "top-center");
  }
}

export function handleSendMobileOtp({
  intl,
  setMobileGetOtpInProgress,
  onSuccess,
  onError,
}) {
  if (!intl) {
    showToaster("Please enter valid mobile number!", "error", "top-center");
    return;
  }
  const currentMobileNo = formatMobileNumber(intl?.getNumber ? intl.getNumber() : "");
  if (!currentMobileNo) {
    showToaster("Please enter valid mobile number!", "error", "top-center");
    return;
  }

  setMobileGetOtpInProgress?.(true);

  if (typeof window !== "undefined" && typeof window.sendOtp === "function") {
    window.sendOtp(
      currentMobileNo,
      (data) => onSuccess?.(data),
      (error) => onError?.(error)
    );
  } else {
    setMobileGetOtpInProgress?.(false);
    showToaster("OTP service is initializing. Please try again in a few seconds.", "error", "top-center");
  }
}

export function handleEmailOtpSent({
  data,
  emailInputId = "email",
  setEmailGetOtpInProgress,
  setEmailDetails,
  setShowEmailOtpSection,
  successMessage = "OTP sent successfully to your email.",
}) {
  setEmailGetOtpInProgress?.(false);
  showToaster(successMessage, "success", "top-center");
  const emailValue = typeof document !== "undefined" ? document.getElementById(emailInputId)?.value || "" : "";

  setEmailDetails?.({
    email: emailValue,
    accessToken: "",
    isVerified: false,
    signupVia: "giddh",
    requestId: data?.message || data,
  });
  setShowEmailOtpSection?.(true);
}

export function handleOtpFailed({
  type,
  error,
  setEmailGetOtpInProgress,
  setMobileGetOtpInProgress,
  setShowEmailOtpSection,
  setShowMobileOtpSection,
  setEmailDetails,
  setMobileDetails,
}) {
  if (type === "email") {
    setEmailGetOtpInProgress?.(false);
    showToaster(error?.message || error || "Failed to send OTP", "error", "top-center");
    setShowEmailOtpSection?.(false);
    setEmailDetails?.((prev) => ({ ...prev, requestId: "" }));
  } else {
    setMobileGetOtpInProgress?.(false);
    showToaster(error?.message || error || "Failed to send OTP", "error", "top-center");
    setShowMobileOtpSection?.(false);
    setMobileDetails?.((prev) => ({ ...prev, requestId: "" }));
  }
}

export function handleResetOtp({
  type,
  setEmailDetails,
  setMobileDetails,
}) {
  if (type === "email") {
    setEmailDetails?.((prev) => ({ ...prev, isVerified: false, accessToken: "" }));
    clearOtpFields(".email-otp-field");
  } else {
    setMobileDetails?.((prev) => ({ ...prev, isVerified: false, accessToken: "" }));
    clearOtpFields(".mobile-otp-field");
  }
}

export function handleVerifyOtp({
  type,
  emailDetails,
  mobileDetails,
  setEmailVerifyOtpInProgress,
  setMobileVerifyOtpInProgress,
  onSuccess,
  onError,
}) {
  let otpVal = "";
  let requestId = "";

  if (type === "email") {
    otpVal = getOtpFromFields(".email-otp-field");
    if (!otpVal) {
      showToaster("Please enter OTP!", "error", "top-center");
      return;
    }
    setEmailVerifyOtpInProgress?.(true);
    requestId = emailDetails?.requestId || "";
  } else {
    otpVal = getOtpFromFields(".mobile-otp-field");
    if (!otpVal) {
      showToaster("Please enter OTP!", "error", "top-center");
      return;
    }
    setMobileVerifyOtpInProgress?.(true);
    requestId = mobileDetails?.requestId || "";
  }

  if (typeof window !== "undefined" && typeof window.verifyOtp === "function") {
    window.verifyOtp(
      otpVal,
      (data) => onSuccess?.(data),
      (error) => onError?.(error),
      requestId
    );
  }
}

export function handleVerifyOtpSuccess({
  type,
  data,
  setEmailVerifyOtpInProgress,
  setMobileVerifyOtpInProgress,
  setEmailDetails,
  setMobileDetails,
}) {
  showToaster("OTP verified successfully.", "success", "top-center");
  if (type === "email") {
    setEmailVerifyOtpInProgress?.(false);
    setEmailDetails?.((prev) => ({ ...prev, isVerified: true, accessToken: data?.message || data }));
  } else {
    setMobileVerifyOtpInProgress?.(false);
    setMobileDetails?.((prev) => ({ ...prev, isVerified: true, accessToken: data?.message || data }));
  }
}

export function handleVerifyOtpError({
  type,
  error,
  setEmailVerifyOtpInProgress,
  setMobileVerifyOtpInProgress,
  setEmailDetails,
  setMobileDetails,
}) {
  showToaster(error?.message || error || "OTP Verification failed", "error", "top-center");
  if (type === "email") {
    setEmailVerifyOtpInProgress?.(false);
    setEmailDetails?.((prev) => ({ ...prev, isVerified: false, accessToken: "" }));
  } else {
    setMobileVerifyOtpInProgress?.(false);
    setMobileDetails?.((prev) => ({ ...prev, isVerified: false, accessToken: "" }));
  }
}
