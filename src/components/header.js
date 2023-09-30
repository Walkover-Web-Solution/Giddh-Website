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
    var hreflang = country===''? "en-IN" : `en-${country.toUpperCase()}`;
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
        <meta name="description" content={metaData?.description}></meta>
        <link rel="icon" type="image/x-icon" href="/favico.svg"></link>
        <link rel="canonical" href={`https://giddh.com${currentPath}`} />
        <link rel="alternate" hrefLang="x-default" href="https://giddh.com" />
        <link rel="alternate" hrefLang={hreflang} href={`https://giddh.com/${country}`} />
        {/* <link rel="alternate" hrefLang="en-IN" href={`https://giddh.com`} />
        <link rel="alternate" hrefLang="en-UK" href={`https://giddh.com/uk`} />
        <link rel="alternate" hrefLang="en-AE" href={`https://giddh.com/ae`} /> */}

        {restrictFromSeo && <meta name="robots" content="noindex, nofollow" />}
      </Head>
    </>
  );
};
export default header;
