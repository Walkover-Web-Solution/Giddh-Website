import styles from "./CertificationFlow.module.scss";

export default function ExamInstructions({
  compData,
  isFinalAttempt,
  onStartModule,
}) {
  return (
    <div className="border border-light-gray rounded-3 p-4 bg-extra-light-blue d-flex flex-column gap-3">
      <h3 className="font-sm font-600 font-primary m-0">
        {compData?.instructionsTitle}
      </h3>
      {isFinalAttempt && compData?.finalAttemptInstructionsNote ? (
        <p className="font-sm font-600 font-danger m-0 lh-lg">
          {compData.finalAttemptInstructionsNote}
        </p>
      ) : null}
      <ul
        className={`${styles.instructionList} m-0 ps-3 d-flex flex-column gap-2`}
      >
        {compData?.instructions?.map((item) => (
          <li key={item} className="font-sm font-slate-grey">
            {item}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="btn btn-primary rounded-3 px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
        onClick={onStartModule}
      >
        {compData?.startModuleText}
      </button>
    </div>
  );
}
