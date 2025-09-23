import StackedBanner from "@/components/NewComps/Banner/StackedBanner";
import Stats from "@/components/NewComps/Stats";
import AlternateFeatures from "@/components/NewComps/Features/AlternateFeatures";
import TrustBadgeScrollable from "@/components/NewComps/TrustBadgeScrollable";
import CTASectionTwo from "@/components/NewComps/CTASectionTwo";
import FeedbackCards from "@/components/NewComps/FeedbackCards";
import GiddhIndustries from "@/components/NewComps/GiddhIndustries";
import Pricing from "@/components/NewComps/Pricing";
import GiddhBenefits from "@/components/NewComps/GiddhBenefits";
import CTA from "@/components/NewComps/CTA";
import Giddhvscomp from "@/components/NewComps/Giddhvscomp";

export default function Home({ pageData, pageInfo }) {
  return (
    <>
      <StackedBanner compData={pageData?.stackedBanner} />
      <Stats stats={pageData?.stats} />
      <AlternateFeatures features={pageData?.features} />
      <TrustBadgeScrollable heading={pageData?.trustBadgeBrands} />
      <CTA hasImage={false} compData={pageData?.cta} />
      <FeedbackCards testimonials={pageData?.testimonials} />
      <Giddhvscomp giddhvscomp={pageData?.giddhvscomp} />
      <Pricing pageInfo={pageInfo} />
      <GiddhBenefits benefits={pageData?.benefits} />
      <GiddhIndustries giddhIndustries={pageData?.giddhIndustries} />
      <CTA hasImage={false} compData={pageData?.ctaTwo} />
    </>
  );
}
