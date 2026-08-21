import Link from "next/link";

export default function FinancialReportsTable({ compData }) {
  if (!compData?.panels?.length) return null;

  return (
    <section id="icai" className="py-5 outfit-font bg-extra-light-blue">
      <div className="container d-flex flex-column gap-4">
        <div className="d-flex flex-column align-items-center text-center gap-3 col-lg-8 mx-auto">
          {compData?.question && (
            <p className="font-primary font-sm font-600 m-0">
              {compData.question}
            </p>
          )}
          {compData?.heading && (
            <h2 className="garmond-font font-sub-heading font-primary m-0">
              {compData.heading}
            </h2>
          )}
          {compData?.description && (
            <p className="font-grey-deep font-sm m-0">{compData.description}</p>
          )}
        </div>

        <div className="row g-3">
          {compData.panels.map((panel, index) => (
            <div key={index} className="col-12 col-lg-6">
              <div className="bg-white border rounded-4 h-100 overflow-hidden">
                <div className="d-flex align-items-center justify-content-between px-3 py-3 border-bottom font-sm">
                  <strong className="font-dark">{panel?.title}</strong>
                  <span className="font-grey-deep">{panel?.period}</span>
                </div>
                <div className="p-3">
                  <table className="table table-sm mb-0 font-sm">
                    <thead>
                      <tr>
                        {panel.headers.map((header, headerIndex) => (
                          <th
                            key={headerIndex}
                            className={`font-grey-deep font-600 ${headerIndex === 0 ? "text-start" : "text-end"
                              }`}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {panel.rows.map((row, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className={
                            row?.type === "subtotal" ? "bg-extra-light-blue" : ""
                          }
                        >
                          <td
                            className={`text-start ${row?.type === "group" ||
                              row?.type === "total" ||
                              row?.type === "subtotal"
                              ? "font-600 font-dark"
                              : ""
                              } ${row?.type === "indent" ? "ps-4" : ""} ${row?.type === "total" ? "border-top" : ""
                              }`}
                          >
                            {row?.label}
                          </td>
                          <td
                            className={`text-end ${row?.type === "total" || row?.type === "subtotal"
                              ? "font-600 font-dark"
                              : ""
                              } ${row?.type === "total" ? "border-top" : ""}`}
                          >
                            {row?.current}
                          </td>
                          <td
                            className={`text-end ${row?.type === "total" || row?.type === "subtotal"
                              ? "font-600 font-dark"
                              : ""
                              } ${row?.type === "total" ? "border-top" : ""}`}
                          >
                            {row?.previous}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

        {compData?.note && (
          <p className="font-grey-deep font-sm text-center bg-white border rounded-4 py-2 px-3 mx-auto col-lg-7 mb-0">
            {compData.note}
          </p>
        )}

        {compData?.cta?.href && (
          <div className="text-center">
            <Link
              href={compData.cta.href}
              className="font-primary font-sm font-600 text-decoration-none"
            >
              {compData.cta.text}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
