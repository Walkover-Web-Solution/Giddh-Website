import styles from "./Stepper.module.scss";

export default function Stepper({ compData }) {
  if (!compData?.steps?.length) return null;

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

        <div
          className="row g-4 position-relative pt-2"
          style={{ "--step-count": compData?.steps?.length, "--badge-radius": "36px" }}
        >
          <div className={`${styles.trackLine} d-none d-md-block`} aria-hidden="true" />

          {compData?.steps?.map((step, index) => (
            <div
              key={`${step.title}-${index}`}
              className={`${
                compData?.steps?.length === 3
                  ? "col-12 col-md-4"
                  : "col-12 col-md-6 col-lg-3"
              }`}
            >
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
                  className="w-100 flex-grow-1 bg-white text-center rounded-4 p-4 px-md-4 py-md-5"
                  style={{ border: "2px dotted var(--col-soft-blue)" }}
                >
                  <h3 className="garmond-font mb-0 font-primary font-lg fw-semibold">
                    {step.title}
                  </h3>
                  <div
                    className="mx-auto my-4"
                    style={{
                      width: "75%",
                      borderTop: "2px dotted var(--col-soft-blue)",
                    }}
                    aria-hidden="true"
                  />
                  <p className="font-blue-light font-md mb-0">
                    {step.description}
                  </p>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
