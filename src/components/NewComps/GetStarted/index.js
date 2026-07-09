import { MdArrowForward } from "react-icons/md";

export default function GetStarted({ compData }) {
  if (!compData?.heading) return null;

  return (
    <section className="py-5 outfit-font text-center bg-accent font-white">
      <div className="container px-3">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-12 d-flex flex-column align-items-center gap-5">
            <span
              className={`rounded-pill px-3 py-2 c-fs-7 c-fw-600 text-uppercase bg-white font-primary`}
            >
              {compData.badge}
            </span>

            <div className="d-flex flex-column text-center gap-3 col-lg-8">
              <h2 className="font-sub-heading garmond-font m-0 font-white">
                {compData.heading}
              </h2>
              <p className="m-0 font-rg">
                {compData.subheading}
              </p>
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-4 pt-2">
              {compData.buttons.map((button, index) => (
                <a key={index} href={button.link}>
                  <button
                    className={`${
                      index === 0 ? "btn-white" : "btn-secondary-outline"
                    } px-5 py-3 btn d-inline-flex align-items-center gap-2`}
                  >
                    {button.text}
                    {button.arrow && <MdArrowForward />}
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
