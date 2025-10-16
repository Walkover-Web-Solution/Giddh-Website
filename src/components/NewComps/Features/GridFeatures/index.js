import styles from "./GridFeatures.module.scss";

export default function GridFeatures({ features }) {
  if (!features?.cards?.length) return null;
  return (
    <section className="py-5">
      <div className="container d-flex flex-column gap-4">
        <div className="d-flex flex-column gap-4">
          <h2 className="text-center font-heading font-primary">
            {features?.heading}
          </h2>
          <p className="text-center font-md font-slate-grey">
            {features?.subHeading}
          </p>
        </div>
        <div className="row g-3">
          {features.cards.map((card, index) => (
            <div
              key={index}
              className="col-12 col-md-6 align-items-center justify-content-center"
            >
              <div
                className={`d-flex flex-column gap-3 border rounded-4 px-4 py-2 justify-content-center text-center border-color-primary ${styles.card}`}
              >
                <p className="m-0 font-xl font-primary">{card?.heading}</p>
                <p className="font-md font-slate-grey">{card?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
