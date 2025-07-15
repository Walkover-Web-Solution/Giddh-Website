import { useEffect, useState } from "react";
import style from "./TrustBadge.module.scss";

export default function TrustBadge(path) {
  const link = path.path;

  const trustBadgeBrands = {
    uk: [
      {
        href: "https://markets.businessinsider.com/news/stocks/giddh-launches-online-accounting-software-for-businesses-1034090245",
        alt: "Featured on Business Insider",
        src: "/img/trust-badge/business-insider.svg",
      },
      {
        href: "https://apnews.com/press-release/marketersmedia/giddh-launches-online-accounting-software-for-businesses-806efaa6b4825eb5b08bdbfc5924f09b",
        alt: "Featured on Associated Press",
        src: "/img/trust-badge/ap-news.svg",
      },
      {
        href: "https://www.theglobeandmail.com/investing/markets/markets-news/Plentisoft/29863434/giddh-launches-online-accounting-software-for-businesses/",
        alt: "Featured on The Globe And Mail",
        src: "/img/trust-badge/the-globe-and-mail.svg",
      },
      {
        href: "https://www.digitaljournal.com/pr/news/vehement-media/giddh-launches-online-accounting-software-1445770855.html",
        alt: "Featured on Digital Journal",
        src: "/img/trust-badge/digital-journal.svg",
      },
      {
        href: "https://www.streetinsider.com/Globe+PR+Wire/GIDDH+Launches+Online+Accounting+Software+for+Businesses/24084381.html",
        alt: "Featured on Street Insider",
        src: "/img/trust-badge/street-insider.svg",
      },
      {
        href: "https://www.benzinga.com/content/42407993/giddh-launches-online-accounting-software-for-businesses",
        alt: "Featured on Benzinga",
        src: "/img/trust-badge/benzinga.svg",
      },
    ],
    in: [
      {
        href: "https://www.tribuneindia.com/news/business/giddh-books-makes-accounting-accessible-and-automated-for-indian-small-businesses/",
        alt: "Accessible Accounting Software for Small Businesses",
        src: "/img/trust-badge/the-tribute.svg",
      },
      {
        href: "https://m.dailyhunt.in/news/india/english/sangri+today-epaper-dhca0872bf801748bd9f43791084210e94/giddh+revolutionizing+accounting+software+with+advanced+features+and+security-newsid-dhca0872bf801748bd9f43791084210e94_e4f3a6f0d4bf11efb7bb631dcbb8c226?sm=Y",
        alt: "Dailyhunt Trust Badge for Bookkeeping",
        src: "/img/trust-badge/dailyhunt.svg",
      },
      {
        href: "https://en.jaipurtimes.org/giddh-revolutionizing-accounting-software-with-advanced-features-and-security",
        alt: "Advanced GST Accounting Software for India",
        src: "/img/trust-badge/jaipur-times.svg",
      },
      {
        href: "https://www.sangritoday.com/spotlight/giddh-revolutionizing-accounting-software-with-advanced-features-and-security",
        alt: "Giddh: Revolutionary Accounting Software with Advanced Features and Security",
        src: "/img/trust-badge/sangri-today.webp",
      },
      {
        href: "https://www.indiadazzle.com/giddh-revolutionizing-accounting-software-with-advanced-features-and-security",
        alt: "Trusted Cloud Accounting Solution with advanced features and security",
        src: "/img/trust-badge/India-dazzle.webp",
      },
      {
        href: "https://biharnewswatch.in/giddh-revolutionizing-accounting-software-with-advanced-features-and-security/",
        alt: "Giddh Cloud Accounting Software with Advanced Features",
        src: "/img/trust-badge/bihar-news.svg",
      },
      {
        href: "https://rajasthannewstime.in/giddh-revolutionizing-accounting-software-with-advanced-features-and-security/",
        alt: "Rajasthan News Time - Giddh Accounting Software",
        src: "/img/trust-badge/rajasthan-news-time.svg",
      },
    ],
  };

  if (trustBadgeBrands[path.path.country]) {
    return (
      <section className="container section_py d-flex flex-column gap-4">
        <div className="d-flex flex-column text-center content-width mx-auto">
          <h2 className="sub-heading c-fw-600 col-primary ">
            Our Media Highlights
          </h2>
          <p>
            See who’s talking about us and why businesses trust us around the
            globe.
          </p>
        </div>
        <div className={`${style.logo_container} d-flex flex-wrap align-items-center justify-content-center`}>
          <img
            className={`${style.leaf} w-fit-content`}
            alt="Trust Reef"
            src="img/trust-badge/wheat-frame-left.svg"
          />
          {trustBadgeBrands[path.path.country]?.map((logo, index) => (
            <a
              key={index}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${style.logo_link} w-fit-content`}
            >
              <img
                alt={logo.alt}
                className={`${style.logo} w-fit-content`}
                src={logo.src}
                width="auto"
                height="200"
              />
            </a>
          ))}
          <img
            className={`${style.leaf} w-fit-content`}
            alt="Trust Reef"
            src="img/trust-badge/wheat-frame-right.svg"
          />
        </div>
      </section>
    );
  }
}
