export const CERT_API_BASE =
  (process.env.NEXT_PUBLIC_API_URL || "https://apitest.giddh.com") +
  "/public/giddh-cert";

export const CERT_ORIGIN =
  process.env.GIDDH_CERT_ORIGIN ||
  ((process.env.NEXT_PUBLIC_API_URL || "").includes("apitest")
    ? "https://test.giddh.com"
    : process.env.NEXT_PUBLIC_SITE_URL || "https://test.giddh.com");

export const SESSION_COOKIE = "giddh_cert_session";
export const SESSION_DAYS = 7;

export const MODULE_PASS_PERCENT = 70;
export const QUESTIONS_PER_MODULE = 10;
export const MODULE_TIMER_SECONDS = 10 * 60;

export const PROFESSIONS = [
  "Chartered Accountant",
  "Bookkeeper",
  "Consultant",
  "Reseller Owner",
  "Reseller / Partner",
  "Other",
];
