import { GIDDH_CONTACT_SALES_URL } from "../constants/contactSales";
import { getUtmParamsFromCookies } from "./utmParams";

function appendUtmParams(url) {
  const utmFromCookies = getUtmParamsFromCookies();
  if (typeof getLocalStorage === "function") {
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "ref"].forEach(
      (key) => {
        const value = getLocalStorage(key);
        if (value && !utmFromCookies[key]) {
          utmFromCookies[key] = value;
        }
      }
    );
  }

  Object.entries(utmFromCookies).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });

  if (typeof window !== "undefined" && window.location.search) {
    const pageParams = new URLSearchParams(window.location.search);
    pageParams.forEach((value, key) => {
      if (
        (key.startsWith("utm_") || key === "gclid" || key === "fbclid" || key === "ref") &&
        value &&
        !url.searchParams.has(key)
      ) {
        url.searchParams.set(key, value);
      }
    });
  }

  return url;
}

export function buildContactSalesFormUrl() {
  return appendUtmParams(new URL(GIDDH_CONTACT_SALES_URL)).toString();
}

export function openContactSalesForm() {
  if (typeof document === "undefined") {
    return;
  }

  document.getElementById("giddh-contact-sales-overlay")?.remove();

  const overlay = document.createElement("div");
  overlay.id = "giddh-contact-sales-overlay";
  overlay.className = "tf-v1-slider";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Contact Giddh sales");

  const wrapper = document.createElement("div");
  wrapper.className = "tf-v1-iframe-wrapper";
  wrapper.style.right = "0";

  const iframe = document.createElement("iframe");
  iframe.src = buildContactSalesFormUrl();
  iframe.title = "Accounting Software Company Contact Form";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "tf-v1-close";
  closeButton.setAttribute("aria-label", "Close contact form");
  closeButton.textContent = "×";

  const close = () => overlay.remove();

  closeButton.addEventListener("click", close);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      close();
    }
  });

  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      close();
      document.removeEventListener("keydown", onKeyDown);
    }
  };
  document.addEventListener("keydown", onKeyDown);

  wrapper.appendChild(iframe);
  overlay.appendChild(wrapper);
  overlay.appendChild(closeButton);
  document.body.appendChild(overlay);
  closeButton.focus();
}