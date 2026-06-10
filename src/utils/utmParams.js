export function getUtmParamsFromCookies() {
  if (typeof window === "undefined" || typeof window.getCookie !== "function") {
    return {};
  }

  const params = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "gclid",
    "fbclid",
  ];
  const utmParams = {};

  params.forEach((param) => {
    utmParams[param] = window.getCookie(param) || "";
  });

  return utmParams;
}
