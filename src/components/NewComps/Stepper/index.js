import styles from "./Stepper.module.scss";

const dottedBorder = "3px dotted var(--col-blue-light)";

export default function Stepper({ compData }) {
  if (!compData?.steps?.length) return null;

  const renderStep = (step, index, colClass) => (
    <div key={`${step.title}-${index}`} className={colClass}>
      <div className="d-flex flex-column align-items-center h-100">
        <div className="position-relative z-1 mb-4 mb-md-5 bg-white px-3">
          <span
            className="d-flex align-items-center justify-content-center rounded-circle bg-accent font-white fw-semibold font-lg"
            style={{ width: 72, height: 72 }}
            aria-hidden="true"
          >
            {step.number ? parseInt(step.number, 10) : index + 1}
          </span>
        </div>

        <article
          className="w-100 flex-grow-1 bg-white text-center rounded-4 px-4 px-md-4 pt-md-4 pb-2"
          style={{ border: dottedBorder }}
        >
          <h3 className="garmond-font mb-0 font-primary font-lg fw-semibold">
            {step.title}
          </h3>
          <div
            className="mx-auto my-4"
            style={{
              width: "75%",
              borderTop: dottedBorder,
            }}
            aria-hidden="true"
          />
          <p className="font-md mb-0">{step.description}</p>
        </article>
      </div>
    </div>
  );

  const renderTrackLine = (className) => (
    <div
      className={className}
      style={{ "--step-count": compData?.steps?.length, "--badge-radius": "36px" }}
      aria-hidden="true"
    />
  );

  return (
    <section className="py-5 outfit-font bg-white">
      <div className="container">
        <header className="text-center pb-4 pb-md-5">
          <h2 className="font-heading garmond-font font-primary mb-3">
            {compData?.heading}
          </h2>
          {compData?.subHeading && (
            <p className="font-md font-slate-grey mb-0 mx-auto col-lg-8">
              {compData?.subHeading}
            </p>
          )}
        </header>

        {compData?.steps?.length === 4 ? (
          <>
            <div className="row g-4 d-md-none">
              {compData?.steps?.map((step, index) => renderStep(step, index, "col-12"))}
            </div>

            {[0, 2].map((rowStart) => (
              <div
                key={rowStart}
                className="row g-4 position-relative pt-2 d-none d-md-flex d-lg-none"
              >
                {renderTrackLine(`${styles.trackLinePair} d-none d-md-block`)}
                {compData?.steps
                  ?.slice(rowStart, rowStart + 2)
                  .map((step, index) =>
                    renderStep(step, rowStart + index, "col-12 col-md-6")
                  )}
              </div>
            ))}

            <div className="row g-4 position-relative pt-2 d-none d-lg-flex">
              {renderTrackLine(`${styles.trackLine} d-none d-lg-block`)}
              {compData?.steps?.map((step, index) =>
                renderStep(step, index, "col-12 col-md-6 col-lg-3")
              )}
            </div>
          </>
        ) : (
          <div className="row g-4 position-relative pt-2">
            {renderTrackLine(`${styles.trackLine} d-none d-md-block`)}
            {compData?.steps?.map((step, index) =>
              renderStep(step, index, "col-12 col-md-4")
            )}
          </div>
        )}
      </div>
    </section>
  );
}
