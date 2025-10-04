import BookFreeDemoForm from "../../BookFreeDemoForm";
import { trustBadgeBrands } from "../../TrustBadge";
import Image from "next/image";

export default function SplitBanner({ compdata }) {
  return (
    <section
      className={`py-3 outfit-font gradient-primary ${
        !compdata?.header ? "padding-nav" : ""
      }`}
    >
      <div className="container px-4 py-5">
        {compdata?.header && (
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
            !compdata?.form && !compdata?.image
              ? "justify-content-center"
              : "justify-content-between"
          } garmond-font`}
        >
          <div
            className={`col-lg-6 col-md-6 col-12 mb-4 mb-lg-0 d-flex flex-column gap-2 ${
              !compdata?.form && !compdata?.image
                ? "pe-0 text-center col-lg-8 mx-auto"
                : "pe-3"
            }`}
          >
            {compdata?.tagline && (
              <span className="font-md outfit-font">
                {" "}
                BUILD FOR <span className="font-primary"> SMBs</span>
              </span>
            )}
            <h1 className="font-heading font-primary">{compdata?.heading}</h1>
            <p className="font-grey outfit-font">{compdata?.subHeading}</p>
            <div
              className={`d-flex flex-wrap align-items-center gap-4 ${
                !compdata?.form && !compdata?.image
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
                    width={100}
                    height={40}
                  />
                </a>
              ))}
            </div>
          </div>
          {compdata?.form && (
            <BookFreeDemoForm hiddenAbsolute={false} location="banner" />
          )}
          {!compdata?.form && compdata?.image && (
            <div className="col-lg-6 col-md-6 col-12 text-center">
              <Image
                src={compdata?.image}
                alt={compdata?.heading}
                width={600}
                height={700}
                className="img-fluid"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
