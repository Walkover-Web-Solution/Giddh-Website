import { useEffect, useState } from "react";
import Faqs from "@/components/faq";
import faqs from '../data/faqs.json';

const multiCurrencyAccountingSoftware = (path) => {
  const linkPath = path.path;
  const isGlobal = linkPath.isGlobal; 
  const isIndia = linkPath.isIndia
  const isAE = linkPath.isAE;
  const link = linkPath.linkPrefix;
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    setFaq(faqs['multi-currency-accounting-software']);
  }, []);

  return (
    <>
      <div className="features">
        <section className="container-fluid" aria-labelledby="multiCurrencyHeading">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h1 id="multiCurrencyHeading" className="heading col-primary c-fw-600 mb-4">
                  Serve International Customers with Multi-Currency Accounting
                </h1>
                <p className="col-grey c-fs-3 mb-5">
                  Multi-currency accounting enables you to serve overseas
                  clients & turn your business into an International brand.
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
                    src="/img/feature-gallery-icons/multi-currency-banner.svg"
                    width="400"
                    height="300"
                    alt="Illustration representing multi-currency accounting"
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
                <h3 className="sub-heading col-primary c-fw-600 mb-3" role="heading" aria-level="3">
                  Profits should know no borders
                </h3>
                <p className="c-fs-4 mb-5">
                  Multi currency accounting software makes it easy to manage
                  your accounting in more than 100 currencies for your fast &
                  growing business. Giddh makes managing multi-currency
                  payments, invoicing and accounts easy.
                </p>
                <a href={ link + '/signup' } className="btn-link-purple" aria-label="Start your trial for multi-currency accounting software">
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
                    Eliminate Confusion with Automatic Currency Conversion
                  </h4>
                  <p>
                    Say goodbye to unnecessary exchange rate confusions and
                    accounting mismatch with multi-currency accounting. Giddh
                    does all the heavy lifting & automatically converts the
                    International currencies into your base currency. The best
                    part? You have the option to modify and enter your own rate
                    manually.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src={isIndia || isAE ?  '/img/feature-gallery-icons/multi-currency-create.svg' : '/img/feature-gallery-icons/multi-currency-create-uk.svg'}
                    className="img-fluid"
                    alt="Illustration of automatic currency conversion feature"
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
                    Keep Your International Customers Smilin
                  </h4>
                  <p>
                    Easily accept payments from your International customers &
                    invoice them with easy to use multi currency accounting
                    software. Send invoices in your customer’s currency, and
                    keep your books updated in the currency you manage your
                    business in.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src={isIndia ? '/img/feature-gallery-icons/multi-currency-invoice.svg' : (isAE ? '/img/feature-gallery-icons/multi-currency-invoice-ae.svg' : '/img/feature-gallery-icons/multi-currency-invoice-uk.svg')}
                    className="img-fluid"
                    alt="Illustration of invoicing feature for international customers"
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
                    Set Preferred Currency to Business Accounts
                  </h4>
                  <p>
                    With Giddh you are always in control! You can set a default
                    foreign currency to all the business accounts of your
                    foreign customers. After which, all the invoices and reports
                    of that account will be generated in the set currency.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src={isIndia || isAE ? '/img/feature-gallery-icons/multi-currency-setting.svg' : '/img/feature-gallery-icons/multi-currency-setting-uk.svg'}
                    className="img-fluid"
                    alt="Illustration of setting preferred currency for business accounts"
                    width="auto"
                    height="300"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    Benefit from Dynamic Business Reporting
                  </h4>
                  <p>
                    All your financial reports; trial balance, profit & loss,
                    balance sheet, will be automatically created in your company
                    base currency so you have an accurate view of your financial
                    position and be well aware of your cash flow.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src={isIndia || isAE ? '/img/feature-gallery-icons/multi-currency-reports.svg' : '/img/feature-gallery-icons/multi-currency-reports-uk.svg'}
                    className="img-fluid"
                    alt="Illustration of dynamic business reporting feature"
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
                    alt="Illustration of people interested in accounting software"
                    className="features__sub_heading_container--banner_img"
                    width="auto"
                    height="200"
                  />
                </figure>
                <h2 id="suggestion-heading" className="c-fs-3 col-grey-deep c-fw-400 mb-3 mt-4">
                  People interested in{" "}
                  <span className="col-blue">
                    Multi Currency Accounting Software
                  </span>{" "}
                  also looked at
                </h2>

                <div className="features__suggestion_container__links">
                   <a href={ link + "/all-features" } className="col-blue" aria-label="View all features">
                    All features
                  </a>
                  <a href={ link + "/multi-user-accounting-software" } className="border-vertical col-blue" aria-label="Learn about sharing data">
                    Share Data
                  </a>
                  <a href={ link + "/multi-currency-accounting-software" } className="border-vertical col-blue" aria-label="Explore multi-currency features">
                    Multi-Currency
                  </a>
                  <a href={ link + "/invoice-software" } className="border-vertical col-blue" aria-label="Discover invoicing options">
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
export default multiCurrencyAccountingSoftware;
