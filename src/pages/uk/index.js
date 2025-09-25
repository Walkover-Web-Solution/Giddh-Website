import FeatureGallery from "@/components/featureGallery";
import MakeTheSwitchIndexPage from "@/components/makeTheSwitch";
import BannerSection from "@/components/bannerSection";
import ClientSummary from "@/components/clientSummary";
import Faqs from "@/components/NewComps/FAQs";
import faqs from "../../data/faqs.json";
import { useState, useEffect } from "react";

const ukIndex = (path) => {
  const link = path.path;
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    setFaq(faqs["home"]);
  }, []);
  return (
    <>
      <BannerSection path={link} />
      <FeatureGallery path={link} />
      <ClientSummary />
      <MakeTheSwitchIndexPage path={link} />
      <Faqs faq={faq} />
    </>
  );
};
export default ukIndex;
