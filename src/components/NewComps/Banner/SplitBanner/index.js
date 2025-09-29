import BookFreeDemoForm from "../../BookFreeDemoForm";
import { trustBadgeBrands } from "../../TrustBadge";
import style from "./SplitBanner.module.scss";

export default function SplitBanner({ compdata }) {
  return (
    <>
      <section className={`py-3 mb-5 outfit-font ${style.banner}`}>
        <div className="container px-4">
          <div className="mb-5 pb-3 d-flex justify-content-between align-items-center">
            <img
              src="/img/giddh-logo.svg"
              alt="Giddh Logo"
              width={120}
              height={24}
            />
            <button
              onClick={() =>
                document.getElementById("SeeGiddhInAction")?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
              }
              className="btn btn-primary-outline"
            >
              Get Started
            </button>
          </div>
          <div className="row align-items-center justify-content-between garmond-font">
            <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0 pe-3 d-flex flex-column gap-2">
              <span className="font-md outfit-font">
                {" "}
                BUILD FOR <span className="font-primary"> SMBs</span>
              </span>
              <h1 className="font-heading font-primary">
                {compdata?.heading}
              </h1>
              <p className="font-grey outfit-font">
                {compdata?.subHeading}
              </p>
              <div className="d-flex flex-wrap align-items-center gap-4">
                {trustBadgeBrands?.map((logo, index) => (
                  <a key={index} href={logo.href} target="_blank">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      height={34}
                    />
                  </a>
                ))}
              </div>
            </div>
            <BookFreeDemoForm hiddenAbsolute={false} location="banner" />
          </div>
        </div>
      </section>
    </>
  );
}
