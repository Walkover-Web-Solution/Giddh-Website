import React, { useRef } from "react";
import style from "./Testimonials.module.scss";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import data from "./data.json";
export default function Testimonials() {
  
  

  return (
       <section className={style.testimonialsSection} style={{ maxHeight: '586px', backgroundColor: '#1A237E' }}>
     <div className="d-flex flex-column text-center mx-auto px-3 pt-5 my-1">
       <h2
         className={`fw-normal ${style.mainHeading}`}
         style={{
           fontFamily: 'Cactus Classical Serif, serif',
           fontWeight: 400,
           fontSize: '40px',
         }}
       >
         Success Stories with Giddh
       </h2>
       <p
         className={`${style.subHeading} mx-auto pb-4`}
         style={{
           fontFamily: 'Outfit, sans-serif',
           fontWeight: 400,
           fontStyle: 'normal',
           fontSize: '18px',
         }}
       >
         See who's talking about us and why businesses trust us around the globe.
       </p>
     </div>
           <div className="d-flex flex-column flex-md-row mb-5 pb-4 gap-5  justify-content-center">
        <div className="d-flex justify-content-center ">
          <div className="px-4">
                                                   <div className={`border border-light rounded mx-auto ${style.scrollableContainer}`} style={{ maxWidth: '715px', borderColor: 'rgba(255, 255, 255, 0.3)', maxHeight: '350px', overflowY: 'auto' }}>
              {data.map((testimonial, index) => (
                <div key={index} className={`py-2 px-3 ${index < data.length - 1 ? 'border-bottom' : ''}`} style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <div className="d-flex align-items-start gap-3 " style={{paddingRight: '100px' }}>
                    <img 
                      src={`https://i.pravatar.cc/50?img=${index + 1}`}
                      alt={testimonial.name}
                      className="rounded-circle"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div className="flex-grow-1">
                                             <p
                         className="text-white mb-0  mt-2"
                         style={{
                           fontFamily: 'Outfit, sans-serif',
                           fontWeight: 400,
                           fontStyle: 'normal',
                           fontSize: '16px',
                           lineHeight: '100%',
                           letterSpacing: '0%'
                         }}
                       >
                        {testimonial.testimonial}
                      </p>
                      <div
                        className="d-flex align-items-center justify-content-start mt-2 gap-2"
                        style={{
                          fontFamily: 'Outfit, sans-serif',
                          fontWeight: 400,
                          fontStyle: 'normal',
                          fontSize: '16px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                        }}
                      >
                        <div>
                      
                          
                          <div className="text-white-50" style={{ fontSize: '0.8rem' }}>
                            {testimonial.name} , {` `}
                            {testimonial.designation}
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-2 " style={{  }}>
                          <div className="bg-light bg-opacity-25 rounded " style={{ width: '20px', height: '20px' }}></div>
                          <span className="text-white-50" style={{ fontSize: '0.8rem', fontWeight: '500' }}>{testimonial.logo}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



      <div className="d-flex align-items-center justify-content-center max-content ">
        <div className="border border-light rounded p-4 text-center d-flex align-items-center h-100" style={{ maxWidth: '350px', borderColor: 'rgba(255, 255, 255, 0.3)',  }}>
          <h2 className="text-white" style={{ fontSize: '2.8rem', fontWeight: '300', lineHeight: '1.1' }}>
            <em style={{ fontStyle: 'italic', fontWeight: '300' }}>Stories of</em><br />
            <em style={{ fontStyle: 'italic', fontWeight: '300' }}>Growth with</em><br />
            <strong style={{ fontWeight: '800', fontStyle: 'normal', letterSpacing: '2px' }}>GIDDH</strong>
          </h2>
        </div>
      </div>
     </div>
    </section>
  );
}
