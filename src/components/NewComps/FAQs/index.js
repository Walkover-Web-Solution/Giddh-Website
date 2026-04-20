import { useState } from "react";
import { MdRemove, MdKeyboardArrowDown } from "react-icons/md";
import styles from "./FAQs.module.scss";

function FaqAccordion({ faqs, openIndex, toggle, idPrefix = "" }) {
  return (
    <div>
      {faqs?.map((faq, index) => {
        const isOpen = openIndex === `${idPrefix}${index}`;
        return (
          <div
            className={`accordion-item px-3 py-2 rounded-2 m-1 ${
              isOpen ? "bg-light" : ""
            }`}
            key={index}
          >
            <h3 className="border-none" id={`heading${idPrefix}${index}`}>
              <button
                className={`accordion-button ${
                  !isOpen ? "collapsed" : ""
                } cursor-pointer border-none d-flex align-items-center font-deep bg-transparent gap-2 ${
                  styles.accordionButton
                }`}
                type="button"
                onClick={() => toggle(`${idPrefix}${index}`)}
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
                <div className="font-600">{faq.question}</div>
              </button>
            </h3>
            <div
              id={`collapse${idPrefix}${index}`}
              className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
            >
              <div className="font-deep">
                <div className="ps-5 font-dark-light font-sm">{faq.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FAQs({ faqs, heading, layout = "row" }) {
  const [openIndex, setOpenIndex] = useState("0");
  const isColumn = layout === "column";

  if (!faqs?.length) return null;

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="container py-4">
      <div className={`d-flex ${isColumn ? "flex-column" : "flex-lg-row flex-column"}`}>
        <div className={isColumn ? "w-100" : "col-lg-4 col-12"}>
          <h2 className={`font-sub-heading font-dark garmond-font mb-3 ${!isColumn ? "col-lg-2 col-12" : ""}`}>
            {heading || "Frequently Asked Questions"}
          </h2>
        </div>
        <div className={isColumn ? "w-100" : ""}>
          <FaqAccordion
            faqs={faqs}
            openIndex={openIndex}
            toggle={toggle}
          />
        </div>
      </div>
    </section>
  );
}
