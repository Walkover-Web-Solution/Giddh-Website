import { toast } from "react-toastify";

export function showToaster(message, type, position) {
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

    if (charInputs.length > 0 && !charInputs[0].dataset.pasteHandlerAttached) {
      charInputs[0].addEventListener("paste", (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").trim();

        if (pastedData && /^\d+$/.test(pastedData)) {
          const pastedChars = pastedData.split("");

          for (
            let i = 0;
            i < Math.min(pastedChars.length, charInputs.length);
            i++
          ) {
            charInputs[i].value = pastedChars[i];
          }

          if (pastedChars.length < charInputs.length) {
            charInputs[pastedChars.length].focus();
          } else {
            if (selector === ".email-otp-field") {
              document.getElementById("verify-email-button")?.focus();
            } else if (selector === ".mobile-otp-field") {
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
              document.getElementById("verify-email-button")?.focus();
            } else if (selector === ".mobile-otp-field") {
              document.getElementById("verify-mobile-button")?.focus();
            }
          }
        }
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value.length === 0 && index > 0) {
          e.preventDefault();
          charInputs[index - 1].focus();
        }
      });

      input.addEventListener("paste", (e) => {
        if (index === 0) return;

        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").trim();

        if (pastedData && /^\d+$/.test(pastedData)) {
          const pastedChars = pastedData.split("");

          for (
            let i = 0;
            i < Math.min(pastedChars.length, charInputs.length - index);
            i++
          ) {
            charInputs[index + i].value = pastedChars[i];
          }

          if (pastedChars.length < charInputs.length - index) {
            charInputs[index + pastedChars.length].focus();
          } else {
            if (selector === ".email-otp-field") {
              document.getElementById("verify-email-button")?.focus();
            } else if (selector === ".mobile-otp-field") {
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
  var otp = "";
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
    var widgetData = window.getWidgetData();
    if (widgetData && widgetData.processes) {
      var channels = [];
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
    let number = intlRef.getNumber();
    let displayMobileNumber = number.includes("+")
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

export function handleKeyDownEnter(event, callback) {
  if (event.keyCode === 13 || event.key === "Enter") {
    callback?.();
  }
}

export function handleSignupError(error, setSignupInProgress) {
  setSignupInProgress?.(false);
  showToaster(error, "error", "top-center");
}

export function handleStepUpdate(step, setCurrentStep, loadTelLibrary) {
  setCurrentStep(step);
  setTimeout(() => {
    loadTelLibrary?.();
  });
}

export function getSourceParam() {
  var sourceData = typeof getLocalStorage === "function" ? getLocalStorage("source") : null;
  var sourceObj = {};

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

  if (Object.keys(sourceObj).length > 0) {
    return JSON.stringify(sourceObj);
  }
  return "";
}


