import GiddhIntro from "@/components/NewComps/GiddhIntro";
import Stats from "@/components/NewComps/Stats";
import HomePageFeatures from "@/components/NewComps/HomePageFeatures";
import TrustBadgeScrollable from "@/components/NewComps/TrustBadgeScrollable";
import CTASectionTwo from "@/components/NewComps/CTASectionTwo";
import FeedbackCards from "@/components/NewComps/FeedbackCards";
import GiddhvsMsg91 from "@/components/NewComps/GiddhvsMsg91";
import GiddhIndustries from "@/components/NewComps/GiddhIndustries";
import Pricing from "@/components/NewComps/Pricing";
import GiddhBenefits from "@/components/NewComps/GiddhBenefits";

export default function HomePage({  }) {
  return (
   <>
   <GiddhIntro />
   <Stats />
   <HomePageFeatures />
   <TrustBadgeScrollable />
   <CTASectionTwo/>
   <FeedbackCards/>
   <GiddhvsMsg91/>
   <GiddhIndustries/>
   <Pricing/>
   <GiddhBenefits/>
   </>
  );
}
