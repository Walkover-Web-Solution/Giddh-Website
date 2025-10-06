import StackedBanner from "@/components/NewComps/Banner/StackedBanner";
import Stats from "@/components/NewComps/Stats";
import AlternateFeatures from "@/components/NewComps/Features/AlternateFeatures";
import TrustBadgeScrollable from "@/components/NewComps/TrustBadgeScrollable";
import FeedbackCards from "@/components/NewComps/FeedbackCards";
import Industries from "@/components/NewComps/Industries";
import Benefits from "@/components/NewComps/Benefits";
import CTA from "@/components/NewComps/CTA";
import GiddhVs from "@/components/NewComps/GiddhVs";
import FAQs from "@/components/NewComps/FAQs";

export default function Home({ pageData }) {
  return (
    <>
      <StackedBanner compData={pageData?.stackedBanner} />
      <Stats stats={pageData?.stats} />
      <AlternateFeatures features={pageData?.features} />
      <TrustBadgeScrollable compData={pageData?.trustBadgeBrands} />
      <CTA hasImage={false} compData={pageData?.cta} />
      <FeedbackCards testimonials={pageData?.testimonials} />
      <GiddhVs giddhVs={pageData?.giddhvscomp} />
      <Benefits benefits={pageData?.benefits} />
      <Industries giddhIndustries={pageData?.giddhIndustries} />
      <CTA hasImage={false} compData={pageData?.ctaTwo} />
      <FAQs faqs={pageData?.faqs} />
    </>
  );
}
