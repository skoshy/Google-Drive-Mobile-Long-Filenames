// ==UserScript==
// @name         Google Drive Mobile Long Filenames
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @match        https://drive.google.com/drive*/mobile/*
// @grant        none
// @updateURL    https://github.com/skoshy/Google-Drive-Mobile-Long-Filenames/raw/main/userscript.user.js
// ==/UserScript==

(function() {
  "use strict";

  const scriptId = "google-drive-mobile-long-filenames";
  const buttonSelector = ".search-form-button.search-form-submit";
  let styleEl = null;
  const css = `
    [data-id][data-target="doc"] {
      border: 0 !important;
    }

    [data-id][data-target="doc"] > :last-child {
      height: auto !important;
    }

    [data-id][data-target="doc"] [role="link"] {
      font-size: 0px !important;
      white-space: normal !important;
      word-break: break-word;
      padding: 3px 0 0;
    }

    [data-id][data-target="doc"] [role="link"]:after {
      font-size: 12px !important;
      content: attr(aria-label);
    }

    [role="toolbar"] [data-tooltip-unhoverable][aria-label*="."] {
      width: 75%;
      line-height: 13px;
      font-size: 0px !important;
      white-space: normal;
      word-break: break-word;
    }

    [role="toolbar"] [data-tooltip-unhoverable][aria-label*="."]:after {
      font-size: 12px;
      content: attr(aria-label);
    }
  `;

  function log(...toLog) {
    console.log(`[${scriptId}]:`, ...toLog);
  }

  function addGlobalStyle(css, id) {
    var head, style;
    head = document.getElementsByTagName("head")[0];
    if (!head) {
      return;
    }
    styleEl = document.createElement("style");
    styleEl.type = "text/css";
    styleEl.innerHTML = css;
    styleEl.id = id;
    head.appendChild(styleEl);
  }

  addGlobalStyle(css);
})();
