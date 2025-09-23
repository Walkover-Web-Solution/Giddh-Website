import React from "react";
import whyGiddhData from "./data.json";
import { MdClose, MdDone } from "react-icons/md";
import Image from "next/image";

export default function WhyGiddh() {
  const data = {
    heading: "Why Choose Giddh?",
    subheading:
      "Giddh combines real-time insights, seamless compliance, and powerful features to simplify accounting. It grows with your business, offering clarity, control, and ease at every step.",
  };

  return (
    <section className="container py-4 mt-5 mb-5 outfit-font">

      <h2 className="text-center mb-4 cactus-font">{data.heading}</h2>
      <p className="text-center mb-4 w-75 mx-auto">{data.subheading}</p>
      <div className="bg-white border rounded overflow-hidden">
        <div className="row border-bottom fw-semibold text-dark text-center">
          <div className="col-6 col-md-4 px-3 py-4 border-end">Feature</div>
          <div className="col-3 col-md-4 px-3 py-4 border-end">Other</div>
          <div className="col-3 col-md-4 px-3 py-4 bg-light-blue">Giddh</div>
        </div>
        {whyGiddhData.map((row, index) => (
          <div key={index} className="row border-bottom text-center">
            <div className="col-6 col-md-4 px-3 py-4 border-end ">
              {row?.features}
            </div>
            <div className="col-3 col-md-4 px-3 py-4 border-end">
              {row?.other ? (
                <Image
                  src="/img/online-accounting-software/check.svg"
                  alt="check"
                  width={30}
                  height={30}
                  className="text-success"
                />
              ) : (
                <Image
                  src="/img/online-accounting-software/close.svg"
                  alt="cross"
                  width={30}
                  height={30}
                  className="text-danger"
                />
              )}
            </div>
            <div className="col-3 col-md-4 px-3 py-4 bg-light-blue">
              {row?.giddh ? (
                <Image
                  src="/img/online-accounting-software/check.svg"
                  alt="check"
                  width={30}
                  height={30}
                  className="text-success"
                />
              ) : (
                <Image
                  src="/img/online-accounting-software/close.svg"
                  alt="cross"
                  width={30}
                  height={30}
                  className="text-danger"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
