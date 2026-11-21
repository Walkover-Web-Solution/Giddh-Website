import Head from "next/head";
import GiddhContactEmbed from "@/components/GiddhContactEmbed";
import Jsondata from "../data/schema/organizationSchema.json";
import { getSchemaForLinkPath } from "../../public/js/utils";
import Link from "next/link";

const bannerSection = (path) => {
  const link = path.path;
  const selectedSchema = getSchemaForLinkPath(
    link,
    Jsondata.organizationSchema
  );

  return (
    <>
      <GiddhContactEmbed />
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
                  type="button"
                  className="btn btn-secondary btn-lg"
                  data-giddh-contact
                  data-purpose="Sales"
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