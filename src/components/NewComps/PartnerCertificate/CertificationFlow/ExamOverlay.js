import { useEffect, useMemo, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import {
  MODULE_PASS_PERCENT,
  MODULE_TIMER_SECONDS,
  QUESTIONS_PER_MODULE,
} from "@/utils/giddhCert/constants";
import { scoreModule, scoreOverall } from "@/utils/giddhCert/course";
import { discardAttempt, submitResult } from "@/utils/giddhCert/clientApi";
import { prefetchCertificateShareAssets } from "@/utils/giddhCert/shareImage";
import { showToaster } from "@/utils/signupHelpers";

import ExamContent from "./ExamContent";
import ExamDiscardWarning from "./ExamDiscardWarning";
import useExamGuards from "./useExamGuards";

export default function ExamOverlay({
  isOpen,
  onClose,
  modules,
  learner,
  onCompleted,
  onRetake,
  initialResult,
  compData,
}) {
  const [canAttempt, setCanAttempt] = useState(() => {
    if (typeof initialResult?.canAttempt === "boolean") {
      return initialResult.canAttempt;
    }
    return learner?.canAttempt;
  });
  const [nextAttemptAt, setNextAttemptAt] = useState(() => {
    if (initialResult?.nextAttemptAt) {
      return initialResult.nextAttemptAt;
    }
    return learner?.nextAttemptAt;
  });
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
  const [hasStartedModule, setHasStartedModule] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDiscarding, setIsDiscarding] = useState(false);
  const [tabWarning, setTabWarning] = useState(false);
  const [idleWarning, setIdleWarning] = useState(false);
  const [certificatePayload, setCertificatePayload] = useState(
    initialResult?.certificate
  );
  const finalizeDiscardRef = useRef(null);
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
  const showRetakeEligibleDate = Boolean(nextAttemptAt);
  const isLiveAttempt = phase === "quiz" || phase === "gate";
  const isCommittedAttempt = isLiveAttempt && hasStartedModule;
  const timerPaused =
    showInstructions || tabWarning || idleWarning || isSubmitting;

  useExamGuards({
    isOpen,
    isCommittedAttempt,
    hasStartedModule,
    phase,
    showInstructions,
    tabWarning,
    idleWarning,
    isDiscarding,
    setTabWarning,
    setIdleWarning,
    finalizeDiscardRef,
  });

  useEffect(() => {
    if (learner?.nextAttemptAt) {
      setNextAttemptAt(learner.nextAttemptAt);
    }
    if (typeof learner?.canAttempt === "boolean") {
      setCanAttempt(learner.canAttempt);
    }
  }, [learner?.nextAttemptAt, learner?.canAttempt]);

  useEffect(() => {
    if (
      phase !== "result" ||
      !allPassed ||
      !certificatePayload?.downloadUrl
    ) {
      return undefined;
    }
    prefetchCertificateShareAssets(certificatePayload.downloadUrl);
    return undefined;
  }, [phase, allPassed, certificatePayload?.downloadUrl]);

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
    if (!isOpen || phase !== "quiz" || timerPaused) {
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
  }, [isOpen, phase, moduleIndex, timerPaused]);

  useEffect(() => {
    if (!isOpen || phase !== "quiz" || timerPaused) {
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
  }, [timer, timerPaused]);

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
    if (typeof onRetake === "function") {
      onRetake();
      return;
    }
    setModuleIndex(0);
    setModuleScores([]);
    setCertificatePayload(null);
    setPhase("quiz");
    resetModuleState();
    setHasStartedModule(false);
    setShowInstructions(true);
  };

  const finalizeDiscard = async () => {
    if (isDiscarding || isSubmitting) {
      return;
    }
    setIsDiscarding(true);
    setTabWarning(false);
    setIdleWarning(false);

    try {
      const totalQuestions = modules.length * QUESTIONS_PER_MODULE;
      const data = await discardAttempt({
        mobile: learner?.mobile,
        countryCode: learner?.countryCode,
        totalQuestions,
      });
      onClose({
        discarded: true,
        learner: data?.learner,
        message: data?.message,
      });
    } catch (error) {
      showToaster(error.message, "error", "top-center");
      onClose({ discarded: true });
    } finally {
      setIsDiscarding(false);
    }
  };
  finalizeDiscardRef.current = finalizeDiscard;

  const handleCloseOverlay = () => {
    if (phase === "result" || !hasStartedModule) {
      onClose();
    }
  };

  const canCloseOverlay = phase === "result" || !hasStartedModule;

  return (
    <div
      className="modal fade show d-block bg-dark bg-opacity-75"
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div className="modal-content border-0 rounded-3 p-4 p-md-5 outfit-font position-relative">
          {canCloseOverlay ? (
            <button
              type="button"
              className="btn border-0 bg-transparent position-absolute top-0 end-0 p-3 font-primary"
              aria-label={compData?.closeAriaLabel}
              onClick={handleCloseOverlay}
            >
              <MdClose size={20} />
            </button>
          ) : null}

          <ExamContent
            phase={phase}
            modules={modules}
            moduleIndex={moduleIndex}
            questionIndex={questionIndex}
            currentModule={currentModule}
            currentQuestion={currentQuestion}
            totalInModule={totalInModule}
            showInstructions={showInstructions}
            onShowInstructions={() => setShowInstructions(true)}
            onStartModule={() => {
              setHasStartedModule(true);
              setShowInstructions(false);
            }}
            timerLabel={timerLabel}
            initialResult={initialResult}
            compData={compData}
            feedback={feedback}
            selected={selected}
            onSelectOption={handleSelectOption}
            onNextQuestion={handleNextQuestion}
            onContinueModule={handleContinueModule}
            onRetakeFailed={handleRetakeFailed}
            isSubmitting={isSubmitting}
            allPassed={allPassed}
            overall={overall}
            showRetakeEligibleDate={showRetakeEligibleDate}
            nextAttemptAt={nextAttemptAt}
            canAttempt={canAttempt}
            certificatePayload={certificatePayload}
            learner={learner}
            moduleScores={moduleScores}
            onCompleted={onCompleted}
          />

          {tabWarning ? (
            <ExamDiscardWarning
              title={compData?.tabWarningTitle}
              body={compData?.tabWarningBody}
              buttonText={compData?.tabWarningButtonText}
              onConfirm={finalizeDiscard}
              isDiscarding={isDiscarding}
            />
          ) : null}

          {idleWarning && !tabWarning ? (
            <ExamDiscardWarning
              title={compData?.idleWarningTitle}
              body={compData?.idleWarningBody}
              buttonText={compData?.idleWarningDiscardText}
              onConfirm={finalizeDiscard}
              isDiscarding={isDiscarding}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
