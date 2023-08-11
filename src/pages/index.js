import FeatureGallery from "@/components/featureGallery";
import MakeTheSwitchIndexPage from "@/components/makeTheSwitch";
import BannerSection from "@/components/bannerSection";
import GstIndexPage from "@/components/gstIndexPage";

const index = () => {
  return (
    <>
      <BannerSection />
      <GstIndexPage />    
      <FeatureGallery />
      <MakeTheSwitchIndexPage />
    </>
  );
};
export default index;
