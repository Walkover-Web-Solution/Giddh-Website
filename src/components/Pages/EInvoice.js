import SplitBanner from "../NewComps/Banner/SplitBanner";
import CTA from "../NewComps/CTA";
import GridFeatures from "../NewComps/Features/GridFeatures";
import GiddhFor from "../NewComps/GiddhFor";
import GiddhVs from "../NewComps/GiddhVs";

export default function EInvoice({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <GridFeatures features={pageData?.characteristics} />
      <CTA compData={pageData?.cta} />
      <GiddhFor compData={pageData?.giddhFor} />
      <GiddhVs compData={pageData?.giddhVs} />
    </>
  );
}
