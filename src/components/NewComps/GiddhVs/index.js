import Image from "next/image";
import styles from "./GiddhVs.module.scss";

export default function GiddhVs({ giddhVs }) {
  if (!giddhVs?.content?.length || !giddhVs?.columns?.length) return null;

  const { heading, subheading, content, columns } = giddhVs;

  return (
    <section className="container py-5 outfit-font">
      <div className="d-flex flex-column gap-4">
        <h1 className="text-center font-sub-heading font-600 garmond-font font-primary">
          {heading}
        </h1>
        <p className="text-center font-md font-400 w-75 mx-auto">
          {subheading}
        </p>

        <div
          className={`text-center ${styles.giddhScrollWrapper} overflow-touch overflow-x-auto d-inline-block`}
        >
          <div className={styles.giddhScrollInner}>
            <div className="bg-white border rounded overflow-hidden">
              <div className="row border-bottom font-md font-600 text-dark text-center">
                <div className="col-3 px-3 py-2 border-end d-flex align-items-center justify-content-center">
                  <span>Feature</span>
                </div>

                {columns.map((col, index) => (
                  <div
                    key={col.key}
                    className={`col px-3 py-3 border-end ${
                      index === 0
                        ? "bg-light-blue border-accent border-4 border-top border-start rounded-top-4"
                        : ""
                    }`}
                  >
                    {col.logo ? (
                      <Image
                        src={col.logo}
                        height={32}
                        width={120}
                        alt={`${col.label} logo`}
                      />
                    ) : (
                      <span className="text-capitalize">{col.label}</span>
                    )}
                  </div>
                ))}
              </div>

              {content.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="row border-bottom font-sm text-center"
                >
                  <div className="col-3 px-3 py-2 border-end font-sm font-600">
                    {row.feature}
                  </div>

                  {columns.map((col, colIndex) => (
                    <div
                      key={col.key}
                      className={`col px-3 py-2 font-sm border-end ${
                        colIndex === 0
                          ? "bg-light-blue border-accent border-4 border-start"
                          : ""
                      } ${
                        rowIndex === content.length - 1 && colIndex === 0
                          ? "rounded-bottom-4"
                          : ""
                      }`}
                    >
                      {typeof row[col.key] === "boolean" ? (
                        row[col.key] ? (
                          <span>✅</span>
                        ) : (
                          <span>❌</span>
                        )
                      ) : (
                        row[col.key] || "-"
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
