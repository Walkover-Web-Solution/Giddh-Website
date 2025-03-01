const contacts = (path) => {
  const linkPath = path.path;
  const isGlobal = linkPath.isGlobal;
  const isIndia = linkPath.isIndia
  const isAE = linkPath.isAE;
  const link = linkPath.linkPrefix;
  
  return (
    <>
      <div className="features">
        <section className="container-fluid" aria-labelledby="features-heading">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h1 id="features-heading" className="heading col-primary c-fw-600 mb-4">
                  Elevate productivity by accessing your business contacts.
                </h1>
                <h2 className="col-grey c-fs-3 mb-5 lh-base">
                  All the information you have stored about your customers –
                  their transaction history, balance to be paid or received,
                  personal info and so on.
                </h2>
                <div className="features__heading_container__links">
                  <a
                    href="#"
                    className="download_free_btn me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#downloadFree"
                    aria-label="Download the free version"
                  >
                    Download Free
                  </a>
                  <a 
                    href="#" 
                    className="col-blue" 
                    onClick={() => openCalendly()}
                    aria-label="Schedule a demo with our sales team"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
              <div className="col-lg-5 order-lg-1 order-0 position-relative">
                <figure className="text-end">
                  <img
                    src="/img/feature-gallery-icons/contact.svg"
                    width="400"
                    height="300" 
                    alt="Illustration representing business contacts"
                  />
                  <img
                    src="/img/all-features-cloud_icon.svg"
                    alt="Cloud icons representing various features"
                    className="features__heading_container__right_banner_img"
                    width="90%"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid features__sub_heading_container" aria-labelledby="contact-management-heading">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center features__sub_heading_container--pull-top">
                <h3 id="contact-management-heading" className="sub-heading col-primary c-fw-600 mb-3">
                  Track and manage your contacts in one glance
                </h3>
                <p className="c-fs-4 mb-5" role="note">
                  Multi currency accounting software makes it easy to manage
                  your accounting in more than 100 currencies for your fast &
                  growing business. Giddh makes managing multi-currency
                  payments, invoicing and accounts easy.
                </p>
                <a href={ link + '/signup' } className="btn-link-purple" aria-label="Start your trial for Giddh">
                  Start Your Trial
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid features__description_container mt-5" aria-labelledby="description-heading">
          <div className="container">
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 id="description-heading" className="col-primary c-fw-600 mb-3">
                    Valuable business intelligence you can act on
                  </h4>
                  <p >
                    Along with detailed information about your customers &
                    vendors, smart list also enables you to add a comment next
                    to the contacts. It can be a payment follow-up response or
                    an additional detail of the customer. The possibilities are
                    as unique as your business is.Along with detailed
                    information about your customers & vendors, smart list also
                    enables you to add a comment next to the contacts. It can be
                    a payment follow-up response or an additional detail of the
                    customer. The possibilities are as unique as your business
                    is.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/import-data-feature-1.webp"
                    className="img-fluid"
                    alt="Illustration of connecting bank data"
                    width="auto"
                    height="200"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    Easily know who owes how much
                  </h4>
                  <p >
                    The Aging Report integrated with the Contacts will show you
                    which customers are taking a long time to pay their dues. It
                    also shows you the total amount owed to you by those
                    customers so that you can make better collection strategies.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src={ isIndia ? "/img/feature-gallery-icons/reporting-feature-3.webp" : ( isAE ? "/img/feature-gallery-icons/uk-aging-report.svg" : "/img/feature-gallery-icons/uk-aging-report.svg") }
                    className="img-fluid"
                    alt="Aging report illustration based on region"
                    width="auto"
                    height="200"
                  />
                </figure>
              </div>
            </div>

            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary c-fw-600 mb-3">
                    What could you do with giddh smart list?
                  </h4>

                  <ul className="custom-ul-with-right-tick" role="list">
                    <li>
                      Add new customers or vendors directly to your Giddh books.
                    </li>
                    <li>
                      Find all those customers who haven’t paid you back in the
                      past few weeks or months listed in one place, so you can
                      follow-up with them and improve your cash flow
                    </li>
                    <li>
                      See how many customers you have in a particular city or
                      region, helping you assess your customer base and create a
                      more targeted sales or marketing effort.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/import-data-feature-4.svg"
                    className="img-fluid"
                    alt="Illustration of bank account management"
                    width="auto"
                    height="200"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid features__suggestion_container" aria-labelledby="suggestion-heading">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center features__sub_heading_container--pull-top">
                <figure>
                  <img
                    src="/img/suggestion.svg"
                    alt="Illustration of people interested in Connect Bank Reconcile"
                    className="features__sub_heading_container--banner_img"
                    width="auto"
                    height="200"
                  />
                </figure>
                <h2 id="suggestion-heading" className="c-fs-3 col-grey-deep c-fw-400 mb-3 mt-4">
                  People interested in{" "}
                  <span className="col-blue">Contacts</span> also looked at
                </h2>

                <div className="features__suggestion_container__links">
                   <a href={ link + "/all-features" } className="col-blue" aria-label="View all features">
                    All features
                  </a>
                  <a href={ link + "/multi-user-accounting-software" } className="border-vertical col-blue" aria-label="Learn about sharing data">
                    Share Data
                  </a>
                  <a href={ link + "/multi-currency-accounting-software" } className="border-vertical col-blue" aria-label="Explore multi-currency options">
                    Multi-Currency
                  </a>
                  <a href={ link + "/invoice-software" } className="border-vertical col-blue" aria-label="Discover invoicing features">
                    Invoicing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default contacts;
