import { useEffect, useState} from "react";
import Faqs from "@/components/faq";
import faqs from '../data/faqs.json';

const conectBankReconcile = (path) => {
  const linkPath = path.path;
  const isGlobal = linkPath.isGlobal;
  const isIndia = linkPath.isIndia
  const link = linkPath.linkPrefix;
  const [faq, setFaq] = useState([])
  
  function openCalendly() {
    appendScript("https://assets.calendly.com/assets/external/widget.js", true);
    appendLink("https://assets.calendly.com/assets/external/widget.css");
    setTimeout(()=>{
      if (window.Calendly) {
        window.Calendly.initPopupWidget({
          url: 'https://calendly.com/sales-accounting-software/talk-to-sale',
        }, 500)
      }
    })
  }

  useEffect(() => {
    setFaq(faqs['conect-bank-reconcile']);
  }, []);
  return (
    <>
      <div className="features">
        <section className="container-fluid" aria-labelledby="features-heading">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h1 id="features-heading" className="heading col-primary c-fw-600 mb-4">
                  {isIndia
                    ? "Monitor your transactions by connecting bank accounts"
                    : "Bank Reconciliation Made Easy"}
                </h1>
                <p className="col-grey c-fs-3 mb-5">
                  {isIndia
                    ? "Once your bank account connects to Giddh, you get an overview of the most important asset of your business – cash."
                    : "Keep your finance up to date with Giddh Bank reconciliation of multiple bank accounts in a minutes"}
                </p>
                <div className="features__heading_container__links">
                  <a
                    href="#"
                    className="download_free_btn me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#downloadFree"
                    aria-label="Download the free version of Giddh"
                  >
                    Download Free
                  </a>
                  <a
                    href="#"
                    className="col-blue"
                    onClick={() => openCalendly() }
                    aria-label="Schedule a demo with Giddh"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
              <div className="col-lg-5 order-lg-1 order-0 position-relative">
                <figure className="text-end">
                  <img src="/img/bank-banner.svg" 
                    width="400"
                    height="300" 
                    alt="Illustration of connecting Giddh with bank accounts"/>
                  <img
                    src="/img/all-features-cloud_icon.svg"
                    alt="Icons representing various features of Giddh"
                    className="features__heading_container__right_banner_img"
                    width="90%"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {isIndia ? (
          <section className="container-fluid features__sub_heading_container">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center features__sub_heading_container--pull-top">
                  <h3 className="sub-heading col-primary c-fw-600 mb-3">
                    Link your bank account seamlessly with Giddh
                  </h3>
                  <p className="c-fs-4 mb-5">
                    Get new transactions delivered from your bank account into
                    Giddh– automatically & securely. By linking your bank
                    accounts you can actively monitor your day to day
                    transactions and reconcile your books. Bank link helps you
                    keep track of your cash flow in the most secure, fast and
                    reliable way.
                  </p>
                  <a 
                    href={link + "/signup"} 
                    className="btn-link-purple" 
                    aria-label="Start your trial with Giddh"
                  >
                    Start Your Trial
                  </a>
                </div>
              </div>
            </div>
          </section>
        ) : null}
        <section className="container-fluid features__description_container mt-5" aria-labelledby="description-heading">
          <div className="container">
            {isIndia ? (
              <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
                <div className="col-md-12 col-lg-6">
                  <div className="features__description_container__content">
                    <h2 id="description-heading" className="col-primary c-fw-600 mb-3">
                      Connect bank and get automatic updates
                    </h2>
                    <p>
                      As a growing business, your volume of bank transactions
                      must be growing. With bank account linking, you no longer
                      have to upload those transactions one after the other at
                      week’s or month’s end. Giddh fetches all your transactions
                      automatically for you so that you can stay on top of your
                      finances.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 image-alignment">
                  <figure>
                    <img
                      src="/img/bank-connect.svg"
                      className="img-fluid"
                      alt="Illustration showing the process of connecting a bank account"
                      width="300"
                      height="300"
                    />
                  </figure>
                </div>
              </div>
            ) : null}
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h2 className="col-primary c-fw-600 mb-3">
                    Reconcile with a snap of fingers
                  </h2>
                  <p>
                    With one-click reconciliation feature, we have made the
                    process of reconciliation so easy, it is no more a
                    complicated chore you would want to avoid. With just one
                    click, you would know your balances as per bank and as per
                    your books.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/suggestion.svg"
                    className="img-fluid"
                    alt="Illustration depicting the bank reconciliation process"
                    width="300"
                    height="300"
                  />
                </figure>
              </div>
            </div>

            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h2 className="col-primary c-fw-600 mb-3">
                    Got Multiple Bank Accounts? We got you Covered
                  </h2>
                  <p>
                    With Giddh bank account linking, you can monitor the
                    deposit, transfer, and withdrawals of cash whether you hold
                    a single bank account or several accounts from multiple
                    banks, right from our easy and friendly interface.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/bank-account.svg"
                    className="img-fluid"
                    alt="Illustration showing multiple bank accounts"
                    width="300"
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
                    alt="Illustration of people interested in Connect Bank Reconcile"
                    className="features__sub_heading_container--banner_img"
                    width="200"
                    height="200"
                  />
                </figure>
                <h2 id="suggestion-heading" className="c-fs-3 col-grey-deep c-fw-400 mb-3 mt-4">
                  People interested in{" "}
                  <span className="col-blue">
                    {isIndia ? "Connect Bank Reconcile" : "Bank Reconcile"}
                  </span>{" "}
                  also looked at
                </h2>

                <div className="features__suggestion_container__links" role="navigation" aria-label="Suggested links">
                  <a href={link + "/all-features"} className="col-blue">
                    All features
                  </a>
                  <a
                    href={link + "/multi-user-accounting-software"}
                    className="border-vertical col-blue"
                  >
                    Share Data
                  </a>
                  <a
                    href={link + "/multi-currency-accounting-software"}
                    className="border-vertical col-blue"
                  >
                    Multi-Currency
                  </a>
                  <a
                    href={link + "/invoice-software"}
                    className="border-vertical col-blue"
                  >
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
export default conectBankReconcile;
