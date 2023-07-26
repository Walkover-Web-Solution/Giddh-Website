import { MdRemove, MdAdd } from "react-icons/md";
const eInvoie = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="container features__heading_container">
          <div className="row">
            <div className="col-lg-7 order-lg-0 order-1">
              <h2 className="heading col-primary c-fw-600 mb-4">
                Make Your Business E-Invoice Ready
              </h2>
              <p className="col-grey c-fs-3 mb-5">
                Now mandatory from 1st April 2022 for businesses whose turnover
                is INR 20 Crore+ Giddh is supporting e-invoice from 1st April
                2021
              </p>
              <div className="features__heading_container__links">
                <a href="#" className="btn download_free_btn me-4">
                  Download Free
                </a>
                <a href="#" className="col-blue">
                  Schedule Demo
                </a>
              </div>
            </div>
            <div className="col-lg-5 order-lg-1 order-0 position-relative">
              <figure className="text-end">
                <img
                  src="img/feature-gallery-icons/e-invoice-banner.svg"
                  width="90%"
                />
                <img
                  src="img/all-features-cloud_icon.svg"
                  className="features__heading_container__right_banner_img"
                  width="90%"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid features__accordion_container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="accordion" id="accordionAllFeatures">
                {/*============ Accordion #1 ===============*/}
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
                      What is e-invoicing?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      Electronic Invoicing, commonly known as ‘e-invoicing’ is a
                      system in which B2B invoices are authenticated
                      electronically on the Invoice Registration Portal (IRP)
                      for further use on the Good and Services Tax (GST) portal.
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
                      What is the applicability of e-invoicing?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      From 1st October 2020, e-invoicing was made applicable to
                      businesses with turnover exceeding INR 500 crore. From 1st
                      January 2021, it was extended to businesses with turnover
                      exceeding INR 100 crore. From 1st April 2021, businesses
                      with more than INR 50 crore turnover have to comply with
                      e-invoicing. From 1st April 2022, it is again extended to
                      businesses with turnover exceeding INR 20 crore. If your
                      turnover exceeds the specified turnover in any financial
                      year from 2017-18 onwards, you are required to comply with
                      e-invoicing.
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
                      What does an e-invoice look like?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      The GST portal has released two e-invoice templates. You
                      can use any of the templates that follow the prescribed
                      e‑invoice schema, standard and format. You can also
                      customize the templates to personalize your invoices so it
                      reflects your brand by adding your logo or choosing a
                      colour scheme.
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
                      What is the e-invoice Registration Portal (IRP)?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      The e-invoices generated need to be reported to the
                      Invoice Registration Portal (IRP), which validates the
                      invoice and returns it along with an Invoice Reference
                      Number (IRN) and QR Code that is digitally signed.
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
                      How does integrating a bank account with Giddh benefit me?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>
                          Easily send and receive vendor payments from a single
                          window in a convenient manner.
                        </li>
                        <li>
                          Have a clearer view of the company’s cash status in no
                          time
                        </li>
                        <li>
                          Easy and automated import of bank statement
                          transactions
                        </li>
                        <li>
                          Automated reconciliation of transactions by value and
                          reconciliation code
                        </li>
                        <li>
                          Detailed reporting of bank activities and daily
                          payments
                        </li>
                      </ul>
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
                      Is e-invoicing available in all Giddh plans?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      The e-invoices generated need to be reported to the
                      Invoice Registration Portal (IRP), which validates the
                      invoice and returns it along with an Invoice Reference
                      Number (IRN) and QR Code that is digitally signed.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default eInvoie;
