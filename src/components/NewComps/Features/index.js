import data from "./data.json";
import style from "./Features.module.scss";
import { useState, useCallback, memo } from "react";
import Image from "next/image";


const   FeatureItem = memo(({ feature, index, isExpanded, onToggle }) => {
  const handleToggle = useCallback(() => {
    onToggle(index);
  }, [index, onToggle]);

  return (
    <div className={`${style.featureItem} ${isExpanded ? style.expanded : style.collapsed}`}>
      <div className={style.featureHeader} onClick={handleToggle}>
        <div className={style.featureIcon}>
          <img src="/img/rupeeicon.svg" alt="Rupee Icon" style={{ width: 12, height: 14 }} />
        </div>
        <span className={style.featureTitle}>{feature.name} </span>
      </div>
      
      {isExpanded && (

<div className={style.expandedContent} style={{ boxShadow: '4px 4px 33px 0px #0000000F' }}>
    <div >

          <div className={style.featureDescription}>
            {feature.description}
            </div>
          <ul className={style.featureList}>
            {feature.content?.map((point, pointIndex) => (
              <li key={pointIndex} style={{ animationDelay: `${0.2 + (pointIndex * 0.05)}s` }}>
                {point}
              </li>
                  ))}
                </ul>
        </div>
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
    <section className="container-fluid py-3 py-md-4">
     
        <h2 className="text-center mb-3 mb-md-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>Features</h2>
        
        <div className="row g-3 g-lg-4  px-3 mx-auto align-items-stretch">
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
              <div className={style.imageContainer}>
                <div className={style.imageWrapper}>
                  <Image
                    src={data[expandedFeature].image}
                    alt={data[expandedFeature].name}
                    height={400}
                    width={350}
                    style={{ objectFit: 'contain' }}
                  />
                  <div className={style.imageOverlay}>
                    <div className={style.overlayContent}>
                      <h3 className={style.overlayTitle}>{data[expandedFeature].name}</h3>
                      <p className={style.overlayDescription}>
                        {data[expandedFeature].description}
                      </p>
                      <button className={style.overlayButton}>
                        <span>₹</span>
                        <span>{data[expandedFeature].name}</span>
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
