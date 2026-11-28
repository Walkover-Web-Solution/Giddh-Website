import { useEffect, useRef } from "react";

import {
  IDLE_AUTO_DISCARD_SECONDS,
  IDLE_WARNING_SECONDS,
} from "@/utils/giddhCert/constants";

export default function useExamGuards({
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
}) {
  const lastActivityRef = useRef(Date.now());
  const idleWarningRef = useRef(false);
  idleWarningRef.current = idleWarning;

  useEffect(() => {
    if (!isOpen || !isCommittedAttempt) {
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
  }, [isOpen, isCommittedAttempt, setTabWarning, setIdleWarning]);

  useEffect(() => {
    if (
      !isOpen ||
      !hasStartedModule ||
      phase !== "quiz" ||
      showInstructions ||
      tabWarning ||
      idleWarning
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
  }, [
    isOpen,
    hasStartedModule,
    phase,
    showInstructions,
    tabWarning,
    idleWarning,
    setIdleWarning,
  ]);

  useEffect(() => {
    if (
      !isOpen ||
      !hasStartedModule ||
      !idleWarning ||
      tabWarning ||
      isDiscarding
    ) {
      return undefined;
    }
    const id = setTimeout(() => {
      finalizeDiscardRef.current?.();
    }, IDLE_AUTO_DISCARD_SECONDS * 1000);
    return () => clearTimeout(id);
  }, [
    isOpen,
    hasStartedModule,
    idleWarning,
    tabWarning,
    isDiscarding,
    finalizeDiscardRef,
  ]);
}
