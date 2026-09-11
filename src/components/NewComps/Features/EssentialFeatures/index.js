export default function EssentialFeatures({ compData }) {
  if (!compData?.content?.length) return null;

  const count = compData.content.length;
  const getColClass = () => {
    if (count === 3 || count > 4) return "col-12 col-md-6 col-lg-4";
    return "col-12 col-md-6";
  };

  return (
    <section className="py-5 container d-flex flex-column gap-5">
      <div className="d-flex flex-column align-items-center text-center gap-3">
        <h2 className="font-primary m-0 font-sub-heading garmond-font">
          {compData?.heading}
        </h2>
        {compData?.subHeading && (
          <p className="font-md m-0 outfit-font">{compData.subHeading}</p>
        )}
      </div>

      <div className="row g-4 justify-content-center">
        {compData.content.map((feature, index) => (
          <div key={index} className={getColClass()}>
            <div className="p-3 border rounded-4 text-center h-100 d-flex flex-column justify-content-center">
              <h3 className="font-600 font-md mb-0">{feature.title}</h3>
              <p className="font-sm mb-0">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {compData?.buttons?.length && (
        <div className="d-flex justify-content-center">
          {compData.buttons.map((button, index) => (
            <a key={index} href={button.link}>
              <button className="btn btn-primary-outline mx-auto">
                {button?.text}
              </button>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
