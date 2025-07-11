import { useState } from "react";
import { createSlider } from "@typeform/embed";
import Head from "next/head";
import Jsondata from "@/data/schema/organizationSchema.json";
import { getSchemaForLinkPath } from "../../../../public/js/utils";
import style from "./Banner.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Banner(path) {
  const link = path.path;
  const [utm, setUtm] = useState(null);
  const selectedSchema = getSchemaForLinkPath(
    link,
    Jsondata.organizationSchema
  );

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
  const data = {
    global: {
      h1: "Online Accounting Software For Businesses",
      p: "Fits the needs of every business. fits the needs of every business.fits the needs of every business. fits the needs of every business.",
    },
    in: {
      h1: "Business Accounting Software India",
      p: "Fits the needs of every business. fits the needs of every business.fits the needs of every business. fits the needs of every business.",
    },
    ae: {
      h1: "Cloud-based Accounting Software For UAE Businesses",
      p: "Fits the needs of every business. fits the needs of every business.fits the needs of every business. fits the needs of every business.",
    },
    uk: {
      h1: "VAT-Compliant Accounting Software For UK Small Businesses",
      p: "Fits the needs of every business. fits the needs of every business.fits the needs of every business. fits the needs of every business.",
    },
  };

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
      <section className={style.banner}>
        <div className="section_py container d-flex flex-column gap-5">
          <div className="d-flex flex-column gap-3">
            <div className={style.banner_heading}>
              <h1 className="heading col-primary c-fw-600">
                {data[link?.country]?.h1}
              </h1>
              <p className="c-fs-4">{data[link?.country]?.p}</p>
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
          <figure>
            <Image
              className={style.img}
              width="1440"
              height="1080"
              src="/img/giddh_dashboard.webp"
              alt="Screenshot of Giddh Dashboard within a Chrome browser"
            />
            <figcaption className="figcaption">
              Screenshot of Giddh Dashboard within a Chrome browser
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
