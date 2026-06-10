import { MdCheck, MdArrowForward } from "react-icons/md";

export default function GetStarted({ compData }) {
  if (!compData?.heading) return null;

  return (
    <section className="py-5 outfit-font bg-white text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 d-flex flex-column align-items-center gap-4">
            {compData.badge && (
              <span className="rounded-pill px-3 py-2 bg-faded-blue font-primary c-fs-7 c-fw-600 text-uppercase">
                {compData.badge}
              </span>
            )}

            <div className="d-flex flex-column gap-2 col-lg-9">
              <h2 className="font-sub-heading garmond-font font-primary m-0">
                {compData.heading}
              </h2>
              {compData.subheading && (
                <p className="font-grey-deep m-0">{compData.subheading}</p>
              )}
            </div>

            {compData.highlights?.length > 0 && (
              <div className="row g-3 g-md-4 text-start w-100">
                {compData.highlights.map((item, index) => (
                  <div key={index} className="col-12 col-md-6">
                    <div className="d-flex align-items-start gap-2">
                      <MdCheck
                        className="flex-shrink-0 mt-1 font-dark"
                        size={20}
                      />
                      <span className="font-rg font-dark-light m-0">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {compData.buttons?.length > 0 && (
              <div className="d-flex flex-wrap justify-content-center gap-4 pt-1">
                {compData.buttons.map((button, index) => (
                  <a key={index} href={button.link || "#"}>
                    <button
                      className={`${button.type} px-5 py-2 btn d-inline-flex align-items-center gap-2`}
                    >
                      {button.text}
                      {button.arrow && <MdArrowForward />}
                    </button>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
