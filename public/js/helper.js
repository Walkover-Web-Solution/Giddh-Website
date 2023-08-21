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
    setCookie("giddh_session_id", sessionId, 30);
}

function getOtpwidgetConfiguration(exposeMethods, callbackFunction) {
    var configuration = {
        widgetId: "33686b716134333831313239",
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
    return JSON.parse(window.localStorage.getItem(key));
}

function setLocalStorage(key, value) {
    window.localStorage.setItem(key, value);
}

function removeLocalStorage(key) {
    window.localStorage.removeItem(key);
}