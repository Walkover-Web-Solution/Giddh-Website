import SplitBanner from "../NewComps/Banner/SplitBanner";
import AlternateFeatures from "../NewComps/Features/AlternateFeatures";
import FAQs from "../NewComps/FAQs";
import CTA from "../NewComps/CTA";
import GridBenefits from "../NewComps/GridBenefits";

export default function MultiCurrencyAccountingSoftware({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <AlternateFeatures features={pageData?.features} />
      <GridBenefits compData={pageData?.gridFeatures} />
      <FAQs faqs={pageData?.faqs} />
      <CTA compData={pageData?.cta} />
    </>
  );
}
