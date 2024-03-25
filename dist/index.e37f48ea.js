// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hycaY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
// ----- IMPORTS ----- //
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _runtime = require("regenerator-runtime/runtime");
var _quagga = require("quagga");
var _quaggaDefault = parcelHelpers.interopDefault(_quagga);
var _configJs = require("./config.js");
var _modelJs = require("./model.js");
var _sidebarViewJs = require("./views/sidebarView.js");
var _sidebarViewJsDefault = parcelHelpers.interopDefault(_sidebarViewJs);
var _homepageViewJs = require("./views/homepageView.js");
var _homepageViewJsDefault = parcelHelpers.interopDefault(_homepageViewJs);
var _calculatorViewJs = require("./views/calculatorView.js");
var _calculatorViewJsDefault = parcelHelpers.interopDefault(_calculatorViewJs);
var _barcodeViewJs = require("./views/barcodeView.js");
var _barcodeViewJsDefault = parcelHelpers.interopDefault(_barcodeViewJs);
// if (module.hot) {
//   module.hot.accept();
// }
// ----- CONTROLLER FUNCTIONS ----- //
const registerRoutes = function() {
    /**
   * function add all views inside the state
   * key: should be exactly as hash of .feature--link
   * value: should be the corrisponding instance of that view
   *
   */ _modelJs.registerRoute("home", (0, _homepageViewJsDefault.default));
    _modelJs.registerRoute("calculator", (0, _calculatorViewJsDefault.default));
    _modelJs.registerRoute("barcode", (0, _barcodeViewJsDefault.default));
// ... Register other routes here when needed ...
};
const controlSidebarWidth = function(boolean) {
    // open sidebar if boolean === true and viceversa
    (0, _sidebarViewJsDefault.default).openCloseSidebar(boolean);
};
const renderCurrentView = function() {
    /**
   * function calls the render method of currentView
   * or renders homepageView in case there is no currentView
   */ if (_modelJs.state.currentView) _modelJs.state.currentView.render();
    else // Default to homepage view
    (0, _homepageViewJsDefault.default).render();
};
const controlViewLinks = async function(element) {
    // update hash in url and state
    _modelJs.updateHash(element);
    // get current hash (without #)
    const currentHash = _modelJs.state.hash.slice(1);
    // update state (currentView property)
    _modelJs.updateCurrentView(currentHash);
    // close sidebar
    // sidebarView.closeSidebar().then(() => {
    //   console.log(`4: start rendering`);
    //   renderCurrentView();
    // });
    // close sidebar
    (0, _sidebarViewJsDefault.default).closeSidebar();
    // render currentView
    renderCurrentView();
};
const controlCalculatorForm = function(data) {
    // check data again to be sure (also if there is no 0 inside)
    if (+data.height <= 0 || +data.weight <= 0 || +data.PAL <= 0 || +data.age <= 0) {
        (0, _calculatorViewJsDefault.default).renderErrorWrongValue();
        return;
    }
    // if everything is correct:
    // 1. calculate BMI
    _modelJs.calculateUpdateBMI(data);
    // console.log(model.state.bmi.currentLevel);
    // 2. calculate BMR
    _modelJs.calculateUpdateBMR(data);
    // 3. calculate TDEE
    _modelJs.calculateUpdateTDEE(data);
    // 4. get all data to generate markup
    _modelJs.setHealthMetricsSummury();
    // 5. generate result markup html for UI
    const resultMarkup = (0, _calculatorViewJsDefault.default).generateResultMarkup(_modelJs.state.summuryHealthData);
    // 6. remove old result (if there are) and render new on page
    (0, _calculatorViewJsDefault.default).renderResults(resultMarkup, _modelJs.state.summuryHealthData);
};
const controlBarcodeScanner = function() {
    // get new generated DOM elements
    const barcodeInteractiveElement = (0, _barcodeViewJsDefault.default).getBarcodeDOMElement();
    // make the barcodeInteractive element visible
    (0, _barcodeViewJsDefault.default).showbarcodeInteractive();
    // await getting barcode number
    _modelJs.getBarcode(barcodeInteractiveElement).then((barcodeNum)=>{
        // then
        // update the UI input value with scanned barcode number
        (0, _barcodeViewJsDefault.default).setNewBarcodeInputValue(barcodeNum);
        // and make the barcodeInteractive element invisible
        (0, _barcodeViewJsDefault.default).hidebarcodeInteractive();
    });
};
const controlStopBarcodeScanner = function() {
    // stop Quagga scanner
    (0, _quaggaDefault.default).stop();
    // and make the barcodeInteractive element invisible
    (0, _barcodeViewJsDefault.default).hidebarcodeInteractive();
};
const controlGetProductFromBarcode = async function(barcodeValue) {
    try {
        // get the product form API usin the barcode
        const product = await _modelJs.getProduct(barcodeValue);
        // create the HTML markup dinamically from product
        const cardMarkap = (0, _barcodeViewJsDefault.default).generateProductCardMarkup(product);
        // remove possible existing card on page (check + animation)
        (0, _barcodeViewJsDefault.default).checkCardOnPageOrRemoveCard().then(()=>{
            // then render the newly created card
            (0, _barcodeViewJsDefault.default).renderNewCard(cardMarkap);
        });
    } catch (err) {
        // genere error markup html
        const errorMarkup = (0, _barcodeViewJsDefault.default).generateErrorMarkup(err);
        // remove possible existing card on page (check + animation)
        (0, _barcodeViewJsDefault.default).checkCardOnPageOrRemoveCard().then(()=>{
            // then render the newly created card
            (0, _barcodeViewJsDefault.default).renderNewCard(errorMarkup);
        });
    }
};
// const controlModalWindowses = function(){
//   console.log(`here`);
// }
// ----- ENTRY POINT FUNCTION ----- //
const init = function() {
    /**
   * Entry point function based on publish–subscribe pattern
   */ registerRoutes();
    renderCurrentView();
    (0, _sidebarViewJsDefault.default).addHandlerManagerSibebar(controlSidebarWidth);
    (0, _sidebarViewJsDefault.default).addHandlerManagerLinks(controlViewLinks);
    (0, _homepageViewJsDefault.default).addHandlerButtonsLinks(controlViewLinks);
    (0, _calculatorViewJsDefault.default).addHandlerGetFormData(controlCalculatorForm);
    (0, _calculatorViewJsDefault.default).addHandlerModalWindowses();
    (0, _calculatorViewJsDefault.default).addHandlerCloseModalWithBtn();
    (0, _barcodeViewJsDefault.default).addHandlerBarcodeScanner(controlBarcodeScanner);
    (0, _barcodeViewJsDefault.default).addHandlerStopBarcodeScanner(controlStopBarcodeScanner);
    (0, _barcodeViewJsDefault.default).addHandlerCheckBarcode(controlGetProductFromBarcode);
};
init();

},{"core-js/modules/web.immediate.js":"49tUX","regenerator-runtime/runtime":"dXNgZ","quagga":"fEVYk","./config.js":"k5Hzs","./model.js":"Y4A21","./views/sidebarView.js":"eUObu","./views/homepageView.js":"5HgCT","./views/calculatorView.js":"e6BL6","./views/barcodeView.js":"ktkUL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"49tUX":[function(require,module,exports) {
"use strict";
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("52e9b3eefbbce1ed");
require("292fa64716f5b39e");

},{"52e9b3eefbbce1ed":"fOGFr","292fa64716f5b39e":"l7FDS"}],"fOGFr":[function(require,module,exports) {
"use strict";
var $ = require("79389288a80b279c");
var global = require("22a078687be7e1b6");
var clearImmediate = require("84ba5ca62b8b14c9").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"79389288a80b279c":"dIGt4","22a078687be7e1b6":"i8HOC","84ba5ca62b8b14c9":"7jDg7"}],"dIGt4":[function(require,module,exports) {
"use strict";
var global = require("6643b6592ad59b23");
var getOwnPropertyDescriptor = require("2ec751f39e500b85").f;
var createNonEnumerableProperty = require("b4567636b28a3b3a");
var defineBuiltIn = require("50460aa43dd4048a");
var defineGlobalProperty = require("581238c99f8c2c30");
var copyConstructorProperties = require("566a383894c688bc");
var isForced = require("f0e2e697f04e8ad9");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = global[TARGET] && global[TARGET].prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"6643b6592ad59b23":"i8HOC","2ec751f39e500b85":"lk5NI","b4567636b28a3b3a":"8CL42","50460aa43dd4048a":"6XwEX","581238c99f8c2c30":"ggjnO","566a383894c688bc":"9Z12i","f0e2e697f04e8ad9":"6uTCZ"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var check = function(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof this == "object" && this) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"lk5NI":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("c04e6fb248689dba");
var call = require("553ec943aa2a4554");
var propertyIsEnumerableModule = require("bbc5e69071aa2fbd");
var createPropertyDescriptor = require("1d2ffbfd99e01f41");
var toIndexedObject = require("c4ea69a78a643d87");
var toPropertyKey = require("8ab18ff766aa2ab9");
var hasOwn = require("3761c5d34b7aa48f");
var IE8_DOM_DEFINE = require("c4dfcc26308f1b4a");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"c04e6fb248689dba":"92ZIi","553ec943aa2a4554":"d7JlP","bbc5e69071aa2fbd":"7SuiS","1d2ffbfd99e01f41":"1lpav","c4ea69a78a643d87":"jLWwQ","8ab18ff766aa2ab9":"5XWKd","3761c5d34b7aa48f":"gC2Q5","c4dfcc26308f1b4a":"qS9uN"}],"92ZIi":[function(require,module,exports) {
"use strict";
var fails = require("735b783268fd06c0");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});

},{"735b783268fd06c0":"hL6D2"}],"hL6D2":[function(require,module,exports) {
"use strict";
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"d7JlP":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("44e025d030d66023");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"44e025d030d66023":"i16Dq"}],"i16Dq":[function(require,module,exports) {
"use strict";
var fails = require("2642aa7619056f20");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"2642aa7619056f20":"hL6D2"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"1lpav":[function(require,module,exports) {
"use strict";
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"jLWwQ":[function(require,module,exports) {
"use strict";
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("9d8f8f50ac9468eb");
var requireObjectCoercible = require("f7224aed72953ac4");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"9d8f8f50ac9468eb":"kPk5h","f7224aed72953ac4":"fOR0B"}],"kPk5h":[function(require,module,exports) {
"use strict";
var uncurryThis = require("7ba7e65983d7b662");
var fails = require("df551e12a7c872dd");
var classof = require("1d34ea813cebff9c");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === "String" ? split(it, "") : $Object(it);
} : $Object;

},{"7ba7e65983d7b662":"7GlkT","df551e12a7c872dd":"hL6D2","1d34ea813cebff9c":"bdfmm"}],"7GlkT":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("829dd7a4e960cf9e");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"829dd7a4e960cf9e":"i16Dq"}],"bdfmm":[function(require,module,exports) {
"use strict";
var uncurryThis = require("1c71c3f6daac476c");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"1c71c3f6daac476c":"7GlkT"}],"fOR0B":[function(require,module,exports) {
"use strict";
var isNullOrUndefined = require("74607922ed30019f");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
};

},{"74607922ed30019f":"gM5ar"}],"gM5ar":[function(require,module,exports) {
"use strict";
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"5XWKd":[function(require,module,exports) {
"use strict";
var toPrimitive = require("53a3a67ac381c4e8");
var isSymbol = require("b992ca9cdcf7937b");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"53a3a67ac381c4e8":"a2mK1","b992ca9cdcf7937b":"4aV4F"}],"a2mK1":[function(require,module,exports) {
"use strict";
var call = require("70235907dc93b4b0");
var isObject = require("46fb53dace408c8e");
var isSymbol = require("677bdc4d74d2f983");
var getMethod = require("80395bcde336a28b");
var ordinaryToPrimitive = require("49552a7324952190");
var wellKnownSymbol = require("aea01c71276624bf");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"70235907dc93b4b0":"d7JlP","46fb53dace408c8e":"Z0pBo","677bdc4d74d2f983":"4aV4F","80395bcde336a28b":"9Zfiw","49552a7324952190":"7MME2","aea01c71276624bf":"gTwyA"}],"Z0pBo":[function(require,module,exports) {
"use strict";
var isCallable = require("f87cee1cb79cbcca");
module.exports = function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"f87cee1cb79cbcca":"l3Kyn"}],"l3Kyn":[function(require,module,exports) {
"use strict";
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == "object" && document.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == "undefined" && documentAll !== undefined ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{}],"4aV4F":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("6b6c481cdfb7df35");
var isCallable = require("2af44fcbdbf14c83");
var isPrototypeOf = require("76e903e830c40e7c");
var USE_SYMBOL_AS_UID = require("7e2fe930b3598e22");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"6b6c481cdfb7df35":"6ZUSY","2af44fcbdbf14c83":"l3Kyn","76e903e830c40e7c":"3jtKQ","7e2fe930b3598e22":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
"use strict";
var global = require("dd9e9ae04e8684f7");
var isCallable = require("f1d62079325906cb");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"dd9e9ae04e8684f7":"i8HOC","f1d62079325906cb":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
"use strict";
var uncurryThis = require("83f14842ef67e16a");
module.exports = uncurryThis({}.isPrototypeOf);

},{"83f14842ef67e16a":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("da4a972af0214ea0");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"da4a972af0214ea0":"8KyTD"}],"8KyTD":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("ecc4d354cb42bea8");
var fails = require("b37df495bcdc1d99");
var global = require("d8adff9188ad5fee");
var $String = global.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol("symbol detection");
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"ecc4d354cb42bea8":"bjFlO","b37df495bcdc1d99":"hL6D2","d8adff9188ad5fee":"i8HOC"}],"bjFlO":[function(require,module,exports) {
"use strict";
var global = require("705d79ce07ed8cf");
var userAgent = require("5afb83a49cd74e4c");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"705d79ce07ed8cf":"i8HOC","5afb83a49cd74e4c":"73xBt"}],"73xBt":[function(require,module,exports) {
"use strict";
module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";

},{}],"9Zfiw":[function(require,module,exports) {
"use strict";
var aCallable = require("bbfed17b24e215f4");
var isNullOrUndefined = require("492a86e2970f6a26");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"bbfed17b24e215f4":"gOMir","492a86e2970f6a26":"gM5ar"}],"gOMir":[function(require,module,exports) {
"use strict";
var isCallable = require("4094667126ecac05");
var tryToString = require("fce2a7573db493fa");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + " is not a function");
};

},{"4094667126ecac05":"l3Kyn","fce2a7573db493fa":"4O7d7"}],"4O7d7":[function(require,module,exports) {
"use strict";
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
"use strict";
var call = require("abe9ca006f56626e");
var isCallable = require("c96b3a89fec6248a");
var isObject = require("551615fda0214f1b");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
};

},{"abe9ca006f56626e":"d7JlP","c96b3a89fec6248a":"l3Kyn","551615fda0214f1b":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
"use strict";
var global = require("dbe74e87464035e3");
var shared = require("6a2cda01df6b4c79");
var hasOwn = require("dccc28ffa5beeb54");
var uid = require("48d6af1225853d44");
var NATIVE_SYMBOL = require("9f762329148684");
var USE_SYMBOL_AS_UID = require("1ce268781e409df2");
var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
};

},{"dbe74e87464035e3":"i8HOC","6a2cda01df6b4c79":"i1mHK","dccc28ffa5beeb54":"gC2Q5","48d6af1225853d44":"a3SEE","9f762329148684":"8KyTD","1ce268781e409df2":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
"use strict";
var store = require("84eeed9891aafe14");
module.exports = function(key, value) {
    return store[key] || (store[key] = value || {});
};

},{"84eeed9891aafe14":"l4ncH"}],"l4ncH":[function(require,module,exports) {
"use strict";
var IS_PURE = require("7b43004672b1879f");
var globalThis = require("8756de416b94afec");
var defineGlobalProperty = require("dfb72a1d809f7b02");
var SHARED = "__core-js_shared__";
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
(store.versions || (store.versions = [])).push({
    version: "3.36.0",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2024 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"7b43004672b1879f":"5ZsyC","8756de416b94afec":"i8HOC","dfb72a1d809f7b02":"ggjnO"}],"5ZsyC":[function(require,module,exports) {
"use strict";
module.exports = false;

},{}],"ggjnO":[function(require,module,exports) {
"use strict";
var global = require("70259c1dd4aa0e14");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"70259c1dd4aa0e14":"i8HOC"}],"gC2Q5":[function(require,module,exports) {
"use strict";
var uncurryThis = require("f5dcaa60a713971f");
var toObject = require("ab17c4f45fcf0841");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"f5dcaa60a713971f":"7GlkT","ab17c4f45fcf0841":"5cb35"}],"5cb35":[function(require,module,exports) {
"use strict";
var requireObjectCoercible = require("f45a7b5dcdc4a410");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"f45a7b5dcdc4a410":"fOR0B"}],"a3SEE":[function(require,module,exports) {
"use strict";
var uncurryThis = require("5da0fe4507da20a3");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"5da0fe4507da20a3":"7GlkT"}],"qS9uN":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("9b4278b13c076bf");
var fails = require("8aee5d88a5f9b6b5");
var createElement = require("1db4d60148afcf21");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a !== 7;
});

},{"9b4278b13c076bf":"92ZIi","8aee5d88a5f9b6b5":"hL6D2","1db4d60148afcf21":"4bOHl"}],"4bOHl":[function(require,module,exports) {
"use strict";
var global = require("f5891d48afd7ec83");
var isObject = require("824df78b2e007250");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"f5891d48afd7ec83":"i8HOC","824df78b2e007250":"Z0pBo"}],"8CL42":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("a8753383ef98ee18");
var definePropertyModule = require("189ab650b8f71085");
var createPropertyDescriptor = require("1168c8162aa30435");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"a8753383ef98ee18":"92ZIi","189ab650b8f71085":"iJR4w","1168c8162aa30435":"1lpav"}],"iJR4w":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("ca50eb9163928400");
var IE8_DOM_DEFINE = require("d482f9e5478795e8");
var V8_PROTOTYPE_DEFINE_BUG = require("b6ad7537efb06f4b");
var anObject = require("16365a73399e7fe7");
var toPropertyKey = require("fab1d366c47796d9");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"ca50eb9163928400":"92ZIi","d482f9e5478795e8":"qS9uN","b6ad7537efb06f4b":"ka1Un","16365a73399e7fe7":"4isCr","fab1d366c47796d9":"5XWKd"}],"ka1Un":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("b22a5a2de93e3ad2");
var fails = require("249a5b857c2dfccd");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype !== 42;
});

},{"b22a5a2de93e3ad2":"92ZIi","249a5b857c2dfccd":"hL6D2"}],"4isCr":[function(require,module,exports) {
"use strict";
var isObject = require("2b6c6258a0a6082f");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + " is not an object");
};

},{"2b6c6258a0a6082f":"Z0pBo"}],"6XwEX":[function(require,module,exports) {
"use strict";
var isCallable = require("99ee13632b3fa68");
var definePropertyModule = require("9ebb3e3004fccc0a");
var makeBuiltIn = require("f10cc812a3094053");
var defineGlobalProperty = require("d354802d852d9c2b");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"99ee13632b3fa68":"l3Kyn","9ebb3e3004fccc0a":"iJR4w","f10cc812a3094053":"cTB4k","d354802d852d9c2b":"ggjnO"}],"cTB4k":[function(require,module,exports) {
"use strict";
var uncurryThis = require("ca84677f1ebd1804");
var fails = require("13360f2842eba261");
var isCallable = require("103e488c0928755a");
var hasOwn = require("cbf9b0e0779cc368");
var DESCRIPTORS = require("3f2eb7efeae2f72b");
var CONFIGURABLE_FUNCTION_NAME = require("548b10f284264c72").CONFIGURABLE;
var inspectSource = require("358f00f3103bd55b");
var InternalStateModule = require("9b2ce14119fd2412");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis("".slice);
var replace = uncurryThis("".replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"ca84677f1ebd1804":"7GlkT","13360f2842eba261":"hL6D2","103e488c0928755a":"l3Kyn","cbf9b0e0779cc368":"gC2Q5","3f2eb7efeae2f72b":"92ZIi","548b10f284264c72":"l6Kgd","358f00f3103bd55b":"9jh7O","9b2ce14119fd2412":"7AMlF"}],"l6Kgd":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("8ad2bacb0e20b95c");
var hasOwn = require("4eabfd8f83afc9d5");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"8ad2bacb0e20b95c":"92ZIi","4eabfd8f83afc9d5":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
"use strict";
var uncurryThis = require("26e26db98367212e");
var isCallable = require("40ed9a4f6ae66648");
var store = require("485d48d6f4c6739e");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"26e26db98367212e":"7GlkT","40ed9a4f6ae66648":"l3Kyn","485d48d6f4c6739e":"l4ncH"}],"7AMlF":[function(require,module,exports) {
"use strict";
var NATIVE_WEAK_MAP = require("d3f0c9f3327b2fd6");
var global = require("ca46b44b6201ccd7");
var isObject = require("f82e6cc0ac249fa5");
var createNonEnumerableProperty = require("c0ae163eea4ef97");
var hasOwn = require("6dea7358344877bb");
var shared = require("3e035a1241da2f0");
var sharedKey = require("88d6ccc27e779e5a");
var hiddenKeys = require("d40b9b3abdbb956e");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"d3f0c9f3327b2fd6":"2PZTl","ca46b44b6201ccd7":"i8HOC","f82e6cc0ac249fa5":"Z0pBo","c0ae163eea4ef97":"8CL42","6dea7358344877bb":"gC2Q5","3e035a1241da2f0":"l4ncH","88d6ccc27e779e5a":"eAjGz","d40b9b3abdbb956e":"661m4"}],"2PZTl":[function(require,module,exports) {
"use strict";
var global = require("6bd2547a42528a9c");
var isCallable = require("aa77fff8d5ef0565");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"6bd2547a42528a9c":"i8HOC","aa77fff8d5ef0565":"l3Kyn"}],"eAjGz":[function(require,module,exports) {
"use strict";
var shared = require("dbc8182adeb8c92f");
var uid = require("90b4ffb58508a6e5");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"dbc8182adeb8c92f":"i1mHK","90b4ffb58508a6e5":"a3SEE"}],"661m4":[function(require,module,exports) {
"use strict";
module.exports = {};

},{}],"9Z12i":[function(require,module,exports) {
"use strict";
var hasOwn = require("d91d786cc71453ce");
var ownKeys = require("88cb809f98beddc6");
var getOwnPropertyDescriptorModule = require("10ea642aad5f7c21");
var definePropertyModule = require("39ff598ce822187e");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"d91d786cc71453ce":"gC2Q5","88cb809f98beddc6":"1CX1A","10ea642aad5f7c21":"lk5NI","39ff598ce822187e":"iJR4w"}],"1CX1A":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("3cc1e4329d869e34");
var uncurryThis = require("2b8e77cbdbe3db7a");
var getOwnPropertyNamesModule = require("d703bcb62fcda216");
var getOwnPropertySymbolsModule = require("157674bad2772c6d");
var anObject = require("a09e060b9cae3c6c");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"3cc1e4329d869e34":"6ZUSY","2b8e77cbdbe3db7a":"7GlkT","d703bcb62fcda216":"fjY04","157674bad2772c6d":"4DWO3","a09e060b9cae3c6c":"4isCr"}],"fjY04":[function(require,module,exports) {
"use strict";
var internalObjectKeys = require("6d8591e17a49376c");
var enumBugKeys = require("2c933f93dd98f385");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"6d8591e17a49376c":"hl5T1","2c933f93dd98f385":"9RnJm"}],"hl5T1":[function(require,module,exports) {
"use strict";
var uncurryThis = require("363ee0e6bb4f46a7");
var hasOwn = require("3183fe0b0bf6f6ac");
var toIndexedObject = require("28192ac12e934672");
var indexOf = require("a5f9c5d8e993ccd6").indexOf;
var hiddenKeys = require("57775908f1581bc6");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"363ee0e6bb4f46a7":"7GlkT","3183fe0b0bf6f6ac":"gC2Q5","28192ac12e934672":"jLWwQ","a5f9c5d8e993ccd6":"n5IsC","57775908f1581bc6":"661m4"}],"n5IsC":[function(require,module,exports) {
"use strict";
var toIndexedObject = require("d5dcbcd68ac5acd0");
var toAbsoluteIndex = require("212b13aecfa48226");
var lengthOfArrayLike = require("e5a8b3e1da4c5637");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"d5dcbcd68ac5acd0":"jLWwQ","212b13aecfa48226":"5yh27","e5a8b3e1da4c5637":"lY4mS"}],"5yh27":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("72fe0a53ad43912c");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"72fe0a53ad43912c":"kLXGe"}],"kLXGe":[function(require,module,exports) {
"use strict";
var trunc = require("3403cba02b5f61d8");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"3403cba02b5f61d8":"7O8gb"}],"7O8gb":[function(require,module,exports) {
"use strict";
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
"use strict";
var toLength = require("23d9716c54a2ab90");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"23d9716c54a2ab90":"fU04N"}],"fU04N":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("c48d3a8b8ac52b0b");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"c48d3a8b8ac52b0b":"kLXGe"}],"9RnJm":[function(require,module,exports) {
"use strict";
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
"use strict";
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
"use strict";
var fails = require("10299561ea0c7870");
var isCallable = require("8b1ecdaf59f07210");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"10299561ea0c7870":"hL6D2","8b1ecdaf59f07210":"l3Kyn"}],"7jDg7":[function(require,module,exports) {
"use strict";
var global = require("1e8ed58235e9956a");
var apply = require("e574be68c288c7c8");
var bind = require("df212787338802d3");
var isCallable = require("afdf018c2d01bbc6");
var hasOwn = require("35a3e849940fd612");
var fails = require("b8bf5434d2248ca7");
var html = require("731f9370cc21fc3b");
var arraySlice = require("ec358060964e4bde");
var createElement = require("907adb6d219da7a3");
var validateArgumentsLength = require("f398561ebd49a798");
var IS_IOS = require("fdfdeccf85e81d4f");
var IS_NODE = require("fcf929779abbf29c");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        global.addEventListener("message", eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"1e8ed58235e9956a":"i8HOC","e574be68c288c7c8":"148ka","df212787338802d3":"7vpmS","afdf018c2d01bbc6":"l3Kyn","35a3e849940fd612":"gC2Q5","b8bf5434d2248ca7":"hL6D2","731f9370cc21fc3b":"2pze4","ec358060964e4bde":"RsFXo","907adb6d219da7a3":"4bOHl","f398561ebd49a798":"b9O3D","fdfdeccf85e81d4f":"bzGah","fcf929779abbf29c":"2Jcp4"}],"148ka":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("d07466971ded2aca");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"d07466971ded2aca":"i16Dq"}],"7vpmS":[function(require,module,exports) {
"use strict";
var uncurryThis = require("92f6f475baa85665");
var aCallable = require("547ee4f9dab0cc76");
var NATIVE_BIND = require("5acd31cba656d393");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"92f6f475baa85665":"5Hioa","547ee4f9dab0cc76":"gOMir","5acd31cba656d393":"i16Dq"}],"5Hioa":[function(require,module,exports) {
"use strict";
var classofRaw = require("8e77093015e1e67f");
var uncurryThis = require("9daa4dbbca634c9e");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"8e77093015e1e67f":"bdfmm","9daa4dbbca634c9e":"7GlkT"}],"2pze4":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("14cb391fa4a0dda8");
module.exports = getBuiltIn("document", "documentElement");

},{"14cb391fa4a0dda8":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
"use strict";
var uncurryThis = require("5250b5c9324ccbe");
module.exports = uncurryThis([].slice);

},{"5250b5c9324ccbe":"7GlkT"}],"b9O3D":[function(require,module,exports) {
"use strict";
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw new $TypeError("Not enough arguments");
    return passed;
};

},{}],"bzGah":[function(require,module,exports) {
"use strict";
var userAgent = require("d96985a79ddda108");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"d96985a79ddda108":"73xBt"}],"2Jcp4":[function(require,module,exports) {
"use strict";
var global = require("1b4555a3a97d5ef1");
var classof = require("779f783a397f138");
module.exports = classof(global.process) === "process";

},{"1b4555a3a97d5ef1":"i8HOC","779f783a397f138":"bdfmm"}],"l7FDS":[function(require,module,exports) {
"use strict";
var $ = require("33581c362196ed1f");
var global = require("9a84e40db4964af6");
var setTask = require("4219ce460223bd08").set;
var schedulersFix = require("738dc378e6a94c64");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = global.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"33581c362196ed1f":"dIGt4","9a84e40db4964af6":"i8HOC","4219ce460223bd08":"7jDg7","738dc378e6a94c64":"cAPb6"}],"cAPb6":[function(require,module,exports) {
"use strict";
var global = require("373dd417176da2c5");
var apply = require("a68ecfcbf29c46f6");
var isCallable = require("7087588d33667af2");
var ENGINE_IS_BUN = require("7679d27a979f2651");
var USER_AGENT = require("7493ba8d8bb8623d");
var arraySlice = require("cff2c830bdea4f24");
var validateArgumentsLength = require("58a74f00cee1ac64");
var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function() {
    var version = global.Bun.version.split(".");
    return version.length < 3 || version[0] === "0" && (version[1] < 3 || version[1] === "3" && version[2] === "0");
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"373dd417176da2c5":"i8HOC","a68ecfcbf29c46f6":"148ka","7087588d33667af2":"l3Kyn","7679d27a979f2651":"2BA6V","7493ba8d8bb8623d":"73xBt","cff2c830bdea4f24":"RsFXo","58a74f00cee1ac64":"b9O3D"}],"2BA6V":[function(require,module,exports) {
"use strict";
/* global Bun -- Bun case */ module.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";

},{}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per GeneratorResume behavior specified since ES2015:
                // ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
                // Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next method, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable != null) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        throw new TypeError(typeof iterable + " is not iterable");
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"fEVYk":[function(require,module,exports) {
!function(t, e) {
    module.exports = e(e.toString()).default;
}(this, function(t) {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
        }
        var n = {};
        return e.m = t, e.c = n, e.i = function(t) {
            return t;
        }, e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return e.d(n, "a", n), n;
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, e.p = "/", e(e.s = 166);
    }([
        function(t, e) {
            function n(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e);
            }
            t.exports = n;
        },
        function(t, e, n) {
            "use strict";
            function r(t, e) {
                return this._row = [], this.config = t || {}, this.supplements = e, this;
            }
            var o = n(3);
            r.prototype._nextUnset = function(t, e) {
                var n;
                for(void 0 === e && (e = 0), n = e; n < t.length; n++)if (!t[n]) return n;
                return t.length;
            }, r.prototype._matchPattern = function(t, e, n) {
                var r, o, i, a, u = 0, c = 0, s = 0, f = 0;
                for(n = n || this.SINGLE_CODE_ERROR || 1, r = 0; r < t.length; r++)s += t[r], f += e[r];
                if (s < f) return Number.MAX_VALUE;
                for(o = s / f, n *= o, r = 0; r < t.length; r++){
                    if (i = t[r], a = e[r] * o, (c = Math.abs(i - a) / a) > n) return Number.MAX_VALUE;
                    u += c;
                }
                return u / f;
            }, r.prototype._nextSet = function(t, e) {
                var n;
                for(e = e || 0, n = e; n < t.length; n++)if (t[n]) return n;
                return t.length;
            }, r.prototype._correctBars = function(t, e, n) {
                for(var r = n.length, o = 0; r--;)(o = t[n[r]] * (1 - (1 - e) / 2)) > 1 && (t[n[r]] = o);
            }, r.prototype._matchTrace = function(t, e) {
                var n, r, o = [], i = this, a = i._nextSet(i._row), u = !i._row[a], c = 0, s = {
                    error: Number.MAX_VALUE,
                    code: -1,
                    start: 0
                };
                if (t) {
                    for(n = 0; n < t.length; n++)o.push(0);
                    for(n = a; n < i._row.length; n++)if (i._row[n] ^ u) o[c]++;
                    else {
                        if (c === o.length - 1) return r = i._matchPattern(o, t), r < e ? (s.start = n - a, s.end = n, s.counter = o, s) : null;
                        c++, o[c] = 1, u = !u;
                    }
                } else for(o.push(0), n = a; n < i._row.length; n++)i._row[n] ^ u ? o[c]++ : (c++, o.push(0), o[c] = 1, u = !u);
                return s.start = a, s.end = i._row.length - 1, s.counter = o, s;
            }, r.prototype.decodePattern = function(t) {
                var e, n = this;
                return n._row = t, e = n._decode(), null === e ? (n._row.reverse(), (e = n._decode()) && (e.direction = r.DIRECTION.REVERSE, e.start = n._row.length - e.start, e.end = n._row.length - e.end)) : e.direction = r.DIRECTION.FORWARD, e && (e.format = n.FORMAT), e;
            }, r.prototype._matchRange = function(t, e, n) {
                var r;
                for(t = t < 0 ? 0 : t, r = t; r < e; r++)if (this._row[r] !== n) return !1;
                return !0;
            }, r.prototype._fillCounters = function(t, e, n) {
                var r, o = this, i = 0, a = [];
                for(n = void 0 === n || n, t = void 0 !== t ? t : o._nextUnset(o._row), e = e || o._row.length, a[i] = 0, r = t; r < e; r++)o._row[r] ^ n ? a[i]++ : (i++, a[i] = 1, n = !n);
                return a;
            }, r.prototype._toCounters = function(t, e) {
                var n, r = this, i = e.length, a = r._row.length, u = !r._row[t], c = 0;
                for(o.a.init(e, 0), n = t; n < a; n++)if (r._row[n] ^ u) e[c]++;
                else {
                    if (++c === i) break;
                    e[c] = 1, u = !u;
                }
                return e;
            }, Object.defineProperty(r.prototype, "FORMAT", {
                value: "unknown",
                writeable: !1
            }), r.DIRECTION = {
                FORWARD: 1,
                REVERSE: -1
            }, r.Exception = {
                StartNotFoundException: "Start-Info was not found!",
                CodeNotFoundException: "Code could not be found!",
                PatternNotFoundException: "Pattern could not be found!"
            }, r.CONFIG_KEYS = {}, e.a = r;
        },
        function(t, e) {
            var n = Array.isArray;
            t.exports = n;
        },
        function(t, e, n) {
            "use strict";
            e.a = {
                init: function(t, e) {
                    for(var n = t.length; n--;)t[n] = e;
                },
                shuffle: function(t) {
                    var e, n, r = t.length - 1;
                    for(r; r >= 0; r--)e = Math.floor(Math.random() * r), n = t[r], t[r] = t[e], t[e] = n;
                    return t;
                },
                toPointList: function(t) {
                    var e, n, r = [], o = [];
                    for(e = 0; e < t.length; e++){
                        for(r = [], n = 0; n < t[e].length; n++)r[n] = t[e][n];
                        o[e] = "[" + r.join(",") + "]";
                    }
                    return "[" + o.join(",\r\n") + "]";
                },
                threshold: function(t, e, n) {
                    var r, o = [];
                    for(r = 0; r < t.length; r++)n.apply(t, [
                        t[r]
                    ]) >= e && o.push(t[r]);
                    return o;
                },
                maxIndex: function(t) {
                    var e, n = 0;
                    for(e = 0; e < t.length; e++)t[e] > t[n] && (n = e);
                    return n;
                },
                max: function t(e) {
                    var n, t = 0;
                    for(n = 0; n < e.length; n++)e[n] > t && (t = e[n]);
                    return t;
                },
                sum: function t(e) {
                    for(var n = e.length, t = 0; n--;)t += e[n];
                    return t;
                }
            };
        },
        function(t, e, n) {
            "use strict";
            function r(t, e) {
                t = a()(o(), t), u.a.call(this, t, e);
            }
            function o() {
                var t = {};
                return Object.keys(r.CONFIG_KEYS).forEach(function(e) {
                    t[e] = r.CONFIG_KEYS[e].default;
                }), t;
            }
            var i = n(28), a = n.n(i), u = n(1), c = Object.assign || function(t) {
                for(var e = 1; e < arguments.length; e++){
                    var n = arguments[e];
                    for(var r in n)Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
            }, s = {
                CODE_L_START: {
                    value: 0
                },
                CODE_G_START: {
                    value: 10
                },
                START_PATTERN: {
                    value: [
                        1,
                        1,
                        1
                    ]
                },
                STOP_PATTERN: {
                    value: [
                        1,
                        1,
                        1
                    ]
                },
                MIDDLE_PATTERN: {
                    value: [
                        1,
                        1,
                        1,
                        1,
                        1
                    ]
                },
                EXTENSION_START_PATTERN: {
                    value: [
                        1,
                        1,
                        2
                    ]
                },
                CODE_PATTERN: {
                    value: [
                        [
                            3,
                            2,
                            1,
                            1
                        ],
                        [
                            2,
                            2,
                            2,
                            1
                        ],
                        [
                            2,
                            1,
                            2,
                            2
                        ],
                        [
                            1,
                            4,
                            1,
                            1
                        ],
                        [
                            1,
                            1,
                            3,
                            2
                        ],
                        [
                            1,
                            2,
                            3,
                            1
                        ],
                        [
                            1,
                            1,
                            1,
                            4
                        ],
                        [
                            1,
                            3,
                            1,
                            2
                        ],
                        [
                            1,
                            2,
                            1,
                            3
                        ],
                        [
                            3,
                            1,
                            1,
                            2
                        ],
                        [
                            1,
                            1,
                            2,
                            3
                        ],
                        [
                            1,
                            2,
                            2,
                            2
                        ],
                        [
                            2,
                            2,
                            1,
                            2
                        ],
                        [
                            1,
                            1,
                            4,
                            1
                        ],
                        [
                            2,
                            3,
                            1,
                            1
                        ],
                        [
                            1,
                            3,
                            2,
                            1
                        ],
                        [
                            4,
                            1,
                            1,
                            1
                        ],
                        [
                            2,
                            1,
                            3,
                            1
                        ],
                        [
                            3,
                            1,
                            2,
                            1
                        ],
                        [
                            2,
                            1,
                            1,
                            3
                        ]
                    ]
                },
                CODE_FREQUENCY: {
                    value: [
                        0,
                        11,
                        13,
                        14,
                        19,
                        25,
                        28,
                        21,
                        22,
                        26
                    ]
                },
                SINGLE_CODE_ERROR: {
                    value: .7
                },
                AVG_CODE_ERROR: {
                    value: .48
                },
                FORMAT: {
                    value: "ean_13",
                    writeable: !1
                }
            };
            r.prototype = Object.create(u.a.prototype, s), r.prototype.constructor = r, r.prototype._decodeCode = function(t, e) {
                var n, r, o, i = [
                    0,
                    0,
                    0,
                    0
                ], a = this, u = t, c = !a._row[u], s = 0, f = {
                    error: Number.MAX_VALUE,
                    code: -1,
                    start: t,
                    end: t
                };
                for(e || (e = a.CODE_PATTERN.length), n = u; n < a._row.length; n++)if (a._row[n] ^ c) i[s]++;
                else {
                    if (s === i.length - 1) {
                        for(r = 0; r < e; r++)(o = a._matchPattern(i, a.CODE_PATTERN[r])) < f.error && (f.code = r, f.error = o);
                        return f.end = n, f.error > a.AVG_CODE_ERROR ? null : f;
                    }
                    s++, i[s] = 1, c = !c;
                }
                return null;
            }, r.prototype._findPattern = function(t, e, n, r, o) {
                var i, a, u, c, s = [], f = this, l = 0, d = {
                    error: Number.MAX_VALUE,
                    code: -1,
                    start: 0,
                    end: 0
                };
                for(e || (e = f._nextSet(f._row)), void 0 === n && (n = !1), void 0 === r && (r = !0), void 0 === o && (o = f.AVG_CODE_ERROR), i = 0; i < t.length; i++)s[i] = 0;
                for(i = e; i < f._row.length; i++)if (f._row[i] ^ n) s[l]++;
                else {
                    if (l === s.length - 1) {
                        for(c = 0, u = 0; u < s.length; u++)c += s[u];
                        if ((a = f._matchPattern(s, t)) < o) return d.error = a, d.start = i - c, d.end = i, d;
                        if (!r) return null;
                        for(u = 0; u < s.length - 2; u++)s[u] = s[u + 2];
                        s[s.length - 2] = 0, s[s.length - 1] = 0, l--;
                    } else l++;
                    s[l] = 1, n = !n;
                }
                return null;
            }, r.prototype._findStart = function() {
                for(var t, e, n = this, r = n._nextSet(n._row); !e;){
                    if (!(e = n._findPattern(n.START_PATTERN, r))) return null;
                    if ((t = e.start - (e.end - e.start)) >= 0 && n._matchRange(t, e.start, 0)) return e;
                    r = e.end, e = null;
                }
            }, r.prototype._verifyTrailingWhitespace = function(t) {
                var e, n = this;
                return e = t.end + (t.end - t.start), e < n._row.length && n._matchRange(t.end, e, 0) ? t : null;
            }, r.prototype._findEnd = function(t, e) {
                var n = this, r = n._findPattern(n.STOP_PATTERN, t, e, !1);
                return null !== r ? n._verifyTrailingWhitespace(r) : null;
            }, r.prototype._calculateFirstDigit = function(t) {
                var e, n = this;
                for(e = 0; e < n.CODE_FREQUENCY.length; e++)if (t === n.CODE_FREQUENCY[e]) return e;
                return null;
            }, r.prototype._decodePayload = function(t, e, n) {
                var r, o, i = this, a = 0;
                for(r = 0; r < 6; r++){
                    if (!(t = i._decodeCode(t.end))) return null;
                    t.code >= i.CODE_G_START ? (t.code = t.code - i.CODE_G_START, a |= 1 << 5 - r) : a |= 0 << 5 - r, e.push(t.code), n.push(t);
                }
                if (null === (o = i._calculateFirstDigit(a))) return null;
                if (e.unshift(o), null === (t = i._findPattern(i.MIDDLE_PATTERN, t.end, !0, !1))) return null;
                for(n.push(t), r = 0; r < 6; r++){
                    if (!(t = i._decodeCode(t.end, i.CODE_G_START))) return null;
                    n.push(t), e.push(t.code);
                }
                return t;
            }, r.prototype._decode = function() {
                var t, e, n = this, r = [], o = [], i = {};
                if (!(t = n._findStart())) return null;
                if (e = {
                    code: t.code,
                    start: t.start,
                    end: t.end
                }, o.push(e), !(e = n._decodePayload(e, r, o))) return null;
                if (!(e = n._findEnd(e.end, !1))) return null;
                if (o.push(e), !n._checksum(r)) return null;
                if (this.supplements.length > 0) {
                    var a = this._decodeExtensions(e.end);
                    if (!a) return null;
                    var u = a.decodedCodes[a.decodedCodes.length - 1], s = {
                        start: u.start + ((u.end - u.start) / 2 | 0),
                        end: u.end
                    };
                    if (!n._verifyTrailingWhitespace(s)) return null;
                    i = {
                        supplement: a,
                        code: r.join("") + a.code
                    };
                }
                return c({
                    code: r.join(""),
                    start: t.start,
                    end: e.end,
                    codeset: "",
                    startInfo: t,
                    decodedCodes: o
                }, i);
            }, r.prototype._decodeExtensions = function(t) {
                var e, n, r = this._nextSet(this._row, t), o = this._findPattern(this.EXTENSION_START_PATTERN, r, !1, !1);
                if (null === o) return null;
                for(e = 0; e < this.supplements.length; e++)if (null !== (n = this.supplements[e].decode(this._row, o.end))) return {
                    code: n.code,
                    start: r,
                    startInfo: o,
                    end: n.end,
                    codeset: "",
                    decodedCodes: n.decodedCodes
                };
                return null;
            }, r.prototype._checksum = function(t) {
                var e, n = 0;
                for(e = t.length - 2; e >= 0; e -= 2)n += t[e];
                for(n *= 3, e = t.length - 1; e >= 0; e -= 2)n += t[e];
                return n % 10 == 0;
            }, r.CONFIG_KEYS = {
                supplements: {
                    type: "arrayOf(string)",
                    default: [],
                    description: "Allowed extensions to be decoded (2 and/or 5)"
                }
            }, e.a = r;
        },
        function(t, e, n) {
            var r = n(38), o = "object" == typeof self && self && self.Object === Object && self, i = r || o || Function("return this")();
            t.exports = i;
        },
        function(t, e) {
            function n(t) {
                return null != t && "object" == typeof t;
            }
            t.exports = n;
        },
        function(t, e) {
            function n(t) {
                var e = new Float32Array(2);
                return e[0] = t[0], e[1] = t[1], e;
            }
            t.exports = n;
        },
        function(t, e, n) {
            function r(t) {
                return null == t ? void 0 === t ? c : u : s && s in Object(t) ? i(t) : a(t);
            }
            var o = n(11), i = n(119), a = n(146), u = "[object Null]", c = "[object Undefined]", s = o ? o.toStringTag : void 0;
            t.exports = r;
        },
        function(t, e, n) {
            "use strict";
            e.a = {
                drawRect: function(t, e, n, r) {
                    n.strokeStyle = r.color, n.fillStyle = r.color, n.lineWidth = 1, n.beginPath(), n.strokeRect(t.x, t.y, e.x, e.y);
                },
                drawPath: function(t, e, n, r) {
                    n.strokeStyle = r.color, n.fillStyle = r.color, n.lineWidth = r.lineWidth, n.beginPath(), n.moveTo(t[0][e.x], t[0][e.y]);
                    for(var o = 1; o < t.length; o++)n.lineTo(t[o][e.x], t[o][e.y]);
                    n.closePath(), n.stroke();
                },
                drawImage: function(t, e, n) {
                    var r, o = n.getImageData(0, 0, e.x, e.y), i = o.data, a = t.length, u = i.length;
                    if (u / a != 4) return !1;
                    for(; a--;)r = t[a], i[--u] = 255, i[--u] = r, i[--u] = r, i[--u] = r;
                    return n.putImageData(o, 0, 0), !0;
                }
            };
        },
        function(t, e, n) {
            function r(t) {
                var e = -1, n = null == t ? 0 : t.length;
                for(this.clear(); ++e < n;){
                    var r = t[e];
                    this.set(r[0], r[1]);
                }
            }
            var o = n(133), i = n(134), a = n(135), u = n(136), c = n(137);
            r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r;
        },
        function(t, e, n) {
            var r = n(5), o = r.Symbol;
            t.exports = o;
        },
        function(t, e, n) {
            function r(t, e) {
                for(var n = t.length; n--;)if (o(t[n][0], e)) return n;
                return -1;
            }
            var o = n(17);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e) {
                return o(t) ? t : i(t, e) ? [
                    t
                ] : a(u(t));
            }
            var o = n(2), i = n(130), a = n(154), u = n(165);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e) {
                var n = t.__data__;
                return o(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
            }
            var o = n(131);
            t.exports = r;
        },
        function(t, e) {
            function n(t, e) {
                return !!(e = null == e ? r : e) && ("number" == typeof t || o.test(t)) && t > -1 && t % 1 == 0 && t < e;
            }
            var r = 9007199254740991, o = /^(?:0|[1-9]\d*)$/;
            t.exports = n;
        },
        function(t, e, n) {
            var r = n(22), o = r(Object, "create");
            t.exports = o;
        },
        function(t, e) {
            function n(t, e) {
                return t === e || t !== t && e !== e;
            }
            t.exports = n;
        },
        function(t, e, n) {
            var r = n(96), o = n(6), i = Object.prototype, a = i.hasOwnProperty, u = i.propertyIsEnumerable, c = r(function() {
                return arguments;
            }()) ? r : function(t) {
                return o(t) && a.call(t, "callee") && !u.call(t, "callee");
            };
            t.exports = c;
        },
        function(t, e, n) {
            "use strict";
            function r(t, e) {
                return {
                    x: t,
                    y: e,
                    toVec2: function() {
                        return b.clone([
                            this.x,
                            this.y
                        ]);
                    },
                    toVec3: function() {
                        return E.clone([
                            this.x,
                            this.y,
                            1
                        ]);
                    },
                    round: function() {
                        return this.x = this.x > 0 ? Math.floor(this.x + .5) : Math.floor(this.x - .5), this.y = this.y > 0 ? Math.floor(this.y + .5) : Math.floor(this.y - .5), this;
                    }
                };
            }
            function o(t, e, n) {
                n || (n = t);
                for(var r = t.data, o = r.length, i = n.data; o--;)i[o] = r[o] < e ? 1 : 0;
            }
            function i(t, e) {
                e || (e = 8);
                for(var n = t.data, r = n.length, o = 8 - e, i = 1 << e, a = new Int32Array(i); r--;)a[n[r] >> o]++;
                return a;
            }
            function a(t, e) {
                function n(t, e) {
                    var n, r = 0;
                    for(n = t; n <= e; n++)r += a[n];
                    return r;
                }
                function r(t, e) {
                    var n, r = 0;
                    for(n = t; n <= e; n++)r += n * a[n];
                    return r;
                }
                function o() {
                    var o, u, c, s, f, l, d, h = [
                        0
                    ], p = (1 << e) - 1;
                    for(a = i(t, e), s = 1; s < p; s++)o = n(0, s), u = n(s + 1, p), c = o * u, 0 === c && (c = 1), f = r(0, s) * u, l = r(s + 1, p) * o, d = f - l, h[s] = d * d / c;
                    return x.a.maxIndex(h);
                }
                e || (e = 8);
                var a, u = 8 - e;
                return o() << u;
            }
            function u(t, e) {
                var n = a(t);
                return o(t, n, e), n;
            }
            function c(t, e, n) {
                function r(t) {
                    var e = !1;
                    for(i = 0; i < c.length; i++)a = c[i], a.fits(t) && (a.add(t), e = !0);
                    return e;
                }
                var o, i, a, u, c = [];
                for(n || (n = "rad"), o = 0; o < t.length; o++)u = m.a.createPoint(t[o], o, n), r(u) || c.push(m.a.create(u, e));
                return c;
            }
            function s(t, e, n) {
                var r, o, i, a, u = 0, c = 0, s = [];
                for(r = 0; r < e; r++)s[r] = {
                    score: 0,
                    item: null
                };
                for(r = 0; r < t.length; r++)if ((o = n.apply(this, [
                    t[r]
                ])) > c) for(i = s[u], i.score = o, i.item = t[r], c = Number.MAX_VALUE, a = 0; a < e; a++)s[a].score < c && (c = s[a].score, u = a);
                return s;
            }
            function f(t, e, n) {
                for(var r, o = 0, i = e.x, a = Math.floor(t.length / 4), u = e.x / 2, c = 0, s = e.x; i < a;){
                    for(r = 0; r < u; r++)n[c] = (.299 * t[4 * o + 0] + .587 * t[4 * o + 1] + .114 * t[4 * o + 2] + (.299 * t[4 * (o + 1) + 0] + .587 * t[4 * (o + 1) + 1] + .114 * t[4 * (o + 1) + 2]) + (.299 * t[4 * i + 0] + .587 * t[4 * i + 1] + .114 * t[4 * i + 2]) + (.299 * t[4 * (i + 1) + 0] + .587 * t[4 * (i + 1) + 1] + .114 * t[4 * (i + 1) + 2])) / 4, c++, o += 2, i += 2;
                    o += s, i += s;
                }
            }
            function l(t, e, n) {
                var r, o = t.length / 4 | 0;
                if (n && n.singleChannel === !0) for(r = 0; r < o; r++)e[r] = t[4 * r + 0];
                else for(r = 0; r < o; r++)e[r] = .299 * t[4 * r + 0] + .587 * t[4 * r + 1] + .114 * t[4 * r + 2];
            }
            function d(t, e) {
                for(var n = t.data, r = t.size.x, o = e.data, i = 0, a = r, u = n.length, c = r / 2, s = 0; a < u;){
                    for(var f = 0; f < c; f++)o[s] = Math.floor((n[i] + n[i + 1] + n[a] + n[a + 1]) / 4), s++, i += 2, a += 2;
                    i += r, a += r;
                }
            }
            function h(t, e) {
                var n = t[0], r = t[1], o = t[2], i = o * r, a = i * (1 - Math.abs(n / 60 % 2 - 1)), u = o - i, c = 0, s = 0, f = 0;
                return e = e || [
                    0,
                    0,
                    0
                ], n < 60 ? (c = i, s = a) : n < 120 ? (c = a, s = i) : n < 180 ? (s = i, f = a) : n < 240 ? (s = a, f = i) : n < 300 ? (c = a, f = i) : n < 360 && (c = i, f = a), e[0] = 255 * (c + u) | 0, e[1] = 255 * (s + u) | 0, e[2] = 255 * (f + u) | 0, e;
            }
            function p(t) {
                var e, n = [], r = [];
                for(e = 1; e < Math.sqrt(t) + 1; e++)t % e == 0 && (r.push(e), e !== t / e && n.unshift(Math.floor(t / e)));
                return r.concat(n);
            }
            function v(t, e) {
                for(var n = 0, r = 0, o = []; n < t.length && r < e.length;)t[n] === e[r] ? (o.push(t[n]), n++, r++) : t[n] > e[r] ? r++ : n++;
                return o;
            }
            function _(t, e) {
                function n(t) {
                    for(var e = 0, n = t[Math.floor(t.length / 2)]; e < t.length - 1 && t[e] < d;)e++;
                    return e > 0 && (n = Math.abs(t[e] - d) > Math.abs(t[e - 1] - d) ? t[e - 1] : t[e]), d / n < c[f + 1] / c[f] && d / n > c[f - 1] / c[f] ? {
                        x: n,
                        y: n
                    } : null;
                }
                var r, o = p(e.x), i = p(e.y), a = Math.max(e.x, e.y), u = v(o, i), c = [
                    8,
                    10,
                    15,
                    20,
                    32,
                    60,
                    80
                ], s = {
                    "x-small": 5,
                    small: 4,
                    medium: 3,
                    large: 2,
                    "x-large": 1
                }, f = s[t] || s.medium, l = c[f], d = Math.floor(a / l);
                return r = n(u), r || (r = n(p(a))) || (r = n(p(d * l))), r;
            }
            function g(t) {
                return {
                    value: parseFloat(t),
                    unit: (t.indexOf("%"), t.length, "%")
                };
            }
            function y(t, e, n) {
                var r = {
                    width: t,
                    height: e
                }, o = Object.keys(n).reduce(function(t, e) {
                    var o = n[e], i = g(o), a = C[e](i, r);
                    return t[e] = a, t;
                }, {});
                return {
                    sx: o.left,
                    sy: o.top,
                    sw: o.right - o.left,
                    sh: o.bottom - o.top
                };
            }
            var m = n(50), x = n(3);
            e.b = r, e.f = u, e.g = c, e.h = s, e.c = f, e.d = l, e.i = d, e.a = h, e.e = _, e.j = y;
            var b = {
                clone: n(7)
            }, E = {
                clone: n(83)
            }, C = {
                top: function(t, e) {
                    if ("%" === t.unit) return Math.floor(e.height * (t.value / 100));
                },
                right: function(t, e) {
                    if ("%" === t.unit) return Math.floor(e.width - e.width * (t.value / 100));
                },
                bottom: function(t, e) {
                    if ("%" === t.unit) return Math.floor(e.height - e.height * (t.value / 100));
                },
                left: function(t, e) {
                    if ("%" === t.unit) return Math.floor(e.width * (t.value / 100));
                }
            };
        },
        function(t, e, n) {
            "use strict";
            function r(t, e, n, r) {
                e ? this.data = e : n ? (this.data = new n(t.x * t.y), n === Array && r && a.a.init(this.data, 0)) : (this.data = new Uint8Array(t.x * t.y), Uint8Array === Array && r && a.a.init(this.data, 0)), this.size = t;
            }
            var o = n(53), i = n(19), a = n(3), u = {
                clone: n(7)
            };
            r.prototype.inImageWithBorder = function(t, e) {
                return t.x >= e && t.y >= e && t.x < this.size.x - e && t.y < this.size.y - e;
            }, r.sample = function(t, e, n) {
                var r = Math.floor(e), o = Math.floor(n), i = t.size.x, a = o * t.size.x + r, u = t.data[a + 0], c = t.data[a + 1], s = t.data[a + i], f = t.data[a + i + 1], l = u - c;
                return e -= r, n -= o, Math.floor(e * (n * (l - s + f) - l) + n * (s - u) + u);
            }, r.clearArray = function(t) {
                for(var e = t.length; e--;)t[e] = 0;
            }, r.prototype.subImage = function(t, e) {
                return new o.a(t, e, this);
            }, r.prototype.subImageAsCopy = function(t, e) {
                var n, r, o = t.size.y, i = t.size.x;
                for(n = 0; n < i; n++)for(r = 0; r < o; r++)t.data[r * i + n] = this.data[(e.y + r) * this.size.x + e.x + n];
            }, r.prototype.copyTo = function(t) {
                for(var e = this.data.length, n = this.data, r = t.data; e--;)r[e] = n[e];
            }, r.prototype.get = function(t, e) {
                return this.data[e * this.size.x + t];
            }, r.prototype.getSafe = function(t, e) {
                var n;
                if (!this.indexMapping) {
                    for(this.indexMapping = {
                        x: [],
                        y: []
                    }, n = 0; n < this.size.x; n++)this.indexMapping.x[n] = n, this.indexMapping.x[n + this.size.x] = n;
                    for(n = 0; n < this.size.y; n++)this.indexMapping.y[n] = n, this.indexMapping.y[n + this.size.y] = n;
                }
                return this.data[this.indexMapping.y[e + this.size.y] * this.size.x + this.indexMapping.x[t + this.size.x]];
            }, r.prototype.set = function(t, e, n) {
                return this.data[e * this.size.x + t] = n, this;
            }, r.prototype.zeroBorder = function() {
                var t, e = this.size.x, n = this.size.y, r = this.data;
                for(t = 0; t < e; t++)r[t] = r[(n - 1) * e + t] = 0;
                for(t = 1; t < n - 1; t++)r[t * e] = r[t * e + (e - 1)] = 0;
            }, r.prototype.invert = function() {
                for(var t = this.data, e = t.length; e--;)t[e] = t[e] ? 0 : 1;
            }, r.prototype.convolve = function(t) {
                var e, n, r, o, i = t.length / 2 | 0, a = 0;
                for(n = 0; n < this.size.y; n++)for(e = 0; e < this.size.x; e++){
                    for(a = 0, o = -i; o <= i; o++)for(r = -i; r <= i; r++)a += t[o + i][r + i] * this.getSafe(e + r, n + o);
                    this.data[n * this.size.x + e] = a;
                }
            }, r.prototype.moments = function(t) {
                var e, n, r, o, i, a, c, s, f, l, d, h, p = this.data, v = this.size.y, _ = this.size.x, g = [], y = [], m = Math.PI, x = m / 4;
                if (t <= 0) return y;
                for(i = 0; i < t; i++)g[i] = {
                    m00: 0,
                    m01: 0,
                    m10: 0,
                    m11: 0,
                    m02: 0,
                    m20: 0,
                    theta: 0,
                    rad: 0
                };
                for(n = 0; n < v; n++)for(o = n * n, e = 0; e < _; e++)(r = p[n * _ + e]) > 0 && (a = g[r - 1], a.m00 += 1, a.m01 += n, a.m10 += e, a.m11 += e * n, a.m02 += o, a.m20 += e * e);
                for(i = 0; i < t; i++)a = g[i], isNaN(a.m00) || 0 === a.m00 || (l = a.m10 / a.m00, d = a.m01 / a.m00, c = a.m11 / a.m00 - l * d, s = a.m02 / a.m00 - d * d, f = a.m20 / a.m00 - l * l, h = (s - f) / (2 * c), h = .5 * Math.atan(h) + (c >= 0 ? x : -x) + m, a.theta = (180 * h / m + 90) % 180 - 90, a.theta < 0 && (a.theta += 180), a.rad = h > m ? h - m : h, a.vec = u.clone([
                    Math.cos(h),
                    Math.sin(h)
                ]), y.push(a));
                return y;
            }, r.prototype.show = function(t, e) {
                var n, r, o, i, a, u, c;
                for(e || (e = 1), n = t.getContext("2d"), t.width = this.size.x, t.height = this.size.y, r = n.getImageData(0, 0, t.width, t.height), o = r.data, i = 0, c = 0; c < this.size.y; c++)for(u = 0; u < this.size.x; u++)a = c * this.size.x + u, i = this.get(u, c) * e, o[4 * a + 0] = i, o[4 * a + 1] = i, o[4 * a + 2] = i, o[4 * a + 3] = 255;
                n.putImageData(r, 0, 0);
            }, r.prototype.overlay = function(t, e, r) {
                (!e || e < 0 || e > 360) && (e = 360);
                for(var o = [
                    0,
                    1,
                    1
                ], a = [
                    0,
                    0,
                    0
                ], u = [
                    255,
                    255,
                    255
                ], c = [
                    0,
                    0,
                    0
                ], s = [], f = t.getContext("2d"), l = f.getImageData(r.x, r.y, this.size.x, this.size.y), d = l.data, h = this.data.length; h--;)o[0] = this.data[h] * e, s = o[0] <= 0 ? u : o[0] >= 360 ? c : n.i(i.a)(o, a), d[4 * h + 0] = s[0], d[4 * h + 1] = s[1], d[4 * h + 2] = s[2], d[4 * h + 3] = 255;
                f.putImageData(l, r.x, r.y);
            }, e.a = r;
        },
        function(t, e, n) {
            function r(t, e, n) {
                "__proto__" == e && o ? o(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : t[e] = n;
            }
            var o = n(37);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e) {
                var n = i(t, e);
                return o(n) ? n : void 0;
            }
            var o = n(97), i = n(120);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                if ("string" == typeof t || o(t)) return t;
                var e = t + "";
                return "0" == e && 1 / t == -i ? "-0" : e;
            }
            var o = n(27), i = 1 / 0;
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                return null != t && i(t.length) && !o(t);
            }
            var o = n(25), i = n(26);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                if (!i(t)) return !1;
                var e = o(t);
                return e == u || e == c || e == a || e == s;
            }
            var o = n(8), i = n(0), a = "[object AsyncFunction]", u = "[object Function]", c = "[object GeneratorFunction]", s = "[object Proxy]";
            t.exports = r;
        },
        function(t, e) {
            function n(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r;
            }
            var r = 9007199254740991;
            t.exports = n;
        },
        function(t, e, n) {
            function r(t) {
                return "symbol" == typeof t || i(t) && o(t) == a;
            }
            var o = n(8), i = n(6), a = "[object Symbol]";
            t.exports = r;
        },
        function(t, e, n) {
            var r = n(100), o = n(116), i = o(function(t, e, n) {
                r(t, e, n);
            });
            t.exports = i;
        },
        function(t, e) {
            t.exports = function(t) {
                return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return t.l;
                    }
                }), Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function() {
                        return t.i;
                    }
                }), t.webpackPolyfill = 1), t;
            };
        },
        function(t, e, n) {
            "use strict";
            var r = {
                searchDirections: [
                    [
                        0,
                        1
                    ],
                    [
                        1,
                        1
                    ],
                    [
                        1,
                        0
                    ],
                    [
                        1,
                        -1
                    ],
                    [
                        0,
                        -1
                    ],
                    [
                        -1,
                        -1
                    ],
                    [
                        -1,
                        0
                    ],
                    [
                        -1,
                        1
                    ]
                ],
                create: function(t, e) {
                    function n(t, e, n, r) {
                        var o, f, l;
                        for(o = 0; o < 7; o++){
                            if (f = t.cy + c[t.dir][0], l = t.cx + c[t.dir][1], i = f * s + l, a[i] === e && (0 === u[i] || u[i] === n)) return u[i] = n, t.cy = f, t.cx = l, !0;
                            0 === u[i] && (u[i] = r), t.dir = (t.dir + 1) % 8;
                        }
                        return !1;
                    }
                    function r(t, e, n) {
                        return {
                            dir: n,
                            x: t,
                            y: e,
                            next: null,
                            prev: null
                        };
                    }
                    function o(t, e, o, i, a) {
                        var u, c, s, f = null, l = {
                            cx: e,
                            cy: t,
                            dir: 0
                        };
                        if (n(l, i, o, a)) {
                            f = r(e, t, l.dir), u = f, s = l.dir, c = r(l.cx, l.cy, 0), c.prev = u, u.next = c, c.next = null, u = c;
                            do l.dir = (l.dir + 6) % 8, n(l, i, o, a), s !== l.dir ? (u.dir = l.dir, c = r(l.cx, l.cy, 0), c.prev = u, u.next = c, c.next = null, u = c) : (u.dir = s, u.x = l.cx, u.y = l.cy), s = l.dir;
                            while (l.cx !== e || l.cy !== t);
                            f.prev = u.prev, u.prev.next = f;
                        }
                        return f;
                    }
                    var i, a = t.data, u = e.data, c = this.searchDirections, s = t.size.x;
                    return {
                        trace: function(t, e, r, o) {
                            return n(t, e, r, o);
                        },
                        contourTracing: function(t, e, n, r, i) {
                            return o(t, e, n, r, i);
                        }
                    };
                }
            };
            e.a = r;
        },
        function(t, e, n) {
            "use strict";
            function r() {
                o.a.call(this);
            }
            var o = n(1), i = n(3), a = {
                ALPHABETH_STRING: {
                    value: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%"
                },
                ALPHABET: {
                    value: [
                        48,
                        49,
                        50,
                        51,
                        52,
                        53,
                        54,
                        55,
                        56,
                        57,
                        65,
                        66,
                        67,
                        68,
                        69,
                        70,
                        71,
                        72,
                        73,
                        74,
                        75,
                        76,
                        77,
                        78,
                        79,
                        80,
                        81,
                        82,
                        83,
                        84,
                        85,
                        86,
                        87,
                        88,
                        89,
                        90,
                        45,
                        46,
                        32,
                        42,
                        36,
                        47,
                        43,
                        37
                    ]
                },
                CHARACTER_ENCODINGS: {
                    value: [
                        52,
                        289,
                        97,
                        352,
                        49,
                        304,
                        112,
                        37,
                        292,
                        100,
                        265,
                        73,
                        328,
                        25,
                        280,
                        88,
                        13,
                        268,
                        76,
                        28,
                        259,
                        67,
                        322,
                        19,
                        274,
                        82,
                        7,
                        262,
                        70,
                        22,
                        385,
                        193,
                        448,
                        145,
                        400,
                        208,
                        133,
                        388,
                        196,
                        148,
                        168,
                        162,
                        138,
                        42
                    ]
                },
                ASTERISK: {
                    value: 148
                },
                FORMAT: {
                    value: "code_39",
                    writeable: !1
                }
            };
            r.prototype = Object.create(o.a.prototype, a), r.prototype.constructor = r, r.prototype._decode = function() {
                var t, e, n, r, o = this, a = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ], u = [], c = o._findStart();
                if (!c) return null;
                r = o._nextSet(o._row, c.end);
                do {
                    if (a = o._toCounters(r, a), (n = o._toPattern(a)) < 0) return null;
                    if ((t = o._patternToChar(n)) < 0) return null;
                    u.push(t), e = r, r += i.a.sum(a), r = o._nextSet(o._row, r);
                }while ("*" !== t);
                return u.pop(), u.length && o._verifyTrailingWhitespace(e, r, a) ? {
                    code: u.join(""),
                    start: c.start,
                    end: r,
                    startInfo: c,
                    decodedCodes: u
                } : null;
            }, r.prototype._verifyTrailingWhitespace = function(t, e, n) {
                var r = i.a.sum(n);
                return 3 * (e - t - r) >= r;
            }, r.prototype._patternToChar = function(t) {
                var e, n = this;
                for(e = 0; e < n.CHARACTER_ENCODINGS.length; e++)if (n.CHARACTER_ENCODINGS[e] === t) return String.fromCharCode(n.ALPHABET[e]);
                return -1;
            }, r.prototype._findNextWidth = function(t, e) {
                var n, r = Number.MAX_VALUE;
                for(n = 0; n < t.length; n++)t[n] < r && t[n] > e && (r = t[n]);
                return r;
            }, r.prototype._toPattern = function(t) {
                for(var e, n, r = t.length, o = 0, i = r, a = 0, u = this; i > 3;){
                    for(o = u._findNextWidth(t, o), i = 0, e = 0, n = 0; n < r; n++)t[n] > o && (e |= 1 << r - 1 - n, i++, a += t[n]);
                    if (3 === i) {
                        for(n = 0; n < r && i > 0; n++)if (t[n] > o && (i--, 2 * t[n] >= a)) return -1;
                        return e;
                    }
                }
                return -1;
            }, r.prototype._findStart = function() {
                var t, e, n, r = this, o = r._nextSet(r._row), i = o, a = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ], u = 0, c = !1;
                for(t = o; t < r._row.length; t++)if (r._row[t] ^ c) a[u]++;
                else {
                    if (u === a.length - 1) {
                        if (r._toPattern(a) === r.ASTERISK && (n = Math.floor(Math.max(0, i - (t - i) / 4)), r._matchRange(n, i, 0))) return {
                            start: i,
                            end: t
                        };
                        for(i += a[0] + a[1], e = 0; e < 7; e++)a[e] = a[e + 2];
                        a[7] = 0, a[8] = 0, u--;
                    } else u++;
                    a[u] = 1, c = !c;
                }
                return null;
            }, e.a = r;
        },
        function(t, e) {
            function n(t, e) {
                return t[0] * e[0] + t[1] * e[1];
            }
            t.exports = n;
        },
        function(t, e, n) {
            var r = n(22), o = n(5), i = r(o, "Map");
            t.exports = i;
        },
        function(t, e, n) {
            function r(t) {
                var e = -1, n = null == t ? 0 : t.length;
                for(this.clear(); ++e < n;){
                    var r = t[e];
                    this.set(r[0], r[1]);
                }
            }
            var o = n(138), i = n(139), a = n(140), u = n(141), c = n(142);
            r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r;
        },
        function(t, e, n) {
            function r(t, e, n) {
                (void 0 === n || i(t[e], n)) && (void 0 !== n || e in t) || o(t, e, n);
            }
            var o = n(21), i = n(17);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e, n) {
                var r = t[e];
                u.call(t, e) && i(r, n) && (void 0 !== n || e in t) || o(t, e, n);
            }
            var o = n(21), i = n(17), a = Object.prototype, u = a.hasOwnProperty;
            t.exports = r;
        },
        function(t, e, n) {
            var r = n(22), o = function() {
                try {
                    var t = r(Object, "defineProperty");
                    return t({}, "", {}), t;
                } catch (t) {}
            }();
            t.exports = o;
        },
        function(t, e, n) {
            (function(e) {
                var n = "object" == typeof e && e && e.Object === Object && e;
                t.exports = n;
            }).call(e, n(47));
        },
        function(t, e, n) {
            var r = n(147), o = r(Object.getPrototypeOf, Object);
            t.exports = o;
        },
        function(t, e) {
            function n(t) {
                var e = t && t.constructor;
                return t === ("function" == typeof e && e.prototype || r);
            }
            var r = Object.prototype;
            t.exports = n;
        },
        function(t, e, n) {
            function r(t, e, n) {
                return e = i(void 0 === e ? t.length - 1 : e, 0), function() {
                    for(var r = arguments, a = -1, u = i(r.length - e, 0), c = Array(u); ++a < u;)c[a] = r[e + a];
                    a = -1;
                    for(var s = Array(e + 1); ++a < e;)s[a] = r[a];
                    return s[e] = n(c), o(t, this, s);
                };
            }
            var o = n(87), i = Math.max;
            t.exports = r;
        },
        function(t, e, n) {
            var r = n(106), o = n(148), i = o(r);
            t.exports = i;
        },
        function(t, e) {
            function n(t) {
                return t;
            }
            t.exports = n;
        },
        function(t, e, n) {
            (function(t) {
                var r = n(5), o = n(163), i = "object" == typeof e && e && !e.nodeType && e, a = i && "object" == typeof t && t && !t.nodeType && t, u = a && a.exports === i, c = u ? r.Buffer : void 0, s = c ? c.isBuffer : void 0, f = s || o;
                t.exports = f;
            }).call(e, n(29)(t));
        },
        function(t, e, n) {
            var r = n(98), o = n(109), i = n(145), a = i && i.isTypedArray, u = a ? o(a) : r;
            t.exports = u;
        },
        function(t, e, n) {
            function r(t) {
                return a(t) ? o(t, !0) : i(t);
            }
            var o = n(88), i = n(99), a = n(24);
            t.exports = r;
        },
        function(t, e) {
            var n;
            n = function() {
                return this;
            }();
            try {
                n = n || Function("return this")() || (0, eval)("this");
            } catch (t) {
                "object" == typeof window && (n = window);
            }
            t.exports = n;
        },
        function(e, n, r) {
            "use strict";
            function o(t) {
                f(t), P = k.a.create($.decoder, S);
            }
            function i(t) {
                var e;
                if ("VideoStream" === $.inputStream.type) e = document.createElement("video"), R = H.a.createVideoStream(e);
                else if ("ImageStream" === $.inputStream.type) R = H.a.createImageStream();
                else if ("LiveStream" === $.inputStream.type) {
                    var n = a();
                    n && ((e = n.querySelector("video")) || (e = document.createElement("video"), n.appendChild(e))), R = H.a.createLiveStream(e), F.a.request(e, $.inputStream.constraints).then(function() {
                        R.trigger("canrecord");
                    }).catch(function(e) {
                        return t(e);
                    });
                }
                R.setAttribute("preload", "auto"), R.setInputStream($.inputStream), R.addEventListener("canrecord", u.bind(void 0, t));
            }
            function a() {
                var t = $.inputStream.target;
                if (t && t.nodeName && 1 === t.nodeType) return t;
                var e = "string" == typeof t ? t : "#interactive.viewport";
                return document.querySelector(e);
            }
            function u(t) {
                U.a.checkImageConstraints(R, $.locator), s($), w = V.a.create(R, K.dom.image), A($.numOfWorkers, function() {
                    0 === $.numOfWorkers && o(), c(t);
                });
            }
            function c(t) {
                R.play(), t();
            }
            function s() {
                if ("undefined" != typeof document) {
                    var t = a();
                    if (K.dom.image = document.querySelector("canvas.imgBuffer"), K.dom.image || (K.dom.image = document.createElement("canvas"), K.dom.image.className = "imgBuffer", t && "ImageStream" === $.inputStream.type && t.appendChild(K.dom.image)), K.ctx.image = K.dom.image.getContext("2d"), K.dom.image.width = R.getCanvasSize().x, K.dom.image.height = R.getCanvasSize().y, K.dom.overlay = document.querySelector("canvas.drawingBuffer"), !K.dom.overlay) {
                        K.dom.overlay = document.createElement("canvas"), K.dom.overlay.className = "drawingBuffer", t && t.appendChild(K.dom.overlay);
                        var e = document.createElement("br");
                        e.setAttribute("clear", "all"), t && t.appendChild(e);
                    }
                    K.ctx.overlay = K.dom.overlay.getContext("2d"), K.dom.overlay.width = R.getCanvasSize().x, K.dom.overlay.height = R.getCanvasSize().y;
                }
            }
            function f(t) {
                S = t ? t : new j.a({
                    x: R.getWidth(),
                    y: R.getHeight()
                }), D = [
                    q.clone([
                        0,
                        0
                    ]),
                    q.clone([
                        0,
                        S.size.y
                    ]),
                    q.clone([
                        S.size.x,
                        S.size.y
                    ]),
                    q.clone([
                        S.size.x,
                        0
                    ])
                ], U.a.init(S, $.locator);
            }
            function l() {
                return $.locate ? U.a.locate() : [
                    [
                        q.clone(D[0]),
                        q.clone(D[1]),
                        q.clone(D[2]),
                        q.clone(D[3])
                    ]
                ];
            }
            function d(t) {
                function e(t) {
                    for(var e = t.length; e--;)t[e][0] += i, t[e][1] += a;
                }
                function n(t) {
                    t[0].x += i, t[0].y += a, t[1].x += i, t[1].y += a;
                }
                var r, o = R.getTopRight(), i = o.x, a = o.y;
                if (0 !== i || 0 !== a) {
                    if (t.barcodes) for(r = 0; r < t.barcodes.length; r++)d(t.barcodes[r]);
                    if (t.line && 2 === t.line.length && n(t.line), t.box && e(t.box), t.boxes && t.boxes.length > 0) for(r = 0; r < t.boxes.length; r++)e(t.boxes[r]);
                }
            }
            function h(t, e) {
                e && I && (t.barcodes ? t.barcodes.filter(function(t) {
                    return t.codeResult;
                }).forEach(function(t) {
                    return h(t, e);
                }) : t.codeResult && I.addResult(e, R.getCanvasSize(), t.codeResult));
            }
            function p(t) {
                return t && (t.barcodes ? t.barcodes.some(function(t) {
                    return t.codeResult;
                }) : t.codeResult);
            }
            function v(t, e) {
                var n = t;
                t && Q && (d(t), h(t, e), n = t.barcodes || t), L.a.publish("processed", n), p(t) && L.a.publish("detected", n);
            }
            function _() {
                var t, e;
                e = l(), e ? (t = P.decodeFromBoundingBoxes(e), t = t || {}, t.boxes = e, v(t, S.data)) : v();
            }
            function g() {
                var t;
                if (Q) {
                    if (Y.length > 0) {
                        if (!(t = Y.filter(function(t) {
                            return !t.busy;
                        })[0])) return;
                        w.attachData(t.imageData);
                    } else w.attachData(S.data);
                    w.grab() && (t ? (t.busy = !0, t.worker.postMessage({
                        cmd: "process",
                        imageData: t.imageData
                    }, [
                        t.imageData.buffer
                    ])) : _());
                } else _();
            }
            function y() {
                var t = null, e = 1e3 / ($.frequency || 60);
                T = !1, function n(r) {
                    t = t || r, T || (r >= t && (t += e, g()), window.requestAnimFrame(n));
                }(performance.now());
            }
            function m() {
                Q && "LiveStream" === $.inputStream.type ? y() : g();
            }
            function x(t) {
                var e, n = {
                    worker: void 0,
                    imageData: new Uint8Array(R.getWidth() * R.getHeight()),
                    busy: !0
                };
                e = C(), n.worker = new Worker(e), n.worker.onmessage = function(r) {
                    if ("initialized" === r.data.event) return URL.revokeObjectURL(e), n.busy = !1, n.imageData = new Uint8Array(r.data.imageData), t(n);
                    "processed" === r.data.event ? (n.imageData = new Uint8Array(r.data.imageData), n.busy = !1, v(r.data.result, n.imageData)) : r.data.event;
                }, n.worker.postMessage({
                    cmd: "init",
                    size: {
                        x: R.getWidth(),
                        y: R.getHeight()
                    },
                    imageData: n.imageData,
                    config: b($)
                }, [
                    n.imageData.buffer
                ]);
            }
            function b(t) {
                return X({}, t, {
                    inputStream: X({}, t.inputStream, {
                        target: null
                    })
                });
            }
            function E(t) {
                function e(t) {
                    self.postMessage({
                        event: "processed",
                        imageData: o.data,
                        result: t
                    }, [
                        o.data.buffer
                    ]);
                }
                function n() {
                    self.postMessage({
                        event: "initialized",
                        imageData: o.data
                    }, [
                        o.data.buffer
                    ]);
                }
                if (t) {
                    var r = t().default;
                    if (!r) return void self.postMessage({
                        event: "error",
                        message: "Quagga could not be created"
                    });
                }
                var o;
                self.onmessage = function(t) {
                    if ("init" === t.data.cmd) {
                        var i = t.data.config;
                        i.numOfWorkers = 0, o = new r.ImageWrapper({
                            x: t.data.size.x,
                            y: t.data.size.y
                        }, new Uint8Array(t.data.imageData)), r.init(i, n, o), r.onProcessed(e);
                    } else "process" === t.data.cmd ? (o.data = new Uint8Array(t.data.imageData), r.start()) : "setReaders" === t.data.cmd && r.setReaders(t.data.readers);
                };
            }
            function C() {
                var e, n;
                return void 0 !== t && (n = t), e = new Blob([
                    "(" + E.toString() + ")(" + n + ");"
                ], {
                    type: "text/javascript"
                }), window.URL.createObjectURL(e);
            }
            function O(t) {
                P ? P.setReaders(t) : Q && Y.length > 0 && Y.forEach(function(e) {
                    e.worker.postMessage({
                        cmd: "setReaders",
                        readers: t
                    });
                });
            }
            function A(t, e) {
                var n = t - Y.length;
                if (0 === n) return e && e();
                if (n < 0) return Y.slice(n).forEach(function(t) {
                    t.worker.terminate();
                }), Y = Y.slice(0, n), e && e();
                for(var r = function(n) {
                    Y.push(n), Y.length >= t && e && e();
                }, o = 0; o < n; o++)x(r);
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var R, w, T, S, D, P, I, M = r(28), N = r.n(M), z = r(54), j = (r.n(z), r(20)), U = r(64), k = r(57), L = r(51), F = r(59), W = r(9), B = r(49), G = r(55), H = r(63), V = r(61), X = Object.assign || function(t) {
                for(var e = 1; e < arguments.length; e++){
                    var n = arguments[e];
                    for(var r in n)Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
            }, q = {
                clone: r(7)
            }, K = {
                ctx: {
                    image: null,
                    overlay: null
                },
                dom: {
                    image: null,
                    overlay: null
                }
            }, Y = [], Q = !0, $ = {};
            n.default = {
                init: function(t, e, n) {
                    if ($ = N()({}, G.a, t), n) return Q = !1, o(n), e();
                    i(e);
                },
                start: function() {
                    m();
                },
                stop: function() {
                    T = !0, A(0), "LiveStream" === $.inputStream.type && (F.a.release(), R.clearEventHandlers());
                },
                pause: function() {
                    T = !0;
                },
                onDetected: function(t) {
                    L.a.subscribe("detected", t);
                },
                offDetected: function(t) {
                    L.a.unsubscribe("detected", t);
                },
                onProcessed: function(t) {
                    L.a.subscribe("processed", t);
                },
                offProcessed: function(t) {
                    L.a.unsubscribe("processed", t);
                },
                setReaders: function(t) {
                    O(t);
                },
                registerResultCollector: function(t) {
                    t && "function" == typeof t.addResult && (I = t);
                },
                canvas: K,
                decodeSingle: function(t, e) {
                    var n = this;
                    t = N()({
                        inputStream: {
                            type: "ImageStream",
                            sequence: !1,
                            size: 800,
                            src: t.src
                        },
                        numOfWorkers: 1,
                        locator: {
                            halfSample: !1
                        }
                    }, t), this.init(t, function() {
                        L.a.once("processed", function(t) {
                            n.stop(), e.call(null, t);
                        }, !0), m();
                    });
                },
                ImageWrapper: j.a,
                ImageDebug: W.a,
                ResultCollector: B.a,
                CameraAccess: F.a
            };
        },
        function(t, e, n) {
            "use strict";
            function r(t, e) {
                return !!e && e.some(function(e) {
                    return Object.keys(e).every(function(n) {
                        return e[n] === t[n];
                    });
                });
            }
            function o(t, e) {
                return "function" != typeof e || e(t);
            }
            var i = n(9);
            e.a = {
                create: function(t) {
                    function e(e) {
                        return c && e && !r(e, t.blacklist) && o(e, t.filter);
                    }
                    var n = document.createElement("canvas"), a = n.getContext("2d"), u = [], c = t.capacity || 20, s = t.capture === !0;
                    return {
                        addResult: function(t, r, o) {
                            var f = {};
                            e(o) && (c--, f.codeResult = o, s && (n.width = r.x, n.height = r.y, i.a.drawImage(t, r, a), f.frame = n.toDataURL()), u.push(f));
                        },
                        getResults: function() {
                            return u;
                        }
                    };
                }
            };
        },
        function(t, e, n) {
            "use strict";
            var r = {
                clone: n(7),
                dot: n(32)
            };
            e.a = {
                create: function(t, e) {
                    function n() {
                        o(t), i();
                    }
                    function o(t) {
                        c[t.id] = t, a.push(t);
                    }
                    function i() {
                        var t, e = 0;
                        for(t = 0; t < a.length; t++)e += a[t].rad;
                        u.rad = e / a.length, u.vec = r.clone([
                            Math.cos(u.rad),
                            Math.sin(u.rad)
                        ]);
                    }
                    var a = [], u = {
                        rad: 0,
                        vec: r.clone([
                            0,
                            0
                        ])
                    }, c = {};
                    return n(), {
                        add: function(t) {
                            c[t.id] || (o(t), i());
                        },
                        fits: function(t) {
                            return Math.abs(r.dot(t.point.vec, u.vec)) > e;
                        },
                        getPoints: function() {
                            return a;
                        },
                        getCenter: function() {
                            return u;
                        }
                    };
                },
                createPoint: function(t, e, n) {
                    return {
                        rad: t[n],
                        point: t,
                        id: e
                    };
                }
            };
        },
        function(t, e, n) {
            "use strict";
            e.a = function() {
                function t(t) {
                    return o[t] || (o[t] = {
                        subscribers: []
                    }), o[t];
                }
                function e() {
                    o = {};
                }
                function n(t, e) {
                    t.async ? setTimeout(function() {
                        t.callback(e);
                    }, 4) : t.callback(e);
                }
                function r(e, n, r) {
                    var o;
                    if ("function" == typeof n) o = {
                        callback: n,
                        async: r
                    };
                    else if (o = n, !o.callback) throw "Callback was not specified on options";
                    t(e).subscribers.push(o);
                }
                var o = {};
                return {
                    subscribe: function(t, e, n) {
                        return r(t, e, n);
                    },
                    publish: function(e, r) {
                        var o = t(e), i = o.subscribers;
                        i.filter(function(t) {
                            return !!t.once;
                        }).forEach(function(t) {
                            n(t, r);
                        }), o.subscribers = i.filter(function(t) {
                            return !t.once;
                        }), o.subscribers.forEach(function(t) {
                            n(t, r);
                        });
                    },
                    once: function(t, e, n) {
                        r(t, {
                            callback: e,
                            async: n,
                            once: !0
                        });
                    },
                    unsubscribe: function(n, r) {
                        var o;
                        n ? (o = t(n), o.subscribers = o && r ? o.subscribers.filter(function(t) {
                            return t.callback !== r;
                        }) : []) : e();
                    }
                };
            }();
        },
        function(t, e, n) {
            "use strict";
            function r() {
                return navigator.mediaDevices && "function" == typeof navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices() : Promise.reject(new Error("enumerateDevices is not defined"));
            }
            function o(t) {
                return navigator.mediaDevices && "function" == typeof navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia(t) : Promise.reject(new Error("getUserMedia is not defined"));
            }
            e.b = r, e.a = o;
        },
        function(t, e, n) {
            "use strict";
            function r(t, e, n) {
                n || (n = {
                    data: null,
                    size: e
                }), this.data = n.data, this.originalSize = n.size, this.I = n, this.from = t, this.size = e;
            }
            r.prototype.show = function(t, e) {
                var n, r, o, i, a, u, c;
                for(e || (e = 1), n = t.getContext("2d"), t.width = this.size.x, t.height = this.size.y, r = n.getImageData(0, 0, t.width, t.height), o = r.data, i = 0, a = 0; a < this.size.y; a++)for(u = 0; u < this.size.x; u++)c = a * this.size.x + u, i = this.get(u, a) * e, o[4 * c + 0] = i, o[4 * c + 1] = i, o[4 * c + 2] = i, o[4 * c + 3] = 255;
                r.data = o, n.putImageData(r, 0, 0);
            }, r.prototype.get = function(t, e) {
                return this.data[(this.from.y + e) * this.originalSize.x + this.from.x + t];
            }, r.prototype.updateData = function(t) {
                this.originalSize = t.size, this.data = t.data;
            }, r.prototype.updateFrom = function(t) {
                return this.from = t, this;
            }, e.a = r;
        },
        function(t, e) {
            "undefined" != typeof window && (window.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    window.setTimeout(t, 1e3 / 60);
                };
            }()), Math.imul = Math.imul || function(t, e) {
                var n = t >>> 16 & 65535, r = 65535 & t, o = e >>> 16 & 65535, i = 65535 & e;
                return r * i + (n * i + r * o << 16 >>> 0) | 0;
            }, "function" != typeof Object.assign && (Object.assign = function(t) {
                "use strict";
                if (null === t) throw new TypeError("Cannot convert undefined or null to object");
                for(var e = Object(t), n = 1; n < arguments.length; n++){
                    var r = arguments[n];
                    if (null !== r) for(var o in r)Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                }
                return e;
            });
        },
        function(t, e, n) {
            "use strict";
            var r = void 0;
            r = n(56), e.a = r;
        },
        function(t, e) {
            t.exports = {
                inputStream: {
                    name: "Live",
                    type: "LiveStream",
                    constraints: {
                        width: 640,
                        height: 480,
                        facingMode: "environment"
                    },
                    area: {
                        top: "0%",
                        right: "0%",
                        left: "0%",
                        bottom: "0%"
                    },
                    singleChannel: !1
                },
                locate: !0,
                numOfWorkers: 4,
                decoder: {
                    readers: [
                        "code_128_reader"
                    ]
                },
                locator: {
                    halfSample: !0,
                    patchSize: "medium"
                }
            };
        },
        function(t, e, n) {
            "use strict";
            var r = n(58), o = (n(9), n(69)), i = n(4), a = n(31), u = n(70), c = n(68), s = n(77), f = n(74), l = n(72), d = n(73), h = n(76), p = n(75), v = n(67), _ = n(71), g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }, y = {
                code_128_reader: o.a,
                ean_reader: i.a,
                ean_5_reader: d.a,
                ean_2_reader: l.a,
                ean_8_reader: f.a,
                code_39_reader: a.a,
                code_39_vin_reader: u.a,
                codabar_reader: c.a,
                upc_reader: s.a,
                upc_e_reader: h.a,
                i2of5_reader: p.a,
                "2of5_reader": v.a,
                code_93_reader: _.a
            };
            e.a = {
                create: function(t, e) {
                    function n() {}
                    function o() {
                        t.readers.forEach(function(t) {
                            var e, n = {}, r = [];
                            "object" === (void 0 === t ? "undefined" : g(t)) ? (e = t.format, n = t.config) : "string" == typeof t && (e = t), n.supplements && (r = n.supplements.map(function(t) {
                                return new y[t];
                            })), h.push(new y[e](n, r));
                        });
                    }
                    function i() {}
                    function a(t, n, r) {
                        function o(e) {
                            var r = {
                                y: e * Math.sin(n),
                                x: e * Math.cos(n)
                            };
                            t[0].y -= r.y, t[0].x -= r.x, t[1].y += r.y, t[1].x += r.x;
                        }
                        for(o(r); r > 1 && (!e.inImageWithBorder(t[0], 0) || !e.inImageWithBorder(t[1], 0));)r -= Math.ceil(r / 2), o(-r);
                        return t;
                    }
                    function u(t) {
                        return [
                            {
                                x: (t[1][0] - t[0][0]) / 2 + t[0][0],
                                y: (t[1][1] - t[0][1]) / 2 + t[0][1]
                            },
                            {
                                x: (t[3][0] - t[2][0]) / 2 + t[2][0],
                                y: (t[3][1] - t[2][1]) / 2 + t[2][1]
                            }
                        ];
                    }
                    function c(t) {
                        var n, o = null, i = r.a.getBarcodeLine(e, t[0], t[1]);
                        for(r.a.toBinaryLine(i), n = 0; n < h.length && null === o; n++)o = h[n].decodePattern(i.line);
                        return null === o ? null : {
                            codeResult: o,
                            barcodeLine: i
                        };
                    }
                    function s(t, e, n) {
                        var r, o, i, a = Math.sqrt(Math.pow(t[1][0] - t[0][0], 2) + Math.pow(t[1][1] - t[0][1], 2)), u = 16, s = null, f = Math.sin(n), l = Math.cos(n);
                        for(r = 1; r < u && null === s; r++)o = a / u * r * (r % 2 == 0 ? -1 : 1), i = {
                            y: o * f,
                            x: o * l
                        }, e[0].y += i.x, e[0].x -= i.y, e[1].y += i.x, e[1].x -= i.y, s = c(e);
                        return s;
                    }
                    function f(t) {
                        return Math.sqrt(Math.pow(Math.abs(t[1].y - t[0].y), 2) + Math.pow(Math.abs(t[1].x - t[0].x), 2));
                    }
                    function l(t) {
                        var e, n, r, o;
                        d.ctx.overlay;
                        return e = u(t), o = f(e), n = Math.atan2(e[1].y - e[0].y, e[1].x - e[0].x), null === (e = a(e, n, Math.floor(.1 * o))) ? null : (r = c(e), null === r && (r = s(t, e, n)), null === r ? null : {
                            codeResult: r.codeResult,
                            line: e,
                            angle: n,
                            pattern: r.barcodeLine.line,
                            threshold: r.barcodeLine.threshold
                        });
                    }
                    var d = {
                        ctx: {
                            frequency: null,
                            pattern: null,
                            overlay: null
                        },
                        dom: {
                            frequency: null,
                            pattern: null,
                            overlay: null
                        }
                    }, h = [];
                    return n(), o(), i(), {
                        decodeFromBoundingBox: function(t) {
                            return l(t);
                        },
                        decodeFromBoundingBoxes: function(e) {
                            var n, r, o = [], i = t.multiple;
                            for(n = 0; n < e.length; n++){
                                var a = e[n];
                                if (r = l(a) || {}, r.box = a, i) o.push(r);
                                else if (r.codeResult) return r;
                            }
                            if (i) return {
                                barcodes: o
                            };
                        },
                        setReaders: function(e) {
                            t.readers = e, h.length = 0, o();
                        }
                    };
                }
            };
        },
        function(t, e, n) {
            "use strict";
            var r = (n(20), {}), o = {
                DIR: {
                    UP: 1,
                    DOWN: -1
                }
            };
            r.getBarcodeLine = function(t, e, n) {
                function r(t, e) {
                    l = y[e * m + t], x += l, b = l < b ? l : b, E = l > E ? l : E, g.push(l);
                }
                var o, i, a, u, c, s, f, l, d = 0 | e.x, h = 0 | e.y, p = 0 | n.x, v = 0 | n.y, _ = Math.abs(v - h) > Math.abs(p - d), g = [], y = t.data, m = t.size.x, x = 0, b = 255, E = 0;
                for(_ && (s = d, d = h, h = s, s = p, p = v, v = s), d > p && (s = d, d = p, p = s, s = h, h = v, v = s), o = p - d, i = Math.abs(v - h), a = o / 2 | 0, c = h, u = h < v ? 1 : -1, f = d; f < p; f++)_ ? r(c, f) : r(f, c), (a -= i) < 0 && (c += u, a += o);
                return {
                    line: g,
                    min: b,
                    max: E
                };
            }, r.toBinaryLine = function(t) {
                var e, n, r, i, a, u, c = t.min, s = t.max, f = t.line, l = c + (s - c) / 2, d = [], h = (s - c) / 12, p = -h;
                for(r = f[0] > l ? o.DIR.UP : o.DIR.DOWN, d.push({
                    pos: 0,
                    val: f[0]
                }), a = 0; a < f.length - 2; a++)e = f[a + 1] - f[a], n = f[a + 2] - f[a + 1], i = e + n < p && f[a + 1] < 1.5 * l ? o.DIR.DOWN : e + n > h && f[a + 1] > .5 * l ? o.DIR.UP : r, r !== i && (d.push({
                    pos: a,
                    val: f[a]
                }), r = i);
                for(d.push({
                    pos: f.length,
                    val: f[f.length - 1]
                }), u = d[0].pos; u < d[1].pos; u++)f[u] = f[u] > l ? 0 : 1;
                for(a = 1; a < d.length - 1; a++)for(h = d[a + 1].val > d[a].val ? d[a].val + (d[a + 1].val - d[a].val) / 3 * 2 | 0 : d[a + 1].val + (d[a].val - d[a + 1].val) / 3 | 0, u = d[a].pos; u < d[a + 1].pos; u++)f[u] = f[u] > h ? 0 : 1;
                return {
                    line: f,
                    threshold: h
                };
            }, r.debug = {
                printFrequency: function(t, e) {
                    var n, r = e.getContext("2d");
                    for(e.width = t.length, e.height = 256, r.beginPath(), r.strokeStyle = "blue", n = 0; n < t.length; n++)r.moveTo(n, 255), r.lineTo(n, 255 - t[n]);
                    r.stroke(), r.closePath();
                },
                printPattern: function(t, e) {
                    var n, r = e.getContext("2d");
                    for(e.width = t.length, r.fillColor = "black", n = 0; n < t.length; n++)1 === t[n] && r.fillRect(n, 0, 1, 100);
                }
            }, e.a = r;
        },
        function(t, e, n) {
            "use strict";
            function r(t) {
                return new Promise(function(e, n) {
                    function r() {
                        o > 0 ? t.videoWidth > 10 && t.videoHeight > 10 ? e() : window.setTimeout(r, 500) : n("Unable to play video stream. Is webcam working?"), o--;
                    }
                    var o = 10;
                    r();
                });
            }
            function o(t, e) {
                return n.i(d.a)(e).then(function(e) {
                    return new Promise(function(n) {
                        s = e, t.setAttribute("autoplay", !0), t.setAttribute("muted", !0), t.setAttribute("playsinline", !0), t.srcObject = e, t.addEventListener("loadedmetadata", function() {
                            t.play(), n();
                        });
                    });
                }).then(r.bind(null, t));
            }
            function i(t) {
                var e = l()(t, [
                    "width",
                    "height",
                    "facingMode",
                    "aspectRatio",
                    "deviceId"
                ]);
                return void 0 !== t.minAspectRatio && t.minAspectRatio > 0 && (e.aspectRatio = t.minAspectRatio, console.log("WARNING: Constraint 'minAspectRatio' is deprecated; Use 'aspectRatio' instead")), void 0 !== t.facing && (e.facingMode = t.facing, console.log("WARNING: Constraint 'facing' is deprecated. Use 'facingMode' instead'")), e;
            }
            function a(t) {
                var e = {
                    audio: !1,
                    video: i(t)
                };
                return e.video.deviceId && e.video.facingMode && delete e.video.facingMode, Promise.resolve(e);
            }
            function u() {
                return n.i(d.b)().then(function(t) {
                    return t.filter(function(t) {
                        return "videoinput" === t.kind;
                    });
                });
            }
            function c() {
                if (s) {
                    var t = s.getVideoTracks();
                    if (t && t.length) return t[0];
                }
            }
            var s, f = n(162), l = n.n(f), d = n(52);
            e.a = {
                request: function(t, e) {
                    return a(e).then(o.bind(null, t));
                },
                release: function() {
                    var t = s && s.getVideoTracks();
                    t && t.length && t[0].stop(), s = null;
                },
                enumerateVideoDevices: u,
                getActiveStreamLabel: function() {
                    var t = c();
                    return t ? t.label : "";
                },
                getActiveTrack: c
            };
        },
        function(t, e, n) {
            "use strict";
            function r(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d;
                return /^blob\:/i.test(t) ? i(t).then(o).then(function(t) {
                    return a(t, e);
                }) : Promise.resolve(null);
            }
            function o(t) {
                return new Promise(function(e) {
                    var n = new FileReader;
                    n.onload = function(t) {
                        return e(t.target.result);
                    }, n.readAsArrayBuffer(t);
                });
            }
            function i(t) {
                return new Promise(function(e, n) {
                    var r = new XMLHttpRequest;
                    r.open("GET", t, !0), r.responseType = "blob", r.onreadystatechange = function() {
                        r.readyState !== XMLHttpRequest.DONE || 200 !== r.status && 0 !== r.status || e(this.response);
                    }, r.onerror = n, r.send();
                });
            }
            function a(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d, n = new DataView(t), r = t.byteLength, o = e.reduce(function(t, e) {
                    var n = Object.keys(l).filter(function(t) {
                        return l[t] === e;
                    })[0];
                    return n && (t[n] = e), t;
                }, {}), i = 2;
                if (255 !== n.getUint8(0) || 216 !== n.getUint8(1)) return !1;
                for(; i < r;){
                    if (255 !== n.getUint8(i)) return !1;
                    if (225 === n.getUint8(i + 1)) return u(n, i + 4, o);
                    i += 2 + n.getUint16(i + 2);
                }
            }
            function u(t, e, n) {
                if ("Exif" !== f(t, e, 4)) return !1;
                var r = e + 6, o = void 0;
                if (18761 === t.getUint16(r)) o = !1;
                else {
                    if (19789 !== t.getUint16(r)) return !1;
                    o = !0;
                }
                if (42 !== t.getUint16(r + 2, !o)) return !1;
                var i = t.getUint32(r + 4, !o);
                return !(i < 8) && c(t, r, r + i, n, o);
            }
            function c(t, e, n, r, o) {
                for(var i = t.getUint16(n, !o), a = {}, u = 0; u < i; u++){
                    var c = n + 12 * u + 2, f = r[t.getUint16(c, !o)];
                    f && (a[f] = s(t, c, e, n, o));
                }
                return a;
            }
            function s(t, e, n, r, o) {
                var i = t.getUint16(e + 2, !o), a = t.getUint32(e + 4, !o);
                switch(i){
                    case 3:
                        if (1 === a) return t.getUint16(e + 8, !o);
                }
            }
            function f(t, e, n) {
                for(var r = "", o = e; o < e + n; o++)r += String.fromCharCode(t.getUint8(o));
                return r;
            }
            e.a = r;
            var l = {
                274: "orientation"
            }, d = Object.keys(l).map(function(t) {
                return l[t];
            });
        },
        function(t, e, n) {
            "use strict";
            function r(t, e) {
                t.width !== e.x && (t.width = e.x), t.height !== e.y && (t.height = e.y);
            }
            var o = n(19), i = Math.PI / 180, a = {};
            a.create = function(t, e) {
                var a, u = {}, c = t.getConfig(), s = (n.i(o.b)(t.getRealWidth(), t.getRealHeight()), t.getCanvasSize()), f = n.i(o.b)(t.getWidth(), t.getHeight()), l = t.getTopRight(), d = l.x, h = l.y, p = null, v = null;
                return a = e ? e : document.createElement("canvas"), a.width = s.x, a.height = s.y, p = a.getContext("2d"), v = new Uint8Array(f.x * f.y), u.attachData = function(t) {
                    v = t;
                }, u.getData = function() {
                    return v;
                }, u.grab = function() {
                    var e, u = c.halfSample, l = t.getFrame(), _ = l, g = 0;
                    if (_) {
                        if (r(a, s), "ImageStream" === c.type && (_ = l.img, l.tags && l.tags.orientation)) switch(l.tags.orientation){
                            case 6:
                                g = 90 * i;
                                break;
                            case 8:
                                g = -90 * i;
                        }
                        return 0 !== g ? (p.translate(s.x / 2, s.y / 2), p.rotate(g), p.drawImage(_, -s.y / 2, -s.x / 2, s.y, s.x), p.rotate(-g), p.translate(-s.x / 2, -s.y / 2)) : p.drawImage(_, 0, 0, s.x, s.y), e = p.getImageData(d, h, f.x, f.y).data, u ? n.i(o.c)(e, f, v) : n.i(o.d)(e, v, c), !0;
                    }
                    return !1;
                }, u.getSize = function() {
                    return f;
                }, u;
            }, e.a = a;
        },
        function(t, e, n) {
            "use strict";
            function r(t, e) {
                t.onload = function() {
                    e.loaded(this);
                };
            }
            var o = n(60), i = {};
            i.load = function(t, e, i, a, u) {
                var c, s, f, l = new Array(a), d = new Array(l.length);
                if (u === !1) l[0] = t;
                else for(c = 0; c < l.length; c++)f = i + c, l[c] = t + "image-" + ("00" + f).slice(-3) + ".jpg";
                for(d.notLoaded = [], d.addImage = function(t) {
                    d.notLoaded.push(t);
                }, d.loaded = function(r) {
                    for(var i = d.notLoaded, a = 0; a < i.length; a++)if (i[a] === r) {
                        i.splice(a, 1);
                        for(var c = 0; c < l.length; c++){
                            var s = l[c].substr(l[c].lastIndexOf("/"));
                            if (r.src.lastIndexOf(s) !== -1) {
                                d[c] = {
                                    img: r
                                };
                                break;
                            }
                        }
                        break;
                    }
                    0 === i.length && (u === !1 ? n.i(o.a)(t, [
                        "orientation"
                    ]).then(function(t) {
                        d[0].tags = t, e(d);
                    }).catch(function(t) {
                        console.log(t), e(d);
                    }) : e(d));
                }, c = 0; c < l.length; c++)s = new Image, d.addImage(s), r(s, d), s.src = l[c];
            }, e.a = i;
        },
        function(t, e, n) {
            "use strict";
            var r = n(62), o = {};
            o.createVideoStream = function(t) {
                function e() {
                    var e = t.videoWidth, o = t.videoHeight;
                    n = i.size ? e / o > 1 ? i.size : Math.floor(e / o * i.size) : e, r = i.size ? e / o > 1 ? Math.floor(o / e * i.size) : i.size : o, s.x = n, s.y = r;
                }
                var n, r, o = {}, i = null, a = [
                    "canrecord",
                    "ended"
                ], u = {}, c = {
                    x: 0,
                    y: 0
                }, s = {
                    x: 0,
                    y: 0
                };
                return o.getRealWidth = function() {
                    return t.videoWidth;
                }, o.getRealHeight = function() {
                    return t.videoHeight;
                }, o.getWidth = function() {
                    return n;
                }, o.getHeight = function() {
                    return r;
                }, o.setWidth = function(t) {
                    n = t;
                }, o.setHeight = function(t) {
                    r = t;
                }, o.setInputStream = function(e) {
                    i = e, t.src = void 0 !== e.src ? e.src : "";
                }, o.ended = function() {
                    return t.ended;
                }, o.getConfig = function() {
                    return i;
                }, o.setAttribute = function(e, n) {
                    t.setAttribute(e, n);
                }, o.pause = function() {
                    t.pause();
                }, o.play = function() {
                    t.play();
                }, o.setCurrentTime = function(e) {
                    "LiveStream" !== i.type && (t.currentTime = e);
                }, o.addEventListener = function(e, n, r) {
                    a.indexOf(e) !== -1 ? (u[e] || (u[e] = []), u[e].push(n)) : t.addEventListener(e, n, r);
                }, o.clearEventHandlers = function() {
                    a.forEach(function(e) {
                        var n = u[e];
                        n && n.length > 0 && n.forEach(function(n) {
                            t.removeEventListener(e, n);
                        });
                    });
                }, o.trigger = function(t, n) {
                    var r, i = u[t];
                    if ("canrecord" === t && e(), i && i.length > 0) for(r = 0; r < i.length; r++)i[r].apply(o, n);
                }, o.setTopRight = function(t) {
                    c.x = t.x, c.y = t.y;
                }, o.getTopRight = function() {
                    return c;
                }, o.setCanvasSize = function(t) {
                    s.x = t.x, s.y = t.y;
                }, o.getCanvasSize = function() {
                    return s;
                }, o.getFrame = function() {
                    return t;
                }, o;
            }, o.createLiveStream = function(t) {
                t.setAttribute("autoplay", !0);
                var e = o.createVideoStream(t);
                return e.ended = function() {
                    return !1;
                }, e;
            }, o.createImageStream = function() {
                function t() {
                    l = !1, r.a.load(v, function(t) {
                        if (d = t, t[0].tags && t[0].tags.orientation) switch(t[0].tags.orientation){
                            case 6:
                            case 8:
                                u = t[0].img.height, c = t[0].img.width;
                                break;
                            default:
                                u = t[0].img.width, c = t[0].img.height;
                        }
                        else u = t[0].img.width, c = t[0].img.height;
                        n = a.size ? u / c > 1 ? a.size : Math.floor(u / c * a.size) : u, o = a.size ? u / c > 1 ? Math.floor(c / u * a.size) : a.size : c, x.x = n, x.y = o, l = !0, s = 0, setTimeout(function() {
                            e("canrecord", []);
                        }, 0);
                    }, p, h, a.sequence);
                }
                function e(t, e) {
                    var n, r = y[t];
                    if (r && r.length > 0) for(n = 0; n < r.length; n++)r[n].apply(i, e);
                }
                var n, o, i = {}, a = null, u = 0, c = 0, s = 0, f = !0, l = !1, d = null, h = 0, p = 1, v = null, _ = !1, g = [
                    "canrecord",
                    "ended"
                ], y = {}, m = {
                    x: 0,
                    y: 0
                }, x = {
                    x: 0,
                    y: 0
                };
                return i.trigger = e, i.getWidth = function() {
                    return n;
                }, i.getHeight = function() {
                    return o;
                }, i.setWidth = function(t) {
                    n = t;
                }, i.setHeight = function(t) {
                    o = t;
                }, i.getRealWidth = function() {
                    return u;
                }, i.getRealHeight = function() {
                    return c;
                }, i.setInputStream = function(e) {
                    a = e, e.sequence === !1 ? (v = e.src, h = 1) : (v = e.src, h = e.length), t();
                }, i.ended = function() {
                    return _;
                }, i.setAttribute = function() {}, i.getConfig = function() {
                    return a;
                }, i.pause = function() {
                    f = !0;
                }, i.play = function() {
                    f = !1;
                }, i.setCurrentTime = function(t) {
                    s = t;
                }, i.addEventListener = function(t, e) {
                    g.indexOf(t) !== -1 && (y[t] || (y[t] = []), y[t].push(e));
                }, i.setTopRight = function(t) {
                    m.x = t.x, m.y = t.y;
                }, i.getTopRight = function() {
                    return m;
                }, i.setCanvasSize = function(t) {
                    x.x = t.x, x.y = t.y;
                }, i.getCanvasSize = function() {
                    return x;
                }, i.getFrame = function() {
                    var t;
                    return l ? (f || (t = d[s], s < h - 1 ? s++ : setTimeout(function() {
                        _ = !0, e("ended", []);
                    }, 0)), t) : null;
                }, i;
            }, e.a = o;
        },
        function(t, e, n) {
            "use strict";
            (function(t) {
                function r() {
                    var e;
                    v = p.halfSample ? new R.a({
                        x: O.size.x / 2 | 0,
                        y: O.size.y / 2 | 0
                    }) : O, C = n.i(w.e)(p.patchSize, v.size), z.x = v.size.x / C.x | 0, z.y = v.size.y / C.y | 0, E = new R.a(v.size, void 0, Uint8Array, !1), y = new R.a(C, void 0, Array, !0), e = new ArrayBuffer(65536), g = new R.a(C, new Uint8Array(e, 0, C.x * C.y)), _ = new R.a(C, new Uint8Array(e, C.x * C.y * 3, C.x * C.y), void 0, !0), A = n.i(P.a)("undefined" != typeof window ? window : "undefined" != typeof self ? self : t, {
                        size: C.x
                    }, e), b = new R.a({
                        x: v.size.x / g.size.x | 0,
                        y: v.size.y / g.size.y | 0
                    }, void 0, Array, !0), m = new R.a(b.size, void 0, void 0, !0), x = new R.a(b.size, void 0, Int32Array, !0);
                }
                function o() {
                    p.useWorker || "undefined" == typeof document || (N.dom.binary = document.createElement("canvas"), N.dom.binary.className = "binaryBuffer", N.ctx.binary = N.dom.binary.getContext("2d"), N.dom.binary.width = E.size.x, N.dom.binary.height = E.size.y);
                }
                function i(t) {
                    var e, n, r, o, i, a, u, c = E.size.x, s = E.size.y, f = -E.size.x, l = -E.size.y;
                    for(e = 0, n = 0; n < t.length; n++)o = t[n], e += o.rad;
                    for(e /= t.length, e = (180 * e / Math.PI + 90) % 180 - 90, e < 0 && (e += 180), e = (180 - e) * Math.PI / 180, i = M.copy(M.create(), [
                        Math.cos(e),
                        Math.sin(e),
                        -Math.sin(e),
                        Math.cos(e)
                    ]), n = 0; n < t.length; n++)for(o = t[n], r = 0; r < 4; r++)I.transformMat2(o.box[r], o.box[r], i);
                    for(n = 0; n < t.length; n++)for(o = t[n], r = 0; r < 4; r++)o.box[r][0] < c && (c = o.box[r][0]), o.box[r][0] > f && (f = o.box[r][0]), o.box[r][1] < s && (s = o.box[r][1]), o.box[r][1] > l && (l = o.box[r][1]);
                    for(a = [
                        [
                            c,
                            s
                        ],
                        [
                            f,
                            s
                        ],
                        [
                            f,
                            l
                        ],
                        [
                            c,
                            l
                        ]
                    ], u = p.halfSample ? 2 : 1, i = M.invert(i, i), r = 0; r < 4; r++)I.transformMat2(a[r], a[r], i);
                    for(r = 0; r < 4; r++)I.scale(a[r], a[r], u);
                    return a;
                }
                function a() {
                    n.i(w.f)(v, E), E.zeroBorder();
                }
                function u() {
                    var t, e, n, r, o, i, a, u = [];
                    for(t = 0; t < z.x; t++)for(e = 0; e < z.y; e++)n = g.size.x * t, r = g.size.y * e, l(n, r), _.zeroBorder(), T.a.init(y.data, 0), i = S.a.create(_, y), a = i.rasterize(0), o = y.moments(a.count), u = u.concat(d(o, [
                        t,
                        e
                    ], n, r));
                    return u;
                }
                function c(t) {
                    var e, n, r = [];
                    for(e = 0; e < t; e++)r.push(0);
                    for(n = x.data.length; n--;)x.data[n] > 0 && r[x.data[n] - 1]++;
                    return r = r.map(function(t, e) {
                        return {
                            val: t,
                            label: e + 1
                        };
                    }), r.sort(function(t, e) {
                        return e.val - t.val;
                    }), r.filter(function(t) {
                        return t.val >= 5;
                    });
                }
                function s(t, e) {
                    var n, r, o, a, u = [], c = [];
                    for(n = 0; n < t.length; n++){
                        for(r = x.data.length, u.length = 0; r--;)x.data[r] === t[n].label && (o = b.data[r], u.push(o));
                        a = i(u), a && c.push(a);
                    }
                    return c;
                }
                function f(t) {
                    var e = n.i(w.g)(t, .9), r = n.i(w.h)(e, 1, function(t) {
                        return t.getPoints().length;
                    }), o = [], i = [];
                    if (1 === r.length) {
                        o = r[0].item.getPoints();
                        for(var a = 0; a < o.length; a++)i.push(o[a].point);
                    }
                    return i;
                }
                function l(t, e) {
                    E.subImageAsCopy(g, n.i(w.b)(t, e)), A.skeletonize();
                }
                function d(t, e, n, r) {
                    var o, i, a, u, c = [], s = [], l = Math.ceil(C.x / 3);
                    if (t.length >= 2) {
                        for(o = 0; o < t.length; o++)t[o].m00 > l && c.push(t[o]);
                        if (c.length >= 2) {
                            for(a = f(c), i = 0, o = 0; o < a.length; o++)i += a[o].rad;
                            a.length > 1 && a.length >= c.length / 4 * 3 && a.length > t.length / 4 && (i /= a.length, u = {
                                index: e[1] * z.x + e[0],
                                pos: {
                                    x: n,
                                    y: r
                                },
                                box: [
                                    I.clone([
                                        n,
                                        r
                                    ]),
                                    I.clone([
                                        n + g.size.x,
                                        r
                                    ]),
                                    I.clone([
                                        n + g.size.x,
                                        r + g.size.y
                                    ]),
                                    I.clone([
                                        n,
                                        r + g.size.y
                                    ])
                                ],
                                moments: a,
                                rad: i,
                                vec: I.clone([
                                    Math.cos(i),
                                    Math.sin(i)
                                ])
                            }, s.push(u));
                        }
                    }
                    return s;
                }
                function h(t) {
                    function e() {
                        var t;
                        for(t = 0; t < x.data.length; t++)if (0 === x.data[t] && 1 === m.data[t]) return t;
                        return x.length;
                    }
                    function n(t) {
                        var e, r, o, u, c, s = {
                            x: t % x.size.x,
                            y: t / x.size.x | 0
                        };
                        if (t < x.data.length) for(o = b.data[t], x.data[t] = i, c = 0; c < D.a.searchDirections.length; c++)r = s.y + D.a.searchDirections[c][0], e = s.x + D.a.searchDirections[c][1], u = r * x.size.x + e, 0 !== m.data[u] ? 0 === x.data[u] && Math.abs(I.dot(b.data[u].vec, o.vec)) > a && n(u) : x.data[u] = Number.MAX_VALUE;
                    }
                    var r, o, i = 0, a = .95, u = 0;
                    for(T.a.init(m.data, 0), T.a.init(x.data, 0), T.a.init(b.data, null), r = 0; r < t.length; r++)o = t[r], b.data[o.index] = o, m.data[o.index] = 1;
                    for(m.zeroBorder(); (u = e()) < x.data.length;)i++, n(u);
                    return i;
                }
                var p, v, _, g, y, m, x, b, E, C, O, A, R = n(20), w = n(19), T = n(3), S = (n(9), n(65)), D = n(30), P = n(66), I = {
                    clone: n(7),
                    dot: n(32),
                    scale: n(81),
                    transformMat2: n(82)
                }, M = {
                    copy: n(78),
                    create: n(79),
                    invert: n(80)
                }, N = {
                    ctx: {
                        binary: null
                    },
                    dom: {
                        binary: null
                    }
                }, z = {
                    x: 0,
                    y: 0
                };
                e.a = {
                    init: function(t, e) {
                        p = e, O = t, r(), o();
                    },
                    locate: function() {
                        var t, e;
                        if (p.halfSample && n.i(w.i)(O, v), a(), t = u(), t.length < z.x * z.y * .05) return null;
                        var r = h(t);
                        return r < 1 ? null : (e = c(r), 0 === e.length ? null : s(e, r));
                    },
                    checkImageConstraints: function(t, e) {
                        var r, o, i, a = t.getWidth(), u = t.getHeight(), c = e.halfSample ? .5 : 1;
                        if (t.getConfig().area && (i = n.i(w.j)(a, u, t.getConfig().area), t.setTopRight({
                            x: i.sx,
                            y: i.sy
                        }), t.setCanvasSize({
                            x: a,
                            y: u
                        }), a = i.sw, u = i.sh), o = {
                            x: Math.floor(a * c),
                            y: Math.floor(u * c)
                        }, r = n.i(w.e)(e.patchSize, o), t.setWidth(Math.floor(Math.floor(o.x / r.x) * (1 / c) * r.x)), t.setHeight(Math.floor(Math.floor(o.y / r.y) * (1 / c) * r.y)), t.getWidth() % r.x == 0 && t.getHeight() % r.y == 0) return !0;
                        throw new Error("Image dimensions do not comply with the current settings: Width (" + a + " )and height (" + u + ") must a multiple of " + r.x);
                    }
                };
            }).call(e, n(47));
        },
        function(t, e, n) {
            "use strict";
            var r = n(30), o = {
                createContour2D: function() {
                    return {
                        dir: null,
                        index: null,
                        firstVertex: null,
                        insideContours: null,
                        nextpeer: null,
                        prevpeer: null
                    };
                },
                CONTOUR_DIR: {
                    CW_DIR: 0,
                    CCW_DIR: 1,
                    UNKNOWN_DIR: 2
                },
                DIR: {
                    OUTSIDE_EDGE: -32767,
                    INSIDE_EDGE: -32766
                },
                create: function(t, e) {
                    var n = t.data, i = e.data, a = t.size.x, u = t.size.y, c = r.a.create(t, e);
                    return {
                        rasterize: function(t) {
                            var e, r, s, f, l, d, h, p, v, _, g, y, m = [], x = 0;
                            for(y = 0; y < 400; y++)m[y] = 0;
                            for(m[0] = n[0], v = null, d = 1; d < u - 1; d++)for(f = 0, r = m[0], l = 1; l < a - 1; l++)if (g = d * a + l, 0 === i[g]) {
                                if ((e = n[g]) !== r) {
                                    if (0 === f) s = x + 1, m[s] = e, r = e, null !== (h = c.contourTracing(d, l, s, e, o.DIR.OUTSIDE_EDGE)) && (x++, f = s, p = o.createContour2D(), p.dir = o.CONTOUR_DIR.CW_DIR, p.index = f, p.firstVertex = h, p.nextpeer = v, p.insideContours = null, null !== v && (v.prevpeer = p), v = p);
                                    else if (null !== (h = c.contourTracing(d, l, o.DIR.INSIDE_EDGE, e, f))) {
                                        for(p = o.createContour2D(), p.firstVertex = h, p.insideContours = null, p.dir = 0 === t ? o.CONTOUR_DIR.CCW_DIR : o.CONTOUR_DIR.CW_DIR, p.index = t, _ = v; null !== _ && _.index !== f;)_ = _.nextpeer;
                                        null !== _ && (p.nextpeer = _.insideContours, null !== _.insideContours && (_.insideContours.prevpeer = p), _.insideContours = p);
                                    }
                                } else i[g] = f;
                            } else i[g] === o.DIR.OUTSIDE_EDGE || i[g] === o.DIR.INSIDE_EDGE ? (f = 0, r = i[g] === o.DIR.INSIDE_EDGE ? n[g] : m[0]) : (f = i[g], r = m[f]);
                            for(_ = v; null !== _;)_.index = t, _ = _.nextpeer;
                            return {
                                cc: v,
                                count: x
                            };
                        },
                        debug: {
                            drawContour: function(t, e) {
                                var n, r, i, a = t.getContext("2d"), u = e;
                                for(a.strokeStyle = "red", a.fillStyle = "red", a.lineWidth = 1, n = null !== u ? u.insideContours : null; null !== u;){
                                    switch(null !== n ? (r = n, n = n.nextpeer) : (r = u, u = u.nextpeer, n = null !== u ? u.insideContours : null), r.dir){
                                        case o.CONTOUR_DIR.CW_DIR:
                                            a.strokeStyle = "red";
                                            break;
                                        case o.CONTOUR_DIR.CCW_DIR:
                                            a.strokeStyle = "blue";
                                            break;
                                        case o.CONTOUR_DIR.UNKNOWN_DIR:
                                            a.strokeStyle = "green";
                                    }
                                    i = r.firstVertex, a.beginPath(), a.moveTo(i.x, i.y);
                                    do i = i.next, a.lineTo(i.x, i.y);
                                    while (i !== r.firstVertex);
                                    a.stroke();
                                }
                            }
                        }
                    };
                }
            };
            e.a = o;
        },
        function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            function Skeletonizer(stdlib, foreign, buffer) {
                "use asm";
                var images = new stdlib.Uint8Array(buffer), size = foreign.size | 0, imul = stdlib.Math.imul;
                function erode(inImagePtr, outImagePtr) {
                    inImagePtr = inImagePtr | 0;
                    outImagePtr = outImagePtr | 0;
                    var v = 0, u = 0, sum = 0, yStart1 = 0, yStart2 = 0, xStart1 = 0, xStart2 = 0, offset = 0;
                    for(v = 1; (v | 0) < (size - 1 | 0); v = v + 1 | 0){
                        offset = offset + size | 0;
                        for(u = 1; (u | 0) < (size - 1 | 0); u = u + 1 | 0){
                            yStart1 = offset - size | 0;
                            yStart2 = offset + size | 0;
                            xStart1 = u - 1 | 0;
                            xStart2 = u + 1 | 0;
                            sum = (images[inImagePtr + yStart1 + xStart1 | 0] | 0) + (images[inImagePtr + yStart1 + xStart2 | 0] | 0) + (images[inImagePtr + offset + u | 0] | 0) + (images[inImagePtr + yStart2 + xStart1 | 0] | 0) + (images[inImagePtr + yStart2 + xStart2 | 0] | 0) | 0;
                            if ((sum | 0) == 5) images[outImagePtr + offset + u | 0] = 1;
                            else images[outImagePtr + offset + u | 0] = 0;
                        }
                    }
                    return;
                }
                function subtract(aImagePtr, bImagePtr, outImagePtr) {
                    aImagePtr = aImagePtr | 0;
                    bImagePtr = bImagePtr | 0;
                    outImagePtr = outImagePtr | 0;
                    var length = 0;
                    length = imul(size, size) | 0;
                    while((length | 0) > 0){
                        length = length - 1 | 0;
                        images[outImagePtr + length | 0] = (images[aImagePtr + length | 0] | 0) - (images[bImagePtr + length | 0] | 0) | 0;
                    }
                }
                function bitwiseOr(aImagePtr, bImagePtr, outImagePtr) {
                    aImagePtr = aImagePtr | 0;
                    bImagePtr = bImagePtr | 0;
                    outImagePtr = outImagePtr | 0;
                    var length = 0;
                    length = imul(size, size) | 0;
                    while((length | 0) > 0){
                        length = length - 1 | 0;
                        images[outImagePtr + length | 0] = images[aImagePtr + length | 0] | 0 | (images[bImagePtr + length | 0] | 0) | 0;
                    }
                }
                function countNonZero(imagePtr) {
                    imagePtr = imagePtr | 0;
                    var sum = 0, length = 0;
                    length = imul(size, size) | 0;
                    while((length | 0) > 0){
                        length = length - 1 | 0;
                        sum = (sum | 0) + (images[imagePtr + length | 0] | 0) | 0;
                    }
                    return sum | 0;
                }
                function init(imagePtr, value) {
                    imagePtr = imagePtr | 0;
                    value = value | 0;
                    var length = 0;
                    length = imul(size, size) | 0;
                    while((length | 0) > 0){
                        length = length - 1 | 0;
                        images[imagePtr + length | 0] = value;
                    }
                }
                function dilate(inImagePtr, outImagePtr) {
                    inImagePtr = inImagePtr | 0;
                    outImagePtr = outImagePtr | 0;
                    var v = 0, u = 0, sum = 0, yStart1 = 0, yStart2 = 0, xStart1 = 0, xStart2 = 0, offset = 0;
                    for(v = 1; (v | 0) < (size - 1 | 0); v = v + 1 | 0){
                        offset = offset + size | 0;
                        for(u = 1; (u | 0) < (size - 1 | 0); u = u + 1 | 0){
                            yStart1 = offset - size | 0;
                            yStart2 = offset + size | 0;
                            xStart1 = u - 1 | 0;
                            xStart2 = u + 1 | 0;
                            sum = (images[inImagePtr + yStart1 + xStart1 | 0] | 0) + (images[inImagePtr + yStart1 + xStart2 | 0] | 0) + (images[inImagePtr + offset + u | 0] | 0) + (images[inImagePtr + yStart2 + xStart1 | 0] | 0) + (images[inImagePtr + yStart2 + xStart2 | 0] | 0) | 0;
                            if ((sum | 0) > 0) images[outImagePtr + offset + u | 0] = 1;
                            else images[outImagePtr + offset + u | 0] = 0;
                        }
                    }
                    return;
                }
                function memcpy(srcImagePtr, dstImagePtr) {
                    srcImagePtr = srcImagePtr | 0;
                    dstImagePtr = dstImagePtr | 0;
                    var length = 0;
                    length = imul(size, size) | 0;
                    while((length | 0) > 0){
                        length = length - 1 | 0;
                        images[dstImagePtr + length | 0] = images[srcImagePtr + length | 0] | 0;
                    }
                }
                function zeroBorder(imagePtr) {
                    imagePtr = imagePtr | 0;
                    var x = 0, y = 0;
                    for(x = 0; (x | 0) < (size - 1 | 0); x = x + 1 | 0){
                        images[imagePtr + x | 0] = 0;
                        images[imagePtr + y | 0] = 0;
                        y = y + size - 1 | 0;
                        images[imagePtr + y | 0] = 0;
                        y = y + 1 | 0;
                    }
                    for(x = 0; (x | 0) < (size | 0); x = x + 1 | 0){
                        images[imagePtr + y | 0] = 0;
                        y = y + 1 | 0;
                    }
                }
                function skeletonize() {
                    var subImagePtr = 0, erodedImagePtr = 0, tempImagePtr = 0, skelImagePtr = 0, sum = 0, done = 0;
                    erodedImagePtr = imul(size, size) | 0;
                    tempImagePtr = erodedImagePtr + erodedImagePtr | 0;
                    skelImagePtr = tempImagePtr + erodedImagePtr | 0;
                    init(skelImagePtr, 0);
                    zeroBorder(subImagePtr);
                    do {
                        erode(subImagePtr, erodedImagePtr);
                        dilate(erodedImagePtr, tempImagePtr);
                        subtract(subImagePtr, tempImagePtr, tempImagePtr);
                        bitwiseOr(skelImagePtr, tempImagePtr, skelImagePtr);
                        memcpy(erodedImagePtr, subImagePtr);
                        sum = countNonZero(subImagePtr) | 0;
                        done = (sum | 0) == 0 | 0;
                    }while (!done);
                }
                return {
                    skeletonize: skeletonize
                };
            }
            __webpack_exports__["a"] = Skeletonizer;
        },
        function(t, e, n) {
            "use strict";
            function r(t) {
                o.a.call(this, t), this.barSpaceRatio = [
                    1,
                    1
                ];
            }
            var o = n(1), i = 1, a = 3, u = {
                START_PATTERN: {
                    value: [
                        a,
                        i,
                        a,
                        i,
                        i,
                        i
                    ]
                },
                STOP_PATTERN: {
                    value: [
                        a,
                        i,
                        i,
                        i,
                        a
                    ]
                },
                CODE_PATTERN: {
                    value: [
                        [
                            i,
                            i,
                            a,
                            a,
                            i
                        ],
                        [
                            a,
                            i,
                            i,
                            i,
                            a
                        ],
                        [
                            i,
                            a,
                            i,
                            i,
                            a
                        ],
                        [
                            a,
                            a,
                            i,
                            i,
                            i
                        ],
                        [
                            i,
                            i,
                            a,
                            i,
                            a
                        ],
                        [
                            a,
                            i,
                            a,
                            i,
                            i
                        ],
                        [
                            i,
                            a,
                            a,
                            i,
                            i
                        ],
                        [
                            i,
                            i,
                            i,
                            a,
                            a
                        ],
                        [
                            a,
                            i,
                            i,
                            a,
                            i
                        ],
                        [
                            i,
                            a,
                            i,
                            a,
                            i
                        ]
                    ]
                },
                SINGLE_CODE_ERROR: {
                    value: .78,
                    writable: !0
                },
                AVG_CODE_ERROR: {
                    value: .3,
                    writable: !0
                },
                FORMAT: {
                    value: "2of5"
                }
            }, c = u.START_PATTERN.value.reduce(function(t, e) {
                return t + e;
            }, 0);
            r.prototype = Object.create(o.a.prototype, u), r.prototype.constructor = r, r.prototype._findPattern = function(t, e, n, r) {
                var o, i, a, u, c = [], s = this, f = 0, l = {
                    error: Number.MAX_VALUE,
                    code: -1,
                    start: 0,
                    end: 0
                }, d = s.AVG_CODE_ERROR;
                for(n = n || !1, r = r || !1, e || (e = s._nextSet(s._row)), o = 0; o < t.length; o++)c[o] = 0;
                for(o = e; o < s._row.length; o++)if (s._row[o] ^ n) c[f]++;
                else {
                    if (f === c.length - 1) {
                        for(u = 0, a = 0; a < c.length; a++)u += c[a];
                        if ((i = s._matchPattern(c, t)) < d) return l.error = i, l.start = o - u, l.end = o, l;
                        if (!r) return null;
                        for(a = 0; a < c.length - 2; a++)c[a] = c[a + 2];
                        c[c.length - 2] = 0, c[c.length - 1] = 0, f--;
                    } else f++;
                    c[f] = 1, n = !n;
                }
                return null;
            }, r.prototype._findStart = function() {
                for(var t, e, n = this, r = n._nextSet(n._row), o = 1; !e;){
                    if (!(e = n._findPattern(n.START_PATTERN, r, !1, !0))) return null;
                    if (o = Math.floor((e.end - e.start) / c), (t = e.start - 5 * o) >= 0 && n._matchRange(t, e.start, 0)) return e;
                    r = e.end, e = null;
                }
            }, r.prototype._verifyTrailingWhitespace = function(t) {
                var e, n = this;
                return e = t.end + (t.end - t.start) / 2, e < n._row.length && n._matchRange(t.end, e, 0) ? t : null;
            }, r.prototype._findEnd = function() {
                var t, e, n, r = this;
                return r._row.reverse(), n = r._nextSet(r._row), t = r._findPattern(r.STOP_PATTERN, n, !1, !0), r._row.reverse(), null === t ? null : (e = t.start, t.start = r._row.length - t.end, t.end = r._row.length - e, null !== t ? r._verifyTrailingWhitespace(t) : null);
            }, r.prototype._decodeCode = function(t) {
                var e, n, r, o = this, i = 0, a = o.AVG_CODE_ERROR, u = {
                    error: Number.MAX_VALUE,
                    code: -1,
                    start: 0,
                    end: 0
                };
                for(e = 0; e < t.length; e++)i += t[e];
                for(r = 0; r < o.CODE_PATTERN.length; r++)(n = o._matchPattern(t, o.CODE_PATTERN[r])) < u.error && (u.code = r, u.error = n);
                if (u.error < a) return u;
            }, r.prototype._decodePayload = function(t, e, n) {
                for(var r, o, i = this, a = 0, u = t.length, c = [
                    0,
                    0,
                    0,
                    0,
                    0
                ]; a < u;){
                    for(r = 0; r < 5; r++)c[r] = t[a] * this.barSpaceRatio[0], a += 2;
                    if (!(o = i._decodeCode(c))) return null;
                    e.push(o.code + ""), n.push(o);
                }
                return o;
            }, r.prototype._verifyCounterLength = function(t) {
                return t.length % 10 == 0;
            }, r.prototype._decode = function() {
                var t, e, n, r = this, o = [], i = [];
                return (t = r._findStart()) ? (i.push(t), (e = r._findEnd()) ? (n = r._fillCounters(t.end, e.start, !1), r._verifyCounterLength(n) && r._decodePayload(n, o, i) ? o.length < 5 ? null : (i.push(e), {
                    code: o.join(""),
                    start: t.start,
                    end: e.end,
                    startInfo: t,
                    decodedCodes: i
                }) : null) : null) : null;
            }, e.a = r;
        },
        function(t, e, n) {
            "use strict";
            function r() {
                o.a.call(this), this._counters = [];
            }
            var o = n(1), i = {
                ALPHABETH_STRING: {
                    value: "0123456789-$:/.+ABCD"
                },
                ALPHABET: {
                    value: [
                        48,
                        49,
                        50,
                        51,
                        52,
                        53,
                        54,
                        55,
                        56,
                        57,
                        45,
                        36,
                        58,
                        47,
                        46,
                        43,
                        65,
                        66,
                        67,
                        68
                    ]
                },
                CHARACTER_ENCODINGS: {
                    value: [
                        3,
                        6,
                        9,
                        96,
                        18,
                        66,
                        33,
                        36,
                        48,
                        72,
                        12,
                        24,
                        69,
                        81,
                        84,
                        21,
                        26,
                        41,
                        11,
                        14
                    ]
                },
                START_END: {
                    value: [
                        26,
                        41,
                        11,
                        14
                    ]
                },
                MIN_ENCODED_CHARS: {
                    value: 4
                },
                MAX_ACCEPTABLE: {
                    value: 2
                },
                PADDING: {
                    value: 1.5
                },
                FORMAT: {
                    value: "codabar",
                    writeable: !1
                }
            };
            r.prototype = Object.create(o.a.prototype, i), r.prototype.constructor = r, r.prototype._decode = function() {
                var t, e, n, r, o, i = this, a = [];
                if (this._counters = i._fillCounters(), !(t = i._findStart())) return null;
                r = t.startCounter;
                do {
                    if ((n = i._toPattern(r)) < 0) return null;
                    if ((e = i._patternToChar(n)) < 0) return null;
                    if (a.push(e), r += 8, a.length > 1 && i._isStartEnd(n)) break;
                }while (r < i._counters.length);
                return a.length - 2 < i.MIN_ENCODED_CHARS || !i._isStartEnd(n) ? null : i._verifyWhitespace(t.startCounter, r - 8) && i._validateResult(a, t.startCounter) ? (r = r > i._counters.length ? i._counters.length : r, o = t.start + i._sumCounters(t.startCounter, r - 8), {
                    code: a.join(""),
                    start: t.start,
                    end: o,
                    startInfo: t,
                    decodedCodes: a
                }) : null;
            }, r.prototype._verifyWhitespace = function(t, e) {
                return (t - 1 <= 0 || this._counters[t - 1] >= this._calculatePatternLength(t) / 2) && (e + 8 >= this._counters.length || this._counters[e + 7] >= this._calculatePatternLength(e) / 2);
            }, r.prototype._calculatePatternLength = function(t) {
                var e, n = 0;
                for(e = t; e < t + 7; e++)n += this._counters[e];
                return n;
            }, r.prototype._thresholdResultPattern = function(t, e) {
                var n, r, o, i, a, u = this, c = {
                    space: {
                        narrow: {
                            size: 0,
                            counts: 0,
                            min: 0,
                            max: Number.MAX_VALUE
                        },
                        wide: {
                            size: 0,
                            counts: 0,
                            min: 0,
                            max: Number.MAX_VALUE
                        }
                    },
                    bar: {
                        narrow: {
                            size: 0,
                            counts: 0,
                            min: 0,
                            max: Number.MAX_VALUE
                        },
                        wide: {
                            size: 0,
                            counts: 0,
                            min: 0,
                            max: Number.MAX_VALUE
                        }
                    }
                }, s = e;
                for(o = 0; o < t.length; o++){
                    for(a = u._charToPattern(t[o]), i = 6; i >= 0; i--)n = 2 == (1 & i) ? c.bar : c.space, r = 1 == (1 & a) ? n.wide : n.narrow, r.size += u._counters[s + i], r.counts++, a >>= 1;
                    s += 8;
                }
                return [
                    "space",
                    "bar"
                ].forEach(function(t) {
                    var e = c[t];
                    e.wide.min = Math.floor((e.narrow.size / e.narrow.counts + e.wide.size / e.wide.counts) / 2), e.narrow.max = Math.ceil(e.wide.min), e.wide.max = Math.ceil((e.wide.size * u.MAX_ACCEPTABLE + u.PADDING) / e.wide.counts);
                }), c;
            }, r.prototype._charToPattern = function(t) {
                var e, n = this, r = t.charCodeAt(0);
                for(e = 0; e < n.ALPHABET.length; e++)if (n.ALPHABET[e] === r) return n.CHARACTER_ENCODINGS[e];
                return 0;
            }, r.prototype._validateResult = function(t, e) {
                var n, r, o, i, a, u, c = this, s = c._thresholdResultPattern(t, e), f = e;
                for(n = 0; n < t.length; n++){
                    for(u = c._charToPattern(t[n]), r = 6; r >= 0; r--){
                        if (o = 0 == (1 & r) ? s.bar : s.space, i = 1 == (1 & u) ? o.wide : o.narrow, (a = c._counters[f + r]) < i.min || a > i.max) return !1;
                        u >>= 1;
                    }
                    f += 8;
                }
                return !0;
            }, r.prototype._patternToChar = function(t) {
                var e, n = this;
                for(e = 0; e < n.CHARACTER_ENCODINGS.length; e++)if (n.CHARACTER_ENCODINGS[e] === t) return String.fromCharCode(n.ALPHABET[e]);
                return -1;
            }, r.prototype._computeAlternatingThreshold = function(t, e) {
                var n, r, o = Number.MAX_VALUE, i = 0;
                for(n = t; n < e; n += 2)r = this._counters[n], r > i && (i = r), r < o && (o = r);
                return (o + i) / 2 | 0;
            }, r.prototype._toPattern = function(t) {
                var e, n, r, o, i = 7, a = t + i, u = 1 << i - 1, c = 0;
                if (a > this._counters.length) return -1;
                for(e = this._computeAlternatingThreshold(t, a), n = this._computeAlternatingThreshold(t + 1, a), r = 0; r < i; r++)o = 0 == (1 & r) ? e : n, this._counters[t + r] > o && (c |= u), u >>= 1;
                return c;
            }, r.prototype._isStartEnd = function(t) {
                var e;
                for(e = 0; e < this.START_END.length; e++)if (this.START_END[e] === t) return !0;
                return !1;
            }, r.prototype._sumCounters = function(t, e) {
                var n, r = 0;
                for(n = t; n < e; n++)r += this._counters[n];
                return r;
            }, r.prototype._findStart = function() {
                var t, e, n, r = this, o = r._nextUnset(r._row);
                for(t = 1; t < this._counters.length; t++)if ((e = r._toPattern(t)) !== -1 && r._isStartEnd(e)) return o += r._sumCounters(0, t), n = o + r._sumCounters(t, t + 8), {
                    start: o,
                    end: n,
                    startCounter: t,
                    endCounter: t + 8
                };
            }, e.a = r;
        },
        function(t, e, n) {
            "use strict";
            function r() {
                i.a.call(this);
            }
            function o(t, e, n) {
                for(var r = n.length, o = 0, i = 0; r--;)i += t[n[r]], o += e[n[r]];
                return i / o;
            }
            var i = n(1), a = {
                CODE_SHIFT: {
                    value: 98
                },
                CODE_C: {
                    value: 99
                },
                CODE_B: {
                    value: 100
                },
                CODE_A: {
                    value: 101
                },
                START_CODE_A: {
                    value: 103
                },
                START_CODE_B: {
                    value: 104
                },
                START_CODE_C: {
                    value: 105
                },
                STOP_CODE: {
                    value: 106
                },
                CODE_PATTERN: {
                    value: [
                        [
                            2,
                            1,
                            2,
                            2,
                            2,
                            2
                        ],
                        [
                            2,
                            2,
                            2,
                            1,
                            2,
                            2
                        ],
                        [
                            2,
                            2,
                            2,
                            2,
                            2,
                            1
                        ],
                        [
                            1,
                            2,
                            1,
                            2,
                            2,
                            3
                        ],
                        [
                            1,
                            2,
                            1,
                            3,
                            2,
                            2
                        ],
                        [
                            1,
                            3,
                            1,
                            2,
                            2,
                            2
                        ],
                        [
                            1,
                            2,
                            2,
                            2,
                            1,
                            3
                        ],
                        [
                            1,
                            2,
                            2,
                            3,
                            1,
                            2
                        ],
                        [
                            1,
                            3,
                            2,
                            2,
                            1,
                            2
                        ],
                        [
                            2,
                            2,
                            1,
                            2,
                            1,
                            3
                        ],
                        [
                            2,
                            2,
                            1,
                            3,
                            1,
                            2
                        ],
                        [
                            2,
                            3,
                            1,
                            2,
                            1,
                            2
                        ],
                        [
                            1,
                            1,
                            2,
                            2,
                            3,
                            2
                        ],
                        [
                            1,
                            2,
                            2,
                            1,
                            3,
                            2
                        ],
                        [
                            1,
                            2,
                            2,
                            2,
                            3,
                            1
                        ],
                        [
                            1,
                            1,
                            3,
                            2,
                            2,
                            2
                        ],
                        [
                            1,
                            2,
                            3,
                            1,
                            2,
                            2
                        ],
                        [
                            1,
                            2,
                            3,
                            2,
                            2,
                            1
                        ],
                        [
                            2,
                            2,
                            3,
                            2,
                            1,
                            1
                        ],
                        [
                            2,
                            2,
                            1,
                            1,
                            3,
                            2
                        ],
                        [
                            2,
                            2,
                            1,
                            2,
                            3,
                            1
                        ],
                        [
                            2,
                            1,
                            3,
                            2,
                            1,
                            2
                        ],
                        [
                            2,
                            2,
                            3,
                            1,
                            1,
                            2
                        ],
                        [
                            3,
                            1,
                            2,
                            1,
                            3,
                            1
                        ],
                        [
                            3,
                            1,
                            1,
                            2,
                            2,
                            2
                        ],
                        [
                            3,
                            2,
                            1,
                            1,
                            2,
                            2
                        ],
                        [
                            3,
                            2,
                            1,
                            2,
                            2,
                            1
                        ],
                        [
                            3,
                            1,
                            2,
                            2,
                            1,
                            2
                        ],
                        [
                            3,
                            2,
                            2,
                            1,
                            1,
                            2
                        ],
                        [
                            3,
                            2,
                            2,
                            2,
                            1,
                            1
                        ],
                        [
                            2,
                            1,
                            2,
                            1,
                            2,
                            3
                        ],
                        [
                            2,
                            1,
                            2,
                            3,
                            2,
                            1
                        ],
                        [
                            2,
                            3,
                            2,
                            1,
                            2,
                            1
                        ],
                        [
                            1,
                            1,
                            1,
                            3,
                            2,
                            3
                        ],
                        [
                            1,
                            3,
                            1,
                            1,
                            2,
                            3
                        ],
                        [
                            1,
                            3,
                            1,
                            3,
                            2,
                            1
                        ],
                        [
                            1,
                            1,
                            2,
                            3,
                            1,
                            3
                        ],
                        [
                            1,
                            3,
                            2,
                            1,
                            1,
                            3
                        ],
                        [
                            1,
                            3,
                            2,
                            3,
                            1,
                            1
                        ],
                        [
                            2,
                            1,
                            1,
                            3,
                            1,
                            3
                        ],
                        [
                            2,
                            3,
                            1,
                            1,
                            1,
                            3
                        ],
                        [
                            2,
                            3,
                            1,
                            3,
                            1,
                            1
                        ],
                        [
                            1,
                            1,
                            2,
                            1,
                            3,
                            3
                        ],
                        [
                            1,
                            1,
                            2,
                            3,
                            3,
                            1
                        ],
                        [
                            1,
                            3,
                            2,
                            1,
                            3,
                            1
                        ],
                        [
                            1,
                            1,
                            3,
                            1,
                            2,
                            3
                        ],
                        [
                            1,
                            1,
                            3,
                            3,
                            2,
                            1
                        ],
                        [
                            1,
                            3,
                            3,
                            1,
                            2,
                            1
                        ],
                        [
                            3,
                            1,
                            3,
                            1,
                            2,
                            1
                        ],
                        [
                            2,
                            1,
                            1,
                            3,
                            3,
                            1
                        ],
                        [
                            2,
                            3,
                            1,
                            1,
                            3,
                            1
                        ],
                        [
                            2,
                            1,
                            3,
                            1,
                            1,
                            3
                        ],
                        [
                            2,
                            1,
                            3,
                            3,
                            1,
                            1
                        ],
                        [
                            2,
                            1,
                            3,
                            1,
                            3,
                            1
                        ],
                        [
                            3,
                            1,
                            1,
                            1,
                            2,
                            3
                        ],
                        [
                            3,
                            1,
                            1,
                            3,
                            2,
                            1
                        ],
                        [
                            3,
                            3,
                            1,
                            1,
                            2,
                            1
                        ],
                        [
                            3,
                            1,
                            2,
                            1,
                            1,
                            3
                        ],
                        [
                            3,
                            1,
                            2,
                            3,
                            1,
                            1
                        ],
                        [
                            3,
                            3,
                            2,
                            1,
                            1,
                            1
                        ],
                        [
                            3,
                            1,
                            4,
                            1,
                            1,
                            1
                        ],
                        [
                            2,
                            2,
                            1,
                            4,
                            1,
                            1
                        ],
                        [
                            4,
                            3,
                            1,
                            1,
                            1,
                            1
                        ],
                        [
                            1,
                            1,
                            1,
                            2,
                            2,
                            4
                        ],
                        [
                            1,
                            1,
                            1,
                            4,
                            2,
                            2
                        ],
                        [
                            1,
                            2,
                            1,
                            1,
                            2,
                            4
                        ],
                        [
                            1,
                            2,
                            1,
                            4,
                            2,
                            1
                        ],
                        [
                            1,
                            4,
                            1,
                            1,
                            2,
                            2
                        ],
                        [
                            1,
                            4,
                            1,
                            2,
                            2,
                            1
                        ],
                        [
                            1,
                            1,
                            2,
                            2,
                            1,
                            4
                        ],
                        [
                            1,
                            1,
                            2,
                            4,
                            1,
                            2
                        ],
                        [
                            1,
                            2,
                            2,
                            1,
                            1,
                            4
                        ],
                        [
                            1,
                            2,
                            2,
                            4,
                            1,
                            1
                        ],
                        [
                            1,
                            4,
                            2,
                            1,
                            1,
                            2
                        ],
                        [
                            1,
                            4,
                            2,
                            2,
                            1,
                            1
                        ],
                        [
                            2,
                            4,
                            1,
                            2,
                            1,
                            1
                        ],
                        [
                            2,
                            2,
                            1,
                            1,
                            1,
                            4
                        ],
                        [
                            4,
                            1,
                            3,
                            1,
                            1,
                            1
                        ],
                        [
                            2,
                            4,
                            1,
                            1,
                            1,
                            2
                        ],
                        [
                            1,
                            3,
                            4,
                            1,
                            1,
                            1
                        ],
                        [
                            1,
                            1,
                            1,
                            2,
                            4,
                            2
                        ],
                        [
                            1,
                            2,
                            1,
                            1,
                            4,
                            2
                        ],
                        [
                            1,
                            2,
                            1,
                            2,
                            4,
                            1
                        ],
                        [
                            1,
                            1,
                            4,
                            2,
                            1,
                            2
                        ],
                        [
                            1,
                            2,
                            4,
                            1,
                            1,
                            2
                        ],
                        [
                            1,
                            2,
                            4,
                            2,
                            1,
                            1
                        ],
                        [
                            4,
                            1,
                            1,
                            2,
                            1,
                            2
                        ],
                        [
                            4,
                            2,
                            1,
                            1,
                            1,
                            2
                        ],
                        [
                            4,
                            2,
                            1,
                            2,
                            1,
                            1
                        ],
                        [
                            2,
                            1,
                            2,
                            1,
                            4,
                            1
                        ],
                        [
                            2,
                            1,
                            4,
                            1,
                            2,
                            1
                        ],
                        [
                            4,
                            1,
                            2,
                            1,
                            2,
                            1
                        ],
                        [
                            1,
                            1,
                            1,
                            1,
                            4,
                            3
                        ],
                        [
                            1,
                            1,
                            1,
                            3,
                            4,
                            1
                        ],
                        [
                            1,
                            3,
                            1,
                            1,
                            4,
                            1
                        ],
                        [
                            1,
                            1,
                            4,
                            1,
                            1,
                            3
                        ],
                        [
                            1,
                            1,
                            4,
                            3,
                            1,
                            1
                        ],
                        [
                            4,
                            1,
                            1,
                            1,
                            1,
                            3
                        ],
                        [
                            4,
                            1,
                            1,
                            3,
                            1,
                            1
                        ],
                        [
                            1,
                            1,
                            3,
                            1,
                            4,
                            1
                        ],
                        [
                            1,
                            1,
                            4,
                            1,
                            3,
                            1
                        ],
                        [
                            3,
                            1,
                            1,
                            1,
                            4,
                            1
                        ],
                        [
                            4,
                            1,
                            1,
                            1,
                            3,
                            1
                        ],
                        [
                            2,
                            1,
                            1,
                            4,
                            1,
                            2
                        ],
                        [
                            2,
                            1,
                            1,
                            2,
                            1,
                            4
                        ],
                        [
                            2,
                            1,
                            1,
                            2,
                            3,
                            2
                        ],
                        [
                            2,
                            3,
                            3,
                            1,
                            1,
                            1,
                            2
                        ]
                    ]
                },
                SINGLE_CODE_ERROR: {
                    value: .64
                },
                AVG_CODE_ERROR: {
                    value: .3
                },
                FORMAT: {
                    value: "code_128",
                    writeable: !1
                },
                MODULE_INDICES: {
                    value: {
                        bar: [
                            0,
                            2,
                            4
                        ],
                        space: [
                            1,
                            3,
                            5
                        ]
                    }
                }
            };
            r.prototype = Object.create(i.a.prototype, a), r.prototype.constructor = r, r.prototype._decodeCode = function(t, e) {
                var n, r, i, a = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ], u = this, c = t, s = !u._row[c], f = 0, l = {
                    error: Number.MAX_VALUE,
                    code: -1,
                    start: t,
                    end: t,
                    correction: {
                        bar: 1,
                        space: 1
                    }
                };
                for(n = c; n < u._row.length; n++)if (u._row[n] ^ s) a[f]++;
                else {
                    if (f === a.length - 1) {
                        for(e && u._correct(a, e), r = 0; r < u.CODE_PATTERN.length; r++)(i = u._matchPattern(a, u.CODE_PATTERN[r])) < l.error && (l.code = r, l.error = i);
                        return l.end = n, l.code === -1 || l.error > u.AVG_CODE_ERROR ? null : (u.CODE_PATTERN[l.code] && (l.correction.bar = o(u.CODE_PATTERN[l.code], a, this.MODULE_INDICES.bar), l.correction.space = o(u.CODE_PATTERN[l.code], a, this.MODULE_INDICES.space)), l);
                    }
                    f++, a[f] = 1, s = !s;
                }
                return null;
            }, r.prototype._correct = function(t, e) {
                this._correctBars(t, e.bar, this.MODULE_INDICES.bar), this._correctBars(t, e.space, this.MODULE_INDICES.space);
            }, r.prototype._findStart = function() {
                var t, e, n, r, i, a = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ], u = this, c = u._nextSet(u._row), s = !1, f = 0, l = {
                    error: Number.MAX_VALUE,
                    code: -1,
                    start: 0,
                    end: 0,
                    correction: {
                        bar: 1,
                        space: 1
                    }
                };
                for(t = c; t < u._row.length; t++)if (u._row[t] ^ s) a[f]++;
                else {
                    if (f === a.length - 1) {
                        for(i = 0, r = 0; r < a.length; r++)i += a[r];
                        for(e = u.START_CODE_A; e <= u.START_CODE_C; e++)(n = u._matchPattern(a, u.CODE_PATTERN[e])) < l.error && (l.code = e, l.error = n);
                        if (l.error < u.AVG_CODE_ERROR) return l.start = t - i, l.end = t, l.correction.bar = o(u.CODE_PATTERN[l.code], a, this.MODULE_INDICES.bar), l.correction.space = o(u.CODE_PATTERN[l.code], a, this.MODULE_INDICES.space), l;
                        for(r = 0; r < 4; r++)a[r] = a[r + 2];
                        a[4] = 0, a[5] = 0, f--;
                    } else f++;
                    a[f] = 1, s = !s;
                }
                return null;
            }, r.prototype._decode = function() {
                var t, e, n = this, r = n._findStart(), o = null, i = !1, a = [], u = 0, c = 0, s = [], f = [], l = !1, d = !0;
                if (null === r) return null;
                switch(o = {
                    code: r.code,
                    start: r.start,
                    end: r.end,
                    correction: {
                        bar: r.correction.bar,
                        space: r.correction.space
                    }
                }, f.push(o), c = o.code, o.code){
                    case n.START_CODE_A:
                        t = n.CODE_A;
                        break;
                    case n.START_CODE_B:
                        t = n.CODE_B;
                        break;
                    case n.START_CODE_C:
                        t = n.CODE_C;
                        break;
                    default:
                        return null;
                }
                for(; !i;){
                    if (e = l, l = !1, null !== (o = n._decodeCode(o.end, o.correction))) switch(o.code !== n.STOP_CODE && (d = !0), o.code !== n.STOP_CODE && (s.push(o.code), u++, c += u * o.code), f.push(o), t){
                        case n.CODE_A:
                            if (o.code < 64) a.push(String.fromCharCode(32 + o.code));
                            else if (o.code < 96) a.push(String.fromCharCode(o.code - 64));
                            else switch(o.code !== n.STOP_CODE && (d = !1), o.code){
                                case n.CODE_SHIFT:
                                    l = !0, t = n.CODE_B;
                                    break;
                                case n.CODE_B:
                                    t = n.CODE_B;
                                    break;
                                case n.CODE_C:
                                    t = n.CODE_C;
                                    break;
                                case n.STOP_CODE:
                                    i = !0;
                            }
                            break;
                        case n.CODE_B:
                            if (o.code < 96) a.push(String.fromCharCode(32 + o.code));
                            else switch(o.code !== n.STOP_CODE && (d = !1), o.code){
                                case n.CODE_SHIFT:
                                    l = !0, t = n.CODE_A;
                                    break;
                                case n.CODE_A:
                                    t = n.CODE_A;
                                    break;
                                case n.CODE_C:
                                    t = n.CODE_C;
                                    break;
                                case n.STOP_CODE:
                                    i = !0;
                            }
                            break;
                        case n.CODE_C:
                            if (o.code < 100) a.push(o.code < 10 ? "0" + o.code : o.code);
                            else switch(o.code !== n.STOP_CODE && (d = !1), o.code){
                                case n.CODE_A:
                                    t = n.CODE_A;
                                    break;
                                case n.CODE_B:
                                    t = n.CODE_B;
                                    break;
                                case n.STOP_CODE:
                                    i = !0;
                            }
                    }
                    else i = !0;
                    e && (t = t === n.CODE_A ? n.CODE_B : n.CODE_A);
                }
                return null === o ? null : (o.end = n._nextUnset(n._row, o.end), n._verifyTrailingWhitespace(o) ? (c -= u * s[s.length - 1]) % 103 !== s[s.length - 1] ? null : a.length ? (d && a.splice(a.length - 1, 1), {
                    code: a.join(""),
                    start: r.start,
                    end: o.end,
                    codeset: t,
                    startInfo: r,
                    decodedCodes: f,
                    endInfo: o
                }) : null : null);
            }, i.a.prototype._verifyTrailingWhitespace = function(t) {
                var e, n = this;
                return e = t.end + (t.end - t.start) / 2, e < n._row.length && n._matchRange(t.end, e, 0) ? t : null;
            }, e.a = r;
        },
        function(t, e, n) {
            "use strict";
            function r() {
                o.a.call(this);
            }
            var o = n(31), i = {
                IOQ: /[IOQ]/g,
                AZ09: /[A-Z0-9]{17}/
            };
            r.prototype = Object.create(o.a.prototype), r.prototype.constructor = r, r.prototype._decode = function() {
                var t = o.a.prototype._decode.apply(this);
                if (!t) return null;
                var e = t.code;
                return e ? (e = e.replace(i.IOQ, ""), e.match(i.AZ09) && this._checkChecksum(e) ? (t.code = e, t) : null) : null;
            }, r.prototype._checkChecksum = function(t) {
                return !!t;
            }, e.a = r;
        },
        function(t, e, n) {
            "use strict";
            function r() {
                o.a.call(this);
            }
            var o = n(1), i = n(3), a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*", u = {
                ALPHABETH_STRING: {
                    value: a
                },
                ALPHABET: {
                    value: a.split("").map(function(t) {
                        return t.charCodeAt(0);
                    })
                },
                CHARACTER_ENCODINGS: {
                    value: [
                        276,
                        328,
                        324,
                        322,
                        296,
                        292,
                        290,
                        336,
                        274,
                        266,
                        424,
                        420,
                        418,
                        404,
                        402,
                        394,
                        360,
                        356,
                        354,
                        308,
                        282,
                        344,
                        332,
                        326,
                        300,
                        278,
                        436,
                        434,
                        428,
                        422,
                        406,
                        410,
                        364,
                        358,
                        310,
                        314,
                        302,
                        468,
                        466,
                        458,
                        366,
                        374,
                        430,
                        294,
                        474,
                        470,
                        306,
                        350
                    ]
                },
                ASTERISK: {
                    value: 350
                },
                FORMAT: {
                    value: "code_93",
                    writeable: !1
                }
            };
            r.prototype = Object.create(o.a.prototype, u), r.prototype.constructor = r, r.prototype._decode = function() {
                var t, e, n, r, o = this, a = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ], u = [], c = o._findStart();
                if (!c) return null;
                r = o._nextSet(o._row, c.end);
                do {
                    if (a = o._toCounters(r, a), (n = o._toPattern(a)) < 0) return null;
                    if ((t = o._patternToChar(n)) < 0) return null;
                    u.push(t), e = r, r += i.a.sum(a), r = o._nextSet(o._row, r);
                }while ("*" !== t);
                return u.pop(), u.length && o._verifyEnd(e, r, a) && o._verifyChecksums(u) ? (u = u.slice(0, u.length - 2), null === (u = o._decodeExtended(u)) ? null : {
                    code: u.join(""),
                    start: c.start,
                    end: r,
                    startInfo: c,
                    decodedCodes: u
                }) : null;
            }, r.prototype._verifyEnd = function(t, e) {
                return !(t === e || !this._row[e]);
            }, r.prototype._patternToChar = function(t) {
                var e, n = this;
                for(e = 0; e < n.CHARACTER_ENCODINGS.length; e++)if (n.CHARACTER_ENCODINGS[e] === t) return String.fromCharCode(n.ALPHABET[e]);
                return -1;
            }, r.prototype._toPattern = function(t) {
                for(var e = t.length, n = 0, r = 0, o = 0; o < e; o++)r += t[o];
                for(var i = 0; i < e; i++){
                    var a = Math.round(9 * t[i] / r);
                    if (a < 1 || a > 4) return -1;
                    if (0 == (1 & i)) for(var u = 0; u < a; u++)n = n << 1 | 1;
                    else n <<= a;
                }
                return n;
            }, r.prototype._findStart = function() {
                var t, e, n, r = this, o = r._nextSet(r._row), i = o, a = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ], u = 0, c = !1;
                for(t = o; t < r._row.length; t++)if (r._row[t] ^ c) a[u]++;
                else {
                    if (u === a.length - 1) {
                        if (r._toPattern(a) === r.ASTERISK && (n = Math.floor(Math.max(0, i - (t - i) / 4)), r._matchRange(n, i, 0))) return {
                            start: i,
                            end: t
                        };
                        for(i += a[0] + a[1], e = 0; e < 4; e++)a[e] = a[e + 2];
                        a[4] = 0, a[5] = 0, u--;
                    } else u++;
                    a[u] = 1, c = !c;
                }
                return null;
            }, r.prototype._decodeExtended = function(t) {
                for(var e = t.length, n = [], r = 0; r < e; r++){
                    var o = t[r];
                    if (o >= "a" && o <= "d") {
                        if (r > e - 2) return null;
                        var i = t[++r], a = i.charCodeAt(0), u = void 0;
                        switch(o){
                            case "a":
                                if (!(i >= "A" && i <= "Z")) return null;
                                u = String.fromCharCode(a - 64);
                                break;
                            case "b":
                                if (i >= "A" && i <= "E") u = String.fromCharCode(a - 38);
                                else if (i >= "F" && i <= "J") u = String.fromCharCode(a - 11);
                                else if (i >= "K" && i <= "O") u = String.fromCharCode(a + 16);
                                else if (i >= "P" && i <= "S") u = String.fromCharCode(a + 43);
                                else {
                                    if (!(i >= "T" && i <= "Z")) return null;
                                    u = String.fromCharCode(127);
                                }
                                break;
                            case "c":
                                if (i >= "A" && i <= "O") u = String.fromCharCode(a - 32);
                                else {
                                    if ("Z" !== i) return null;
                                    u = ":";
                                }
                                break;
                            case "d":
                                if (!(i >= "A" && i <= "Z")) return null;
                                u = String.fromCharCode(a + 32);
                        }
                        n.push(u);
                    } else n.push(o);
                }
                return n;
            }, r.prototype._verifyChecksums = function(t) {
                return this._matchCheckChar(t, t.length - 2, 20) && this._matchCheckChar(t, t.length - 1, 15);
            }, r.prototype._matchCheckChar = function(t, e, n) {
                var r = this, o = t.slice(0, e), i = o.length, a = o.reduce(function(t, e, o) {
                    return t + ((o * -1 + (i - 1)) % n + 1) * r.ALPHABET.indexOf(e.charCodeAt(0));
                }, 0);
                return this.ALPHABET[a % 47] === t[e].charCodeAt(0);
            }, e.a = r;
        },
        function(t, e, n) {
            "use strict";
            function r() {
                o.a.call(this);
            }
            var o = n(4), i = {
                FORMAT: {
                    value: "ean_2",
                    writeable: !1
                }
            };
            r.prototype = Object.create(o.a.prototype, i), r.prototype.constructor = r, r.prototype.decode = function(t, e) {
                this._row = t;
                var n, r = 0, o = 0, i = e, a = this._row.length, u = [], c = [];
                for(o = 0; o < 2 && i < a; o++){
                    if (!(n = this._decodeCode(i))) return null;
                    c.push(n), u.push(n.code % 10), n.code >= this.CODE_G_START && (r |= 1 << 1 - o), 1 != o && (i = this._nextSet(this._row, n.end), i = this._nextUnset(this._row, i));
                }
                return 2 != u.length || parseInt(u.join("")) % 4 !== r ? null : {
                    code: u.join(""),
                    decodedCodes: c,
                    end: n.end
                };
            }, e.a = r;
        },
        function(t, e, n) {
            "use strict";
            function r() {
                a.a.call(this);
            }
            function o(t) {
                var e;
                for(e = 0; e < 10; e++)if (t === c[e]) return e;
                return null;
            }
            function i(t) {
                var e, n = t.length, r = 0;
                for(e = n - 2; e >= 0; e -= 2)r += t[e];
                for(r *= 3, e = n - 1; e >= 0; e -= 2)r += t[e];
                return (r *= 3) % 10;
            }
            var a = n(4), u = {
                FORMAT: {
                    value: "ean_5",
                    writeable: !1
                }
            }, c = [
                24,
                20,
                18,
                17,
                12,
                6,
                3,
                10,
                9,
                5
            ];
            r.prototype = Object.create(a.a.prototype, u), r.prototype.constructor = r, r.prototype.decode = function(t, e) {
                this._row = t;
                var n, r = 0, a = 0, u = e, c = this._row.length, s = [], f = [];
                for(a = 0; a < 5 && u < c; a++){
                    if (!(n = this._decodeCode(u))) return null;
                    f.push(n), s.push(n.code % 10), n.code >= this.CODE_G_START && (r |= 1 << 4 - a), 4 != a && (u = this._nextSet(this._row, n.end), u = this._nextUnset(this._row, u));
                }
                return 5 != s.length ? null : i(s) !== o(r) ? null : {
                    code: s.join(""),
                    decodedCodes: f,
                    end: n.end
                };
            }, e.a = r;
        },
        function(t, e, n) {
            "use strict";
            function r(t, e) {
                o.a.call(this, t, e);
            }
            var o = n(4), i = {
                FORMAT: {
                    value: "ean_8",
                    writeable: !1
                }
            };
            r.prototype = Object.create(o.a.prototype, i), r.prototype.constructor = r, r.prototype._decodePayload = function(t, e, n) {
                var r, o = this;
                for(r = 0; r < 4; r++){
                    if (!(t = o._decodeCode(t.end, o.CODE_G_START))) return null;
                    e.push(t.code), n.push(t);
                }
                if (null === (t = o._findPattern(o.MIDDLE_PATTERN, t.end, !0, !1))) return null;
                for(n.push(t), r = 0; r < 4; r++){
                    if (!(t = o._decodeCode(t.end, o.CODE_G_START))) return null;
                    n.push(t), e.push(t.code);
                }
                return t;
            }, e.a = r;
        },
        function(t, e, n) {
            "use strict";
            function r(t) {
                t = a()(o(), t), u.a.call(this, t), this.barSpaceRatio = [
                    1,
                    1
                ], t.normalizeBarSpaceWidth && (this.SINGLE_CODE_ERROR = .38, this.AVG_CODE_ERROR = .09);
            }
            function o() {
                var t = {};
                return Object.keys(r.CONFIG_KEYS).forEach(function(e) {
                    t[e] = r.CONFIG_KEYS[e].default;
                }), t;
            }
            var i = n(28), a = n.n(i), u = n(1), c = 1, s = 3, f = {
                START_PATTERN: {
                    value: [
                        c,
                        c,
                        c,
                        c
                    ]
                },
                STOP_PATTERN: {
                    value: [
                        c,
                        c,
                        s
                    ]
                },
                CODE_PATTERN: {
                    value: [
                        [
                            c,
                            c,
                            s,
                            s,
                            c
                        ],
                        [
                            s,
                            c,
                            c,
                            c,
                            s
                        ],
                        [
                            c,
                            s,
                            c,
                            c,
                            s
                        ],
                        [
                            s,
                            s,
                            c,
                            c,
                            c
                        ],
                        [
                            c,
                            c,
                            s,
                            c,
                            s
                        ],
                        [
                            s,
                            c,
                            s,
                            c,
                            c
                        ],
                        [
                            c,
                            s,
                            s,
                            c,
                            c
                        ],
                        [
                            c,
                            c,
                            c,
                            s,
                            s
                        ],
                        [
                            s,
                            c,
                            c,
                            s,
                            c
                        ],
                        [
                            c,
                            s,
                            c,
                            s,
                            c
                        ]
                    ]
                },
                SINGLE_CODE_ERROR: {
                    value: .78,
                    writable: !0
                },
                AVG_CODE_ERROR: {
                    value: .38,
                    writable: !0
                },
                MAX_CORRECTION_FACTOR: {
                    value: 5
                },
                FORMAT: {
                    value: "i2of5"
                }
            };
            r.prototype = Object.create(u.a.prototype, f), r.prototype.constructor = r, r.prototype._matchPattern = function(t, e) {
                if (this.config.normalizeBarSpaceWidth) {
                    var n, r = [
                        0,
                        0
                    ], o = [
                        0,
                        0
                    ], i = [
                        0,
                        0
                    ], a = this.MAX_CORRECTION_FACTOR, c = 1 / a;
                    for(n = 0; n < t.length; n++)r[n % 2] += t[n], o[n % 2] += e[n];
                    for(i[0] = o[0] / r[0], i[1] = o[1] / r[1], i[0] = Math.max(Math.min(i[0], a), c), i[1] = Math.max(Math.min(i[1], a), c), this.barSpaceRatio = i, n = 0; n < t.length; n++)t[n] *= this.barSpaceRatio[n % 2];
                }
                return u.a.prototype._matchPattern.call(this, t, e);
            }, r.prototype._findPattern = function(t, e, n, r) {
                var o, i, a, u, c = [], s = this, f = 0, l = {
                    error: Number.MAX_VALUE,
                    code: -1,
                    start: 0,
                    end: 0
                }, d = s.AVG_CODE_ERROR;
                for(n = n || !1, r = r || !1, e || (e = s._nextSet(s._row)), o = 0; o < t.length; o++)c[o] = 0;
                for(o = e; o < s._row.length; o++)if (s._row[o] ^ n) c[f]++;
                else {
                    if (f === c.length - 1) {
                        for(u = 0, a = 0; a < c.length; a++)u += c[a];
                        if ((i = s._matchPattern(c, t)) < d) return l.error = i, l.start = o - u, l.end = o, l;
                        if (!r) return null;
                        for(a = 0; a < c.length - 2; a++)c[a] = c[a + 2];
                        c[c.length - 2] = 0, c[c.length - 1] = 0, f--;
                    } else f++;
                    c[f] = 1, n = !n;
                }
                return null;
            }, r.prototype._findStart = function() {
                for(var t, e, n = this, r = n._nextSet(n._row), o = 1; !e;){
                    if (!(e = n._findPattern(n.START_PATTERN, r, !1, !0))) return null;
                    if (o = Math.floor((e.end - e.start) / 4), (t = e.start - 10 * o) >= 0 && n._matchRange(t, e.start, 0)) return e;
                    r = e.end, e = null;
                }
            }, r.prototype._verifyTrailingWhitespace = function(t) {
                var e, n = this;
                return e = t.end + (t.end - t.start) / 2, e < n._row.length && n._matchRange(t.end, e, 0) ? t : null;
            }, r.prototype._findEnd = function() {
                var t, e, n = this;
                return n._row.reverse(), t = n._findPattern(n.STOP_PATTERN), n._row.reverse(), null === t ? null : (e = t.start, t.start = n._row.length - t.end, t.end = n._row.length - e, null !== t ? n._verifyTrailingWhitespace(t) : null);
            }, r.prototype._decodePair = function(t) {
                var e, n, r = [], o = this;
                for(e = 0; e < t.length; e++){
                    if (!(n = o._decodeCode(t[e]))) return null;
                    r.push(n);
                }
                return r;
            }, r.prototype._decodeCode = function(t) {
                var e, n, r, o = this, i = 0, a = o.AVG_CODE_ERROR, u = {
                    error: Number.MAX_VALUE,
                    code: -1,
                    start: 0,
                    end: 0
                };
                for(e = 0; e < t.length; e++)i += t[e];
                for(r = 0; r < o.CODE_PATTERN.length; r++)(n = o._matchPattern(t, o.CODE_PATTERN[r])) < u.error && (u.code = r, u.error = n);
                if (u.error < a) return u;
            }, r.prototype._decodePayload = function(t, e, n) {
                for(var r, o, i = this, a = 0, u = t.length, c = [
                    [
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                ]; a < u;){
                    for(r = 0; r < 5; r++)c[0][r] = t[a] * this.barSpaceRatio[0], c[1][r] = t[a + 1] * this.barSpaceRatio[1], a += 2;
                    if (!(o = i._decodePair(c))) return null;
                    for(r = 0; r < o.length; r++)e.push(o[r].code + ""), n.push(o[r]);
                }
                return o;
            }, r.prototype._verifyCounterLength = function(t) {
                return t.length % 10 == 0;
            }, r.prototype._decode = function() {
                var t, e, n, r = this, o = [], i = [];
                return (t = r._findStart()) ? (i.push(t), (e = r._findEnd()) ? (n = r._fillCounters(t.end, e.start, !1), r._verifyCounterLength(n) && r._decodePayload(n, o, i) ? o.length % 2 != 0 || o.length < 6 ? null : (i.push(e), {
                    code: o.join(""),
                    start: t.start,
                    end: e.end,
                    startInfo: t,
                    decodedCodes: i
                }) : null) : null) : null;
            }, r.CONFIG_KEYS = {
                normalizeBarSpaceWidth: {
                    type: "boolean",
                    default: !1,
                    description: "If true, the reader tries to normalize thewidth-difference between bars and spaces"
                }
            }, e.a = r;
        },
        function(t, e, n) {
            "use strict";
            function r(t, e) {
                o.a.call(this, t, e);
            }
            var o = n(4), i = {
                CODE_FREQUENCY: {
                    value: [
                        [
                            56,
                            52,
                            50,
                            49,
                            44,
                            38,
                            35,
                            42,
                            41,
                            37
                        ],
                        [
                            7,
                            11,
                            13,
                            14,
                            19,
                            25,
                            28,
                            21,
                            22,
                            26
                        ]
                    ]
                },
                STOP_PATTERN: {
                    value: [
                        1 / 6 * 7,
                        1 / 6 * 7,
                        1 / 6 * 7,
                        1 / 6 * 7,
                        1 / 6 * 7,
                        1 / 6 * 7
                    ]
                },
                FORMAT: {
                    value: "upc_e",
                    writeable: !1
                }
            };
            r.prototype = Object.create(o.a.prototype, i), r.prototype.constructor = r, r.prototype._decodePayload = function(t, e, n) {
                var r, o = this, i = 0;
                for(r = 0; r < 6; r++){
                    if (!(t = o._decodeCode(t.end))) return null;
                    t.code >= o.CODE_G_START && (t.code = t.code - o.CODE_G_START, i |= 1 << 5 - r), e.push(t.code), n.push(t);
                }
                return o._determineParity(i, e) ? t : null;
            }, r.prototype._determineParity = function(t, e) {
                var n, r;
                for(r = 0; r < this.CODE_FREQUENCY.length; r++)for(n = 0; n < this.CODE_FREQUENCY[r].length; n++)if (t === this.CODE_FREQUENCY[r][n]) return e.unshift(r), e.push(n), !0;
                return !1;
            }, r.prototype._convertToUPCA = function(t) {
                var e = [
                    t[0]
                ], n = t[t.length - 2];
                return e = n <= 2 ? e.concat(t.slice(1, 3)).concat([
                    n,
                    0,
                    0,
                    0,
                    0
                ]).concat(t.slice(3, 6)) : 3 === n ? e.concat(t.slice(1, 4)).concat([
                    0,
                    0,
                    0,
                    0,
                    0
                ]).concat(t.slice(4, 6)) : 4 === n ? e.concat(t.slice(1, 5)).concat([
                    0,
                    0,
                    0,
                    0,
                    0,
                    t[5]
                ]) : e.concat(t.slice(1, 6)).concat([
                    0,
                    0,
                    0,
                    0,
                    n
                ]), e.push(t[t.length - 1]), e;
            }, r.prototype._checksum = function(t) {
                return o.a.prototype._checksum.call(this, this._convertToUPCA(t));
            }, r.prototype._findEnd = function(t, e) {
                return e = !0, o.a.prototype._findEnd.call(this, t, e);
            }, r.prototype._verifyTrailingWhitespace = function(t) {
                var e, n = this;
                if ((e = t.end + (t.end - t.start) / 2) < n._row.length && n._matchRange(t.end, e, 0)) return t;
            }, e.a = r;
        },
        function(t, e, n) {
            "use strict";
            function r(t, e) {
                o.a.call(this, t, e);
            }
            var o = n(4), i = {
                FORMAT: {
                    value: "upc_a",
                    writeable: !1
                }
            };
            r.prototype = Object.create(o.a.prototype, i), r.prototype.constructor = r, r.prototype._decode = function() {
                var t = o.a.prototype._decode.call(this);
                return t && t.code && 13 === t.code.length && "0" === t.code.charAt(0) ? (t.code = t.code.substring(1), t) : null;
            }, e.a = r;
        },
        function(t, e) {
            function n(t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
            }
            t.exports = n;
        },
        function(t, e) {
            function n() {
                var t = new Float32Array(4);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
            }
            t.exports = n;
        },
        function(t, e) {
            function n(t, e) {
                var n = e[0], r = e[1], o = e[2], i = e[3], a = n * i - o * r;
                return a ? (a = 1 / a, t[0] = i * a, t[1] = -r * a, t[2] = -o * a, t[3] = n * a, t) : null;
            }
            t.exports = n;
        },
        function(t, e) {
            function n(t, e, n) {
                return t[0] = e[0] * n, t[1] = e[1] * n, t;
            }
            t.exports = n;
        },
        function(t, e) {
            function n(t, e, n) {
                var r = e[0], o = e[1];
                return t[0] = n[0] * r + n[2] * o, t[1] = n[1] * r + n[3] * o, t;
            }
            t.exports = n;
        },
        function(t, e) {
            function n(t) {
                var e = new Float32Array(3);
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e;
            }
            t.exports = n;
        },
        function(t, e, n) {
            function r(t) {
                var e = -1, n = null == t ? 0 : t.length;
                for(this.clear(); ++e < n;){
                    var r = t[e];
                    this.set(r[0], r[1]);
                }
            }
            var o = n(122), i = n(123), a = n(124), u = n(125), c = n(126);
            r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                var e = this.__data__ = new o(t);
                this.size = e.size;
            }
            var o = n(10), i = n(149), a = n(150), u = n(151), c = n(152), s = n(153);
            r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = u, r.prototype.has = c, r.prototype.set = s, t.exports = r;
        },
        function(t, e, n) {
            var r = n(5), o = r.Uint8Array;
            t.exports = o;
        },
        function(t, e) {
            function n(t, e, n) {
                switch(n.length){
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2]);
                }
                return t.apply(e, n);
            }
            t.exports = n;
        },
        function(t, e, n) {
            function r(t, e) {
                var n = a(t), r = !n && i(t), f = !n && !r && u(t), d = !n && !r && !f && s(t), h = n || r || f || d, p = h ? o(t.length, String) : [], v = p.length;
                for(var _ in t)!e && !l.call(t, _) || h && ("length" == _ || f && ("offset" == _ || "parent" == _) || d && ("buffer" == _ || "byteLength" == _ || "byteOffset" == _) || c(_, v)) || p.push(_);
                return p;
            }
            var o = n(107), i = n(18), a = n(2), u = n(44), c = n(15), s = n(45), f = Object.prototype, l = f.hasOwnProperty;
            t.exports = r;
        },
        function(t, e) {
            function n(t, e) {
                for(var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;)o[n] = e(t[n], n, t);
                return o;
            }
            t.exports = n;
        },
        function(t, e) {
            function n(t, e) {
                for(var n = -1, r = e.length, o = t.length; ++n < r;)t[o + n] = e[n];
                return t;
            }
            t.exports = n;
        },
        function(t, e, n) {
            var r = n(0), o = Object.create, i = function() {
                function t() {}
                return function(e) {
                    if (!r(e)) return {};
                    if (o) return o(e);
                    t.prototype = e;
                    var n = new t;
                    return t.prototype = void 0, n;
                };
            }();
            t.exports = i;
        },
        function(t, e, n) {
            function r(t, e, n, a, u) {
                var c = -1, s = t.length;
                for(n || (n = i), u || (u = []); ++c < s;){
                    var f = t[c];
                    e > 0 && n(f) ? e > 1 ? r(f, e - 1, n, a, u) : o(u, f) : a || (u[u.length] = f);
                }
                return u;
            }
            var o = n(90), i = n(128);
            t.exports = r;
        },
        function(t, e, n) {
            var r = n(117), o = r();
            t.exports = o;
        },
        function(t, e, n) {
            function r(t, e) {
                e = o(e, t);
                for(var n = 0, r = e.length; null != t && n < r;)t = t[i(e[n++])];
                return n && n == r ? t : void 0;
            }
            var o = n(13), i = n(23);
            t.exports = r;
        },
        function(t, e) {
            function n(t, e) {
                return null != t && e in Object(t);
            }
            t.exports = n;
        },
        function(t, e, n) {
            function r(t) {
                return i(t) && o(t) == a;
            }
            var o = n(8), i = n(6), a = "[object Arguments]";
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                return !(!a(t) || i(t)) && (o(t) ? p : s).test(u(t));
            }
            var o = n(25), i = n(132), a = n(0), u = n(155), c = /[\\^$.*+?()[\]{}|]/g, s = /^\[object .+?Constructor\]$/, f = Function.prototype, l = Object.prototype, d = f.toString, h = l.hasOwnProperty, p = RegExp("^" + d.call(h).replace(c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                return a(t) && i(t.length) && !!u[o(t)];
            }
            var o = n(8), i = n(26), a = n(6), u = {};
            u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1, t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                if (!o(t)) return a(t);
                var e = i(t), n = [];
                for(var r in t)("constructor" != r || !e && c.call(t, r)) && n.push(r);
                return n;
            }
            var o = n(0), i = n(40), a = n(144), u = Object.prototype, c = u.hasOwnProperty;
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e, n, f, l) {
                t !== e && a(e, function(a, s) {
                    if (c(a)) l || (l = new o), u(t, e, s, n, r, f, l);
                    else {
                        var d = f ? f(t[s], a, s + "", t, e, l) : void 0;
                        void 0 === d && (d = a), i(t, s, d);
                    }
                }, s);
            }
            var o = n(85), i = n(35), a = n(93), u = n(101), c = n(0), s = n(46);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e, n, r, y, m, x) {
                var b = t[n], E = e[n], C = x.get(E);
                if (C) return void o(t, n, C);
                var O = m ? m(b, E, n + "", t, e, x) : void 0, A = void 0 === O;
                if (A) {
                    var R = f(E), w = !R && d(E), T = !R && !w && _(E);
                    O = E, R || w || T ? f(b) ? O = b : l(b) ? O = u(b) : w ? (A = !1, O = i(E, !0)) : T ? (A = !1, O = a(E, !0)) : O = [] : v(E) || s(E) ? (O = b, s(b) ? O = g(b) : (!p(b) || r && h(b)) && (O = c(E))) : A = !1;
                }
                A && (x.set(E, O), y(O, E, r, m, x), x.delete(E)), o(t, n, O);
            }
            var o = n(35), i = n(111), a = n(112), u = n(113), c = n(127), s = n(18), f = n(2), l = n(159), d = n(44), h = n(25), p = n(0), v = n(160), _ = n(45), g = n(164);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e) {
                return o(t, e, function(e, n) {
                    return i(t, n);
                });
            }
            var o = n(103), i = n(158);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e, n) {
                for(var r = -1, u = e.length, c = {}; ++r < u;){
                    var s = e[r], f = o(t, s);
                    n(f, s) && i(c, a(s, t), f);
                }
                return c;
            }
            var o = n(94), i = n(105), a = n(13);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e) {
                return a(i(t, e, o), t + "");
            }
            var o = n(43), i = n(41), a = n(42);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e, n, r) {
                if (!u(t)) return t;
                e = i(e, t);
                for(var s = -1, f = e.length, l = f - 1, d = t; null != d && ++s < f;){
                    var h = c(e[s]), p = n;
                    if (s != l) {
                        var v = d[h];
                        p = r ? r(v, h, d) : void 0, void 0 === p && (p = u(v) ? v : a(e[s + 1]) ? [] : {});
                    }
                    o(d, h, p), d = d[h];
                }
                return t;
            }
            var o = n(36), i = n(13), a = n(15), u = n(0), c = n(23);
            t.exports = r;
        },
        function(t, e, n) {
            var r = n(156), o = n(37), i = n(43), a = o ? function(t, e) {
                return o(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: r(e),
                    writable: !0
                });
            } : i;
            t.exports = a;
        },
        function(t, e) {
            function n(t, e) {
                for(var n = -1, r = Array(t); ++n < t;)r[n] = e(n);
                return r;
            }
            t.exports = n;
        },
        function(t, e, n) {
            function r(t) {
                if ("string" == typeof t) return t;
                if (a(t)) return i(t, r) + "";
                if (u(t)) return f ? f.call(t) : "";
                var e = t + "";
                return "0" == e && 1 / t == -c ? "-0" : e;
            }
            var o = n(11), i = n(89), a = n(2), u = n(27), c = 1 / 0, s = o ? o.prototype : void 0, f = s ? s.toString : void 0;
            t.exports = r;
        },
        function(t, e) {
            function n(t) {
                return function(e) {
                    return t(e);
                };
            }
            t.exports = n;
        },
        function(t, e, n) {
            function r(t) {
                var e = new t.constructor(t.byteLength);
                return new o(e).set(new o(t)), e;
            }
            var o = n(86);
            t.exports = r;
        },
        function(t, e, n) {
            (function(t) {
                function r(t, e) {
                    if (e) return t.slice();
                    var n = t.length, r = s ? s(n) : new t.constructor(n);
                    return t.copy(r), r;
                }
                var o = n(5), i = "object" == typeof e && e && !e.nodeType && e, a = i && "object" == typeof t && t && !t.nodeType && t, u = a && a.exports === i, c = u ? o.Buffer : void 0, s = c ? c.allocUnsafe : void 0;
                t.exports = r;
            }).call(e, n(29)(t));
        },
        function(t, e, n) {
            function r(t, e) {
                var n = e ? o(t.buffer) : t.buffer;
                return new t.constructor(n, t.byteOffset, t.length);
            }
            var o = n(110);
            t.exports = r;
        },
        function(t, e) {
            function n(t, e) {
                var n = -1, r = t.length;
                for(e || (e = Array(r)); ++n < r;)e[n] = t[n];
                return e;
            }
            t.exports = n;
        },
        function(t, e, n) {
            function r(t, e, n, r) {
                var a = !n;
                n || (n = {});
                for(var u = -1, c = e.length; ++u < c;){
                    var s = e[u], f = r ? r(n[s], t[s], s, n, t) : void 0;
                    void 0 === f && (f = t[s]), a ? i(n, s, f) : o(n, s, f);
                }
                return n;
            }
            var o = n(36), i = n(21);
            t.exports = r;
        },
        function(t, e, n) {
            var r = n(5), o = r["__core-js_shared__"];
            t.exports = o;
        },
        function(t, e, n) {
            function r(t) {
                return o(function(e, n) {
                    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, u = o > 2 ? n[2] : void 0;
                    for(a = t.length > 3 && "function" == typeof a ? (o--, a) : void 0, u && i(n[0], n[1], u) && (a = o < 3 ? void 0 : a, o = 1), e = Object(e); ++r < o;){
                        var c = n[r];
                        c && t(e, c, r, a);
                    }
                    return e;
                });
            }
            var o = n(104), i = n(129);
            t.exports = r;
        },
        function(t, e) {
            function n(t) {
                return function(e, n, r) {
                    for(var o = -1, i = Object(e), a = r(e), u = a.length; u--;){
                        var c = a[t ? u : ++o];
                        if (n(i[c], c, i) === !1) break;
                    }
                    return e;
                };
            }
            t.exports = n;
        },
        function(t, e, n) {
            function r(t) {
                return a(i(t, void 0, o), t + "");
            }
            var o = n(157), i = n(41), a = n(42);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                var e = a.call(t, c), n = t[c];
                try {
                    t[c] = void 0;
                    var r = !0;
                } catch (t) {}
                var o = u.call(t);
                return r && (e ? t[c] = n : delete t[c]), o;
            }
            var o = n(11), i = Object.prototype, a = i.hasOwnProperty, u = i.toString, c = o ? o.toStringTag : void 0;
            t.exports = r;
        },
        function(t, e) {
            function n(t, e) {
                return null == t ? void 0 : t[e];
            }
            t.exports = n;
        },
        function(t, e, n) {
            function r(t, e, n) {
                e = o(e, t);
                for(var r = -1, f = e.length, l = !1; ++r < f;){
                    var d = s(e[r]);
                    if (!(l = null != t && n(t, d))) break;
                    t = t[d];
                }
                return l || ++r != f ? l : !!(f = null == t ? 0 : t.length) && c(f) && u(d, f) && (a(t) || i(t));
            }
            var o = n(13), i = n(18), a = n(2), u = n(15), c = n(26), s = n(23);
            t.exports = r;
        },
        function(t, e, n) {
            function r() {
                this.__data__ = o ? o(null) : {}, this.size = 0;
            }
            var o = n(16);
            t.exports = r;
        },
        function(t, e) {
            function n(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e;
            }
            t.exports = n;
        },
        function(t, e, n) {
            function r(t) {
                var e = this.__data__;
                if (o) {
                    var n = e[t];
                    return n === i ? void 0 : n;
                }
                return u.call(e, t) ? e[t] : void 0;
            }
            var o = n(16), i = "__lodash_hash_undefined__", a = Object.prototype, u = a.hasOwnProperty;
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                var e = this.__data__;
                return o ? void 0 !== e[t] : a.call(e, t);
            }
            var o = n(16), i = Object.prototype, a = i.hasOwnProperty;
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e) {
                var n = this.__data__;
                return this.size += this.has(t) ? 0 : 1, n[t] = o && void 0 === e ? i : e, this;
            }
            var o = n(16), i = "__lodash_hash_undefined__";
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                return "function" != typeof t.constructor || a(t) ? {} : o(i(t));
            }
            var o = n(91), i = n(39), a = n(40);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                return a(t) || i(t) || !!(u && t && t[u]);
            }
            var o = n(11), i = n(18), a = n(2), u = o ? o.isConcatSpreadable : void 0;
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e, n) {
                if (!u(n)) return !1;
                var r = typeof e;
                return !!("number" == r ? i(n) && a(e, n.length) : "string" == r && e in n) && o(n[e], t);
            }
            var o = n(17), i = n(24), a = n(15), u = n(0);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e) {
                if (o(t)) return !1;
                var n = typeof t;
                return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || u.test(t) || !a.test(t) || null != e && t in Object(e);
            }
            var o = n(2), i = n(27), a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, u = /^\w*$/;
            t.exports = r;
        },
        function(t, e) {
            function n(t) {
                var e = typeof t;
                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
            }
            t.exports = n;
        },
        function(t, e, n) {
            function r(t) {
                return !!i && i in t;
            }
            var o = n(115), i = function() {
                var t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");
                return t ? "Symbol(src)_1." + t : "";
            }();
            t.exports = r;
        },
        function(t, e) {
            function n() {
                this.__data__ = [], this.size = 0;
            }
            t.exports = n;
        },
        function(t, e, n) {
            function r(t) {
                var e = this.__data__, n = o(e, t);
                return !(n < 0) && (n == e.length - 1 ? e.pop() : a.call(e, n, 1), --this.size, !0);
            }
            var o = n(12), i = Array.prototype, a = i.splice;
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                var e = this.__data__, n = o(e, t);
                return n < 0 ? void 0 : e[n][1];
            }
            var o = n(12);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                return o(this.__data__, t) > -1;
            }
            var o = n(12);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e) {
                var n = this.__data__, r = o(n, t);
                return r < 0 ? (++this.size, n.push([
                    t,
                    e
                ])) : n[r][1] = e, this;
            }
            var o = n(12);
            t.exports = r;
        },
        function(t, e, n) {
            function r() {
                this.size = 0, this.__data__ = {
                    hash: new o,
                    map: new (a || i),
                    string: new o
                };
            }
            var o = n(84), i = n(10), a = n(33);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                var e = o(this, t).delete(t);
                return this.size -= e ? 1 : 0, e;
            }
            var o = n(14);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                return o(this, t).get(t);
            }
            var o = n(14);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                return o(this, t).has(t);
            }
            var o = n(14);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e) {
                var n = o(this, t), r = n.size;
                return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
            }
            var o = n(14);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                var e = o(t, function(t) {
                    return n.size === i && n.clear(), t;
                }), n = e.cache;
                return e;
            }
            var o = n(161), i = 500;
            t.exports = r;
        },
        function(t, e) {
            function n(t) {
                var e = [];
                if (null != t) for(var n in Object(t))e.push(n);
                return e;
            }
            t.exports = n;
        },
        function(t, e, n) {
            (function(t) {
                var r = n(38), o = "object" == typeof e && e && !e.nodeType && e, i = o && "object" == typeof t && t && !t.nodeType && t, a = i && i.exports === o, u = a && r.process, c = function() {
                    try {
                        return u && u.binding && u.binding("util");
                    } catch (t) {}
                }();
                t.exports = c;
            }).call(e, n(29)(t));
        },
        function(t, e) {
            function n(t) {
                return o.call(t);
            }
            var r = Object.prototype, o = r.toString;
            t.exports = n;
        },
        function(t, e) {
            function n(t, e) {
                return function(n) {
                    return t(e(n));
                };
            }
            t.exports = n;
        },
        function(t, e) {
            function n(t) {
                var e = 0, n = 0;
                return function() {
                    var a = i(), u = o - (a - n);
                    if (n = a, u > 0) {
                        if (++e >= r) return arguments[0];
                    } else e = 0;
                    return t.apply(void 0, arguments);
                };
            }
            var r = 800, o = 16, i = Date.now;
            t.exports = n;
        },
        function(t, e, n) {
            function r() {
                this.__data__ = new o, this.size = 0;
            }
            var o = n(10);
            t.exports = r;
        },
        function(t, e) {
            function n(t) {
                var e = this.__data__, n = e.delete(t);
                return this.size = e.size, n;
            }
            t.exports = n;
        },
        function(t, e) {
            function n(t) {
                return this.__data__.get(t);
            }
            t.exports = n;
        },
        function(t, e) {
            function n(t) {
                return this.__data__.has(t);
            }
            t.exports = n;
        },
        function(t, e, n) {
            function r(t, e) {
                var n = this.__data__;
                if (n instanceof o) {
                    var r = n.__data__;
                    if (!i || r.length < u - 1) return r.push([
                        t,
                        e
                    ]), this.size = ++n.size, this;
                    n = this.__data__ = new a(r);
                }
                return n.set(t, e), this.size = n.size, this;
            }
            var o = n(10), i = n(33), a = n(34), u = 200;
            t.exports = r;
        },
        function(t, e, n) {
            var r = n(143), o = /^\./, i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, a = /\\(\\)?/g, u = r(function(t) {
                var e = [];
                return o.test(t) && e.push(""), t.replace(i, function(t, n, r, o) {
                    e.push(r ? o.replace(a, "$1") : n || t);
                }), e;
            });
            t.exports = u;
        },
        function(t, e) {
            function n(t) {
                if (null != t) {
                    try {
                        return o.call(t);
                    } catch (t) {}
                    try {
                        return t + "";
                    } catch (t) {}
                }
                return "";
            }
            var r = Function.prototype, o = r.toString;
            t.exports = n;
        },
        function(t, e) {
            function n(t) {
                return function() {
                    return t;
                };
            }
            t.exports = n;
        },
        function(t, e, n) {
            function r(t) {
                return (null == t ? 0 : t.length) ? o(t, 1) : [];
            }
            var o = n(92);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e) {
                return null != t && i(t, e, o);
            }
            var o = n(95), i = n(121);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                return i(t) && o(t);
            }
            var o = n(24), i = n(6);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                if (!a(t) || o(t) != u) return !1;
                var e = i(t);
                if (null === e) return !0;
                var n = l.call(e, "constructor") && e.constructor;
                return "function" == typeof n && n instanceof n && f.call(n) == d;
            }
            var o = n(8), i = n(39), a = n(6), u = "[object Object]", c = Function.prototype, s = Object.prototype, f = c.toString, l = s.hasOwnProperty, d = f.call(Object);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t, e) {
                if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
                var n = function() {
                    var r = arguments, o = e ? e.apply(this, r) : r[0], i = n.cache;
                    if (i.has(o)) return i.get(o);
                    var a = t.apply(this, r);
                    return n.cache = i.set(o, a) || i, a;
                };
                return n.cache = new (r.Cache || o), n;
            }
            var o = n(34), i = "Expected a function";
            r.Cache = o, t.exports = r;
        },
        function(t, e, n) {
            var r = n(102), o = n(118), i = o(function(t, e) {
                return null == t ? {} : r(t, e);
            });
            t.exports = i;
        },
        function(t, e) {
            function n() {
                return !1;
            }
            t.exports = n;
        },
        function(t, e, n) {
            function r(t) {
                return o(t, i(t));
            }
            var o = n(114), i = n(46);
            t.exports = r;
        },
        function(t, e, n) {
            function r(t) {
                return null == t ? "" : o(t);
            }
            var o = n(108);
            t.exports = r;
        },
        function(t, e, n) {
            t.exports = n(48);
        }
    ]);
});

},{}],"k5Hzs":[function(require,module,exports) {
/** ----- More dependencies:
 *  open-food: https://world.openfoodfacts.org/api/v2/product/${barcode}.json
 *  Barcode scanner: https://serratus.github.io/quaggaJS/
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DELAY_RENDER_VIEW_SEC", ()=>DELAY_RENDER_VIEW_SEC);
parcelHelpers.export(exports, "DELAY_AUTOCLOSE_SIDEBAR_SEC", ()=>DELAY_AUTOCLOSE_SIDEBAR_SEC);
parcelHelpers.export(exports, "CSS_TRANSITION_TIME_MS", ()=>CSS_TRANSITION_TIME_MS);
parcelHelpers.export(exports, "OPENFOOD_FACT_API_URL", ()=>OPENFOOD_FACT_API_URL);
const DELAY_RENDER_VIEW_SEC = 0.1;
const DELAY_AUTOCLOSE_SIDEBAR_SEC = 0.1;
const CSS_TRANSITION_TIME_MS = 250;
const OPENFOOD_FACT_API_URL = `https://world.openfoodfacts.org/api/v2/product/`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "updateHash", ()=>updateHash);
parcelHelpers.export(exports, "registerRoute", ()=>registerRoute);
parcelHelpers.export(exports, "updateCurrentView", ()=>updateCurrentView);
parcelHelpers.export(exports, "calculateUpdateBMI", ()=>calculateUpdateBMI);
parcelHelpers.export(exports, "calculateUpdateBMR", ()=>calculateUpdateBMR);
parcelHelpers.export(exports, "calculateUpdateTDEE", ()=>calculateUpdateTDEE);
parcelHelpers.export(exports, "setHealthMetricsSummury", ()=>setHealthMetricsSummury);
parcelHelpers.export(exports, "getBarcode", ()=>getBarcode);
parcelHelpers.export(exports, "getProduct", ()=>getProduct);
var _configJs = require("./config.js");
var _calculatorViewJs = require("./views/calculatorView.js");
var _calculatorViewJsDefault = parcelHelpers.interopDefault(_calculatorViewJs);
var _quagga = require("quagga");
var _quaggaDefault = parcelHelpers.interopDefault(_quagga);
const state = {
    currentView: null,
    routes: {},
    barcodeProduct: {
        barcode: null,
        product: {}
    },
    bmr: null,
    tdee: null,
    tdeeWith10TEF: null,
    bmi: {
        currentBMI: null,
        currentLevel: null,
        levels: {
            lvl1: {
                bmiValue: null,
                color: `#6495ED`,
                description: `Severe Underweight`,
                min: 0,
                max: 15.9
            },
            lvl2: {
                bmiValue: null,
                color: `#1E90FF`,
                description: `Underweight`,
                min: 16,
                max: 18.4
            },
            lvl3: {
                bmiValue: null,
                color: `#32CD32`,
                description: `Normal weight`,
                min: 18.5,
                max: 24.9
            },
            lvl4: {
                bmiValue: null,
                color: `#FFA500`,
                description: `Overweight`,
                min: 25,
                max: 29.9
            },
            lvl5: {
                bmiValue: null,
                color: `#FF8C00`,
                description: `Moderately obese`,
                min: 30,
                max: 34.9
            },
            lvl6: {
                bmiValue: null,
                color: `#FF4500`,
                description: `Severely obese`,
                min: 35,
                max: 39.9
            },
            lvl7: {
                bmiValue: null,
                color: `#FF0000`,
                description: `Very severely obese`,
                min: 40,
                max: 1000
            }
        }
    },
    summuryHealthData: null
};
// ----- HELPER FUNCTIONS ----- //
const updateCurrentBMILevel = function() {
    // Convert levels object to an array
    const levelArray = Object.values(state.bmi.levels);
    // Find the first level that matches with currentBMI
    const matchingLevel = levelArray.find((level)=>{
        return level.min <= state.bmi.currentBMI && level.max >= state.bmi.currentBMI;
    });
    // Update currentLevel of BMI with the found matching level
    state.bmi.currentLevel = matchingLevel;
    state.bmi.currentLevel.bmiValue = state.bmi.currentBMI;
};
const updateHash = function(element) {
    // updates state: change hash (and also in URL)
    state.hash = element.hash;
    window.location.hash = state.hash;
};
const registerRoute = function(hash, view) {
    // updates state: add new view
    state.routes[hash] = view;
};
const updateCurrentView = function(hash) {
    // updates state: update current view
    state.currentView = state.routes[hash];
};
const calculateUpdateBMI = function(data) {
    // FORMULA to Calculate Body Mass Index:
    // BMI = weight / (height * height)
    // transform cm height in m
    const heightMeters = data.height / 100;
    // calculate the actual BMI
    const actualBMI = data.weight / (heightMeters * heightMeters);
    // update current BMI by rounding it to 1 decimal place and retransform in number
    state.bmi.currentBMI = +actualBMI.toFixed(1);
    // updatin currentLevel of BMI
    updateCurrentBMILevel();
};
const calculateUpdateBMR = function(data) {
    // FORMULA to Calculate Basal Metabolic Rate (BMR)
    // For men: BMR = (10 * weight in kg) + (6.25 * height in cm) - (5 * age in years) + 5
    // For women: BMR = (10 * weight in kg) + (6.25 * height in cm) - (5 * age in years) - 161
    const wightKg = +data.weight;
    const heightCm = +data.height;
    const ageYears = +data.age;
    const neutralBMR = 10 * wightKg + 6.25 * heightCm - 5 * ageYears;
    if (data.gender === `male`) state.bmr = neutralBMR + 5;
    if (data.gender === `female`) state.bmr = neutralBMR - 161;
};
const calculateUpdateTDEE = function(data) {
    // FORMULA to Calculate Total Daily Energy Expenditure (TDEE):
    // TDEE = BMR×PAL
    // this TDEE value will be without TEF
    const pal = +data.pal;
    const tdee = state.bmr * pal;
    state.tdee = tdee;
    // calculate the TDEE with estimated +10% of TEF of an average diet
    const tdeeWithTEF = state.tdee * 1.1;
    state.tdeeWith10TEF = tdeeWithTEF;
};
const setHealthMetricsSummury = function() {
    state.summuryHealthData = {
        bmi: state.bmi.currentLevel,
        bmr: state.bmr.toFixed(2),
        tdee: state.tdee.toFixed(2),
        tdeeWithEstimatedTEF: state.tdeeWith10TEF.toFixed(2)
    };
};
const getBarcode = function(domElement) {
    // promisifying function to make it wait until the code is read
    return new Promise((resolve, reject)=>{
        // redeclare the variables for easier readability
        const barcodeInteractive = domElement;
        // Quagga.init(options, callback)
        (0, _quaggaDefault.default).init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: barcodeInteractive,
                constraints: {
                    facingMode: "environment",
                    width: {
                        ideal: 1920
                    },
                    height: {
                        ideal: 1080
                    },
                    aspectRatio: {
                        ideal: 1.777777778
                    },
                    focusMode: "continuous"
                }
            },
            locator: {
                // patchSize: Determines the size of the patches Quagga analyzes for detecting barcodes.
                // Options are "x-small", "small", "medium", "large", "x-large".
                // Smaller sizes can increase performance but may reduce detection accuracy,
                // while larger sizes may improve accuracy but reduce performance.
                // "medium" is a balanced choice for both speed and accuracy.
                patchSize: "medium",
                // halfSample: Controls whether Quagga should operate in half-sample mode.
                // When set to true, the image is scaled down to half its size before processing.
                // This can significantly improve performance with a potential trade-off in detection accuracy,
                // especially useful for high-resolution inputs or devices with powerful cameras.
                halfSample: true
            },
            decoder: {
                readers: [
                    {
                        format: "ean_reader",
                        config: {
                            supplements: [
                                "ean_2_reader"
                            ]
                        }
                    },
                    "ean_8_reader",
                    "ean_reader"
                ]
            },
            locate: true
        }, function(err) {
            if (err) {
                console.log(err);
                reject(err); // Reject the promise if there's an initialization error
                return;
            }
            (0, _quaggaDefault.default).start();
        });
        (0, _quaggaDefault.default).onDetected(function(result) {
            // get the actual codebar value
            const code = result.codeResult.code;
            (0, _quaggaDefault.default).stop();
            // Resolve the promise with the detected code
            resolve(code);
        });
    });
};
const getProduct = async function(barcode) {
    try {
        // update state
        state.barcodeProduct.barcode = +barcode;
        // fetching API
        const response = await fetch(`${_configJs.OPENFOOD_FACT_API_URL}${barcode}.json`);
        if (!response.ok) throw new Error(`Somethig went wrong: ${response.status}`);
        // if response is positive convert from json
        const data = await response.json();
        // update state
        state.barcodeProduct.product = {
            barcode: data?.code,
            imageUrl: data?.product?.image_url,
            product: data?.product?.product_name,
            category: data?.product?.categories,
            brand: data?.product?.brands,
            country: data?.product?.countries,
            quantity: data?.product?.quantity,
            allergens: data?.product?.allergens_from_ingredients,
            nutrients: {
                energy: {
                    name: `energy`,
                    value: data.product.nutriments.energy_100g,
                    unit: data.product.nutriments.energy_unit
                },
                carbohydrates: {
                    name: `carbohydrates`,
                    value: data?.product?.nutriments?.carbohydrates_100g,
                    unit: data?.product?.nutriments?.carbohydrates_unit
                },
                sugar: {
                    name: `sugar`,
                    value: data?.product?.nutriments?.sugars_100g,
                    unit: data?.product?.nutriments?.sugars_unit
                },
                fat: {
                    name: `fat`,
                    value: data?.product?.nutriments?.fat_100g,
                    unit: data?.product?.nutriments?.fat_unit
                },
                saturatedFat: {
                    name: `saturated fat`,
                    value: data?.product?.nutriments?.["saturated - fat_100g"],
                    unit: data?.product?.nutriments?.["saturated - fat_unit"]
                },
                proteins: {
                    name: `proteins`,
                    value: data?.product?.nutriments?.proteins_100g,
                    unit: data?.product?.nutriments?.proteins_unit
                },
                fiber: {
                    name: `fiber`,
                    value: data?.product?.nutriments?.fiber_100g,
                    unit: data?.product?.nutriments?.fiber_unit
                },
                sodium: {
                    name: `sodium`,
                    value: data?.product?.nutriments?.sodium_100g,
                    unit: data?.product?.nutriments?.sodium_unit
                },
                salt: {
                    name: `salt`,
                    value: data?.product?.nutriments?.salt_100g,
                    unit: data?.product?.nutriments?.salt_unit
                }
            },
            ingredients: data?.product?.ingredients
        };
        // return actual product to controller
        return state.barcodeProduct.product;
    } catch (err) {
        console.log(err);
        throw err;
    }
}; /**
 * The willReadFrequently attribute is a hint you can provide to the browser 
 * that you intend to perform these kinds of operations often. 
 * This allows the browser to optimize how it handles the canvas, 
 * potentially improving performance by keeping the data in a format
 * that's faster to access or by making other optimizations behind the scenes.
 * 
 *  const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });
 */  // "code_128_reader",
 // "ean_8_reader",
 // "ean_reader", // For EAN-13
 // "upc_reader", // For UPC-A
 // "code_39_reader",
 // "code_39_vin_reader",
 // "codabar_reader",
 // "upc_e_reader",
 // "i2of5_reader",

},{"./config.js":"k5Hzs","./views/calculatorView.js":"e6BL6","quagga":"fEVYk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e6BL6":[function(require,module,exports) {
// import { reject } from "core-js/fn/promise";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mainViewJs = require("./MainView.js");
var _mainViewJsDefault = parcelHelpers.interopDefault(_mainViewJs);
var _configJs = require("../config.js");
class CalculatorView extends (0, _mainViewJsDefault.default) {
    //   _parentElement = document.querySelector(`.calculator-view `);
    // calc-secondary--box is universal container to remove any 2nd child before adding one more
    _generateMarkupHtml() {
        return `
    <div class="calculator-view hidden-right">
          <div class="container">
            <form class="calculator--form">
              <h2>EateryMeter's Adult Body Metrics: Quick Health Insights</h2>

              <div class="form__radio-raw">
                <div class="radio-raw--choice">
                  <input
                    required
                    class="custom--radio-input"
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                  />
                  <label class="form__label" for="male">Male</label>
                </div>
                <div class="radio-raw--choice">
                  <input
                    class="custom--radio-input"
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                  <label class="form__label" for="female">Female</label>
                </div>
              </div>

              <div class="form__row">
                <label class="form__label">Height</label>
                <input
                  name="height"
                  required
                  type="number"
                  class="form__input form__input--cm"
                  placeholder="cm"
                />
              </div>

              <div class="form__row">
                <label class="form__label">Weight</label>
                <input
                  name="weight"
                  required
                  type="number"
                  class="form__input form__input--kg"
                  placeholder="kg"
                />
              </div>

              <div class="form__row">
                <label class="form__label">Age</label>
                <input
                  name="age"
                  required
                  type="number"
                  class="form__input form__input--years"
                  placeholder="years"
                />
              </div>

              <div class="form__select-row">
                <label class="form__label">Physical Activity Level</label>
                <select required name="pal">
                  <option value="">--Please choose an option--</option>
                  <option value="1.2">
                    Sedentary (little or no exercise)
                  </option>
                  <option value="1.375">
                    Lightly active (light exercise/sports 1-3 days/week)
                  </option>
                  <option value="1.55">
                    Moderately active (moderate exercise/sports 3-5 days/week)
                  </option>
                  <option value="1.725">
                    Very active (hard exercise/sports 6-7 days a week)
                  </option>
                  <option value="1.9">
                    Extra active (very hard exercise/sports & a physical job)
                  </option>
                </select>
              </div>

              <div class="btn-container">
                <button type="submit" class="btn calculate--calculator">Calculate</button>
                <button type="button" class="btn open-modal-window" data-dialogue="bmi">What's BMI?</button>
                <button type="button" class="btn open-modal-window" data-dialogue="bmr">What's BMR?</button>
                <button type="button" class="btn open-modal-window" data-dialogue="tef">What's TEF?</button>
                <button type="button" class="btn open-modal-window" data-dialogue="tdee">What's TDEE?</button>
              </div>

            </form>
          </div>
        </div>
    `;
    }
    _generateErrorMarkup() {
        return `
    <div class="container calculator-error calc-secondary--box hidden-right">
      <h2>Something went wrong...</h2>
      <h3>Please Enter the Correct Value.</h3>
    </div>
    `;
    }
    _updateResultsStyle(healthData) {
        this._mainElement.querySelector(`.calculator-container-result`).style.borderColor = healthData.bmi.color;
    }
    _checkOrRemoveElement(className) {
        return new Promise((resolve, reject)=>{
            // check if there is already this element on page
            const elementDOM = this._mainElement.querySelector(`${className}`);
            // if no element just exit function
            if (!elementDOM) {
                resolve();
                return;
            }
            // if there is already a message add hidden class to create animation
            elementDOM.classList.add(`hidden-right`);
            // Wait for the CSS transition to finish before removing the div and resolving the promise
            setTimeout(()=>{
                elementDOM.remove();
                resolve();
            }, _configJs.CSS_TRANSITION_TIME_MS);
        });
    }
    generateResultMarkup(healthData) {
        return `
    <div class="container calculator-container-result calc-secondary--box hidden-right">
        <h2>Your Personal Health Metrics Results:</h2>
        <div class="form__row">
          <h3>BMI:</h3>
          <h3 class="bmi--result--number">${healthData.bmi.bmiValue} (${healthData.bmi.description})</h3>
        </div>
        <div class="form__row">
          <h3>BMR:</h3>
          <h3 class="bmr--result--number">${healthData.bmr} kcal</h3>
        </div>
        <div class="form__row">
          <h3>TDEE (without TEF):</h3>
          <h3 class="tdee--result--number">${healthData.tdee} kcal per day</h3>
        </div>
        <div class="form__row">
          <h3>TDEE (+10% TEF):</h3>
          <h3 class="tdee--result--number">${healthData.tdeeWithEstimatedTEF} kcal per day</h3>
        </div>
        <p class="disclaimer">
          <strong>Health Disclaimer for EateryMeter</strong>
          <br />
          EateryMeter's health metrics (BMI, BMR, TDEE) are general guides,
          not medical advice. Individual health varies. Always consult a
          healthcare provider for personal advice. Use at your own risk.
        </p>
      </div>
    `;
    }
    renderErrorWrongValue() {
        // check if there is already an error message on page, in case remove it
        this._checkOrRemoveElement(`.calc-secondary--box`).then(()=>{
            // generate new html markup
            const errorMarkup = this._generateErrorMarkup();
            // add it to UI
            this._mainElement.querySelector(`.calculator-view`).insertAdjacentHTML(`beforeend`, errorMarkup);
            // then remove hidden class to add some transtion animation
            setTimeout(()=>{
                this._mainElement.querySelector(`.calculator-error`).classList.remove(`hidden-right`);
            }, _configJs.CSS_TRANSITION_TIME_MS);
        });
    }
    renderResults(markupHtml, healthData) {
        this._checkOrRemoveElement(`.calc-secondary--box`).then(()=>{
            // Add it to UI
            this._mainElement.querySelector(`.calculator-view`).insertAdjacentHTML(`beforeend`, markupHtml);
            // Return a new promise that resolves after the timeout
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    this._mainElement.querySelector(`.calculator-container-result`).classList.remove(`hidden-right`);
                    // Resolve the promise after the class removal and timeout
                    resolve();
                }, _configJs.CSS_TRANSITION_TIME_MS);
            });
        }).then(()=>{
            // chanining methods to be sure to add style to an already existing element
            this._updateResultsStyle(healthData);
        });
    }
    addHandlerGetFormData(subscriberFn) {
        // listening the main element (always exists)#
        // set `useCapture` parameter of event listener to true
        // which means the event listener is set in the capture phase, not the bubbling phase
        this._mainElement.addEventListener("submit", (e)=>{
            // Prevent the default form submission
            e.preventDefault();
            // Check if the event target is a form or find the closest parent form
            const calcForm = e.target.closest(`.calculator--form`);
            // guard clause
            if (!calcForm) return;
            // get the form object and obtain an array by spreading it
            const dataArray = [
                ...new FormData(calcForm)
            ];
            // convert to actual array from dataArray (has entries structure)
            const dataObj = Object.fromEntries(dataArray);
            // Reset the form to its default values
            calcForm.reset();
            // handled by controller
            subscriberFn(dataObj);
        }, true);
    }
    addHandlerModalWindowses() {
        this._mainElement.addEventListener(`click`, (e)=>{
            // check if there is a btn
            const openModalBtn = e.target.closest(`.open-modal-window`);
            if (!openModalBtn) return;
            // get the data attribute
            const dataBtn = openModalBtn.dataset.dialogue;
            // show the dialogue window which matches the data-attribute
            const modalWindow = document.getElementById(`dialog--${dataBtn}`);
            if (!modalWindow) return;
            // open matching modal window
            modalWindow.showModal();
            // creating class property
            this._modalWindow = modalWindow;
            // to close clicking on overlay
            modalWindow.addEventListener(`click`, (event)=>{
                const dialogDimensions = modalWindow.getBoundingClientRect();
                if (event.clientX < dialogDimensions.left || event.clientX > dialogDimensions.right || event.clientY < dialogDimensions.top || event.clientY > dialogDimensions.bottom) modalWindow.close();
            });
        });
    }
    addHandlerCloseModalWithBtn() {
        document.addEventListener(`click`, (e)=>{
            const btnClose = e.target.closest(`.close-modal`);
            if (!btnClose) return;
            this._modalWindow.close();
        });
    }
}
exports.default = new CalculatorView();

},{"./MainView.js":"8ymy6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../config.js":"k5Hzs"}],"8ymy6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("../config.js");
class MainView {
    _mainElement = document.querySelector(`.main`);
    render() {
        // await cleaning main container with animation
        this._clearMainContainer().then(()=>{
            // then create the new html
            const markupHtml = this._generateMarkupHtml();
            // insert the new html inside the main container
            this._mainElement.insertAdjacentHTML(`afterbegin`, markupHtml);
            // set new parent element (only for instances)
            this._setParentElement();
            // then remove hidden class with delay to achieve animation
            setTimeout(()=>{
                this._showParentElement();
            }, _configJs.DELAY_RENDER_VIEW_SEC * 1000);
        });
    }
    _clearMainContainer() {
        // Promisifying function (arrow function to use correct 'this' keyword)
        return new Promise((resolve)=>{
            // if there is a child, add .hidden-right to this child (make animation)
            if (this._mainElement.firstElementChild) this._mainElement.firstElementChild.classList.add(`hidden-right`);
            // after the same time of css animation time, eliminate inner html and resolve promise()
            setTimeout(()=>{
                this._mainElement.innerHTML = ``;
                resolve();
            }, _configJs.CSS_TRANSITION_TIME_MS);
        });
    }
    _setParentElement() {
        this._parentElement = this._mainElement.firstElementChild;
    }
    _showParentElement() {
        this._parentElement.classList.remove(`hidden-right`);
    }
}
exports.default = MainView;

},{"../config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eUObu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("../config.js");
class SidebarView {
    _parentElement = document.querySelector(`.sidebar`);
    _sidebarCheckbox = document.getElementById(`sibebar-opener`);
    openCloseSidebar(boolean) {
        if (boolean) this._parentElement.classList.add(`sidebar--expanded`);
        else this._parentElement.classList.remove(`sidebar--expanded`);
    }
    closeSidebar() {
        // exit function if sidebar is not opened
        if (!this._parentElement.classList.contains(`sidebar--expanded`)) return;
        // remove checkbox
        this._parentElement.querySelector(`.sidebar--checkbox`).checked = false;
        // and actually close sidebar after given seconds
        setTimeout(()=>{
            this._parentElement.classList.remove(`sidebar--expanded`);
        }, _configJs.DELAY_AUTOCLOSE_SIDEBAR_SEC * 1000);
    }
    addHandlerManagerSibebar(subscribeFunc) {
        // listening on changes of ckeckbox
        this._sidebarCheckbox.addEventListener(`change`, (e)=>{
            // passing boolean (checked or not) as argument
            subscribeFunc(e.target.checked);
        });
    }
    addHandlerManagerLinks(subscribeFunc) {
        this._parentElement.addEventListener(`click`, (e)=>{
            const itemClicked = e.target.closest(`.__features--item`);
            if (!itemClicked) return;
            const anchorCliked = itemClicked.querySelector(`.feature--link`);
            subscribeFunc(anchorCliked);
        });
    }
}
exports.default = new SidebarView();

},{"../config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5HgCT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mainViewJs = require("./MainView.js");
var _mainViewJsDefault = parcelHelpers.interopDefault(_mainViewJs);
// import chefImage from "../../img/chef.svg";
var _logoSmallPng = require("../../img/logo-small.png");
var _logoSmallPngDefault = parcelHelpers.interopDefault(_logoSmallPng);
class HomepageView extends (0, _mainViewJsDefault.default) {
    // _parentElement = document.querySelector(`.homepage--container`);
    _generateMarkupHtml() {
        return `
    <div class="homepage--container hidden-right">
        <div class="img-wrapper--chef noSelect">
        <img
            class="image up-down-animated"
            src="${0, _logoSmallPngDefault.default}"
            alt="image of an avocado"
        />
        </div>
        <div class="homepage-content">
          <h1>Welcome to EateryMeter</h1>
          <h3>Your Ultimate Guide to Health and Nutrition</h3>
          <hr />
          <p>
            Navigate the world of wellness with EateryMeter, your premier digital partner for a healthy lifestyle. Whether you're looking to understand your body's needs through precise BMI, BMR, and TDEE calculations or eager to explore the detailed nutrition profile of everyday products, EateryMeter is here for you. With our advanced barcode scanning feature, uncover the vital details of ingredients, allergens, nutrients, brand information, and much more, right at your fingertips. Gear up for an empowered, well-informed journey towards better health and nutrition today.
          </p>
            <div class="btn--container">
              <a href="#home" class="btn btn--hashlink noSelect" role="button">Home</a>
              <a href="#calculator" class="btn btn--hashlink noSelect" role="button">Calculator</a>
              <a href="#barcode" class="btn btn--hashlink noSelect" role="button">Barcode</a>
            </div>
        </div>
    </div>
    `;
    }
    addHandlerButtonsLinks(subscribeFunc) {
        this._mainElement.addEventListener(`click`, (e)=>{
            const itemClicked = e.target.closest(`.btn--hashlink`);
            if (!itemClicked) return;
            subscribeFunc(itemClicked);
        });
    }
}
exports.default = new HomepageView();

},{"./MainView.js":"8ymy6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../img/logo-small.png":"1uiQE"}],"1uiQE":[function(require,module,exports) {
module.exports = require("b1cff42d6b6f0f2e").getBundleURL("hWUTQ") + "logo-small.597e3d1d.png" + "?" + Date.now();

},{"b1cff42d6b6f0f2e":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"ktkUL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("../config.js");
var _mainViewJs = require("./MainView.js");
var _mainViewJsDefault = parcelHelpers.interopDefault(_mainViewJs);
class BarcodeView extends (0, _mainViewJsDefault.default) {
    _generateMarkupHtml() {
        return `
    <div class="barcode--view hidden-right">
      <div class="viewport barcode--interactive hidden-top"></div>
      <form class="barcode--form container">
        <div class="form__row">
          <label for="barcode--input" class="form__label">Barcode</label>
          <input
            class="form__input"
            type="text"
            name="barcode--input"
            placeholder="number"
          />
        </div>
        <div class="barcode--buttons">
          <button class="btn btn--scan-barcode" type="button">
            Start Scan
          </button>
          <button class="btn btn--close-barcode" type="button">
            Stop Scan
          </button>
          <button class="btn btn--check-barcode" type="button">
            Check
          </button>
        </div>
      </form>      
     </div>
    `;
    }
    checkCardOnPageOrRemoveCard() {
        // checks if there is any card on page
        // in case removes it fish animation
        // returns a promise so can be chaned
        return new Promise((resolve, reject)=>{
            const card = this._mainElement.querySelector(`.product-card`);
            if (!card) {
                // If no card is found, resolve immediately since there's nothing to remove
                resolve();
                return;
            }
            // Add the class to start the animation
            card.classList.add(`hidden-right`);
            // Wait for the CSS transition to finish before removing the card and resolving the promise
            setTimeout(()=>{
                card.remove();
                resolve(); // Resolve the promise here
            }, _configJs.CSS_TRANSITION_TIME_MS);
        });
    }
    renderNewCard(cardMarkap) {
        // inserts card as last child of .barcode--view
        // then removes the hidden class to obtain animation
        this._mainElement.querySelector(`.barcode--view`).insertAdjacentHTML(`beforeend`, cardMarkap);
        const cardElement = this._mainElement.querySelector(`.product-card`);
        setTimeout(()=>{
            cardElement.classList.remove(`hidden-right`);
        }, _configJs.CSS_TRANSITION_TIME_MS);
    }
    generateProductCardMarkup(product) {
        return `
      <div class="product-card container hidden-right">
          <div class="product-card--main">
            <div class="product-card--main-img">
              <img
                class="image"
                src=${product.imageUrl}
                alt="product image"
              />
            </div>
            <div class="product-card--main-info grid-close">
              <h2 class="card__title">\u{1F6D2} Info</h2>
              <ul class="card__list">
                <li class="card__list-item">
                  <span class="card__list-item--caption">barcode:</span>
                  <span class="card__list-item--value">${product.barcode}</span>
                </li>
                <li class="card__list-item">
                  <span class="card__list-item--caption">product:</span>
                  <span class="card__list-item--value">${product.product}</span>
                </li>
                <li class="card__list-item">
                  <span class="card__list-item--caption">category:</span>
                  <span class="card__list-item--value">${product.category}</span>
                </li>
                <li class="card__list-item">
                  <span class="card__list-item--caption">brand:</span>
                  <span class="card__list-item--value">${product.brand}</span>
                </li>
                <li class="card__list-item">
                  <span class="card__list-item--caption">country:</span>
                  <span class="card__list-item--value">${product.country}</span>
                </li>
                <li class="card__list-item">
                  <span class="card__list-item--caption">quantity:</span>
                  <span class="card__list-item--value">${product.quantity}</span>
                </li>
              </ul>
            </div>
          </div>

          
          ${this._checkAndGenerateNutrientsMarkup(product.nutrients)}
          
          ${this._checkAndGenerateIngredientsMarkup(product.ingredients)}

          ${this._checkAndGenerateAllergensMarkup(product.allergens)}

          <h4>source: <a target="_blank" href="https://world.openfoodfacts.org/">OpenFoodFacts</a></h4>
          <p class="disclaimer">
            <strong>Product Info Disclaimer for EateryMeter</strong>
            <br />
            Information provided here is based on third-party sources and may not be accurate or current. Verify with the actual product. Use at your own risk.
          </p>
        </div>
    `;
    }
    _checkAndGenerateIngredientsMarkup(ingredients) {
        // if array of ingredients is not empty create div container
        // else return empty string
        return ingredients.length > 0 ? `
        <div class="product-card--ingredients grid-far">
        <h2 class="card__title">\u{1F966} Ingredients</h2>
        <ul class="card__list">

        ${ingredients.map(this._generateIngredientSubMarkup).join(``)}

        </ul>
      </div>
    ` : ``;
    }
    _generateIngredientSubMarkup(ingredient) {
        return `
    <li class="card__list-item">
    <span class="card__list-item--caption caption-ingredient">${ingredient.text}</span>
    <span class="card__list-item--value">\u{2248} ${ingredient.percent_estimate.toFixed(2)}%</span>
  </li>
    `;
    }
    _checkAndGenerateNutrientsMarkup(nutrients) {
        // First, filter the keys to only those whose corresponding value is not empty.
        const filteredNutrientKeys = Object.keys(nutrients).filter((nutrientKey)=>{
            // Access each nutrient object by its key and then check the 'value' property
            const nutrient = nutrients[nutrientKey];
            // nutrient is "not empty" if it has a 'value' property that is not undefined
            return nutrient.value !== undefined && nutrient.unit !== undefined;
        });
        // check if there are nutrients before create div with unordered list
        // so get the second element (index 1) of each entry
        // and check if its  nested `value` property is not undefined
        return filteredNutrientKeys.length > 0 ? `
      <div class="product-card--nutriments grid-far">
        <h2 class="card__title">\u{1F52C} Nutrients (100g)</h2>
        <ul class="card__list">

          ${Object.entries(nutrients).map((nutrient)=>{
            if (nutrient[1].value === undefined) return "";
            return this._generateNutrientsSubMarkup(nutrient[1]);
        }).join(``)}
          
        </ul>
      </div>
      ` : ``;
    }
    generateErrorMarkup(error) {
        return `
    <div class="product-card container card-error-container hidden-right">
      <h2 class="card__title">\u{1F615} Product not found</h2>
      <p class="card__list-item--caption">${error.message}</p>
    </div>
    `;
    }
    _generateNutrientsSubMarkup(nutrient) {
        // generating list element for each element of array of nutrients
        return `
    <li class="card__list-item">
      <span class="card__list-item--caption">${nutrient.name}:</span>
      <span class="card__list-item--value">${nutrient.value}${nutrient.unit}</span>
    </li>
    `;
    }
    _checkAndGenerateAllergensMarkup(allergens) {
        // first check if there are any allergens before create a div
        if (!allergens) return ``;
        return `
    <div class="product-card--allergens">
    <h2 class="card__title">\u{26A0}\u{FE0F} Allergens</h2>
    <ul class="card__list-list">

    ${allergens.split(",").map(this._generateAllergensSubMarkup).join(``)}

    </ul>
  </div>
    `;
    }
    _generateAllergensSubMarkup(allergen) {
        return `
    <li>${allergen}</li>
    `;
    }
    showbarcodeInteractive() {
        // make the barcodeInteractive element visible
        this.barcodeInteractive.style.display = "block";
        this.barcodeInteractive.classList.remove(`hidden-top`);
    }
    hidebarcodeInteractive() {
        // Hide the barcodeInteractive element
        this.barcodeInteractive.classList.add(`hidden-top`);
        setTimeout(()=>{
            // also make it
            this.barcodeInteractive.style.display = "none";
        }, _configJs.CSS_TRANSITION_TIME_MS);
    }
    setNewBarcodeInputValue(newValue) {
        this.barcodeInput.value = newValue;
    }
    getBarcodeDOMElement() {
        // selecting elements
        this.barcodeScanBtn = this._mainElement.querySelector(`.btn--scan-barcode`);
        this.barcodeInput = this._mainElement.querySelector('input[name="barcode--input"]');
        this.barcodeInteractive = this._mainElement.querySelector(`.barcode--interactive`);
        // returning new DOM elements to controller
        return this.barcodeInteractive;
    }
    addHandlerBarcodeScanner(subscriberFunc) {
        // add evenet listener to "scan" button
        this._mainElement.addEventListener(`click`, (e)=>{
            const btnScan = e.target.closest(`.btn--scan-barcode`);
            // check if there is any button
            if (!btnScan) return;
            // activate controlBarcodeScanner
            subscriberFunc();
        });
    }
    addHandlerStopBarcodeScanner(subscriberFunc) {
        // check if stop scanning button was clicked
        this._mainElement.addEventListener(`click`, (e)=>{
            const stopBtn = e.target.closest(`.btn--close-barcode`);
            if (!stopBtn) return;
            // if it was clicked make controller close scanner
            subscriberFunc();
        });
    }
    addHandlerCheckBarcode(subscriberFunc) {
        this._mainElement.addEventListener(`click`, (e)=>{
            // get check button
            const checkBtn = e.target.closest(`.btn--check-barcode`);
            if (!checkBtn) return;
            // get actual barcode value
            const barcodeValue = this._parentElement.querySelector(`.form__input`).value;
            if (!barcodeValue) return;
            // empty the input field and send barcode value to controller
            this._parentElement.querySelector(`.form__input`).value = ``;
            subscriberFunc(barcodeValue);
        });
    }
}
exports.default = new BarcodeView();

},{"../config.js":"k5Hzs","./MainView.js":"8ymy6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hycaY","aenu9"], "aenu9", "parcelRequire8f4a")

//# sourceMappingURL=index.e37f48ea.js.map
