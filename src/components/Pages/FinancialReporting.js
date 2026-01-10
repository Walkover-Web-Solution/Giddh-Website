import StackedBanner from "../NewComps/Banner/StackedBanner";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";
import GridFeatures from "../NewComps/Features/GridFeatures";
import FeedbackCards from "../NewComps/FeedbackCards";
import GiddhVs from "../NewComps/GiddhVs";

export default function FinancialReporting({ pageData }) {
  return (
    <>
      <StackedBanner compData={pageData?.stackedBanner} />
      <CTA compData={pageData?.ctaOne} />
      <GridFeatures features={pageData?.features} />
      <GiddhVs giddhVs={pageData?.giddhVs} />
      <FeedbackCards testimonials={pageData?.testimonials} />
      <CTA compData={pageData?.ctaTwo} />
      <FAQs faqs={pageData?.faqs} />
    </>
  );
}
