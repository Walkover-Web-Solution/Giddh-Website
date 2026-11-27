let libraryPromise;

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

/** Same download API PDF → PNG via PDFium. */
export async function downloadCertificateShareImage(certificate) {
  if (typeof window === "undefined" || !certificate?.downloadUrl) {
    return;
  }

  const response = await fetch(certificate.downloadUrl, {
    method: "GET",
    mode: "cors",
    cache: "no-store",
  });
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.status = response.status;
    throw error;
  }

  if (!libraryPromise) {
    libraryPromise = import("@hyzyla/pdfium/browser/cdn").then(
      ({ PDFiumLibrary }) => PDFiumLibrary.init({ disableCDNWarning: true })
    );
  }

  const library = await libraryPromise;
  const pdfDocument = await library.loadDocument(
    new Uint8Array(await response.arrayBuffer())
  );
  try {
    const page = pdfDocument.getPage(0);
    try {
      const rendered = await page.render({ scale: 2, render: "bitmap" });
      const canvas = window.document.createElement("canvas");
      canvas.width = rendered.width;
      canvas.height = rendered.height;
      const ctx = canvas.getContext("2d");
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
          "image/png"
        );
      });
      saveBlob(blob, "giddh-certificate.png");
    } finally {
      page.close();
    }
  } finally {
    pdfDocument.destroy();
  }
}
