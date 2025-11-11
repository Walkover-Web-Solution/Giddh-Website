import SplitBanner from "../NewComps/Banner/SplitBanner";
import AlternateFeatures from "../NewComps/Features/AlternateFeatures";
import FAQs from "../NewComps/FAQs";
import CTA from "../NewComps/CTA";

export default function MultiCurrencyAccountingSoftware({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <AlternateFeatures features={pageData?.features} />
      <FAQs faqs={pageData?.faqs} />
      <CTA compData={pageData?.cta} />
    </>
  );
}
