import ExamGate from "./ExamGate";
import ExamQuiz from "./ExamQuiz";
import ExamResult from "./ExamResult";

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
  if (phase === "quiz") {
    return (
      <ExamQuiz
        modules={modules}
        moduleIndex={moduleIndex}
        questionIndex={questionIndex}
        currentModule={currentModule}
        currentQuestion={currentQuestion}
        totalInModule={totalInModule}
        showInstructions={showInstructions}
        onShowInstructions={onShowInstructions}
        onStartModule={onStartModule}
        timerLabel={timerLabel}
        initialResult={initialResult}
        compData={compData}
        feedback={feedback}
        selected={selected}
        onSelectOption={onSelectOption}
        onNextQuestion={onNextQuestion}
        isSubmitting={isSubmitting}
      />
    );
  }

  if (phase === "gate") {
    return (
      <ExamGate
        moduleIndex={moduleIndex}
        modulesLength={modules.length}
        nextModuleTitle={modules[moduleIndex + 1]?.title}
        compData={compData}
        onContinueModule={onContinueModule}
      />
    );
  }

  if (phase === "result") {
    return (
      <ExamResult
        allPassed={allPassed}
        overall={overall}
        showRetakeEligibleDate={showRetakeEligibleDate}
        nextAttemptAt={nextAttemptAt}
        canAttempt={canAttempt}
        certificatePayload={certificatePayload}
        learner={learner}
        moduleScores={moduleScores}
        isSubmitting={isSubmitting}
        compData={compData}
        onCompleted={onCompleted}
        onRetakeFailed={onRetakeFailed}
      />
    );
  }

  return null;
}
