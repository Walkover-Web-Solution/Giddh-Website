import Head from "next/head";
import Jsondata from "@/data/schema/organizationSchema.json";
import { getSchemaForLinkPath } from "../../../../public/js/utils";
import BookFreeDemoForm from "../BookFreeDemoForm";
import { trustBadgeBrands } from "../TrustBadge";
import style from "./Banner.module.scss";

export default function Banner(path) {
  const link = path.path;
  const selectedSchema = getSchemaForLinkPath(
    link,
    Jsondata.organizationSchema
  );

  return (
    <>
      {selectedSchema && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(selectedSchema) }}
          />
        </Head>
      )}
      <section
        className={`py-3 mb-5 outfit-font ${style.banner}`}
      >
        <div className="container px-4">
          <div className="mb-5 pb-3 d-flex justify-content-between align-items-center">
            <img
              src="/img/giddh-logo.svg"
              alt="Giddh Logo"
              className="banner-logo"
              width={120}
              height={24}
            />
            <button
              onClick={() =>
                document.getElementById("SeeGiddhInAction")?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
              }
              className={`px-3 py-2 c-fs-5 rounded  ${style.getStarted}`}
            >
              Get Started
            </button>

          </div>
          <div className="row align-items-center justify-content-between cactus-font ">
            <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0 pe-3">
              <h1 className="cactus-font heading col-primary">
                Smart, Simple & Powerful Accounting for Growing Businesses
              </h1>
              <p className="col-grey outfit-font ">
                GIDDH makes accounting easy with clear ledger entries, unlimited users, and strong inventory management — all at affordable prices. Track sales, purchases, and manufacturing in one place and grow your business with confidence.
              </p>
              <div className="d-flex flex-wrap align-items-center gap-4">
                {trustBadgeBrands?.map((logo, index) => (
                  <a
                    key={index}
                    href={logo.href}
                    target="_blank"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="logo-item"
                      height={34}
                    />
                  </a>
                ))}
              </div>
            </div>
            <BookFreeDemoForm hiddenAbsolute={false} location="banner" />
          </div>
        </div>
      </section>
    </>
  );
}
