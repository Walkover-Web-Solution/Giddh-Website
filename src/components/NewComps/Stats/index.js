import { useEffect, useRef, useState } from "react";

// Splits values like "10K+", "4.5/5", "100%" into parts we can animate
function getNumberParts(value) {
  const text = String(value ?? "");
  const match = text.match(/^(\D*)(\d+\.?\d*)(.*)$/);

  if (!match) return null;

  return {
    prefix: match[1],
    target: Number(match[2]),
    suffix: match[3],
    hasDecimal: match[2].includes("."),
  };
}

function CountUp({ value }) {
  const parts = getNumberParts(value);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!parts || !ref.current) return;

    const target = parts.target;
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;
        observer.disconnect();

        const startTime = performance.now();
        const duration = 1400;

        const update = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          // Ease-out so it slows near the end
          const eased = 1 - Math.pow(1 - progress, 3);

          setCount(target * eased);

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        };

        requestAnimationFrame(update);
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  if (!parts) {
    return <div className="font-600 font-xxl">{value}</div>;
  }

  const display = parts.hasDecimal ? count.toFixed(1) : Math.round(count);

  return (
    <div ref={ref} className="font-600 font-xxl">
      {parts.prefix}
      {display}
      {parts.suffix}
    </div>
  );
}

export default function Stats({ stats }) {
  if (!stats?.stats?.length) return null;

  const colClass =
    stats.stats.length === 4
      ? "col-12 col-sm-6 col-lg-3"
      : "col-12 col-sm-6 col-md-4";

  return (
    <section className="py-5 outfit-font bg-accent">
      <div className="container d-flex flex-column gap-4">
        {stats?.heading && (
          <h2 className="garmond-font font-sub-heading text-center font-white">
            {stats.heading}
          </h2>
        )}

        <div className="row justify-content-center g-2">
          {stats.stats.map((stat, index) => (
            <div key={index} className={`${colClass} d-flex`}>
              <div className="w-100 d-flex flex-column align-items-center justify-content-center py-4 px-3 h-100 text-center font-white">
                <CountUp value={stat?.value} />
                <div className="font-sm">{stat?.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
