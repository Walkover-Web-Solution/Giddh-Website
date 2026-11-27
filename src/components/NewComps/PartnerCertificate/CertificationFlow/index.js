import { useCallback, useEffect, useRef, useState } from "react";

import {
  CERTIFICATE_ISSUER_NAME,
  MODULE_PASS_PERCENT,
} from "@/utils/giddhCert/constants";
import { buildExamModules, scoreOverall } from "@/utils/giddhCert/course";
import {
  downloadCertificatePdf,
  resolveDownloadUrl,
} from "@/utils/giddhCert/clientApi";
import { downloadCertificateShareImage } from "@/utils/giddhCert/shareImage";
import { showToaster } from "@/utils/signupHelpers";

import ApplyOverlay from "./ApplyOverlay";
import ExamOverlay from "./ExamOverlay";

function isCertifiedLearner(learner) {
  const lastAttempt = learner?.lastAttempt;
  const percentage = Number(lastAttempt?.percentage);
  return (
    Number.isFinite(percentage) &&
    percentage >= MODULE_PASS_PERCENT &&
    Boolean(lastAttempt?.downloadUrl)
  );
}

export default function CertificationFlow({
  isApplyOpen,
  setIsApplyOpen,
  applyOverlay,
  examOverlay,
  onStartRef,
  country,
}) {
  const [flowPhase, setFlowPhase] = useState("mobile");
  const [mobile, setMobile] = useState("");
  const [learner, setLearner] = useState(null);
  const [isExamOpen, setIsExamOpen] = useState(false);
  const [examKey, setExamKey] = useState(0);
  const [modules, setModules] = useState([]);
  const [examInitialResult, setExamInitialResult] = useState(null);
  const [examStarted, setExamStarted] = useState(false);
  const [cachedPassResult, setCachedPassResult] = useState(null);
  const openCertifiedResultRef = useRef(null);
  const countryCode = applyOverlay?.countryCode;

  const closeApply = () => {
    setIsApplyOpen(false);
    setFlowPhase("mobile");
  };

  const openExam = useCallback(() => {
    setCachedPassResult(null);
    setExamStarted(true);
    setExamInitialResult({ phase: "quiz" });
    setModules(buildExamModules(country));
    setExamKey((prev) => prev + 1);
    setIsApplyOpen(false);
    setIsExamOpen(true);
  }, [country, setIsApplyOpen]);

  const openCertifiedResult = useCallback(
    (nextLearner) => {
      const lastAttempt = nextLearner?.lastAttempt;
      const percentage = Number(lastAttempt?.percentage);
      const score = Number(lastAttempt?.score);
      const totalQuestions = Number(lastAttempt?.totalQuestions);
      const downloadUrl = resolveDownloadUrl(lastAttempt?.downloadUrl, {
        mobile: nextLearner?.mobile,
        countryCode: nextLearner?.countryCode,
      });

      const certPayload = {
        learnerName: nextLearner?.profile?.name,
        score: lastAttempt?.percentage,
        issuedAt: lastAttempt?.completedAt,
        validUntil: lastAttempt?.validUntil,
        issuerName: CERTIFICATE_ISSUER_NAME,
        downloadUrl,
      };

      const overall = {
        allPassed:
          Number.isFinite(percentage) && percentage >= MODULE_PASS_PERCENT,
      };
      if (Number.isFinite(percentage)) {
        overall.percentage = percentage;
      }
      if (Number.isFinite(score)) {
        overall.score = score;
      }
      if (Number.isFinite(totalQuestions)) {
        overall.totalQuestions = totalQuestions;
      }

      setLearner(nextLearner);
      setExamStarted(false);
      setModules(buildExamModules(country));
      setExamInitialResult({
        phase: "result",
        certificate: certPayload,
        overall,
      });
      setExamKey((prev) => prev + 1);
      setIsApplyOpen(false);
      setIsExamOpen(true);
    },
    [country, setIsApplyOpen]
  );

  openCertifiedResultRef.current = openCertifiedResult;

  const openCachedPassResult = useCallback(() => {
    if (!cachedPassResult) {
      return;
    }
    setLearner(cachedPassResult.learner);
    setExamStarted(false);
    setExamInitialResult({
      phase: "result",
      certificate: cachedPassResult.certificate,
      overall: cachedPassResult.overall,
      moduleScores: cachedPassResult.moduleScores,
    });
    setExamKey((prev) => prev + 1);
    setIsApplyOpen(false);
    setIsExamOpen(true);
  }, [cachedPassResult, setIsApplyOpen]);

  useEffect(() => {
    if (!onStartRef) {
      return undefined;
    }
    onStartRef.current = () => {
      if (cachedPassResult) {
        openCachedPassResult();
        return;
      }
      if (isCertifiedLearner(learner)) {
        openCertifiedResultRef.current?.(learner);
        return;
      }
      if (examStarted) {
        setIsExamOpen(true);
        return;
      }
      setIsApplyOpen(true);
    };
    return undefined;
  }, [
    onStartRef,
    cachedPassResult,
    openCachedPassResult,
    learner,
    examStarted,
    setIsApplyOpen,
  ]);

  const openCertificateDownload = async (certPayload, downloadType) => {
    if (!certPayload?.downloadUrl) {
      return;
    }
    try {
      if (downloadType === "image") {
        await downloadCertificateShareImage(certPayload);
        return;
      }
      await downloadCertificatePdf(certPayload.downloadUrl);
    } catch (error) {
      showToaster(error.message, "error", "top-center");
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

  const handleExamCompleted = (resultData, moduleScores, openCertOnly) => {
    if (resultData?.learner) {
      const nextLearner = resultData.learner;
      if (resultData.certificate?.downloadUrl) {
        setLearner({
          ...nextLearner,
          lastAttempt: {
            ...nextLearner?.lastAttempt,
            downloadUrl: resultData.certificate.downloadUrl,
          },
        });
      } else {
        setLearner(nextLearner);
      }
    }
    if (!openCertOnly && resultData?.certificate && moduleScores) {
      const apiPercent = Number(resultData.certificate.score);
      const computedOverall = scoreOverall(moduleScores);
      if (Number.isFinite(apiPercent)) {
        computedOverall.percentage = apiPercent;
        computedOverall.allPassed = apiPercent >= MODULE_PASS_PERCENT;
      }
      setCachedPassResult({
        learner: resultData.learner,
        certificate: resultData.certificate,
        overall: computedOverall,
        moduleScores,
      });
      setExamStarted(false);
    }
    if (openCertOnly) {
      openCertificateDownload(resultData?.certificate, openCertOnly);
    }
  };

  const handleExamClose = () => {
    setIsExamOpen(false);
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
