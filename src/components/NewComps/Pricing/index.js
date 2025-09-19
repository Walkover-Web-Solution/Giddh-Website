import { useState } from "react";
import data from "./data.json";
import { MdDone, MdClose } from "react-icons/md";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const period = isAnnual ? "annual" : "monthly";
  const plans = data?.plans?.[period] ?? [];
  const features = data?.features ?? [];

  // Define a reusable min width for plan columns
  const colMinWidth = "140px";

  return (
    <section className="py-4">
      <div className="container">
        {/* Heading */}
        <h2 className="text-center fw-semibold fs-5 fs-md-4 mb-2">
          Transparent Pricing for Every Business
        </h2>
        <p className="text-center text-muted mb-4 w-100 w-md-75 mx-auto fs-7 fs-md-6">
          Just straightforward plans to help your business grow with Giddh’s
          powerful accounting software for Indian businesses.
        </p>

        {/* Toggle */}
        <div className="d-flex justify-content-center mb-3">
          <div className="btn-group">
            <button
              type="button"
              className={`btn btn-sm ${!isAnnual ? "btn-primary" : "btn-outline-primary"
                }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`btn btn-sm ${isAnnual ? "btn-primary" : "btn-outline-primary"
                }`}
              onClick={() => setIsAnnual(true)}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="table-responsive-md border rounded">
          <table className="table table-borderless mb-0 align-middle text-center">
            <thead>
              <tr className="border-bottom">
                <th className="align-top text-start px-2 px-md-4 py-2 py-md-3 c-fs-6 fs-md-5 fs-lg-4 bg-light">
                  <div className="fw-bold mb-1 c-fs-6 fs-md-6">
                    Select a plan that best suits your needs
                  </div>
                  <div className="fw-bold mb-1 c-fs-6 fs-md-6 d-none d-md-block">
                    *All prices are exclusive of GST
                  </div>
                </th>

                {plans.map((plan, idx) => (
                  <th
                    key={idx}
                    className="px-2 px-md-4 py-2 py-md-3 align-top border-start"
                    style={{ minWidth: colMinWidth }}
                  >
                    <div className="fw-bold c-fs-6 fs-md-6">{plan.name}</div>

                    <div
                      className={`fw-bold my-1 c-fs-6 fs-md-5 ${plan.name === "Free Plan" ? "col-primary" : ""
                        }`}
                    >
                      {plan.price}
                    </div>

                    {/* Billing hidden on small */}
                    <div className="small mb-2 c-fs-6 fs-lg-5 d-none d-md-block">
                      {plan.billing}
                    </div>

                    {/* Button hidden on small */}
                    <button className="btn btn-sm btn-outline-primary px-2 px-md-3 py-1 c-fs-6 rounded-2 d-none d-md-inline-block">
                      Try Now
                    </button>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Features */}
            <tbody>
              {features.map((feature, rowIdx) => (
                <tr
                  key={feature}
                  className={rowIdx === 0 ? "" : "border-top"}
                >
                  <td className="text-start fw-semibold px-2 px-md-4 py-2 py-md-3 c-fs-6 fs-md-6 bg-white">
                    {feature}
                  </td>

                  {plans.map((plan, colIdx) => {
                    const val = plan.features?.[feature];
                    const isBool = typeof val === "boolean";
                    const display = isBool ? (
                      val ? (
                        <MdDone className="text-success fs-6" />
                      ) : (
                        <MdClose className="text-muted fs-6" />
                      )
                    ) : val === true ? (
                      "Unlimited"
                    ) : (
                      val ?? "-"
                    );

                    return (
                      <td
                        key={colIdx}
                        className="px-2 px-md-4 py-2 py-md-3 text-center border-start c-fs-6 fs-md-6 fs-lg-5"
                        style={{ minWidth: colMinWidth }}
                      >
                        {display}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center g-4 py-5">

          <h2 className="text-center fw-semibold fs-5 fs-md-4 mb-2">
            We Ensure Money-back Guarantee </h2>
          <button className="btn btn-sm  text-center btn-outline-primary  c-fs-6 rounded-2 text-center">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
