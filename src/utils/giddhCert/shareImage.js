let libraryPromise;
const pdfBytesByUrl = new Map();

function saveBlob(blob, filename) {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}

export function prefetchCertificateShareEngine() {
  if (typeof window === "undefined") {
    return undefined;
  }
  if (!libraryPromise) {
    libraryPromise = import("@hyzyla/pdfium/browser/cdn").then(
      ({ PDFiumLibrary }) => PDFiumLibrary.init({ disableCDNWarning: true })
    );
  }
  return libraryPromise;
}

export function prefetchCertificateShareAssets(downloadUrl) {
  if (typeof window === "undefined") {
    return undefined;
  }
  const engine = prefetchCertificateShareEngine();
  if (!downloadUrl) {
    return engine;
  }
  return Promise.all([engine, getPdfBytes(downloadUrl)]);
}

async function getPdfBytes(downloadUrl) {
  const cached = pdfBytesByUrl.get(downloadUrl);
  if (cached) {
    return cached;
  }

  const response = await fetch(downloadUrl, {
    method: "GET",
    mode: "cors",
    cache: "force-cache",
  });
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.status = response.status;
    throw error;
  }

  const bytes = new Uint8Array(await response.arrayBuffer());
  pdfBytesByUrl.set(downloadUrl, bytes);
  return bytes;
}

export async function downloadCertificateShareImage(certificate) {
  if (typeof window === "undefined" || !certificate?.downloadUrl) {
    return;
  }

  const [library, pdfBytes] = await Promise.all([
    prefetchCertificateShareEngine(),
    getPdfBytes(certificate.downloadUrl),
  ]);

  const pdfDocument = await library.loadDocument(pdfBytes);
  try {
    const page = pdfDocument.getPage(0);
    try {
      const rendered = await page.render({ scale: 1.5, render: "bitmap" });
      const canvas = window.document.createElement("canvas");
      canvas.width = rendered.width;
      canvas.height = rendered.height;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) {
        throw new Error("Unable to create share image");
      }
      ctx.putImageData(
        new ImageData(
          new Uint8ClampedArray(rendered.data),
          rendered.width,
          rendered.height
        ),
        0,
        0
      );
      const blob = await new Promise((resolve, reject) => {
        canvas.toBlob(
          (result) =>
            result
              ? resolve(result)
              : reject(new Error("Unable to create share image")),
          "image/jpeg",
          0.9
        );
      });
      saveBlob(blob, "giddh-certificate.jpg");
    } finally {
      page.close();
    }
  } finally {
    pdfDocument.destroy();
  }
}
