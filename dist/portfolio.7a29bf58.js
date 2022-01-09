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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
})({"hu6zD":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "b9549bd87a29bf58";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lROuo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _smoothScrollIntoViewIfNeeded = require("smooth-scroll-into-view-if-needed");
var _smoothScrollIntoViewIfNeededDefault = parcelHelpers.interopDefault(_smoothScrollIntoViewIfNeeded);
const allCases = document.querySelectorAll(".case-card");
const casesContainer = document.querySelector(".cases-section__grid");
const allTags = document.querySelectorAll("[data-tag]");
function hideAllCases() {
    allCases.forEach((el)=>{
        el.remove();
    });
}
function showAllCases() {
    allCases.forEach((el)=>{
        casesContainer.append(el);
    });
}
function highlightActiveTag(tag) {
    allTags.forEach((el)=>{
        if (el.textContent === tag) el.classList.add("active");
        else el.classList.remove("active");
    });
}
function showMatchingCases(tag) {
    allCases.forEach((el)=>{
        const tags = el.getAttribute("data-category").split(",");
        if (tags.includes(tag)) casesContainer.append(el);
    });
}
function addTagToUrl(tag) {
    const isPortfolioPage = window.location.href.includes('portfolio');
    const host = window.location.origin;
    const urlPath = host + '/portfolio.html?category=' + tag;
    const pageTitle = 'Portfolio | ' + tag;
    const html = document.body.innerHTML;
    window.history.pushState({
        html,
        pageTitle
    }, "", urlPath);
    if (isPortfolioPage === false) window.location.reload();
}
function selectCategory(tag) {
    addTagToUrl(tag);
    highlightActiveTag(tag);
    hideAllCases();
    if (tag.toLowerCase() === 'all projects') {
        showAllCases();
        return;
    }
    showMatchingCases(tag);
}
function detectTagInURL() {
    if (window.location.href.includes('?category=')) {
        const tag = window.location.href.split('?category=')[1];
        const filter = document.querySelector(".filter");
        selectCategory(tag);
        _smoothScrollIntoViewIfNeededDefault.default(filter, {
            behavior: 'smooth',
            scrollMode: 'if-needed'
        });
    }
}
document.body.addEventListener("click", (e)=>{
    if (e.target.hasAttribute("data-tag")) {
        const tag = e.target.textContent;
        selectCategory(tag);
    }
});
document.addEventListener("DOMContentLoaded", detectTagInURL);

},{"smooth-scroll-into-view-if-needed":"kfN20","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kfN20":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scrollIntoViewIfNeeded = require("scroll-into-view-if-needed");
var _scrollIntoViewIfNeededDefault = parcelHelpers.interopDefault(_scrollIntoViewIfNeeded);
var memoizedNow;
var now = function now() {
    if (!memoizedNow) memoizedNow = 'performance' in window ? performance.now.bind(performance) : Date.now;
    return memoizedNow();
};
function step(context) {
    var time = now();
    var elapsed = Math.min((time - context.startTime) / context.duration, 1);
    var value = context.ease(elapsed);
    var currentX = context.startX + (context.x - context.startX) * value;
    var currentY = context.startY + (context.y - context.startY) * value;
    context.method(currentX, currentY);
    if (currentX !== context.x || currentY !== context.y) requestAnimationFrame(function() {
        return step(context);
    });
    else context.cb();
}
function smoothScroll(el, x1, y1, duration, ease, cb) {
    if (duration === void 0) duration = 600;
    if (ease === void 0) ease = function ease(t) {
        return 1 + --t * t * t * t * t;
    };
    var scrollable;
    var startX;
    var startY;
    var method;
    scrollable = el;
    startX = el.scrollLeft;
    startY = el.scrollTop;
    method = function method(x, y) {
        el.scrollLeft = Math.ceil(x);
        el.scrollTop = Math.ceil(y);
    };
    step({
        scrollable: scrollable,
        method: method,
        startTime: now(),
        startX: startX,
        startY: startY,
        x: x1,
        y: y1,
        duration: duration,
        ease: ease,
        cb: cb
    });
}
var shouldSmoothScroll = function shouldSmoothScroll(options) {
    return options && !options.behavior || options.behavior === 'smooth';
};
function scroll(target, options) {
    var overrides = options || {
    };
    if (shouldSmoothScroll(overrides)) return _scrollIntoViewIfNeededDefault.default(target, {
        block: overrides.block,
        inline: overrides.inline,
        scrollMode: overrides.scrollMode,
        boundary: overrides.boundary,
        behavior: function behavior(actions) {
            return Promise.all(actions.reduce(function(results, _ref) {
                var el = _ref.el, left = _ref.left, top = _ref.top;
                var startLeft = el.scrollLeft;
                var startTop = el.scrollTop;
                if (startLeft === left && startTop === top) return results;
                return [].concat(results, [
                    new Promise(function(resolve) {
                        return smoothScroll(el, left, top, overrides.duration, overrides.ease, function() {
                            return resolve({
                                el: el,
                                left: [
                                    startLeft,
                                    left
                                ],
                                top: [
                                    startTop,
                                    top
                                ]
                            });
                        });
                    })
                ]);
            }, []));
        }
    });
    return Promise.resolve(_scrollIntoViewIfNeededDefault.default(target, options));
}
var smoothScrollIntoView = scroll;
exports.default = smoothScrollIntoView;

},{"scroll-into-view-if-needed":"3qz7N","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3qz7N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeScrollIntoView = require("compute-scroll-into-view");
var _computeScrollIntoViewDefault = parcelHelpers.interopDefault(_computeScrollIntoView);
function isOptionsObject(options) {
    return options === Object(options) && Object.keys(options).length !== 0;
}
function defaultBehavior(actions, behavior) {
    if (behavior === void 0) behavior = 'auto';
    var canSmoothScroll = 'scrollBehavior' in document.body.style;
    actions.forEach(function(_ref) {
        var el = _ref.el, top = _ref.top, left = _ref.left;
        if (el.scroll && canSmoothScroll) el.scroll({
            top: top,
            left: left,
            behavior: behavior
        });
        else {
            el.scrollTop = top;
            el.scrollLeft = left;
        }
    });
}
function getOptions(options) {
    if (options === false) return {
        block: 'end',
        inline: 'nearest'
    };
    if (isOptionsObject(options)) return options;
    return {
        block: 'start',
        inline: 'nearest'
    };
}
function scrollIntoView(target, options) {
    var targetIsDetached = !target.ownerDocument.documentElement.contains(target);
    if (isOptionsObject(options) && typeof options.behavior === 'function') return options.behavior(targetIsDetached ? [] : _computeScrollIntoViewDefault.default(target, options));
    if (targetIsDetached) return;
    var computeOptions = getOptions(options);
    return defaultBehavior(_computeScrollIntoViewDefault.default(target, computeOptions), computeOptions.behavior);
}
exports.default = scrollIntoView;

},{"compute-scroll-into-view":"gZBQJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gZBQJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function t1(t) {
    return "object" == typeof t && null != t && 1 === t.nodeType;
}
function e1(t, e) {
    return (!e || "hidden" !== t) && "visible" !== t && "clip" !== t;
}
function n1(t2, n) {
    if (t2.clientHeight < t2.scrollHeight || t2.clientWidth < t2.scrollWidth) {
        var r = getComputedStyle(t2, null);
        return e1(r.overflowY, n) || e1(r.overflowX, n) || (function(t3) {
            var e = function(t) {
                if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;
                try {
                    return t.ownerDocument.defaultView.frameElement;
                } catch (t4) {
                    return null;
                }
            }(t3);
            return !!e && (e.clientHeight < t3.scrollHeight || e.clientWidth < t3.scrollWidth);
        })(t2);
    }
    return !1;
}
function r1(t, e, n, r, i, o, l, d) {
    return o < t && l > e || o > t && l < e ? 0 : o <= t && d <= n || l >= e && d >= n ? o - t - r : l > e && d < n || o < t && d > n ? l - e + i : 0;
}
exports.default = function(e, i) {
    var o = window, l = i.scrollMode, d = i.block, u = i.inline, h = i.boundary, a = i.skipOverflowHiddenElements, c = "function" == typeof h ? h : function(t) {
        return t !== h;
    };
    if (!t1(e)) throw new TypeError("Invalid target");
    for(var f = document.scrollingElement || document.documentElement, s = [], p = e; t1(p) && c(p);){
        if ((p = p.parentElement) === f) {
            s.push(p);
            break;
        }
        null != p && p === document.body && n1(p) && !n1(document.documentElement) || null != p && n1(p, a) && s.push(p);
    }
    for(var m = o.visualViewport ? o.visualViewport.width : innerWidth, g = o.visualViewport ? o.visualViewport.height : innerHeight, w = window.scrollX || pageXOffset, v = window.scrollY || pageYOffset, W = e.getBoundingClientRect(), b = W.height, H = W.width, y = W.top, E = W.right, M = W.bottom, V = W.left, x = "start" === d || "nearest" === d ? y : "end" === d ? M : y + b / 2, I = "center" === u ? V + H / 2 : "end" === u ? E : V, C = [], T = 0; T < s.length; T++){
        var k = s[T], B = k.getBoundingClientRect(), D = B.height, O = B.width, R = B.top, X = B.right, Y = B.bottom, L = B.left;
        if ("if-needed" === l && y >= 0 && V >= 0 && M <= g && E <= m && y >= R && M <= Y && V >= L && E <= X) return C;
        var S = getComputedStyle(k), j = parseInt(S.borderLeftWidth, 10), q = parseInt(S.borderTopWidth, 10), z = parseInt(S.borderRightWidth, 10), A = parseInt(S.borderBottomWidth, 10), F = 0, G = 0, J = "offsetWidth" in k ? k.offsetWidth - k.clientWidth - j - z : 0, K = "offsetHeight" in k ? k.offsetHeight - k.clientHeight - q - A : 0;
        if (f === k) F = "start" === d ? x : "end" === d ? x - g : "nearest" === d ? r1(v, v + g, g, q, A, v + x, v + x + b, b) : x - g / 2, G = "start" === u ? I : "center" === u ? I - m / 2 : "end" === u ? I - m : r1(w, w + m, m, j, z, w + I, w + I + H, H), F = Math.max(0, F + v), G = Math.max(0, G + w);
        else {
            F = "start" === d ? x - R - q : "end" === d ? x - Y + A + K : "nearest" === d ? r1(R, Y, D, q, A + K, x, x + b, b) : x - (R + D / 2) + K / 2, G = "start" === u ? I - L - j : "center" === u ? I - (L + O / 2) + J / 2 : "end" === u ? I - X + z + J : r1(L, X, O, j, z + J, I, I + H, H);
            var N = k.scrollLeft, P = k.scrollTop;
            x += P - (F = Math.max(0, Math.min(P + F, k.scrollHeight - D + K))), I += N - (G = Math.max(0, Math.min(N + G, k.scrollWidth - O + J)));
        }
        C.push({
            el: k,
            top: F,
            left: G
        });
    }
    return C;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}]},["hu6zD","lROuo"], "lROuo", "parcelRequire8124")

//# sourceMappingURL=portfolio.7a29bf58.js.map
