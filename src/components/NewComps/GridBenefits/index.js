import React from "react";

export default function GridBenefits({ compData }) {
  if (!compData?.length) return null;
  return (
    <section className="container py-5">
      <div className="d-flex flex-column">
        {compData.map((row, rowIndex) => (
          <div key={rowIndex} className="row g-0 overflow-hidden">
            {row.map((item, colIndex) => (
              <div
                key={colIndex}
                className="col border border-black d-flex align-items-center justify-content-center text-center p-4"
              >
                <p className="m-0 font-600">{item}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
