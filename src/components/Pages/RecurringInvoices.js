import SplitBanner from "../NewComps/Banner/SplitBanner";
import GridFeatures from "../NewComps/Features/GridFeatures";
import QuickStartSection from "../NewComps/QuickStartSection";
import AlternateFeatures from "../NewComps/Features/AlternateFeatures";
import EssentialFeatures from "../NewComps/Features/EssentialFeatures";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";

export default function RecurringInvoices({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <GridFeatures features={pageData?.characteristics} />
      <AlternateFeatures features={pageData?.features} />
      <QuickStartSection compData={pageData?.quickStartSection} />
      <EssentialFeatures compData={pageData?.useCases} />
      <FAQs faqs={pageData?.faqs} />
      <CTA compData={pageData?.cta} />
    </>
  );
}
