import PricingComp from "@/components/Pages/Pricing";
import getPricingPlans from "@/utils/getPricingPlans";

export default function Pricing({ pageData, pageInfo, pricingPlans }) {
  // console.log(pricingPlans , "ddddddddddddddd ");
  return (
    <PricingComp
      pageInfo={pageInfo}
      pageData={pageData}
      pricingPlans={pricingPlans}
    />

  );
}

export async function getServerSideProps() {
  const pricingPlans = (await getPricingPlans("IND")) || [];
  console.log(pricingPlans , "22222222222ddd ");

  return {
    props: {
      pricingPlans: pricingPlans,
    },
  };
}
