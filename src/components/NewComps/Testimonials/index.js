import React, { useRef } from "react";
import style from "./Testimonials.module.scss";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
export default function Testimonials() {
  const data = {
    heading: "Hear how we’ve made a difference",
    subheading: "Stories that inspire us to keep delivering our best.",
    content: [
      {
        name: "Priya Shah",
        comment:
          "Switching to Giddh has completely streamlined our accounts. I love how it integrates GST and e-invoicing so smoothly — it’s like it was built for Indian businesses!",
      },
      {
        name: "Rahul Mehta",
        comment:
          "We moved from Tally to Giddh last year and haven’t looked back. Real-time ledger syncing and multi-branch support makes it perfect for retail chains like ours.",
      },
      {
        name: "Anjali Verma",
        comment:
          "As a CA handling 30+ SMEs, Giddh helps me keep things in control. The cloud access is a blessing, and GST-ready reports save me hours every week.",
      },
      {
        name: "Sandeep Rathi",
        comment:
          "What impressed me the most is how developer-friendly Giddh is. We used their APIs to plug accounting into our internal CRM. No messy hacks. Just clean integrations.",
      },
      {
        name: "Neha Kulkarni",
        comment:
          "Giddh is surprisingly simple. I’m not a finance person but I can pull out balance sheets, profit-loss, GST reports in seconds. The interface feels natural and clutter-free.",
      },
      {
        name: "Karan Bansal",
        comment:
          "Our accounts team had a tough time managing multi-state operations. With Giddh’s branch accounting, everything's under one dashboard. Huge win for our transparency and audit trail.",
      },
      {
        name: "Pooja Jain",
        comment:
          "I used to dread month-end GST filings. Now it takes less than 10 minutes with Giddh. Even invoice creation is so easy — no jargon, just simple steps.",
      },
      {
        name: "Mohit Arora",
        comment:
          "I recommend Giddh to every startup I consult. It has the right balance — powerful enough for growing businesses, but simple enough that founders can use it without needing a finance degree.",
      },
    ],
  };
  const scrollerRef = useRef(null);

  const scrollByAmount =
    typeof window !== "undefined" && window.innerWidth < 1025 ? 640 : 920;

  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({
        left: -scrollByAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({
        left: scrollByAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-light-blue section_py">
      <div className="container">
        <div className="d-flex flex-column content-width">
          <h2 className="sub-heading c-fw-600 col-primary ">{data?.heading}</h2>
          <p>{data?.subheading}</p>
        </div>
        <div className={`${style.testimonials_scroller} d-flex gap-4 pb-3`} ref={scrollerRef}>
          {data?.content.map((feature, index) => (
            <div className={`${style.testimonial} d-flex flex-column justify-content-center bg-white`} key={index}>
              <span className="c-fs-6 col-primary c-fw-600">
                ~ {feature?.name}
              </span>
              <p>{feature?.comment}</p>
            </div>
          ))}
        </div>
        <div className="d-md-flex d-none align-items-end justify-content-end w-100 gap-2">
          <button
            className="btn btn-secondary"
            onClick={scrollLeft}
            aria-label="Scroll testimonials left"
          >
            <MdArrowBack />
          </button>
          <button
            className="btn btn-secondary"
            onClick={scrollRight}
            aria-label="Scroll testimonials right"
          >
            <MdArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}
