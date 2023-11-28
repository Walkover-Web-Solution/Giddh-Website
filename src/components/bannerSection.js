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

  return (
    <>
      <section className="container-fluid banner">
        <div className="container-lg">
          <div className="row h-100 align-items-xl-start align-items-lg-center">
            <div className="col-lg-6 col-md-12">
              <h1 className="col-primary">
                <span className="heading-text">Accounting Software</span>
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
            </div>
            <div className="col-lg-6 col-md-12">
              <figure>
                <img
                  width="700"
                  height="auto"
                  src="/img/giddh-dashboard-within-chrome-browser.png"
                  alt="Laptop image with giddh.com dashboard screen"
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
