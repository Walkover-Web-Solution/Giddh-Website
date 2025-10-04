import { useEffect, useRef, useMemo } from "react";
import styles from "./FeedbackCards.module.scss";
import { MdOutlineFormatQuote } from "react-icons/md";

export default function FeedbackCards({ testimonials }) {
  if (testimonials?.data?.length === 0) return null;
  const scrollRef = useRef(null);
  const frameRef = useRef(null);
  const items = useMemo(() => {
    const list = testimonials.data;
    return list.concat(list);
  }, [testimonials]);


  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1;

    const step = () => {
      scrollAmount += speed;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);

    const handleMouseEnter = () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };

    const handleMouseLeave = () => {
      frameRef.current = requestAnimationFrame(step);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [items.length]);

  return (
    <section className="py-5 bg-light-blue">
      <div className="container">
        <h2 className="font-400 garmond-font text-center font-primary font-sub-heading">
          {testimonials?.heading}
        </h2>
        <p className="font-400 font-primary garmond-font font-md text-center">
          {testimonials?.subheading}
        </p>
        <div
          ref={scrollRef}
          className="d-flex flex-row gap-5 overflow-hidden py-5"
        >
          {items.map((testimonial, index) => (
            <div key={index}>
              <div
                className={`rounded-4 p-4 bg-white d-flex flex-column ${styles.feedbackCards}`}
              >
                <div className="d-flex justify-content-between">
                  <h3 className="font-600 mb-3 font-md">
                    ~ {testimonial?.owner ? testimonial?.owner + ", " : ""}{" "}
                    {testimonial?.company}
                  </h3>
                  <MdOutlineFormatQuote />
                </div>
                <p className="font-sm">{testimonial?.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
