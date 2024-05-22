function Sc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ec = { exports: {} },
  To = {},
  Cc = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pl = Symbol.for("react.element"),
  vp = Symbol.for("react.portal"),
  gp = Symbol.for("react.fragment"),
  yp = Symbol.for("react.strict_mode"),
  wp = Symbol.for("react.profiler"),
  xp = Symbol.for("react.provider"),
  Sp = Symbol.for("react.context"),
  kp = Symbol.for("react.forward_ref"),
  Ep = Symbol.for("react.suspense"),
  Cp = Symbol.for("react.memo"),
  Pp = Symbol.for("react.lazy"),
  Qu = Symbol.iterator;
function _p(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qu && e[Qu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _c = Object.assign,
  Nc = {};
function pr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nc),
    (this.updater = n || Pc);
}
pr.prototype.isReactComponent = {};
pr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
pr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Lc() {}
Lc.prototype = pr.prototype;
function La(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nc),
    (this.updater = n || Pc);
}
var Ra = (La.prototype = new Lc());
Ra.constructor = La;
_c(Ra, pr.prototype);
Ra.isPureReactComponent = !0;
var Ku = Array.isArray,
  Rc = Object.prototype.hasOwnProperty,
  ja = { current: null },
  jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Rc.call(t, r) && !jc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: pl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ja.current,
  };
}
function Np(e, t) {
  return {
    $$typeof: pl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ta(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pl;
}
function Lp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Yu = /\/+/g;
function bo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Lp("" + e.key)
    : t.toString(36);
}
function Ql(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case pl:
          case vp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + bo(i, 0) : r),
      Ku(l)
        ? ((n = ""),
          e != null && (n = e.replace(Yu, "$&/") + "/"),
          Ql(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (Ta(l) &&
            (l = Np(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Yu, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ku(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + bo(o, a);
      i += Ql(o, t, n, u, l);
    }
  else if (((u = _p(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + bo(o, a++)), (i += Ql(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return i;
}
function Nl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ql(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Rp(e) {
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
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Fe = { current: null },
  Kl = { transition: null },
  jp = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: Kl,
    ReactCurrentOwner: ja,
  };
function Dc() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = {
  map: Nl,
  forEach: function (e, t, n) {
    Nl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Nl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Nl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ta(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
K.Component = pr;
K.Fragment = gp;
K.Profiler = wp;
K.PureComponent = La;
K.StrictMode = yp;
K.Suspense = Ep;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jp;
K.act = Dc;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = _c({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ja.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Rc.call(t, u) &&
        !jc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: pl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xp, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = Tc;
K.createFactory = function (e) {
  var t = Tc.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: kp, render: e };
};
K.isValidElement = Ta;
K.lazy = function (e) {
  return { $$typeof: Pp, _payload: { _status: -1, _result: e }, _init: Rp };
};
K.memo = function (e, t) {
  return { $$typeof: Cp, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = Kl.transition;
  Kl.transition = {};
  try {
    e();
  } finally {
    Kl.transition = t;
  }
};
K.unstable_act = Dc;
K.useCallback = function (e, t) {
  return Fe.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Fe.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Fe.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Fe.current.useEffect(e, t);
};
K.useId = function () {
  return Fe.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Fe.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Fe.current.useRef(e);
};
K.useState = function (e) {
  return Fe.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Fe.current.useTransition();
};
K.version = "18.3.1";
Cc.exports = K;
var P = Cc.exports;
const Mc = kc(P),
  Tp = Sc({ __proto__: null, default: Mc }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dp = P,
  Mp = Symbol.for("react.element"),
  zp = Symbol.for("react.fragment"),
  Fp = Object.prototype.hasOwnProperty,
  Op = Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ip = { key: !0, ref: !0, __self: !0, __source: !0 };
function zc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Fp.call(t, r) && !Ip.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Mp,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Op.current,
  };
}
To.Fragment = zp;
To.jsx = zc;
To.jsxs = zc;
Ec.exports = To;
var y = Ec.exports,
  ji = {},
  Fc = { exports: {} },
  Xe = {},
  Oc = { exports: {} },
  Ic = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, A) {
    var $ = L.length;
    L.push(A);
    e: for (; 0 < $; ) {
      var J = ($ - 1) >>> 1,
        q = L[J];
      if (0 < l(q, A)) (L[J] = A), (L[$] = q), ($ = J);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var A = L[0],
      $ = L.pop();
    if ($ !== A) {
      L[0] = $;
      e: for (var J = 0, q = L.length, ut = q >>> 1; J < ut; ) {
        var Ve = 2 * (J + 1) - 1,
          He = L[Ve],
          Te = Ve + 1,
          Je = L[Te];
        if (0 > l(He, $))
          Te < q && 0 > l(Je, He)
            ? ((L[J] = Je), (L[Te] = $), (J = Te))
            : ((L[J] = He), (L[Ve] = $), (J = Ve));
        else if (Te < q && 0 > l(Je, $)) (L[J] = Je), (L[Te] = $), (J = Te);
        else break e;
      }
    }
    return A;
  }
  function l(L, A) {
    var $ = L.sortIndex - A.sortIndex;
    return $ !== 0 ? $ : L.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    s = [],
    f = 1,
    d = null,
    p = 3,
    k = !1,
    S = !1,
    w = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(L) {
    for (var A = n(s); A !== null; ) {
      if (A.callback === null) r(s);
      else if (A.startTime <= L)
        r(s), (A.sortIndex = A.expirationTime), t(u, A);
      else break;
      A = n(s);
    }
  }
  function E(L) {
    if (((w = !1), m(L), !S))
      if (n(u) !== null) (S = !0), Ut(R);
      else {
        var A = n(s);
        A !== null && At(E, A.startTime - L);
      }
  }
  function R(L, A) {
    (S = !1), w && ((w = !1), h(T), (T = -1)), (k = !0);
    var $ = p;
    try {
      for (
        m(A), d = n(u);
        d !== null && (!(d.expirationTime > A) || (L && !Y()));

      ) {
        var J = d.callback;
        if (typeof J == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var q = J(d.expirationTime <= A);
          (A = e.unstable_now()),
            typeof q == "function" ? (d.callback = q) : d === n(u) && r(u),
            m(A);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var ut = !0;
      else {
        var Ve = n(s);
        Ve !== null && At(E, Ve.startTime - A), (ut = !1);
      }
      return ut;
    } finally {
      (d = null), (p = $), (k = !1);
    }
  }
  var D = !1,
    v = null,
    T = -1,
    I = 5,
    M = -1;
  function Y() {
    return !(e.unstable_now() - M < I);
  }
  function fe() {
    if (v !== null) {
      var L = e.unstable_now();
      M = L;
      var A = !0;
      try {
        A = v(!0, L);
      } finally {
        A ? ie() : ((D = !1), (v = null));
      }
    } else D = !1;
  }
  var ie;
  if (typeof c == "function")
    ie = function () {
      c(fe);
    };
  else if (typeof MessageChannel < "u") {
    var xe = new MessageChannel(),
      at = xe.port2;
    (xe.port1.onmessage = fe),
      (ie = function () {
        at.postMessage(null);
      });
  } else
    ie = function () {
      j(fe, 0);
    };
  function Ut(L) {
    (v = L), D || ((D = !0), ie());
  }
  function At(L, A) {
    T = j(function () {
      L(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || k || ((S = !0), Ut(R));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (I = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (L) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = p;
      }
      var $ = p;
      p = A;
      try {
        return L();
      } finally {
        p = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, A) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var $ = p;
      p = L;
      try {
        return A();
      } finally {
        p = $;
      }
    }),
    (e.unstable_scheduleCallback = function (L, A, $) {
      var J = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? J + $ : J))
          : ($ = J),
        L)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = $ + q),
        (L = {
          id: f++,
          callback: A,
          priorityLevel: L,
          startTime: $,
          expirationTime: q,
          sortIndex: -1,
        }),
        $ > J
          ? ((L.sortIndex = $),
            t(s, L),
            n(u) === null &&
              L === n(s) &&
              (w ? (h(T), (T = -1)) : (w = !0), At(E, $ - J)))
          : ((L.sortIndex = q), t(u, L), S || k || ((S = !0), Ut(R))),
        L
      );
    }),
    (e.unstable_shouldYield = Y),
    (e.unstable_wrapCallback = function (L) {
      var A = p;
      return function () {
        var $ = p;
        p = A;
        try {
          return L.apply(this, arguments);
        } finally {
          p = $;
        }
      };
    });
})(Ic);
Oc.exports = Ic;
var Up = Oc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ap = P,
  Ge = Up;
function _(e) {
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
var Uc = new Set(),
  Gr = {};
function jn(e, t) {
  lr(e, t), lr(e + "Capture", t);
}
function lr(e, t) {
  for (Gr[e] = t, e = 0; e < t.length; e++) Uc.add(t[e]);
}
var Dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ti = Object.prototype.hasOwnProperty,
  Bp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Gu = {},
  Xu = {};
function $p(e) {
  return Ti.call(Xu, e)
    ? !0
    : Ti.call(Gu, e)
      ? !1
      : Bp.test(e)
        ? (Xu[e] = !0)
        : ((Gu[e] = !0), !1);
}
function Vp(e, t, n, r) {
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
function Hp(e, t, n, r) {
  if (t === null || typeof t > "u" || Vp(e, t, n, r)) return !0;
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
function Oe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Oe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  _e[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  _e[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  _e[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  _e[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  _e[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  _e[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  _e[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Da = /[\-:]([a-z])/g;
function Ma(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Da, Ma);
    _e[t] = new Oe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Da, Ma);
    _e[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Da, Ma);
  _e[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  _e[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new Oe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  _e[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function za(e, t, n, r) {
  var l = _e.hasOwnProperty(t) ? _e[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Hp(t, n, l, r) && (n = null),
    r || l === null
      ? $p(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ot = Ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ll = Symbol.for("react.element"),
  Un = Symbol.for("react.portal"),
  An = Symbol.for("react.fragment"),
  Fa = Symbol.for("react.strict_mode"),
  Di = Symbol.for("react.profiler"),
  Ac = Symbol.for("react.provider"),
  Bc = Symbol.for("react.context"),
  Oa = Symbol.for("react.forward_ref"),
  Mi = Symbol.for("react.suspense"),
  zi = Symbol.for("react.suspense_list"),
  Ia = Symbol.for("react.memo"),
  Qt = Symbol.for("react.lazy"),
  $c = Symbol.for("react.offscreen"),
  Zu = Symbol.iterator;
function kr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Zu && e[Zu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var se = Object.assign,
  ei;
function Mr(e) {
  if (ei === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ei = (t && t[1]) || "";
    }
  return (
    `
` +
    ei +
    e
  );
}
var ti = !1;
function ni(e, t) {
  if (!e || ti) return "";
  ti = !0;
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
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (ti = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Mr(e) : "";
}
function Wp(e) {
  switch (e.tag) {
    case 5:
      return Mr(e.type);
    case 16:
      return Mr("Lazy");
    case 13:
      return Mr("Suspense");
    case 19:
      return Mr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ni(e.type, !1)), e;
    case 11:
      return (e = ni(e.type.render, !1)), e;
    case 1:
      return (e = ni(e.type, !0)), e;
    default:
      return "";
  }
}
function Fi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case An:
      return "Fragment";
    case Un:
      return "Portal";
    case Di:
      return "Profiler";
    case Fa:
      return "StrictMode";
    case Mi:
      return "Suspense";
    case zi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Bc:
        return (e.displayName || "Context") + ".Consumer";
      case Ac:
        return (e._context.displayName || "Context") + ".Provider";
      case Oa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ia:
        return (
          (t = e.displayName || null), t !== null ? t : Fi(e.type) || "Memo"
        );
      case Qt:
        (t = e._payload), (e = e._init);
        try {
          return Fi(e(t));
        } catch {}
    }
  return null;
}
function Qp(e) {
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
      return Fi(t);
    case 8:
      return t === Fa ? "StrictMode" : "Mode";
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
function on(e) {
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
function Vc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Kp(e) {
  var t = Vc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Rl(e) {
  e._valueTracker || (e._valueTracker = Kp(e));
}
function Hc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Vc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function lo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Oi(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ju(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = on(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Wc(e, t) {
  (t = t.checked), t != null && za(e, "checked", t, !1);
}
function Ii(e, t) {
  Wc(e, t);
  var n = on(t.value),
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
    ? Ui(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ui(e, t.type, on(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function qu(e, t, n) {
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
function Ui(e, t, n) {
  (t !== "number" || lo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zr = Array.isArray;
function Jn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + on(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ai(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function bu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (zr(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: on(n) };
}
function Qc(e, t) {
  var n = on(t.value),
    r = on(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function es(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Kc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Kc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var jl,
  Yc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        jl = jl || document.createElement("div"),
          jl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = jl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ur = {
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
  Yp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ur).forEach(function (e) {
  Yp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ur[t] = Ur[e]);
  });
});
function Gc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ur.hasOwnProperty(e) && Ur[e])
      ? ("" + t).trim()
      : t + "px";
}
function Xc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Gc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Gp = se(
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
  },
);
function $i(e, t) {
  if (t) {
    if (Gp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function Vi(e, t) {
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
var Hi = null;
function Ua(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Wi = null,
  qn = null,
  bn = null;
function ts(e) {
  if ((e = vl(e))) {
    if (typeof Wi != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Oo(t)), Wi(e.stateNode, e.type, t));
  }
}
function Zc(e) {
  qn ? (bn ? bn.push(e) : (bn = [e])) : (qn = e);
}
function Jc() {
  if (qn) {
    var e = qn,
      t = bn;
    if (((bn = qn = null), ts(e), t)) for (e = 0; e < t.length; e++) ts(t[e]);
  }
}
function qc(e, t) {
  return e(t);
}
function bc() {}
var ri = !1;
function ef(e, t, n) {
  if (ri) return e(t, n);
  ri = !0;
  try {
    return qc(e, t, n);
  } finally {
    (ri = !1), (qn !== null || bn !== null) && (bc(), Jc());
  }
}
function Zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Oo(n);
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
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var Qi = !1;
if (Dt)
  try {
    var Er = {};
    Object.defineProperty(Er, "passive", {
      get: function () {
        Qi = !0;
      },
    }),
      window.addEventListener("test", Er, Er),
      window.removeEventListener("test", Er, Er);
  } catch {
    Qi = !1;
  }
function Xp(e, t, n, r, l, o, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var Ar = !1,
  oo = null,
  io = !1,
  Ki = null,
  Zp = {
    onError: function (e) {
      (Ar = !0), (oo = e);
    },
  };
function Jp(e, t, n, r, l, o, i, a, u) {
  (Ar = !1), (oo = null), Xp.apply(Zp, arguments);
}
function qp(e, t, n, r, l, o, i, a, u) {
  if ((Jp.apply(this, arguments), Ar)) {
    if (Ar) {
      var s = oo;
      (Ar = !1), (oo = null);
    } else throw Error(_(198));
    io || ((io = !0), (Ki = s));
  }
}
function Tn(e) {
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
function tf(e) {
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
function ns(e) {
  if (Tn(e) !== e) throw Error(_(188));
}
function bp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tn(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return ns(l), e;
        if (o === r) return ns(l), t;
        o = o.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function nf(e) {
  return (e = bp(e)), e !== null ? rf(e) : null;
}
function rf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = rf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var lf = Ge.unstable_scheduleCallback,
  rs = Ge.unstable_cancelCallback,
  eh = Ge.unstable_shouldYield,
  th = Ge.unstable_requestPaint,
  de = Ge.unstable_now,
  nh = Ge.unstable_getCurrentPriorityLevel,
  Aa = Ge.unstable_ImmediatePriority,
  of = Ge.unstable_UserBlockingPriority,
  ao = Ge.unstable_NormalPriority,
  rh = Ge.unstable_LowPriority,
  af = Ge.unstable_IdlePriority,
  Do = null,
  Et = null;
function lh(e) {
  if (Et && typeof Et.onCommitFiberRoot == "function")
    try {
      Et.onCommitFiberRoot(Do, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ht = Math.clz32 ? Math.clz32 : ah,
  oh = Math.log,
  ih = Math.LN2;
function ah(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((oh(e) / ih) | 0)) | 0;
}
var Tl = 64,
  Dl = 4194304;
function Fr(e) {
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
function uo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Fr(a)) : ((o &= i), o !== 0 && (r = Fr(o)));
  } else (i = n & ~l), i !== 0 ? (r = Fr(i)) : o !== 0 && (r = Fr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ht(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function uh(e, t) {
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
function sh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - ht(o),
      a = 1 << i,
      u = l[i];
    u === -1
      ? (!(a & n) || a & r) && (l[i] = uh(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Yi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function uf() {
  var e = Tl;
  return (Tl <<= 1), !(Tl & 4194240) && (Tl = 64), e;
}
function li(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ht(t)),
    (e[t] = n);
}
function ch(e, t) {
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
    var l = 31 - ht(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Ba(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ht(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Z = 0;
function sf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var cf,
  $a,
  ff,
  df,
  pf,
  Gi = !1,
  Ml = [],
  Jt = null,
  qt = null,
  bt = null,
  Jr = new Map(),
  qr = new Map(),
  Yt = [],
  fh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function ls(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Jt = null;
      break;
    case "dragenter":
    case "dragleave":
      qt = null;
      break;
    case "mouseover":
    case "mouseout":
      bt = null;
      break;
    case "pointerover":
    case "pointerout":
      Jr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qr.delete(t.pointerId);
  }
}
function Cr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = vl(t)), t !== null && $a(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function dh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Jt = Cr(Jt, e, t, n, r, l)), !0;
    case "dragenter":
      return (qt = Cr(qt, e, t, n, r, l)), !0;
    case "mouseover":
      return (bt = Cr(bt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Jr.set(o, Cr(Jr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), qr.set(o, Cr(qr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function hf(e) {
  var t = yn(e.target);
  if (t !== null) {
    var n = Tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = tf(n)), t !== null)) {
          (e.blockedOn = t),
            pf(e.priority, function () {
              ff(n);
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
function Yl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Hi = r), n.target.dispatchEvent(r), (Hi = null);
    } else return (t = vl(n)), t !== null && $a(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function os(e, t, n) {
  Yl(e) && n.delete(t);
}
function ph() {
  (Gi = !1),
    Jt !== null && Yl(Jt) && (Jt = null),
    qt !== null && Yl(qt) && (qt = null),
    bt !== null && Yl(bt) && (bt = null),
    Jr.forEach(os),
    qr.forEach(os);
}
function Pr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Gi ||
      ((Gi = !0),
      Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, ph)));
}
function br(e) {
  function t(l) {
    return Pr(l, e);
  }
  if (0 < Ml.length) {
    Pr(Ml[0], e);
    for (var n = 1; n < Ml.length; n++) {
      var r = Ml[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Jt !== null && Pr(Jt, e),
      qt !== null && Pr(qt, e),
      bt !== null && Pr(bt, e),
      Jr.forEach(t),
      qr.forEach(t),
      n = 0;
    n < Yt.length;
    n++
  )
    (r = Yt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Yt.length && ((n = Yt[0]), n.blockedOn === null); )
    hf(n), n.blockedOn === null && Yt.shift();
}
var er = Ot.ReactCurrentBatchConfig,
  so = !0;
function hh(e, t, n, r) {
  var l = Z,
    o = er.transition;
  er.transition = null;
  try {
    (Z = 1), Va(e, t, n, r);
  } finally {
    (Z = l), (er.transition = o);
  }
}
function mh(e, t, n, r) {
  var l = Z,
    o = er.transition;
  er.transition = null;
  try {
    (Z = 4), Va(e, t, n, r);
  } finally {
    (Z = l), (er.transition = o);
  }
}
function Va(e, t, n, r) {
  if (so) {
    var l = Xi(e, t, n, r);
    if (l === null) hi(e, t, r, co, n), ls(e, r);
    else if (dh(l, e, t, n, r)) r.stopPropagation();
    else if ((ls(e, r), t & 4 && -1 < fh.indexOf(e))) {
      for (; l !== null; ) {
        var o = vl(l);
        if (
          (o !== null && cf(o),
          (o = Xi(e, t, n, r)),
          o === null && hi(e, t, r, co, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else hi(e, t, r, null, n);
  }
}
var co = null;
function Xi(e, t, n, r) {
  if (((co = null), (e = Ua(r)), (e = yn(e)), e !== null))
    if (((t = Tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = tf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (co = e), null;
}
function mf(e) {
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
      switch (nh()) {
        case Aa:
          return 1;
        case of:
          return 4;
        case ao:
        case rh:
          return 16;
        case af:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xt = null,
  Ha = null,
  Gl = null;
function vf() {
  if (Gl) return Gl;
  var e,
    t = Ha,
    n = t.length,
    r,
    l = "value" in Xt ? Xt.value : Xt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Gl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Xl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function zl() {
  return !0;
}
function is() {
  return !1;
}
function Ze(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? zl
        : is),
      (this.isPropagationStopped = is),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = zl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = zl));
      },
      persist: function () {},
      isPersistent: zl,
    }),
    t
  );
}
var hr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Wa = Ze(hr),
  ml = se({}, hr, { view: 0, detail: 0 }),
  vh = Ze(ml),
  oi,
  ii,
  _r,
  Mo = se({}, ml, {
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
    getModifierState: Qa,
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
        : (e !== _r &&
            (_r && e.type === "mousemove"
              ? ((oi = e.screenX - _r.screenX), (ii = e.screenY - _r.screenY))
              : (ii = oi = 0),
            (_r = e)),
          oi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ii;
    },
  }),
  as = Ze(Mo),
  gh = se({}, Mo, { dataTransfer: 0 }),
  yh = Ze(gh),
  wh = se({}, ml, { relatedTarget: 0 }),
  ai = Ze(wh),
  xh = se({}, hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sh = Ze(xh),
  kh = se({}, hr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Eh = Ze(kh),
  Ch = se({}, hr, { data: 0 }),
  us = Ze(Ch),
  Ph = {
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
  _h = {
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
  Nh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Lh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Nh[e]) ? !!t[e] : !1;
}
function Qa() {
  return Lh;
}
var Rh = se({}, ml, {
    key: function (e) {
      if (e.key) {
        var t = Ph[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Xl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? _h[e.keyCode] || "Unidentified"
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
    getModifierState: Qa,
    charCode: function (e) {
      return e.type === "keypress" ? Xl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Xl(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  jh = Ze(Rh),
  Th = se({}, Mo, {
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
  ss = Ze(Th),
  Dh = se({}, ml, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qa,
  }),
  Mh = Ze(Dh),
  zh = se({}, hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fh = Ze(zh),
  Oh = se({}, Mo, {
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
  Ih = Ze(Oh),
  Uh = [9, 13, 27, 32],
  Ka = Dt && "CompositionEvent" in window,
  Br = null;
Dt && "documentMode" in document && (Br = document.documentMode);
var Ah = Dt && "TextEvent" in window && !Br,
  gf = Dt && (!Ka || (Br && 8 < Br && 11 >= Br)),
  cs = " ",
  fs = !1;
function yf(e, t) {
  switch (e) {
    case "keyup":
      return Uh.indexOf(t.keyCode) !== -1;
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
function wf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Bn = !1;
function Bh(e, t) {
  switch (e) {
    case "compositionend":
      return wf(t);
    case "keypress":
      return t.which !== 32 ? null : ((fs = !0), cs);
    case "textInput":
      return (e = t.data), e === cs && fs ? null : e;
    default:
      return null;
  }
}
function $h(e, t) {
  if (Bn)
    return e === "compositionend" || (!Ka && yf(e, t))
      ? ((e = vf()), (Gl = Ha = Xt = null), (Bn = !1), e)
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
      return gf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vh = {
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
function ds(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vh[e.type] : t === "textarea";
}
function xf(e, t, n, r) {
  Zc(r),
    (t = fo(t, "onChange")),
    0 < t.length &&
      ((n = new Wa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var $r = null,
  el = null;
function Hh(e) {
  Tf(e, 0);
}
function zo(e) {
  var t = Hn(e);
  if (Hc(t)) return e;
}
function Wh(e, t) {
  if (e === "change") return t;
}
var Sf = !1;
if (Dt) {
  var ui;
  if (Dt) {
    var si = "oninput" in document;
    if (!si) {
      var ps = document.createElement("div");
      ps.setAttribute("oninput", "return;"),
        (si = typeof ps.oninput == "function");
    }
    ui = si;
  } else ui = !1;
  Sf = ui && (!document.documentMode || 9 < document.documentMode);
}
function hs() {
  $r && ($r.detachEvent("onpropertychange", kf), (el = $r = null));
}
function kf(e) {
  if (e.propertyName === "value" && zo(el)) {
    var t = [];
    xf(t, el, e, Ua(e)), ef(Hh, t);
  }
}
function Qh(e, t, n) {
  e === "focusin"
    ? (hs(), ($r = t), (el = n), $r.attachEvent("onpropertychange", kf))
    : e === "focusout" && hs();
}
function Kh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return zo(el);
}
function Yh(e, t) {
  if (e === "click") return zo(t);
}
function Gh(e, t) {
  if (e === "input" || e === "change") return zo(t);
}
function Xh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var vt = typeof Object.is == "function" ? Object.is : Xh;
function tl(e, t) {
  if (vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ti.call(t, l) || !vt(e[l], t[l])) return !1;
  }
  return !0;
}
function ms(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function vs(e, t) {
  var n = ms(e);
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
    n = ms(n);
  }
}
function Ef(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ef(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Cf() {
  for (var e = window, t = lo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = lo(e.document);
  }
  return t;
}
function Ya(e) {
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
  var t = Cf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ef(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ya(n)) {
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
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = vs(n, o));
        var i = vs(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
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
var Jh = Dt && "documentMode" in document && 11 >= document.documentMode,
  $n = null,
  Zi = null,
  Vr = null,
  Ji = !1;
function gs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ji ||
    $n == null ||
    $n !== lo(r) ||
    ((r = $n),
    "selectionStart" in r && Ya(r)
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
    (Vr && tl(Vr, r)) ||
      ((Vr = r),
      (r = fo(Zi, "onSelect")),
      0 < r.length &&
        ((t = new Wa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $n))));
}
function Fl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Vn = {
    animationend: Fl("Animation", "AnimationEnd"),
    animationiteration: Fl("Animation", "AnimationIteration"),
    animationstart: Fl("Animation", "AnimationStart"),
    transitionend: Fl("Transition", "TransitionEnd"),
  },
  ci = {},
  Pf = {};
Dt &&
  ((Pf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vn.animationend.animation,
    delete Vn.animationiteration.animation,
    delete Vn.animationstart.animation),
  "TransitionEvent" in window || delete Vn.transitionend.transition);
function Fo(e) {
  if (ci[e]) return ci[e];
  if (!Vn[e]) return e;
  var t = Vn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Pf) return (ci[e] = t[n]);
  return e;
}
var _f = Fo("animationend"),
  Nf = Fo("animationiteration"),
  Lf = Fo("animationstart"),
  Rf = Fo("transitionend"),
  jf = new Map(),
  ys =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function cn(e, t) {
  jf.set(e, t), jn(t, [e]);
}
for (var fi = 0; fi < ys.length; fi++) {
  var di = ys[fi],
    qh = di.toLowerCase(),
    bh = di[0].toUpperCase() + di.slice(1);
  cn(qh, "on" + bh);
}
cn(_f, "onAnimationEnd");
cn(Nf, "onAnimationIteration");
cn(Lf, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(Rf, "onTransitionEnd");
lr("onMouseEnter", ["mouseout", "mouseover"]);
lr("onMouseLeave", ["mouseout", "mouseover"]);
lr("onPointerEnter", ["pointerout", "pointerover"]);
lr("onPointerLeave", ["pointerout", "pointerover"]);
jn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
jn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
jn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
jn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Or =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  em = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));
function ws(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), qp(r, t, void 0, e), (e.currentTarget = null);
}
function Tf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          ws(l, a, s), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          ws(l, a, s), (o = u);
        }
    }
  }
  if (io) throw ((e = Ki), (io = !1), (Ki = null), e);
}
function ee(e, t) {
  var n = t[na];
  n === void 0 && (n = t[na] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Df(t, e, 2, !1), n.add(r));
}
function pi(e, t, n) {
  var r = 0;
  t && (r |= 4), Df(n, e, r, t);
}
var Ol = "_reactListening" + Math.random().toString(36).slice(2);
function nl(e) {
  if (!e[Ol]) {
    (e[Ol] = !0),
      Uc.forEach(function (n) {
        n !== "selectionchange" && (em.has(n) || pi(n, !1, e), pi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ol] || ((t[Ol] = !0), pi("selectionchange", !1, t));
  }
}
function Df(e, t, n, r) {
  switch (mf(t)) {
    case 1:
      var l = hh;
      break;
    case 4:
      l = mh;
      break;
    default:
      l = Va;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Qi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function hi(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = yn(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  ef(function () {
    var s = o,
      f = Ua(n),
      d = [];
    e: {
      var p = jf.get(e);
      if (p !== void 0) {
        var k = Wa,
          S = e;
        switch (e) {
          case "keypress":
            if (Xl(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = jh;
            break;
          case "focusin":
            (S = "focus"), (k = ai);
            break;
          case "focusout":
            (S = "blur"), (k = ai);
            break;
          case "beforeblur":
          case "afterblur":
            k = ai;
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
            k = as;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = yh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Mh;
            break;
          case _f:
          case Nf:
          case Lf:
            k = Sh;
            break;
          case Rf:
            k = Fh;
            break;
          case "scroll":
            k = vh;
            break;
          case "wheel":
            k = Ih;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Eh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = ss;
        }
        var w = (t & 4) !== 0,
          j = !w && e === "scroll",
          h = w ? (p !== null ? p + "Capture" : null) : p;
        w = [];
        for (var c = s, m; c !== null; ) {
          m = c;
          var E = m.stateNode;
          if (
            (m.tag === 5 &&
              E !== null &&
              ((m = E),
              h !== null && ((E = Zr(c, h)), E != null && w.push(rl(c, E, m)))),
            j)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((p = new k(p, S, null, n, f)), d.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Hi &&
            (S = n.relatedTarget || n.fromElement) &&
            (yn(S) || S[Mt]))
        )
          break e;
        if (
          (k || p) &&
          ((p =
            f.window === f
              ? f
              : (p = f.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          k
            ? ((S = n.relatedTarget || n.toElement),
              (k = s),
              (S = S ? yn(S) : null),
              S !== null &&
                ((j = Tn(S)), S !== j || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((k = null), (S = s)),
          k !== S)
        ) {
          if (
            ((w = as),
            (E = "onMouseLeave"),
            (h = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = ss),
              (E = "onPointerLeave"),
              (h = "onPointerEnter"),
              (c = "pointer")),
            (j = k == null ? p : Hn(k)),
            (m = S == null ? p : Hn(S)),
            (p = new w(E, c + "leave", k, n, f)),
            (p.target = j),
            (p.relatedTarget = m),
            (E = null),
            yn(f) === s &&
              ((w = new w(h, c + "enter", S, n, f)),
              (w.target = m),
              (w.relatedTarget = j),
              (E = w)),
            (j = E),
            k && S)
          )
            t: {
              for (w = k, h = S, c = 0, m = w; m; m = On(m)) c++;
              for (m = 0, E = h; E; E = On(E)) m++;
              for (; 0 < c - m; ) (w = On(w)), c--;
              for (; 0 < m - c; ) (h = On(h)), m--;
              for (; c--; ) {
                if (w === h || (h !== null && w === h.alternate)) break t;
                (w = On(w)), (h = On(h));
              }
              w = null;
            }
          else w = null;
          k !== null && xs(d, p, k, w, !1),
            S !== null && j !== null && xs(d, j, S, w, !0);
        }
      }
      e: {
        if (
          ((p = s ? Hn(s) : window),
          (k = p.nodeName && p.nodeName.toLowerCase()),
          k === "select" || (k === "input" && p.type === "file"))
        )
          var R = Wh;
        else if (ds(p))
          if (Sf) R = Gh;
          else {
            R = Kh;
            var D = Qh;
          }
        else
          (k = p.nodeName) &&
            k.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (R = Yh);
        if (R && (R = R(e, s))) {
          xf(d, R, n, f);
          break e;
        }
        D && D(e, p, s),
          e === "focusout" &&
            (D = p._wrapperState) &&
            D.controlled &&
            p.type === "number" &&
            Ui(p, "number", p.value);
      }
      switch (((D = s ? Hn(s) : window), e)) {
        case "focusin":
          (ds(D) || D.contentEditable === "true") &&
            (($n = D), (Zi = s), (Vr = null));
          break;
        case "focusout":
          Vr = Zi = $n = null;
          break;
        case "mousedown":
          Ji = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ji = !1), gs(d, n, f);
          break;
        case "selectionchange":
          if (Jh) break;
        case "keydown":
        case "keyup":
          gs(d, n, f);
      }
      var v;
      if (Ka)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Bn
          ? yf(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (gf &&
          n.locale !== "ko" &&
          (Bn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Bn && (v = vf())
            : ((Xt = f),
              (Ha = "value" in Xt ? Xt.value : Xt.textContent),
              (Bn = !0))),
        (D = fo(s, T)),
        0 < D.length &&
          ((T = new us(T, e, null, n, f)),
          d.push({ event: T, listeners: D }),
          v ? (T.data = v) : ((v = wf(n)), v !== null && (T.data = v)))),
        (v = Ah ? Bh(e, n) : $h(e, n)) &&
          ((s = fo(s, "onBeforeInput")),
          0 < s.length &&
            ((f = new us("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: s }),
            (f.data = v)));
    }
    Tf(d, t);
  });
}
function rl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Zr(e, n)),
      o != null && r.unshift(rl(e, o, l)),
      (o = Zr(e, t)),
      o != null && r.push(rl(e, o, l))),
      (e = e.return);
  }
  return r;
}
function On(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = Zr(n, o)), u != null && i.unshift(rl(n, u, a)))
        : l || ((u = Zr(n, o)), u != null && i.push(rl(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var tm = /\r\n?/g,
  nm = /\u0000|\uFFFD/g;
function Ss(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      tm,
      `
`,
    )
    .replace(nm, "");
}
function Il(e, t, n) {
  if (((t = Ss(t)), Ss(e) !== t && n)) throw Error(_(425));
}
function po() {}
var qi = null,
  bi = null;
function ea(e, t) {
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
var ta = typeof setTimeout == "function" ? setTimeout : void 0,
  rm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ks = typeof Promise == "function" ? Promise : void 0,
  lm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ks < "u"
        ? function (e) {
            return ks.resolve(null).then(e).catch(om);
          }
        : ta;
function om(e) {
  setTimeout(function () {
    throw e;
  });
}
function mi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), br(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  br(t);
}
function en(e) {
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
function Es(e) {
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
var mr = Math.random().toString(36).slice(2),
  kt = "__reactFiber$" + mr,
  ll = "__reactProps$" + mr,
  Mt = "__reactContainer$" + mr,
  na = "__reactEvents$" + mr,
  im = "__reactListeners$" + mr,
  am = "__reactHandles$" + mr;
function yn(e) {
  var t = e[kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Mt] || n[kt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Es(e); e !== null; ) {
          if ((n = e[kt])) return n;
          e = Es(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vl(e) {
  return (
    (e = e[kt] || e[Mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Oo(e) {
  return e[ll] || null;
}
var ra = [],
  Wn = -1;
function fn(e) {
  return { current: e };
}
function te(e) {
  0 > Wn || ((e.current = ra[Wn]), (ra[Wn] = null), Wn--);
}
function b(e, t) {
  Wn++, (ra[Wn] = e.current), (e.current = t);
}
var an = {},
  je = fn(an),
  Ae = fn(!1),
  Pn = an;
function or(e, t) {
  var n = e.type.contextTypes;
  if (!n) return an;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Be(e) {
  return (e = e.childContextTypes), e != null;
}
function ho() {
  te(Ae), te(je);
}
function Cs(e, t, n) {
  if (je.current !== an) throw Error(_(168));
  b(je, t), b(Ae, n);
}
function Mf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(_(108, Qp(e) || "Unknown", l));
  return se({}, n, r);
}
function mo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || an),
    (Pn = je.current),
    b(je, e),
    b(Ae, Ae.current),
    !0
  );
}
function Ps(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = Mf(e, t, Pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Ae),
      te(je),
      b(je, e))
    : te(Ae),
    b(Ae, n);
}
var Lt = null,
  Io = !1,
  vi = !1;
function zf(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
function um(e) {
  (Io = !0), zf(e);
}
function dn() {
  if (!vi && Lt !== null) {
    vi = !0;
    var e = 0,
      t = Z;
    try {
      var n = Lt;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Lt = null), (Io = !1);
    } catch (l) {
      throw (Lt !== null && (Lt = Lt.slice(e + 1)), lf(Aa, dn), l);
    } finally {
      (Z = t), (vi = !1);
    }
  }
  return null;
}
var Qn = [],
  Kn = 0,
  vo = null,
  go = 0,
  et = [],
  tt = 0,
  _n = null,
  Rt = 1,
  jt = "";
function mn(e, t) {
  (Qn[Kn++] = go), (Qn[Kn++] = vo), (vo = e), (go = t);
}
function Ff(e, t, n) {
  (et[tt++] = Rt), (et[tt++] = jt), (et[tt++] = _n), (_n = e);
  var r = Rt;
  e = jt;
  var l = 32 - ht(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - ht(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Rt = (1 << (32 - ht(t) + l)) | (n << l) | r),
      (jt = o + e);
  } else (Rt = (1 << o) | (n << l) | r), (jt = e);
}
function Ga(e) {
  e.return !== null && (mn(e, 1), Ff(e, 1, 0));
}
function Xa(e) {
  for (; e === vo; )
    (vo = Qn[--Kn]), (Qn[Kn] = null), (go = Qn[--Kn]), (Qn[Kn] = null);
  for (; e === _n; )
    (_n = et[--tt]),
      (et[tt] = null),
      (jt = et[--tt]),
      (et[tt] = null),
      (Rt = et[--tt]),
      (et[tt] = null);
}
var Ye = null,
  Ke = null,
  oe = !1,
  pt = null;
function Of(e, t) {
  var n = rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function _s(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Ke = en(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (Ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = _n !== null ? { id: Rt, overflow: jt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (Ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function la(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function oa(e) {
  if (oe) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!_s(e, t)) {
        if (la(e)) throw Error(_(418));
        t = en(n.nextSibling);
        var r = Ye;
        t && _s(e, t)
          ? Of(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (Ye = e));
      }
    } else {
      if (la(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (oe = !1), (Ye = e);
    }
  }
}
function Ns(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ye = e;
}
function Ul(e) {
  if (e !== Ye) return !1;
  if (!oe) return Ns(e), (oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ea(e.type, e.memoizedProps))),
    t && (t = Ke))
  ) {
    if (la(e)) throw (If(), Error(_(418)));
    for (; t; ) Of(e, t), (t = en(t.nextSibling));
  }
  if ((Ns(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = en(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Ye ? en(e.stateNode.nextSibling) : null;
  return !0;
}
function If() {
  for (var e = Ke; e; ) e = en(e.nextSibling);
}
function ir() {
  (Ke = Ye = null), (oe = !1);
}
function Za(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
var sm = Ot.ReactCurrentBatchConfig;
function Nr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Al(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Ls(e) {
  var t = e._init;
  return t(e._payload);
}
function Uf(e) {
  function t(h, c) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [c]), (h.flags |= 16)) : m.push(c);
    }
  }
  function n(h, c) {
    if (!e) return null;
    for (; c !== null; ) t(h, c), (c = c.sibling);
    return null;
  }
  function r(h, c) {
    for (h = new Map(); c !== null; )
      c.key !== null ? h.set(c.key, c) : h.set(c.index, c), (c = c.sibling);
    return h;
  }
  function l(h, c) {
    return (h = ln(h, c)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, c, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((h.flags |= 2), c) : m)
            : ((h.flags |= 2), c))
        : ((h.flags |= 1048576), c)
    );
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, c, m, E) {
    return c === null || c.tag !== 6
      ? ((c = Ei(m, h.mode, E)), (c.return = h), c)
      : ((c = l(c, m)), (c.return = h), c);
  }
  function u(h, c, m, E) {
    var R = m.type;
    return R === An
      ? f(h, c, m.props.children, E, m.key)
      : c !== null &&
          (c.elementType === R ||
            (typeof R == "object" &&
              R !== null &&
              R.$$typeof === Qt &&
              Ls(R) === c.type))
        ? ((E = l(c, m.props)), (E.ref = Nr(h, c, m)), (E.return = h), E)
        : ((E = no(m.type, m.key, m.props, null, h.mode, E)),
          (E.ref = Nr(h, c, m)),
          (E.return = h),
          E);
  }
  function s(h, c, m, E) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = Ci(m, h.mode, E)), (c.return = h), c)
      : ((c = l(c, m.children || [])), (c.return = h), c);
  }
  function f(h, c, m, E, R) {
    return c === null || c.tag !== 7
      ? ((c = Cn(m, h.mode, E, R)), (c.return = h), c)
      : ((c = l(c, m)), (c.return = h), c);
  }
  function d(h, c, m) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Ei("" + c, h.mode, m)), (c.return = h), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Ll:
          return (
            (m = no(c.type, c.key, c.props, null, h.mode, m)),
            (m.ref = Nr(h, null, c)),
            (m.return = h),
            m
          );
        case Un:
          return (c = Ci(c, h.mode, m)), (c.return = h), c;
        case Qt:
          var E = c._init;
          return d(h, E(c._payload), m);
      }
      if (zr(c) || kr(c))
        return (c = Cn(c, h.mode, m, null)), (c.return = h), c;
      Al(h, c);
    }
    return null;
  }
  function p(h, c, m, E) {
    var R = c !== null ? c.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return R !== null ? null : a(h, c, "" + m, E);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ll:
          return m.key === R ? u(h, c, m, E) : null;
        case Un:
          return m.key === R ? s(h, c, m, E) : null;
        case Qt:
          return (R = m._init), p(h, c, R(m._payload), E);
      }
      if (zr(m) || kr(m)) return R !== null ? null : f(h, c, m, E, null);
      Al(h, m);
    }
    return null;
  }
  function k(h, c, m, E, R) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (h = h.get(m) || null), a(c, h, "" + E, R);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Ll:
          return (h = h.get(E.key === null ? m : E.key) || null), u(c, h, E, R);
        case Un:
          return (h = h.get(E.key === null ? m : E.key) || null), s(c, h, E, R);
        case Qt:
          var D = E._init;
          return k(h, c, m, D(E._payload), R);
      }
      if (zr(E) || kr(E)) return (h = h.get(m) || null), f(c, h, E, R, null);
      Al(c, E);
    }
    return null;
  }
  function S(h, c, m, E) {
    for (
      var R = null, D = null, v = c, T = (c = 0), I = null;
      v !== null && T < m.length;
      T++
    ) {
      v.index > T ? ((I = v), (v = null)) : (I = v.sibling);
      var M = p(h, v, m[T], E);
      if (M === null) {
        v === null && (v = I);
        break;
      }
      e && v && M.alternate === null && t(h, v),
        (c = o(M, c, T)),
        D === null ? (R = M) : (D.sibling = M),
        (D = M),
        (v = I);
    }
    if (T === m.length) return n(h, v), oe && mn(h, T), R;
    if (v === null) {
      for (; T < m.length; T++)
        (v = d(h, m[T], E)),
          v !== null &&
            ((c = o(v, c, T)), D === null ? (R = v) : (D.sibling = v), (D = v));
      return oe && mn(h, T), R;
    }
    for (v = r(h, v); T < m.length; T++)
      (I = k(v, h, T, m[T], E)),
        I !== null &&
          (e && I.alternate !== null && v.delete(I.key === null ? T : I.key),
          (c = o(I, c, T)),
          D === null ? (R = I) : (D.sibling = I),
          (D = I));
    return (
      e &&
        v.forEach(function (Y) {
          return t(h, Y);
        }),
      oe && mn(h, T),
      R
    );
  }
  function w(h, c, m, E) {
    var R = kr(m);
    if (typeof R != "function") throw Error(_(150));
    if (((m = R.call(m)), m == null)) throw Error(_(151));
    for (
      var D = (R = null), v = c, T = (c = 0), I = null, M = m.next();
      v !== null && !M.done;
      T++, M = m.next()
    ) {
      v.index > T ? ((I = v), (v = null)) : (I = v.sibling);
      var Y = p(h, v, M.value, E);
      if (Y === null) {
        v === null && (v = I);
        break;
      }
      e && v && Y.alternate === null && t(h, v),
        (c = o(Y, c, T)),
        D === null ? (R = Y) : (D.sibling = Y),
        (D = Y),
        (v = I);
    }
    if (M.done) return n(h, v), oe && mn(h, T), R;
    if (v === null) {
      for (; !M.done; T++, M = m.next())
        (M = d(h, M.value, E)),
          M !== null &&
            ((c = o(M, c, T)), D === null ? (R = M) : (D.sibling = M), (D = M));
      return oe && mn(h, T), R;
    }
    for (v = r(h, v); !M.done; T++, M = m.next())
      (M = k(v, h, T, M.value, E)),
        M !== null &&
          (e && M.alternate !== null && v.delete(M.key === null ? T : M.key),
          (c = o(M, c, T)),
          D === null ? (R = M) : (D.sibling = M),
          (D = M));
    return (
      e &&
        v.forEach(function (fe) {
          return t(h, fe);
        }),
      oe && mn(h, T),
      R
    );
  }
  function j(h, c, m, E) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === An &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Ll:
          e: {
            for (var R = m.key, D = c; D !== null; ) {
              if (D.key === R) {
                if (((R = m.type), R === An)) {
                  if (D.tag === 7) {
                    n(h, D.sibling),
                      (c = l(D, m.props.children)),
                      (c.return = h),
                      (h = c);
                    break e;
                  }
                } else if (
                  D.elementType === R ||
                  (typeof R == "object" &&
                    R !== null &&
                    R.$$typeof === Qt &&
                    Ls(R) === D.type)
                ) {
                  n(h, D.sibling),
                    (c = l(D, m.props)),
                    (c.ref = Nr(h, D, m)),
                    (c.return = h),
                    (h = c);
                  break e;
                }
                n(h, D);
                break;
              } else t(h, D);
              D = D.sibling;
            }
            m.type === An
              ? ((c = Cn(m.props.children, h.mode, E, m.key)),
                (c.return = h),
                (h = c))
              : ((E = no(m.type, m.key, m.props, null, h.mode, E)),
                (E.ref = Nr(h, c, m)),
                (E.return = h),
                (h = E));
          }
          return i(h);
        case Un:
          e: {
            for (D = m.key; c !== null; ) {
              if (c.key === D)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(h, c.sibling),
                    (c = l(c, m.children || [])),
                    (c.return = h),
                    (h = c);
                  break e;
                } else {
                  n(h, c);
                  break;
                }
              else t(h, c);
              c = c.sibling;
            }
            (c = Ci(m, h.mode, E)), (c.return = h), (h = c);
          }
          return i(h);
        case Qt:
          return (D = m._init), j(h, c, D(m._payload), E);
      }
      if (zr(m)) return S(h, c, m, E);
      if (kr(m)) return w(h, c, m, E);
      Al(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        c !== null && c.tag === 6
          ? (n(h, c.sibling), (c = l(c, m)), (c.return = h), (h = c))
          : (n(h, c), (c = Ei(m, h.mode, E)), (c.return = h), (h = c)),
        i(h))
      : n(h, c);
  }
  return j;
}
var ar = Uf(!0),
  Af = Uf(!1),
  yo = fn(null),
  wo = null,
  Yn = null,
  Ja = null;
function qa() {
  Ja = Yn = wo = null;
}
function ba(e) {
  var t = yo.current;
  te(yo), (e._currentValue = t);
}
function ia(e, t, n) {
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
function tr(e, t) {
  (wo = e),
    (Ja = Yn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function ot(e) {
  var t = e._currentValue;
  if (Ja !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yn === null)) {
      if (wo === null) throw Error(_(308));
      (Yn = e), (wo.dependencies = { lanes: 0, firstContext: e });
    } else Yn = Yn.next = e;
  return t;
}
var wn = null;
function eu(e) {
  wn === null ? (wn = [e]) : wn.push(e);
}
function Bf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), eu(t)) : ((n.next = l.next), (l.next = n)),
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
var Kt = !1;
function tu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function $f(e, t) {
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
function Tt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function tn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      zt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), eu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    zt(e, n)
  );
}
function Zl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ba(e, n);
  }
}
function Rs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
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
function xo(e, t, n, r) {
  var l = e.updateQueue;
  Kt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== i &&
        (a === null ? (f.firstBaseUpdate = s) : (a.next = s),
        (f.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var d = l.baseState;
    (i = 0), (f = s = u = null), (a = o);
    do {
      var p = a.lane,
        k = a.eventTime;
      if ((r & p) === p) {
        f !== null &&
          (f = f.next =
            {
              eventTime: k,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var S = e,
            w = a;
          switch (((p = t), (k = n), w.tag)) {
            case 1:
              if (((S = w.payload), typeof S == "function")) {
                d = S.call(k, d, p);
                break e;
              }
              d = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = w.payload),
                (p = typeof S == "function" ? S.call(k, d, p) : S),
                p == null)
              )
                break e;
              d = se({}, d, p);
              break e;
            case 2:
              Kt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [a]) : p.push(a));
      } else
        (k = {
          eventTime: k,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((s = f = k), (u = d)) : (f = f.next = k),
          (i |= p);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (u = d),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Ln |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function js(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(_(191, l));
        l.call(r);
      }
    }
}
var gl = {},
  Ct = fn(gl),
  ol = fn(gl),
  il = fn(gl);
function xn(e) {
  if (e === gl) throw Error(_(174));
  return e;
}
function nu(e, t) {
  switch ((b(il, t), b(ol, e), b(Ct, gl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Bi(t, e));
  }
  te(Ct), b(Ct, t);
}
function ur() {
  te(Ct), te(ol), te(il);
}
function Vf(e) {
  xn(il.current);
  var t = xn(Ct.current),
    n = Bi(t, e.type);
  t !== n && (b(ol, e), b(Ct, n));
}
function ru(e) {
  ol.current === e && (te(Ct), te(ol));
}
var ae = fn(0);
function So(e) {
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
var gi = [];
function lu() {
  for (var e = 0; e < gi.length; e++)
    gi[e]._workInProgressVersionPrimary = null;
  gi.length = 0;
}
var Jl = Ot.ReactCurrentDispatcher,
  yi = Ot.ReactCurrentBatchConfig,
  Nn = 0,
  ue = null,
  me = null,
  ye = null,
  ko = !1,
  Hr = !1,
  al = 0,
  cm = 0;
function Ne() {
  throw Error(_(321));
}
function ou(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!vt(e[n], t[n])) return !1;
  return !0;
}
function iu(e, t, n, r, l, o) {
  if (
    ((Nn = o),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Jl.current = e === null || e.memoizedState === null ? hm : mm),
    (e = n(r, l)),
    Hr)
  ) {
    o = 0;
    do {
      if (((Hr = !1), (al = 0), 25 <= o)) throw Error(_(301));
      (o += 1),
        (ye = me = null),
        (t.updateQueue = null),
        (Jl.current = vm),
        (e = n(r, l));
    } while (Hr);
  }
  if (
    ((Jl.current = Eo),
    (t = me !== null && me.next !== null),
    (Nn = 0),
    (ye = me = ue = null),
    (ko = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function au() {
  var e = al !== 0;
  return (al = 0), e;
}
function St() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ye === null ? (ue.memoizedState = ye = e) : (ye = ye.next = e), ye;
}
function it() {
  if (me === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = ye === null ? ue.memoizedState : ye.next;
  if (t !== null) (ye = t), (me = e);
  else {
    if (e === null) throw Error(_(310));
    (me = e),
      (e = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      ye === null ? (ue.memoizedState = ye = e) : (ye = ye.next = e);
  }
  return ye;
}
function ul(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wi(e) {
  var t = it(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = me,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      s = o;
    do {
      var f = s.lane;
      if ((Nn & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var d = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = d), (i = r)) : (u = u.next = d),
          (ue.lanes |= f),
          (Ln |= f);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (i = r) : (u.next = a),
      vt(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ue.lanes |= o), (Ln |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xi(e) {
  var t = it(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    vt(o, t.memoizedState) || (Ue = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Hf() {}
function Wf(e, t) {
  var n = ue,
    r = it(),
    l = t(),
    o = !vt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ue = !0)),
    (r = r.queue),
    uu(Yf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ye !== null && ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      sl(9, Kf.bind(null, n, r, l, t), void 0, null),
      we === null)
    )
      throw Error(_(349));
    Nn & 30 || Qf(n, t, l);
  }
  return l;
}
function Qf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Kf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Gf(t) && Xf(e);
}
function Yf(e, t, n) {
  return n(function () {
    Gf(t) && Xf(e);
  });
}
function Gf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !vt(e, n);
  } catch {
    return !0;
  }
}
function Xf(e) {
  var t = zt(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function Ts(e) {
  var t = St();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ul,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = pm.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function sl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Zf() {
  return it().memoizedState;
}
function ql(e, t, n, r) {
  var l = St();
  (ue.flags |= e),
    (l.memoizedState = sl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Uo(e, t, n, r) {
  var l = it();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (me !== null) {
    var i = me.memoizedState;
    if (((o = i.destroy), r !== null && ou(r, i.deps))) {
      l.memoizedState = sl(t, n, o, r);
      return;
    }
  }
  (ue.flags |= e), (l.memoizedState = sl(1 | t, n, o, r));
}
function Ds(e, t) {
  return ql(8390656, 8, e, t);
}
function uu(e, t) {
  return Uo(2048, 8, e, t);
}
function Jf(e, t) {
  return Uo(4, 2, e, t);
}
function qf(e, t) {
  return Uo(4, 4, e, t);
}
function bf(e, t) {
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
function ed(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Uo(4, 4, bf.bind(null, t, e), n)
  );
}
function su() {}
function td(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ou(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function nd(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ou(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function rd(e, t, n) {
  return Nn & 21
    ? (vt(n, t) || ((n = uf()), (ue.lanes |= n), (Ln |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function fm(e, t) {
  var n = Z;
  (Z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = yi.transition;
  yi.transition = {};
  try {
    e(!1), t();
  } finally {
    (Z = n), (yi.transition = r);
  }
}
function ld() {
  return it().memoizedState;
}
function dm(e, t, n) {
  var r = rn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    od(e))
  )
    id(t, n);
  else if (((n = Bf(e, t, n, r)), n !== null)) {
    var l = ze();
    mt(n, e, r, l), ad(n, t, r);
  }
}
function pm(e, t, n) {
  var r = rn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (od(e)) id(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), vt(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), eu(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bf(e, t, l, r)),
      n !== null && ((l = ze()), mt(n, e, r, l), ad(n, t, r));
  }
}
function od(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function id(e, t) {
  Hr = ko = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ad(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ba(e, n);
  }
}
var Eo = {
    readContext: ot,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  hm = {
    readContext: ot,
    useCallback: function (e, t) {
      return (St().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ot,
    useEffect: Ds,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ql(4194308, 4, bf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ql(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ql(4, 2, e, t);
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
        (e = e.dispatch = dm.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = St();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ts,
    useDebugValue: su,
    useDeferredValue: function (e) {
      return (St().memoizedState = e);
    },
    useTransition: function () {
      var e = Ts(!1),
        t = e[0];
      return (e = fm.bind(null, e[1])), (St().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        l = St();
      if (oe) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(_(349));
        Nn & 30 || Qf(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Ds(Yf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        sl(9, Kf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = St(),
        t = we.identifierPrefix;
      if (oe) {
        var n = jt,
          r = Rt;
        (n = (r & ~(1 << (32 - ht(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = al++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = cm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  mm = {
    readContext: ot,
    useCallback: td,
    useContext: ot,
    useEffect: uu,
    useImperativeHandle: ed,
    useInsertionEffect: Jf,
    useLayoutEffect: qf,
    useMemo: nd,
    useReducer: wi,
    useRef: Zf,
    useState: function () {
      return wi(ul);
    },
    useDebugValue: su,
    useDeferredValue: function (e) {
      var t = it();
      return rd(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = wi(ul)[0],
        t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: Hf,
    useSyncExternalStore: Wf,
    useId: ld,
    unstable_isNewReconciler: !1,
  },
  vm = {
    readContext: ot,
    useCallback: td,
    useContext: ot,
    useEffect: uu,
    useImperativeHandle: ed,
    useInsertionEffect: Jf,
    useLayoutEffect: qf,
    useMemo: nd,
    useReducer: xi,
    useRef: Zf,
    useState: function () {
      return xi(ul);
    },
    useDebugValue: su,
    useDeferredValue: function (e) {
      var t = it();
      return me === null ? (t.memoizedState = e) : rd(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = xi(ul)[0],
        t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: Hf,
    useSyncExternalStore: Wf,
    useId: ld,
    unstable_isNewReconciler: !1,
  };
function ct(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function aa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ao = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      l = rn(e),
      o = Tt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = tn(e, o, l)),
      t !== null && (mt(t, e, l, r), Zl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      l = rn(e),
      o = Tt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = tn(e, o, l)),
      t !== null && (mt(t, e, l, r), Zl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ze(),
      r = rn(e),
      l = Tt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = tn(e, l, r)),
      t !== null && (mt(t, e, r, n), Zl(t, e, r));
  },
};
function Ms(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !tl(n, r) || !tl(l, o)
        : !0
  );
}
function ud(e, t, n) {
  var r = !1,
    l = an,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ot(o))
      : ((l = Be(t) ? Pn : je.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? or(e, l) : an)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ao),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function zs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ao.enqueueReplaceState(t, t.state, null);
}
function ua(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), tu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = ot(o))
    : ((o = Be(t) ? Pn : je.current), (l.context = or(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (aa(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ao.enqueueReplaceState(l, l.state, null),
      xo(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function sr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Wp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Si(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function sa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var gm = typeof WeakMap == "function" ? WeakMap : Map;
function sd(e, t, n) {
  (n = Tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Po || ((Po = !0), (wa = r)), sa(e, t);
    }),
    n
  );
}
function cd(e, t, n) {
  (n = Tt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        sa(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        sa(e, t),
          typeof r != "function" &&
            (nn === null ? (nn = new Set([this])) : nn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Fs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Tm.bind(null, e, t, n)), t.then(e, e));
}
function Os(e) {
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
function Is(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Tt(-1, 1)), (t.tag = 2), tn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ym = Ot.ReactCurrentOwner,
  Ue = !1;
function Me(e, t, n, r) {
  t.child = e === null ? Af(t, null, n, r) : ar(t, e.child, n, r);
}
function Us(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    tr(t, l),
    (r = iu(e, t, n, r, o, l)),
    (n = au()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ft(e, t, l))
      : (oe && n && Ga(t), (t.flags |= 1), Me(e, t, r, l), t.child)
  );
}
function As(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !gu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), fd(e, t, o, r, l))
      : ((e = no(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : tl), n(i, r) && e.ref === t.ref)
    )
      return Ft(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ln(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fd(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (tl(o, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), Ft(e, t, l);
  }
  return ca(e, t, n, r, l);
}
function dd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(Xn, Qe),
        (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          b(Xn, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        b(Xn, Qe),
        (Qe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(Xn, Qe),
      (Qe |= r);
  return Me(e, t, l, n), t.child;
}
function pd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ca(e, t, n, r, l) {
  var o = Be(n) ? Pn : je.current;
  return (
    (o = or(t, o)),
    tr(t, l),
    (n = iu(e, t, n, r, o, l)),
    (r = au()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ft(e, t, l))
      : (oe && r && Ga(t), (t.flags |= 1), Me(e, t, n, l), t.child)
  );
}
function Bs(e, t, n, r, l) {
  if (Be(n)) {
    var o = !0;
    mo(t);
  } else o = !1;
  if ((tr(t, l), t.stateNode === null))
    bl(e, t), ud(t, n, r), ua(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = ot(s))
      : ((s = Be(n) ? Pn : je.current), (s = or(t, s)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && zs(t, i, r, s)),
      (Kt = !1);
    var p = t.memoizedState;
    (i.state = p),
      xo(t, r, i, l),
      (u = t.memoizedState),
      a !== r || p !== u || Ae.current || Kt
        ? (typeof f == "function" && (aa(t, n, f, r), (u = t.memoizedState)),
          (a = Kt || Ms(t, n, a, r, p, u, s))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      $f(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : ct(t.type, a)),
      (i.props = s),
      (d = t.pendingProps),
      (p = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = ot(u))
        : ((u = Be(n) ? Pn : je.current), (u = or(t, u)));
    var k = n.getDerivedStateFromProps;
    (f =
      typeof k == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== d || p !== u) && zs(t, i, r, u)),
      (Kt = !1),
      (p = t.memoizedState),
      (i.state = p),
      xo(t, r, i, l);
    var S = t.memoizedState;
    a !== d || p !== S || Ae.current || Kt
      ? (typeof k == "function" && (aa(t, n, k, r), (S = t.memoizedState)),
        (s = Kt || Ms(t, n, s, r, p, S, u) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, S, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, S, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = u),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return fa(e, t, n, r, o, l);
}
function fa(e, t, n, r, l, o) {
  pd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Ps(t, n, !1), Ft(e, t, o);
  (r = t.stateNode), (ym.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = ar(t, e.child, null, o)), (t.child = ar(t, null, a, o)))
      : Me(e, t, a, o),
    (t.memoizedState = r.state),
    l && Ps(t, n, !0),
    t.child
  );
}
function hd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Cs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Cs(e, t.context, !1),
    nu(e, t.containerInfo);
}
function $s(e, t, n, r, l) {
  return ir(), Za(l), (t.flags |= 256), Me(e, t, n, r), t.child;
}
var da = { dehydrated: null, treeContext: null, retryLane: 0 };
function pa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function md(e, t, n) {
  var r = t.pendingProps,
    l = ae.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    b(ae, l & 1),
    e === null)
  )
    return (
      oa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Vo(i, r, 0, null)),
              (e = Cn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = pa(n)),
              (t.memoizedState = da),
              e)
            : cu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return wm(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = ln(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = ln(a, o)) : ((o = Cn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? pa(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = da),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ln(o, { mode: "visible", children: r.children })),
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
function cu(e, t) {
  return (
    (t = Vo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Bl(e, t, n, r) {
  return (
    r !== null && Za(r),
    ar(t, e.child, null, n),
    (e = cu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function wm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Si(Error(_(422)))), Bl(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Vo({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Cn(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && ar(t, e.child, null, i),
          (t.child.memoizedState = pa(i)),
          (t.memoizedState = da),
          o);
  if (!(t.mode & 1)) return Bl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(_(419))), (r = Si(o, r, void 0)), Bl(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Ue || a)) {
    if (((r = we), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), zt(e, l), mt(r, e, l, -1));
    }
    return vu(), (r = Si(Error(_(421)))), Bl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Dm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ke = en(l.nextSibling)),
      (Ye = t),
      (oe = !0),
      (pt = null),
      e !== null &&
        ((et[tt++] = Rt),
        (et[tt++] = jt),
        (et[tt++] = _n),
        (Rt = e.id),
        (jt = e.overflow),
        (_n = t)),
      (t = cu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Vs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ia(e.return, t, n);
}
function ki(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function vd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Me(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vs(e, n, t);
        else if (e.tag === 19) Vs(e, n, t);
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
  if ((b(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && So(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ki(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && So(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ki(t, !0, n, null, o);
        break;
      case "together":
        ki(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function bl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ft(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ln |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ln(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function xm(e, t, n) {
  switch (t.tag) {
    case 3:
      hd(t), ir();
      break;
    case 5:
      Vf(t);
      break;
    case 1:
      Be(t.type) && mo(t);
      break;
    case 4:
      nu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      b(yo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? md(e, t, n)
            : (b(ae, ae.current & 1),
              (e = Ft(e, t, n)),
              e !== null ? e.sibling : null);
      b(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return vd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        b(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), dd(e, t, n);
  }
  return Ft(e, t, n);
}
var gd, ha, yd, wd;
gd = function (e, t) {
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
ha = function () {};
yd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), xn(Ct.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Oi(e, l)), (r = Oi(e, r)), (o = []);
        break;
      case "select":
        (l = se({}, l, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Ai(e, l)), (r = Ai(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = po);
    }
    $i(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Gr.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(s, u))
            : s === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (o = o || []).push(s, "" + u)
              : s !== "suppressContentEditableWarning" &&
                s !== "suppressHydrationWarning" &&
                (Gr.hasOwnProperty(s)
                  ? (u != null && s === "onScroll" && ee("scroll", e),
                    o || a === u || (o = []))
                  : (o = o || []).push(s, u));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
wd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Lr(e, t) {
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
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Sm(e, t, n) {
  var r = t.pendingProps;
  switch ((Xa(t), t.tag)) {
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
      return Le(t), null;
    case 1:
      return Be(t.type) && ho(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ur(),
        te(Ae),
        te(je),
        lu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ul(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), pt !== null && (ka(pt), (pt = null)))),
        ha(e, t),
        Le(t),
        null
      );
    case 5:
      ru(t);
      var l = xn(il.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        yd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return Le(t), null;
        }
        if (((e = xn(Ct.current)), Ul(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[kt] = t), (r[ll] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Or.length; l++) ee(Or[l], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              Ju(r, o), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ee("invalid", r);
              break;
            case "textarea":
              bu(r, o), ee("invalid", r);
          }
          $i(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Il(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Il(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Gr.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  ee("scroll", r);
            }
          switch (n) {
            case "input":
              Rl(r), qu(r, o, !0);
              break;
            case "textarea":
              Rl(r), es(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = po);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Kc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[kt] = t),
            (e[ll] = r),
            gd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Vi(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Or.length; l++) ee(Or[l], e);
                l = r;
                break;
              case "source":
                ee("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (l = r);
                break;
              case "details":
                ee("toggle", e), (l = r);
                break;
              case "input":
                Ju(e, r), (l = Oi(e, r)), ee("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = se({}, r, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                bu(e, r), (l = Ai(e, r)), ee("invalid", e);
                break;
              default:
                l = r;
            }
            $i(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? Xc(e, u)
                  : o === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Yc(e, u))
                    : o === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && Xr(e, u)
                        : typeof u == "number" && Xr(e, "" + u)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Gr.hasOwnProperty(o)
                          ? u != null && o === "onScroll" && ee("scroll", e)
                          : u != null && za(e, o, u, i));
              }
            switch (n) {
              case "input":
                Rl(e), qu(e, r, !1);
                break;
              case "textarea":
                Rl(e), es(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + on(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Jn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Jn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = po);
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
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) wd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = xn(il.current)), xn(Ct.current), Ul(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[kt] = t),
            (o = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Il(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Il(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[kt] = t),
            (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if (
        (te(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (oe && Ke !== null && t.mode & 1 && !(t.flags & 128))
          If(), ir(), (t.flags |= 98560), (o = !1);
        else if (((o = Ul(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(_(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(_(317));
            o[kt] = t;
          } else
            ir(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Le(t), (o = !1);
        } else pt !== null && (ka(pt), (pt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? ve === 0 && (ve = 3) : vu())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return (
        ur(), ha(e, t), e === null && nl(t.stateNode.containerInfo), Le(t), null
      );
    case 10:
      return ba(t.type._context), Le(t), null;
    case 17:
      return Be(t.type) && ho(), Le(t), null;
    case 19:
      if ((te(ae), (o = t.memoizedState), o === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Lr(o, !1);
        else {
          if (ve !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = So(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Lr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return b(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            de() > cr &&
            ((t.flags |= 128), (r = !0), Lr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = So(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Lr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !oe)
            )
              return Le(t), null;
          } else
            2 * de() - o.renderingStartTime > cr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Lr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = de()),
          (t.sibling = null),
          (n = ae.current),
          b(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        mu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function km(e, t) {
  switch ((Xa(t), t.tag)) {
    case 1:
      return (
        Be(t.type) && ho(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ur(),
        te(Ae),
        te(je),
        lu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ru(t), null;
    case 13:
      if (
        (te(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        ir();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(ae), null;
    case 4:
      return ur(), null;
    case 10:
      return ba(t.type._context), null;
    case 22:
    case 23:
      return mu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var $l = !1,
  Re = !1,
  Em = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function Gn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function ma(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var Hs = !1;
function Cm(e, t) {
  if (((qi = so), (e = Cf()), Ya(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            s = 0,
            f = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var k;
              d !== n || (l !== 0 && d.nodeType !== 3) || (a = i + l),
                d !== o || (r !== 0 && d.nodeType !== 3) || (u = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (k = d.firstChild) !== null;

            )
              (p = d), (d = k);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++s === l && (a = i),
                p === o && ++f === r && (u = i),
                (k = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = k;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (bi = { focusedElem: e, selectionRange: n }, so = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var w = S.memoizedProps,
                    j = S.memoizedState,
                    h = t.stateNode,
                    c = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : ct(t.type, w),
                      j,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (E) {
          ce(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (S = Hs), (Hs = !1), S;
}
function Wr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ma(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Bo(e, t) {
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
function va(e) {
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
function xd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), xd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[kt], delete t[ll], delete t[na], delete t[im], delete t[am])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Sd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ws(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sd(e.return)) return null;
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
function ga(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = po));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ga(e, t, n), e = e.sibling; e !== null; ) ga(e, t, n), (e = e.sibling);
}
function ya(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ya(e, t, n), e = e.sibling; e !== null; ) ya(e, t, n), (e = e.sibling);
}
var Ce = null,
  ft = !1;
function Ht(e, t, n) {
  for (n = n.child; n !== null; ) kd(e, t, n), (n = n.sibling);
}
function kd(e, t, n) {
  if (Et && typeof Et.onCommitFiberUnmount == "function")
    try {
      Et.onCommitFiberUnmount(Do, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || Gn(n, t);
    case 6:
      var r = Ce,
        l = ft;
      (Ce = null),
        Ht(e, t, n),
        (Ce = r),
        (ft = l),
        Ce !== null &&
          (ft
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null &&
        (ft
          ? ((e = Ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? mi(e.parentNode, n)
              : e.nodeType === 1 && mi(e, n),
            br(e))
          : mi(Ce, n.stateNode));
      break;
    case 4:
      (r = Ce),
        (l = ft),
        (Ce = n.stateNode.containerInfo),
        (ft = !0),
        Ht(e, t, n),
        (Ce = r),
        (ft = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ma(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ht(e, t, n);
      break;
    case 1:
      if (
        !Re &&
        (Gn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ce(n, t, a);
        }
      Ht(e, t, n);
      break;
    case 21:
      Ht(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), Ht(e, t, n), (Re = r))
        : Ht(e, t, n);
      break;
    default:
      Ht(e, t, n);
  }
}
function Qs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Em()),
      t.forEach(function (r) {
        var l = Mm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function st(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ce = a.stateNode), (ft = !1);
              break e;
            case 3:
              (Ce = a.stateNode.containerInfo), (ft = !0);
              break e;
            case 4:
              (Ce = a.stateNode.containerInfo), (ft = !0);
              break e;
          }
          a = a.return;
        }
        if (Ce === null) throw Error(_(160));
        kd(o, i, l), (Ce = null), (ft = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        ce(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ed(t, e), (t = t.sibling);
}
function Ed(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((st(t, e), wt(e), r & 4)) {
        try {
          Wr(3, e, e.return), Bo(3, e);
        } catch (w) {
          ce(e, e.return, w);
        }
        try {
          Wr(5, e, e.return);
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      break;
    case 1:
      st(t, e), wt(e), r & 512 && n !== null && Gn(n, n.return);
      break;
    case 5:
      if (
        (st(t, e),
        wt(e),
        r & 512 && n !== null && Gn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Xr(l, "");
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Wc(l, o),
              Vi(a, i);
            var s = Vi(a, o);
            for (i = 0; i < u.length; i += 2) {
              var f = u[i],
                d = u[i + 1];
              f === "style"
                ? Xc(l, d)
                : f === "dangerouslySetInnerHTML"
                  ? Yc(l, d)
                  : f === "children"
                    ? Xr(l, d)
                    : za(l, f, d, s);
            }
            switch (a) {
              case "input":
                Ii(l, o);
                break;
              case "textarea":
                Qc(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var k = o.value;
                k != null
                  ? Jn(l, !!o.multiple, k, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Jn(l, !!o.multiple, o.defaultValue, !0)
                      : Jn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[ll] = o;
          } catch (w) {
            ce(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((st(t, e), wt(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (st(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          br(t.containerInfo);
        } catch (w) {
          ce(e, e.return, w);
        }
      break;
    case 4:
      st(t, e), wt(e);
      break;
    case 13:
      st(t, e),
        wt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (pu = de())),
        r & 4 && Qs(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (s = Re) || f), st(t, e), (Re = s)) : st(t, e),
        wt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (z = e, f = e.child; f !== null; ) {
            for (d = z = f; z !== null; ) {
              switch (((p = z), (k = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wr(4, p, p.return);
                  break;
                case 1:
                  Gn(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (w) {
                      ce(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Gn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ys(d);
                    continue;
                  }
              }
              k !== null ? ((k.return = p), (z = k)) : Ys(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (l = d.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = d.stateNode),
                      (u = d.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Gc("display", i)));
              } catch (w) {
                ce(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = s ? "" : d.memoizedProps;
              } catch (w) {
                ce(e, e.return, w);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      st(t, e), wt(e), r & 4 && Qs(e);
      break;
    case 21:
      break;
    default:
      st(t, e), wt(e);
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Xr(l, ""), (r.flags &= -33));
          var o = Ws(e);
          ya(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Ws(e);
          ga(e, a, i);
          break;
        default:
          throw Error(_(161));
      }
    } catch (u) {
      ce(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Pm(e, t, n) {
  (z = e), Cd(e);
}
function Cd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || $l;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Re;
        a = $l;
        var s = Re;
        if ((($l = i), (Re = u) && !s))
          for (z = l; z !== null; )
            (i = z),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Gs(l)
                : u !== null
                  ? ((u.return = i), (z = u))
                  : Gs(l);
        for (; o !== null; ) (z = o), Cd(o), (o = o.sibling);
        (z = l), ($l = a), (Re = s);
      }
      Ks(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (z = o)) : Ks(e);
  }
}
function Ks(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || Bo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && js(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                js(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                  var f = s.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && br(d);
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
              throw Error(_(163));
          }
        Re || (t.flags & 512 && va(t));
      } catch (p) {
        ce(t, t.return, p);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Ys(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Gs(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bo(4, t);
          } catch (u) {
            ce(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ce(t, l, u);
            }
          }
          var o = t.return;
          try {
            va(t);
          } catch (u) {
            ce(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            va(t);
          } catch (u) {
            ce(t, i, u);
          }
      }
    } catch (u) {
      ce(t, t.return, u);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (z = a);
      break;
    }
    z = t.return;
  }
}
var _m = Math.ceil,
  Co = Ot.ReactCurrentDispatcher,
  fu = Ot.ReactCurrentOwner,
  lt = Ot.ReactCurrentBatchConfig,
  X = 0,
  we = null,
  he = null,
  Pe = 0,
  Qe = 0,
  Xn = fn(0),
  ve = 0,
  cl = null,
  Ln = 0,
  $o = 0,
  du = 0,
  Qr = null,
  Ie = null,
  pu = 0,
  cr = 1 / 0,
  Nt = null,
  Po = !1,
  wa = null,
  nn = null,
  Vl = !1,
  Zt = null,
  _o = 0,
  Kr = 0,
  xa = null,
  eo = -1,
  to = 0;
function ze() {
  return X & 6 ? de() : eo !== -1 ? eo : (eo = de());
}
function rn(e) {
  return e.mode & 1
    ? X & 2 && Pe !== 0
      ? Pe & -Pe
      : sm.transition !== null
        ? (to === 0 && (to = uf()), to)
        : ((e = Z),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : mf(e.type))),
          e)
    : 1;
}
function mt(e, t, n, r) {
  if (50 < Kr) throw ((Kr = 0), (xa = null), Error(_(185)));
  hl(e, n, r),
    (!(X & 2) || e !== we) &&
      (e === we && (!(X & 2) && ($o |= n), ve === 4 && Gt(e, Pe)),
      $e(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((cr = de() + 500), Io && dn()));
}
function $e(e, t) {
  var n = e.callbackNode;
  sh(e, t);
  var r = uo(e, e === we ? Pe : 0);
  if (r === 0)
    n !== null && rs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && rs(n), t === 1))
      e.tag === 0 ? um(Xs.bind(null, e)) : zf(Xs.bind(null, e)),
        lm(function () {
          !(X & 6) && dn();
        }),
        (n = null);
    else {
      switch (sf(r)) {
        case 1:
          n = Aa;
          break;
        case 4:
          n = of;
          break;
        case 16:
          n = ao;
          break;
        case 536870912:
          n = af;
          break;
        default:
          n = ao;
      }
      n = Dd(n, Pd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Pd(e, t) {
  if (((eo = -1), (to = 0), X & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (nr() && e.callbackNode !== n) return null;
  var r = uo(e, e === we ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = No(e, r);
  else {
    t = r;
    var l = X;
    X |= 2;
    var o = Nd();
    (we !== e || Pe !== t) && ((Nt = null), (cr = de() + 500), En(e, t));
    do
      try {
        Rm();
        break;
      } catch (a) {
        _d(e, a);
      }
    while (!0);
    qa(),
      (Co.current = o),
      (X = l),
      he !== null ? (t = 0) : ((we = null), (Pe = 0), (t = ve));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Yi(e)), l !== 0 && ((r = l), (t = Sa(e, l)))), t === 1)
    )
      throw ((n = cl), En(e, 0), Gt(e, r), $e(e, de()), n);
    if (t === 6) Gt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Nm(l) &&
          ((t = No(e, r)),
          t === 2 && ((o = Yi(e)), o !== 0 && ((r = o), (t = Sa(e, o)))),
          t === 1))
      )
        throw ((n = cl), En(e, 0), Gt(e, r), $e(e, de()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          vn(e, Ie, Nt);
          break;
        case 3:
          if (
            (Gt(e, r), (r & 130023424) === r && ((t = pu + 500 - de()), 10 < t))
          ) {
            if (uo(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ze(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ta(vn.bind(null, e, Ie, Nt), t);
            break;
          }
          vn(e, Ie, Nt);
          break;
        case 4:
          if ((Gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - ht(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = de() - r),
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
                          : 1960 * _m(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ta(vn.bind(null, e, Ie, Nt), r);
            break;
          }
          vn(e, Ie, Nt);
          break;
        case 5:
          vn(e, Ie, Nt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return $e(e, de()), e.callbackNode === n ? Pd.bind(null, e) : null;
}
function Sa(e, t) {
  var n = Qr;
  return (
    e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256),
    (e = No(e, t)),
    e !== 2 && ((t = Ie), (Ie = n), t !== null && ka(t)),
    e
  );
}
function ka(e) {
  Ie === null ? (Ie = e) : Ie.push.apply(Ie, e);
}
function Nm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!vt(o(), l)) return !1;
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
function Gt(e, t) {
  for (
    t &= ~du,
      t &= ~$o,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ht(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Xs(e) {
  if (X & 6) throw Error(_(327));
  nr();
  var t = uo(e, 0);
  if (!(t & 1)) return $e(e, de()), null;
  var n = No(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yi(e);
    r !== 0 && ((t = r), (n = Sa(e, r)));
  }
  if (n === 1) throw ((n = cl), En(e, 0), Gt(e, t), $e(e, de()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    vn(e, Ie, Nt),
    $e(e, de()),
    null
  );
}
function hu(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((cr = de() + 500), Io && dn());
  }
}
function Rn(e) {
  Zt !== null && Zt.tag === 0 && !(X & 6) && nr();
  var t = X;
  X |= 1;
  var n = lt.transition,
    r = Z;
  try {
    if (((lt.transition = null), (Z = 1), e)) return e();
  } finally {
    (Z = r), (lt.transition = n), (X = t), !(X & 6) && dn();
  }
}
function mu() {
  (Qe = Xn.current), te(Xn);
}
function En(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), rm(n)), he !== null))
    for (n = he.return; n !== null; ) {
      var r = n;
      switch ((Xa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ho();
          break;
        case 3:
          ur(), te(Ae), te(je), lu();
          break;
        case 5:
          ru(r);
          break;
        case 4:
          ur();
          break;
        case 13:
          te(ae);
          break;
        case 19:
          te(ae);
          break;
        case 10:
          ba(r.type._context);
          break;
        case 22:
        case 23:
          mu();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (he = e = ln(e.current, null)),
    (Pe = Qe = t),
    (ve = 0),
    (cl = null),
    (du = $o = Ln = 0),
    (Ie = Qr = null),
    wn !== null)
  ) {
    for (t = 0; t < wn.length; t++)
      if (((n = wn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    wn = null;
  }
  return e;
}
function _d(e, t) {
  do {
    var n = he;
    try {
      if ((qa(), (Jl.current = Eo), ko)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ko = !1;
      }
      if (
        ((Nn = 0),
        (ye = me = ue = null),
        (Hr = !1),
        (al = 0),
        (fu.current = null),
        n === null || n.return === null)
      ) {
        (ve = 1), (cl = t), (he = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = Pe),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            f = a,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = f.alternate;
            p
              ? ((f.updateQueue = p.updateQueue),
                (f.memoizedState = p.memoizedState),
                (f.lanes = p.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var k = Os(i);
          if (k !== null) {
            (k.flags &= -257),
              Is(k, i, a, o, t),
              k.mode & 1 && Fs(o, s, t),
              (t = k),
              (u = s);
            var S = t.updateQueue;
            if (S === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else S.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Fs(o, s, t), vu();
              break e;
            }
            u = Error(_(426));
          }
        } else if (oe && a.mode & 1) {
          var j = Os(i);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              Is(j, i, a, o, t),
              Za(sr(u, a));
            break e;
          }
        }
        (o = u = sr(u, a)),
          ve !== 4 && (ve = 2),
          Qr === null ? (Qr = [o]) : Qr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = sd(o, u, t);
              Rs(o, h);
              break e;
            case 1:
              a = u;
              var c = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (nn === null || !nn.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var E = cd(o, a, t);
                Rs(o, E);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Rd(n);
    } catch (R) {
      (t = R), he === n && n !== null && (he = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Nd() {
  var e = Co.current;
  return (Co.current = Eo), e === null ? Eo : e;
}
function vu() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    we === null || (!(Ln & 268435455) && !($o & 268435455)) || Gt(we, Pe);
}
function No(e, t) {
  var n = X;
  X |= 2;
  var r = Nd();
  (we !== e || Pe !== t) && ((Nt = null), En(e, t));
  do
    try {
      Lm();
      break;
    } catch (l) {
      _d(e, l);
    }
  while (!0);
  if ((qa(), (X = n), (Co.current = r), he !== null)) throw Error(_(261));
  return (we = null), (Pe = 0), ve;
}
function Lm() {
  for (; he !== null; ) Ld(he);
}
function Rm() {
  for (; he !== null && !eh(); ) Ld(he);
}
function Ld(e) {
  var t = Td(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Rd(e) : (he = t),
    (fu.current = null);
}
function Rd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = km(n, t)), n !== null)) {
        (n.flags &= 32767), (he = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ve = 6), (he = null);
        return;
      }
    } else if (((n = Sm(n, t, Qe)), n !== null)) {
      he = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function vn(e, t, n) {
  var r = Z,
    l = lt.transition;
  try {
    (lt.transition = null), (Z = 1), jm(e, t, n, r);
  } finally {
    (lt.transition = l), (Z = r);
  }
  return null;
}
function jm(e, t, n, r) {
  do nr();
  while (Zt !== null);
  if (X & 6) throw Error(_(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (ch(e, o),
    e === we && ((he = we = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Vl ||
      ((Vl = !0),
      Dd(ao, function () {
        return nr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = lt.transition), (lt.transition = null);
    var i = Z;
    Z = 1;
    var a = X;
    (X |= 4),
      (fu.current = null),
      Cm(e, n),
      Ed(n, e),
      Zh(bi),
      (so = !!qi),
      (bi = qi = null),
      (e.current = n),
      Pm(n),
      th(),
      (X = a),
      (Z = i),
      (lt.transition = o);
  } else e.current = n;
  if (
    (Vl && ((Vl = !1), (Zt = e), (_o = l)),
    (o = e.pendingLanes),
    o === 0 && (nn = null),
    lh(n.stateNode),
    $e(e, de()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Po) throw ((Po = !1), (e = wa), (wa = null), e);
  return (
    _o & 1 && e.tag !== 0 && nr(),
    (o = e.pendingLanes),
    o & 1 ? (e === xa ? Kr++ : ((Kr = 0), (xa = e))) : (Kr = 0),
    dn(),
    null
  );
}
function nr() {
  if (Zt !== null) {
    var e = sf(_o),
      t = lt.transition,
      n = Z;
    try {
      if (((lt.transition = null), (Z = 16 > e ? 16 : e), Zt === null))
        var r = !1;
      else {
        if (((e = Zt), (Zt = null), (_o = 0), X & 6)) throw Error(_(331));
        var l = X;
        for (X |= 4, z = e.current; z !== null; ) {
          var o = z,
            i = o.child;
          if (z.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (z = s; z !== null; ) {
                  var f = z;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wr(8, f, o);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (z = d);
                  else
                    for (; z !== null; ) {
                      f = z;
                      var p = f.sibling,
                        k = f.return;
                      if ((xd(f), f === s)) {
                        z = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = k), (z = p);
                        break;
                      }
                      z = k;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var w = S.child;
                if (w !== null) {
                  S.child = null;
                  do {
                    var j = w.sibling;
                    (w.sibling = null), (w = j);
                  } while (w !== null);
                }
              }
              z = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (z = i);
          else
            e: for (; z !== null; ) {
              if (((o = z), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wr(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (z = h);
                break e;
              }
              z = o.return;
            }
        }
        var c = e.current;
        for (z = c; z !== null; ) {
          i = z;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (z = m);
          else
            e: for (i = c; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bo(9, a);
                  }
                } catch (R) {
                  ce(a, a.return, R);
                }
              if (a === i) {
                z = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (z = E);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((X = l), dn(), Et && typeof Et.onPostCommitFiberRoot == "function")
        )
          try {
            Et.onPostCommitFiberRoot(Do, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Z = n), (lt.transition = t);
    }
  }
  return !1;
}
function Zs(e, t, n) {
  (t = sr(n, t)),
    (t = sd(e, t, 1)),
    (e = tn(e, t, 1)),
    (t = ze()),
    e !== null && (hl(e, 1, t), $e(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Zs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Zs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (nn === null || !nn.has(r)))
        ) {
          (e = sr(n, e)),
            (e = cd(t, e, 1)),
            (t = tn(t, e, 1)),
            (e = ze()),
            t !== null && (hl(t, 1, e), $e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Tm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (Pe & n) === n &&
      (ve === 4 || (ve === 3 && (Pe & 130023424) === Pe && 500 > de() - pu)
        ? En(e, 0)
        : (du |= n)),
    $e(e, t);
}
function jd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Dl), (Dl <<= 1), !(Dl & 130023424) && (Dl = 4194304))
      : (t = 1));
  var n = ze();
  (e = zt(e, t)), e !== null && (hl(e, t, n), $e(e, n));
}
function Dm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), jd(e, n);
}
function Mm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), jd(e, n);
}
var Td;
Td = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) Ue = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), xm(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), oe && t.flags & 1048576 && Ff(t, go, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      bl(e, t), (e = t.pendingProps);
      var l = or(t, je.current);
      tr(t, n), (l = iu(null, t, r, e, l, n));
      var o = au();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Be(r) ? ((o = !0), mo(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            tu(t),
            (l.updater = Ao),
            (t.stateNode = l),
            (l._reactInternals = t),
            ua(t, r, e, n),
            (t = fa(null, t, r, !0, o, n)))
          : ((t.tag = 0), oe && o && Ga(t), Me(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (bl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Fm(r)),
          (e = ct(r, e)),
          l)
        ) {
          case 0:
            t = ca(null, t, r, e, n);
            break e;
          case 1:
            t = Bs(null, t, r, e, n);
            break e;
          case 11:
            t = Us(null, t, r, e, n);
            break e;
          case 14:
            t = As(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        ca(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Bs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((hd(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          $f(e, t),
          xo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = sr(Error(_(423)), t)), (t = $s(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = sr(Error(_(424)), t)), (t = $s(e, t, r, n, l));
            break e;
          } else
            for (
              Ke = en(t.stateNode.containerInfo.firstChild),
                Ye = t,
                oe = !0,
                pt = null,
                n = Af(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ir(), r === l)) {
            t = Ft(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Vf(t),
        e === null && oa(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        ea(r, l) ? (i = null) : o !== null && ea(r, o) && (t.flags |= 32),
        pd(e, t),
        Me(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && oa(t), null;
    case 13:
      return md(e, t, n);
    case 4:
      return (
        nu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ar(t, null, r, n)) : Me(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Us(e, t, r, l, n)
      );
    case 7:
      return Me(e, t, t.pendingProps, n), t.child;
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          b(yo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (vt(o.value, i)) {
            if (o.children === l.children && !Ae.current) {
              t = Ft(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Tt(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (s.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      ia(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(_(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  ia(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Me(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        tr(t, n),
        (l = ot(l)),
        (r = r(l)),
        (t.flags |= 1),
        Me(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ct(r, t.pendingProps)),
        (l = ct(r.type, l)),
        As(e, t, r, l, n)
      );
    case 15:
      return fd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        bl(e, t),
        (t.tag = 1),
        Be(r) ? ((e = !0), mo(t)) : (e = !1),
        tr(t, n),
        ud(t, r, l),
        ua(t, r, l, n),
        fa(null, t, r, !0, e, n)
      );
    case 19:
      return vd(e, t, n);
    case 22:
      return dd(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function Dd(e, t) {
  return lf(e, t);
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
function rt(e, t, n, r) {
  return new zm(e, t, n, r);
}
function gu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Fm(e) {
  if (typeof e == "function") return gu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Oa)) return 11;
    if (e === Ia) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = rt(e.tag, t, e.key, e.mode)),
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
function no(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) gu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case An:
        return Cn(n.children, l, o, t);
      case Fa:
        (i = 8), (l |= 8);
        break;
      case Di:
        return (
          (e = rt(12, n, t, l | 2)), (e.elementType = Di), (e.lanes = o), e
        );
      case Mi:
        return (e = rt(13, n, t, l)), (e.elementType = Mi), (e.lanes = o), e;
      case zi:
        return (e = rt(19, n, t, l)), (e.elementType = zi), (e.lanes = o), e;
      case $c:
        return Vo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ac:
              i = 10;
              break e;
            case Bc:
              i = 9;
              break e;
            case Oa:
              i = 11;
              break e;
            case Ia:
              i = 14;
              break e;
            case Qt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = rt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Cn(e, t, n, r) {
  return (e = rt(7, e, r, t)), (e.lanes = n), e;
}
function Vo(e, t, n, r) {
  return (
    (e = rt(22, e, r, t)),
    (e.elementType = $c),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ei(e, t, n) {
  return (e = rt(6, e, null, t)), (e.lanes = n), e;
}
function Ci(e, t, n) {
  return (
    (t = rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Om(e, t, n, r, l) {
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
    (this.eventTimes = li(0)),
    (this.expirationTimes = li(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = li(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function yu(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new Om(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = rt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    tu(o),
    e
  );
}
function Im(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Un,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Md(e) {
  if (!e) return an;
  e = e._reactInternals;
  e: {
    if (Tn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Be(n)) return Mf(e, n, t);
  }
  return t;
}
function zd(e, t, n, r, l, o, i, a, u) {
  return (
    (e = yu(n, r, !0, e, l, o, i, a, u)),
    (e.context = Md(null)),
    (n = e.current),
    (r = ze()),
    (l = rn(n)),
    (o = Tt(r, l)),
    (o.callback = t ?? null),
    tn(n, o, l),
    (e.current.lanes = l),
    hl(e, l, r),
    $e(e, r),
    e
  );
}
function Ho(e, t, n, r) {
  var l = t.current,
    o = ze(),
    i = rn(l);
  return (
    (n = Md(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Tt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = tn(l, t, i)),
    e !== null && (mt(e, l, i, o), Zl(e, l, i)),
    i
  );
}
function Lo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Js(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function wu(e, t) {
  Js(e, t), (e = e.alternate) && Js(e, t);
}
function Um() {
  return null;
}
var Fd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function xu(e) {
  this._internalRoot = e;
}
Wo.prototype.render = xu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Ho(e, t, null, null);
};
Wo.prototype.unmount = xu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rn(function () {
      Ho(null, e, null, null);
    }),
      (t[Mt] = null);
  }
};
function Wo(e) {
  this._internalRoot = e;
}
Wo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = df();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++);
    Yt.splice(n, 0, e), n === 0 && hf(e);
  }
};
function Su(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Qo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function qs() {}
function Am(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = Lo(i);
        o.call(s);
      };
    }
    var i = zd(t, r, e, 0, null, !1, !1, "", qs);
    return (
      (e._reactRootContainer = i),
      (e[Mt] = i.current),
      nl(e.nodeType === 8 ? e.parentNode : e),
      Rn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = Lo(u);
      a.call(s);
    };
  }
  var u = yu(e, 0, !1, null, null, !1, !1, "", qs);
  return (
    (e._reactRootContainer = u),
    (e[Mt] = u.current),
    nl(e.nodeType === 8 ? e.parentNode : e),
    Rn(function () {
      Ho(t, u, n, r);
    }),
    u
  );
}
function Ko(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = Lo(i);
        a.call(u);
      };
    }
    Ho(t, i, e, l);
  } else i = Am(n, t, e, l, r);
  return Lo(i);
}
cf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fr(t.pendingLanes);
        n !== 0 &&
          (Ba(t, n | 1), $e(t, de()), !(X & 6) && ((cr = de() + 500), dn()));
      }
      break;
    case 13:
      Rn(function () {
        var r = zt(e, 1);
        if (r !== null) {
          var l = ze();
          mt(r, e, 1, l);
        }
      }),
        wu(e, 1);
  }
};
$a = function (e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = ze();
      mt(t, e, 134217728, n);
    }
    wu(e, 134217728);
  }
};
ff = function (e) {
  if (e.tag === 13) {
    var t = rn(e),
      n = zt(e, t);
    if (n !== null) {
      var r = ze();
      mt(n, e, t, r);
    }
    wu(e, t);
  }
};
df = function () {
  return Z;
};
pf = function (e, t) {
  var n = Z;
  try {
    return (Z = e), t();
  } finally {
    Z = n;
  }
};
Wi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ii(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Oo(r);
            if (!l) throw Error(_(90));
            Hc(r), Ii(r, l);
          }
        }
      }
      break;
    case "textarea":
      Qc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Jn(e, !!n.multiple, t, !1);
  }
};
qc = hu;
bc = Rn;
var Bm = { usingClientEntryPoint: !1, Events: [vl, Hn, Oo, Zc, Jc, hu] },
  Rr = {
    findFiberByHostInstance: yn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  $m = {
    bundleType: Rr.bundleType,
    version: Rr.version,
    rendererPackageName: Rr.rendererPackageName,
    rendererConfig: Rr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = nf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Rr.findFiberByHostInstance || Um,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hl.isDisabled && Hl.supportsFiber)
    try {
      (Do = Hl.inject($m)), (Et = Hl);
    } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bm;
Xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Su(t)) throw Error(_(200));
  return Im(e, t, null, n);
};
Xe.createRoot = function (e, t) {
  if (!Su(e)) throw Error(_(299));
  var n = !1,
    r = "",
    l = Fd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = yu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Mt] = t.current),
    nl(e.nodeType === 8 ? e.parentNode : e),
    new xu(t)
  );
};
Xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = nf(t)), (e = e === null ? null : e.stateNode), e;
};
Xe.flushSync = function (e) {
  return Rn(e);
};
Xe.hydrate = function (e, t, n) {
  if (!Qo(t)) throw Error(_(200));
  return Ko(null, e, t, !0, n);
};
Xe.hydrateRoot = function (e, t, n) {
  if (!Su(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Fd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = zd(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Mt] = t.current),
    nl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Wo(t);
};
Xe.render = function (e, t, n) {
  if (!Qo(t)) throw Error(_(200));
  return Ko(null, e, t, !1, n);
};
Xe.unmountComponentAtNode = function (e) {
  if (!Qo(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (Rn(function () {
        Ko(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Mt] = null);
        });
      }),
      !0)
    : !1;
};
Xe.unstable_batchedUpdates = hu;
Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Qo(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Ko(e, t, n, !1, r);
};
Xe.version = "18.3.1-next-f1338f8080-20240426";
function Od() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Od);
    } catch (e) {
      console.error(e);
    }
}
Od(), (Fc.exports = Xe);
var ku = Fc.exports;
const Vm = kc(ku),
  Hm = Sc({ __proto__: null, default: Vm }, [ku]);
var bs = ku;
(ji.createRoot = bs.createRoot), (ji.hydrateRoot = bs.hydrateRoot);
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function re() {
  return (
    (re = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    re.apply(this, arguments)
  );
}
var pe;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(pe || (pe = {}));
const ec = "popstate";
function Wm(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location;
    return fl(
      "",
      { pathname: o, search: i, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : un(l);
  }
  return Km(t, n, null, e);
}
function Q(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function fr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Qm() {
  return Math.random().toString(36).substr(2, 8);
}
function tc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function fl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    re(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? pn(t) : t,
      { state: n, key: (t && t.key) || r || Qm() },
    )
  );
}
function un(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function pn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Km(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = pe.Pop,
    u = null,
    s = f();
  s == null && ((s = 0), i.replaceState(re({}, i.state, { idx: s }), ""));
  function f() {
    return (i.state || { idx: null }).idx;
  }
  function d() {
    a = pe.Pop;
    let j = f(),
      h = j == null ? null : j - s;
    (s = j), u && u({ action: a, location: w.location, delta: h });
  }
  function p(j, h) {
    a = pe.Push;
    let c = fl(w.location, j, h);
    s = f() + 1;
    let m = tc(c, s),
      E = w.createHref(c);
    try {
      i.pushState(m, "", E);
    } catch (R) {
      if (R instanceof DOMException && R.name === "DataCloneError") throw R;
      l.location.assign(E);
    }
    o && u && u({ action: a, location: w.location, delta: 1 });
  }
  function k(j, h) {
    a = pe.Replace;
    let c = fl(w.location, j, h);
    s = f();
    let m = tc(c, s),
      E = w.createHref(c);
    i.replaceState(m, "", E),
      o && u && u({ action: a, location: w.location, delta: 0 });
  }
  function S(j) {
    let h = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof j == "string" ? j : un(j);
    return (
      (c = c.replace(/ $/, "%20")),
      Q(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          c,
      ),
      new URL(c, h)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(j) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(ec, d),
        (u = j),
        () => {
          l.removeEventListener(ec, d), (u = null);
        }
      );
    },
    createHref(j) {
      return t(l, j);
    },
    createURL: S,
    encodeLocation(j) {
      let h = S(j);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: k,
    go(j) {
      return i.go(j);
    },
  };
  return w;
}
var le;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(le || (le = {}));
const Ym = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Gm(e) {
  return e.index === !0;
}
function Ea(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        a = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (Q(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route",
        ),
        Q(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Gm(l))
      ) {
        let u = re({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = re({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = Ea(l.children, t, i, r)), u
        );
      }
    })
  );
}
function Zn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? pn(t) : t,
    l = gt(r.pathname || "/", n);
  if (l == null) return null;
  let o = Id(e);
  Zm(o);
  let i = null;
  for (let a = 0; i == null && a < o.length; ++a) {
    let u = a0(l);
    i = o0(o[a], u);
  }
  return i;
}
function Xm(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Id(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (Q(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Pt([r, u.relativePath]),
      f = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (Q(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".'),
      ),
      Id(o.children, t, f, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: r0(s, o.index), routesMeta: f });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i);
      else for (let u of Ud(o.path)) l(o, i, u);
    }),
    t
  );
}
function Ud(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Ud(r.join("/")),
    a = [];
  return (
    a.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
    l && a.push(...i),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Zm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : l0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Jm = /^:[\w-]+$/,
  qm = 3,
  bm = 2,
  e0 = 1,
  t0 = 10,
  n0 = -2,
  nc = (e) => e === "*";
function r0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(nc) && (r += n0),
    t && (r += bm),
    n
      .filter((l) => !nc(l))
      .reduce((l, o) => l + (Jm.test(o) ? qm : o === "" ? e0 : t0), r)
  );
}
function l0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function o0(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      u = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      f = Ca(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s,
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let d = a.route;
    o.push({
      params: r,
      pathname: Pt([l, f.pathname]),
      pathnameBase: c0(Pt([l, f.pathnameBase])),
      route: d,
    }),
      f.pathnameBase !== "/" && (l = Pt([l, f.pathnameBase]));
  }
  return o;
}
function Ca(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = i0(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, f, d) => {
      let { paramName: p, isOptional: k } = f;
      if (p === "*") {
        let w = a[d] || "";
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const S = a[d];
      return (
        k && !S ? (s[p] = void 0) : (s[p] = (S || "").replace(/%2F/g, "/")), s
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function i0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    fr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (l += "\\/*$")
        : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function a0(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      fr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function gt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function u0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? pn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : s0(n, t)) : t,
    search: f0(r),
    hash: d0(l),
  };
}
function s0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Pi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ad(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Eu(e, t) {
  let n = Ad(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Cu(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = pn(e))
    : ((l = re({}, e)),
      Q(
        !l.pathname || !l.pathname.includes("?"),
        Pi("?", "pathname", "search", l),
      ),
      Q(
        !l.pathname || !l.pathname.includes("#"),
        Pi("#", "pathname", "hash", l),
      ),
      Q(!l.search || !l.search.includes("#"), Pi("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    a;
  if (i == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && i.startsWith("..")) {
      let p = i.split("/");
      for (; p[0] === ".."; ) p.shift(), (d -= 1);
      l.pathname = p.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let u = u0(l, a),
    s = i && i !== "/" && i.endsWith("/"),
    f = (o || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || f) && (u.pathname += "/"), u;
}
const Pt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  c0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  f0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  d0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  Yo = function (t, n) {
    n === void 0 && (n = 302);
    let r = n;
    typeof r == "number"
      ? (r = { status: r })
      : typeof r.status > "u" && (r.status = 302);
    let l = new Headers(r.headers);
    return l.set("Location", t), new Response(null, re({}, r, { headers: l }));
  };
class Pu {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function _u(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Bd = ["post", "put", "patch", "delete"],
  p0 = new Set(Bd),
  h0 = ["get", ...Bd],
  m0 = new Set(h0),
  v0 = new Set([301, 302, 303, 307, 308]),
  g0 = new Set([307, 308]),
  _i = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  y0 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  jr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Nu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  w0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  $d = "remix-router-transitions";
function x0(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  Q(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let g = e.detectErrorBoundary;
    l = (x) => ({ hasErrorBoundary: g(x) });
  } else l = w0;
  let o = {},
    i = Ea(e.routes, l, void 0, o),
    a,
    u = e.basename || "/",
    s = e.unstable_dataStrategy || C0,
    f = re(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    d = null,
    p = new Set(),
    k = null,
    S = null,
    w = null,
    j = e.hydrationData != null,
    h = Zn(i, e.history.location, u),
    c = null;
  if (h == null) {
    let g = be(404, { pathname: e.history.location.pathname }),
      { matches: x, route: C } = dc(i);
    (h = x), (c = { [C.id]: g });
  }
  let m,
    E = h.some((g) => g.route.lazy),
    R = h.some((g) => g.route.loader);
  if (E) m = !1;
  else if (!R) m = !0;
  else if (f.v7_partialHydration) {
    let g = e.hydrationData ? e.hydrationData.loaderData : null,
      x = e.hydrationData ? e.hydrationData.errors : null,
      C = (N) =>
        N.route.loader
          ? typeof N.route.loader == "function" && N.route.loader.hydrate === !0
            ? !1
            : (g && g[N.route.id] !== void 0) || (x && x[N.route.id] !== void 0)
          : !0;
    if (x) {
      let N = h.findIndex((F) => x[F.route.id] !== void 0);
      m = h.slice(0, N + 1).every(C);
    } else m = h.every(C);
  } else m = e.hydrationData != null;
  let D,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: h,
      initialized: m,
      navigation: _i,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || c,
      fetchers: new Map(),
      blockers: new Map(),
    },
    T = pe.Pop,
    I = !1,
    M,
    Y = !1,
    fe = new Map(),
    ie = null,
    xe = !1,
    at = !1,
    Ut = [],
    At = [],
    L = new Map(),
    A = 0,
    $ = -1,
    J = new Map(),
    q = new Set(),
    ut = new Map(),
    Ve = new Map(),
    He = new Set(),
    Te = new Map(),
    Je = new Map(),
    Zo = !1;
  function tp() {
    if (
      ((d = e.history.listen((g) => {
        let { action: x, location: C, delta: N } = g;
        if (Zo) {
          Zo = !1;
          return;
        }
        fr(
          Je.size === 0 || N != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let F = $u({
          currentLocation: v.location,
          nextLocation: C,
          historyAction: x,
        });
        if (F && N != null) {
          (Zo = !0),
            e.history.go(N * -1),
            El(F, {
              state: "blocked",
              location: C,
              proceed() {
                El(F, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: C,
                }),
                  e.history.go(N);
              },
              reset() {
                let H = new Map(v.blockers);
                H.set(F, jr), We({ blockers: H });
              },
            });
          return;
        }
        return hn(x, C);
      })),
      n)
    ) {
      O0(t, fe);
      let g = () => I0(t, fe);
      t.addEventListener("pagehide", g),
        (ie = () => t.removeEventListener("pagehide", g));
    }
    return v.initialized || hn(pe.Pop, v.location, { initialHydration: !0 }), D;
  }
  function np() {
    d && d(),
      ie && ie(),
      p.clear(),
      M && M.abort(),
      v.fetchers.forEach((g, x) => kl(x)),
      v.blockers.forEach((g, x) => Bu(x));
  }
  function rp(g) {
    return p.add(g), () => p.delete(g);
  }
  function We(g, x) {
    x === void 0 && (x = {}), (v = re({}, v, g));
    let C = [],
      N = [];
    f.v7_fetcherPersist &&
      v.fetchers.forEach((F, H) => {
        F.state === "idle" && (He.has(H) ? N.push(H) : C.push(H));
      }),
      [...p].forEach((F) =>
        F(v, {
          deletedFetchers: N,
          unstable_viewTransitionOpts: x.viewTransitionOpts,
          unstable_flushSync: x.flushSync === !0,
        }),
      ),
      f.v7_fetcherPersist &&
        (C.forEach((F) => v.fetchers.delete(F)), N.forEach((F) => kl(F)));
  }
  function vr(g, x, C) {
    var N, F;
    let { flushSync: H } = C === void 0 ? {} : C,
      U =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        dt(v.navigation.formMethod) &&
        v.navigation.state === "loading" &&
        ((N = g.state) == null ? void 0 : N._isRedirect) !== !0,
      O;
    x.actionData
      ? Object.keys(x.actionData).length > 0
        ? (O = x.actionData)
        : (O = null)
      : U
        ? (O = v.actionData)
        : (O = null);
    let W = x.loaderData
        ? cc(v.loaderData, x.loaderData, x.matches || [], x.errors)
        : v.loaderData,
      V = v.blockers;
    V.size > 0 && ((V = new Map(V)), V.forEach((B, ne) => V.set(ne, jr)));
    let Se =
      I === !0 ||
      (v.navigation.formMethod != null &&
        dt(v.navigation.formMethod) &&
        ((F = g.state) == null ? void 0 : F._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      xe ||
        T === pe.Pop ||
        (T === pe.Push
          ? e.history.push(g, g.state)
          : T === pe.Replace && e.history.replace(g, g.state));
    let ke;
    if (T === pe.Pop) {
      let B = fe.get(v.location.pathname);
      B && B.has(g.pathname)
        ? (ke = { currentLocation: v.location, nextLocation: g })
        : fe.has(g.pathname) &&
          (ke = { currentLocation: g, nextLocation: v.location });
    } else if (Y) {
      let B = fe.get(v.location.pathname);
      B
        ? B.add(g.pathname)
        : ((B = new Set([g.pathname])), fe.set(v.location.pathname, B)),
        (ke = { currentLocation: v.location, nextLocation: g });
    }
    We(
      re({}, x, {
        actionData: O,
        loaderData: W,
        historyAction: T,
        location: g,
        initialized: !0,
        navigation: _i,
        revalidation: "idle",
        restoreScrollPosition: Hu(g, x.matches || v.matches),
        preventScrollReset: Se,
        blockers: V,
      }),
      { viewTransitionOpts: ke, flushSync: H === !0 },
    ),
      (T = pe.Pop),
      (I = !1),
      (Y = !1),
      (xe = !1),
      (at = !1),
      (Ut = []),
      (At = []);
  }
  async function zu(g, x) {
    if (typeof g == "number") {
      e.history.go(g);
      return;
    }
    let C = Pa(
        v.location,
        v.matches,
        u,
        f.v7_prependBasename,
        g,
        f.v7_relativeSplatPath,
        x == null ? void 0 : x.fromRouteId,
        x == null ? void 0 : x.relative,
      ),
      {
        path: N,
        submission: F,
        error: H,
      } = rc(f.v7_normalizeFormMethod, !1, C, x),
      U = v.location,
      O = fl(v.location, N, x && x.state);
    O = re({}, O, e.history.encodeLocation(O));
    let W = x && x.replace != null ? x.replace : void 0,
      V = pe.Push;
    W === !0
      ? (V = pe.Replace)
      : W === !1 ||
        (F != null &&
          dt(F.formMethod) &&
          F.formAction === v.location.pathname + v.location.search &&
          (V = pe.Replace));
    let Se =
        x && "preventScrollReset" in x ? x.preventScrollReset === !0 : void 0,
      ke = (x && x.unstable_flushSync) === !0,
      B = $u({ currentLocation: U, nextLocation: O, historyAction: V });
    if (B) {
      El(B, {
        state: "blocked",
        location: O,
        proceed() {
          El(B, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: O,
          }),
            zu(g, x);
        },
        reset() {
          let ne = new Map(v.blockers);
          ne.set(B, jr), We({ blockers: ne });
        },
      });
      return;
    }
    return await hn(V, O, {
      submission: F,
      pendingError: H,
      preventScrollReset: Se,
      replace: x && x.replace,
      enableViewTransition: x && x.unstable_viewTransition,
      flushSync: ke,
    });
  }
  function lp() {
    if (
      (Jo(),
      We({ revalidation: "loading" }),
      v.navigation.state !== "submitting")
    ) {
      if (v.navigation.state === "idle") {
        hn(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      hn(T || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function hn(g, x, C) {
    M && M.abort(),
      (M = null),
      (T = g),
      (xe = (C && C.startUninterruptedRevalidation) === !0),
      pp(v.location, v.matches),
      (I = (C && C.preventScrollReset) === !0),
      (Y = (C && C.enableViewTransition) === !0);
    let N = a || i,
      F = C && C.overrideNavigation,
      H = Zn(N, x, u),
      U = (C && C.flushSync) === !0;
    if (!H) {
      let B = be(404, { pathname: x.pathname }),
        { matches: ne, route: ge } = dc(N);
      qo(),
        vr(
          x,
          { matches: ne, loaderData: {}, errors: { [ge.id]: B } },
          { flushSync: U },
        );
      return;
    }
    if (
      v.initialized &&
      !at &&
      j0(v.location, x) &&
      !(C && C.submission && dt(C.submission.formMethod))
    ) {
      vr(x, { matches: H }, { flushSync: U });
      return;
    }
    M = new AbortController();
    let O = In(e.history, x, M.signal, C && C.submission),
      W;
    if (C && C.pendingError)
      W = [Yr(H).route.id, { type: le.error, error: C.pendingError }];
    else if (C && C.submission && dt(C.submission.formMethod)) {
      let B = await op(O, x, C.submission, H, {
        replace: C.replace,
        flushSync: U,
      });
      if (B.shortCircuited) return;
      (W = B.pendingActionResult),
        (F = Ni(x, C.submission)),
        (U = !1),
        (O = In(e.history, O.url, O.signal));
    }
    let {
      shortCircuited: V,
      loaderData: Se,
      errors: ke,
    } = await ip(
      O,
      x,
      H,
      F,
      C && C.submission,
      C && C.fetcherSubmission,
      C && C.replace,
      C && C.initialHydration === !0,
      U,
      W,
    );
    V ||
      ((M = null),
      vr(x, re({ matches: H }, fc(W), { loaderData: Se, errors: ke })));
  }
  async function op(g, x, C, N, F) {
    F === void 0 && (F = {}), Jo();
    let H = z0(x, C);
    We({ navigation: H }, { flushSync: F.flushSync === !0 });
    let U,
      O = Na(N, x);
    if (!O.route.action && !O.route.lazy)
      U = {
        type: le.error,
        error: be(405, {
          method: g.method,
          pathname: x.pathname,
          routeId: O.route.id,
        }),
      };
    else if (((U = (await yr("action", g, [O], N))[0]), g.signal.aborted))
      return { shortCircuited: !0 };
    if (kn(U)) {
      let W;
      return (
        F && F.replace != null
          ? (W = F.replace)
          : (W =
              ac(U.response.headers.get("Location"), new URL(g.url), u) ===
              v.location.pathname + v.location.search),
        await gr(g, U, { submission: C, replace: W }),
        { shortCircuited: !0 }
      );
    }
    if (Sn(U)) throw be(400, { type: "defer-action" });
    if (nt(U)) {
      let W = Yr(N, O.route.id);
      return (
        (F && F.replace) !== !0 && (T = pe.Push),
        { pendingActionResult: [W.route.id, U] }
      );
    }
    return { pendingActionResult: [O.route.id, U] };
  }
  async function ip(g, x, C, N, F, H, U, O, W, V) {
    let Se = N || Ni(x, F),
      ke = F || H || mc(Se),
      B = a || i,
      [ne, ge] = lc(
        e.history,
        v,
        C,
        ke,
        x,
        f.v7_partialHydration && O === !0,
        f.unstable_skipActionErrorRevalidation,
        at,
        Ut,
        At,
        He,
        ut,
        q,
        B,
        u,
        V,
      );
    if (
      (qo(
        (G) =>
          !(C && C.some((De) => De.route.id === G)) ||
          (ne && ne.some((De) => De.route.id === G)),
      ),
      ($ = ++A),
      ne.length === 0 && ge.length === 0)
    ) {
      let G = Uu();
      return (
        vr(
          x,
          re(
            {
              matches: C,
              loaderData: {},
              errors: V && nt(V[1]) ? { [V[0]]: V[1].error } : null,
            },
            fc(V),
            G ? { fetchers: new Map(v.fetchers) } : {},
          ),
          { flushSync: W },
        ),
        { shortCircuited: !0 }
      );
    }
    if (!xe && (!f.v7_partialHydration || !O)) {
      ge.forEach((De) => {
        let qe = v.fetchers.get(De.key),
          Ee = Tr(void 0, qe ? qe.data : void 0);
        v.fetchers.set(De.key, Ee);
      });
      let G;
      V && !nt(V[1])
        ? (G = { [V[0]]: V[1].data })
        : v.actionData &&
          (Object.keys(v.actionData).length === 0
            ? (G = null)
            : (G = v.actionData)),
        We(
          re(
            { navigation: Se },
            G !== void 0 ? { actionData: G } : {},
            ge.length > 0 ? { fetchers: new Map(v.fetchers) } : {},
          ),
          { flushSync: W },
        );
    }
    ge.forEach((G) => {
      L.has(G.key) && $t(G.key), G.controller && L.set(G.key, G.controller);
    });
    let xr = () => ge.forEach((G) => $t(G.key));
    M && M.signal.addEventListener("abort", xr);
    let { loaderResults: Vt, fetcherResults: Mn } = await Fu(
      v.matches,
      C,
      ne,
      ge,
      g,
    );
    if (g.signal.aborted) return { shortCircuited: !0 };
    M && M.signal.removeEventListener("abort", xr),
      ge.forEach((G) => L.delete(G.key));
    let zn = pc([...Vt, ...Mn]);
    if (zn) {
      if (zn.idx >= ne.length) {
        let G = ge[zn.idx - ne.length].key;
        q.add(G);
      }
      return await gr(g, zn.result, { replace: U }), { shortCircuited: !0 };
    }
    let { loaderData: Fn, errors: yt } = sc(v, C, ne, Vt, V, ge, Mn, Te);
    Te.forEach((G, De) => {
      G.subscribe((qe) => {
        (qe || G.done) && Te.delete(De);
      });
    }),
      f.v7_partialHydration &&
        O &&
        v.errors &&
        Object.entries(v.errors)
          .filter((G) => {
            let [De] = G;
            return !ne.some((qe) => qe.route.id === De);
          })
          .forEach((G) => {
            let [De, qe] = G;
            yt = Object.assign(yt || {}, { [De]: qe });
          });
    let Cl = Uu(),
      Pl = Au($),
      _l = Cl || Pl || ge.length > 0;
    return re(
      { loaderData: Fn, errors: yt },
      _l ? { fetchers: new Map(v.fetchers) } : {},
    );
  }
  function ap(g, x, C, N) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    L.has(g) && $t(g);
    let F = (N && N.unstable_flushSync) === !0,
      H = a || i,
      U = Pa(
        v.location,
        v.matches,
        u,
        f.v7_prependBasename,
        C,
        f.v7_relativeSplatPath,
        x,
        N == null ? void 0 : N.relative,
      ),
      O = Zn(H, U, u);
    if (!O) {
      wr(g, x, be(404, { pathname: U }), { flushSync: F });
      return;
    }
    let {
      path: W,
      submission: V,
      error: Se,
    } = rc(f.v7_normalizeFormMethod, !0, U, N);
    if (Se) {
      wr(g, x, Se, { flushSync: F });
      return;
    }
    let ke = Na(O, W);
    if (((I = (N && N.preventScrollReset) === !0), V && dt(V.formMethod))) {
      up(g, x, W, ke, O, F, V);
      return;
    }
    ut.set(g, { routeId: x, path: W }), sp(g, x, W, ke, O, F, V);
  }
  async function up(g, x, C, N, F, H, U) {
    if ((Jo(), ut.delete(g), !N.route.action && !N.route.lazy)) {
      let Ee = be(405, { method: U.formMethod, pathname: C, routeId: x });
      wr(g, x, Ee, { flushSync: H });
      return;
    }
    let O = v.fetchers.get(g);
    Bt(g, F0(U, O), { flushSync: H });
    let W = new AbortController(),
      V = In(e.history, C, W.signal, U);
    L.set(g, W);
    let Se = A,
      B = (await yr("action", V, [N], F))[0];
    if (V.signal.aborted) {
      L.get(g) === W && L.delete(g);
      return;
    }
    if (f.v7_fetcherPersist && He.has(g)) {
      if (kn(B) || nt(B)) {
        Bt(g, Wt(void 0));
        return;
      }
    } else {
      if (kn(B))
        if ((L.delete(g), $ > Se)) {
          Bt(g, Wt(void 0));
          return;
        } else
          return q.add(g), Bt(g, Tr(U)), gr(V, B, { fetcherSubmission: U });
      if (nt(B)) {
        wr(g, x, B.error);
        return;
      }
    }
    if (Sn(B)) throw be(400, { type: "defer-action" });
    let ne = v.navigation.location || v.location,
      ge = In(e.history, ne, W.signal),
      xr = a || i,
      Vt =
        v.navigation.state !== "idle"
          ? Zn(xr, v.navigation.location, u)
          : v.matches;
    Q(Vt, "Didn't find any matches after fetcher action");
    let Mn = ++A;
    J.set(g, Mn);
    let zn = Tr(U, B.data);
    v.fetchers.set(g, zn);
    let [Fn, yt] = lc(
      e.history,
      v,
      Vt,
      U,
      ne,
      !1,
      f.unstable_skipActionErrorRevalidation,
      at,
      Ut,
      At,
      He,
      ut,
      q,
      xr,
      u,
      [N.route.id, B],
    );
    yt
      .filter((Ee) => Ee.key !== g)
      .forEach((Ee) => {
        let Sr = Ee.key,
          Wu = v.fetchers.get(Sr),
          mp = Tr(void 0, Wu ? Wu.data : void 0);
        v.fetchers.set(Sr, mp),
          L.has(Sr) && $t(Sr),
          Ee.controller && L.set(Sr, Ee.controller);
      }),
      We({ fetchers: new Map(v.fetchers) });
    let Cl = () => yt.forEach((Ee) => $t(Ee.key));
    W.signal.addEventListener("abort", Cl);
    let { loaderResults: Pl, fetcherResults: _l } = await Fu(
      v.matches,
      Vt,
      Fn,
      yt,
      ge,
    );
    if (W.signal.aborted) return;
    W.signal.removeEventListener("abort", Cl),
      J.delete(g),
      L.delete(g),
      yt.forEach((Ee) => L.delete(Ee.key));
    let G = pc([...Pl, ..._l]);
    if (G) {
      if (G.idx >= Fn.length) {
        let Ee = yt[G.idx - Fn.length].key;
        q.add(Ee);
      }
      return gr(ge, G.result);
    }
    let { loaderData: De, errors: qe } = sc(
      v,
      v.matches,
      Fn,
      Pl,
      void 0,
      yt,
      _l,
      Te,
    );
    if (v.fetchers.has(g)) {
      let Ee = Wt(B.data);
      v.fetchers.set(g, Ee);
    }
    Au(Mn),
      v.navigation.state === "loading" && Mn > $
        ? (Q(T, "Expected pending action"),
          M && M.abort(),
          vr(v.navigation.location, {
            matches: Vt,
            loaderData: De,
            errors: qe,
            fetchers: new Map(v.fetchers),
          }))
        : (We({
            errors: qe,
            loaderData: cc(v.loaderData, De, Vt, qe),
            fetchers: new Map(v.fetchers),
          }),
          (at = !1));
  }
  async function sp(g, x, C, N, F, H, U) {
    let O = v.fetchers.get(g);
    Bt(g, Tr(U, O ? O.data : void 0), { flushSync: H });
    let W = new AbortController(),
      V = In(e.history, C, W.signal);
    L.set(g, W);
    let Se = A,
      B = (await yr("loader", V, [N], F))[0];
    if (
      (Sn(B) && (B = (await Qd(B, V.signal, !0)) || B),
      L.get(g) === W && L.delete(g),
      !V.signal.aborted)
    ) {
      if (He.has(g)) {
        Bt(g, Wt(void 0));
        return;
      }
      if (kn(B))
        if ($ > Se) {
          Bt(g, Wt(void 0));
          return;
        } else {
          q.add(g), await gr(V, B);
          return;
        }
      if (nt(B)) {
        wr(g, x, B.error);
        return;
      }
      Q(!Sn(B), "Unhandled fetcher deferred data"), Bt(g, Wt(B.data));
    }
  }
  async function gr(g, x, C) {
    let {
      submission: N,
      fetcherSubmission: F,
      replace: H,
    } = C === void 0 ? {} : C;
    x.response.headers.has("X-Remix-Revalidate") && (at = !0);
    let U = x.response.headers.get("Location");
    Q(U, "Expected a Location header on the redirect Response"),
      (U = ac(U, new URL(g.url), u));
    let O = fl(v.location, U, { _isRedirect: !0 });
    if (n) {
      let ne = !1;
      if (x.response.headers.has("X-Remix-Reload-Document")) ne = !0;
      else if (Nu.test(U)) {
        const ge = e.history.createURL(U);
        ne = ge.origin !== t.location.origin || gt(ge.pathname, u) == null;
      }
      if (ne) {
        H ? t.location.replace(U) : t.location.assign(U);
        return;
      }
    }
    M = null;
    let W = H === !0 ? pe.Replace : pe.Push,
      { formMethod: V, formAction: Se, formEncType: ke } = v.navigation;
    !N && !F && V && Se && ke && (N = mc(v.navigation));
    let B = N || F;
    if (g0.has(x.response.status) && B && dt(B.formMethod))
      await hn(W, O, {
        submission: re({}, B, { formAction: U }),
        preventScrollReset: I,
      });
    else {
      let ne = Ni(O, N);
      await hn(W, O, {
        overrideNavigation: ne,
        fetcherSubmission: F,
        preventScrollReset: I,
      });
    }
  }
  async function yr(g, x, C, N) {
    try {
      let F = await P0(s, g, x, C, N, o, l);
      return await Promise.all(
        F.map((H, U) => {
          if (T0(H)) {
            let O = H.result;
            return {
              type: le.redirect,
              response: L0(O, x, C[U].route.id, N, u, f.v7_relativeSplatPath),
            };
          }
          return N0(H);
        }),
      );
    } catch (F) {
      return C.map(() => ({ type: le.error, error: F }));
    }
  }
  async function Fu(g, x, C, N, F) {
    let [H, ...U] = await Promise.all([
      C.length ? yr("loader", F, C, x) : [],
      ...N.map((O) => {
        if (O.matches && O.match && O.controller) {
          let W = In(e.history, O.path, O.controller.signal);
          return yr("loader", W, [O.match], O.matches).then((V) => V[0]);
        } else
          return Promise.resolve({
            type: le.error,
            error: be(404, { pathname: O.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        hc(
          g,
          C,
          H,
          H.map(() => F.signal),
          !1,
          v.loaderData,
        ),
        hc(
          g,
          N.map((O) => O.match),
          U,
          N.map((O) => (O.controller ? O.controller.signal : null)),
          !0,
        ),
      ]),
      { loaderResults: H, fetcherResults: U }
    );
  }
  function Jo() {
    (at = !0),
      Ut.push(...qo()),
      ut.forEach((g, x) => {
        L.has(x) && (At.push(x), $t(x));
      });
  }
  function Bt(g, x, C) {
    C === void 0 && (C = {}),
      v.fetchers.set(g, x),
      We(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (C && C.flushSync) === !0 },
      );
  }
  function wr(g, x, C, N) {
    N === void 0 && (N = {});
    let F = Yr(v.matches, x);
    kl(g),
      We(
        { errors: { [F.route.id]: C }, fetchers: new Map(v.fetchers) },
        { flushSync: (N && N.flushSync) === !0 },
      );
  }
  function Ou(g) {
    return (
      f.v7_fetcherPersist &&
        (Ve.set(g, (Ve.get(g) || 0) + 1), He.has(g) && He.delete(g)),
      v.fetchers.get(g) || y0
    );
  }
  function kl(g) {
    let x = v.fetchers.get(g);
    L.has(g) && !(x && x.state === "loading" && J.has(g)) && $t(g),
      ut.delete(g),
      J.delete(g),
      q.delete(g),
      He.delete(g),
      v.fetchers.delete(g);
  }
  function cp(g) {
    if (f.v7_fetcherPersist) {
      let x = (Ve.get(g) || 0) - 1;
      x <= 0 ? (Ve.delete(g), He.add(g)) : Ve.set(g, x);
    } else kl(g);
    We({ fetchers: new Map(v.fetchers) });
  }
  function $t(g) {
    let x = L.get(g);
    Q(x, "Expected fetch controller: " + g), x.abort(), L.delete(g);
  }
  function Iu(g) {
    for (let x of g) {
      let C = Ou(x),
        N = Wt(C.data);
      v.fetchers.set(x, N);
    }
  }
  function Uu() {
    let g = [],
      x = !1;
    for (let C of q) {
      let N = v.fetchers.get(C);
      Q(N, "Expected fetcher: " + C),
        N.state === "loading" && (q.delete(C), g.push(C), (x = !0));
    }
    return Iu(g), x;
  }
  function Au(g) {
    let x = [];
    for (let [C, N] of J)
      if (N < g) {
        let F = v.fetchers.get(C);
        Q(F, "Expected fetcher: " + C),
          F.state === "loading" && ($t(C), J.delete(C), x.push(C));
      }
    return Iu(x), x.length > 0;
  }
  function fp(g, x) {
    let C = v.blockers.get(g) || jr;
    return Je.get(g) !== x && Je.set(g, x), C;
  }
  function Bu(g) {
    v.blockers.delete(g), Je.delete(g);
  }
  function El(g, x) {
    let C = v.blockers.get(g) || jr;
    Q(
      (C.state === "unblocked" && x.state === "blocked") ||
        (C.state === "blocked" && x.state === "blocked") ||
        (C.state === "blocked" && x.state === "proceeding") ||
        (C.state === "blocked" && x.state === "unblocked") ||
        (C.state === "proceeding" && x.state === "unblocked"),
      "Invalid blocker state transition: " + C.state + " -> " + x.state,
    );
    let N = new Map(v.blockers);
    N.set(g, x), We({ blockers: N });
  }
  function $u(g) {
    let { currentLocation: x, nextLocation: C, historyAction: N } = g;
    if (Je.size === 0) return;
    Je.size > 1 && fr(!1, "A router only supports one blocker at a time");
    let F = Array.from(Je.entries()),
      [H, U] = F[F.length - 1],
      O = v.blockers.get(H);
    if (
      !(O && O.state === "proceeding") &&
      U({ currentLocation: x, nextLocation: C, historyAction: N })
    )
      return H;
  }
  function qo(g) {
    let x = [];
    return (
      Te.forEach((C, N) => {
        (!g || g(N)) && (C.cancel(), x.push(N), Te.delete(N));
      }),
      x
    );
  }
  function dp(g, x, C) {
    if (((k = g), (w = x), (S = C || null), !j && v.navigation === _i)) {
      j = !0;
      let N = Hu(v.location, v.matches);
      N != null && We({ restoreScrollPosition: N });
    }
    return () => {
      (k = null), (w = null), (S = null);
    };
  }
  function Vu(g, x) {
    return (
      (S &&
        S(
          g,
          x.map((N) => Xm(N, v.loaderData)),
        )) ||
      g.key
    );
  }
  function pp(g, x) {
    if (k && w) {
      let C = Vu(g, x);
      k[C] = w();
    }
  }
  function Hu(g, x) {
    if (k) {
      let C = Vu(g, x),
        N = k[C];
      if (typeof N == "number") return N;
    }
    return null;
  }
  function hp(g) {
    (o = {}), (a = Ea(g, l, void 0, o));
  }
  return (
    (D = {
      get basename() {
        return u;
      },
      get future() {
        return f;
      },
      get state() {
        return v;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: tp,
      subscribe: rp,
      enableScrollRestoration: dp,
      navigate: zu,
      fetch: ap,
      revalidate: lp,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: Ou,
      deleteFetcher: cp,
      dispose: np,
      getBlocker: fp,
      deleteBlocker: Bu,
      _internalFetchControllers: L,
      _internalActiveDeferreds: Te,
      _internalSetRoutes: hp,
    }),
    D
  );
}
function S0(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Pa(e, t, n, r, l, o, i, a) {
  let u, s;
  if (i) {
    u = [];
    for (let d of t)
      if ((u.push(d), d.route.id === i)) {
        s = d;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let f = Cu(l || ".", Eu(u, o), gt(e.pathname, n) || e.pathname, a === "path");
  return (
    l == null && ((f.search = e.search), (f.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      s &&
      s.route.index &&
      !Lu(f.search) &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (f.pathname = f.pathname === "/" ? n : Pt([n, f.pathname])),
    un(f)
  );
}
function rc(e, t, n, r) {
  if (!r || !S0(r)) return { path: n };
  if (r.formMethod && !M0(r.formMethod))
    return { path: n, error: be(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: be(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    a = Hd(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!dt(i)) return l();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((k, S) => {
                let [w, j] = S;
                return (
                  "" +
                  k +
                  w +
                  "=" +
                  j +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!dt(i)) return l();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  Q(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let u, s;
  if (r.formData) (u = _a(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = _a(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = uc(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = uc(u));
    } catch {
      return l();
    }
  let f = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (dt(f.formMethod)) return { path: n, submission: f };
  let d = pn(n);
  return (
    t && d.search && Lu(d.search) && u.append("index", ""),
    (d.search = "?" + u),
    { path: un(d), submission: f }
  );
}
function k0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function lc(e, t, n, r, l, o, i, a, u, s, f, d, p, k, S, w) {
  let j = w ? (nt(w[1]) ? w[1].error : w[1].data) : void 0,
    h = e.createURL(t.location),
    c = e.createURL(l),
    m = w && nt(w[1]) ? w[0] : void 0,
    E = m ? k0(n, m) : n,
    R = w ? w[1].statusCode : void 0,
    D = i && R && R >= 400,
    v = E.filter((I, M) => {
      let { route: Y } = I;
      if (Y.lazy) return !0;
      if (Y.loader == null) return !1;
      if (o)
        return typeof Y.loader != "function" || Y.loader.hydrate
          ? !0
          : t.loaderData[Y.id] === void 0 &&
              (!t.errors || t.errors[Y.id] === void 0);
      if (
        E0(t.loaderData, t.matches[M], I) ||
        u.some((xe) => xe === I.route.id)
      )
        return !0;
      let fe = t.matches[M],
        ie = I;
      return oc(
        I,
        re(
          {
            currentUrl: h,
            currentParams: fe.params,
            nextUrl: c,
            nextParams: ie.params,
          },
          r,
          {
            actionResult: j,
            unstable_actionStatus: R,
            defaultShouldRevalidate: D
              ? !1
              : a ||
                h.pathname + h.search === c.pathname + c.search ||
                h.search !== c.search ||
                Vd(fe, ie),
          },
        ),
      );
    }),
    T = [];
  return (
    d.forEach((I, M) => {
      if (o || !n.some((at) => at.route.id === I.routeId) || f.has(M)) return;
      let Y = Zn(k, I.path, S);
      if (!Y) {
        T.push({
          key: M,
          routeId: I.routeId,
          path: I.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let fe = t.fetchers.get(M),
        ie = Na(Y, I.path),
        xe = !1;
      p.has(M)
        ? (xe = !1)
        : s.includes(M)
          ? (xe = !0)
          : fe && fe.state !== "idle" && fe.data === void 0
            ? (xe = a)
            : (xe = oc(
                ie,
                re(
                  {
                    currentUrl: h,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: c,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  {
                    actionResult: j,
                    unstable_actionStatus: R,
                    defaultShouldRevalidate: D ? !1 : a,
                  },
                ),
              )),
        xe &&
          T.push({
            key: M,
            routeId: I.routeId,
            path: I.path,
            matches: Y,
            match: ie,
            controller: new AbortController(),
          });
    }),
    [v, T]
  );
}
function E0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Vd(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function oc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function ic(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  Q(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let u = l[i] !== void 0 && i !== "hasErrorBoundary";
    fr(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.'),
    ),
      !u && !Ym.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, re({}, t(l), { lazy: void 0 }));
}
function C0(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function P0(e, t, n, r, l, o, i, a) {
  let u = r.reduce((d, p) => d.add(p.route.id), new Set()),
    s = new Set(),
    f = await e({
      matches: l.map((d) => {
        let p = u.has(d.route.id);
        return re({}, d, {
          shouldLoad: p,
          resolve: (S) => (
            s.add(d.route.id),
            p
              ? _0(t, n, d, o, i, S, a)
              : Promise.resolve({ type: le.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: l[0].params,
      context: a,
    });
  return (
    l.forEach((d) =>
      Q(
        s.has(d.route.id),
        '`match.resolve()` was not called for route id "' +
          d.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
      ),
    ),
    f.filter((d, p) => u.has(l[p].route.id))
  );
}
async function _0(e, t, n, r, l, o, i) {
  let a,
    u,
    s = (f) => {
      let d,
        p = new Promise((w, j) => (d = j));
      (u = () => d()), t.signal.addEventListener("abort", u);
      let k = (w) =>
          typeof f != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]"),
                ),
              )
            : f(
                { request: t, params: n.params, context: i },
                ...(w !== void 0 ? [w] : []),
              ),
        S;
      return (
        o
          ? (S = o((w) => k(w)))
          : (S = (async () => {
              try {
                return { type: "data", result: await k() };
              } catch (w) {
                return { type: "error", result: w };
              }
            })()),
        Promise.race([S, p])
      );
    };
  try {
    let f = n.route[e];
    if (n.route.lazy)
      if (f) {
        let d,
          [p] = await Promise.all([
            s(f).catch((k) => {
              d = k;
            }),
            ic(n.route, l, r),
          ]);
        if (d !== void 0) throw d;
        a = p;
      } else if ((await ic(n.route, l, r), (f = n.route[e]), f)) a = await s(f);
      else if (e === "action") {
        let d = new URL(t.url),
          p = d.pathname + d.search;
        throw be(405, { method: t.method, pathname: p, routeId: n.route.id });
      } else return { type: le.data, result: void 0 };
    else if (f) a = await s(f);
    else {
      let d = new URL(t.url),
        p = d.pathname + d.search;
      throw be(404, { pathname: p });
    }
    Q(
      a.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (f) {
    return { type: le.error, result: f };
  } finally {
    u && t.signal.removeEventListener("abort", u);
  }
  return a;
}
async function N0(e) {
  let { result: t, type: n, status: r } = e;
  if (Wd(t)) {
    let i;
    try {
      let a = t.headers.get("Content-Type");
      a && /\bapplication\/json\b/.test(a)
        ? t.body == null
          ? (i = null)
          : (i = await t.json())
        : (i = await t.text());
    } catch (a) {
      return { type: le.error, error: a };
    }
    return n === le.error
      ? {
          type: le.error,
          error: new Pu(t.status, t.statusText, i),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: le.data, data: i, statusCode: t.status, headers: t.headers };
  }
  if (n === le.error)
    return { type: le.error, error: t, statusCode: _u(t) ? t.status : r };
  if (D0(t)) {
    var l, o;
    return {
      type: le.deferred,
      deferredData: t,
      statusCode: (l = t.init) == null ? void 0 : l.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: le.data, data: t, statusCode: r };
}
function L0(e, t, n, r, l, o) {
  let i = e.headers.get("Location");
  if (
    (Q(
      i,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !Nu.test(i))
  ) {
    let a = r.slice(0, r.findIndex((u) => u.route.id === n) + 1);
    (i = Pa(new URL(t.url), a, l, !0, i, o)), e.headers.set("Location", i);
  }
  return e;
}
function ac(e, t, n) {
  if (Nu.test(e)) {
    let r = e,
      l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      o = gt(l.pathname, n) != null;
    if (l.origin === t.origin && o) return l.pathname + l.search + l.hash;
  }
  return e;
}
function In(e, t, n, r) {
  let l = e.createURL(Hd(t)).toString(),
    o = { signal: n };
  if (r && dt(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (o.method = i.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
          ? (o.body = r.text)
          : a === "application/x-www-form-urlencoded" && r.formData
            ? (o.body = _a(r.formData))
            : (o.body = r.formData);
  }
  return new Request(l, o);
}
function _a(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function uc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function R0(e, t, n, r, l, o) {
  let i = {},
    a = null,
    u,
    s = !1,
    f = {},
    d = r && nt(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((p, k) => {
      let S = t[k].route.id;
      if (
        (Q(!kn(p), "Cannot handle redirect results in processLoaderData"),
        nt(p))
      ) {
        let w = p.error;
        d !== void 0 && ((w = d), (d = void 0)), (a = a || {});
        {
          let j = Yr(e, S);
          a[j.route.id] == null && (a[j.route.id] = w);
        }
        (i[S] = void 0),
          s || ((s = !0), (u = _u(p.error) ? p.error.status : 500)),
          p.headers && (f[S] = p.headers);
      } else
        Sn(p)
          ? (l.set(S, p.deferredData),
            (i[S] = p.deferredData.data),
            p.statusCode != null &&
              p.statusCode !== 200 &&
              !s &&
              (u = p.statusCode),
            p.headers && (f[S] = p.headers))
          : ((i[S] = p.data),
            p.statusCode && p.statusCode !== 200 && !s && (u = p.statusCode),
            p.headers && (f[S] = p.headers));
    }),
    d !== void 0 && r && ((a = { [r[0]]: d }), (i[r[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: u || 200, loaderHeaders: f }
  );
}
function sc(e, t, n, r, l, o, i, a) {
  let { loaderData: u, errors: s } = R0(t, n, r, l, a);
  for (let f = 0; f < o.length; f++) {
    let { key: d, match: p, controller: k } = o[f];
    Q(
      i !== void 0 && i[f] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let S = i[f];
    if (!(k && k.signal.aborted))
      if (nt(S)) {
        let w = Yr(e.matches, p == null ? void 0 : p.route.id);
        (s && s[w.route.id]) || (s = re({}, s, { [w.route.id]: S.error })),
          e.fetchers.delete(d);
      } else if (kn(S)) Q(!1, "Unhandled fetcher revalidation redirect");
      else if (Sn(S)) Q(!1, "Unhandled fetcher deferred data");
      else {
        let w = Wt(S.data);
        e.fetchers.set(d, w);
      }
  }
  return { loaderData: u, errors: s };
}
function cc(e, t, n, r) {
  let l = re({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function fc(e) {
  return e
    ? nt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Yr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function dc(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function be(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
            ? (a = "defer() is not supported in actions")
            : o === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
        ? ((i = "Forbidden"),
          (a = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((i = "Not Found"), (a = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((i = "Method Not Allowed"),
            l && n && r
              ? (a =
                  "You made a " +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new Pu(e || 500, i, new Error(a), !0)
  );
}
function pc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (kn(n)) return { result: n, idx: t };
  }
}
function Hd(e) {
  let t = typeof e == "string" ? pn(e) : e;
  return un(re({}, t, { hash: "" }));
}
function j0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function T0(e) {
  return Wd(e.result) && v0.has(e.result.status);
}
function Sn(e) {
  return e.type === le.deferred;
}
function nt(e) {
  return e.type === le.error;
}
function kn(e) {
  return (e && e.type) === le.redirect;
}
function D0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Wd(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function M0(e) {
  return m0.has(e.toLowerCase());
}
function dt(e) {
  return p0.has(e.toLowerCase());
}
async function hc(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      u = t[i];
    if (!u) continue;
    let s = e.find((d) => d.route.id === u.route.id),
      f = s != null && !Vd(s, u) && (o && o[u.route.id]) !== void 0;
    if (Sn(a) && (l || f)) {
      let d = r[i];
      Q(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Qd(a, d, l).then((p) => {
          p && (n[i] = p || n[i]);
        });
    }
  }
}
async function Qd(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: le.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: le.error, error: l };
      }
    return { type: le.data, data: e.deferredData.data };
  }
}
function Lu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Na(e, t) {
  let n = typeof t == "string" ? pn(t).search : t.search;
  if (e[e.length - 1].route.index && Lu(n || "")) return e[e.length - 1];
  let r = Ad(e);
  return r[r.length - 1];
}
function mc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function Ni(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function z0(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Tr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function F0(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Wt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function O0(e, t) {
  try {
    let n = e.sessionStorage.getItem($d);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function I0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem($d, JSON.stringify(n));
    } catch (r) {
      fr(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          r +
          ").",
      );
    }
  }
}
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ro() {
  return (
    (Ro = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ro.apply(this, arguments)
  );
}
const yl = P.createContext(null),
  Ru = P.createContext(null),
  _t = P.createContext(null),
  ju = P.createContext(null),
  It = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Kd = P.createContext(null);
function U0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  wl() || Q(!1);
  let { basename: r, navigator: l } = P.useContext(_t),
    { hash: o, pathname: i, search: a } = xl(e, { relative: n }),
    u = i;
  return (
    r !== "/" && (u = i === "/" ? r : Pt([r, i])),
    l.createHref({ pathname: u, search: a, hash: o })
  );
}
function wl() {
  return P.useContext(ju) != null;
}
function Dn() {
  return wl() || Q(!1), P.useContext(ju).location;
}
function Yd(e) {
  P.useContext(_t).static || P.useLayoutEffect(e);
}
function Gd() {
  let { isDataRoute: e } = P.useContext(It);
  return e ? q0() : A0();
}
function A0() {
  wl() || Q(!1);
  let e = P.useContext(yl),
    { basename: t, future: n, navigator: r } = P.useContext(_t),
    { matches: l } = P.useContext(It),
    { pathname: o } = Dn(),
    i = JSON.stringify(Eu(l, n.v7_relativeSplatPath)),
    a = P.useRef(!1);
  return (
    Yd(() => {
      a.current = !0;
    }),
    P.useCallback(
      function (s, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof s == "number") {
          r.go(s);
          return;
        }
        let d = Cu(s, JSON.parse(i), o, f.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Pt([t, d.pathname])),
          (f.replace ? r.replace : r.push)(d, f.state, f);
      },
      [t, r, i, o, e],
    )
  );
}
const B0 = P.createContext(null);
function $0(e) {
  let t = P.useContext(It).outlet;
  return t && P.createElement(B0.Provider, { value: e }, t);
}
function xl(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = P.useContext(_t),
    { matches: l } = P.useContext(It),
    { pathname: o } = Dn(),
    i = JSON.stringify(Eu(l, r.v7_relativeSplatPath));
  return P.useMemo(() => Cu(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function V0(e, t, n, r) {
  wl() || Q(!1);
  let { navigator: l } = P.useContext(_t),
    { matches: o } = P.useContext(It),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let s = Dn(),
    f;
  f = s;
  let d = f.pathname || "/",
    p = d;
  if (u !== "/") {
    let w = u.replace(/^\//, "").split("/");
    p = "/" + d.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let k = Zn(e, { pathname: p });
  return Y0(
    k &&
      k.map((w) =>
        Object.assign({}, w, {
          params: Object.assign({}, a, w.params),
          pathname: Pt([
            u,
            l.encodeLocation
              ? l.encodeLocation(w.pathname).pathname
              : w.pathname,
          ]),
          pathnameBase:
            w.pathnameBase === "/"
              ? u
              : Pt([
                  u,
                  l.encodeLocation
                    ? l.encodeLocation(w.pathnameBase).pathname
                    : w.pathnameBase,
                ]),
        }),
      ),
    o,
    n,
    r,
  );
}
function H0() {
  let e = Zd(),
    t = _u(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: l }, n) : null,
    null,
  );
}
const W0 = P.createElement(H0, null);
class Q0 extends P.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? P.createElement(
          It.Provider,
          { value: this.props.routeContext },
          P.createElement(Kd.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function K0(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = P.useContext(yl);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(It.Provider, { value: t }, r)
  );
}
function Y0(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let f = i.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0,
    );
    f >= 0 || Q(!1), (i = i.slice(0, Math.min(i.length, f + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < i.length; f++) {
      let d = i[f];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (s = f),
        d.route.id)
      ) {
        let { loaderData: p, errors: k } = n,
          S =
            d.route.loader &&
            p[d.route.id] === void 0 &&
            (!k || k[d.route.id] === void 0);
        if (d.route.lazy || S) {
          (u = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((f, d, p) => {
    let k,
      S = !1,
      w = null,
      j = null;
    n &&
      ((k = a && d.route.id ? a[d.route.id] : void 0),
      (w = d.route.errorElement || W0),
      u &&
        (s < 0 && p === 0
          ? ((S = !0), (j = null))
          : s === p &&
            ((S = !0), (j = d.route.hydrateFallbackElement || null))));
    let h = t.concat(i.slice(0, p + 1)),
      c = () => {
        let m;
        return (
          k
            ? (m = w)
            : S
              ? (m = j)
              : d.route.Component
                ? (m = P.createElement(d.route.Component, null))
                : d.route.element
                  ? (m = d.route.element)
                  : (m = f),
          P.createElement(K0, {
            match: d,
            routeContext: { outlet: f, matches: h, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
      ? P.createElement(Q0, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: k,
          children: c(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var Xd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Xd || {}),
  dl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(dl || {});
function G0(e) {
  let t = P.useContext(yl);
  return t || Q(!1), t;
}
function X0(e) {
  let t = P.useContext(Ru);
  return t || Q(!1), t;
}
function Z0(e) {
  let t = P.useContext(It);
  return t || Q(!1), t;
}
function Tu(e) {
  let t = Z0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Q(!1), n.route.id;
}
function J0() {
  return Tu(dl.UseRouteId);
}
function Zd() {
  var e;
  let t = P.useContext(Kd),
    n = X0(dl.UseRouteError),
    r = Tu(dl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function q0() {
  let { router: e } = G0(Xd.UseNavigateStable),
    t = Tu(dl.UseNavigateStable),
    n = P.useRef(!1);
  return (
    Yd(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, Ro({ fromRouteId: t }, o)));
      },
      [e, t],
    )
  );
}
function vc(e) {
  return $0(e.context);
}
function b0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = pe.Pop,
    navigator: o,
    static: i = !1,
    future: a,
  } = e;
  wl() && Q(!1);
  let u = t.replace(/^\/*/, "/"),
    s = P.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: i,
        future: Ro({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, o, i],
    );
  typeof r == "string" && (r = pn(r));
  let {
      pathname: f = "/",
      search: d = "",
      hash: p = "",
      state: k = null,
      key: S = "default",
    } = r,
    w = P.useMemo(() => {
      let j = gt(f, u);
      return j == null
        ? null
        : {
            location: { pathname: j, search: d, hash: p, state: k, key: S },
            navigationType: l,
          };
    }, [u, f, d, p, k, S, l]);
  return w == null
    ? null
    : P.createElement(
        _t.Provider,
        { value: s },
        P.createElement(ju.Provider, { children: n, value: w }),
      );
}
new Promise(() => {});
function ev(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: P.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: P.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: P.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function sn() {
  return (
    (sn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    sn.apply(this, arguments)
  );
}
function Du(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
const ro = "get",
  Li = "application/x-www-form-urlencoded";
function Go(e) {
  return e != null && typeof e.tagName == "string";
}
function tv(e) {
  return Go(e) && e.tagName.toLowerCase() === "button";
}
function nv(e) {
  return Go(e) && e.tagName.toLowerCase() === "form";
}
function rv(e) {
  return Go(e) && e.tagName.toLowerCase() === "input";
}
function lv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ov(e, t) {
  return e.button === 0 && (!t || t === "_self") && !lv(e);
}
let Wl = null;
function iv() {
  if (Wl === null)
    try {
      new FormData(document.createElement("form"), 0), (Wl = !1);
    } catch {
      Wl = !0;
    }
  return Wl;
}
const av = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Ri(e) {
  return e != null && !av.has(e) ? null : e;
}
function uv(e, t) {
  let n, r, l, o, i;
  if (nv(e)) {
    let a = e.getAttribute("action");
    (r = a ? gt(a, t) : null),
      (n = e.getAttribute("method") || ro),
      (l = Ri(e.getAttribute("enctype")) || Li),
      (o = new FormData(e));
  } else if (tv(e) || (rv(e) && (e.type === "submit" || e.type === "image"))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let u = e.getAttribute("formaction") || a.getAttribute("action");
    if (
      ((r = u ? gt(u, t) : null),
      (n = e.getAttribute("formmethod") || a.getAttribute("method") || ro),
      (l =
        Ri(e.getAttribute("formenctype")) ||
        Ri(a.getAttribute("enctype")) ||
        Li),
      (o = new FormData(a, e)),
      !iv())
    ) {
      let { name: s, type: f, value: d } = e;
      if (f === "image") {
        let p = s ? s + "." : "";
        o.append(p + "x", "0"), o.append(p + "y", "0");
      } else s && o.append(s, d);
    }
  } else {
    if (Go(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (n = ro), (r = null), (l = Li), (i = e);
  }
  return (
    o && l === "text/plain" && ((i = o), (o = void 0)),
    { action: r, method: n.toLowerCase(), encType: l, formData: o, body: i }
  );
}
const sv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  cv = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  fv = [
    "fetcherKey",
    "navigate",
    "reloadDocument",
    "replace",
    "state",
    "method",
    "action",
    "onSubmit",
    "relative",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  dv = "6";
try {
  window.__reactRouterVersion = dv;
} catch {}
function pv(e, t) {
  return x0({
    basename: void 0,
    future: sn({}, void 0, { v7_prependBasename: !0 }),
    history: Wm({ window: void 0 }),
    hydrationData: hv(),
    routes: e,
    mapRouteProperties: ev,
    unstable_dataStrategy: void 0,
    window: void 0,
  }).initialize();
}
function hv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = sn({}, t, { errors: mv(t.errors) })), t;
}
function mv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new Pu(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const Jd = P.createContext({ isTransitioning: !1 }),
  vv = P.createContext(new Map()),
  gv = "startTransition",
  gc = Tp[gv],
  yv = "flushSync",
  yc = Hm[yv];
function wv(e) {
  gc ? gc(e) : e();
}
function Dr(e) {
  yc ? yc(e) : e();
}
class xv {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function Sv(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = P.useState(n.state),
    [i, a] = P.useState(),
    [u, s] = P.useState({ isTransitioning: !1 }),
    [f, d] = P.useState(),
    [p, k] = P.useState(),
    [S, w] = P.useState(),
    j = P.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    c = P.useCallback(
      (v) => {
        h ? wv(v) : v();
      },
      [h],
    ),
    m = P.useCallback(
      (v, T) => {
        let {
          deletedFetchers: I,
          unstable_flushSync: M,
          unstable_viewTransitionOpts: Y,
        } = T;
        I.forEach((ie) => j.current.delete(ie)),
          v.fetchers.forEach((ie, xe) => {
            ie.data !== void 0 && j.current.set(xe, ie.data);
          });
        let fe =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!Y || fe) {
          M ? Dr(() => o(v)) : c(() => o(v));
          return;
        }
        if (M) {
          Dr(() => {
            p && (f && f.resolve(), p.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Y.currentLocation,
                nextLocation: Y.nextLocation,
              });
          });
          let ie = n.window.document.startViewTransition(() => {
            Dr(() => o(v));
          });
          ie.finished.finally(() => {
            Dr(() => {
              d(void 0), k(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            Dr(() => k(ie));
          return;
        }
        p
          ? (f && f.resolve(),
            p.skipTransition(),
            w({
              state: v,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }))
          : (a(v),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }));
      },
      [n.window, p, f, j, c],
    );
  P.useLayoutEffect(() => n.subscribe(m), [n, m]),
    P.useEffect(() => {
      u.isTransitioning && !u.flushSync && d(new xv());
    }, [u]),
    P.useEffect(() => {
      if (f && i && n.window) {
        let v = i,
          T = f.promise,
          I = n.window.document.startViewTransition(async () => {
            c(() => o(v)), await T;
          });
        I.finished.finally(() => {
          d(void 0), k(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          k(I);
      }
    }, [c, i, f, n.window]),
    P.useEffect(() => {
      f && i && l.location.key === i.location.key && f.resolve();
    }, [f, p, l.location, i]),
    P.useEffect(() => {
      !u.isTransitioning &&
        S &&
        (a(S.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: S.currentLocation,
          nextLocation: S.nextLocation,
        }),
        w(void 0));
    }, [u.isTransitioning, S]),
    P.useEffect(() => {}, []);
  let E = P.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (v) => n.navigate(v),
        push: (v, T, I) =>
          n.navigate(v, {
            state: T,
            preventScrollReset: I == null ? void 0 : I.preventScrollReset,
          }),
        replace: (v, T, I) =>
          n.navigate(v, {
            replace: !0,
            state: T,
            preventScrollReset: I == null ? void 0 : I.preventScrollReset,
          }),
      }),
      [n],
    ),
    R = n.basename || "/",
    D = P.useMemo(
      () => ({ router: n, navigator: E, static: !1, basename: R }),
      [n, E, R],
    );
  return P.createElement(
    P.Fragment,
    null,
    P.createElement(
      yl.Provider,
      { value: D },
      P.createElement(
        Ru.Provider,
        { value: l },
        P.createElement(
          vv.Provider,
          { value: j.current },
          P.createElement(
            Jd.Provider,
            { value: u },
            P.createElement(
              b0,
              {
                basename: R,
                location: l.location,
                navigationType: l.historyAction,
                navigator: E,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration
                ? P.createElement(kv, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function kv(e) {
  let { routes: t, future: n, state: r } = e;
  return V0(t, void 0, r, n);
}
const Ev =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Cv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Mu = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: a,
        target: u,
        to: s,
        preventScrollReset: f,
        unstable_viewTransition: d,
      } = t,
      p = Du(t, sv),
      { basename: k } = P.useContext(_t),
      S,
      w = !1;
    if (typeof s == "string" && Cv.test(s) && ((S = s), Ev))
      try {
        let m = new URL(window.location.href),
          E = s.startsWith("//") ? new URL(m.protocol + s) : new URL(s),
          R = gt(E.pathname, k);
        E.origin === m.origin && R != null
          ? (s = R + E.search + E.hash)
          : (w = !0);
      } catch {}
    let j = U0(s, { relative: l }),
      h = Pv(s, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: f,
        relative: l,
        unstable_viewTransition: d,
      });
    function c(m) {
      r && r(m), m.defaultPrevented || h(m);
    }
    return P.createElement(
      "a",
      sn({}, p, { href: S || j, onClick: w || o ? r : c, ref: n, target: u }),
    );
  }),
  Ir = P.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: o = "",
        end: i = !1,
        style: a,
        to: u,
        unstable_viewTransition: s,
        children: f,
      } = t,
      d = Du(t, cv),
      p = xl(u, { relative: d.relative }),
      k = Dn(),
      S = P.useContext(Ru),
      { navigator: w, basename: j } = P.useContext(_t),
      h = S != null && Tv(p) && s === !0,
      c = w.encodeLocation ? w.encodeLocation(p).pathname : p.pathname,
      m = k.pathname,
      E =
        S && S.navigation && S.navigation.location
          ? S.navigation.location.pathname
          : null;
    l ||
      ((m = m.toLowerCase()),
      (E = E ? E.toLowerCase() : null),
      (c = c.toLowerCase())),
      E && j && (E = gt(E, j) || E);
    const R = c !== "/" && c.endsWith("/") ? c.length - 1 : c.length;
    let D = m === c || (!i && m.startsWith(c) && m.charAt(R) === "/"),
      v =
        E != null &&
        (E === c || (!i && E.startsWith(c) && E.charAt(c.length) === "/")),
      T = { isActive: D, isPending: v, isTransitioning: h },
      I = D ? r : void 0,
      M;
    typeof o == "function"
      ? (M = o(T))
      : (M = [
          o,
          D ? "active" : null,
          v ? "pending" : null,
          h ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let Y = typeof a == "function" ? a(T) : a;
    return P.createElement(
      Mu,
      sn({}, d, {
        "aria-current": I,
        className: M,
        ref: n,
        style: Y,
        to: u,
        unstable_viewTransition: s,
      }),
      typeof f == "function" ? f(T) : f,
    );
  }),
  Xo = P.forwardRef((e, t) => {
    let {
        fetcherKey: n,
        navigate: r,
        reloadDocument: l,
        replace: o,
        state: i,
        method: a = ro,
        action: u,
        onSubmit: s,
        relative: f,
        preventScrollReset: d,
        unstable_viewTransition: p,
      } = e,
      k = Du(e, fv),
      S = Rv(),
      w = jv(u, { relative: f }),
      j = a.toLowerCase() === "get" ? "get" : "post",
      h = (c) => {
        if ((s && s(c), c.defaultPrevented)) return;
        c.preventDefault();
        let m = c.nativeEvent.submitter,
          E = (m == null ? void 0 : m.getAttribute("formmethod")) || a;
        S(m || c.currentTarget, {
          fetcherKey: n,
          method: E,
          navigate: r,
          replace: o,
          state: i,
          relative: f,
          preventScrollReset: d,
          unstable_viewTransition: p,
        });
      };
    return P.createElement(
      "form",
      sn({ ref: t, method: j, action: w, onSubmit: l ? s : h }, k),
    );
  });
var jo;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(jo || (jo = {}));
var wc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(wc || (wc = {}));
function qd(e) {
  let t = P.useContext(yl);
  return t || Q(!1), t;
}
function Pv(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = Gd(),
    s = Dn(),
    f = xl(e, { relative: i });
  return P.useCallback(
    (d) => {
      if (ov(d, n)) {
        d.preventDefault();
        let p = r !== void 0 ? r : un(s) === un(f);
        u(e, {
          replace: p,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: a,
        });
      }
    },
    [s, u, f, r, l, n, e, o, i, a],
  );
}
function _v() {
  if (typeof document > "u")
    throw new Error(
      "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.",
    );
}
let Nv = 0,
  Lv = () => "__" + String(++Nv) + "__";
function Rv() {
  let { router: e } = qd(jo.UseSubmit),
    { basename: t } = P.useContext(_t),
    n = J0();
  return P.useCallback(
    function (r, l) {
      l === void 0 && (l = {}), _v();
      let { action: o, method: i, encType: a, formData: u, body: s } = uv(r, t);
      if (l.navigate === !1) {
        let f = l.fetcherKey || Lv();
        e.fetch(f, n, l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: s,
          formMethod: l.method || i,
          formEncType: l.encType || a,
          unstable_flushSync: l.unstable_flushSync,
        });
      } else
        e.navigate(l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: s,
          formMethod: l.method || i,
          formEncType: l.encType || a,
          replace: l.replace,
          state: l.state,
          fromRouteId: n,
          unstable_flushSync: l.unstable_flushSync,
          unstable_viewTransition: l.unstable_viewTransition,
        });
    },
    [e, t, n],
  );
}
function jv(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = P.useContext(_t),
    l = P.useContext(It);
  l || Q(!1);
  let [o] = l.matches.slice(-1),
    i = sn({}, xl(e || ".", { relative: n })),
    a = Dn();
  if (e == null) {
    i.search = a.search;
    let u = new URLSearchParams(i.search);
    u.has("index") &&
      u.get("index") === "" &&
      (u.delete("index"), (i.search = u.toString() ? "?" + u.toString() : ""));
  }
  return (
    (!e || e === ".") &&
      o.route.index &&
      (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (i.pathname = i.pathname === "/" ? r : Pt([r, i.pathname])),
    un(i)
  );
}
function Tv(e, t) {
  t === void 0 && (t = {});
  let n = P.useContext(Jd);
  n == null && Q(!1);
  let { basename: r } = qd(jo.useViewTransitionState),
    l = xl(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = gt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = gt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Ca(l.pathname, i) != null || Ca(l.pathname, o) != null;
}
const Dv = "./logo-BtCZi2F8.svg",
  Sl = P.createContext({ isLogged: !1, login: () => {}, logout: () => {} });
function Mv({ children: e }) {
  const [t, n] = P.useState(!1);
  function r() {
    n(!0);
  }
  function l() {
    n(!1);
  }
  return y.jsx(Sl.Provider, {
    value: { isLogged: t, login: r, logout: l },
    children: e,
  });
}
function bd() {
  const { isLogged: e } = P.useContext(Sl),
    [t, n] = P.useState(!1);
  console.log(e);
  const r = () => {
    n(!t), console.log(t);
  };
  return y.jsx("header", {
    className: " bg-primary-light ",
    children: y.jsxs("div", {
      className:
        "mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8",
      children: [
        y.jsxs(Ir, {
          className: "block text-teal-600",
          to: "/",
          children: [
            y.jsx("span", { className: "sr-only", children: "Home" }),
            y.jsx("img", { className: "h-8", src: Dv }),
          ],
        }),
        y.jsxs("div", {
          className: "flex flex-1 items-center justify-end md:justify-between",
          children: [
            y.jsx("nav", {
              "aria-label": "Global",
              className: "hidden md:block",
              children: y.jsxs("ul", {
                className: "flex items-center gap-6 text-sm",
                children: [
                  y.jsx(xt, { to: "/assets", children: " العقارات " }),
                  y.jsx(xt, { to: "/about", children: " حول " }),
                  y.jsx(xt, {
                    to: "/programs",
                    children: "برامج الجنسية لدى اسيستفاي",
                  }),
                  y.jsx(xt, { to: "/sale", children: " البيع " }),
                  y.jsx(xt, { to: "/more", children: " المزيد " }),
                ],
              }),
            }),
            y.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                y.jsxs("div", {
                  className: "sm:flex sm:gap-4",
                  children: [
                    e
                      ? y.jsx(Ir, {
                          className:
                            "text-s block rounded-md border border-primary-dark px-5 py-1.5  font-bold text-primary-dark transition hover:bg-primary-dark   hover:text-primary-light  ",
                          to: "/logout",
                          children: "تسجيل الخروج",
                        })
                      : y.jsx(Ir, {
                          className:
                            "text-s block rounded-md border border-primary-dark px-5 py-1.5  font-bold text-primary-dark transition hover:bg-primary-dark   hover:text-primary-light  ",
                          to: "/login",
                          children: "سجل الدخول",
                        }),
                    y.jsx(Ir, {
                      className:
                        "text-s hidden rounded-md bg-primary-dark px-5 py-1.5  font-bold text-secondary-accent transition hover:text-teal-600/75 sm:block",
                      to: "/start",
                      children: "ابدأ",
                    }),
                  ],
                }),
                y.jsxs("button", {
                  onClick: r,
                  id: "hamburger-menu",
                  className:
                    "block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden",
                  children: [
                    y.jsx("span", {
                      className: "sr-only",
                      children: "Toggle menu",
                    }),
                    y.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "h-5 w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: y.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M4 6h16M4 12h16M4 18h16",
                      }),
                    }),
                  ],
                }),
                y.jsxs("ul", {
                  className: t
                    ? "fixed left-0 top-0 flex h-screen w-full flex-col items-center justify-between bg-primary-light py-24 "
                    : "hidden",
                  children: [
                    y.jsx("li", {
                      onClick: r,
                      className: "text-4xl",
                      children: "×",
                    }),
                    y.jsxs(xt, {
                      onClick: r,
                      to: "/assets",
                      children: [" ", "العقارات", " "],
                    }),
                    y.jsxs(xt, {
                      onClick: r,
                      to: "/about",
                      children: [" ", "حول", " "],
                    }),
                    y.jsx(xt, {
                      onClick: r,
                      to: "/programs",
                      children: "برامج الجنسية لدى اسيستفاي",
                    }),
                    y.jsxs(xt, {
                      onClick: r,
                      to: "/sale",
                      children: [" ", "البيع", " "],
                    }),
                    y.jsxs(xt, {
                      onClick: r,
                      to: "/more",
                      children: [" ", "المزيد", " "],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function xt({ to: e, children: t, onClick: n }) {
  return y.jsx("li", {
    onClick: n,
    className:
      "text-xl text-primary-dark  transition hover:text-primary-darker",
    children: y.jsx(Ir, {
      className: ({ isActive: r }) => (r ? "  font-bold" : ""),
      to: e,
      children: t,
    }),
  });
}
function zv({ mode: e, children: t }) {
  const n = Gd(),
    r = P.useRef();
  P.useEffect(() => {
    r.current.showModal();
    const o = (i) => {
      i.key === "Escape" && (i.preventDefault(), console.log("hi"), n(".."));
    };
    return (
      document.addEventListener("keydown", o),
      () => {
        document.removeEventListener("keydown", o);
      }
    );
  }, [n]);
  function l() {
    n("..");
  }
  return y.jsx("dialog", {
    ref: r,
    className: `${e === "/signup" ? "signup-popup" : "reg-popup "} min-h-[300px] w-[90vw] rounded-2xl shadow-[0px_0px_15px_#ffffff67] outline-none ${e === "/signup" ? "" : "md:w-[45%] "}`,
    children: y.jsxs("div", {
      className:
        "  flex min-h-[300px] flex-col items-center justify-center rounded-2xl bg-primary-lighter md:ml-52",
      children: [
        y.jsx("p", {
          className: "w-full cursor-pointer px-10 py-2 text-3xl",
          onClick: l,
          children: "×",
        }),
        " ",
        t,
      ],
    }),
  });
}
function ep() {
  return y.jsxs("main", {
    className: "flex flex-col ",
    children: [
      y.jsx("section", {
        className:
          "black-gradient flex  h-[80vh] items-start justify-center p-10",
        children: y.jsxs("div", {
          className: "flex flex-col items-center justify-center md:w-[45%] ",
          children: [
            y.jsxs("div", {
              className: "container m-5    text-center text-secondary-accent ",
              children: ["أحصل على الإقامة التركية بكل سهولة مع Assetify", " "],
            }),
            y.jsx("div", {
              className:
                "container m-5 text-center text-4xl  text-primary-lighter ",
              children: "استثمر من أي مكان في العالم واحصل على الإقامة التركية",
            }),
            y.jsxs("div", {
              className: "container  m-5   text-center text-secondary-accent ",
              children: [
                "استمتع بمجموعة من الفوائد عن طريق استثمار الحد الأدنى 200,000 دولار أمريكي من خلال منصتنا.",
                " ",
              ],
            }),
          ],
        }),
      }),
      y.jsx("section", {
        className:
          " flex  h-screen items-start justify-center bg-primary-darker p-10",
        children: y.jsxs("div", {
          className: "flex flex-col items-center justify-center md:w-[60%] ",
          children: [
            y.jsxs("div", {
              className:
                "container m-5 text-center text-4xl  text-primary-lighter ",
              children: ["قم بالإرتقاء تلقائياً إلى فئة Assetify +", " "],
            }),
            y.jsx("div", {
              className: " container m-5 text-center   text-secondary-accent ",
              children:
                "تمثل عضوية Assetify + فئة مستثمرين قيميين وتأتي مع مجموعة من المزايا الاستثنائية والخدمات المخصصة",
            }),
          ],
        }),
      }),
    ],
  });
}
function Fv() {
  const { pathname: e } = Dn();
  return y.jsx(y.Fragment, {
    children: y.jsxs(Mv, {
      children: [
        y.jsx(bd, {}),
        (["/signup", "/login", "/logout", "/verify"].includes(e) &&
          y.jsxs(y.Fragment, {
            children: [
              y.jsx(ep, {}),
              y.jsx(zv, { mode: e, children: y.jsx(vc, {}) }),
            ],
          })) ||
          y.jsx(vc, {}),
      ],
    }),
  });
}
function Ov() {
  return y.jsx("div", { children: "AssetsPage" });
}
function Iv() {
  return y.jsx("div", { children: "AboutPage" });
}
function Uv() {
  return y.jsx("div", { children: "MorePage" });
}
function Av() {
  return y.jsx("div", { children: "ProgramsPage" });
}
function Bv() {
  return y.jsx("div", { children: "SalePage" });
}
function $v() {
  const e = Zd();
  let t = "An error occurred",
    n = "Something went wrong!";
  return (
    e.status === 404 &&
      ((t = "Not found!"), (n = "Could not find resource or page.")),
    y.jsxs(y.Fragment, {
      children: [
        y.jsx(bd, {}),
        y.jsxs("div", {
          className: "pt-10 text-center",
          children: [
            y.jsx("h1", { className: "text-[5rem] ", children: t }),
            y.jsx("p", { children: n }),
          ],
        }),
        ";",
      ],
    })
  );
}
function dr({ children: e, className: t, secondary: n, ...r }) {
  return y.jsx("div", {
    className: ` relative my-9 w-full ${t} `,
    children: y.jsx("button", {
      ...r,
      className: `block w-full rounded-2xl ${n ? "bg-secondary-accent" : "border-[1px] border-black bg-transparent "}  px-3 py-2  font-bold text-primary-darker shadow-xl focus:outline-none focus:ring focus:ring-blue-300`,
      children: e,
    }),
  });
}
const Vv =
    "data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M34.6964%2018.0729C34.6964%2016.8654%2034.5904%2015.7043%2034.3934%2014.5896H18.6964V21.177H27.6661C27.2797%2023.3056%2026.1055%2025.1092%2024.3404%2026.3168V30.5896H29.7267C32.8782%2027.6249%2034.6964%2023.2592%2034.6964%2018.0729Z'%20fill='%234285F4'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.2084%2034.5896C22.8951%2034.5896%2026.8244%2033.0419%2029.6964%2030.4022L24.0865%2026.0655C22.5322%2027.1025%2020.5439%2027.7153%2018.2084%2027.7153C13.6874%2027.7153%209.86064%2024.6749%208.49565%2020.5896H2.69641V25.0677C5.55264%2030.7165%2011.4229%2034.5896%2018.2084%2034.5896Z'%20fill='%2334A853'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.69641%2020.9742C8.33315%2019.9054%208.12675%2018.7637%208.12675%2017.5896C8.12675%2016.4155%208.33315%2015.2738%208.69641%2014.205V9.58963H2.6283C1.39817%2011.9945%200.696411%2014.7151%200.696411%2017.5896C0.696411%2020.4641%201.39817%2023.1848%202.6283%2025.5896L8.69641%2020.9742Z'%20fill='%23FBBC05'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18.1362%207.46393C20.6729%207.46393%2022.9503%208.33598%2024.7409%2010.0487L29.6964%205.09131C26.7043%202.30231%2022.7933%200.58963%2018.1362%200.58963C11.3823%200.58963%205.53934%204.46281%202.69641%2010.1115L8.46866%2014.5896C9.8273%2010.5043%2013.6362%207.46393%2018.1362%207.46393Z'%20fill='%23EA4335'/%3e%3c/svg%3e",
  Hv =
    "data:image/svg+xml,%3csvg%20width='31'%20height='35'%20viewBox='0%200%2031%2035'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M29.7369%2027.2976C29.2076%2028.5204%2028.5811%2029.646%2027.8552%2030.6808C26.8657%2032.0916%2026.0555%2033.0681%2025.4312%2033.6104C24.4633%2034.5005%2023.4263%2034.9563%2022.3158%2034.9822C21.5186%2034.9822%2020.5572%2034.7554%2019.4381%2034.2952C18.3154%2033.8372%2017.2835%2033.6104%2016.3401%2033.6104C15.3506%2033.6104%2014.2894%2033.8372%2013.1543%2034.2952C12.0175%2034.7554%2011.1017%2034.9952%2010.4015%2035.019C9.33661%2035.0643%208.27519%2034.5955%207.21572%2033.6104C6.53951%2033.0206%205.6937%2032.0095%204.68045%2030.5771C3.59333%2029.0475%202.69956%2027.2738%201.99936%2025.2517C1.24948%2023.0675%200.873562%2020.9524%200.873562%2018.9048C0.873562%2016.5592%201.3804%2014.5362%202.39558%2012.8409C3.19343%2011.4792%204.25485%2010.405%205.5833%209.61644C6.91175%208.82788%208.34714%208.42604%209.89292%208.40033C10.7387%208.40033%2011.8479%208.66196%2013.2263%209.17614C14.6007%209.69205%2015.4833%209.95368%2015.8702%209.95368C16.1595%209.95368%2017.1399%209.64776%2018.8019%209.03788C20.3736%208.47228%2021.7001%208.23809%2022.7868%208.33034C25.7315%208.56798%2027.9437%209.72878%2029.415%2011.8201C26.7814%2013.4158%2025.4787%2015.6507%2025.5046%2018.5178C25.5284%2020.7511%2026.3385%2022.6095%2027.9308%2024.085C28.6524%2024.7699%2029.4582%2025.2992%2030.3548%2025.6751C30.1603%2026.239%2029.9551%2026.7791%2029.7369%2027.2976ZM22.9834%200.722172C22.9834%202.47257%2022.3439%204.10691%2021.0693%205.61965C19.531%207.41799%2017.6705%208.45715%2015.6528%208.29318C15.6271%208.08318%2015.6122%207.86217%2015.6122%207.62993C15.6122%205.94954%2016.3438%204.1512%2017.6428%202.68082C18.2914%201.93633%2019.1162%201.3173%2020.1165%200.823495C21.1146%200.337053%2022.0587%200.06804%2022.9467%200.0219727C22.9726%200.255974%2022.9834%200.48999%2022.9834%200.722149V0.722172Z'%20fill='white'/%3e%3c/svg%3e",
  Wv =
    "data:image/svg+xml,%3csvg%20width='35'%20height='35'%20viewBox='0%200%2035%2035'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M35%2017.6074C35%207.88338%2027.165%200.000488281%2017.5%200.000488281C7.83501%200.000488281%200%207.88338%200%2017.6074C0%2026.3956%206.3995%2033.6796%2014.7656%2035.0005V22.6969H10.3223V17.6074H14.7656V13.7284C14.7656%209.31566%2017.3783%206.8782%2021.3756%206.8782C23.2903%206.8782%2025.293%207.22209%2025.293%207.22209V11.555H23.0863C20.9123%2011.555%2020.2344%2012.9123%2020.2344%2014.3047V17.6074H25.0879L24.312%2022.6969H20.2344V35.0005C28.6005%2033.6796%2035%2026.3956%2035%2017.6074Z'%20fill='white'/%3e%3c/svg%3e";
function rr({ children: e, className: t, ...n }) {
  return y.jsx("div", {
    className: ` relative my-9  ${t} h-full`,
    children: y.jsxs("button", {
      ...n,
      className: ` px- flex w-full flex-col items-center
          justify-evenly rounded-2xl  py-2 text-sm shadow-xl    focus:outline-none focus:ring focus:ring-blue-300 md:flex-row md:text-base ${e === "Google" ? "bg-transparent text-black " : e === "Apple" ? "bg-black text-white " : "bg-[#1877F2] text-white  "}  `,
      children: [
        e,
        y.jsx("img", {
          className: "mt-1 h-5 w-5 md:mt-0 ",
          src: e === "Google" ? Vv : e === "Apple" ? Hv : Wv,
        }),
      ],
    }),
  });
}
function gn({ children: e, ...t }) {
  const { id: n } = t;
  return y.jsxs("div", {
    className: "relative my-9 w-full",
    children: [
      y.jsx("input", {
        ...t,
        required: !0,
        className:
          "block w-full rounded-2xl  border-[1px] border-black px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300",
      }),
      y.jsx("label", {
        htmlFor: n,
        className:
          "absolute right-4 top-[-3px] -translate-y-1/2 bg-primary-lighter px-2 text-sm font-medium  text-black",
        children: e,
      }),
    ],
  });
}
function Qv() {
  const { login: e } = P.useContext(Sl);
  return y.jsxs(Xo, {
    className: "h-full w-full px-8  ",
    method: "post",
    children: [
      y.jsx("h2", {
        className: "text-center text-2xl font-bold text-primary-darker ",
        children: "تسجيل الدخول",
      }),
      y.jsx(gn, {
        name: "email",
        id: "email",
        type: "text",
        children: "الايميل او رقم الهاتف",
      }),
      y.jsx(gn, {
        name: "password",
        id: "password",
        type: "password",
        minLength: "10",
        children: "كلمة المرور",
      }),
      y.jsx(dr, { secondary: !0, onClick: e, children: "تسجيل دخول" }),
      y.jsxs("div", {
        className: "my-9 flex justify-around text-sm",
        children: [
          y.jsxs("span", {
            children: [
              "  ",
              "ليس لديك حساب ؟",
              "  ",
              y.jsx(Mu, {
                to: "/signup",
                className: "underline",
                children: "انشاء حساب",
              }),
              "  ",
            ],
          }),
          y.jsx("span", {
            children: y.jsx("p", { children: "نسيت كلمة المرور" }),
          }),
        ],
      }),
      y.jsxs("div", {
        className: "mt-9 flex items-center ",
        children: [
          y.jsx("div", { className: "h-px flex-grow bg-slate-300" }),
          y.jsx("div", {
            className: "mx-4 mb-3 font-bold text-slate-300",
            children: "أو",
          }),
          y.jsx("div", { className: "h-px flex-grow bg-slate-300" }),
        ],
      }),
      y.jsxs("div", {
        className: " flex h-[20%] items-center justify-between",
        children: [
          y.jsx(rr, {
            type: "button",
            className: "w-[30%]",
            children: "Facebook",
          }),
          y.jsx(rr, {
            type: "button",
            className: "w-[30%]",
            children: "Apple",
          }),
          y.jsx(rr, {
            type: "button",
            className: "w-[30%]",
            children: "Google",
          }),
        ],
      }),
    ],
  });
}
async function Kv({ request: e }) {
  const t = await e.formData(),
    n = Object.fromEntries(t.entries());
  return console.log(n), Yo("/");
}
const Yv =
  "data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M52.5%2037.5001V47.5001C52.5%2048.8261%2051.9732%2050.0979%2051.0355%2051.0356C50.0979%2051.9733%2048.8261%2052.5001%2047.5%2052.5001H12.5C11.1739%2052.5001%209.90215%2051.9733%208.96447%2051.0356C8.02678%2050.0979%207.5%2048.8261%207.5%2047.5001V37.5001'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M42.5%2020.0001L30%207.50006L17.5%2020.0001'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M30%207.50006V37.5001'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
function xc({ children: e, ...t }) {
  const n = P.useRef(),
    [r, l] = P.useState(""),
    [o, i] = P.useState(!1),
    { id: a, size: u } = t;
  function s(w) {
    console.log("enter"), i(!0);
  }
  function f(w) {
    console.log("leave"), console.log(w), i(!1);
  }
  function d(w) {
    w.preventDefault();
  }
  function p(w) {
    w.preventDefault(), console.log("drop");
    const j = w.dataTransfer.files;
    j &&
      ((n.current.files = j), console.log(n.current.value), l(n.current.value)),
      i(!1);
  }
  function k() {
    console.log(n.current.value), l(n.current.value);
  }
  function S() {
    n.current.click();
  }
  return y.jsxs("div", {
    onClick: S,
    className: ` relative my-9  h-[30%] w-full cursor-pointer  rounded-2xl border-[1px] border-dashed border-primary-dark bg-[#6948ff41]\r
      p-3 `,
    onDragEnter: s,
    onDragOver: d,
    onDragLeave: f,
    onDrop: p,
    children: [
      y.jsx("input", {
        ...t,
        ref: n,
        onChange: k,
        type: "file",
        required: !0,
        hidden: !0,
      }),
      o && y.jsx("p", { children: "افلت الملف هنا" }),
      (r === "" &&
        !o &&
        y.jsxs("div", {
          className: "grow-1 flex h-full w-full flex-col items-stretch   ",
          children: [
            y.jsxs("div", {
              className: "flex grow items-center justify-between",
              children: [
                " ",
                y.jsx("p", {
                  children: "اسحب وافلت الصورة هنا أو قم برفعها من الملفات",
                }),
                y.jsx("img", { src: Yv, className: "  h-12  md:mt-0" }),
              ],
            }),
            " ",
            y.jsxs("p", {
              className: " text-slate-500 ",
              children: ["الحجم الاقصى: ", u / 10 ** 6, "MB"],
            }),
          ],
        })) ||
        y.jsx("p", { children: r }),
      y.jsx("label", {
        htmlFor: a,
        className:
          " absolute  right-4 top-[-3px] -translate-y-1/2 cursor-pointer bg-transparent px-2 text-sm font-medium  text-black",
        children: e,
      }),
    ],
  });
}
function Gv() {
  return y.jsxs(Xo, {
    className: "h-full w-full  px-8 md:px-48 ",
    method: "post",
    children: [
      y.jsx("h2", {
        className: "text-center text-2xl font-bold text-primary-darker ",
        children: "إنشاء حساب",
      }),
      y.jsxs("div", {
        className:
          "grid  grid-cols-1 grid-rows-2 gap-1 md:grid-cols-2  md:grid-rows-1 md:gap-14",
        children: [
          y.jsxs("div", {
            children: [
              y.jsx(gn, {
                id: "email",
                name: "email",
                type: "email",
                children: "الايميل",
              }),
              y.jsx(gn, {
                id: "userName",
                name: "UserName",
                type: "text",
                children: "اسم المستخدم",
              }),
              y.jsx(gn, {
                id: "tel",
                name: "tel",
                type: "tel",
                children: "رقم الهاتف",
              }),
              y.jsx(gn, {
                minLength: "10",
                id: "password",
                name: "password",
                type: "password",
                children: "كلمة المرور",
              }),
              y.jsx(gn, {
                minLength: "10",
                id: "password2",
                name: "password2",
                type: "password",
                children: "تأكيد كلمة المرور",
              }),
            ],
          }),
          y.jsxs("div", {
            children: [
              y.jsx(xc, {
                name: "photograph",
                id: "photograph",
                accept: "image/*",
                size: "2000000",
                children: "الصورة الشخصية",
              }),
              y.jsxs(xc, {
                name: "id",
                id: "id",
                accept: "image/*",
                size: "1000000",
                children: [" ", "اثبات شخصية"],
              }),
              y.jsx(dr, {
                secondary: !0,
                type: "submit",
                children: "إنشاء حساب",
              }),
              y.jsx("div", {
                className: "my-9 flex justify-around text-sm",
                children: y.jsxs("span", {
                  children: [
                    "  ",
                    "لديك حساب ؟",
                    "  ",
                    y.jsxs(Mu, {
                      to: "/login",
                      className: "underline",
                      children: ["تسجيل دخول", " "],
                    }),
                    "  ",
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      y.jsxs("div", {
        className: "mt-9 flex items-center ",
        children: [
          y.jsx("div", { className: "h-px flex-grow bg-slate-300" }),
          y.jsx("div", {
            className: "mx-4 mb-3 font-bold text-slate-300",
            children: "أو",
          }),
          y.jsx("div", { className: "h-px flex-grow bg-slate-300" }),
        ],
      }),
      y.jsxs("div", {
        className: " flex h-[20%] items-center justify-center",
        children: [
          y.jsx(rr, {
            type: "button",
            className: "mx-1 w-[20%]",
            children: "Facebook",
          }),
          y.jsx(rr, {
            type: "button",
            className: "w-[20%]",
            children: "Apple",
          }),
          y.jsx(rr, {
            type: "button",
            className: "w-[20%]",
            children: "Google",
          }),
        ],
      }),
    ],
  });
}
async function Xv({ request: e }) {
  console.log("click");
  const t = await e.formData(),
    n = Object.fromEntries(t.entries());
  return console.log(n), Yo("/verify");
}
function Zv() {
  const { login: e } = P.useContext(Sl);
  return y.jsxs(Xo, {
    className: "h-full w-full px-8 ",
    method: "post",
    children: [
      y.jsxs("h2", {
        className: "text-center text-2xl font-bold text-primary-darker ",
        children: ["مرحباً بك طاهر", " "],
      }),
      y.jsx("div", {
        className: "my-9 flex justify-around text-sm",
        children: "لقد تم ارسال الى taher@gmail.com",
      }),
      y.jsx(Jv, {}),
      y.jsxs(dr, { secondary: !0, onClick: e, children: [" ", "تأكيد"] }),
      y.jsx("div", {
        className: "my-9 flex justify-around text-sm",
        children: "اذا لم يصلك يمكنك اعادة المحاولة بعد 1 د",
      }),
      y.jsx(dr, { children: "إعادة إرسال" }),
    ],
  });
}
function Jv() {
  const [e, t] = P.useState(""),
    n = Array.from({ length: 6 }, () => P.useRef());
  console.log(e);
  const r = (o, i) => {
      const a = o.target.value;
      t((u) => {
        const s = u.split("");
        return (s[i] = a), s.join("");
      }),
        a && i < n.length - 1 && n[e.length + 1].current.focus();
    },
    l = (o, i) => {
      o.key === "Backspace" &&
        !e[i] &&
        i > 0 &&
        n[e.length - 1].current.focus();
    };
  return y.jsx("div", {
    className: "flex w-full items-center justify-center",
    children: n.map((o, i) =>
      y.jsx(
        "input",
        {
          required: !0,
          placeholder: "_",
          ref: o,
          type: "text",
          pattern: "[0-9]*",
          maxLength: 1,
          value: e[i] || "",
          onChange: (a) => r(a, i),
          onKeyDown: (a) => l(a, i),
          className: `mx-2  ${i < e.length ? "bg-slate-300" : ""}   aspect-square w-[12%] rounded-xl  border border-gray-300 text-center text-3xl focus:outline-none  focus:ring-2 focus:ring-blue-500 md:w-[15%]`,
        },
        i,
      ),
    ),
  });
}
async function qv({ request: e }) {
  const t = await e.formData(),
    n = Object.fromEntries(t.entries());
  return console.log(n), Yo("/");
}
function bv() {
  const { logout: e } = P.useContext(Sl);
  return y.jsxs(Xo, {
    className: "h-full w-full px-8 ",
    method: "post",
    children: [
      y.jsx("h2", {
        className: "text-center text-2xl font-bold text-primary-darker ",
        children: "هل أنت متأكد من تسجيل الخروج؟",
      }),
      y.jsx(dr, { secondary: !0, onClick: e, children: "تأكيد" }),
      y.jsx(dr, { children: "تراجع" }),
    ],
  });
}
async function eg({ request: e }) {
  return Yo("/");
}
const tg = pv([
  {
    path: "/",
    element: y.jsx(Fv, {}),
    errorElement: y.jsx($v, {}),
    children: [
      { index: !0, element: y.jsx(ep, {}) },
      { path: "assets", element: y.jsx(Ov, {}) },
      { path: "about", element: y.jsx(Iv, {}) },
      { path: "more", element: y.jsx(Uv, {}) },
      { path: "programs", element: y.jsx(Av, {}) },
      { path: "sale", element: y.jsx(Bv, {}) },
      { path: "login", element: y.jsx(Qv, {}), action: Kv },
      { path: "signup", element: y.jsx(Gv, {}), action: Xv },
      { path: "verify", element: y.jsx(Zv, {}), action: qv },
      { path: "logout", element: y.jsx(bv, {}), action: eg },
    ],
  },
]);
function ng() {
  return y.jsx(y.Fragment, { children: y.jsx(Sv, { router: tg }) });
}
ji.createRoot(document.getElementById("root")).render(
  y.jsx(Mc.StrictMode, { children: y.jsx(ng, {}) }),
);
