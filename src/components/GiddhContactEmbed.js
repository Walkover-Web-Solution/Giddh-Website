import Script from "next/script";

/** Embarko contact popup — load only on pages that expose contact CTAs. */
export default function GiddhContactEmbed() {
  return (
    <>
      <Script
        id="giddh-contact-embed"
        src="https://giddh-contact.embarko.app/embed.js"
        strategy="lazyOnload"
      />
      <Script
        id="giddh-contact-bridge"
        src="/js/giddh-contact-bridge.js"
        strategy="lazyOnload"
        data-app-env={process.env.NEXT_PUBLIC_APP_ENV || ""}
      />
    </>
  );
}