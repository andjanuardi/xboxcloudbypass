// @name         Bypass Locatin
// @namespace    https://github.com/andjanuardi
// @version      1.1
// @description  Bypass Location
// @author       redphx x andjanuardi
// @license      MIT
// @match        *
// @run-at       document-start
// @grant        none
// @updateURL    https://raw.githubusercontent.com/andjanuardi/xboxcloudbypass/main/xboxcloudbypass.meta.js
// @downloadURL  https://github.com/andjanuardi/xboxcloudbypass/releases/download/latest/xboxcloudbypass.user.js
// ==/UserScript==
"use strict";




window.originalFetch = window.fetch;
window.fetch = async (...args) => {
  const request = args[0];
  const url = typeof request === "string" ? request : request.url;
  
    const IP = "1.1.1.1";
    args[0].headers.set("X-Forwarded-For", IP);
    window.fetch = window.originalFetch;
  

  return window.originalFetch(...args);
};