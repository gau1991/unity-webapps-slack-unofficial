// -*- mode: js; js-indent-level: 4; indent-tabs-mode: nil -*-
// ==UserScript==
// @include       https://slack.com/*
// @include       https://*.slack.com/*
// @include       https://slack.com/*
// @include       https://*.slack.com/*
// @require       utils.js
// ==/UserScript==

var Unity = external.getUnityObject(1);
window.Unity = Unity;
unsafeWindow.Unity = window.Unity;

Unity.init({ name: "Slack Unofficial",
             domain: 'slack.com',
             homepage: 'https://slack.com/signin',
             iconUrl: "icon://unity-webapps-slack-unofficial" });
