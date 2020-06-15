/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2015 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property laws,
* including trade secret and or copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
define(["jquery"],(function(e){"use strict";return{extend:e.extend.bind(e),isFF:function(){return!1},isChrome:function(){return!0},stackDelimiter:function(){return"\n"},Deferred:e.Deferred.bind(e),each:e.each.bind(e),ajax:e.ajax.bind(e),ajaxError:function(n){e(document).ajaxError(n)},param:e.param.bind(e),newBlob:function(e){return new Blob(e)},newFormData:function(){return new FormData},newXHR:function(){return new XMLHttpRequest},createTab:function(e,n){return n?chrome.tabs.create({url:e,active:!0},n):chrome.tabs.create({url:e,active:!0})},isDevEnv:function(){var n=e.Deferred();return chrome.management.getSelf((function(e){n.resolve("development"===e.installType)})),n.promise()},closeWindow:function(e){chrome.windows.remove(e.id)},getTranslation:function(e,n){return n?chrome.i18n.getMessage(e,n):chrome.i18n.getMessage(e)},sendMessage:function(e,n){chrome.tabs.sendMessage(e.tabId,e)},consoleLog:function(e){SETTINGS.DEBUG_MODE&&console.log(e)},consoleLogDir:function(e){SETTINGS.DEBUG_MODE&&console.dir(e)},consoleError:function(e){SETTINGS.DEBUG_MODE&&console.error(e)},setCookie:function(e,n,o){var t,r;o?((r=new Date).setDate(r.getDate()+o),t="; expires="+r.toGMTString()):t="",document.cookie=e+"="+n+t+"; path=/"},showFrictionlessMenu:function(e){return!(!SETTINGS.IS_READER&&!SETTINGS.TEST_MODE)||!(!e||!SETTINGS.FRICTIONLESS_ENABLED||0!=e.version&&1!=e.version&&e.version!=SETTINGS.READER_VER)},getCookie:function(e){var n;return document.cookie.length>0&&2===(n=document.cookie.split(e+"=")).length?n.pop().split(";").shift():""},atob16:function(e){var n,o=atob(e),t=[];for(n=0;n<o.length;n+=2)t.push(String.fromCharCode(o.charCodeAt(n)+256*o.charCodeAt(n+1)));return t.join("")}}}));