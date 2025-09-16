import React from "react";
import whyGiddhData from "./data.json";
import { MdClose, MdDone } from "react-icons/md";

export default function WhyGiddh() {
  const data = {
    heading: "Why Choose Giddh?",
    subheading:
      "Giddh combines real-time insights, seamless compliance, and powerful features to simplify accounting. It grows with your business, offering clarity, control, and ease at every step."
  };

  return (
    <section className="container py-4 mt-5 mb-5 outfit-font">
      <h1 className="text-center mb-4 cactus-font">{data.heading}</h1>
      <p className="text-center mb-4 w-75 mx-auto">{data.subheading}</p>
      <div className="bg-white border rounded overflow-hidden">
        <div className="row border-bottom fw-semibold text-dark text-center">
          <div className="col-6 col-md-4 px-3 py-2 border-end">Feature</div>
          <div className="col-3 col-md-4 px-3 py-2 border-end">Other</div>
          <div className="col-3 col-md-4 px-3 py-2">Giddh</div>
        </div>
        {whyGiddhData.map((row, index) => (
          <div key={index} className="row border-bottom text-center">
            <div className="col-6 col-md-4 px-3 py-2 border-end ">
              {row["features"]}
            </div>
            <div className="col-3 col-md-4 px-3 py-2 border-end">
              {row["Other Accounting Software"] === "true" ? (
                <MdDone size={20} className="text-success" />
              ) : (
                <MdClose size={20} className="text-danger" />
              )}
            </div>
            <div className="col-3 col-md-4 px-3 py-2">
              {row["Giddh Accounting Software"] === "true" ? (
                <MdDone size={20} className="text-success" />
              ) : (
                <MdClose size={20} className="text-danger" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
