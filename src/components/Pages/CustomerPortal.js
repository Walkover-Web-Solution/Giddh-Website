import SplitBanner from "../NewComps/Banner/SplitBanner";
import GridFeatures from "../NewComps/Features/GridFeatures";
import AlternateFeatures from "../NewComps/Features/AlternateFeatures";
import GiddhVs from "../NewComps/GiddhVs";
import EssentialFeatures from "../NewComps/Features/EssentialFeatures";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";

export default function CustomerPortal({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <GridFeatures features={pageData?.characteristics} />
      <AlternateFeatures features={pageData?.features} />
      <GridFeatures features={pageData?.benefits} />
      <GiddhVs giddhVs={pageData?.giddhVs} />
      <EssentialFeatures compData={pageData?.useCases} />
      <CTA compData={pageData?.cta} />
      <FAQs faqs={pageData?.faqs} />
    </>
  );
}
