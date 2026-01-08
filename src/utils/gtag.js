export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export const pageview = (url) => {
  if (!GA_ID) return;
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("config", GA_ID, { page_path: url });
};

/**
 * Send a GA4 event
 * @example event("sign_up", { method: "Email" })
 * @example event("login", { method: "Google" })
 */
export const event = (name, params = {}) => {
  if (!GA_ID) return;
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
};


