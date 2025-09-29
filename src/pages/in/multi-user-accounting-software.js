import { useEffect, useState } from "react";
import Faqs from "@/components/faq";
import faqs from '../../data/faqs.json';

const inMultiUserAccountingSoftware = (path) => {
  const linkPath = path.path;
  const isGlobal = linkPath.isGlobal;
  const isIndia = linkPath.isIndia
  const isAE = linkPath.isAE;
  const link = linkPath.linkPrefix;
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    setFaq(faqs['multi-user-accounting-software']);
  }, []);

  return (
    <>
      <div className="features">
        <section className="container-fluid">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h1 className="heading col-primary c-fw-600 mb-4">
                  Work better together by sharing business insights
                </h1>
                <p className="col-grey c-fs-3 mb-5">
                  Allow external accountants & internal team members across
                  different departments to work together seamlessly.
                </p>
                <div className="features__heading_container__links">
                  <a
                    href="#"
                    className="download_free_btn me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#downloadFree"
                    aria-label="Download the free version of the software"
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
                    src="/img/feature-gallery-icons/share-banner.svg"
                    width="400"
                    height="300"
                    alt="An illustration representing sharing business insights"
                  />
                  <img
                    src="/img/all-features-cloud_icon.svg"
                    alt="Cloud icons representing various features"
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
                <h3 className="sub-heading col-primary c-fw-600 mb-3" id="sub-heading">
                  Smart collaboration across all departments
                </h3>
                <p className="c-fs-4 mb-5">
                  Multi user accounting software enables business owners &
                  accountants to collaborate and make the best of their numbers.
                  With real time sharing of financial data, you can derive
                  meaningful insight and run your business with efficiency.
                </p>
                <a href={link + '/signup'} className="btn-link-purple" aria-label="Start your trial for multi-user accounting software">
                  Start Your Trial
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid features__description_container mt-5" aria-labelledby="features-description">
          <div className="container">
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3" id="features-description">
                    Always be on the driver’s seat.
                  </h4>
                  <ul className="custom-ul-with-right-tick" role="list">
                    <li>
                      Profit/Loss Statement, Balance Sheet, General Ledger and
                      Trial Balance.
                    </li>
                    <li>
                      Drill down the reports by date, financial year, or even
                      project type.
                    </li>
                    <li>
                      Export reports in any of the two supported formats: PDF or
                      Excel.
                    </li>
                    <li>
                      Invite your accountant, partners or investors.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/share-admin.svg"
                    className="img-fluid"
                    alt="An illustration of sharing to admin"
                    width="auto"
                    height="300"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    Collaborate across multiple departments
                  </h4>
                  <p>
                    Give your staff specific access to the different accounting
                    modules they need to do their job. With multi-user
                    accounting, your sales manager will be happy with real time
                    invoice sharing and your accounting staff will always be on
                    top of the tax filing. And when it matters the most, you can
                    get your advisor on board to speed up the process of
                    decision making.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src={
                      isIndia || isAE
                        ? "/img/feature-gallery-icons/share-collaborate.svg"
                        : "/img/feature-gallery-icons/layer-uk.svg"
                    }
                    className="img-fluid"
                    alt="An illustration of collaboration"
                    width="auto"
                    height="300"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    Avoid unnecessary confusion with ledger sharing
                  </h4>
                  <p>
                    Giddh multi-user accounting software lets you share your
                    ledger with view access to external accounting team or
                    client so that all the discrepancies can be avoided.
                    Additionally, witness the magic of magic link in ledger
                    sharing. Magic link comes with the validity of 24 hours,
                    after which your shared ledger will not be accessible.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/share-cash.svg"
                    className="img-fluid"
                    alt="An illustration of sharing cash"
                    width="auto"
                    height="300"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid features__suggestion_container">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center features__sub_heading_container--pull-top">
                <figure>
                  <img
                    src="/img/suggestion.svg"
                    alt="people interested in Connect Bank Reconcile also looked at image"
                    className="features__sub_heading_container--banner_img"
                    width="auto"
                    height="200"
                  />
                </figure>
                <h2 className="c-fs-3 col-grey-deep c-fw-400 mb-3 mt-4">
                  People interested in{" "}
                  <span className="col-blue">
                    Multi User Accounting Software
                  </span>{" "}
                  also looked at
                </h2>

                <div className="features__suggestion_container__links">
                  <a href={link + "/all-features"} className="col-blue">
                    All features
                  </a>
                  <a href={link + "/multi-user-accounting-software"} className="border-left col-blue">
                    Share Data
                  </a>
                  <a href={link + "/multi-currency-accounting-software"} className="border-left col-blue">
                    Multi-Currency
                  </a>
                  <a href={link + "/invoice-software"} className="border-left col-blue">
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
export default inMultiUserAccountingSoftware;
