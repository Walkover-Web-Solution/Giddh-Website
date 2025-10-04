import { useEffect, useRef } from "react";
import style from "./Testimonials.module.scss";
import { MdReviews } from "react-icons/md";
import Image from "next/image";
export default function Testimonials({ testimonials }) {
  if (testimonials?.data?.length === 0) return null;
  const scrollRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollStep = 1;
    let interval;

    const startScrolling = () => {
      if (!interval && scrollContainer) {
        interval = setInterval(() => {
          if (
            scrollContainer.scrollTop + scrollContainer.clientHeight >=
            scrollContainer.scrollHeight
          ) {
            scrollContainer.scrollTop = 0;
          } else {
            scrollContainer.scrollTop += scrollStep;
          }
        }, 30);
      }
    };

    const stopScrolling = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    if (scrollContainer) {
      startScrolling();
      scrollContainer.addEventListener('mouseenter', stopScrolling);
      scrollContainer.addEventListener('mouseleave', startScrolling);
    }

    return () => {
      stopScrolling();
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', stopScrolling);
        scrollContainer.removeEventListener('mouseleave', startScrolling);
      }
    };
  }, []);

  return (
    <section className="py-5 outfit-font bg-accent">
      <div className="d-flex flex-column text-center mx-auto px-3">
        <h2 className="font-400 font-sub-heading font-600 font-white garmond-font">
          {testimonials?.heading}
        </h2>
        <p
          className="font-md mx-auto pb-4 font-white text-center font-400"
        >
          {testimonials?.subheading}
        </p>
      </div>
      <div className="container d-flex flex-row py-1 gap-5 justify-content-center">
        <div className="d-flex justify-content-center">
          <div
            ref={scrollRef}
            className={`border overflow-y-hidden border-light rounded mx-auto ${style.scrollableContainer}`}
          >
            {testimonials.data.map((testimonial, index) => (
              <div
                key={index}
                className={`py-2 px-3 ${index < testimonials.data.length - 1 ? "border-bottom" : ""
                  } border-col-light`}
              >
                <div className="d-flex gap-sm-3 gap-0 flex-column flex-sm-row align-items-sm-center align-items-start">
                  <div className="d-flex align-items-center justify-content-center">
                    <MdReviews className="font-white font-xl" />
                  </div>
                  <div>
                    <p className="text-white mb-0 mt-2 font-400 font-sm">
                      {testimonial.testimonial}
                    </p>
                    <div className="d-flex align-items-center justify-content-start gap-2 font-400 font-md mt-2">
                      <div className="font-white font-sm">
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
          className="d-none d-md-flex story-card align-items-center px-5 mx-2 border border-light rounded justify-content-center"
        >
          <div className="p-4 text-center d-flex align-items-center">
            <h2 className="font-white font-lg font-400">
              <em className="font-400">Stories of</em>
              <br />
              <em className="font-400">Growth with</em>
              <br />
              <Image src="/img/giddh-logo-primary.svg" alt="Giddh Logo" width={100} height={100} />
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
