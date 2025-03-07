export function getSchemaForLinkPath(linkPath, data) {
    const activeKey = Object.keys(linkPath).find((key) => linkPath[key] === true);
    if (!activeKey) return null; 
  
    const countryData = data.find((item) => item[activeKey]);
    return countryData ? countryData.schema : null;
  };