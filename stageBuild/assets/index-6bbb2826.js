(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const u of i)
      if (u.type === "childList")
        for (const o of u.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const u = {};
    return (
      i.integrity && (u.integrity = i.integrity),
      i.referrerPolicy && (u.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const u = n(i);
    fetch(i.href, u);
  }
})();
var Sv =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function gf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var wf = { exports: {} },
  zu = {},
  Sf = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fi = Symbol.for("react.element"),
  xv = Symbol.for("react.portal"),
  kv = Symbol.for("react.fragment"),
  Pv = Symbol.for("react.strict_mode"),
  Ev = Symbol.for("react.profiler"),
  Cv = Symbol.for("react.provider"),
  Ov = Symbol.for("react.context"),
  Rv = Symbol.for("react.forward_ref"),
  Nv = Symbol.for("react.suspense"),
  Tv = Symbol.for("react.memo"),
  _v = Symbol.for("react.lazy"),
  Es = Symbol.iterator;
function Av(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Es && e[Es]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kf = Object.assign,
  Pf = {};
function cr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pf),
    (this.updater = n || xf);
}
cr.prototype.isReactComponent = {};
cr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
cr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ef() {}
Ef.prototype = cr.prototype;
function pa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pf),
    (this.updater = n || xf);
}
var va = (pa.prototype = new Ef());
va.constructor = pa;
kf(va, cr.prototype);
va.isPureReactComponent = !0;
var Cs = Array.isArray,
  Cf = Object.prototype.hasOwnProperty,
  ha = { current: null },
  Of = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rf(e, t, n) {
  var r,
    i = {},
    u = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (u = "" + t.key),
    t))
      Cf.call(t, r) && !Of.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), s = 0; s < l; s++) a[s] = arguments[s + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: fi,
    type: e,
    key: u,
    ref: o,
    props: i,
    _owner: ha.current,
  };
}
function jv(e, t) {
  return {
    $$typeof: fi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ma(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fi;
}
function Mv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Os = /\/+/g;
function Oo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Mv("" + e.key)
    : t.toString(36);
}
function Fi(e, t, n, r, i) {
  var u = typeof e;
  (u === "undefined" || u === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (u) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case fi:
          case xv:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Oo(o, 0) : r),
      Cs(i)
        ? ((n = ""),
          e != null && (n = e.replace(Os, "$&/") + "/"),
          Fi(i, t, n, "", function (s) {
            return s;
          }))
        : i != null &&
          (ma(i) &&
            (i = jv(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Os, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Cs(e)))
    for (var l = 0; l < e.length; l++) {
      u = e[l];
      var a = r + Oo(u, l);
      o += Fi(u, t, n, a, i);
    }
  else if (((a = Av(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(u = e.next()).done; )
      (u = u.value), (a = r + Oo(u, l++)), (o += Fi(u, t, n, a, i));
  else if (u === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function wi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Fi(e, r, "", "", function (u) {
      return t.call(n, u, i++);
    }),
    r
  );
}
function Lv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var $e = { current: null },
  Qi = { transition: null },
  Iv = {
    ReactCurrentDispatcher: $e,
    ReactCurrentBatchConfig: Qi,
    ReactCurrentOwner: ha,
  };
Y.Children = {
  map: wi,
  forEach: function (e, t, n) {
    wi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      wi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ma(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Y.Component = cr;
Y.Fragment = kv;
Y.Profiler = Ev;
Y.PureComponent = pa;
Y.StrictMode = Pv;
Y.Suspense = Nv;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Iv;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = kf({}, e.props),
    i = e.key,
    u = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((u = t.ref), (o = ha.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Cf.call(t, a) &&
        !Of.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var s = 0; s < a; s++) l[s] = arguments[s + 2];
    r.children = l;
  }
  return { $$typeof: fi, type: e.type, key: i, ref: u, props: r, _owner: o };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ov,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Cv, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = Rf;
Y.createFactory = function (e) {
  var t = Rf.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: Rv, render: e };
};
Y.isValidElement = ma;
Y.lazy = function (e) {
  return { $$typeof: _v, _payload: { _status: -1, _result: e }, _init: Lv };
};
Y.memo = function (e, t) {
  return { $$typeof: Tv, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = Qi.transition;
  Qi.transition = {};
  try {
    e();
  } finally {
    Qi.transition = t;
  }
};
Y.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Y.useCallback = function (e, t) {
  return $e.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return $e.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return $e.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return $e.current.useEffect(e, t);
};
Y.useId = function () {
  return $e.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return $e.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return $e.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return $e.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return $e.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return $e.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return $e.current.useRef(e);
};
Y.useState = function (e) {
  return $e.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return $e.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return $e.current.useTransition();
};
Y.version = "18.2.0";
Sf.exports = Y;
var V = Sf.exports;
const Mt = gf(V);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bv = V,
  zv = Symbol.for("react.element"),
  Dv = Symbol.for("react.fragment"),
  $v = Object.prototype.hasOwnProperty,
  Fv = bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Qv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nf(e, t, n) {
  var r,
    i = {},
    u = null,
    o = null;
  n !== void 0 && (u = "" + n),
    t.key !== void 0 && (u = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) $v.call(t, r) && !Qv.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: zv,
    type: e,
    key: u,
    ref: o,
    props: i,
    _owner: Fv.current,
  };
}
zu.Fragment = Dv;
zu.jsx = Nf;
zu.jsxs = Nf;
wf.exports = zu;
var L = wf.exports,
  fl = {},
  Tf = { exports: {} },
  Ze = {},
  _f = { exports: {} },
  Af = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, T) {
    var C = j.length;
    j.push(T);
    e: for (; 0 < C; ) {
      var D = (C - 1) >>> 1,
        I = j[D];
      if (0 < i(I, T)) (j[D] = T), (j[C] = I), (C = D);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var T = j[0],
      C = j.pop();
    if (C !== T) {
      j[0] = C;
      e: for (var D = 0, I = j.length, $ = I >>> 1; D < $; ) {
        var F = 2 * (D + 1) - 1,
          U = j[F],
          H = F + 1,
          W = j[H];
        if (0 > i(U, C))
          H < I && 0 > i(W, U)
            ? ((j[D] = W), (j[H] = C), (D = H))
            : ((j[D] = U), (j[F] = C), (D = F));
        else if (H < I && 0 > i(W, C)) (j[D] = W), (j[H] = C), (D = H);
        else break e;
      }
    }
    return T;
  }
  function i(j, T) {
    var C = j.sortIndex - T.sortIndex;
    return C !== 0 ? C : j.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var u = performance;
    e.unstable_now = function () {
      return u.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    s = [],
    c = 1,
    h = null,
    v = 3,
    p = !1,
    g = !1,
    w = !1,
    O = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(j) {
    for (var T = n(s); T !== null; ) {
      if (T.callback === null) r(s);
      else if (T.startTime <= j)
        r(s), (T.sortIndex = T.expirationTime), t(a, T);
      else break;
      T = n(s);
    }
  }
  function y(j) {
    if (((w = !1), f(j), !g))
      if (n(a) !== null) (g = !0), q(x);
      else {
        var T = n(s);
        T !== null && B(y, T.startTime - j);
      }
  }
  function x(j, T) {
    (g = !1), w && ((w = !1), m(E), (E = -1)), (p = !0);
    var C = v;
    try {
      for (
        f(T), h = n(a);
        h !== null && (!(h.expirationTime > T) || (j && !A()));

      ) {
        var D = h.callback;
        if (typeof D == "function") {
          (h.callback = null), (v = h.priorityLevel);
          var I = D(h.expirationTime <= T);
          (T = e.unstable_now()),
            typeof I == "function" ? (h.callback = I) : h === n(a) && r(a),
            f(T);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var $ = !0;
      else {
        var F = n(s);
        F !== null && B(y, F.startTime - T), ($ = !1);
      }
      return $;
    } finally {
      (h = null), (v = C), (p = !1);
    }
  }
  var S = !1,
    k = null,
    E = -1,
    R = 5,
    P = -1;
  function A() {
    return !(e.unstable_now() - P < R);
  }
  function N() {
    if (k !== null) {
      var j = e.unstable_now();
      P = j;
      var T = !0;
      try {
        T = k(!0, j);
      } finally {
        T ? _() : ((S = !1), (k = null));
      }
    } else S = !1;
  }
  var _;
  if (typeof d == "function")
    _ = function () {
      d(N);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      b = M.port2;
    (M.port1.onmessage = N),
      (_ = function () {
        b.postMessage(null);
      });
  } else
    _ = function () {
      O(N, 0);
    };
  function q(j) {
    (k = j), S || ((S = !0), _());
  }
  function B(j, T) {
    E = O(function () {
      j(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || p || ((g = !0), q(x));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = v;
      }
      var C = v;
      v = T;
      try {
        return j();
      } finally {
        v = C;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, T) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var C = v;
      v = j;
      try {
        return T();
      } finally {
        v = C;
      }
    }),
    (e.unstable_scheduleCallback = function (j, T, C) {
      var D = e.unstable_now();
      switch (
        (typeof C == "object" && C !== null
          ? ((C = C.delay), (C = typeof C == "number" && 0 < C ? D + C : D))
          : (C = D),
        j)
      ) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return (
        (I = C + I),
        (j = {
          id: c++,
          callback: T,
          priorityLevel: j,
          startTime: C,
          expirationTime: I,
          sortIndex: -1,
        }),
        C > D
          ? ((j.sortIndex = C),
            t(s, j),
            n(a) === null &&
              j === n(s) &&
              (w ? (m(E), (E = -1)) : (w = !0), B(y, C - D)))
          : ((j.sortIndex = I), t(a, j), g || p || ((g = !0), q(x))),
        j
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (j) {
      var T = v;
      return function () {
        var C = v;
        v = T;
        try {
          return j.apply(this, arguments);
        } finally {
          v = C;
        }
      };
    });
})(Af);
_f.exports = Af;
var Uv = _f.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jf = V,
  Ge = Uv;
function z(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Mf = new Set(),
  Qr = {};
function An(e, t) {
  tr(e, t), tr(e + "Capture", t);
}
function tr(e, t) {
  for (Qr[e] = t, e = 0; e < t.length; e++) Mf.add(t[e]);
}
var It = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  dl = Object.prototype.hasOwnProperty,
  qv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Rs = {},
  Ns = {};
function Vv(e) {
  return dl.call(Ns, e)
    ? !0
    : dl.call(Rs, e)
    ? !1
    : qv.test(e)
    ? (Ns[e] = !0)
    : ((Rs[e] = !0), !1);
}
function Bv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Hv(e, t, n, r) {
  if (t === null || typeof t > "u" || Bv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, i, u, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = u),
    (this.removeEmptyString = o);
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  _e[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  _e[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  _e[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  _e[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  _e[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  _e[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  _e[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ya = /[\-:]([a-z])/g;
function ga(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ya, ga);
    _e[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ya, ga);
    _e[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ya, ga);
  _e[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  _e[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  _e[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function wa(e, t, n, r) {
  var i = _e.hasOwnProperty(t) ? _e[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Hv(t, n, i, r) && (n = null),
    r || i === null
      ? Vv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var $t = jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Si = Symbol.for("react.element"),
  bn = Symbol.for("react.portal"),
  zn = Symbol.for("react.fragment"),
  Sa = Symbol.for("react.strict_mode"),
  pl = Symbol.for("react.profiler"),
  Lf = Symbol.for("react.provider"),
  If = Symbol.for("react.context"),
  xa = Symbol.for("react.forward_ref"),
  vl = Symbol.for("react.suspense"),
  hl = Symbol.for("react.suspense_list"),
  ka = Symbol.for("react.memo"),
  qt = Symbol.for("react.lazy"),
  bf = Symbol.for("react.offscreen"),
  Ts = Symbol.iterator;
function vr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ts && e[Ts]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ce = Object.assign,
  Ro;
function Pr(e) {
  if (Ro === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ro = (t && t[1]) || "";
    }
  return (
    `
` +
    Ro +
    e
  );
}
var No = !1;
function To(e, t) {
  if (!e || No) return "";
  No = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var i = s.stack.split(`
`),
          u = r.stack.split(`
`),
          o = i.length - 1,
          l = u.length - 1;
        1 <= o && 0 <= l && i[o] !== u[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== u[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== u[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (No = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Pr(e) : "";
}
function Wv(e) {
  switch (e.tag) {
    case 5:
      return Pr(e.type);
    case 16:
      return Pr("Lazy");
    case 13:
      return Pr("Suspense");
    case 19:
      return Pr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = To(e.type, !1)), e;
    case 11:
      return (e = To(e.type.render, !1)), e;
    case 1:
      return (e = To(e.type, !0)), e;
    default:
      return "";
  }
}
function ml(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zn:
      return "Fragment";
    case bn:
      return "Portal";
    case pl:
      return "Profiler";
    case Sa:
      return "StrictMode";
    case vl:
      return "Suspense";
    case hl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case If:
        return (e.displayName || "Context") + ".Consumer";
      case Lf:
        return (e._context.displayName || "Context") + ".Provider";
      case xa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ka:
        return (
          (t = e.displayName || null), t !== null ? t : ml(e.type) || "Memo"
        );
      case qt:
        (t = e._payload), (e = e._init);
        try {
          return ml(e(t));
        } catch {}
    }
  return null;
}
function Kv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ml(t);
    case 8:
      return t === Sa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function an(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function zf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Yv(e) {
  var t = zf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      u = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), u.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xi(e) {
  e._valueTracker || (e._valueTracker = Yv(e));
}
function Df(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = zf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function tu(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function yl(e, t) {
  var n = t.checked;
  return ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function _s(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = an(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function $f(e, t) {
  (t = t.checked), t != null && wa(e, "checked", t, !1);
}
function gl(e, t) {
  $f(e, t);
  var n = an(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? wl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && wl(e, t.type, an(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function As(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function wl(e, t, n) {
  (t !== "number" || tu(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Er = Array.isArray;
function Kn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + an(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Sl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function js(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(z(92));
      if (Er(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: an(n) };
}
function Ff(e, t) {
  var n = an(t.value),
    r = an(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ms(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Qf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ki,
  Uf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ki = ki || document.createElement("div"),
          ki.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ki.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ur(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Xv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tr).forEach(function (e) {
  Xv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tr[t] = Tr[e]);
  });
});
function qf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Tr.hasOwnProperty(e) && Tr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Vf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = qf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Gv = ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function kl(e, t) {
  if (t) {
    if (Gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function Pl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var El = null;
function Pa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Cl = null,
  Yn = null,
  Xn = null;
function Ls(e) {
  if ((e = vi(e))) {
    if (typeof Cl != "function") throw Error(z(280));
    var t = e.stateNode;
    t && ((t = Uu(t)), Cl(e.stateNode, e.type, t));
  }
}
function Bf(e) {
  Yn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Yn = e);
}
function Hf() {
  if (Yn) {
    var e = Yn,
      t = Xn;
    if (((Xn = Yn = null), Ls(e), t)) for (e = 0; e < t.length; e++) Ls(t[e]);
  }
}
function Wf(e, t) {
  return e(t);
}
function Kf() {}
var _o = !1;
function Yf(e, t, n) {
  if (_o) return e(t, n);
  _o = !0;
  try {
    return Wf(e, t, n);
  } finally {
    (_o = !1), (Yn !== null || Xn !== null) && (Kf(), Hf());
  }
}
function qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Uu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(z(231, t, typeof n));
  return n;
}
var Ol = !1;
if (It)
  try {
    var hr = {};
    Object.defineProperty(hr, "passive", {
      get: function () {
        Ol = !0;
      },
    }),
      window.addEventListener("test", hr, hr),
      window.removeEventListener("test", hr, hr);
  } catch {
    Ol = !1;
  }
function Jv(e, t, n, r, i, u, o, l, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var _r = !1,
  nu = null,
  ru = !1,
  Rl = null,
  Zv = {
    onError: function (e) {
      (_r = !0), (nu = e);
    },
  };
function eh(e, t, n, r, i, u, o, l, a) {
  (_r = !1), (nu = null), Jv.apply(Zv, arguments);
}
function th(e, t, n, r, i, u, o, l, a) {
  if ((eh.apply(this, arguments), _r)) {
    if (_r) {
      var s = nu;
      (_r = !1), (nu = null);
    } else throw Error(z(198));
    ru || ((ru = !0), (Rl = s));
  }
}
function jn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Xf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Is(e) {
  if (jn(e) !== e) throw Error(z(188));
}
function nh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jn(e)), t === null)) throw Error(z(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var u = i.alternate;
    if (u === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === u.child) {
      for (u = i.child; u; ) {
        if (u === n) return Is(i), e;
        if (u === r) return Is(i), t;
        u = u.sibling;
      }
      throw Error(z(188));
    }
    if (n.return !== r.return) (n = i), (r = u);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = u);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = u);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = u.child; l; ) {
          if (l === n) {
            (o = !0), (n = u), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = u), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? e : t;
}
function Gf(e) {
  return (e = nh(e)), e !== null ? Jf(e) : null;
}
function Jf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Jf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Zf = Ge.unstable_scheduleCallback,
  bs = Ge.unstable_cancelCallback,
  rh = Ge.unstable_shouldYield,
  ih = Ge.unstable_requestPaint,
  ve = Ge.unstable_now,
  uh = Ge.unstable_getCurrentPriorityLevel,
  Ea = Ge.unstable_ImmediatePriority,
  ed = Ge.unstable_UserBlockingPriority,
  iu = Ge.unstable_NormalPriority,
  oh = Ge.unstable_LowPriority,
  td = Ge.unstable_IdlePriority,
  Du = null,
  Pt = null;
function lh(e) {
  if (Pt && typeof Pt.onCommitFiberRoot == "function")
    try {
      Pt.onCommitFiberRoot(Du, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var vt = Math.clz32 ? Math.clz32 : ch,
  ah = Math.log,
  sh = Math.LN2;
function ch(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ah(e) / sh) | 0)) | 0;
}
var Pi = 64,
  Ei = 4194304;
function Cr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function uu(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    u = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = Cr(l)) : ((u &= o), u !== 0 && (r = Cr(u)));
  } else (o = n & ~i), o !== 0 ? (r = Cr(o)) : u !== 0 && (r = Cr(u));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (u = t & -t), i >= u || (i === 16 && (u & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - vt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function fh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function dh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      u = e.pendingLanes;
    0 < u;

  ) {
    var o = 31 - vt(u),
      l = 1 << o,
      a = i[o];
    a === -1
      ? (!(l & n) || l & r) && (i[o] = fh(l, t))
      : a <= t && (e.expiredLanes |= l),
      (u &= ~l);
  }
}
function Nl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function nd() {
  var e = Pi;
  return (Pi <<= 1), !(Pi & 4194240) && (Pi = 64), e;
}
function Ao(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function di(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - vt(t)),
    (e[t] = n);
}
function ph(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - vt(n),
      u = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~u);
  }
}
function Ca(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - vt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var G = 0;
function rd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var id,
  Oa,
  ud,
  od,
  ld,
  Tl = !1,
  Ci = [],
  Xt = null,
  Gt = null,
  Jt = null,
  Vr = new Map(),
  Br = new Map(),
  Bt = [],
  vh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function zs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xt = null;
      break;
    case "dragenter":
    case "dragleave":
      Gt = null;
      break;
    case "mouseover":
    case "mouseout":
      Jt = null;
      break;
    case "pointerover":
    case "pointerout":
      Vr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Br.delete(t.pointerId);
  }
}
function mr(e, t, n, r, i, u) {
  return e === null || e.nativeEvent !== u
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: u,
        targetContainers: [i],
      }),
      t !== null && ((t = vi(t)), t !== null && Oa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function hh(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Xt = mr(Xt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Gt = mr(Gt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Jt = mr(Jt, e, t, n, r, i)), !0;
    case "pointerover":
      var u = i.pointerId;
      return Vr.set(u, mr(Vr.get(u) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (u = i.pointerId), Br.set(u, mr(Br.get(u) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ad(e) {
  var t = Sn(e.target);
  if (t !== null) {
    var n = jn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Xf(n)), t !== null)) {
          (e.blockedOn = t),
            ld(e.priority, function () {
              ud(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ui(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (El = r), n.target.dispatchEvent(r), (El = null);
    } else return (t = vi(n)), t !== null && Oa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ds(e, t, n) {
  Ui(e) && n.delete(t);
}
function mh() {
  (Tl = !1),
    Xt !== null && Ui(Xt) && (Xt = null),
    Gt !== null && Ui(Gt) && (Gt = null),
    Jt !== null && Ui(Jt) && (Jt = null),
    Vr.forEach(Ds),
    Br.forEach(Ds);
}
function yr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Tl ||
      ((Tl = !0),
      Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, mh)));
}
function Hr(e) {
  function t(i) {
    return yr(i, e);
  }
  if (0 < Ci.length) {
    yr(Ci[0], e);
    for (var n = 1; n < Ci.length; n++) {
      var r = Ci[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Xt !== null && yr(Xt, e),
      Gt !== null && yr(Gt, e),
      Jt !== null && yr(Jt, e),
      Vr.forEach(t),
      Br.forEach(t),
      n = 0;
    n < Bt.length;
    n++
  )
    (r = Bt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Bt.length && ((n = Bt[0]), n.blockedOn === null); )
    ad(n), n.blockedOn === null && Bt.shift();
}
var Gn = $t.ReactCurrentBatchConfig,
  ou = !0;
function yh(e, t, n, r) {
  var i = G,
    u = Gn.transition;
  Gn.transition = null;
  try {
    (G = 1), Ra(e, t, n, r);
  } finally {
    (G = i), (Gn.transition = u);
  }
}
function gh(e, t, n, r) {
  var i = G,
    u = Gn.transition;
  Gn.transition = null;
  try {
    (G = 4), Ra(e, t, n, r);
  } finally {
    (G = i), (Gn.transition = u);
  }
}
function Ra(e, t, n, r) {
  if (ou) {
    var i = _l(e, t, n, r);
    if (i === null) Qo(e, t, r, lu, n), zs(e, r);
    else if (hh(i, e, t, n, r)) r.stopPropagation();
    else if ((zs(e, r), t & 4 && -1 < vh.indexOf(e))) {
      for (; i !== null; ) {
        var u = vi(i);
        if (
          (u !== null && id(u),
          (u = _l(e, t, n, r)),
          u === null && Qo(e, t, r, lu, n),
          u === i)
        )
          break;
        i = u;
      }
      i !== null && r.stopPropagation();
    } else Qo(e, t, r, null, n);
  }
}
var lu = null;
function _l(e, t, n, r) {
  if (((lu = null), (e = Pa(r)), (e = Sn(e)), e !== null))
    if (((t = jn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Xf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (lu = e), null;
}
function sd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (uh()) {
        case Ea:
          return 1;
        case ed:
          return 4;
        case iu:
        case oh:
          return 16;
        case td:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kt = null,
  Na = null,
  qi = null;
function cd() {
  if (qi) return qi;
  var e,
    t = Na,
    n = t.length,
    r,
    i = "value" in Kt ? Kt.value : Kt.textContent,
    u = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[u - r]; r++);
  return (qi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Vi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Oi() {
  return !0;
}
function $s() {
  return !1;
}
function et(e) {
  function t(n, r, i, u, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = u),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(u) : u[l]));
    return (
      (this.isDefaultPrevented = (
        u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
      )
        ? Oi
        : $s),
      (this.isPropagationStopped = $s),
      this
    );
  }
  return (
    ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Oi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Oi));
      },
      persist: function () {},
      isPersistent: Oi,
    }),
    t
  );
}
var fr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ta = et(fr),
  pi = ce({}, fr, { view: 0, detail: 0 }),
  wh = et(pi),
  jo,
  Mo,
  gr,
  $u = ce({}, pi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: _a,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== gr &&
            (gr && e.type === "mousemove"
              ? ((jo = e.screenX - gr.screenX), (Mo = e.screenY - gr.screenY))
              : (Mo = jo = 0),
            (gr = e)),
          jo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Mo;
    },
  }),
  Fs = et($u),
  Sh = ce({}, $u, { dataTransfer: 0 }),
  xh = et(Sh),
  kh = ce({}, pi, { relatedTarget: 0 }),
  Lo = et(kh),
  Ph = ce({}, fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Eh = et(Ph),
  Ch = ce({}, fr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Oh = et(Ch),
  Rh = ce({}, fr, { data: 0 }),
  Qs = et(Rh),
  Nh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Th = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  _h = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ah(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _h[e]) ? !!t[e] : !1;
}
function _a() {
  return Ah;
}
var jh = ce({}, pi, {
    key: function (e) {
      if (e.key) {
        var t = Nh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Vi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Th[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _a,
    charCode: function (e) {
      return e.type === "keypress" ? Vi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Vi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Mh = et(jh),
  Lh = ce({}, $u, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Us = et(Lh),
  Ih = ce({}, pi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _a,
  }),
  bh = et(Ih),
  zh = ce({}, fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dh = et(zh),
  $h = ce({}, $u, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Fh = et($h),
  Qh = [9, 13, 27, 32],
  Aa = It && "CompositionEvent" in window,
  Ar = null;
It && "documentMode" in document && (Ar = document.documentMode);
var Uh = It && "TextEvent" in window && !Ar,
  fd = It && (!Aa || (Ar && 8 < Ar && 11 >= Ar)),
  qs = String.fromCharCode(32),
  Vs = !1;
function dd(e, t) {
  switch (e) {
    case "keyup":
      return Qh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function pd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function qh(e, t) {
  switch (e) {
    case "compositionend":
      return pd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Vs = !0), qs);
    case "textInput":
      return (e = t.data), e === qs && Vs ? null : e;
    default:
      return null;
  }
}
function Vh(e, t) {
  if (Dn)
    return e === "compositionend" || (!Aa && dd(e, t))
      ? ((e = cd()), (qi = Na = Kt = null), (Dn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return fd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Bh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Bs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Bh[e.type] : t === "textarea";
}
function vd(e, t, n, r) {
  Bf(r),
    (t = au(t, "onChange")),
    0 < t.length &&
      ((n = new Ta("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var jr = null,
  Wr = null;
function Hh(e) {
  Cd(e, 0);
}
function Fu(e) {
  var t = Qn(e);
  if (Df(t)) return e;
}
function Wh(e, t) {
  if (e === "change") return t;
}
var hd = !1;
if (It) {
  var Io;
  if (It) {
    var bo = "oninput" in document;
    if (!bo) {
      var Hs = document.createElement("div");
      Hs.setAttribute("oninput", "return;"),
        (bo = typeof Hs.oninput == "function");
    }
    Io = bo;
  } else Io = !1;
  hd = Io && (!document.documentMode || 9 < document.documentMode);
}
function Ws() {
  jr && (jr.detachEvent("onpropertychange", md), (Wr = jr = null));
}
function md(e) {
  if (e.propertyName === "value" && Fu(Wr)) {
    var t = [];
    vd(t, Wr, e, Pa(e)), Yf(Hh, t);
  }
}
function Kh(e, t, n) {
  e === "focusin"
    ? (Ws(), (jr = t), (Wr = n), jr.attachEvent("onpropertychange", md))
    : e === "focusout" && Ws();
}
function Yh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Fu(Wr);
}
function Xh(e, t) {
  if (e === "click") return Fu(t);
}
function Gh(e, t) {
  if (e === "input" || e === "change") return Fu(t);
}
function Jh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var mt = typeof Object.is == "function" ? Object.is : Jh;
function Kr(e, t) {
  if (mt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!dl.call(t, i) || !mt(e[i], t[i])) return !1;
  }
  return !0;
}
function Ks(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ys(e, t) {
  var n = Ks(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ks(n);
  }
}
function yd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? yd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function gd() {
  for (var e = window, t = tu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = tu(e.document);
  }
  return t;
}
function ja(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Zh(e) {
  var t = gd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    yd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ja(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          u = Math.min(r.start, i);
        (r = r.end === void 0 ? u : Math.min(r.end, i)),
          !e.extend && u > r && ((i = r), (r = u), (u = i)),
          (i = Ys(n, u));
        var o = Ys(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          u > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var em = It && "documentMode" in document && 11 >= document.documentMode,
  $n = null,
  Al = null,
  Mr = null,
  jl = !1;
function Xs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  jl ||
    $n == null ||
    $n !== tu(r) ||
    ((r = $n),
    "selectionStart" in r && ja(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Mr && Kr(Mr, r)) ||
      ((Mr = r),
      (r = au(Al, "onSelect")),
      0 < r.length &&
        ((t = new Ta("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $n))));
}
function Ri(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Fn = {
    animationend: Ri("Animation", "AnimationEnd"),
    animationiteration: Ri("Animation", "AnimationIteration"),
    animationstart: Ri("Animation", "AnimationStart"),
    transitionend: Ri("Transition", "TransitionEnd"),
  },
  zo = {},
  wd = {};
It &&
  ((wd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Fn.animationend.animation,
    delete Fn.animationiteration.animation,
    delete Fn.animationstart.animation),
  "TransitionEvent" in window || delete Fn.transitionend.transition);
function Qu(e) {
  if (zo[e]) return zo[e];
  if (!Fn[e]) return e;
  var t = Fn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in wd) return (zo[e] = t[n]);
  return e;
}
var Sd = Qu("animationend"),
  xd = Qu("animationiteration"),
  kd = Qu("animationstart"),
  Pd = Qu("transitionend"),
  Ed = new Map(),
  Gs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vn(e, t) {
  Ed.set(e, t), An(t, [e]);
}
for (var Do = 0; Do < Gs.length; Do++) {
  var $o = Gs[Do],
    tm = $o.toLowerCase(),
    nm = $o[0].toUpperCase() + $o.slice(1);
  vn(tm, "on" + nm);
}
vn(Sd, "onAnimationEnd");
vn(xd, "onAnimationIteration");
vn(kd, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(Pd, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
An(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
An(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
An("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
An(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
An(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
An(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Or =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  rm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));
function Js(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), th(r, t, void 0, e), (e.currentTarget = null);
}
function Cd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var u = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), a !== u && i.isPropagationStopped())) break e;
          Js(i, l, s), (u = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (s = l.currentTarget),
            (l = l.listener),
            a !== u && i.isPropagationStopped())
          )
            break e;
          Js(i, l, s), (u = a);
        }
    }
  }
  if (ru) throw ((e = Rl), (ru = !1), (Rl = null), e);
}
function te(e, t) {
  var n = t[zl];
  n === void 0 && (n = t[zl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Od(t, e, 2, !1), n.add(r));
}
function Fo(e, t, n) {
  var r = 0;
  t && (r |= 4), Od(n, e, r, t);
}
var Ni = "_reactListening" + Math.random().toString(36).slice(2);
function Yr(e) {
  if (!e[Ni]) {
    (e[Ni] = !0),
      Mf.forEach(function (n) {
        n !== "selectionchange" && (rm.has(n) || Fo(n, !1, e), Fo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ni] || ((t[Ni] = !0), Fo("selectionchange", !1, t));
  }
}
function Od(e, t, n, r) {
  switch (sd(t)) {
    case 1:
      var i = yh;
      break;
    case 4:
      i = gh;
      break;
    default:
      i = Ra;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ol ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Qo(e, t, n, r, i) {
  var u = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Sn(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = u = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Yf(function () {
    var s = u,
      c = Pa(n),
      h = [];
    e: {
      var v = Ed.get(e);
      if (v !== void 0) {
        var p = Ta,
          g = e;
        switch (e) {
          case "keypress":
            if (Vi(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = Mh;
            break;
          case "focusin":
            (g = "focus"), (p = Lo);
            break;
          case "focusout":
            (g = "blur"), (p = Lo);
            break;
          case "beforeblur":
          case "afterblur":
            p = Lo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Fs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = xh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = bh;
            break;
          case Sd:
          case xd:
          case kd:
            p = Eh;
            break;
          case Pd:
            p = Dh;
            break;
          case "scroll":
            p = wh;
            break;
          case "wheel":
            p = Fh;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = Oh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Us;
        }
        var w = (t & 4) !== 0,
          O = !w && e === "scroll",
          m = w ? (v !== null ? v + "Capture" : null) : v;
        w = [];
        for (var d = s, f; d !== null; ) {
          f = d;
          var y = f.stateNode;
          if (
            (f.tag === 5 &&
              y !== null &&
              ((f = y),
              m !== null && ((y = qr(d, m)), y != null && w.push(Xr(d, y, f)))),
            O)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((v = new p(v, g, null, n, c)), h.push({ event: v, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          v &&
            n !== El &&
            (g = n.relatedTarget || n.fromElement) &&
            (Sn(g) || g[bt]))
        )
          break e;
        if (
          (p || v) &&
          ((v =
            c.window === c
              ? c
              : (v = c.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          p
            ? ((g = n.relatedTarget || n.toElement),
              (p = s),
              (g = g ? Sn(g) : null),
              g !== null &&
                ((O = jn(g)), g !== O || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((p = null), (g = s)),
          p !== g)
        ) {
          if (
            ((w = Fs),
            (y = "onMouseLeave"),
            (m = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Us),
              (y = "onPointerLeave"),
              (m = "onPointerEnter"),
              (d = "pointer")),
            (O = p == null ? v : Qn(p)),
            (f = g == null ? v : Qn(g)),
            (v = new w(y, d + "leave", p, n, c)),
            (v.target = O),
            (v.relatedTarget = f),
            (y = null),
            Sn(c) === s &&
              ((w = new w(m, d + "enter", g, n, c)),
              (w.target = f),
              (w.relatedTarget = O),
              (y = w)),
            (O = y),
            p && g)
          )
            t: {
              for (w = p, m = g, d = 0, f = w; f; f = In(f)) d++;
              for (f = 0, y = m; y; y = In(y)) f++;
              for (; 0 < d - f; ) (w = In(w)), d--;
              for (; 0 < f - d; ) (m = In(m)), f--;
              for (; d--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = In(w)), (m = In(m));
              }
              w = null;
            }
          else w = null;
          p !== null && Zs(h, v, p, w, !1),
            g !== null && O !== null && Zs(h, O, g, w, !0);
        }
      }
      e: {
        if (
          ((v = s ? Qn(s) : window),
          (p = v.nodeName && v.nodeName.toLowerCase()),
          p === "select" || (p === "input" && v.type === "file"))
        )
          var x = Wh;
        else if (Bs(v))
          if (hd) x = Gh;
          else {
            x = Yh;
            var S = Kh;
          }
        else
          (p = v.nodeName) &&
            p.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (x = Xh);
        if (x && (x = x(e, s))) {
          vd(h, x, n, c);
          break e;
        }
        S && S(e, v, s),
          e === "focusout" &&
            (S = v._wrapperState) &&
            S.controlled &&
            v.type === "number" &&
            wl(v, "number", v.value);
      }
      switch (((S = s ? Qn(s) : window), e)) {
        case "focusin":
          (Bs(S) || S.contentEditable === "true") &&
            (($n = S), (Al = s), (Mr = null));
          break;
        case "focusout":
          Mr = Al = $n = null;
          break;
        case "mousedown":
          jl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (jl = !1), Xs(h, n, c);
          break;
        case "selectionchange":
          if (em) break;
        case "keydown":
        case "keyup":
          Xs(h, n, c);
      }
      var k;
      if (Aa)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        Dn
          ? dd(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (fd &&
          n.locale !== "ko" &&
          (Dn || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && Dn && (k = cd())
            : ((Kt = c),
              (Na = "value" in Kt ? Kt.value : Kt.textContent),
              (Dn = !0))),
        (S = au(s, E)),
        0 < S.length &&
          ((E = new Qs(E, e, null, n, c)),
          h.push({ event: E, listeners: S }),
          k ? (E.data = k) : ((k = pd(n)), k !== null && (E.data = k)))),
        (k = Uh ? qh(e, n) : Vh(e, n)) &&
          ((s = au(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new Qs("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: s }),
            (c.data = k)));
    }
    Cd(h, t);
  });
}
function Xr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function au(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      u = i.stateNode;
    i.tag === 5 &&
      u !== null &&
      ((i = u),
      (u = qr(e, n)),
      u != null && r.unshift(Xr(e, u, i)),
      (u = qr(e, t)),
      u != null && r.push(Xr(e, u, i))),
      (e = e.return);
  }
  return r;
}
function In(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zs(e, t, n, r, i) {
  for (var u = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      s = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      i
        ? ((a = qr(n, u)), a != null && o.unshift(Xr(n, a, l)))
        : i || ((a = qr(n, u)), a != null && o.push(Xr(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var im = /\r\n?/g,
  um = /\u0000|\uFFFD/g;
function ec(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      im,
      `
`
    )
    .replace(um, "");
}
function Ti(e, t, n) {
  if (((t = ec(t)), ec(e) !== t && n)) throw Error(z(425));
}
function su() {}
var Ml = null,
  Ll = null;
function Il(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var bl = typeof setTimeout == "function" ? setTimeout : void 0,
  om = typeof clearTimeout == "function" ? clearTimeout : void 0,
  tc = typeof Promise == "function" ? Promise : void 0,
  lm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof tc < "u"
      ? function (e) {
          return tc.resolve(null).then(e).catch(am);
        }
      : bl;
function am(e) {
  setTimeout(function () {
    throw e;
  });
}
function Uo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Hr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Hr(t);
}
function Zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function nc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var dr = Math.random().toString(36).slice(2),
  xt = "__reactFiber$" + dr,
  Gr = "__reactProps$" + dr,
  bt = "__reactContainer$" + dr,
  zl = "__reactEvents$" + dr,
  sm = "__reactListeners$" + dr,
  cm = "__reactHandles$" + dr;
function Sn(e) {
  var t = e[xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[bt] || n[xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = nc(e); e !== null; ) {
          if ((n = e[xt])) return n;
          e = nc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vi(e) {
  return (
    (e = e[xt] || e[bt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function Uu(e) {
  return e[Gr] || null;
}
var Dl = [],
  Un = -1;
function hn(e) {
  return { current: e };
}
function re(e) {
  0 > Un || ((e.current = Dl[Un]), (Dl[Un] = null), Un--);
}
function ee(e, t) {
  Un++, (Dl[Un] = e.current), (e.current = t);
}
var sn = {},
  be = hn(sn),
  qe = hn(!1),
  On = sn;
function nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return sn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    u;
  for (u in n) i[u] = t[u];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ve(e) {
  return (e = e.childContextTypes), e != null;
}
function cu() {
  re(qe), re(be);
}
function rc(e, t, n) {
  if (be.current !== sn) throw Error(z(168));
  ee(be, t), ee(qe, n);
}
function Rd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(z(108, Kv(e) || "Unknown", i));
  return ce({}, n, r);
}
function fu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || sn),
    (On = be.current),
    ee(be, e),
    ee(qe, qe.current),
    !0
  );
}
function ic(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n
    ? ((e = Rd(e, t, On)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      re(qe),
      re(be),
      ee(be, e))
    : re(qe),
    ee(qe, n);
}
var Tt = null,
  qu = !1,
  qo = !1;
function Nd(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e);
}
function fm(e) {
  (qu = !0), Nd(e);
}
function mn() {
  if (!qo && Tt !== null) {
    qo = !0;
    var e = 0,
      t = G;
    try {
      var n = Tt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Tt = null), (qu = !1);
    } catch (i) {
      throw (Tt !== null && (Tt = Tt.slice(e + 1)), Zf(Ea, mn), i);
    } finally {
      (G = t), (qo = !1);
    }
  }
  return null;
}
var qn = [],
  Vn = 0,
  du = null,
  pu = 0,
  rt = [],
  it = 0,
  Rn = null,
  At = 1,
  jt = "";
function yn(e, t) {
  (qn[Vn++] = pu), (qn[Vn++] = du), (du = e), (pu = t);
}
function Td(e, t, n) {
  (rt[it++] = At), (rt[it++] = jt), (rt[it++] = Rn), (Rn = e);
  var r = At;
  e = jt;
  var i = 32 - vt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var u = 32 - vt(t) + i;
  if (30 < u) {
    var o = i - (i % 5);
    (u = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (At = (1 << (32 - vt(t) + i)) | (n << i) | r),
      (jt = u + e);
  } else (At = (1 << u) | (n << i) | r), (jt = e);
}
function Ma(e) {
  e.return !== null && (yn(e, 1), Td(e, 1, 0));
}
function La(e) {
  for (; e === du; )
    (du = qn[--Vn]), (qn[Vn] = null), (pu = qn[--Vn]), (qn[Vn] = null);
  for (; e === Rn; )
    (Rn = rt[--it]),
      (rt[it] = null),
      (jt = rt[--it]),
      (rt[it] = null),
      (At = rt[--it]),
      (rt[it] = null);
}
var Xe = null,
  Ye = null,
  oe = !1,
  pt = null;
function _d(e, t) {
  var n = ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function uc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Xe = e), (Ye = Zt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Xe = e), (Ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Rn !== null ? { id: At, overflow: jt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Xe = e),
            (Ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function $l(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fl(e) {
  if (oe) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!uc(e, t)) {
        if ($l(e)) throw Error(z(418));
        t = Zt(n.nextSibling);
        var r = Xe;
        t && uc(e, t)
          ? _d(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (Xe = e));
      }
    } else {
      if ($l(e)) throw Error(z(418));
      (e.flags = (e.flags & -4097) | 2), (oe = !1), (Xe = e);
    }
  }
}
function oc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Xe = e;
}
function _i(e) {
  if (e !== Xe) return !1;
  if (!oe) return oc(e), (oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Il(e.type, e.memoizedProps))),
    t && (t = Ye))
  ) {
    if ($l(e)) throw (Ad(), Error(z(418)));
    for (; t; ) _d(e, t), (t = Zt(t.nextSibling));
  }
  if ((oc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = Zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Xe ? Zt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ad() {
  for (var e = Ye; e; ) e = Zt(e.nextSibling);
}
function rr() {
  (Ye = Xe = null), (oe = !1);
}
function Ia(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
var dm = $t.ReactCurrentBatchConfig;
function ft(e, t) {
  if (e && e.defaultProps) {
    (t = ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var vu = hn(null),
  hu = null,
  Bn = null,
  ba = null;
function za() {
  ba = Bn = hu = null;
}
function Da(e) {
  var t = vu.current;
  re(vu), (e._currentValue = t);
}
function Ql(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jn(e, t) {
  (hu = e),
    (ba = Bn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function lt(e) {
  var t = e._currentValue;
  if (ba !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
      if (hu === null) throw Error(z(308));
      (Bn = e), (hu.dependencies = { lanes: 0, firstContext: e });
    } else Bn = Bn.next = e;
  return t;
}
var xn = null;
function $a(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function jd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), $a(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    zt(e, r)
  );
}
function zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function Fa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Md(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function en(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      zt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), $a(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    zt(e, n)
  );
}
function Bi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ca(e, n);
  }
}
function lc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      u = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        u === null ? (i = u = o) : (u = u.next = o), (n = n.next);
      } while (n !== null);
      u === null ? (i = u = t) : (u = u.next = t);
    } else i = u = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: u,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function mu(e, t, n, r) {
  var i = e.updateQueue;
  Vt = !1;
  var u = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      s = a.next;
    (a.next = null), o === null ? (u = s) : (o.next = s), (o = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = s) : (l.next = s),
        (c.lastBaseUpdate = a)));
  }
  if (u !== null) {
    var h = i.baseState;
    (o = 0), (c = s = a = null), (l = u);
    do {
      var v = l.lane,
        p = l.eventTime;
      if ((r & v) === v) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            w = l;
          switch (((v = t), (p = n), w.tag)) {
            case 1:
              if (((g = w.payload), typeof g == "function")) {
                h = g.call(p, h, v);
                break e;
              }
              h = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = w.payload),
                (v = typeof g == "function" ? g.call(p, h, v) : g),
                v == null)
              )
                break e;
              h = ce({}, h, v);
              break e;
            case 2:
              Vt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (v = i.effects),
          v === null ? (i.effects = [l]) : v.push(l));
      } else
        (p = {
          eventTime: p,
          lane: v,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((s = c = p), (a = h)) : (c = c.next = p),
          (o |= v);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (v = l),
          (l = v.next),
          (v.next = null),
          (i.lastBaseUpdate = v),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = h),
      (i.baseState = a),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else u === null && (i.shared.lanes = 0);
    (Tn |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function ac(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(z(191, i));
        i.call(r);
      }
    }
}
var Ld = new jf.Component().refs;
function Ul(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      i = nn(e),
      u = Lt(r, i);
    (u.payload = t),
      n != null && (u.callback = n),
      (t = en(e, u, i)),
      t !== null && (ht(t, e, i, r), Bi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      i = nn(e),
      u = Lt(r, i);
    (u.tag = 1),
      (u.payload = t),
      n != null && (u.callback = n),
      (t = en(e, u, i)),
      t !== null && (ht(t, e, i, r), Bi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = De(),
      r = nn(e),
      i = Lt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = en(e, i, r)),
      t !== null && (ht(t, e, r, n), Bi(t, e, r));
  },
};
function sc(e, t, n, r, i, u, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, u, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Kr(n, r) || !Kr(i, u)
      : !0
  );
}
function Id(e, t, n) {
  var r = !1,
    i = sn,
    u = t.contextType;
  return (
    typeof u == "object" && u !== null
      ? (u = lt(u))
      : ((i = Ve(t) ? On : be.current),
        (r = t.contextTypes),
        (u = (r = r != null) ? nr(e, i) : sn)),
    (t = new t(n, u)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = u)),
    t
  );
}
function cc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vu.enqueueReplaceState(t, t.state, null);
}
function ql(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Ld), Fa(e);
  var u = t.contextType;
  typeof u == "object" && u !== null
    ? (i.context = lt(u))
    : ((u = Ve(t) ? On : be.current), (i.context = nr(e, u))),
    (i.state = e.memoizedState),
    (u = t.getDerivedStateFromProps),
    typeof u == "function" && (Ul(e, t, u, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Vu.enqueueReplaceState(i, i.state, null),
      mu(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function wr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, e));
      var i = r,
        u = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === u
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            l === Ld && (l = i.refs = {}),
              o === null ? delete l[u] : (l[u] = o);
          }),
          (t._stringRef = u),
          t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, e));
  }
  return e;
}
function Ai(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      z(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function fc(e) {
  var t = e._init;
  return t(e._payload);
}
function bd(e) {
  function t(m, d) {
    if (e) {
      var f = m.deletions;
      f === null ? ((m.deletions = [d]), (m.flags |= 16)) : f.push(d);
    }
  }
  function n(m, d) {
    if (!e) return null;
    for (; d !== null; ) t(m, d), (d = d.sibling);
    return null;
  }
  function r(m, d) {
    for (m = new Map(); d !== null; )
      d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling);
    return m;
  }
  function i(m, d) {
    return (m = rn(m, d)), (m.index = 0), (m.sibling = null), m;
  }
  function u(m, d, f) {
    return (
      (m.index = f),
      e
        ? ((f = m.alternate),
          f !== null
            ? ((f = f.index), f < d ? ((m.flags |= 2), d) : f)
            : ((m.flags |= 2), d))
        : ((m.flags |= 1048576), d)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, d, f, y) {
    return d === null || d.tag !== 6
      ? ((d = Xo(f, m.mode, y)), (d.return = m), d)
      : ((d = i(d, f)), (d.return = m), d);
  }
  function a(m, d, f, y) {
    var x = f.type;
    return x === zn
      ? c(m, d, f.props.children, y, f.key)
      : d !== null &&
        (d.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === qt &&
            fc(x) === d.type))
      ? ((y = i(d, f.props)), (y.ref = wr(m, d, f)), (y.return = m), y)
      : ((y = Gi(f.type, f.key, f.props, null, m.mode, y)),
        (y.ref = wr(m, d, f)),
        (y.return = m),
        y);
  }
  function s(m, d, f, y) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== f.containerInfo ||
      d.stateNode.implementation !== f.implementation
      ? ((d = Go(f, m.mode, y)), (d.return = m), d)
      : ((d = i(d, f.children || [])), (d.return = m), d);
  }
  function c(m, d, f, y, x) {
    return d === null || d.tag !== 7
      ? ((d = Cn(f, m.mode, y, x)), (d.return = m), d)
      : ((d = i(d, f)), (d.return = m), d);
  }
  function h(m, d, f) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = Xo("" + d, m.mode, f)), (d.return = m), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Si:
          return (
            (f = Gi(d.type, d.key, d.props, null, m.mode, f)),
            (f.ref = wr(m, null, d)),
            (f.return = m),
            f
          );
        case bn:
          return (d = Go(d, m.mode, f)), (d.return = m), d;
        case qt:
          var y = d._init;
          return h(m, y(d._payload), f);
      }
      if (Er(d) || vr(d))
        return (d = Cn(d, m.mode, f, null)), (d.return = m), d;
      Ai(m, d);
    }
    return null;
  }
  function v(m, d, f, y) {
    var x = d !== null ? d.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return x !== null ? null : l(m, d, "" + f, y);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Si:
          return f.key === x ? a(m, d, f, y) : null;
        case bn:
          return f.key === x ? s(m, d, f, y) : null;
        case qt:
          return (x = f._init), v(m, d, x(f._payload), y);
      }
      if (Er(f) || vr(f)) return x !== null ? null : c(m, d, f, y, null);
      Ai(m, f);
    }
    return null;
  }
  function p(m, d, f, y, x) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (m = m.get(f) || null), l(d, m, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Si:
          return (m = m.get(y.key === null ? f : y.key) || null), a(d, m, y, x);
        case bn:
          return (m = m.get(y.key === null ? f : y.key) || null), s(d, m, y, x);
        case qt:
          var S = y._init;
          return p(m, d, f, S(y._payload), x);
      }
      if (Er(y) || vr(y)) return (m = m.get(f) || null), c(d, m, y, x, null);
      Ai(d, y);
    }
    return null;
  }
  function g(m, d, f, y) {
    for (
      var x = null, S = null, k = d, E = (d = 0), R = null;
      k !== null && E < f.length;
      E++
    ) {
      k.index > E ? ((R = k), (k = null)) : (R = k.sibling);
      var P = v(m, k, f[E], y);
      if (P === null) {
        k === null && (k = R);
        break;
      }
      e && k && P.alternate === null && t(m, k),
        (d = u(P, d, E)),
        S === null ? (x = P) : (S.sibling = P),
        (S = P),
        (k = R);
    }
    if (E === f.length) return n(m, k), oe && yn(m, E), x;
    if (k === null) {
      for (; E < f.length; E++)
        (k = h(m, f[E], y)),
          k !== null &&
            ((d = u(k, d, E)), S === null ? (x = k) : (S.sibling = k), (S = k));
      return oe && yn(m, E), x;
    }
    for (k = r(m, k); E < f.length; E++)
      (R = p(k, m, E, f[E], y)),
        R !== null &&
          (e && R.alternate !== null && k.delete(R.key === null ? E : R.key),
          (d = u(R, d, E)),
          S === null ? (x = R) : (S.sibling = R),
          (S = R));
    return (
      e &&
        k.forEach(function (A) {
          return t(m, A);
        }),
      oe && yn(m, E),
      x
    );
  }
  function w(m, d, f, y) {
    var x = vr(f);
    if (typeof x != "function") throw Error(z(150));
    if (((f = x.call(f)), f == null)) throw Error(z(151));
    for (
      var S = (x = null), k = d, E = (d = 0), R = null, P = f.next();
      k !== null && !P.done;
      E++, P = f.next()
    ) {
      k.index > E ? ((R = k), (k = null)) : (R = k.sibling);
      var A = v(m, k, P.value, y);
      if (A === null) {
        k === null && (k = R);
        break;
      }
      e && k && A.alternate === null && t(m, k),
        (d = u(A, d, E)),
        S === null ? (x = A) : (S.sibling = A),
        (S = A),
        (k = R);
    }
    if (P.done) return n(m, k), oe && yn(m, E), x;
    if (k === null) {
      for (; !P.done; E++, P = f.next())
        (P = h(m, P.value, y)),
          P !== null &&
            ((d = u(P, d, E)), S === null ? (x = P) : (S.sibling = P), (S = P));
      return oe && yn(m, E), x;
    }
    for (k = r(m, k); !P.done; E++, P = f.next())
      (P = p(k, m, E, P.value, y)),
        P !== null &&
          (e && P.alternate !== null && k.delete(P.key === null ? E : P.key),
          (d = u(P, d, E)),
          S === null ? (x = P) : (S.sibling = P),
          (S = P));
    return (
      e &&
        k.forEach(function (N) {
          return t(m, N);
        }),
      oe && yn(m, E),
      x
    );
  }
  function O(m, d, f, y) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === zn &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case Si:
          e: {
            for (var x = f.key, S = d; S !== null; ) {
              if (S.key === x) {
                if (((x = f.type), x === zn)) {
                  if (S.tag === 7) {
                    n(m, S.sibling),
                      (d = i(S, f.props.children)),
                      (d.return = m),
                      (m = d);
                    break e;
                  }
                } else if (
                  S.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === qt &&
                    fc(x) === S.type)
                ) {
                  n(m, S.sibling),
                    (d = i(S, f.props)),
                    (d.ref = wr(m, S, f)),
                    (d.return = m),
                    (m = d);
                  break e;
                }
                n(m, S);
                break;
              } else t(m, S);
              S = S.sibling;
            }
            f.type === zn
              ? ((d = Cn(f.props.children, m.mode, y, f.key)),
                (d.return = m),
                (m = d))
              : ((y = Gi(f.type, f.key, f.props, null, m.mode, y)),
                (y.ref = wr(m, d, f)),
                (y.return = m),
                (m = y));
          }
          return o(m);
        case bn:
          e: {
            for (S = f.key; d !== null; ) {
              if (d.key === S)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === f.containerInfo &&
                  d.stateNode.implementation === f.implementation
                ) {
                  n(m, d.sibling),
                    (d = i(d, f.children || [])),
                    (d.return = m),
                    (m = d);
                  break e;
                } else {
                  n(m, d);
                  break;
                }
              else t(m, d);
              d = d.sibling;
            }
            (d = Go(f, m.mode, y)), (d.return = m), (m = d);
          }
          return o(m);
        case qt:
          return (S = f._init), O(m, d, S(f._payload), y);
      }
      if (Er(f)) return g(m, d, f, y);
      if (vr(f)) return w(m, d, f, y);
      Ai(m, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = i(d, f)), (d.return = m), (m = d))
          : (n(m, d), (d = Xo(f, m.mode, y)), (d.return = m), (m = d)),
        o(m))
      : n(m, d);
  }
  return O;
}
var ir = bd(!0),
  zd = bd(!1),
  hi = {},
  Et = hn(hi),
  Jr = hn(hi),
  Zr = hn(hi);
function kn(e) {
  if (e === hi) throw Error(z(174));
  return e;
}
function Qa(e, t) {
  switch ((ee(Zr, t), ee(Jr, e), ee(Et, hi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = xl(t, e));
  }
  re(Et), ee(Et, t);
}
function ur() {
  re(Et), re(Jr), re(Zr);
}
function Dd(e) {
  kn(Zr.current);
  var t = kn(Et.current),
    n = xl(t, e.type);
  t !== n && (ee(Jr, e), ee(Et, n));
}
function Ua(e) {
  Jr.current === e && (re(Et), re(Jr));
}
var ae = hn(0);
function yu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Vo = [];
function qa() {
  for (var e = 0; e < Vo.length; e++)
    Vo[e]._workInProgressVersionPrimary = null;
  Vo.length = 0;
}
var Hi = $t.ReactCurrentDispatcher,
  Bo = $t.ReactCurrentBatchConfig,
  Nn = 0,
  se = null,
  we = null,
  ke = null,
  gu = !1,
  Lr = !1,
  ei = 0,
  pm = 0;
function je() {
  throw Error(z(321));
}
function Va(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!mt(e[n], t[n])) return !1;
  return !0;
}
function Ba(e, t, n, r, i, u) {
  if (
    ((Nn = u),
    (se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hi.current = e === null || e.memoizedState === null ? ym : gm),
    (e = n(r, i)),
    Lr)
  ) {
    u = 0;
    do {
      if (((Lr = !1), (ei = 0), 25 <= u)) throw Error(z(301));
      (u += 1),
        (ke = we = null),
        (t.updateQueue = null),
        (Hi.current = wm),
        (e = n(r, i));
    } while (Lr);
  }
  if (
    ((Hi.current = wu),
    (t = we !== null && we.next !== null),
    (Nn = 0),
    (ke = we = se = null),
    (gu = !1),
    t)
  )
    throw Error(z(300));
  return e;
}
function Ha() {
  var e = ei !== 0;
  return (ei = 0), e;
}
function St() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (se.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function at() {
  if (we === null) {
    var e = se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = ke === null ? se.memoizedState : ke.next;
  if (t !== null) (ke = t), (we = e);
  else {
    if (e === null) throw Error(z(310));
    (we = e),
      (e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null,
      }),
      ke === null ? (se.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function ti(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ho(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = we,
    i = r.baseQueue,
    u = n.pending;
  if (u !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = u.next), (u.next = o);
    }
    (r.baseQueue = i = u), (n.pending = null);
  }
  if (i !== null) {
    (u = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      s = u;
    do {
      var c = s.lane;
      if ((Nn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var h = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((l = a = h), (o = r)) : (a = a.next = h),
          (se.lanes |= c),
          (Tn |= c);
      }
      s = s.next;
    } while (s !== null && s !== u);
    a === null ? (o = r) : (a.next = l),
      mt(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (u = i.lane), (se.lanes |= u), (Tn |= u), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Wo(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    u = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (u = e(u, o.action)), (o = o.next);
    while (o !== i);
    mt(u, t.memoizedState) || (Ue = !0),
      (t.memoizedState = u),
      t.baseQueue === null && (t.baseState = u),
      (n.lastRenderedState = u);
  }
  return [u, r];
}
function $d() {}
function Fd(e, t) {
  var n = se,
    r = at(),
    i = t(),
    u = !mt(r.memoizedState, i);
  if (
    (u && ((r.memoizedState = i), (Ue = !0)),
    (r = r.queue),
    Wa(qd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || u || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ni(9, Ud.bind(null, n, r, i, t), void 0, null),
      Pe === null)
    )
      throw Error(z(349));
    Nn & 30 || Qd(n, t, i);
  }
  return i;
}
function Qd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (se.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ud(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Vd(t) && Bd(e);
}
function qd(e, t, n) {
  return n(function () {
    Vd(t) && Bd(e);
  });
}
function Vd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !mt(e, n);
  } catch {
    return !0;
  }
}
function Bd(e) {
  var t = zt(e, 1);
  t !== null && ht(t, e, 1, -1);
}
function dc(e) {
  var t = St();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ti,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = mm.bind(null, se, e)),
    [t.memoizedState, e]
  );
}
function ni(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (se.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Hd() {
  return at().memoizedState;
}
function Wi(e, t, n, r) {
  var i = St();
  (se.flags |= e),
    (i.memoizedState = ni(1 | t, n, void 0, r === void 0 ? null : r));
}
function Bu(e, t, n, r) {
  var i = at();
  r = r === void 0 ? null : r;
  var u = void 0;
  if (we !== null) {
    var o = we.memoizedState;
    if (((u = o.destroy), r !== null && Va(r, o.deps))) {
      i.memoizedState = ni(t, n, u, r);
      return;
    }
  }
  (se.flags |= e), (i.memoizedState = ni(1 | t, n, u, r));
}
function pc(e, t) {
  return Wi(8390656, 8, e, t);
}
function Wa(e, t) {
  return Bu(2048, 8, e, t);
}
function Wd(e, t) {
  return Bu(4, 2, e, t);
}
function Kd(e, t) {
  return Bu(4, 4, e, t);
}
function Yd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Xd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Bu(4, 4, Yd.bind(null, t, e), n)
  );
}
function Ka() {}
function Gd(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Va(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Jd(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Va(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Zd(e, t, n) {
  return Nn & 21
    ? (mt(n, t) || ((n = nd()), (se.lanes |= n), (Tn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function vm(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Bo.transition;
  Bo.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (Bo.transition = r);
  }
}
function ep() {
  return at().memoizedState;
}
function hm(e, t, n) {
  var r = nn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    tp(e))
  )
    np(t, n);
  else if (((n = jd(e, t, n, r)), n !== null)) {
    var i = De();
    ht(n, e, r, i), rp(n, t, r);
  }
}
function mm(e, t, n) {
  var r = nn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (tp(e)) np(t, i);
  else {
    var u = e.alternate;
    if (
      e.lanes === 0 &&
      (u === null || u.lanes === 0) &&
      ((u = t.lastRenderedReducer), u !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = u(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), mt(l, o))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), $a(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = jd(e, t, i, r)),
      n !== null && ((i = De()), ht(n, e, r, i), rp(n, t, r));
  }
}
function tp(e) {
  var t = e.alternate;
  return e === se || (t !== null && t === se);
}
function np(e, t) {
  Lr = gu = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function rp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ca(e, n);
  }
}
var wu = {
    readContext: lt,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useInsertionEffect: je,
    useLayoutEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useMutableSource: je,
    useSyncExternalStore: je,
    useId: je,
    unstable_isNewReconciler: !1,
  },
  ym = {
    readContext: lt,
    useCallback: function (e, t) {
      return (St().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: lt,
    useEffect: pc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wi(4194308, 4, Yd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Wi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = St();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = St();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = hm.bind(null, se, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = St();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: dc,
    useDebugValue: Ka,
    useDeferredValue: function (e) {
      return (St().memoizedState = e);
    },
    useTransition: function () {
      var e = dc(!1),
        t = e[0];
      return (e = vm.bind(null, e[1])), (St().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = se,
        i = St();
      if (oe) {
        if (n === void 0) throw Error(z(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(z(349));
        Nn & 30 || Qd(r, t, n);
      }
      i.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return (
        (i.queue = u),
        pc(qd.bind(null, r, u, e), [e]),
        (r.flags |= 2048),
        ni(9, Ud.bind(null, r, u, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = St(),
        t = Pe.identifierPrefix;
      if (oe) {
        var n = jt,
          r = At;
        (n = (r & ~(1 << (32 - vt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ei++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = pm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  gm = {
    readContext: lt,
    useCallback: Gd,
    useContext: lt,
    useEffect: Wa,
    useImperativeHandle: Xd,
    useInsertionEffect: Wd,
    useLayoutEffect: Kd,
    useMemo: Jd,
    useReducer: Ho,
    useRef: Hd,
    useState: function () {
      return Ho(ti);
    },
    useDebugValue: Ka,
    useDeferredValue: function (e) {
      var t = at();
      return Zd(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = Ho(ti)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: $d,
    useSyncExternalStore: Fd,
    useId: ep,
    unstable_isNewReconciler: !1,
  },
  wm = {
    readContext: lt,
    useCallback: Gd,
    useContext: lt,
    useEffect: Wa,
    useImperativeHandle: Xd,
    useInsertionEffect: Wd,
    useLayoutEffect: Kd,
    useMemo: Jd,
    useReducer: Wo,
    useRef: Hd,
    useState: function () {
      return Wo(ti);
    },
    useDebugValue: Ka,
    useDeferredValue: function (e) {
      var t = at();
      return we === null ? (t.memoizedState = e) : Zd(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = Wo(ti)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: $d,
    useSyncExternalStore: Fd,
    useId: ep,
    unstable_isNewReconciler: !1,
  };
function or(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Wv(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (u) {
    i =
      `
Error generating stack: ` +
      u.message +
      `
` +
      u.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ko(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Sm = typeof WeakMap == "function" ? WeakMap : Map;
function ip(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      xu || ((xu = !0), (ea = r)), Vl(e, t);
    }),
    n
  );
}
function up(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Vl(e, t);
      });
  }
  var u = e.stateNode;
  return (
    u !== null &&
      typeof u.componentDidCatch == "function" &&
      (n.callback = function () {
        Vl(e, t),
          typeof r != "function" &&
            (tn === null ? (tn = new Set([this])) : tn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function vc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sm();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Lm.bind(null, e, t, n)), t.then(e, e));
}
function hc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function mc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Lt(-1, 1)), (t.tag = 2), en(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var xm = $t.ReactCurrentOwner,
  Ue = !1;
function ze(e, t, n, r) {
  t.child = e === null ? zd(t, null, n, r) : ir(t, e.child, n, r);
}
function yc(e, t, n, r, i) {
  n = n.render;
  var u = t.ref;
  return (
    Jn(t, i),
    (r = Ba(e, t, n, r, u, i)),
    (n = Ha()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Dt(e, t, i))
      : (oe && n && Ma(t), (t.flags |= 1), ze(e, t, r, i), t.child)
  );
}
function gc(e, t, n, r, i) {
  if (e === null) {
    var u = n.type;
    return typeof u == "function" &&
      !ns(u) &&
      u.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = u), op(e, t, u, r, i))
      : ((e = Gi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((u = e.child), !(e.lanes & i))) {
    var o = u.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Kr), n(o, r) && e.ref === t.ref)
    )
      return Dt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = rn(u, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function op(e, t, n, r, i) {
  if (e !== null) {
    var u = e.memoizedProps;
    if (Kr(u, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = u), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), Dt(e, t, i);
  }
  return Bl(e, t, n, r, i);
}
function lp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    u = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ee(Wn, Ke),
        (Ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = u !== null ? u.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ee(Wn, Ke),
          (Ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = u !== null ? u.baseLanes : n),
        ee(Wn, Ke),
        (Ke |= r);
    }
  else
    u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ee(Wn, Ke),
      (Ke |= r);
  return ze(e, t, i, n), t.child;
}
function ap(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Bl(e, t, n, r, i) {
  var u = Ve(n) ? On : be.current;
  return (
    (u = nr(t, u)),
    Jn(t, i),
    (n = Ba(e, t, n, r, u, i)),
    (r = Ha()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Dt(e, t, i))
      : (oe && r && Ma(t), (t.flags |= 1), ze(e, t, n, i), t.child)
  );
}
function wc(e, t, n, r, i) {
  if (Ve(n)) {
    var u = !0;
    fu(t);
  } else u = !1;
  if ((Jn(t, i), t.stateNode === null))
    Ki(e, t), Id(t, n, r), ql(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = lt(s))
      : ((s = Ve(n) ? On : be.current), (s = nr(t, s)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== s) && cc(t, o, r, s)),
      (Vt = !1);
    var v = t.memoizedState;
    (o.state = v),
      mu(t, r, o, i),
      (a = t.memoizedState),
      l !== r || v !== a || qe.current || Vt
        ? (typeof c == "function" && (Ul(t, n, c, r), (a = t.memoizedState)),
          (l = Vt || sc(t, n, l, r, v, a, s))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = s),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Md(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : ft(t.type, l)),
      (o.props = s),
      (h = t.pendingProps),
      (v = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = lt(a))
        : ((a = Ve(n) ? On : be.current), (a = nr(t, a)));
    var p = n.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== h || v !== a) && cc(t, o, r, a)),
      (Vt = !1),
      (v = t.memoizedState),
      (o.state = v),
      mu(t, r, o, i);
    var g = t.memoizedState;
    l !== h || v !== g || qe.current || Vt
      ? (typeof p == "function" && (Ul(t, n, p, r), (g = t.memoizedState)),
        (s = Vt || sc(t, n, s, r, v, g, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, g, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, g, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (o.props = r),
        (o.state = g),
        (o.context = a),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Hl(e, t, n, r, u, i);
}
function Hl(e, t, n, r, i, u) {
  ap(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && ic(t, n, !1), Dt(e, t, u);
  (r = t.stateNode), (xm.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = ir(t, e.child, null, u)), (t.child = ir(t, null, l, u)))
      : ze(e, t, l, u),
    (t.memoizedState = r.state),
    i && ic(t, n, !0),
    t.child
  );
}
function sp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? rc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && rc(e, t.context, !1),
    Qa(e, t.containerInfo);
}
function Sc(e, t, n, r, i) {
  return rr(), Ia(i), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var Wl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Kl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function cp(e, t, n) {
  var r = t.pendingProps,
    i = ae.current,
    u = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((u = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ee(ae, i & 1),
    e === null)
  )
    return (
      Fl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          u
            ? ((r = t.mode),
              (u = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && u !== null
                ? ((u.childLanes = 0), (u.pendingProps = o))
                : (u = Ku(o, r, 0, null)),
              (e = Cn(e, r, n, null)),
              (u.return = t),
              (e.return = t),
              (u.sibling = e),
              (t.child = u),
              (t.child.memoizedState = Kl(n)),
              (t.memoizedState = Wl),
              e)
            : Ya(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return km(e, t, o, r, l, i, n);
  if (u) {
    (u = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = rn(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (u = rn(l, u)) : ((u = Cn(u, o, n, null)), (u.flags |= 2)),
      (u.return = t),
      (r.return = t),
      (r.sibling = u),
      (t.child = r),
      (r = u),
      (u = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Kl(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (u.memoizedState = o),
      (u.childLanes = e.childLanes & ~n),
      (t.memoizedState = Wl),
      r
    );
  }
  return (
    (u = e.child),
    (e = u.sibling),
    (r = rn(u, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ya(e, t) {
  return (
    (t = Ku({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ji(e, t, n, r) {
  return (
    r !== null && Ia(r),
    ir(t, e.child, null, n),
    (e = Ya(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function km(e, t, n, r, i, u, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ko(Error(z(422)))), ji(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((u = r.fallback),
        (i = t.mode),
        (r = Ku({ mode: "visible", children: r.children }, i, 0, null)),
        (u = Cn(u, i, o, null)),
        (u.flags |= 2),
        (r.return = t),
        (u.return = t),
        (r.sibling = u),
        (t.child = r),
        t.mode & 1 && ir(t, e.child, null, o),
        (t.child.memoizedState = Kl(o)),
        (t.memoizedState = Wl),
        u);
  if (!(t.mode & 1)) return ji(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (u = Error(z(419))), (r = Ko(u, r, void 0)), ji(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), Ue || l)) {
    if (((r = Pe), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== u.retryLane &&
          ((u.retryLane = i), zt(e, i), ht(r, e, i, -1));
    }
    return ts(), (r = Ko(Error(z(421)))), ji(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Im.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = u.treeContext),
      (Ye = Zt(i.nextSibling)),
      (Xe = t),
      (oe = !0),
      (pt = null),
      e !== null &&
        ((rt[it++] = At),
        (rt[it++] = jt),
        (rt[it++] = Rn),
        (At = e.id),
        (jt = e.overflow),
        (Rn = t)),
      (t = Ya(t, r.children)),
      (t.flags |= 4096),
      t);
}
function xc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ql(e.return, t, n);
}
function Yo(e, t, n, r, i) {
  var u = e.memoizedState;
  u === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((u.isBackwards = t),
      (u.rendering = null),
      (u.renderingStartTime = 0),
      (u.last = r),
      (u.tail = n),
      (u.tailMode = i));
}
function fp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    u = r.tail;
  if ((ze(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xc(e, n, t);
        else if (e.tag === 19) xc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ee(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && yu(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Yo(t, !1, i, n, u);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && yu(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Yo(t, !0, n, null, u);
        break;
      case "together":
        Yo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ki(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Dt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Tn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (
      e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = rn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Pm(e, t, n) {
  switch (t.tag) {
    case 3:
      sp(t), rr();
      break;
    case 5:
      Dd(t);
      break;
    case 1:
      Ve(t.type) && fu(t);
      break;
    case 4:
      Qa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ee(vu, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ee(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? cp(e, t, n)
          : (ee(ae, ae.current & 1),
            (e = Dt(e, t, n)),
            e !== null ? e.sibling : null);
      ee(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return fp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ee(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), lp(e, t, n);
  }
  return Dt(e, t, n);
}
var dp, Yl, pp, vp;
dp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Yl = function () {};
pp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), kn(Et.current);
    var u = null;
    switch (n) {
      case "input":
        (i = yl(e, i)), (r = yl(e, r)), (u = []);
        break;
      case "select":
        (i = ce({}, i, { value: void 0 })),
          (r = ce({}, r, { value: void 0 })),
          (u = []);
        break;
      case "textarea":
        (i = Sl(e, i)), (r = Sl(e, r)), (u = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = su);
    }
    kl(n, r);
    var o;
    n = null;
    for (s in i)
      if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === "style") {
          var l = i[s];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Qr.hasOwnProperty(s)
              ? u || (u = [])
              : (u = u || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((l = i != null ? i[s] : void 0),
        r.hasOwnProperty(s) && a !== l && (a != null || l != null))
      )
        if (s === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (u || (u = []), u.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (u = u || []).push(s, a))
            : s === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (u = u || []).push(s, "" + a)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Qr.hasOwnProperty(s)
                ? (a != null && s === "onScroll" && te("scroll", e),
                  u || l === a || (u = []))
                : (u = u || []).push(s, a));
    }
    n && (u = u || []).push("style", n);
    var s = u;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
vp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sr(e, t) {
  if (!oe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Em(e, t, n) {
  var r = t.pendingProps;
  switch ((La(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Me(t), null;
    case 1:
      return Ve(t.type) && cu(), Me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ur(),
        re(qe),
        re(be),
        qa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_i(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), pt !== null && (ra(pt), (pt = null)))),
        Yl(e, t),
        Me(t),
        null
      );
    case 5:
      Ua(t);
      var i = kn(Zr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        pp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return Me(t), null;
        }
        if (((e = kn(Et.current)), _i(t))) {
          (r = t.stateNode), (n = t.type);
          var u = t.memoizedProps;
          switch (((r[xt] = t), (r[Gr] = u), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              te("cancel", r), te("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              te("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Or.length; i++) te(Or[i], r);
              break;
            case "source":
              te("error", r);
              break;
            case "img":
            case "image":
            case "link":
              te("error", r), te("load", r);
              break;
            case "details":
              te("toggle", r);
              break;
            case "input":
              _s(r, u), te("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!u.multiple }),
                te("invalid", r);
              break;
            case "textarea":
              js(r, u), te("invalid", r);
          }
          kl(n, u), (i = null);
          for (var o in u)
            if (u.hasOwnProperty(o)) {
              var l = u[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (u.suppressHydrationWarning !== !0 &&
                      Ti(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (u.suppressHydrationWarning !== !0 &&
                      Ti(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Qr.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  te("scroll", r);
            }
          switch (n) {
            case "input":
              xi(r), As(r, u, !0);
              break;
            case "textarea":
              xi(r), Ms(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof u.onClick == "function" && (r.onclick = su);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Qf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[xt] = t),
            (e[Gr] = r),
            dp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Pl(n, r)), n)) {
              case "dialog":
                te("cancel", e), te("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Or.length; i++) te(Or[i], e);
                i = r;
                break;
              case "source":
                te("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                te("error", e), te("load", e), (i = r);
                break;
              case "details":
                te("toggle", e), (i = r);
                break;
              case "input":
                _s(e, r), (i = yl(e, r)), te("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ce({}, r, { value: void 0 })),
                  te("invalid", e);
                break;
              case "textarea":
                js(e, r), (i = Sl(e, r)), te("invalid", e);
                break;
              default:
                i = r;
            }
            kl(n, i), (l = i);
            for (u in l)
              if (l.hasOwnProperty(u)) {
                var a = l[u];
                u === "style"
                  ? Vf(e, a)
                  : u === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Uf(e, a))
                  : u === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Ur(e, a)
                    : typeof a == "number" && Ur(e, "" + a)
                  : u !== "suppressContentEditableWarning" &&
                    u !== "suppressHydrationWarning" &&
                    u !== "autoFocus" &&
                    (Qr.hasOwnProperty(u)
                      ? a != null && u === "onScroll" && te("scroll", e)
                      : a != null && wa(e, u, a, o));
              }
            switch (n) {
              case "input":
                xi(e), As(e, r, !1);
                break;
              case "textarea":
                xi(e), Ms(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + an(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (u = r.value),
                  u != null
                    ? Kn(e, !!r.multiple, u, !1)
                    : r.defaultValue != null &&
                      Kn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = su);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Me(t), null;
    case 6:
      if (e && t.stateNode != null) vp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (((n = kn(Zr.current)), kn(Et.current), _i(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[xt] = t),
            (u = r.nodeValue !== n) && ((e = Xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ti(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ti(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          u && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[xt] = t),
            (t.stateNode = r);
      }
      return Me(t), null;
    case 13:
      if (
        (re(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (oe && Ye !== null && t.mode & 1 && !(t.flags & 128))
          Ad(), rr(), (t.flags |= 98560), (u = !1);
        else if (((u = _i(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!u) throw Error(z(318));
            if (
              ((u = t.memoizedState),
              (u = u !== null ? u.dehydrated : null),
              !u)
            )
              throw Error(z(317));
            u[xt] = t;
          } else
            rr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Me(t), (u = !1);
        } else pt !== null && (ra(pt), (pt = null)), (u = !0);
        if (!u) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? Se === 0 && (Se = 3) : ts())),
          t.updateQueue !== null && (t.flags |= 4),
          Me(t),
          null);
    case 4:
      return (
        ur(), Yl(e, t), e === null && Yr(t.stateNode.containerInfo), Me(t), null
      );
    case 10:
      return Da(t.type._context), Me(t), null;
    case 17:
      return Ve(t.type) && cu(), Me(t), null;
    case 19:
      if ((re(ae), (u = t.memoizedState), u === null)) return Me(t), null;
      if (((r = (t.flags & 128) !== 0), (o = u.rendering), o === null))
        if (r) Sr(u, !1);
        else {
          if (Se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = yu(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Sr(u, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (u = n),
                    (e = r),
                    (u.flags &= 14680066),
                    (o = u.alternate),
                    o === null
                      ? ((u.childLanes = 0),
                        (u.lanes = e),
                        (u.child = null),
                        (u.subtreeFlags = 0),
                        (u.memoizedProps = null),
                        (u.memoizedState = null),
                        (u.updateQueue = null),
                        (u.dependencies = null),
                        (u.stateNode = null))
                      : ((u.childLanes = o.childLanes),
                        (u.lanes = o.lanes),
                        (u.child = o.child),
                        (u.subtreeFlags = 0),
                        (u.deletions = null),
                        (u.memoizedProps = o.memoizedProps),
                        (u.memoizedState = o.memoizedState),
                        (u.updateQueue = o.updateQueue),
                        (u.type = o.type),
                        (e = o.dependencies),
                        (u.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ee(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          u.tail !== null &&
            ve() > lr &&
            ((t.flags |= 128), (r = !0), Sr(u, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = yu(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sr(u, !0),
              u.tail === null && u.tailMode === "hidden" && !o.alternate && !oe)
            )
              return Me(t), null;
          } else
            2 * ve() - u.renderingStartTime > lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sr(u, !1), (t.lanes = 4194304));
        u.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = u.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (u.last = o));
      }
      return u.tail !== null
        ? ((t = u.tail),
          (u.rendering = t),
          (u.tail = t.sibling),
          (u.renderingStartTime = ve()),
          (t.sibling = null),
          (n = ae.current),
          ee(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Me(t), null);
    case 22:
    case 23:
      return (
        es(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ke & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function Cm(e, t) {
  switch ((La(t), t.tag)) {
    case 1:
      return (
        Ve(t.type) && cu(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ur(),
        re(qe),
        re(be),
        qa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ua(t), null;
    case 13:
      if (
        (re(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(z(340));
        rr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return re(ae), null;
    case 4:
      return ur(), null;
    case 10:
      return Da(t.type._context), null;
    case 22:
    case 23:
      return es(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mi = !1,
  Ie = !1,
  Om = typeof WeakSet == "function" ? WeakSet : Set,
  Q = null;
function Hn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        de(e, t, r);
      }
    else n.current = null;
}
function Xl(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var kc = !1;
function Rm(e, t) {
  if (((Ml = ou), (e = gd()), ja(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            u = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            s = 0,
            c = 0,
            h = e,
            v = null;
          t: for (;;) {
            for (
              var p;
              h !== n || (i !== 0 && h.nodeType !== 3) || (l = o + i),
                h !== u || (r !== 0 && h.nodeType !== 3) || (a = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (p = h.firstChild) !== null;

            )
              (v = h), (h = p);
            for (;;) {
              if (h === e) break t;
              if (
                (v === n && ++s === i && (l = o),
                v === u && ++c === r && (a = o),
                (p = h.nextSibling) !== null)
              )
                break;
              (h = v), (v = h.parentNode);
            }
            h = p;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ll = { focusedElem: e, selectionRange: n }, ou = !1, Q = t; Q !== null; )
    if (((t = Q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Q = e);
    else
      for (; Q !== null; ) {
        t = Q;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var w = g.memoizedProps,
                    O = g.memoizedState,
                    m = t.stateNode,
                    d = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : ft(t.type, w),
                      O
                    );
                  m.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(z(163));
            }
        } catch (y) {
          de(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Q = e);
          break;
        }
        Q = t.return;
      }
  return (g = kc), (kc = !1), g;
}
function Ir(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var u = i.destroy;
        (i.destroy = void 0), u !== void 0 && Xl(t, n, u);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Hu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Gl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function hp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), hp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[xt], delete t[Gr], delete t[zl], delete t[sm], delete t[cm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function mp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Pc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || mp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Jl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = su));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jl(e, t, n), e = e.sibling; e !== null; ) Jl(e, t, n), (e = e.sibling);
}
function Zl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zl(e, t, n), e = e.sibling; e !== null; ) Zl(e, t, n), (e = e.sibling);
}
var Re = null,
  dt = !1;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) yp(e, t, n), (n = n.sibling);
}
function yp(e, t, n) {
  if (Pt && typeof Pt.onCommitFiberUnmount == "function")
    try {
      Pt.onCommitFiberUnmount(Du, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ie || Hn(n, t);
    case 6:
      var r = Re,
        i = dt;
      (Re = null),
        Qt(e, t, n),
        (Re = r),
        (dt = i),
        Re !== null &&
          (dt
            ? ((e = Re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Re.removeChild(n.stateNode));
      break;
    case 18:
      Re !== null &&
        (dt
          ? ((e = Re),
            (n = n.stateNode),
            e.nodeType === 8
              ? Uo(e.parentNode, n)
              : e.nodeType === 1 && Uo(e, n),
            Hr(e))
          : Uo(Re, n.stateNode));
      break;
    case 4:
      (r = Re),
        (i = dt),
        (Re = n.stateNode.containerInfo),
        (dt = !0),
        Qt(e, t, n),
        (Re = r),
        (dt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var u = i,
            o = u.destroy;
          (u = u.tag),
            o !== void 0 && (u & 2 || u & 4) && Xl(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (
        !Ie &&
        (Hn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          de(n, t, l);
        }
      Qt(e, t, n);
      break;
    case 21:
      Qt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ie = (r = Ie) || n.memoizedState !== null), Qt(e, t, n), (Ie = r))
        : Qt(e, t, n);
      break;
    default:
      Qt(e, t, n);
  }
}
function Ec(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Om()),
      t.forEach(function (r) {
        var i = bm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var u = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Re = l.stateNode), (dt = !1);
              break e;
            case 3:
              (Re = l.stateNode.containerInfo), (dt = !0);
              break e;
            case 4:
              (Re = l.stateNode.containerInfo), (dt = !0);
              break e;
          }
          l = l.return;
        }
        if (Re === null) throw Error(z(160));
        yp(u, o, i), (Re = null), (dt = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (s) {
        de(i, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) gp(t, e), (t = t.sibling);
}
function gp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ct(t, e), wt(e), r & 4)) {
        try {
          Ir(3, e, e.return), Hu(3, e);
        } catch (w) {
          de(e, e.return, w);
        }
        try {
          Ir(5, e, e.return);
        } catch (w) {
          de(e, e.return, w);
        }
      }
      break;
    case 1:
      ct(t, e), wt(e), r & 512 && n !== null && Hn(n, n.return);
      break;
    case 5:
      if (
        (ct(t, e),
        wt(e),
        r & 512 && n !== null && Hn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ur(i, "");
        } catch (w) {
          de(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var u = e.memoizedProps,
          o = n !== null ? n.memoizedProps : u,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && u.type === "radio" && u.name != null && $f(i, u),
              Pl(l, o);
            var s = Pl(l, u);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                h = a[o + 1];
              c === "style"
                ? Vf(i, h)
                : c === "dangerouslySetInnerHTML"
                ? Uf(i, h)
                : c === "children"
                ? Ur(i, h)
                : wa(i, c, h, s);
            }
            switch (l) {
              case "input":
                gl(i, u);
                break;
              case "textarea":
                Ff(i, u);
                break;
              case "select":
                var v = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!u.multiple;
                var p = u.value;
                p != null
                  ? Kn(i, !!u.multiple, p, !1)
                  : v !== !!u.multiple &&
                    (u.defaultValue != null
                      ? Kn(i, !!u.multiple, u.defaultValue, !0)
                      : Kn(i, !!u.multiple, u.multiple ? [] : "", !1));
            }
            i[Gr] = u;
          } catch (w) {
            de(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((ct(t, e), wt(e), r & 4)) {
        if (e.stateNode === null) throw Error(z(162));
        (i = e.stateNode), (u = e.memoizedProps);
        try {
          i.nodeValue = u;
        } catch (w) {
          de(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (ct(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Hr(t.containerInfo);
        } catch (w) {
          de(e, e.return, w);
        }
      break;
    case 4:
      ct(t, e), wt(e);
      break;
    case 13:
      ct(t, e),
        wt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((u = i.memoizedState !== null),
          (i.stateNode.isHidden = u),
          !u ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ja = ve())),
        r & 4 && Ec(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ie = (s = Ie) || c), ct(t, e), (Ie = s)) : ct(t, e),
        wt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (Q = e, c = e.child; c !== null; ) {
            for (h = Q = c; Q !== null; ) {
              switch (((v = Q), (p = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ir(4, v, v.return);
                  break;
                case 1:
                  Hn(v, v.return);
                  var g = v.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (w) {
                      de(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Hn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    Oc(h);
                    continue;
                  }
              }
              p !== null ? ((p.return = v), (Q = p)) : Oc(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (i = h.stateNode),
                  s
                    ? ((u = i.style),
                      typeof u.setProperty == "function"
                        ? u.setProperty("display", "none", "important")
                        : (u.display = "none"))
                    : ((l = h.stateNode),
                      (a = h.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = qf("display", o)));
              } catch (w) {
                de(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = s ? "" : h.memoizedProps;
              } catch (w) {
                de(e, e.return, w);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      ct(t, e), wt(e), r & 4 && Ec(e);
      break;
    case 21:
      break;
    default:
      ct(t, e), wt(e);
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (mp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(z(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ur(i, ""), (r.flags &= -33));
          var u = Pc(e);
          Zl(e, u, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = Pc(e);
          Jl(e, l, o);
          break;
        default:
          throw Error(z(161));
      }
    } catch (a) {
      de(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Nm(e, t, n) {
  (Q = e), wp(e);
}
function wp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Q !== null; ) {
    var i = Q,
      u = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Mi;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || Ie;
        l = Mi;
        var s = Ie;
        if (((Mi = o), (Ie = a) && !s))
          for (Q = i; Q !== null; )
            (o = Q),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Rc(i)
                : a !== null
                ? ((a.return = o), (Q = a))
                : Rc(i);
        for (; u !== null; ) (Q = u), wp(u), (u = u.sibling);
        (Q = i), (Mi = l), (Ie = s);
      }
      Cc(e);
    } else
      i.subtreeFlags & 8772 && u !== null ? ((u.return = i), (Q = u)) : Cc(e);
  }
}
function Cc(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ie || Hu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ie)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var u = t.updateQueue;
              u !== null && ac(t, u, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ac(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && Hr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(z(163));
          }
        Ie || (t.flags & 512 && Gl(t));
      } catch (v) {
        de(t, t.return, v);
      }
    }
    if (t === e) {
      Q = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Q = n);
      break;
    }
    Q = t.return;
  }
}
function Oc(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t === e) {
      Q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Q = n);
      break;
    }
    Q = t.return;
  }
}
function Rc(e) {
  for (; Q !== null; ) {
    var t = Q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Hu(4, t);
          } catch (a) {
            de(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              de(t, i, a);
            }
          }
          var u = t.return;
          try {
            Gl(t);
          } catch (a) {
            de(t, u, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Gl(t);
          } catch (a) {
            de(t, o, a);
          }
      }
    } catch (a) {
      de(t, t.return, a);
    }
    if (t === e) {
      Q = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (Q = l);
      break;
    }
    Q = t.return;
  }
}
var Tm = Math.ceil,
  Su = $t.ReactCurrentDispatcher,
  Xa = $t.ReactCurrentOwner,
  ot = $t.ReactCurrentBatchConfig,
  X = 0,
  Pe = null,
  me = null,
  Te = 0,
  Ke = 0,
  Wn = hn(0),
  Se = 0,
  ri = null,
  Tn = 0,
  Wu = 0,
  Ga = 0,
  br = null,
  Qe = null,
  Ja = 0,
  lr = 1 / 0,
  Nt = null,
  xu = !1,
  ea = null,
  tn = null,
  Li = !1,
  Yt = null,
  ku = 0,
  zr = 0,
  ta = null,
  Yi = -1,
  Xi = 0;
function De() {
  return X & 6 ? ve() : Yi !== -1 ? Yi : (Yi = ve());
}
function nn(e) {
  return e.mode & 1
    ? X & 2 && Te !== 0
      ? Te & -Te
      : dm.transition !== null
      ? (Xi === 0 && (Xi = nd()), Xi)
      : ((e = G),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sd(e.type))),
        e)
    : 1;
}
function ht(e, t, n, r) {
  if (50 < zr) throw ((zr = 0), (ta = null), Error(z(185)));
  di(e, n, r),
    (!(X & 2) || e !== Pe) &&
      (e === Pe && (!(X & 2) && (Wu |= n), Se === 4 && Ht(e, Te)),
      Be(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((lr = ve() + 500), qu && mn()));
}
function Be(e, t) {
  var n = e.callbackNode;
  dh(e, t);
  var r = uu(e, e === Pe ? Te : 0);
  if (r === 0)
    n !== null && bs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bs(n), t === 1))
      e.tag === 0 ? fm(Nc.bind(null, e)) : Nd(Nc.bind(null, e)),
        lm(function () {
          !(X & 6) && mn();
        }),
        (n = null);
    else {
      switch (rd(r)) {
        case 1:
          n = Ea;
          break;
        case 4:
          n = ed;
          break;
        case 16:
          n = iu;
          break;
        case 536870912:
          n = td;
          break;
        default:
          n = iu;
      }
      n = Rp(n, Sp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Sp(e, t) {
  if (((Yi = -1), (Xi = 0), X & 6)) throw Error(z(327));
  var n = e.callbackNode;
  if (Zn() && e.callbackNode !== n) return null;
  var r = uu(e, e === Pe ? Te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Pu(e, r);
  else {
    t = r;
    var i = X;
    X |= 2;
    var u = kp();
    (Pe !== e || Te !== t) && ((Nt = null), (lr = ve() + 500), En(e, t));
    do
      try {
        jm();
        break;
      } catch (l) {
        xp(e, l);
      }
    while (1);
    za(),
      (Su.current = u),
      (X = i),
      me !== null ? (t = 0) : ((Pe = null), (Te = 0), (t = Se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Nl(e)), i !== 0 && ((r = i), (t = na(e, i)))), t === 1)
    )
      throw ((n = ri), En(e, 0), Ht(e, r), Be(e, ve()), n);
    if (t === 6) Ht(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !_m(i) &&
          ((t = Pu(e, r)),
          t === 2 && ((u = Nl(e)), u !== 0 && ((r = u), (t = na(e, u)))),
          t === 1))
      )
        throw ((n = ri), En(e, 0), Ht(e, r), Be(e, ve()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          gn(e, Qe, Nt);
          break;
        case 3:
          if (
            (Ht(e, r), (r & 130023424) === r && ((t = Ja + 500 - ve()), 10 < t))
          ) {
            if (uu(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              De(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = bl(gn.bind(null, e, Qe, Nt), t);
            break;
          }
          gn(e, Qe, Nt);
          break;
        case 4:
          if ((Ht(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - vt(r);
            (u = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~u);
          }
          if (
            ((r = i),
            (r = ve() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Tm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = bl(gn.bind(null, e, Qe, Nt), r);
            break;
          }
          gn(e, Qe, Nt);
          break;
        case 5:
          gn(e, Qe, Nt);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return Be(e, ve()), e.callbackNode === n ? Sp.bind(null, e) : null;
}
function na(e, t) {
  var n = br;
  return (
    e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256),
    (e = Pu(e, t)),
    e !== 2 && ((t = Qe), (Qe = n), t !== null && ra(t)),
    e
  );
}
function ra(e) {
  Qe === null ? (Qe = e) : Qe.push.apply(Qe, e);
}
function _m(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            u = i.getSnapshot;
          i = i.value;
          try {
            if (!mt(u(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ht(e, t) {
  for (
    t &= ~Ga,
      t &= ~Wu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - vt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Nc(e) {
  if (X & 6) throw Error(z(327));
  Zn();
  var t = uu(e, 0);
  if (!(t & 1)) return Be(e, ve()), null;
  var n = Pu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Nl(e);
    r !== 0 && ((t = r), (n = na(e, r)));
  }
  if (n === 1) throw ((n = ri), En(e, 0), Ht(e, t), Be(e, ve()), n);
  if (n === 6) throw Error(z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    gn(e, Qe, Nt),
    Be(e, ve()),
    null
  );
}
function Za(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((lr = ve() + 500), qu && mn());
  }
}
function _n(e) {
  Yt !== null && Yt.tag === 0 && !(X & 6) && Zn();
  var t = X;
  X |= 1;
  var n = ot.transition,
    r = G;
  try {
    if (((ot.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (ot.transition = n), (X = t), !(X & 6) && mn();
  }
}
function es() {
  (Ke = Wn.current), re(Wn);
}
function En(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), om(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((La(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && cu();
          break;
        case 3:
          ur(), re(qe), re(be), qa();
          break;
        case 5:
          Ua(r);
          break;
        case 4:
          ur();
          break;
        case 13:
          re(ae);
          break;
        case 19:
          re(ae);
          break;
        case 10:
          Da(r.type._context);
          break;
        case 22:
        case 23:
          es();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (me = e = rn(e.current, null)),
    (Te = Ke = t),
    (Se = 0),
    (ri = null),
    (Ga = Wu = Tn = 0),
    (Qe = br = null),
    xn !== null)
  ) {
    for (t = 0; t < xn.length; t++)
      if (((n = xn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          u = n.pending;
        if (u !== null) {
          var o = u.next;
          (u.next = i), (r.next = o);
        }
        n.pending = r;
      }
    xn = null;
  }
  return e;
}
function xp(e, t) {
  do {
    var n = me;
    try {
      if ((za(), (Hi.current = wu), gu)) {
        for (var r = se.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        gu = !1;
      }
      if (
        ((Nn = 0),
        (ke = we = se = null),
        (Lr = !1),
        (ei = 0),
        (Xa.current = null),
        n === null || n.return === null)
      ) {
        (Se = 1), (ri = t), (me = null);
        break;
      }
      e: {
        var u = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = Te),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            c = l,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var v = c.alternate;
            v
              ? ((c.updateQueue = v.updateQueue),
                (c.memoizedState = v.memoizedState),
                (c.lanes = v.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = hc(o);
          if (p !== null) {
            (p.flags &= -257),
              mc(p, o, l, u, t),
              p.mode & 1 && vc(u, s, t),
              (t = p),
              (a = s);
            var g = t.updateQueue;
            if (g === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              vc(u, s, t), ts();
              break e;
            }
            a = Error(z(426));
          }
        } else if (oe && l.mode & 1) {
          var O = hc(o);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256),
              mc(O, o, l, u, t),
              Ia(or(a, l));
            break e;
          }
        }
        (u = a = or(a, l)),
          Se !== 4 && (Se = 2),
          br === null ? (br = [u]) : br.push(u),
          (u = o);
        do {
          switch (u.tag) {
            case 3:
              (u.flags |= 65536), (t &= -t), (u.lanes |= t);
              var m = ip(u, a, t);
              lc(u, m);
              break e;
            case 1:
              l = a;
              var d = u.type,
                f = u.stateNode;
              if (
                !(u.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (tn === null || !tn.has(f))))
              ) {
                (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                var y = up(u, l, t);
                lc(u, y);
                break e;
              }
          }
          u = u.return;
        } while (u !== null);
      }
      Ep(n);
    } catch (x) {
      (t = x), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function kp() {
  var e = Su.current;
  return (Su.current = wu), e === null ? wu : e;
}
function ts() {
  (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    Pe === null || (!(Tn & 268435455) && !(Wu & 268435455)) || Ht(Pe, Te);
}
function Pu(e, t) {
  var n = X;
  X |= 2;
  var r = kp();
  (Pe !== e || Te !== t) && ((Nt = null), En(e, t));
  do
    try {
      Am();
      break;
    } catch (i) {
      xp(e, i);
    }
  while (1);
  if ((za(), (X = n), (Su.current = r), me !== null)) throw Error(z(261));
  return (Pe = null), (Te = 0), Se;
}
function Am() {
  for (; me !== null; ) Pp(me);
}
function jm() {
  for (; me !== null && !rh(); ) Pp(me);
}
function Pp(e) {
  var t = Op(e.alternate, e, Ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ep(e) : (me = t),
    (Xa.current = null);
}
function Ep(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Cm(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Se = 6), (me = null);
        return;
      }
    } else if (((n = Em(n, t, Ke)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  Se === 0 && (Se = 5);
}
function gn(e, t, n) {
  var r = G,
    i = ot.transition;
  try {
    (ot.transition = null), (G = 1), Mm(e, t, n, r);
  } finally {
    (ot.transition = i), (G = r);
  }
  return null;
}
function Mm(e, t, n, r) {
  do Zn();
  while (Yt !== null);
  if (X & 6) throw Error(z(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(z(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var u = n.lanes | n.childLanes;
  if (
    (ph(e, u),
    e === Pe && ((me = Pe = null), (Te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Li ||
      ((Li = !0),
      Rp(iu, function () {
        return Zn(), null;
      })),
    (u = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || u)
  ) {
    (u = ot.transition), (ot.transition = null);
    var o = G;
    G = 1;
    var l = X;
    (X |= 4),
      (Xa.current = null),
      Rm(e, n),
      gp(n, e),
      Zh(Ll),
      (ou = !!Ml),
      (Ll = Ml = null),
      (e.current = n),
      Nm(n),
      ih(),
      (X = l),
      (G = o),
      (ot.transition = u);
  } else e.current = n;
  if (
    (Li && ((Li = !1), (Yt = e), (ku = i)),
    (u = e.pendingLanes),
    u === 0 && (tn = null),
    lh(n.stateNode),
    Be(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (xu) throw ((xu = !1), (e = ea), (ea = null), e);
  return (
    ku & 1 && e.tag !== 0 && Zn(),
    (u = e.pendingLanes),
    u & 1 ? (e === ta ? zr++ : ((zr = 0), (ta = e))) : (zr = 0),
    mn(),
    null
  );
}
function Zn() {
  if (Yt !== null) {
    var e = rd(ku),
      t = ot.transition,
      n = G;
    try {
      if (((ot.transition = null), (G = 16 > e ? 16 : e), Yt === null))
        var r = !1;
      else {
        if (((e = Yt), (Yt = null), (ku = 0), X & 6)) throw Error(z(331));
        var i = X;
        for (X |= 4, Q = e.current; Q !== null; ) {
          var u = Q,
            o = u.child;
          if (Q.flags & 16) {
            var l = u.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var s = l[a];
                for (Q = s; Q !== null; ) {
                  var c = Q;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ir(8, c, u);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (Q = h);
                  else
                    for (; Q !== null; ) {
                      c = Q;
                      var v = c.sibling,
                        p = c.return;
                      if ((hp(c), c === s)) {
                        Q = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = p), (Q = v);
                        break;
                      }
                      Q = p;
                    }
                }
              }
              var g = u.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var O = w.sibling;
                    (w.sibling = null), (w = O);
                  } while (w !== null);
                }
              }
              Q = u;
            }
          }
          if (u.subtreeFlags & 2064 && o !== null) (o.return = u), (Q = o);
          else
            e: for (; Q !== null; ) {
              if (((u = Q), u.flags & 2048))
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ir(9, u, u.return);
                }
              var m = u.sibling;
              if (m !== null) {
                (m.return = u.return), (Q = m);
                break e;
              }
              Q = u.return;
            }
        }
        var d = e.current;
        for (Q = d; Q !== null; ) {
          o = Q;
          var f = o.child;
          if (o.subtreeFlags & 2064 && f !== null) (f.return = o), (Q = f);
          else
            e: for (o = d; Q !== null; ) {
              if (((l = Q), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hu(9, l);
                  }
                } catch (x) {
                  de(l, l.return, x);
                }
              if (l === o) {
                Q = null;
                break e;
              }
              var y = l.sibling;
              if (y !== null) {
                (y.return = l.return), (Q = y);
                break e;
              }
              Q = l.return;
            }
        }
        if (
          ((X = i), mn(), Pt && typeof Pt.onPostCommitFiberRoot == "function")
        )
          try {
            Pt.onPostCommitFiberRoot(Du, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (ot.transition = t);
    }
  }
  return !1;
}
function Tc(e, t, n) {
  (t = or(n, t)),
    (t = ip(e, t, 1)),
    (e = en(e, t, 1)),
    (t = De()),
    e !== null && (di(e, 1, t), Be(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) Tc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Tc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (tn === null || !tn.has(r)))
        ) {
          (e = or(n, e)),
            (e = up(t, e, 1)),
            (t = en(t, e, 1)),
            (e = De()),
            t !== null && (di(t, 1, e), Be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Lm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = De()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (Te & n) === n &&
      (Se === 4 || (Se === 3 && (Te & 130023424) === Te && 500 > ve() - Ja)
        ? En(e, 0)
        : (Ga |= n)),
    Be(e, t);
}
function Cp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ei), (Ei <<= 1), !(Ei & 130023424) && (Ei = 4194304))
      : (t = 1));
  var n = De();
  (e = zt(e, t)), e !== null && (di(e, t, n), Be(e, n));
}
function Im(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Cp(e, n);
}
function bm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  r !== null && r.delete(t), Cp(e, n);
}
var Op;
Op = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || qe.current) Ue = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), Pm(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), oe && t.flags & 1048576 && Td(t, pu, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ki(e, t), (e = t.pendingProps);
      var i = nr(t, be.current);
      Jn(t, n), (i = Ba(null, t, r, e, i, n));
      var u = Ha();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((u = !0), fu(t)) : (u = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Fa(t),
            (i.updater = Vu),
            (t.stateNode = i),
            (i._reactInternals = t),
            ql(t, r, e, n),
            (t = Hl(null, t, r, !0, u, n)))
          : ((t.tag = 0), oe && u && Ma(t), ze(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ki(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Dm(r)),
          (e = ft(r, e)),
          i)
        ) {
          case 0:
            t = Bl(null, t, r, e, n);
            break e;
          case 1:
            t = wc(null, t, r, e, n);
            break e;
          case 11:
            t = yc(null, t, r, e, n);
            break e;
          case 14:
            t = gc(null, t, r, ft(r.type, e), n);
            break e;
        }
        throw Error(z(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        Bl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        wc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((sp(t), e === null)) throw Error(z(387));
        (r = t.pendingProps),
          (u = t.memoizedState),
          (i = u.element),
          Md(e, t),
          mu(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), u.isDehydrated))
          if (
            ((u = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = u),
            (t.memoizedState = u),
            t.flags & 256)
          ) {
            (i = or(Error(z(423)), t)), (t = Sc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = or(Error(z(424)), t)), (t = Sc(e, t, r, n, i));
            break e;
          } else
            for (
              Ye = Zt(t.stateNode.containerInfo.firstChild),
                Xe = t,
                oe = !0,
                pt = null,
                n = zd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((rr(), r === i)) {
            t = Dt(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Dd(t),
        e === null && Fl(t),
        (r = t.type),
        (i = t.pendingProps),
        (u = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Il(r, i) ? (o = null) : u !== null && Il(r, u) && (t.flags |= 32),
        ap(e, t),
        ze(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Fl(t), null;
    case 13:
      return cp(e, t, n);
    case 4:
      return (
        Qa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ir(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        yc(e, t, r, i, n)
      );
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (u = t.memoizedProps),
          (o = i.value),
          ee(vu, r._currentValue),
          (r._currentValue = o),
          u !== null)
        )
          if (mt(u.value, o)) {
            if (u.children === i.children && !qe.current) {
              t = Dt(e, t, n);
              break e;
            }
          } else
            for (u = t.child, u !== null && (u.return = t); u !== null; ) {
              var l = u.dependencies;
              if (l !== null) {
                o = u.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (u.tag === 1) {
                      (a = Lt(-1, n & -n)), (a.tag = 2);
                      var s = u.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (s.pending = a);
                      }
                    }
                    (u.lanes |= n),
                      (a = u.alternate),
                      a !== null && (a.lanes |= n),
                      Ql(u.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (u.tag === 10) o = u.type === t.type ? null : u.child;
              else if (u.tag === 18) {
                if (((o = u.return), o === null)) throw Error(z(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Ql(o, n, t),
                  (o = u.sibling);
              } else o = u.child;
              if (o !== null) o.return = u;
              else
                for (o = u; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((u = o.sibling), u !== null)) {
                    (u.return = o.return), (o = u);
                    break;
                  }
                  o = o.return;
                }
              u = o;
            }
        ze(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Jn(t, n),
        (i = lt(i)),
        (r = r(i)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = ft(r, t.pendingProps)),
        (i = ft(r.type, i)),
        gc(e, t, r, i, n)
      );
    case 15:
      return op(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        Ki(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), fu(t)) : (e = !1),
        Jn(t, n),
        Id(t, r, i),
        ql(t, r, i, n),
        Hl(null, t, r, !0, e, n)
      );
    case 19:
      return fp(e, t, n);
    case 22:
      return lp(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function Rp(e, t) {
  return Zf(e, t);
}
function zm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ut(e, t, n, r) {
  return new zm(e, t, n, r);
}
function ns(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Dm(e) {
  if (typeof e == "function") return ns(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === xa)) return 11;
    if (e === ka) return 14;
  }
  return 2;
}
function rn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Gi(e, t, n, r, i, u) {
  var o = 2;
  if (((r = e), typeof e == "function")) ns(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case zn:
        return Cn(n.children, i, u, t);
      case Sa:
        (o = 8), (i |= 8);
        break;
      case pl:
        return (
          (e = ut(12, n, t, i | 2)), (e.elementType = pl), (e.lanes = u), e
        );
      case vl:
        return (e = ut(13, n, t, i)), (e.elementType = vl), (e.lanes = u), e;
      case hl:
        return (e = ut(19, n, t, i)), (e.elementType = hl), (e.lanes = u), e;
      case bf:
        return Ku(n, i, u, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Lf:
              o = 10;
              break e;
            case If:
              o = 9;
              break e;
            case xa:
              o = 11;
              break e;
            case ka:
              o = 14;
              break e;
            case qt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(z(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ut(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = u), t
  );
}
function Cn(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e;
}
function Ku(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = bf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Xo(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e;
}
function Go(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function $m(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ao(0)),
    (this.expirationTimes = Ao(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ao(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function rs(e, t, n, r, i, u, o, l, a) {
  return (
    (e = new $m(e, t, n, l, a)),
    t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
    (u = ut(3, null, null, t)),
    (e.current = u),
    (u.stateNode = e),
    (u.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fa(u),
    e
  );
}
function Fm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: bn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Np(e) {
  if (!e) return sn;
  e = e._reactInternals;
  e: {
    if (jn(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ve(n)) return Rd(e, n, t);
  }
  return t;
}
function Tp(e, t, n, r, i, u, o, l, a) {
  return (
    (e = rs(n, r, !0, e, i, u, o, l, a)),
    (e.context = Np(null)),
    (n = e.current),
    (r = De()),
    (i = nn(n)),
    (u = Lt(r, i)),
    (u.callback = t ?? null),
    en(n, u, i),
    (e.current.lanes = i),
    di(e, i, r),
    Be(e, r),
    e
  );
}
function Yu(e, t, n, r) {
  var i = t.current,
    u = De(),
    o = nn(i);
  return (
    (n = Np(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lt(u, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = en(i, t, o)),
    e !== null && (ht(e, i, o, u), Bi(e, i, o)),
    o
  );
}
function Eu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _c(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function is(e, t) {
  _c(e, t), (e = e.alternate) && _c(e, t);
}
function Qm() {
  return null;
}
var _p =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function us(e) {
  this._internalRoot = e;
}
Xu.prototype.render = us.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  Yu(e, t, null, null);
};
Xu.prototype.unmount = us.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    _n(function () {
      Yu(null, e, null, null);
    }),
      (t[bt] = null);
  }
};
function Xu(e) {
  this._internalRoot = e;
}
Xu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = od();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Bt.length && t !== 0 && t < Bt[n].priority; n++);
    Bt.splice(n, 0, e), n === 0 && ad(e);
  }
};
function os(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Gu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ac() {}
function Um(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var s = Eu(o);
        u.call(s);
      };
    }
    var o = Tp(t, r, e, 0, null, !1, !1, "", Ac);
    return (
      (e._reactRootContainer = o),
      (e[bt] = o.current),
      Yr(e.nodeType === 8 ? e.parentNode : e),
      _n(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var s = Eu(a);
      l.call(s);
    };
  }
  var a = rs(e, 0, !1, null, null, !1, !1, "", Ac);
  return (
    (e._reactRootContainer = a),
    (e[bt] = a.current),
    Yr(e.nodeType === 8 ? e.parentNode : e),
    _n(function () {
      Yu(t, a, n, r);
    }),
    a
  );
}
function Ju(e, t, n, r, i) {
  var u = n._reactRootContainer;
  if (u) {
    var o = u;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = Eu(o);
        l.call(a);
      };
    }
    Yu(t, o, e, i);
  } else o = Um(n, t, e, i, r);
  return Eu(o);
}
id = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cr(t.pendingLanes);
        n !== 0 &&
          (Ca(t, n | 1), Be(t, ve()), !(X & 6) && ((lr = ve() + 500), mn()));
      }
      break;
    case 13:
      _n(function () {
        var r = zt(e, 1);
        if (r !== null) {
          var i = De();
          ht(r, e, 1, i);
        }
      }),
        is(e, 1);
  }
};
Oa = function (e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = De();
      ht(t, e, 134217728, n);
    }
    is(e, 134217728);
  }
};
ud = function (e) {
  if (e.tag === 13) {
    var t = nn(e),
      n = zt(e, t);
    if (n !== null) {
      var r = De();
      ht(n, e, t, r);
    }
    is(e, t);
  }
};
od = function () {
  return G;
};
ld = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
Cl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((gl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Uu(r);
            if (!i) throw Error(z(90));
            Df(r), gl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Ff(e, n);
      break;
    case "select":
      (t = n.value), t != null && Kn(e, !!n.multiple, t, !1);
  }
};
Wf = Za;
Kf = _n;
var qm = { usingClientEntryPoint: !1, Events: [vi, Qn, Uu, Bf, Hf, Za] },
  xr = {
    findFiberByHostInstance: Sn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Vm = {
    bundleType: xr.bundleType,
    version: xr.version,
    rendererPackageName: xr.rendererPackageName,
    rendererConfig: xr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Gf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: xr.findFiberByHostInstance || Qm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ii.isDisabled && Ii.supportsFiber)
    try {
      (Du = Ii.inject(Vm)), (Pt = Ii);
    } catch {}
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qm;
Ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!os(t)) throw Error(z(200));
  return Fm(e, t, null, n);
};
Ze.createRoot = function (e, t) {
  if (!os(e)) throw Error(z(299));
  var n = !1,
    r = "",
    i = _p;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = rs(e, 1, !1, null, null, n, !1, r, i)),
    (e[bt] = t.current),
    Yr(e.nodeType === 8 ? e.parentNode : e),
    new us(t)
  );
};
Ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(z(188))
      : ((e = Object.keys(e).join(",")), Error(z(268, e)));
  return (e = Gf(t)), (e = e === null ? null : e.stateNode), e;
};
Ze.flushSync = function (e) {
  return _n(e);
};
Ze.hydrate = function (e, t, n) {
  if (!Gu(t)) throw Error(z(200));
  return Ju(null, e, t, !0, n);
};
Ze.hydrateRoot = function (e, t, n) {
  if (!os(e)) throw Error(z(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    u = "",
    o = _p;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Tp(t, null, e, 1, n ?? null, i, !1, u, o)),
    (e[bt] = t.current),
    Yr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Xu(t);
};
Ze.render = function (e, t, n) {
  if (!Gu(t)) throw Error(z(200));
  return Ju(null, e, t, !1, n);
};
Ze.unmountComponentAtNode = function (e) {
  if (!Gu(e)) throw Error(z(40));
  return e._reactRootContainer
    ? (_n(function () {
        Ju(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[bt] = null);
        });
      }),
      !0)
    : !1;
};
Ze.unstable_batchedUpdates = Za;
Ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Gu(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return Ju(e, t, n, !1, r);
};
Ze.version = "18.2.0-next-9e3b772b8-20220608";
function Ap() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ap);
    } catch (e) {
      console.error(e);
    }
}
Ap(), (Tf.exports = Ze);
var ls = Tf.exports,
  jc = ls;
(fl.createRoot = jc.createRoot), (fl.hydrateRoot = jc.hydrateRoot);
var jp = { exports: {} },
  Mp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ar = V;
function Bm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Hm = typeof Object.is == "function" ? Object.is : Bm,
  Wm = ar.useState,
  Km = ar.useEffect,
  Ym = ar.useLayoutEffect,
  Xm = ar.useDebugValue;
function Gm(e, t) {
  var n = t(),
    r = Wm({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    u = r[1];
  return (
    Ym(
      function () {
        (i.value = n), (i.getSnapshot = t), Jo(i) && u({ inst: i });
      },
      [e, n, t]
    ),
    Km(
      function () {
        return (
          Jo(i) && u({ inst: i }),
          e(function () {
            Jo(i) && u({ inst: i });
          })
        );
      },
      [e]
    ),
    Xm(n),
    n
  );
}
function Jo(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Hm(e, n);
  } catch {
    return !0;
  }
}
function Jm(e, t) {
  return t();
}
var Zm =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Jm
    : Gm;
Mp.useSyncExternalStore =
  ar.useSyncExternalStore !== void 0 ? ar.useSyncExternalStore : Zm;
jp.exports = Mp;
var ey = jp.exports,
  Lp = { exports: {} },
  Ip = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zu = V,
  ty = ey;
function ny(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ry = typeof Object.is == "function" ? Object.is : ny,
  iy = ty.useSyncExternalStore,
  uy = Zu.useRef,
  oy = Zu.useEffect,
  ly = Zu.useMemo,
  ay = Zu.useDebugValue;
Ip.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var u = uy(null);
  if (u.current === null) {
    var o = { hasValue: !1, value: null };
    u.current = o;
  } else o = u.current;
  u = ly(
    function () {
      function a(p) {
        if (!s) {
          if (((s = !0), (c = p), (p = r(p)), i !== void 0 && o.hasValue)) {
            var g = o.value;
            if (i(g, p)) return (h = g);
          }
          return (h = p);
        }
        if (((g = h), ry(c, p))) return g;
        var w = r(p);
        return i !== void 0 && i(g, w) ? g : ((c = p), (h = w));
      }
      var s = !1,
        c,
        h,
        v = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        v === null
          ? void 0
          : function () {
              return a(v());
            },
      ];
    },
    [t, n, r, i]
  );
  var l = iy(e, u[0], u[1]);
  return (
    oy(
      function () {
        (o.hasValue = !0), (o.value = l);
      },
      [l]
    ),
    ay(l),
    l
  );
};
Lp.exports = Ip;
var sy = Lp.exports;
function cy(e) {
  e();
}
let bp = cy;
const fy = (e) => (bp = e),
  dy = () => bp,
  cn = V.createContext(null);
function zp() {
  return V.useContext(cn);
}
const py = () => {
  throw new Error("uSES not initialized!");
};
let Dp = py;
const vy = (e) => {
    Dp = e;
  },
  hy = (e, t) => e === t;
function my(e = cn) {
  const t = e === cn ? zp : () => V.useContext(e);
  return function (r, i = hy) {
    const { store: u, subscription: o, getServerState: l } = t(),
      a = Dp(o.addNestedSub, u.getState, l || u.getState, r, i);
    return V.useDebugValue(a), a;
  };
}
const ii = my();
var $p = { exports: {} },
  J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ee = typeof Symbol == "function" && Symbol.for,
  as = Ee ? Symbol.for("react.element") : 60103,
  ss = Ee ? Symbol.for("react.portal") : 60106,
  eo = Ee ? Symbol.for("react.fragment") : 60107,
  to = Ee ? Symbol.for("react.strict_mode") : 60108,
  no = Ee ? Symbol.for("react.profiler") : 60114,
  ro = Ee ? Symbol.for("react.provider") : 60109,
  io = Ee ? Symbol.for("react.context") : 60110,
  cs = Ee ? Symbol.for("react.async_mode") : 60111,
  uo = Ee ? Symbol.for("react.concurrent_mode") : 60111,
  oo = Ee ? Symbol.for("react.forward_ref") : 60112,
  lo = Ee ? Symbol.for("react.suspense") : 60113,
  yy = Ee ? Symbol.for("react.suspense_list") : 60120,
  ao = Ee ? Symbol.for("react.memo") : 60115,
  so = Ee ? Symbol.for("react.lazy") : 60116,
  gy = Ee ? Symbol.for("react.block") : 60121,
  wy = Ee ? Symbol.for("react.fundamental") : 60117,
  Sy = Ee ? Symbol.for("react.responder") : 60118,
  xy = Ee ? Symbol.for("react.scope") : 60119;
function tt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case as:
        switch (((e = e.type), e)) {
          case cs:
          case uo:
          case eo:
          case no:
          case to:
          case lo:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case io:
              case oo:
              case so:
              case ao:
              case ro:
                return e;
              default:
                return t;
            }
        }
      case ss:
        return t;
    }
  }
}
function Fp(e) {
  return tt(e) === uo;
}
J.AsyncMode = cs;
J.ConcurrentMode = uo;
J.ContextConsumer = io;
J.ContextProvider = ro;
J.Element = as;
J.ForwardRef = oo;
J.Fragment = eo;
J.Lazy = so;
J.Memo = ao;
J.Portal = ss;
J.Profiler = no;
J.StrictMode = to;
J.Suspense = lo;
J.isAsyncMode = function (e) {
  return Fp(e) || tt(e) === cs;
};
J.isConcurrentMode = Fp;
J.isContextConsumer = function (e) {
  return tt(e) === io;
};
J.isContextProvider = function (e) {
  return tt(e) === ro;
};
J.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === as;
};
J.isForwardRef = function (e) {
  return tt(e) === oo;
};
J.isFragment = function (e) {
  return tt(e) === eo;
};
J.isLazy = function (e) {
  return tt(e) === so;
};
J.isMemo = function (e) {
  return tt(e) === ao;
};
J.isPortal = function (e) {
  return tt(e) === ss;
};
J.isProfiler = function (e) {
  return tt(e) === no;
};
J.isStrictMode = function (e) {
  return tt(e) === to;
};
J.isSuspense = function (e) {
  return tt(e) === lo;
};
J.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === eo ||
    e === uo ||
    e === no ||
    e === to ||
    e === lo ||
    e === yy ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === so ||
        e.$$typeof === ao ||
        e.$$typeof === ro ||
        e.$$typeof === io ||
        e.$$typeof === oo ||
        e.$$typeof === wy ||
        e.$$typeof === Sy ||
        e.$$typeof === xy ||
        e.$$typeof === gy))
  );
};
J.typeOf = tt;
$p.exports = J;
var ky = $p.exports,
  Qp = ky,
  Py = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Ey = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Up = {};
Up[Qp.ForwardRef] = Py;
Up[Qp.Memo] = Ey;
var Z = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fs = Symbol.for("react.element"),
  ds = Symbol.for("react.portal"),
  co = Symbol.for("react.fragment"),
  fo = Symbol.for("react.strict_mode"),
  po = Symbol.for("react.profiler"),
  vo = Symbol.for("react.provider"),
  ho = Symbol.for("react.context"),
  Cy = Symbol.for("react.server_context"),
  mo = Symbol.for("react.forward_ref"),
  yo = Symbol.for("react.suspense"),
  go = Symbol.for("react.suspense_list"),
  wo = Symbol.for("react.memo"),
  So = Symbol.for("react.lazy"),
  Oy = Symbol.for("react.offscreen"),
  qp;
qp = Symbol.for("react.module.reference");
function st(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case fs:
        switch (((e = e.type), e)) {
          case co:
          case po:
          case fo:
          case yo:
          case go:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Cy:
              case ho:
              case mo:
              case So:
              case wo:
              case vo:
                return e;
              default:
                return t;
            }
        }
      case ds:
        return t;
    }
  }
}
Z.ContextConsumer = ho;
Z.ContextProvider = vo;
Z.Element = fs;
Z.ForwardRef = mo;
Z.Fragment = co;
Z.Lazy = So;
Z.Memo = wo;
Z.Portal = ds;
Z.Profiler = po;
Z.StrictMode = fo;
Z.Suspense = yo;
Z.SuspenseList = go;
Z.isAsyncMode = function () {
  return !1;
};
Z.isConcurrentMode = function () {
  return !1;
};
Z.isContextConsumer = function (e) {
  return st(e) === ho;
};
Z.isContextProvider = function (e) {
  return st(e) === vo;
};
Z.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === fs;
};
Z.isForwardRef = function (e) {
  return st(e) === mo;
};
Z.isFragment = function (e) {
  return st(e) === co;
};
Z.isLazy = function (e) {
  return st(e) === So;
};
Z.isMemo = function (e) {
  return st(e) === wo;
};
Z.isPortal = function (e) {
  return st(e) === ds;
};
Z.isProfiler = function (e) {
  return st(e) === po;
};
Z.isStrictMode = function (e) {
  return st(e) === fo;
};
Z.isSuspense = function (e) {
  return st(e) === yo;
};
Z.isSuspenseList = function (e) {
  return st(e) === go;
};
Z.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === co ||
    e === po ||
    e === fo ||
    e === yo ||
    e === go ||
    e === Oy ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === So ||
        e.$$typeof === wo ||
        e.$$typeof === vo ||
        e.$$typeof === ho ||
        e.$$typeof === mo ||
        e.$$typeof === qp ||
        e.getModuleId !== void 0))
  );
};
Z.typeOf = st;
function Ry() {
  const e = dy();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        i = t;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0,
        u = (n = { callback: r, next: null, prev: n });
      return (
        u.prev ? (u.prev.next = u) : (t = u),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            u.next ? (u.next.prev = u.prev) : (n = u.prev),
            u.prev ? (u.prev.next = u.next) : (t = u.next));
        }
      );
    },
  };
}
const Mc = { notify() {}, get: () => [] };
function Ny(e, t) {
  let n,
    r = Mc;
  function i(h) {
    return a(), r.subscribe(h);
  }
  function u() {
    r.notify();
  }
  function o() {
    c.onStateChange && c.onStateChange();
  }
  function l() {
    return !!n;
  }
  function a() {
    n || ((n = t ? t.addNestedSub(o) : e.subscribe(o)), (r = Ry()));
  }
  function s() {
    n && (n(), (n = void 0), r.clear(), (r = Mc));
  }
  const c = {
    addNestedSub: i,
    notifyNestedSubs: u,
    handleChangeWrapper: o,
    isSubscribed: l,
    trySubscribe: a,
    tryUnsubscribe: s,
    getListeners: () => r,
  };
  return c;
}
const Ty =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  _y = Ty ? V.useLayoutEffect : V.useEffect;
function Lc(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Cu(e, t) {
  if (Lc(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let i = 0; i < n.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !Lc(e[n[i]], t[n[i]]))
      return !1;
  return !0;
}
function Ay({ store: e, context: t, children: n, serverState: r }) {
  const i = V.useMemo(() => {
      const l = Ny(e);
      return {
        store: e,
        subscription: l,
        getServerState: r ? () => r : void 0,
      };
    }, [e, r]),
    u = V.useMemo(() => e.getState(), [e]);
  _y(() => {
    const { subscription: l } = i;
    return (
      (l.onStateChange = l.notifyNestedSubs),
      l.trySubscribe(),
      u !== e.getState() && l.notifyNestedSubs(),
      () => {
        l.tryUnsubscribe(), (l.onStateChange = void 0);
      }
    );
  }, [i, u]);
  const o = t || cn;
  return Mt.createElement(o.Provider, { value: i }, n);
}
function Vp(e = cn) {
  const t = e === cn ? zp : () => V.useContext(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const Bp = Vp();
function jy(e = cn) {
  const t = e === cn ? Bp : Vp(e);
  return function () {
    return t().dispatch;
  };
}
const ps = jy();
vy(sy.useSyncExternalStoreWithSelector);
fy(ls.unstable_batchedUpdates);
var Hp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ic = Mt.createContext && Mt.createContext(Hp),
  un =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (un =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        un.apply(this, arguments)
      );
    },
  My =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      return n;
    };
function Wp(e) {
  return (
    e &&
    e.map(function (t, n) {
      return Mt.createElement(t.tag, un({ key: n }, t.attr), Wp(t.child));
    })
  );
}
function xo(e) {
  return function (t) {
    return Mt.createElement(Ly, un({ attr: un({}, e.attr) }, t), Wp(e.child));
  };
}
function Ly(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      u = e.title,
      o = My(e, ["attr", "size", "title"]),
      l = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      Mt.createElement(
        "svg",
        un(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: a,
            style: un(un({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        u && Mt.createElement("title", null, u),
        e.children
      )
    );
  };
  return Ic !== void 0
    ? Mt.createElement(Ic.Consumer, null, function (n) {
        return t(n);
      })
    : t(Hp);
}
function Iy(e) {
  return xo({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z",
        },
      },
    ],
  })(e);
}
function by(e) {
  return xo({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "g",
        attr: {},
        child: [
          { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
          {
            tag: "path",
            attr: {
              d: "M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm2 2v10h12V10H6zm3 2h2v6H9v-6zm4 0h2v6h-2v-6zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9z",
            },
          },
        ],
      },
    ],
  })(e);
}
function Ne(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (i) {
              return "'" + i + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function yt(e) {
  return !!e && !!e[ne];
}
function gt(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != "object") return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var i = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
      return (
        i === Object ||
        (typeof i == "function" && Function.toString.call(i) === By)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Dr] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[Dr]) ||
      ko(e) ||
      Po(e))
  );
}
function zy(e) {
  return yt(e) || Ne(23, e), e[ne].t;
}
function fn(e, t, n) {
  n === void 0 && (n = !1),
    dn(e) === 0
      ? (n ? Object.keys : er)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, i) {
          return t(i, r, e);
        });
}
function dn(e) {
  var t = e[ne];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : ko(e)
    ? 2
    : Po(e)
    ? 3
    : 0;
}
function on(e, t) {
  return dn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ji(e, t) {
  return dn(e) === 2 ? e.get(t) : e[t];
}
function Kp(e, t, n) {
  var r = dn(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Yp(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function ko(e) {
  return qy && e instanceof Map;
}
function Po(e) {
  return Vy && e instanceof Set;
}
function wn(e) {
  return e.o || e.t;
}
function vs(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Gp(e);
  delete t[ne];
  for (var n = er(t), r = 0; r < n.length; r++) {
    var i = n[r],
      u = t[i];
    u.writable === !1 && ((u.writable = !0), (u.configurable = !0)),
      (u.get || u.set) &&
        (t[i] = {
          configurable: !0,
          writable: !0,
          enumerable: u.enumerable,
          value: e[i],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function hs(e, t) {
  return (
    t === void 0 && (t = !1),
    ms(e) ||
      yt(e) ||
      !gt(e) ||
      (dn(e) > 1 && (e.set = e.add = e.clear = e.delete = Dy),
      Object.freeze(e),
      t &&
        fn(
          e,
          function (n, r) {
            return hs(r, !0);
          },
          !0
        )),
    e
  );
}
function Dy() {
  Ne(2);
}
function ms(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Ct(e) {
  var t = la[e];
  return t || Ne(18, e), t;
}
function Xp(e, t) {
  la[e] || (la[e] = t);
}
function ia() {
  return ui;
}
function Zo(e, t) {
  t && (Ct("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function Ou(e) {
  ua(e), e.p.forEach($y), (e.p = null);
}
function ua(e) {
  e === ui && (ui = e.l);
}
function bc(e) {
  return (ui = { p: [], l: ui, h: e, m: !0, _: 0 });
}
function $y(e) {
  var t = e[ne];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function el(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.O || Ct("ES5").S(t, e, r),
    r
      ? (n[ne].P && (Ou(t), Ne(4)),
        gt(e) && ((e = Ru(t, e)), t.l || Nu(t, e)),
        t.u && Ct("Patches").M(n[ne].t, e, t.u, t.s))
      : (e = Ru(t, n, [])),
    Ou(t),
    t.u && t.v(t.u, t.s),
    e !== gs ? e : void 0
  );
}
function Ru(e, t, n) {
  if (ms(t)) return t;
  var r = t[ne];
  if (!r)
    return (
      fn(
        t,
        function (l, a) {
          return zc(e, r, t, l, a, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return Nu(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var i = r.i === 4 || r.i === 5 ? (r.o = vs(r.k)) : r.o,
      u = i,
      o = !1;
    r.i === 3 && ((u = new Set(i)), i.clear(), (o = !0)),
      fn(u, function (l, a) {
        return zc(e, r, i, l, a, n, o);
      }),
      Nu(e, i, !1),
      n && e.u && Ct("Patches").N(r, n, e.u, e.s);
  }
  return r.o;
}
function zc(e, t, n, r, i, u, o) {
  if (yt(i)) {
    var l = Ru(e, i, u && t && t.i !== 3 && !on(t.R, r) ? u.concat(r) : void 0);
    if ((Kp(n, r, l), !yt(l))) return;
    e.m = !1;
  } else o && n.add(i);
  if (gt(i) && !ms(i)) {
    if (!e.h.D && e._ < 1) return;
    Ru(e, i), (t && t.A.l) || Nu(e, i);
  }
}
function Nu(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && hs(t, n);
}
function tl(e, t) {
  var n = e[ne];
  return (n ? wn(n) : e)[t];
}
function Dc(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function Wt(e) {
  e.P || ((e.P = !0), e.l && Wt(e.l));
}
function nl(e) {
  e.o || (e.o = vs(e.t));
}
function oa(e, t, n) {
  var r = ko(t)
    ? Ct("MapSet").F(t, n)
    : Po(t)
    ? Ct("MapSet").T(t, n)
    : e.O
    ? (function (i, u) {
        var o = Array.isArray(i),
          l = {
            i: o ? 1 : 0,
            A: u ? u.A : ia(),
            P: !1,
            I: !1,
            R: {},
            l: u,
            t: i,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          a = l,
          s = oi;
        o && ((a = [l]), (s = Rr));
        var c = Proxy.revocable(a, s),
          h = c.revoke,
          v = c.proxy;
        return (l.k = v), (l.j = h), v;
      })(t, n)
    : Ct("ES5").J(t, n);
  return (n ? n.A : ia()).p.push(r), r;
}
function Fy(e) {
  return (
    yt(e) || Ne(22, e),
    (function t(n) {
      if (!gt(n)) return n;
      var r,
        i = n[ne],
        u = dn(n);
      if (i) {
        if (!i.P && (i.i < 4 || !Ct("ES5").K(i))) return i.t;
        (i.I = !0), (r = $c(n, u)), (i.I = !1);
      } else r = $c(n, u);
      return (
        fn(r, function (o, l) {
          (i && Ji(i.t, o) === l) || Kp(r, o, t(l));
        }),
        u === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function $c(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return vs(e);
}
function Qy() {
  function e(u, o) {
    var l = i[u];
    return (
      l
        ? (l.enumerable = o)
        : (i[u] = l =
            {
              configurable: !0,
              enumerable: o,
              get: function () {
                var a = this[ne];
                return oi.get(a, u);
              },
              set: function (a) {
                var s = this[ne];
                oi.set(s, u, a);
              },
            }),
      l
    );
  }
  function t(u) {
    for (var o = u.length - 1; o >= 0; o--) {
      var l = u[o][ne];
      if (!l.P)
        switch (l.i) {
          case 5:
            r(l) && Wt(l);
            break;
          case 4:
            n(l) && Wt(l);
        }
    }
  }
  function n(u) {
    for (var o = u.t, l = u.k, a = er(l), s = a.length - 1; s >= 0; s--) {
      var c = a[s];
      if (c !== ne) {
        var h = o[c];
        if (h === void 0 && !on(o, c)) return !0;
        var v = l[c],
          p = v && v[ne];
        if (p ? p.t !== h : !Yp(v, h)) return !0;
      }
    }
    var g = !!o[ne];
    return a.length !== er(o).length + (g ? 0 : 1);
  }
  function r(u) {
    var o = u.k;
    if (o.length !== u.t.length) return !0;
    var l = Object.getOwnPropertyDescriptor(o, o.length - 1);
    if (l && !l.get) return !0;
    for (var a = 0; a < o.length; a++) if (!o.hasOwnProperty(a)) return !0;
    return !1;
  }
  var i = {};
  Xp("ES5", {
    J: function (u, o) {
      var l = Array.isArray(u),
        a = (function (c, h) {
          if (c) {
            for (var v = Array(h.length), p = 0; p < h.length; p++)
              Object.defineProperty(v, "" + p, e(p, !0));
            return v;
          }
          var g = Gp(h);
          delete g[ne];
          for (var w = er(g), O = 0; O < w.length; O++) {
            var m = w[O];
            g[m] = e(m, c || !!g[m].enumerable);
          }
          return Object.create(Object.getPrototypeOf(h), g);
        })(l, u),
        s = {
          i: l ? 5 : 4,
          A: o ? o.A : ia(),
          P: !1,
          I: !1,
          R: {},
          l: o,
          t: u,
          k: a,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(a, ne, { value: s, writable: !0 }), a;
    },
    S: function (u, o, l) {
      l
        ? yt(o) && o[ne].A === u && t(u.p)
        : (u.u &&
            (function a(s) {
              if (s && typeof s == "object") {
                var c = s[ne];
                if (c) {
                  var h = c.t,
                    v = c.k,
                    p = c.R,
                    g = c.i;
                  if (g === 4)
                    fn(v, function (f) {
                      f !== ne &&
                        (h[f] !== void 0 || on(h, f)
                          ? p[f] || a(v[f])
                          : ((p[f] = !0), Wt(c)));
                    }),
                      fn(h, function (f) {
                        v[f] !== void 0 || on(v, f) || ((p[f] = !1), Wt(c));
                      });
                  else if (g === 5) {
                    if ((r(c) && (Wt(c), (p.length = !0)), v.length < h.length))
                      for (var w = v.length; w < h.length; w++) p[w] = !1;
                    else for (var O = h.length; O < v.length; O++) p[O] = !0;
                    for (
                      var m = Math.min(v.length, h.length), d = 0;
                      d < m;
                      d++
                    )
                      v.hasOwnProperty(d) || (p[d] = !0),
                        p[d] === void 0 && a(v[d]);
                  }
                }
              }
            })(u.p[0]),
          t(u.p));
    },
    K: function (u) {
      return u.i === 4 ? n(u) : r(u);
    },
  });
}
function Uy() {
  function e(r) {
    if (!gt(r)) return r;
    if (Array.isArray(r)) return r.map(e);
    if (ko(r))
      return new Map(
        Array.from(r.entries()).map(function (o) {
          return [o[0], e(o[1])];
        })
      );
    if (Po(r)) return new Set(Array.from(r).map(e));
    var i = Object.create(Object.getPrototypeOf(r));
    for (var u in r) i[u] = e(r[u]);
    return on(r, Dr) && (i[Dr] = r[Dr]), i;
  }
  function t(r) {
    return yt(r) ? e(r) : r;
  }
  var n = "add";
  Xp("Patches", {
    $: function (r, i) {
      return (
        i.forEach(function (u) {
          for (var o = u.path, l = u.op, a = r, s = 0; s < o.length - 1; s++) {
            var c = dn(a),
              h = o[s];
            typeof h != "string" && typeof h != "number" && (h = "" + h),
              (c !== 0 && c !== 1) ||
                (h !== "__proto__" && h !== "constructor") ||
                Ne(24),
              typeof a == "function" && h === "prototype" && Ne(24),
              typeof (a = Ji(a, h)) != "object" && Ne(15, o.join("/"));
          }
          var v = dn(a),
            p = e(u.value),
            g = o[o.length - 1];
          switch (l) {
            case "replace":
              switch (v) {
                case 2:
                  return a.set(g, p);
                case 3:
                  Ne(16);
                default:
                  return (a[g] = p);
              }
            case n:
              switch (v) {
                case 1:
                  return g === "-" ? a.push(p) : a.splice(g, 0, p);
                case 2:
                  return a.set(g, p);
                case 3:
                  return a.add(p);
                default:
                  return (a[g] = p);
              }
            case "remove":
              switch (v) {
                case 1:
                  return a.splice(g, 1);
                case 2:
                  return a.delete(g);
                case 3:
                  return a.delete(u.value);
                default:
                  return delete a[g];
              }
            default:
              Ne(17, l);
          }
        }),
        r
      );
    },
    N: function (r, i, u, o) {
      switch (r.i) {
        case 0:
        case 4:
        case 2:
          return (function (l, a, s, c) {
            var h = l.t,
              v = l.o;
            fn(l.R, function (p, g) {
              var w = Ji(h, p),
                O = Ji(v, p),
                m = g ? (on(h, p) ? "replace" : n) : "remove";
              if (w !== O || m !== "replace") {
                var d = a.concat(p);
                s.push(
                  m === "remove"
                    ? { op: m, path: d }
                    : { op: m, path: d, value: O }
                ),
                  c.push(
                    m === n
                      ? { op: "remove", path: d }
                      : m === "remove"
                      ? { op: n, path: d, value: t(w) }
                      : { op: "replace", path: d, value: t(w) }
                  );
              }
            });
          })(r, i, u, o);
        case 5:
        case 1:
          return (function (l, a, s, c) {
            var h = l.t,
              v = l.R,
              p = l.o;
            if (p.length < h.length) {
              var g = [p, h];
              (h = g[0]), (p = g[1]);
              var w = [c, s];
              (s = w[0]), (c = w[1]);
            }
            for (var O = 0; O < h.length; O++)
              if (v[O] && p[O] !== h[O]) {
                var m = a.concat([O]);
                s.push({ op: "replace", path: m, value: t(p[O]) }),
                  c.push({ op: "replace", path: m, value: t(h[O]) });
              }
            for (var d = h.length; d < p.length; d++) {
              var f = a.concat([d]);
              s.push({ op: n, path: f, value: t(p[d]) });
            }
            h.length < p.length &&
              c.push({
                op: "replace",
                path: a.concat(["length"]),
                value: h.length,
              });
          })(r, i, u, o);
        case 3:
          return (function (l, a, s, c) {
            var h = l.t,
              v = l.o,
              p = 0;
            h.forEach(function (g) {
              if (!v.has(g)) {
                var w = a.concat([p]);
                s.push({ op: "remove", path: w, value: g }),
                  c.unshift({ op: n, path: w, value: g });
              }
              p++;
            }),
              (p = 0),
              v.forEach(function (g) {
                if (!h.has(g)) {
                  var w = a.concat([p]);
                  s.push({ op: n, path: w, value: g }),
                    c.unshift({ op: "remove", path: w, value: g });
                }
                p++;
              });
          })(r, i, u, o);
      }
    },
    M: function (r, i, u, o) {
      u.push({ op: "replace", path: [], value: i === gs ? void 0 : i }),
        o.push({ op: "replace", path: [], value: r });
    },
  });
}
var Fc,
  ui,
  ys = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  qy = typeof Map < "u",
  Vy = typeof Set < "u",
  Qc = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  gs = ys
    ? Symbol.for("immer-nothing")
    : (((Fc = {})["immer-nothing"] = !0), Fc),
  Dr = ys ? Symbol.for("immer-draftable") : "__$immer_draftable",
  ne = ys ? Symbol.for("immer-state") : "__$immer_state",
  By = "" + Object.prototype.constructor,
  er =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  Gp =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        er(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  la = {},
  oi = {
    get: function (e, t) {
      if (t === ne) return e;
      var n = wn(e);
      if (!on(n, t))
        return (function (i, u, o) {
          var l,
            a = Dc(u, o);
          return a
            ? "value" in a
              ? a.value
              : (l = a.get) === null || l === void 0
              ? void 0
              : l.call(i.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !gt(r)
        ? r
        : r === tl(e.t, t)
        ? (nl(e), (e.o[t] = oa(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in wn(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(wn(e));
    },
    set: function (e, t, n) {
      var r = Dc(wn(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var i = tl(wn(e), t),
          u = i == null ? void 0 : i[ne];
        if (u && u.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if (Yp(n, i) && (n !== void 0 || on(e.t, t))) return !0;
        nl(e), Wt(e);
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        tl(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), nl(e), Wt(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = wn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      Ne(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Ne(12);
    },
  },
  Rr = {};
fn(oi, function (e, t) {
  Rr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (Rr.deleteProperty = function (e, t) {
    return Rr.set.call(this, e, t, void 0);
  }),
  (Rr.set = function (e, t, n) {
    return oi.set.call(this, e[0], t, n, e[0]);
  });
var Hy = (function () {
    function e(n) {
      var r = this;
      (this.O = Qc),
        (this.D = !0),
        (this.produce = function (i, u, o) {
          if (typeof i == "function" && typeof u != "function") {
            var l = u;
            u = i;
            var a = r;
            return function (w) {
              var O = this;
              w === void 0 && (w = l);
              for (
                var m = arguments.length, d = Array(m > 1 ? m - 1 : 0), f = 1;
                f < m;
                f++
              )
                d[f - 1] = arguments[f];
              return a.produce(w, function (y) {
                var x;
                return (x = u).call.apply(x, [O, y].concat(d));
              });
            };
          }
          var s;
          if (
            (typeof u != "function" && Ne(6),
            o !== void 0 && typeof o != "function" && Ne(7),
            gt(i))
          ) {
            var c = bc(r),
              h = oa(r, i, void 0),
              v = !0;
            try {
              (s = u(h)), (v = !1);
            } finally {
              v ? Ou(c) : ua(c);
            }
            return typeof Promise < "u" && s instanceof Promise
              ? s.then(
                  function (w) {
                    return Zo(c, o), el(w, c);
                  },
                  function (w) {
                    throw (Ou(c), w);
                  }
                )
              : (Zo(c, o), el(s, c));
          }
          if (!i || typeof i != "object") {
            if (
              ((s = u(i)) === void 0 && (s = i),
              s === gs && (s = void 0),
              r.D && hs(s, !0),
              o)
            ) {
              var p = [],
                g = [];
              Ct("Patches").M(i, s, p, g), o(p, g);
            }
            return s;
          }
          Ne(21, i);
        }),
        (this.produceWithPatches = function (i, u) {
          if (typeof i == "function")
            return function (s) {
              for (
                var c = arguments.length, h = Array(c > 1 ? c - 1 : 0), v = 1;
                v < c;
                v++
              )
                h[v - 1] = arguments[v];
              return r.produceWithPatches(s, function (p) {
                return i.apply(void 0, [p].concat(h));
              });
            };
          var o,
            l,
            a = r.produce(i, u, function (s, c) {
              (o = s), (l = c);
            });
          return typeof Promise < "u" && a instanceof Promise
            ? a.then(function (s) {
                return [s, o, l];
              })
            : [a, o, l];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        gt(n) || Ne(8), yt(n) && (n = Fy(n));
        var r = bc(this),
          i = oa(this, n, void 0);
        return (i[ne].C = !0), ua(r), i;
      }),
      (t.finishDraft = function (n, r) {
        var i = n && n[ne],
          u = i.A;
        return Zo(u, r), el(void 0, u);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !Qc && Ne(20), (this.O = n);
      }),
      (t.applyPatches = function (n, r) {
        var i;
        for (i = r.length - 1; i >= 0; i--) {
          var u = r[i];
          if (u.path.length === 0 && u.op === "replace") {
            n = u.value;
            break;
          }
        }
        i > -1 && (r = r.slice(i + 1));
        var o = Ct("Patches").$;
        return yt(n)
          ? o(n, r)
          : this.produce(n, function (l) {
              return o(l, r);
            });
      }),
      e
    );
  })(),
  Je = new Hy(),
  mi = Je.produce,
  Jp = Je.produceWithPatches.bind(Je);
Je.setAutoFreeze.bind(Je);
Je.setUseProxies.bind(Je);
var Uc = Je.applyPatches.bind(Je);
Je.createDraft.bind(Je);
Je.finishDraft.bind(Je);
function li(e) {
  "@babel/helpers - typeof";
  return (
    (li =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    li(e)
  );
}
function Wy(e, t) {
  if (li(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (li(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ky(e) {
  var t = Wy(e, "string");
  return li(t) === "symbol" ? t : String(t);
}
function Yy(e, t, n) {
  return (
    (t = Ky(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function qc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Vc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qc(Object(n), !0).forEach(function (r) {
          Yy(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : qc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Le(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var Bc = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  rl = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Tu = {
    INIT: "@@redux/INIT" + rl(),
    REPLACE: "@@redux/REPLACE" + rl(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + rl();
    },
  };
function Xy(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Zp(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Le(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Le(1));
    return n(Zp)(e, t);
  }
  if (typeof e != "function") throw new Error(Le(2));
  var i = e,
    u = t,
    o = [],
    l = o,
    a = !1;
  function s() {
    l === o && (l = o.slice());
  }
  function c() {
    if (a) throw new Error(Le(3));
    return u;
  }
  function h(w) {
    if (typeof w != "function") throw new Error(Le(4));
    if (a) throw new Error(Le(5));
    var O = !0;
    return (
      s(),
      l.push(w),
      function () {
        if (O) {
          if (a) throw new Error(Le(6));
          (O = !1), s();
          var d = l.indexOf(w);
          l.splice(d, 1), (o = null);
        }
      }
    );
  }
  function v(w) {
    if (!Xy(w)) throw new Error(Le(7));
    if (typeof w.type > "u") throw new Error(Le(8));
    if (a) throw new Error(Le(9));
    try {
      (a = !0), (u = i(u, w));
    } finally {
      a = !1;
    }
    for (var O = (o = l), m = 0; m < O.length; m++) {
      var d = O[m];
      d();
    }
    return w;
  }
  function p(w) {
    if (typeof w != "function") throw new Error(Le(10));
    (i = w), v({ type: Tu.REPLACE });
  }
  function g() {
    var w,
      O = h;
    return (
      (w = {
        subscribe: function (d) {
          if (typeof d != "object" || d === null) throw new Error(Le(11));
          function f() {
            d.next && d.next(c());
          }
          f();
          var y = O(f);
          return { unsubscribe: y };
        },
      }),
      (w[Bc] = function () {
        return this;
      }),
      w
    );
  }
  return (
    v({ type: Tu.INIT }),
    (r = { dispatch: v, subscribe: h, getState: c, replaceReducer: p }),
    (r[Bc] = g),
    r
  );
}
function Gy(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Tu.INIT });
    if (typeof r > "u") throw new Error(Le(12));
    if (typeof n(void 0, { type: Tu.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Le(13));
  });
}
function ev(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  var u = Object.keys(n),
    o;
  try {
    Gy(n);
  } catch (l) {
    o = l;
  }
  return function (a, s) {
    if ((a === void 0 && (a = {}), o)) throw o;
    for (var c = !1, h = {}, v = 0; v < u.length; v++) {
      var p = u[v],
        g = n[p],
        w = a[p],
        O = g(w, s);
      if (typeof O > "u") throw (s && s.type, new Error(Le(14)));
      (h[p] = O), (c = c || O !== w);
    }
    return (c = c || u.length !== Object.keys(a).length), c ? h : a;
  };
}
function _u() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, i) {
        return function () {
          return r(i.apply(void 0, arguments));
        };
      });
}
function Jy() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var i = r.apply(void 0, arguments),
        u = function () {
          throw new Error(Le(15));
        },
        o = {
          getState: i.getState,
          dispatch: function () {
            return u.apply(void 0, arguments);
          },
        },
        l = t.map(function (a) {
          return a(o);
        });
      return (
        (u = _u.apply(void 0, l)(i.dispatch)),
        Vc(Vc({}, i), {}, { dispatch: u })
      );
    };
  };
}
var Au = "NOT_FOUND";
function Zy(e) {
  var t;
  return {
    get: function (r) {
      return t && e(t.key, r) ? t.value : Au;
    },
    put: function (r, i) {
      t = { key: r, value: i };
    },
    getEntries: function () {
      return t ? [t] : [];
    },
    clear: function () {
      t = void 0;
    },
  };
}
function eg(e, t) {
  var n = [];
  function r(l) {
    var a = n.findIndex(function (c) {
      return t(l, c.key);
    });
    if (a > -1) {
      var s = n[a];
      return a > 0 && (n.splice(a, 1), n.unshift(s)), s.value;
    }
    return Au;
  }
  function i(l, a) {
    r(l) === Au && (n.unshift({ key: l, value: a }), n.length > e && n.pop());
  }
  function u() {
    return n;
  }
  function o() {
    n = [];
  }
  return { get: r, put: i, getEntries: u, clear: o };
}
var tg = function (t, n) {
  return t === n;
};
function ng(e) {
  return function (n, r) {
    if (n === null || r === null || n.length !== r.length) return !1;
    for (var i = n.length, u = 0; u < i; u++) if (!e(n[u], r[u])) return !1;
    return !0;
  };
}
function aa(e, t) {
  var n = typeof t == "object" ? t : { equalityCheck: t },
    r = n.equalityCheck,
    i = r === void 0 ? tg : r,
    u = n.maxSize,
    o = u === void 0 ? 1 : u,
    l = n.resultEqualityCheck,
    a = ng(i),
    s = o === 1 ? Zy(a) : eg(o, a);
  function c() {
    var h = s.get(arguments);
    if (h === Au) {
      if (((h = e.apply(null, arguments)), l)) {
        var v = s.getEntries(),
          p = v.find(function (g) {
            return l(g.value, h);
          });
        p && (h = p.value);
      }
      s.put(arguments, h);
    }
    return h;
  }
  return (
    (c.clearCache = function () {
      return s.clear();
    }),
    c
  );
}
function rg(e) {
  var t = Array.isArray(e[0]) ? e[0] : e;
  if (
    !t.every(function (r) {
      return typeof r == "function";
    })
  ) {
    var n = t
      .map(function (r) {
        return typeof r == "function"
          ? "function " + (r.name || "unnamed") + "()"
          : typeof r;
      })
      .join(", ");
    throw new Error(
      "createSelector expects all input-selectors to be functions, but received the following types: [" +
        n +
        "]"
    );
  }
  return t;
}
function ig(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = function () {
    for (var o = arguments.length, l = new Array(o), a = 0; a < o; a++)
      l[a] = arguments[a];
    var s = 0,
      c,
      h = { memoizeOptions: void 0 },
      v = l.pop();
    if (
      (typeof v == "object" && ((h = v), (v = l.pop())), typeof v != "function")
    )
      throw new Error(
        "createSelector expects an output function after the inputs, but received: [" +
          typeof v +
          "]"
      );
    var p = h,
      g = p.memoizeOptions,
      w = g === void 0 ? n : g,
      O = Array.isArray(w) ? w : [w],
      m = rg(l),
      d = e.apply(
        void 0,
        [
          function () {
            return s++, v.apply(null, arguments);
          },
        ].concat(O)
      ),
      f = e(function () {
        for (var x = [], S = m.length, k = 0; k < S; k++)
          x.push(m[k].apply(null, arguments));
        return (c = d.apply(null, x)), c;
      });
    return (
      Object.assign(f, {
        resultFunc: v,
        memoizedResultFunc: d,
        dependencies: m,
        lastResult: function () {
          return c;
        },
        recomputations: function () {
          return s;
        },
        resetRecomputations: function () {
          return (s = 0);
        },
      }),
      f
    );
  };
  return i;
}
var $r = ig(aa);
function tv(e) {
  var t = function (r) {
    var i = r.dispatch,
      u = r.getState;
    return function (o) {
      return function (l) {
        return typeof l == "function" ? l(i, u, e) : o(l);
      };
    };
  };
  return t;
}
var nv = tv();
nv.withExtraArgument = tv;
const Hc = nv;
var rv =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i;
              }) ||
            function (r, i) {
              for (var u in i)
                Object.prototype.hasOwnProperty.call(i, u) && (r[u] = i[u]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  ug =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (u[0] & 1) throw u[1];
            return u[1];
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        u,
        o;
      return (
        (o = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == "function" &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
      function l(s) {
        return function (c) {
          return a([s, c]);
        };
      }
      function a(s) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (u =
                  s[0] & 2
                    ? i.return
                    : s[0]
                    ? i.throw || ((u = i.return) && u.call(i), 0)
                    : i.next) &&
                !(u = u.call(i, s[1])).done)
            )
              return u;
            switch (((i = 0), u && (s = [s[0] & 2, u.value]), s[0])) {
              case 0:
              case 1:
                u = s;
                break;
              case 4:
                return n.label++, { value: s[1], done: !1 };
              case 5:
                n.label++, (i = s[1]), (s = [0]);
                continue;
              case 7:
                (s = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((u = n.trys),
                  !(u = u.length > 0 && u[u.length - 1]) &&
                    (s[0] === 6 || s[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (s[0] === 3 && (!u || (s[1] > u[0] && s[1] < u[3]))) {
                  n.label = s[1];
                  break;
                }
                if (s[0] === 6 && n.label < u[1]) {
                  (n.label = u[1]), (u = s);
                  break;
                }
                if (u && n.label < u[2]) {
                  (n.label = u[2]), n.ops.push(s);
                  break;
                }
                u[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            s = t.call(e, n);
          } catch (c) {
            (s = [6, c]), (i = 0);
          } finally {
            r = u = 0;
          }
        if (s[0] & 5) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: !0 };
      }
    },
  sr =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  og = Object.defineProperty,
  lg = Object.defineProperties,
  ag = Object.getOwnPropertyDescriptors,
  Wc = Object.getOwnPropertySymbols,
  sg = Object.prototype.hasOwnProperty,
  cg = Object.prototype.propertyIsEnumerable,
  Kc = function (e, t, n) {
    return t in e
      ? og(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  ln = function (e, t) {
    for (var n in t || (t = {})) sg.call(t, n) && Kc(e, n, t[n]);
    if (Wc)
      for (var r = 0, i = Wc(t); r < i.length; r++) {
        var n = i[r];
        cg.call(t, n) && Kc(e, n, t[n]);
      }
    return e;
  },
  il = function (e, t) {
    return lg(e, ag(t));
  },
  fg = function (e, t, n) {
    return new Promise(function (r, i) {
      var u = function (a) {
          try {
            l(n.next(a));
          } catch (s) {
            i(s);
          }
        },
        o = function (a) {
          try {
            l(n.throw(a));
          } catch (s) {
            i(s);
          }
        },
        l = function (a) {
          return a.done ? r(a.value) : Promise.resolve(a.value).then(u, o);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  dg =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? _u
              : _u.apply(null, arguments);
        };
function pn(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var pg = (function (e) {
    rv(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var i = e.apply(this, n) || this;
      return Object.setPrototypeOf(i, t.prototype), i;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, sr([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, sr([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array),
  vg = (function (e) {
    rv(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var i = e.apply(this, n) || this;
      return Object.setPrototypeOf(i, t.prototype), i;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, sr([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, sr([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array);
function sa(e) {
  return gt(e) ? mi(e, function () {}) : e;
}
function hg(e) {
  return typeof e == "boolean";
}
function mg() {
  return function (t) {
    return yg(t);
  };
}
function yg(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new pg();
  return (
    n && (hg(n) ? r.push(Hc) : r.push(Hc.withExtraArgument(n.extraArgument))), r
  );
}
var gg = !0;
function wg(e) {
  var t = mg(),
    n = e || {},
    r = n.reducer,
    i = r === void 0 ? void 0 : r,
    u = n.middleware,
    o = u === void 0 ? t() : u,
    l = n.devTools,
    a = l === void 0 ? !0 : l,
    s = n.preloadedState,
    c = s === void 0 ? void 0 : s,
    h = n.enhancers,
    v = h === void 0 ? void 0 : h,
    p;
  if (typeof i == "function") p = i;
  else if (pn(i)) p = ev(i);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var g = o;
  typeof g == "function" && (g = g(t));
  var w = Jy.apply(void 0, g),
    O = _u;
  a && (O = dg(ln({ trace: !gg }, typeof a == "object" && a)));
  var m = new vg(w),
    d = m;
  Array.isArray(v) ? (d = sr([w], v)) : typeof v == "function" && (d = v(m));
  var f = O.apply(void 0, d);
  return Zp(p, c, f);
}
function He(e, t) {
  function n() {
    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
    if (t) {
      var u = t.apply(void 0, r);
      if (!u) throw new Error("prepareAction did not return an object");
      return ln(
        ln({ type: e, payload: u.payload }, "meta" in u && { meta: u.meta }),
        "error" in u && { error: u.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function iv(e) {
  var t = {},
    n = [],
    r,
    i = {
      addCase: function (u, o) {
        var l = typeof u == "string" ? u : u.type;
        if (l in t)
          throw new Error(
            "addCase cannot be called with two reducers for the same action type"
          );
        return (t[l] = o), i;
      },
      addMatcher: function (u, o) {
        return n.push({ matcher: u, reducer: o }), i;
      },
      addDefaultCase: function (u) {
        return (r = u), i;
      },
    };
  return e(i), [t, n, r];
}
function Sg(e) {
  return typeof e == "function";
}
function xg(e, t, n, r) {
  n === void 0 && (n = []);
  var i = typeof t == "function" ? iv(t) : [t, n, r],
    u = i[0],
    o = i[1],
    l = i[2],
    a;
  if (Sg(e))
    a = function () {
      return sa(e());
    };
  else {
    var s = sa(e);
    a = function () {
      return s;
    };
  }
  function c(h, v) {
    h === void 0 && (h = a());
    var p = sr(
      [u[v.type]],
      o
        .filter(function (g) {
          var w = g.matcher;
          return w(v);
        })
        .map(function (g) {
          var w = g.reducer;
          return w;
        })
    );
    return (
      p.filter(function (g) {
        return !!g;
      }).length === 0 && (p = [l]),
      p.reduce(function (g, w) {
        if (w)
          if (yt(g)) {
            var O = g,
              m = w(O, v);
            return m === void 0 ? g : m;
          } else {
            if (gt(g))
              return mi(g, function (d) {
                return w(d, v);
              });
            var m = w(g, v);
            if (m === void 0) {
              if (g === null) return g;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return m;
          }
        return g;
      }, h)
    );
  }
  return (c.getInitialState = a), c;
}
function kg(e, t) {
  return e + "/" + t;
}
function _t(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n =
      typeof e.initialState == "function" ? e.initialState : sa(e.initialState),
    r = e.reducers || {},
    i = Object.keys(r),
    u = {},
    o = {},
    l = {};
  i.forEach(function (c) {
    var h = r[c],
      v = kg(t, c),
      p,
      g;
    "reducer" in h ? ((p = h.reducer), (g = h.prepare)) : (p = h),
      (u[c] = p),
      (o[v] = p),
      (l[c] = g ? He(v, g) : He(v));
  });
  function a() {
    var c =
        typeof e.extraReducers == "function"
          ? iv(e.extraReducers)
          : [e.extraReducers],
      h = c[0],
      v = h === void 0 ? {} : h,
      p = c[1],
      g = p === void 0 ? [] : p,
      w = c[2],
      O = w === void 0 ? void 0 : w,
      m = ln(ln({}, v), o);
    return xg(n, function (d) {
      for (var f in m) d.addCase(f, m[f]);
      for (var y = 0, x = g; y < x.length; y++) {
        var S = x[y];
        d.addMatcher(S.matcher, S.reducer);
      }
      O && d.addDefaultCase(O);
    });
  }
  var s;
  return {
    name: t,
    reducer: function (c, h) {
      return s || (s = a()), s(c, h);
    },
    actions: l,
    caseReducers: u,
    getInitialState: function () {
      return s || (s = a()), s.getInitialState();
    },
  };
}
var Pg = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  uv = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", n = e; n--; ) t += Pg[(Math.random() * 64) | 0];
    return t;
  },
  Eg = ["name", "message", "stack", "code"],
  ul = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  Yc = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  Cg = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, n = 0, r = Eg; n < r.length; n++) {
        var i = r[n];
        typeof e[i] == "string" && (t[i] = e[i]);
      }
      return t;
    }
    return { message: String(e) };
  },
  Xc = (function () {
    function e(t, n, r) {
      var i = He(t + "/fulfilled", function (s, c, h, v) {
          return {
            payload: s,
            meta: il(ln({}, v || {}), {
              arg: h,
              requestId: c,
              requestStatus: "fulfilled",
            }),
          };
        }),
        u = He(t + "/pending", function (s, c, h) {
          return {
            payload: void 0,
            meta: il(ln({}, h || {}), {
              arg: c,
              requestId: s,
              requestStatus: "pending",
            }),
          };
        }),
        o = He(t + "/rejected", function (s, c, h, v, p) {
          return {
            payload: v,
            error: ((r && r.serializeError) || Cg)(s || "Rejected"),
            meta: il(ln({}, p || {}), {
              arg: h,
              requestId: c,
              rejectedWithValue: !!v,
              requestStatus: "rejected",
              aborted: (s == null ? void 0 : s.name) === "AbortError",
              condition: (s == null ? void 0 : s.name) === "ConditionError",
            }),
          };
        }),
        l =
          typeof AbortController < "u"
            ? AbortController
            : (function () {
                function s() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1;
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  };
                }
                return (s.prototype.abort = function () {}), s;
              })();
      function a(s) {
        return function (c, h, v) {
          var p = r != null && r.idGenerator ? r.idGenerator(s) : uv(),
            g = new l(),
            w;
          function O(d) {
            (w = d), g.abort();
          }
          var m = (function () {
            return fg(this, null, function () {
              var d, f, y, x, S, k, E;
              return ug(this, function (R) {
                switch (R.label) {
                  case 0:
                    return (
                      R.trys.push([0, 4, , 5]),
                      (x =
                        (d = r == null ? void 0 : r.condition) == null
                          ? void 0
                          : d.call(r, s, { getState: h, extra: v })),
                      Rg(x) ? [4, x] : [3, 2]
                    );
                  case 1:
                    (x = R.sent()), (R.label = 2);
                  case 2:
                    if (x === !1 || g.signal.aborted)
                      throw {
                        name: "ConditionError",
                        message:
                          "Aborted due to condition callback returning false.",
                      };
                    return (
                      (S = new Promise(function (P, A) {
                        return g.signal.addEventListener("abort", function () {
                          return A({
                            name: "AbortError",
                            message: w || "Aborted",
                          });
                        });
                      })),
                      c(
                        u(
                          p,
                          s,
                          (f = r == null ? void 0 : r.getPendingMeta) == null
                            ? void 0
                            : f.call(
                                r,
                                { requestId: p, arg: s },
                                { getState: h, extra: v }
                              )
                        )
                      ),
                      [
                        4,
                        Promise.race([
                          S,
                          Promise.resolve(
                            n(s, {
                              dispatch: c,
                              getState: h,
                              extra: v,
                              requestId: p,
                              signal: g.signal,
                              abort: O,
                              rejectWithValue: function (P, A) {
                                return new ul(P, A);
                              },
                              fulfillWithValue: function (P, A) {
                                return new Yc(P, A);
                              },
                            })
                          ).then(function (P) {
                            if (P instanceof ul) throw P;
                            return P instanceof Yc
                              ? i(P.payload, p, s, P.meta)
                              : i(P, p, s);
                          }),
                        ]),
                      ]
                    );
                  case 3:
                    return (y = R.sent()), [3, 5];
                  case 4:
                    return (
                      (k = R.sent()),
                      (y =
                        k instanceof ul
                          ? o(null, p, s, k.payload, k.meta)
                          : o(k, p, s)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (E =
                        r &&
                        !r.dispatchConditionRejection &&
                        o.match(y) &&
                        y.meta.condition),
                      E || c(y),
                      [2, y]
                    );
                }
              });
            });
          })();
          return Object.assign(m, {
            abort: O,
            requestId: p,
            arg: s,
            unwrap: function () {
              return m.then(Og);
            },
          });
        };
      }
      return Object.assign(a, {
        pending: u,
        rejected: o,
        fulfilled: i,
        typePrefix: t,
      });
    }
    return (
      (e.withTypes = function () {
        return e;
      }),
      e
    );
  })();
function Og(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Rg(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Ng = function (e) {
    return e && typeof e.match == "function";
  },
  ov = function (e, t) {
    return Ng(e) ? e.match(t) : e(t);
  };
function pr() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.some(function (r) {
      return ov(r, n);
    });
  };
}
function Fr() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.every(function (r) {
      return ov(r, n);
    });
  };
}
function Eo(e, t) {
  if (!e || !e.meta) return !1;
  var n = typeof e.meta.requestId == "string",
    r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function yi(e) {
  return (
    typeof e[0] == "function" &&
    "pending" in e[0] &&
    "fulfilled" in e[0] &&
    "rejected" in e[0]
  );
}
function ws() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return Eo(n, ["pending"]);
      }
    : yi(e)
    ? function (n) {
        var r = e.map(function (u) {
            return u.pending;
          }),
          i = pr.apply(void 0, r);
        return i(n);
      }
    : ws()(e[0]);
}
function ai() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return Eo(n, ["rejected"]);
      }
    : yi(e)
    ? function (n) {
        var r = e.map(function (u) {
            return u.rejected;
          }),
          i = pr.apply(void 0, r);
        return i(n);
      }
    : ai()(e[0]);
}
function Co() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = function (r) {
    return r && r.meta && r.meta.rejectedWithValue;
  };
  return e.length === 0
    ? function (r) {
        var i = Fr(ai.apply(void 0, e), n);
        return i(r);
      }
    : yi(e)
    ? function (r) {
        var i = Fr(ai.apply(void 0, e), n);
        return i(r);
      }
    : Co()(e[0]);
}
function Mn() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return Eo(n, ["fulfilled"]);
      }
    : yi(e)
    ? function (n) {
        var r = e.map(function (u) {
            return u.fulfilled;
          }),
          i = pr.apply(void 0, r);
        return i(n);
      }
    : Mn()(e[0]);
}
function ca() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return Eo(n, ["pending", "fulfilled", "rejected"]);
      }
    : yi(e)
    ? function (n) {
        for (var r = [], i = 0, u = e; i < u.length; i++) {
          var o = u[i];
          r.push(o.pending, o.rejected, o.fulfilled);
        }
        var l = pr.apply(void 0, r);
        return l(n);
      }
    : ca()(e[0]);
}
var Ss = "listenerMiddleware";
He(Ss + "/add");
He(Ss + "/removeAll");
He(Ss + "/remove");
var Nr = "RTK_autoBatch",
  ol = function () {
    return function (e) {
      var t;
      return { payload: e, meta: ((t = {}), (t[Nr] = !0), t) };
    };
  },
  Gc;
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window < "u" ? window : typeof global < "u" ? global : globalThis
  );
Qy();
const Tg = [],
  lv = _t({
    name: "card",
    initialState: Tg,
    reducers: {
      mouseEnter: (e, t) => {
        e.push(t.payload);
      },
      mouseLeave: (e) => {
        e.pop();
      },
    },
  }),
  _g = (e) => e.userCard[0],
  { mouseEnter: Ag, mouseLeave: jg } = lv.actions,
  Mg = lv.reducer,
  Lg = ({ users: e }) => {
    const t = ps();
    return L.jsx("div", {
      className: "overflow-x-scroll lg:overflow-auto",
      children: L.jsxs("table", {
        className: "text-center items-center w-4/12",
        children: [
          L.jsx("thead", {
            children: L.jsxs("tr", {
              className: "text-[1.3rem] text-left",
              children: [
                L.jsx("th", { children: "Name" }),
                L.jsx("th", { children: "Status" }),
                L.jsx("th", { children: "Access" }),
                L.jsx("th", {}),
              ],
            }),
          }),
          L.jsx("tbody", {
            children:
              e == null
                ? void 0
                : e.map((n, r) =>
                    L.jsxs(
                      "tr",
                      {
                        children: [
                          L.jsx("td", {
                            className:
                              "py-3 whitespace-nowrap cursor-pointer pr-10",
                            children: L.jsxs("div", {
                              className: "flex items-center flex-shrink-0",
                              onMouseEnter: () => t(Ag(n)),
                              onMouseLeave: () => t(jg()),
                              children: [
                                L.jsx("div", {
                                  className: "w-10 h-10",
                                  children: L.jsx("img", {
                                    src: n.avatar,
                                    alt: "",
                                    className: "rounded-full h-10 w-10",
                                  }),
                                }),
                                L.jsxs("div", {
                                  className: "ml-2 text-start text-[15px]",
                                  children: [
                                    L.jsxs("div", {
                                      className: "font-bold",
                                      children: [
                                        n.first_name,
                                        " ",
                                        n.last_name,
                                      ],
                                    }),
                                    L.jsx("div", {
                                      className: "font-normal text-black",
                                      children: n.email,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          L.jsx("td", {
                            className:
                              "whitespace-nowrap px-3 py-2 text-sm text-left pr-10",
                            children: n.active
                              ? L.jsx(L.Fragment, {
                                  children: L.jsx("p", {
                                    className:
                                      "text-2 font-semibold text-green-700 px-2",
                                    children: "Active",
                                  }),
                                })
                              : L.jsxs("select", {
                                  name: "status",
                                  className:
                                    "p-2.5 w-28 rounded-[10px] appearance-none outline-none",
                                  children: [
                                    L.jsx("option", {
                                      className: "text-[16px]",
                                      value: "inActive",
                                      children: "In Active",
                                    }),
                                    L.jsx("option", {
                                      className: "text-[16px]",
                                      value: "active",
                                      children: "Active",
                                    }),
                                  ],
                                }),
                          }),
                          L.jsx("td", {
                            className:
                              "whitespace-nowrap px-3 py-2 text-sm text-left pr-10",
                            children: n.owner
                              ? L.jsx("p", {
                                  className:
                                    "text-2 font-semibold text-gray-700 px-2 font-bold",
                                  children: "Owner",
                                })
                              : L.jsxs("select", {
                                  name: "access",
                                  className:
                                    "p-2.5 w-28 rounded-[10px] outline-none ",
                                  children: [
                                    L.jsx("option", {
                                      className: "text-[16px]",
                                      value: "",
                                      children: n.role,
                                    }),
                                    L.jsx("option", {
                                      className: "text-[16px]",
                                      value: "",
                                      children:
                                        n.role == "Manager"
                                          ? "Read"
                                          : "Manager",
                                    }),
                                  ],
                                }),
                          }),
                          L.jsx("td", {
                            className: "text-[25px] ps-3 pr-10",
                            children:
                              n.removable === "true"
                                ? L.jsx(by, {})
                                : L.jsx(Iy, {}),
                          }),
                        ],
                      },
                      r
                    )
                  ),
          }),
        ],
      }),
    });
  },
  Ig = { themeColor: !1 },
  av = _t({
    name: "theme",
    initialState: Ig,
    reducers: {
      changeTheme: (e) => {
        e.themeColor = !e.themeColor;
      },
    },
  }),
  xs = (e) => e.theme.themeColor,
  { changeTheme: bg } = av.actions,
  zg = av.reducer,
  Dg = ({ text: e }) => {
    const t = ii(xs);
    return L.jsx("button", {
      className: `px-11 py-2 mt-3 ${
        t ? "bg-gray-500 text-white" : "bg-indigo-500 text-white"
      }  rounded-lg whitespace-nowrap`,
      children: e,
    });
  },
  Jc = { x: 0, y: 0 },
  $g = () => {
    const e = ii(_g),
      t = ii(xs),
      [n, r] = V.useState(Jc),
      i = 45;
    return (
      V.useEffect(() => {
        const u = (o) => {
          window.innerWidth < 950 ? r({ x: o.clientX, y: o.clientY }) : r(Jc);
        };
        return (
          window.addEventListener("mousemove", u),
          () => {
            window.removeEventListener("mousemove", u);
          }
        );
      }, []),
      e
        ? e &&
          L.jsx("div", {
            className: `${
              t
                ? "lg:bg-secondary/30 bg-secondary"
                : "lg:bg-primary/60 bg-primary"
            }  lg:w-[22rem] rounded-[40px] shadow-lg w-[20rem]`,
            style:
              n.x !== 0 ? { position: "absolute", top: n.y, left: n.x } : {},
            children: L.jsxs("div", {
              className: "p-8 leading-8 text-center",
              children: [
                L.jsx("div", {
                  className: "flex justify-center pb-7",
                  children: L.jsx("img", {
                    src: e.avatar,
                    alt: e.id,
                    className: "w-15 h-15 rounded-full",
                  }),
                }),
                L.jsxs("div", {
                  className: "flex justify-center",
                  children: [
                    L.jsxs("p", {
                      className: "text-[1.5rem] font-bold",
                      children: [e.first_name, " ", e.last_name],
                    }),
                    L.jsx("sup", {
                      children: L.jsx("div", {
                        className: `w-2 h-2 ${
                          e.active ? "bg-green-400" : "bg-orange-300 "
                        } rounded-full`,
                      }),
                    }),
                  ],
                }),
                L.jsx("div", {
                  children: L.jsx("p", {
                    className: "text-[1rem] ",
                    children: e.email,
                  }),
                }),
                L.jsxs("div", {
                  className: "",
                  children: [
                    L.jsx("p", {
                      className: "text-[1.2rem] font-semibold",
                      children: "Your Plan: Standard",
                    }),
                    L.jsx(Dg, { text: "Active User" }),
                  ],
                }),
                L.jsxs("div", {
                  className: "mt-5 mb-5",
                  children: [
                    L.jsx("p", {
                      className: "text-start font-semibold",
                      children: "Plan Uses",
                    }),
                    L.jsx("div", {
                      className:
                        "h-2 relative max-w-xl rounded-full overflow-hidden bg-white",
                      children: L.jsx("div", {
                        className: "h-5 bg-indigo-500 absolute rounded-r-[5px]",
                        style: { width: `${i}%` },
                      }),
                    }),
                  ],
                }),
                L.jsxs("div", {
                  className: "justify-around flex",
                  children: [
                    L.jsxs("div", {
                      children: [
                        L.jsx("p", {
                          className: "text-[2rem] font-bold",
                          children: "2,450",
                        }),
                        L.jsx("p", {
                          className: "text-[#4e4e4e]",
                          children: "clicks reviewed",
                        }),
                      ],
                    }),
                    L.jsx("hr", { className: "h-auto w-[2px] bg-white" }),
                    L.jsxs("div", {
                      children: [
                        L.jsx("p", {
                          className: "text-[2rem] font-bold",
                          children: "5000",
                        }),
                        L.jsx("p", {
                          className: "text-[#4e4e4e]",
                          children: "Monthly clicks",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        : L.jsx("div", { className: "lg:w-[22rem] w-0 " })
    );
  },
  Fg = Array.from({ length: 10 }),
  Qg = () =>
    L.jsxs(L.Fragment, {
      children: [
        L.jsx("div", {
          className:
            "lg:w-[50%] w-full flex justify-start overflow-x-scroll md:overflow-auto",
          children: L.jsxs("table", {
            className: "lg:w-[70%] text-center items-center",
            children: [
              L.jsx("thead", {
                className: "w-full justify-start",
                children: L.jsxs("tr", {
                  children: [
                    L.jsx("th", {
                      children: L.jsx("div", {
                        className:
                          "w-[15rem] h-[1.2rem] rounded-3xl bg-gray-400 animate-pulse px-5",
                      }),
                    }),
                    L.jsx("th", {
                      children: L.jsx("div", {
                        className:
                          "w-[5rem] h-[1.2rem] rounded-3xl bg-gray-400 animate-pulse px-5",
                      }),
                    }),
                    L.jsx("th", {
                      children: L.jsx("div", {
                        className:
                          "w-[5rem] h-[1.2rem] rounded-3xl bg-gray-400 animate-pulse px-5",
                      }),
                    }),
                    L.jsx("th", {}),
                  ],
                }),
              }),
              L.jsx("tbody", {
                children: Fg.map((e, t) =>
                  L.jsxs(
                    "tr",
                    {
                      children: [
                        L.jsx("td", {
                          className:
                            "whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6",
                          children: L.jsxs("div", {
                            className: "flex items-center cursor-pointer",
                            children: [
                              L.jsx("div", {
                                className:
                                  "h-10 w-10 flex-shrink-0 animate-pulse rounded-full bg-gray-400",
                              }),
                              L.jsxs("div", {
                                className: "ml-4 flex flex-col items-start",
                                children: [
                                  L.jsx("div", {
                                    className:
                                      "font-medium text-gray-900 bg-gray-400 w-32 h-4 rounded-sm animate-pulse",
                                  }),
                                  L.jsx("div", {
                                    className:
                                      "text-gray-500 bg-gray-400 w-24 h-3 mt-1 rounded-sm animate-pulse",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        L.jsx("td", {
                          className:
                            "whitespace-nowrap px-3 py-4 text-sm text-gray-500 ",
                          children: L.jsx("div", {
                            className:
                              "rounded-full px-2 text-sm font-semibold text-left bg-gray-400 w-12 h-4 animate-pulse",
                          }),
                        }),
                        L.jsx("td", {
                          className:
                            "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                          children: L.jsx("div", {
                            className:
                              "rounded-full px-2 text-sm font-semibold text-left bg-gray-400 w-12 h-4 animate-pulse",
                          }),
                        }),
                        L.jsx("td", {
                          className: "w-8 mx-8",
                          children: L.jsx("button", {
                            children: L.jsx("div", {
                              className:
                                "w-8 h-8 animate-pulse rounded-full bg-gray-400",
                            }),
                          }),
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        }),
        L.jsx("div", {
          children: L.jsx("div", {
            className:
              "lg:w-[20rem] lg:h-[27rem] bg-gray-400 animate-pulse rounded-2xl",
          }),
        }),
      ],
    });
function Ug(e) {
  return xo({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z",
        },
      },
    ],
  })(e);
}
function qg(e) {
  return xo({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z",
        },
      },
    ],
  })(e);
}
var ju =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (u[0] & 1) throw u[1];
            return u[1];
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        u,
        o;
      return (
        (o = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == "function" &&
          (o[Symbol.iterator] = function () {
            return this;
          }),
        o
      );
      function l(s) {
        return function (c) {
          return a([s, c]);
        };
      }
      function a(s) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (u =
                  s[0] & 2
                    ? i.return
                    : s[0]
                    ? i.throw || ((u = i.return) && u.call(i), 0)
                    : i.next) &&
                !(u = u.call(i, s[1])).done)
            )
              return u;
            switch (((i = 0), u && (s = [s[0] & 2, u.value]), s[0])) {
              case 0:
              case 1:
                u = s;
                break;
              case 4:
                return n.label++, { value: s[1], done: !1 };
              case 5:
                n.label++, (i = s[1]), (s = [0]);
                continue;
              case 7:
                (s = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((u = n.trys),
                  !(u = u.length > 0 && u[u.length - 1]) &&
                    (s[0] === 6 || s[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (s[0] === 3 && (!u || (s[1] > u[0] && s[1] < u[3]))) {
                  n.label = s[1];
                  break;
                }
                if (s[0] === 6 && n.label < u[1]) {
                  (n.label = u[1]), (u = s);
                  break;
                }
                if (u && n.label < u[2]) {
                  (n.label = u[2]), n.ops.push(s);
                  break;
                }
                u[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            s = t.call(e, n);
          } catch (c) {
            (s = [6, c]), (i = 0);
          } finally {
            r = u = 0;
          }
        if (s[0] & 5) throw s[1];
        return { value: s[0] ? s[1] : void 0, done: !0 };
      }
    },
  Mu =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  Vg = Object.defineProperty,
  Bg = Object.defineProperties,
  Hg = Object.getOwnPropertyDescriptors,
  Lu = Object.getOwnPropertySymbols,
  sv = Object.prototype.hasOwnProperty,
  cv = Object.prototype.propertyIsEnumerable,
  Zc = function (e, t, n) {
    return t in e
      ? Vg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  pe = function (e, t) {
    for (var n in t || (t = {})) sv.call(t, n) && Zc(e, n, t[n]);
    if (Lu)
      for (var r = 0, i = Lu(t); r < i.length; r++) {
        var n = i[r];
        cv.call(t, n) && Zc(e, n, t[n]);
      }
    return e;
  },
  kt = function (e, t) {
    return Bg(e, Hg(t));
  },
  ef = function (e, t) {
    var n = {};
    for (var r in e) sv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Lu)
      for (var i = 0, u = Lu(e); i < u.length; i++) {
        var r = u[i];
        t.indexOf(r) < 0 && cv.call(e, r) && (n[r] = e[r]);
      }
    return n;
  },
  Iu = function (e, t, n) {
    return new Promise(function (r, i) {
      var u = function (a) {
          try {
            l(n.next(a));
          } catch (s) {
            i(s);
          }
        },
        o = function (a) {
          try {
            l(n.throw(a));
          } catch (s) {
            i(s);
          }
        },
        l = function (a) {
          return a.done ? r(a.value) : Promise.resolve(a.value).then(u, o);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  ue;
(function (e) {
  (e.uninitialized = "uninitialized"),
    (e.pending = "pending"),
    (e.fulfilled = "fulfilled"),
    (e.rejected = "rejected");
})(ue || (ue = {}));
function Wg(e) {
  return {
    status: e,
    isUninitialized: e === ue.uninitialized,
    isLoading: e === ue.pending,
    isSuccess: e === ue.fulfilled,
    isError: e === ue.rejected,
  };
}
function Kg(e) {
  return new RegExp("(^|:)//").test(e);
}
var Yg = function (e) {
    return e.replace(/\/$/, "");
  },
  Xg = function (e) {
    return e.replace(/^\//, "");
  };
function Gg(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (Kg(t)) return t;
  var n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return (e = Yg(e)), (t = Xg(t)), "" + e + n + t;
}
var tf = function (e) {
  return [].concat.apply([], e);
};
function Jg() {
  return typeof navigator > "u" || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
function Zg() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var nf = pn;
function fv(e, t) {
  if (e === t || !((nf(e) && nf(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t;
  for (
    var n = Object.keys(t),
      r = Object.keys(e),
      i = n.length === r.length,
      u = Array.isArray(t) ? [] : {},
      o = 0,
      l = n;
    o < l.length;
    o++
  ) {
    var a = l[o];
    (u[a] = fv(e[a], t[a])), i && (i = e[a] === u[a]);
  }
  return i ? e : u;
}
var rf = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return fetch.apply(void 0, e);
  },
  e0 = function (e) {
    return e.status >= 200 && e.status <= 299;
  },
  t0 = function (e) {
    return /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "");
  };
function uf(e) {
  if (!pn(e)) return e;
  for (var t = pe({}, e), n = 0, r = Object.entries(t); n < r.length; n++) {
    var i = r[n],
      u = i[0],
      o = i[1];
    o === void 0 && delete t[u];
  }
  return t;
}
function n0(e) {
  var t = this;
  e === void 0 && (e = {});
  var n = e,
    r = n.baseUrl,
    i = n.prepareHeaders,
    u =
      i === void 0
        ? function (f) {
            return f;
          }
        : i,
    o = n.fetchFn,
    l = o === void 0 ? rf : o,
    a = n.paramsSerializer,
    s = n.isJsonContentType,
    c = s === void 0 ? t0 : s,
    h = n.jsonContentType,
    v = h === void 0 ? "application/json" : h,
    p = n.jsonReplacer,
    g = n.timeout,
    w = n.responseHandler,
    O = n.validateStatus,
    m = ef(n, [
      "baseUrl",
      "prepareHeaders",
      "fetchFn",
      "paramsSerializer",
      "isJsonContentType",
      "jsonContentType",
      "jsonReplacer",
      "timeout",
      "responseHandler",
      "validateStatus",
    ]);
  return (
    typeof fetch > "u" &&
      l === rf &&
      console.warn(
        "Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."
      ),
    function (f, y) {
      return Iu(t, null, function () {
        var x,
          S,
          k,
          E,
          R,
          P,
          A,
          N,
          _,
          M,
          b,
          q,
          B,
          j,
          T,
          C,
          D,
          I,
          $,
          F,
          U,
          H,
          W,
          Ce,
          We,
          he,
          fe,
          K,
          Oe,
          nt,
          ie,
          Ae,
          xe,
          le,
          Ft,
          Ln;
        return ju(this, function (ye) {
          switch (ye.label) {
            case 0:
              return (
                (x = y.signal),
                (S = y.getState),
                (k = y.extra),
                (E = y.endpoint),
                (R = y.forced),
                (P = y.type),
                (N = typeof f == "string" ? { url: f } : f),
                (_ = N.url),
                (M = N.headers),
                (b = M === void 0 ? new Headers(m.headers) : M),
                (q = N.params),
                (B = q === void 0 ? void 0 : q),
                (j = N.responseHandler),
                (T = j === void 0 ? w ?? "json" : j),
                (C = N.validateStatus),
                (D = C === void 0 ? O ?? e0 : C),
                (I = N.timeout),
                ($ = I === void 0 ? g : I),
                (F = ef(N, [
                  "url",
                  "headers",
                  "params",
                  "responseHandler",
                  "validateStatus",
                  "timeout",
                ])),
                (U = pe(kt(pe({}, m), { signal: x }), F)),
                (b = new Headers(uf(b))),
                (H = U),
                [
                  4,
                  u(b, {
                    getState: S,
                    extra: k,
                    endpoint: E,
                    forced: R,
                    type: P,
                  }),
                ]
              );
            case 1:
              (H.headers = ye.sent() || b),
                (W = function (ge) {
                  return (
                    typeof ge == "object" &&
                    (pn(ge) ||
                      Array.isArray(ge) ||
                      typeof ge.toJSON == "function")
                  );
                }),
                !U.headers.has("content-type") &&
                  W(U.body) &&
                  U.headers.set("content-type", v),
                W(U.body) &&
                  c(U.headers) &&
                  (U.body = JSON.stringify(U.body, p)),
                B &&
                  ((Ce = ~_.indexOf("?") ? "&" : "?"),
                  (We = a ? a(B) : new URLSearchParams(uf(B))),
                  (_ += Ce + We)),
                (_ = Gg(r, _)),
                (he = new Request(_, U)),
                (fe = he.clone()),
                (A = { request: fe }),
                (Oe = !1),
                (nt =
                  $ &&
                  setTimeout(function () {
                    (Oe = !0), y.abort();
                  }, $)),
                (ye.label = 2);
            case 2:
              return ye.trys.push([2, 4, 5, 6]), [4, l(he)];
            case 3:
              return (K = ye.sent()), [3, 6];
            case 4:
              return (
                (ie = ye.sent()),
                [
                  2,
                  {
                    error: {
                      status: Oe ? "TIMEOUT_ERROR" : "FETCH_ERROR",
                      error: String(ie),
                    },
                    meta: A,
                  },
                ]
              );
            case 5:
              return nt && clearTimeout(nt), [7];
            case 6:
              (Ae = K.clone()), (A.response = Ae), (le = ""), (ye.label = 7);
            case 7:
              return (
                ye.trys.push([7, 9, , 10]),
                [
                  4,
                  Promise.all([
                    d(K, T).then(
                      function (ge) {
                        return (xe = ge);
                      },
                      function (ge) {
                        return (Ft = ge);
                      }
                    ),
                    Ae.text().then(
                      function (ge) {
                        return (le = ge);
                      },
                      function () {}
                    ),
                  ]),
                ]
              );
            case 8:
              if ((ye.sent(), Ft)) throw Ft;
              return [3, 10];
            case 9:
              return (
                (Ln = ye.sent()),
                [
                  2,
                  {
                    error: {
                      status: "PARSING_ERROR",
                      originalStatus: K.status,
                      data: le,
                      error: String(Ln),
                    },
                    meta: A,
                  },
                ]
              );
            case 10:
              return [
                2,
                D(K, xe)
                  ? { data: xe, meta: A }
                  : { error: { status: K.status, data: xe }, meta: A },
              ];
          }
        });
      });
    }
  );
  function d(f, y) {
    return Iu(this, null, function () {
      var x;
      return ju(this, function (S) {
        switch (S.label) {
          case 0:
            return typeof y == "function"
              ? [2, y(f)]
              : (y === "content-type" && (y = c(f.headers) ? "json" : "text"),
                y !== "json" ? [3, 2] : [4, f.text()]);
          case 1:
            return (x = S.sent()), [2, x.length ? JSON.parse(x) : null];
          case 2:
            return [2, f.text()];
        }
      });
    });
  }
}
var of = (function () {
    function e(t, n) {
      n === void 0 && (n = void 0), (this.value = t), (this.meta = n);
    }
    return e;
  })(),
  ks = He("__rtkq/focused"),
  dv = He("__rtkq/unfocused"),
  Ps = He("__rtkq/online"),
  pv = He("__rtkq/offline"),
  Ot;
(function (e) {
  (e.query = "query"), (e.mutation = "mutation");
})(Ot || (Ot = {}));
function vv(e) {
  return e.type === Ot.query;
}
function r0(e) {
  return e.type === Ot.mutation;
}
function hv(e, t, n, r, i, u) {
  return i0(e)
    ? e(t, n, r, i).map(fa).map(u)
    : Array.isArray(e)
    ? e.map(fa).map(u)
    : [];
}
function i0(e) {
  return typeof e == "function";
}
function fa(e) {
  return typeof e == "string" ? { type: e } : e;
}
function ll(e) {
  return e != null;
}
var si = Symbol("forceQueryFn"),
  da = function (e) {
    return typeof e[si] == "function";
  };
function u0(e) {
  var t = e.serializeQueryArgs,
    n = e.queryThunk,
    r = e.mutationThunk,
    i = e.api,
    u = e.context,
    o = new Map(),
    l = new Map(),
    a = i.internalActions,
    s = a.unsubscribeQueryResult,
    c = a.removeMutationResult,
    h = a.updateSubscriptionOptions;
  return {
    buildInitiateQuery: d,
    buildInitiateMutation: f,
    getRunningQueryThunk: g,
    getRunningMutationThunk: w,
    getRunningQueriesThunk: O,
    getRunningMutationsThunk: m,
    getRunningOperationPromises: p,
    removalWarning: v,
  };
  function v() {
    throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`);
  }
  function p() {
    typeof process < "u";
    var y = function (x) {
      return Array.from(x.values()).flatMap(function (S) {
        return S ? Object.values(S) : [];
      });
    };
    return Mu(Mu([], y(o)), y(l)).filter(ll);
  }
  function g(y, x) {
    return function (S) {
      var k,
        E = u.endpointDefinitions[y],
        R = t({ queryArgs: x, endpointDefinition: E, endpointName: y });
      return (k = o.get(S)) == null ? void 0 : k[R];
    };
  }
  function w(y, x) {
    return function (S) {
      var k;
      return (k = l.get(S)) == null ? void 0 : k[x];
    };
  }
  function O() {
    return function (y) {
      return Object.values(o.get(y) || {}).filter(ll);
    };
  }
  function m() {
    return function (y) {
      return Object.values(l.get(y) || {}).filter(ll);
    };
  }
  function d(y, x) {
    var S = function (k, E) {
      var R = E === void 0 ? {} : E,
        P = R.subscribe,
        A = P === void 0 ? !0 : P,
        N = R.forceRefetch,
        _ = R.subscriptionOptions,
        M = si,
        b = R[M];
      return function (q, B) {
        var j,
          T,
          C = t({ queryArgs: k, endpointDefinition: x, endpointName: y }),
          D = n(
            ((j = {
              type: "query",
              subscribe: A,
              forceRefetch: N,
              subscriptionOptions: _,
              endpointName: y,
              originalArgs: k,
              queryCacheKey: C,
            }),
            (j[si] = b),
            j)
          ),
          I = i.endpoints[y].select(k),
          $ = q(D),
          F = I(B()),
          U = $.requestId,
          H = $.abort,
          W = F.requestId !== U,
          Ce = (T = o.get(q)) == null ? void 0 : T[C],
          We = function () {
            return I(B());
          },
          he = Object.assign(
            b
              ? $.then(We)
              : W && !Ce
              ? Promise.resolve(F)
              : Promise.all([Ce, $]).then(We),
            {
              arg: k,
              requestId: U,
              subscriptionOptions: _,
              queryCacheKey: C,
              abort: H,
              unwrap: function () {
                return Iu(this, null, function () {
                  var K;
                  return ju(this, function (Oe) {
                    switch (Oe.label) {
                      case 0:
                        return [4, he];
                      case 1:
                        if (((K = Oe.sent()), K.isError)) throw K.error;
                        return [2, K.data];
                    }
                  });
                });
              },
              refetch: function () {
                return q(S(k, { subscribe: !1, forceRefetch: !0 }));
              },
              unsubscribe: function () {
                A && q(s({ queryCacheKey: C, requestId: U }));
              },
              updateSubscriptionOptions: function (K) {
                (he.subscriptionOptions = K),
                  q(
                    h({
                      endpointName: y,
                      requestId: U,
                      queryCacheKey: C,
                      options: K,
                    })
                  );
              },
            }
          );
        if (!Ce && !W && !b) {
          var fe = o.get(q) || {};
          (fe[C] = he),
            o.set(q, fe),
            he.then(function () {
              delete fe[C], Object.keys(fe).length || o.delete(q);
            });
        }
        return he;
      };
    };
    return S;
  }
  function f(y) {
    return function (x, S) {
      var k = S === void 0 ? {} : S,
        E = k.track,
        R = E === void 0 ? !0 : E,
        P = k.fixedCacheKey;
      return function (A, N) {
        var _ = r({
            type: "mutation",
            endpointName: y,
            originalArgs: x,
            track: R,
            fixedCacheKey: P,
          }),
          M = A(_),
          b = M.requestId,
          q = M.abort,
          B = M.unwrap,
          j = M.unwrap()
            .then(function (I) {
              return { data: I };
            })
            .catch(function (I) {
              return { error: I };
            }),
          T = function () {
            A(c({ requestId: b, fixedCacheKey: P }));
          },
          C = Object.assign(j, {
            arg: M.arg,
            requestId: b,
            abort: q,
            unwrap: B,
            unsubscribe: T,
            reset: T,
          }),
          D = l.get(A) || {};
        return (
          l.set(A, D),
          (D[b] = C),
          C.then(function () {
            delete D[b], Object.keys(D).length || l.delete(A);
          }),
          P &&
            ((D[P] = C),
            C.then(function () {
              D[P] === C && (delete D[P], Object.keys(D).length || l.delete(A));
            })),
          C
        );
      };
    };
  }
}
function lf(e) {
  return e;
}
function o0(e) {
  var t = this,
    n = e.reducerPath,
    r = e.baseQuery,
    i = e.context.endpointDefinitions,
    u = e.serializeQueryArgs,
    o = e.api,
    l = function (f, y, x) {
      return function (S) {
        var k = i[f];
        S(
          o.internalActions.queryResultPatched({
            queryCacheKey: u({
              queryArgs: y,
              endpointDefinition: k,
              endpointName: f,
            }),
            patches: x,
          })
        );
      };
    },
    a = function (f, y, x) {
      return function (S, k) {
        var E,
          R,
          P = o.endpoints[f].select(y)(k()),
          A = {
            patches: [],
            inversePatches: [],
            undo: function () {
              return S(o.util.patchQueryData(f, y, A.inversePatches));
            },
          };
        if (P.status === ue.uninitialized) return A;
        if ("data" in P)
          if (gt(P.data)) {
            var N = Jp(P.data, x),
              _ = N[1],
              M = N[2];
            (E = A.patches).push.apply(E, _),
              (R = A.inversePatches).push.apply(R, M);
          } else {
            var b = x(P.data);
            A.patches.push({ op: "replace", path: [], value: b }),
              A.inversePatches.push({ op: "replace", path: [], value: P.data });
          }
        return S(o.util.patchQueryData(f, y, A.patches)), A;
      };
    },
    s = function (f, y, x) {
      return function (S) {
        var k;
        return S(
          o.endpoints[f].initiate(
            y,
            ((k = { subscribe: !1, forceRefetch: !0 }),
            (k[si] = function () {
              return { data: x };
            }),
            k)
          )
        );
      };
    },
    c = function (f, y) {
      return Iu(t, [f, y], function (x, S) {
        var k,
          E,
          R,
          P,
          A,
          N,
          _,
          M,
          b,
          q,
          B,
          j,
          T,
          C,
          D,
          I,
          $,
          F,
          U = S.signal,
          H = S.abort,
          W = S.rejectWithValue,
          Ce = S.fulfillWithValue,
          We = S.dispatch,
          he = S.getState,
          fe = S.extra;
        return ju(this, function (K) {
          switch (K.label) {
            case 0:
              (k = i[x.endpointName]), (K.label = 1);
            case 1:
              return (
                K.trys.push([1, 8, , 13]),
                (E = lf),
                (R = void 0),
                (P = {
                  signal: U,
                  abort: H,
                  dispatch: We,
                  getState: he,
                  extra: fe,
                  endpoint: x.endpointName,
                  type: x.type,
                  forced: x.type === "query" ? h(x, he()) : void 0,
                }),
                (A = x.type === "query" ? x[si] : void 0),
                A ? ((R = A()), [3, 6]) : [3, 2]
              );
            case 2:
              return k.query
                ? [4, r(k.query(x.originalArgs), P, k.extraOptions)]
                : [3, 4];
            case 3:
              return (
                (R = K.sent()),
                k.transformResponse && (E = k.transformResponse),
                [3, 6]
              );
            case 4:
              return [
                4,
                k.queryFn(x.originalArgs, P, k.extraOptions, function (Oe) {
                  return r(Oe, P, k.extraOptions);
                }),
              ];
            case 5:
              (R = K.sent()), (K.label = 6);
            case 6:
              if ((typeof process < "u", R.error))
                throw new of(R.error, R.meta);
              return (B = Ce), [4, E(R.data, R.meta, x.originalArgs)];
            case 7:
              return [
                2,
                B.apply(void 0, [
                  K.sent(),
                  (($ = {
                    fulfilledTimeStamp: Date.now(),
                    baseQueryMeta: R.meta,
                  }),
                  ($[Nr] = !0),
                  $),
                ]),
              ];
            case 8:
              if (((j = K.sent()), (T = j), !(T instanceof of))) return [3, 12];
              (C = lf),
                k.query &&
                  k.transformErrorResponse &&
                  (C = k.transformErrorResponse),
                (K.label = 9);
            case 9:
              return (
                K.trys.push([9, 11, , 12]),
                (D = W),
                [4, C(T.value, T.meta, x.originalArgs)]
              );
            case 10:
              return [
                2,
                D.apply(void 0, [
                  K.sent(),
                  ((F = { baseQueryMeta: T.meta }), (F[Nr] = !0), F),
                ]),
              ];
            case 11:
              return (I = K.sent()), (T = I), [3, 12];
            case 12:
              throw (typeof process < "u", console.error(T), T);
            case 13:
              return [2];
          }
        });
      });
    };
  function h(f, y) {
    var x,
      S,
      k,
      E,
      R =
        (S = (x = y[n]) == null ? void 0 : x.queries) == null
          ? void 0
          : S[f.queryCacheKey],
      P = (k = y[n]) == null ? void 0 : k.config.refetchOnMountOrArgChange,
      A = R == null ? void 0 : R.fulfilledTimeStamp,
      N = (E = f.forceRefetch) != null ? E : f.subscribe && P;
    return N ? N === !0 || (Number(new Date()) - Number(A)) / 1e3 >= N : !1;
  }
  var v = Xc(n + "/executeQuery", c, {
      getPendingMeta: function () {
        var f;
        return (f = { startedTimeStamp: Date.now() }), (f[Nr] = !0), f;
      },
      condition: function (f, y) {
        var x = y.getState,
          S,
          k,
          E,
          R = x(),
          P =
            (k = (S = R[n]) == null ? void 0 : S.queries) == null
              ? void 0
              : k[f.queryCacheKey],
          A = P == null ? void 0 : P.fulfilledTimeStamp,
          N = f.originalArgs,
          _ = P == null ? void 0 : P.originalArgs,
          M = i[f.endpointName];
        return da(f)
          ? !0
          : (P == null ? void 0 : P.status) === "pending"
          ? !1
          : h(f, R) ||
            (vv(M) &&
              (E = M == null ? void 0 : M.forceRefetch) != null &&
              E.call(M, {
                currentArg: N,
                previousArg: _,
                endpointState: P,
                state: R,
              }))
          ? !0
          : !A;
      },
      dispatchConditionRejection: !0,
    }),
    p = Xc(n + "/executeMutation", c, {
      getPendingMeta: function () {
        var f;
        return (f = { startedTimeStamp: Date.now() }), (f[Nr] = !0), f;
      },
    }),
    g = function (f) {
      return "force" in f;
    },
    w = function (f) {
      return "ifOlderThan" in f;
    },
    O = function (f, y, x) {
      return function (S, k) {
        var E = g(x) && x.force,
          R = w(x) && x.ifOlderThan,
          P = function (M) {
            return (
              M === void 0 && (M = !0),
              o.endpoints[f].initiate(y, { forceRefetch: M })
            );
          },
          A = o.endpoints[f].select(y)(k());
        if (E) S(P());
        else if (R) {
          var N = A == null ? void 0 : A.fulfilledTimeStamp;
          if (!N) {
            S(P());
            return;
          }
          var _ = (Number(new Date()) - Number(new Date(N))) / 1e3 >= R;
          _ && S(P());
        } else S(P(!1));
      };
    };
  function m(f) {
    return function (y) {
      var x, S;
      return (
        ((S = (x = y == null ? void 0 : y.meta) == null ? void 0 : x.arg) ==
        null
          ? void 0
          : S.endpointName) === f
      );
    };
  }
  function d(f, y) {
    return {
      matchPending: Fr(ws(f), m(y)),
      matchFulfilled: Fr(Mn(f), m(y)),
      matchRejected: Fr(ai(f), m(y)),
    };
  }
  return {
    queryThunk: v,
    mutationThunk: p,
    prefetch: O,
    updateQueryData: a,
    upsertQueryData: s,
    patchQueryData: l,
    buildMatchThunkActions: d,
  };
}
function mv(e, t, n, r) {
  return hv(
    n[e.meta.arg.endpointName][t],
    Mn(e) ? e.payload : void 0,
    Co(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0,
    r
  );
}
function bi(e, t, n) {
  var r = e[t];
  r && n(r);
}
function ci(e) {
  var t;
  return (t = "arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) != null
    ? t
    : e.requestId;
}
function af(e, t, n) {
  var r = e[ci(t)];
  r && n(r);
}
var kr = {};
function l0(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = e.mutationThunk,
    i = e.context,
    u = i.endpointDefinitions,
    o = i.apiUid,
    l = i.extractRehydrationInfo,
    a = i.hasRehydrationInfo,
    s = e.assertTagType,
    c = e.config,
    h = He(t + "/resetApiState"),
    v = _t({
      name: t + "/queries",
      initialState: kr,
      reducers: {
        removeQueryResult: {
          reducer: function (x, S) {
            var k = S.payload.queryCacheKey;
            delete x[k];
          },
          prepare: ol(),
        },
        queryResultPatched: function (x, S) {
          var k = S.payload,
            E = k.queryCacheKey,
            R = k.patches;
          bi(x, E, function (P) {
            P.data = Uc(P.data, R.concat());
          });
        },
      },
      extraReducers: function (x) {
        x.addCase(n.pending, function (S, k) {
          var E = k.meta,
            R = k.meta.arg,
            P,
            A,
            N = da(R);
          (R.subscribe || N) &&
            ((A = S[(P = R.queryCacheKey)]) != null ||
              (S[P] = {
                status: ue.uninitialized,
                endpointName: R.endpointName,
              })),
            bi(S, R.queryCacheKey, function (_) {
              (_.status = ue.pending),
                (_.requestId = N && _.requestId ? _.requestId : E.requestId),
                R.originalArgs !== void 0 && (_.originalArgs = R.originalArgs),
                (_.startedTimeStamp = E.startedTimeStamp);
            });
        })
          .addCase(n.fulfilled, function (S, k) {
            var E = k.meta,
              R = k.payload;
            bi(S, E.arg.queryCacheKey, function (P) {
              var A;
              if (!(P.requestId !== E.requestId && !da(E.arg))) {
                var N = u[E.arg.endpointName].merge;
                if (((P.status = ue.fulfilled), N))
                  if (P.data !== void 0) {
                    var _ = E.fulfilledTimeStamp,
                      M = E.arg,
                      b = E.baseQueryMeta,
                      q = E.requestId,
                      B = mi(P.data, function (j) {
                        return N(j, R, {
                          arg: M.originalArgs,
                          baseQueryMeta: b,
                          fulfilledTimeStamp: _,
                          requestId: q,
                        });
                      });
                    P.data = B;
                  } else P.data = R;
                else
                  P.data =
                    (A = u[E.arg.endpointName].structuralSharing) == null || A
                      ? fv(yt(P.data) ? zy(P.data) : P.data, R)
                      : R;
                delete P.error, (P.fulfilledTimeStamp = E.fulfilledTimeStamp);
              }
            });
          })
          .addCase(n.rejected, function (S, k) {
            var E = k.meta,
              R = E.condition,
              P = E.arg,
              A = E.requestId,
              N = k.error,
              _ = k.payload;
            bi(S, P.queryCacheKey, function (M) {
              if (!R) {
                if (M.requestId !== A) return;
                (M.status = ue.rejected), (M.error = _ ?? N);
              }
            });
          })
          .addMatcher(a, function (S, k) {
            for (
              var E = l(k).queries, R = 0, P = Object.entries(E);
              R < P.length;
              R++
            ) {
              var A = P[R],
                N = A[0],
                _ = A[1];
              ((_ == null ? void 0 : _.status) === ue.fulfilled ||
                (_ == null ? void 0 : _.status) === ue.rejected) &&
                (S[N] = _);
            }
          });
      },
    }),
    p = _t({
      name: t + "/mutations",
      initialState: kr,
      reducers: {
        removeMutationResult: {
          reducer: function (x, S) {
            var k = S.payload,
              E = ci(k);
            E in x && delete x[E];
          },
          prepare: ol(),
        },
      },
      extraReducers: function (x) {
        x.addCase(r.pending, function (S, k) {
          var E = k.meta,
            R = k.meta,
            P = R.requestId,
            A = R.arg,
            N = R.startedTimeStamp;
          A.track &&
            (S[ci(E)] = {
              requestId: P,
              status: ue.pending,
              endpointName: A.endpointName,
              startedTimeStamp: N,
            });
        })
          .addCase(r.fulfilled, function (S, k) {
            var E = k.payload,
              R = k.meta;
            R.arg.track &&
              af(S, R, function (P) {
                P.requestId === R.requestId &&
                  ((P.status = ue.fulfilled),
                  (P.data = E),
                  (P.fulfilledTimeStamp = R.fulfilledTimeStamp));
              });
          })
          .addCase(r.rejected, function (S, k) {
            var E = k.payload,
              R = k.error,
              P = k.meta;
            P.arg.track &&
              af(S, P, function (A) {
                A.requestId === P.requestId &&
                  ((A.status = ue.rejected), (A.error = E ?? R));
              });
          })
          .addMatcher(a, function (S, k) {
            for (
              var E = l(k).mutations, R = 0, P = Object.entries(E);
              R < P.length;
              R++
            ) {
              var A = P[R],
                N = A[0],
                _ = A[1];
              ((_ == null ? void 0 : _.status) === ue.fulfilled ||
                (_ == null ? void 0 : _.status) === ue.rejected) &&
                N !== (_ == null ? void 0 : _.requestId) &&
                (S[N] = _);
            }
          });
      },
    }),
    g = _t({
      name: t + "/invalidation",
      initialState: kr,
      reducers: {},
      extraReducers: function (x) {
        x.addCase(v.actions.removeQueryResult, function (S, k) {
          for (
            var E = k.payload.queryCacheKey, R = 0, P = Object.values(S);
            R < P.length;
            R++
          )
            for (var A = P[R], N = 0, _ = Object.values(A); N < _.length; N++) {
              var M = _[N],
                b = M.indexOf(E);
              b !== -1 && M.splice(b, 1);
            }
        })
          .addMatcher(a, function (S, k) {
            for (
              var E, R, P, A, N = l(k).provided, _ = 0, M = Object.entries(N);
              _ < M.length;
              _++
            )
              for (
                var b = M[_], q = b[0], B = b[1], j = 0, T = Object.entries(B);
                j < T.length;
                j++
              )
                for (
                  var C = T[j],
                    D = C[0],
                    I = C[1],
                    $ =
                      (A = (R = (E = S[q]) != null ? E : (S[q] = {}))[
                        (P = D || "__internal_without_id")
                      ]) != null
                        ? A
                        : (R[P] = []),
                    F = 0,
                    U = I;
                  F < U.length;
                  F++
                ) {
                  var H = U[F],
                    W = $.includes(H);
                  W || $.push(H);
                }
          })
          .addMatcher(pr(Mn(n), Co(n)), function (S, k) {
            for (
              var E,
                R,
                P,
                A,
                N = mv(k, "providesTags", u, s),
                _ = k.meta.arg.queryCacheKey,
                M = 0,
                b = Object.values(S);
              M < b.length;
              M++
            )
              for (
                var q = b[M], B = 0, j = Object.values(q);
                B < j.length;
                B++
              ) {
                var T = j[B],
                  C = T.indexOf(_);
                C !== -1 && T.splice(C, 1);
              }
            for (var D = 0, I = N; D < I.length; D++) {
              var $ = I[D],
                F = $.type,
                U = $.id,
                H =
                  (A = (R = (E = S[F]) != null ? E : (S[F] = {}))[
                    (P = U || "__internal_without_id")
                  ]) != null
                    ? A
                    : (R[P] = []),
                W = H.includes(_);
              W || H.push(_);
            }
          });
      },
    }),
    w = _t({
      name: t + "/subscriptions",
      initialState: kr,
      reducers: {
        updateSubscriptionOptions: function (x, S) {},
        unsubscribeQueryResult: function (x, S) {},
        internal_probeSubscription: function (x, S) {},
      },
    }),
    O = _t({
      name: t + "/internalSubscriptions",
      initialState: kr,
      reducers: {
        subscriptionsUpdated: {
          reducer: function (x, S) {
            return Uc(x, S.payload);
          },
          prepare: ol(),
        },
      },
    }),
    m = _t({
      name: t + "/config",
      initialState: pe(
        { online: Jg(), focused: Zg(), middlewareRegistered: !1 },
        c
      ),
      reducers: {
        middlewareRegistered: function (x, S) {
          var k = S.payload;
          x.middlewareRegistered =
            x.middlewareRegistered === "conflict" || o !== k ? "conflict" : !0;
        },
      },
      extraReducers: function (x) {
        x.addCase(Ps, function (S) {
          S.online = !0;
        })
          .addCase(pv, function (S) {
            S.online = !1;
          })
          .addCase(ks, function (S) {
            S.focused = !0;
          })
          .addCase(dv, function (S) {
            S.focused = !1;
          })
          .addMatcher(a, function (S) {
            return pe({}, S);
          });
      },
    }),
    d = ev({
      queries: v.reducer,
      mutations: p.reducer,
      provided: g.reducer,
      subscriptions: O.reducer,
      config: m.reducer,
    }),
    f = function (x, S) {
      return d(h.match(S) ? void 0 : x, S);
    },
    y = kt(
      pe(
        pe(pe(pe(pe({}, m.actions), v.actions), w.actions), O.actions),
        p.actions
      ),
      {
        unsubscribeMutationResult: p.actions.removeMutationResult,
        resetApiState: h,
      }
    );
  return { reducer: f, actions: y };
}
var Pn = Symbol.for("RTKQ/skipToken"),
  yv = { status: ue.uninitialized },
  sf = mi(yv, function () {}),
  cf = mi(yv, function () {});
function a0(e) {
  var t = e.serializeQueryArgs,
    n = e.reducerPath,
    r = function (c) {
      return sf;
    },
    i = function (c) {
      return cf;
    };
  return {
    buildQuerySelector: l,
    buildMutationSelector: a,
    selectInvalidatedBy: s,
  };
  function u(c) {
    return pe(pe({}, c), Wg(c.status));
  }
  function o(c) {
    var h = c[n];
    return h;
  }
  function l(c, h) {
    return function (v) {
      var p = t({ queryArgs: v, endpointDefinition: h, endpointName: c }),
        g = function (O) {
          var m, d, f;
          return (f =
            (d = (m = o(O)) == null ? void 0 : m.queries) == null
              ? void 0
              : d[p]) != null
            ? f
            : sf;
        },
        w = v === Pn ? r : g;
      return $r(w, u);
    };
  }
  function a() {
    return function (c) {
      var h, v;
      typeof c == "object" ? (v = (h = ci(c)) != null ? h : Pn) : (v = c);
      var p = function (w) {
          var O, m, d;
          return (d =
            (m = (O = o(w)) == null ? void 0 : O.mutations) == null
              ? void 0
              : m[v]) != null
            ? d
            : cf;
        },
        g = v === Pn ? i : p;
      return $r(g, u);
    };
  }
  function s(c, h) {
    for (
      var v, p = c[n], g = new Set(), w = 0, O = h.map(fa);
      w < O.length;
      w++
    ) {
      var m = O[w],
        d = p.provided[m.type];
      if (d)
        for (
          var f =
              (v = m.id !== void 0 ? d[m.id] : tf(Object.values(d))) != null
                ? v
                : [],
            y = 0,
            x = f;
          y < x.length;
          y++
        ) {
          var S = x[y];
          g.add(S);
        }
    }
    return tf(
      Array.from(g.values()).map(function (k) {
        var E = p.queries[k];
        return E
          ? [
              {
                queryCacheKey: k,
                endpointName: E.endpointName,
                originalArgs: E.originalArgs,
              },
            ]
          : [];
      })
    );
  }
}
var zi = WeakMap ? new WeakMap() : void 0,
  ff = function (e) {
    var t = e.endpointName,
      n = e.queryArgs,
      r = "",
      i = zi == null ? void 0 : zi.get(n);
    if (typeof i == "string") r = i;
    else {
      var u = JSON.stringify(n, function (o, l) {
        return pn(l)
          ? Object.keys(l)
              .sort()
              .reduce(function (a, s) {
                return (a[s] = l[s]), a;
              }, {})
          : l;
      });
      pn(n) && (zi == null || zi.set(n, u)), (r = u);
    }
    return t + "(" + r + ")";
  };
function s0() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (r) {
    var i = aa(function (c) {
        var h, v;
        return (v = r.extractRehydrationInfo) == null
          ? void 0
          : v.call(r, c, {
              reducerPath: (h = r.reducerPath) != null ? h : "api",
            });
      }),
      u = kt(
        pe(
          {
            reducerPath: "api",
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: !1,
            refetchOnFocus: !1,
            refetchOnReconnect: !1,
          },
          r
        ),
        {
          extractRehydrationInfo: i,
          serializeQueryArgs: function (c) {
            var h = ff;
            if ("serializeQueryArgs" in c.endpointDefinition) {
              var v = c.endpointDefinition.serializeQueryArgs;
              h = function (p) {
                var g = v(p);
                return typeof g == "string"
                  ? g
                  : ff(kt(pe({}, p), { queryArgs: g }));
              };
            } else r.serializeQueryArgs && (h = r.serializeQueryArgs);
            return h(c);
          },
          tagTypes: Mu([], r.tagTypes || []),
        }
      ),
      o = {
        endpointDefinitions: {},
        batch: function (c) {
          c();
        },
        apiUid: uv(),
        extractRehydrationInfo: i,
        hasRehydrationInfo: aa(function (c) {
          return i(c) != null;
        }),
      },
      l = {
        injectEndpoints: s,
        enhanceEndpoints: function (c) {
          var h = c.addTagTypes,
            v = c.endpoints;
          if (h)
            for (var p = 0, g = h; p < g.length; p++) {
              var w = g[p];
              u.tagTypes.includes(w) || u.tagTypes.push(w);
            }
          if (v)
            for (var O = 0, m = Object.entries(v); O < m.length; O++) {
              var d = m[O],
                f = d[0],
                y = d[1];
              typeof y == "function"
                ? y(o.endpointDefinitions[f])
                : Object.assign(o.endpointDefinitions[f] || {}, y);
            }
          return l;
        },
      },
      a = e.map(function (c) {
        return c.init(l, u, o);
      });
    function s(c) {
      for (
        var h = c.endpoints({
            query: function (y) {
              return kt(pe({}, y), { type: Ot.query });
            },
            mutation: function (y) {
              return kt(pe({}, y), { type: Ot.mutation });
            },
          }),
          v = 0,
          p = Object.entries(h);
        v < p.length;
        v++
      ) {
        var g = p[v],
          w = g[0],
          O = g[1];
        if (!c.overrideExisting && w in o.endpointDefinitions) {
          typeof process < "u";
          continue;
        }
        o.endpointDefinitions[w] = O;
        for (var m = 0, d = a; m < d.length; m++) {
          var f = d[m];
          f.injectEndpoint(w, O);
        }
      }
      return l;
    }
    return l.injectEndpoints({ endpoints: r.endpoints });
  };
}
function c0(e) {
  for (var t in e) return !1;
  return !0;
}
var f0 = 2147483647 / 1e3 - 1,
  d0 = function (e) {
    var t = e.reducerPath,
      n = e.api,
      r = e.context,
      i = e.internalState,
      u = n.internalActions,
      o = u.removeQueryResult,
      l = u.unsubscribeQueryResult;
    function a(v) {
      var p = i.currentSubscriptions[v];
      return !!p && !c0(p);
    }
    var s = {},
      c = function (v, p, g) {
        var w;
        if (l.match(v)) {
          var O = p.getState()[t],
            m = v.payload.queryCacheKey;
          h(
            m,
            (w = O.queries[m]) == null ? void 0 : w.endpointName,
            p,
            O.config
          );
        }
        if (n.util.resetApiState.match(v))
          for (var d = 0, f = Object.entries(s); d < f.length; d++) {
            var y = f[d],
              x = y[0],
              S = y[1];
            S && clearTimeout(S), delete s[x];
          }
        if (r.hasRehydrationInfo(v))
          for (
            var O = p.getState()[t],
              k = r.extractRehydrationInfo(v).queries,
              E = 0,
              R = Object.entries(k);
            E < R.length;
            E++
          ) {
            var P = R[E],
              m = P[0],
              A = P[1];
            h(m, A == null ? void 0 : A.endpointName, p, O.config);
          }
      };
    function h(v, p, g, w) {
      var O,
        m = r.endpointDefinitions[p],
        d =
          (O = m == null ? void 0 : m.keepUnusedDataFor) != null
            ? O
            : w.keepUnusedDataFor;
      if (d !== 1 / 0) {
        var f = Math.max(0, Math.min(d, f0));
        if (!a(v)) {
          var y = s[v];
          y && clearTimeout(y),
            (s[v] = setTimeout(function () {
              a(v) || g.dispatch(o({ queryCacheKey: v })), delete s[v];
            }, f * 1e3));
        }
      }
    }
    return c;
  },
  p0 = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.context.endpointDefinitions,
      i = e.mutationThunk,
      u = e.api,
      o = e.assertTagType,
      l = e.refetchQuery,
      a = u.internalActions.removeQueryResult,
      s = pr(Mn(i), Co(i)),
      c = function (v, p) {
        s(v) && h(mv(v, "invalidatesTags", r, o), p),
          u.util.invalidateTags.match(v) &&
            h(hv(v.payload, void 0, void 0, void 0, void 0, o), p);
      };
    function h(v, p) {
      var g = p.getState(),
        w = g[t],
        O = u.util.selectInvalidatedBy(g, v);
      n.batch(function () {
        for (
          var m, d = Array.from(O.values()), f = 0, y = d;
          f < y.length;
          f++
        ) {
          var x = y[f].queryCacheKey,
            S = w.queries[x],
            k = (m = w.subscriptions[x]) != null ? m : {};
          S &&
            (Object.keys(k).length === 0
              ? p.dispatch(a({ queryCacheKey: x }))
              : S.status !== ue.uninitialized && p.dispatch(l(S, x)));
        }
      });
    }
    return c;
  },
  v0 = function (e) {
    var t = e.reducerPath,
      n = e.queryThunk,
      r = e.api,
      i = e.refetchQuery,
      u = e.internalState,
      o = {},
      l = function (p, g) {
        (r.internalActions.updateSubscriptionOptions.match(p) ||
          r.internalActions.unsubscribeQueryResult.match(p)) &&
          s(p.payload, g),
          (n.pending.match(p) || (n.rejected.match(p) && p.meta.condition)) &&
            s(p.meta.arg, g),
          (n.fulfilled.match(p) ||
            (n.rejected.match(p) && !p.meta.condition)) &&
            a(p.meta.arg, g),
          r.util.resetApiState.match(p) && h();
      };
    function a(p, g) {
      var w = p.queryCacheKey,
        O = g.getState()[t],
        m = O.queries[w],
        d = u.currentSubscriptions[w];
      if (!(!m || m.status === ue.uninitialized)) {
        var f = v(d);
        if (Number.isFinite(f)) {
          var y = o[w];
          y != null &&
            y.timeout &&
            (clearTimeout(y.timeout), (y.timeout = void 0));
          var x = Date.now() + f,
            S = (o[w] = {
              nextPollTimestamp: x,
              pollingInterval: f,
              timeout: setTimeout(function () {
                (S.timeout = void 0), g.dispatch(i(m, w));
              }, f),
            });
        }
      }
    }
    function s(p, g) {
      var w = p.queryCacheKey,
        O = g.getState()[t],
        m = O.queries[w],
        d = u.currentSubscriptions[w];
      if (!(!m || m.status === ue.uninitialized)) {
        var f = v(d);
        if (!Number.isFinite(f)) {
          c(w);
          return;
        }
        var y = o[w],
          x = Date.now() + f;
        (!y || x < y.nextPollTimestamp) && a({ queryCacheKey: w }, g);
      }
    }
    function c(p) {
      var g = o[p];
      g != null && g.timeout && clearTimeout(g.timeout), delete o[p];
    }
    function h() {
      for (var p = 0, g = Object.keys(o); p < g.length; p++) {
        var w = g[p];
        c(w);
      }
    }
    function v(p) {
      p === void 0 && (p = {});
      var g = Number.POSITIVE_INFINITY;
      for (var w in p)
        p[w].pollingInterval && (g = Math.min(p[w].pollingInterval, g));
      return g;
    }
    return l;
  },
  h0 = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.api,
      i = e.refetchQuery,
      u = e.internalState,
      o = r.internalActions.removeQueryResult,
      l = function (s, c) {
        ks.match(s) && a(c, "refetchOnFocus"),
          Ps.match(s) && a(c, "refetchOnReconnect");
      };
    function a(s, c) {
      var h = s.getState()[t],
        v = h.queries,
        p = u.currentSubscriptions;
      n.batch(function () {
        for (var g = 0, w = Object.keys(p); g < w.length; g++) {
          var O = w[g],
            m = v[O],
            d = p[O];
          if (!(!d || !m)) {
            var f =
              Object.values(d).some(function (y) {
                return y[c] === !0;
              }) ||
              (Object.values(d).every(function (y) {
                return y[c] === void 0;
              }) &&
                h.config[c]);
            f &&
              (Object.keys(d).length === 0
                ? s.dispatch(o({ queryCacheKey: O }))
                : m.status !== ue.uninitialized && s.dispatch(i(m, O)));
          }
        }
      });
    }
    return l;
  },
  df = new Error("Promise never resolved before cacheEntryRemoved."),
  m0 = function (e) {
    var t = e.api,
      n = e.reducerPath,
      r = e.context,
      i = e.queryThunk,
      u = e.mutationThunk;
    e.internalState;
    var o = ca(i),
      l = ca(u),
      a = Mn(i, u),
      s = {},
      c = function (p, g, w) {
        var O = h(p);
        if (i.pending.match(p)) {
          var m = w[n].queries[O],
            d = g.getState()[n].queries[O];
          !m &&
            d &&
            v(
              p.meta.arg.endpointName,
              p.meta.arg.originalArgs,
              O,
              g,
              p.meta.requestId
            );
        } else if (u.pending.match(p)) {
          var d = g.getState()[n].mutations[O];
          d &&
            v(
              p.meta.arg.endpointName,
              p.meta.arg.originalArgs,
              O,
              g,
              p.meta.requestId
            );
        } else if (a(p)) {
          var f = s[O];
          f != null &&
            f.valueResolved &&
            (f.valueResolved({ data: p.payload, meta: p.meta.baseQueryMeta }),
            delete f.valueResolved);
        } else if (
          t.internalActions.removeQueryResult.match(p) ||
          t.internalActions.removeMutationResult.match(p)
        ) {
          var f = s[O];
          f && (delete s[O], f.cacheEntryRemoved());
        } else if (t.util.resetApiState.match(p))
          for (var y = 0, x = Object.entries(s); y < x.length; y++) {
            var S = x[y],
              k = S[0],
              f = S[1];
            delete s[k], f.cacheEntryRemoved();
          }
      };
    function h(p) {
      return o(p)
        ? p.meta.arg.queryCacheKey
        : l(p)
        ? p.meta.requestId
        : t.internalActions.removeQueryResult.match(p)
        ? p.payload.queryCacheKey
        : t.internalActions.removeMutationResult.match(p)
        ? ci(p.payload)
        : "";
    }
    function v(p, g, w, O, m) {
      var d = r.endpointDefinitions[p],
        f = d == null ? void 0 : d.onCacheEntryAdded;
      if (f) {
        var y = {},
          x = new Promise(function (A) {
            y.cacheEntryRemoved = A;
          }),
          S = Promise.race([
            new Promise(function (A) {
              y.valueResolved = A;
            }),
            x.then(function () {
              throw df;
            }),
          ]);
        S.catch(function () {}), (s[w] = y);
        var k = t.endpoints[p].select(d.type === Ot.query ? g : w),
          E = O.dispatch(function (A, N, _) {
            return _;
          }),
          R = kt(pe({}, O), {
            getCacheEntry: function () {
              return k(O.getState());
            },
            requestId: m,
            extra: E,
            updateCachedData:
              d.type === Ot.query
                ? function (A) {
                    return O.dispatch(t.util.updateQueryData(p, g, A));
                  }
                : void 0,
            cacheDataLoaded: S,
            cacheEntryRemoved: x,
          }),
          P = f(g, R);
        Promise.resolve(P).catch(function (A) {
          if (A !== df) throw A;
        });
      }
    }
    return c;
  },
  y0 = function (e) {
    var t = e.api,
      n = e.context,
      r = e.queryThunk,
      i = e.mutationThunk,
      u = ws(r, i),
      o = ai(r, i),
      l = Mn(r, i),
      a = {},
      s = function (c, h) {
        var v, p, g;
        if (u(c)) {
          var w = c.meta,
            O = w.requestId,
            m = w.arg,
            d = m.endpointName,
            f = m.originalArgs,
            y = n.endpointDefinitions[d],
            x = y == null ? void 0 : y.onQueryStarted;
          if (x) {
            var S = {},
              k = new Promise(function (b, q) {
                (S.resolve = b), (S.reject = q);
              });
            k.catch(function () {}), (a[O] = S);
            var E = t.endpoints[d].select(y.type === Ot.query ? f : O),
              R = h.dispatch(function (b, q, B) {
                return B;
              }),
              P = kt(pe({}, h), {
                getCacheEntry: function () {
                  return E(h.getState());
                },
                requestId: O,
                extra: R,
                updateCachedData:
                  y.type === Ot.query
                    ? function (b) {
                        return h.dispatch(t.util.updateQueryData(d, f, b));
                      }
                    : void 0,
                queryFulfilled: k,
              });
            x(f, P);
          }
        } else if (l(c)) {
          var A = c.meta,
            O = A.requestId,
            N = A.baseQueryMeta;
          (v = a[O]) == null || v.resolve({ data: c.payload, meta: N }),
            delete a[O];
        } else if (o(c)) {
          var _ = c.meta,
            O = _.requestId,
            M = _.rejectedWithValue,
            N = _.baseQueryMeta;
          (g = a[O]) == null ||
            g.reject({
              error: (p = c.payload) != null ? p : c.error,
              isUnhandledError: !M,
              meta: N,
            }),
            delete a[O];
        }
      };
    return s;
  },
  g0 = function (e) {
    var t = e.api,
      n = e.context.apiUid,
      r = e.reducerPath;
    return function (i, u) {
      var o, l;
      t.util.resetApiState.match(i) &&
        u.dispatch(t.internalActions.middlewareRegistered(n)),
        typeof process < "u";
    };
  },
  pf,
  w0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask.bind(
          typeof window < "u"
            ? window
            : typeof global < "u"
            ? global
            : globalThis
        )
      : function (e) {
          return (pf || (pf = Promise.resolve())).then(e).catch(function (t) {
            return setTimeout(function () {
              throw t;
            }, 0);
          });
        },
  S0 = function (e) {
    var t = e.api,
      n = e.queryThunk,
      r = e.internalState,
      i = t.reducerPath + "/subscriptions",
      u = null,
      o = !1,
      l = t.internalActions,
      a = l.updateSubscriptionOptions,
      s = l.unsubscribeQueryResult,
      c = function (h, v) {
        var p, g, w, O, m, d, f, y, x;
        if (a.match(v)) {
          var S = v.payload,
            k = S.queryCacheKey,
            E = S.requestId,
            R = S.options;
          return (
            (p = h == null ? void 0 : h[k]) != null && p[E] && (h[k][E] = R), !0
          );
        }
        if (s.match(v)) {
          var P = v.payload,
            k = P.queryCacheKey,
            E = P.requestId;
          return h[k] && delete h[k][E], !0;
        }
        if (t.internalActions.removeQueryResult.match(v))
          return delete h[v.payload.queryCacheKey], !0;
        if (n.pending.match(v)) {
          var A = v.meta,
            N = A.arg,
            E = A.requestId;
          if (N.subscribe) {
            var _ = (w = h[(g = N.queryCacheKey)]) != null ? w : (h[g] = {});
            return (
              (_[E] =
                (m = (O = N.subscriptionOptions) != null ? O : _[E]) != null
                  ? m
                  : {}),
              !0
            );
          }
        }
        if (n.rejected.match(v)) {
          var M = v.meta,
            b = M.condition,
            N = M.arg,
            E = M.requestId;
          if (b && N.subscribe) {
            var _ = (f = h[(d = N.queryCacheKey)]) != null ? f : (h[d] = {});
            return (
              (_[E] =
                (x = (y = N.subscriptionOptions) != null ? y : _[E]) != null
                  ? x
                  : {}),
              !0
            );
          }
        }
        return !1;
      };
    return function (h, v) {
      var p, g;
      if (
        (u || (u = JSON.parse(JSON.stringify(r.currentSubscriptions))),
        t.util.resetApiState.match(h))
      )
        return (u = r.currentSubscriptions = {}), [!0, !1];
      if (t.internalActions.internal_probeSubscription.match(h)) {
        var w = h.payload,
          O = w.queryCacheKey,
          m = w.requestId,
          d = !!((p = r.currentSubscriptions[O]) != null && p[m]);
        return [!1, d];
      }
      var f = c(r.currentSubscriptions, h);
      if (f) {
        o ||
          (w0(function () {
            var k = JSON.parse(JSON.stringify(r.currentSubscriptions)),
              E = Jp(u, function () {
                return k;
              }),
              R = E[1];
            v.next(t.internalActions.subscriptionsUpdated(R)),
              (u = k),
              (o = !1);
          }),
          (o = !0));
        var y = !!((g = h.type) != null && g.startsWith(i)),
          x = n.rejected.match(h) && h.meta.condition && !!h.meta.arg.subscribe,
          S = !y && !x;
        return [S, !1];
      }
      return [!0, !1];
    };
  };
function x0(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = e.api,
    i = e.context,
    u = i.apiUid,
    o = { invalidateTags: He(t + "/invalidateTags") },
    l = function (h) {
      return !!h && typeof h.type == "string" && h.type.startsWith(t + "/");
    },
    a = [g0, d0, p0, v0, m0, y0],
    s = function (h) {
      var v = !1,
        p = { currentSubscriptions: {} },
        g = kt(pe({}, e), { internalState: p, refetchQuery: c }),
        w = a.map(function (d) {
          return d(g);
        }),
        O = S0(g),
        m = h0(g);
      return function (d) {
        return function (f) {
          v ||
            ((v = !0), h.dispatch(r.internalActions.middlewareRegistered(u)));
          var y = kt(pe({}, h), { next: d }),
            x = h.getState(),
            S = O(f, y, x),
            k = S[0],
            E = S[1],
            R;
          if (
            (k ? (R = d(f)) : (R = E),
            h.getState()[t] && (m(f, y, x), l(f) || i.hasRehydrationInfo(f)))
          )
            for (var P = 0, A = w; P < A.length; P++) {
              var N = A[P];
              N(f, y, x);
            }
          return R;
        };
      };
    };
  return { middleware: s, actions: o };
  function c(h, v, p) {
    return (
      p === void 0 && (p = {}),
      n(
        pe(
          {
            type: "query",
            endpointName: h.endpointName,
            originalArgs: h.originalArgs,
            subscribe: !1,
            forceRefetch: !0,
            queryCacheKey: v,
          },
          p
        )
      )
    );
  }
}
function Ut(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, Mu([e], t));
}
var vf = Symbol(),
  k0 = function () {
    return {
      name: vf,
      init: function (e, t, n) {
        var r = t.baseQuery,
          i = t.tagTypes,
          u = t.reducerPath,
          o = t.serializeQueryArgs,
          l = t.keepUnusedDataFor,
          a = t.refetchOnMountOrArgChange,
          s = t.refetchOnFocus,
          c = t.refetchOnReconnect;
        Uy();
        var h = function ($) {
          return typeof process < "u", $;
        };
        Object.assign(e, {
          reducerPath: u,
          endpoints: {},
          internalActions: {
            onOnline: Ps,
            onOffline: pv,
            onFocus: ks,
            onFocusLost: dv,
          },
          util: {},
        });
        var v = o0({
            baseQuery: r,
            reducerPath: u,
            context: n,
            api: e,
            serializeQueryArgs: o,
          }),
          p = v.queryThunk,
          g = v.mutationThunk,
          w = v.patchQueryData,
          O = v.updateQueryData,
          m = v.upsertQueryData,
          d = v.prefetch,
          f = v.buildMatchThunkActions,
          y = l0({
            context: n,
            queryThunk: p,
            mutationThunk: g,
            reducerPath: u,
            assertTagType: h,
            config: {
              refetchOnFocus: s,
              refetchOnReconnect: c,
              refetchOnMountOrArgChange: a,
              keepUnusedDataFor: l,
              reducerPath: u,
            },
          }),
          x = y.reducer,
          S = y.actions;
        Ut(e.util, {
          patchQueryData: w,
          updateQueryData: O,
          upsertQueryData: m,
          prefetch: d,
          resetApiState: S.resetApiState,
        }),
          Ut(e.internalActions, S);
        var k = x0({
            reducerPath: u,
            context: n,
            queryThunk: p,
            mutationThunk: g,
            api: e,
            assertTagType: h,
          }),
          E = k.middleware,
          R = k.actions;
        Ut(e.util, R), Ut(e, { reducer: x, middleware: E });
        var P = a0({ serializeQueryArgs: o, reducerPath: u }),
          A = P.buildQuerySelector,
          N = P.buildMutationSelector,
          _ = P.selectInvalidatedBy;
        Ut(e.util, { selectInvalidatedBy: _ });
        var M = u0({
            queryThunk: p,
            mutationThunk: g,
            api: e,
            serializeQueryArgs: o,
            context: n,
          }),
          b = M.buildInitiateQuery,
          q = M.buildInitiateMutation,
          B = M.getRunningMutationThunk,
          j = M.getRunningMutationsThunk,
          T = M.getRunningQueriesThunk,
          C = M.getRunningQueryThunk,
          D = M.getRunningOperationPromises,
          I = M.removalWarning;
        return (
          Ut(e.util, {
            getRunningOperationPromises: D,
            getRunningOperationPromise: I,
            getRunningMutationThunk: B,
            getRunningMutationsThunk: j,
            getRunningQueryThunk: C,
            getRunningQueriesThunk: T,
          }),
          {
            name: vf,
            injectEndpoint: function ($, F) {
              var U,
                H,
                W = e;
              (H = (U = W.endpoints)[$]) != null || (U[$] = {}),
                vv(F)
                  ? Ut(
                      W.endpoints[$],
                      { name: $, select: A($, F), initiate: b($, F) },
                      f(p, $)
                    )
                  : r0(F) &&
                    Ut(
                      W.endpoints[$],
                      { name: $, select: N(), initiate: q($) },
                      f(g, $)
                    );
            },
          }
        );
      },
    };
  },
  P0 =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  E0 = Object.defineProperty,
  C0 = Object.defineProperties,
  O0 = Object.getOwnPropertyDescriptors,
  hf = Object.getOwnPropertySymbols,
  R0 = Object.prototype.hasOwnProperty,
  N0 = Object.prototype.propertyIsEnumerable,
  mf = function (e, t, n) {
    return t in e
      ? E0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Rt = function (e, t) {
    for (var n in t || (t = {})) R0.call(t, n) && mf(e, n, t[n]);
    if (hf)
      for (var r = 0, i = hf(t); r < i.length; r++) {
        var n = i[r];
        N0.call(t, n) && mf(e, n, t[n]);
      }
    return e;
  },
  Zi = function (e, t) {
    return C0(e, O0(t));
  };
function yf(e, t, n, r) {
  var i = V.useMemo(
      function () {
        return {
          queryArgs: e,
          serialized:
            typeof e == "object"
              ? t({ queryArgs: e, endpointDefinition: n, endpointName: r })
              : e,
        };
      },
      [e, t, n, r]
    ),
    u = V.useRef(i);
  return (
    V.useEffect(
      function () {
        u.current.serialized !== i.serialized && (u.current = i);
      },
      [i]
    ),
    u.current.serialized === i.serialized ? u.current.queryArgs : e
  );
}
var al = Symbol();
function sl(e) {
  var t = V.useRef(e);
  return (
    V.useEffect(
      function () {
        Cu(t.current, e) || (t.current = e);
      },
      [e]
    ),
    Cu(t.current, e) ? t.current : e
  );
}
var Di = WeakMap ? new WeakMap() : void 0,
  T0 = function (e) {
    var t = e.endpointName,
      n = e.queryArgs,
      r = "",
      i = Di == null ? void 0 : Di.get(n);
    if (typeof i == "string") r = i;
    else {
      var u = JSON.stringify(n, function (o, l) {
        return pn(l)
          ? Object.keys(l)
              .sort()
              .reduce(function (a, s) {
                return (a[s] = l[s]), a;
              }, {})
          : l;
      });
      pn(n) && (Di == null || Di.set(n, u)), (r = u);
    }
    return t + "(" + r + ")";
  },
  _0 =
    typeof window < "u" && window.document && window.document.createElement
      ? V.useLayoutEffect
      : V.useEffect,
  A0 = function (e) {
    return e;
  },
  j0 = function (e) {
    return e.isUninitialized
      ? Zi(Rt({}, e), {
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: ue.pending,
        })
      : e;
  };
function M0(e) {
  var t = e.api,
    n = e.moduleOptions,
    r = n.batch,
    i = n.useDispatch,
    u = n.useSelector,
    o = n.useStore,
    l = n.unstable__sideEffectsInRender,
    a = e.serializeQueryArgs,
    s = e.context,
    c = l
      ? function (w) {
          return w();
        }
      : V.useEffect;
  return { buildQueryHooks: p, buildMutationHook: g, usePrefetch: v };
  function h(w, O, m) {
    if (O != null && O.endpointName && w.isUninitialized) {
      var d = O.endpointName,
        f = s.endpointDefinitions[d];
      a({
        queryArgs: O.originalArgs,
        endpointDefinition: f,
        endpointName: d,
      }) === a({ queryArgs: m, endpointDefinition: f, endpointName: d }) &&
        (O = void 0);
    }
    var y = w.isSuccess ? w.data : O == null ? void 0 : O.data;
    y === void 0 && (y = w.data);
    var x = y !== void 0,
      S = w.isLoading,
      k = !x && S,
      E = w.isSuccess || (S && x);
    return Zi(Rt({}, w), {
      data: y,
      currentData: w.data,
      isFetching: S,
      isLoading: k,
      isSuccess: E,
    });
  }
  function v(w, O) {
    var m = i(),
      d = sl(O);
    return V.useCallback(
      function (f, y) {
        return m(t.util.prefetch(w, f, Rt(Rt({}, d), y)));
      },
      [w, m, d]
    );
  }
  function p(w) {
    var O = function (f, y) {
        var x = y === void 0 ? {} : y,
          S = x.refetchOnReconnect,
          k = x.refetchOnFocus,
          E = x.refetchOnMountOrArgChange,
          R = x.skip,
          P = R === void 0 ? !1 : R,
          A = x.pollingInterval,
          N = A === void 0 ? 0 : A,
          _ = t.endpoints[w].initiate,
          M = i(),
          b = yf(P ? Pn : f, T0, s.endpointDefinitions[w], w),
          q = sl({
            refetchOnReconnect: S,
            refetchOnFocus: k,
            pollingInterval: N,
          }),
          B = V.useRef(!1),
          j = V.useRef(),
          T = j.current || {},
          C = T.queryCacheKey,
          D = T.requestId,
          I = !1;
        if (C && D) {
          var $ = M(
            t.internalActions.internal_probeSubscription({
              queryCacheKey: C,
              requestId: D,
            })
          );
          I = !!$;
        }
        var F = !I && B.current;
        return (
          c(function () {
            B.current = I;
          }),
          c(
            function () {
              F && (j.current = void 0);
            },
            [F]
          ),
          c(
            function () {
              var U,
                H = j.current;
              if ((typeof process < "u", b === Pn)) {
                H == null || H.unsubscribe(), (j.current = void 0);
                return;
              }
              var W = (U = j.current) == null ? void 0 : U.subscriptionOptions;
              if (!H || H.arg !== b) {
                H == null || H.unsubscribe();
                var Ce = M(_(b, { subscriptionOptions: q, forceRefetch: E }));
                j.current = Ce;
              } else q !== W && H.updateSubscriptionOptions(q);
            },
            [M, _, E, b, q, F]
          ),
          V.useEffect(function () {
            return function () {
              var U;
              (U = j.current) == null || U.unsubscribe(), (j.current = void 0);
            };
          }, []),
          V.useMemo(function () {
            return {
              refetch: function () {
                var U;
                if (!j.current)
                  throw new Error(
                    "Cannot refetch a query that has not been started yet."
                  );
                return (U = j.current) == null ? void 0 : U.refetch();
              },
            };
          }, [])
        );
      },
      m = function (f) {
        var y = f === void 0 ? {} : f,
          x = y.refetchOnReconnect,
          S = y.refetchOnFocus,
          k = y.pollingInterval,
          E = k === void 0 ? 0 : k,
          R = t.endpoints[w].initiate,
          P = i(),
          A = V.useState(al),
          N = A[0],
          _ = A[1],
          M = V.useRef(),
          b = sl({
            refetchOnReconnect: x,
            refetchOnFocus: S,
            pollingInterval: E,
          });
        c(
          function () {
            var j,
              T,
              C = (j = M.current) == null ? void 0 : j.subscriptionOptions;
            b !== C &&
              ((T = M.current) == null || T.updateSubscriptionOptions(b));
          },
          [b]
        );
        var q = V.useRef(b);
        c(
          function () {
            q.current = b;
          },
          [b]
        );
        var B = V.useCallback(
          function (j, T) {
            T === void 0 && (T = !1);
            var C;
            return (
              r(function () {
                var D;
                (D = M.current) == null || D.unsubscribe(),
                  (M.current = C =
                    P(
                      R(j, { subscriptionOptions: q.current, forceRefetch: !T })
                    )),
                  _(j);
              }),
              C
            );
          },
          [P, R]
        );
        return (
          V.useEffect(function () {
            return function () {
              var j;
              (j = M == null ? void 0 : M.current) == null || j.unsubscribe();
            };
          }, []),
          V.useEffect(
            function () {
              N !== al && !M.current && B(N, !0);
            },
            [N, B]
          ),
          V.useMemo(
            function () {
              return [B, N];
            },
            [B, N]
          )
        );
      },
      d = function (f, y) {
        var x = y === void 0 ? {} : y,
          S = x.skip,
          k = S === void 0 ? !1 : S,
          E = x.selectFromResult,
          R = t.endpoints[w].select,
          P = yf(k ? Pn : f, a, s.endpointDefinitions[w], w),
          A = V.useRef(),
          N = V.useMemo(
            function () {
              return $r(
                [
                  R(P),
                  function (B, j) {
                    return j;
                  },
                  function (B) {
                    return P;
                  },
                ],
                h
              );
            },
            [R, P]
          ),
          _ = V.useMemo(
            function () {
              return E ? $r([N], E) : N;
            },
            [N, E]
          ),
          M = u(function (B) {
            return _(B, A.current);
          }, Cu),
          b = o(),
          q = N(b.getState(), A.current);
        return (
          _0(
            function () {
              A.current = q;
            },
            [q]
          ),
          M
        );
      };
    return {
      useQueryState: d,
      useQuerySubscription: O,
      useLazyQuerySubscription: m,
      useLazyQuery: function (f) {
        var y = m(f),
          x = y[0],
          S = y[1],
          k = d(S, Zi(Rt({}, f), { skip: S === al })),
          E = V.useMemo(
            function () {
              return { lastArg: S };
            },
            [S]
          );
        return V.useMemo(
          function () {
            return [x, k, E];
          },
          [x, k, E]
        );
      },
      useQuery: function (f, y) {
        var x = O(f, y),
          S = d(
            f,
            Rt(
              {
                selectFromResult:
                  f === Pn || (y != null && y.skip) ? void 0 : j0,
              },
              y
            )
          ),
          k = S.data,
          E = S.status,
          R = S.isLoading,
          P = S.isSuccess,
          A = S.isError,
          N = S.error;
        return (
          V.useDebugValue({
            data: k,
            status: E,
            isLoading: R,
            isSuccess: P,
            isError: A,
            error: N,
          }),
          V.useMemo(
            function () {
              return Rt(Rt({}, S), x);
            },
            [S, x]
          )
        );
      },
    };
  }
  function g(w) {
    return function (O) {
      var m = O === void 0 ? {} : O,
        d = m.selectFromResult,
        f = d === void 0 ? A0 : d,
        y = m.fixedCacheKey,
        x = t.endpoints[w],
        S = x.select,
        k = x.initiate,
        E = i(),
        R = V.useState(),
        P = R[0],
        A = R[1];
      V.useEffect(
        function () {
          return function () {
            (P != null && P.arg.fixedCacheKey) || P == null || P.reset();
          };
        },
        [P]
      );
      var N = V.useCallback(
          function (H) {
            var W = E(k(H, { fixedCacheKey: y }));
            return A(W), W;
          },
          [E, k, y]
        ),
        _ = (P || {}).requestId,
        M = V.useMemo(
          function () {
            return $r(
              [
                S({
                  fixedCacheKey: y,
                  requestId: P == null ? void 0 : P.requestId,
                }),
              ],
              f
            );
          },
          [S, P, f, y]
        ),
        b = u(M, Cu),
        q = y == null ? (P == null ? void 0 : P.arg.originalArgs) : void 0,
        B = V.useCallback(
          function () {
            r(function () {
              P && A(void 0),
                y &&
                  E(
                    t.internalActions.removeMutationResult({
                      requestId: _,
                      fixedCacheKey: y,
                    })
                  );
            });
          },
          [E, y, P, _]
        ),
        j = b.endpointName,
        T = b.data,
        C = b.status,
        D = b.isLoading,
        I = b.isSuccess,
        $ = b.isError,
        F = b.error;
      V.useDebugValue({
        endpointName: j,
        data: T,
        status: C,
        isLoading: D,
        isSuccess: I,
        isError: $,
        error: F,
      });
      var U = V.useMemo(
        function () {
          return Zi(Rt({}, b), { originalArgs: q, reset: B });
        },
        [b, q, B]
      );
      return V.useMemo(
        function () {
          return [N, U];
        },
        [N, U]
      );
    };
  }
}
var bu;
(function (e) {
  (e.query = "query"), (e.mutation = "mutation");
})(bu || (bu = {}));
function L0(e) {
  return e.type === bu.query;
}
function I0(e) {
  return e.type === bu.mutation;
}
function cl(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function $i(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, P0([e], t));
}
var b0 = Symbol(),
  z0 = function (e) {
    var t = e === void 0 ? {} : e,
      n = t.batch,
      r = n === void 0 ? ls.unstable_batchedUpdates : n,
      i = t.useDispatch,
      u = i === void 0 ? ps : i,
      o = t.useSelector,
      l = o === void 0 ? ii : o,
      a = t.useStore,
      s = a === void 0 ? Bp : a,
      c = t.unstable__sideEffectsInRender,
      h = c === void 0 ? !1 : c;
    return {
      name: b0,
      init: function (v, p, g) {
        var w = p.serializeQueryArgs,
          O = v,
          m = M0({
            api: v,
            moduleOptions: {
              batch: r,
              useDispatch: u,
              useSelector: l,
              useStore: s,
              unstable__sideEffectsInRender: h,
            },
            serializeQueryArgs: w,
            context: g,
          }),
          d = m.buildQueryHooks,
          f = m.buildMutationHook,
          y = m.usePrefetch;
        return (
          $i(O, { usePrefetch: y }),
          $i(g, { batch: r }),
          {
            injectEndpoint: function (x, S) {
              if (L0(S)) {
                var k = d(x),
                  E = k.useQuery,
                  R = k.useLazyQuery,
                  P = k.useLazyQuerySubscription,
                  A = k.useQueryState,
                  N = k.useQuerySubscription;
                $i(O.endpoints[x], {
                  useQuery: E,
                  useLazyQuery: R,
                  useLazyQuerySubscription: P,
                  useQueryState: A,
                  useQuerySubscription: N,
                }),
                  (v["use" + cl(x) + "Query"] = E),
                  (v["useLazy" + cl(x) + "Query"] = R);
              } else if (I0(S)) {
                var _ = f(x);
                $i(O.endpoints[x], { useMutation: _ }),
                  (v["use" + cl(x) + "Mutation"] = _);
              }
            },
          }
        );
      },
    };
  },
  D0 = s0(k0(), z0());
const $0 = {
    VITE_APP_NAME: "USER_DASHBOARD",
    VITE_APP_BACKEND_BASE_URL: "https://user-list-test-server-node.vercel.app",
    VITE_APP_MODE: "staging",
    BASE_URL: "/",
    MODE: "staging",
    DEV: !1,
    PROD: !0,
    SSR: !1,
  },
  eu = D0({
    reducerPath: "userDataApi",
    baseQuery: n0({ baseUrl: $0.VITE_APP_BACKEND_BASE_URL }),
    endpoints: (e) => ({
      getUserData: e.query({ query: (t) => `/users/p?limit=10&page=${t}` }),
    }),
  }),
  { useGetUserDataQuery: F0 } = eu;
var gv = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r(V);
  })(Sv, (n) =>
    (() => {
      var r = {
          703: (l, a, s) => {
            var c = s(414);
            function h() {}
            function v() {}
            (v.resetWarningCache = h),
              (l.exports = function () {
                function p(O, m, d, f, y, x) {
                  if (x !== c) {
                    var S = new Error(
                      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                    );
                    throw ((S.name = "Invariant Violation"), S);
                  }
                }
                function g() {
                  return p;
                }
                p.isRequired = p;
                var w = {
                  array: p,
                  bigint: p,
                  bool: p,
                  func: p,
                  number: p,
                  object: p,
                  string: p,
                  symbol: p,
                  any: p,
                  arrayOf: g,
                  element: p,
                  elementType: p,
                  instanceOf: g,
                  node: p,
                  objectOf: g,
                  oneOf: g,
                  oneOfType: g,
                  shape: g,
                  exact: g,
                  checkPropTypes: v,
                  resetWarningCache: h,
                };
                return (w.PropTypes = w), w;
              });
          },
          697: (l, a, s) => {
            l.exports = s(703)();
          },
          414: (l) => {
            l.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          },
          98: (l) => {
            l.exports = n;
          },
        },
        i = {};
      function u(l) {
        var a = i[l];
        if (a !== void 0) return a.exports;
        var s = (i[l] = { exports: {} });
        return r[l](s, s.exports, u), s.exports;
      }
      (u.n = (l) => {
        var a = l && l.__esModule ? () => l.default : () => l;
        return u.d(a, { a }), a;
      }),
        (u.d = (l, a) => {
          for (var s in a)
            u.o(a, s) &&
              !u.o(l, s) &&
              Object.defineProperty(l, s, { enumerable: !0, get: a[s] });
        }),
        (u.o = (l, a) => Object.prototype.hasOwnProperty.call(l, a)),
        (u.r = (l) => {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(l, "__esModule", { value: !0 });
        });
      var o = {};
      return (
        (() => {
          u.r(o), u.d(o, { default: () => A });
          var l = u(98),
            a = u.n(l),
            s = u(697),
            c = u.n(s);
          function h() {
            return (
              (h = Object.assign
                ? Object.assign.bind()
                : function (N) {
                    for (var _ = 1; _ < arguments.length; _++) {
                      var M = arguments[_];
                      for (var b in M)
                        Object.prototype.hasOwnProperty.call(M, b) &&
                          (N[b] = M[b]);
                    }
                    return N;
                  }),
              h.apply(this, arguments)
            );
          }
          var v = function (N) {
            var _ = N.pageClassName,
              M = N.pageLinkClassName,
              b = N.page,
              q = N.selected,
              B = N.activeClassName,
              j = N.activeLinkClassName,
              T = N.getEventListener,
              C = N.pageSelectedHandler,
              D = N.href,
              I = N.extraAriaContext,
              $ = N.pageLabelBuilder,
              F = N.rel,
              U = N.ariaLabel || "Page " + b + (I ? " " + I : ""),
              H = null;
            return (
              q &&
                ((H = "page"),
                (U = N.ariaLabel || "Page " + b + " is your current page"),
                (_ = _ !== void 0 ? _ + " " + B : B),
                M !== void 0 ? j !== void 0 && (M = M + " " + j) : (M = j)),
              a().createElement(
                "li",
                { className: _ },
                a().createElement(
                  "a",
                  h(
                    {
                      rel: F,
                      role: D ? void 0 : "button",
                      className: M,
                      href: D,
                      tabIndex: q ? "-1" : "0",
                      "aria-label": U,
                      "aria-current": H,
                      onKeyPress: C,
                    },
                    T(C)
                  ),
                  $(b)
                )
              )
            );
          };
          v.propTypes = {
            pageSelectedHandler: c().func.isRequired,
            selected: c().bool.isRequired,
            pageClassName: c().string,
            pageLinkClassName: c().string,
            activeClassName: c().string,
            activeLinkClassName: c().string,
            extraAriaContext: c().string,
            href: c().string,
            ariaLabel: c().string,
            page: c().number.isRequired,
            getEventListener: c().func.isRequired,
            pageLabelBuilder: c().func.isRequired,
            rel: c().string,
          };
          const p = v;
          function g() {
            return (
              (g = Object.assign
                ? Object.assign.bind()
                : function (N) {
                    for (var _ = 1; _ < arguments.length; _++) {
                      var M = arguments[_];
                      for (var b in M)
                        Object.prototype.hasOwnProperty.call(M, b) &&
                          (N[b] = M[b]);
                    }
                    return N;
                  }),
              g.apply(this, arguments)
            );
          }
          var w = function (N) {
            var _ = N.breakLabel,
              M = N.breakAriaLabel,
              b = N.breakClassName,
              q = N.breakLinkClassName,
              B = N.breakHandler,
              j = N.getEventListener,
              T = b || "break";
            return a().createElement(
              "li",
              { className: T },
              a().createElement(
                "a",
                g(
                  {
                    className: q,
                    role: "button",
                    tabIndex: "0",
                    "aria-label": M,
                    onKeyPress: B,
                  },
                  j(B)
                ),
                _
              )
            );
          };
          w.propTypes = {
            breakLabel: c().oneOfType([c().string, c().node]),
            breakAriaLabel: c().string,
            breakClassName: c().string,
            breakLinkClassName: c().string,
            breakHandler: c().func.isRequired,
            getEventListener: c().func.isRequired,
          };
          const O = w;
          function m(N) {
            var _ =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : "";
            return N ?? _;
          }
          function d(N) {
            return (
              (d =
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? function (_) {
                      return typeof _;
                    }
                  : function (_) {
                      return _ &&
                        typeof Symbol == "function" &&
                        _.constructor === Symbol &&
                        _ !== Symbol.prototype
                        ? "symbol"
                        : typeof _;
                    }),
              d(N)
            );
          }
          function f() {
            return (
              (f = Object.assign
                ? Object.assign.bind()
                : function (N) {
                    for (var _ = 1; _ < arguments.length; _++) {
                      var M = arguments[_];
                      for (var b in M)
                        Object.prototype.hasOwnProperty.call(M, b) &&
                          (N[b] = M[b]);
                    }
                    return N;
                  }),
              f.apply(this, arguments)
            );
          }
          function y(N, _) {
            for (var M = 0; M < _.length; M++) {
              var b = _[M];
              (b.enumerable = b.enumerable || !1),
                (b.configurable = !0),
                "value" in b && (b.writable = !0),
                Object.defineProperty(N, b.key, b);
            }
          }
          function x(N, _) {
            return (
              (x = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (M, b) {
                    return (M.__proto__ = b), M;
                  }),
              x(N, _)
            );
          }
          function S(N, _) {
            if (_ && (d(_) === "object" || typeof _ == "function")) return _;
            if (_ !== void 0)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return k(N);
          }
          function k(N) {
            if (N === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return N;
          }
          function E(N) {
            return (
              (E = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (_) {
                    return _.__proto__ || Object.getPrototypeOf(_);
                  }),
              E(N)
            );
          }
          function R(N, _, M) {
            return (
              _ in N
                ? Object.defineProperty(N, _, {
                    value: M,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (N[_] = M),
              N
            );
          }
          var P = (function (N) {
            (function (T, C) {
              if (typeof C != "function" && C !== null)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (T.prototype = Object.create(C && C.prototype, {
                constructor: { value: T, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(T, "prototype", { writable: !1 }),
                C && x(T, C);
            })(j, N);
            var _,
              M,
              b,
              q,
              B =
                ((b = j),
                (q = (function () {
                  if (
                    typeof Reflect > "u" ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if (typeof Proxy == "function") return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    );
                  } catch {
                    return !1;
                  }
                })()),
                function () {
                  var T,
                    C = E(b);
                  if (q) {
                    var D = E(this).constructor;
                    T = Reflect.construct(C, arguments, D);
                  } else T = C.apply(this, arguments);
                  return S(this, T);
                });
            function j(T) {
              var C, D;
              return (
                (function (I, $) {
                  if (!(I instanceof $))
                    throw new TypeError("Cannot call a class as a function");
                })(this, j),
                R(k((C = B.call(this, T))), "handlePreviousPage", function (I) {
                  var $ = C.state.selected;
                  C.handleClick(I, null, $ > 0 ? $ - 1 : void 0, {
                    isPrevious: !0,
                  });
                }),
                R(k(C), "handleNextPage", function (I) {
                  var $ = C.state.selected,
                    F = C.props.pageCount;
                  C.handleClick(I, null, $ < F - 1 ? $ + 1 : void 0, {
                    isNext: !0,
                  });
                }),
                R(k(C), "handlePageSelected", function (I, $) {
                  if (C.state.selected === I)
                    return (
                      C.callActiveCallback(I),
                      void C.handleClick($, null, void 0, { isActive: !0 })
                    );
                  C.handleClick($, null, I);
                }),
                R(k(C), "handlePageChange", function (I) {
                  C.state.selected !== I &&
                    (C.setState({ selected: I }), C.callCallback(I));
                }),
                R(k(C), "getEventListener", function (I) {
                  return R({}, C.props.eventListener, I);
                }),
                R(k(C), "handleClick", function (I, $, F) {
                  var U =
                      arguments.length > 3 && arguments[3] !== void 0
                        ? arguments[3]
                        : {},
                    H = U.isPrevious,
                    W = H !== void 0 && H,
                    Ce = U.isNext,
                    We = Ce !== void 0 && Ce,
                    he = U.isBreak,
                    fe = he !== void 0 && he,
                    K = U.isActive,
                    Oe = K !== void 0 && K;
                  I.preventDefault ? I.preventDefault() : (I.returnValue = !1);
                  var nt = C.state.selected,
                    ie = C.props.onClick,
                    Ae = F;
                  if (ie) {
                    var xe = ie({
                      index: $,
                      selected: nt,
                      nextSelectedPage: F,
                      event: I,
                      isPrevious: W,
                      isNext: We,
                      isBreak: fe,
                      isActive: Oe,
                    });
                    if (xe === !1) return;
                    Number.isInteger(xe) && (Ae = xe);
                  }
                  Ae !== void 0 && C.handlePageChange(Ae);
                }),
                R(k(C), "handleBreakClick", function (I, $) {
                  var F = C.state.selected;
                  C.handleClick(
                    $,
                    I,
                    F < I ? C.getForwardJump() : C.getBackwardJump(),
                    { isBreak: !0 }
                  );
                }),
                R(k(C), "callCallback", function (I) {
                  C.props.onPageChange !== void 0 &&
                    typeof C.props.onPageChange == "function" &&
                    C.props.onPageChange({ selected: I });
                }),
                R(k(C), "callActiveCallback", function (I) {
                  C.props.onPageActive !== void 0 &&
                    typeof C.props.onPageActive == "function" &&
                    C.props.onPageActive({ selected: I });
                }),
                R(k(C), "getElementPageRel", function (I) {
                  var $ = C.state.selected,
                    F = C.props,
                    U = F.nextPageRel,
                    H = F.prevPageRel,
                    W = F.selectedPageRel;
                  return $ - 1 === I
                    ? H
                    : $ === I
                    ? W
                    : $ + 1 === I
                    ? U
                    : void 0;
                }),
                R(k(C), "pagination", function () {
                  var I = [],
                    $ = C.props,
                    F = $.pageRangeDisplayed,
                    U = $.pageCount,
                    H = $.marginPagesDisplayed,
                    W = $.breakLabel,
                    Ce = $.breakClassName,
                    We = $.breakLinkClassName,
                    he = $.breakAriaLabels,
                    fe = C.state.selected;
                  if (U <= F)
                    for (var K = 0; K < U; K++) I.push(C.getPageElement(K));
                  else {
                    var Oe = F / 2,
                      nt = F - Oe;
                    fe > U - F / 2
                      ? (Oe = F - (nt = U - fe))
                      : fe < F / 2 && (nt = F - (Oe = fe));
                    var ie,
                      Ae,
                      xe = function (ye) {
                        return C.getPageElement(ye);
                      },
                      le = [];
                    for (ie = 0; ie < U; ie++) {
                      var Ft = ie + 1;
                      if (Ft <= H)
                        le.push({ type: "page", index: ie, display: xe(ie) });
                      else if (Ft > U - H)
                        le.push({ type: "page", index: ie, display: xe(ie) });
                      else if (
                        ie >= fe - Oe &&
                        ie <= fe + (fe === 0 && F > 1 ? nt - 1 : nt)
                      )
                        le.push({ type: "page", index: ie, display: xe(ie) });
                      else if (
                        W &&
                        le.length > 0 &&
                        le[le.length - 1].display !== Ae &&
                        (F > 0 || H > 0)
                      ) {
                        var Ln = ie < fe ? he.backward : he.forward;
                        (Ae = a().createElement(O, {
                          key: ie,
                          breakAriaLabel: Ln,
                          breakLabel: W,
                          breakClassName: Ce,
                          breakLinkClassName: We,
                          breakHandler: C.handleBreakClick.bind(null, ie),
                          getEventListener: C.getEventListener,
                        })),
                          le.push({ type: "break", index: ie, display: Ae });
                      }
                    }
                    le.forEach(function (ye, ge) {
                      var gi = ye;
                      ye.type === "break" &&
                        le[ge - 1] &&
                        le[ge - 1].type === "page" &&
                        le[ge + 1] &&
                        le[ge + 1].type === "page" &&
                        le[ge + 1].index - le[ge - 1].index <= 2 &&
                        (gi = {
                          type: "page",
                          index: ye.index,
                          display: xe(ye.index),
                        }),
                        I.push(gi.display);
                    });
                  }
                  return I;
                }),
                T.initialPage !== void 0 &&
                  T.forcePage !== void 0 &&
                  console.warn(
                    "(react-paginate): Both initialPage ("
                      .concat(T.initialPage, ") and forcePage (")
                      .concat(
                        T.forcePage,
                        ") props are provided, which is discouraged."
                      ) +
                      ` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`
                  ),
                (D = T.initialPage
                  ? T.initialPage
                  : T.forcePage
                  ? T.forcePage
                  : 0),
                (C.state = { selected: D }),
                C
              );
            }
            return (
              (_ = j),
              (M = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var T = this.props,
                      C = T.initialPage,
                      D = T.disableInitialCallback,
                      I = T.extraAriaContext,
                      $ = T.pageCount,
                      F = T.forcePage;
                    C === void 0 || D || this.callCallback(C),
                      I &&
                        console.warn(
                          "DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."
                        ),
                      Number.isInteger($) ||
                        console.warn(
                          "(react-paginate): The pageCount prop value provided is not an integer (".concat(
                            $,
                            "). Did you forget a Math.ceil()?"
                          )
                        ),
                      C !== void 0 &&
                        C > $ - 1 &&
                        console.warn(
                          "(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop ("
                            .concat(C, " > ")
                            .concat($ - 1, ").")
                        ),
                      F !== void 0 &&
                        F > $ - 1 &&
                        console.warn(
                          "(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ("
                            .concat(F, " > ")
                            .concat($ - 1, ").")
                        );
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (T) {
                    this.props.forcePage !== void 0 &&
                      this.props.forcePage !== T.forcePage &&
                      (this.props.forcePage > this.props.pageCount - 1 &&
                        console.warn(
                          "(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ("
                            .concat(this.props.forcePage, " > ")
                            .concat(this.props.pageCount - 1, ").")
                        ),
                      this.setState({ selected: this.props.forcePage })),
                      Number.isInteger(T.pageCount) &&
                        !Number.isInteger(this.props.pageCount) &&
                        console.warn(
                          "(react-paginate): The pageCount prop value provided is not an integer (".concat(
                            this.props.pageCount,
                            "). Did you forget a Math.ceil()?"
                          )
                        );
                  },
                },
                {
                  key: "getForwardJump",
                  value: function () {
                    var T = this.state.selected,
                      C = this.props,
                      D = C.pageCount,
                      I = T + C.pageRangeDisplayed;
                    return I >= D ? D - 1 : I;
                  },
                },
                {
                  key: "getBackwardJump",
                  value: function () {
                    var T = this.state.selected - this.props.pageRangeDisplayed;
                    return T < 0 ? 0 : T;
                  },
                },
                {
                  key: "getElementHref",
                  value: function (T) {
                    var C = this.props,
                      D = C.hrefBuilder,
                      I = C.pageCount,
                      $ = C.hrefAllControls;
                    if (D)
                      return $ || (T >= 0 && T < I)
                        ? D(T + 1, I, this.state.selected)
                        : void 0;
                  },
                },
                {
                  key: "ariaLabelBuilder",
                  value: function (T) {
                    var C = T === this.state.selected;
                    if (
                      this.props.ariaLabelBuilder &&
                      T >= 0 &&
                      T < this.props.pageCount
                    ) {
                      var D = this.props.ariaLabelBuilder(T + 1, C);
                      return (
                        this.props.extraAriaContext &&
                          !C &&
                          (D = D + " " + this.props.extraAriaContext),
                        D
                      );
                    }
                  },
                },
                {
                  key: "getPageElement",
                  value: function (T) {
                    var C = this.state.selected,
                      D = this.props,
                      I = D.pageClassName,
                      $ = D.pageLinkClassName,
                      F = D.activeClassName,
                      U = D.activeLinkClassName,
                      H = D.extraAriaContext,
                      W = D.pageLabelBuilder;
                    return a().createElement(p, {
                      key: T,
                      pageSelectedHandler: this.handlePageSelected.bind(
                        null,
                        T
                      ),
                      selected: C === T,
                      rel: this.getElementPageRel(T),
                      pageClassName: I,
                      pageLinkClassName: $,
                      activeClassName: F,
                      activeLinkClassName: U,
                      extraAriaContext: H,
                      href: this.getElementHref(T),
                      ariaLabel: this.ariaLabelBuilder(T),
                      page: T + 1,
                      pageLabelBuilder: W,
                      getEventListener: this.getEventListener,
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var T = this.props.renderOnZeroPageCount;
                    if (this.props.pageCount === 0 && T !== void 0)
                      return T && T(this.props);
                    var C = this.props,
                      D = C.disabledClassName,
                      I = C.disabledLinkClassName,
                      $ = C.pageCount,
                      F = C.className,
                      U = C.containerClassName,
                      H = C.previousLabel,
                      W = C.previousClassName,
                      Ce = C.previousLinkClassName,
                      We = C.previousAriaLabel,
                      he = C.prevRel,
                      fe = C.nextLabel,
                      K = C.nextClassName,
                      Oe = C.nextLinkClassName,
                      nt = C.nextAriaLabel,
                      ie = C.nextRel,
                      Ae = this.state.selected,
                      xe = Ae === 0,
                      le = Ae === $ - 1,
                      Ft = "".concat(m(W)).concat(xe ? " ".concat(m(D)) : ""),
                      Ln = "".concat(m(K)).concat(le ? " ".concat(m(D)) : ""),
                      ye = "".concat(m(Ce)).concat(xe ? " ".concat(m(I)) : ""),
                      ge = "".concat(m(Oe)).concat(le ? " ".concat(m(I)) : ""),
                      gi = xe ? "true" : "false",
                      wv = le ? "true" : "false";
                    return a().createElement(
                      "ul",
                      {
                        className: F || U,
                        role: "navigation",
                        "aria-label": "Pagination",
                      },
                      a().createElement(
                        "li",
                        { className: Ft },
                        a().createElement(
                          "a",
                          f(
                            {
                              className: ye,
                              href: this.getElementHref(Ae - 1),
                              tabIndex: xe ? "-1" : "0",
                              role: "button",
                              onKeyPress: this.handlePreviousPage,
                              "aria-disabled": gi,
                              "aria-label": We,
                              rel: he,
                            },
                            this.getEventListener(this.handlePreviousPage)
                          ),
                          H
                        )
                      ),
                      this.pagination(),
                      a().createElement(
                        "li",
                        { className: Ln },
                        a().createElement(
                          "a",
                          f(
                            {
                              className: ge,
                              href: this.getElementHref(Ae + 1),
                              tabIndex: le ? "-1" : "0",
                              role: "button",
                              onKeyPress: this.handleNextPage,
                              "aria-disabled": wv,
                              "aria-label": nt,
                              rel: ie,
                            },
                            this.getEventListener(this.handleNextPage)
                          ),
                          fe
                        )
                      )
                    );
                  },
                },
              ]) && y(_.prototype, M),
              Object.defineProperty(_, "prototype", { writable: !1 }),
              j
            );
          })(l.Component);
          R(P, "propTypes", {
            pageCount: c().number.isRequired,
            pageRangeDisplayed: c().number,
            marginPagesDisplayed: c().number,
            previousLabel: c().node,
            previousAriaLabel: c().string,
            prevPageRel: c().string,
            prevRel: c().string,
            nextLabel: c().node,
            nextAriaLabel: c().string,
            nextPageRel: c().string,
            nextRel: c().string,
            breakLabel: c().oneOfType([c().string, c().node]),
            breakAriaLabels: c().shape({
              forward: c().string,
              backward: c().string,
            }),
            hrefBuilder: c().func,
            hrefAllControls: c().bool,
            onPageChange: c().func,
            onPageActive: c().func,
            onClick: c().func,
            initialPage: c().number,
            forcePage: c().number,
            disableInitialCallback: c().bool,
            containerClassName: c().string,
            className: c().string,
            pageClassName: c().string,
            pageLinkClassName: c().string,
            pageLabelBuilder: c().func,
            activeClassName: c().string,
            activeLinkClassName: c().string,
            previousClassName: c().string,
            nextClassName: c().string,
            previousLinkClassName: c().string,
            nextLinkClassName: c().string,
            disabledClassName: c().string,
            disabledLinkClassName: c().string,
            breakClassName: c().string,
            breakLinkClassName: c().string,
            extraAriaContext: c().string,
            ariaLabelBuilder: c().func,
            eventListener: c().string,
            renderOnZeroPageCount: c().func,
            selectedPageRel: c().string,
          }),
            R(P, "defaultProps", {
              pageRangeDisplayed: 2,
              marginPagesDisplayed: 3,
              activeClassName: "selected",
              previousLabel: "Previous",
              previousClassName: "previous",
              previousAriaLabel: "Previous page",
              prevPageRel: "prev",
              prevRel: "prev",
              nextLabel: "Next",
              nextClassName: "next",
              nextAriaLabel: "Next page",
              nextPageRel: "next",
              nextRel: "next",
              breakLabel: "...",
              breakAriaLabels: {
                forward: "Jump forward",
                backward: "Jump backward",
              },
              disabledClassName: "disabled",
              disableInitialCallback: !1,
              pageLabelBuilder: function (N) {
                return N;
              },
              eventListener: "onClick",
              renderOnZeroPageCount: void 0,
              selectedPageRel: "canonical",
              hrefAllControls: !1,
            });
          const A = P;
        })(),
        o
      );
    })()
  );
})(gv);
var Q0 = gv.exports;
const U0 = gf(Q0);
function q0() {
  const [e, t] = V.useState(0),
    { data: n, isLoading: r } = F0(e),
    i = ii(xs),
    u = ps();
  let o = (n == null ? void 0 : n.totalPages) ?? 0;
  return L.jsx("div", {
    className: `${
      i ? "bg-gray-500" : "bg-indigo-300"
    } container-lg border min-h-screen justify-center items-center flex py-5 relative flex-row`,
    children: L.jsxs("div", {
      className:
        " w-[90%]  bg-[#ffff]/30 backdrop-blur-md rounded-[20px] shadow-lg",
      children: [
        L.jsx("button", {
          className:
            "absolute  top-[8px] right-[8px] text-[1rem] rounded-full p-2 z-10 bg-[white]/30 border border-1",
          onClick: () => u(bg()),
          children: i ? L.jsx(Ug, {}) : L.jsx(qg, {}),
        }),
        L.jsx("div", {
          className:
            "flex lg:justify-evenly py-4 px-4 items-center w-auto h-auto",
          children: r
            ? L.jsx(Qg, {})
            : L.jsxs(L.Fragment, {
                children: [
                  " ",
                  L.jsx(Lg, { users: n == null ? void 0 : n.users }),
                  L.jsx($g, {}),
                ],
              }),
        }),
        L.jsx("div", {
          className: "my-3",
          children: L.jsx(U0, {
            previousLabel: "Previous",
            nextLabel: "Next",
            breakLabel: "...",
            pageCount: o,
            className: "flex gap-3 items-center justify-center",
            pageRangeDisplayed: 3,
            marginPagesDisplayed: 2,
            onPageChange: (l) => t(l.selected),
            activeClassName: `${i ? "bg-white text-black" : "bg-indigo-500"}`,
            pageClassName: `border ${
              i ? "border-white" : "border-indigo-500"
            } w-10 h-10 rounded-[5px] justify-center items-center flex`,
            previousClassName: `border w-30 ${
              i ? " border-black" : "border-indigo-500"
            } p-2 rounded-[5px] lg:mr-40`,
            nextClassName: `border w-30 ${
              i ? "border-black" : "border-indigo-500"
            } p-2 rounded-[5px] lg:ms-40`,
          }),
        }),
      ],
    }),
  });
}
const V0 = { message: "", users: [], totalPages: 0, currentPage: 1 },
  B0 = _t({ name: "users", initialState: V0, reducers: {} }),
  H0 = B0.reducer,
  W0 = {
    VITE_APP_NAME: "USER_DASHBOARD",
    VITE_APP_BACKEND_BASE_URL: "https://user-list-test-server-node.vercel.app",
    VITE_APP_MODE: "staging",
    BASE_URL: "/",
    MODE: "staging",
    DEV: !1,
    PROD: !0,
    SSR: !1,
  },
  K0 = wg({
    reducer: {
      users: H0,
      theme: zg,
      userCard: Mg,
      [eu.reducerPath]: eu.reducer,
    },
    devTools: W0.VITE_APP_MODE === "development",
    middleware: (e) => e().concat(eu.middleware),
  });
fl.createRoot(document.getElementById("root")).render(
  L.jsx(Mt.StrictMode, {
    children: L.jsx(Ay, { store: K0, children: L.jsx(q0, {}) }),
  })
);
