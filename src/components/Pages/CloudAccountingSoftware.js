import SplitBanner from "../NewComps/Banner/SplitBanner";
import StackedBanner from "../NewComps/Banner/StackedBanner";
import AlternateFeatures from "../NewComps/Features/AlternateFeatures";
import GridFeatures from "../NewComps/Features/GridFeatures";
import FeedbackCards from "../NewComps/FeedbackCards";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";

export default function CloudAccountingSoftware({ pageData, pageInfo }) {
  return (
    <>
      <SplitBanner compdata={pageData?.splitBanner} />
      <GridFeatures compData={pageData?.characteristics} />
      <AlternateFeatures features={pageData?.features} />
      <FeedbackCards testimonials={pageData?.testimonials} />
      <FAQs faqs={pageData?.faqs} />
      <CTA compData={pageData?.cta} />
    </>
  );
}
