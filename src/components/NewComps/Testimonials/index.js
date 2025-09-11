import React from "react";
import style from "./Testimonials.module.scss";
import data from "./data.json";
import { MdReviews } from "react-icons/md";
export default function Testimonials() {
  return (
    <section className="py-5 outfit-font bg-accent">
      <div className="d-flex flex-column text-center mx-auto px-3">
        <h2 className="fw-normal heading c-fw-400 text-white cactus-font">
          Success Stories with Giddh
        </h2>
        <p
          className={`c-fs-5 mx-auto pb-4 text-white-50 text-center c-fw-400`}
        >
          See who's talking about us and why businesses trust us around the
          globe.
        </p>
      </div>
      <div className="container d-flex flex-row py-1 gap-5 justify-content-center">
        <div className="d-flex justify-content-center">
          <div
            className={`border border-light rounded mx-auto overflow-y-auto border-col-light ${style.scrollableContainer}`}
          >
            {data.map((testimonial, index) => (
              <div
                key={index}
                className={`py-2 px-3 ${index < data.length - 1 ? "border-bottom" : ""
                  } border-col-light`}
              >
                <div className="d-flex gap-sm-3 gap-0 flex-column flex-sm-row align-items-sm-center align-items-start">
                  <div className="d-flex align-items-center justify-content-center">
                    <MdReviews className="text-white c-fs-1"/>
                  </div>
                  <div>
                    <p className="text-white mb-0 mt-2 c-fw-400 c-fs-5">
                      {testimonial.testimonial}
                    </p>
                    <div className="d-flex align-items-center justify-content-start gap-2 c-fw-400 c-fs-5 mt-2">
                      <div className="text-white-50 c-fs-6">
                        {testimonial.owner ? testimonial.owner + ", " : ""}
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`d-none d-md-flex story-card align-items-center px-5 mx-2 border border-light rounded justify-content-center`}
        >
          <div className="p-4 text-center d-flex align-items-center">
            <h2 className="text-white c-fs-1 c-fw-400">
              <em className="c-fw-400">Stories of</em>
              <br />
              <em className="c-fw-400">Growth with</em>
              <br />
              <strong className="c-fw-600">GIDDH</strong>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
