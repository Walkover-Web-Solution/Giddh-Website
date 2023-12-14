import { MdRemove, MdAdd } from "react-icons/md";

const inventoryManagementSoftware = (path) => {
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
                <h1 className="heading col-primary c-fw-600 mb-4">
                  Enhance Efficiency: Simplify Inventory Management"
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
                  >
                    Download Free
                  </a>
                  <a
                    href="#"
                    className="col-blue"
                    onClick={() =>
                      Calendly.initPopupWidget({
                        url: "https://calendly.com/sales-accounting-software/talk-to-sale",
                      })
                    }
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
              <div className="col-lg-5 order-lg-1 order-0 position-relative">
                <figure className="text-end">
                  <img
                    src="/img/feature-gallery-icons/inventory-banner.svg"
                    width="90%"
                    alt="inventory-banner-image"
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
                <h1 className="sub-heading col-primary c-fw-600 mb-3">
                  Maintain inventory tracking. Stay updated.
                </h1>
                <p className="c-fs-4 mb-5">
                  Modern inventory management software for the modern
                  entrepreneur no stress, no hassles, no hidden costs. Managing
                  inventory is a priority for any growing business. Inventory
                  management feature helps you to track your stock movements
                  accurately so you can get back to doing the thing you are best
                  at: Grow and Earn!
                </p>
                <a href={link + "/signup"} className="btn-link-purple">
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
                    Record inventory for product, and Services
                  </h4>
                  <p>
                    Inventory management isn't exclusive to product-based
                    businesses; service-oriented businesses can benefit as well.
                    With Giddh, you can efficiently handle both product and
                    service inventory.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src={
                      isIndia || isAE
                        ? "/img/feature-gallery-icons/inventory-invoice.svg"
                        : "/img/feature-gallery-icons/inventory-uk.svg"
                    }
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
                    Inventory Master’s
                  </h4>
                  <p>
                    Giddh provides you with the "masters" of inventory. Here,
                    you'll be able to view all your business inventory and
                    easily create, modify, or remove inventory items.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="
                    /img/feature-gallery-icons/inventory-uk.svg"
                    className="img-fluid"
                    alt="inventory master image"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Bifurcate inventory into Groups, Items, and Variants
                  </h4>
                  <p>
                    Dealing with a large number of items can lead to confusion.
                    Simplify your inventory management by categorizing it into
                    Groups, Items, and Variants for a more organized and
                    efficient approach.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/inventory-unit.svg"
                    className="img-fluid"
                    alt="bank reconcile image"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Real-time inventory reports
                  </h4>
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
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/inventory-unit.svg"
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
                    Barcode Scanning
                  </h4>
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
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/inventory-unit.svg"
                    className="img-fluid"
                    alt="bank reconcile image"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Manufacturing
                  </h4>
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
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/inventory-unit.svg"
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
                    Branch and Warehouse inventory management-
                  </h4>
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
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/inventory-unit.svg"
                    className="img-fluid"
                    alt="bank reconcile image"
                  />
                </figure>
              </div>
            </div>
            <div className="row mb-5 pb-5 align-items-center features__description_container--row-even border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Branch transfer
                  </h4>
                  <p>
                    Looking to transfer products between branches or warehouses?
                    No worries! You can easily manage inventory transfers, and
                    these changes will reflect in real-time inventory reports.
                    Additionally, you can access individual reports for each
                    transfer.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/inventory-branch.svg"
                    className="img-fluid"
                    alt="bank account image"
                  />
                </figure>
              </div>
            </div>

            <div className="row mb-5 pb-5 align-items-center features__description_container--row-odd border-horizontal">
              <div className="col-md-12 col-lg-6">
                <div className="features__description_container__content">
                  <h4 className="col-primary small-heading c-fw-600 mb-3">
                    Custom units
                  </h4>
                  <p>
                    You're no longer limited to just a few inventory units;
                    Giddh offers a solution to maintain and customize units
                    according to your specific requirements.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 __image-alignment">
                <figure>
                  <img
                    src="/img/feature-gallery-icons/inventory-unit.svg"
                    className="img-fluid"
                    alt="bank reconcile image"
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
                  <span className="col-blue">
                    Inventory Management Software
                  </span>{" "}
                  also looked at
                </h2>

                <div className="features__suggestion_container__links">
                  <a href={link + "/all-features"} className="col-blue">
                    All features
                  </a>
                  <a
                    href={link + "/multi-user-accounting-software"}
                    className="border-vertical col-blue"
                  >
                    Share Data
                  </a>
                  <a
                    href={link + "/multi-currency-accounting-software"}
                    className="border-vertical col-blue"
                  >
                    Multi-Currency
                  </a>
                  <a
                    href={link + "/invoice-software"}
                    className="border-vertical col-blue"
                  >
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
                        <span className="me-2 collapse-icon collapse-icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse-icon collapse-icon--close">
                          <MdRemove />
                        </span>
                        What does inventory management software do?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        An inventory management software allows enterprises to
                        keep track of the goods at every level of the supply
                        chain of the business. It can help to optimise every
                        process of the product journey from the placement of
                        order with the vendor to the delivery of the order to
                        the customer.
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
                        What makes Giddh different from other inventory
                        management software in the market?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        <p>
                          Giddh offers the best inventory management software in
                          India that can accurately track the goods, reduce
                          wastage and provide trend analysis to help make better
                          investment decisions. Giddh is very particular about
                          its transparency to the users, and this can have a
                          huge impact on the bottom line of the organisation or
                          enterprise.
                        </p>
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
                        Why do we need an inventory management system?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        An inventory is one of the most important assets of a
                        business on the balance sheet. It is also a crucial part
                        of the functions that keep a business going. Hence, a
                        business should invest in nothing but the best inventory
                        management software to ensure that the business stays
                        profitable while delivering more for the customers.
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
                        What are the reasons behind using an inventory
                        management system?
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
                          Some of the reasons behind using an inventory
                          management system are
                        </p>
                        <ul>
                          <li>
                            You can track your inventory levels at all times and
                            place your orders whenever you see them falling low.
                          </li>
                          <li>
                            They can assist you to set up automatic emails that
                            update your customers about every step of their
                            order process.
                          </li>
                          <li>
                            Enables you to have an accurate idea of when the
                            order leaves from the supplier and reaches the
                            customer.
                          </li>
                          <li>
                            Offers a fully customised and visual dashboard that
                            can be a game-changer for your inventory management
                            processes.
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
                        What are the benefits of inventory management?
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
                          Inventory management lays down the foundation to
                          managing the supply and demand within a business.
                          Other benefits of using inventory management include.
                        </p>
                        <ul>
                          <li>
                            Helps you save your company expenses as you can
                            manage the costs of stocking your inventory,
                            storage, and handling.
                          </li>
                          <li>
                            You can fulfill customer demands and prevent them
                            from back ordering the items or switching to a
                            different supplier.
                          </li>
                          <li>
                            Keeps your warehouse organised, which in turn,
                            speeds up order fulfillment and prevents
                            miscommunications and loss of productivity.
                          </li>
                          <li>
                            With accurate record-keeping, barcode scanners,
                            integrated data storage and analysis systems,
                            inventory management operations can become more
                            efficient and productive.
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
                        <span className="me-2 collapse-icon collapse-icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse-icon collapse-icon--close">
                          <MdRemove />
                        </span>
                        Can I manage inventory in Giddh?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        Yes, you can. Giddh offers inventory management for
                        every kind of business be it a small manufacturer or
                        reseller or a large organisation with operations across
                        multiple locations. It helps you stay on top of your
                        supply chain and ensure that your business is making
                        more profits while reducing wastage. It also helps you
                        track your inventory with minimal efforts. If you are
                        looking for the best inventory management software in
                        India, Giddh is your best bet.
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
                        <span className="me-2 collapse-icon collapse-icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse-icon collapse-icon--close">
                          <MdRemove />
                        </span>
                        Can I manage inventory in a different group or category?
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        Giddh’s inventory management software comes with default
                        groups and accounts. You can also manage your inventory
                        by creating different groups and accounts as is
                        necessary for your business. However, you need to reach
                        out to our customer support team for assistance in
                        creating main groups. A new group can always be created
                        under the main groups only.
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
export default inventoryManagementSoftware;
