import StackedBanner from "../NewComps/Banner/StackedBanner";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";
import GridFeatures from "../NewComps/Features/GridFeatures";
import FeedbackCards from "../NewComps/FeedbackCards";
import TrustBadgeScrollable from "../NewComps/TrustBadgeScrollable";

export default function InventoryManagementSoftware({ pageData }) {
  return (
    <>
      <StackedBanner compData={pageData?.stackedBanner} />
      <TrustBadgeScrollable compData={pageData?.trustBadgeBrands} />
      <GridFeatures features={pageData?.characteristics} />
      <FeedbackCards testimonials={pageData?.testimonials} />
      <CTA compData={pageData?.cta} />
      <FAQs faqs={pageData?.faqs} />
    </>
  );
}
