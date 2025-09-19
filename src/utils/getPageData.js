export default function getPageData(pageInfo) {
  try {
    const pageData = require(`@/data/pageData/${pageInfo?.country}/${pageInfo?.page}.json`);
    return pageData || null;
  } catch (error) {
    console.error(`Error loading page data: ${error.message}`);
    return null;
  }
}
