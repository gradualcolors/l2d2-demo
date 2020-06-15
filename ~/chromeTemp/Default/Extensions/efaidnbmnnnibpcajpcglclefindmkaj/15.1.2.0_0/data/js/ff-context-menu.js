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
self.on("click",(function(e,o){"use strict";"upload-link"===o&&self.postMessage({main_op:"do_upload",url:e.href,handleResult:"preview"}),"upload-image"===o&&self.postMessage({main_op:"do_upload",url:e.src,handleResult:"image_preview"}),"upload-page"===o&&self.postMessage({main_op:"do_upload",url:e.ownerDocument.URL,handleResult:"preview"}),"export"===o&&self.postMessage({main_op:"do_upload",url:e.ownerDocument.URL,handleResult:"export"})}));