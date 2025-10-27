import Image from "next/image";
import styles from "./GiddhVs.module.scss";

export default function GiddhVs({ giddhVs }) {
  if (!giddhVs?.content?.length) return null;

  return (
    <section className="container py-5 outfit-font">
      <div className="d-flex flex-column gap-4">
        <div>
          <h2 className="text-center font-sub-heading garmond-font font-primary">
            {giddhVs.heading}
          </h2>
          <p className="text-center font-md w-75 mx-auto">
            {giddhVs.subheading}
          </p>
        </div>

        <div
          className={`text-center ${styles.giddhScrollWrapper} overflow-touch overflow-x-auto d-inline-block`}
        >
          <div className={styles.giddhScrollInner}>
            <div className="bg-white border rounded overflow-hidden">
              <div className="row border-bottom font-md font-600 text-dark text-center">
                <div className="col-3 p-2 px-md-3 border-end d-flex align-items-center justify-content-center">
                  <span>Feature</span>
                </div>

                {giddhVs.columns.map((column, index) => (
                  <div
                    key={column.key}
                    className={`col px-2 px-md-3 py-3 border-end ${
                      index === 0
                        ? "bg-extra-light-blue border-accent border-4 border-top border-start rounded-top-4"
                        : ""
                    }`}
                  >
                    {column?.logo ? (
                      <Image
                        src={column.logo}
                        height={42}
                        width={100}
                        alt={`${column?.label} logo`}
                      />
                    ) : (
                      <span>{column?.label}</span>
                    )}
                  </div>
                ))}
              </div>
              {giddhVs.content.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="row border-bottom font-md text-center"
                >
                  <div className="col-3 px-2 px-md-3 py-4 border-end font-md font-600">
                    {row.feature}
                  </div>

                  {giddhVs.columns.map((column, colIndex) => (
                    <div
                      key={column.key}
                      className={`col px-2 px-md-3 py-4 font-md border-end ${
                        colIndex === 0
                          ? "bg-extra-light-blue border-accent border-4 border-start"
                          : ""
                      } ${
                        rowIndex === giddhVs.content.length - 1 &&
                        colIndex === 0
                          ? "rounded-bottom-4 border-accent border-bottom"
                          : ""
                      }`}
                    >
                      {typeof row[column.key] === "boolean" ? (
                        row[column.key] ? (
                          <Image
                            src={"/img/tick.svg"}
                            width={24}
                            height={24}
                            alt="Yes"
                          />
                        ) : (
                          <Image
                            src={"/img/cross.svg"}
                            width={24}
                            height={24}
                            alt="No"
                          />
                        )
                      ) : (
                        row[column.key] ?? "-"
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
