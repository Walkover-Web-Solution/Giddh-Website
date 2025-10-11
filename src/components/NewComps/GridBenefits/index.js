import React from "react";

export default function GridBenefits() {
  const features = [
    ["Increased Accuracy", "Real-Time Tracking", "Reduced Risk of Tax Evasion"],
    ["Uniqueness with IRN and QR Code for B2B"],
    [
      "Better Visibility and Transparency",
      "Uniqueness with QR Code for B2C",
      "Auto-Populated Data in GST E-Invoice",
    ],
  ];

  return (
    <section className="container py-5">
      <div className="d-flex flex-column">
        {features.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="row g-0 border border-dark-subtle overflow-hidden"
          >
            {row.map((item, colIndex) => (
              <div
                key={colIndex}
                className={`col border-end border-top d-flex align-items-center justify-content-center text-center p-4`}
              >
                <p className="m-0 fw-medium">{item}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
