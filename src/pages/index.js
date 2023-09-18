import FeatureGallery from "@/components/featureGallery";
import MakeTheSwitchIndexPage from "@/components/makeTheSwitch";
import BannerSection from "@/components/bannerSection";
import GstIndexPage from "@/components/gstIndexPage";
import ClientSummary from "@/components/clientSummary";

const index = () => {
  return (
    <>
      <BannerSection />
      <GstIndexPage />    
      <FeatureGallery />
      <MakeTheSwitchIndexPage />
      <ClientSummary />
    </>
  );
};
export default index;
