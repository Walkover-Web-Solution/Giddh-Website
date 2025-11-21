import SplitBanner from "../NewComps/Banner/SplitBanner";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";
import EssentialFeatures from "../NewComps/Features/EssentialFeatures";
import QuickStartSection from "../NewComps/QuickStartSection";
import SupportedPlatforms from "../NewComps/SupportedPlatforms";

export default function TallyToGiddhMigration({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <EssentialFeatures compData={pageData?.features} />
      <CTA compData={pageData?.cta} />
      <QuickStartSection compData={pageData?.quickStartSection} />
      <SupportedPlatforms supportedPlatforms={pageData?.supportedPlatforms} />
      <FAQs faqs={pageData?.faqs} />
    </>
  );
}
