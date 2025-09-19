import StackedBanner from "@/components/NewComps/Banner/StackedBanner";
import Stats from "@/components/NewComps/Stats";
import HomePageFeatures from "@/components/NewComps/Features/AlternateFeatures";
import TrustBadgeScrollable from "@/components/NewComps/TrustBadgeScrollable";
import CTASectionTwo from "@/components/NewComps/CTASectionTwo";
import FeedbackCards from "@/components/NewComps/FeedbackCards";
import GiddhvsMsg91 from "@/components/NewComps/GiddhvsMsg91";
import GiddhIndustries from "@/components/NewComps/GiddhIndustries";
import Pricing from "@/components/NewComps/Pricing";
import GiddhBenefits from "@/components/NewComps/GiddhBenefits";
import CTA from "../NewComps/CTA";

export default function Home({ pageData }) {
  return (
    <>
      <StackedBanner compData={pageData?.stackedBanner} />
      <Stats />
      <HomePageFeatures />
      <TrustBadgeScrollable />
      <CTA compData={pageData?.cta} />
      <FeedbackCards />
      <GiddhvsMsg91 />
      <GiddhIndustries />
      <Pricing />
      <GiddhBenefits />
    </>
  );
}
