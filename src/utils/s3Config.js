// S3 configuration utility functions

/**
 * Get the S3 bucket name based on environment
 * @returns {string} The S3 bucket name
 */
export const getBucketName = () => {
  return process.env.NEXT_PUBLIC_S3_BUCKET_NAME
}

/**
 * Get the S3 base URL based on environment
 * @returns {string} The S3 base URL
 */
export const getS3BaseUrl = () => {
  return process.env.NEXT_PUBLIC_S3_BASE_URL;
};

/**
 * Get download URL for the app based on OS
 * @param {string} os - Operating system ('win' or 'mac')
 * @returns {string} The download URL
 */
export const getDownloadUrl = (os) => {
  const baseUrl = getS3BaseUrl();
  const bucketName = getBucketName();
  
  if (!baseUrl || !bucketName) {
    return "";
  }
  
  if (os === "win") {
    return `${baseUrl}/${bucketName}/test/windows/latest/giddh-test-setup.exe`;
  } else if (os === "mac") {
    return `${baseUrl}/${bucketName}/test/mac/latest/giddh-test-setup.dmg`;
  }
  
  return "";
};

/**
 * Fetch and log app version from YAML file
 * @param {string} os - Operating system ('win' or 'mac')
 * @param {function} setWindowsApp - State setter for Windows app version
 * @param {function} setMacApp - State setter for Mac app version
 */
export const getAppVersion = async (os, setWindowsApp, setMacApp) => {
  // Input validation
  if (!os || !setWindowsApp || !setMacApp) {
    return;
  }
  
  const baseUrl = getS3BaseUrl();
  const bucketName = getBucketName();
  
  if (!baseUrl || !bucketName) {
    const defaultVersion = "latest";
    if (os === "win") {
      setWindowsApp(defaultVersion);
    } else {
      setMacApp(defaultVersion);
    }
    return;
  }
  
  const osPath = os === "win" ? "windows" : "mac";
  const yamlUrl = `${baseUrl}/${bucketName}/test/${osPath}/latest/latest.yml`;
  
  try {
    const response = await fetch(yamlUrl, { cache: "no-store" });
    
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
        console.log(`✅ Latest ${os.toUpperCase()} version:`, versNum);
        
        if (os === "win") {
          setWindowsApp(versNum);
        } else {
          setMacApp(versNum);
        }
        return;
      }
    }
    
    throw new Error("Could not parse version from YAML");
    
  } catch (err) {
    console.error(`❌ Error fetching ${os.toUpperCase()} version:`, err.message);
    console.error(`🔗 Failed URL:`, yamlUrl);
    
    // Fallback: Set a default version when fetch fails
    const defaultVersion = "latest";
    console.log(`🔄 Using fallback version for ${os.toUpperCase()}:`, defaultVersion);
    
    if (os === "win") {
      setWindowsApp(defaultVersion);
    } else {
      setMacApp(defaultVersion);
    }
  }
};