import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const bannerSection = () => {
  const [utm, setUtm] = useState(null);

  // To get active route
  const pathname = usePathname();
  const startPath = pathname.split("/");
  let isIndia = startPath[1] === "";
  let isAE = startPath[1] === "ae";
  let isUK = startPath[1] === "uk";

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
                {isIndia ? "Upgrade your Accounting Software to Giddh." : ""}
                {isAE ? "Dubai is all set to do VAT friendly accounting!" : ""}
                {isUK ? "UK is all set to do VAT friendly accounting!" : ""}
              </h1>
              <p className="mb-5">
                {isIndia ? "Giddh fits the needs of every business." : ""}
                {isAE || isUK
                  ? "Light on pocket, easy to use, VAT compliant,"
                  : ""}
                <br />
                {isAE || isUK
                  ? "With Giddh, you can now connect to banks & departments seamlessly"
                  : ""}
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
