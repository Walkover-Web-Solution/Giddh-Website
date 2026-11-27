import { useEffect, useMemo, useRef, useState } from "react";
import {
  MdAccessTime,
  MdArrowForward,
  MdCheck,
  MdClose,
  MdEmojiEvents,
  MdInfoOutline,
} from "react-icons/md";
import {
  IDLE_WARNING_SECONDS,
  MODULE_PASS_PERCENT,
  MODULE_TIMER_SECONDS,
} from "@/utils/giddhCert/constants";
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

export default function ExamOverlay({
  isOpen,
  onClose,
  modules,
  learner,
  onCompleted,
  initialResult,
  compData,
}) {
  const [canAttempt, setCanAttempt] = useState(learner?.canAttempt);
  const [nextAttemptAt, setNextAttemptAt] = useState(learner?.nextAttemptAt);
  const [moduleIndex, setModuleIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [moduleScores, setModuleScores] = useState(() => {
    if (initialResult?.moduleScores) {
      return initialResult.moduleScores;
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
  const [idleWarning, setIdleWarning] = useState(false);
  const [certificatePayload, setCertificatePayload] = useState(
    initialResult?.certificate
  );
  const lastActivityRef = useRef(Date.now());
  const idleWarningRef = useRef(false);
  idleWarningRef.current = idleWarning;
  const currentModule = modules[moduleIndex];
  const currentQuestion = currentModule?.questions?.[questionIndex];
  const totalInModule = currentModule?.questions?.length;
  const overall = useMemo(() => {
    const apiPercent = Number(certificatePayload?.score);
    const hasLiveTotals =
      moduleScores.length > 0 &&
      moduleScores.every((item) => Number.isFinite(item.total));
    let computed;
    if (hasLiveTotals) {
      computed = scoreOverall(moduleScores);
    } else if (initialResult?.overall) {
      computed = initialResult.overall;
    } else {
      computed = scoreOverall(moduleScores);
    }
    if (Number.isFinite(apiPercent)) {
      return {
        ...computed,
        percentage: apiPercent,
        allPassed: apiPercent >= MODULE_PASS_PERCENT,
      };
    }
    return computed;
  }, [certificatePayload?.score, initialResult?.overall, moduleScores]);
  const allPassed = overall.allPassed;
  const showRetakeLockMessage =
    !allPassed && canAttempt === false && Boolean(nextAttemptAt);

  const timerLabel = useMemo(() => {
    const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
    const seconds = String(timer % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }, [timer]);

  useEffect(() => {
    if (!isOpen || phase !== "quiz") {
      return undefined;
    }
    setTimer(MODULE_TIMER_SECONDS);
    return undefined;
  }, [isOpen, phase, moduleIndex]);

  useEffect(() => {
    if (!isOpen || phase !== "quiz" || showInstructions) {
      return undefined;
    }
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
      if (!document.hidden) {
        return;
      }
      setTabWarning(true);
      setIdleWarning(false);
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [isOpen, phase]);

  useEffect(() => {
    if (
      !isOpen ||
      phase !== "quiz" ||
      showInstructions ||
      tabWarning
    ) {
      return undefined;
    }

    lastActivityRef.current = Date.now();

    const markActivity = () => {
      if (idleWarningRef.current) {
        return;
      }
      lastActivityRef.current = Date.now();
    };

    const events = ["pointerdown", "keydown", "touchstart"];
    events.forEach((eventName) => {
      document.addEventListener(eventName, markActivity);
    });

    const idleCheckId = setInterval(() => {
      if (idleWarningRef.current) {
        return;
      }
      const idleMs = Date.now() - lastActivityRef.current;
      if (idleMs >= IDLE_WARNING_SECONDS * 1000) {
        setIdleWarning(true);
      }
    }, 1000);

    return () => {
      events.forEach((eventName) => {
        document.removeEventListener(eventName, markActivity);
      });
      clearInterval(idleCheckId);
    };
  }, [isOpen, phase, showInstructions, tabWarning]);

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

    setIsSubmitting(true);
    try {
      const data = await submitResult({
        mobile: learner?.mobile,
        countryCode: learner?.countryCode,
        score: overallScore.score,
        percentage: overallScore.percentage,
        totalQuestions: overallScore.totalQuestions,
      });
      if (data?.certificate) {
        setCertificatePayload(data.certificate);
      }
      setNextAttemptAt(data?.learner?.nextAttemptAt);
      if (typeof data?.learner?.canAttempt === "boolean") {
        setCanAttempt(data.learner.canAttempt);
      }
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
        : `${compData?.correctAnswerLabel} ${correctAnswer}`,
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
    setModuleIndex((prev) => prev + 1);
    setPhase("quiz");
    resetModuleState();
    setShowInstructions(true);
  };

  const handleRetakeFailed = () => {
    setModuleIndex(0);
    setModuleScores([]);
    setCertificatePayload(null);
    setPhase("quiz");
    resetModuleState();
    setShowInstructions(true);
  };

  const handleDiscardAttempt = () => {
    setTabWarning(false);
    setIdleWarning(false);
    onClose({ discarded: true });
  };

  const handleContinueAfterIdle = () => {
    lastActivityRef.current = Date.now();
    setIdleWarning(false);
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
                onClick={handleContinueModule}
              >
                {formatCopy(compData?.continueModuleText, {
                  next: moduleIndex + 2,
                })}
                <MdArrowForward size={16} aria-hidden="true" />
              </button>
            </div>
          )}

          {phase === "result" && (
            <div className="d-flex flex-column align-items-center gap-3 text-center">
              <div
                className={`${styles.statusIcon} rounded-circle d-inline-flex align-items-center justify-content-center ${
                  allPassed
                    ? "bg-light-green font-success"
                    : "bg-baby-pink font-danger"
                }`}
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
                {Number.isFinite(overall.percentage)
                  ? formatCopy(compData?.resultScore, {
                      percent: overall.percentage,
                    })
                  : null}
              </p>
              {allPassed && compData?.resultPassedSub ? (
                <p className="font-sm font-grey-deep m-0 col-lg-10">
                  {compData.resultPassedSub}
                </p>
              ) : null}
              {!allPassed && compData?.resultFailedSub ? (
                <p className="font-sm font-grey-deep m-0 col-lg-10">
                  {compData.resultFailedSub}
                </p>
              ) : null}
              {allPassed && compData?.certificateIssuerName && (
                <p className="font-xs font-grey-deep m-0">
                  {compData?.certificateIssuerLabel}{" "}
                  {compData.certificateIssuerName}
                </p>
              )}
              {showRetakeLockMessage && compData?.resultRetakeEligible ? (
                <p className="font-sm font-grey-deep m-0 col-lg-10">
                  {formatCopy(compData.resultRetakeEligible, {
                    date: nextAttemptAt,
                  })}
                </p>
              ) : null}

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
                  onClick={handleRetakeFailed}
                >
                  {compData?.retakeExamText}
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

          {idleWarning && !tabWarning && (
            <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 rounded-3">
              <div className="bg-white rounded-3 p-4 d-flex flex-column gap-3 col-11 col-md-8">
                <h3 className="font-sm font-600 m-0">
                  {compData?.idleWarningTitle}
                </h3>
                <p className="font-sm font-slate-grey m-0">
                  {compData?.idleWarningBody}
                </p>
                <button
                  type="button"
                  className="btn btn-primary w-100 rounded-1 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
                  onClick={handleContinueAfterIdle}
                >
                  {compData?.idleWarningContinueText}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary w-100 rounded-1 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
                  onClick={handleDiscardAttempt}
                >
                  {compData?.idleWarningDiscardText}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
