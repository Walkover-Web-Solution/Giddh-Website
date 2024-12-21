import Jsondata from '../data/data.json'
import TrustBadge from "@/components/trust-badge";

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
            { link.isUK && <TrustBadge /> }
            <div className="row mt-3">
              <div className="feature-gallery__title text-center mb-3">
                <h3>Features that empower your business accounting</h3>
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
                            {
                                (link.isGlobal || link.isIndia) && 
                                <>
                                    { (index <= 2) && <h2 className="c-fw-600 c-fs-4">{data?.name}</h2> }
                                    { (index >= 3 && index <= 5) && <h3 className="c-fw-600 c-fs-4">{data?.name}</h3> }
                                    { (index >= 6 && index <= 8) && <h4 className="c-fw-600 c-fs-4">{data?.name}</h4> }
                                    { (index >= 9 && index <= 11) && <h5 className="c-fw-600 c-fs-4">{data?.name}</h5> }
                                    { (index >= 12) && <h6 className="c-fw-600 c-fs-4">{data?.name}</h6> }
                                </>
                            }
                            {
                                (link.isAE || link.isUK) && 
                                <>
                                    { (index <= 1) && <h2 className="c-fw-600 c-fs-4">{data?.name}</h2> }
                                    { (index >= 2 && index <= 3) && <h3 className="c-fw-600 c-fs-4">{data?.name}</h3> }
                                    { (index >  3 && index <= 8) && <h4 className="c-fw-600 c-fs-4">{data?.name}</h4> }
                                </>
                            }
                          <span
                            className="c-fs-5"
                            dangerouslySetInnerHTML={{
                              __html: data.description,
                            }}
                          />
                          <br />
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
                  aria-label="Feature gallery card feature gallery"
                ></a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};
export default featureGallery;
