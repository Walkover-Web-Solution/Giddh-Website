import { usePathname } from "next/navigation";

const bannerSection = () => {
  // To get active route
  const pathname = usePathname();
  const startPath = pathname.split("/");
  let isIndia = startPath[1] === "";
  let isAE = startPath[1] === "ae";
  let isUK = startPath[1] === "uk";
  return (
    <>
      <section className="container-fluid banner">
        <div className="container mt-auto">
          <div className="banner__wrapper d-flex align-items-center flex-column">
            <div className="text-center">
              <h1>
                {isIndia ? "Upgrade your Books to Giddh." : ""}
                {isAE ? "Dubai is all set to do VAT friendly accounting!" : ""}
                {isUK ? "UK is all set to do VAT friendly accounting!" : ""}
              </h1>
              <p className="c-fs-1 mb-5">
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
                >
                  Contact Us
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
