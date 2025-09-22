import { useState } from "react";
import styles from "./Pricing.module.scss";

export default function Pricing({ pageInfo }) {
  const [isAnnual, setIsAnnual] = useState(true);
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
            <div className={`p-2 ${styles.table_header}`}>
              <p className="fw-bold mb-1 c-fs-5">
                Select a plan that best suits your needs
              </p>
              <p className="fw-bold mb-1 c-fs-6">
                *All prices are exclusive of GST
              </p>
            </div>
            <div className="p-2">
              <p>Invoice Count</p>
            </div>
            <div className="p-2">
              <p>Bill Count</p>
            </div>
            <div className="p-2">
              <p>Companies Limit</p>
            </div>
            <div className="p-2">
              <p>Accountant Consultant</p>
            </div>
            <div className="p-2">
              <p>Unlimited users access</p>
            </div>
          </div>
          <div
            className={`p-2 col-2 border-end border-bottom ${styles?.table_header}`}
          >
            <p className="p-0 m-0 c-fs-5 text-center">Free Plan</p>
            <p className="p-0 m-0 c-fs-3 col-primary text-center fw-bold">
              Free
            </p>
            <div className="p-2">
              <p>Invoice Count</p>
            </div>
            <div className="p-2">
              <p>Bill Count</p>
            </div>
            <div className="p-2">
              <p>Companies Limit</p>
            </div>
            <div className="p-2">
              <p>Accountant Consultant</p>
            </div>
            <div className="p-2">
              <p>Unlimited users access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
