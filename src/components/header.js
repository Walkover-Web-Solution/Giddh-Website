import Head from "next/head";
import Data from "@/data/metadata.json";
import { useEffect, useState } from "react";

const header = (props) => {
  const link = props.path;
  const currentPath = props.browserPath
  const metaData = Data[currentPath];
  const [restrictFromSeo, setRestrictFromSeo] = useState(false);
  const countryList = ["", "in", "ae", "uk"];
  const country = link?.linkPrefix?.replace('/','');
  
  const split = currentPath.split('/');
  var page = '';
  
  if(split.length === 2){
    page = split[1].length === 2 ? '' : `/${split[1]}`;
  }
  if(split.length === 3){
    page = `/${split[2]}`;
  }
  
  if(countryList.includes(country)){
    var hreflang;

    if(country === 'in'){
        hreflang = 'en-IN';
    } else if(country === 'uk'){
        hreflang = 'en-GB';
    } else if(country === 'ae'){
        hreflang = 'en-AE';
    } else {
        hreflang = 'en-US';
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
        { metaData?.description && <meta name="description" content={metaData.description}></meta>}
        { metaData?.keywords && <meta name="keywords" content={ metaData.keywords }></meta> }
        <link rel="icon" type="image/x-icon" href="/favico.svg"></link>
        <link rel="canonical" href={`https://giddh.com${currentPath}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://giddh.com${page}`} />
        <link rel="alternate" hrefLang="en-IN" href={`https://giddh.com/in${page}`} />
        <link rel="alternate" hrefLang="en-GB" href={`https://giddh.com/uk${page}`} />
        <link rel="alternate" hrefLang="en-AE" href={`https://giddh.com/ae${page}`} />
        <link rel="alternate" hrefLang="en-US" href={`https://giddh.com/us${page}`} />

        {restrictFromSeo && <meta name="robots" content="noindex, nofollow" />}
      </Head>
    </>
  );
};
export default header;
