import SplitBanner from "../NewComps/Banner/SplitBanner";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";
import GridFeatures from "../NewComps/Features/GridFeatures";
import FeedbackCards from "../NewComps/FeedbackCards";
import QuickStartSection from "../NewComps/QuickStartSection";
import SupportedPlatforms from "../NewComps/SupportedPlatforms";

export default function MakeTheSwitch({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <CTA compData={pageData?.ctaOne} />
      <QuickStartSection compData={pageData?.quickStartSection} />
      <GridFeatures features={pageData?.features} />
      <CTA compData={pageData?.ctaTwo} />
      <FeedbackCards testimonials={pageData?.testimonials} />
      <SupportedPlatforms supportedPlatforms={pageData?.supportedPlatforms} />
      <FAQs faqs={pageData?.faqs} />
    </>
  );
}
