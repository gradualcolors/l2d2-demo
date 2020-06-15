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
function dependOn(){"use strict";return[require("util"),require("common"),require("analytics"),require("proxy"),require("communicate")]}var def;require=function(e){"use strict";return e},def=window.define?window.define:function(e,r){"use strict";return r.apply(null,[{ajax:$.ajax.bind($)}])};var exports=acom_analytics={};def(dependOn(),(function(e,r,n,t,o){"use strict";var i,a,l,c=null;for(i in a=function(){return o.getModule("upload")},l=function(){return o.getModule("download-manager")},c||(c=new function(){var r,n,o;this.proxy=t.proxy.bind(this),zip.workerScriptsPath="/lib/libs/",this.compress=function(i,c){var s=new zip.BlobWriter;r=JSON.parse(i),zip.createWriter(s,(function(i){var s;function d(){n.close((function(r){e.consoleLog("closing writer"),a().uploadHTML(r,c).done(t.proxy(l().uploadHandler)),saveAs(r,"test.zip"),n=null}))}(n=i).add("index.html",new zip.TextReader(r.html),(function(){e.consoleLog("Added main html file"),function t(i){if(s=r.refs[i])if(s.data){var a;o=new zip.TextReader(s.data),"html"===s.type?("text/html",a=s.placeholder):"css"===s.type?(a="refs/"+s.placeholder.replace(/refs\//,""),"text/css"):"image"===s.type?(a="refs/"+s.placeholder.replace(/refs\//,""),"image/jpeg",o=new zip.Data64URIReader(s.data)):("text/plain",a="refs/"+s.placeholder.replace(/refs\//,"")),n.add(a,o,(function(){e.consoleLog("Added ref file"),(i+=1)<r.refs.length?t(i):d()}))}else e.consoleLog("empty data"),e.consoleLogDir(s),i===r.refs.length?d():t(i+=1);else d()}(0)}))}),(function(){e.consoleLog("Error occured while creating zip writer.")}))}},o.registerModule("convert-to-zip",c)),c)c.hasOwnProperty(i)&&("function"==typeof c[i]?exports[i]=c[i].bind(c):exports[i]=c[i]);return c}));