import StackedBanner from "../NewComps/Banner/StackedBanner";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";
import GridFeatures from "../NewComps/Features/GridFeatures";
import FeedbackCards from "../NewComps/FeedbackCards";
import Stats from "../NewComps/Stats";
import SupportedPlatforms from "../NewComps/SupportedPlatforms";

export default function SmallBusinessBookkeepingSoftware({ pageData }) {
  return (
    <>
      <StackedBanner compData={pageData?.stackedBanner} />
      <Stats stats={pageData?.stats} />
      <GridFeatures features={pageData?.features} />
      <FeedbackCards testimonials={pageData?.testimonials} />
      <CTA compData={pageData?.cta} />
      <SupportedPlatforms supportedPlatforms={pageData?.supportedPlatforms} />
      <FAQs faqs={pageData?.faqs} />
    </>
  );
}
