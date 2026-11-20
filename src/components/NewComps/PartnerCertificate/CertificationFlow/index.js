import { useCallback, useState } from "react";

import { MODULE_PASS_PERCENT } from "@/utils/giddhCert/constants";
import { buildExamModules } from "@/utils/giddhCert/course";
import { getDownloadUrl } from "@/utils/giddhCert/clientApi";
import { showToaster } from "@/utils/signupHelpers";

import ApplyOverlay from "./ApplyOverlay";
import ExamOverlay from "./ExamOverlay";

export default function CertificationFlow({
  isApplyOpen,
  setIsApplyOpen,
  applyOverlay,
  examOverlay,
}) {
  const [flowPhase, setFlowPhase] = useState("mobile");
  const [mobile, setMobile] = useState("");
  const countryCode = "91";
  const [learner, setLearner] = useState(null);
  const [isExamOpen, setIsExamOpen] = useState(false);
  const [examKey, setExamKey] = useState(0);
  const [modules, setModules] = useState([]);
  const [examInitialResult, setExamInitialResult] = useState(null);

  const closeApply = () => {
    setIsApplyOpen(false);
    setFlowPhase("mobile");
  };

  const openExam = useCallback(() => {
    setExamInitialResult({ phase: "quiz" });
    setModules(buildExamModules());
    setExamKey((prev) => prev + 1);
    setIsApplyOpen(false);
    setIsExamOpen(true);
  }, [setIsApplyOpen]);

  const openCertifiedResult = useCallback(
    (nextLearner) => {
      const lastAttempt = nextLearner?.lastAttempt;
      const percentage = Number(lastAttempt?.percentage);
      const totalQuestions = Number(lastAttempt?.totalQuestions);
      const score = Number(lastAttempt?.score);
      const certPayload = {
        learnerName: nextLearner?.profile?.name,
        score: lastAttempt?.percentage,
        issuedAt: lastAttempt?.completedAt,
        validUntil: lastAttempt?.validUntil,
        downloadUrl: getDownloadUrl(),
      };

      setLearner(nextLearner);
      setModules(buildExamModules());
      setExamInitialResult({
        phase: "result",
        certificate: certPayload,
        overall: {
          percentage,
          score,
          totalQuestions,
          allPassed: percentage >= MODULE_PASS_PERCENT,
        },
      });
      setExamKey((prev) => prev + 1);
      setIsApplyOpen(false);
      setIsExamOpen(true);
    },
    [setIsApplyOpen]
  );

  const openCertificatePdf = (certPayload) => {
    const downloadUrl = certPayload?.downloadUrl;
    if (typeof window !== "undefined" && downloadUrl) {
      window.open(downloadUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleVerified = (data) => {
    const nextLearner = data?.learner;
    setLearner(nextLearner);

    if (data?.resumeScreen === "certificate") {
      openCertifiedResult(nextLearner);
      return;
    }

    if (data?.resumeScreen === "blocked") {
      if (data?.message) {
        showToaster(data.message, "info", "top-center");
      }
      return;
    }

    if (data?.resumeScreen === "test") {
      openExam();
      return;
    }

    setFlowPhase("registration");
  };

  const handleRegistered = (data) => {
    setLearner(data?.learner);
    openExam();
  };

  const handleExamCompleted = (resultData, _moduleScores, openCertOnly) => {
    if (resultData?.learner) {
      setLearner(resultData.learner);
    }
    if (openCertOnly) {
      openCertificatePdf(resultData?.certificate);
    }
  };

  const handleExamClose = () => {
    setIsExamOpen(false);
    setExamInitialResult(null);
  };

  return (
    <>
      <ApplyOverlay
        isOpen={isApplyOpen}
        onClose={closeApply}
        flowPhase={flowPhase}
        setFlowPhase={setFlowPhase}
        mobile={mobile}
        setMobile={setMobile}
        countryCode={countryCode}
        onVerified={handleVerified}
        onRegistered={handleRegistered}
        compData={applyOverlay}
      />

      <ExamOverlay
        key={examKey}
        isOpen={isExamOpen}
        onClose={handleExamClose}
        modules={modules}
        learner={learner}
        onCompleted={handleExamCompleted}
        initialResult={examInitialResult}
        compData={examOverlay}
      />
    </>
  );
}
