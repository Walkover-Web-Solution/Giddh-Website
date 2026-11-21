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
  const name = req.body?.name?.trim();
  const email = req.body?.email?.trim();
  const designation = req.body?.designation?.trim();
  const city = req.body?.city?.trim();

  if (!name || !email || !designation || !city) {
    return res.status(400).json({ ok: false });
  }

  try {
    const { status, data, ok } = await callGiddhCertApi("/profile", {
      method: "POST",
      body: { countryCode, mobile, name, email, designation, city },
    });

    if (!ok || data?.status !== "success") {
      return res.status(status).json({
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
