import StackedBanner from "../NewComps/Banner/StackedBanner";

export default function Pricing({ pageData }) {
  return (
    <>
      <StackedBanner compData={pageData?.stackedBanner} />
    </>
  );
}
