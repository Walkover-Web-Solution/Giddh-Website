import { useEffect, useState } from "react";

const bannerSection = (path) => {
  const [utm, setUtm] = useState(null);
  const link = path.path;

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
        <div className="container mt-auto">
          <div className="banner__wrapper d-flex align-items-center flex-column">
            <div className="text-center">
              <h1>
                {link.isIndia && "Upgrade your Accounting Software to Giddh." }
                {link.isAE && "Dubai is all set to do VAT friendly accounting!"}
                {link.isUK && "UK is all set to do VAT friendly accounting!"}
              </h1>
              <p className="mb-5">
                {link.isIndia && "Giddh fits the needs of every business."}
                {(link.isAE || link.isUK) && (
                  <> Light on pocket, easy to use, VAT compliant,  <br /> With Giddh, you can now connect to banks & departments seamlessly</>
                  )}
              </p>

              <div className="banner__wrapper__contact_btn">
                <button
                  data-tf-slider="uOtrQ4tb"
                  data-tf-position="right"
                  data-tf-opacity="83"
                  data-tf-hide-headers
                  data-tf-iframe-props="title=Accounting Software Company Contact Form"
                  data-tf-transitive-search-params
                  data-tf-medium="snippet"
                  data-tf-hidden={ utm }
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default bannerSection;
