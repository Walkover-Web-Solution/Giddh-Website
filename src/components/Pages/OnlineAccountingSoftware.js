import SplitBanner from "../NewComps/Banner/SplitBanner";
import ToggleFeatures from "../NewComps/Features/ToggleFeatures";
import Stats from "../NewComps/Stats";
import WhyGiddh from "../NewComps/WhyGiddh";

import CTASection from "../NewComps/CTASection";
import GiddhFor from "../NewComps/GiddhFor";
import Testimonials from "../NewComps/Testimonials";


export default function OnlineAccountingSoftware({ pageData }) {
  return (
    <>
      <SplitBanner compdata={pageData?.splitBanner} />
      <ToggleFeatures features={pageData?.toggleFeatures} />
      <Stats stats={pageData?.stats} />
      <WhyGiddh compdata={pageData?.whyGiddh} />
      <CTASection hasImage={true} compData={pageData?.cta} />
      <GiddhFor compdata={pageData?.giddhFor} />
      <Testimonials testimonials={pageData?.testimonials} />
       {/* <GiddhFor />
       <Testimonials />
       <SeeGiddhInAction />
       <FAQs />
       <Footer /> */}
    </>
  );
}