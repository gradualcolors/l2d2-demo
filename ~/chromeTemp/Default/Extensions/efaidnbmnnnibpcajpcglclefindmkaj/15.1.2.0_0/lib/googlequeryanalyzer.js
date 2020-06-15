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
function dependOn(){"use strict";return[require("communicate"),require("proxy"),require("analytics"),require("common")]}var def;require=function(e){"use strict";return e},def=window.define?window.define:function(e,t){"use strict";return t.apply(null,[{ajax:$.ajax.bind($)}])};var exports=acom_analytics={};def(dependOn(),(function(e,t,n,r){"use strict";var i=null,o=null;for(o in i||(i=new function(){this.proxy=t.proxy.bind(this),this.LOG=r.LOG,this.isGoogleQuery=function(e){try{if(new URL(e.url).host.startsWith("www.google."))return!0}catch(e){return!1}return!1},this.getSearchQuery=function(e){try{const t=new URL(e.url).searchParams.get("q");if(t)return decodeURIComponent(t)}catch(e){return n.event(n.e.GOOGLE_URL_DECODE_ERROR),null}return null},this.mapQueryStringToAction=function(t,i){let o=chrome.i18n.getMessage("@@ui_locale");if(!o.startsWith("en"))return;if(o="en_US","win"!=SETTINGS.OS)return;const s=chrome.runtime.getURL("data/data/"+o+"/searchterms.json");fetch(s).then(e=>{if(e.status>=200&&e.status<=299)return e.json();throw n.event(n.e.GOOGLE_SEARCHTERM_FETCH_ERROR),Error(n.e.GOOGLE_SEARCHTERM_FETCH_ERROR)}).then(n=>{const o=this.findAction(n,t);o&&(i.pdf_action=o,i.frictionless_uri=r.getFrictionlessUri(),i.env=r.getEnv(),i.panel_op="load-frictionless",i.frame_visibility="hidden",i.frictionless_workflow="search",e.sendMessage(i))}).catch(e=>{console.error("googlequeryanalyzer::mapQueryStringToAction",e)})},this.findAction=function(e,t){const n=t.replace(/\s/g,"").toLowerCase();for(const t in e){let r=e[t];for(let e=0;e<r.length;e++){const i=r[e];if(n.includes(i))return t}}return null}},e.registerModule("googlequeryanalyzer",i)),i)i.hasOwnProperty(o)&&("function"==typeof i[o]?exports[o]=i[o].bind(i):exports[o]=i[o]);return i}));