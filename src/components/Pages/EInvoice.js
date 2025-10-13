import SplitBanner from "../NewComps/Banner/SplitBanner";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";
import GridFeatures from "../NewComps/Features/GridFeatures";
import GiddhFor from "../NewComps/GiddhFor";
import GiddhVs from "../NewComps/GiddhVs";
import GridBenefits from "../NewComps/GridBenefits";

export default function EInvoice({ pageData }) {
 
  console.log("🚀 ~ EInvoice ~ pageData?.giddhVs:", pageData?.giddhVs)
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <GridFeatures features={pageData?.characteristics} />
      <CTA compData={pageData?.cta} />
      <GridBenefits compData={pageData?.gridFeatures}/>
      <GiddhFor compData={pageData?.giddhFor} />
      <GiddhVs giddhVs={pageData?.giddhVs} />
      <CTA compData={pageData?.ctaTwo} />
      <FAQs faqs={pageData?.faqs}/>
    </>
  );
}
