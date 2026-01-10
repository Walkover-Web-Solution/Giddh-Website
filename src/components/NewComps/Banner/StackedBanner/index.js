import Image from "next/image";
import { handleAnchorClick } from "@/utils/gtag";

export default function StackedBanner({ compData }) {
  return (
    <section className="gradient-primary padding-nav">
      <div className="container pt-5 d-flex flex-row flex-wrap gap-4 justify-content-center align-items-center">
        <h1 className="text-center font-heading garmond-font font-primary">
          {compData?.heading}
        </h1>
        <div className="col-lg-8 mx-auto">
          <p className="text-center font-grey-deep">{compData?.subHeading}</p>
        </div>
        {compData?.buttons?.length && (
          <div className="container d-flex gap-2 gap-md-4 justify-content-center align-items-center flex-column flex-md-row">
            {compData.buttons.map((button, index) => (
              <a
                key={index}
                href={button.link}
                target="_blank"
                onClick={handleAnchorClick(button, "stacked_banner", index)}
              >
                <button
                  className={`btn ${
                    index === 0 ? "btn-primary" : "btn-primary-outline"
                  }`}
                >
                  {button.text}
                </button>
              </a>
            ))}
          </div>
        )}
        {compData?.image && (
          <Image
            width={1080}
            height={585}
            className="img-fluid align-self-center rounded-2 pb-5"
            src={compData?.image}
            alt={compData?.heading}
          />
        )}
      </div>
    </section>
  );
}
