import { MdTrendingUp } from "react-icons/md";
import styles from "./SpotlightTestimonials.module.scss";

function TestimonialCard({ testimonial, index }) {
  const variant = index % 5;

  return (
    <div
      className={`${styles.card} flex-shrink-0 rounded-4 p-4 border ${
        variant === 1
          ? "bg-warm border-warm-border"
          : variant === 2
            ? "bg-white border-light-gray border-start border-primary border-2 ps-4"
            : variant === 3
              ? "bg-mint-tint border-mint-border"
              : variant === 4
                ? "bg-sky-tint border-sky-border"
                : "bg-white border-light-gray"
      }`}
    >
      <p className="font-sm font-dark-light m-0 lh-base">
        &ldquo;{testimonial.testimonial}&rdquo;
      </p>
      <hr className="border-0 border-top border-light-gray mt-4 mb-0 opacity-100" />
      <div className="d-flex align-items-center gap-2 pt-3">
        <div
          className={`rounded-circle d-flex align-items-center justify-content-center font-600 flex-shrink-0 font-xs ${
            variant === 1
              ? "bg-orange-light font-orange-deep"
              : variant === 2
                ? "bg-cyan-light font-cyan-deep"
                : variant === 3
                  ? "bg-emerald-light font-emerald-deep"
                  : variant === 4
                    ? "bg-purple-light font-purple-deep"
                    : "bg-faded-blue font-primary"
          }`}
          style={{ width: 32, height: 32 }}
        >
          {(testimonial.owner || testimonial.company).charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0">
          <p className="font-600 font-dark m-0 text-truncate c-fs-7">
            {testimonial.owner || "Team"}
          </p>
          <p className="font-600 font-grey-deep m-0 text-truncate c-fs-7">
            {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function MarqueeColumn({ items, direction, startIndex }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className={`d-flex flex-column gap-4 ${
          direction === "up" ? styles.trackUp : styles.trackDown
        }`}
      >
        {doubled.map((item, index) => (
          <TestimonialCard
            key={`${item.company}-${index}`}
            testimonial={item}
            index={startIndex + index}
          />
        ))}
      </div>
    </div>
  );
}

export default function SpotlightTestimonials({ testimonials }) {
  if (!testimonials?.data?.length) return null;

  const columnOne = testimonials.data.filter((_, index) => index % 2 === 0);
  const columnTwo = testimonials.data.filter((_, index) => index % 2 === 1);

  return (
    <section className={`py-5 outfit-font ${styles.section}`}>
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-5 position-relative">
            <div className="position-relative d-flex flex-column gap-3">
              <h2 className="font-sub-heading garmond-font font-primary m-0">
                {testimonials.heading}
              </h2>
              <p className="font-md font-slate-grey m-0">
                {testimonials.subheading}
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div
              className={`position-relative overflow-hidden ${styles.marqueeWrapper}`}
            >
              <div className="row g-4 h-100">
                <div className="col-12 col-lg-6">
                  <MarqueeColumn
                    items={columnOne}
                    direction="up"
                    startIndex={0}
                  />
                </div>
                <div className="col-12 col-lg-6 d-none d-lg-block">
                  <MarqueeColumn
                    items={columnTwo}
                    direction="down"
                    startIndex={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
