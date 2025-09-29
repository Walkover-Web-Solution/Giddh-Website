import StackedBanner from "../NewComps/Banner/StackedBanner";
import AlternateFeatures from "../NewComps/Features/AlternateFeatures";
import Stats from "../NewComps/Stats";
import CTA from "../NewComps/CTA";
import GridFeatures from "../NewComps/Features/GridFeatures";
import FeedbackCards from "../NewComps/FeedbackCards";
import TrustBadgeScrollable from "../NewComps/TrustBadgeScrollable";
import FAQs from "../NewComps/FAQs";
import SupportedPlatforms from "../NewComps/SupportedPlatforms";

export default function InvoiceSoftware({ pageData, pageInfo }) {
  return (
    <>
      <StackedBanner compData={pageData?.stackedBanner} />
      <Stats stats={pageData?.stats} />
      <CTA compData={pageData?.cta} />
      <AlternateFeatures features={pageData?.features} />
      <GridFeatures compData={pageData?.characteristics} />
      <FeedbackCards testimonials={pageData?.testimonials} />
      <CTA compData={pageData?.ctaTwo} />
      <TrustBadgeScrollable heading={pageData?.trustBadgeBrands} />
      <SupportedPlatforms supportedPlatforms={pageData?.supportedPlatforms} />
      <FAQs faqs={pageData?.faqs} />
    </>
  );
}