import Head from "next/head";
import Data from "@/data/metadata.json";
import { useEffect, useState } from "react";
import hrefLangTag from "@/data/hrefLangTag.json";

export default function Header (props) {
  const link = props.path;
  const currentPath = props.browserPath;
  const [restrictFromSeo, setRestrictFromSeo] = useState(false);
  const countryList = ["", "in", "ae", "uk"];
  const country = link?.linkPrefix?.replace("/", "");
  const exceptionPage = {
    global: ["/gst", "/vat", "/e-invoice", "/tallyplusgiddh"],
    in: ["/vat", "/blog"],
    uk: ["/gst", "/e-invoice", "/blog", "/tallyplusgiddh"],
    ae: ["/gst", "/e-invoice", "/blog", "/tallyplusgiddh"],
  };


  var pathPage, pathCountry, isBlogPage;
  const pathArrRaw = currentPath.split("?"); // Remove ? form Url
  const pathArr = pathArrRaw[0].split("/");
  let metaPath = pathArrRaw[0].split("#"); // Remove # form Url to get correct meta data

  const metaData = Data[metaPath[0]] || {};

  if (pathArr.length === 2) {
    if (countryList.includes(pathArr[1])) {
      pathPage = "";
      pathCountry = "/" + pathArr[1];
    } else {
      if (pathArr[1]) {
        pathPage = "/" + pathArr[1];
      } else {
        pathPage = "";
      }
      pathCountry = "";
    }
  } else {
    if (countryList.includes(pathArr[1])) {
      pathCountry = "/" + pathArr[1];
      pathPage = "/" + pathArr.slice(2).join("/");
    } else {
      pathPage = "/" + pathArr.slice(1).join("/");
      pathCountry = "";
      isBlogPage = pathArr[1] === "blog";
    }
  }

  useEffect(() => {
    const isRestrictedPage =
      window.location.href && window.location.href.indexOf("v2/login") > -1;
    setRestrictFromSeo(isRestrictedPage);
  }, []);

  return (
    <>
      <Head>
        <title>{metaData?.title}</title>
        {metaData?.description && (
          <meta name="description" content={metaData.description}></meta>
        )}
        {metaData?.keywords && (
          <meta name="keywords" content={metaData.keywords}></meta>
        )}
        <link rel="icon" type="image/x-icon" href="/favico.svg"></link>
        <link rel="alternate" href="https://giddh.com/" hrefLang="x-default" />
        {/* <link rel="canonical" href={`https://giddh.com${link?.page}`} /> */}

        {hrefLangTag?.["global"]?.includes(link?.page) && (
          <link
            rel="alternate"
            hrefLang="en"
            href={`https://giddh.com${
              link?.page === "home" ? "" : "/" + link?.page
            }`}
          />
        )}
        {hrefLangTag?.["in"]?.includes(link?.page) && (
          <link
            rel="alternate"
            hrefLang="en-IN"
            href={`https://giddh.com/in${
              link?.page === "home" ? "" : "/" + link?.page
            }`}
          />
        )}
        {hrefLangTag?.["ae"]?.includes(link?.page) && (
          <link
            rel="alternate"
            hrefLang="en-AE"
            href={`https://giddh.com/ae${
              link?.page === "home" ? "" : "/" + link?.page
            }`}
          />
        )}
        {hrefLangTag?.["uk"]?.includes(link?.page) && (
          <link
            rel="alternate"
            hrefLang="en-GB"
            href={`https://giddh.com/uk${
              link?.page === "home" ? "" : "/" + link?.page
            }`}
          />
        )}

        {/* {(isBlogPage || country === "") &&
          !exceptionPage?.global.includes(pathPage) && (
            <>
              <link
                rel="alternate"
                hrefLang="en"
                href={`https://giddh.com${pathPage}`}
                property="og:locale"
                content="en"
                url={`https://giddh.com${pathPage}`}
              />
            </>
          )} */}

        {restrictFromSeo && <meta name="robots" content="noindex, nofollow" />}

        {(metaData?.ogTitle || metaData?.title) && (
          <meta
            property="og:title"
            content={metaData.ogTitle || metaData.title}
          />
        )}
        {(metaData?.ogDescription || metaData?.description) && (
          <meta
            property="og:description"
            content={metaData.ogDescription || metaData.description}
          />
        )}
        {metaData?.title && <meta property="og:type" content="website" />}
      </Head>
    </>
  );
};

