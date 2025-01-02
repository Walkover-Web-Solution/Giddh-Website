import { useEffect, useState } from "react";
import { createSlider } from '@typeform/embed';

const bannerSection = (path) => {
  const link = path.path;

  const [utm, setUtm] = useState(null);

  useEffect(() => {
    const utmParams = new URLSearchParams({
      utm_source: getLocalStorage("utm_source"),
      utm_medium: getLocalStorage("utm_medium"),
      utm_campaign: getLocalStorage("utm_campaign"),
    }).toString();
    setUtm(utmParams);
    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openTypeForm = () => {
    const slider = createSlider("https://form.typeform.com/to/uOtrQ4tb", {
      position: "right", // Specify position ('left', 'center', 'right')
      opacity: 83, // Background overlay opacity
      iframeProps: {
        title: "Accounting Software Company Contact Form", // Accessible iframe title
      },
      transitiveSearchParams: true, // Pass search params to Typeform
      medium: "snippet", // Set the medium for analytics/tracking
      hidden: {
        utm: utm // Pass the UTM parameters as hidden fields
      },
    });
    slider.open(); // Opens the slider
  };
  return (
    <>
      <section className="container-fluid banner">
        <div className="container-lg">
          <div className="row h-100 align-items-xl-start align-items-lg-center">
            <div className="col-lg-6 col-md-12">
              <h1 className="col-primary heading-text">
                {link.isGlobal && "Online Accounting Software For Businesses"}
                {link.isIndia && "Business Accounting Software India"}
                {link.isUK &&
                  "VAT-Compliant Accounting Software For UK Small Businesses"}
                {link.isAE &&
                  "Cloud-based Accounting Software For UAE Businesses"}
              </h1>
              <div className="banner__contact_btn mt-5">
                <button onClick={openTypeForm}>Contact Sales</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <figure>
                <img
                  width="700"
                  height="auto"
                  src="/img/giddh-dashboard-within-chrome-browser.webp"
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
