import { useState } from "react";

import {
  MdCheckCircleOutline,
  MdChevronRight,
  MdKeyboardArrowDown,
  MdPlayCircleOutline,
  MdReceiptLong,
  MdWorkspacePremium,
} from "react-icons/md";

const MODULE_ICONS = {
  walkthrough: MdPlayCircleOutline,
  compliance: MdReceiptLong,
  exam: MdWorkspacePremium,
};

export default function ModulesSection({ compData }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  if (!compData?.modules?.length) {
    return null;
  }

  const handleToggle = (index) => {
    setExpandedIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="modules" className="py-5 bg-extra-light-blue outfit-font">
      <div className="container px-4 py-lg-4 d-flex flex-column gap-5">
        <div className="row align-items-end justify-content-between g-4">
          <div className="col-12 col-lg-5 d-flex flex-column gap-3">
            {compData?.eyebrow && (
              <p className="font-xs font-600 font-grey-deep m-0">
                {compData?.eyebrow}
              </p>
            )}
            <h2 className="heading font-600 lh-sm m-0">
              <span className="font-primary d-block">
                {compData?.headingPrimary}
              </span>
              {compData?.headingAccent && (
                <span className="font-blue opacity-75 d-block">
                  {compData?.headingAccent}
                </span>
              )}
            </h2>
          </div>

          {compData?.description && (
            <div className="col-12 col-lg-6">
              <p className="font-sm font-slate-grey m-0 lh-lg">
                {compData?.description}
              </p>
            </div>
          )}
        </div>

        <div className="d-flex flex-column">
          {compData.modules.map((moduleItem, index) => {
            const isExpanded = expandedIndex === index;
            const IconComponent = MODULE_ICONS[moduleItem?.iconKey];

            return (
              <div
                key={index}
                className={`border-top border-light-gray ${
                  index === compData.modules.length - 1 ? "border-bottom" : ""
                } ${isExpanded ? "bg-white bg-opacity-75" : ""}`}
              >
                <button
                  type="button"
                  className="w-100 bg-transparent border-0 text-start py-4 px-2 px-md-3 d-flex align-items-start align-items-md-center justify-content-between gap-3 cursor-pointer"
                  aria-expanded={isExpanded}
                  aria-controls={`partner-module-panel-${index}`}
                  onClick={() => handleToggle(index)}
                >
                  <div className="d-flex align-items-start align-items-md-center gap-3 gap-md-4 flex-grow-1">
                    <span className="font-xs font-600 font-grey-deep">
                      {moduleItem?.number}
                    </span>

                    {IconComponent && (
                      <span
                        className="rounded-circle d-inline-flex align-items-center justify-content-center bg-white border border-light-gray p-2"
                        aria-hidden="true"
                      >
                        <IconComponent
                          size={20}
                          className="font-blue opacity-75"
                        />
                      </span>
                    )}

                    <div className="flex-grow-1 d-flex flex-column gap-1">
                      <h3 className="font-rg font-600 font-primary m-0">
                        {moduleItem?.title}
                      </h3>
                      <p className="font-sm font-slate-grey m-0">
                        {moduleItem?.summary}
                      </p>
                      {moduleItem?.meta && (
                        <span className="font-xs font-grey-deep">
                          {moduleItem?.meta}
                        </span>
                      )}
                    </div>
                  </div>

                  <span
                    className="d-inline-flex align-items-center justify-content-center font-grey-deep"
                    aria-hidden="true"
                  >
                    {isExpanded ? (
                      <MdKeyboardArrowDown size={20} />
                    ) : (
                      <MdChevronRight size={20} />
                    )}
                  </span>
                </button>

                {isExpanded && moduleItem?.topics?.length > 0 && (
                  <div
                    id={`partner-module-panel-${index}`}
                    className="px-3 py-3"
                  >
                    <ul className="list-unstyled row g-2 m-0">
                      {moduleItem.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="col-12 col-md-6 d-flex align-items-start gap-2 font-sm font-slate-grey"
                        >
                          <MdCheckCircleOutline
                            size={16}
                            className="font-blue opacity-75"
                            aria-hidden="true"
                          />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
