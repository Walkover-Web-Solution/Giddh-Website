

import faqs from "../data/faqs.json";
import { useState, useEffect } from "react";
import Banner from "@/components/NewComps/Banner";
import Features from "@/components/NewComps/Features";
import GiddhFor from "@/components/NewComps/GiddhFor";
import Testimonials from "@/components/NewComps/Testimonials";
import OurClient from "@/components/NewComps/OurClients";
import PreFooter from "@/components/NewComps/PreFooter";
import FAQs from "@/components/NewComps/FAQs";
import TrustBadge from "@/components/NewComps/TrustBadge";

const index = (path) => {
  const link = path.path;
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    setFaq(faqs["home"]);
  }, []);
  return (
    <>
      <Banner path={link} />
      <TrustBadge path={link}/>
      <Features path={link} />
      <GiddhFor/>
      <Testimonials/>
      <OurClient/>
      <PreFooter/>
      <FAQs faq={faq}/>
    </>
  );
};
export default index;
