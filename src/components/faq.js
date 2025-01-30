import { MdRemove, MdAdd } from "react-icons/md";
import { useEffect, useState } from "react";
import Head from "next/head";

const Faqs = ({ faq }) => {
  const [faqSchema, setFaqSchema] = useState(null);

  useEffect(() => {
    if (faq) {
      const allQuestionAnswer = faq.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      }));
      setFaqSchema({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: allQuestionAnswer,
      });
    }
  }, [faq]);
  return (
    <>
      {faqSchema && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </Head>
      )}
      <section className="container-fluid faqs">
        <div className="container">
          <div className="row">
            <div className="col-12 px-0">
              <div className="accordion" id="accordionAllFeatures">
                {/*============ Accordion #1 ===============*/}
                <h3 className="fw-bold col-primary ps-3">FAQs</h3>
                {faq?.map((faq, index) => (
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
                        <div dangerouslySetInnerHTML={{ __html: faq.question }} />
                      </button>
                    </p>
                    <div
                      id={"collapse" + index}
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                      </div>
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
