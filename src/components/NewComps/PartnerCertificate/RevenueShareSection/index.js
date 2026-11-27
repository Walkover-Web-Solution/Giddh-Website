import Link from "next/link";

import { MdArrowOutward } from "react-icons/md";

export default function RevenueShareSection({ compData }) {
  if (!compData?.metrics?.length) {
    return null;
  }

  return (
    <section
      id="revenue-share"
      className="py-5 bg-white border-top border-light-gray outfit-font"
    >
      <div className="container px-4">
        <div className="row align-items-start justify-content-between g-5">
          <div className="col-12 col-lg-5 d-flex flex-column align-items-start gap-3">
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
              <p className="font-sm font-slate-grey m-0 lh-lg">
                {compData?.description}
              </p>
            )}
            {compData?.link?.label && compData?.link?.url && (
              <Link
                href={compData?.link?.url}
                className="font-sm font-600 font-primary text-decoration-none border-bottom border-primary d-inline-flex align-items-center gap-2"
              >
                <span>{compData?.link?.label}</span>
                <MdArrowOutward size={15} aria-hidden="true" />
              </Link>
            )}
          </div>

          <div className="col-12 col-lg-6">
            <div className="row g-5 border-bottom border-light-gray">
              {compData.metrics.map((metric, index) => (
                <div key={index} className="col-6">
                  <div className="h-100 d-flex flex-column gap-2">
                    <div className="d-flex align-items-start gap-1 lh-1">
                      <span className="font-xxl font-600 font-primary">
                        {metric?.value}
                      </span>
                      {metric?.unit && (
                        <span className="font-xs font-600 font-blue opacity-75">
                          {metric?.unit}
                        </span>
                      )}
                    </div>
                    <p className="font-xs font-grey-deep m-0">
                      {metric?.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
