// S3 configuration utility functions

/**
 * Get the S3 bucket name based on environment
 * @returns {string} The S3 bucket name
 */
export const getBucketName = () => {
  return process.env.NEXT_PUBLIC_S3_BUCKET_NAME;
}

/**
 * Get the current environment name
 * @returns {string} The environment name from NEXT_PUBLIC_APP_ENV
 */
export const getEnvName = () => {
  return process.env.NEXT_PUBLIC_APP_ENV
}

/**
 * Get the S3 base URL based on environment
 * @returns {string} The S3 base URL
 */
export const getS3BaseUrl = () => {
  return process.env.NEXT_PUBLIC_S3_BASE_URL;
};

/**
 * Whether the marketing site is the test host (web.giddh.com).
 * Preview desktop downloads are shown only here, never on production.
 * @returns {boolean}
 */
export const isTestWebsite = () => {
  return getEnvName() === "test";
};

/**
 * Get download URL for the app based on OS, release channel, and app env path
 * @param {string} os - Operating system ('win' or 'mac')
 * @param {'latest'|'preview'} [channel='latest'] - S3 channel folder
 * @param {'test'|'prod'} [appEnv] - S3 env segment; defaults to NEXT_PUBLIC_APP_ENV
 * @returns {string} The download URL
 */
export const getDownloadUrl = (os, channel = "latest", appEnv) => {
  const baseUrl = getS3BaseUrl();
  const bucketName = getBucketName();
  const envName = appEnv || getEnvName();
  const appName = envName === "test" ? "giddh-test-setup" : "giddh-setup";
  const releaseChannel = channel === "preview" ? "preview" : "latest";

  if (!baseUrl || !bucketName || !envName) {
    return "";
  }

  if (os === "win") {
    return `${baseUrl}/${bucketName}/${envName}/windows/${releaseChannel}/${appName}.exe`;
  } else if (os === "mac") {
    return `${baseUrl}/${bucketName}/${envName}/mac/${releaseChannel}/${appName}.dmg`;
  }

  return "";
};

/**
 * Fetch and log app version from YAML file
 * @param {string} os - Operating system ('win' or 'mac')
 * @param {function} setWindowsApp - State setter for Windows app version
 * @param {function} setMacApp - State setter for Mac app version
 * @param {'latest'|'preview'} [channel='latest'] - S3 channel folder
 * @param {'test'|'prod'} [appEnv] - S3 env segment; defaults to NEXT_PUBLIC_APP_ENV
 */
export const getAppVersion = async (
  os,
  setWindowsApp,
  setMacApp,
  channel = "latest",
  appEnv
) => {
  // Input validation
  if (!os || !setWindowsApp || !setMacApp) {
    return;
  }

  const baseUrl = getS3BaseUrl();
  const bucketName = getBucketName();
  const envName = appEnv || getEnvName();
  const releaseChannel = channel === "preview" ? "preview" : "latest";
  const label =
    envName === "prod" && releaseChannel === "preview"
      ? "Prod Preview"
      : releaseChannel === "preview"
        ? "Preview"
        : "Latest";

  if (!baseUrl || !bucketName || !envName) {
    const defaultVersion = "latest";
    if (os === "win") {
      setWindowsApp(defaultVersion);
    } else {
      setMacApp(defaultVersion);
    }
    return;
  }

  const osPath = os === "win" ? "windows" : "mac";
  const fileName = `latest${osPath === "mac" ? "-mac" : ""}.yml`;
  const yamlUrl = `${baseUrl}/${bucketName}/${envName}/${osPath}/${releaseChannel}/${fileName}`;

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
        console.log(`✅ ${label} ${os.toUpperCase()} version:`, versNum);

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
    console.error(
      `❌ Error fetching ${label} ${os.toUpperCase()} version:`,
      err.message
    );
    console.error(`🔗 Failed URL:`, yamlUrl);

    // Fallback: Set a default version when fetch fails
    const defaultVersion = "latest";
    console.log(
      `🔄 Using fallback version for ${label} ${os.toUpperCase()}:`,
      defaultVersion
    );

    if (os === "win") {
      setWindowsApp(defaultVersion);
    } else {
      setMacApp(defaultVersion);
    }
  }
};