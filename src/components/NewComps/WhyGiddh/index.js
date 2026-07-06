import Image from "next/image";

export default function WhyGiddh({ compData }) {
  if (!compData?.features?.length || compData.variant !== "comparison") return null;

  return (
    <section className="bg-extra-light-blue outfit-font">
      <div className="container py-5 d-flex flex-column gap-4">
        <h2 className="text-center mb-4 font-primary font-sub-heading garmond-font">
          {compData.heading}
        </h2>
        <div className="bg-white border-end border-accent border-2 rounded-4 overflow-hidden">
          <div className="row font-md border-bottom font-600 font-primary text-center">
            <div className="col-12 col-md-4 px-3 py-3 border-end d-flex justify-content-center align-items-center">
              {compData.columns.challenge}
            </div>
            <div className="col-12 col-md-4 px-3 py-3 border-end d-flex justify-content-center align-items-center">
              {compData.columns.traditional}
            </div>
            <div className="col-12 col-md-4 px-3 py-3 border-accent border-2 border-start rounded-top-4 border-top border-end d-flex flex-column align-items-center justify-content-center">
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
            <div key={index} className="row border-bottom text-center">
              <div className="col-12 col-md-4 px-3 py-3 border-end font-dark-light">
                <span className="d-md-none font-600 font-primary d-block mb-1">
                  {compData.columns.challenge}
                </span>
                {row.challenge}
              </div>
              <div className="col-12 col-md-4 px-3 py-3 border-end font-dark-light">
                <span className="d-md-none font-600 font-primary d-block mb-1">
                  {compData.columns.traditional}
                </span>
                {row.traditional}
              </div>
              <div
                className={`col-12 col-md-4 px-3 py-3 border-2 border-start border-accent font-600 font-primary ${
                  index === compData.features.length - 1
                    ? "border-bottom border-end border-start border-black rounded-bottom-4"
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
    </section>
  );
}
