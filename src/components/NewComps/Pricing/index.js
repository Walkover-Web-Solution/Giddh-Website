import { useState } from "react";
import pricingData from "@/data/pricingData.json";
import {
  MdDone,
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import styles from "./Pricing.module.scss";

export default function Pricing({ pricingPlans, pageInfo }) {
  const [isYearly, setIsYearly] = useState(true);
  const [showReadMore, setShowReadMore] = useState(false);

  /**
   * Handles switching between yearly and monthly pricing plans.
   * @param {Object} event - The event object from the radio input's onChange handler.
   */
  const handlePlanToggle = (event) => {
    if (event.target.id === "year") {
      setIsYearly(true);
    } else {
      setIsYearly(false);
    }
  };

  return (
    <section className="py-5 container">
      <div className="d-flex flex-column align-items-center">
        <h2 className="m-0">Find A Plan That's Right For You</h2>
        <p>Risk-Free. 90-Day Money Back Guarantee.</p>
      </div>
      <div className="d-flex flex-row-reverse py-3">
        {pricingPlans?.yearly?.length > 0 &&
          pricingPlans?.monthly?.length > 0 && (
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
      </div>

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

      <div className="d-flex flex-row-reverse py-3">
        <button
          className="btn font-600 font-primary"
          onClick={() => setShowReadMore(!showReadMore)}
        >
          {showReadMore ? (
            <>
              <MdKeyboardArrowUp /> Show Less
            </>
          ) : (
            <>
              <MdKeyboardArrowDown /> Read More
            </>
          )}
        </button>
      </div>
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

  /**
   * Retrieves the plan amount, optionally after discount, based on the current table type (yearly or monthly).
   * @param {Object} plan - The pricing plan object.
   * @param {boolean} [afterDiscount=false] - If true, return the amount after discount. Otherwise, return the regular amount.
   * @returns {number} The amount for the given plan and table type.
   */
  const getAmount = (plan, afterDiscount = false) => {
    const key = afterDiscount
      ? `${tableType}AmountAfterDiscount`
      : `${tableType}Amount`;
    return +(plan?.[key] ?? 0);
  };

  /**
   * Retrieves the currency symbol from the plan object.
   * @param {Object} plan - The plan object containing currency information
   * @returns {string} - The currency symbol if available
   */
  const getCurrencySymbol = (plan) => plan?.currency?.symbol || "";

  /**
   * Renders plan details including the plan name, price, and duration type.
   * @param {Object} plan - The plan object to display details for.
   * @returns {JSX.Element} - The rendered plan details.
   */
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

  /**
   * Provides data for a given plan-feature combination in the pricing table.
   * @param {Object} plan - The plan object being evaluated.
   * @param {Object} feature - The feature descriptor object which contains feature-related metadata.
   * @returns {JSX.Element|null|any} The cell value for the given plan and feature, or an icon/component.
   */
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

  /**
   * Determines whether the given plan is a "free" plan.
   * @param {Object} plan - The plan object to check.
   * @returns {boolean} True if the plan is free, otherwise false.
   */
  const isFreePlan = (plan) => {
    return (
      (tableType === "yearly" &&
        plan?.yearlyAmount === 0 &&
        !plan?.yearlyDiscount) ||
      (tableType === "monthly" &&
        plan?.monthlyAmount === 0 &&
        !plan?.monthlyDiscount)
    );
  };

  return (
    <div className={styles.responsiveTable}>
      <table
        className={`table w-100 align-middle text-center ${
          showTable ? "" : "d-none"
        }`}
      >
        <thead>
          <tr>
            <th className="text-start align-content-start pt-4 ps-4 border-start border-end border-top">
              <p className="m-0 font-600">
                Select a plan that best suits your needs
              </p>
              {pageInfo?.country == "india" && (
                <span className="font-sm">
                  *All prices are exclusive of GST
                </span>
              )}
            </th>
            {pricingPlans?.map((plan, index) => (
              <th
                key={index}
                className={`p-4 border-end border-top ${styles.tableColumn}`}
              >
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
