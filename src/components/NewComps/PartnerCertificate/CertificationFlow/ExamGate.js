import { MdArrowForward, MdCheck } from "react-icons/md";

import styles from "./CertificationFlow.module.scss";

function formatCopy(template, values) {
  if (!template) {
    return template;
  }
  return Object.keys(values).reduce(
    (text, key) => text.replaceAll(`{${key}}`, String(values[key])),
    template
  );
}

export default function ExamGate({
  moduleIndex,
  modulesLength,
  nextModuleTitle,
  compData,
  onContinueModule,
}) {
  return (
    <div className="d-flex flex-column align-items-center gap-3 text-center">
      <div
        className={`${styles.statusIcon} rounded-circle d-inline-flex align-items-center justify-content-center bg-light-green font-success`}
      >
        <MdCheck size={24} />
      </div>
      <h2 className="font-lg font-600 font-primary lh-sm m-0">
        {formatCopy(compData?.gatePassedTitle, {
          current: moduleIndex + 1,
        })}
      </h2>
      <p className="font-sm font-grey-deep m-0 col-lg-10">
        {formatCopy(compData?.gatePassedSub, {
          next: moduleIndex + 2,
          total: modulesLength,
          title: nextModuleTitle,
        })}
      </p>
      <button
        type="button"
        className="btn btn-primary rounded-3 px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
        onClick={onContinueModule}
      >
        {formatCopy(compData?.continueModuleText, {
          next: moduleIndex + 2,
        })}
        <MdArrowForward size={16} aria-hidden="true" />
      </button>
    </div>
  );
}
