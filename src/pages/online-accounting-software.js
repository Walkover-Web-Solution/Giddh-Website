import Banner from "@/components/NewComps/Banner";
import Features from "@/components/NewComps/Features";
import GiddhFor from "@/components/NewComps/GiddhFor";
import Testimonials from "@/components/NewComps/Testimonials";
import OurClient from "@/components/NewComps/OurClients";
import PreFooter from "@/components/NewComps/PreFooter";
import FAQs from "@/components/NewComps/FAQs";
import TrustBadge from "@/components/NewComps/TrustBadge";
import SeeGiddhInAction from "@/components/NewComps/SeeGiddhInAction";

const index = (path) => {
  const link = path.path;

  return (
    <>
      <Banner path={link} />

      <Features path={link} />
      <TrustBadge/>
      <GiddhFor />
      <Testimonials />
      <SeeGiddhInAction/>
      {/* <OurClient /> */}
      <PreFooter />
      <FAQs />
    </>
  );
};
export default index;
