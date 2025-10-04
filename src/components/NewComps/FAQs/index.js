import { useState } from "react";
import { MdRemove, MdKeyboardArrowDown } from "react-icons/md";
import styles from "./FAQs.module.scss";
import Head from "next/head";

export default function FAQs({ faqs }) {
  if (faqs?.length === 0) return null;
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (index) => {
    setOpenIndex(index);
  };

  const allQuestionAnswer = faqs.map((faq) => ({
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
  }


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
      <section className="container py-5">
        <div className="d-flex flex-lg-row flex-column">
          <div className="col-lg-4 col-12">
            <h2 className="font-sub-heading font-dark garmond-font col-lg-2 col-12">
              Frequently Asked Questions
            </h2>
          </div>
          <div>
            <div id="accordionAllFeatures">
              {faqs?.map((faq, index) => {
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
                          } cursor-pointer border-none d-flex align-items-center font-deep bg-transparent gap-2 ${styles.accordionButton}`}
                        type="button"
                        onClick={() => toggle(index)}
                      >
                        <span
                          className={`me-2 rounded-2 d-inline-flex align-items-center justify-content-center ${styles.collapseIcon}`}
                        >
                          {isOpen ? (
                            <MdRemove className="font-lg font-primary" />
                          ) : (
                            <MdKeyboardArrowDown
                              className="font-lg font-primary"
                            />
                          )}
                        </span>
                        <div className="font-600">{faq.question}</div>
                      </button>
                    </h3>
                    <div
                      id={"collapse" + index}
                      className={`accordion-collapse collapse ${isOpen ? "show" : ""
                        }`}
                    >
                      <div
                        className="font-deep"
                      >
                        <div className="ps-5 font-dark-light font-sm">
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
        <div className="d-flex flex-column justify-content-between align-items-center pt-5">
          <p className="font-sub-heading garmond-font font-dark">Still have questions?</p>
          <button className="btn btn-primary-outline" onClick={() => window.location.href = "/contact-us"}>Contact Us</button>
        </div>
      </section>
    </>
  );
}

