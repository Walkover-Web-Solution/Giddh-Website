import { useEffect, useState } from "react";
import Head from 'next/head';
import Jsondata from '../data/schema/organizationSchema.json';
import { getSchemaForLinkPath } from '../../public/js/utils';

const bannerSection = (path) => {
  const link = path.path;
  const [utm, setUtm] = useState(null);
  const selectedSchema = getSchemaForLinkPath(link, Jsondata.organizationSchema);

  useEffect(() => {
    var utmParams =
      "utm_source=" +
      getLocalStorage("utm_source") +
      ",utm_medium=" +
      getLocalStorage("utm_medium") +
      ",utm_campaign=" +
      getLocalStorage("utm_campaign") +
      "";
    setUtm(utmParams);
  });
   
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
                    { link.isGlobal && "Online Accounting Software For Businesses"}
                    { link.isIndia && "Business Accounting Software India"}
                    { link.isUK && "VAT-Compliant Accounting Software For UK Small Businesses"}
                    { link.isAE && "Cloud-based Accounting Software For UAE Businesses"}
              </h1>
              <div className="banner__contact_btn mt-5">
                <button
                  data-tf-slider="uOtrQ4tb"
                  data-tf-position="right"
                  data-tf-opacity="83"
                  data-tf-hide-headers
                  data-tf-iframe-props="title=Accounting Software Company Contact Form"
                  data-tf-transitive-search-params
                  data-tf-medium="snippet"
                  data-tf-hidden={utm}
                >
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <figure>
                <img
                  width="700"
                  height="auto"
                  src="/img/giddh-dashboard-within-chrome-browser.webp"
                  alt="Giddh Dashboard"
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
