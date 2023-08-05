import { MdRemove, MdAdd } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { usePathname } from "next/navigation";

const multiUserAccountingSoftware = () => {
  // To get active route
  const pathname = usePathname();
  const startPath = pathname.split("/");
  let isIndia = startPath[1] !== "ae" && startPath[1] !== "uk";
  let isAE = startPath[1] === "ae";
  let isUK = startPath[1] === "uk";
  return (
    <>
      <section className="container-fluid">
        <div className="container features__heading_container">
          <div className="row">
            <div className="col-lg-7 order-lg-0 order-1">
              <h2 className="heading col-primary c-fw-600 mb-4">
                Work better together by sharing business insights
              </h2>
              <p className="col-grey c-fs-3 mb-5">
                Allow external accountants & internal team members across
                different departments to work together seamlessly.
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
                <img
                  src="/img/feature-gallery-icons/share-banner.svg"
                  width="90%"
                />
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
                Smart collaboration across all departments
              </h3>
              <p className="c-fs-4 mb-5">
                Multi user accounting software enables business owners &
                accountants to collaborate and make the best of their numbers.
                With real time sharing of financial data, you can derive
                meaningful insight and run your business with efficiency.
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
                  Always be on the driver’s seat.
                </h4>
                <ul>
                  <li>
                    <span className="col-primary ">
                      <GiCheckMark />
                    </span>{" "}
                    Profit/Loss Statement, Balance Sheet, General Ledger and
                    Trial Balance.
                  </li>
                  <li>
                    <span className="col-primary ">
                      <GiCheckMark />
                    </span>
                    Drill down the reports by date, financial year, or even
                    project type.
                  </li>
                  <li>
                    <span className="col-primary ">
                      <GiCheckMark />
                    </span>
                    Export reports in any of the two supported formats: PDF or
                    Excel.
                  </li>
                  <li>
                    <span className="col-primary ">
                      <GiCheckMark />
                    </span>
                    Invite your accountant, partners or investors.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 __image-alignment">
              <figure>
                <img
                  src="/img/feature-gallery-icons/share-admin.svg"
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
                  Collaborate across multiple departments
                </h4>
                <p className="">
                  Give your staff specific access to the different accounting
                  modules they need to do their job. With multi-user accounting,
                  your sales manager will be happy with real time invoice
                  sharing and your accounting staff will always be on top of the
                  tax filing.And when it matters the most, you can get your
                  advisor on board to speed up the process of decision making.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 __image-alignment">
              <figure>
                <img
                  src={isIndia || isAE ? '/img/feature-gallery-icons/share-collaborate.svg' : '/img/feature-gallery-icons/layer-uk.svg'}
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
                  Avoid unnecessary confusion with ledger sharing
                </h4>
                <p className="">
                  Giddh multi-user accounting software lets you share your
                  ledger with view access to external accounting team or client
                  so that all the discrepancies can be avoided. Additionally,
                  witness the magic of magic link in ledger sharing. Magic link
                  comes with the validity of 24 hours, after which your shared
                  ledger will not be accessible.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 __image-alignment">
              <figure>
                <img
                  src="/img/feature-gallery-icons/share-cash.svg"
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
                <span className="col-blue">Multi User Accounting Software</span>{" "}
                also looked at
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
      <section className="container-fluid features__accordion_container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="accordion" id="accordionAllFeatures">
                {/*============ Accordion #1 ===============*/}
                <h2 className="fw-bold col-primary ">FAQs</h2>
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
                      What are the benefits of using a multi-accounting
                      software?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      With Giddh’s multi-accounting software, you can easily
                      add, remove and manage access to multiple users within an
                      organization. Multi-accounting software also makes it easy
                      to create groups and share only a portion of data to
                      various departments. Its monitoring capabilities helps
                      keep track of what data is accessible to whom.
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
                      Do I need to be a techie to handle the Giddh software?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      The Giddh software has a really simple interface that can
                      be used by a layman without a technical background. The
                      cloud-based system also means that you can access the
                      software from anywhere and on any device.
                    </div>
                  </div>
                </div>
                {/*============ Accordion #3 ===============*/}

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
                      Can I provide access to the Giddh software to other team
                      members?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      The Giddh software offers collaboration options so that
                      you can work along with your team members on the software.
                      Moreover, it also gives you the power to provide
                      time-restricted access to external members such as CAs and
                      share the data with them only for a limited period of time
                      after which permissions are revoked.
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
                      Is the Giddh software ideal for all types of businesses?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      Giddh is especially ideal for small and medium enterprises
                      (SMEs) thanks to its affordable pricing and easy to use
                      interface that quickly helps owners get familiarised with
                      the user interface.
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
                      How does a multi-accounting software work?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      With Giddh’s multi-accounting software, you can easily
                      add, remove and manage access to multiple users within an
                      organization. Multi-accounting software also makes it easy
                      to create groups and share only a portion of data to
                      various departments. Its monitoring capabilities helps
                      keep track of what data is accessible to whom.
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
export default multiUserAccountingSoftware;
