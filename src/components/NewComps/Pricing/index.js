import { useState, useEffect } from "react";
import PricingData from "@/data/pricingData.json";
import {
  MdDone,
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

export default function Pricing({ pageInfo }) {
  const [plans, setPlans] = useState([]);
  const [isYearly, setIsYearly] = useState(true);
  const [pricingData, setPricingData] = useState([]);
  const [showAll, setShowAll] = useState(false); // 👈 new state for toggling rows

  const country = pageInfo.country;

  useEffect(() => {
    const fetchData = async (region) => {
      try {
        const response = await fetch(
          `https://api.giddh.com/v2/subscription/plans/all?regionCode=${region}`
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const jsonData = await response.json();
        setPlans(jsonData.body);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData(getRegionByCountry(country));
    if (PricingData) {
      setPricingData(PricingData[country]);
    }
  }, [country]);

  const getRegionByCountry = (country = "") => {
    const regionMap = {
      in: "IND",
      ae: "ARE",
      uk: "GBR",
    };
    return regionMap[country.toLowerCase()] || "GLB";
  };

  const handlePlanToggle = (event) => {
    setIsYearly(event.target.id === "yearly");
  };

  const getPlanDetails = (plan) => (
    <div className="d-flex flex-column text-start">
      <p className="m-0 font-xs">{plan.name}</p>
      <p className="m-0 font-lg">
        {getCurrencySymbol(plan)} {getAmount(plan, true)}
      </p>
      <span className="font-xs m-0">
        {isYearly ? "per annum" : "per month"}
      </span>
    </div>
  );

  const getAmount = (plan, afterDiscount = false) => {
    const prefix = isYearly ? "yearly" : "monthly";
    const key = afterDiscount
      ? `${prefix}AmountAfterDiscount`
      : `${prefix}Amount`;
    return +(plan?.[key] ?? 0);
  };

  const getCurrencySymbol = (plan) => plan?.currency?.symbol;

  const getPlanInfoByFeature = (plan, feature) => {
    if (!plan && !feature) return null;

    if (Object.hasOwn(feature, "yearly")) {
      return plan[isYearly ? feature.yearly : feature.monthly];
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
    (isYearly && plan?.yearlyAmount === 0 && !plan?.yearlyDiscount) ||
    (!isYearly && plan?.monthlyAmount === 0 && !plan?.monthlyDiscount);

  // limit table rows shown
  const visibleData = showAll ? pricingData : pricingData.slice(0, 5);

  return (
    <section className="py-5 container">
      <div>
        <h2>Find A Plan That's Right For You</h2>
        <p>Risk-Free. 90-Day Money Back Guarantee.</p>
      </div>

      {/* Toggle */}
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

      {/* Table */}
      <div className="">
        <table className="table w-100 align-middle text-center">
          <thead>
            <tr>
              <th className="text-start  align-baseline ps-4 pt-4 border-end border-start border-top                                                             ">
                <p className="m-0 fw-semibold">
                  Select a plan that best suits your needs
                </p>
                <span className="text-muted small">
                  *All prices are exclusive of GST
                </span>
              </th>
              {plans.map((plan, index) => (
                <th key={index} className="p-4 border-end border-top">
                  {getPlanDetails(plan)}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {visibleData?.map((feature, index) => (
              <tr key={index}>
                <td className="text-start fw-medium ps-4 border-end border-start">
                  {feature.title}
                </td>
                {plans.map((plan, planIndex) => (
                  <td key={planIndex} className="ps-4 text-start border-end">
                    {getPlanInfoByFeature(plan, feature)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pricingData.length > 5 && (
        <div className="text-end font-sm font-600 font-primary mt-3">
          <p
            role="button"
            tabIndex={0}
            onClick={() => setShowAll((prev) => !prev)}
            onKeyDown={(e) => e.key === "Enter" && setShowAll((prev) => !prev)}
            className="d-inline-flex align-items-center font-primary font-sm cursor-pointer user-select-none decoration-none"
          >
            {showAll ? (
              <>
                <MdKeyboardArrowUp size={20} /> Show Less
              </>
            ) : (
              <>
                <MdKeyboardArrowDown size={20} /> Read More
              </>
            )}
          </p>
        </div>
      )}
    </section>
  );
}
