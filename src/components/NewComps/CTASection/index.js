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
    <section className='bg-accent position-relative' aria-label="Giddh hero">
      <div className={styles.inner}>
        <div className=' p-4'>
          <h1 className=' c-fw-400 text-white ' style={{ fontFamily: 'Cactus Classical Serif, serif' }}>{data.heading}</h1>
          <p className='fw-normal text-white-50 m-0 pb-2 c-fw-600 '>{data.subheading}</p>
          <div className={styles.actions}>
            <a
              href="https://giddh.com/in/signup"
              target="_blank"
              rel="noopener noreferrer"
              className='btn btn-outline-light fw-semibold text-center align-self-start rounded-2 px-4 py-2 mt-3 w-50'
            >
              {data.buttonText}
            </a>
          </div>
        </div>
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
    </section>
  );
}
