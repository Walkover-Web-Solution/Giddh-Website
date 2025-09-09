import { useEffect, useState } from "react";
import Faqs from "@/components/faq";
import faqs from '../data/faqs.json';

const financialReporting = (path) => {
  const linkPath = path.path;
  const isGlobal = linkPath.isGlobal;
  const isIndia = linkPath.isIndia
  const isAE = linkPath.isAE;
  const link = linkPath.linkPrefix;
  const [faq, setFaq] = useState([]) 

  useEffect(() => {
    setFaq(faqs['financial-reporting']);
  }, []);

  return (
    <>
      <div className="features">
        <section className="container-fluid" aria-labelledby="financial-reporting-heading">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h1 id="financial-reporting-heading" className="heading col-primary c-fw-600 mb-4">
                  Make sense of your numbers by automatic Financial Reports
                </h1>
                <p className="col-grey c-fs-3 mb-5">
                  Financial reports will help in evaluating the strengths and
                  weaknesses of any business, be it a small retail one or a
                  growing e-commerce one.
                </p>
                <div className="features__heading_container__links">
                  <a
                    href="#"
                    className="download_free_btn me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#downloadFree"
                    aria-label="Download free financial report"
                  >
                    Download Free
                  </a>
                  <a 
                    href="#" 
                    className="col-blue" 
                    onClick={() => openCalendly()}
                    aria-label="Schedule a demo with sales"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
              <div className="col-lg-5 order-lg-1 order-0 position-relative">
                <figure className="text-end">
                  <img
                    src="/img/feature-gallery-icons/report-banner.svg"
                    width="400"
                    height="300"
                    alt="Illustration of a report banner"
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

        <section className="container-fluid features__sub_heading_container">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center features__sub_heading_container--pull-top">
                <h3 className="sub-heading col-primary c-fw-600 mb-3">
                  Smart accounting reports for business of any size
                </h3>
                <p className="c-fs-4 mb-5">
                  Stay on top of your numbers and make informed business
                  decisions. Analyse and share your vital financial reports
                  like balance sheet, trial balance, profit/loss to the key
                  decision maker of your business. Giddh gives you all reports
                  you may need to run your business better.
                </p>
                <a href={ link + '/signup' } className="btn-link-purple" aria-label="Start your trial">
                  Start Your Trial
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid features__description_container mt-5" aria-labelledby="description-heading">
          <h2 id="description-heading" className="visually-hidden">Features Description</h2>
          <div className="container">
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3" role="heading" aria-level="4">
                    Big picture analysis made easy
                  </h4>
                  <p >
                    You don’t need to be an accounting professional to know how
                    your business is doing. Giddh financial reports are
                    color-coded so that the process of analysis is simple like
                    an elementary task for you. And if you want to bring an
                    accountant overboard, you can seamlessly share your reports.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/report-sales-graph.svg"
                    className="img-fluid"
                    alt="Graph showing sales data for financial reporting"
                    width="auto"
                    height="300"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3" role="heading" aria-level="4">
                    Ready-made reports when you need them
                  </h4>
                  <p >
                    With cloud-based business reporting, you don’t need to wait
                    for the month’s end to know where your business stands as
                    the reports can be viewed whenever you want and wherever you
                    like.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/report-ready.svg"
                    className="img-fluid"
                    alt="Illustration of ready-made financial reports"
                    width="auto"
                    height="300"
                  />
                </figure>
              </div>
            </div>

            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3" role="heading" aria-level="4">
                    Keep an eye on the money owed to you
                  </h4>
                  <p >
                    Keep tabs on your unpaid invoices and customers who owe
                    money to your business with Aging report. Aging report
                    provides clear answers to questions like - “how much do my
                    customers owe me” & “how long have they owed that
                    money”, enabling you to prepare better collection strategy.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src={isIndia || isAE ? '/img/feature-gallery-icons/report-aging.svg' : '/img/feature-gallery-icons/aging.svg'}
                    className="img-fluid"
                    alt="Aging report illustration showing outstanding invoices"
                    width="auto"
                    height="300"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3" role="heading" aria-level="4">
                    Collaborate & grow
                  </h4>
                  <p >
                    Bring your accountant in so they can identify trends and
                    actions. Download your automatically generated financial
                    reports and share them with the stakeholders of your
                    business: investors, executives, sales, finance, and other
                    departments in formats like PDF and Excel.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src={isIndia || isAE ? '/img/feature-gallery-icons/report-collaborate.svg' : '/img/feature-gallery-icons/collab.svg'}
                    className="img-fluid"
                    alt="Collaboration illustration for financial reporting"
                    width="auto"
                    height="300"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid my-5 py-5" aria-labelledby="reporting-solution-heading">
          <div className="container">
            <div className="text-center">
              <h2 id="reporting-solution-heading" className="col-primary sub-heading c-fw-600 mb-4">
                Your all round reporting solution
              </h2>
              <p className="col-dark-light c-fs-3">
                Giddh online accounting software produces all of the standard
                financial reports required by a forward-thinking business to
                make smarter and faster business decisions.
              </p>
            </div>
            <div className="d-flex my-5">
              <div className="mx-auto">
                <ul className="custom-ul-with-right-tick c-fs-4 col-dark-light" role="list">
                  <li className="mb-5" role="listitem">
                    Profit/Loss Statement, Balance Sheet, General Ledger and
                    Trial Balance.
                  </li>
                  <li className="mb-5" role="listitem">
                    Drill down the reports by date, financial year, or even
                    project type.
                  </li>
                  <li className="mb-5" role="listitem">
                    Export reports in any of the two supported formats: PDF or
                    Excel.
                  </li>
                  <li className="mb-5" role="listitem">
                    Invite your accountant, partners or investors.
                  </li>
                </ul>
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
                    alt="Illustration representing suggestions for financial reporting"
                    className="features__sub_heading_container--banner_img"
                    width="auto"
                    height="200"
                  />
                </figure>
                <h2 id="suggestion-heading" className="c-fs-3 col-grey-deep c-fw-400 mb-3 mt-4">
                  People interested in{" "}
                  <span className="col-blue">Financial Reporting</span> also
                  looked at
                </h2>

                <div className="features__suggestion_container__links">
                   <a href={ link + "/all-features" } className="col-blue" aria-label="View all features">
                    All features
                  </a>
                  <a href={ link + "/multi-user-accounting-software" } className="border-left col-blue" aria-label="Learn about sharing data">
                    Share Data
                  </a>
                  <a href={ link + "/multi-currency-accounting-software" } className="border-left col-blue" aria-label="Explore multi-currency options">
                    Multi-Currency
                  </a>
                  <a href={ link + "/invoice-software" } className="border-left col-blue" aria-label="Discover invoicing features">
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
export default financialReporting;
