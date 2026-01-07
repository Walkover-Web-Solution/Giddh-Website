function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  var cookieDomain = "";
  try {
    let host = window.location.hostname;
    if (host && host !== "localhost" && host !== "127.0.0.1") {
      cookieDomain = ";domain=" + host;
    }
  } catch (e) {
    cookieDomain = "";
  }
  document.cookie =
    cname + "=" + encodeURIComponent(String(cvalue ?? "")) + cookieDomain + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  let ca = document.cookie.split(";");
  let value = "";                    
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      value = c.substring(name.length, c.length);
      try {
        value = decodeURIComponent(value);
      } catch (e) {
        // If decoding fails, use raw value
      }
      break;
    }
  }
  return value;
}

function deleteUtmCookies() {
  var cookieDomain = "";
  try {
    let host = window.location.hostname;
    if (host && host !== "localhost" && host !== "127.0.0.1") {
      cookieDomain = " Domain=" + host + ";";
    }
  } catch (e) {
    cookieDomain = "";
  }
  document.cookie =
    "utm_source=; Path=/" + cookieDomain + " Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie =
    "utm_medium=; Path=/" + cookieDomain + " Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie =
    "utm_campaign=; Path=/" + cookieDomain + " Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie =
    "utm_term=; Path=/" + cookieDomain + " Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie =
    "utm_content=; Path=/" + cookieDomain + " Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

function removeGiddhSession() {
  setCookie("giddh_session_id", "", -1);
}

function setGiddhSession(sessionId) {
  removeLocalStorage("session");
  setCookie("giddh_session_id", sessionId, 30);
}
function setGiddhRegion(region) {
  setCookie("giddh_region", region, 30);
}

function getOtpwidgetConfiguration(exposeMethods, callbackFunction) {
  var configuration = {
    widgetId: "346373686753373039373739",
    tokenAuth: "205968TmXguUAwoD633af103P1",
    exposeMethods: exposeMethods,
    success: function (data) {
      if (callbackFunction) {
        callbackFunction(data);
      }
    },
  };

  return configuration;
}

function addOtpWidgetScript(
  exposeMethods,
  callbackFunction,
  widgetLoadCallbackFunction
) {
  var configuration = getOtpwidgetConfiguration(
    exposeMethods,
    callbackFunction
  );

  let scriptTag = document.createElement("script");
  scriptTag.src = "https://verify.msg91.com/otp-provider.js";
  scriptTag.type = "text/javascript";
  scriptTag.defer = true;
  scriptTag.onload = () => {
    initSendOTP(configuration);
    if (widgetLoadCallbackFunction) {
      widgetLoadCallbackFunction();
    }
  };
  document.body.appendChild(scriptTag);
}

function getLocalStorage(key) {
  return window.localStorage.getItem(key)
    ? JSON.parse(window.localStorage.getItem(key))
    : "";
}

function setLocalStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function removeLocalStorage(key) {
  window.localStorage.removeItem(key);
}

function setUtmParamInLocalStorage() {
  var self = window.location.toString();
  var querystring = self.split("?");
  if (querystring.length > 1) {
    var pairs = querystring[1].split("&");
    for (i in pairs) {
      var keyval = pairs[i].split("=");
      setLocalStorage(keyval[0], decodeURIComponent(keyval[1]));
    }
  }
}

function setUtmParamsInCookies() {
  if (typeof window === "undefined" || !window.location) {
    return;
  }
  const paramsToSave = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "gclid", "fbclid"];
  const searchParams = new URLSearchParams(window.location.search);
  
  let hasAnyParam = false;
  for (let index = 0; index < paramsToSave.length; index++) {
    if (searchParams.has(paramsToSave[index])) {
      hasAnyParam = true;
      break;
    }
  }
  if (hasAnyParam) {
    for (let index = 0; index < paramsToSave.length; index++) {
      const paramName = paramsToSave[index];
      const allValues = searchParams.getAll(paramName);
      const paramValue = allValues.length > 0 ? allValues[0] : "";
      const valueToSave = paramValue ? paramValue.trim() : "";
      setCookie(paramName, valueToSave, 30);
    }
  }
}

setUtmParamInLocalStorage();
setUtmParamsInCookies();

function formatMobileNumber(number) {
  number = String(number).replace("+", "");
  return number.trim();
}

function getCurrentSiteCountry() {
  const startPath = window.location.href.split("/");
  var isGlobal =
    startPath[startPath.indexOf("ae")] !== "ae" &&
    startPath[startPath.indexOf("in")] !== "in" &&
    startPath[startPath.indexOf("uk")] !== "uk";
  var isAE = startPath[startPath.indexOf("ae")] === "ae";
  var isIndia = startPath[startPath.indexOf("in")] === "in";
  var isUK = startPath[startPath.indexOf("uk")] === "uk";
  return { isGlobal: isGlobal, isIndia: isIndia, isAE: isAE, isUK: isUK };
}

function getCurrentSiteCountryUrl(siteUrl) {
  const startPath = window.location.href.split("/");
  var isGlobal =
    startPath[startPath.indexOf("ae")] !== "ae" &&
    startPath[startPath.indexOf("in")] !== "in" &&
    startPath[startPath.indexOf("uk")] !== "uk";
  var isAE = startPath[startPath.indexOf("ae")] === "ae";
  var isIndia = startPath[startPath.indexOf("in")] === "in";
  return siteUrl + (isGlobal ? "" : isIndia ? "/in" : isAE ? "/ae" : "/uk");
}

function redirectPhpLink() {
  let filterLink = window.location.href.split(".php");
  if (filterLink[1] === "") {
    window.location.href = filterLink[0];
  }
}
redirectPhpLink();

/** Append the <Script> element to the <body> of the document */
function appendScript(src, isAsync = false, type = 'text/javascript') {
  const isScriptExists = Array.from(document.querySelectorAll("script")).some(
    (script) => script.src === src
  );
  if (!isScriptExists) {
      const script = document.createElement("script");
      script.src = src;
      script.type = type;
      script.async = isAsync;
      document.body.appendChild(script);
  }
}

/** Append the <link> element to the <head> of the document */
function appendLink(href, rel = "stylesheet") {
  const isLinkExists = Array.from(document.querySelectorAll("link")).some(
    (link) => link.rel === "stylesheet" && link.href === href
  );
  if (!isLinkExists) {
    const link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    document.head.appendChild(link);
  }
}

function openCalendly() {
  appendScript("https://assets.calendly.com/assets/external/widget.js", true);
  appendLink("https://assets.calendly.com/assets/external/widget.css");
  setTimeout(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/sales-accounting-software/talk-to-sale',
      });
    }
  }, 1000)
}