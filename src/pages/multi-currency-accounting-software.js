import { usePathname } from "next/navigation";
import { MdRemove, MdAdd } from "react-icons/md";

const multiCurrencyAccountingSoftware = () => {
  // To get active route
  const pathname = usePathname();
  const startPath = pathname.split("/");
  let isIndia = startPath[1] !== "ae" && startPath[1] !== "uk";
  let isAE = startPath[1] === "ae";
  let isUK = startPath[1] === "uk";

  // Holds Url Prefix country wise
  let link = isIndia ? "" : isAE ? "/ae" : "/uk";
  return (
    <>
      <div className="features">
        <section className="container-fluid">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h2 className="heading col-primary c-fw-600 mb-4">
                  Serve International Customers with Multi-Currency Accounting
                </h2>
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
                  >
                    Download Free
                  </a>
                  <a href="#" className="col-blue" onClick={() => Calendly.initPopupWidget({url: 'https://calendly.com/sales-accounting-software/talk-to-sale'})}>
                    Schedule Demo
                  </a>
                </div>
              </div>
              <div className="col-lg-5 order-lg-1 order-0 position-relative">
                <figure className="text-end">
                  <img
                    src="/img/feature-gallery-icons/multi-currency-banner.svg"
                    width="90%"
                    alt="multi-currency-banner-image"
                  />
                 <img
                    src="/img/all-features-cloud_icon.svg"
                    alt="cloud icons"
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
                  Profits should know no borders
                </h3>
                <p className="c-fs-4 mb-5">
                  Multi currency accounting software makes it easy to manage
                  your accounting in more than 100 currencies for your fast &
                  growing business. Giddh makes managing multi-currency
                  payments, invoicing and accounts easy.
                </p>
                <a href={ link + '/signup' } className="btn-link-purple">
                  Start Your Trial
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid features__description_container mt-5">
          <div className="container">
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Eliminate Confusion with Automatic Currency Conversion
                  </h4>
                  <p >
                    Say goodbye to unnecessary exchange rate confusions and
                    accounting mismatch with multi-currency accounting. Giddh
                    does all the heavy lifting & automatically converts the
                    International currencies into your base currency. The best
                    part? You have the option to modify and enter your own rate
                    manually.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                     src={isIndia || isAE ?  '/img/feature-gallery-icons/multi-currency-create.svg' : '/img/feature-gallery-icons/multi-currency-create-uk.svg'}
                    className="img-fluid"
                    alt="multi-currency-create-image"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Keep Your International Customers Smilin
                  </h4>
                  <p >
                    Easily accept payments from your International customers &
                    invoice them with easy to use multi currency accounting
                    software. Send invoices in your customer’s currency, and
                    keep your books updated in the currency you manage your
                    business in.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src={isIndia ? '/img/feature-gallery-icons/multi-currency-invoice.svg' : (isAE ? '/img/feature-gallery-icons/multi-currency-invoice-ae.svg' : '/img/feature-gallery-icons/multi-currency-invoice-uk.svg')}
                    className="img-fluid"
                    alt="multi-currency-invoice-image"
                  />
                </figure>
              </div>
            </div>

            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Set Preferred Currency to Business Accounts
                  </h4>
                  <p >
                    With Giddh you are always in control! You can set a default
                    foreign currency to all the business accounts of your
                    foreign customers. After which, all the invoices and reports
                    of that account will be generated in the set currency.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src={isIndia || isAE ? '/img/feature-gallery-icons/multi-currency-setting.svg' : '/img/feature-gallery-icons/multi-currency-setting-uk.svg'}
                    className="img-fluid"
                    alt="multi-currency-setting-image"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Benefit from Dynamic Business Reporting
                  </h4>
                  <p >
                    All your financial reports; trial balance, profit & loss,
                    balance sheet, will be automatically created in your company
                    base currency so you have an accurate view of your financial
                    position and be well aware of your cash flow.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src={isIndia || isAE ? '/img/feature-gallery-icons/multi-currency-reports.svg' : '/img/feature-gallery-icons/multi-currency-reports-uk.svg'}
                    className="img-fluid"
                    alt="multi-currency-reports-image"
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
                  />
                </figure>
                <h2 className="c-fs-3 col-grey-deep c-fw-400 mb-3 mt-4">
                  People interested in{" "}
                  <span className="col-blue">
                    Multi Currency Accounting Software
                  </span>{" "}
                  also looked at
                </h2>

                <div className="features__suggestion_container__links">
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

        <section className="container-fluid features__accordion_container">
          <div className="container">
            <div className="row">
              <div className="col-12 px-0">
                <div className="accordion" id="accordionAllFeatures">
                  {/*============ Accordion #1 ===============*/}
                  <h2 className="fw-bold col-primary ps-3">FAQs</h2>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <span className="me-2 collapse_icon collapse_icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse_icon collapse_icon--close">
                          <MdRemove />
                        </span>
                        What type of businesses can use the Giddh multi-currency
                        accounting software?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        Giddh’s innovative multi-currency accounting software is
                        designed to cater to all the accounting, invoicing and
                        related activities of businesses at a budget-friendly
                        price. Hence, it is widely used by start-ups, agencies,
                        enterprises and SMEs that require managing accounts that
                        deal with multiple currencies.
                      </div>
                    </div>
                  </div>
                  {/*============ Accordion #2 ===============*/}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <span className="me-2 collapse_icon collapse_icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse_icon collapse_icon--close">
                          <MdRemove />
                        </span>
                        What are the advantages of using the Giddh
                        multi-currency accounting software?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        <p>
                          The following are the advantages of using the Giddh
                          multi-currency accounting software that make it worth
                          the try.
                        </p>
                        <ul>
                          <li>
                            Flexibility: Giddh offers you flexibility in payment
                            options. It helps you handle transactions involving
                            different currencies.
                          </li>
                          <li>
                            Money-saving: With Giddh, you get the increased
                            convenience of dealing with multiple accounts
                            without investing in an expert or a manual system.
                          </li>
                          <li>
                            Better security: Your financial reports are safe
                            from any security breaches with Giddh.
                          </li>
                          <li>
                            Linked bank accounts: Giddh allows you to link
                            multiple bank accounts so that you can check your
                            transaction history anywhere and anytime you want.
                          </li>
                          <li>
                            Diligent support team: Giddh’s support team is just
                            a call or email away to help you with any issue that
                            arises.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*============ Accordion #3 ===============*/}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <span className="me-2 collapse_icon collapse_icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse_icon collapse_icon--close">
                          <MdRemove />
                        </span>
                        Are the currency rates mentioned updated and accurate?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        Yes, the mentioned currency rates are updated and
                        accurate. Giddh periodically pulls in the exchange rates
                        online to ensure that businesses and financial advisors
                        have the accurate data needed to make effective
                        decisions. Giddh also allows you to set a default
                        currency so that you can receive your invoices according
                        to the set currency.
                      </div>
                    </div>
                  </div>
                  {/*============ Accordion #4 ===============*/}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <span className="me-2 collapse_icon collapse_icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse_icon collapse_icon--close">
                          <MdRemove />
                        </span>
                        How does the currency converter work?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        We save the latest data of currency conversion in our
                        system. So, when the user creates an invoice or uses a
                        related functionality for bookkeeping, the conversion
                        amount is shown in the respective entry form/field.
                      </div>
                    </div>
                  </div>
                  {/*============ Accordion #5 ===============*/}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <span className="me-2 collapse_icon collapse_icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse_icon collapse_icon--close">
                          <MdRemove />
                        </span>
                        Can I customize the exchange rates?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        Yes, you can customize the currency exchange rate and
                        enter the desired amount as per the situation or
                        requirement.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default multiCurrencyAccountingSoftware;
