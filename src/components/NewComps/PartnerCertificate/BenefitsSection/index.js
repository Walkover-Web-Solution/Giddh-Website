import { MdArrowOutward } from "react-icons/md";

export default function BenefitsSection({ compData }) {
  if (!compData?.items?.length) {
    return null;
  }

  const handleScrollToTarget = (targetId) => {
    if (typeof document === "undefined" || !targetId) {
      return;
    }
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="why-certify" className="py-5 bg-white outfit-font">
      <div className="container px-4 py-lg-4">
        <div className="row align-items-end justify-content-between g-4 mb-5 pb-lg-2">
          <div className="col-12 col-lg-5">
            {compData?.eyebrow && (
              <p className="font-xs font-600 font-grey-deep text-uppercase mb-3">
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
          </div>

          <div className="col-12 col-lg-6 d-flex flex-column align-items-start gap-3">
            {compData?.description && (
              <p className="font-sm font-slate-grey mb-0 lh-lg">
                {compData?.description}
              </p>
            )}
            {compData?.link?.text && (
              <button
                type="button"
                className="bg-transparent border-0 border-bottom border-primary p-0 pb-1 font-sm font-600 font-primary d-inline-flex align-items-center gap-2 cursor-pointer"
                onClick={() => handleScrollToTarget(compData?.link?.targetId)}
              >
                <span>{compData?.link?.text}</span>
                <MdArrowOutward size={15} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        <div className="row g-4 g-lg-5 pt-3">
          {(compData?.items || []).map((item, index) => (
            <div key={index} className="col-12 col-md-4">
              <article className="h-100 d-flex flex-column gap-2">
                <span className="font-xs font-600 font-blue opacity-75 mb-1">
                  {item?.number || String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-rg font-600 font-primary mb-1">
                  {item?.title}
                </h3>
                <p className="font-sm font-slate-grey mb-0 lh-lg">
                  {item?.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
