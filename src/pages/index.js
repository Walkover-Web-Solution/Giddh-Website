import FeatureGallery from "@/components/featureGallery";
import MakeTheSwitchIndexPage from "@/components/makeTheSwitch";
import BannerSection from "@/components/bannerSection";
import ClientSummary from "@/components/clientSummary";
import Faqs from "@/components/faq";
import faqs from "../data/faqs.json";
import { useState, useEffect } from "react";
import Banner from "@/components/NewComps/Banner";
import Features from "@/components/NewComps/Features";
import GiddhFor from "@/components/NewComps/GiddhFor";
import Testimonials from "@/components/NewComps/Testimonials";

const index = (path) => {
  const link = path.path;
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    setFaq(faqs["home"]);
  }, []);
  return (
    <>
      <Banner path={link} />
      <Features path={link} />
      <GiddhFor/>
      <Testimonials/>
      {/* <BannerSection path={link} /> */}
      {/* <FeatureGallery path={link} /> */}
      <ClientSummary />
      <MakeTheSwitchIndexPage path={link} />
      <Faqs faq={faq} />
    </>
  );
};
export default index;
