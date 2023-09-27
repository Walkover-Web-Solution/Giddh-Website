const allFeatures = (path) => {
  const linkPath = path.path;
    
  const isIndia = linkPath.isIndia
  const isAE = linkPath.isAE;
  const isUK = linkPath.isUK;
  const link = linkPath.linkPrefix;
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
                  <img src="/img/features-banner.svg" alt="giddh features banner image" width="90%" />
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
      </div>
      <section className="container-fluid feature-gallery all_features">
        <div className="container">
          <div className="row">
            <div className="col">
              <a
                className="feature-gallery__card"
                href={link + "/inventory-management-software"}
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
              </a>
            </div>
            <div className="col">
              <a
                className="feature-gallery__card"
                href={link + "/invoice-software"}
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
              </a>
            </div>
            <div className="col">
              <a
                className="feature-gallery__card"
                href={link + "/cloud-accounting-software"}
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
              </a>
            </div>
            <div className="col">
              <a
                className="feature-gallery__card"
                href={link + "/conect-bank-reconcile"}
              >
                <figure>
                  <img
                    src={
                      isIndia
                        ? "/img/feature-reconcile.svg"
                        : "/img/allfeatures_expmanagement-ae.png"
                    }
                    alt="Bank Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>
                    {isIndia ? "Bank Reconciliation" : "Expense Management"}{" "}
                  </figcaption>
                  <p>
                    Giddh makes the confusing work of bank reconciliation easy &
                    simple. Know your cash position anytime.
                  </p>
                </figure>
              </a>
            </div>

            <div className="col">
              <a
                className="feature-gallery__card"
                href={link + "/multi-currency-accounting-software"}
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
              </a>
            </div>
            <div className="col">
              <a className="feature-gallery__card" href={link + "/import-data"}>
                <figure>
                  <img
                    src="/img/feature-excel.svg"
                    alt="Import Data Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Import Data</figcaption>
                  <p>
                    Bring in and add your financial data from different excel
                    files easily in Giddh.
                  </p>
                </figure>
              </a>
            </div>
            {isIndia ? (
              <div className="col">
                <a className="feature-gallery__card" href={link + "/gst"}>
                  <figure>
                    <img
                      src="/img/feature-tax.svg"
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
                </a>
              </div>
            ) : null}

            {isAE || isUK ? (
              <div className="col">
                <a className="feature-gallery__card" href={link + "/vat"}>
                  <figure>
                    <img
                      src="/img/vat-filling.svg"
                      alt="Tax Icon"
                      height="90px"
                      widht="auto"
                    />
                    <figcaption>VAT Filing</figcaption>
                    <p>Invoices according to VAT registration status</p>
                  </figure>
                </a>
              </div>
            ) : null}

            {isAE || isUK ? (
              <div className="col">
                <a
                  className="feature-gallery__card"
                  href={link + "/financial-reporting"}
                >
                  <figure>
                    <img
                      src="/img/feature-report.svg"
                      alt="Tax Icon"
                      height="90px"
                      widht="auto"
                    />
                    <figcaption>Activity Logs</figcaption>
                    <p>Quick Error Identifier</p>
                  </figure>
                </a>
              </div>
            ) : null}

            {isIndia ? (
              <div className="col">
                <a
                  className="feature-gallery__card"
                  href={link + "/financial-reporting"}
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
                </a>
              </div>
            ) : null}

            <div className="col">
              <a
                className="feature-gallery__card"
                href={link + "/multi-user-accounting-software"}
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
              </a>
            </div>
            <div className="col">
              <a
                className="feature-gallery__card"
                href={link + "/accounting-dashboard"}
              >
                <figure>
                  <img
                    src="/img/feature-dashboard.svg"
                    alt="Dashboard Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>{isIndia ? "Dashboard" : "Simple UI"}</figcaption>
                  <p>
                    {isIndia
                      ? "Get a bird’s eye view of revenue, net-worth of your business, all on one screen."
                      : "Insightful Dashboard"}
                  </p>
                </figure>
              </a>
            </div>
            <div className="col">
              <a
                className="feature-gallery__card"
                href={link + "/financial-reporting"}
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
              </a>
            </div>
            <div className="col">
              <a
                className="feature-gallery__card"
                href={link + "/conect-bank-reconcile"}
              >
                <figure>
                  <img
                    src="/img/feature-bank.svg"
                    alt="Linked Bank Account Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Linked Bank Account</figcaption>
                  <p>
                    Link multiple bank accounts and view transaction history
                    whenever and wherever you want.
                  </p>
                </figure>
              </a>
            </div>
            <div className="col">
              <a
                className="feature-gallery__card"
                href={link + "/all-features"}
              >
                <figure>
                  <img
                    src="/img/feature-api.svg"
                    alt="Search Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Search</figcaption>
                  <p>
                    Search and find whatever you required from wherever you are
                    in Giddh.
                  </p>
                </figure>
              </a>
            </div>
            <div className="col">
              <a
                className="feature-gallery__card"
                href="https://apidoc.giddh.com"
                target="_blank"
              >
                <figure>
                  <img
                    src="/img/feature-api.svg"
                    alt="API Integration Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>API Integration</figcaption>
                  <p>
                    Use full potential of automation by integrating APIs that
                    automates complex accounting tasks.
                  </p>
                </figure>
              </a>
            </div>
            <div className="col">
              <a className="feature-gallery__card" href={link + "/contacts"}>
                <figure>
                  <img
                    src="/img/feature-contact.svg"
                    alt="Contact Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Contact</figcaption>
                  <p>
                    Get an overview of your customers, vendors and their
                    business information at one place.
                  </p>
                </figure>
              </a>
            </div>
            <div className="col">
              <a className="feature-gallery__card" href={link + "/security"}>
                <figure>
                  <img
                    src="/img/feature-security.svg"
                    alt="Security Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Security</figcaption>
                  <p>
                    With bank level security, your financial reports are safe
                    from any unethical breaches.
                  </p>
                </figure>
              </a>
            </div>
            <div className="col">
              <a className="feature-gallery__card" href="#footer-contact">
                <figure>
                  <img
                    src="/img/feature-support.svg"
                    alt="Support Icon"
                    height="90px"
                    widht="auto"
                  />
                  <figcaption>Support</figcaption>
                  <p>
                    With a diligent support team, your query is one call ‘or
                    email away from resolution.
                  </p>
                </figure>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default allFeatures;
