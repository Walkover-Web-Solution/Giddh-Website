import styles from "./GridFeatures.module.scss";

export default function GridFeatures({ compData }) {
  return (
    <section className="py-5">
      <div className="container d-flex flex-column gap-4">
        <div className="d-flex flex-column gap-4">
          <h2 className="text-center font-heading font-primary">
            {compData?.heading}
          </h2>
          <p className="text-center font-md font-sub-heading font-slate-grey">{compData?.subHeading}</p>
        </div>
        <div className="row g-3">
          {compData?.cards?.map((card, index) => (
            <div
              key={index}
              className="col-12 col-md-6 align-items-center justify-content-center"
            >
              <div className={`d-flex flex-column gap-3 border rounded-4 px-4 py-2 justify-content-center text-center border-color-primary ${styles.card}`}>
                <p className="m-0 font-xl font-primary">{card?.heading}</p>
                <p className="font-md font-slate-grey">{card?.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary-outline mx-auto">Explore Features</button>
      </div>
    </section>
  );
};