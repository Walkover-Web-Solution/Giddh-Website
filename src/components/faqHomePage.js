import { MdRemove, MdAdd } from "react-icons/md";

const faqHomePage = () => {
  return (
    <>
      <section className="container-fluid features__accordion_container">
        <div className="container">
          <div className="row">
            <div className="col-12 px-0">
              <div className="accordion" id="accordionAllFeatures">
                {/*============ Accordion #1 ===============*/}
                <h3 className="fw-bold col-primary ps-3">FAQs</h3>
                <div className="accordion-item">
                  <p className="accordion-header" id="headingOne">
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
                      How does this accounting software help in managing my
                      finances and bookkeeping?
                    </button>
                  </p>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      Accounting software streamlines financial tasks, enhancing
                      accuracy, and saving time by automating processes like
                      invoicing, reporting, and reconciliation. It provides
                      real-time insights, aiding informed decision-making and
                      compliance with financial regulations, ultimately
                      fostering business growth.
                    </div>
                  </div>
                </div>
                {/*============ Accordion #2 ===============*/}
                <div className="accordion-item">
                  <p className="accordion-header" id="headingTwo">
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
                      How secure is my financial data on online accounting
                      software?
                    </button>
                  </p>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      Giddh accounting software provides IP security that
                      restricts access to authorized IP addresses, safeguarding
                      sensitive financial data. By ensuring compliance,
                      minimizing breach risks, and offering enhanced control
                      over system access, it significantly fortifies overall
                      security and monitoring measures.
                    </div>
                  </div>
                </div>
                {/*============ Accordion #3 ===============*/}
                <div className="accordion-item">
                  <p className="accordion-header" id="headingThree">
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
                      Is the accounting software compliant with tax regulations
                      and reporting standards?
                    </button>
                  </p>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      Yes, Giddh software complies with tax regulations and
                      reporting standards, offering features that facilitate
                      accurate tax calculations, generating reports aligned with
                      regulatory requirements, ensuring adherence to tax laws
                      for seamless tax filing and compliance.
                    </div>
                  </div>
                </div>
                {/*============ Accordion #4 ===============*/}
                <div className="accordion-item">
                  <p className="accordion-header" id="headingFour">
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
                      Is it possible for multiple users to access the accounting
                      software simultaneously?
                    </button>
                  </p>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      Yes, Giddh accounting software allows multiple users to
                      access it simultaneously, facilitating collaborative work
                      and real-time updates across the platform for enhanced
                      efficiency and teamwork.
                    </div>
                  </div>
                </div>
                {/*============ Accordion #5 ===============*/}
                <div className="accordion-item">
                  <p className="accordion-header" id="headingFive">
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
                      Can I access the accounting software on my mobile device?
                    </button>
                  </p>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      Yes, Giddh offers a mobile app for both iOS and Android
                      devices. With the mobile app, you can create entries,
                      access your financial data on-the-go, manage invoices,
                      track expenses, and more. You can manage the financial
                      data anytime, anywhere from your mobile device.
                    </div>
                  </div>
                </div>
                {/*============ Accordion #6 ===============*/}
                <div className="accordion-item">
                  <p className="accordion-header" id="headingSix">
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
                      Does the accounting software have the capability to
                      integrate with Shopify?
                    </button>
                  </p>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionAllFeatures"
                  >
                    <div className="accordion-body">
                      Yes, Giddh accounting software is capable of integrating
                      seamlessly with Shopify, allowing for efficient data
                      synchronization and streamlined processes between the two
                      platforms.
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

export default faqHomePage;
