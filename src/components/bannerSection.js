import { useState } from "react";
import { createSlider } from "@typeform/embed";
import Head from "next/head";
import Jsondata from "../data/schema/organizationSchema.json";
import { getSchemaForLinkPath } from "../../public/js/utils";
import Link from "next/link";

const bannerSection = (path) => {
  const link = path.path;
  const [utm, setUtm] = useState(null);
  const selectedSchema = getSchemaForLinkPath(
    link,
    Jsondata.organizationSchema
  );

  const openTypeForm = () => {
    const utmParams = new URLSearchParams({
      utm_source: getLocalStorage("utm_source"),
      utm_medium: getLocalStorage("utm_medium"),
      utm_campaign: getLocalStorage("utm_campaign"),
    }).toString();
    setUtm(utmParams);
    const slider = createSlider("https://form.typeform.com/to/uOtrQ4tb", {
      position: "right", // Specify position ('left', 'center', 'right')
      opacity: 83, // Background overlay opacity
      iframeProps: {
        title: "Accounting Software Company Contact Form", // Accessible iframe title
      },
      transitiveSearchParams: true, // Pass search params to Typeform
      medium: "snippet", // Set the medium for analytics/tracking
      hidden: {
        utm: utm, // Pass the UTM parameters as hidden fields
      },
    });
    slider.open(); // Opens the slider
  };

  return (
    <>
      {selectedSchema && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(selectedSchema) }}
          />
        </Head>
      )}
      <section className="container-fluid banner">
        <div className="container-lg">
          <div className="row h-100 align-items-xl-start align-items-lg-center">
            <div className="col-lg-6 col-md-12">
              <h1 className="col-primary heading-text">
                {link.isGlobal &&
                  "Giddh - Secure, Scalable, and Compliant Accounting Software"}
                {link.isIndia && "Best Accounting & Cloud Software for Businesses in India"}
                {link.isUK &&
                  "VAT-Compliant Accounting Software For UK Small Businesses"}
                {link.isAE &&
                  "Cloud-based Accounting Software For UAE Businesses"}
              </h1>
              <p>
                Giddh, designed for small to large businesses, is a simple,
                intuitive, and powerful finance solution. Businesses trust us to
                simplify accounting and improve efficiency.
              </p>
              <p>
                Efficient Invoicing, Expense Tracking, and Financial Reporting
                at Your Fingertips.
              </p>
              <div className="d-flex gap-4 justify-content-center justify-content-lg-start w-12">
                <Link href={"/signup"}>
                  <button
                    className="btn btn-primary btn-lg"
                    aria-label="Signup for Accounting Software"
                  >
                    See Giddh in Action
                  </button>
                </Link>
                <button
                  className="btn btn-secondary btn-lg"
                  onClick={openTypeForm}
                  aria-label="Contact Sales for Accounting Software"
                >
                  Request A Demo
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <figure>
                <img
                  width="700"
                  height="400"
                  src="/img/giddh-dashboard-within-chrome-browser.webp"
                  alt="Screenshot of Giddh Dashboard within a Chrome browser"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default bannerSection;
