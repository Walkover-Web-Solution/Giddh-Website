import { callGiddhCertApi } from "@/utils/giddhCert/serverApi";
import { getSessionFromRequest } from "@/utils/giddhCert/session";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ ok: false });
  }

  const session = getSessionFromRequest(req);
  if (!session) {
    return res.status(401).json({ ok: false });
  }

  const { mobile, countryCode } = session;

  try {
    const { ok, status, data, buffer, contentType } = await callGiddhCertApi(
      "/download",
      { method: "GET", body: { countryCode, mobile } }
    );

    if (!ok) {
      return res.status(status).json({
        ok: false,
        message: data?.message,
        data,
      });
    }

    if (buffer) {
      res.setHeader("Content-Type", contentType);
      res.setHeader(
        "Content-Disposition",
        `inline; filename="giddh-certificate-${mobile}.pdf"`
      );
      return res.status(200).send(buffer);
    }

    return res.status(200).json({ ok: true, data });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
}
