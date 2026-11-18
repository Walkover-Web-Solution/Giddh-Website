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

  const name = String(req.body?.name || "").trim();
  const email = String(req.body?.email || "").trim();
  const designation = String(req.body?.designation || "").trim();
  const city = String(req.body?.city || "").trim();

  if (!isValidMobile(mobile)) {
    return res.status(401).json({
      ok: false,
      message: "Session expired. Please verify mobile again.",
    });
  }

  if (!name || !email || !designation || !city) {
    return res.status(400).json({
      ok: false,
      message: "Name, email, profession, and city are required.",
    });
  }

  try {
    const { status, data, ok } = await callGiddhCertApi("/profile", {
      method: "POST",
      body: { countryCode, mobile, name, email, designation, city },
    });

    if (!ok || data?.status !== "success") {
      return res.status(status || 500).json({
        ok: false,
        message: data?.message,
        data,
      });
    }

    const body = data.body;
    return res.status(200).json({
      ok: true,
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
