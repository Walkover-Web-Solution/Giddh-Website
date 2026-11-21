import { callGiddhCertApi } from "@/utils/giddhCert/serverApi";
import { getSessionFromRequest } from "@/utils/giddhCert/session";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  const session = getSessionFromRequest(req);
  if (!session) {
    return res.status(401).json({ ok: false });
  }

  const { mobile, countryCode } = session;
  const score = Number(req.body?.score);
  const percentage = Number(req.body?.percentage);
  const totalQuestions = Number(req.body?.totalQuestions);

  if (
    !Number.isFinite(score) ||
    !Number.isFinite(percentage) ||
    !Number.isFinite(totalQuestions)
  ) {
    return res.status(400).json({ ok: false });
  }

  try {
    const { status, data, ok } = await callGiddhCertApi("/result", {
      method: "POST",
      body: { countryCode, mobile, score, percentage, totalQuestions },
    });

    if (!ok || data?.status !== "success") {
      return res.status(status).json({
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
        downloadUrl: "/api/giddh-cert/download",
      },
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
}
