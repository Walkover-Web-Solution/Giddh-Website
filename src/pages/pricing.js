import PricingComp from "@/components/Pages/Pricing";
import getPricingPlans from "@/utils/getPricingPlans";

export default function Pricing({ pageData, pageInfo, pricingPlans }) {
  return (
    <PricingComp
      pageInfo={pageInfo}
      pageData={pageData}
      pricingPlans={pricingPlans}
    />
  );
}

export async function getServerSideProps() {
  const pricingPlans = (await getPricingPlans("GLB")) || [];
  return {
    props: {
      pricingPlans: pricingPlans,
    },
  };
}
