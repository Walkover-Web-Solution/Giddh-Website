import StackedBanner from "../NewComps/Banner/StackedBanner";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";
import GridFeatures from "../NewComps/Features/GridFeatures";
import FeedbackCards from "../NewComps/FeedbackCards";
import Stats from "../NewComps/Stats";
import PricingComp from "../NewComps/Pricing";

export default function Pricing({ pageData , pageInfo  , pricingPlans}) {

  return (
    <>
      <StackedBanner compData={pageData?.stackedBanner} />
      <PricingComp pageInfo={pageInfo}  pricingPlans={pricingPlans}/>
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
