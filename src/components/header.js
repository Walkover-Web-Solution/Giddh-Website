import Head from "next/head";
import Data from "@/data/metadata.json";
import { useEffect, useState } from "react";

const header = (props) => {
  const link = props.path;
  const currentPath = props.browserPath
  const metaData = Data[currentPath];

  const [restrictFromSeo, setRestrictFromSeo] = useState(false);

  const countryList = ['','ae','uk'];
  const country = link.linkPrefix.replace('/','');
  if(countryList.includes(country)){
    var hreflang = country===''? "en-IN" : (country==='uk' ? "en-GB" : "en-AE")  ;
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
        { metaData?.description && <meta name="description" content={metaData.description}></meta>}
        { metaData?.keywords && <meta name="keywords" content={ metaData.keywords }></meta> }
        <link rel="icon" type="image/x-icon" href="/favico.svg"></link>
        <link rel="canonical" href={`https://giddh.com${currentPath}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://giddh.com${currentPath}`} />
        <link rel="alternate" hrefLang={hreflang} href={`https://giddh.com${currentPath}`} />

        {restrictFromSeo && <meta name="robots" content="noindex, nofollow" />}
      </Head>
    </>
  );
};
export default header;
