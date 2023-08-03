import { MdClose } from "react-icons/md";

const featureGallery = () => {
  return (
    <>
      <section className="container-fluid feature-gallery">
        <div className="container">
          <div className="row">
            <div className="feature-gallery__title text-center mb-3">
              <h2>Features that empower your business</h2>
              <p className="c-fs-4">
                Friendly with all other departments Sales, Support, Management
                etc…
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="feature-gallery__card" data-bs-target="#featureModal" data-bs-toggle="modal">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/inventory.png"
                    alt="Inventory Icon"
                  />
                  <figcaption className="c-fw-400">Inventory</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="feature-gallery__card" data-bs-target="#featureModal" data-bs-toggle="modal">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/invoice.png"
                    alt="Invoices Icon"
                  />
                  <figcaption className="c-fw-400">Invoices</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="feature-gallery__card" data-bs-target="#featureModal" data-bs-toggle="modal">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/anywhere-anytime.png"
                    alt="Anywhere Anytime Icon"
                  />
                  <figcaption className="c-fw-400">Anywhere Anytime</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="feature-gallery__card" data-bs-target="#featureModal" data-bs-toggle="modal">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/bank-reconciliation.png"
                    alt="Bank Reconciliation Icon"
                  />
                  <figcaption className="c-fw-400">Bank Reconciliation</figcaption>
                </figure>
              </div>
            </div>

            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="feature-gallery__card" data-bs-target="#featureModal" data-bs-toggle="modal">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/multicurrency.png"
                    alt="Multi Currency Icon"
                  />
                  <figcaption className="c-fw-400">Multi Currency</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="feature-gallery__card" data-bs-target="#featureModal" data-bs-toggle="modal">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/import-data.png"
                    alt="Import Data Icon"
                  />
                  <figcaption className="c-fw-400">Import Data</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="feature-gallery__card" data-bs-target="#featureModal" data-bs-toggle="modal">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/gst-compiance.png"
                    alt="GST Compliances Icon"
                  />
                  <figcaption className="c-fw-400">GST Compliances</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="feature-gallery__card" data-bs-target="#featureModal" data-bs-toggle="modal">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/report-analysis.png"
                    alt="Reports & Analysis Icon"
                  />
                  <figcaption className="c-fw-400">Reports & Analysis</figcaption>
                </figure>
              </div>
            </div>

            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="feature-gallery__card" data-bs-target="#featureModal" data-bs-toggle="modal">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/share-data.png"
                    alt="Share Data Icon"
                  />
                  <figcaption className="c-fw-400">Share Data</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="feature-gallery__card" data-bs-target="#featureModal" data-bs-toggle="modal">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/dashboard-icon.png"
                    alt="Dashboard Icon"
                  />
                  <figcaption className="c-fw-400">Dashboard</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="feature-gallery__card" data-bs-target="#featureModal" data-bs-toggle="modal">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/support.png"
                    alt="Audit Trail Icon"
                  />
                  <figcaption className="c-fw-400">Audit Trail</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="feature-gallery__card" data-bs-target="#featureModal" data-bs-toggle="modal">
                <a href="#" className="c-fs-3">
                  See More
                </a>
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
              <h5 className="c-fs-2 c-fw-600 col-primary mb-4">Get paid faster by creating professional looking invoices and send them automatically.</h5>
              <p className="col-grey-deep mb-1">Create VAT compliant invoices and documents whether you are buying stocks for your inventory or selling your product or services to customers. Now create custom invoices and transact in multiple currencies. You don’t have to bother about the nuances of taxation as once set, the numbers are taken care of by Giddh.</p>
              <a href="#" className="col-blue">More details</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default featureGallery;
