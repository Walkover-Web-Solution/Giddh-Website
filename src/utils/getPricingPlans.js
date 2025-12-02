/**
 * Fetches pricing plans from the API for a given region.
 * @param {string} region - The region code (e.g., "GLB", "IND", "ARE", "GBR")
 * @returns {Promise<{yearly: Array, monthly: Array}>} Object containing yearly and monthly plans
 */
export default async function getPricingPlans(region) {
  if (!region || typeof region !== "string") {
    console.warn("Invalid region parameter:", region);
    return { yearly: [], monthly: [] };
  }

  try {
    const response = await fetch(
      `https://api.giddh.com/v2/subscription/plans/all?regionCode=${region}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    return handlePlans(jsonData?.body);
  } catch (err) {
    console.error(`Error fetching pricing plans for region ${region}:`, err);
    return { yearly: [], monthly: [] };
  }
}

/**
 * Processes and filters pricing plans into yearly and monthly arrays.
 * @param {Array} jsonData - Array of plan objects from the API
 * @returns {{yearly: Array, monthly: Array}} Filtered and sorted plans
 */
function handlePlans(jsonData) {
  if (!Array.isArray(jsonData) || jsonData.length === 0) {
    return { yearly: [], monthly: [] };
  }

  // Define allowed properties for each plan type
  const yearlyProperties = [
    "yearlyAmountAfterDiscount",
    "yearlyDiscountAmount",
    "name",
    "currency",
    "billsAllowed",
    "yearlyAmount",
    "invoicesAllowed",
    "companiesLimit",
    "restrictedModules",
  ];

  const monthlyProperties = [
    "monthlyAmountAfterDiscount",
    "monthlyDiscountAmount",
    "name",
    "currency",
    "monthlyBillsAllowed",
    "monthlyAmount",
    "monthlyInvoicesAllowed",
    "monthlyCompaniesLimit",
    "restrictedModules",
  ];

  const yearly = filterAndSortPlans(jsonData, "yearlyAmount", yearlyProperties);

  const monthly = filterAndSortPlans(
    jsonData,
    "monthlyAmount",
    monthlyProperties
  );

  return { yearly, monthly };
}

/**
 * Filters plans by amount property, extracts allowed properties, and sorts by amount.
 * @param {Array} plans - Array of plan objects
 * @param {string} amountKey - Key to filter and sort by (e.g., 'yearlyAmount')
 * @param {Array<string>} allowedProperties - Properties to include in filtered plan
 * @returns {Array} Filtered and sorted plans
 */
function filterAndSortPlans(plans, amountKey, allowedProperties) {
  return plans
    .filter((plan) => plan?.[amountKey] != null)
    .map((plan) => {
      const filteredPlan = {};
      allowedProperties.forEach((prop) => {
        if (prop in plan) {
          filteredPlan[prop] = plan[prop] ?? null;
        }
      });
      return filteredPlan;
    })
    .sort((a, b) => {
      const amountA = Number(a[amountKey]) || 0;
      const amountB = Number(b[amountKey]) || 0;
      return amountA - amountB;
    });
}
