import { useState, useEffect, useMemo } from "react";
import styles from "./Pricing.module.scss";
import staticData from "./pricingData.json";
import { MdDone, MdClose } from "react-icons/md";

export default function Pricing({ pageInfo, pageData }) {
  const [isAnnual, setIsAnnual] = useState(true);
  const [pricingData, setPricingData] = useState([]);
  const country = pageInfo?.country;
  const isGlobal = country === "global";

  function getRegion(country) {
    const regionMap = {
      in: "IND",
      ae: "ARE",
      uk: "GBR",
      global: "GLB",
    };
    return regionMap[country] || "GLB";
  }

  useEffect(() => {
    if (isGlobal) {
      setIsAnnual(true);
    }
  }, [isGlobal]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://api.giddh.com/v2/subscription/plans/all?regionCode=${getRegion(country)}`
        );
        const data = await res.json();
        setPricingData(data?.body || []);
      } catch (err) {
        console.error("Error fetching pricing data:", err);
        setPricingData([]);
      }
    })();
  }, [country]);

  const featureConfig = [
    {
      label: "Invoices Allowed",
      getValue: (plan) => isAnnual ? plan?.invoicesAllowed : plan?.invoicesAllowed / 10,
    },
    {
      label: "Bills Allowed",
      getValue: (plan) => (isAnnual ? plan?.billsAllowed : plan?.billsAllowed / 10),
    },
    {
      label: "Companies Limit",
      getValue: (plan) => plan?.companiesLimit ?? "-",
    },
    {
      label: "Accountant Consultant",
      getValue: (plan) => {
        const mode = isAnnual ? "annual" : "monthly";
        const flag = staticData?.plans?.[mode]?.[plan?.name]?.accountantConsultant;
        return flag?.includes("in") ? <MdDone /> : <MdClose />;
      },
    },
    {
      label: "Unlimited Users Access",
      getValue: (plan) => {
        const mode = isAnnual ? "annual" : "monthly";
        const flag = staticData?.plans?.[mode]?.[plan?.name]?.unlimitedUsersAccess;
        return flag?.includes("in") ? <MdDone /> : <MdClose />;
      },
    },
  ];

  const renderPrice = (plan) => {
    const isFreePlan = plan?.name === "Free Plan";
    const symbol = isFreePlan ? "" : plan?.currency?.symbol || "$";
    const price = isFreePlan ? "Free" : isAnnual ? plan?.yearlyAmount : plan?.monthlyAmount;
    const duration = isFreePlan ? "" : isAnnual ? "per annum" : "per month";

    return (
      <>
        <p className={`m-0 fw-bold c-fs-3 col-primary`}>
          {isFreePlan ? "Free" : `${symbol} ${price}`}
        </p>
        <span className="c-fs-6 fw-normal">{duration}</span>
      </>
    );
  };

  return (
    <section>
      <div className="container py-5 d-flex flex-column gap-4">
        <div className="w-full text-center">
          <h2 className="sub-heading fw-semibold mb-2 garamond-font">
            {pageData?.pricing?.heading}
          </h2>
          <p>{pageData?.pricing?.subheading}</p>
        </div>

        {!isGlobal && (
          <div className="d-flex justify-content-end">
            <div
              className="btn-group"
              role="group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="monthly"
                autocomplete="off"
                onChange={() => setIsAnnual(false)}
                checked={!isAnnual}
              />
              <label className="btn btn-outline-primary" for="monthly">
                Monthly
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="yearly"
                autocomplete="off"
                onChange={() => setIsAnnual(true)}
                checked={isAnnual}
              />
              <label className="btn btn-outline-primary" for="yearly">
                Yearly
              </label>
            </div>
          </div>

        )}

        <div className={`${styles.tableWrapper} w-full overflow-x-auto outfit-font`}>
          <table className={`table ${styles.fixedTable} w-100`}>
            <thead>
              <tr>
                <th className={` ${styles.firstCol} text-start`}>
                  <p className="fw-bold mb-1 p-1 c-fs-5">Select a plan that best suits your needs</p>
                  <p className="fw-bold mb-1 p-1 c-fs-6">*All prices are exclusive of GST</p>
                </th>

                {pricingData.map((plan, index) => {
                  const isFreePlan = plan?.name === "Free Plan";
                  return (
                    <th
                      key={index}
                      className={`${styles.otherCol} overflow-hidden text-center`}
                    >
                      <div className={`p-2 d-flex flex-column gap-2 ${isFreePlan ? "mb-3" : ""}`}>
                        <p className="m-0 fw-bold c-fs-5">{plan.name}</p>
                        <div >{renderPrice(plan)}</div>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {featureConfig.map((feature, fIndex) => (
                <tr key={fIndex} className={`${styles.tableRow}`}>
                  <td className={styles.firstCol}>
                    <p className="m-0">{feature.label}</p>
                  </td>
                  {pricingData.map((plan, pIndex) => (
                    <td key={pIndex} className={`${styles.otherCol} text-center`}>
                      {feature.getValue(plan)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex flex-column gap-2 align-items-center">
          <h2 className="sub-heading garamond-font">
            {pageData?.pricing?.footer?.heading}
          </h2>
          <button className="btn btn-primary">{pageData?.pricing?.footer?.button?.text}</button>
        </div>
      </div>
    </section>
  );
}
