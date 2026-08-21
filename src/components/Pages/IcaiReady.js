import SplitBanner from "../NewComps/Banner/SplitBanner";
import IcaiProof from "../NewComps/IcaiProof";
import IcaiFeatures from "../NewComps/IcaiFeatures";
import IcaiAudience from "../NewComps/IcaiAudience";
import WhySwitch from "../NewComps/WhySwitch";
import Footer from "../NewComps/Footer";
import { MdArrowForward } from "react-icons/md";

export default function IcaiReady({ pageData }) {
  const splitBannerData = pageData?.splitBanner
    ? {
        ...pageData.splitBanner,
        heading: (
          <>
            <span className="text-dark">Your Accounting.</span> <br />
            <span className="font-primary">ICAI-Ready.</span>
          </>
        ),
        headingHighlight: undefined,
        headingPrefix: undefined,
      }
    : pageData?.splitBanner;

  return (
    <>
      <SplitBanner compData={splitBannerData} />
      <IcaiFeatures compData={pageData?.benefits} />
      <IcaiProof compData={pageData?.icaiProof} />
      <IcaiFeatures compData={pageData?.features} />
      <IcaiAudience compData={pageData?.audience} />
      <WhySwitch compData={pageData?.whySwitch} />
      {pageData?.cta && (
        <section className="py-5 outfit-font text-center">
          <div className="container">
            <div className="d-flex justify-content-center flex-column">
              <h2 className="font-sub-heading garmond-font font-primary mb-2">
                {pageData.cta.heading}
              </h2>
              <p className="font-grey-deep outfit-font mb-4">
                {pageData.cta.subheading}
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {pageData.cta.buttons?.map((button, index) => (
                  <a
                    key={index}
                    href={button.link}
                    onClick={(e) => {
                      if (
                        button.link === "/icai-ready" ||
                        button.link === "#"
                      ) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="text-decoration-none"
                  >
                    <button
                      className={`${button?.type} px-4 py-2 btn d-inline-flex align-items-center gap-2`}
                    >
                      {button.text} {button.arrow && <MdArrowForward />}
                    </button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}
