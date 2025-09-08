import data from "./data.json";
import style from "./Features.module.scss";
import { useState, useCallback, memo } from "react";
import Image from "next/image";
import { MdCircle, MdCurrencyRupee } from "react-icons/md";

const FeatureItem = memo(({ feature, index, isExpanded, onToggle }) => {
  const handleToggle = useCallback(() => {
    onToggle(index);
  }, [index, onToggle]);

  return (
    <div
      className={`d-flex flex-column gap-1 rounded ${
        isExpanded && "shadow-sm"
      } cursor-pointer `}
    >
      <div
        className="d-flex align-items-center gap-2 p-2"
        onClick={handleToggle}
      >
        <div
          className={`${style.featureIcon} rounded d-flex align-items-center justify-content-center`}
        >
          <MdCurrencyRupee className="text-accent" />
        </div>
        <span className="col-primary c-fw-600 c-fs-5">{feature?.name} </span>
      </div>

      {isExpanded && (
        <div className="d-flex flex-column ps-5 pe-2 gap-2">
          <p className="m-0 p-0">{feature.description}</p>
          <ul className="list-unstyled d-flex flex-column gap-1">
            {feature.content?.map((point, pointIndex) => (
              <li className="d-flex gap-2 " key={pointIndex}>
                <MdCircle className="text-accent mt-2" fontSize={7} /> {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default function Features() {
  const [expandedFeature, setExpandedFeature] = useState(0);

  const handleFeatureToggle = useCallback((index) => {
    setExpandedFeature((prev) => (prev === index ? prev : index));
  }, []);

  return (
    <section className="container px-0  py-3 py-md-4 ">
      <h2
        className="text-center mb-3 mb-md-4"
        style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}
      >
        Features
      </h2>

      <div className="d-flex flex-column flex-lg-row gap-4 align-items-center justify-content-between">
        <div className="col-12 col-lg-6 order-1 order-lg-1">
          <div id="features" className={style.featureContainer}>
            {data.slice(0, 5).map((feature, index) => (
              <FeatureItem
                key={index}
                feature={feature}
                index={index}
                isExpanded={expandedFeature === index}
                onToggle={handleFeatureToggle}
              />
            ))}
          </div>
        </div>

        <div className="col-12 col-lg-6 order-2 order-lg-2">
          <div className="d-flex align-items-center justify-content-center h-100">
            <div>
              <div className={style.imageWrapper}>
                <Image
                  src={data[expandedFeature].image}
                  alt={data[expandedFeature].name}
                  height={400}
                  width={350}
                  style={{ objectFit: "contain" }}
                />
                <div className={style.imageOverlay}>
                  <div className={style.overlayContent}>
                    <h3 className={style.overlayTitle}>
                      {data[expandedFeature].name}
                    </h3>
                    <p className={` c-fs-5 text-start`}>
                      {data[expandedFeature].description}
                    </p>
                    <button className={style.overlayButton}>
                      <span>₹</span>
                      <span style={{ marginLeft: 8 }}>
                        {data[expandedFeature].name}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
