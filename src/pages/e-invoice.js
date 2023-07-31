import { MdRemove, MdAdd } from "react-icons/md";
const eInvoie = () => {
  return (
    <>
      <div className="e-invoice">
        <section className="container-fluid">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h2 className="heading col-primary c-fw-600 mb-4">
                  Make Your Business E-Invoice Ready
                </h2>
                <p className="col-grey c-fs-3 mb-5">
                  Now mandatory from 1st April 2022 for businesses whose
                  turnover is INR 20 Crore+ Giddh is supporting e-invoice from
                  1st April 2021
                </p>
                <div className="features__heading_container__links">
                  <a href="#" className="download_free_btn me-4">
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

        <section className="container-fluid  e-invoice__first_section">
          <div className="container">
            <h2 className="col-primary sub-heading text-center c-fw-600">
              Why Giddh is the most reliable and smartest e-invoicing solution
              for your business?
            </h2>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="e-invoice__first_section__card text-center">
                  <figure>
                    <img src="/img/support-1.svg" alt="support-icon" />
                  </figure>
                  <h3 className="col-primary c-fs-4 c-fw-600">
                    Fast & Reliable
                  </h3>
                  <p>Less than 3s response time with 99.9% uptime</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="e-invoice__first_section__card text-center">
                  <figure>
                    <img
                      src="/img/smart-secure-1.svg"
                      alt="smart-secure-icon"
                    />
                  </figure>
                  <h3 className="col-primary c-fs-4 c-fw-600">
                    24*7 Customer Support
                  </h3>
                  <p>Round-the-clock technical & advisory assistance</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="e-invoice__first_section__card text-center">
                  <figure>
                    <img
                      src="/img/auto-invoice-1.svg"
                      alt="auto-invoice-icon"
                    />
                  </figure>
                  <h3 className="col-primary c-fs-4 c-fw-600">
                    Smart & Secured Platform
                  </h3>
                  <p>Smart user interface. High-grade encryption</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="e-invoice__first_section__card text-center">
                  <figure>
                    <img
                      src="/img/reconciliation-1.svg"
                      alt="reconciliation-icon"
                    />
                  </figure>
                  <h3 className="col-primary c-fs-4 c-fw-600">
                    Auto-push of e-invoice
                  </h3>
                  <p>Push e-invoice automatically at e-invoice portal</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="e-invoice__first_section__card text-center">
                  <figure>
                    <img
                      src="/img/invoice-status-1.svg"
                      alt="invoice-status-icon"
                    />
                  </figure>
                  <h3 className="col-primary c-fs-4 c-fw-600">
                    Auto Reconciliation
                  </h3>
                  <p>
                    One-click reconciliation with e-way bills and e-invoice
                    register
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="e-invoice__first_section__card text-center">
                  <figure>
                    <img
                      src="/img/fast-reliable-1.svg"
                      alt="fast-reliable-icon"
                    />
                  </figure>
                  <h3 className="col-primary c-fs-4 c-fw-600">
                    Track e-invoice Status
                  </h3>
                  <p>
                    The e-invoice enables real-time tracking of invoices
                    prepared by the supplier
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid  e-invoice__second_section">
          <div className="container">
            <h2 className="col-primary sub-heading text-center c-fw-600">
              Benefits of e-invoicing with Giddh
            </h2>
            <div className="e-invoice__second_section__benefits_custom_view mt-5">
              <div class="e-invoice__second_section__benefits_custom_view__row">
                <div className="e-invoice__second_section__benefits_custom_view__row__item">
                  Increased Accuracy
                </div>
                <div className="e-invoice__second_section__benefits_custom_view__row__item">
                  Real-Time Tracking
                </div>
                <div className="e-invoice__second_section__benefits_custom_view__row__item">
                  Reduced Risk of Tax Evasion
                </div>
              </div>
              <div class="e-invoice__second_section__benefits_custom_view__row">
                <div className="e-invoice__second_section__benefits_custom_view__row__item">
                  Uniqueness with IRN and QR Code for B2B
                </div>
              </div>
              <div class=" e-invoice__second_section__benefits_custom_view__row">
                <div className="e-invoice__second_section__benefits_custom_view__row__item">
                  Better Visibility and Transparency
                </div>
                <div className="e-invoice__second_section__benefits_custom_view__row__item">
                  Uniqueness with QR Code for B2C
                </div>
                <div className="e-invoice__second_section__benefits_custom_view__row__item">
                  Auto-Populated Data in GST
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid  e-invoice__third_section">
          <div className="container">
            <h2 className="col-primary sub-heading text-center c-fw-600 pb-3">
              3 simple steps to start e-invoicing now
            </h2>
            <div className="row align-items-center my-5">
              <div className="col-lg-6">
                <ul>
                  <li>Register your business in the e-invoice portal</li>
                  <li>
                    Create API credentials for GST Suvidha Provider (GSP) for
                    Giddh & login
                  </li>
                  <li>
                    Push your invoices to IRP to get validated, signed
                    e-invoices with IRNs
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img
                    src="/img/gst-e-invoice-graphic.svg"
                    alt="gst e-invoice image"
                  />
                </figure>
              </div>
            </div>
            <h2 className="col-primary sub-heading text-center c-fw-600">
              They will be automatically pushed to the e-invoice portal
            </h2>
          </div>
        </section>

        <section className="container-fluid  e-invoice__fourth_section">
          <div className="container px-0">
          <h2 className="col-primary sub-heading c-fw-600 pb-4">
            Make your business ready for the e-invoicing system
          </h2>
            <div className="row">
              <div className="col-12">                    
                <div className="features__heading_container__links">
                  <a href="#" className="download_free_btn me-4">
                    Download Free
                  </a>
                  <a href="#" className="col-blue">
                    Schedule Demo
                  </a>
                </div>
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
                        Electronic Invoicing, commonly known as ‘e-invoicing’ is
                        a system in which B2B invoices are authenticated
                        electronically on the Invoice Registration Portal (IRP)
                        for further use on the Good and Services Tax (GST)
                        portal.
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
                        From 1st October 2020, e-invoicing was made applicable
                        to businesses with turnover exceeding INR 500 crore.
                        From 1st January 2021, it was extended to businesses
                        with turnover exceeding INR 100 crore. From 1st April
                        2021, businesses with more than INR 50 crore turnover
                        have to comply with e-invoicing. From 1st April 2022, it
                        is again extended to businesses with turnover exceeding
                        INR 20 crore. If your turnover exceeds the specified
                        turnover in any financial year from 2017-18 onwards, you
                        are required to comply with e-invoicing.
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
                        customize the templates to personalize your invoices so
                        it reflects your brand by adding your logo or choosing a
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
                        What is an Invoice Reference Number (IRN)?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        An Invoice Reference Number (IRN) is a unique code
                        issued for every e-invoice. It is a combination of the
                        supplier GSTIN, invoice number and financial year.
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
                        What is the end-to-end workflow of an e-invoice like?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        <ul>
                          <li>
                            Generation of the invoice on the taxpayer’s
                            respective ERP system
                          </li>
                          <li>Generation of IRN</li>
                          <li>
                            Upload the JSON file of the e-invoice to the IRP for
                            validation
                          </li>
                          <li>
                            The IRP will generate/validate the hash/IRN and will
                            add a digital signature and QR code, and return the
                            JSON to the taxpayer
                          </li>
                          <li>
                            The IRP will share this invoice data with the e-way
                            bill system and the GSTN
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*============ Accordion #7 ===============*/}

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
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
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        E-invoicing is available in all the paid plans of Giddh
                        Accounting Software.
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
export default eInvoie;
