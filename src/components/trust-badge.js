import { useEffect, useState } from "react";
const trustBadge = (path) => {
  const [trustBadgeBrand, setTrustBadgeBrand] = useState([]);
  const link = path.path;

  const trustBadgeBrands = {
    "isUK":[
      {
        href: "https://markets.businessinsider.com/news/stocks/giddh-launches-online-accounting-software-for-businesses-1034090245",
        alt: "Featured on Business Insider",
        src: "/img/trust-badge/business-insider.svg"
      },
      {
        href: "https://apnews.com/press-release/marketersmedia/giddh-launches-online-accounting-software-for-businesses-806efaa6b4825eb5b08bdbfc5924f09b",
        alt: "Featured on Associated Press",
        src: "/img/trust-badge/ap-news.svg"
      },
      {
        href: "https://www.theglobeandmail.com/investing/markets/markets-news/Plentisoft/29863434/giddh-launches-online-accounting-software-for-businesses/",
        alt: "Featured on The Globe And Mail",
        src: "/img/trust-badge/the-globe-and-mail.svg"
      },
      {
        href: "https://www.digitaljournal.com/pr/news/vehement-media/giddh-launches-online-accounting-software-1445770855.html",
        alt: "Featured on Digital Journal",
        src: "/img/trust-badge/digital-journal.svg"
      },
      {
        href: "https://www.streetinsider.com/Globe+PR+Wire/GIDDH+Launches+Online+Accounting+Software+for+Businesses/24084381.html",
        alt: "Featured on Street Insider",
        src: "/img/trust-badge/street-insider.svg"
      },
      {
        href: "https://www.benzinga.com/content/42407993/giddh-launches-online-accounting-software-for-businesses",
        alt: "Featured on Benzinga",
        src: "/img/trust-badge/benzinga.svg"
      }
    ],
    "isIndia": [
      {
        href: "https://www.tribuneindia.com/news/business/giddh-books-makes-accounting-accessible-and-automated-for-indian-small-businesses/",
        alt: "Accessible Accounting Software for Small Businesses",
        src: "/img/trust-badge/the-tribute.svg"
      },
      {
        href: "https://m.dailyhunt.in/news/india/english/sangri+today-epaper-dhca0872bf801748bd9f43791084210e94/giddh+revolutionizing+accounting+software+with+advanced+features+and+security-newsid-dhca0872bf801748bd9f43791084210e94_e4f3a6f0d4bf11efb7bb631dcbb8c226?sm=Y",
        alt: "Dailyhunt Trust Badge for Bookkeeping",
        src: "/img/trust-badge/dailyhunt.svg"
      },
      {
        href: "https://en.jaipurtimes.org/giddh-revolutionizing-accounting-software-with-advanced-features-and-security",
        alt: "Advanced GST Accounting Software for India",
        src: "/img/trust-badge/jaipur-times.svg"
      },
      {
        href: "https://www.sangritoday.com/spotlight/giddh-revolutionizing-accounting-software-with-advanced-features-and-security",
        alt: "Giddh: Revolutionary Accounting Software with Advanced Features and Security",
        src: "/img/trust-badge/sangri-today.webp"
      },
      {
        href: "https://www.indiadazzle.com/giddh-revolutionizing-accounting-software-with-advanced-features-and-security",
        alt: "Trusted Cloud Accounting Solution with advanced features and security",
        src: "/img/trust-badge/India-dazzle.webp"
      },
      {
        href: "https://biharnewswatch.in/giddh-revolutionizing-accounting-software-with-advanced-features-and-security/",
        alt: "Giddh Cloud Accounting Software with Advanced Features",
        src: "/img/trust-badge/bihar-news.svg"
      },
      {
        href: "https://rajasthannewstime.in/giddh-revolutionizing-accounting-software-with-advanced-features-and-security/",
        alt: "Rajasthan News Time - Giddh Accounting Software",
        src: "/img/trust-badge/rajasthan-news-time.svg"
      }
    ]
  };

  useEffect(() => {
    setTrustBadgeBrand(trustBadgeBrands[Object.keys(link).find((key) => link[key] === true)]);
  }, [link]);

  return (
    <div
      className="position-relative w-100 mx-auto pb-3"
      style={{
        borderRadius: "10px",
        minHeight: "180px"
      }}
    >
      <div
        className="text-center c-fs-4 c-fw-600"
        style={{
          padding: "0px 5px 10px 5px",
          letterSpacing: "8px",
          lineHeight: 1.3
        }}
      >
        <div style={{ height: "58px" }}>
          <span className="trust-badge-title position-relative m-0 c-fs-5">
            AS SEEN ON
          </span>
        </div>
        <div className="trust-badge-logo-container">
          <img
            className="trust-badge-leaf position-absolute m-0 p-0"
            alt="Trust Reef"
            style={{ left: "25px" }}
            src="img/trust-badge/wheat-frame-left.svg"
          />
          <img
            className="trust-badge-leaf position-absolute m-0 p-0"
            alt="Trust Reef"
            style={{ transform: "scaleX(-1)", right: "25px" }}
            src="/img/trust-badge/wheat-frame-left.svg"
          />
          <div className="trust-badge-logo-container-item h-auto w-100 position-relative">
            <div className="trust-badge-vertical-center d-flex align-content-center justify-content-center align-items-center flex-wrap flex-row">

              { trustBadgeBrand?.map((logo, index) => (
                <a
                  key={index}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trust-badge-newslogos"
                >
                  <img
                    alt={logo.alt}
                    className="trust-badge-news-logo me-4 h-auto w-auto overflow-visible"
                    src={logo.src}
                    width="auto"
                    height="200"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default trustBadge;
