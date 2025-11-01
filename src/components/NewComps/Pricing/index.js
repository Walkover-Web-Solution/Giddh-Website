import { useState } from "react";
import pricingData from "@/data/pricingData.json";
import {
  MdDone,
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

export default function Pricing({ pricingPlans, pageInfo }) {
  const [isYearly, setIsYearly] = useState(true);

  const handlePlanToggle = (event) => {
    setIsYearly(event.target.id === "yearly");
  };

  return (
    <section className="py-5 container">
      <div>
        <h2>Find A Plan That's Right For You</h2>
        <p>Risk-Free. 90-Day Money Back Guarantee.</p>
      </div>

      {pricingPlans.yearly.length > 0 && pricingPlans.monthly.length > 0 && (
        <div className="btn-group py-2" role="group">
          <input
            type="radio"
            className="btn-check"
            name="planDuration"
            id="yearly"
            autoComplete="off"
            checked={isYearly}
            onChange={handlePlanToggle}
          />
          <label className="btn btn-outline-primary" htmlFor="yearly">
            Yearly
          </label>

          <input
            type="radio"
            className="btn-check"
            name="planDuration"
            id="monthly"
            autoComplete="off"
            checked={!isYearly}
            onChange={handlePlanToggle}
          />
          <label className="btn btn-outline-primary" htmlFor="monthly">
            Monthly
          </label>
        </div>
      )}

      <div>
        {isYearly ? (
          <PricingTable
            pricingPlans={pricingPlans?.yearly}
            pageInfo={pageInfo}
            isYearly={true}
          />
        ) : (
          <PricingTable
            pricingPlans={pricingPlans?.monthly}
            pageInfo={pageInfo}
            isYearly={false}
          />
        )}
      </div>
    </section>
  );
}

function PricingTable({ pricingPlans, pageInfo, isYearly }) {
  const features = pricingData[pageInfo?.country] || [];

  const getAmount = (plan, afterDiscount = false) => {
    const prefix = isYearly ? "yearly" : "monthly";
    const key = afterDiscount
      ? `${prefix}AmountAfterDiscount`
      : `${prefix}Amount`;
    return +(plan?.[key] ?? 0);
  };

  const getCurrencySymbol = (plan) => plan?.currency?.symbol;

  const getPlanDetails = (plan) => (
    <div className="d-flex flex-column text-start">
      <p className="m-0 font-xs">{plan.name}</p>
      <p className="m-0 font-lg">
        {getCurrencySymbol(plan)} {getAmount(plan)}
      </p>
      <span className="font-xs m-0">
        {isYearly ? "per annum" : "per month"}
      </span>
    </div>
  );

  const getPlanInfoByFeature = (plan, feature) => {
    if (!plan || !feature) return null;

    if (feature.specificContent && !isFreePlan(plan)) {
      return (
        <span dangerouslySetInnerHTML={{ __html: feature.specificContent }} />
      );
    } else if (feature.isAvailableForAll) {
      return <MdDone />;
    } else if (isFreePlan(plan)) {
      return <MdClose />;
    }
    return <MdDone />;
  };

  const isFreePlan = (plan) =>
    (isYearly && plan?.yearlyAmount === 0 && !plan?.yearlyDiscount) ||
    (!isYearly && plan?.monthlyAmount === 0 && !plan?.monthlyDiscount);

  return (
    <div>
      <table className="table w-100 align-middle text-center">
        <thead>
          <tr>
            <th className="text-start ps-4 border-start border-end border-top">
              <p className="m-0 fw-semibold">
                Select a plan that best suits your needs
              </p>
              <span className="text-muted small">
                *All prices are exclusive of GST
              </span>
            </th>
            {pricingPlans?.map((plan, index) => (
              <th key={index} className="p-4 border-end border-top">
                {getPlanDetails(plan)}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {features?.map((feature, i) => (
            <tr key={i}>
              <td className="text-start ps-4 border-start border-end">
                {feature.title}
              </td>
              {pricingPlans?.map((plan, index) => (
                <td key={index} className="text-start ps-4 border-end">
                  {getPlanInfoByFeature(plan, feature)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
