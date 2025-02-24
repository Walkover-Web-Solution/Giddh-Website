import { useEffect, useState } from "react";
import PricingData from "../data/pricingData.json";
import {
  MdDone,
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

const pricing = (path) => {
  const [readMoreStatus, readmoreAction] = useState(false);
  const [readMoreParagraphStatus1, showMoreParagraph1] = useState(false);
  const [readMoreParagraphStatus2, showMoreParagraph2] = useState(false);
  const [readMoreParagraphStatus3, showMoreParagraph3] = useState(false);
  const [readMoreParagraphStatus4, showMoreParagraph4] = useState(false);
  const [readMoreParagraphStatus5, showMoreParagraph5] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [plans, setPlans] = useState([]);
  const [pricingData, setPricingData] = useState([]);
  const [isYearPlan, setIsYearPlan] = useState(true);

  const linkPath = path.path;
  const isIndia = linkPath.isIndia;
  const isGlobal = linkPath.isGlobal;
  const isAE = linkPath.isAE;
  const isUK = linkPath.isUK;
  const link = linkPath.linkPrefix;

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
    console.log(`Base URL: ${baseUrl}`);
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
    // Show Monthly plans for UK
    setIsYearPlan(!isUK);

    /** API Call */
    const fetchData = async (region) => {
      try {
        const response = await fetch(
          `https://apitest.giddh.com/v2/subscription/plans/all?regionCode=${region}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setPlans(sortPlansByAmount(jsonData.body));
      } catch (err) {
        console.error(err);
      }
    };

    fetchData(getRegionByLink());
    if (PricingData && PricingData.isIndia) {
      setPricingData(PricingData.isIndia);
    }
  }, [PricingData]);

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
  const sortPlansByAmount = (plans) => {
    return plans.sort((a, b) => {
      const amountA = a.yearlyAmount || 0; // Default to 0 if amount is missing
      const amountB = b.yearlyAmount || 0;
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
   * Return Plan details as html
   *
   * @param {*} plan
   * @param {boolean} [isMobile=false]
   * @return {*}
   */
  const getPlanDetails = (plan, isMobile = false) => {
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
            {((isYearPlan && plan?.yearlyDiscount?.duration) ||
              (!isYearPlan && plan?.monthlyDiscount?.duration)) && (
              <p className="c-fw-400 c-fs-5 col-primary mb-1 white-space-no-wrap">
                Free to <wbr />
                {isYearPlan
                  ? `${plan?.yearlyDiscount?.duration} year`
                  : `${plan?.monthlyDiscount?.duration} month`}
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

  return (
    <>
      <section className="container-fluid pricing_main_section">
        <div className="container">
          <div className="row mt-2 mt-lg-5">
            <div className="col-12">
              <h1 className="pricing-heading col-primary c-fw-600 ms-4 text-center">
                Powerful Accounting Software. <wbr />
                Affordable Pricing.
              </h1>
              <h2 className="sub-heading c-fw-600 ms-4 mt-4 mb-md-4 mb-3 text-center">
                No features sacrifices
              </h2>
              {isIndia && (
                <h2 className="col-primary small-heading c-fw-600 mb-3 text-center text-lg-start">
                  *All prices are exclusive of GST
                </h2>
              )}

              {/* Month/Year Toggle Button */}
              {isIndia && (
                <div className="text-center text-lg-end mb-3 mt-4 mt-lg-0">
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
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="month"
                      onClick={() => setIsYearPlan(false)}
                    >
                      Month
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="plan-duration"
                      id="year"
                      autoComplete="off"
                      defaultChecked
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="year"
                      onClick={() => setIsYearPlan(true)}
                    >
                      Year
                    </label>
                  </div>
                </div>
              )}

              {/* Pricing Table Large Device */}
              {!isMobile && (
                <table className="pricing-table w-100">
                  <thead>
                    <tr>
                      <th>
                        <figure className="mb-0">
                          <img
                            width="70"
                            src="/img/guarantee-96.webp"
                            alt="90 Days guarantee logo"
                          />
                        </figure>
                      </th>
                      {plans?.map((plan, i) => (
                        <th
                          key={i}
                          width={`${(100 - 40) / plans?.length}%`}
                          className={`text-center bg-${i}`}
                        >
                          {getPlanDetails(plan)}
                        </th>
                      ))}
                    </tr>
                    <tr className="vertical-align-top">
                      <th className="pt-0">
                        <p className="c-fw-600 mb-0">Benefits</p>
                      </th>
                      {plans?.map((plan, i) => (
                        <th
                          key={i}
                          width={`${(100 - 40) / plans?.length}%`}
                          className={`text-center pt-0 bg-${i}`}
                        >
                          <a href={link + "/signup"} className="benefits-link">
                            Try Now
                          </a>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData?.map((feature, i) => (
                      <tr key={i}>
                        <td>
                          <div>
                            <div
                              className={
                                "cursor-pointer " + (true ? "pt-2" : "")
                              }
                              onClick={() => toggleFeatureExpansion(i)}
                            >
                              <span>
                                {feature.title}
                                {feature.description !== null && (
                                  <>
                                    {feature.isExpanded ? (
                                      <MdKeyboardArrowUp />
                                    ) : (
                                      <MdKeyboardArrowDown />
                                    )}
                                    {feature.isExpanded && (
                                      <p className="c-fw-400">
                                        <span
                                          dangerouslySetInnerHTML={{
                                            __html: feature?.description,
                                          }}
                                        />
                                        {feature.link && (
                                          <a
                                            href={feature.link}
                                            target="_blank"
                                          >
                                            {" "}
                                            more
                                          </a>
                                        )}
                                      </p>
                                    )}
                                  </>
                                )}
                              </span>
                            </div>
                          </div>
                        </td>
                        {plans?.map((plan, index) => (
                          <td key={index} className={`text-center bg-${index}`}>
                            {getPlanInfoByFeature(plan, feature)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="py-0">
                        <a
                          className="col-primary c-fw-600"
                          href={link + "/all-features"}
                        >
                          Check all features
                        </a>
                      </td>
                      <td colSpan="4" className="p-0">
                        <p
                          style={{ backgroundColor: "#edf3ff" }}
                          className={"c-fs-6 c-fw-400 text-end py-1 pe-2"}
                        >
                          Extra Add ons:{" "}
                          <span className="c-fw-600">
                            {" "}
                            {isGlobal
                              ? "$0.005"
                              : isIndia
                              ? "₹0.10"
                              : isAE
                              ? "د.إ0.03"
                              : "£0.005"}
                          </span>{" "}
                          per transaction |{" "}
                          <span className="c-fw-600">
                            {isGlobal
                              ? "$60"
                              : isIndia
                              ? "₹2000"
                              : isAE
                              ? "د.إ250"
                              : "£60"}
                          </span>{" "}
                          per branch/year |{" "}
                          <span className="c-fw-600">
                            {isGlobal
                              ? "$30"
                              : isIndia
                              ? "₹1000"
                              : isAE
                              ? "د.إ120"
                              : "£30"}
                          </span>{" "}
                          per warehouse/year
                        </p>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              )}

              {/* Pricing Table Small Device */}
              {isMobile && (
                <table className="pricing-table w-100">
                  <thead>
                    <tr>
                      <th colSpan={2} className="text-center">
                        <figure className="mb-0">
                          <img
                            width="70"
                            src="/img/guarantee-96.webp"
                            alt="90 Days guarantee logo"
                          />
                        </figure>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {plans?.map((plan, i) => (
                      <>
                        <tr key={"row1" + i} className="border-top-0">
                          <td colSpan={2} className="text-center pt-4">
                            {getPlanDetails(plan, true)}
                          </td>
                        </tr>
                        <tr
                          key={"row2" + i}
                          className="vertical-align-top border-top-0"
                        >
                          <td colSpan={2} className={`text-center pt-0`}>
                            <a
                              href={link + "/signup"}
                              className="benefits-link"
                            >
                              Try Now
                            </a>
                          </td>
                        </tr>
                        {pricingData?.map((pricingData, index) => (
                          <tr
                            key={"content" + i + "-" + index}
                            className={index == 0 ? "border-top-0" : ""}
                          >
                            <td width="50%">
                              <div
                                className={"cursor-pointer"}
                                onClick={() => toggleFeatureExpansion(index)}
                              >
                                <span>
                                  {pricingData?.title}
                                  {pricingData?.description !== null && (
                                    <>
                                      {pricingData?.isExpanded ? (
                                        <MdKeyboardArrowUp />
                                      ) : (
                                        <MdKeyboardArrowDown />
                                      )}
                                      {pricingData?.isExpanded && (
                                        <p className="c-fw-400">
                                          <span
                                            dangerouslySetInnerHTML={{
                                              __html: pricingData?.description,
                                            }}
                                          />
                                          {pricingData?.link && (
                                            <a
                                              href={pricingData?.link}
                                              target="_blank"
                                            >
                                              {" "}
                                              more
                                            </a>
                                          )}
                                        </p>
                                      )}
                                    </>
                                  )}
                                </span>
                              </div>
                            </td>
                            <td width="50%" className="text-center bg-1">
                              {getPlanInfoByFeature(plan, pricingData)}
                            </td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td
                        className="pt-3 pb-2 text-center"
                        colSpan={2}
                        style={{ backgroundColor: "#edf3ff" }}
                      >
                        <a
                          className="col-primary c-fw-600"
                          href={link + "/all-features"}
                        >
                          Check all features
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="py-0 px-0">
                        <p
                          className={"text-center c-fs-6 c-fw-400 py-2"}
                          style={{ backgroundColor: "#edf3ff" }}
                        >
                          Extra Add ons:{" "}
                          <span className="c-fw-600">
                            {" "}
                            {isGlobal
                              ? "$0.005"
                              : isIndia
                              ? "₹0.10"
                              : isAE
                              ? "د.إ0.03"
                              : "£0.005"}
                          </span>{" "}
                          per transaction |{" "}
                          <span className="c-fw-600">
                            {isGlobal
                              ? "$60"
                              : isIndia
                              ? "₹2000"
                              : isAE
                              ? "د.إ250"
                              : "£60"}
                          </span>{" "}
                          per branch/year |{" "}
                          <span className="c-fw-600">
                            {isGlobal
                              ? "$30"
                              : isIndia
                              ? "₹1000"
                              : isAE
                              ? "د.إ120"
                              : "£30"}
                          </span>{" "}
                          per warehouse/year
                        </p>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
            <div className="col-12 text-center mt-5">
              <h3 className="c-fs-3 c-fw-600">Big Enterprises?</h3>
              <a
                href="javascript:;"
                className="benefits-link"
                onClick={() =>
                  Calendly.initPopupWidget({
                    url: "https://calendly.com/sales-accounting-software/talk-to-sale",
                  })
                }
              >
                TALK TO US
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid pricing_start_trail_section">
        <div className="container">
          <div className="text-center">
            <h2 className="sub-heading col-primary c-fw-600">
              Introducing GIDDH – Your All-in-One Solution for Accounting
            </h2>
            <p className="c-fs-4 c-fw-600">
              Are you tired of the hassle of manually inputting your financial
              data into spreadsheets or relying on offline software to handle
              your financial tasks? If so, it's high time to upgrade your
              approach by investing in a specialized cloud-based accounting
              solution such as GIDDH.
            </p>
            <a href={link + "/signup"}>Start your trial</a>
          </div>
        </div>
      </section>

      <section className="container-fluid features__description_container mt-5">
        <div className="container">
          <div
            className={
              "row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom" +
              (readMoreParagraphStatus1 ? " --read-more" : "")
            }
          >
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h2 className="col-primary small-heading c-fw-600 mb-3">
                  WHY GIDDH?
                </h2>
                <p>
                  In today's business landscape, understanding and managing the
                  financial status of your organization are crucial for making
                  informed business decisions and sustainable growth. This
                  necessity applies not only to professional accountants but
                  also to all professionals working in various industries.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                  style={{
                    display: readMoreParagraphStatus1 ? "none" : "block",
                  }}
                  onClick={() =>
                    showMoreParagraph1((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read More...
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 image-alignment">
              <figure>
                <img
                  src="/img/giddh-login-page.svg"
                  className="img-fluid"
                  alt="giddh-login-page image"
                  width="355"
                  height="200"
                />
              </figure>
            </div>

            <div className="col-12">
              <div className="features__description_container__content">
                <p
                  style={{
                    display: readMoreParagraphStatus1 ? "block" : "none",
                  }}
                >
                  GIDDH is a comprehensive accounting solution expertly crafted
                  to cater to the specific demands of small and medium-sized
                  enterprises (SMEs), all the while being budget-friendly.
                </p>
                <p
                  style={{
                    display: readMoreParagraphStatus1 ? "block" : "none",
                  }}
                >
                  GIDDH incorporates multiple modules within its platform,
                  making it effortless to maintain your financial records. This
                  simplifies the process of tracking your cash flow and
                  assessing the overall financial health of your business.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600"
                  style={{
                    display: readMoreParagraphStatus1 ? "block" : "none",
                  }}
                  onClick={() =>
                    showMoreParagraph1((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read Less
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom" +
              (readMoreParagraphStatus2 ? " --read-more" : "")
            }
          >
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h2 className="col-primary small-heading c-fw-600 mb-3">
                  Accounting Software for Growing Businesses
                </h2>
                <p>
                  The advancement and inception of technologies like Artificial
                  Intelligence (AI), Machine Learning (ML), etc. has been
                  forcing businesses to streamline & upgrade all their processes
                  inclusive of accounting. So, if you’re planning to expand your
                  business across states or boundaries, chances are you might be
                  experiencing different forms of shortcomings w.r.t handling
                  the business operations, managing accounts, etc.
                </p>

                <span
                  className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                  style={{
                    display: readMoreParagraphStatus2 ? "none" : "block",
                  }}
                  onClick={() =>
                    showMoreParagraph2((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read More
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 image-alignment">
              <figure>
                <img
                  src="/img/account-giddh-feature-image.svg"
                  className="img-fluid"
                  alt="account-giddh-feature-image"
                  width="355"
                  height="200"
                />
              </figure>
            </div>

            <div className="col-12">
              <div className="features__description_container__content">
                <p
                  style={{
                    display: readMoreParagraphStatus2 ? "block" : "none",
                  }}
                >
                  Being a part of a growing business, it’s evident to understand
                  that you’re already running on a shoestring budget, and thus
                  paying a professional accountant to manage your books isn’t a
                  wise choice.
                </p>
                <p
                  style={{
                    display: readMoreParagraphStatus2 ? "block" : "none",
                  }}
                >
                  In such circumstances, having proper accounting software like
                  GIDDH by your side can be a boon for your business. It allows
                  you to utilize all available firm’s resources optimally
                  reducing the hassles of your bookkeeping and accounting tasks.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600"
                  style={{
                    display: readMoreParagraphStatus2 ? "block" : "none",
                  }}
                  onClick={() =>
                    showMoreParagraph2((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read Less
                </span>
              </div>
            </div>
          </div>

          <div
            className={
              "row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom" +
              (readMoreParagraphStatus3 ? " --read-more" : "")
            }
          >
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h2 className="col-primary small-heading c-fw-600 mb-3">
                  Accounting Software for Startups
                </h2>
                <p>
                  Entrepreneurship in any form gives you the option to wear
                  multiple caps at a time. If you’re a sole entrepreneur running
                  a startup, right from pitching to clients, to working for
                  them, to raising invoices on time and tracking your finances –
                  every little task gets done by you solely. Automating your
                  financial operation gets easier with the integration of
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                  style={{
                    display: readMoreParagraphStatus3 ? "none" : "block",
                  }}
                  onClick={() =>
                    showMoreParagraph3((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read More
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 image-alignment">
              <figure>
                <img
                  src="/img/giddh-invoice-send-success.svg"
                  className="img-fluid"
                  alt="giddh-invoice-send-success image"
                  width="355"
                  height="200"
                />
              </figure>
            </div>
            <div className="col-12">
              <div className="features__description_container__content">
                <p
                  style={{
                    display: readMoreParagraphStatus3 ? "block" : "none",
                  }}
                >
                  cloud-based accounting software. It acts as a company’s
                  valuable asset that improves the efficiency of your finance
                  department. Since, financial data security is a major concern
                  for most startups, having a reliable cloud-based accounting
                  software like GIDDH within your business operations cycle can
                  help. It keeps your financial information secured on an AWS
                  cloud (a Linux server) strengthening its layers of protection
                  and discarding any chances of an unethical data breach.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600"
                  style={{
                    display: readMoreParagraphStatus3 ? "block" : "none",
                  }}
                  onClick={() =>
                    showMoreParagraph3((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read Less
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom" +
              (readMoreParagraphStatus4 ? " --read-more" : "")
            }
          >
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h2 className="col-primary small-heading c-fw-600 mb-3">
                  Accounting Software for CAs and CS
                </h2>
                <p>
                  If you’re looking for a perfect software system to help you
                  with business operations, you’re at the right place. GIDDH –
                  is one of the best accounting software for CA and CS both as
                  it can help you manage daily workload and cater to the
                  specific needs of your clients regularly.
                </p>

                <span
                  className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                  style={{
                    display: readMoreParagraphStatus4 ? "none" : "block",
                  }}
                  onClick={() =>
                    showMoreParagraph4((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read More
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 image-alignment">
              <figure>
                <img
                  src="/img/accounting-software-feature.webp"
                  className="img-fluid"
                  alt="accounting-software-feature image"
                  width="355"
                  height="200"
                />
              </figure>
            </div>
            <div className="col-12">
              <div className="features__description_container__content">
                <p
                  style={{
                    display: readMoreParagraphStatus4 ? "block" : "none",
                  }}
                >
                  The accounting software pricing stands at just{" "}
                  {isIndia && "INR 800/-"} {isAE && "AED 350/-"}{" "}
                  {(isUK || isGlobal) && "GBP 70/-"} per organization/year with
                  a capacity to handle {isIndia && " 10,000"}{" "}
                  {(isAE || isUK || isGlobal) && " 40,000"} transactions and
                  unlimited users. GIDDH prepares your {isIndia ? "GST" : "VAT"}{" "}
                  return filing automatically, identifies potential errors,
                  never lets you miss out deadlines, and streamlines the entire
                  process. Another significant benefit of trusting GIDDH is that
                  it allows you to grant your CA view access to the relevant{" "}
                  {isIndia ? "GST" : "VAT"} tax return data and create{" "}
                  {isIndia ? "GST" : "VAT"} invoices ensuring that compliance is
                  no more a challenge.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600"
                  style={{
                    display: readMoreParagraphStatus4 ? "block" : "none",
                  }}
                  onClick={() =>
                    showMoreParagraph4((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read Less
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom" +
              (readMoreParagraphStatus5 ? " --read-more" : "")
            }
          >
            <div className="col-md-12 col-lg-6">
              <div className="features__description_container__content">
                <h2 className="col-primary small-heading c-fw-600 mb-3">
                  Free Accounting Software For Students and Teachers
                </h2>
                <p>
                  Here at Giddh, we want to spread awareness about the power and
                  convenience of cloud accounting to everyone. In this regard,
                  we are offering our tool completely free of cost for students
                  and teachers to help them get acquainted with our powerful
                  features and practice using our various options.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600 cursor-pointer"
                  style={{
                    display: readMoreParagraphStatus5 ? "none" : "block",
                  }}
                  onClick={() =>
                    showMoreParagraph5((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read More
                </span>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 image-alignment">
              <figure>
                <img
                  src="/img/education-economy-image.svg"
                  className="img-fluid"
                  alt="education-economy-image"
                  width="355"
                  height="200"
                />
              </figure>
            </div>
            <div className="col-12">
              <div className="features__description_container__content">
                <p
                  style={{
                    display: readMoreParagraphStatus5 ? "block" : "none",
                  }}
                >
                  With this free alternative, teachers and students will be able
                  to get hands-on experience about accounting terms and
                  practices using Giddh. This free option also extends to
                  institutes and coaching centers in order to enable instructors
                  to explain commerce and accounting concepts using a real-world
                  tool.We hope that this will better equip the younger
                  generation to take a confident step into the world of
                  accounting.
                </p>
                <span
                  className="pt-3 text-decoration-underline c-fw-600"
                  style={{
                    display: readMoreParagraphStatus5 ? "block" : "none",
                  }}
                  onClick={() =>
                    showMoreParagraph5((readmoreDisplay) => !readmoreDisplay)
                  }
                >
                  Read Less
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container-fluid readmore_section"
        style={{ maxHeight: readMoreStatus ? "100%" : "max-content" }}
      >
        <div className="container">
          <div className="col-12 pricing_description text-center">
            <h2 className="col-primary c-fs-3 fw-bold mb-3">
              Traditional Vs Cloud Accounting Software: A Comparison
            </h2>
            <p className="c-fs-4 my-4">
              Not long ago, traditional accounting software like Tally was quite
              a rage and was considered an integral part of both small to
              medium-sized businesses. However, as tech improvements came to the
              fore with concepts of cloud, AI, ML emerging, organizations
              started looking for better options and started incorporating
              cloud-based software.
            </p>
            <div style={{ display: readMoreStatus ? "block" : "none" }}>
              <p className="c-fs-4 text-start">
                Apart from tech improvements, other factors that led to this
                tremendous shift include:
              </p>

              <ul className="custom-ul-with-right-tick text-start">
                <li className="c-fs-4">
                  <span className="c-fw-600">Hardware Costs:</span> Traditional
                  accounting software demanded physical setup of hardware which
                  meant additional expense as it involved purchasing cost,
                  insurance, installation charges, along with its maintenance
                  costs. However, you don’t have to worry about cloud{" "}
                  <span className="c-fw-600">account software price</span>{" "}
                  fluctuations as you don’t require any specialized hardware for
                  operating it. Your entire financial data is encrypted and
                  stored offsite in the cloud and you pay quite a nominal charge
                  for constant usage.
                </li>
                <li className="c-fs-4">
                  <span className="c-fw-600">Accessibility is a Concern:</span>{" "}
                  Traditional accounting software demanded physical setup of
                  hardware which meant additional expense as it involved
                  purchasing cost, insurance, installation charges, along with
                  its maintenance costs. However, you don’t have to worry about
                  cloud account software price fluctuations as you don’t require
                  any specialized hardware for operating it. Your entire
                  financial data is encrypted and stored offsite in the cloud
                  and you pay quite a nominal charge for constant usage.
                </li>
              </ul>
            </div>

            <span
              className="text-decoration-underline c-fw-600 cursor-pointer"
              onClick={() =>
                readmoreAction((readmoreDisplay) => !readmoreDisplay)
              }
            >
              {readMoreStatus ? "Read Less" : "Read More..."}
            </span>
          </div>
        </div>
      </section>

      <section className="container-fluid pricing_grid_section">
        <div className="container">
          <div className="row flex-wrap row-gap-5">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/feature-invoice.svg"
                    alt="An illustration representing invoicing features"
                  />
                  <figcaption>Invoicing</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/feature-inventory.svg"
                    alt="An illustration representing inventory management features"
                  />
                  <figcaption>Inventory Management</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/feature-reconcile.svg"
                    alt="An illustration representing bank reconciliation features"
                  />
                  <figcaption>Bank Reconciliation</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/multi-currency-banner.svg"
                    alt="An illustration representing multi-currency features"
                  />
                  <figcaption>Multi Currency</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/feature-tax.svg"
                    alt="An illustration representing tax compliance features"
                  />
                  <figcaption>Tax Compliant</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing_grid_section__card">
                <figure>
                  <img
                    className="img-fluid"
                    src="/img/feature-report.svg"
                    alt="An illustration representing expense management features"
                  />
                  <figcaption>Expense Management</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container-fluid pricing_support_section"
        role="region"
        aria-labelledby="support-section"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-sm-12 text-end">
              <h2 id="support-section" className="sub-heading col-white">
                18X6 Instant Support
              </h2>
            </div>
            <div className="col-md-6 col-sm-12">
              <a href="/contact-us">CONTACT US</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default pricing;
