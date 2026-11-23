import { useState } from "react";

import HeroSection from "@/components/NewComps/PartnerCertificate/HeroSection";
import BenefitsSection from "@/components/NewComps/PartnerCertificate/BenefitsSection";
import ModulesSection from "@/components/NewComps/PartnerCertificate/ModulesSection";
import AudienceSection from "@/components/NewComps/PartnerCertificate/AudienceSection";
import RevenueShareSection from "@/components/NewComps/PartnerCertificate/RevenueShareSection";
import EnrollCardSection from "@/components/NewComps/PartnerCertificate/EnrollCardSection";
import CertificationFlow from "@/components/NewComps/PartnerCertificate/CertificationFlow";
import FAQs from "@/components/NewComps/FAQs";

export default function PartnerCertificate({ pageData }) {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const openApply = () => setIsApplyOpen(true);

  return (
    <>
      <HeroSection
        compData={pageData?.heroSection}
        onStart={openApply}
      />
      <BenefitsSection compData={pageData?.benefitsSection} />
      <ModulesSection compData={pageData?.modulesSection} />
      <AudienceSection compData={pageData?.audienceSection} />
      <RevenueShareSection compData={pageData?.revenueShareSection} />
      <EnrollCardSection
        compData={pageData?.enrollCardSection}
        onStart={openApply}
      />
      <FAQs faqs={pageData?.faqs} />
      <CertificationFlow
        isApplyOpen={isApplyOpen}
        setIsApplyOpen={setIsApplyOpen}
        applyOverlay={pageData?.applyOverlay}
        examOverlay={pageData?.examOverlay}
      />
    </>
  );
}
