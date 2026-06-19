const REGION_CURRENCY_MAP = {
  in: "INR",
  ae: "AED",
  uk: "GBP",
};

const REGION_PATHS = ["in", "ae", "uk"];
const AFFILIATE_REGISTER_URL = "https://flow.sokt.io/func/scripG05f2j6";

export function getAffiliateRegionMeta(pathname, origin = "https://giddh.com") {
  const region = pathname.split("/").filter(Boolean)[0];
  const isRegionPath = REGION_PATHS.includes(region);

  return {
    website_url: isRegionPath ? `${origin}/${region}/` : `${origin}/`,
    currency_code: isRegionPath ? REGION_CURRENCY_MAP[region] : "GBP",
  };
}

export function formatAffiliatePhone(number) {
  return String(number || "")
    .replace("+", "")
    .trim();
}

function getApiMessage(data) {
  return data?.message || data?.error || data?.data?.message || null;
}

export async function submitAffiliateRegistration(payload) {
  const response = await fetch(AFFILIATE_REGISTER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);
  const apiMessage = getApiMessage(data);

  if (!response.ok || !data?.data?.success) {
    throw new Error(apiMessage || "Registration failed. Please try again.");
  }

  return data;
}
