import { MODULE_PASS_PERCENT } from "@/utils/giddhCert/constants";
import {
  callGiddhCertApi,
  isValidMobile,
  normalizeMobile,
} from "@/utils/giddhCert/serverApi";
import { setSessionCookie } from "@/utils/giddhCert/session";

function resolveResumeScreen(body) {
  const lastAttempt = body.lastAttempt;
  const passed =
    Number(lastAttempt?.percentage) >= MODULE_PASS_PERCENT &&
    Boolean(lastAttempt?.downloadUrl);
  if (passed) {
    return "certificate";
  }
  if (body.canAttempt === false && body.nextAttemptAt) {
    return "blocked";
  }
  if (body.profile?.name) {
    return "test";
  }
  return "registration";
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const mobile = normalizeMobile(req.body?.mobile);
  const countryCode = String(req.body?.countryCode || "91").replace(/\D/g, "");

  if (!isValidMobile(mobile)) {
    return res.status(400).json({
      ok: false,
      message: "Please enter a valid 10-digit mobile number.",
    });
  }

  try {
    const { status, data, ok } = await callGiddhCertApi("/check", {
      method: "POST",
      body: { countryCode, mobile },
    });

    if (!ok || data?.status !== "success") {
      return res.status(status || 500).json({
        ok: false,
        message: data?.message,
        data,
      });
    }

    setSessionCookie(res, { mobile, countryCode });

    const body = data.body;

    return res.status(200).json({
      ok: true,
      resumeScreen: resolveResumeScreen(body),
      learner: {
        mobile,
        countryCode,
        profile: body.profile,
        canAttempt: body.canAttempt,
        nextAttemptAt: body.nextAttemptAt,
        lastAttempt: body.lastAttempt,
      },
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
}
