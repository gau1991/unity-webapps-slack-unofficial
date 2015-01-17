// -*- mode: js; js-indent-level: 4; indent-tabs-mode: nil -*-
// ==UserScript==
// @include       https://slack.com/*
// @include       https://*.slack.com/*
// @include       https://slack.com/*
// @include       https://*.slack.com/*
// @require       utils.js
// ==/UserScript==

// This placeholder gets munged with real data at build time.
var WebappsGettextDict = JSON.parse(unescape(
    "%7B%22GETTEXT%22%3A%22PLACEHOLDER%22%7D"
));

var Unity = external.getUnityObject(1);
window.Unity = Unity;
unsafeWindow.Unity = window.Unity;

Unity.init({ name: "Slack Unofficial",
             domain: 'slack.com',
             homepage: 'https://slack.com/signin',
             iconUrl: "icon://unity-webapps-slack-unofficial" });
