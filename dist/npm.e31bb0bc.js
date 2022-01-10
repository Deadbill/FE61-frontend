// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/components/header/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const Header = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="container">
        <div class="brand">
            <a href="" class="header-link">
                <img src="https://www.fbi.gov/++theme++fbigov.theme/images/fbi_seal_new.png" class="logo" title="Federal Bureau of Investigation">
                <div>
                    <span class="initials" aria-hidden="true">FBI</span>
                    <span class="fullname">Federal Bureau of Investigation</span>
                </div>
            </a>
        </div>
    </div>
    `;
  container.classList.add('header-wrapper'); // const imgCont = querySelector('.img-cont');
  // const logo = document.createElement('img');
  // logo.src = './src/images/fbi_seal_new.png';
  // // link.add.before(logo);
  // imgCont.appand(logo);

  return container;
};

var _default = Header;
exports.default = _default;
},{}],"src/components/Card/Card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const Card = props => {
  const container = document.createElement('div');
  container.classList.add('card');
  const img = document.createElement('img');
  img.src = props.src;
  const fullName = document.createElement('p');
  fullName.classList.add('text-style');
  fullName.innerText = props.fullName;
  const sex = document.createElement('p');
  sex.classList.add('text-style');
  sex.innerText = props.sex;
  const subjects = document.createElement('p');
  subjects.classList.add('text-style');
  subjects.innerText = props.subjects;
  container.append(img, fullName, sex, subjects);
  return container;
};

var _default = Card;
exports.default = _default;
},{}],"src/components/CardList/CardList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Card = _interopRequireDefault(require("../Card/Card.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CardList = props => {
  const container = document.createElement('div');
  container.classList.add('card-wrapper');
  const cardElements = props.cards.map(card => {
    return (0, _Card.default)(card);
  });
  container.append(...cardElements);
  return container;
};

var _default = CardList;
exports.default = _default;
},{"../Card/Card.js":"src/components/Card/Card.js"}],"src/components/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CardList = _interopRequireDefault(require("./CardList/CardList.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getWantedPeople = async () => {
  const response = await fetch('https://api.fbi.gov/wanted/v1/list');
  const data = await response.json();
  console.log(data);
  return data.items.map(item => {
    return {
      src: item.images[0].original,
      fullName: item.title,
      sex: item.sex,
      subjects: item.subjects[0]
    };
  });
};

const App = async () => {
  const container = document.createElement('div');
  const cardList = (0, _CardList.default)({
    cards: await getWantedPeople()
  });
  container.append(cardList);
  return container;
};

var _default = App;
exports.default = _default;
},{"./CardList/CardList.js":"src/components/CardList/CardList.js"}],"src/components/Footer/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const Footer = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="container-footer">
        <div class="brand-footer">
            <a href="" class="header-link">
                <img src="https://www.fbi.gov/++theme++fbigov.theme/images/fbi_seal_new.png" class="logo" title="Federal Bureau of Investigation">
                <div>
                    <span class="initials" aria-hidden="true">FBI</span>
                    <span class="fullname">Federal Bureau of Investigation</span>
                </div>
            </a>
            <div class="right">
                <div class="social-icons">
                    <ul>
                        <li>
                            <a href="" class="social-link">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                        </li>
                        <li>
                            <a href="" class="social-link">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="" class="social-link">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="" class="social-link">
                                <i class="fab fa-flickr"></i>
                            </a>
                        </li>
                        <li>
                            <a href="" class="social-link">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="" class="social-link">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="agency-contact">
                    <h3>
                        FBI.gov Contact Center
                    </h3>
                </div>
            </div>
        </div>
    </div>
    `;
  container.classList.add('footer-wrapper');
  return container;
};

