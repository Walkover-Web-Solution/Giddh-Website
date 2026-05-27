import SplitBanner from "../NewComps/Banner/SplitBanner";
import AlternateFeatures from "../NewComps/Features/AlternateFeatures";
import Stepper from "../NewComps/Stepper";
import GridFeatures from "../NewComps/Features/GridFeatures";
import WhyGiddh from "../NewComps/WhyGiddh";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";

export default function Affiliate({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <AlternateFeatures features={pageData?.features} />
      <Stepper compData={pageData?.stepper} />
      <GridFeatures features={pageData?.resources} />
      <WhyGiddh compData={pageData?.whyGiddh} />
      <FAQs faqs={pageData?.faqs} />
      <CTA compData={pageData?.cta} />
    </>
  );
}
