// components/Stats.jsx
import React from "react";

const defaultStats = [
  { value: "4.8/5", label: "Average User Rating" },
  { value: "85%", label: "Average User Rating" },
  { value: "100%", label: "Average User Rating" },
];

export default function Stats({ stats = defaultStats }) {
  return (
    <section className="py-5 outfit-font bg-accent">
      <div className="container">
        <div className="row g-4 justify-content-center align-items-stretch">
          {stats.map((s, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-4 d-flex">
              <div
                className="w-100 d-flex flex-column align-items-center justify-content-center
                           border border-white rounded-2 py-4 px-3 h-100 text-center"      >
                <div className="text-white fw-bold fs-1">{s.value}</div>
                <div className="text-white fs-6">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
