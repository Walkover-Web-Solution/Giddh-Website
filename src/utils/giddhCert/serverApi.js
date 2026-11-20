export async function callGiddhCertApi(path, { method = "GET", body } = {}) {
  const base = `${process.env.NEXT_PUBLIC_API_URL}/public/giddh-cert`;
  const url =
    method === "GET" && body && !String(path).includes("?")
      ? `${base}${path}?${new URLSearchParams(body).toString()}`
      : `${base}${path}`;

  const headers = {
    Origin: process.env.NEXT_PUBLIC_SITE_URL,
  };

  if (method !== "GET") {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(url, {
    method,
    headers,
    body: method === "GET" ? undefined : JSON.stringify(body),
  });

  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    const data = await response.json();
    return { status: response.status, data, ok: response.ok };
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  return {
    status: response.status,
    ok: response.ok,
    buffer,
    contentType,
  };
}

export function normalizeMobile(mobile) {
  const digits = String(mobile).replace(/\D/g, "");
  return digits.slice(-10);
}

export function isValidMobile(mobile) {
  return /^[6-9]\d{9}$/.test(normalizeMobile(mobile));
}
