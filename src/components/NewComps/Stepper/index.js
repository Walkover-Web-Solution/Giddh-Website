export default function Stepper({ compData }) {
  if (!compData?.steps?.length) return null;

  const renderStep = (step, index, colClass) => (
    <div key={`${step.title}-${index}`} className={colClass}>
      <div className="d-flex flex-column align-items-center h-100">
        <article className="w-100 flex-grow-1 bg-white text-center rounded-4 px-4 px-md-4 pt-4 pt-md-4 pb-2 border border-blue-light">
          <h3 className="garmond-font mb-0 font-primary font-lg fw-semibold">
            {step.title}
          </h3>
          <div
            className="mx-auto my-4 w-75 border-top border-blue-light"
            aria-hidden="true"
          />
          <p className="font-md mb-0">{step.description}</p>
        </article>
      </div>
    </div>
  );

  return (
    <section className="py-5 outfit-font bg-white">
      <div className="container">
        <header className="text-center">
          <h2 className="font-heading garmond-font font-primary">
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
            <div className="row g-4 d-md-none py-2">
              {compData?.steps?.map((step, index) => renderStep(step, index, "col-12"))}
            </div>

            {[0, 2].map((rowStart) => (
              <div
                key={rowStart}
                className="row g-4 d-none d-md-flex d-lg-none"
              >
                {compData?.steps
                  ?.slice(rowStart, rowStart + 2)
                  .map((step, index) =>
                    renderStep(step, rowStart + index, "col-12 col-md-6")
                  )}
              </div>
            ))}

            <div className="row g-4 d-none d-lg-flex my-5">
              {compData?.steps?.map((step, index) =>
                renderStep(step, index, "col-12 col-md-6 col-lg-3")
              )}
            </div>
          </>
        ) : (
          <div className="row g-4">
            {compData?.steps?.map((step, index) =>
              renderStep(step, index, "col-12 col-md-4")
            )}
          </div>
        )}
      </div>
    </section>
  );
}
