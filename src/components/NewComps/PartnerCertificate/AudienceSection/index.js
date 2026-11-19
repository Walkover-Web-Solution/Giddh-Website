export default function AudienceSection({ compData }) {
  if (!compData?.audiences?.length) {
    return null;
  }

  return (
    <section id="who-its-for" className="py-5 bg-white outfit-font">
      <div className="container px-4 py-lg-4 d-flex flex-column gap-5">
        <div className="d-flex flex-column gap-3">
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
        </div>

        <div className="row g-4 g-lg-5">
          {compData.audiences.map((item, index) => (
            <div key={index} className="col-12 col-md-6">
              <article className="h-100 d-flex flex-column gap-2">
                <span className="font-xs font-600 font-blue opacity-75">
                  {item?.number}
                </span>
                <h3 className="font-rg font-600 font-primary m-0">
                  {item?.title}
                </h3>
                <p className="font-sm font-slate-grey m-0 lh-lg">
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
