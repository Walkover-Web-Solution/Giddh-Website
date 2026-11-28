import {
  MdAccessTime,
  MdArrowForward,
  MdAutoAwesome,
  MdCancel,
  MdCheck,
  MdEmojiEvents,
  MdInfoOutline,
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

function getOptionClassName(index, feedback, selected, correctIndex) {
  const base =
    "btn w-100 text-start border rounded-2 px-3 py-3 font-sm font-primary";
  if (feedback) {
    if (index === correctIndex) {
      return `${base} border-success bg-light-green`;
    }
    if (index === selected) {
      return `${base} border-danger bg-baby-pink`;
    }
    return `${base} border-light-gray bg-white`;
  }
  if (selected === index) {
    return `${base} border-primary bg-extra-light-blue`;
  }
  return `${base} border-light-gray bg-white`;
}

export default function ExamContent({
  phase,
  modules,
  moduleIndex,
  questionIndex,
  currentModule,
  currentQuestion,
  totalInModule,
  showInstructions,
  onShowInstructions,
  onStartModule,
  timerLabel,
  initialResult,
  compData,
  feedback,
  selected,
  onSelectOption,
  onNextQuestion,
  onContinueModule,
  onRetakeFailed,
  isSubmitting,
  allPassed,
  overall,
  showRetakeEligibleDate,
  nextAttemptAt,
  canAttempt,
  certificatePayload,
  learner,
  moduleScores,
  onCompleted,
}) {
  const nextModule = modules[moduleIndex + 1];

  return (
    <>
      {phase === "quiz" && (
        <div className="d-flex flex-column gap-3">
          <div className="d-flex align-items-start justify-content-between gap-3 pe-4">
            <div className="d-flex flex-column gap-2">
              {initialResult?.attemptNumber && compData?.attemptBadge ? (
                <span
                  className={`font-xs font-600 m-0 ${
                    initialResult?.isFinalAttempt
                      ? "font-danger"
                      : "font-grey-deep"
                  }`}
                >
                  {initialResult?.isFinalAttempt &&
                  compData?.finalAttemptBadge
                    ? compData.finalAttemptBadge
                    : formatCopy(compData.attemptBadge, {
                        current: initialResult.attemptNumber,
                        total: initialResult.totalAttempts,
                      })}
                </span>
              ) : null}
              <p className="font-xs font-600 font-grey-deep m-0">
                {formatCopy(compData?.moduleHeader, {
                  current: moduleIndex + 1,
                  total: modules.length,
                  title: currentModule.title,
                })}
              </p>
            </div>
            <div className="d-flex align-items-center gap-3">
              {!showInstructions && (
                <span className="d-inline-flex align-items-center gap-2 font-xs font-600 font-grey-deep text-nowrap">
                  <MdAccessTime size={16} aria-hidden="true" />
                  {timerLabel}
                </span>
              )}
              <button
                type="button"
                className="btn btn-link p-0 font-xs font-600"
                onClick={onShowInstructions}
              >
                <span className="d-inline-flex align-items-center gap-1">
                  <MdInfoOutline size={16} />
                  {compData?.instructionsLinkLabel}
                </span>
              </button>
            </div>
          </div>

          {!showInstructions && (
            <div
              className={styles.progressTrack}
              style={{ "--segments": totalInModule }}
            >
              {Array.from({ length: totalInModule }).map((_, index) => {
                let className = styles.progressSeg;
                if (index < questionIndex) {
                  className += ` ${styles.progressSegDone}`;
                } else if (index === questionIndex) {
                  className += ` ${styles.progressSegCurrent}`;
                }
                return <span key={index} className={className} />;
              })}
            </div>
          )}

          {showInstructions && (
            <div className="border border-light-gray rounded-3 p-4 bg-extra-light-blue d-flex flex-column gap-3">
              <h3 className="font-sm font-600 font-primary m-0">
                {compData?.instructionsTitle}
              </h3>
              {initialResult?.isFinalAttempt &&
              compData?.finalAttemptInstructionsNote ? (
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
                className="btn btn-primary rounded-1 px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
                onClick={onStartModule}
              >
                {compData?.startModuleText}
              </button>
            </div>
          )}

          {!showInstructions && (
            <>
              <p className="font-xs font-grey-deep m-0">
                {formatCopy(compData?.questionMeta, {
                  current: questionIndex + 1,
                  total: totalInModule,
                })}
              </p>
              <h3 className="font-md font-600 font-primary lh-sm m-0">
                {currentQuestion.question}
              </h3>

              <div className="d-flex flex-column gap-2">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={`${currentQuestion.id}-${index}`}
                    type="button"
                    className={getOptionClassName(
                      index,
                      feedback,
                      selected,
                      currentQuestion.correctIndex
                    )}
                    disabled={Boolean(feedback)}
                    onClick={() => onSelectOption(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {feedback && (
                <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3">
                  <div className="d-flex flex-column gap-1">
                    <p
                      className={`font-sm font-600 m-0 ${
                        feedback.correct ? "font-success" : "font-danger"
                      }`}
                    >
                      {feedback.title}
                    </p>
                    <p className="font-xs font-grey-deep m-0">
                      {feedback.note}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary-outline rounded-1 px-3 py-2 d-inline-flex align-items-center gap-2 font-sm font-600"
                    onClick={onNextQuestion}
                    disabled={isSubmitting}
                  >
                    {questionIndex >= totalInModule - 1
                      ? compData?.finishText
                      : compData?.nextText}
                    <MdArrowForward size={16} aria-hidden="true" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {phase === "gate" && (
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
              total: modules.length,
              title: nextModule?.title,
            })}
          </p>
          <button
            type="button"
            className="btn btn-primary rounded-1 px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
            onClick={onContinueModule}
          >
            {formatCopy(compData?.continueModuleText, {
              next: moduleIndex + 2,
            })}
            <MdArrowForward size={16} aria-hidden="true" />
          </button>
        </div>
      )}

      {phase === "result" && (
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
              {allPassed ? (
                <MdEmojiEvents size={28} />
              ) : (
                <MdCancel size={32} />
              )}
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
                  {compData?.certificateIssuerLabel}{" "}
                  {compData.certificateIssuerName}
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
      )}
    </>
  );
}
