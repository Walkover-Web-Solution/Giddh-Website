import BookFreeDemoForm from "../../BookFreeDemoForm";
import { trustBadgeBrands } from "../../TrustBadge";
import Image from "next/image";
import style from "./SplitBanner.module.scss";
import LottiePlayer from "../../LottiePlayer";

export default function SplitBanner({ compData }) {
  return (
    <section
      className={`outfit-font ${
        compData?.lottie ? "" : "gradient-primary"
      } ${!compData?.header ? "padding-nav" : ""}`}
    >
      <div className="container px-4 py-5">
        {compData?.header && (
          <div className="mb-5 pb-3 d-flex justify-content-between align-items-center">
            <Image
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
        )}
        <div
          className={`row align-items-center ${
            !compData?.form && !compData?.image && !compData?.lottie
              ? "justify-content-center"
              : "justify-content-between"
          } garmond-font`}
        >
          <div
            className={`col-lg-6 col-md-6 col-12 mb-4 mb-lg-0 d-flex flex-column gap-2 ${
              !compData?.form && !compData?.image && !compData?.lottie
                ? "pe-0 text-center col-lg-8 mx-auto"
                : "pe-3"
            }`}
          >
            {compData?.tagline && (
              <span className="font-md outfit-font">
                {" "}
                BUILD FOR <span className="font-primary"> SMBs</span>
              </span>
            )}
            <h1 className="font-heading font-primary">{compData?.heading}</h1>
            <p className="font-grey outfit-font">{compData?.subHeading}</p>
            <div
              className={`d-flex flex-wrap align-items-center gap-4 ${
                !compData?.form && !compData?.image && !compData?.lottie
                  ? "justify-content-center"
                  : ""
              }`}
            >
              {trustBadgeBrands?.map((logo, index) => (
                <a
                  key={index}
                  href={logo.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className={`${style.icons} img-fluid`}
                    width={100}
                    height={40}
                  />
                </a>
              ))}
            </div>
          </div>

          {compData?.form && (
            <BookFreeDemoForm hiddenAbsolute={false} location="banner" />
          )}
          {!compData?.form && compData?.image && (
            <div className="col-lg-6 col-md-6 col-12 text-center">
              <Image
                src={compData?.image}
                alt={compData?.heading}
                width={600}
                height={700}
                className="img-fluid"
              />
            </div>
          )}
          {compData?.lottie && (
            <div className="col-lg-6 col-md-6 col-12">
              <LottiePlayer lottie={compData?.lottie} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
