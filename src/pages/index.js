import FEATUREGALLERY from "@/components/featureGallery";
import MAKETHESWITCH from "@/components/makeTheSwitch";
import ENQUIRYFORM from "@/components/enquiryForm";
import GSTINDEXPAGE from "@/components/gstIndexPage";

const index = () => {
  return (
    <>
      <ENQUIRYFORM />
      <GSTINDEXPAGE />    
      <FEATUREGALLERY />
      <MAKETHESWITCH />
    </>
  );
};
export default index;
