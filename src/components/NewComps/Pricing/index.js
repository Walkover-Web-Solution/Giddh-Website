import { useState, useEffect } from "react";

export default function Pricing({ pageInfo }) {
    const [plans, setPlans] = useState([]);
    const featuresConfig = [
        {
          key: "price",
          label: "Price",
          type: "amount", // custom type so you can handle it differently
          fieldMonthly: "monthlyAmountAfterDiscount",
          fieldYearly: "yearlyAmountAfterDiscount",
        },
        {
          key: "invoices",
          label: "Invoices Allowed",
          fieldMonthly: "monthlyInvoicesAllowed",
          fieldYearly: "invoicesAllowed",
        },
        {
          key: "bills",
          label: "Bills Allowed",
          fieldMonthly: "monthlyBillsAllowed",
          fieldYearly: "billsAllowed",
        },
        {
          key: "companies",
          label: "Companies Limit",
          fieldMonthly: "monthlyCompaniesLimit",
          fieldYearly: "companiesLimit",
        },
        {
          key: "support",
          label: "Email Support",
          staticValue: true, // for all plans
        },
      ];
      

  const [isYearly, setIsYearly] = useState(true);
  useEffect(() => {
    /** API Call */
    const fetchData = async (region) => {
      try {
        const response = await fetch(
          `https://api.giddh.com/v2/subscription/plans/all?regionCode=${region}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setPlans(jsonData.body);
      } catch (err) {
        console.error(err);
      }
    };
  }, []);

  const handlePlanToggle = (event) => {
    const selected = event.target.id; // "yearly" or "monthly"
    setIsYearly(selected === "yearly");
  };

  return (
    <section className="py-5 container">
      <div>
        <h2>Find A Plan That's Right For You</h2>
        <p>Risk-Free. 90-Day Money Back Guarantee.</p>
      </div>
      <div class="btn-group" role="group">
        <input
          type="radio"
          class="btn-check"
          name="planDuration"
          id="yearly"
          autocomplete="off"
          checked={isYearly}
          onChange={handlePlanToggle}
        />
        <label class="btn btn-outline-primary" for="btnradio1">
          Yearly
        </label>

        <input
          type="radio"
          class="btn-check"
          name="planDuration"
          id="monthly"
          autocomplete="off"
          checked={!isYearly}
          onChange={handlePlanToggle}
        />
        <label class="btn btn-outline-primary" for="btnradio2">
          Monthly
        </label>
      </div>

      <div>
      const [isYearly, setIsYearly] = useState(true);

return (
  <div>
    {/* Toggle */}
    <div className="my-3">
      <label>
        <input
          type="radio"
          name="duration"
          checked={isYearly}
          onChange={() => setIsYearly(true)}
        />{" "}
        Yearly
      </label>
      <label className="ms-3">
        <input
          type="radio"
          name="duration"
          checked={!isYearly}
          onChange={() => setIsYearly(false)}
        />{" "}
        Monthly
      </label>
    </div>

    {/* Table */}
    <table className="table table-bordered text-center">
      <thead>
        <tr>
          <th>Features</th>
          {plans
            .sort(
              (a, b) =>
                a.monthlyAmountAfterDiscount - b.monthlyAmountAfterDiscount
            )
            .map((plan) => (
              <th key={plan.name}>{plan.name}</th>
            ))}
        </tr>
      </thead>

      <tbody>
        {featuresConfig.map((feature) => (
          <tr key={feature.key}>
            <td>{feature.label}</td>

            {plans.map((plan) => {
              // CASE 1: Static feature (same for all)
              if (feature.staticValue) return <td key={plan.name}>✅</td>;

              // CASE 2: Amount type (like price)
              if (feature.type === "amount") {
                const value = isYearly
                  ? plan[feature.fieldYearly]
                  : plan[feature.fieldMonthly];
                return (
                  <td key={plan.name}>
                    {plan.currency?.symbol ?? "₹"}
                    {value}
                  </td>
                );
              }

              // CASE 3: Normal numeric feature
              const value = isYearly
                ? plan[feature.fieldYearly]
                : plan[feature.fieldMonthly];
              return <td key={plan.name}>{value}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>


      </div>
    </section>
  );
}
