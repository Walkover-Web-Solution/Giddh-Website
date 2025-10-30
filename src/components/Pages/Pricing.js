import StackedBanner from "../NewComps/Banner/StackedBanner";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";
import GridFeatures from "../NewComps/Features/GridFeatures";
import FeedbackCards from "../NewComps/FeedbackCards";
import Stats from "../NewComps/Stats";

export default function Pricing({ pageData }) {
  return (
    <>
      <StackedBanner compData={pageData?.stackedBanner} />
      <CTA compData={pageData?.ctaOne} />
      <GridFeatures features={pageData?.characteristics} />
      <GridFeatures features={pageData?.whyGiddh} />
      <Stats stats={pageData?.stats} />
      <FeedbackCards testimonials={pageData?.testimonials} />
      <CTA compData={pageData?.ctaTwo} />
      <FAQs faqs={pageData?.faqs} />
    </>
  );
}
