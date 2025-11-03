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
  const [showReadMore, setShowReadMore] = useState(false);

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
        <div
          className="toggle-button btn-group"
          role="group"
          aria-label="Toggle to get monthly or yearly wise plan"
        >
          <input
            type="radio"
            className="btn-check"
            name="plan-duration"
            id="month"
            autoComplete="off"
            onChange={handlePlanToggle}
          />
          <label className="btn btn-outline-primary" htmlFor="month">
            Month
          </label>

          <input
            type="radio"
            className="btn-check"
            name="plan-duration"
            id="year"
            autoComplete="off"
            defaultChecked
            onChange={handlePlanToggle}
          />
          <label className="btn btn-outline-primary" htmlFor="year">
            Year
          </label>
        </div>
      )}

      <PricingTable
        pricingPlans={pricingPlans?.yearly}
        showTable={isYearly}
        pageInfo={pageInfo}
        tableType="yearly"
        showReadMore={showReadMore}
      />

      <PricingTable
        pricingPlans={pricingPlans?.monthly}
        showTable={!isYearly}
        pageInfo={pageInfo}
        tableType="monthly"
        showReadMore={showReadMore}
      />
      <button
        className="btn btn-primary"
        onClick={() => setShowReadMore(!showReadMore)}
      >
        Read More
      </button>
    </section>
  );
}

function PricingTable({
  pricingPlans,
  pageInfo,
  tableType,
  showTable,
  showReadMore,
}) {
  const features = pricingData[pageInfo?.country] || [];

  const getAmount = (plan, afterDiscount = false) => {
    const key = afterDiscount
      ? `${tableType}AmountAfterDiscount`
      : `${tableType}Amount`;
    return +(plan?.[key] ?? 0);
  };

  const getCurrencySymbol = (plan) => plan?.currency?.symbol;

  const getPlanDetails = (plan) => {
    return (
      <div className="d-flex flex-column text-start">
        <p className="m-0 font-xs">{plan.name}</p>
        <p className="m-0 font-lg">
          {`${getCurrencySymbol(plan)}${getAmount(plan)}`}
        </p>
        <span className="font-xs m-0">
          {tableType === "yearly" ? "per annum" : "per month"}
        </span>
      </div>
    );
  };

  const getPlanInfoByFeature = (plan, feature) => {
    if (!plan || !feature) return null;

    if (Object.hasOwn(feature, "yearly")) {
      return plan[tableType === "yearly" ? feature?.yearly : feature?.monthly];
    } else if (feature.specificContent && !isFreePlan(plan)) {
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
    (tableType === "yearly" &&
      plan?.yearlyAmount === 0 &&
      !plan?.yearlyDiscount) ||
    (tableType === "monthly" &&
      plan?.monthlyAmount === 0 &&
      !plan?.monthlyDiscount);

  return (
    <div>
      <table
        className={`table w-100 align-middle text-center ${
          showTable ? "" : "d-none"
        }`}
      >
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
          {features?.map((feature, index) => (
            <tr
              key={index}
              className={index > 4 && !showReadMore ? "d-none" : ""}
            >
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
