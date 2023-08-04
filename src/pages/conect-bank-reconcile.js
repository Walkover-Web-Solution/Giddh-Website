import { usePathname } from "next/navigation";
import { MdRemove, MdAdd } from "react-icons/md";

const conectBankReconcile = () => {
    // To get active route
  const pathname = usePathname();
  const startPath = pathname.split("/");
  let isIndia = startPath[1] !== "ae" && startPath[1] !== "uk";
  let isAE = startPath[1] === "ae";
  return (
    <>
      <div className="features">
        <section className="container-fluid">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h2 className="heading col-primary c-fw-600 mb-4">
                  Monitor your transactions by connecting bank accounts
                </h2>
                <p className="col-grey c-fs-3 mb-5">
                  Once your bank account connects to Giddh, you get an overview
                  of the most important asset of your business – cash.
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
                  <a href="#" className="col-blue">
                    Schedule Demo
                  </a>
                </div>
              </div>
              <div className="col-lg-5 order-lg-1 order-0 position-relative">
                <figure className="text-end">
                  <img src="/img/bank-banner.svg" width="90%" />
                  <img
                    src="/img/all-features-cloud_icon.svg"
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
                  Link your bank account seamlessly with Giddh
                </h3>
                <p className="c-fs-4 mb-5">
                  Get new transactions delivered from your bank account into
                  Giddh– automatically & securely. By linking your bank accounts
                  you can actively monitor your day to day transactions and
                  reconcile your books. Bank link helps you keep track of your
                  cash flow in the most secure, fast and reliable way.
                </p>
                <a href="#" className="btn bg_color_blue col-white">
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
                    Connect bank and get automatic updates
                  </h4>
                  <p className="">
                    As a growing business, your volume of bank transactions must
                    be growing. With bank account linking, you no longer have to
                    upload those transactions one after the other at week’s or
                    month’s end. Giddh fetches all your transactions
                    automatically for you so that you can stay on top of your
                    finances.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/bank-connect.svg"
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
                    Reconcile with a snap of fingers
                  </h4>
                  <p className="">
                    With one-click reconciliation feature, we have made the
                    process of reconciliation so easy, it is no more a
                    complicated chore you would want to avoid. With just one
                    click, you would know your balances as per bank and as per
                    your books.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/bank-reconcile.svg"
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
                    Got Multiple Bank Accounts? We got you Covered
                  </h4>
                  <p className="">
                    With Giddh bank account linking, you can monitor the
                    deposit, transfer, and withdrawals of cash whether you hold
                    a single bank account or several accounts from multiple
                    banks, right from our easy and friendly interface.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/bank-account.svg"
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
                    Giddh will connect to your favorite bank
                  </h4>
                  <p className="">
                    Major national banks like SBI, ICICI and many more can be
                    linked with Giddh to let your transactions to flow
                    automatically. Can’t find your bank? Just let us know and
                    we’ll try to help you out.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/bank-overview.svg"
                    className="img-fluid"
                    alt="bank overview image"
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
                    width="300px"
                  />
                </figure>
                <h2 className="c-fs-3 col-grey-deep c-fw-400 mb-3 mt-4">
                  People interested in{" "}
                  <span className="col-blue">Connect Bank Reconcile</span> also
                  looked at
                </h2>

                <div className="features__suggestion_container__links">
                  <a href="#" className="col-blue">
                    All features
                  </a>
                  <a href="#" className="border-vertical col-blue">
                    Share Data
                  </a>
                  <a href="#" className="border-vertical col-blue">
                    Multi-Currency
                  </a>
                  <a href="#" className="border-vertical col-blue">
                    Invoicing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid features__accordion_container" >
          <div className="container">
            <div className="row">
              <div className="col-12">
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
                        What is bank reconciliation? Why is it done?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        A bank reconciliation compares the difference between
                        the bank balance on the bank statement with the balance
                        on the accounting records of the company. Sometimes,
                        certain transactions may be accounted for in the bank’s
                        system before it is integrated into the company’s
                        accounting system. Hence, bank reconciliation is done so
                        that such differences can be detected.
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
                        What is reconciliation software?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        A reconciliation software is a tool that can help you
                        automate and standardise the reconciliation process to
                        ensure quality and accuracy in preparing financial
                        statements. With a bank reconciliation software, it
                        becomes easier for accountants to compare bank, general
                        ledger and other data, verify the correctness of balance
                        sheets as well as identify any discrepancies, attach
                        supporting documentation, etc.
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
                        How can Giddh help streamline bank transactions?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        Giddh, one of the best bank reconciliation software in
                        India, can directly be integrated with your respective
                        banking partner. As a result you can easily make
                        payments to vendors from a single window, without the
                        need for opening your online banking website and
                        reentering your credentials. Since the bank’s API is
                        integrated directly within the app, Giddh automatically
                        monitors and categorizes your bank transactions and
                        makes the reconciliation process smoother and smarter.
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
                        How does integrating a bank account with Giddh benefit
                        me?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>
                            Easily send and receive vendor payments from a
                            single window in a convenient manner.
                          </li>
                          <li>
                            Have a clearer view of the company’s cash status in
                            no time
                          </li>
                          <li>
                            Easy and automated import of bank statement
                            transactions
                          </li>
                          <li>
                            Automated reconciliation of transactions by value
                            and reconciliation code
                          </li>
                          <li>
                            Detailed reporting of bank activities and daily
                            payments
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
export default conectBankReconcile;
