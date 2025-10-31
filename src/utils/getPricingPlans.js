export default async function getPricingPlans(region) {
  try {
    const response = await fetch(
      `https://api.giddh.com/v2/subscription/plans/all?regionCode=${region}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const jsonData = await response.json();
    return handlePlans(jsonData?.body);
  } catch (err) {
    console.error(err);
  }
}

function handlePlans(jsonData) {
  const plans = jsonData;

  // Create two arrays for yearly and monthly plans
  const yearlyPlans =
    plans?.filter(
      (plan) =>
        plan?.hasOwnProperty("yearlyAmount") &&
        plan?.yearlyAmount !== null &&
        plan?.yearlyAmount !== undefined
    ) || [];

  // Filter yearly plans to only include specified keys
  const yearly = yearlyPlans
    .map((plan) => {
      const filteredPlan = {};
      if (plan.hasOwnProperty("yearlyAmountAfterDiscount"))
        filteredPlan.yearlyAmountAfterDiscount = plan.yearlyAmountAfterDiscount || null;
      if (plan.hasOwnProperty("yearlyDiscountAmount"))
        filteredPlan.yearlyDiscountAmount = plan.yearlyDiscountAmount || null;
      if (plan.hasOwnProperty("name")) filteredPlan.name = plan.name;
      if (plan.hasOwnProperty("currency")) filteredPlan.currency = plan.currency;
      if (plan.hasOwnProperty("billsAllowed"))
        filteredPlan.yearlyBillsAllowed = plan.yearlyBillsAllowed || null;
      if (plan.hasOwnProperty("yearlyAmount"))
        filteredPlan.yearlyAmount = plan.yearlyAmount || null;
      if (plan.hasOwnProperty("yearlyInvoicesAllowed"))
        filteredPlan.yearlyInvoicesAllowed = plan.yearlyInvoicesAllowed || null;
      if (plan.hasOwnProperty("companiesLimit"))
        filteredPlan.yearlyCompaniesLimit = plan.yearlyCompaniesLimit || null;
      if (plan.hasOwnProperty("restrictedModules"))
        filteredPlan.restrictedModules = plan.restrictedModules || null;
      return filteredPlan;
    })
    .sort((a, b) => {
      const amountA = a.yearlyAmount || 0;
      const amountB = b.yearlyAmount || 0;
      return amountA - amountB;
    });
  console.log("⚡️ ~ :19 ~ handlePlans ~ yearly:", yearly);

  const monthlyPlans =
    plans?.filter(
      (plan) =>
        plan?.hasOwnProperty("monthlyAmount") &&
        plan?.monthlyAmount !== null &&
        plan?.monthlyAmount !== undefined
    ) || [];

  // Filter monthly plans to only include specified keys
  const monthly = monthlyPlans
    .map((plan) => {
      const filteredPlan = {};
      if (plan.hasOwnProperty("monthlyAmountAfterDiscount"))
        filteredPlan.monthlyAmountAfterDiscount = plan.monthlyAmountAfterDiscount || null;
      if (plan.hasOwnProperty("monthlyDiscountAmount"))
        filteredPlan.monthlyDiscountAmount = plan.monthlyDiscountAmount || null;
      if (plan.hasOwnProperty("name")) filteredPlan.name = plan.name;
      if (plan.hasOwnProperty("currency")) filteredPlan.currency = plan.currency;
      if (plan.hasOwnProperty("monthlyBillsAllowed"))
        filteredPlan.monthlyBillsAllowed = plan.monthlyBillsAllowed || null;
      if (plan.hasOwnProperty("monthlyAmount"))
        filteredPlan.monthlyAmount = plan.monthlyAmount || null;
      if (plan.hasOwnProperty("monthlyInvoicesAllowed"))
        filteredPlan.monthlyInvoicesAllowed = plan.monthlyInvoicesAllowed || null;
      if (plan.hasOwnProperty("monthlyCompaniesLimit"))
        filteredPlan.monthlyCompaniesLimit = plan.monthlyCompaniesLimit || null;
      if (plan.hasOwnProperty("restrictedModules"))
        filteredPlan.restrictedModules = plan.restrictedModules || null;
      return filteredPlan;
    })
    .sort((a, b) => {
      const amountA = a.monthlyAmount || 0;
      const amountB = b.monthlyAmount || 0;
      return amountA - amountB;
    });

  return {
    yearly: yearly || [],
    monthly: monthly || [],
  };
}
