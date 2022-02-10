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
})({"fH98R":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "5189980582e67d4d";
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

},{}],"fzcL3":[function(require,module,exports) {
var _twirlBurgerJs = require("vanilla-hamburger/twirl-burger.js");
const burger = document.querySelector('twirl-burger');
burger.addEventListener('pressed-changed', (event)=>{
    const pressed = event.detail.value;
    console.log('%cMyProject%cline:5%cpressed', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(130, 57, 53);padding:3px;border-radius:2px', pressed);
});

},{"vanilla-hamburger/twirl-burger.js":"KH1un"}],"KH1un":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A hamburger button custom element of Twirl type.
 * @element twirl-burger
 * @fires pressed-changed - Event fired when pressed property changes.
 * @csspart bar - Animated bar elements.
 * @csspart button - Native button element.
 */ parcelHelpers.export(exports, "TwirlBurger", ()=>TwirlBurger
);
var _twirlJs = require("./lib/entrypoints/twirl.js");
class TwirlBurger extends _twirlJs.Twirl {
}
customElements.define('twirl-burger', TwirlBurger);

},{"./lib/entrypoints/twirl.js":"jGFuJ","@parcel/transformer-js/src/esmodule-helpers.js":"iyrD1"}],"jGFuJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Twirl", ()=>Twirl
);
var _directionBurgerJs = require("../components/direction-burger.js");
var _domJs = require("../utils/dom.js");
var _internalsJs = require("../internals.js");
const tpl = _domJs.createTemplate(`<button part="button" type="button"></button><div>${_domJs.bar}</div><div>${_domJs.bar}</div><div>${_domJs.bar}</div>`);
class Twirl extends _directionBurgerJs.DirectionBurger {
    constructor(){
        super();
        this[_internalsJs.styles] = _domJs.getStyles(_domJs.createRoot(this, tpl));
    }
    get lines() {
        return 3;
    }
    [_internalsJs.render](options) {
        const { barHeight , barStyles , margin , pressed , time , topOffset  } = options;
        const isLeft = this.direction === 'left';
        const transition = `${time / 2}s ${this.easing}`;
        const wrapTransition = `${transition} ${pressed ? '0s' : `${time / 2}s`}`;
        const barTransition = `${transition} ${pressed ? `${time / 2}s` : '0s'}`;
        _domJs.setStyles(this.style, {
            transition: `${time}s ${this.easing}`,
            transform: `${pressed ? `rotate(${90 * (isLeft ? -1 : 1)}deg)` : 'none'}`
        });
        _domJs.setStyles(this[_internalsJs.styles][0], {
            transition: wrapTransition,
            transform: `${pressed ? `translateY(${barHeight + margin}px)` : 'none'}`
        });
        _domJs.setStyles(this[_internalsJs.styles][1], {
            ...barStyles,
            top: `${topOffset}px`,
            transition: barTransition,
            transform: `${pressed ? `rotate(${45 * (isLeft ? 1 : -1)}deg)` : 'none'}`
        });
        _domJs.setStyles(this[_internalsJs.styles][2], {
            transition,
            opacity: `${pressed ? '0' : '1'}`
        });
        _domJs.setStyles(this[_internalsJs.styles][3], {
            ...barStyles,
            top: `${topOffset + barHeight + margin}px`,
            transition
        });
        _domJs.setStyles(this[_internalsJs.styles][4], {
            transition: wrapTransition,
            transform: `${pressed ? `translateY(-${barHeight + margin}px)` : 'none'}`
        });
        _domJs.setStyles(this[_internalsJs.styles][5], {
            ...barStyles,
            top: `${topOffset + barHeight * 2 + margin * 2}px`,
            transition: barTransition,
            transform: `${pressed ? `rotate(${45 * (isLeft ? -1 : 1)}deg)` : 'none'}`
        });
    }
}

},{"../components/direction-burger.js":"cPR5x","../utils/dom.js":"2HKNr","../internals.js":"9XkCu","@parcel/transformer-js/src/esmodule-helpers.js":"iyrD1"}],"cPR5x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DirectionBurger", ()=>DirectionBurger
);
var _burgerJs = require("./burger.js");
var _internals = require("../internals");
class DirectionBurger extends _burgerJs.Burger {
    static get observedAttributes() {
        return super.observedAttributes.concat('direction');
    }
    /**
     * The animation direction of the icon, left or right.
     * @type {'left' | 'right'}
     * @default left
     */ get direction() {
        return this[_internals.props].direction;
    }
    set direction(distance) {
        this[_internals.props].direction = distance;
        this[_internals.update]();
    }
}

},{"./burger.js":"9Z0F7","../internals":"9XkCu","@parcel/transformer-js/src/esmodule-helpers.js":"iyrD1"}],"9Z0F7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultProps", ()=>defaultProps
);
parcelHelpers.export(exports, "Burger", ()=>Burger
);
var _domJs = require("../utils/dom.js");
var _internalsJs = require("../internals.js");
var _burgerJs = require("../styles/burger.js");
var _burgerJsDefault = parcelHelpers.interopDefault(_burgerJs);
var _a;
const AREA = 48;
const tpl = _domJs.createTemplate(`<style>${_burgerJsDefault.default}</style>`);
const btn = Symbol('btn');
const updating = Symbol('updating');
const prepare = Symbol('prepare');
const defaultProps = {
    size: 32,
    direction: 'left',
    disabled: false,
    distance: 'md',
    duration: 0.4,
    label: 'hamburger',
    easing: 'cubic-bezier(0, 0, 0, 1)',
    pressed: false
};
class Burger extends HTMLElement {
    constructor(){
        super();
        this[_a] = {
        };
        _domJs.createRoot(this, tpl);
        this.addEventListener('click', this);
    }
    static get observedAttributes() {
        return [
            'disabled',
            'distance',
            'duration',
            'easing',
            'pressed',
            'size',
            'label'
        ];
    }
    /**
     * A valid `transition-timing-function` CSS value, for example 'ease-out'.
     * @type {string}
     * @default cubic-bezier(0, 0, 0, 1)
     */ get easing() {
        return this[_internalsJs.props].easing;
    }
    set easing(easing) {
        this[_internalsJs.props].easing = easing;
        this[_internalsJs.update]();
    }
    /**
     * The vertical distance between the lines. Small (sm), medium (md) or large (lg).
     * @type {'sm' | 'md' | 'lg'}
     * @default md
     */ get distance() {
        return this[_internalsJs.props].distance;
    }
    set distance(distance) {
        this[_internalsJs.props].distance = distance;
        this[_internalsJs.update]();
    }
    /**
     * The duration of the animation. Can be set to zero if no animation is desired.
     * @type {number}
     * @default 0.4
     */ get duration() {
        return this[_internalsJs.props].duration;
    }
    set duration(duration) {
        this[_internalsJs.props].duration = duration;
        this[_internalsJs.update]();
    }
    /**
     * When set to true, the internal <button> element is disabled.
     * @type {boolean}
     * @attr disabled
     * @default false
     */ get disabled() {
        return this[_internalsJs.props].disabled;
    }
    set disabled(disabled) {
        this[_internalsJs.props].disabled = disabled;
        this.toggleAttribute('disabled', disabled);
        this[btn] && this[btn].toggleAttribute('disabled', disabled);
    }
    /**
     * Accessible label set on the internal <button> element for screen readers.
     * @type {string}
     * @default {hamburger}
     */ get label() {
        return this[_internalsJs.props].label;
    }
    set label(label) {
        this[_internalsJs.props].label = label;
        this[btn] && this[btn].setAttribute('aria-label', label);
    }
    /**
     * Set to true when element is pressed.
     * @type {boolean}
     * @attr pressed
     * @default false
     */ get pressed() {
        return this[_internalsJs.props].pressed;
    }
    set pressed(pressed) {
        this[_internalsJs.props].pressed = pressed;
        this.toggleAttribute('pressed', !!pressed);
        this[btn] && this[btn].setAttribute('aria-pressed', `${!!pressed}`);
        this[_internalsJs.update]();
    }
    /**
     * Size of the icon. Should be a number between 12 and 48.
     * @type {number}
     * @default 32
     */ get size() {
        return this[_internalsJs.props].size;
    }
    set size(size) {
        this[_internalsJs.props].size = size;
        this[_internalsJs.update]();
    }
    connectedCallback() {
        this[btn] = this.shadowRoot.querySelector('button');
        this.constructor.observedAttributes.forEach((k)=>{
            // A user may set a property on an _instance_ of an element,
            // before its prototype has been connected to this class.
            // If so, we need to run it through the proper class setter.
            if (this.hasOwnProperty(k)) {
                const value = this[k];
                delete this[k];
                this[k] = value;
            } else if (!this[k]) // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this[k] = defaultProps[k];
        });
    }
    attributeChangedCallback(prop, oldVal, newVal) {
        if (oldVal !== newVal) {
            let value = newVal;
            if (prop == 'size' || prop == 'duration') value = newVal === null ? null : Number(newVal);
            else if (prop == 'pressed' || prop == 'disabled') value = newVal !== null;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this[prop] = value;
        }
    }
    handleEvent(event) {
        if (event.type === 'click') {
            this.pressed = !this.pressed;
            this.dispatchEvent(new CustomEvent('pressed-changed', {
                detail: {
                    value: this.pressed
                }
            }));
        }
    }
    focus() {
        this[btn] && this[btn].focus();
    }
    blur() {
        this[btn] && this[btn].blur();
    }
    click() {
        if (!this.disabled) super.click();
    }
    [(_a = _internalsJs.props, prepare)]() {
        const { distance , lines  } = this;
        const width = Math.max(12, Math.min(AREA, this.size));
        const barHeightRaw = width / 12;
        const barHeight = Math.round(barHeightRaw);
        const space = distance === 'lg' ? 0.25 : distance === 'sm' ? 0.75 : 0.5;
        const marginRaw = width / (lines * (space + (lines === 3 ? 1 : 1.25)));
        const margin = Math.round(marginRaw);
        const height = barHeight * lines + margin * (lines - 1);
        const translate = lines === 3 ? distance === 'lg' ? 4.0425 : distance === 'sm' ? 5.1625 : 4.6325 : distance === 'lg' ? 6.7875 : distance === 'sm' ? 8.4875 : 7.6675;
        const deviation = (barHeightRaw - barHeight + (marginRaw - margin)) / (lines === 3 ? 1 : 2);
        const barStyles = {
            height: `${barHeight}px`,
            left: `${Math.round((AREA - width) / 2)}px`,
            width: `${width}px`
        };
        return {
            barHeight,
            barStyles,
            margin,
            move: parseFloat((width / translate - deviation / (4 / 3)).toFixed(2)),
            pressed: this.pressed,
            time: Math.max(0, this.duration),
            topOffset: Math.round((AREA - height) / 2)
        };
    }
    async [_internalsJs.update]() {
        if (!this[updating]) {
            this[updating] = true;
            // Ensure that property changes are batched.
            this[updating] = await false;
            this[_internalsJs.render](this[prepare]());
        }
    }
}

},{"../utils/dom.js":"2HKNr","../internals.js":"9XkCu","../styles/burger.js":"aDvZT","@parcel/transformer-js/src/esmodule-helpers.js":"iyrD1"}],"2HKNr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bar", ()=>bar1
);
parcelHelpers.export(exports, "createTemplate", ()=>createTemplate
);
parcelHelpers.export(exports, "createRoot", ()=>createRoot
);
parcelHelpers.export(exports, "getStyles", ()=>getStyles
);
parcelHelpers.export(exports, "setStyles", ()=>setStyles
);
const bar1 = '<div part="bar"></div>';
const createTemplate = (tpl)=>{
    const template = document.createElement('template');
    template.innerHTML = tpl;
    return template;
};
const createRoot = (node, tpl)=>{
    const root = node.shadowRoot || node.attachShadow({
        mode: 'open'
    });
    root.appendChild(tpl.content.cloneNode(true));
    return root;
};
const getStyles = (root)=>Array.from(root.querySelectorAll('div')).map((bar)=>bar.style
    )
;
const setStyles = (style, props)=>{
    for(const p in props)style.setProperty(p, props[p]);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iyrD1"}],"9XkCu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "props", ()=>props
);
parcelHelpers.export(exports, "render", ()=>render
);
parcelHelpers.export(exports, "styles", ()=>styles
);
parcelHelpers.export(exports, "update", ()=>update
);
const props = Symbol('props');
const render = Symbol('render');
const styles = Symbol('styles');
const update = Symbol('update');

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iyrD1"}],"aDvZT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `:host{display:block;position:relative;width:48px;height:48px;cursor:pointer;-webkit-user-select:none;user-select:none}:host([hidden]){display:none !important}:host([disabled]){opacity:.5}button{position:absolute;top:0;left:0;width:100%;height:100%;border:none;-webkit-appearance:none;background:transparent;color:inherit}[part=bar]{background:currentColor;position:absolute}`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iyrD1"}]},["fH98R","fzcL3"], "fzcL3", "parcelRequire8124")

//# sourceMappingURL=index.82e67d4d.js.map
