import FeatureGallery from "@/components/featureGallery";
import MakeTheSwitchIndexPage from "@/components/makeTheSwitch";
import BannerSection from "@/components/bannerSection";
import ClientSummary from "@/components/clientSummary";
import Faqs from "@/components/NewComps/FAQs";
import faqData from "../../data/faqs.json";

const ukIndex = (path) => {
  const link = path.path;
  const faq = faqData?.home
  return (
    <>
      <BannerSection path={link} />
      <FeatureGallery path={link} />
      <ClientSummary />
      <MakeTheSwitchIndexPage path={link} />
      <Faqs faqs={faq} />
    </>
  );
};
export default ukIndex;
