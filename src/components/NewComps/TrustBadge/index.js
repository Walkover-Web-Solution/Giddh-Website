import style from "./TrustBadge.module.scss";

export default function TrustBadge() {
  const trustBadgeBrands = [
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
  ];

  return (
    <section className="container section_py d-flex flex-column gap-4">
      <div className="d-flex flex-column text-center content-width mx-auto">
        <h2 className="sub-heading c-fw-600 col-primary ">
          Giddh: Finest Business Accounting Software for SMBs
        </h2>
        <p>
          Featured in leading media outlets like Dailyhunt, Giddh is recognized
          for revolutionizing accounting as a Cloud Invoicing Software with its
          user-friendly features and seamless integrations.
        </p>
      </div>
      <div
        className={`${style.logo_container} d-flex flex-wrap align-items-center justify-content-center`}
      >
        <img
          className={`${style.leaf} w-fit-content`}
          alt="Trust Reef"
          src="img/trust-badge/wheat-frame-left.svg"
        />
        {trustBadgeBrands?.map((logo, index) => (
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
