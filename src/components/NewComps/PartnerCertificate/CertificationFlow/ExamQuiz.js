import { MdAccessTime, MdArrowForward, MdInfoOutline } from "react-icons/md";

import ExamInstructions from "./ExamInstructions";
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

export default function ExamQuiz({
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
  isSubmitting,
}) {
  return (
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
              {initialResult?.isFinalAttempt && compData?.finalAttemptBadge
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
          style={{
            gridTemplateColumns: `repeat(${totalInModule}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: totalInModule }).map((_, index) => (
            <span
              key={index}
              className={`${styles.progressSeg} ${
                index < questionIndex
                  ? styles.progressSegDone
                  : index === questionIndex
                    ? styles.progressSegCurrent
                    : ""
              }`}
            />
          ))}
        </div>
      )}

      {showInstructions ? (
        <ExamInstructions
          compData={compData}
          isFinalAttempt={initialResult?.isFinalAttempt}
          onStartModule={onStartModule}
        />
      ) : (
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
                <p className="font-xs font-grey-deep m-0">{feedback.note}</p>
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
  );
}
