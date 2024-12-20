const trustBadge = () => {
  const trustBadgeBrands = [
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
  ];

  return (
      <section className="container-fluid trust-badge">
        <div className="container">
          <div
            className="position-relative w-100 bg-white mx-auto pb-3"
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
                    {trustBadgeBrands.map((logo, index) => (
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
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default trustBadge;
