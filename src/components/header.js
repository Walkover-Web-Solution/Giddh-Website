import Head from "next/head";
import Data from "@/data/metadata.json";

const header = (browserPath) => {
  const metaPath = browserPath.browserPath;
  const metaData = Data[metaPath];
  return (
    <>
      <Head>
        <title>{metaData?.title}</title>
        <meta name="description" content={metaData?.description}></meta>
        <link rel="icon" type="image/x-icon" href="/favico.svg"></link>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <script src="//embed.typeform.com/next/embed.js"></script>
        <script src="/js/helper.js"></script>
      </Head>
    </>
  );
};
export default header;
