import SplitBanner from "../NewComps/Banner/SplitBanner";
import GridFeatures from "../NewComps/Features/GridFeatures";
import QuickStartSection from "../NewComps/QuickStartSection";
import AlternateFeatures from "../NewComps/Features/AlternateFeatures";
import EssentialFeatures from "../NewComps/Features/EssentialFeatures";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";

export default function SalespersonFeatureReport({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <GridFeatures features={pageData?.characteristics} />
      <QuickStartSection compData={pageData?.quickStartSection} />
      <AlternateFeatures features={pageData?.features} />
      <EssentialFeatures compData={pageData?.useCases} />
      <CTA compData={pageData?.cta} />
      <FAQs faqs={pageData?.faqs} />
      <CTA compData={pageData?.ctaTwo} />
    </>
  );
}
