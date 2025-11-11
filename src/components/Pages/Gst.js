import SplitBanner from "../NewComps/Banner/SplitBanner";
import AlternateFeatures from "../NewComps/Features/AlternateFeatures";
import GridFeatures from "../NewComps/Features/GridFeatures";
import TrustBadgeScrollable from "../NewComps/TrustBadgeScrollable";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";

export default function Gst({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <AlternateFeatures features={pageData?.features} />
      <GridFeatures features={pageData?.characteristics} />
      <TrustBadgeScrollable compData={pageData?.trustBadgeBrands} />
      <CTA compData={pageData?.ctaOne} />
      <FAQs faqs={pageData?.faqs} />
      <CTA compData={pageData?.ctaTwo} />
    </>
  );
}
