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
var communicate=require("communicate");chrome.extension.onMessageExternal.addListener((function(e,t,a){"use strict";if("Automation"===e.type&&"bngnhmnppadfcmpggglniifohlkmddfc"===t.id){var o=null;if(0===e.task)o="to_html";else if(1===e.task)o="to_append";else if(2===e.task)o="doAcrobat";else if(5===e.task){let t=chrome.i18n.getMessage("@@ui_locale");e.locale&&(t=e.locale);const a=chrome.runtime.getURL("data/data/"+t+"/searchterms.json");fetch(a).then(e=>{if(e.status>=200&&e.status<=299)return e.json();throw Error(analytics.e.GOOGLE_SEARCHTERM_FETCH_ERROR)}).then(t=>{if(e&&e.data){let a={},o=communicate.getModule("googlequeryanalyzer");for(let n=0;n<e.data.length;++n){const s=o.findAction(t,e.data[n]);a[e.data[n]]=s}const n=JSON.stringify(a),s=new Blob([n],{type:"text/plain;charset=UTF-8"}),c=window.URL.createObjectURL(s);chrome.downloads.download({url:c,filename:"output.json"})}}).catch(e=>{const t=JSON.stringify(e),a=new Blob([t],{type:"text/plain;charset=UTF-8"}),o=window.URL.createObjectURL(a);chrome.downloads.download({url:o,filename:"output.json"})})}SETTINGS.TEST_MODE=!0,chrome.tabs.sendMessage(communicate.activeTab(),{panel_op:"test",test_extension:o,outputPath:e.path,openPDF:e.openPDF})}}));