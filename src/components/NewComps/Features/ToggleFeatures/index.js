import style from "./ToggleFeatures.module.scss";
import { useState, useCallback, memo } from "react";
import Image from "next/image";
import * as MdIcons from "react-icons/md";
import { MdCircle } from "react-icons/md";

export default function ToggleFeatures({ features }) {
  if (!features?.length) return null;
  const [expandedFeature, setExpandedFeature] = useState(0);
  const Icon = features[expandedFeature]
    ? MdIcons[features[expandedFeature].icon]
    : null;
  const handleFeatureToggle = useCallback((index) => {
    setExpandedFeature((prev) => (prev === index ? prev : index));
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="font-sub-heading text-center garmond-font mb-3 mb-md-4">
          <span className="font-primary">Giddh Features</span> That Make
          Business Easy
        </h2>

        <div className="d-flex flex-column flex-sm-row gap-4 outfit-font align-items-center justify-content-between">
          <div className="col-12 col-sm-6 order-1 order-md-1">
            <div id="features" className="p-2">
              {features.map((feature, index) => (
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

          <div className="col-12 col-sm-6 order-2 order-sm-2 d-none d-sm-flex justify-content-center">
            {features[expandedFeature] && features[expandedFeature].image ? (
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="position-relative d-inline-block rounded overflow-hidden">
                  {features[expandedFeature].image && (
                    <Image
                      src={features[expandedFeature].image}
                      alt={features[expandedFeature].name}
                      height={400}
                      width={400}
                      className={`cursor-pointer ${style.image}`}
                    />
                  )}

                  <div
                    className={`${style.imageOverlay} d-flex flex-column align-items-start justify-content-end p-4 position-absolute top-0 left-0 right-0 bottom-0`}
                  >
                    <div className="text-start font-white">
                      <h3 className="font-outfit font-white font-600 font-md text-start">
                        {features[expandedFeature].name}
                      </h3>
                      <p className="font-md text-start">
                        {features[expandedFeature].description}
                      </p>
                    </div>
                    <button className="mx-auto d-flex align-items-center justify-content-center gap-2 border border-white rounded-3 px-4 py-2 bg-grey-faded cursor-pointer font-600 font-md">
                      <div>
                        {Icon && <Icon size={18} className="font-white" />}
                      </div>
                      <span className="font-white">
                        {features[expandedFeature].name}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ) : features[expandedFeature] ? (
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="d-flex flex-column align-items-center text-center p-4">
                  <h3 className="font-outfit font-white font-600 font-md">
                    {features[expandedFeature].name}
                  </h3>
                  <p className="font-md">
                    {features[expandedFeature].description}
                  </p>
                  <button
                    className={`mx-auto d-flex align-items-center justify-content-center gap-2 border border-white rounded-3 px-4 py-2 ${style.imageButton} cursor-pointer c-fw-600 c-fs-5`}
                  >
                    <div>
                      {Icon && <Icon size={18} className="font-white" />}
                    </div>
                    <span className="font-white">
                      {features[expandedFeature].name}
                    </span>
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureItem = memo(({ feature, index, isExpanded, onToggle }) => {
  const handleToggle = useCallback(() => {
    onToggle(index);
  }, [index, onToggle]);
  const Icon = MdIcons[feature.icon];

  return (
    <div
      className={`d-flex flex-column gap-1 rounded p-2 ${
        isExpanded ? "bg-accent font-white border" : ""
      } cursor-pointer`}
    >
      <div className="d-flex align-items-center gap-2" onClick={handleToggle}>
        <div className="border border-color-primary p-2 bg-extra-light-blue rounded d-flex align-items-center justify-content-center">
          {Icon && <Icon size={18} className="font-primary" />}
        </div>
        <h3
          className={`font-primary font-md m-0 ${
            isExpanded ? "font-white" : ""
          }`}
        >
          {feature.name}
        </h3>
      </div>

      <div
        className={`d-flex flex-column gap-2 pt-2 ps-sm-5 ${
          isExpanded ? "d-flex" : "d-none"
        }`}
      >
        <div className="d-block d-sm-none">
          <Image
            src={feature.image}
            alt={feature.name}
            width={800}
            height={400}
            className={`object-fit-contain cursor-pointer w-100 h-fit ${style.image}`}
          />
        </div>

        <div className="d-flex flex-column gap-2">
          <p className="m-0 p-0 font-md">{feature.description}</p>
          <ul className="list-unstyled d-flex flex-column gap-1">
            {feature.content &&
              feature.content.length > 0 &&
              feature.content.map((point, pointIndex) => (
                <li className="d-flex gap-2 font-md" key={pointIndex}>
                  <MdCircle className="font-white mt-2" fontSize={7} /> {point}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
});
