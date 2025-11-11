import SplitBanner from "../NewComps/Banner/SplitBanner";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";
import EssentialFeatures from "../NewComps/Features/EssentialFeatures";
import FeedbackCards from "../NewComps/FeedbackCards";
import Instructions from "../NewComps/Instructions";

export default function ImportData({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <Instructions compData={pageData?.instructions} />
      <EssentialFeatures compData={pageData?.features} />
      <FeedbackCards testimonials={pageData?.testimonials} />
      <FAQs faqs={pageData?.faqs} />
      <CTA compData={pageData?.cta} />
    </>
  );
}
