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
function dependOn(){"use strict";return[require("util")]}var def;require=function(e){"use strict";return e},def=window.define?window.define:function(e,r){"use strict";return r.apply(null,[{ajax:$.ajax.bind($)}])};var exports=acom_analytics={};def(dependOn(),(function(e){"use strict";function r(){return Math.ceil(1e6*Math.random())}function t(r){var t,n,s=r.split(e.stackDelimiter()),a=[],i=0;for(t=0;t<s.length;t+=1)-1===(n=s[t]).indexOf("run_function")&&i<1e3&&(i+=(n=(n=(n=(n=n.replace(/chrome\-extension:\/\/[a-zA-Z]*\//g,"")).replace(/jar:file:\S*\.xpi!/,"")).replace(/resource:\S+toolkit/,"")).replace(/resource:\S+jetpack/,"")).length,a.push(n));return a.join("\n")}var n=[],s=function(){try{return this.func.apply(this.context,this.args.concat(Array.prototype.slice.call(arguments,0)))}catch(i){if(!i.handled){i.handled=!0;var s={errnum:r(),name:i.name+(i.message?" "+i.message:""),source:"client",details:""},a=2048-(JSON.stringify(s).length+128);s.details=t(i.stack).substr(0,a),e.each(n,(function(e,r){r(s,40,i)})),this.context.LOG(s,40)}throw i}},a=exports.proxy=function(e){return s.bind({func:e,context:this,args:Array.prototype.slice.call(arguments,1)})},i=exports.handlers=function(e){n.push(e)};return{proxy:a,REST_error:exports.REST_error=function(t,s,a){var i={errnum:r(),name:t.statusText,status:t.status,details:"HTTP error"};a&&(i=e.extend(i,a)),t.responseJSON&&(i.name=t.responseJSON.error.code,i.details=t.responseJSON.error.message),e.each(n,(function(e,r){r(i,40)})),s.LOG(i,40)},handlers:i}}));