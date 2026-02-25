import Head from "next/head";
import { useMemo } from "react";

export default function Schema({ schemas, faqs }) {
  const allSchemas = useMemo(() => {
    const schemasArray = schemas?.length !== undefined ? schemas : [];

    const hasFaqSchema = schemasArray.some(
      (schema) => schema?.["@type"] === "FAQPage"
    );

    if (!hasFaqSchema && faqs?.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      };
      return [...schemasArray, faqSchema];
    }

    return schemasArray;
  }, [schemas, faqs]);

  if (allSchemas.length === 0) {
    return null;
  }

  return (
    <Head>
      {allSchemas.map((content, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(content)}
        </script>
      ))}
    </Head>
  );
}
