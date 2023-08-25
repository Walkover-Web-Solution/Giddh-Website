import { MdRemove, MdAdd } from "react-icons/md";
import { usePathname } from "next/navigation";

const financialReporting = () => {
  // To get active route
  const pathname = usePathname();
  const startPath = pathname.split("/");
  let isIndia = startPath[1] !== "ae" && startPath[1] !== 'uk';
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
                  Make sense of your numbers by automatic Financial Reports
                </h2>
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
                    src="/img/feature-gallery-icons/report-banner.svg"
                    width="90%"
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
                  Smart accounting reports for business of any size
                </h3>
                <p className="c-fs-4 mb-5">
                  Stay on top of your numbers and make informed business
                  decisions. Analyse and share your vital financial reports
                  like- balance sheet, trial balance, profit/loss to the key
                  decision maker of your business. Giddh gives you all reports
                  you may need to run your business better.
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
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/report-sales-graph.svg"
                    className="img-fluid"
                    alt="connect bank image"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
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
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/report-ready.svg"
                    className="img-fluid"
                    alt="bank reconcile image"
                  />
                </figure>
              </div>
            </div>

            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
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
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src={isIndia || isAE ? '/img/feature-gallery-icons/report-aging.svg' : '/img/feature-gallery-icons/aging.svg'}
                    className="img-fluid"
                    alt="bank account image"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
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
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src={isIndia || isAE ? '/img/feature-gallery-icons/report-collaborate.svg' : '/img/feature-gallery-icons/collab.svg'}
                    className="img-fluid"
                    alt="bank overview image"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid my-5 py-5">
          <div className="container">
            <div className="text-center">
              <h2 className="col-primary sub-heading c-fw-600 mb-4">
                Your all round reporting solution
              </h2>
              <p className="col-dark-light c-fs-3">
                Giddh online accounting software produces all of the standard
                financial reports required by a forward- thinking business to
                make smarter and faster business decisions.
              </p>
            </div>
            <div className="d-flex my-5">
              <div className="mx-auto">
                <ul className="custom-ul-with-right-tick c-fs-4 col-dark-light">
                  <li className="mb-5">
                    Profit/Loss Statement, Balance Sheet, General Ledger and
                    Trial Balance.
                  </li>
                  <li className="mb-5">
                    Drill down the reports by date, financial year, or even
                    project type.
                  </li>
                  <li className="mb-5">
                    Export reports in any of the two supported formats: PDF or
                    Excel.
                  </li>
                  <li className="mb-5">
                    Invite your accountant, partners or investors.
                  </li>
                </ul>
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
                  <span className="col-blue">Financial Reporting</span> also
                  looked at
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
                        What is financial reporting software?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        Financial reporting is a crucial part of business
                        accounting functions. A financial reporting software
                        helps a business automate the financial and accounting
                        tasks. The financial reports software is available as a
                        basic single-entry system and complex double-entry
                        solutions. In this competitive business environment,
                        adopting the best financial reporting tools are
                        essential to ensure accuracy in accounting functions,
                        cut down on expenses and boost efficiency. Top financial
                        analysis software like Giddh can help you do that and
                        offer greater visibility of your current financial
                        standing and insights on factors that can impact your
                        profitability.
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
                        What does financial reporting include?
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
                          The financial reporting process produces statements
                          that present a business’s financial standing to the
                          management, investors as well as the government. It
                          includes the following.
                        </p>
                        <ul>
                          <li>
                            Financial statements of income, comprehensive
                            income, cash flows, stockholders’ equities and
                            balance sheet
                          </li>
                          <li>
                            Any financial information available on the
                            enterprise’s website
                          </li>
                          <li>Documents of common stock and securities</li>
                          <li>
                            Communication regarding quarterly earning and other
                            relevant information
                          </li>
                          <li>
                            Quarterly and annual reports to stockholders as well
                            as government agencies and SEC (Securities and
                            Exchange Commission)
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
                        What types of reports are available in Giddh?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        <p>
                          Giddh’s financial analysis software offers different
                          financial reports to help you understand the financial
                          condition of your business. The four major reports
                          that are necessary to indicate the financial
                          well-being of business are–
                        </p>
                        <ul>
                          <li>
                            Balance Sheet: These offer a comparison between the
                            assets against liabilities and equity.
                          </li>
                          <li>
                            Income Statement: These reports are an indication of
                            the income earned in an annual reporting period.
                          </li>
                          <li>
                            Capital Statement: These statements present an
                            estimate of the increase or decrease in the capital
                            accounts of the owner over a certain period.{" "}
                          </li>
                          <li>
                            Cash Flows: Cash flows are budgeting tools that are
                            used for making predictions of the cash flow
                            fluctuations in the future by analysing the
                            performance of the past.
                          </li>
                        </ul>
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
                        What are the three objectives of financial reporting?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        <p>
                          Majorly, there are three essential objectives of
                          financial reporting, which are:
                        </p>
                        <ul>
                          <li>
                            Inform investors about how efficiently their cash is
                            being utilised and being reinvested in the business.
                          </li>
                          <li>
                            Track the cash flow to determine the source of
                            incoming business finances
                          </li>
                          <li>
                            Offer an analysis of the assets, liabilities and
                            owner’s equity
                          </li>
                        </ul>
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
                        Does Giddh provide a Balance sheet, P&amp;L and Balance
                        sheet reports?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        Giddh’s financial reporting and analysis software offers
                        all the essential financial reports that an organisation
                        or enterprise needs to make critical business decisions.
                        They include a balance sheet, P&L statements, general
                        ledger, trial balance, etc.
                      </div>
                    </div>
                  </div>
                  {/*============ Accordion #6 ===============*/}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        <span className="me-2 collapse_icon collapse_icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse_icon collapse_icon--close">
                          <MdRemove />
                        </span>
                        Can I download or directly share the report to the CA or
                        accountant or anyone from Giddh?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        Giddh’s finance reporting software offers the financial
                        reports in formats like PDF and Excel, which make it
                        easier to download or directly share the report to the
                        CA or accountant, stakeholders of your business as well
                        as other departments of your organisation.
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
export default financialReporting;
