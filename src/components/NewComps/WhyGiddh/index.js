import Image from "next/image";
export default function WhyGiddh({ compData }) {
  if (!compData?.features?.length) return null;
  return (
    <section className="bg-light-blue outfit-font">
      <div className="container py-5 d-flex flex-column gap-4">
        <h2 className="text-center mb-4 font-primary font-sub-heading">
          {compData?.heading}
        </h2>
        <div className="bg-white border-end border-accent border-2 rounded-4 overflow-hidden">
          <div className="row font-md border-bottom font-600 font-primary text-center">
            <div className="col-6 col-md-4 px-1 py-2 border-end d-flex justify-content-center align-items-end">
              Feature
            </div>
            <div className="col-3 col-md-4 px-1 py-2 d-flex justify-content-center align-items-end ">
              <div className="d-none d-md-block">Other Accounting Software</div>
              <span className="d-block d-md-none">Other</span>
            </div>
            <div className="col-3 col-md-4 px-1 py-2 border-accent border-2 border-start rounded-top-4 border-top border-end d-flex flex-column align-items-center">
              <Image
                src="/img/giddh-logo.svg"
                alt="giddh"
                className="d-none d-md-block img-fluid fit-content"
                width={120}
                height={50}
              />
              <span className="d-none d-md-block ">Accounting Software</span>{" "}
              <span className="d-block font-dark-grey d-md-none pe-2">
                <Image
                  src="/img/giddh-logo.svg"
                  alt="Giddh logo"
                  className="img-fluid fit-content"
                  width={50}
                  height={55}
                />
              </span>
            </div>
          </div>
          {compData.features.map((row, index) => (
            <div key={index} className="row border-bottom text-center">
              <div className="col-6 col-md-4 px-2 py-2 border-end">
                {row?.features}
              </div>
              <div
                className={`col-3 col-md-4 px-2 py-2 border-accent ${
                  index === compData.features.length - 1
                    ? "  rounded-start-4"
                    : ""
                }`}
              >
                {row?.other ? (
                  <Image
                    src="/img/online-accounting-software/check.svg"
                    alt="check"
                    width={20}
                    height={20}
                    className="text-success"
                  />
                ) : (
                  <Image
                    src="/img/online-accounting-software/close.svg"
                    alt="cross"
                    width={20}
                    height={20}
                    className="text-danger"
                  />
                )}
              </div>
              <div
                className={`col-3 col-md-4 px-2 border-2 border-start border-accent py-2 ${
                  index === compData.features.length - 1
                    ? "border-bottom border-end border-start border-black rounded-bottom-4"
                    : ""
                }`}
              >
                {row?.giddh ? (
                  <Image
                    src="/img/online-accounting-software/check.svg"
                    alt="check"
                    width={20}
                    height={20}
                    className="text-success"
                  />
                ) : (
                  <Image
                    src="/img/online-accounting-software/close.svg"
                    alt="cross"
                    width={20}
                    height={20}
                    className="text-danger"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
