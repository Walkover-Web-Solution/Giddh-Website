import { useCallback, useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";

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

      {isAttemptDiscardedOpen ? (
        <div
          className="modal fade show d-block bg-dark bg-opacity-75"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-content border-0 rounded-3 p-4 p-md-5 outfit-font position-relative">
              <button
                type="button"
                className="btn border-0 bg-transparent position-absolute top-0 end-0 p-3 font-primary"
                aria-label={examOverlay?.closeAriaLabel}
                onClick={() => setIsAttemptDiscardedOpen(false)}
              >
                <MdClose size={20} />
              </button>
              <div className="d-flex flex-column align-items-center gap-3 text-center pe-4">
                {examOverlay?.attemptDiscardedTitle ? (
                  <h2 className="font-lg font-600 font-danger lh-sm m-0">
                    {examOverlay.attemptDiscardedTitle}
                  </h2>
                ) : null}
                {examOverlay?.attemptDiscardedBody ? (
                  <p className="font-sm font-slate-grey m-0 lh-lg">
                    {examOverlay.attemptDiscardedBody}
                  </p>
                ) : null}
                {examOverlay?.attemptDiscardedCta ? (
                  <button
                    type="button"
                    className="btn btn-primary rounded-1 px-4 py-3 font-sm font-600"
                    onClick={openExam}
                  >
                    {examOverlay.attemptDiscardedCta}
                  </button>
                ) : null}
                {examOverlay?.attemptDiscardedLaterText ? (
                  <button
                    type="button"
                    className="btn btn-link p-0 font-sm font-600"
                    onClick={() => setIsAttemptDiscardedOpen(false)}
                  >
                    {examOverlay.attemptDiscardedLaterText}
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isAttemptLimitOpen ? (
        <div
          className="modal fade show d-block bg-dark bg-opacity-75"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsAttemptLimitOpen(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-content border-0 rounded-3 p-4 p-md-5 outfit-font position-relative">
              <button
                type="button"
                className="btn border-0 bg-transparent position-absolute top-0 end-0 p-3 font-primary"
                aria-label={examOverlay?.closeAriaLabel}
                onClick={() => setIsAttemptLimitOpen(false)}
              >
                <MdClose size={20} />
              </button>
              <div className="d-flex flex-column align-items-center gap-3 text-center pe-4">
                {examOverlay?.attemptLimitTitle ? (
                  <h2 className="font-lg font-600 font-primary lh-sm m-0">
                    {examOverlay.attemptLimitTitle}
                  </h2>
                ) : null}
                {attemptLimitBody ? (
                  <p className="font-sm font-slate-grey m-0 lh-lg">
                    {attemptLimitBody}
                  </p>
                ) : null}
                {examOverlay?.attemptLimitCloseText ? (
                  <button
                    type="button"
                    className="btn btn-primary rounded-1 px-4 py-3 font-sm font-600"
                    onClick={() => setIsAttemptLimitOpen(false)}
                  >
                    {examOverlay.attemptLimitCloseText}
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
