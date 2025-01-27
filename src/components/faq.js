import { MdRemove, MdAdd } from "react-icons/md";

const Faqs = ({ faq }) => {
  return (
    <>
      <section className="container-fluid features__accordion_container">
        <div className="container">
          <div className="row">
            <div className="col-12 px-0">
              <div className="accordion" id="accordionAllFeatures">
                {/*============ Accordion #1 ===============*/}
                <h3 className="fw-bold col-primary ps-3">FAQs</h3>
                {faq?.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <p className="accordion-header" id={"heading" + index}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#collapse" + index}
                        aria-expanded="false"
                        aria-controls={"collapse" + index}
                      >
                        <span className="me-2 collapse-icon collapse-icon--open">
                          <MdAdd />
                        </span>
                        <span className="me-2 collapse-icon collapse-icon--close">
                          <MdRemove />
                        </span>
                        {item.question}
                      </button>
                    </p>
                    <div
                      id={"collapse" + index}
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">{item?.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
