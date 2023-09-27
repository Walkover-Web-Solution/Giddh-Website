import { MdRemove, MdAdd } from "react-icons/md";

const accountingDashboard = (path) => {
    const linkPath = path.path;
    
    const isIndia = linkPath.isIndia
    const isAE = linkPath.isAE;
    const link = linkPath.linkPrefix;
  return (
    <>
      <div className="features">
        <section className="container-fluid">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h2 className="heading col-primary c-fw-600 mb-4">
                  Know your business' worth with simple online dashboard
                </h2>
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
                    src="/img/feature-gallery-icons/dashboard-banner.svg"
                    alt="Giddh Dashboard Banner Image"
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
                <h3 className="sub-heading col-primary c-fw-600 mb-3 ">
                  Assess your numbers in one glance
                </h3>
                <p className="c-fs-4 mb-5">
                  Gain actionable insights and easily evaluate growth of your
                  business. Real-time accounting dashboard offers you a bird
                  eye’s view to your business health on a single window.
                  Actively keep an eye on the net worth, revenue, profit/loss
                  and other key information of your business.
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
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src={isIndia ? '/img/feature-gallery-icons/networth.svg' : (isAE ? '/img/feature-gallery-icons/networth-ae.png' : '/img/feature-gallery-icons/networth-uk.svg')}
                    className="img-fluid"
                    alt="Accounting Dashboard Image"
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
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/totaloverdue.svg"
                    className="img-fluid"
                    alt="Accounting Dashboard Image"
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
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/expense-report.svg"
                    className="img-fluid"
                    alt="Accounting Dashboard Image"
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
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src={isIndia ? '/img/feature-gallery-icons/revenue.svg' : (isAE ? '/img/feature-gallery-icons/revenue-ae.png' : '/img/feature-gallery-icons/revenue-uk.svg')}
                    className="img-fluid"
                    alt="Accounting Dashboard Image"
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
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/financial-ratio.svg"
                    className="img-fluid"
                    alt="Accounting Dashboard Image"
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
                  <span className="col-blue">Accounting Dashboard </span> also
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
                        What is an accounting dashboard?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        An accounting dashboard is a management tool that helps
                        you to view your financial data and other essential
                        metrics from several sources all at one place. It offers
                        a real-time view of the cash flow, invoices, accounts
                        payable and receivable, profit and loss, etc. so that
                        business owners, bookkeeping professionals or
                        accountants always have an idea about where the business
                        is heading towards at all times. Keeping track of the
                        relevant finance KPIs ensures that the financial
                        objectives of a company are met.
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
                        What should be on a financial dashboard?
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
                          A financial dashboard software should be able to
                          present all the relevant financial metrics in an
                          actionable way to enable a business to understand and
                          measure the data accurately. Here are some metrics
                          that a good financial dashboard must display.
                        </p>
                        <ul>
                          <li>
                            A graphic budget-to-actual table that shows how a
                            business is working in alignment with the set goals
                            or objectives
                          </li>
                          <li>
                            Sales report that shows the data of sales and orders
                            invoiced during a specific period
                          </li>
                          <li>
                            Cash flow projection to assist during periods of
                            thin cash availability and cash-intensive growth
                          </li>
                          <li>
                            Peer benchmark metric to compare margins against
                            market peers
                          </li>
                          <li>Industry performance metrics</li>
                          <li>Value drivers over the long-term</li>
                          <li>
                            Performance metrics to measure the progress of
                            current initiatives
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
                        How does Giddh accounting dashboard help to understand
                        my accounting data and make a decision?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        Giddh’s real-time accounting dashboard provides you with
                        clarity and insights about the core KPIs of your
                        business. The dashboard highlights the metrics that
                        directly impact your bottom line thereby saving up your
                        time that would have otherwise been spent in building
                        custom reports in Excel. This enables your finance
                        professionals to access figures faster and understand
                        the financial details that are needed to make proper
                        decisions and ensure a stable financial environment.
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

export default accountingDashboard;
