/*! Restores persisted UTM params for Embarko contact before open (see CONTRACTS.md). */
(function () {
  var UTM_KEYS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];

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

  function install() {
    if (!window.GiddhContact || window.GiddhContact.__utmFromStorage) return;
    var orig = window.GiddhContact.open;
    window.GiddhContact.open = function (opts) {
      withStoredUtms(function () {
        orig.call(window.GiddhContact, opts);
      });
    };
    window.GiddhContact.__utmFromStorage = true;
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