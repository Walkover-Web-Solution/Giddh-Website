import SplitBanner from "../NewComps/Banner/SplitBanner";
import AlternateFeatures from "../NewComps/Features/AlternateFeatures";
import Instructions from "../NewComps/Instructions";
import GridFeatures from "../NewComps/Features/GridFeatures";
import CTA from "../NewComps/CTA";

export default function Affiliate({ pageData }) {
  return (
    <>
      <SplitBanner compData={pageData?.splitBanner} />
      <AlternateFeatures features={pageData?.features} />
      <Instructions compData={pageData?.instructions} />
      <GridFeatures features={pageData?.resources} />
      {pageData?.paymentNotice?.text && (
        <section className="pb-5 outfit-font">
          <div className="container">
            <div className="col-12 col-lg-10 mx-auto bg-neutral border border-color-primary rounded-4 px-4 py-4 text-center">
              {pageData.paymentNotice.heading && (
                <p className="mb-2 font-lg font-600 font-primary garmond-font">
                  {pageData.paymentNotice.heading}
                </p>
              )}
              <p className="mb-0 font-md font-slate-grey">
                {pageData.paymentNotice.text}
              </p>
            </div>
          </div>
        </section>
      )}
      <CTA compData={pageData?.cta} />
    </>
  );
}
