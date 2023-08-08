import FeatureGallery from "@/components/featureGallery";
import MakeTheSwitchIndexPage from "@/components/makeTheSwitch";
import EnquiryForm from "@/components/enquiryForm";
import GstIndexPage from "@/components/gstIndexPage";

const index = () => {
  return (
    <>
      <EnquiryForm />
      <GstIndexPage />    
      <FeatureGallery />
      <MakeTheSwitchIndexPage />
    </>
  );
};
export default index;
