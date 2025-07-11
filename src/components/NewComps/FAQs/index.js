import { MdRemove, MdAdd } from "react-icons/md";
import { useEffect, useState } from "react";
import Head from "next/head";
import DOMPurify from "dompurify";

export default function FAQs({ faq }) {
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
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(JSON.stringify(faqSchema)),
            }}
          />
        </Head>
      )}
      <section className="container-fluid faqs">
        <div className="container d-flex flex-lg-row flex-column">
          <h2 className="fw-bold subheading col-primary col-lg-2 col-12">Frequently Asked Questions</h2>
          <div className="col-lg-10 col-12">
            <div className="col-12 px-0">
              <div className="accordion" id="accordionAllFeatures">
                {faq?.map((faq, index) => (
                  <div className="accordion-item" key={index}>
                    <h3 className="accordion-header" id={"heading" + index}>
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
                        <div
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(faq.question),
                          }}
                        />
                      </button>
                    </h3>
                    <div
                      id={"collapse" + index}
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div className="accordion-body">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(faq.answer),
                          }}
                        />
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
}
