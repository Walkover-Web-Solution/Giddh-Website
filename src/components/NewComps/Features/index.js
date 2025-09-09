import data from "./data.json";
import style from "./Features.module.scss";
import { useState, useCallback, memo } from "react";
import Image from "next/image";
import * as MdIcons from "react-icons/md";
import { MdCircle } from "react-icons/md";


export default function Features() {
  const [expandedFeature, setExpandedFeature] = useState(0);

  const handleFeatureToggle = useCallback((index) => {
    setExpandedFeature((prev) => (prev === index ? prev : index));
  }, []);

  return (
    <section className="container px-0 py-3 py-md-4">
      <h1 className="text-center cactus-font mb-3 mb-md-4">Features</h1>

      <div className="d-flex flex-column flex-lg-row gap-4 align-items-center justify-content-between">
       
        <div className="col-12 col-lg-6 order-1">
          <div id="features" className="p-2">
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

       
        <div className="col-12 col-lg-6 order-2">
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="position-relative d-inline-block rounded overflow-hidden">
              <Image
                src={data[expandedFeature].image}
                alt={data[expandedFeature].name}
                height={400}
                width={350}
                className={`object-fit-contain cursor-pointer w-100 ${style.image}`}
              />

              <div
                className={`${style.imageOverlay} d-flex flex-column align-items-start justify-content-end p-4`}
              >
                <div className="text-center text-white text-start flex-column">
                  <h3 className="font-outfit text-white c-fw-600 c-fs-4 text-start mb-2">
                    {data[expandedFeature].name}
                  </h3>
                  <p className="c-fs-5 text-start">
                    {data[expandedFeature].description}
                  </p>
                  <button className="d-flex align-items-center justify-content-center gap-2 border border-white rounded-3 px-4 py-2 bg-transparent text-white cursor-pointer c-fw-600 c-fs-5">
                    <span>₹</span>
                    <span>{data[expandedFeature].name}</span>
                  </button>
                </div>
              </div>
            </div>
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
      className={`d-flex flex-column gap-1 rounded ${
        isExpanded && "shadow-sm"
      } cursor-pointer`}
    >
      
      <div
        className="d-flex align-items-center gap-2 p-2"
        onClick={handleToggle}
      >
        <div className="border border-col-primary p-2 bg-light-blue rounded d-flex align-items-center justify-content-center">
          {Icon && <Icon size={18} className="col-primary" />}
        </div>
        <span className="col-primary c-fw-600 c-fs-5">{feature?.name}</span>
      </div>

      {isExpanded && (
        <div className="d-flex flex-column ps-5 pe-2 gap-2">
          <p className="m-0 p-0">{feature.description}</p>
          <ul className="list-unstyled d-flex flex-column gap-1">
            {feature.content?.map((point, pointIndex) => (
              <li className="d-flex gap-2" key={pointIndex}>
                <MdCircle className="text-accent mt-2" fontSize={7} /> {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
