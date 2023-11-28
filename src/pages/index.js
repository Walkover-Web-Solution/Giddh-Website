import FeatureGallery from "@/components/featureGallery";
import MakeTheSwitchIndexPage from "@/components/makeTheSwitch";
import BannerSection from "@/components/bannerSection";
import ClientSummary from "@/components/clientSummary";
import FaqHomePage from "@/components/faqHomePage";

const index = (path) => {
  const link = path.path;
  return (
    <>
      <BannerSection />
      <ClientSummary />    
      <FeatureGallery path={link}/>
      <MakeTheSwitchIndexPage path={link}/>
      <FaqHomePage />
    </>
  );
};
export default index;
