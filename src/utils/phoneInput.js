export function setupPhoneInput(inputRef, intlRef, options = {}) {
  const input = inputRef.current;
  if (!input || input.dataset.intlTelInitialized === "true") {
    return;
  }

  const init = () => {
    if (typeof window.intlTelInput !== "function") {
      return;
    }

    const config = {
      nationalMode: true,
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
      initialCountry: "in",
    };

    if (options.dropdownContainer) {
      config.dropdownContainer = options.dropdownContainer;
    }

    intlRef.current = window.intlTelInput(input, config);
    input.dataset.intlTelInitialized = "true";
  };

  if (!document.querySelector('link[href*="intlTelInput.css"]')) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/css/intlTelInput.css";
    document.head.appendChild(link);
  }

  if (typeof window.intlTelInput === "function") {
    init();
    return;
  }

  const existingScript = document.querySelector(
    'script[src*="intlTelInput.min.js"]'
  );
  if (existingScript) {
    existingScript.addEventListener("load", init, { once: true });
    return;
  }

  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js";
  script.onload = init;
  document.head.appendChild(script);
}
