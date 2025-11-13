import Faqs from "@/components/faq";
import faqs from "../../data/faqs.json";
import { useEffect, useState } from "react";

const UkInventoryManagementSoftware = (path) => {
  const linkPath = path.path;
  const isGlobal = linkPath.isGlobal;
  const isIndia = linkPath.isIndia;
  const isAE = linkPath.isAE;
  const isUK = linkPath.isUK;
  const link = linkPath.linkPrefix;
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    setFaq(faqs["inventory-management-software"]);
  }, []);

  return (
    <>
      <div className="features">
        <section className="container-fluid" aria-labelledby="features-heading">
          <div className="container features__heading_container">
            <div className="row">
              <div className="col-lg-7 order-lg-0 order-1">
                <h1
                  id="features-heading"
                  className="heading col-primary c-fw-600 mb-4"
                >
                  Enhance Efficiency: Simplify Inventory Management.
                </h1>
                <h2 className="col-grey c-fs-3 mb-5">
                  Streamline your inventory management in Giddh while gaining
                  real-time visibility into your stock levels.
                </h2>
                <div className="features__heading_container__links">
                  <a
                    href="#"
                    className="download_free_btn me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#downloadFree"
                    aria-label="Download the free version of the inventory management software"
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
                    src="/img/feature-gallery-icons/inventory-banner.svg"
                    width="400"
                    height="300"
                    alt="An illustration representing inventory management"
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

        <section
          className="container-fluid features__sub_heading_container"
          aria-labelledby="inventory-tracking-heading"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center features__sub_heading_container--pull-top">
                <h2
                  id="inventory-tracking-heading"
                  className="sub-heading col-primary c-fw-600 mb-3"
                >
                  Maintain inventory tracking. Stay updated.
                </h2>
                <p className="c-fs-4 mb-5">
                  Modern inventory management software for the modern
                  entrepreneur no stress, no hassles, no hidden costs. Managing
                  inventory is a priority for any growing business. Inventory
                  management feature helps you to track your stock movements
                  accurately so you can get back to doing the thing you are best
                  at: Grow and Earn!
                </p>
                <a
                  href={link + "/signup"}
                  className="btn-link-purple"
                  aria-label="Start your trial for inventory management software"
                >
                  Start Your Trial
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="container-fluid features__description_container mt-5"
          aria-labelledby="features-description-heading"
        >
          <h2 id="features-description-heading" className="visually-hidden">
            Features Description
          </h2>
          <div className="container">
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h2
                    className="col-primary c-fw-600 mb-3"
                    id="record-inventory-heading"
                  >
                    Record inventory for products and services
                  </h2>
                  <p>
                    Inventory management isn't exclusive to product-based
                    businesses; service-oriented businesses can benefit as well.
                    With Giddh, you can efficiently handle both product and
                    service inventory.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/record-inventory.svg"
                    className="img-fluid"
                    alt="Illustration of recording inventory for products and services"
                    width="auto"
                    height="200"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h2
                    className="col-primary c-fw-600 mb-3"
                    id="inventory-masters-heading"
                  >
                    Inventory Masters
                  </h2>
                  <p>
                    Giddh provides you with the "masters" of inventory. Here,
                    you'll be able to view all your business inventory and
                    easily create, modify, or remove inventory items.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/inventory-master.svg"
                    className="img-fluid"
                    alt="Illustration of inventory masters"
                    width="auto"
                    height="200"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h2
                    className="col-primary c-fw-600 mb-3"
                    id="bifurcate-inventory-heading"
                  >
                    Bifurcate inventory into Groups, Items, and Variants
                  </h2>
                  <p>
                    Dealing with a large number of items can lead to confusion.
                    Simplify your inventory management by categorizing it into
                    Groups, Items, and Variants for a more organized and
                    efficient approach.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/bifurcate-inventory.svg"
                    className="img-fluid"
                    alt="Illustration of bifurcating inventory"
                    width="auto"
                    height="200"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h2
                    className="col-primary c-fw-600 mb-3"
                    id="real-time-reports-heading"
                  >
                    Real-time inventory reports
                  </h2>
                  <p>
                    Tired of the hassle of manually tracking your business
                    inventory? With Giddh, you can simplify your inventory
                    management. Giddh offers real-time inventory reports, which
                    are categorized by Groups, Items, and Variants for a clearer
                    view. Additionally, it provides transaction-specific reports
                    to simplify your inventory management experience.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/reports.svg"
                    className="img-fluid"
                    alt="Illustration of real-time inventory reports"
                    width="auto"
                    height="200"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h2 className="col-primary c-fw-600 mb-3">
                    Barcode Scanning
                  </h2>
                  <p>
                    Utilizing barcode scanning within accounting software
                    enables quick item addition to invoices and bills,
                    eliminating the need for manual product inputs. This
                    streamlines operations, enhances accuracy, saves time, and
                    boosts efficiency. Furthermore, barcode-enabled inventory
                    reports facilitate easy item search, enhancing inventory
                    control and management.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/barcode-scanning.svg"
                    className="img-fluid"
                    alt="barcode-scanning-feature-icon"
                    width="auto"
                    height="200"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h2 className="col-primary c-fw-600 mb-3">Manufacturing</h2>
                  <p>
                    In manufacturing, inventory management can be tough, but
                    Giddh simplifies it. Easily manage manufacturing and its
                    expenses while focusing on your core production. Giddh takes
                    care of your business inventory balances. It even manages
                    any by-products created during manufacturing, making your
                    business operations smoother.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/manufacturing-export.svg"
                    className="img-fluid"
                    alt="bank reconcile image"
                    width="auto"
                    height="200"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h2 className="col-primary c-fw-600 mb-3">
                    Branch and Warehouse inventory management-
                  </h2>
                  <p>
                    If your business is expanded across multiple locations and
                    has Expanding your business across multiple locations or
                    warehouses? Giddh makes it easy to manage inventory across
                    these various branches and warehouses. Plus, you can access
                    the branch and warehouse specific inventory reports, as well
                    as the overall company reports, simplifying your overall
                    inventory management.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/branch-warehouse.svg"
                    className="img-fluid"
                    alt="bank reconcile image"
                    width="auto"
                    height="200"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-bottom">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h2 className="col-primary c-fw-600 mb-3">Branch transfer</h2>
                  <p>
                    Looking to transfer products between branches or warehouses?
                    No worries! You can easily manage inventory transfers, and
                    these changes will reflect in real-time inventory reports.
                    Additionally, you can access individual reports for each
                    transfer.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/branch-transfer.svg"
                    className="img-fluid"
                    alt="bank account image"
                    width="auto"
                    height="200"
                  />
                </figure>
              </div>
            </div>

            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h2 className="col-primary c-fw-600 mb-3">Custom units</h2>
                  <p>
                    You're no longer limited to just a few inventory units;
                    Giddh offers a solution to maintain and customize units
                    according to your specific requirements.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/custom-unit.svg"
                    className="img-fluid"
                    alt="custom-units-icon"
                    width="auto"
                    height="200"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section
          className="container-fluid features__suggestion_container"
          aria-labelledby="suggestion-heading"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center features__sub_heading_container--pull-top">
                <figure>
                  <img
                    src="/img/suggestion.svg"
                    alt="Illustration of people interested in inventory management software"
                    className="features__sub_heading_container--banner_img"
                    width="auto"
                    height="200"
                  />
                </figure>
                <h2
                  id="suggestion-heading"
                  className="c-fs-3 col-grey-deep c-fw-400 mb-3 mt-4"
                >
                  People interested in{" "}
                  <span className="col-blue">
                    Inventory Management Software
                  </span>{" "}
                  also looked at
                </h2>

                <div className="features__suggestion_container__links">
                  <a
                    href={link + "/all-features"}
                    className="col-blue"
                    aria-label="View all features of the inventory management software"
                  >
                    All features
                  </a>
                  <a
                    href={link + "/multi-user-accounting-software"}
                    className="border-left col-blue"
                    aria-label="Learn about sharing data with multi-user accounting software"
                  >
                    Share Data
                  </a>
                  <a
                    href={link + "/multi-currency-accounting-software"}
                    className="border-left col-blue"
                    aria-label="Explore multi-currency accounting software"
                  >
                    Multi-Currency
                  </a>
                  <a
                    href={link + "/invoice-software"}
                    className="border-left col-blue"
                    aria-label="Discover invoicing features"
                  >
                    Invoicing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Faqs faq={faq} />
      </div>
    </>
  );
};
export default UkInventoryManagementSoftware;