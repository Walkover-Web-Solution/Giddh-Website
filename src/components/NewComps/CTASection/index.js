import React from "react";
import Image from "next/image";
import styles from "./CTASection.module.scss";

export default function CTASection() {
  const data = {
    heading: "Start Your Accounting Revolution with Giddh",
    subheading:
      "Try Giddh free and see how effortless accounting can be. Your books deserve better.",
    buttonText: "Get Started",
    image: "/img/girl-avatar.svg", 
  };

  return (
    <section className={styles.ctaSection} aria-label="Giddh hero">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h1 className={styles.heading}>{data.heading}</h1>
          <p className={styles.subheading}>{data.subheading}</p>
          <div className={styles.actions}>
            <button className={styles.ctaButton} type="button">
              {data.buttonText}
            </button>
          </div>
        </div>

      
        <div className={styles.right}>
          <div className={styles.imageWrap}>
          
            <Image
              src={data.image}
              alt="Person holding laptop"
              width={320}
              height={320}
              priority
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          
          </div>
        </div>
      </div>
    </section>
  );
}
