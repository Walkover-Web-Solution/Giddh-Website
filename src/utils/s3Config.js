// S3 configuration utility functions

/**
 * Get the S3 bucket name based on environment
 * @returns {string} The S3 bucket name
 */
export const getBucketName = () => {
  return process.env.NEXT_PUBLIC_S3_BUCKET_NAME || "giddh-app-builds";
};

/**
 * Get the S3 base URL based on environment
 * @returns {string} The S3 base URL
 */
export const getS3BaseUrl = () => {
  return process.env.NEXT_PUBLIC_S3_BASE_URL || "https://s3-ap-south-1.amazonaws.com";
};

/**
 * Get app version from S3 YAML file
 * @param {string} os - Operating system ('win' or 'mac')
 * @param {function} setWindowsApp - State setter for Windows app version
 * @param {function} setMacApp - State setter for Mac app version
 */
export const getAppVersion = async (os, setWindowsApp, setMacApp) => {
  // Input validation
  if (!os || !setWindowsApp || !setMacApp) {
    return;
  }
  
  const forWhichOS = os === "win" ? "" : "-mac";
  const baseUrl = getS3BaseUrl();
  const bucketName = getBucketName();
  
  // Additional safety check
  if (!baseUrl || !bucketName) {
    const defaultVersion = "9.1.3";
    if (os === "win") {
      setWindowsApp(defaultVersion);
    } else {
      setMacApp(defaultVersion);
    }
    return;
  }
  
  const url = `${baseUrl}/${bucketName}/latest${forWhichOS}.yml`;
  
  try {
    const response = await fetch(url, { cache: "no-store" });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const blob = await response.blob();
    const text = await blob.text();
    
    if (text && typeof text === "string") {
      // Parse version from YAML format: "version: x.x.x"
      const versionMatch = text.match(/version:\s*([^\n\r]+)/);
      if (versionMatch && versionMatch[1]) {
        const versNum = versionMatch[1].trim();
        if (os === "win") {
          setWindowsApp(versNum);
        } else {
          setMacApp(versNum);
        }
        return;
      }
    }
    
    // If parsing fails, use fallback
    throw new Error("Could not parse version from YAML");
    
  } catch (err) {
    // Fallback: Set a default version when fetch fails
    const defaultVersion = "9.1.3";
    
    if (os === "win") {
      setWindowsApp(defaultVersion);
    } else {
      setMacApp(defaultVersion);
    }
  }
};
