import Image from "next/image";
import styles from "./CTA.module.scss";

export default function CTA({ compData, hasImage }) {
  return (
    <section className={`${compData?.theme === "light" ? "bg-accent-light font-dark" : "bg-accent font-white"} py-5`}>
      <div
        className={`container ${styles.inner} d-flex align-items-center justify-content-center`}
      >
        <div className="d-flex flex-column align-items-center justify-content-center gap-4">
          <h1
            className={`${!hasImage && "text-center"
              } font-400 garmond-font mx-auto`}
          >
            {compData?.heading}
          </h1>
          <p
            className={`${!hasImage && "text-center"
              } font-md font-white m-0 pb-2 font-600`}
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
                  className={`btn ${button?.type === "primary"
                    ? "btn-primary"
                    : "btn-primary-outline"
                    }`}
                >
                  {button.text}
                </button>
              </a>
            ))}
          </div>
          {hasImage ? (
            <div className={styles.imageWrap}>
              <Image
                src={compData?.image}
                alt="Person holding laptop"
                width={320}
                height={320}
                className="object-fit-contain w-100 h-auto"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
