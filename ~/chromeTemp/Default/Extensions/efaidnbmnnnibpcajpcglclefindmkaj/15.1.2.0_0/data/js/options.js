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
$((function(){"use strict";$(document).ready((function(){util.translateElements(".translate");var e,n,a,t=["0","0"];if(document.location.search.replace(/\?/,"").split("&").forEach((function(t){var o=t.split("=");"env"===o[0]?n=o[1]:"anl"===o[0]?e=o[1]:"os"===o[0]&&(a=o[1])})),"mac"===a)return $(".content").remove(),void $("#web2pdfMissingMac").removeClass("hidden");try{if(+(t=navigator.userAgent.match(/Chrome\/([0-9]+)/)||t)[1]<SETTINGS.SUPPORTED_VERSION)return $(".content").remove(),$("#bad-version").text(util.getTranslation("web2pdfBadVersion",[SETTINGS.SUPPORTED_VERSION])),void $("#bad-version").removeClass("hidden")}catch(e){}SETTINGS.TEST_MODE||SETTINGS.DEBUG_MODE||"prod"!==n&&!SETTINGS.USE_ACROBAT?"prod"!==n&&$("#environment").val(n):$(".choose-env").remove(),$(".analytics").prop("checked","true"===e)})),$("#web2pdfSave").click((function(){if(!$("#web2pdfSave").hasClass("no_change")){var e,n=$("#environment").val(),a=$("#html2pdf").is(":checked"),t=$(".analytics").prop("checked");util.messageToMain({main_op:"reset",environment:n,html2pdf:"local-dev"===n&&a,analytics_on:!!t}),SETTINGS.USE_ACROBAT||(e="Success! Environment reset to "+n+".","local-dev"===n&&(e+=" Html2PDF set to "+a+"."),$("#message").text(e),$("#message").removeClass("hidden"))}})),$("#environment").change((function(){"local-dev"===$("#environment").val()?$(".html2pdfoption").removeClass("hidden"):$(".html2pdfoption").addClass("hidden"),$("#web2pdfSave").removeClass("no_change")})),$(".analytics").click((function(){$("#web2pdfSave").removeClass("no_change")})),util.addMainListener((function(e){"saved_analytics"===e.options_op&&$("#web2pdfSave").addClass("no_change")}))}));