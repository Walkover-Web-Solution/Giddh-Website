import FeatureGallery from "@/components/featureGallery";
import MakeTheSwitchIndexPage from "@/components/makeTheSwitch";
import BannerSection from "@/components/bannerSection";
import GstIndexPage from "@/components/gstIndexPage";
import ClientSummary from "@/components/clientSummary";

const index = (path) => {
  const link = path.path;
  return (
    <>
      <BannerSection path={link}/>
      <GstIndexPage path={link}/>    
      <FeatureGallery path={link}/>
      <MakeTheSwitchIndexPage path={link}/>
      <ClientSummary />
    </>
  );
};
export default index;
