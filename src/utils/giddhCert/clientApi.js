import {
  CERTIFICATE_ISSUER_NAME,
  MODULE_PASS_PERCENT,
} from "@/utils/giddhCert/constants";
import { isValidMobile, normalizeMobile } from "@/utils/giddhCert/serverApi";

function getBaseUrl() {
  return `${process.env.NEXT_PUBLIC_API_URL}/public/giddh-cert`;
}

function resolveResumeScreen(body) {
  const lastAttempt = body?.lastAttempt;
  const passed =
    Number(lastAttempt?.percentage) >= MODULE_PASS_PERCENT &&
    Boolean(lastAttempt?.downloadUrl);
  if (passed) {
    return "certificate";
  }
  if (body?.canAttempt === false && body?.nextAttemptAt) {
    return "blocked";
  }
  if (body?.profile?.name) {
    return "test";
  }
  return "registration";
}

function buildLearner(mobile, countryCode, body) {
  return {
    mobile,
    countryCode,
    profile: body?.profile,
    canAttempt: body?.canAttempt,
    nextAttemptAt: body?.nextAttemptAt,
    lastAttempt: body?.lastAttempt,
  };
}

async function request(path, { method = "GET", body } = {}) {
  const response = await fetch(`${getBaseUrl()}${path}`, {
    method,
    mode: "cors",
    cache: "no-store",
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });

  const contentType = response.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    if (!response.ok) {
      const error = new Error(response.statusText);
      error.status = response.status;
      throw error;
    }
    return response;
  }

  const data = await response.json();
  if (!response.ok || data?.status !== "success") {
    const error = new Error(data?.message);
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

export function getDownloadUrl({ mobile, countryCode }) {
  const normalizedMobile = normalizeMobile(mobile);
  const normalizedCountryCode = String(countryCode).replace(/\D/g, "");
  const params = new URLSearchParams({
    countryCode: normalizedCountryCode,
    mobile: normalizedMobile,
  });
  return `${getBaseUrl()}/download?${params.toString()}`;
}

export function resolveDownloadUrl(downloadUrl, { mobile, countryCode }) {
  if (downloadUrl) {
    if (
      downloadUrl.startsWith("http://") ||
      downloadUrl.startsWith("https://")
    ) {
      return downloadUrl;
    }
    if (downloadUrl.startsWith("/")) {
      return `${process.env.NEXT_PUBLIC_API_URL}${downloadUrl}`;
    }
  }
  return getDownloadUrl({ mobile, countryCode });
}

export async function downloadCertificatePdf(downloadUrl) {
  if (typeof window === "undefined" || !downloadUrl) {
    return;
  }

  const response = await fetch(downloadUrl, {
    method: "GET",
    mode: "cors",
    cache: "no-store",
  });

  if (!response.ok) {
    const error = new Error(response.statusText);
    error.status = response.status;
    throw error;
  }

  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = "giddh-certificate.pdf";
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}

export async function startSession({ mobile, countryCode }) {
  const normalizedMobile = normalizeMobile(mobile);
  const normalizedCountryCode = String(countryCode).replace(/\D/g, "");

  if (!isValidMobile(normalizedMobile)) {
    const error = new Error("Please enter a valid mobile number");
    error.status = 400;
    throw error;
  }

  const data = await request("/check", {
    method: "POST",
    body: {
      countryCode: normalizedCountryCode,
      mobile: normalizedMobile,
    },
  });

  const body = data.body;
  return {
    ok: true,
    message: data?.message,
    resumeScreen: resolveResumeScreen(body),
    learner: buildLearner(normalizedMobile, normalizedCountryCode, body),
  };
}

export async function saveProfile({
  mobile,
  countryCode,
  name,
  email,
  designation,
  city,
}) {
  const normalizedMobile = normalizeMobile(mobile);
  const normalizedCountryCode = String(countryCode).replace(/\D/g, "");

  const data = await request("/profile", {
    method: "POST",
    body: {
      countryCode: normalizedCountryCode,
      mobile: normalizedMobile,
      name,
      email,
      designation,
      city,
    },
  });

  const body = data.body;
  return {
    ok: true,
    message: data?.message,
    learner: buildLearner(normalizedMobile, normalizedCountryCode, body),
  };
}

export async function submitResult({
  mobile,
  countryCode,
  score,
  percentage,
  totalQuestions,
}) {
  const normalizedMobile = normalizeMobile(mobile);
  const normalizedCountryCode = String(countryCode).replace(/\D/g, "");

  const data = await request("/result", {
    method: "POST",
    body: {
      countryCode: normalizedCountryCode,
      mobile: normalizedMobile,
      score,
      percentage,
      totalQuestions,
    },
  });

  const body = data.body;
  const lastAttempt = body?.lastAttempt;
  const downloadUrl = resolveDownloadUrl(lastAttempt?.downloadUrl, {
    mobile: normalizedMobile,
    countryCode: normalizedCountryCode,
  });

  return {
    ok: true,
    message: data?.message,
    learner: buildLearner(normalizedMobile, normalizedCountryCode, body),
    certificate: {
      learnerName: body?.profile?.name,
      score: lastAttempt?.percentage,
      issuedAt: lastAttempt?.completedAt,
      validUntil: lastAttempt?.validUntil,
      issuerName: CERTIFICATE_ISSUER_NAME,
      downloadUrl,
    },
  };
}

export async function discardAttempt({ mobile, countryCode, totalQuestions }) {
  return submitResult({
    mobile,
    countryCode,
    score: 0,
    percentage: 0,
    totalQuestions,
  });
}
