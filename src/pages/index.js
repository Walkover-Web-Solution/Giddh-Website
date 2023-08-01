import FEATUREGALLERY from "@/components/featureGallery";
import MAKETHESWITCHINDEXPAGE from "@/components/makeTheSwitch";
import ENQUIRYFORM from "@/components/enquiryForm";
import GSTINDEXPAGE from "@/components/gstIndexPage";

const index = () => {
  return (
    <>
      <ENQUIRYFORM />
      <GSTINDEXPAGE />    
      <FEATUREGALLERY />
      <MAKETHESWITCHINDEXPAGE />
    </>
  );
};
export default index;
