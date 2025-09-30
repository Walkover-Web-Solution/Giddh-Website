import Image from "next/image";
import styles from "./CTA.module.scss";
import { MdArrowForward } from "react-icons/md";

export default function CTA({ compData, hasImage }) {
  return (
    <section className={`${compData?.theme === "light" ? "bg-accent-light font-dark" : "bg-accent font-white position-relative"} position-relative pt-5`}>
      <div
        className={`container ${styles.inner} ${!hasImage ? styles.noImage : ""} d-grid align-items-center justify-content-center`}
      >
        <div className="d-flex  flex-column align-items-center justify-content-center gap-2 pb-5">
          <h2
            className={`${!hasImage && "text-center"
              } font-400 font-sub-heading garmond-font text-center mx-auto`}
          >
            {compData?.heading}
          </h2>
          <p
            className={`${!hasImage && "text-center"
              } font-md font-white text-center font-600`}
          >
            {compData?.subheading}
          </p>
          <div>
            {Array.isArray(compData?.buttons) && compData?.buttons.map((button, index) => (
              <a key={index} href={button?.link} target="_blank">
                <button
                  onClick={() =>
                    document
                      .getElementById("SeeGiddhInAction")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                  }
                  className={`btn font-600 ${button?.type}`}
                >
                  {button.text} {button.arrow && <MdArrowForward />}
                </button>
              </a>
            ))}
          </div>
        </div>
        {hasImage && (
          <div className={styles.imageWrap}>
            <Image
              src={compData?.image}
              alt="Person holding laptop"
              width={320}
              height={320}
              priority
              className="object-fit-contain w-100 h-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
}
