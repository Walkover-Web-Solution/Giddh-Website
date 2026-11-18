import {
  normalizeMobile,
} from "./serverApi";
import { SESSION_COOKIE, SESSION_DAYS } from "./constants";

function parseCookies(cookieHeader) {
  return cookieHeader.split(";").reduce((acc, part) => {
    const [key, ...rest] = part.trim().split("=");
    if (!key) return acc;
    acc[key] = decodeURIComponent(rest.join("="));
    return acc;
  }, {});
}

export function getSessionFromRequest(req) {
  const cookies = parseCookies(req.headers.cookie || "");
  const raw = cookies[SESSION_COOKIE];
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    const mobile = normalizeMobile(parsed.mobile);
    const countryCode = String(parsed.countryCode).replace(/\D/g, "");
    if (!mobile || mobile.length !== 10) return null;
    return { mobile, countryCode };
  } catch {
    return null;
  }
}

export function setSessionCookie(res, { mobile, countryCode }) {
  const value = encodeURIComponent(
    JSON.stringify({
      mobile: normalizeMobile(mobile),
      countryCode: String(countryCode).replace(/\D/g, ""),
    })
  );
  const maxAge = SESSION_DAYS * 24 * 60 * 60;
  const isProd = process.env.NODE_ENV === "production";
  const cookie = [
    `${SESSION_COOKIE}=${value}`,
    "Path=/",
    `Max-Age=${maxAge}`,
    "HttpOnly",
    "SameSite=Lax",
    isProd ? "Secure" : "",
  ]
    .filter(Boolean)
    .join("; ");

  const existing = res.getHeader("Set-Cookie");
  if (!existing) {
    res.setHeader("Set-Cookie", cookie);
  } else if (Array.isArray(existing)) {
    res.setHeader("Set-Cookie", [...existing, cookie]);
  } else {
    res.setHeader("Set-Cookie", [existing, cookie]);
  }
}
