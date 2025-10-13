import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

export default function CTA({ compData, hasImage }) {
  return (
    <section
      className={`${
        compData?.theme === "light"
          ? "bg-accent-light font-dark"
          : "bg-accent font-white outfit-font"
      } py-5 ${hasImage && "pb-md-0"} text-center text-md-start`}
    >
      <div className={`container ${hasImage ? "d-flex" : ""}`}>
        <div className="d-flex justify-content-center flex-column">
          <h2
            className={`${
              !hasImage && "text-center"
            } font-sub-heading garmond-font`}
          >
            {compData?.heading}
          </h2>
          <p className={`${!hasImage ? "text-center" : ""} `}>
            {compData?.subheading}
          </p>
          <div
            className={`${
              !hasImage ? "d-flex justify-content-center gap-4" : ""
            }`}
          >
            {compData?.buttons?.map((button, index) => (
              <a href={button.link} target="_blank">
                <button
                  key={index}
                  onClick={() =>
                    document
                      .getElementById("SeeGiddhInAction")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                  }
                  className={`${button?.type} px-5 py-2 font-xl btn flex items-center`}
                >
                  {button.text} {button.arrow && <MdArrowForward />}
                </button>
              </a>
            ))}
          </div>
        </div>
        {hasImage && (
          <Image
            src={compData?.image}
            alt="Person holding laptop"
            width={320}
            height={320}
            priority
            className="w-75 d-none d-md-block"
          />
        )}
      </div>
    </section>
  );
}
