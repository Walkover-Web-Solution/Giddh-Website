import { useEffect, useMemo, useState } from "react";
import {
  MdAccessTime,
  MdArrowForward,
  MdCheck,
  MdClose,
  MdEmojiEvents,
  MdInfoOutline,
} from "react-icons/md";
import {
  MODULE_PASS_PERCENT,
  MODULE_TIMER_SECONDS,
} from "@/utils/giddhCert/constants";
import { scoreModule, scoreOverall } from "@/utils/giddhCert/course";
import { submitResult } from "@/utils/giddhCert/clientApi";
import { showToaster } from "@/utils/signupHelpers";

import styles from "./CertificationFlow.module.scss";

const INSTRUCTIONS = [
  "Tab switching is not allowed during the test.",
  "Certificate validity is 6 months from the issued date.",
  "If you exit or leave the test midway, the ongoing attempt is discarded and you must start again.",
  "After submitting results, retakes are allowed once every month.",
  `Each module requires at least ${MODULE_PASS_PERCENT}% to pass.`,
];

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
  const [phase, setPhase] = useState(initialResult?.phase || "quiz");
  const [feedback, setFeedback] = useState(null);
  const [timer, setTimer] = useState(MODULE_TIMER_SECONDS);
  const [showInstructions, setShowInstructions] = useState(!initialResult);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tabWarning, setTabWarning] = useState(false);
  const [certificatePayload, setCertificatePayload] = useState(
    initialResult?.certificate
  );

  const currentModule = modules[moduleIndex];
  const currentQuestion = currentModule?.questions?.[questionIndex];
  const totalInModule = currentModule?.questions?.length || 0;
  const overall = useMemo(
    () => initialResult?.overall || scoreOverall(moduleScores),
    [initialResult?.overall, moduleScores]
  );
  const allPassed =
    Boolean(initialResult?.overall?.allPassed) ||
    (moduleScores.length > 0 && overall.allPassed);

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
        mobile: learner.mobile,
        countryCode: learner.countryCode,
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
    setFeedback({
      correct: isCorrect,
      title: isCorrect ? "Correct." : "Not quite.",
      note: isCorrect
        ? currentQuestion.options[currentQuestion.correctIndex]
        : `Correct answer: ${currentQuestion.options[currentQuestion.correctIndex]}`,
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

  return (
    <div className={styles.overlayRoot} role="dialog" aria-modal="true">
      <div
        className={`${styles.panel} ${
          phase === "quiz" ? styles.examPanel : styles.statusPanel
        } p-4 p-md-5 outfit-font`}
      >
        <button
          type="button"
          className={styles.closeBtn}
          aria-label="Close exam"
          onClick={() => onClose({ discarded: true })}
        >
          <MdClose size={20} />
        </button>

        {phase === "quiz" && (
          <>
            <div className={styles.examHeader}>
              <p className="font-xs font-600 font-grey-deep m-0">
                Module {moduleIndex + 1} of {modules.length} —{" "}
                {currentModule.title}
              </p>
              <div className="d-flex align-items-center gap-3">
                {!showInstructions && (
                  <span className={styles.timerChip}>
                    <MdAccessTime size={16} aria-hidden="true" />
                    {timerLabel}
                  </span>
                )}
                <button
                  type="button"
                  className={styles.linkBtn}
                  onClick={() => setShowInstructions(true)}
                >
                  <span className="d-inline-flex align-items-center gap-1">
                    <MdInfoOutline size={16} />
                    Instructions
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
                  Test instructions
                </h3>
                <ul className="m-0 ps-3 d-flex flex-column gap-2">
                  {INSTRUCTIONS.map((item) => (
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
                  Start module
                </button>
              </div>
            )}

            {!showInstructions && (
              <>
                <p className={styles.questionMeta}>
                  Question {questionIndex + 1} of {totalInModule}
                </p>
                <h3 className={styles.questionTitle}>
                  {currentQuestion.question}
                </h3>

                <div className="d-flex flex-column gap-2">
                  {currentQuestion.options.map((option, index) => {
                    let className = styles.optionBtn;
                    if (feedback) {
                      if (index === currentQuestion.correctIndex) {
                        className += ` ${styles.optionCorrect}`;
                      } else if (index === selected) {
                        className += ` ${styles.optionWrong}`;
                      }
                    } else if (selected === index) {
                      className += ` ${styles.optionSelected}`;
                    }
                    return (
                      <button
                        key={`${currentQuestion.id}-${index}`}
                        type="button"
                        className={className}
                        disabled={Boolean(feedback)}
                        onClick={() => handleSelectOption(index)}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {feedback && (
                  <div className={styles.feedbackRow}>
                    <div>
                      <p
                        className={`${styles.feedbackTitle} ${
                          feedback.correct
                            ? styles.feedbackCorrect
                            : styles.feedbackWrong
                        }`}
                      >
                        {feedback.title}
                      </p>
                      <p className={styles.feedbackNote}>{feedback.note}</p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary-outline rounded-1 px-3 py-2 d-inline-flex align-items-center gap-2 font-sm font-600"
                      onClick={handleNextQuestion}
                      disabled={isSubmitting}
                    >
                      {questionIndex >= totalInModule - 1
                        ? "Finish"
                        : "Next"}
                      <MdArrowForward size={16} aria-hidden="true" />
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {phase === "gate" && (
          <div className={styles.statusBody}>
            <div
              className={`${styles.statusIcon} ${
                currentScore?.passed
                  ? styles.statusIconSuccess
                  : styles.statusIconFail
              }`}
            >
              {currentScore?.passed ? (
                <MdCheck size={24} />
              ) : (
                <MdClose size={24} />
              )}
            </div>
            <h2 className={styles.statusTitle}>
              {currentScore?.passed
                ? `Module ${moduleIndex + 1} complete — ${currentScore?.correct}/${currentScore?.total} correct`
                : `Module ${moduleIndex + 1} score — ${currentScore?.correct}/${currentScore?.total} correct`}
            </h2>
            <p className={styles.statusSub}>
              {currentScore?.passed
                ? `Up next: Module ${moduleIndex + 2} of ${
                    modules.length
                  } — ${nextModule.title}.`
                : `You need at least ${MODULE_PASS_PERCENT}% to continue. Retake this module to qualify.`}
            </p>
            <button
              type="button"
              className={`btn btn-primary rounded-1 px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600 ${styles.successBtn}`}
              onClick={handleContinueModule}
            >
              {currentScore?.passed
                ? `Continue to Module ${moduleIndex + 2}`
                : "Retake this module"}
              <MdArrowForward size={16} aria-hidden="true" />
            </button>
          </div>
        )}

        {phase === "result" && (
          <div className={styles.statusBody}>
            <div
              className={`${styles.statusIcon} ${
                allPassed ? styles.statusIconSuccess : styles.statusIconFail
              }`}
            >
              {allPassed ? <MdEmojiEvents size={24} /> : <MdClose size={24} />}
            </div>
            <h2 className={styles.statusTitle}>
              {allPassed ? "You're GIDDH Certified" : "Assessment complete"}
            </h2>
            <p className={styles.statusSub}>
              Overall {overall.percentage}% · {overall.score}/
              {overall.totalQuestions} correct
            </p>
            <p className={styles.statusSub}>
              {allPassed
                ? `You passed every module with at least ${MODULE_PASS_PERCENT}%. Open your certificate when ready.`
                : `Each module needs at least ${MODULE_PASS_PERCENT}%. Retake a failed module to qualify.`}
            </p>

            <div className={styles.moduleCards}>
              {moduleScores.map((item, index) => (
                <div
                  key={item.title}
                  className={`${styles.moduleCard} ${
                    item.passed ? styles.moduleCardPass : styles.moduleCardFail
                  }`}
                >
                  <div className={styles.moduleCardLabel}>
                    Module {index + 1}
                  </div>
                  <div className={styles.moduleCardScore}>{item.percent}%</div>
                  <div className={styles.moduleCardTitle}>{item.title}</div>
                </div>
              ))}
            </div>

            {allPassed ? (
              <button
                type="button"
                className={`btn btn-primary rounded-1 px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600 ${styles.successBtn}`}
                disabled={!certificatePayload && isSubmitting}
                onClick={() =>
                  onCompleted?.(
                    { certificate: certificatePayload, learner },
                    moduleScores,
                    true
                  )
                }
              >
                View certificate
                <MdArrowForward size={16} aria-hidden="true" />
              </button>
            ) : (
              <button
                type="button"
                className={`btn btn-primary rounded-1 px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600 ${styles.successBtn}`}
                onClick={handleRetakeFailed}
              >
                Retake failed module
                <MdArrowForward size={16} aria-hidden="true" />
              </button>
            )}
          </div>
        )}

        {tabWarning && (
          <div className={`${styles.overlayRoot} ${styles.tabWarningRoot}`}>
            <div className={`${styles.panel} p-4 d-flex flex-column gap-3`}>
              <h3 className="font-sm font-600 m-0">Tab switch detected</h3>
              <p className="font-sm font-slate-grey m-0">
                Tab switching is not allowed. This attempt will be discarded.
              </p>
              <button
                type="button"
                className="btn btn-primary w-100 rounded-1 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
                onClick={handleDiscardAttempt}
              >
                Close attempt
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
