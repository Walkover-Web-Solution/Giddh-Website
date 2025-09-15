import React from "react";
import Image from "next/image";
import styles from "./CTASection.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CTASection() {
  const data = {
    heading: "Tired Of Overpriced Accounting Software With Fewer Features?",
    subheading:
      "Get an advanced, affordable solution with Giddh!",
    buttonText: "Switch To Giddh Now",
    image: "/img/girl-avatar.svg",
  };
  const router = useRouter();
  return (
    <section className='bg-accent position-relative' aria-label="Giddh hero">
      <div className={`container ${styles.inner} d-grid align-items-center`}>
        <div className='p-4'>
          <h1 className='c-fw-400 text-white cactus-font mx-auto' >{data.heading}</h1>
          <p className='fw-normal text-white m-0 pb-2 c-fw-600'>{data.subheading}</p>
          <div className={styles.actions}>
            <button
              onClick={() =>
                document.getElementById("SeeGiddhInAction")?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
              }
              className="btn btn-outline-light fw-semibold text-center align-self-start rounded-2 px-4 py-2 mt-3 col-12 col-sm-6"
            >
              {data.buttonText}
            </button>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <Image
            src={data.image}
            alt="Person holding laptop"
            width={320}
            height={320}
            priority
            className="object-fit-contain w-100 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
