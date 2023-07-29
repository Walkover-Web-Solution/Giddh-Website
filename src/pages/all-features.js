import { MdClose } from "react-icons/md";
const allFeatures = () => {
  return (
    <>
      <div className="features">
        <section className="container-fluid">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h2 className="heading col-primary fw-bold mb-4">
                  Access your books anytime anywhere
                </h2>
                <p className="col-grey c-fs-3 mb-5">
                  Manage your business finances anytime, from any
                  internet-connected device – phone, laptop or computer.
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
                  <img src="img/features-banner.svg" width="90%" />
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
      </div>
      <section className="container-fluid feature-gallery all_features">
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/feature-inventory.svg"
                    alt="Inventory Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Inventory</figcaption>
                  <p>
                    Create inventory easily and track inventory expenses.
                    Managing inventory is no more a hassle!
                  </p>
                </figure>
              </div>
            </div>
            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/feature-invoice.svg"
                    alt="Invoices Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Invoices</figcaption>
                  <p>
                    Get paid faster by creating professional looking invoices
                    and send them automatically.
                  </p>
                </figure>
              </div>
            </div>
            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/feature-anywhere.svg"
                    alt="Anywhere Anytime Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Anywhere Anytime</figcaption>
                  <p>
                    Jump on the cloud and manage your accounting whenever and
                    wherever you want.
                  </p>
                </figure>
              </div>
            </div>
            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/feature-reconcile.svg"
                    alt="Bank Reconciliation Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Bank Reconciliation</figcaption>
                  <p>
                    Giddh makes the confusing work of bank reconciliation easy &
                    simple. Know your cash position anytime.
                  </p>
                </figure>
              </div>
            </div>

            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/multi-currency-banner.svg"
                    alt="Multi Currency Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Multi Currency</figcaption>
                  <p>
                    Serve your international clients by using Giddh's multi
                    currency solution.
                  </p>
                </figure>
              </div>
            </div>
            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/feature-excel.svg"
                    alt="Import Data Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Import Data</figcaption>
                  <p>
                    Bring in and add your financial dota from different excel
                    files easily in Giddh.
                  </p>
                </figure>
              </div>
            </div>
            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/feature-gst.svg"
                    alt="GST Compliances Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>GST Compliances</figcaption>
                  <p>
                    Compliance is no more a challenge! Create GST compliant
                    invoices & file GST returns.
                  </p>
                </figure>
              </div>
            </div>
            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/feature-report.svg"
                    alt="Reports & Analysis Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Reports & Analysis</figcaption>
                  <p>
                    Analyse your business's health using Giddh's finance
                    reporting tools such as daybook and audit log.
                  </p>
                </figure>
              </div>
            </div>

            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/feature-share-data.svg"
                    alt="Share Data Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Share Data</figcaption>
                  <p>
                    Collaborate with your colleagues by easily sharing all your
                    financial data.
                  </p>
                </figure>
              </div>
            </div>
            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/feature-dashboard.svg"
                    alt="Dashboard Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Dashboard</figcaption>
                  <p>
                    Get a bird’s eye view of revenue, net-worth of your
                    business, all on one screen.
                  </p>
                </figure>
              </div>
            </div>
            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/feature-app.svg"
                    alt="Audit Trail Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Audit Trail</figcaption>
                  <p>
                    Now track, monitor, detect and prevent fraud, and get
                    accurate records for reference.
                  </p>
                </figure>
              </div>
            </div>
            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/feature-bank.svg"
                    alt="Audit Trail Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Linked Bank Account</figcaption>
                  <p>
                    Link multiple bank accounts and view transaction history
                    whenever and wherever you want.
                  </p>
                </figure>
              </div>
            </div>
            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/feature-api.svg"
                    alt="Audit Trail Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Search</figcaption>
                  <p>
                    Search and find whatever you required from wherever you are
                    in Giddh.
                  </p>
                </figure>
              </div>
            </div>
            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/feature-api.svg"
                    alt="Audit Trail Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>API Integration</figcaption>
                  <p>
                    Use full potential of automation by integrating APIs that
                    automates complex accounting tasks.
                  </p>
                </figure>
              </div>
            </div>
            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/feature-contact.svg"
                    alt="Audit Trail Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Contact</figcaption>
                  <p>
                    Get an overview of your customers, vendors and their
                    business information at one place.
                  </p>
                </figure>
              </div>
            </div>
            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/feature-security.svg"
                    alt="Audit Trail Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Security</figcaption>
                  <p>
                    With bank level security, your financial reports are safe
                    from any unethical breaches.
                  </p>
                </figure>
              </div>
            </div>
            <div className="col">
              <div
                className="feature-gallery__card"
                data-bs-target="#featureModal"
                data-bs-toggle="modal"
              >
                <figure>
                  <img
                    src="/img/feature-support.svg"
                    alt="Audit Trail Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Support</figcaption>
                  <p>
                    With a diligent support team, your query is one call ‘or
                    email away from resolution.
                  </p>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="featureModal"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered feature_gallery_modal">
          <div className="modal-content">
            <div className="modal-header position-relative">
              <button
                type="button"
                className="btn col-blue ms-auto p-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <MdClose />
              </button>
            </div>
            <div className="modal-body">
              <h4 className="c-fs-1 c-fw-600 col-blue">INVOICES</h4>
              <h5 className="c-fs-2 c-fw-600 col-primary mb-4">
                Get paid faster by creating professional looking invoices and
                send them automatically.
              </h5>
              <p className="col-grey-deep mb-1">
                Create VAT compliant invoices and documents whether you are
                buying stocks for your inventory or selling your product or
                services to customers. Now create custom invoices and transact
                in multiple currencies. You don’t have to bother about the
                nuances of taxation as once set, the numbers are taken care of
                by Giddh.
              </p>
              <a href="#" className="col-blue">
                More details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default allFeatures;
