import Image from "next/image";

export default function WhyGiddh({ compData }) {
  if (!compData?.features?.length || compData.variant !== "comparison")
    return null;

  const lastIndex = compData.features.length - 1;

  return (
    <section className="bg-extra-light-blue outfit-font overflow-visible">
      <div className="container py-5 d-flex flex-column gap-4">
        <h2 className="text-center mb-4 font-primary font-sub-heading garmond-font">
          {compData.heading}
        </h2>

        <div className="pt-3 overflow-visible">
          <div className="bg-white rounded-4 overflow-visible position-relative">
            <div className="row font-md border-bottom font-600 font-primary text-center g-0">
              <div className="col-12 col-md-4 px-3 py-3 border-end d-flex justify-content-center align-items-center">
                {compData.columns.challenge}
              </div>
              <div className="col-12 col-md-4 px-3 py-3 border-end d-flex justify-content-center align-items-center">
                {compData.columns.traditional}
              </div>
              <div className="col-12 col-md-4 px-3 py-3 border-accent border-2 border-top border-start border-end rounded-top-4 d-flex flex-column align-items-center justify-content-center position-relative">
                <span className="position-absolute top-0 end-0 translate-middle-y me-3 z-1 rounded-pill px-3 py-1 bg-accent font-white c-fs-7 c-fw-600 text-nowrap">
                  Wins here
                </span>
                <Image
                  src="/img/giddh-logo.svg"
                  alt="Giddh"
                  className="img-fluid fit-content"
                  width={120}
                  height={50}
                  loading="lazy"
                />
              </div>
            </div>

            {compData.features.map((row, index) => (
              <div
                key={index}
                className={`row text-center g-0 ${
                  index === lastIndex ? "" : "border-bottom"
                }`}
              >
                <div className="col-12 col-md-4 px-3 py-3 border-end font-dark-light">
                  <span className="d-md-none font-600 font-primary d-block mb-1">
                    {compData.columns.challenge}
                  </span>
                  <span className="d-inline-flex align-items-center justify-content-center gap-2">
                    {row.emoji && (
                      <span className="c-fs-5 lh-1" aria-hidden="true">
                        {row.emoji}
                      </span>
                    )}
                    <span>{row.challenge}</span>
                  </span>
                </div>
                <div className="col-12 col-md-4 px-3 py-3 border-end font-dark-light">
                  <span className="d-md-none font-600 font-primary d-block mb-1">
                    {compData.columns.traditional}
                  </span>
                  {row.traditional}
                </div>
                <div
                  className={`col-12 col-md-4 px-3 py-3 border-accent border-2 border-start border-end font-600 font-primary ${
                    index === lastIndex
                      ? "border-bottom rounded-bottom-4"
                      : ""
                  }`}
                >
                  <span className="d-md-none font-600 d-block mb-1">
                    {compData.columns.giddh}
                  </span>
                  {row.giddh}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
