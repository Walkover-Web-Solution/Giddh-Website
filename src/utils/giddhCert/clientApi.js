async function request(path, { method = "GET", body } = {}) {
  const response = await fetch(path, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
    credentials: "same-origin",
  });

  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    const data = await response.json();
    if (!response.ok || data?.ok === false) {
      const error = new Error(data?.message);
      error.status = response.status;
      error.data = data;
      throw error;
    }
    return data;
  }

  if (!response.ok) {
    const error = new Error(response.statusText);
    error.status = response.status;
    throw error;
  }

  return response;
}

export function startSession({ mobile, countryCode }) {
  return request("/api/giddh-cert/verify-otp", {
    method: "POST",
    body: { mobile, countryCode },
  });
}

export function saveProfile(payload) {
  return request("/api/giddh-cert/profile", {
    method: "POST",
    body: payload,
  });
}

export function submitResult(payload) {
  return request("/api/giddh-cert/result", {
    method: "POST",
    body: payload,
  });
}

export function getDownloadUrl(countryCode, mobile) {
  return `/api/giddh-cert/download?countryCode=${encodeURIComponent(
    countryCode
  )}&mobile=${encodeURIComponent(mobile)}`;
}
