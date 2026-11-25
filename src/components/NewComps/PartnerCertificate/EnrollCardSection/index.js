import { MdArrowForward } from "react-icons/md";

export default function EnrollCardSection({ compData, onStart }) {
  if (!compData) {
    return null;
  }

  return (
    <section id="enroll-now" className="py-5 bg-white outfit-font">
      <div className="container px-4">
        <div className="bg-extra-light-blue rounded-3 p-4 p-md-5 position-relative overflow-hidden">
          <div className="row align-items-center justify-content-between g-4 g-lg-5">
            <div className="col-12 col-lg-7 d-flex flex-column gap-3">
              {compData?.eyebrow && (
                <p className="font-xs font-600 font-grey-deep m-0">
                  {compData?.eyebrow}
                </p>
              )}
              <h2 className="heading font-600 lh-sm m-0">
                <span className="font-primary d-block">
                  {compData?.headingPrimary}
                </span>
                {compData?.headingAccent && (
                  <span className="font-blue opacity-75 d-block">
                    {compData?.headingAccent}
                  </span>
                )}
              </h2>
              {compData?.description && (
                <p className="font-sm font-slate-grey m-0 col-lg-10 lh-lg">
                  {compData?.description}
                </p>
              )}
              {compData?.helperText && (
                <p className="font-xs font-grey-deep m-0">
                  {compData?.helperText}
                </p>
              )}
            </div>

            <div className="col-12 col-lg-4 d-flex flex-column gap-3">
              <button
                type="button"
                className="btn btn-primary w-100 rounded-1 py-3 lh-lg d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
                onClick={() => onStart?.()}
              >
                <span>{compData?.buttonText}</span>
                <MdArrowForward size={16} aria-hidden="true" />
              </button>
              {compData?.consentTextBefore && (
                <p className="font-xs font-grey-deep m-0">
                  {compData?.consentTextBefore}
                  {compData?.consentLinkHref && compData?.consentLinkText && (
                    <a
                      href={compData.consentLinkHref}
                      className="font-xs font-600 font-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {compData.consentLinkText}
                    </a>
                  )}
                  {compData?.consentTextAfter}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
