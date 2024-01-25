import Jsondata from '../data/data.json'

const featureGallery = (path) => {
  const link = path.path;

    const indiaCardData = Jsondata.indiaCardData;
    const globalCardData = Jsondata.globalCardData;
    const aeCardData = Jsondata.aeCardData;
    const ukCardData = Jsondata.ukCardData;
    const directoryPath = "/img/feature-gallery-icons";

    const countryWiseCardData = link.isGlobal
      ? globalCardData
      : link.isIndia
      ? indiaCardData
      : link.isAE
      ? aeCardData
      : ukCardData;

    return (
      <>
        <section className="container-fluid feature-gallery">
          <div className="container">
            <div className="row">
              <div className="feature-gallery__title text-center mb-3">
                <h2>Features that empower your business accounting</h2>
              </div>
            </div>
            <div className="row">
              {countryWiseCardData.map((data, index) => (
                <div className="col-lg-6 col-md-12 col-sm-12" key={index}>
                  <div className="feature-gallery__card container">
                    <div className="row h-100 align-items-start row-gap-3  text-md-start text-sm-center text-center">
                      <div className="col-md-5 col-sm-12 text-center">
                        <figure className="pt-2">
                          <img
                            src={directoryPath + data.image}
                            alt="Giddh features Icon"
                            height="auto"
                            width="160"
                          />
                        </figure>
                      </div>
                      <div className="col-md-7 col-sm-12">
                        <div className="pe-4">
                          <h3 className="c-fw-600 c-fs-4">{data?.name}</h3>
                          <p className="mb-0">{data.description}</p>
                          {data.hasMoreContent ? (
                            <a href={data.link} className="view-more-btn">
                              View More
                            </a>
                          ) : (
                            data.link !== null && (
                              <a href={data.link} className="view-more-btn">
                                View More
                              </a>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-lg-6 col-md-12 col-sm-12">
                <a
                  className="feature-gallery__card feature-gallery--see-more"
                  href={link.linkPrefix + "/all-features"}
                ></a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};
export default featureGallery;
