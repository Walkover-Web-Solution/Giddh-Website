import { useEffect, useState } from "react";

const bannerSection = () => {
  const [utm, setUtm] = useState(null);

  useEffect(() => {
    var utmParams =
      "utm_source=" +
      getLocalStorage("utm_source") +
      ",utm_medium=" +
      getLocalStorage("utm_medium") +
      ",utm_campaign=" +
      getLocalStorage("utm_campaign") +
      "";
    setUtm(utmParams);
  });

  const ourClient = [
    {
      clientName: "RackBank",
      clientLogo: "/rackbank-logo.png",
      websiteLink: "https://www.rackbank.com/",
    },
    {
      clientName: "Mitti",
      clientLogo: "/mitti-logo.png",
      websiteLink: "https://mitti.cafe/",
    },
    {
      clientName: "MSG91",
      clientLogo: "/msg91-logo.svg",
      websiteLink: "https://msg91.com/",
    }
  ];

  return (
    <>
      <section className="container-fluid banner overflow-hidden">
        <div className="container">
          <div className="row row-gap-3 align-items-lg-start align-items-md-center">
            <div className="col-lg-6 col-md-12">
              <h1>
                <span className="heading-text c-fw-600">Accounting Software</span>
                <br />
                <span className="c-fs-2">that fits every business</span>
              </h1>
              <div className="banner__contact_btn mt-5">
                <button
                  data-tf-slider="uOtrQ4tb"
                  data-tf-position="right"
                  data-tf-opacity="83"
                  data-tf-hide-headers
                  data-tf-iframe-props="title=Accounting Software Company Contact Form"
                  data-tf-transitive-search-params
                  data-tf-medium="snippet"
                  data-tf-hidden={utm}
                >
                  Contact Sales
                </button>
              </div>
              <div className="client-summary">
                <div >
                  <h2 className="client-summary__title c-fw-600">
                    Our clients
                  </h2>
                  <div className="client-summary__content-wrapper mt-4">
                    <div className="d-flex align-items-center column-gap-4 justify-content-center justify-content-lg-start">
                      {ourClient.map((res) => {
                        return (
                          <div
                            key={res.clientName}
                            className="column-wrapper me-lg-3"
                          >
                            <a
                              href={res.websiteLink}
                              target="_blank"
                              className="d-block client"
                            >
                              <figure className="mb-0">
                                <img
                                  src={"/img/our-clients" + res.clientLogo}
                                  alt={res.clientName}
                                  width="auto"
                                  height="50"
                                />
                              </figure>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 position-relative">
              <figure className="banner-image mb-0">
                <img
                  width="800"
                  height="auto"
                  src="/img/giddh-dashboard-within-chrome-browser.png"
                  alt="Giddh Dashboard"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default bannerSection;
