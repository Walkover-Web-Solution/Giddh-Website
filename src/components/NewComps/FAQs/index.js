import { useState } from "react";
import { MdRemove, MdKeyboardArrowDown } from "react-icons/md";
import styles from "./FAQs.module.scss";

export default function FAQs({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);
  if (!faqs?.length) return null;
  const toggle = (index) => {
    setOpenIndex(index);
  };
  return (
    <>
      <section className="container py-5">
        <div className="d-flex flex-lg-column flex-column ">
        
            <h2 className="font-sub-heading font-dark garmond-font px-2 text-center">
              Frequently Asked Questions
            </h2>
          
          <div className="w-100 align-self-stretch">
            <div className="py-4 w-100" id="accordionAllFeatures">
              {faqs?.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    className={`accordion-item px-3 py-2 rounded-2 m-1 w-100 ${
                      isOpen ? "bg-light" : ""
                    } ${styles.faqItem}`}
                    key={index}
                  >
                    <h3 className="border-none" id={"heading" + index}>
                      <button
                        className={`accordion-button ${
                          !isOpen ? "collapsed" : ""
                        } cursor-pointer border-none d-flex align-items-center font-deep bg-transparent gap-2 ${
                          styles.accordionButton
                        }`}
                        type="button"
                        onClick={() => toggle(index)}
                      >
                        <span
                          className={`me-2 rounded-2 d-inline-flex align-items-center justify-content-center ${styles.collapseIcon}`}
                        >
                          {isOpen ? (
                            <MdRemove className="font-lg font-primary" />
                          ) : (
                            <MdKeyboardArrowDown className="font-lg font-primary" />
                          )}
                        </span>
                        <div className="font-600 text-start flex-grow-1 min-w-0">
                          {faq.question}
                        </div>
                      </button>
                    </h3>
                    <div
                      id={"collapse" + index}
                      className={`accordion-collapse collapse w-100 ${
                        isOpen ? "show" : ""
                      }`}
                    >
                      <div
                        className={`ps-5 pb-2 pe-2 font-dark-light font-sm ${styles.faqAnswer}`}
                      >
                        {faq.answer}
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
