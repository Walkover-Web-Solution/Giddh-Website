import Image from "next/image";
import styles from "./Benefits.module.scss";

export default function Benefits({ benefits }) {
  if (!benefits?.length) return null;

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="font-sub-heading text-center mb-5">
          What sets Giddh apart!
        </h2>

        <div className="row g-4">
          {benefits.map((row, rowIndex) =>
            row?.items?.length
              ? row.items.map((item, index) => {
                  return (
                    <div
                      key={`${rowIndex}-${index}`}
                      className={`col-12 col-md-${12 / row?.cols || 1}`}
                    >
                      <div
                        className={`font-md font-400 d-flex flex-column justify-content-center text-center ${styles.card} border border-dark rounded-3 gap-2`}
                      >
                        <Image
                          src={item?.icon}
                          alt={item?.text}
                          width={45}
                          height={45}
                          className="mx-auto"
                        />
                        <span className="font-md">{item?.text}</span>
                      </div>
                    </div>
                  );
                })
              : null
          )}
        </div>
      </div>
    </section>
  );
}
