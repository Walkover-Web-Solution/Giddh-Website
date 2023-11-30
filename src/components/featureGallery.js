import { useState } from "react";
import dynamic from "next/dynamic";
import Jsondata from '../data/data.json'
const FeatureGalleryModal = dynamic(() => import("@/components/featureGalleryModal"), {
  ssr: false
});

const featureGallery = (path) => {

  const link = path.path;
  const [currentData, setCurrentData] = useState(null);

  // JSON for Modal
  const indiaModalData = Jsondata.indiaModalData;
  const ukModalData = Jsondata.ukModalData;
  const aeModalData = Jsondata.aeModalData;

  // JSON for Cards

  //  India
  const indiaCardData = Jsondata.indiaCardData;
  const aeCardData = Jsondata.aeCardData;
  const ukCardData = Jsondata.ukCardData;

  const countryWiseModalData = link.isIndia
    ? indiaModalData
    : link.isAE
    ? aeModalData
    : ukModalData;
  const countryWiseCardData = link.isIndia
    ? indiaCardData
    : link.isAE
    ? aeCardData
    : ukCardData;

  // Function to get modal data
  const setCurrent = (value) => {
    setCurrentData([]);
    let matchedObject;
    for (let i = 0; i < countryWiseModalData.length; i++) {
      if (
        countryWiseModalData[i]["heading"].toUpperCase() === value.toUpperCase()
      ) {
        matchedObject = countryWiseModalData[i];
      }
    }
    setCurrentData(matchedObject);
  };
  return (
    <>
      <section className="container-fluid feature-gallery">
        <div className="container">
          <div className="row">
            <div className="feature-gallery__title text-center mb-3">
              <h2>Features that empower your business</h2>
              <p className="c-fs-4">
                Friendly with all other departments Sales, Support, Management
                etc…
              </p>
            </div>
          </div>
          <div className="row">
            {countryWiseCardData.map((data, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div
                  className="feature-gallery__card"
                  data-bs-toggle="modal" data-bs-target="#featureModal"
                  onClick={() => {
                    setCurrent(data.name);                    
                  }}
                >
                  <figure>
                    <img
                      src={"/img" + data.image}
                      alt="Giddh features Icon"
                      height="50"
                      width="100"
                    />
                    <figcaption className="c-fw-400">{data.name}</figcaption>
                  </figure>
                </div>
              </div>
            ))}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <a
                className="feature-gallery__card"
                href={link.linkPrefix + "/all-features"}
              >
                <span className="c-fs-3 col-primary">See More</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <FeatureGalleryModal
        path={link}
        modalData={currentData}
      />
    </>
  );
};
export default featureGallery;
