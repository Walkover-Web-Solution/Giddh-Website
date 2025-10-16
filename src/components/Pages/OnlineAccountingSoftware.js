import SplitBanner from "../NewComps/Banner/SplitBanner";
import ToggleFeatures from "../NewComps/Features/ToggleFeatures";
import Stats from "../NewComps/Stats";
import WhyGiddh from "../NewComps/WhyGiddh";
import GiddhFor from "../NewComps/GiddhFor";
import Testimonials from "../NewComps/Testimonials";
import FAQs from "../NewComps/FAQs";
import Footer from "../NewComps/Footer";
import SeeGiddhInAction from "../NewComps/SeeGiddhInAction";
import CTA from "../NewComps/CTA";
import PopUp from "../NewComps/PopUp";

export default function OnlineAccountingSoftware({ pageData }) {
  return (
    <>
      <PopUp />
      <SplitBanner compData={pageData?.splitBanner} />
      <Stats stats={pageData?.stats} />
      <ToggleFeatures features={pageData?.toggleFeatures} />
      <WhyGiddh compData={pageData?.whyGiddh} />
      <CTA hasImage={true} compData={pageData?.cta} />
      <GiddhFor compData={pageData?.giddhFor} />
      <Testimonials testimonials={pageData?.testimonials} />
      <SeeGiddhInAction compData={pageData?.seeGiddhInAction} />
      <FAQs faqs={pageData?.faqs} />
      <Footer />
    </>
  );
}