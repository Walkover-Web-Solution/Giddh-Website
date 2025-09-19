import React from "react";
import Image from "next/image";
import styles from "./CTA.module.scss";

export default function CTA({ compData }) {
  const hasImage = compData?.image ? true : false;
  return (
    <section className="bg-accent position-relative" aria-label="Giddh hero">
      <div
        className={`container ${styles.inner} d-flex align-items-center justify-content-center`}
      >
        <div className="py-5 d-flex flex-column align-items-center justify-content-center">
          <h1
            className={`${
              !hasImage && "text-center"
            } c-fw-400 text-white cactus-font mx-auto`}
          >
            {compData.heading}
          </h1>
          <p
            className={`${
              !hasImage && "text-center"
            } fw-normal text-white m-0 pb-2 c-fw-600`}
          >
            {compData.subheading}
          </p>
          <div>
            {compData.buttons.map((button, index) => (
              <button
                key={index}
                onClick={() =>
                  document.getElementById("SeeGiddhInAction")?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
                className={`btn ${
                  button.type === "primary"
                    ? "btn-primary"
                    : "btn-outline-light"
                }`}
              >
                {button.text}
              </button>
            ))}
          </div>
          {hasImage ? (
            <div className={styles.imageWrap}>
              <Image
                src={compData.image}
                alt="Person holding laptop"
                width={320}
                height={320}
                priority
                className="object-fit-contain w-100 h-auto"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
