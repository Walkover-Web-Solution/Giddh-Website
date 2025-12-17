import { useEffect, useState } from "react";
import PricingData from "../data/pricingData.json";
import {
  MdDone,
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import CustomLoader from "@/components/customLoader";

const pricing = (path) => {
  const [readMoreStatus, readmoreAction] = useState(false);
  const [readMoreParagraphStatus1, showMoreParagraph1] = useState(false);
  const [readMoreParagraphStatus2, showMoreParagraph2] = useState(false);
  const [readMoreParagraphStatus3, showMoreParagraph3] = useState(false);
  const [readMoreParagraphStatus4, showMoreParagraph4] = useState(false);
  const [readMoreParagraphStatus5, showMoreParagraph5] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [allPlans, setAllPlans] = useState([]);
  const [plans, setPlans] = useState([]);
  const [pricingData, setPricingData] = useState([]);
  const [isYearPlan, setIsYearPlan] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  /** Holds true if Monthly and Yearly plans available */
  const [showToggleButton, setShowToggleButton] = useState(false);

  const linkPath = path?.path;
  const link = linkPath?.linkPrefix;
  const country = path?.path?.country || "global";

  useEffect(() => {
    // Function to update the state based on screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    /** API Call */
    const fetchData = async (region) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_PRICING_URL}?regionCode=${region}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setAllPlans(jsonData.body);
        setPlanDurationsWise(jsonData.body, null);
        findMonthlyAndYearlyPlans(jsonData.body);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.error(err);
      }
    };

    fetchData(getRegionByLink());
    if (PricingData) {
      setPricingData(PricingData[country]);
    }
  }, [PricingData]);

  /**
   * Set plans duration wise with sorting asc
   *
   * @param {*} plans
   * @param {*} isYear
   */
  const setPlanDurationsWise = (plans, isYear) => {
    setPlans(sortPlansByAmount(plans, isYear));
  };

  /**
   * Returns Region code to fetch plans
   *
   * Send this region in get all plans API
   *
   * @returns
   */
  const getRegionByLink = () => {
    const linkWithoutSlash = link.replace("/", "");
    if (linkWithoutSlash === "in") {
      return "IND";
    } else if (linkWithoutSlash === "ae") {
      return "ARE";
    } else if (linkWithoutSlash === "uk") {
      return "GBR";
    } else {
      return "GLB";
    }
  };

  /**
   * Sort plans in ascending order to show sequential columns
   *
   * @param {*} plans
   * @returns
   */
  const sortPlansByAmount = (plans, isYearPlan) => {
    if (isYearPlan === null) {
      isYearPlan = plans.some((plan) => plan.hasOwnProperty("yearlyAmount"));
    }
    setIsYearPlan(isYearPlan);
    const key = isYearPlan ? "yearlyAmount" : "monthlyAmount";
    return plans
      .filter((plan) => plan.hasOwnProperty(key))
      .sort((a, b) => {
        const amountA = a[key] || 0; // Default to 0 if amount is missing
        const amountB = b[key] || 0;
        return amountA - amountB;
      });
  };

  /**
   * Returns Yearly or Monthly Plan amount based
   *
   * @param {*} plan
   * @returns
   */
  const getAmount = (plan, afterDiscount = false) => {
    if (afterDiscount) {
      return isYearPlan
        ? +(plan.yearlyAmountAfterDiscount ?? 0)
        : +(plan.monthlyAmountAfterDiscount ?? 0);
    } else {
      return isYearPlan
        ? +(plan?.yearlyAmount ?? 0)
        : +(plan?.monthlyAmount ?? 0);
    }
  };

  /**
   * Return Plan Code or Symbol
   *
   * @param {*} plan
   * @param {*} type  'CODE' | 'SYMBOL'
   * @returns
   */
  const getCurrencyCodeOrSymbol = (plan, type = "CODE") => {
    return type.toUpperCase() === "CODE"
      ? plan?.currency?.code
      : plan?.currency?.symbol;
  };

  /**
   * Get Plan info with respect to feature
   *
   * @param {*} plan  <- Plan form API
   * @param {*} feature <- Static JSON feature
   * @returns
   */
  const getPlanInfoByFeature = (plan, feature) => {
    if (!plan && !feature) {
      return;
    }

    if (Object.hasOwn(feature, "yearly")) {
      return plan[isYearPlan ? feature.yearly : feature.monthly];
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
   * Toggle feature description show/hide status
   *
   * @param {number} index
   */
  const toggleFeatureExpansion = (index) => {
    setPricingData((prevPricingData) => {
      return prevPricingData.map((feature, i) => {
        if (i === index) {
          return { ...feature, isExpanded: !feature.isExpanded };
        }
        return feature;
      });
    });
  };

  /**
   * Return true if plan is free
   *
   * @param {*} plan
   * @returns
   */
  const isFreePlan = (plan) => {
    if (
      (isYearPlan && plan?.yearlyAmount === 0 && !plan?.yearlyDiscount) ||
      (!isYearPlan && plan?.monthlyAmount === 0 && !plan?.monthlyDiscount)
    ) {
      return true;
    }
    return false;
  };

  /**
   * Builds pricing context for a plan based on selected duration (yearly/monthly).
   * @param {object} plan
   * @param {boolean} isYearPlan
   * @returns {{
   *   amountAfterDiscount: number,
   *   discountAmount: number,
   *   discount: object | null,
   *   durationUnit: 'year' | 'month'
   * }}
   */
  const getPlanPricingContext = (plan, isYearPlan) => ({
    amountAfterDiscount: isYearPlan
      ? plan.yearlyAmountAfterDiscount
      : plan.monthlyAmountAfterDiscount,
    amount: isYearPlan ? plan.yearlyAmount : plan.monthlyAmount,
    discountAmount: isYearPlan
      ? plan.yearlyDiscountAmount
      : plan.monthlyDiscountAmount,

    discount: isYearPlan ? plan.yearlyDiscount : plan.monthlyDiscount,

    durationUnit: isYearPlan ? "year" : "month",
  });

  /**
   * Checks if a plan is temporarily free for a limited duration.
   * @param {number} amountAfterDiscount
   * @param {object | null} discount
   * @param {number} amount
   * @returns {boolean}
   */
  const isFreeForDuration = (amount, amountAfterDiscount, discount) =>
    Boolean(discount) && (amount === 0 || amountAfterDiscount === 0);

  /**
   * Checks if a plan has a valid discount but still requires payment.
   * @param {number} discountAmount
   * @param {number} amountAfterDiscount
   * @returns {boolean}
   */
  const isSaveForDuration = (discountAmount, amountAfterDiscount) =>
    Number(discountAmount) > 0 && Number(amountAfterDiscount) > 0;

  /**
   * Returns the pricing message shown below the plan price.
   * @param {object} plan
   * @param {boolean} isYearPlan
   * @returns {string | null}
   */
  const getPricingMessage = (plan, isYearPlan) => {
    if (!plan) return null;

    const {
      amountAfterDiscount,
      discountAmount,
      amount,
      discount,
      durationUnit,
    } = getPlanPricingContext(plan, isYearPlan);

    const duration = discount?.duration;
    if (!duration) return null;

    // Case 1: Plan is free for a limited duration
    if (isFreeForDuration(amountAfterDiscount, discount, amount)) {
      return `Free to ${duration} ${durationUnit}${duration > 1 ? "s" : ""}`;
    }

    // Case 2: Plan has a discount but is still paid
    if (isSaveForDuration(discountAmount, amountAfterDiscount)) {
      return `Save ${getCurrencyCodeOrSymbol(
        plan,
        "SYMBOL"
      )}${discountAmount} for ${duration} ${durationUnit}${
        duration > 1 ? "s" : ""
      }`;
    }

    return null;
  };

  /**
   * Return Plan details as html
   *
   * @param {*} plan
   * @param {boolean} [isMobile=false]
   * @return {*}
   */
  const getPlanDetails = (plan, isMobile = false) => {
    const pricingMessage = getPricingMessage(plan, isYearPlan);
    return (
      <>
        {/* Plan Name */}
        <p
          className={`${
            isMobile ? "c-fs-3" : "c-fs-5"
          } c-fw-600 mb-1 text-capitalize`}
          aria-label="Subscription Plan Name"
        >
          {plan.name}
        </p>

        {/* Plan Amount */}
        {getAmount(plan) > 0 && (
          <>
            <p className="c-fs-3 mb-1">
              {getCurrencyCodeOrSymbol(plan)}
              &nbsp;
              {getAmount(plan, true)}
              <span className="c-fs-6">{isYearPlan ? "/year" : "/month"}</span>
            </p>

            {/* Plan Discount with strike though */}
            {(plan.yearlyDiscountAmount > 0 ||
              plan.monthlyDiscountAmount > 0) && (
              <>
                <p className="my-1 line-height-24">
                  <s>
                    &nbsp;
                    {getCurrencyCodeOrSymbol(plan)}
                    &nbsp;
                    {getAmount(plan)}
                    &nbsp;
                  </s>
                </p>
              </>
            )}

            {/* Plan Description */}
            <p
              className="c-fs-6 c-fw-400 my-1 text-capitalize line-height-24"
              aria-label="Subscription Plan Description"
            >
              {plan.description}
            </p>

            {/* Free Plan with duration message */}
            {pricingMessage && (
              <p className="c-fw-400 c-fs-5 col-primary mb-1 white-space-no-wrap">
                {pricingMessage}
              </p>
            )}
          </>
        )}
        {/* Free Plan with duration message */}
        {isFreePlan(plan) && (
          <p className="c-fw-400 c-fs-4 col-primary mb-1 white-space-no-wrap">
            Free
          </p>
        )}
      </>
    );
  };

  /**
   * Find Month and Year plan all plan
   * and set showToggleButton status
   *
   * @param {*} jsonData
   */
  const findMonthlyAndYearlyPlans = (plans) => {
    let hasMonthly = false;
    let hasYearly = false;

    for (const plan of plans) {
      if (
        !hasMonthly &&
        plan.hasOwnProperty("monthlyAmount") &&
        plan.monthlyAmount !== null
      ) {
        hasMonthly = true;
      }
      if (
        !hasYearly &&
        plan.hasOwnProperty("yearlyAmount") &&
        plan.yearlyAmount !== null
      ) {
        hasYearly = true;
      }
      if (hasMonthly && hasYearly) {
        break;
      }
    }
    setShowToggleButton(hasMonthly && hasYearly);
  };

  /**
   * Get Extra Add Ons
   *
   * @returns
   */
  const getExtraAddOns = () => {
    return (
      <>
        Extra Add-ons:{" "}
        <span className="c-fw-600">
          {linkPath?.isGlobal && "$0.012"}
          {linkPath?.isIndia && "₹1"}
          {linkPath?.isAE && "د.إ0.043"}
          {linkPath?.isUK && "£0.0087"}
        </span>{" "}
        per voucher
      </>
    );
  };

import PricingComp from "@/components/Pages/Pricing";
import getPricingPlans from "@/utils/getPricingPlans";export default function Pricing({ pageData, pageInfo, pricingPlans }) {
  return (
    <PricingComp
      pageInfo={pageInfo}
      pageData={pageData}
      pricingPlans={pricingPlans}
    />
  );
}

export async function getServerSideProps() {
  const pricingPlans = (await getPricingPlans("GLB")) || [];
  return {
    props: {
      pricingPlans: pricingPlans,
    },
  };
}