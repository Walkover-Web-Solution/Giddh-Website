export function bindOtpInputs(selector, verifyButtonId) {
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
            document.getElementById(verifyButtonId)?.focus();
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
            document.getElementById(verifyButtonId)?.focus();
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
            document.getElementById(verifyButtonId)?.focus();
          }
        }
      });

      input.dataset.listenersAttached = "true";
    });
  });
}
