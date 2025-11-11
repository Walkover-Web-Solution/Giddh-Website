import StackedBanner from "../NewComps/Banner/StackedBanner";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";
import GridFeatures from "../NewComps/Features/GridFeatures";
import FeedbackCards from "../NewComps/FeedbackCards";
import GiddhVs from "../NewComps/GiddhVs";
import SupportedPlatforms from "../NewComps/SupportedPlatforms";

export default function ConectBankReconcile({ pageData }) {
  return (
    <>
      <StackedBanner compData={pageData?.stackedBanner} />
      <GridFeatures features={pageData?.characteristics} />
      <GiddhVs giddhVs={pageData?.giddhVs} />
      <CTA compData={pageData?.ctaOne} />
      <FeedbackCards testimonials={pageData?.testimonials} />
      <CTA compData={pageData?.ctaTwo} />
      <SupportedPlatforms supportedPlatforms={pageData?.supportedPlatforms} />
      <FAQs faqs={pageData?.faqs} />
    </>
  );
}