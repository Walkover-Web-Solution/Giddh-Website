import StackedBanner from "../NewComps/Banner/StackedBanner";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";
import AlternateFeatures from "../NewComps/Features/AlternateFeatures";
import FeedbackCards from "../NewComps/FeedbackCards";
import QuickStartSection from "../NewComps/QuickStartSection";

export default function TallyVsGiddh({ pageData }) {
  return (
    <>
      <StackedBanner compData={pageData?.stackedBanner} />
      <AlternateFeatures features={pageData?.features} />
      <QuickStartSection compData={pageData?.quickStartSection} />
      <FeedbackCards testimonials={pageData?.testimonials} />
      <CTA compData={pageData?.cta} />
      <FAQs faqs={pageData?.faqs} />
    </>
  );
}
