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

  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [pricingData, setPricingData] = useState([]);
  const [isYearPlan, setIsYearPlan] = useState(true);
  let res = [
    {
      countries: ["India"],
      monthlyAmountAfterDiscount: 400.0,
      yearlyAmountAfterDiscount: 4000.0,
      monthlyDiscountAmount: 0,
      yearlyDiscountAmount: 0,
      entity: "region",
      entityCode: "IND",
      name: "Oak",
      currency: {
        code: "INR",
        symbol: "₹",
      },
      uniqueName: "dmg1715623569079",
      monthlyBillsAllowed: 300,
      monthlyInvoicesAllowed: 300,
      monthlyAmount: 400.0,
      yearlyAmount: 4000.0,
      createdAt: "01-10-2024 07:15:38",
      archiveStatus: "UNARCHIVED",
      companiesLimit: 1,
      monthlyCompaniesLimit: 1,
      isCommonPlan: true,
      restrictedModules: {},
      invoicesAllowed: 3000,
      billsAllowed: 3000,
    },
    {
      countries: ["India"],
      monthlyAmountAfterDiscount: 1000.0,
      yearlyAmountAfterDiscount: 10000.0,
      monthlyDiscountAmount: 0,
      yearlyDiscountAmount: 0,
      entity: "region",
      entityCode: "IND",
      name: "Vine",
      currency: {
        code: "INR",
        symbol: "₹",
      },
      uniqueName: "2wm1715623690966",
      monthlyBillsAllowed: 500,
      monthlyInvoicesAllowed: 500,
      monthlyAmount: 1000.0,
      yearlyAmount: 10000.0,
      createdAt: "07-09-2024 06:50:22",
      archiveStatus: "UNARCHIVED",
      companiesLimit: 10,
      monthlyCompaniesLimit: 10,
      isCommonPlan: true,
      restrictedModules: {},
      invoicesAllowed: 5000,
      billsAllowed: 5000,
    },
    {
      countries: ["India"],
      monthlyAmountAfterDiscount: 1500.0,
      yearlyAmountAfterDiscount: 15000.0,
      monthlyDiscountAmount: 0,
      yearlyDiscountAmount: 0,
      entity: "region",
      entityCode: "IND",
      name: "Sequoia",
      currency: {
        code: "INR",
        symbol: "₹",
      },
      uniqueName: "rul1715624022066",
      monthlyBillsAllowed: 1000,
      monthlyInvoicesAllowed: 1000,
      monthlyAmount: 1500.0,
      yearlyAmount: 15000.0,
      createdAt: "07-09-2024 06:50:02",
      archiveStatus: "UNARCHIVED",
      companiesLimit: 100,
      monthlyCompaniesLimit: 100,
      isCommonPlan: true,
      restrictedModules: {},
      invoicesAllowed: 10000,
      billsAllowed: 10000,
    },
    {
      countries: ["India"],
      monthlyAmountAfterDiscount: 0.0,
      yearlyAmountAfterDiscount: 0.0,
      monthlyDiscountAmount: 0,
      yearlyDiscountAmount: 0,
      entity: "region",
      entityCode: "IND",
      name: "Free Plan",
      currency: {
        code: "INR",
        symbol: "₹",
      },
      uniqueName: "b0o1716180833263",
      monthlyBillsAllowed: 100,
      monthlyInvoicesAllowed: 100,
      monthlyAmount: 0.0,
      yearlyAmount: 0.0,
      createdAt: "24-01-2025 12:07:01",
      archiveStatus: "UNARCHIVED",
      companiesLimit: 1,
      monthlyCompaniesLimit: 1,
      isCommonPlan: true,
      restrictedModules: {
        "E-invoice": null,
        "Tax filing": null,
        Users: 1,
      },
      invoicesAllowed: 1000,
      billsAllowed: 1000,
    },
  ];

  const linkPath = path.path;
  const isIndia = linkPath.isIndia;
  const isGlobal = linkPath.isGlobal;
  const isAE = linkPath.isAE;
  const isUK = linkPath.isUK;
  const link = linkPath.linkPrefix;

  useEffect(() => {
    const fetchData = async (region) => {
      try {
        const response = await fetch(
          `https://apitest.giddh.com/v2/subscription/plans/all?regionCode=${region}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        // console.log("jsonData", jsonData);
        setData(jsonData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    setPlans(sortPlansByAmount(res));

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
      return "AE";
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
  const getAmount = (plan) => {
    return isYearPlan ? +plan?.yearlyAmount : +plan?.monthlyAmount;
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
    } else if (feature.isAvailableForAll) {
      return <MdDone />;
    } else if (plan?.monthlyAmount === 0 && plan?.yearlyAmount === 0) {
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

  return (
    <>
      <section className="container-fluid pricing_main_section">
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <div className="text-end mb-3">
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
                    defaultChecked
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
                        <span className="c-fs-6 c-fw-600">{plan.name}</span>
                        {getAmount(plan) > 0 && (
                          <>
                            {isUK && (
                              <>
                                <br />
                                <s>
                                  &nbsp;
                                  {getCurrencyCodeOrSymbol(plan)}
                                  &nbsp;
                                  {getAmount(plan) * 2}
                                  &nbsp;
                                </s>
                              </>
                            )}
                            <br />
                            <span className="c-fw-500 c-fs-3">
                              {getCurrencyCodeOrSymbol(plan)}
                              {getAmount(plan)}
                              <span className="c-fs-7 c-fw-400">
                                {isYearPlan ? "/year" : "/month"}
                              </span>
                            </span>
                          </>
                        )}
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
                    <tr key={i} className="border-top">
                      <td>
                        <div>
                          <div
                            className={"cursor-pointer " + (true ? "pt-2" : "")}
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
                                            __html: feature?.description
                                          }}
                                        />
                                      {feature.link && (
                                        <a href={feature.link} target="_blank">
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
                      {plans?.map((plan, i) => (
                        <td key={i} className={`text-center bg-${i}`}>
                          {getPlanInfoByFeature(plan, feature)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="py-0">
                      <div className="pricing_main_section__grid__link_all_feature">
                        <a
                          className="col-primary"
                          href={link + "/all-features"}
                        >
                          Check all features
                        </a>
                      </div>
                    </td>
                    <td colSpan="4" className="p-0">
                        <p
                          style={{ backgroundColor: "#edf3ff"}}
                          className={
                            "c-fs-6 c-fw-400 text-end py-1 pe-2"
                          }
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

              {/* Responsive Table */}
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
                      <tr key={"row1" + i}>
                        <td colSpan={2} className={`text-center`}>
                          <span className="c-fs-6 c-fw-600">{plan?.name}</span>
                          {getAmount(plan) > 0 && (
                            <>
                              {isUK && (
                                <>
                                  <br />
                                  <s>
                                    &nbsp;
                                    {getCurrencyCodeOrSymbol(plan)}
                                    &nbsp;
                                    {getAmount(plan) * 2}
                                    &nbsp;
                                  </s>
                                </>
                              )}
                              <br />
                              <span className="c-fw-500 c-fs-3">
                                {getCurrencyCodeOrSymbol(plan)}
                                {getAmount(plan)}
                                <span className="c-fs-7 c-fw-400">
                                  {isYearPlan ? "/year" : "/month"}
                                </span>
                              </span>
                            </>
                          )}
                        </td>
                      </tr>
                      <tr key={"row2" + i} className="vertical-align-top">
                        <td colSpan={2} className={`text-center pt-0`}>
                          <a href={link + "/signup"} className="benefits-link">
                            Try Now
                          </a>
                        </td>
                      </tr>
                      {pricingData?.map((pricingData, index) => (
                        <tr key={"content" + i + "-" + index} className="border-top">
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
                    <td className="py-3 text-center" colSpan={2} style={{ backgroundColor: "#edf3ff"}}>
                        <a
                          className="col-primary"
                          href={link + "/all-features"}
                        >
                          Check all features
                        </a>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="py-0 px-0">
                        <p className={"text-center c-fs-6 c-fw-400 py-2"} style={{ backgroundColor: "#edf3ff"}}>
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
              "row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal" +
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
              "row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal" +
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
              "row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal" +
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
              "row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal" +
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
              "row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal" +
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
                    alt="Invoicing-logo"
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
                    alt="Inventory-Management-logo"
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
                    alt="Bank-Reconciliation-logo"
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
                    alt="Multi-Currency-logo"
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
                    alt="Tax-Compliant-logo"
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
                    alt="Expense-Management-logo"
                  />
                  <figcaption>Expense Management</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid pricing_support_section">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-sm-12 text-end">
              <h2 className="sub-heading col-white">18X6 Instant Support</h2>
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
