import { MdRemove, MdAdd } from "react-icons/md";

const importExeclFiles = (path) => {
  const linkPath = path.path;
  const isGlobal = linkPath.isGlobal;
  const isIndia = linkPath.isIndia
  const link = linkPath.linkPrefix;
  return (
    <>
      <div className="features">
        <section className="container-fluid">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h1 className="heading col-primary c-fw-600 mb-4">
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
                    src="/img/feature-gallery-icons/import-banner.svg"
                    width="90%"
                    alt="import-banner-icon"
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
                  Switch from old accounting software or excel to giddh
                </h3>
                <p className="c-fs-4 mb-5">
                  You might have started your accounting with Excel, but it’s
                  time you to bring your numbers to a Giddh accounting software
                  which minimizes the clutter of spreadsheets & confusion of
                  mismanaged accounting books.
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
                    alt="connect bank image"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
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
                    alt="bank reconcile image"
                  />
                </figure>
              </div>
            </div>

            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
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
                    alt="bank account image"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
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
                    alt="bank overview image"
                  />
                </figure>
              </div>
            </div>

            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
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
                    alt="bank account image"
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
                  <span className="col-blue">Import Data</span> also looked at
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
                  <h2 className="fw-bold col-primary ">FAQs</h2>
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
                        <span className="me-2 collapse-icon collapse-icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse-icon collapse-icon--close">
                          <MdRemove />
                        </span>
                        What are the three golden rules of accounting?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        You need to debit the account when you receive
                        something, and credit the account if you give something.
                        You have to debit the account if something such as an
                        asset comes into your business, and credit the account
                        when something goes out of your business. You have to
                        debit the account if your business has a profit or loss,
                        and credit the account if income or gain needs to be
                        recorded.
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
                        <span className="me-2 collapse-icon collapse-icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse-icon collapse-icon--close">
                          <MdRemove />
                        </span>
                        How do I import Excel data into accounting software?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        If you are looking for an Excel import software to shift
                        away from complex spreadsheet data without losing your
                        existing data, try Giddh. To migrate your data, you can
                        seamlessly import the data from your Excel sheets in CSV
                        or excel format and directly upload it to Giddh’s
                        software.
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
                        <span className="me-2 collapse-icon collapse-icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse-icon collapse-icon--close">
                          <MdRemove />
                        </span>
                        Is Excel an accounting system?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        Businesses, while starting out, often use Excel for
                        their accounting needs, but that can be done until a
                        certain point. Once the business starts to evolve and
                        grow, they have to adopt an Excel accounting
                        alternative, such as Giddh because spreadsheets may
                        increase the chances of human errors and aren’t agile
                        enough to handle large volumes of accounting
                        information.
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
                        <span className="me-2 collapse-icon collapse-icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse-icon collapse-icon--close">
                          <MdRemove />
                        </span>
                        What are the disadvantages of using Excel for
                        Accounting?
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
                          {" "}
                          The following are some of the major disadvantages of
                          using accounting software in Excel.{" "}
                        </p>
                        <ul>
                          <li>
                            Excel is good only for basic tasks like managing
                            pricing strategies not for advanced factors like
                            value-based pricing or customers’ willingness to
                            pay.
                          </li>
                          <li>
                            Excel accounting software can’t handle large data
                            files or a single file that has high volumes of
                            data.
                          </li>
                          <li>
                            It is easy to make fraudulent manipulations when
                            data is kept in Excel sheets.
                          </li>
                          <li>
                            In an organisation, information from different
                            departments are required to prepare the final
                            accounting or pricing document, and Excel is not
                            feasible for that.
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
                        <span className="me-2 collapse-icon collapse-icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse-icon collapse-icon--close">
                          <MdRemove />
                        </span>
                        How does integrating a bank account with Giddh benefit
                        me?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        <p>
                          {" "}
                          Here are some advantages of using cloud accounting
                          software over Excel
                        </p>
                        <ul>
                          <li>
                            Unlike Excel, accounting software is well-designed
                            to handle simple and complex accounting tasks.
                          </li>
                          <li>
                            It can generate better and high-level reports than
                            Excel to indicate different aspects of your
                            accounting functions.
                          </li>
                          <li>
                            The mathematical operations are handled by the
                            backend processes of accounting software that
                            reduces the chances of manual errors.
                          </li>
                        </ul>
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
export default importExeclFiles;
