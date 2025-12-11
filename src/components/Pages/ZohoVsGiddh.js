import SplitBanner from "../NewComps/Banner/SplitBanner";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";
import AlternateFeatures from "../NewComps/Features/AlternateFeatures";
import FeedbackCards from "../NewComps/FeedbackCards";
import GiddhVs from "../NewComps/GiddhVs";
import QuickStartSection from "../NewComps/QuickStartSection";
import SupportedPlatforms from "../NewComps/SupportedPlatforms";
import Testimonials from "../NewComps/Testimonials";

export default function ZohoVsGiddh({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <AlternateFeatures features={pageData?.features} />
      <GiddhVs giddhVs={pageData?.giddhVs} />
      <QuickStartSection compData={pageData?.quickStartSection} />
      <FeedbackCards testimonials={pageData?.testimonials} />
      <CTA compData={pageData?.cta} />
      <SupportedPlatforms supportedPlatforms={pageData?.supportedPlatforms} />
      <FAQs faqs={pageData?.faqs} />
    </>
  );
}
