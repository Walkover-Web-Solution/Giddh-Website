import React, { useRef } from "react";
import style from "./Testimonials.module.scss";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import data from "./data.json";
export default function Testimonials() {
  return (
    <section className="py-5 outfit-font  bg-accent" >
      <div className="d-flex flex-column text-center mx-auto px-3  ">
        <h2
          className='fw-normal heading c-fw-400 text-white cactus-font'
        >
          Success Stories with Giddh
        </h2>
        <p
          className={`c-fs-5 mx-auto pb-4 text-white-50 text-center c-fw-400  `}
        >
          See who's talking about us and why businesses trust us around the globe.
        </p>
      </div>
      <div className="d-flex flex-row py-1   gap-5  justify-content-center">
        <div className="d-flex justify-content-center ">
          <div className="px-4">
            <div className={`border border-light rounded mx-auto overflow-y-auto  border-col-light ${style.scrollableContainer}`}>
              {data.map((testimonial, index) => (
                <div key={index} className={`py-2 px-3 ${index < data.length - 1 ? 'border-bottom' : ''} border-col-light`} >
                  <div className="d-flex  gap-sm-3 gap-0 flex-column flex-sm-row align-items-sm-center align-items-start  " >
                    <img
                      src={`https://i.pravatar.cc/50?img=${index + 1}`}
                      alt={testimonial.name}
                      className="rounded-circle  "
                      style={{ width: '32px', height: '32px', objectFit: 'cover' }}
                    />
                    <div className="flex-grow-1">
                      <p
                        className="text-white mb-0  mt-2 c-fw-400 c-fs-5"
                      >
                        {testimonial.testimonial}
                      </p>
                      <div
                        className="d-flex align-items-center justify-content-start  gap-2  c-fw-400 c-fs-5"
                      >
                        <div>
                          <div className="text-white-50 c-fs-6">
                            {testimonial.name} , {` `}
                            {testimonial.designation}
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-2  " >
                          <div className="bg-light bg-opacity-25 rounded  w-20 h-20 "></div>
                          <span className="text-white-50 c-fs-6 c-fw-500">{testimonial.logo}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`d-none d-md-flex story-card align-items-center px-1 mx-2 border border-light rounded justify-content-center`}>
          <div className="p-4 text-center d-flex align-items-center">
            <h2 className="text-white c-fs-1 c-fw-400">
              <em className="c-fw-400">Stories of</em><br />
              <em className="c-fw-400">Growth with</em><br />
              <strong className="c-fw-600">GIDDH</strong>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
