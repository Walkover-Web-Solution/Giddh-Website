import React from "react";
import whyGiddhData from "./data.json";
import { MdClose, MdDone } from "react-icons/md";
import Image from "next/image";

export default function WhyGiddh() {
  return (
    <section className="container py-4 mt-5 mb-5 outfit-font">
      <h2 className="text-center mb-4 col-primary cactus-font">
        Why Choose Giddh?
      </h2>
      <div className="bg-white border rounded overflow-hidden">
        <div className="row border-bottom fw-semibold text-dark text-center">
          <div className="c-fs-4 col-6 col-md-4 px-1 py-2 border-end">
            Feature
          </div>
          <div className="c-fs-4 col-3 col-md-4 px-1 py-2 border-end">
            <span className="d-none d-md-block">Other Accounting Software</span>{" "}
            <span className="d-block d-md-none">Other</span>
          </div>
          <div className="c-fs-4 col-3 col-md-4 px-1 py-2 bg-light-blue col-primary">
            <span className="d-none d-md-block">Giddh Accounting Software</span>{" "}
            <span className="d-block d-md-none">Giddh</span>
          </div>
        </div>
        {whyGiddhData.map((row, index) => (
          <div key={index} className="row border-bottom text-center">
            <div className="col-6 col-md-4 px-1 py-1 border-end ">
              {row?.features}
            </div>
            <div className="col-3 col-md-4 px-1 py-1 border-end">
              {row?.other ? (
                <Image
                  src="/img/online-accounting-software/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                  className="text-success"
                />
              ) : (
                <Image
                  src="/img/online-accounting-software/close.svg"
                  alt="cross"
                  width={20}
                  height={20}
                  className="text-danger"
                />
              )}
            </div>
            <div className="col-3 col-md-4 px-1 py-1 bg-light-blue">
              {row?.giddh ? (
                <Image
                  src="/img/online-accounting-software/check.svg"
                  alt="check"
                  width={20}
                  height={20}
                  className="text-success"
                />
              ) : (
                <Image
                  src="/img/online-accounting-software/close.svg"
                  alt="cross"
                  width={20}
                  height={20}
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
