import { useCallback, useEffect, useRef, useState } from "react";

import { downloadCertificateShareImage } from "@/utils/giddhCert/shareImage";
import {
  downloadCertificatePdf,
  resolveDownloadUrl,
} from "@/utils/giddhCert/clientApi";
import {
  CERTIFICATE_ISSUER_NAME,
  MODULE_PASS_PERCENT,
} from "@/utils/giddhCert/constants";
import { buildExamModules, scoreOverall } from "@/utils/giddhCert/course";
import { showToaster } from "@/utils/signupHelpers";

import ApplyOverlay from "./ApplyOverlay";
import ExamOverlay from "./ExamOverlay";
import FlowNoticeModal from "./FlowNoticeModal";

function formatCopy(template, values) {
  if (!template) {
    return template;
  }
  return Object.keys(values).reduce(
    (text, key) => text.replaceAll(`{${key}}`, String(values[key])),
    template
  );
}

function isCertifiedLearner(learner) {
  const lastAttempt = learner?.lastAttempt;
  const percentage = Number(lastAttempt?.percentage);
  return (
    Number.isFinite(percentage) &&
    percentage >= MODULE_PASS_PERCENT &&
    Boolean(lastAttempt?.downloadUrl)
  );
}

function hasUsedPriorAttempt(learner) {
  const percentage = Number(learner?.lastAttempt?.percentage);
  return Number.isFinite(percentage) && percentage < MODULE_PASS_PERCENT;
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
  const [isAttemptLimitOpen, setIsAttemptLimitOpen] = useState(false);
  const [isAttemptDiscardedOpen, setIsAttemptDiscardedOpen] = useState(false);
  const [blockedNextAttemptAt, setBlockedNextAttemptAt] = useState(null);
  const [usedAttemptCount, setUsedAttemptCount] = useState(0);
  const openCertifiedResultRef = useRef(null);
  const countryCode = applyOverlay?.countryCode;

  const closeApply = () => {
    setIsApplyOpen(false);
    setFlowPhase("mobile");
  };

  const markPriorAttemptUsed = useCallback((nextLearner) => {
    if (hasUsedPriorAttempt(nextLearner)) {
      setUsedAttemptCount((prev) => (prev < 1 ? 1 : prev));
    }
  }, []);

  const openAttemptLimitModal = useCallback(
    (nextLearner) => {
      if (nextLearner?.canAttempt !== false) {
        return false;
      }
      setBlockedNextAttemptAt(nextLearner?.nextAttemptAt);
      setIsAttemptDiscardedOpen(false);
      setIsAttemptLimitOpen(true);
      setIsApplyOpen(false);
      setIsExamOpen(false);
      return true;
    },
    [setIsApplyOpen]
  );

  const openExam = useCallback(
    (learnerOverride) => {
      const activeLearner = learnerOverride || learner;
      if (openAttemptLimitModal(activeLearner)) {
        return;
      }
      setIsAttemptDiscardedOpen(false);
      const fromApi = hasUsedPriorAttempt(activeLearner);
      const attemptNumber = usedAttemptCount >= 1 || fromApi ? 2 : 1;
      setCachedPassResult(null);
      setExamStarted(true);
      setExamInitialResult({
        phase: "quiz",
        attemptNumber,
        totalAttempts: 2,
        isFinalAttempt: attemptNumber === 2,
      });
      setModules(buildExamModules(country));
      setExamKey((prev) => prev + 1);
      setIsApplyOpen(false);
      setIsExamOpen(true);
    },
    [country, learner, openAttemptLimitModal, setIsApplyOpen, usedAttemptCount]
  );

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
        nextAttemptAt: nextLearner?.nextAttemptAt,
        canAttempt: nextLearner?.canAttempt,
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
      if (openAttemptLimitModal(learner)) {
        return;
      }
      if (learner?.profile?.name) {
        openExam();
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
    openAttemptLimitModal,
    openExam,
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
    markPriorAttemptUsed(nextLearner);

    if (data?.resumeScreen === "certificate") {
      openCertifiedResult(nextLearner);
      return;
    }

    if (data?.resumeScreen === "blocked") {
      openAttemptLimitModal(nextLearner);
      return;
    }

    if (data?.resumeScreen === "test") {
      openExam(nextLearner);
      return;
    }

    setFlowPhase("registration");
  };

  const handleRegistered = (data) => {
    setLearner(data?.learner);
    openExam();
  };

  const handleExamCompleted = (resultData, moduleScores, openCertOnly) => {
    if (openCertOnly) {
      openCertificateDownload(resultData?.certificate, openCertOnly);
      return;
    }

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

    setExamStarted(false);

    if (!resultData?.certificate || !moduleScores) {
      return;
    }

    const apiPercent = Number(resultData.certificate.score);
    const computedOverall = scoreOverall(moduleScores);
    if (Number.isFinite(apiPercent)) {
      computedOverall.percentage = apiPercent;
      computedOverall.allPassed = apiPercent >= MODULE_PASS_PERCENT;
    }

    if (computedOverall.allPassed && resultData.certificate.downloadUrl) {
      setCachedPassResult({
        learner: resultData.learner,
        certificate: resultData.certificate,
        overall: computedOverall,
        moduleScores,
      });
    } else {
      setCachedPassResult(null);
      if (resultData.learner?.canAttempt !== false) {
        setUsedAttemptCount((prev) => (prev < 1 ? 1 : prev));
      }
    }
  };

  const handleExamClose = (options) => {
    setIsExamOpen(false);
    if (!options?.discarded) {
      return;
    }

    if (options.learner) {
      setLearner(options.learner);
    }

    setExamStarted(false);
    setCachedPassResult(null);
    setExamInitialResult(null);
    setModules([]);
    setExamKey((prev) => prev + 1);

    if (options.learner?.canAttempt === false) {
      openAttemptLimitModal(options.learner);
      return;
    }

    setUsedAttemptCount((prev) => (prev < 1 ? 1 : prev));
    setIsAttemptDiscardedOpen(true);
  };

  const attemptLimitBody =
    blockedNextAttemptAt && examOverlay?.attemptLimitBody
      ? formatCopy(examOverlay.attemptLimitBody, {
          date: blockedNextAttemptAt,
        })
      : null;

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
        onRetake={openExam}
        initialResult={examInitialResult}
        compData={examOverlay}
      />

      <FlowNoticeModal
        isOpen={isAttemptDiscardedOpen}
        onClose={() => setIsAttemptDiscardedOpen(false)}
        title={examOverlay?.attemptDiscardedTitle}
        body={examOverlay?.attemptDiscardedBody}
        titleClassName="font-danger"
        primaryText={examOverlay?.attemptDiscardedCta}
        onPrimary={openExam}
        secondaryText={examOverlay?.attemptDiscardedLaterText}
        closeAriaLabel={examOverlay?.closeAriaLabel}
      />

      <FlowNoticeModal
        isOpen={isAttemptLimitOpen}
        onClose={() => setIsAttemptLimitOpen(false)}
        title={examOverlay?.attemptLimitTitle}
        body={attemptLimitBody}
        primaryText={examOverlay?.attemptLimitCloseText}
        closeOnBackdrop
        closeAriaLabel={examOverlay?.closeAriaLabel}
      />
    </>
  );
}
