import SplitBanner from "../NewComps/Banner/SplitBanner";
import FinancialReportsTable from "../NewComps/FinancialReportsTable";
import IconCardFeatures from "../NewComps/Features/IconCardFeatures";
import ChecklistCards from "../NewComps/GiddhFor/ChecklistCards";
import HighlightBannerCards from "../NewComps/HighlightBannerCards";
import CTA from "../NewComps/CTA";
import Footer from "../NewComps/Footer";

export default function IcaiReady({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <IconCardFeatures compData={pageData?.iconCardFeaturesOne} />
      <FinancialReportsTable compData={pageData?.financialReportsTable} />
      <IconCardFeatures compData={pageData?.iconCardFeaturesTwo} />
      <ChecklistCards compData={pageData?.checklistCards} />
      <HighlightBannerCards compData={pageData?.highlightBannerCards} />
      <CTA compData={pageData?.cta} />
      <Footer />
    </>
  );
}
