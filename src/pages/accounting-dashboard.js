import { useEffect, useState } from "react";
import Faqs from "@/components/faq";
import faqs from '../data/faqs.json';

const accountingDashboard = (path) => {
    const linkPath = path.path;
    const isGlobal = linkPath.isGlobal;
    const isIndia = linkPath.isIndia
    const isAE = linkPath.isAE;
    const link = linkPath.linkPrefix;
    const [faq, setFaq] = useState([])

    useEffect(() => {
      appendScript("https://assets.calendly.com/assets/external/widget.js", true);
      appendLink("https://assets.calendly.com/assets/external/widget.css");
      setFaq(faqs['accounting-dashboard'])
    }, []);
  return (
    <>
      <div className="features">
        <section className="container-fluid" aria-labelledby="dashboard-heading">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h1 id="dashboard-heading" className="heading col-primary c-fw-600 mb-4">
                  Know your business's worth with simple online dashboard
                </h1>
                <p className="col-grey c-fs-3 mb-5">
                  Turn your accounting data into business intelligence with
                  Giddh Dashboard.
                </p>
                <div className="features__heading_container__links">
                  <a
                    href="#"
                    className="download_free_btn me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#downloadFree"
                    aria-label="Download the free version of Giddh Dashboard"
                  >
                    Download Free
                  </a>
                  <a 
                    href="#" 
                    className="col-blue" 
                    onClick={() => Calendly.initPopupWidget({url: 'https://calendly.com/sales-accounting-software/talk-to-sale'})}
                    aria-label="Schedule a demo with Giddh"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
              <div className="col-lg-5 order-lg-1 order-0 position-relative">
                <figure className="text-end">
                  <img
                    src="/img/feature-gallery-icons/dashboard-banner.svg"
                    alt="Giddh Dashboard Banner Image showcasing the dashboard interface"
                    width="400"
                    height="300"
                  />
                  <img
                    src="/img/all-features-cloud_icon.svg"
                    alt="Illustration of cloud features related to Giddh Dashboard"
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
                <h3 className="sub-heading col-primary c-fw-600 mb-3" role="heading" aria-level="2">
                  Assess your numbers in one glance
                </h3>
                <p className="c-fs-4 mb-5">
                  Gain actionable insights and easily evaluate growth of your
                  business. Real-time accounting dashboard offers you a bird
                  eye’s view to your business health on a single window.
                  Actively keep an eye on the net worth, revenue, profit/loss
                  and other key information of your business.
                </p>
                <a href={ link + '/signup' } className="btn-link-purple" aria-label="Start your trial for the accounting dashboard">
                  Start Your Trial
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid features__description_container mt-5" role="region" aria-labelledby="features-description">
          <h2 id="features-description" className="visually-hidden">Features Description</h2>
          <div className="container">
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Know the true worth of your business
                  </h4>
                  <p >
                    There’s no way to know exactly where your business stands
                    without knowing what your net worth is, whether your revenue
                    is grow financial-servicesing and where your expenses lie.
                    Online accounting dashboard gives you the real position of
                    your all these values by automatically crunching your
                    numbers and presenting them on an easy to evaluate graph.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src={isIndia ? '/img/feature-gallery-icons/networth.svg' : (isAE ? '/img/feature-gallery-icons/networth-ae.webp' : '/img/feature-gallery-icons/networth-uk.svg')}
                    className="img-fluid"
                    alt="Net worth representation for accounting dashboard"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Track your monthly overdues
                  </h4>
                  <p >
                    Pay and get paid quicker by easily following up on your
                    monthly overdues. Dashboard gives a summary of what you owe
                    to your clients and what’s owed to you in the form of
                    receivable and payable right on your home window.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/totaloverdue.svg"
                    className="img-fluid"
                    alt="Summary of monthly overdues in accounting dashboard"
                  />
                </figure>
              </div>
            </div>

            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Keep an eye on where your money goes
                  </h4>
                  <p >
                    Keep track of your expenses & discounts you give. Giddh
                    accounting dashboard provides you with easy to understand
                    expense graph so that you can create better strategies to
                    minimise expenses & maximise profits.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/expense-report.svg"
                    className="img-fluid"
                    alt="Expense tracking in accounting dashboard"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Predict with more precision
                  </h4>
                  <p >
                    Giddh takes the pain out from your prediction process. With
                    one-click yearly comparison of revenues, profit/loss &
                    expenses, you can make better assumptions of how the
                    business will behave in the future by the past trends.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src={isIndia ? '/img/feature-gallery-icons/revenue.svg' : (isAE ? '/img/feature-gallery-icons/revenue-ae.webp' : '/img/feature-gallery-icons/revenue-uk.svg')}
                    className="img-fluid"
                    alt="Revenue prediction in accounting dashboard"
                  />
                </figure>
              </div>
            </div>

            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd ">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Financial ratio analysis
                  </h4>
                  <p >
                    Will your business be able to pay short-term and long-term
                    obligations? What is its liquidity and profitability? The
                    ratio analysis calculated automatically from the standard
                    business formulas gives you an idea about your liability,
                    equity and more so that you can take appropriate measures at
                    the right time.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/financial-ratio.svg"
                    className="img-fluid"
                    alt="Financial ratio analysis in accounting dashboard"
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
                    alt="Illustration of people interested in accounting dashboard features"
                    className="features__sub_heading_container--banner_img"
                  />
                </figure>
                <h2 className="c-fs-3 col-grey-deep c-fw-400 mb-3 mt-4">
                  People interested in{" "}
                  <span className="col-blue">Accounting Dashboard </span> also
                  looked at
                </h2>

                <div className="features__suggestion_container__links">
                   <a href={ link + "/all-features" } className="col-blue" aria-label="View all features of the accounting dashboard">
                    All features
                  </a>
                  <a href={ link + "/multi-user-accounting-software" } className="border-vertical col-blue" aria-label="Learn about multi-user accounting software">
                    Share Data
                  </a>
                  <a href={ link + "/multi-currency-accounting-software" } className="border-vertical col-blue">
                    Multi-Currency
                  </a>
                  <a href={ link + "/invoice-software" } className="border-vertical col-blue" aria-label="Discover invoicing features">
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

export default accountingDashboard;
