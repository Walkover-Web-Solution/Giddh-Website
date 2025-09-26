import styles from "./Benefits.module.scss";

export default function Benefits({ benefits }) {
  return (
    <section className="py-5 bg-dark">
      <div className="container">
        <h2 className="text-white text-center mb-5">What sets Giddh apart!</h2>

        <div className="row g-4">
          {Array.isArray(benefits) && benefits?.map((row, rowIdx) =>
            row?.items?.map((item, idx) => {
              return (
                <div
                  key={`${rowIdx}-${idx}`}
                  className={`col-12 col-md-${12 / row?.cols || 1}`}
                >
                  <div
                    className={`${styles.card} card bg-dark text-white text-center border border-white rounded-3 p-4`}
                  >
                    <div className="card-body fs-6 fw-medium">{item}</div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
