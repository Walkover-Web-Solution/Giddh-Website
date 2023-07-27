import { MdRemove, MdAdd } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
const contacts = () => {
  return (
    <>
      <div className="features">
        <section className="container-fluid">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h2 className="heading col-primary c-fw-600 mb-4">
                  Elevate productivity by accessing your business contacts.
                </h2>
                <p className="col-grey c-fs-3 mb-5">
                  All the information you have stored about your customers –
                  their transaction history, balance to be paid or received,
                  personal info and so on.
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
                    src="/img/feature-gallery-icons/contact.svg"
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

        <section className="container-fluid features__sub_heading_container">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center features__sub_heading_container--pull-top">
                <h3 className="sub-heading col-primary c-fw-600 mb-3">
                  Track and manage your contacts in one glance
                </h3>
                <p className="c-fs-4 mb-5">
                  Multi currency accounting software makes it easy to manage
                  your accounting in more than 100 currencies for your fast &
                  growing business. Giddh makes managing multi-currency
                  payments, invoicing and accounts easy.
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
                    Valuable business intelligence you can act on
                  </h4>
                  <p className="">
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
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/import-data-feature-1.png"
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
                    Easily know who owes how much
                  </h4>
                  <p className="">
                    The Aging Report integrated with the Contacts will show you
                    which customers are taking a long time to pay their dues. It
                    also shows you the total amount owed to you by those
                    customers so that you can make better collection strategies.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/reporting-feature-3.png"
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
                    What could you do with giddh smart list?
                  </h4>

                  <ul className="ps-0">
                    <li className="mb-3">
                      <span className="col-primary c-fs-2 me-3">
                        <GiCheckMark />
                      </span>{" "}
                      Add new customers or vendors directly to your Giddh books.
                    </li>
                    <li className="mb-3">
                      <span className="col-primary c-fs-2 me-3">
                        <GiCheckMark />
                      </span>
                      Find all those customers who haven’t paid you back in the
                      past few weeks or months listed in one place, so you can
                      follow-up with them and improve your cash flow
                    </li>
                    <li>
                      <span className="col-primary c-fs-2 me-3">
                        <GiCheckMark />
                      </span>
                      See how many customers you have in a particular city or
                      region, helping you assess your customer base and create a
                      more targeted sales or marketing effort.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/import-data-feature-4.svg"
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
                    width="300px"
                  />
                </figure>
                <h2 className="c-fs-3 col-grey-deep c-fw-400 mb-3 mt-4">
                  People interested in{" "}
                  <span className="col-blue">Contacts</span> also looked at
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
      </div>
    </>
  );
};

export default contacts;
