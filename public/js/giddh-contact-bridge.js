/*! Restores persisted UTM params for Embarko contact before open (see CONTRACTS.md). */
(function () {
  var UTM_KEYS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];

  var bridgeEl = document.getElementById("giddh-contact-bridge");
  var isTestSite =
    bridgeEl && bridgeEl.getAttribute("data-app-env") === "test";

  function withStoredUtms(run) {
    if (typeof getLocalStorage !== "function") {
      run();
      return;
    }
    var url = new URL(window.location.href);
    var changed = false;
    UTM_KEYS.forEach(function (k) {
      if (!url.searchParams.has(k)) {
        var v = getLocalStorage(k);
        if (v) {
          url.searchParams.set(k, String(v));
          changed = true;
        }
      }
    });
    if (!changed) {
      run();
      return;
    }
    var prev = window.location.href;
    history.replaceState(
      history.state,
      "",
      url.pathname + url.search + url.hash
    );
    try {
      run();
    } finally {
      history.replaceState(history.state, "", prev);
    }
  }

  function msg91ParamsFromHelper() {
    if (!isTestSite) return null;
    if (typeof getOtpwidgetConfiguration !== "function") return null;
    var cfg = getOtpwidgetConfiguration(false, null);
    if (!cfg || !cfg.tokenAuth) return null;
    return { tokenAuth: cfg.tokenAuth, widgetId: cfg.widgetId || "" };
  }

  /* Coupled to Embarko embed.js (iframe.gc-frame inside .gc-dialog or legacy .gc-overlay); see CONTRACTS.md */
  function syncMsg91ParamsOnFrame() {
    var params = msg91ParamsFromHelper();
    if (!params) return;
    var frame =
      document.querySelector(".gc-dialog iframe.gc-frame") ||
      document.querySelector(".gc-overlay iframe.gc-frame") ||
      document.querySelector("iframe.gc-frame");
    if (!frame || !frame.src) return;
    try {
      var url = new URL(frame.src);
      if (url.searchParams.get("tokenAuth") !== params.tokenAuth) {
        url.searchParams.set("tokenAuth", params.tokenAuth);
      }
      if (
        params.widgetId &&
        url.searchParams.get("widgetId") !== params.widgetId
      ) {
        url.searchParams.set("widgetId", params.widgetId);
      }
      if (url.toString() !== frame.src) frame.src = url.toString();
    } catch (_e) {
      /* malformed frame src */
    }
  }

  function scheduleMsg91Sync() {
    if (!isTestSite) return;
    requestAnimationFrame(syncMsg91ParamsOnFrame);
    setTimeout(syncMsg91ParamsOnFrame, 0);
  }

  function purposeFromButton(el) {
    return (
      el.getAttribute("data-purpose") ||
      el.getAttribute("data-giddh-contact") ||
      ""
    );
  }

  function install() {
    if (!window.GiddhContact || window.GiddhContact.__bridgeInstalled) return;

    var orig = window.GiddhContact.open;
    window.GiddhContact.open = function (opts) {
      withStoredUtms(function () {
        orig.call(window.GiddhContact, opts);
        scheduleMsg91Sync();
      });
    };

    /* embed.js handles [data-giddh-contact] with an internal open(), not window.GiddhContact.open */
    document.addEventListener(
      "click",
      function (e) {
        var el = e.target.closest && e.target.closest("[data-giddh-contact]");
        if (!el) return;
        e.preventDefault();
        e.stopPropagation();
        window.GiddhContact.open({ purpose: purposeFromButton(el) });
      },
      true
    );

    window.GiddhContact.__bridgeInstalled = true;
  }

  if (window.GiddhContact) {
    install();
    return;
  }
  var attempts = 0;
  var timer = setInterval(function () {
    if (window.GiddhContact || ++attempts > 200) {
      clearInterval(timer);
      if (window.GiddhContact) install();
    }
  }, 25);
})();