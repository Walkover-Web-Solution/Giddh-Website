export default function getPageData(pageInfo) {
  console.log('📄 getPageData called with pageInfo:', pageInfo);
  const pagesToGetData = [
    "home",
    "cloud-accounting-software",
    "invoice-software",
    "multi-user-accounting-software",
    "online-accounting-software",
    "tally-vs-giddh",
    "inventory-management-software",
    "small-business-bookkeeping-software",
    "e-invoice",
    "conect-bank-reconcile",
    "import-data",
    "gst",
    "multi-currency-accounting-software",
    "tally-to-giddh-migration",
    "make-the-switch",
    "zoho-vs-giddh",
    "financial-reporting"
  ];
  console.log('📄 pageInfo.page:', pageInfo?.page);
  console.log('📄 Is page in list?', pagesToGetData.includes(pageInfo?.page));
  if (!pagesToGetData.includes(pageInfo?.page)) {
    console.warn('⚠️ Page not in pagesToGetData list, returning null');
    return null;
  }
  try {
    const filePath = `@/data/pagesdata/${pageInfo?.country}/${pageInfo?.page}.json`;
    console.log('📄 Loading file:', filePath);
    const pageData = require(filePath);
    console.log('✅ Page data loaded successfully:', !!pageData);
    return pageData || null;
  } catch (error) {
    console.error(`❌ Error loading page data: ${error.message}`);
    console.error('❌ Full error:', error);
    return null;
  }
}
