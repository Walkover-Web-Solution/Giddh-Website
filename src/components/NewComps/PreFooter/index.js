import Link from "next/link";
import { useState } from "react";

export default function PreFooter() {
  const data = {
    heading: "Start Your Accounting Revolution with Giddh",
    subheading:
      "Try Giddh free and see how effortless accounting can be. Your books deserve better.",
  };
  const [utm, setUtm] = useState(null);
  const openTypeForm = () => {
    const utmParams = new URLSearchParams({
      utm_source: getLocalStorage("utm_source"),
      utm_medium: getLocalStorage("utm_medium"),
      utm_campaign: getLocalStorage("utm_campaign"),
    }).toString();
    setUtm(utmParams);

    const slider = createSlider("https://form.typeform.com/to/uOtrQ4tb", {
      position: "right", // Specify position ('left', 'center', 'right')
      opacity: 83, // Background overlay opacity
      iframeProps: {
        title: "Accounting Software Company Contact Form", // Accessible iframe title
      },
      transitiveSearchParams: true, // Pass search params to Typeform
      medium: "snippet", // Set the medium for analytics/tracking
      hidden: {
        utm: utm, // Pass the UTM parameters as hidden fields
      },
    });
    slider.open(); // Opens the slider
  };

  return (
    <section className="bg-light-blue section_py">
      <div className="container d-flex flex-column gap-3">
        <div className="d-flex flex-column content-width">
          <h2 className="sub-heading c-fw-600 col-primary ">{data?.heading}</h2>
          <p>{data?.subheading}</p>
        </div>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex flex-sm-row  gap-md-4 gap-2 justify-content-start w-12">
            <Link href={"/signup"}>
              <button
                className="d-block d-sm-none btn btn-primary "
                aria-label="Signup for Accounting Software"
              >
                Get Started
              </button>
              <button
                className="d-none d-sm-block  btn btn-primary col-12"
                aria-label="Signup for Accounting Software"
              >
                See Giddh in Action
              </button>
            </Link>
            <button
              className="btn btn-secondary "
              onClick={openTypeForm}
              aria-label="Contact Sales for Accounting Software"
            >
              Request A Demo
            </button>
          </div>
          <span className="c-fs-6">No card required. Try for Free!</span>
        </div>
      </div>
    </section>
  );
}
