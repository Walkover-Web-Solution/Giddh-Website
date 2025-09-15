import { useEffect } from "react";
import Banner from "@/components/NewComps/Banner";
import Features from "@/components/NewComps/Features";
import GiddhFor from "@/components/NewComps/GiddhFor";
import WhyGiddh from "@/components/NewComps/WhyGiddh";
import Testimonials from "@/components/NewComps/Testimonials";
import FAQs from "@/components/NewComps/FAQs";
import SeeGiddhInAction from "@/components/NewComps/SeeGiddhInAction";
import CTASection from "@/components/NewComps/CTASection";
import Footer from "@/components/NewComps/Footer";
import GiddhPopUp from "@/components/NewComps/GiddhPopUp";

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

  useEffect(() => {
    const timer = setTimeout(() => {
      const modalEl = document.getElementById("giddhPopUp");
      modalEl.classList.add("show");
      modalEl.style.display = "block";
      document.body.classList.add("modal-open");
      const backdrop = document.createElement("div");
      backdrop.className = "modal-backdrop fade show";
      document.body.appendChild(backdrop);
    }, 1);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <GiddhPopUp />
      <Banner path={link} />
      <Features path={link} />
      <WhyGiddh />
      <CTASection />
      <GiddhFor />
      <Testimonials />
      <SeeGiddhInAction />
      <FAQs />
      <Footer />
    </>
  );
};
export default index;
