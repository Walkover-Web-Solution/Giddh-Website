import SplitBanner from "../NewComps/Banner/SplitBanner";
import GridFeatures from "../NewComps/Features/GridFeatures";
import AlternateFeatures from "../NewComps/Features/AlternateFeatures";
import QuickStartSection from "../NewComps/QuickStartSection";
import EssentialFeatures from "../NewComps/Features/EssentialFeatures";
import FeedbackCards from "../NewComps/FeedbackCards";
import FAQs from "../NewComps/FAQs";
import CTA from "../NewComps/CTA";

export default function InvoiceSoftware({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <GridFeatures features={pageData?.characteristics} />
      <AlternateFeatures features={pageData?.features} />
      <QuickStartSection compData={pageData?.quickStartSection} />
      <EssentialFeatures compData={pageData?.useCases} />
      <GridFeatures features={pageData?.coreFeatures} />
      <FeedbackCards testimonials={pageData?.testimonials} />
      <FAQs faqs={pageData?.faqs} />
      <CTA compData={pageData?.cta} />
    </>
  );
}
