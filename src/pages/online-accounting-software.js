import { useEffect } from "react";
import Banner from "@/components/NewComps/Banner";
import Features from "@/components/NewComps/Features";
import GiddhFor from "@/components/NewComps/GiddhFor";
import Testimonials from "@/components/NewComps/Testimonials";
import PreFooter from "@/components/NewComps/PreFooter";
import FAQs from "@/components/NewComps/FAQs";
import TrustBadge from "@/components/NewComps/TrustBadge";
import SeeGiddhInAction from "@/components/NewComps/SeeGiddhInAction";
import SwitchToGiddh from "@/components/NewComps/SwitchToGiddh";

const index = (path) => {
  const link = path.path;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const style = document.createElement("style");
      style.textContent =
        "#hello-chatbot-launcher-icon { display: none !important; }";
      document.head.appendChild(style);
    }
  }, []);

  return (
    <>
      <Banner path={link} />
      <Features path={link} />
      <TrustBadge />
      <GiddhFor />
      <SwitchToGiddh />
      <Testimonials />
      <SeeGiddhInAction />
      <PreFooter />
      <FAQs />
    </>
  );
};
export default index;
