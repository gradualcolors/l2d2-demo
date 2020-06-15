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
function dependOn(){"use strict";return[require("communicate"),require("proxy"),require("common"),require("util")]}var def;require=function(e){"use strict";return e},def=window.define?window.define:function(e,t){"use strict";return t.apply(null,[{ajax:$.ajax.bind($)}])};var exports=acom_analytics={};def(dependOn(),(function(e,t,r,i){"use strict";var n,s=null;for(n in s||(s=new function(){this.proxy=t.proxy.bind(this),this.LOG=r.LOG,this.CONVERSION_TIMEOUT=2e5,this.web2pdfCaller={MENU:0,TOOLBAR:1,AUTO:2},this.web2pdfAction={CONVERT:0,APPEND:1},this.web2pdfContext={PAGE:0,LINK:1};this.getViewResultsPreferenceState=function(){return"false"!==i.getCookie("ViewResultsPref")},this.viewPrefIsDefault=function(){return!i.getCookie("ViewResultsPref")}},e.registerModule("acro-gstate",s)),s)s.hasOwnProperty(n)&&("function"==typeof s[n]?exports[n]=s[n].bind(s):exports[n]=s[n]);return s}));