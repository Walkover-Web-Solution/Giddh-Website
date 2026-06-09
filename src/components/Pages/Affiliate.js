import SplitBanner from "../NewComps/Banner/SplitBanner";
import AlternateFeatures from "../NewComps/Features/AlternateFeatures";
import Stepper from "../NewComps/Stepper";
import WhyGiddh from "../NewComps/WhyGiddh";
import CTA from "../NewComps/CTA";
import FAQs from "../NewComps/FAQs";
import Image from "next/image";

export default function Affiliate({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      {pageData?.commissionPayoutTerms && (
        <section className="py-2 outfit-font">
          <div className="container">
            <div className="d-flex flex-column rounded-4 px-3 py-4 text-center justify-content-center">
              {pageData?.commissionPayoutTerms?.icon && (
                <Image
                  width={80}
                  height={70}
                  src={pageData.commissionPayoutTerms.icon}
                  alt={pageData?.commissionPayoutTerms?.heading}
                  className="align-self-center mb-2"
                  loading="lazy"
                />
              )}
              <p className="m-0 font-lg font-600 font-primary">
                {pageData?.commissionPayoutTerms?.heading}
              </p>
              <p className="font-md font-slate-grey mb-0 mt-2 mx-auto col-lg-10">
                {pageData?.commissionPayoutTerms?.description}
              </p>
            </div>
          </div>
        </section>
      )}
      <AlternateFeatures features={pageData?.features} />
      <Stepper compData={pageData?.stepper} />
     
      <CTA compData={pageData?.cta} />
      <FAQs faqs={pageData?.faqs} />
    </>
  );
}
