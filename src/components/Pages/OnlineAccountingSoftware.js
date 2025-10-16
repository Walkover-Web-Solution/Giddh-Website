import SplitBanner from "../NewComps/Banner/SplitBanner";
import ToggleFeatures from "../NewComps/Features/ToggleFeatures";
import Stats from "../NewComps/Stats";
import WhyGiddh from "../NewComps/WhyGiddh";
import GiddhFor from "../NewComps/GiddhFor";
import Testimonials from "../NewComps/Testimonials";
import FAQs from "../NewComps/FAQs";
import Footer from "../NewComps/Footer";
import SeeGiddhInAction from "../NewComps/SeeGiddhInAction";
import CTA from "../NewComps/CTA";
import PopUp from "../NewComps/PopUp";
import { useEffect } from "react";

export default function OnlineAccountingSoftware({ pageData }) {
  useEffect(() => {
    // Function to hide the chatbot icon with multiple approaches
    const hideChatbotIcon = () => {
      // Try multiple selectors
      const selectors = [
        "#hello-chatbot-launcher-icon",
        ".hello-chatbot-launcher-icon",
        "[id*='hello-chatbot']",
        "[class*='hello-chatbot']",
        "[id*='chatbot-launcher']",
        "[class*='chatbot-launcher']"
      ];

      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          element.style.setProperty("display", "none", "important");
          element.style.setProperty("visibility", "hidden", "important");
          element.style.setProperty("opacity", "0", "important");
          element.remove(); // Completely remove from DOM
        });
      });
    };

    // Hide immediately
    hideChatbotIcon();

    // Set up interval to check every 500ms
    const interval = setInterval(hideChatbotIcon, 500);

    // Watch for DOM changes
    const observer = new MutationObserver(() => {
      hideChatbotIcon();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeOldValue: true
    });

    // Also add CSS rule to the document
    const style = document.createElement('style');
    style.textContent = `
      #hello-chatbot-launcher-icon,
      .hello-chatbot-launcher-icon,
      [id*="hello-chatbot"],
      [class*="hello-chatbot"],
      [id*="chatbot-launcher"],
      [class*="chatbot-launcher"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      clearInterval(interval);
      observer.disconnect();
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <>
      <PopUp />
      <SplitBanner compData={pageData?.splitBanner} />
      {/* <Stats stats={pageData?.stats} /> */}
      <ToggleFeatures features={pageData?.toggleFeatures} />
      <WhyGiddh compData={pageData?.whyGiddh} />
      <CTA hasImage={true} compData={pageData?.cta} />
      <GiddhFor compData={pageData?.giddhFor} />
      <Testimonials testimonials={pageData?.testimonials} />
      <SeeGiddhInAction compData={pageData?.seeGiddhInAction} />
      <FAQs faqs={pageData?.faqs} />
      <Footer />
    </>
  );
}
