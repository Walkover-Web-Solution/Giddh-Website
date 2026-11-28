import {
  MdArrowForward,
  MdAutoAwesome,
  MdCancel,
  MdEmojiEvents,
} from "react-icons/md";

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

export default function ExamResult({
  allPassed,
  overall,
  showRetakeEligibleDate,
  nextAttemptAt,
  canAttempt,
  certificatePayload,
  learner,
  moduleScores,
  isSubmitting,
  compData,
  onCompleted,
  onRetakeFailed,
}) {
  return (
    <div className="d-flex flex-column align-items-center gap-4 text-center">
      <div className="d-flex flex-column align-items-center gap-3">
        <div
          className={`${styles.statusIcon} ${
            allPassed ? styles.statusIconCelebrate : styles.statusIconFail
          } rounded-circle d-inline-flex align-items-center justify-content-center ${
            allPassed
              ? "bg-light-green font-success"
              : "bg-baby-pink font-danger"
          }`}
        >
          {allPassed ? <MdEmojiEvents size={28} /> : <MdCancel size={32} />}
        </div>
        {allPassed && compData?.resultPassedEyebrow ? (
          <p
            className={`font-xs font-600 font-success m-0 d-inline-flex align-items-center gap-2 ${styles.congratsEyebrow}`}
          >
            <MdAutoAwesome size={14} aria-hidden="true" />
            <span>{compData.resultPassedEyebrow}</span>
          </p>
        ) : null}
        <h2
          className={`font-lg font-600 lh-sm m-0 ${
            allPassed ? "font-primary" : "font-danger"
          }`}
        >
          {allPassed
            ? compData?.resultPassedTitle
            : compData?.resultFailedTitle}
        </h2>
      </div>

      {allPassed ? (
        <div className="d-flex flex-column align-items-center gap-3 col-lg-10">
          {Number.isFinite(overall.percentage) ? (
            <p className="font-md font-600 font-primary m-0">
              {formatCopy(compData?.resultScore, {
                percent: overall.percentage,
              })}
            </p>
          ) : null}
          {compData?.resultPassedSub ? (
            <p className="font-sm font-slate-grey m-0 lh-lg">
              {compData.resultPassedSub}
            </p>
          ) : null}
          {showRetakeEligibleDate && compData?.resultRetakeEligible ? (
            <p className="font-sm font-600 font-primary m-0">
              {formatCopy(compData.resultRetakeEligible, {
                date: nextAttemptAt,
              })}
            </p>
          ) : null}
          {compData?.certificateIssuerName ? (
            <p className="font-xs font-grey-deep fst-italic m-0">
              {compData?.certificateIssuerLabel} {compData.certificateIssuerName}
            </p>
          ) : null}
        </div>
      ) : (
        <div
          className={`${styles.failPanel} rounded-3 p-4 d-flex flex-column align-items-center gap-3 col-lg-10`}
        >
          {Number.isFinite(overall.percentage) ? (
            <p className="font-md font-600 font-danger m-0">
              {formatCopy(compData?.resultScore, {
                percent: overall.percentage,
              })}
            </p>
          ) : null}
          {canAttempt === false && compData?.resultFailedLockedSub ? (
            <p className="font-sm font-slate-grey m-0 lh-lg">
              {compData.resultFailedLockedSub}
            </p>
          ) : compData?.resultFailedSub ? (
            <p className="font-sm font-slate-grey m-0 lh-lg">
              {compData.resultFailedSub}
            </p>
          ) : null}
          {showRetakeEligibleDate && compData?.resultRetakeEligible ? (
            <p className="font-sm font-600 font-danger m-0">
              {formatCopy(compData.resultRetakeEligible, {
                date: nextAttemptAt,
              })}
            </p>
          ) : canAttempt !== false && compData?.resultRetakeNow ? (
            <p className="font-sm font-600 font-primary m-0">
              {compData.resultRetakeNow}
            </p>
          ) : null}
        </div>
      )}

      {allPassed ? (
        <div className="d-flex flex-column flex-sm-row gap-2">
          <button
            type="button"
            className="btn btn-primary rounded-1 px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
            disabled={!certificatePayload && isSubmitting}
            onClick={() =>
              onCompleted?.(
                { certificate: certificatePayload, learner },
                moduleScores,
                "pdf"
              )
            }
          >
            {compData?.viewCertificateText}
            <MdArrowForward size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="btn btn-primary rounded-1 px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
            disabled={!certificatePayload && isSubmitting}
            onClick={() =>
              onCompleted?.(
                { certificate: certificatePayload, learner },
                moduleScores,
                "image"
              )
            }
          >
            {compData?.downloadShareImageText}
            <MdArrowForward size={16} aria-hidden="true" />
          </button>
        </div>
      ) : canAttempt === false ? null : (
        <button
          type="button"
          className="btn btn-primary rounded-1 px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
          onClick={onRetakeFailed}
        >
          {compData?.retakeExamText}
          <MdArrowForward size={16} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
