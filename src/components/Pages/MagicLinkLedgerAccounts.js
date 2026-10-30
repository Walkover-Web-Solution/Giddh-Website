import SplitBanner from "../NewComps/Banner/SplitBanner";
import GridFeatures from "../NewComps/Features/GridFeatures";
import AlternateFeatures from "../NewComps/Features/AlternateFeatures";
import EssentialFeatures from "../NewComps/Features/EssentialFeatures";
import FAQs from "../NewComps/FAQs";
import CTA from "../NewComps/CTA";

export default function MagicLinkLedgerAccounts({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <GridFeatures features={pageData?.characteristics} />
      <GridFeatures features={pageData?.benefits} />
      <AlternateFeatures features={pageData?.features} />
      <EssentialFeatures compData={pageData?.useCases} />
      <FAQs faqs={pageData?.faqs} />
      <CTA compData={pageData?.cta} />
    </>
  );
}
