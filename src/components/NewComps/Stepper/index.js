import { Fragment } from "react";
import styles from "./Stepper.module.scss";

export default function Stepper({ compData }) {
  if (!compData?.steps?.length) return null;

  const { heading, subHeading, steps } = compData;

  return (
    <section className={`${styles.section} py-5 outfit-font`}>
      <div className="container">
        <header className="text-center pb-4 pb-md-5">
          <h2 className="font-heading garmond-font font-primary mb-3">
            {heading}
          </h2>
          {subHeading && (
            <p className="font-md font-slate-grey mb-0 mx-auto col-lg-8">
              {subHeading}
            </p>
          )}
        </header>

        <div
          className={`${styles.desktopTrack} d-none d-md-flex mb-4 mb-lg-5 px-lg-2`}
        >
          {steps.map((step, index) => (
            <Fragment key={`step-badge-${step.title}-${index}`}>
              {index > 0 && (
                <div className={styles.connector} aria-hidden="true" />
              )}
              <span className={styles.badge} aria-hidden="true">
                {step.number}
              </span>
            </Fragment>
          ))}
        </div>

        <div className="row g-4">
          {steps.map((step, index) => (
            <div
              key={`${step.title}-${index}`}
              className="col-12 col-md-6 col-lg-3"
            >
              <div
                className={`${styles.card} d-flex flex-column align-items-center text-center p-4 p-lg-5 h-100`}
              >
                <div
                  className={`${styles.mobileTrack} d-flex d-md-none align-items-center`}
                >
                  <div className={styles.mobileConnector} aria-hidden="true" />
                  <span className={`${styles.badge} mx-3`} aria-hidden="true">
                    {step.number}
                  </span>
                  <div className={styles.mobileConnector} aria-hidden="true" />
                </div>

                <h3 className="font-lg font-600 garmond-font py-2 mb-0">
                  {step.title}
                </h3>
                <p className="font-sm font-slate-grey"> {step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
