import {
  callGiddhCertApi,
  isValidMobile,
  normalizeMobile,
} from "@/utils/giddhCert/serverApi";
import { getSessionFromRequest } from "@/utils/giddhCert/session";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const session = getSessionFromRequest(req);
  const mobile = normalizeMobile(req.query?.mobile || session?.mobile);
  const countryCode = String(
    req.query?.countryCode || session?.countryCode || "91"
  ).replace(/\D/g, "");

  if (!isValidMobile(mobile)) {
    return res.status(401).json({
      ok: false,
      message: "Session expired. Please verify mobile again.",
    });
  }

  try {
    const result = await callGiddhCertApi("/download", {
      method: "GET",
      body: { countryCode, mobile },
    });

    if (!result.ok) {
      return res.status(result.status || 404).json({
        ok: false,
        message: result.data?.message,
        data: result.data,
      });
    }

    if (result.buffer) {
      res.setHeader("Content-Type", result.contentType);
      res.setHeader(
        "Content-Disposition",
        `inline; filename="giddh-certificate-${mobile}.pdf"`
      );
      return res.status(200).send(result.buffer);
    }

    return res.status(200).json({ ok: true, data: result.data });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
}
