/**
 * A very simple chrome extension that proxies a chrome Port
 * established with a client JS -- that is, JS running on a vanilla
 * web page with permission to connect to the present chrome extension
 * -- to a chrome native messaging host -- that is the chromello
 * executable.  This is necessary because the chrome security model
 * does not allow untrusted JS to speak directly to a native messaging
 * host.
 *
 * @param {Port} jsPort The port object representing a connection to
 * the external client JS.
 */
function onConnectExternal(jsPort) {
  if (!jsPort.name) {
    console.log('Bad name passed to native proxy extension.');
    jsPort.disconnect();
    return;
  }

  console.log('Establishing proxy connection to native host: ' + jsPort.name);

  var nativePort = chrome.runtime.connectNative(jsPort.name);

  nativePort.onDisconnect.addListener(function() {
    // Native port has disconnected, so now disconnect the js port.
    console.log('Native message port disconnected: ' +
      chrome.runtime.lastError.message);
    jsPort.disconnect();
  });

  nativePort.onMessage.addListener(function(msg) {
    // Just pass all messages from native port to js port.
    jsPort.postMessage(msg);
  });

  jsPort.onMessage.addListener(function(msg) {
    // Just pass all messages from js port to native port.
    nativePort.postMessage(msg);
  });

  jsPort.onDisconnect.addListener(function(msg) {
    // Js port has disconnected, so now disconnect from native port.
    nativePort.disconnect();
  });
}

chrome.runtime.onConnectExternal.addListener(onConnectExternal);
