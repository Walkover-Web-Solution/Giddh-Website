import SearchBanner from "../components/NewComps/Banner/SearchBanner";
import FAQs from "../components/NewComps/FAQs";
import CTA from "../components/NewComps/CTA";

export default function FaqPage({ pageData }) {
  return (
    <>
      <SearchBanner compData={pageData?.searchBanner} />
      <FAQs faqs={pageData?.productOverviewFaqs?.questions} heading={pageData?.productOverviewFaqs?.heading} layout="column" />
      <FAQs faqs={pageData?.featuresFaqs?.questions} heading={pageData?.featuresFaqs?.heading} layout="column" />
      <CTA compData={pageData?.cta} />
      <FAQs faqs={pageData?.gstComplianceFaqs?.questions} heading={pageData?.gstComplianceFaqs?.heading} layout="column" />
      <FAQs faqs={pageData?.pricingFaqs?.questions} heading={pageData?.pricingFaqs?.heading} layout="column" />
      <CTA compData={pageData?.cta} />
      <FAQs faqs={pageData?.securityFaqs?.questions} heading={pageData?.securityFaqs?.heading} layout="column" />
      <FAQs faqs={pageData?.integrationsFaqs?.questions} heading={pageData?.integrationsFaqs?.heading} layout="column" />
      <CTA compData={pageData?.cta} />
      <FAQs faqs={pageData?.migrationFaqs?.questions} heading={pageData?.migrationFaqs?.heading} layout="column" />
      <FAQs faqs={pageData?.supportFaqs?.questions} heading={pageData?.supportFaqs?.heading} layout="column" />
    </>
  );
}
