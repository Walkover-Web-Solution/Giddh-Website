function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";domain=giddh.com;" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    var value = "";
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            value = c.substring(name.length, c.length);
        }
    }
    return value;
}

function deleteUtmCookies() {
    document.cookie = 'utm_source=; Path=/; Domain=giddh.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'utm_medium=; Path=/; Domain=giddh.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'utm_campaign=; Path=/; Domain=giddh.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'utm_term=; Path=/; Domain=giddh.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'utm_content=; Path=/; Domain=giddh.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function removeGiddhSession() {
    setCookie("giddh_session_id", "", -1);
}

function setGiddhSession(sessionId) {
    removeLocalStorage("session");
    setCookie("giddh_session_id", sessionId, 30);
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
        }
    };

    return configuration;
}

function addOtpWidgetScript(exposeMethods, callbackFunction, widgetLoadCallbackFunction) {
    var configuration = getOtpwidgetConfiguration(exposeMethods, callbackFunction);

    let scriptTag = document.createElement('script');
    scriptTag.src = "https://control.msg91.com/app/assets/otp-provider/otp-provider.js";
    scriptTag.type = 'text/javascript';
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
    return (window.localStorage.getItem(key)) ? JSON.parse(window.localStorage.getItem(key)) : "";
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

setUtmParamInLocalStorage();

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
    let filterLink =  window.location.href.split('.php');
    if(filterLink[1] === ""){
      window.location.href = filterLink[0];
    }
  }
 redirectPhpLink()  

