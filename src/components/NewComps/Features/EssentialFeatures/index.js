export default function EssentialFeatures({ compData }) {
  if (!compData?.content?.length) return null;
  return (
    <section className="py-5 container d-flex flex-column gap-5">
      <div className="d-flex flex-column align-items-center">
        <h2 className="font-primary m-0 font-sub-heading">
          {compData?.heading}
        </h2>
        {compData?.subHeading && (
          <p className="font-md m-0 text-center">{compData.subHeading}</p>
        )}
      </div>

      <div className="row g-4">
        {compData?.content?.map((feature, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="p-2">
              <h3 className="font-600 font-md mb-0">{feature.title}</h3>
              <p className="font-sm mb-0">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {compData?.buttons && (
        <div className="d-flex justify-content-center">
          {compData?.buttons?.map((button, index) => (
            <a href={button.link}>
              <button key={index} className="btn btn-primary-outline mx-auto">
                {button?.text}
              </button>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
