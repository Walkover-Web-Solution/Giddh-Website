import { useEffect, useRef } from "react";
import styles from "./FeedbackCards.module.scss";
import Image from "next/image";
import { MdOutlineFormatQuote } from "react-icons/md";

export default function FeedbackCards({ testimonials }) {

  const scrollRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 3;

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
  }, []);

  return (
    <section className="py-5 bg-light-blue">
      <div className="container">
        <h2 className="c-fw-400 garamond-font col-primary sub-heading">
          Hear how we’ve made a difference
        </h2>
        <p className="c-fw-400 col-primary cactus-font c-fs-4">
          Stories that inspire us to keep delivering our best.
        </p>

        <div
          ref={scrollRef}
          className="d-flex flex-row gap-5 overflow-hidden py-5"
        >
          {testimonials?.concat(testimonials)?.map((t, i) => (
            <div key={i}>
              <div
                className={`rounded-4 p-4 bg-white ${styles.feedbackCards}`}
              >
                <div className="d-flex  justify-content-between">
                  <h6 className="fw-bold mb-3 c-fs-5">
                    ~ {t?.owner ? t?.owner + ", " : ""} {t?.company}
                  </h6>
                  <MdOutlineFormatQuote />
                </div>
                <p className="c-fs-6">{t?.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