var _default = Footer;
exports.default = _default;
},{}],"node_modules/nano-assign/dist/nano-assign.common.js":[function(require,module,exports) {
/*!
 * nano-assign v1.0.1
 * (c) 2018-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */
'use strict';

var index = function(obj) {
  var arguments$1 = arguments;

  for (var i = 1; i < arguments.length; i++) {
    // eslint-disable-next-line guard-for-in, prefer-rest-params
    for (var p in arguments[i]) { obj[p] = arguments$1[i][p]; }
  }
  return obj
};

module.exports = index;

},{}],"node_modules/native-toast/dist/native-toast.cjs.js":[function(require,module,exports) {
'use strict';

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var assign = _interopDefault(require('nano-assign'));

var prevToast = null;
var icons = {
  warning: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-alert-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line></svg>",
  success: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-check-circle\"><path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path><polyline points=\"22 4 12 14.01 9 11.01\"></polyline></svg>",
  info: "<svg viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"6.25%\"><path d=\"M16 14 L16 23 M16 8 L16 10\" /><circle cx=\"16\" cy=\"16\" r=\"14\" /></svg>",
  error: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-alert-triangle\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"17\"></line></svg>"
};

var Toast = function Toast(ref) {
  var this$1 = this;
  if (ref === void 0) ref = {};
  var message = ref.message;
  if (message === void 0) message = '';
  var position = ref.position;
  if (position === void 0) position = 'south-east';
  var timeout = ref.timeout;
  if (timeout === void 0) timeout = 3000;
  var el = ref.el;
  if (el === void 0) el = document.body;
  var rounded = ref.rounded;
  if (rounded === void 0) rounded = false;
  var type = ref.type;
  if (type === void 0) type = '';
  var debug = ref.debug;
  if (debug === void 0) debug = false;
  var edge = ref.edge;
  if (edge === void 0) edge = false;
  var icon = ref.icon;
  if (icon === void 0) icon = true;
  var closeOnClick = ref.closeOnClick;
  if (closeOnClick === void 0) closeOnClick = false;
  var elements = ref.elements;
  if (elements === void 0) elements = [];

  if (prevToast) {
    prevToast.destroy();
  }

  this.message = message;
  this.position = position;
  this.el = el;
  this.timeout = timeout;
  this.closeOnClick = closeOnClick;
  this.toast = document.createElement('div');
  this.toast.className = "native-toast native-toast-" + this.position;

  if (type) {
    this.toast.className += " native-toast-" + type;

    if (icon) {
      this.message = "<span class=\"native-toast-icon-" + type + "\">" + (icons[type] || '') + "</span>" + this.message;
    }
  }

  var messageElement = document.createElement('div');
  messageElement.className = 'native-toast-message';
  messageElement.innerHTML = this.message;
  [messageElement].concat(elements).forEach(function (el) {
    this$1.toast.appendChild(el);
  });
  var isMobile = document.body.clientWidth < 768;

  if (edge || isMobile) {
    this.toast.className += ' native-toast-edge';
  } else if (rounded) {
    this.toast.style.borderRadius = '33px';
  }

  this.el.appendChild(this.toast);
  prevToast = this;
  this.show();

  if (!debug && timeout) {
    this.hide();
  }

  if (this.closeOnClick) {
    this.toast.addEventListener('click', function () {
      this$1.destroy();
    });
  }
};

Toast.prototype.show = function show() {
  var this$1 = this;
  setTimeout(function () {
    this$1.toast.classList.add('native-toast-shown');
  }, 300);
};

Toast.prototype.hide = function hide() {
  var this$1 = this;
  setTimeout(function () {
    this$1.destroy();
  }, this.timeout);
};

Toast.prototype.destroy = function destroy() {
  var this$1 = this;

  if (!this.toast) {
    return;
  }

  this.toast.classList.remove('native-toast-shown');
  setTimeout(function () {
    if (this$1.toast) {
      this$1.el.removeChild(this$1.toast);
      this$1.toast = null;
    }
  }, 300);
};

function toast(options) {
  return new Toast(options);
}

var loop = function () {
  toast[type] = function (options) {
    return toast(assign({
      type: type
    }, options));
  };
};

for (var type of ['success', 'info', 'warning', 'error']) loop();

module.exports = toast;
},{"nano-assign":"node_modules/nano-assign/dist/nano-assign.common.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _Header = _interopRequireDefault(require("./src/components/header/Header"));

var _App = _interopRequireDefault(require("./src/components/App"));

var _Footer = _interopRequireDefault(require("./src/components/Footer/Footer"));

var _nativeToast = _interopRequireDefault(require("native-toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

(async () => {
  const app = await (0, _App.default)();
  const root = document.getElementById('root');
  root.append(app);
})();

const addHeader = (0, _Header.default)();
root.before(addHeader);
const addFooter = (0, _Footer.default)();
root.after(addFooter);
(0, _nativeToast.default)({
  message: 'If you know or have seen any of these people, call 911',
  position: 'center',
  rounded: true,
  timeout: 6000
});
},{"./src/components/header/Header":"src/components/header/Header.js","./src/components/App":"src/components/App.js","./src/components/Footer/Footer":"src/components/Footer/Footer.js","native-toast":"node_modules/native-toast/dist/native-toast.cjs.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53426" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/npm.e31bb0bc.js.map