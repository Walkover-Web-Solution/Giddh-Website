import { useState } from "react";
import LottiePlayer from "../LottiePlayer";
import { handleAnchorClick } from "@/utils/gtag";

export default function Instructions({ compData }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  if (compData?.steps?.length === 0) return null;
  return (
    <section className="py-5 container d-flex flex-column gap-4">
      <div className="d-flex flex-column align-items-center">
        <h2 className="font-heading font-primary">{compData?.heading}</h2>
        {compData?.subHeading && (
          <p className="sub-heading">{compData?.subHeading}</p>
        )}
      </div>
      <div>
        <div className="d-flex flex-row gap-4 py-3 justify-content-between">
          <div className="d-flex flex-column justify-content-center">
            <div className="d-flex flex-column justify-content-center gap-4 py-2">
              {compData?.steps?.map((step, index) => (
                <div key={step.id}>
                  <div
                    role="button"
                    onClick={() => setSelectedIndex(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedIndex(index);
                      }
                    }}
                    className={`
                    ps-3 font-primary font-600
                      ${
                        selectedIndex === index
                          ? "  border-start border-3 border-accent"
                          : ""
                      }
                    `}
                  >
                    {step.title}
                  </div>

                  {selectedIndex === index && (
                    <div className="ps-3 border-start border-3 border-accent">
                      <p>{step.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="ps-3 font-600 font-lg py-2">{compData?.footer}</div>
            {compData?.buttons?.length && (
              <div className="container d-flex flex-column flex-md-row">
                {compData.buttons.map((button, index) => (
                  <a
                    key={index}
                    href={button.link}
                    target="_blank"
                    onClick={handleAnchorClick(button, "instructions", index)}
                  >
                    <button
                      className={`btn ${
                        index === 0 ? "btn-primary" : "btn-primary-outline"
                      }`}
                    >
                      {button.text}
                    </button>
                  </a>
                ))}
              </div>
            )}
          </div>
          <div>
            {compData?.steps?.[selectedIndex]?.lottie && (
              <div className="d-flex align-items-center justify-content-center">
                <LottiePlayer lottie={compData.steps[selectedIndex].lottie} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
