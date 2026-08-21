import * as MdIcons from "react-icons/md";

export default function IcaiFeatures({ compData }) {
  if (!compData?.content?.length) return null;

  const hasHeader = compData?.badge || compData?.heading || compData?.subHeading;

  return (
    <section id={compData?.sectionId} className="py-5 outfit-font">
      <div className="container d-flex flex-column gap-4">
        {hasHeader && (
          <div className="d-flex flex-column align-items-center text-center gap-3">
            {compData?.badge && (
              <span className="rounded-4 px-2 py-1 bg-faded-blue font-primary c-fs-7 c-fw-600 text-uppercase">
                {compData.badge}
              </span>
            )}
            {compData?.heading && (
              <h2 className="garmond-font font-sub-heading font-primary m-0">
                {compData.heading}
              </h2>
            )}
            {compData?.subHeading && (
              <p className="font-grey-deep font-sm m-0 col-lg-7">
                {compData.subHeading}
              </p>
            )}
          </div>
        )}

        <div className="row g-3">
          {compData.content.map((feature, index) => {
            const Icon = feature?.icon ? MdIcons[feature.icon] : null;

            return (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="border rounded-4 p-4 h-100 bg-white d-flex flex-column gap-2">
                  {Icon && (
                    <div
                      className="d-flex align-items-center justify-content-center bg-faded-blue rounded-4"
                      style={{ width: 40, height: 40, minWidth: 40 }}
                    >
                      <Icon size={20} className="font-primary" />
                    </div>
                  )}
                  <h3 className="font-primary font-md font-600 m-0">
                    {feature?.title}
                  </h3>
                  <p className="font-slate-grey font-sm m-0">
                    {feature?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
