import Head from "next/head";
import Data from "@/data/metadata.json";
import { useEffect, useState } from "react";

const header = (props) => {
  const link = props.path;
  const currentPath = props.browserPath;
  const metaData = Data[currentPath];
  const [restrictFromSeo, setRestrictFromSeo] = useState(false);
  const countryList = ["", "in", "ae", "uk"];
  const country = link?.linkPrefix?.replace("/", "");

  const exceptionPage = {
    global: ["/gst", "/vat", "/e-invoice"],
    in: ["/vat", "/blog"],
    uk: ["/gst", "/e-invoice", "/blog"],
    ae: ["/gst", "/e-invoice", "/blog"],
  };

  var pathPage, pathCountry, isOnlyGlobal;
  const pathArrRaw = currentPath.split("?");
  const pathArr = pathArrRaw[0].split("/");
  if (pathArr.length == 2) {
    if (countryList.includes(pathArr[1])) {
      pathPage = "";
      pathCountry = "/" + pathArr[1];
    } else {
      pathPage = "/" + pathArr[1];
      pathCountry = "";
    }
  } else {
    if (countryList.includes(pathArr[1])) {
      pathCountry = "/" + pathArr[1];
      pathPage = "/" + pathArr.slice(2).join("/");
    } else {
      pathPage = "/" + pathArr.slice(1).join("/");
      pathCountry = "";
      isOnlyGlobal = pathArr[1] === "blog";
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
          <meta name='description' content={metaData.description}></meta>
        )}
        {metaData?.keywords && (
          <meta name='keywords' content={metaData.keywords}></meta>
        )}
        <link rel='icon' type='image/x-icon' href='/favico.svg'></link>
        <link rel='canonical' href={`https://giddh.com${pathArrRaw[0]}`} />
        {!exceptionPage?.global.includes(pathPage) && (
          <link
            rel='alternate'
            hrefLang='x-default'
            href={`https://giddh.com${pathPage}`}
          />
        )}
        {!isOnlyGlobal && (
          <>
            {!exceptionPage?.in.includes(pathPage) && (
              <link
                rel='alternate'
                hrefLang='en-IN'
                href={`https://giddh.com/in${pathPage}`}
              />
            )}
            {!exceptionPage?.uk.includes(pathPage) && (
              <link
                rel='alternate'
                hrefLang='en-GB'
                href={`https://giddh.com/uk${pathPage}`}
              />
            )}
            {!exceptionPage?.ae.includes(pathPage) && (
              <link
                rel='alternate'
                hrefLang='en-AE'
                href={`https://giddh.com/ae${pathPage}`}
              />
            )}
          </>
        )}

        {restrictFromSeo && <meta name='robots' content='noindex, nofollow' />}
      </Head>
    </>
  );
};

export default header;
