import SplitBanner from "../NewComps/Banner/SplitBanner";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";
import GridFeatures from "../NewComps/Features/GridFeatures";
import TrustBadgeScrollable from "../NewComps/TrustBadgeScrollable";
import SupportedPlatforms from "../NewComps/SupportedPlatforms";

export default function MultiuserAccountingSoftware({ pageData }) {
  return (
    <>
      <SplitBanner compdata={pageData?.splitBanner} />
      <GridFeatures features={pageData?.characteristics} />
      <TrustBadgeScrollable heading={pageData?.trustBadgeBrands} />
      <CTA compData={pageData?.cta} />
      <SupportedPlatforms supportedPlatforms={pageData?.supportedPlatforms} />
      <FAQs faqs={pageData?.faqs} />
    </>
  )
}