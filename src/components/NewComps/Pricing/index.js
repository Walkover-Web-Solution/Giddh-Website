import { useState, useEffect } from "react";
import styles from "./Pricing.module.scss";
import staticData from "./pricingData.json";

export default function Pricing({ pageInfo }) {
  const [isAnnual, setIsAnnual] = useState(true);
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        const response = await fetch(
          `https://api.giddh.com/v2/subscription/plans/all?regionCode=${`IND`}`
        ); // Replace with actual API endpoint
        const data = await response.json();
        console.log(data);
        setPricingData(data?.body);
      } catch (error) {
        console.error("Error fetching pricing data:", error);
      }
    };

    fetchPricingData();
  }, []);

  return (
    <section>
      <div className="container py-5 d-flex flex-column gap-4">
        <div className="w-full">
          <h2 className="text-center sub-heading fw-semibold mb-2 garamond-font">
            Transparent Pricing for Every Business
          </h2>
          <p className="text-center">
            Just straightforward plans to help your business grow with Giddh’s
            powerful accounting software for Indian businesses.
          </p>
        </div>
        <div className="d-flex justify-content-end">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
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
        <div className="d-flex border rounded-2">
          <div className="border-end col-4">
            <div className={`${styles.table_header} pt-2 px-3 border-bottom d-flex align-items-start justify-content-center flex-column gap-1`}>
              <p className="fw-bold mb-1 c-fs-5">
                Select a plan that best suits your needs
              </p>
              <p className="fw-bold mb-1 c-fs-6">
                *All prices are exclusive of GST
              </p>
            </div>
            {staticData?.features?.map((feature, index) => (
              <div className="p-2" key={index}>
                <p>{feature}</p>
              </div>
            ))}
          </div>
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`col-2 border-end border-bottom ${styles?.table_header}`}
            >
              <div className={`${styles.table_header} p-2 border-bottom`}>
                <p className="p-0 m-0 c-fs-5 text-center fw-bold ">{plan.name}</p>
                <p className="p-0 m-0 c-fs-3 col-primary text-center fw-bold">
                  {plan?.price}
                </p>
              </div>
              <div className="p-2">
                <p>{isAnnual ? plan?.invoicesAllowed : plan?.monthlyInvoicesAllowed}</p>
              </div>
              <div className="p-2">
                <p>{isAnnual ? plan?.billsAllowed : plan?.monthlyBillsAllowed}</p>
              </div>
              <div className="p-2">
                <p>{plan?.companiesLimit}</p>
              </div>
              <div className="p-2">
                <p>
                  {staticData?.plans?.[isAnnual ? 'annual' : 'monthly']?.[
                    plan.name
                  ]?.accountantConsultant.includes("in")
                    ? "Yes"
                    : "No"}
                </p>
              </div>
              <div className="p-2">
                <p>
                  {staticData?.plans?.[isAnnual ? 'annual' : 'monthly']?.[
                    plan.name
                  ]?.unlimitedUsersAccess.includes("in")
                    ? "Yes"
                    : "No"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
