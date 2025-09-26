export default function getPageData(pageInfo) {
  const pagesToGetData = ["home"];

  if (!pagesToGetData.includes(pageInfo?.page)) return null;
  try {
    const pageData = require(`@/data/pagesdata/${pageInfo?.country}/${pageInfo?.page}.json`);
    return pageData || null;
  } catch (error) {
    console.error(`Error loading page data: ${error.message}`);
    return null;
  }
}
