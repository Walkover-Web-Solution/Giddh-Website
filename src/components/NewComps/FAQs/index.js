import { useState } from "react";
import { MdRemove, MdKeyboardArrowDown } from "react-icons/md";
import Head from "next/head";
import styles from "./FAQs.module.scss";

export default function FAQs() {
  const data = require("./data.json");

  const allQuestionAnswer = data.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  }));
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQuestionAnswer,
  };

  const [openIndex, setOpenIndex] = useState(0);
  
  const toggle = (index) => {
    setOpenIndex(index);
  };

  return (
    <>
      {faqSchema && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema),
            }}
          />
        </Head>
      )}

      <section className={`container p-2 my-4`}>
        <div className="d-flex flex-lg-row flex-column">
          <div className="col-lg-4 col-12">
            <h2 className="subheading col-dark cactus-font col-lg-2 col-12">
              Frequently Asked Questions
            </h2>
          </div>
          <div>
            <div id="accordionAllFeatures">
              {data?.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    className={`accordion-item px-3 py-2 rounded-2 m-1 ${isOpen ? "bg-light" : ""
                      }`}
                    key={index}
                  >
                    <h3 className="border-none" id={"heading" + index}>
                      <button
                        className={`accordion-button ${!isOpen ? "collapsed" : ""
                          } cursor-pointer border-none d-flex align-items-center col-deep bg-transparent gap-2 ${styles.accordionButton}`}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={"collapse" + index}
                        onClick={() => toggle(index)}
                      >
                        <span
                          className={`me-2 rounded-2 d-inline-flex align-items-center justify-content-center ${styles.collapseIcon}`}
                        >
                          {isOpen ? (
                            <MdRemove className='c-fs-3 col-primary' />
                          ) : (
                            <MdKeyboardArrowDown
                              className='c-fs-3 col-primary'
                            />
                          )}
                        </span>

                        <div className="fw-bold">{faq.question}</div>
                      </button>
                    </h3>
                    <div
                      id={"collapse" + index}
                      className={`accordion-collapse collapse ${isOpen ? "show" : ""
                        }`}
                      aria-labelledby={"heading" + index}
                      data-bs-parent="#accordionAllFeatures"
                    >
                      <div
                        className={`col-deep`}
                      >
                        <div className="ps-5 col-dark-light c-fs-6">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

