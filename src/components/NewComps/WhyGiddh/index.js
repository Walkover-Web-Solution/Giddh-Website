import whyGiddhData from "./data.json";
import Image from "next/image";
export default function WhyGiddh() {
  return (
    <section className="bg-light-blue outfit-font">
      <div className="container py-5 d-flex flex-column gap-4">

        <h2 className="text-center mb-4 col-primary new-sub-heading c-fw-600 ">
          Why Giddh Is The Best Choice For Your Business?
        </h2>
        <div className="bg-white border-end border-accent border-2 rounded-4 overflow-hidden">
          <div className="row border-bottom fw-semibold text-dark text-center">
            <div className="c-fs-4 col-6 col-md-4 px-1 py-2 border-end d-flex col-primary justify-content-center align-items-end">

              Feature
            </div>
            <div className="c-fs-4 col-3 col-md-4 px-1 py-2  d-flex justify-content-center align-items-end ">

              <div className="d-none d-md-block col-primary">Other Accounting Software</div>
              <span className="d-block d-md-none col-primary">Other</span>
            </div>
            <div className="c-fs-4 col-3 col-md-4  px-1  py-2  border-accent border-2 border-start rounded-top-4 border-top border-end d-flex flex-column align-items-center">
              <Image src="/img/giddh-logo.svg" alt="giddh" className={`d-none d-md-block img-fluid fit-content`} width={120} height={50} />

              <span className="d-none d-md-block ">Accounting Software</span>{" "}
              <span className="d-block col-dark-grey d-md-none pe-2">
                <Image src="/img/giddh-logo.svg" alt="giddh" className={`img-fluid fit-content`} width={50} height={55} />

              </span>
            </div>
          </div>
          {whyGiddhData.map((row, index) => (
            <div key={index} className="row border-bottom text-center">
              <div className="col-6 col-md-4 px-2 py-2 border-end ">
                {row?.features}
              </div>
              <div className={`col-3 col-md-4 px-2 py-2 border-accent ${index === whyGiddhData.length - 1 ? '  rounded-start-4' : ''}`}>
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
              < div className={`col-3 col-md-4 px-2 border-2 border-start border-accent py-2 ${index === whyGiddhData.length - 1 ? 'border-bottom border-end border-start border-black rounded-bottom-4' : ''}`}>
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
