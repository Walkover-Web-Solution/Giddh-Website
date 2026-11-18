import { useCallback, useState } from "react";

import { getDownloadUrl } from "@/utils/giddhCert/clientApi";
import { MODULE_PASS_PERCENT } from "@/utils/giddhCert/constants";
import { buildExamModules } from "@/utils/giddhCert/course";
import { showToaster } from "@/utils/signupHelpers";

import ApplyOverlay from "./ApplyOverlay";
import ExamOverlay from "./ExamOverlay";

export default function CertificationFlow({
  isApplyOpen,
  setIsApplyOpen,
}) {
  const [flowPhase, setFlowPhase] = useState("mobile");
  const [mobile, setMobile] = useState("");
  const countryCode = "91";
  const [learner, setLearner] = useState(null);
  const [isExamOpen, setIsExamOpen] = useState(false);
  const [certificate, setCertificate] = useState(null);
  const [examKey, setExamKey] = useState(0);
  const [modules, setModules] = useState([]);
  const [examInitialResult, setExamInitialResult] = useState(null);

  const closeApply = () => {
    setIsApplyOpen(false);
    setFlowPhase("mobile");
  };

  const openExam = useCallback(() => {
    setExamInitialResult(null);
    setModules(buildExamModules());
    setExamKey((prev) => prev + 1);
    setIsApplyOpen(false);
    setIsExamOpen(true);
  }, [setIsApplyOpen]);

  const openCertifiedResult = useCallback(
    (nextLearner) => {
      const lastAttempt = nextLearner?.lastAttempt;
      const resumeModules = buildExamModules();
      const percentage = Number(lastAttempt?.percentage);
      const totalQuestions = Number(lastAttempt?.totalQuestions);
      const score = Number(lastAttempt?.score);
      const certPayload = {
        learnerName: nextLearner?.profile?.name,
        score: lastAttempt?.percentage,
        issuedAt: lastAttempt?.completedAt,
        validUntil: lastAttempt?.validUntil,
        downloadUrl: getDownloadUrl(
          nextLearner?.countryCode,
          nextLearner?.mobile
        ),
      };

      setLearner(nextLearner);
      setCertificate(certPayload);
      setModules(resumeModules);
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

  const openCertificatePdf = useCallback((certPayload, learnerPayload) => {
    const nextLearner = learnerPayload || learner;
    const downloadUrl =
      certPayload?.downloadUrl ||
      getDownloadUrl(nextLearner?.countryCode, nextLearner?.mobile);

    if (typeof window !== "undefined" && downloadUrl) {
      window.open(downloadUrl, "_blank", "noopener,noreferrer");
    }
  }, [learner]);

  const handleVerified = (data) => {
    const nextLearner = data?.learner;
    setLearner(nextLearner);

    if (data?.resumeScreen === "certificate") {
      openCertifiedResult(nextLearner);
      return;
    }

    if (data?.resumeScreen === "blocked") {
      showToaster(
        `Retake available after ${new Date(
          nextLearner?.nextAttemptAt
        ).toLocaleString("en-IN")}.`,
        "info",
        "top-center"
      );
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
    if (resultData?.certificate) {
      setCertificate(resultData.certificate);
    }
    if (openCertOnly) {
      openCertificatePdf(resultData?.certificate || certificate, resultData?.learner || learner);
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
      />

      <ExamOverlay
        key={examKey}
        isOpen={isExamOpen}
        onClose={handleExamClose}
        modules={modules}
        learner={learner}
        onCompleted={handleExamCompleted}
        initialResult={examInitialResult}
      />
    </>
  );
}
