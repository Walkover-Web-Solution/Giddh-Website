import { useEffect, useState } from "react";
import Faqs from "@/components/faq";
import faqs from '../data/faqs.json';

const importExeclFiles = (path) => {
  const linkPath = path.path;
  const isGlobal = linkPath.isGlobal;
  const isIndia = linkPath.isIndia
  const link = linkPath.linkPrefix;
  const [faq, setFaq]= useState([])
  
  useEffect(() => {
    setFaq(faqs['import-data']);
  }, []);

  return (
    <>
      <div className="features">
        <section className="container-fluid" aria-labelledby="features-heading">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h1 id="features-heading" className="heading col-primary c-fw-600 mb-4">
                  Seamlessly bring your old accounting data to giddh
                </h1>
                <p className="col-grey c-fs-3 mb-5">
                  Switching to online accounting is fast and simple with Giddh
                  data import.
                </p>
                <div className="features__heading_container__links">
                  <a
                    href="#"
                    className="download_free_btn me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#downloadFree"
                    aria-label="Download Free Accounting Software"
                  >
                    Download Free
                  </a>
                  <a 
                    href="#" 
                    className="col-blue" 
                    onClick={() => openCalendly()}
                    aria-label="Schedule a demo with our sales team"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
              <div className="col-lg-5 order-lg-1 order-0 position-relative">
                <figure className="text-end">
                  <img
                    src="/img/feature-gallery-icons/import-banner.svg"
                    width="400"
                    height="300"
                    alt="Illustration of importing accounting data"
                  />
                  <img
                    src="/img/all-features-cloud_icon.svg"
                    alt="Cloud icons representing features"
                    className="features__heading_container__right_banner_img"
                    width="90%"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid features__sub_heading_container" aria-labelledby="sub-heading">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center features__sub_heading_container--pull-top">
                <h3 id="sub-heading" className="sub-heading col-primary c-fw-600 mb-3">
                  Switch from old accounting software or excel to giddh
                </h3>
                <p className="c-fs-4 mb-5">
                  You might have started your accounting with Excel, but it’s
                  time you to bring your numbers to a Giddh accounting software
                  which minimizes the clutter of spreadsheets & confusion of
                  mismanaged accounting books.
                </p>
                <a href={ link + '/signup' } className="btn-link-purple" aria-label="Start your trial with Giddh">
                  Start Your Trial
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid features__description_container mt-5" aria-labelledby="description-heading">
          <div className="container">
            <h2 id="description-heading" className="visually-hidden">Features Description</h2>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    Excel isn’t a long term solution
                  </h4>
                  <p >
                    Excel is simply not built to be your accounting mate. Not
                    only is it prone to errors, but it’s also complicated and
                    doesn’t offer a higher level of accessibility. Giddh Online
                    Accounting software, on the other hand, takes away the
                    hassles of adding and manipulating data manually and instead
                    offers you the chance to focus on what that data is saying.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/import-excel.svg"
                    className="img-fluid"
                    alt="Illustration showing Excel as an accounting tool"
                    width="auto"
                    height="300"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    Simple transition to powerful alternative.
                  </h4>
                  <p >
                    Giddh is a powerful alternative to your old accounting
                    software, offline or online. Just export all the data of
                    your company from your previous accounting software in
                    CSV(comma-separated values) or excel format, and jump on the
                    Giddh accounting cloud.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/import-excel.svg"
                    className="img-fluid"
                    alt="Transitioning from Excel to Giddh"
                    width="auto"
                    height="300"
                  />
                </figure>
              </div>
            </div>

            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    No data category left behind
                  </h4>
                  <p >
                    With Data Import facility, you can import streams of data of
                    every single accounting category such as accounts, groups,
                    trial balance, entries and even inventory within minutes
                    into Giddh accounting software.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/import-data.svg"
                    className="img-fluid"
                    alt="Data import illustration"
                    width="auto"
                    height="300"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    Prepare your data with a little help
                  </h4>
                  <p >
                    To ensure that your data is imported to Giddh without
                    hassles, we’ve created XLSX(Microsoft Excel) template files
                    for trial balance, entries, inventory and more. Just
                    download the template and format your existing files
                    accordingly.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/import-prepare.svg"
                    className="img-fluid"
                    alt="Template preparation for data import"
                    width="auto"
                    height="300"
                  />
                </figure>
              </div>
            </div>

            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    Stuck somewhere? Help us help you!
                  </h4>
                  <p >
                    We know transitioning can often be confusing. To make the
                    process of transition simple, we have some incredibly easy
                    to implement support articles just for you. Still need some
                    help? Simply contact your Giddh account manager and make
                    your transition today.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src={
                      isIndia
                        ? "/img/feature-gallery-icons/import-support.svg"
                        : "/img/feature-gallery-icons/support-uk.svg"
                    }
                    className="img-fluid"
                    alt="Support illustration based on location"
                    width="auto"
                    height="300"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid features__suggestion_container" aria-labelledby="suggestion-heading">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center features__sub_heading_container--pull-top">
                <figure>
                  <img
                    src="/img/suggestion.svg"
                    alt="Illustration of people interested in accounting features"
                    className="features__sub_heading_container--banner_img"
                    width="200"
                    height="200"
                  />
                </figure>
                <h2 id="suggestion-heading" className="c-fs-3 col-grey-deep c-fw-400 mb-3 mt-4">
                  People interested in{" "}
                  <span className="col-blue">Import Data</span> also looked at
                </h2>

                <div className="features__suggestion_container__links" role="navigation" aria-label="Suggested links">
                   <a href={ link + "/all-features" } className="col-blue">
                    All features
                  </a>
                  <a href={ link + "/multi-user-accounting-software" } className="border-vertical col-blue">
                    Share Data
                  </a>
                  <a href={ link + "/multi-currency-accounting-software" } className="border-vertical col-blue">
                    Multi-Currency
                  </a>
                  <a href={ link + "/invoice-software" } className="border-vertical col-blue">
                    Invoicing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Faqs faq={faq} />
      </div>
    </>
  );
};
export default importExeclFiles;
