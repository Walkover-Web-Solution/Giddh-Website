import { useEffect, useRef } from "react";
import { trustBadgeBrands } from "../TrustBadge";
import styles from "./TrustBadgeScrollable.module.scss";
import Image from "next/image";

export default function TrustBadgeScrollable({ compData }) {
  const scrollRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let pos = 1;
    const speed = 1;
    const width = el.scrollWidth / 2;

    const step = () => {
      pos += speed;
      if (pos >= width) pos = 0;
      el.style.transform = `translateX(${-pos}px)`;
      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <section className="py-5">
      <div className="container text-center d-flex flex-column gap-3">
        <div className="d-flex flex-column gap-1">
          <h2 className="font-sub-heading font-primary font-400 garmond-font">
            {compData?.title}
          </h2>
          <p className="font-dark-grey garmond-font font-md">
            {compData?.description}
          </p>
        </div>

        <div className="position-relative overflow-hidden w-100 px-5">
          <div
            className="d-inline-flex align-items-center gap-4"
            ref={scrollRef}
          >
            {trustBadgeBrands?.length > 0 && trustBadgeBrands?.map((logo, index) => (
              <a key={index} href={logo?.href} target="_blank" rel="noreferrer">
                <Image src={logo?.src} alt={logo?.alt} width={100} height={40} />
              </a>
            ))}
            {trustBadgeBrands?.length > 0 && trustBadgeBrands?.map((logo, index) => (
              <a
                key={`dup-${index}`}
                href={logo?.href}
                target="_blank"
                rel="noreferrer"
              >
                <Image src={logo?.src} alt={logo?.alt} width={100} height={40} />
              </a>
            ))}
          </div>
          <div
            className={`${styles.startFade} position-absolute top-0 bottom-0 left-0 z-2`}
          ></div>
          <div
            className={`${styles.endFade} position-absolute top-0 bottom-0 right-0 z-2`}
          ></div>
        </div>
      </div>
    </section>
  );
}
