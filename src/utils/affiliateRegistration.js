import getPageInfo from "./getPageInfo";

const REGION_CURRENCY_MAP = {
  in: "INR",
  ae: "AED",
  uk: "GBP",
};

const AFFILIATE_REGISTER_URL = process.env.NEXT_PUBLIC_API_URL + "/verify-and-send";

export function getAffiliateRegionMeta(pathname, origin) {
  const country = getPageInfo(pathname).country;

  return {
    website_url: `${origin}${pathname}`,
    currency_code:
      country !== "global" && REGION_CURRENCY_MAP[country]
        ? REGION_CURRENCY_MAP[country]
        : "USD",
  };
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
