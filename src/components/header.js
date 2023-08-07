import Head from "next/head";
import Data from "@/data/metadata.json";
const header = (brawserPath) => {
  const metaPath = brawserPath.brawserPath
  const metaData = Data[metaPath]
  return (
    <>
      <Head>
        <title>{metaData?.title}</title>
        <meta name="description" content={metaData?.description}></meta>
        <link rel="icon" type="image/x-icon" href="/favico.svg"></link>
      </Head>
    </>
  );
};
export default header;
