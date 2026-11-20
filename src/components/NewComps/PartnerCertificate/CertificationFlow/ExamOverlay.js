import { useEffect, useMemo, useState } from "react";
import {
  MdAccessTime,
  MdArrowForward,
  MdCheck,
  MdClose,
  MdEmojiEvents,
  MdInfoOutline,
} from "react-icons/md";
import { MODULE_TIMER_SECONDS } from "@/utils/giddhCert/constants";
import { scoreModule, scoreOverall } from "@/utils/giddhCert/course";
import { submitResult } from "@/utils/giddhCert/clientApi";
import { showToaster } from "@/utils/signupHelpers";

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

function getResumeModuleScores(modules, overall) {
  return modules.map((moduleItem) => ({
    title: moduleItem.title,
    percent: overall.percentage,
    passed: overall.allPassed,
  }));
}

export default function ExamOverlay({
  isOpen,
  onClose,
  modules,
  learner,
  onCompleted,
  initialResult,
  compData,
}) {
  const [moduleIndex, setModuleIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [moduleScores, setModuleScores] = useState(() => {
    if (initialResult?.phase === "result") {
      return getResumeModuleScores(modules, initialResult.overall);
    }
    return [];
  });
  const [phase, setPhase] = useState(initialResult?.phase);
  const [feedback, setFeedback] = useState(null);
  const [timer, setTimer] = useState(MODULE_TIMER_SECONDS);
  const [showInstructions, setShowInstructions] = useState(
    initialResult?.phase !== "result"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tabWarning, setTabWarning] = useState(false);
  const [certificatePayload, setCertificatePayload] = useState(
    initialResult?.certificate
  );

  const currentModule = modules[moduleIndex];
  const currentQuestion = currentModule?.questions?.[questionIndex];
  const totalInModule = currentModule?.questions?.length;
  const overall = useMemo(() => {
    if (initialResult?.overall) {
      return initialResult.overall;
    }
    return scoreOverall(moduleScores);
  }, [initialResult?.overall, moduleScores]);
  const allPassed = initialResult?.overall
    ? initialResult.overall.allPassed
    : moduleScores.length > 0 && overall.allPassed;

  useEffect(() => {
    if (!isOpen || phase !== "quiz" || showInstructions) {
      return undefined;
    }
    setTimer(MODULE_TIMER_SECONDS);
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [isOpen, phase, moduleIndex, showInstructions]);

  useEffect(() => {
    if (!isOpen || phase !== "quiz" || showInstructions) {
      return undefined;
    }
    if (timer === 0) {
      const padded = [...answers];
      while (padded.length < totalInModule) {
        padded.push(null);
      }
      finishModule(padded, true);
    }
    return undefined;
  }, [timer]);

  useEffect(() => {
    if (!isOpen || phase !== "quiz") {
      return undefined;
    }
    const onVisibility = () => {
      if (document.hidden) {
        setTabWarning(true);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [isOpen, phase]);

  const timerLabel = useMemo(() => {
    const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
    const seconds = String(timer % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }, [timer]);

  if (!isOpen) {
    return null;
  }

  const resetModuleState = () => {
    setQuestionIndex(0);
    setSelected(null);
    setAnswers([]);
    setFeedback(null);
    setTimer(MODULE_TIMER_SECONDS);
  };

  const finishModule = async (finalAnswers, timedOut = false) => {
    const result = scoreModule(finalAnswers, currentModule.questions);
    const nextScores = [...moduleScores];
    nextScores[moduleIndex] = {
      ...result,
      title: currentModule.title,
      timedOut,
    };
    setModuleScores(nextScores);

    const isLast = moduleIndex >= modules.length - 1;
    if (!isLast) {
      setPhase("gate");
      return;
    }

    const overallScore = scoreOverall(nextScores);
    if (!overallScore.allPassed) {
      setPhase("result");
      return;
    }

    setIsSubmitting(true);
    try {
      const data = await submitResult({
        score: overallScore.score,
        percentage: overallScore.percentage,
        totalQuestions: overallScore.totalQuestions,
      });
      setCertificatePayload(data.certificate);
      setPhase("result");
      onCompleted?.(data, nextScores);
    } catch (error) {
      showToaster(error.message, "error", "top-center");
      setPhase("result");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSelectOption = (index) => {
    if (feedback) {
      return;
    }
    const isCorrect = index === currentQuestion.correctIndex;
    const nextAnswers = [...answers];
    nextAnswers[questionIndex] = index;
    setSelected(index);
    setAnswers(nextAnswers);
    const correctAnswer =
      currentQuestion.options[currentQuestion.correctIndex];
    setFeedback({
      correct: isCorrect,
      title: isCorrect
        ? compData?.feedbackCorrect
        : compData?.feedbackWrong,
      note: isCorrect
        ? correctAnswer
        : `${compData?.correctAnswerPrefix} ${correctAnswer}`,
    });
  };

  const handleNextQuestion = () => {
    if (questionIndex >= totalInModule - 1) {
      finishModule(answers);
      return;
    }
    setQuestionIndex((prev) => prev + 1);
    setSelected(null);
    setFeedback(null);
  };

  const handleContinueModule = () => {
    if (!moduleScores[moduleIndex].passed) {
      setPhase("quiz");
      resetModuleState();
      setShowInstructions(true);
      return;
    }
    setModuleIndex((prev) => prev + 1);
    setPhase("quiz");
    resetModuleState();
    setShowInstructions(true);
  };

  const handleRetakeFailed = () => {
    const failedIndex = moduleScores.findIndex((item) => !item.passed);
    if (failedIndex < 0) {
      return;
    }
    setModuleIndex(failedIndex);
    setModuleScores((prev) => prev.slice(0, failedIndex));
    setPhase("quiz");
    resetModuleState();
    setShowInstructions(true);
  };

  const handleDiscardAttempt = () => {
    setTabWarning(false);
    onClose({ discarded: true });
  };

  const currentScore = moduleScores[moduleIndex];
  const nextModule = modules[moduleIndex + 1];

  const getOptionClassName = (index) => {
    const base =
      "btn w-100 text-start border rounded-2 px-3 py-3 font-sm font-primary";
    if (feedback) {
      if (index === currentQuestion.correctIndex) {
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
  };

  return (
    <div
      className="modal fade show d-block bg-dark bg-opacity-75"
      role="dialog"
      aria-modal="true"
      onClick={() => onClose({ discarded: true })}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-content border-0 rounded-3 p-4 p-md-5 outfit-font position-relative">
          <button
            type="button"
            className="btn border-0 bg-transparent position-absolute top-0 end-0 p-3 font-primary"
            aria-label={compData?.closeAriaLabel}
            onClick={() => onClose({ discarded: true })}
          >
            <MdClose size={20} />
          </button>

          {phase === "quiz" && (
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-start justify-content-between gap-3 pe-4">
                <p className="font-xs font-600 font-grey-deep m-0">
                  {formatCopy(compData?.moduleHeader, {
                    current: moduleIndex + 1,
                    total: modules.length,
                    title: currentModule.title,
                  })}
                </p>
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
                    onClick={() => setShowInstructions(true)}
                  >
                    <span className="d-inline-flex align-items-center gap-1">
                      <MdInfoOutline size={16} />
                      {compData?.instructionsLinkText}
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
                  <ul className="m-0 ps-3 d-flex flex-column gap-2">
                    {compData?.instructions?.map((item) => (
                      <li key={item} className="font-sm font-slate-grey">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary rounded-1 px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
                    onClick={() => setShowInstructions(false)}
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
                        className={getOptionClassName(index)}
                        disabled={Boolean(feedback)}
                        onClick={() => handleSelectOption(index)}
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
                            feedback.correct
                              ? "font-success"
                              : "font-danger"
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
                        onClick={handleNextQuestion}
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
                className={`rounded-circle d-inline-flex align-items-center justify-content-center ${
                  currentScore?.passed
                    ? "bg-light-green font-success"
                    : "bg-baby-pink font-danger"
                }`}
                style={{ width: 48, height: 48 }}
              >
                {currentScore?.passed ? (
                  <MdCheck size={24} />
                ) : (
                  <MdClose size={24} />
                )}
              </div>
              <h2 className="font-lg font-600 font-primary lh-sm m-0">
                {formatCopy(
                  currentScore?.passed
                    ? compData?.gatePassedTitle
                    : compData?.gateFailedTitle,
                  {
                    current: moduleIndex + 1,
                    correct: currentScore?.correct,
                    total: currentScore?.total,
                  }
                )}
              </h2>
              <p className="font-sm font-grey-deep m-0 col-lg-10">
                {currentScore?.passed
                  ? formatCopy(compData?.gatePassedSub, {
                      next: moduleIndex + 2,
                      total: modules.length,
                      title: nextModule.title,
                    })
                  : compData?.gateFailedSub}
              </p>
              <button
                type="button"
                className="btn btn-primary rounded-1 px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
                onClick={handleContinueModule}
              >
                {currentScore?.passed
                  ? formatCopy(compData?.continueModuleText, {
                      next: moduleIndex + 2,
                    })
                  : compData?.retakeModuleText}
                <MdArrowForward size={16} aria-hidden="true" />
              </button>
            </div>
          )}

          {phase === "result" && (
            <div className="d-flex flex-column align-items-center gap-3 text-center">
              <div
                className={`rounded-circle d-inline-flex align-items-center justify-content-center ${
                  allPassed
                    ? "bg-light-green font-success"
                    : "bg-baby-pink font-danger"
                }`}
                style={{ width: 48, height: 48 }}
              >
                {allPassed ? (
                  <MdEmojiEvents size={24} />
                ) : (
                  <MdClose size={24} />
                )}
              </div>
              <h2 className="font-lg font-600 font-primary lh-sm m-0">
                {allPassed
                  ? compData?.resultPassedTitle
                  : compData?.resultFailedTitle}
              </h2>
              <p className="font-sm font-grey-deep m-0">
                {formatCopy(compData?.resultScore, {
                  percent: overall.percentage,
                  score: overall.score,
                  total: overall.totalQuestions,
                })}
              </p>
              <p className="font-sm font-grey-deep m-0 col-lg-10">
                {allPassed
                  ? compData?.resultPassedSub
                  : compData?.resultFailedSub}
              </p>

              <div className="row g-3 w-100 text-start">
                {moduleScores.map((item, index) => (
                  <div key={item.title} className="col-12 col-md-4">
                    <div
                      className={`rounded-3 p-3 h-100 border ${
                        item.passed
                          ? "bg-light-green border-success"
                          : "bg-baby-pink border-danger"
                      }`}
                    >
                      <div className="font-xs font-600 font-grey-deep">
                        {formatCopy(compData?.moduleCardLabel, {
                          current: index + 1,
                        })}
                      </div>
                      <div
                        className={`font-lg font-600 lh-1 ${
                          item.passed ? "font-success" : "font-danger"
                        }`}
                      >
                        {item.percent}%
                      </div>
                      <div className="font-xs font-slate-grey">
                        {item.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {allPassed ? (
                <button
                  type="button"
                  className="btn btn-primary rounded-1 px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
                  disabled={!certificatePayload && isSubmitting}
                  onClick={() =>
                    onCompleted?.(
                      { certificate: certificatePayload, learner },
                      moduleScores,
                      true
                    )
                  }
                >
                  {compData?.viewCertificateText}
                  <MdArrowForward size={16} aria-hidden="true" />
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary rounded-1 px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
                  onClick={handleRetakeFailed}
                >
                  {compData?.retakeFailedText}
                  <MdArrowForward size={16} aria-hidden="true" />
                </button>
              )}
            </div>
          )}

          {tabWarning && (
            <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 rounded-3">
              <div className="bg-white rounded-3 p-4 d-flex flex-column gap-3 col-11 col-md-8">
                <h3 className="font-sm font-600 m-0">
                  {compData?.tabWarningTitle}
                </h3>
                <p className="font-sm font-slate-grey m-0">
                  {compData?.tabWarningBody}
                </p>
                <button
                  type="button"
                  className="btn btn-primary w-100 rounded-1 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
                  onClick={handleDiscardAttempt}
                >
                  {compData?.tabWarningButtonText}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
