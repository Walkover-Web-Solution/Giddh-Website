import {
  callGiddhCertApi,
  isValidMobile,
  normalizeMobile,
} from "@/utils/giddhCert/serverApi";
import { getSessionFromRequest } from "@/utils/giddhCert/session";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const session = getSessionFromRequest(req);
  const mobile = normalizeMobile(req.body?.mobile || session?.mobile);
  const countryCode = String(
    req.body?.countryCode || session?.countryCode || "91"
  ).replace(/\D/g, "");

  const score = Number(req.body?.score);
  const percentage = Number(req.body?.percentage);
  const totalQuestions = Number(req.body?.totalQuestions);

  if (!isValidMobile(mobile)) {
    return res.status(401).json({
      ok: false,
      message: "Session expired. Please verify mobile again.",
    });
  }

  if (
    !Number.isFinite(score) ||
    !Number.isFinite(percentage) ||
    !Number.isFinite(totalQuestions)
  ) {
    return res.status(400).json({
      ok: false,
      message: "score, percentage, and totalQuestions are required.",
    });
  }

  try {
    const { status, data, ok } = await callGiddhCertApi("/result", {
      method: "POST",
      body: { countryCode, mobile, score, percentage, totalQuestions },
    });

    if (!ok || data?.status !== "success") {
      return res.status(status || 500).json({
        ok: false,
        message: data?.message,
        data,
      });
    }

    const body = data.body;
    const lastAttempt = body.lastAttempt;

    return res.status(200).json({
      ok: true,
      learner: {
        mobile,
        countryCode,
        profile: body.profile,
        canAttempt: body.canAttempt,
        nextAttemptAt: body.nextAttemptAt,
        lastAttempt,
      },
      certificate: {
        learnerName: body.profile?.name,
        score: lastAttempt.percentage,
        issuedAt: lastAttempt.completedAt,
        validUntil: lastAttempt.validUntil,
        downloadUrl: `/api/giddh-cert/download?countryCode=${encodeURIComponent(
          countryCode
        )}&mobile=${encodeURIComponent(mobile)}`,
      },
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
}
