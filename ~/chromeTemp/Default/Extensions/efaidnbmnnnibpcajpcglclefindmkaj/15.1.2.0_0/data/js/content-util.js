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
var util={messageToMain:function(e){"use strict";chrome.runtime.sendMessage(e)},addMainListener:function(e){"use strict";chrome.runtime.onMessage.addListener(e)},isFF:function(){"use strict";return!1},isChrome:function(){"use strict";return!0},consoleLog:function(e){"use strict";SETTINGS.DEBUG_MODE&&console.log(e)},consoleLogDir:function(e){"use strict";SETTINGS.DEBUG_MODE&&console.dir(e)},consoleError:function(e){"use strict";SETTINGS.DEBUG_MODE&&console.error(e)},getTranslation:function(e,t){"use strict";return t?chrome.i18n.getMessage(e,t):chrome.i18n.getMessage(e)},translateElements:function(e){"use strict";$(e).each((function(){"INPUT"===this.tagName?$(this).val(util.getTranslation(this.id)):$(this).text(util.getTranslation(this.id))}))},setCookie:function(e,t,i){"use strict";var n,r;i?((r=new Date).setDate(r.getDate()+i),n="; expires="+r.toGMTString()):n="",document.cookie=e+"="+t+n+"; path=/"},getCookie:function(e){"use strict";var t;return document.cookie.length>0&&2===(t=document.cookie.split(e+"=")).length?t.pop().split(";").shift():""},isPDFForm:function(e){var t=/.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/.exec(e),i="";if(null===t||t.length<2)return!1;if(void 0===(i=t[1].endsWith("/")?t[1].slice(0,-1):t[1])||0==i.length)return!1;i=i.toLowerCase(),urlSplit=i.split("/"),filename=urlSplit[urlSplit.length-1];function n(e){return filename.indexOf(e)>-1}return!["forms","guide","summary","process","sample","procedure","requirement","example","instr","format","formul","reform","forming","former","formed"].some(n)&&(!!(urlSplit.length>1&&(urlSplit.pop(),urlSplit.includes("form")||urlSplit.includes("forms")))||["form","application.pdf"].some(n))}};