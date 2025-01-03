import { MdEmail, MdCall, MdWhatsapp } from "react-icons/md";
import { useEffect, useState } from "react";

const contactUs = (path) => {
  const [utm, setUtm] = useState(null);
  const linkPath = path.path;
  const isUK = linkPath.isUK;

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
      <div className="contact_us">
        <section className="container-fluid contact_us__banner">
          <div className="container">
            <div className="row">
              <div className="col-12 contact_us__banner__content">
                <h1 className="col-white mb-3">Ideas/Questions?</h1>
                <p className="col-white c-fs-1">
                  Someone will always be there to answer them!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid contact_us__content">
          <div className="container">
            <h2 className={"col-primary c-fs-1 c-fw-600 text-center pb-3" + (isUK ? " mb-3" : " mb-5")}>
              Contact Us
            </h2>

            <div className={"row align-items-start row-gap-4" + (isUK ? " mb-3" : " mb-5")}>
              <div className={"contact_us__form__left contact-details text-center" + (isUK ? " col-12" : " col-lg-6")}>
                <div className="contact-details__wapper d-flex flex-column justify-content-center">
                  { !isUK && (
                    <h3 className="mb-4 col-primary">Sales</h3>
                  )}

                  <address>
                    <div className="d-flex align-items-center column-gap-3 mb-3">
                      <MdEmail />
                      <a
                        href={`mailto:${isUK ? "hello@giddh.com" : "support@giddh.com"}`}
                        className="contact-details__wapper--email"
                      >
                        { isUK ? "hello@giddh.com" : "support@giddh.com" }
                      </a>
                    </div>
                    <div className="d-flex align-items-center column-gap-3 mb-3">
                      <MdWhatsapp />
                      <a href={`http://wa.me/${isUK ? "+447520603143" : "+918889500411"}?text=Hello,+I+need+help`}>
                         { isUK ? "+44 7520 603143" : "+91 88895 00411"}
                        </a>
                    </div>
                    {
                      !isUK && (
                      <div className="d-flex align-items-center column-gap-3">
                        <MdCall />

                        <a href="tel:+918889500411"> +91 88895 00411</a>
                      </div>
                    )}
                  </address>

                  <button
                    onClick={() =>
                      Calendly.initPopupWidget({
                        url: "https://calendly.com/sales-accounting-software/talk-to-sale",
                      })
                    }
                  >
                    Schedule a meeting
                  </button>
                  <button
                    data-tf-slider="uOtrQ4tb"
                    data-tf-position="right"
                    data-tf-opacity="83"
                    data-tf-hide-headers
                    data-tf-iframe-props="title=Accounting Software Company Contact Form"
                    data-tf-transitive-search-params
                    data-tf-medium="snippet"
                    data-tf-hidden={utm}
                    className="mt-0 mt-lg-2"
                  >
                    Contact Sales
                  </button>
                </div>
              </div>
              { !isUK && (
                <div className="col-lg-6 contact_us__form__right text-center">
                  <div className="contact-details__wapper d-flex flex-column justify-content-center">
                    <h3 className="mb-4 col-primary">Support</h3>

                    <address>
                      <div className="d-flex align-items-center column-gap-3 mb-3">
                        <MdEmail />
                        <a
                          href="mailto:support@giddh.com"
                          className="contact-details__wapper--email"
                        >
                          support@giddh.com
                        </a>
                      </div>
                      <div className="d-flex align-items-center column-gap-3 mb-3">
                        <MdWhatsapp />
                        <a href="http://wa.me/+918889500411?text=Hello,+I+need+help">
                          {" "}
                          +91 88895 00411
                        </a>
                      </div>
                      <div className="d-flex align-items-center column-gap-3">
                        <MdCall />
                        <a href="tel:+918818888768"> +91 88188 88768</a>
                      </div>
                    </address>
                    <button
                      onClick={() =>
                        Calendly.initPopupWidget({
                          url: "https://calendly.com/sales-accounting-software/talk-to-sale",
                        })
                      }
                    >
                      Schedule a meeting
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default contactUs;
