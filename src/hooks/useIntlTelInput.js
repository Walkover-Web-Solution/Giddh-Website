import { useEffect, useRef } from "react";

const INTL_TEL_CSS =
  "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/css/intlTelInput.css";
const INTL_TEL_JS =
  "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js";
const INTL_TEL_UTILS =
  "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js";

function loadIntlTelAssets() {
  return new Promise((resolve) => {
    if (typeof window.intlTelInput === "function") {
      resolve();
      return;
    }

    if (!document.querySelector(`link[href="${INTL_TEL_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = INTL_TEL_CSS;
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector(`script[src="${INTL_TEL_JS}"]`);
    if (existingScript) {
      if (typeof window.intlTelInput === "function") {
        resolve();
      } else {
        existingScript.addEventListener("load", () => resolve(), { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.src = INTL_TEL_JS;
    script.defer = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
}

function geoIpLookup(success) {
  const fallback = () => success("in");

  fetch("https://api.db-ip.com/v2/free/self")
    .then((res) => res.json())
    .then((data) => {
      if (!data?.ipAddress) {
        fallback();
        return;
      }

      fetch("http://ip-api.com/json/" + data.ipAddress)
        .then((res) => res.json())
        .then((countryData) => {
          if (countryData?.countryCode) {
            success(countryData.countryCode);
            return;
          }
          fallback();
        })
        .catch(() => {
          fetch("https://ipinfo.io/" + data.ipAddress)
            .then((res) => res.json())
            .then((infoData) => {
              success(infoData?.country || "in");
            })
            .catch(fallback);
        });
    })
    .catch(fallback);
}

export default function useIntlTelInput(inputId) {
  const intlRef = useRef(null);

  const getFormattedPhone = () => {
    if (!intlRef.current) return "";
    const number = intlRef.current.getNumber();
    if (!number) return "";
    return String(number).replace("+", "").trim();
  };

  useEffect(() => {
    let mounted = true;

    const initInput = (retries = 20) => {
      const input = document.getElementById(inputId);
      const isIntlAvailable =
        typeof window !== "undefined" &&
        typeof window.intlTelInput === "function";

      if (!input || !isIntlAvailable) {
        if (retries > 0) {
          setTimeout(() => initInput(retries - 1), 100);
        }
        return;
      }

      if (input.dataset.intlTelInitialized === "true") {
        return;
      }

      const intl = window.intlTelInput(input, {
        nationalMode: true,
        utilsScript: INTL_TEL_UTILS,
        autoHideDialCode: false,
        separateDialCode: true,
        initialCountry: "auto",
        geoIpLookup,
      });

      input.dataset.intlTelInitialized = "true";
      intlRef.current = intl;

      if (!intl.getSelectedCountryData()?.dialCode) {
        intl.setCountry("in");
      }
    };

    loadIntlTelAssets().then(() => {
      if (mounted) initInput();
    });

    return () => {
      mounted = false;
      if (intlRef.current?.destroy) {
        intlRef.current.destroy();
        intlRef.current = null;
      }
      const input = document.getElementById(inputId);
      if (input) {
        delete input.dataset.intlTelInitialized;
      }
    };
  }, [inputId]);

  return { getFormattedPhone };
}
