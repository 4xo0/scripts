// ==UserScript==
// @name        E-Rush
// @author      Exobyte & Pixelmelt & Soulman
// @description Evades.io multihack and tas
// @license     MIT
// @match       https://evades.io/*
// @match       https://evades.online/*
// @match       https://eu.evades.io/*
// @require     https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.11/runtime.js
// @run-at      document-start
// @version 0.0.1.20260207125712
// @namespace https://greasyfork.org/users/1568629
// ==/UserScript==
function A(I) {
    return A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
        return typeof A
    } : function(A) {
        return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
    }, A(I)
}
 
function I() {
    var A, B, Q = "function" == typeof Symbol ? Symbol : {},
        C = Q.iterator || "@@iterator",
        E = Q.toStringTag || "@@toStringTag";
 
    function i(I, Q, C, E) {
        var i = Q && Q.prototype instanceof o ? Q : o,
            w = Object.create(i.prototype);
        return g(w, "_invoke", function(I, g, Q) {
            var C, E, i, o = 0,
                w = Q || [],
                t = !1,
                a = {
                    p: 0,
                    n: 0,
                    v: A,
                    a: N,
                    f: N.bind(A, 4),
                    d: function(I, g) {
                        return C = I, E = 0, i = A, a.n = g, D
                    }
                };
 
            function N(I, g) {
                for (E = I, i = g, B = 0; !t && o && !Q && B < w.length; B++) {
                    var Q, C = w[B],
                        N = a.p,
                        s = C[2];
                    I > 3 ? (Q = s === g) && (i = C[(E = C[4]) ? 5 : (E = 3, 3)], C[4] = C[5] = A) : C[0] <= N && ((Q = I < 2 && N < C[1]) ? (E = 0, a.v = g, a.n = C[1]) : N < s && (Q = I < 3 || C[0] > g || g > s) && (C[4] = I, C[5] = g, a.n = s, E = 0))
                }
                if (Q || I > 1) return D;
                throw t = !0, g
            }
            return function(Q, w, s) {
                if (o > 1) throw TypeError("Generator is already running");
                for (t && 1 === w && N(w, s), E = w, i = s;
                    (B = E < 2 ? A : i) || !t;) {
                    C || (E ? E < 3 ? (E > 1 && (a.n = -1), N(E, i)) : a.n = i : a.v = i);
                    try {
                        if (o = 2, C) {
                            if (E || (Q = "next"), B = C[Q]) {
                                if (!(B = B.call(C, i))) throw TypeError("iterator result is not an object");
                                if (!B.done) return B;
                                i = B.value, E < 2 && (E = 0)
                            } else 1 === E && (B = C.return) && B.call(C), E < 2 && (i = TypeError("The iterator does not provide a '" + Q + "' method"), E = 1);
                            C = A
                        } else if ((B = (t = a.n < 0) ? i : I.call(g, a)) !== D) break
                    } catch (I) {
                        C = A, E = 1, i = I
                    } finally {
                        o = 1
                    }
                }
                return {
                    value: B,
                    done: t
                }
            }
        }(I, C, E), !0), w
    }
    var D = {};
 
    function o() {}
 
    function w() {}
 
    function t() {}
    B = Object.getPrototypeOf;
    var a = [][C] ? B(B([][C]())) : (g(B = {}, C, function() {
            return this
        }), B),
        N = t.prototype = o.prototype = Object.create(a);
 
    function s(A) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(A, t) : (A.__proto__ = t, g(A, E, "GeneratorFunction")), A.prototype = Object.create(N), A
    }
    return w.prototype = t, g(N, "constructor", t), g(t, "constructor", w), w.displayName = "GeneratorFunction", g(t, E, "GeneratorFunction"), g(N), g(N, E, "Generator"), g(N, C, function() {
        return this
    }), g(N, "toString", function() {
        return "[object Generator]"
    }), (I = function() {
        return {
            w: i,
            m: s
        }
    })()
}
 
function g(A, I, B, Q) {
    var C = Object.defineProperty;
    try {
        C({}, "", {})
    } catch (A) {
        C = 0
    }
    g = function(A, I, B, Q) {
        function E(I, B) {
            g(A, I, function(A) {
                return this._invoke(I, B, A)
            })
        }
        I ? C ? C(A, I, {
            value: B,
            enumerable: !Q,
            configurable: !Q,
            writable: !Q
        }) : A[I] = B : (E("next", 0), E("throw", 1), E("return", 2))
    }, g(A, I, B, Q)
}
 
function B(A, I) {
    return function(A) {
        if (Array.isArray(A)) return A
    }(A) || function(A, I) {
        var g = null == A ? null : "undefined" != typeof Symbol && A[Symbol.iterator] || A["@@iterator"];
        if (null != g) {
            var B, Q, C, E, i = [],
                D = !0,
                o = !1;
            try {
                if (C = (g = g.call(A)).next, 0 === I) {
                    if (Object(g) !== g) return;
                    D = !1
                } else
                    for (; !(D = (B = C.call(g)).done) && (i.push(B.value), i.length !== I); D = !0);
            } catch (A) {
                o = !0, Q = A
            } finally {
                try {
                    if (!D && null != g.return && (E = g.return(), Object(E) !== E)) return
                } finally {
                    if (o) throw Q
                }
            }
            return i
        }
    }(A, I) || h(A, I) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
 
function Q(A, I, g, B, Q, C, E) {
    try {
        var i = A[C](E),
            D = i.value
    } catch (A) {
        return void g(A)
    }
    i.done ? I(D) : Promise.resolve(D).then(B, Q)
}
 
function C(A) {
    return function() {
        var I = this,
            g = arguments;
        return new Promise(function(B, C) {
            var E = A.apply(I, g);
 
            function i(A) {
                Q(E, B, C, i, D, "next", A)
            }
 
            function D(A) {
                Q(E, B, C, i, D, "throw", A)
            }
            i(void 0)
        })
    }
}
 
function E(A, I) {
    var g = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
        var B = Object.getOwnPropertySymbols(A);
        I && (B = B.filter(function(I) {
            return Object.getOwnPropertyDescriptor(A, I).enumerable
        })), g.push.apply(g, B)
    }
    return g
}
 
function i(A) {
    for (var I = 1; I < arguments.length; I++) {
        var g = null != arguments[I] ? arguments[I] : {};
        I % 2 ? E(Object(g), !0).forEach(function(I) {
            D(A, I, g[I])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(g)) : E(Object(g)).forEach(function(I) {
            Object.defineProperty(A, I, Object.getOwnPropertyDescriptor(g, I))
        })
    }
    return A
}
 
function D(A, I, g) {
    return (I = a(I)) in A ? Object.defineProperty(A, I, {
        value: g,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : A[I] = g, A
}
 
function o(A, I) {
    if (!(A instanceof I)) throw new TypeError("Cannot call a class as a function")
}
 
function w(A, I) {
    for (var g = 0; g < I.length; g++) {
        var B = I[g];
        B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(A, a(B.key), B)
    }
}
 
function t(A, I, g) {
    return I && w(A.prototype, I), g && w(A, g), Object.defineProperty(A, "prototype", {
        writable: !1
    }), A
}
 
function a(I) {
    var g = function(I, g) {
        if ("object" != A(I) || !I) return I;
        var B = I[Symbol.toPrimitive];
        if (void 0 !== B) {
            var Q = B.call(I, g || "default");
            if ("object" != A(Q)) return Q;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === g ? String : Number)(I)
    }(I, "string");
    return "symbol" == A(g) ? g : g + ""
}
 
function N(I, g, B) {
    return g = R(g),
        function(I, g) {
            if (g && ("object" == A(g) || "function" == typeof g)) return g;
            if (void 0 !== g) throw new TypeError("Derived constructors may only return object or undefined");
            return function(A) {
                if (void 0 === A) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return A
            }(I)
        }(I, n() ? Reflect.construct(g, B || [], R(I).constructor) : g.apply(I, B))
}
 
function s(A, I) {
    if ("function" != typeof I && null !== I) throw new TypeError("Super expression must either be null or a function");
    A.prototype = Object.create(I && I.prototype, {
        constructor: {
            value: A,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(A, "prototype", {
        writable: !1
    }), I && c(A, I)
}
 
function y(A) {
    var I = "function" == typeof Map ? new Map : void 0;
    return y = function(A) {
        if (null === A || ! function(A) {
                try {
                    return -1 !== Function.toString.call(A).indexOf("[native code]")
                } catch (I) {
                    return "function" == typeof A
                }
            }(A)) return A;
        if ("function" != typeof A) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== I) {
            if (I.has(A)) return I.get(A);
            I.set(A, g)
        }
 
        function g() {
            return function(A, I, g) {
                if (n()) return Reflect.construct.apply(null, arguments);
                var B = [null];
                B.push.apply(B, I);
                var Q = new(A.bind.apply(A, B));
                return g && c(Q, g.prototype), Q
            }(A, arguments, R(this).constructor)
        }
        return g.prototype = Object.create(A.prototype, {
            constructor: {
                value: g,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), c(g, A)
    }, y(A)
}
 
function n() {
    try {
        var A = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch (A) {}
    return (n = function() {
        return !!A
    })()
}
 
function c(A, I) {
    return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(A, I) {
        return A.__proto__ = I, A
    }, c(A, I)
}
 
function R(A) {
    return R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(A) {
        return A.__proto__ || Object.getPrototypeOf(A)
    }, R(A)
}
 
function G(A, I) {
    var g = "undefined" != typeof Symbol && A[Symbol.iterator] || A["@@iterator"];
    if (!g) {
        if (Array.isArray(A) || (g = h(A)) || I && A && "number" == typeof A.length) {
            g && (A = g);
            var B = 0,
                Q = function() {};
            return {
                s: Q,
                n: function() {
                    return B >= A.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: A[B++]
                    }
                },
                e: function(A) {
                    throw A
                },
                f: Q
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var C, E = !0,
        i = !1;
    return {
        s: function() {
            g = g.call(A)
        },
        n: function() {
            var A = g.next();
            return E = A.done, A
        },
        e: function(A) {
            i = !0, C = A
        },
        f: function() {
            try {
                E || null == g.return || g.return()
            } finally {
                if (i) throw C
            }
        }
    }
}
 
function h(A, I) {
    if (A) {
        if ("string" == typeof A) return F(A, I);
        var g = {}.toString.call(A).slice(8, -1);
        return "Object" === g && A.constructor && (g = A.constructor.name), "Map" === g || "Set" === g ? Array.from(A) : "Arguments" === g || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? F(A, I) : void 0
    }
}
 
function F(A, I) {
    (null == I || I > A.length) && (I = A.length);
    for (var g = 0, B = Array(I); g < I; g++) B[g] = A[g];
    return B
}
var e = "undefined" != typeof unsafeWindow ? unsafeWindow : window,
    M = e.XD = {},
    S = M.default_settings = {
        spam_first_ability: !1,
        spam_second_ability: !1,
        spam_third_ability: !1,
        ability_priority: [0, "1 -> 2 -> 3", "1 -> 3 -> 2", "2 -> 1 -> 3", "2 -> 3 -> 1", "3 -> 1 -> 2", "3 -> 2 -> 1"],
        fast_upgrades: !1,
        perfect_first_ability: !1,
        perfect_second_ability: !1,
        show_hat_skin: !0,
        show_body_skin: !0,
        show_gem_skin: !0,
        show_stella_balls: !1,
        brighten_dark_areas: !1,
        spoof_isdev: !1,
        display_old_self_when_chrono: !1,
        display_full_hero_and_not_just_a_shadow: !1,
        network_oriented_rendering: !1,
        prevent_kick: !1,
        viola_clone_auto_follow: !1,
        esc_for_settings: !0,
        remove_scrollbars_from_settings: !0,
        warn_before_reload: !1,
        tas: !1,
        starred_settings: {},
        depth: {
            min: 1,
            max: 100,
            step: 1,
            value: 30
        },
        boundary_visualizer: !1,
        teleport_indicator: !1,
        star_predictor: !1,
        teleporting_enemy_predictor: !1,
        pellet_collector: !1,
        overhead_chat: !1,
        speedrun_timer: !1,
        server_list_ui: !1,
        zone_ui_hider: !1
    },
    k = M.settings = e.localStorage.XD ? JSON.parse(e.localStorage.XD) : S;
for (var r in S) {
    var L = k[r],
        U = S[r];
    void 0 !== L && L.constructor == U.constructor && (U.constructor != Object || L.min == U.min && L.max == U.max && L.step == U.step) || (k[r] = U)
}
for (var J in k) void 0 === S[J] && delete k[J];
var Y = M.save = function() {
    e.localStorage.XD = JSON.stringify(k)
};
Y();
var K, H = new TextEncoder,
    l = (new TextDecoder, M.next_tick = function() {
        for (var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}, I = arguments.length, g = new Array(I > 1 ? I - 1 : 0), B = 1; B < I; B++) g[B - 1] = arguments[B];
        return Promise.resolve().then(A.bind.apply(A, [null].concat(g)))
    }),
    q = M.exec_arr = function(A) {
        var I = A.slice();
        A.length = 0;
        var g, B = G(I);
        try {
            for (B.s(); !(g = B.n()).done;) {
                (0, g.value)()
            }
        } catch (A) {
            B.e(A)
        } finally {
            B.f()
        }
    },
    d = [],
    f = M.before_send = function(A) {
        for (var I = arguments.length, g = new Array(I > 1 ? I - 1 : 0), B = 1; B < I; B++) g[B - 1] = arguments[B];
        d.push(A.bind.apply(A, [null].concat(g)))
    },
    p = [],
    u = M.after_send = function(A) {
        for (var I = arguments.length, g = new Array(I > 1 ? I - 1 : 0), B = 1; B < I; B++) g[B - 1] = arguments[B];
        p.push(A.bind.apply(A, [null].concat(g)))
    },
    T = [],
    x = M.on_setting = function(A, I) {
        for (var g = arguments.length, B = new Array(g > 2 ? g - 2 : 0), Q = 2; Q < g; Q++) B[Q - 2] = arguments[Q];
        if (void 0 === k[A]) throw new Error("No setting named ".concat(A));
        T.push(function() {
            var g;
            I = (g = I).bind.apply(g, [null].concat(B)), k = new Proxy(k, {
                get: function(A, I) {
                    return A[I]
                },
                set: function(g, B, Q) {
                    g[B] = Q, B == A && I(Q)
                }
            }), I(k[A])
        })
    };
x("remove_scrollbars_from_settings", function(A) {
    A ? ((K = document.createElement("style")).innerText = "\n\t\t.settings-categories, .settings-container {\n\t\t\toverflow: auto;\n\t\t}\n\t\t", document.head.appendChild(K)) : K && (K.remove(), K = null)
}), e.onbeforeunload = function(A) {
    k.warn_before_reload && (A.preventDefault(), A.returnValue = "")
};
var b = new WeakMap,
    v = M.override = function(A, I, g) {
        Object.defineProperty(Object.prototype, A, {
            get: I,
            configurable: !0,
            set: function(I) {
                var B = b.get(this);
                return B || (B = [], b.set(this, B)), B.push(A), g.call(this, I)
            }
        })
    },
    O = M.proxy = function(A, I, g) {
        A[I] = new Proxy(A[I], {
            apply: g
        })
    },
    m = M.direct_proxy = function(A, I) {
        return new Proxy(A, {
            apply: I
        })
    };
O(Object.prototype, "hasOwnProperty", function(A, I, g) {
    var B = b.get(I);
    return !(!B || !(g[0] in B)) || A.apply(I, g)
});
var P = M.get = function(A, I) {
        for (var g, B = arguments.length, Q = new Array(B > 2 ? B - 2 : 0), C = 2; C < B; C++) Q[C - 2] = arguments[C];
        I = (g = I).bind.apply(g, [null].concat(Q)), v(A, function() {}, function(g) {
            return delete Object.prototype[A], this[A] = g, I(this), g
        })
    },
    Z = new(function() {
        function A() {
            var I;
            return o(this, A), (I = N(this, A)).src = "https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png", I
        }
        return s(A, y(Image)), t(A, [{
            key: "getImage",
            value: function() {
                return this
            }
        }, {
            key: "getPreviewImage",
            value: function() {
                return this
            }
        }, {
            key: "draw",
            value: function() {}
        }])
    }());
v("bodyImage", function() {
    return !k.show_body_skin && this._bodyImage ? Z : this._bodyImage
}, function(A) {
    this._bodyImage = A
}), v("hatImage", function() {
    return !k.show_hat_skin && this._hatImage ? Z : this._hatImage
}, function(A) {
    this._hatImage = A
}), v("gemImage", function() {
    return !k.show_gem_skin && this._gemImage ? Z : this._gemImage
}, function(A) {
    this._gemImage = A
}), v("isDestroyed", function() {
    return (!k.show_stella_balls || !this._isDestroyed) && this._isDestroyed
}, function(A) {
    return this._isDestroyed = A
}), v("isDev", function() {
    return !!k.spoof_isdev || this._isDev
}, function(A) {
    return this._isDev = A
});
var W, X, j, V = function() {
    return 0
};
v("pingSamples", function() {
    return this._pingSamples
}, function(A) {
    this._pingSamples = A, V = function() {
        return Math.round(A.reduce(function(A, I) {
            return A + I.value
        }, 0) / A.length)
    }
}), v("globalEntities", function() {
    return this._globalEntities
}, function(A) {
    var I;
    A instanceof Array || (W = M.state = this, X = M.area = W.area, j = M.zones = null === (I = X) || void 0 === I || null === (I = I.zones) || void 0 === I ? void 0 : I.zones);
    return this._globalEntities = A
});
var z, _ = M.mouse = [0, 0];
e.document.addEventListener("mousemove", function(A) {
    _ = [A.pageX, A.pageY]
});
var $ = !0;
v("updateChat", function() {
    return this._updateChat
}, function(A) {
    return this.registerListeners && (z = M.inputs = this, O(this, "onMouseMove", function(A, I, g) {
        $ && A.apply(I, g)
    }), O(this, "onMouseDown", function(A, I, g) {
        $ && A.apply(I, g)
    }), O(this, "onMouseUp", function(A, I, g) {
        $ && A.apply(I, g)
    })), this._updateChat = A
});
var AA = M.heroes = {};
O(JSON, "parse", function(A, I, g) {
    var B = A.apply(I, g);
    if (B.client_tick_rate)
        for (var Q = 0; Q < B.heroes.length; ++Q) {
            var C = B.heroes[Q];
            AA[C.name] = i(i({}, C), {}, {
                id: Q
            })
        }
    return B
});
var IA, gA = CanvasRenderingContext2D.prototype;
O(gA, "fillRect", function(A, I, g) {
    return k.brighten_dark_areas && "string" == typeof I.fillStyle && I.fillStyle.startsWith("rgba(0, 0, 0, 0") && 0 == g[0] && 0 == g[1] && g[2] == I.canvas.width && g[3] == I.canvas.height && (I.fillStyle = "#000"), A.apply(I, g)
});
var BA, QA, CA = !1;
v("self", function() {
    return this._self
}, function(A) {
    return A && A.entity && 114 == A.entity.entityType && !CA && (CA = !0, IA = M.self = A.entity, CA = !1), this._self = A
});
var EA = [],
    iA = M.draw = function(A) {
        for (var I = arguments.length, g = new Array(I > 1 ? I - 1 : 0), B = 1; B < I; B++) g[B - 1] = arguments[B];
        EA.push(A.bind.apply(A, [null].concat(g)))
    };
v("isPlayer", function() {
    return this._isPlayer
}, function(A) {
    return C(I().m(function A() {
        var g;
        return I().w(function(A) {
            for (;;) switch (A.n) {
                case 0:
                    return A.n = 1, l();
                case 1:
                    this._save = function() {
                        var A, I = {},
                            g = G(this.stateFields());
                        try {
                            for (g.s(); !(A = g.n()).done;) {
                                var B = A.value;
                                I[B] = this[B]
                            }
                        } catch (A) {
                            g.e(A)
                        } finally {
                            g.f()
                        }
                        return I
                    }.bind(this), this._restore = function(A) {
                        var I, g = G(this.stateFields());
                        try {
                            for (g.s(); !(I = g.n()).done;) {
                                var B = I.value;
                                this[B] = A[B]
                            }
                        } catch (A) {
                            g.e(A)
                        } finally {
                            g.f()
                        }
                    }.bind(this), g = [], O(this, "render", function(A, I, Q) {
                        var C = B(Q, 2),
                            E = C[0],
                            i = C[1];
                        if (BA = M.camera = i, QA = M.ctx = E, I == IA) {
                            q(EA);
                            var D = Date.now();
                            g.push({
                                state: I._save(),
                                timestamp: D + 2600
                            });
                            for (var o = 0; o < g.length && g[o].timestamp <= D;) o++;
                            if ((o > 1 || o == g.length) && g.splice(0, o - 1), k.display_old_self_when_chrono && I.heroType == AA.Chrono.id) {
                                var w = I._save(),
                                    t = g.length && g[0].timestamp <= D ? g[0].state : null;
                                t && (I._restore(t), k.display_full_hero_and_not_just_a_shadow ? A.apply(I, Q) : (QA.beginPath(), QA.arc(BA.getX(I.x), BA.getY(I.y), BA.toScale(I.radius), 0, 2 * Math.PI), QA.fillStyle = "#00000050", QA.fill(), QA.strokeStyle = "#FFFFFF50", QA.lineWidth = 2, QA.stroke()), I._restore(w))
                            }
                        }
                        return A.apply(I, Q)
                    });
                case 2:
                    return A.a(2)
            }
        }, A, this)
    })).call(this), this._isPlayer = A
});
var DA = function() {},
    oA = function() {},
    wA = function() {},
    tA = M.actions = {
        W: 19,
        A: 4,
        S: 10,
        D: 6,
        ArrowUp: 18,
        ArrowLeft: 8,
        ArrowDown: 5,
        ArrowRight: 9,
        Shift: 7,
        Z: 0,
        X: 2,
        C: 1,
        Space: 3,
        1: 17,
        2: 16,
        3: 15,
        4: 12,
        5: 14,
        6: 13
    },
    aA = !1,
    NA = [],
    sA = 0,
    yA = 1,
    nA = 2,
    cA = 3,
    RA = 4,
    GA = 5,
    hA = 6,
    FA = 7,
    eA = 8;
 
function MA() {
    aA && (aA = !1, oA(tA.ArrowUp), oA(tA.ArrowLeft), oA(tA.ArrowDown), oA(tA.ArrowRight), NA.push(eA), NA.length > 30 && NA.shift())
}
 
function SA(A) {
    MA();
    var I = Math.PI / 8,
        g = eA;
    A >= -I && A < I ? (wA(tA.ArrowRight), g = sA) : A >= I && A < 3 * I ? (wA(tA.ArrowDown), wA(tA.ArrowRight), g = RA) : A >= 3 * I && A < 5 * I ? (wA(tA.ArrowDown), g = yA) : A >= 5 * I && A < 7 * I ? (wA(tA.ArrowDown), wA(tA.ArrowLeft), g = GA) : A >= 7 * I || A < 7 * -I ? (wA(tA.ArrowLeft), g = cA) : A >= 7 * -I && A < 5 * -I ? (wA(tA.ArrowUp), wA(tA.ArrowLeft), g = FA) : A >= 5 * -I && A < 3 * -I ? (wA(tA.ArrowUp), g = nA) : A >= 3 * -I && A < -I && (wA(tA.ArrowUp), wA(tA.ArrowRight), g = hA), NA.pop(), NA.push(g), NA.length > 30 && NA.shift(), aA = !0
}
var kA = 0,
    rA = !1,
    LA = function() {
        k.prevent_kick && ((kA = (kA + 1) % 100) || (rA = !rA, wA(tA.Shift), wA(rA ? tA.A : tA.D))), f(LA)
    };
f(LA);
var UA = function() {
    if (k.fast_upgrades)
        for (var A = 1; A <= 5; ++A) oA(tA[A.toString()]);
    u(UA)
};
u(UA);
var JA, YA, KA = !0;
P("experienceBar", (YA = C(I().m(function A(g) {
    var Q, C, E, i;
    return I().w(function(A) {
        for (;;) switch (A.n) {
            case 0:
                if (!KA) {
                    A.n = 1;
                    break
                }
                console.log("Got gameState"), KA = !1, A.n = 2;
                break;
            case 1:
                return console.error("Got gameState more than once"), A.a(2);
            case 2:
                return JA = M.game_state = g, A.n = 3, l();
            case 3:
                DA = M.key_down = function(A) {
                    JA.keys.isKeyUp(A) && JA.keys.keyDown(A)
                }, oA = M.key_up = function(A) {
                    JA.keys.isKeyDown(A) && JA.keys.keyUp(A)
                }, wA = M.key_press = function(A) {
                    DA(A), u(oA, A)
                }, Q = [
                    ["first", !1, tA.Z],
                    ["second", !1, tA.X],
                    ["third", !1, tA.C]
                ], C = function(A) {
                    var I = B(Q[A], 3),
                        g = I[0],
                        C = I[1],
                        E = I[2];
                    k["spam_".concat(g, "_ability")] && (C = !C, Q[A][1] = C, C ? DA(E) : oA(E))
                }, E = [
                    [1, 2, 3],
                    [1, 3, 2],
                    [2, 1, 3],
                    [2, 3, 1],
                    [3, 1, 2],
                    [3, 2, 1]
                ], i = function() {
                    var A, I = G(E[k.ability_priority[0]]);
                    try {
                        for (I.s(); !(A = I.n()).done;) {
                            var g = A.value;
                            C(g - 1)
                        }
                    } catch (A) {
                        I.e(A)
                    } finally {
                        I.f()
                    }
                    f(i)
                }, f(i), O(JA, "processInputs", function(A, I, g) {
                    q(d);
                    var B = A.apply(I, g);
                    return q(p), B
                });
            case 4:
                return A.a(2)
        }
    }, A)
})), function(A) {
    return YA.apply(this, arguments)
}));
M.send_inputs = function() {
    var A;
    null === (A = JA) || void 0 === A || A.processInputs()
};
var HA = {},
    lA = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        prev_vx: 0,
        prev_vy: 0
    },
    qA = [],
    dA = [],
    fA = 0,
    pA = 0,
    uA = !1,
    TA = 0;
f(function A() {
    ! function() {
        if (IA && W && z && BA && (pA = JA && JA.sequence || 0, uA = !1, qA.length && !(fA >= qA.length)))
            if (k.tas) {
                if (z.mouseMovementToggled) {
                    var A = Date.now();
                    TA > 0 && console.log("tas_move interval: ".concat(A - TA, "ms")), TA = A, MA();
                    var I = qA[fA];
                    if (I) {
                        var g = B(I, 4),
                            Q = g[0],
                            C = g[1];
                        g[2], g[3], k.tas && z.mouseMovementToggled && (lA.vx, lA.vy), 0 === Q && 0 === C || (uA = !0, SA(Math.atan2(C, Q)))
                    }
                }
            } else qA = []
    }(), f(A)
}), iA(function A() {
    ! function() {
        if (dA.length && k.tas && IA && BA) {
            var A = QA.canvas.width / 2,
                I = QA.canvas.height / 2,
                g = BA.toScale(IA.radius);
            QA.fillStyle = "rgba(160,160,160,0.35)", QA.strokeStyle = "rgba(200,200,200,0.65)", QA.lineWidth = BA.toScale(2);
            var B = function(B) {
                if (B && !(B.length < 4)) {
                    var Q = B[2],
                        C = B[3],
                        E = Q - IA.x,
                        i = C - IA.y,
                        D = A + BA.toScale(E),
                        o = I + BA.toScale(i);
                    QA.beginPath(), QA.arc(D, o, g, 0, 2 * Math.PI), QA.fill(), QA.stroke()
                }
            };
            B(dA[0]), B(dA[1])
        }
    }(), iA(A)
});
var xA;
 
function bA(A) {
    for (var I = window.atob(A), g = I.length, B = new Uint8Array(g), Q = 0; Q < g; Q++) B[Q] = I.charCodeAt(Q);
    return B
}
 
function vA(A, I) {
    return function(A, I) {
        XA += I, XA >= WA && ((ZA = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        })).decode(), XA = I);
        return ZA.decode(mA().subarray(A, A + I))
    }(A >>>= 0, I)
}
var OA = null;
 
function mA() {
    return null !== OA && 0 !== OA.byteLength || (OA = new Uint8Array(xA.memory.buffer)), OA
}
 
function PA(A, I, g) {
    if (void 0 === g) {
        var B = jA.encode(A),
            Q = I(B.length, 1) >>> 0;
        return mA().subarray(Q, Q + B.length).set(B), VA = B.length, Q
    }
    for (var C = A.length, E = I(C, 1) >>> 0, i = mA(), D = 0; D < C; D++) {
        var o = A.charCodeAt(D);
        if (o > 127) break;
        i[E + D] = o
    }
    if (D !== C) {
        0 !== D && (A = A.slice(D)), E = g(E, C, C = D + 3 * A.length, 1) >>> 0;
        var w = mA().subarray(E + D, E + C);
        E = g(E, C, D += jA.encodeInto(A, w).written, 1) >>> 0
    }
    return VA = D, E
}
var ZA = new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0
});
ZA.decode();
var WA = 2146435072,
    XA = 0;
var jA = new TextEncoder;
"encodeInto" in jA || (jA.encodeInto = function(A, I) {
    var g = jA.encode(A);
    return I.set(g), {
        read: A.length,
        written: g.length
    }
});
var VA = 0,
    zA = "undefined" == typeof FinalizationRegistry ? {
        register: function() {},
        unregister: function() {}
    } : new FinalizationRegistry(function(A) {
        return xA.__wbg_tas_free(A >>> 0, 1)
    }),
    _A = t(function A(I, g) {
        o(this, A);
        var B = PA(I, xA.__wbindgen_malloc, xA.__wbindgen_realloc),
            Q = VA,
            C = PA(g, xA.__wbindgen_malloc, xA.__wbindgen_realloc),
            E = VA,
            i = xA.tas_new(B, Q, C, E);
        return this.__wbg_ptr = i >>> 0, zA.register(this, this.__wbg_ptr, this), this
    }, [{
        key: "__destroy_into_raw",
        value: function() {
            var A = this.__wbg_ptr;
            return this.__wbg_ptr = 0, zA.unregister(this), A
        }
    }, {
        key: "free",
        value: function() {
            var A = this.__destroy_into_raw();
            xA.__wbg_tas_free(A, 0)
        }
    }, {
        key: "update_velocity",
        value: function(A) {
            var I = PA(A, xA.__wbindgen_malloc, xA.__wbindgen_realloc),
                g = VA;
            xA.tas_update_velocity(this.__wbg_ptr, I, g)
        }
    }, {
        key: "compute",
        value: function(A) {
            var I, g, B, Q = (I = A, g = xA.__wbindgen_malloc, B = g(1 * I.length, 1) >>> 0, mA().set(I, B / 1), VA = I.length, B),
                C = VA,
                E = xA.tas_compute(this.__wbg_ptr, Q, C),
                i = function(A, I) {
                    return A >>>= 0, mA().subarray(A / 1, A / 1 + I)
                }(E[0], E[1]).slice();
            return xA.__wbindgen_free(E[0], 1 * E[1], 1), i
        }
    }]);
Symbol.dispose && (_A.prototype[Symbol.dispose] = _A.prototype.free);
var $A = new Set(["basic", "cors", "default"]);
 
function AI(A, I) {
    return II.apply(this, arguments)
}
 
function II() {
    return (II = C(I().m(function A(g, B) {
        var Q, C, E;
        return I().w(function(A) {
            for (;;) switch (A.p = A.n) {
                case 0:
                    if (!("function" == typeof Response && g instanceof Response)) {
                        A.n = 8;
                        break
                    }
                    if ("function" != typeof WebAssembly.instantiateStreaming) {
                        A.n = 5;
                        break
                    }
                    return A.p = 1, A.n = 2, WebAssembly.instantiateStreaming(g, B);
                case 2:
                case 7:
                    return A.a(2, A.v);
                case 3:
                    if (A.p = 3, E = A.v, !(g.ok && $A.has(g.type)) || "application/wasm" === g.headers.get("Content-Type")) {
                        A.n = 4;
                        break
                    }
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", E), A.n = 5;
                    break;
                case 4:
                    throw E;
                case 5:
                    return A.n = 6, g.arrayBuffer();
                case 6:
                    return Q = A.v, A.n = 7, WebAssembly.instantiate(Q, B);
                case 8:
                    return A.n = 9, WebAssembly.instantiate(g, B);
                case 9:
                    if (!((C = A.v) instanceof WebAssembly.Instance)) {
                        A.n = 10;
                        break
                    }
                    return A.a(2, {
                        instance: C,
                        module: g
                    });
                case 10:
                    return A.a(2, C);
                case 11:
                    return A.a(2)
            }
        }, A, null, [
            [1, 3]
        ])
    }))).apply(this, arguments)
}
 
function gI() {
    var A = {
        wbg: {}
    };
    return A.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(A, I) {
        throw new Error(vA(A, I))
    }, A.wbg.__wbindgen_init_externref_table = function() {
        var A = xA.__wbindgen_externrefs,
            I = A.grow(4);
        A.set(0, void 0), A.set(I + 0, void 0), A.set(I + 1, null), A.set(I + 2, !0), A.set(I + 3, !1)
    }, A
}
 
function BI(A, I) {
    return xA = A.exports, __wbg_init.__wbindgen_wasm_module = I, OA = null, xA.__wbindgen_start(), xA
}
 
function QI(A) {
    return CI.apply(this, arguments)
}
 
function CI() {
    return (CI = C(I().m(function A(g) {
        var B, Q, C, E, i;
        return I().w(function(A) {
            for (;;) switch (A.n) {
                case 0:
                    if (void 0 === xA) {
                        A.n = 1;
                        break
                    }
                    return A.a(2, xA);
                case 1:
                    if (void 0 !== g && (Object.getPrototypeOf(g) === Object.prototype ? g = g.module_or_path : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), void 0 !== g) {
                        A.n = 2;
                        break
                    }
                    throw new Error("WASM module must be provided");
                case 2:
                    return B = gI(), ("string" == typeof g || "function" == typeof Request && g instanceof Request || "function" == typeof URL && g instanceof URL) && (g = fetch(g)), i = AI, A.n = 3, g;
                case 3:
                    return A.n = 4, i(A.v, B);
                case 4:
                    return Q = A.v, C = Q.instance, E = Q.module, A.a(2, BI(C, E))
            }
        }, A)
    }))).apply(this, arguments)
}
var EI = null,
    iI = !1;
u(function A() {
    try {
        ! function() {
            if (IA && W && z && BA && X && j && k.tas)
                if (EI) {
                    var A = new ArrayBuffer(1 << 20),
                        g = new Uint8Array(A),
                        Q = new DataView(A),
                        E = 0;
                    Q.setUint32(E, V(), !0), E += 4, Q.setUint32(E, JA.serverTickRate, !0), E += 4, Q.setUint32(E, k.depth.value, !0), E += 4, Q.setUint8(E, NA.length), ++E;
                    var i, D = G(NA);
                    try {
                        for (D.s(); !(i = D.n()).done;) {
                            var o = i.value;
                            Q.setUint8(E, o), ++E
                        }
                    } catch (A) {
                        D.e(A)
                    } finally {
                        D.f()
                    }
                    var w = X.regionName + " " + X.name;
                    Q.setUint8(E, w.length), ++E, g.set(H.encode(w), E), E += w.length, Q.setFloat32(E, X.x, !0), E += 4, Q.setFloat32(E, X.y, !0), E += 4, Q.setFloat32(E, X.width, !0), E += 4, Q.setFloat32(E, X.height, !0), E += 4, Q.setUint8(E, j.length), ++E;
                    var t, a = G(j);
                    try {
                        for (a.s(); !(t = a.n()).done;) {
                            var N = t.value;
                            Q.setUint8(E, N.type), ++E, Q.setFloat32(E, N.x, !0), E += 4, Q.setFloat32(E, N.y, !0), E += 4, Q.setFloat32(E, N.width, !0), E += 4, Q.setFloat32(E, N.height, !0), E += 4
                        }
                    } catch (A) {
                        a.e(A)
                    } finally {
                        a.f()
                    }
                    Q.setFloat32(E, IA.x, !0), E += 4, Q.setFloat32(E, IA.y, !0), E += 4, Q.setFloat32(E, IA.radius, !0), E += 4, Q.setFloat32(E, IA.speed / 60, !0), E += 4;
                    var s = 0,
                        y = 0;
                    0 === lA.x && 0 === lA.y || (s = IA.x - lA.x, y = IA.y - lA.y), Q.setFloat32(E, s, !0), E += 4, Q.setFloat32(E, y, !0), E += 4, Q.setFloat32(E, lA.vx, !0), E += 4, Q.setFloat32(E, lA.vy, !0), E += 4, Q.setUint8(E, IA.isInvulnerable ? 1 : 0), ++E, Q.setUint8(E, IA.mutatiorbBuffSpeedBoost ? 1 : 0), ++E, Q.setUint8(E, IA.mutatiorbBuffEffectsReduction ? 1 : 0), ++E, lA.x = IA.x, lA.y = IA.y, lA.prev_vx = lA.vx, lA.prev_vy = lA.vy, lA.vx = s, lA.vy = y, Q.setFloat32(E, (_[0] - e.innerWidth / 2) / BA.getScale(), !0), E += 4, Q.setFloat32(E, (_[1] - e.innerHeight / 2) / BA.getScale(), !0), E += 4;
                    var n = Object.entries(W.entities);
                    Q.setUint16(E, n.length, !0), E += 2;
                    for (var c = 0, R = n; c < R.length; c++) {
                        var h = B(R[c], 2),
                            F = h[0],
                            M = h[1];
                        Q.setUint8(E, M.entityType), ++E;
                        var S = 0,
                            r = 0,
                            L = Math.round(4 * M.radius) / 4,
                            U = "".concat(F, "|").concat(M.entityType, "|").concat(L),
                            J = HA[U];
                        J && (S = M.x - J.x, r = M.y - J.y), HA[U] = {
                            x: M.x,
                            y: M.y
                        }, Q.setFloat32(E, M.x, !0), E += 4, Q.setFloat32(E, M.y, !0), E += 4, Q.setFloat32(E, M.radius, !0), E += 4, Q.setFloat32(E, S, !0), E += 4, Q.setFloat32(E, r, !0), E += 4
                    }
                    var Y, K = g.subarray(0, E);
                    try {
                        Y = EI.compute(K)
                    } catch (A) {
                        return void console.error("TAS Compute Error:", A)
                    }
                    if (Y.length > 0) {
                        for (var l = new DataView(Y.buffer, Y.byteOffset, Y.byteLength), q = [], d = 0; d < Y.byteLength; d += 28) {
                            var f = l.getFloat32(d, !0),
                                p = l.getFloat32(d + 4, !0),
                                u = l.getFloat32(d + 8, !0),
                                T = l.getFloat32(d + 12, !0);
                            q.push([u, T, f, p])
                        }
                        qA = q, dA = q, fA = 0
                    }
                } else iI || (console.log("Initializing TAS WASM..."), iI = !0, C(I().m(function A() {
                    var g, B;
                    return I().w(function(A) {
                        for (;;) switch (A.p = A.n) {
                            case 0:
                                return A.p = 0, g = bA("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BQsLIAAoAhAiAUUNAEGKrcAAQRAgARDMAQ0DCyAAQQA6AARBAAwBCyAAKAIQIgEEQEGarcAAQRkgARDMAQ0CCyAAQQE6AARBAAshAiAAIAI2AgALIAIPC0EAC+cCAQV/AkAgAUHN/3tBECAAIABBEE0bIgBrTw0AIABBECABQQtqQXhxIAFBC0kbIgRqQQxqEAMiAkUNACACQQhrIQECQCAAQQFrIgMgAnFFBEAgASEADAELIAJBBGsiBSgCACIGQXhxIAIgA2pBACAAa3FBCGsiAiAAQQAgAiABa0EQTRtqIgAgAWsiAmshAyAGQQNxBEAgACADIAAoAgRBAXFyQQJyNgIEIAAgA2oiAyADKAIEQQFyNgIEIAUgAiAFKAIAQQFxckECcjYCACABIAJqIgMgAygCBEEBcjYCBCABIAIQKQwBCyABKAIAIQEgACADNgIEIAAgASACajYCAAsCQCAAKAIEIgFBA3FFDQAgAUF4cSICIARBEGpNDQAgACAEIAFBAXFyQQJyNgIEIAAgBGoiASACIARrIgRBA3I2AgQgACACaiICIAIoAgRBAXI2AgQgASAEECkLIABBCGohAwsgAwu1AwIDfgN/IAEoAgQhAAJ+IAEoAggiBUERTwRAIAVBEGshBkEAIQFCxObBm+DF4owTIQJC05GMrYjR2p8kIQMDQCACIAAgAWoiB0EIaikAAELQ4/zMooTOhKR/hSICQv////8PgyAHKQAAIAOFIgNCIIh+QiCJIANC/////w+DIAJCIIh+hSECIQMgAUEQaiIBIAZJDQALIAAgBmoiACkACCAChSECIAApAAAgA4UMAQsgBUEHTQRAIAVBA00EQCAFRQRAQsTmwZvgxeKMEyECQtORjK2I0dqfJAwDCyAAIAVBAXZqMQAAIAAgBWpBAWsxAABCCIaEQsTmwZvgxeKME4UhAiAAMQAAQtORjK2I0dqfJIUMAgsgACAFakEEazUAAELE5sGb4MXijBOFIQIgADUAAELTkYytiNHanySFDAELIAAgBWpBCGspAABCxObBm+DF4owThSECIAApAABC05GMrYjR2p8khQshAyAFrSADQv////8PgyACQiCIfoUgAkL/////D4MgA0IgiH5CIImFIgSnQd3L3Z55bCAEQiCIp2pBycH4/QBsQaPuuZwEakEPd60LggMBBH8gACgCDCECAkACQAJAIAFBgAJPBEAgACgCGCEDAkACQCAAIAJGBEAgAEEUQRAgACgCFCICG2ooAgAiAQ0BQQAhAgwCCyAAKAIIIgEgAjYCDCACIAE2AggMAQsgAEEUaiAAQRBqIAIbIQQDQCAEIQUgASICQRRqIAJBEGogAigCFCIBGyEEIAJBFEEQIAEbaigCACIBDQALIAVBADYCAAsgA0UNAgJAIAAoAhxBAnRBuLrBAGoiASgCACAARwRAIAMoAhAgAEYNASADIAI2AhQgAg0DDAQLIAEgAjYCACACRQ0EDAILIAMgAjYCECACDQEMAgsgACgCCCIAIAJHBEAgACACNgIMIAIgADYCCA8LQdC9wQBB0L3BACgCAEF+IAFBA3Z3cTYCAA8LIAIgAzYCGCAAKAIQIgEEQCACIAE2AhAgASACNgIYCyAAKAIUIgBFDQAgAiAANgIUIAAgAjYCGA8LDwtB1L3BAEHUvcEAKAIAQX4gACgCHHdxNgIAC/kCAgR/AX4jAEEgayICJAACQAJAAkAgACgCACIDRQ0AIAAoAggiASAAKAIETw0AAkACQAJAIAEgA2oiAy0AAEHCAEYEQCAAIAFBAWo2AgggAiAAEFcgAigCAA0BIAAoAhAiAUUNAkGarcAAQYqtwAAgAi0ABEEBcSIDG0EZQRAgAxsgARDMAUUNAkECIQEMBgsgAy0AAEHJAEcNAyAAIAFBAWo2AghBAiEBIABBABAHRQ0EDAULIAAoAhBFDQEgACkCACEFIAAgAikCADcCACACQRhqIgMgAEEIaiIBKQIANwMAIAEgAkEIaikCADcCACACIAU3AxAgABAwIAEgAykDADcCACAAIAIpAxA3AgBB/wFxIQEMBAsgACACKQIANwIAIABBCGogAkEIaikCADcCAAtBACEBDAILQQJBACAAQQAQBxshAQwBCyAAKAIQIgMEQEHHrcAAQQEgAxDMAQ0BC0ECQQEgABA0QQFxGyEBCyACQSBqJAAgAQvXAgIGfwJ+IwBBEGsiBCQAIAEoAgAhBgJAAkACQAJAIAEoAggiAyABKAIEIgJJBEAgAyAGai0AAEHfAEYNAQsgAyACIAIgA0kbIQcDQCADIAdGDQMCQAJAIAMgBmotAAAiAkHfAEcEQCACQTBrIgVB/wFxQQpJDQIgAkHhAGtB/wFxQRpJDQEgAkHBAGtB/wFxQRpPDQYgAkEdayEFDAILQQEhAiABIANBAWo2AgggCEJ/UgRAIAAgCEIBfDcDCAwFCyAAQQA6AAEMBgsgAkHXAGshBQsgASADQQFqIgM2AgggBCAIQj4QZCAEKQMIUEUEQCAAQQA6AAFBASECDAULIAQpAwAiCSAFrUL/AYN8IgggCVoNAAsgAEEAOgABQQEhAgwDCyAAQgA3AwggASADQQFqNgIIC0EAIQIMAQsgAEEAOgABQQEhAgsgACACOgAAIARBEGokAAuRAwIFfwF+IwBBEGsiBSQAIAVBCGohBCABKAIAIQMgASgCBCECIwBB0ABrIgEkACABIAMgAkH8qcAAQQEQCQNAIAFBxABqIAEQECABKAJEIgZFDQALIAQgAgJ/IAZBAkcEQCABKAJIDAELIAILIgJrNgIEIAQgAiADajYCACABQdAAaiQAIAAgBSgCDCICQRBNBH4CQCACRQ0AIAIgBSgCCCIBaiEGA0ACfyABLAAAIgJBAE4EQCACQf8BcSECIAFBAWoMAQsgAS0AAUE/cSEDIAJBH3EhBCACQV9NBEAgBEEGdCADciECIAFBAmoMAQsgAS0AAkE/cSADQQZ0ciEDIAJBcEkEQCADIARBDHRyIQIgAUEDagwBCyAEQRJ0QYCA8ABxIAEtAANBP3EgA0EGdHJyIQIgAUEEagshASACQcEAa0FfcUEKaiACQTBrIAJBOUsbIgJBEEkEQCACrSAHQgSGhCEHIAEgBkYNAgwBCwtBgKrAABC3AQALIAAgBzcDCEIBBUIACzcDACAFQRBqJAALxQIBBX9BEEEAIABBq50ETxsiAiACQQhyIgEgAEELdCICIAFBAnQoAvSqQUELdEkbIgEgAUEEciIBIAFBAnQoAvSqQUELdCACSxsiASABQQJyIgEgAUECdCgC9KpBQQt0IAJLGyIBIAFBAWoiASABQQJ0KAL0qkFBC3QgAksbIgEgAUEBaiIBIAFBAnQoAvSqQUELdCACSxsiAUECdCgC9KpBQQt0IgQgAkYgAiAES2ogAWoiBEECdCICQfSqwQBqIQUgAigC9KpBQRV2IQJB/wUhAQJAIARBH00EQCAFKAIEQRV2IQEgBEUNAQsgBUEEaygCAEH///8AcSEDCwJAIAEgAkF/c2pFDQAgACADayEDIAFBAWshAUEAIQADQCAAIAJBxLzAAGotAABqIgAgA0sNASABIAJBAWoiAkcNAAsLIAJBAXEL3QIBBX8jAEEQayIEJAACQAJAAkAgACgCACIBRQ0AA0ACQCAAKAIIIgIgACgCBE8NACABIAJqLQAAQcUARw0AIAAgAkEBajYCCAwCCwJAAkACQCADRQ0AIAAoAhAiAkUNAEHNrcAAQQIgAhDMAQ0FIAAoAgAiAUUNAQsgACgCCCICIAAoAgRPDQACQCABIAJqIgEtAABBzABGBEAgACACQQFqNgIIIAQgABAxIAQtAABFDQEgBC0AASEDIAAoAhAiAgRAQQEhAUGarcAAQYqtwAAgA0EBcSIFG0EZQRAgBRsgAhDMAQ0ICyAAIAM6AARBACEBIABBADYCAAwHCyABLQAAQcsARw0BQQEhASAAIAJBAWo2AgggAEEAEAhFDQIMBgsgACAEKQMIEE4NBAwBCyAAEA0NAwsgA0EBayEDIAAoAgAiAQ0ACwtBACEBDAELQQEhAQsgBEEQaiQAIAELygIBA38jAEEwayICJAACfwJAAkACQCAAKAIARQRAIAAoAhAiAA0BDAMLIAJBGGogABBAIAIoAhgiA0UEQCACLQAcIQMgACgCECIEBEBBAUGarcAAQYqtwAAgA0EBcSIBG0EZQRAgARsgBBDMAQ0FGgsgACADOgAEIABBADYCAEEADAQLIAIgAigCHCIENgIUIAIgAzYCECACQRhqIAJBEGoQMgJAIAIoAhhBAUYEQCACIAIpAyA3AyggACgCECIARQ0EIAJBKGogABA3DQEMAwsgACgCECIARQ0DQaquwABBAiAAEMwBDQAgAyAEIAAQzAFFDQILQQEMAwtBs63AAEEBIAAQzAEMAgsgAC0ACkGAAXENACACQQhqIAEQgAEgAigCCCIBBEAgASACKAIMIAAQzAEMAgtBrK7AABC3AQALQQALIAJBMGokAAvEAgEEfyAAQgA3AhAgAAJ/QQAgAUGAAkkNABpBHyABQf///wdLDQAaIAFBJiABQQh2ZyIDa3ZBAXEgA0EBdGtBPmoLIgI2AhwgAkECdEG4usEAaiEEQQEgAnQiA0HUvcEAKAIAcUUEQCAEIAA2AgAgACAENgIYIAAgADYCDCAAIAA2AghB1L3BAEHUvcEAKAIAIANyNgIADwsCQAJAIAEgBCgCACIDKAIEQXhxRgRAIAMhAgwBCyABQRkgAkEBdmtBACACQR9HG3QhBQNAIAMgBUEddkEEcWoiBCgCECICRQ0CIAVBAXQhBSACIQMgAigCBEF4cSABRw0ACwsgAigCCCIBIAA2AgwgAiAANgIIIABBADYCGCAAIAI2AgwgACABNgIIDwsgBEEQaiAANgIAIAAgAzYCGCAAIAA2AgwgACAANgIIC5oCAgR/A34jAEEgayIDJABBFCECIAApAwAiCCEGIAhC6AdaBEAgCCEHA0AgA0EMaiACaiIAQQRrIAcgB0KQzgCAIgZCkM4Afn2nIgRB//8DcUHkAG4iBUEBdC8A+cJAOwAAIABBAmsgBCAFQeQAbGtB//8DcUEBdC8A+cJAOwAAIAJBBGshAiAHQv+s4gRWIAYhBw0ACwsgBkIJVgRAIAJBAmsiAiADQQxqaiAGpyIAIABB//8DcUHkAG4iAEHkAGxrQf//A3FBAXQvAPnCQDsAACAArSEGCyAIUEUgBlBxRQRAIAJBAWsiAiADQQxqaiAGp0EBdC0A+sJAOgAACyABQQFBACADQQxqIAJqQRQgAmsQGSADQSBqJAALqQICAn4HfwJAIAAoAgQiB0UNACAAKAIMIggEQCAAKAIAIgNBCGohBSADKQMAQn+FQoCBgoSIkKDAgH+DIQEDQCABUARAA0AgA0HgAWshAyAFKQMAIAVBCGohBUKAgYKEiJCgwIB/gyIBQoCBgoSIkKDAgH9RDQALIAFCgIGChIiQoMCAf4UhAQsgAyABeqdBA3ZBZGxqIgZBHGsoAgAiBARAIAZBGGsoAgAgBEEBELYBCyABQgF9IQICQCAGQQxrKAIAIgRFDQAgBCAEQQN0IgRqQRFqIglFDQAgBkEQaygCACAEa0EIayAJQQgQtgELIAEgAoMhASAIQQFrIggNAAsLIAcgB0EcbEEjakF4cSIFakEJaiIDRQ0AIAAoAgAgBWsgA0EIELYBCwuWAgEHfyMAQRBrIgQkAEEKIQIgACgCACIFIQMgBUHoB08EQCAFIQADQCAEQQZqIAJqIgZBBGsgACAAQZDOAG4iA0GQzgBsayIHQf//A3FB5ABuIghBAXQvAPnCQDsAACAGQQJrIAcgCEHkAGxrQf//A3FBAXQvAPnCQDsAACACQQRrIQIgAEH/rOIESyADIQANAAsLAkAgA0EJTQRAIAMhAAwBCyACQQJrIgIgBEEGamogAyADQf//A3FB5ABuIgBB5ABsa0H//wNxQQF0LwD5wkA7AAALQQAgBSAAG0UEQCACQQFrIgIgBEEGamogAEEBdC0A+sJAOgAACyABQQFBACAEQQZqIAJqQQogAmsQGSAEQRBqJAALmQIBBX8CQAJAAkAgAiACQQNqQXxxIgRGBEAgA0EIayEIQQAhBAwBCyADIAQgAmsiBCADIARJGyEEIAMEQCABQf8BcSEGQQEhBwNAIAIgBWotAAAgBkYNBCAEIAVBAWoiBUcNAAsLIAQgA0EIayIISw0BCyABQf8BcUGBgoQIbCEFA0BBgIKECCACIARqIgcoAgAgBXMiBmsgBnJBgIKECCAHQQRqKAIAIAVzIgZrIAZycUGAgYKEeHFBgIGChHhHDQEgBEEIaiIEIAhNDQALCyADIARHBEAgAUH/AXEhBUEBIQcDQCAFIAIgBGotAABGBEAgBCEFDAMLIAMgBEEBaiIERw0ACwtBACEHCyAAIAU2AgQgACAHNgIAC4wCAQZ/IAAoAggiBCECAn9BASABQYABSQ0AGkECIAFBgBBJDQAaQQNBBCABQYCABEkbCyIGIAAoAgAgBGtLBH8gACAEIAZBAUEBEFMgACgCCAUgAgsgACgCBGohAgJAIAFBgAFPBEAgAUE/cUGAf3IhBSABQQZ2IQMgAUGAEEkEQCACIAU6AAEgAiADQcABcjoAAAwCCyABQQx2IQcgA0E/cUGAf3IhAyABQf//A00EQCACIAU6AAIgAiADOgABIAIgB0HgAXI6AAAMAgsgAiAFOgADIAIgAzoAAiACIAdBP3FBgH9yOgABIAIgAUESdkFwcjoAAAwBCyACIAE6AAALIAAgBCAGajYCCEEAC4gCAQZ/IAAoAggiBCECAn9BASABQYABSQ0AGkECIAFBgBBJDQAaQQNBBCABQYCABEkbCyIGIAAoAgAgBGtLBH8gACAEIAYQViAAKAIIBSACCyAAKAIEaiECAkAgAUGAAU8EQCABQT9xQYB/ciEFIAFBBnYhAyABQYAQSQRAIAIgBToAASACIANBwAFyOgAADAILIAFBDHYhByADQT9xQYB/ciEDIAFB//8DTQRAIAIgBToAAiACIAM6AAEgAiAHQeABcjoAAAwCCyACIAU6AAMgAiADOgACIAIgB0E/cUGAf3I6AAEgAiABQRJ2QXByOgAADAELIAIgAToAAAsgACAEIAZqNgIIQQALiAIBBn8gACgCCCIEIQICf0EBIAFBgAFJDQAaQQIgAUGAEEkNABpBA0EEIAFBgIAESRsLIgYgACgCACAEa0sEfyAAIAQgBhBdIAAoAggFIAILIAAoAgRqIQICQCABQYABTwRAIAFBP3FBgH9yIQUgAUEGdiEDIAFBgBBJBEAgAiAFOgABIAIgA0HAAXI6AAAMAgsgAUEMdiEHIANBP3FBgH9yIQMgAUH//wNNBEAgAiAFOgACIAIgAzoAASACIAdB4AFyOgAADAILIAIgBToAAyACIAM6AAIgAiAHQT9xQYB/cjoAASACIAFBEnZBcHI6AAAMAQsgAiABOgAACyAAIAQgBmo2AghBAAuhAgIDfwF+IwBBQGoiAiQAIAEoAgBBgICAgHhGBEAgASgCDCEDIAJBJGoiBEEANgIAIAJCgICAgBA3AhwgAkEwaiADKAIAIgNBCGopAgA3AwAgAkE4aiADQRBqKQIANwMAIAIgAykCADcDKCACQRxqQbCnwAAgAkEoahAiGiACQRhqIAQoAgAiAzYCACACIAIpAhwiBTcDECABQQhqIAM2AgAgASAFNwIACyABKQIAIQUgAUKAgICAEDcCACACQQhqIgMgAUEIaiIBKAIANgIAIAFBADYCACACIAU3AwBBDEEEELgBIgFFBEBBBEEMEMsBAAsgASACKQMANwIAIAFBCGogAygCADYCACAAQeypwAA2AgQgACABNgIAIAJBQGskAAuCAgEGfyMAQSBrIgUkAAJAAkACQAJ/IAIgAygCACIEQQRqIglPBEAgAiAETQ0CIARBAWoiBiACTw0DIARBAmoiByACTw0EIAIgBEEDaiIISwRAIAEgBGotAAAgASAGai0AACADIAk2AgBBCHRyIAEgB2otAABBEHRyIAEgCGotAABBGHRyIQJBAAwCCyAIIAJB5JXAABB0AAsgBUEANgIYIAVBATYCDCAFQYyVwAA2AgggBUIENwIQIAVBCGoQWCECQQELIQEgACACNgIEIAAgATYCACAFQSBqJAAPCyAEIAJBtJXAABB0AAsgBiACQcSVwAAQdAALIAcgAkHUlcAAEHQAC/kBAQl/IAEoAggiAiABKAIEIgMgAiADSxshCCABKAIAIQVBfyEGIAIhBAJAAkADQCAEIAhGDQEgASAEQQFqIgk2AgggBkEBaiEGIAQgBWotAAAiB0HhAGshCiAJIQQgB0Ewa0H/AXFBCkkgCkH/AXFBBklyDQALIAdB3wBHDQACQCACIARBAWsiAUsNACACBEAgAiADTwRAIAIgA0cNAiABIANNDQQMAgsgAiAFaiwAAEFASCABIANLcg0BDAMLIAEgA00NAgsgBSADIAIgAUHIrMAAEKYBAAsgAEEANgIAIABBADoABA8LIAAgBjYCBCAAIAIgBWo2AgALhQIBBn8jAEEgayIFJAACQAJAAkAgAAJ/IAIgAygCACIEQQRqIglPBEAgAiAETQ0CIARBAWoiBiACTw0DIARBAmoiByACTw0EIAIgBEEDaiIISwRAIAEgBGotAAAhAiABIAZqLQAAIQQgAyAJNgIAIAAgAiAEQQh0ciABIAdqLQAAQRB0ciABIAhqLQAAQRh0cjYCBEEADAILIAggAkHolMAAEHQACyAFQQA2AhggBUEBNgIMIAVBjJXAADYCCCAFQgQ3AhAgACAFQQhqEFg2AgRBAQs2AgAgBUEgaiQADwsgBCACQbiUwAAQdAALIAYgAkHIlMAAEHQACyAHIAJB2JTAABB0AAv6AQEDfyMAQRBrIgIkACAAKAIAIQACfyABLQALQRhxRQRAIAEoAgAgACABKAIEKAIQEQAADAELIAJBADYCDCABIAJBDGoCfyAAQYABTwRAIABBP3FBgH9yIQMgAEEGdiEBIABBgBBJBEAgAiADOgANIAIgAUHAAXI6AAxBAgwCCyAAQQx2IQQgAUE/cUGAf3IhASAAQf//A00EQCACIAM6AA4gAiABOgANIAIgBEHgAXI6AAxBAwwCCyACIAM6AA8gAiABOgAOIAIgBEE/cUGAf3I6AA0gAiAAQRJ2QXByOgAMQQQMAQsgAiAAOgAMQQELEB4LIAJBEGokAAuBAgIBfwF+IwBBIGsiAiQAAkACQAJAIAFFBEAgAEUNASAAQQhrIgEoAgBBAUcNAiACQRhqIABBHGooAgA2AgAgAkEQaiAAQRRqKQIANwMAIAJBCGogAEEMaikCADcDACAAKQIEIQMgAUEANgIAIAIgAzcDAAJAIAFBf0YNACAAQQRrIgAgACgCAEEBayIANgIAIAANACABQShBBBC2AQsgAigCACIABEAgAigCBCAAQQEQtgELIAJBDGoQOAwDCyAARQ0AIAIgAEEIayIANgIAIAAgACgCAEEBayIANgIAIAANAiACEHoMAgsQugEAC0H4l8AAQT8QuQEACyACQSBqJAAL9AECA34FfyAAKAIMRQRAQQAPCyAAKAIAIgZBCGshCSAAKAIEIgcgAUHdy92eeWxBD3ciAHEhBSAAQRl2rUKBgoSIkKDAgAF+IQQCfwNAAkAgBSAGaikAACIDIASFIgJCf4UgAkKBgoSIkKDAgAF9g0KAgYKEiJCgwIB/gyICUEUEQANAIAEgCSACeqdBA3YgBWogB3EiAEEDdGsoAgBGDQIgAkIBfSACgyICUEUNAAsLQQAgAyADQgGGg0KAgYKEiJCgwIB/g1BFDQIaIAUgCEEIaiIIaiAHcSEFDAELCyAGQQAgAGtBA3RqCyIAQQhrQQAgABsL5wEBB38gACgCCCIFBEAgACgCBCEGA0AgBiACQQxsaiIDKAIIIgQEQCADKAIEQSRqIQADQCAAQQRrKAIAIgFBgICAgHhGIAFFckUEQCAAKAIAIAFBARC2AQsCQCAAQRRrKAIAIgdBAkYNACAAQRBrIQEgB0UEQCABKAIAIgFFDQEgAEEMaygCACABQQEQtgEMAQsgASgCACIBRQ0AIABBDGsoAgAgAUEBdEECELYBCyAAQSxqIQAgBEEBayIEDQALCyADKAIAIgAEQCADKAIEIABBLGxBBBC2AQsgAkEBaiICIAVHDQALCwvmAQEDfyMAQRBrIgMkACADAn8gAigCAEEBcQRAQZakwAAhBEEJDAELIANBBGogAigCBCACKAIIEBtBlqTAACADKAIIIAMoAgQiAhshBEEJIAMoAgwgAhsLNgIIIAMgBDYCBCADQQRqIAEQVAJAIAAoAgAiAUGAgICAeEcEQCABRQ0BIAAoAgQgAUEBELYBDAELIAAtAARBA0cNACAAKAIIIgAoAgAhASAAQQRqKAIAIgIoAgAiBQRAIAEgBREDAAsgAigCBCIFBEAgASAFIAIoAggQtgELIABBDEEEELYBCyADQRBqJAAL6AEBBH8jAEEQayICQQhqQQA6AAAgAkEAOwEGIAIgAUEUdi0AwLFAOgAJIAIgAUEEdkEPcS0AwLFAOgANIAIgAUEIdkEPcS0AwLFAOgAMIAIgAUEMdkEPcS0AwLFAOgALIAIgAUEQdkEPcS0AwLFAOgAKIAFBAXJnQQJ2IgMgAkEGaiIFaiIEQfsAOgAAIARBAWtB9QA6AAAgBSADQQJrIgNqQdwAOgAAIAJBDmoiBCABQQ9xLQDAsUA6AAAgAEEKOgALIAAgAzoACiAAIAIpAQY3AAAgAkH9ADoADyAAQQhqIAQvAQA7AAAL0AEBA38jAEEQayICJAAgAkEANgIMIAAgAkEMagJ/IAFBgAFPBEAgAUE/cUGAf3IhAyABQQZ2IQAgAUGAEEkEQCACIAM6AA0gAiAAQcABcjoADEECDAILIAFBDHYhBCAAQT9xQYB/ciEAIAFB//8DTQRAIAIgAzoADiACIAA6AA0gAiAEQeABcjoADEEDDAILIAIgAzoADyACIAA6AA4gAiAEQT9xQYB/cjoADSACIAFBEnZBcHI6AAxBBAwBCyACIAE6AAxBAQsQIyACQRBqJAAL0QEBA38jAEEQayICJAAgAkEANgIMIAAgAkEMagJ/IAFBgAFPBEAgAUE/cUGAf3IhAyABQQZ2IQAgAUGAEEkEQCACIAM6AA0gAiAAQcABcjoADEECDAILIAFBDHYhBCAAQT9xQYB/ciEAIAFB//8DTQRAIAIgAzoADiACIAA6AA0gAiAEQeABcjoADEEDDAILIAIgAzoADyACIAA6AA4gAiAEQT9xQYB/cjoADSACIAFBEnZBcHI6AAxBBAwBCyACIAE6AAxBAQsQhAEgAkEQaiQAC6IEAgV/AX4jAEEQayIDJAACfyAAKAIAQQJHBEAjAEFAaiICJABBASEEAkACQAJ/AkAgACgCAEEBRgRAIAIgAEEEajYCCCABKAIIIAIgATYCFCACQoCAgICAyNAHNwIMIAJBCGqtQoCAgIDwCYQhB0GAgIAEcQ0BIAJBATYCHCACQZCywAA2AhggAkIBNwIkIAIgBzcDMCACIAJBMGo2AiAgAkEMakGctsAAIAJBGGoQIgwCCyABIAAoAhAgACgCFBCkAQ0DDAILIAJBATYCLCACQZiywAA2AiggAkEBNgIcIAJBkLLAADYCGCACQQE2AiQgAiAHNwMwIAIgAkEwajYCICACQQxqQZy2wAAgAkEYahAiCyIFQQAgAigCDCIGG0UEQCAFDQIgBkUNAUHUssAAQTcgAkE/akHEssAAQYyzwAAQZQALIAFBsLLAAEEUEKQBDQELIAEgACgCGCAAKAIcEKQBIQQLIAJBQGskACAEDAELAkACQAJAIAAoAiQiAkUNACAAKAIgIQADQCADQQRqIAAgAhAbAkAgAygCBEEBRgRAIAMtAA0hBCADLQAMIQUgAygCCCEGQbikwABBAyABEMwBRQ0BDAULIAMoAgggAygCDCABEMwBDQQMAgsgBUEBcUUNASACIAQgBmoiBEkNAiAAIARqIQAgAiAEayICDQALC0EADAILIAQgAiACQbykwAAQggEAC0EBCyADQRBqJAAL4wEBA38jAEEgayICJAAgAkEQaiIDIAFBJGooAgA2AgAgAiABKQIcNwMIQQxBBBC4ASIEBEAgBCACKQMINwIAIARBCGogAygCADYCAAJAIAEoAgRBAkcNAAJAAkAgAS0AGEEBaw4CAgABCyACQQA2AhggAkEBNgIMIAJBhJzAADYCCCACQgQ3AhAgAkEIakGMnMAAEI0BAAsgAUEIahBFIAEoAggiA0UNACABKAIMIANBDGxBBBC2AQsgAUEoQQQQtgEgAEGwncAANgIEIAAgBDYCACACQSBqJAAPC0EEQQwQywEAC8QBAQN/IwBBIGsiAyQAAkACQCAABEAgAEEIayIEIAQoAgBBAWoiBTYCACAFRQ0BIAAoAgANAiAAQX82AgAgAyAENgIMIAMgADYCCCADIABBBGo2AgQgA0EQaiABIAIQBCAAQRBqEDggAEEYaiADQRhqKQIANwIAIAAgAykCEDcCECACBEAgASACQQEQtgELIABBADYCACAEIAQoAgBBAWsiADYCACAARQRAIANBDGoQegsgA0EgaiQADwsQugELAAsQuwEAC8kJAgt/AX4jAEEwayIJJAAgCUEEaiEGIwBB4ABrIgQkAAJAQeoBEAMiCkUNACAKQQRrLQAAQQNxRQ0AIApBAEHqAfwLAAsCQCAKBEAgBkHqATYCCCAGIAo2AgQgBkHqATYCACAEQQA7ATQgBCABNgIwIARBADYCLCAEQQE6ACggBEEKNgIkIAQgATYCICAEQQA2AhwgBCABNgIYIAQgADYCFCAEQQo2AhADQAJAIAQoAhQhBiAEQcQAaiAEQRBqECUCQAJ/IAQoAkRBAUYEQCAEKAIsIQUgBCAEKAJMIgg2AiwgBSAGaiEGIAggBWsMAQsgBC0ANQ0CIARBAToANQJAIAQtADRBAUYEQCAEKAIwIQUgBCgCLCEHDAELIAQoAjAiBSAEKAIsIgdGDQMLIAQoAhQgB2ohBiAFIAdrCyIIRQRAIAghBQwBCyAIIgUgBmoiC0EBay0AAEEKRw0AIAVBAWsiBUUNACALQQJrLQAAQQ1HDQAgCEECayEFCyAEQQhqIAYgBRAcAkAgBCgCDCIFRQ0AIAQoAggiBi0AAEEjRg0AIAQgBTYCVCAEQQA2AlAgBCAFNgJMIAQgBjYCSCAEQTo2AkQgBEE6NgJYIARBAToAXCAEQThqIARBxABqECUgBCgCOEEBRw0AAkAgBCgCPEEBaiIIRQ0AAkAgBSAITQRAIAUgCEcNAQwCCyAGIAhqLAAAQb9/Sg0BCyAGIAUgCCAFQYiXwAAQpgEACyAEIAYgCGogBSAIaxAcIAQoAgAiDSAEKAIEIgtqIQ5BACEHIA0hBgNAAkAgByEIIA4gBiIHRgRAIAshCAwBCwJ/IAcsAAAiDEEATgRAIAxB/wFxIQUgB0EBagwBCyAHLQABQT9xIQYgDEEfcSEFIAxBX00EQCAFQQZ0IAZyIQUgB0ECagwBCyAHLQACQT9xIAZBBnRyIQYgDEFwSQRAIAYgBUEMdHIhBSAHQQNqDAELIAVBEnRBgIDwAHEgBy0AA0E/cSAGQQZ0cnIhBSAHQQRqCyIGIAggB2tqIQcgBUEgRg0BCwsgCCANaiEHAkACQAJAAkACQCALIAhrIggOAgUAAQtBASEGIActAABBK2sOAwQBBAELIActAABBK0YEQCAIQQFrIQYgB0EBaiEHIAhBCkkNAQwCCyAIIgZBCU8NAQtBACEFA0AgBy0AAEEwayIIQQlLDQMgB0EBaiEHIAggBUEKbGohBSAGQQFrIgYNAAsMAQtBACEFA0AgBkUNASAHLQAAQTBrIghBCUsNAiAFrUIKfiIPQiCIpw0CIAdBAWohByAGQQFrIQYgCCAIIA+naiIFTQ0ACwwBCyAFQekBSw0AIAUgCmpBAToAAAsgBC0ANUUNAQsLIARB4ABqJAAMAQtBAUHqARCfAQALIAlBIGogAiADEAQgCUEYaiAJQShqKQIANwIAIAkgCSkCIDcCECADBEAgAiADQQEQtgELIAEEQCAAIAFBARC2AQtBKEEEELgBIgBFBEBBBEEoEMsBAAsgAEEANgIIIABCgYCAgBA3AgAgACAJKQIENwIMIABBFGogCUEMaikCADcCACAAQRxqIAlBFGopAgA3AgAgAEEkaiAJQRxqKAIANgIAIAlBMGokACAAQQhqC8cBAgN/AX4jAEEQayIEJAACQCAAKAIQIgNFBEAMAQtBASECQZyvwABBASADEMwBDQAgAVAEQEG0rMAAQQEgAxDMASECDAELAkAgASAANQIUIgVYBEAgBSABfSIBQhpUDQFBtKzAAEEBIAMQzAENAiAEIAE3AwggBEEIaiADEDchAgwCC0GKrcAAQRAgAxDMAQ0BQQAhAiAAQQA6AAQgAEEANgIADAELIAQgAadB4QBqNgIEIARBBGogAxBCIQILIARBEGokACACC5QCAQJ/IwBBIGsiBSQAQZC+wQBBkL7BACgCACIGQQFqNgIAAkACf0EAIAZBAEgNABpBAUGMvsEALQAADQAaQYy+wQBBAToAAEGIvsEAQYi+wQAoAgBBAWo2AgBBAgtB/wFxIgZBAkcEQCAGQQFxRQ0BIAVBCGogACABKAIYEQEADAELQZS+wQAoAgAiBkEASA0AQZS+wQAgBkEBajYCAEGYvsEAKAIABEAgBSAAIAEoAhQRAQAgBSAEOgAdIAUgAzoAHCAFIAI2AhggBSAFKQMANwIQQZi+wQAoAgAgBUEQakGcvsEAKAIAKAIUEQEAC0GUvsEAQZS+wQAoAgBBAWs2AgBBjL7BAEEAOgAAIANFDQAACwALwQECA38BfiMAQTBrIgIkACABKAIAQYCAgIB4RgRAIAEoAgwhAyACQRRqIgRBADYCACACQoCAgIAQNwIMIAJBIGogAygCACIDQQhqKQIANwMAIAJBKGogA0EQaikCADcDACACIAMpAgA3AxggAkEMakGwp8AAIAJBGGoQIhogAkEIaiAEKAIAIgM2AgAgAiACKQIMIgU3AwAgAUEIaiADNgIAIAEgBTcCAAsgAEHsqcAANgIEIAAgATYCACACQTBqJAALzAEBBH8jAEEgayICJAAgASgCICEDIAEoAhwhBUEIQQQQuAEiBARAIAQgAzYCBCAEIAU2AgACQCABKAIEQQJHDQACQAJAIAEtABhBAWsOAgIAAQsgAkEANgIYIAJBATYCDCACQYScwAA2AgggAkIENwIQIAJBCGpBjJzAABCNAQALIAFBCGoQRSABKAIIIgNFDQAgASgCDCADQQxsQQQQtgELIAFBJEEEELYBIABB9JzAADYCBCAAIAQ2AgAgAkEgaiQADwtBBEEIEMsBAAuqAQICfwF+QQEhB0EEIQYCQCAEIAVqQQFrQQAgBGtxrSADrX4iCEIgiFBFBEBBACEDDAELIAinIgNBgICAgHggBGtLBEBBACEDDAELAkACQAJ/IAEEQCACIAEgBWwgBCADELABDAELIANFBEAgBCEGDAILIAMgBBC4AQsiBg0AIAAgBDYCBAwBCyAAIAY2AgRBACEHC0EIIQYLIAAgBmogAzYCACAAIAc2AgALqgEBAX8jAEEQayIFJAAgBEUEQEEAQQAQnwEACyACIAEgAmoiAUsEQEEAQQAQnwEACyAFQQRqIAAoAgAiAiAAKAIEIAEgAkEBdCICIAEgAksbIgFBCEEEQQEgBEGBCEkbIARBAUYbIgIgASACSxsiASADIAQQUiAFKAIEQQFGBEAgBSgCCCAFKAIMEJ8BAAsgBSgCCCECIAAgATYCACAAIAI2AgQgBUEQaiQAC68BAQN/IwBBIGsiAiQAAkAgACgCBCIDRQRAQQFBACABEMwBIQMMAQsgACgCACEAIAIgAzYCDCACIAA2AgggAkEQaiACQQhqECcgAigCECIABEADQCACKAIUIQQgAigCHEUEQCAAIAQgARDMASEDDAMLQQEhAyABIAAgBBCkAQ0CIAFB/f8DEKUBDQIgAkEQaiACQQhqECcgAigCECIADQALC0EAIQMLIAJBIGokACADC6IBAgJ/AX4jAEEQayIDJAACQAJAAkAgASgCCCIEIAEoAgRJBEAgASgCACAEai0AACACQf8BcUYNAQsgAEIANwMIDAELQQEhAiABIARBAWo2AgggAyABEDEgAy0AAEUEQCADKQMIIgVCf1IEQCAAIAVCAXw3AwgMAgsgAEEAOgABDAILIAAgAy0AAToAAQwBC0EAIQILIAAgAjoAACADQRBqJAALiQEBAX8jAEEQayIDJAAgAiABIAJqIgFLBEBBAEEAEJ8BAAsgA0EEaiAAKAIAIgIgACgCBEEIIAEgAkEBdCICIAEgAksbIgEgAUEITRsiAUEBQQEQUiADKAIEQQFGBEAgAygCCCADKAIMEJ8BAAsgAygCCCECIAAgATYCACAAIAI2AgQgA0EQaiQAC6IBAgJ/AX4jAEEQayICJAAgASgCCCEDIAIgARAxAkAgAi0AAEEBRgRAIAItAAEhASAAQQA2AgAgACABOgAEDAELIAIpAwgiBCADQQFrrVQEQCABKAIMQQFqIgNB9ANNBEAgACADNgIMIAAgBD4CCCAAIAEpAgA3AgAMAgsgAEEANgIAIABBAToABAwBCyAAQQA2AgAgAEEAOgAECyACQRBqJAALuwUBCX8jAEEwayIEJAAgACgCDCEDAn8CQAJAAkAgACgCBA4CAAECCyADDQFBAUEAEIsBDAILIAMNACAAKAIAIgAoAgAgACgCBBCLAQwBCyAEQShqIABBEGopAgA3AwAgBEEgaiAAQQhqKQIANwMAIAQgACkCADcDGCAEQQxqIQMjAEEwayICJAACQAJAAkACQCAEQRhqIgUoAgQiAARAIAUoAgAhCCAAQQNxIQYCQCAAQQRJBEBBACEADAELIAhBHGohASAAQXxxIQlBACEAA0AgASgCACABQQhrKAIAIAFBEGsoAgAgAUEYaygCACAAampqaiEAIAFBIGohASAJIAdBBGoiB0cNAAsLIAYEQCAHQQN0IAhqQQRqIQEDQCABKAIAIABqIQAgAUEIaiEBIAZBAWsiBg0ACwsgBSgCDEUNAiAAQQ9LDQEgCCgCBA0BDAMLQQAhACAFKAIMRQ0CCyAAQQAgAEEAShtBAXQhAAtBACEBIABBAE4EQCAARQ0BQQEhASAAQQEQuAEiBg0CCyABIAAQnwEAC0EBIQZBACEACyACQQA2AgwgAiAGNgIIIAIgADYCBCACQSBqIAVBEGopAgA3AwAgAkEYaiAFQQhqKQIANwMAIAIgBSkCADcDEAJAIAJBBGpBrLrAACACQRBqECJFBEAgAyACKQIENwIAIANBCGogAkEMaigCADYCACACQTBqJAAMAQtBmLnAAEHWACACQS9qQYi5wABB8LnAABBlAAsjAEEgayICJAAgAkEIaiIAEGFBKEEEELgBIgFFBEBBBEEoEMsBAAsgAUGQm8AANgIAIAEgACkCADcCBCABIAMpAgA3AhwgAUEMaiAAQQhqKQIANwIAIAFBFGogAEEQaikCADcCACABQSRqIANBCGooAgA2AgAgAkEgaiQAIAELIARBMGokAAuVAQEDfwJ/AkACQCABKAIAIgNFBEAMAQsDQAJAIAEoAggiBCABKAIETw0AIAMgBGotAABBxQBHDQAgASAEQQFqNgIIDAILAkAgAkUNACABKAIQIgNFDQBBza3AAEECIAMQzAENAwsgARANDQIgAkEBaiECIAEoAgAiAw0ACwtBAAwBC0EBCyEBIAAgAjYCBCAAIAE2AgALoAEBAn8jAEEgayIBJAACQCAAKAIEQQJHDQACQAJAIAAtABhBAWsOAgIAAQsgAUEANgIYIAFBATYCDCABQYScwAA2AgggAUIENwIQIAFBCGpBjJzAABCNAQALIABBCGoQRSAAKAIIIgJFDQAgACgCDCACQQxsQQQQtgELIAAoAhwiAgRAIAAoAiAgAkEBELYBCyAAQShBBBC2ASABQSBqJAALjQEBBH8jAEEQayICJAACf0EBIAEoAgAiA0EnIAEoAgQiBSgCECIBEQAADQAaIAIgACgCAEGBAhAdAkAgAi0ADSIAQYEBTwRAIAMgAigCACABEQAARQ0BQQEMAgsgAyACIAItAAwiBGogACAEayAFKAIMEQIARQ0AQQEMAQsgA0EnIAERAAALIAJBEGokAAt9AQJ/IANBCE8EQCAAIAAgA0EDdiIDQQR0IgRqIAAgA0EcbCIFaiADEFwhACABIAEgBGogASAFaiADEFwhASACIAIgBGogAiAFaiADEFwhAgsgACACIAEgACgCACIAIAEoAgAiAUkiAyABIAIoAgAiAklzGyADIAAgAklzGwuFAQEBfyMAQRBrIgMkACACIAEgAmoiAUsEQEEAQQAQnwEACyADQQRqIAAoAgAiAiAAKAIEQQggASACQQF0IgIgASACSxsiASABQQhNGyIBEGMgAygCBEEBRgRAIAMoAgggAygCDBCfAQALIAMoAgghAiAAIAE2AgAgACACNgIEIANBEGokAAuNAQEEfyMAQSBrIgQkAEEBIQYCQCACIAMoAgAiBUEBaiIHTwRAIAIgBUsEQCADIAc2AgAgACABIAVqLQAAOgABQQAhBgwCCyAFIAJBvJbAABB0AAsgBEEANgIYIARBATYCDCAEQYyVwAA2AgggBEIENwIQIAAgBEEIahBYNgIECyAAIAY6AAAgBEEgaiQAC5cBAQJ/IwBBIGsiASQAAkAgACgCBEECRw0AAkACQCAALQAYQQFrDgICAAELIAFBADYCGCABQQE2AgwgAUGEnMAANgIIIAFCBDcCECABQQhqQYycwAAQjQEACyAAQQhqEEUgACgCCCICRQ0AIAAoAgwgAkEMbEEEELYBCyAAKAIcIgIEQCAAKAIgIAJBARC2AQsgAUEgaiQAC4QBAQN/An8CQCAAKAIAIgFFDQADQAJAIAAoAggiAyAAKAIETw0AIAEgA2otAABBxQBHDQAgACADQQFqNgIIDAILAkAgAkUNACAAKAIQIgFFDQBBza3AAEECIAEQzAFFDQBBAQ8LQQEgAEEBEAgNAhogAkEBayECIAAoAgAiAQ0ACwtBAAsLogEBAn8jAEEgayIBJAACQAJAAkACQAJAQYS+wQAtAAAOAgABAgtBhL7BAEEBOgAACyAAQQE2AgAMAQtB/L3BAC0AACECQfy9wQBBAToAACABIAI6AAcgAkEBRg0BIABBADYCAEH8vcEAQQA6AAALIAFBIGokAA8LIAFCADcCFCABQoGAgIDAADcCDCABQeilwAA2AgggAUEHaiABQQhqEIgBAAt6AQF/IwBBIGsiAiQAAn8gACgCAEGAgICAeEcEQCABIAAoAgQgACgCCBCkAQwBCyACQRBqIAAoAgwoAgAiAEEIaikCADcDACACQRhqIABBEGopAgA3AwAgAiAAKQIANwMIIAEoAgAgASgCBCACQQhqECILIAJBIGokAAtyAAJ/IANBAEgEQEEBIQFBACEDQQQMAQsCfwJAAn8gAQRAIAIgAUEBIAMQsAEMAQsgA0UEQEEBIQEMAgsgA0EBELgBCyIBDQAgAEEBNgIEQQEMAQsgACABNgIEQQALIQFBCAsgAGogAzYCACAAIAE2AgALYgEEfiAAIAJC/////w+DIgMgAUL/////D4MiBH4iBSAEIAJCIIgiAn4iBCADIAFCIIgiBn58IgFCIIZ8IgM3AwAgACADIAVUrSACIAZ+IAEgBFStQiCGIAFCIIiEfHw3AwgLfAEBfyMAQUBqIgUkACAFIAE2AgwgBSAANgIIIAUgAzYCFCAFIAI2AhAgBUECNgIcIAVB5KrBADYCGCAFQgI3AiQgBSAFQRBqrUKAgICAoAyENwM4IAUgBUEIaq1CgICAgOALhDcDMCAFIAVBMGo2AiAgBUEYaiAEEI0BAAuHAQEBfwJAIAAoAgAiAUGAgICAeEcEQCABBEAgACgCBCABQQEQtgELIAAoAkAiAQRAIAAoAkQgAUEBELYBCyAAKAJMIgEEQCAAKAJQIAFBFGxBBBC2AQsgACgCaCIBRQ0BIAAoAmwgAUEYbEEEELYBDwsgAEEEaigCACIAIAAoAgAoAgARAwALC4oBAQJ/IwBBIGsiASQAAkAgACgCBEECRw0AAkACQCAALQAYQQFrDgICAAELIAFBADYCGCABQQE2AgwgAUGEnMAANgIIIAFCBDcCECABQQhqQYycwAAQjQEACyAAQQhqEEUgACgCCCICRQ0AIAAoAgwgAkEMbEEEELYBCyAAQSRBBBC2ASABQSBqJAALigEBAX8jAEEgayIBJAACQCAAKAIEQQJHDQACQAJAIAAtABhBAWsOAgIAAQsgAUEANgIYIAFBATYCDCABQYScwAA2AgggAUIENwIQIAFBCGpBjJzAABCNAQALIABBCGoQRSAAKAIIIgJFDQAgACgCDCACQQxsQQQQtgELIABBKEEEELYBIAFBIGokAAuKAQEBfyMAQSBrIgEkAAJAIAAoAgRBAkcNAAJAAkAgAC0AGEEBaw4CAgABCyABQQA2AhggAUEBNgIMIAFBhJzAADYCCCABQgQ3AhAgAUEIakGMnMAAEI0BAAsgAEEIahBFIAAoAggiAkUNACAAKAIMIAJBDGxBBBC2AQsgAEEkQQQQtgEgAUEgaiQAC3gBA38CQCAAKAIAIgFBgICAgHhHBEAgAUUNASAAKAIEIAFBARC2AQ8LIAAtAARBA0cNACAAKAIIIgAoAgAhASAAQQRqKAIAIgMoAgAiAgRAIAEgAhEDAAsgAygCBCICBEAgASACIAMoAggQtgELIABBDEEEELYBCwtuAQF/IwBBEGsiACQAIAACfyACKAIABEBBlqTAACEDQQkMAQsgAEEEaiACKAIEIAIoAggQG0GWpMAAIAAoAgggACgCBCICGyEDQQkgACgCDCACGws2AgggACADNgIEIABBBGogARBUIABBEGokAAuBAQECfyMAQSBrIgEkAAJAIAAoAgRBAkcNAAJAAkAgAC0AGEEBaw4CAgABCyABQQA2AhggAUEBNgIMIAFBhJzAADYCCCABQgQ3AhAgAUEIakGMnMAAEI0BAAsgAEEIahBFIAAoAggiAkUNACAAKAIMIAJBDGxBBBC2AQsgAUEgaiQAC2oBA38jAEEQayIBJAAgAUEEaiAAKAIAIgIgACgCBEEEIAJBAXQiAiACQQRNGyICQQRBFBBSIAEoAgRBAUYEQCABKAIIIAEoAgwQnwEACyABKAIIIQMgACACNgIAIAAgAzYCBCABQRBqJAALagEDfyMAQRBrIgEkACABQQRqIAAoAgAiAiAAKAIEQQggAkEBdCICIAJBCE0bIgJBAUEBEFIgASgCBEEBRgRAIAEoAgggASgCDBCfAQALIAEoAgghAyAAIAI2AgAgACADNgIEIAFBEGokAAtqAQN/IwBBEGsiASQAIAFBBGogACgCACICIAAoAgRBBCACQQF0IgIgAkEETRsiAkEEQSAQUiABKAIEQQFGBEAgASgCCCABKAIMEJ8BAAsgASgCCCEDIAAgAjYCACAAIAM2AgQgAUEQaiQAC2oBA38jAEEQayIBJAAgAUEEaiAAKAIAIgIgACgCBEEEIAJBAXQiAiACQQRNGyICQQRBLBBSIAEoAgRBAUYEQCABKAIIIAEoAgwQnwEACyABKAIIIQMgACACNgIAIAAgAzYCBCABQRBqJAALagEDfyMAQRBrIgEkACABQQRqIAAoAgAiAiAAKAIEQQQgAkEBdCICIAJBBE0bIgJBBEEEEFIgASgCBEEBRgRAIAEoAgggASgCDBCfAQALIAEoAgghAyAAIAI2AgAgACADNgIEIAFBEGokAAtqAQN/IwBBEGsiASQAIAFBBGogACgCACICIAAoAgRBBCACQQF0IgIgAkEETRsiAkEEQRgQUiABKAIEQQFGBEAgASgCCCABKAIMEJ8BAAsgASgCCCEDIAAgAjYCACAAIAM2AgQgAUEQaiQACxIAIwBBMGsiACQAIABBMGokAAtqAgF/AX4jAEEwayIDJAAgAyABNgIEIAMgADYCACADQQI2AgwgA0GAuMEANgIIIANCAjcCFCADQoCAgICABSIEIAOthDcDKCADIAQgA0EEaq2ENwMgIAMgA0EgajYCECADQQhqIAIQjQEAC2IBAX8gACgCACIBBEAgACgCBCABQQEQtgELIAAoAkAiAQRAIAAoAkQgAUEBELYBCyAAKAJMIgEEQCAAKAJQIAFBFGxBBBC2AQsgACgCaCIBBEAgACgCbCABQRhsQQQQtgELC1QBAn8CQCAAQ////z4gAJiSIgC8IgJBF3ZB/wFxIgFBlQFLDQBBgICAgHhBgICAfCABQf8Aa3UgAUH/AEkbIgFBf3MgAnFFDQAgASACcb4hAAsgAAtLAQF/IAAoAgAgACgCCCIDayACSQRAIAAgAyACQQFBARBTIAAoAgghAwsgAgRAIAAoAgQgA2ogASAC/AoAAAsgACACIANqNgIIQQALRwEBfyAAKAIAIAAoAggiA2sgAkkEQCAAIAMgAhBWIAAoAgghAwsgAgRAIAAoAgQgA2ogASAC/AoAAAsgACACIANqNgIIQQALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwtMAQF/IAAoAgAiACgCDCIBBEAgACgCECABQQEQtgELIABBGGoQOAJAIABBf0YNACAAIAAoAgRBAWsiATYCBCABDQAgAEEoQQQQtgELCzoBAX8jAEEgayIAJAAgAEEANgIYIABBATYCDCAAQei4wAA2AgggAEIENwIQIABBCGpB8LjAABCNAQALRwEBfyAAKAIAIAAoAggiA2sgAkkEQCAAIAMgAhBdIAAoAgghAwsgAgRAIAAoAgQgA2ogASAC/AoAAAsgACACIANqNgIIQQALTwECfyAAKAIEIQIgACgCACEDAkAgACgCCCIALQAARQ0AIANB+rnBAEEEIAIoAgwRAgBFDQBBAQ8LIAAgAUEKRjoAACADIAEgAigCEBEAAAtDAQF/AkAgAkEDakE8cSABbCIDRQRAQQQhAkEAIQEMAQsgA0EEELgBIgINAEEEIAMQnwEACyAAIAI2AgQgACABNgIAC0gBAX8jAEEQayICJAAgAkEIaiABEIUBIAIgAigCCCACKAIMKAIYEQEAIAIoAgQhASAAIAIoAgA2AgAgACABNgIEIAJBEGokAAtIAQF/AkAgAUHhAGsiAUH/AXFBGUsEQEEAIQEMAQsgAUECdEH8B3EiAigCvLdAIQEgAigC1LZAIQILIAAgAjYCBCAAIAE2AgALRgECfyABKAIEIQIgASgCACEDQQhBBBC4ASIBRQRAQQRBCBDLAQALIAEgAjYCBCABIAM2AgAgAEHcqMAANgIEIAAgATYCAAvPAgACQCAAIAJNBEAgACABTSABIAJLcg0BIwBBMGsiAiQAIAIgATYCBCACIAA2AgAgAkECNgIMIAJBhKrBADYCCCACQgI3AhQgAiACQQRqrUKAgICAgAWENwMoIAIgAq1CgICAgIAFhDcDICACIAJBIGo2AhAgAkEIaiADEI0BAAsjAEEwayIBJAAgASACNgIEIAEgADYCACABQQI2AgwgAUGoqsEANgIIIAFCAjcCFCABIAFBBGqtQoCAgICABYQ3AyggASABrUKAgICAgAWENwMgIAEgAUEgajYCECABQQhqIAMQjQEACyMAQTBrIgAkACAAIAI2AgQgACABNgIAIABBAjYCDCAAQdCpwQA2AgggAEICNwIUIAAgAEEEaq1CgICAgIAFhDcDKCAAIACtQoCAgICABYQ3AyAgACAAQSBqNgIQIABBCGogAxCNAQALQgEBfyMAQSBrIgMkACADQQA2AhAgA0EBNgIEIANCBDcCCCADIAE2AhwgAyAANgIYIAMgA0EYajYCACADIAIQjQEACz0BAn8gACAAKAIEIgMgAms2AgQgACAAKAIAIAIgA0tyIgQ2AgBBASEDIAQEfyADBSAAKAIIIAEgAhCkAQsLPgEBfyMAQRBrIgIkACACQQhqIAEgASgCACgCBBEBACACKAIMIQEgACACKAIINgIAIAAgATYCBCACQRBqJAAL+QIBA38gACgCACECIAEoAggiAEGAgIAQcUUEQCAAQYCAgCBxRQRAIwBBEGsiBCQAQQMhACACLQAAIgIhAyACQQpPBEAgBCACIAJB5ABuIgNB5ABsa0H/AXFBAXQvAPnCQDsADkEBIQALQQAgAiADG0UEQCAAQQFrIgAgBEENamogA0EBdC0A+sJAOgAACyABQQFBACAEQQ1qIABqQQMgAGsQGSAEQRBqJAAPCyMAQRBrIgMkACACLQAAIQBBACECA0AgAiADakEPaiAAQQ9xQdHEwABqLQAAOgAAIAJBAWshAiAAIgRBBHYhACAEQQ9LDQALIAFBzMLAAEECIAIgA2pBEGpBACACaxAZIANBEGokAA8LIwBBEGsiAyQAIAItAAAhAEEAIQIDQCACIANqQQ9qIABBD3FBwcTAAGotAAA6AAAgAkEBayECIAAiBEEEdiEAIARBD0sNAAsgAUHMwsAAQQIgAiADakEQakEAIAJrEBkgA0EQaiQACzgAAkAgAkGAgMQARg0AIAAgAiABKAIQEQAARQ0AQQEPCyADRQRAQQAPCyAAIAMgBCABKAIMEQIAC9wCAQF/IwBBEGsiAiQAIAJBgKbAADYCDCACIAA2AggjAEHwAGsiACQAIABBgKjAADYCDCAAIAJBCGo2AgggAEGAqMAANgIUIAAgAkEMajYCECAAQYy6wQAoAgA2AhwgAEGAusEAKAIANgIYAkAgASgCAARAIABBMGogAUEQaikCADcDACAAQShqIAFBCGopAgA3AwAgACABKQIANwMgIABBBDYCXCAAQYC5wQA2AlggAEIENwJkIAAgAEEQaq1CgICAgKAMhDcDUCAAIABBCGqtQoCAgICgDIQ3A0ggACAAQSBqrUKAgICAsAyENwNADAELIABBAzYCXCAAQcy4wQA2AlggAEIDNwJkIAAgAEEQaq1CgICAgKAMhDcDSCAAIABBCGqtQoCAgICgDIQ3A0ALIAAgAEEYaq1CgICAgOALhDcDOCAAIABBOGo2AmAgAEHYAGpB8KXAABCNAQALpQQBBn8jAEEQayIGJAAgBiAANgIMIAZBDGohByMAQRBrIgIkACABKAIAQeCzwABBDSABKAIEKAIMEQIAIQAgAkEAOgANIAIgADoADCACIAE2AggjAEEgayIAJABBASEDAkAgAkEIaiIELQAEDQAgBC0ABSEFIAQoAgAiAS0ACkGAAXFFBEAgASgCAEHhxMAAQYDFwAAgBUEBcSIFG0ECQQMgBRsgASgCBCgCDBECAA0BIAEoAgBB7bPAAEEEIAEoAgQoAgwRAgANASABKAIAQYPFwABBAiABKAIEKAIMEQIADQEgByABQdyzwAAoAgARAAAhAwwBCyAFQQFxRQRAIAEoAgBBhcXAAEEDIAEoAgQoAgwRAgANAQsgAEEBOgAPIABB6MTAADYCFCAAIAEpAgA3AgAgACABKQIINwIYIAAgAEEPajYCCCAAIAA2AhAgAEHts8AAQQQQIQ0AIABBg8XAAEECECENACAHIABBEGpB3LPAACgCABEAAA0AIAAoAhBB5MTAAEECIAAoAhQoAgwRAgAhAwsgBEEBOgAFIAQgAzoABCAAQSBqJAAgAi0ADSIBIAItAAwiA3IhAAJAIANBAXEgAUEBR3INACAEKAIAIgAtAApBgAFxRQRAIAAoAgBBicXAAEECIAAoAgQoAgwRAgAhAAwBCyAAKAIAQYjFwABBASAAKAIEKAIMEQIAIQALIAJBEGokACAAQQFxIAZBEGokAAswAQF/IwBBEGsiAiQAIAJBCGogABCFASACKAIIIAEgAigCDCgCEBEAACACQRBqJAALdgEDfyMAQSBrIgQkACAEQQhqIgMQYUEkQQQQuAEiAkUEQEEEQSQQywEACyACQaybwAA2AgAgAiABNgIgIAIgADYCHCACIAMpAgA3AgQgAkEMaiADQQhqKQIANwIAIAJBFGogA0EQaikCADcCACAEQSBqJAAgAgskAAJAIAAgARCgAUUNACAABEAgACABELgBIgFFDQELIAEPCwAL+gECAn8BfiMAQRBrIgIkACACQQE7AQwgAiABNgIIIAIgADYCBCMAQRBrIgEkACACQQRqIgApAgAhBCABIAA2AgwgASAENwIEIwBBEGsiACQAIAFBBGoiASgCACICKAIMIQMCQAJAAkACQCACKAIEDgIAAQILIAMNAUEBIQJBACEDDAILIAMNACACKAIAIgIoAgQhAyACKAIAIQIMAQsgAEGAgICAeDYCACAAIAE2AgwgAEHkp8AAIAEoAgQgASgCCCIALQAIIAAtAAkQTwALIAAgAzYCBCAAIAI2AgAgAEHIp8AAIAEoAgQgASgCCCIALQAIIAAtAAkQTwAL0rsBAzp/E30DfiMAQRBrIiUkACMAQSBrIiEkAAJAAkACQAJAIAAEQCAAQQhrIikgKSgCAEEBaiIDNgIAIANFDQEgACgCACIDQX9GDQIgACADQQFqNgIAICEgKTYCECAhIAA2AgwgISAAQQRqIgM2AgggIUEUaiEfIwBBgANrIhYkAAJAIAJBDE0EQCAfQQA2AgggH0KAgICAEDcCAAwBCyACIAEtAAwiBEENaiIFTQRAIB9BADYCCCAfQoCAgIAQNwIADAELIAIgBEEOaiIEIAEgBWotAAAiBWpJBEAgH0EANgIIIB9CgICAgBA3AgAMAQsgFkEMaiABIARqIAUQGyAWKAIMBEAgH0EANgIIIB9CgICAgBA3AgAMAQsgFigCFCEFIBYoAhAhDUHol8AAIQkCQCADKAIYRQ0AIAMoAgwiBEEcayELIAWtAn4gBUERTwRAIAVBEGshB0LE5sGb4MXijBMhUULTkYytiNHanyQhUgNAIFEhUCANIBFqIghBCGopAABC0OP8zKKEzoSkf4UiUUL/////D4MgCCkAACBShSJSQiCIfkIgiSBSQv////8PgyBRQiCIfoUhUSBQIVIgEUEQaiIRIAdJDQALIAcgDWoiBykACCBRhSFRIAcpAAAgUIUMAQsgBUEHTQRAIAVBA00EQCAFRQRAQsTmwZvgxeKMEyFRQtORjK2I0dqfJAwDCyANIAVBAXZqMQAAIAUgDWpBAWsxAABCCIaEQsTmwZvgxeKME4UhUSANMQAAQtORjK2I0dqfJIUMAgsgBSANakEEazUAAELE5sGb4MXijBOFIVEgDTUAAELTkYytiNHanySFDAELIAUgDWpBCGspAABCxObBm+DF4owThSFRIA0pAABC05GMrYjR2p8khQsiUEL/////D4MgUUIgiH6FIFFC/////w+DIFBCIIh+QiCJhSJQp0Hdy92eeWwgUEIgiKdqQcnB+P0AbEGj7rmcBGpBD3etIlBCGYhCgYKEiJCgwIABfiFSIAMoAhAiCCBQp3EhBwNAAkAgBCAHaikAACJRIFKFIlBCf4UgUEKBgoSIkKDAgAF9g0KAgYKEiJCgwIB/gyJQUEUEQANAIAtBACBQeqdBA3YgB2ogCHFrIg9BHGxqIhEoAgggBUYEQCANIBEoAgQgBRB5RQ0DCyBQQgF9IFCDIlBQRQ0ACwsgUSBRQgGGg0KAgYKEiJCgwIB/g1BFDQIgByASQQhqIhJqIAhxIQcMAQsLIBZB0AFqIQlBACERIwBBEGsiCyQAAkAgBCAPQRxsakEQayISKAIEIgRFBEAgCUEIakGwlMAAKQIANwIAIAlBqJTAACkCADcCAAwBCwJAAn8CQAJAAkACQCAEQQFqIgdB/////wFLDQAgB0EDdCIOIARBCWoiD2oiCCAOSSAIQfj///8HS3INACAIDQFBCCEHDAILEHsgCygCAAwDCyAIQQgQuAEiB0UNAQsgByAOaiERIAQhBwwCCyAIEJMBIAsoAggLIgdBCWohDwsgEigCACEIIA8EQCARIAggD/wKAAALIAdBA3RBCGoiDwRAIBEgB0F/c0EDdGogCCAEQX9zQQN0aiAP/AoAAAsgCSAHNgIEIAkgETYCACAJIBIpAgg3AggLIAtBEGokAAsgFkEgaiAJQQhqKQIANwMAIBYgCSkCADcDGCAWQYCAvJ0ENgLgASAWQpLFqIKs3IDqv383AtgBIBZCoNiTgZSQ+v+/fzcC0AEgFkEsaiEEIBZB0AFqIQ8gFkEYaiEXIAMoAgQhJiADKAIIISMjAEHwAGsiAyQAIANBADYCNCADQShqIAEgAiADQTRqED8gAygCLCETAkAgAygCKEEBcQRAIARBgICAgHg2AgAgBCATNgIEDAELIANBIGogASACIANBNGoQPyADKAIkIRUgAygCIEEBcQRAIARBgICAgHg2AgAgBCAVNgIEDAELIANBGGogASACIANBNGoQPyADKAIcIQYgAygCGEEBcQRAIARBgICAgHg2AgAgBCAGNgIEDAELAkAgAiADKAI0IgdBAWoiCU8EQCACIAdLDQEgByACQbyWwAAQdAALIANBADYCaCADQQE2AlwgA0GMlcAANgJYIANCBDcCYCADQdgAahBYIQUgBEGAgICAeDYCACAEIAU2AgQMAQsCQAJAIAEgB2oiCy0AACIIRQRAIANBADYCQCADQoCAgIAQNwI4DAELIAhBARC4ASIRBEAgAyARNgI8IAIgB2shESADIAg2AjggA0EANgJAQQAgCGshEiAIIAlqIQlBASEIA0ACQCACIAcgCGpBAWpPBEAgCCARRw0BIAIgAkG8lsAAEHQACyADQQA2AmggA0EBNgJcIANBjJXAADYCWCADQgQ3AmAgA0HYAGoQWCEFIARBgICAgHg2AgAgBCAFNgIEDAQLIAggC2otAAAiDkEAIA5BCEkbIQ4gAygCOCAIQQFrRgRAIANBOGoQbgsgAygCPCAIakEBayAOOgAAIAMgCDYCQCASIAhBAWoiCGpBAUcNAAsMAQtBASAIEJ8BAAsCQCACIAlBAWoiB08EQCACIAlLDQEgCSACQbyWwAAQdAALIANBADYCaCADQQE2AlwgA0GMlcAANgJYIANCBDcCYCADQdgAahBYIQUgBEGAgICAeDYCACAEIAU2AgQMAQsCQAJAAkACQAJAIAIgByABIAlqLQAAIghqIglPBEAgByAJSw0BIANBxABqIAEgB2ogCBAbIAMoAkRBAUYEQCADQQA2AmggA0EBNgJcIANBiJbAADYCWCADQgQ3AmAgA0HYAGoQWCEFIARBgICAgHg2AgAgBCAFNgIEDAcLQQAhCCADKAJMIgdBAEgNAiADKAJIIRECQCAHRQRAQQEhCwwBC0EBIQggB0EBELgBIgtFDQMLIAcEQCALIBEgB/wKAAALIAMgCTYCNAJAIAUgB0cNACALIA0gBRB5DQAgA0HYAGogASACIANBNGoQQSADKAJcIQogAygCWARAIARBgICAgHg2AgAgBCAKNgIEDAcLIANB2ABqIAEgAiADQTRqEEEgAygCXCEQIAMoAlhBAUYEQCAEQYCAgIB4NgIAIAQgEDYCBAwHCyADQdgAaiABIAIgA0E0ahBBIAMoAlwhFCADKAJYQQFGBEAgBEGAgICAeDYCACAEIBQ2AgQMBwsgA0HYAGogASACIANBNGoQQSADKAJcIRsgAygCWEEBRgRAIARBgICAgHg2AgAgBCAbNgIEDAcLIANB2ABqIAEgAiADQTRqEF4gAy0AWEEBRgRAIAMoAlwhBSAEQYCAgIB4NgIAIAQgBTYCBAwHCyADQRBqIAMtAFkiCUEUEH4gA0EANgJMIAMgAykDEDcCRCAJRQ0EA0AgA0HYAGogASACIANBNGoQXiADLQBYBEAgAygCXCEFIARBgICAgHg2AgAgBCAFNgIEDAcLIAMtAFkhDSADQdgAaiABIAIgA0E0ahBBIAMoAlwhESADKAJYQQFGBEAgBEGAgICAeDYCACAEIBE2AgQMBwsgA0HYAGogASACIANBNGoQQSADKAJcIRIgAygCWEEBRgRAIARBgICAgHg2AgAgBCASNgIEDAcLIANB2ABqIAEgAiADQTRqEEEgAygCXCEOIAMoAlhBAUYEQCAEQYCAgIB4NgIAIAQgDjYCBAwHCyADQdgAaiABIAIgA0E0ahBBIAMoAlwhDCADKAJYQQFGBEAgBEGAgICAeDYCACAEIAw2AgQMBwsgAygCTCIYIAMoAkRGBEAgA0HEAGoQbQsgAygCSCAYQRRsaiIIIA1BACANQQdJGzoAECAIIAw2AgwgCCAONgIIIAggEjYCBCAIIBE2AgAgAyAYQQFqNgJMIAlBAWsiCQ0ACwwECyADQQA2AmggA0EBNgJcIANBpJbAADYCWCADQgQ3AmAgA0HYAGoQWCEFIARBgICAgHg2AgAgBCAFNgIEDAULIANBADYCaCADQQE2AlwgA0GMlcAANgJYIANCBDcCYCADQdgAahBYIQUgBEGAgICAeDYCACAEIAU2AgQMBQsgByAJIAJBrJbAABCCAQALIAggBxCfAQALIANB2ABqIAEgAiADQTRqEEEgAygCXCENIAMoAlhBAUYEQCAEQYCAgIB4NgIAIAQgDTYCBAwBCyADQdgAaiABIAIgA0E0ahBBIAMoAlwhESADKAJYQQFGBEAgBEGAgICAeDYCACAEIBE2AgQMAQsgA0HYAGogASACIANBNGoQQSADKAJcIRggAygCWEEBRgRAIARBgICAgHg2AgAgBCAYNgIEDAELIANB2ABqIAEgAiADQTRqEEEgAygCXCEaIAMoAlhBAUYEQCAEQYCAgIB4NgIAIAQgGjYCBAwBCyADQdgAaiABIAIgA0E0ahBBIAMoAlwhICADKAJYQQFGBEAgBEGAgICAeDYCACAEICA2AgQMAQsgA0HYAGogASACIANBNGoQQSADKAJcIRkgAygCWEEBRgRAIARBgICAgHg2AgAgBCAZNgIEDAELIANB2ABqIAEgAiADQTRqEEEgAygCXCEdIAMoAlhBAUYEQCAEQYCAgIB4NgIAIAQgHTYCBAwBCyADQdgAaiABIAIgA0E0ahBBIAMoAlwhIiADKAJYQQFGBEAgBEGAgICAeDYCACAEICI2AgQMAQsgA0HYAGogASACIANBNGoQXiADLQBYQQFGBEAgAygCXCEFIARBgICAgHg2AgAgBCAFNgIEDAELIAMtAFkhJyADQdgAaiABIAIgA0E0ahBeIAMtAFhBAUYEQCADKAJcIQUgBEGAgICAeDYCACAEIAU2AgQMAQsgAy0AWSEqIANB2ABqIAEgAiADQTRqEF4gAy0AWEEBRgRAIAMoAlwhBSAEQYCAgIB4NgIAIAQgBTYCBAwBCyADLQBZISsgA0HYAGogASACIANBNGoQQSADKAJcISQgAygCWEEBRgRAIARBgICAgHg2AgAgBCAkNgIEDAELIANB2ABqIAEgAiADQTRqEEEgAygCXCEoIAMoAlhBAUYEQCAEQYCAgIB4NgIAIAQgKDYCBAwBCyMAQSBrIggkAAJAAkAgA0HYAGoiEgJ/IAIgA0E0aiIMKAIAIglBAmoiHk8EQCACIAlNDQIgAiAJQQFqIg5LBEAgDCAeNgIAIBIgASAJai0AACABIA5qLQAAQQh0cjsBAkEADAILIA4gAkGklcAAEHQACyAIQQA2AhggCEEBNgIMIAhBjJXAADYCCCAIQgQ3AhAgEiAIQQhqEFg2AgRBAQs7AQAgCEEgaiQADAELIAkgAkGUlcAAEHQACyADLwFYQQFGBEAgAygCXCEFIARBgICAgHg2AgAgBCAFNgIEDAELIANBCGogAy8BWiISQRgQfiADQQA2AmAgAyADKQMINwJYAn8CQCASBEADQCADQdAAaiIIIAEgAiADQTRqIgkQXiADLQBQDQICQAJAIAMtAFEiDkHpAU0EQCAIIAEgAiAJEEEgAygCVCIsIAMoAlANBhogCCABIAIgCRBBIAMoAlQhHiADKAJQRQ0BIB4MBgsgA0HQAGoiCCABIAIgA0E0aiIJEEEgAygCUA0EIAggASACIAkQQSADKAJQDQQgCCABIAIgCRBBIAMoAlANBCAIIAEgAiAJEEEgAygCUA0EIAggASACIAkQQSADKAJQDQQMAQsgA0HQAGoiCCABIAIgA0E0aiIMEEEgAygCVCIJIAMoAlANBBogCCABIAIgDBBBIAMoAlQiHCADKAJQDQQaIAggASACIAwQQSADKAJUIgggAygCUA0EGkHqASAOIA5B6gFPGyIOICNJBEAgDiAmai0AAEUNAQsCQCAcviI/QwAAAABbIAi+Ij1DAAAAAFtxDQAgPyA/lCA9ID2UkiI+QwAAAABeRQ0AIAm+IUBBACEMIA5BEHQhHAJAIAlB/////wdxIghFIAlBAEgiLSAIQQFrQf///wNJcXIgCEGAgID8B0ZyIAhBgICA/AdLciAIQYCAgARrQYCAgPgHSSAtcXINACBAQwAAgECUEHYiQEMAAAAAXw0AQf//AyEMIEBDAP9/R2ANAEH//wMgQPwBQQAgQEMAAAAAYBsgQEMA/39HXhshDAsgFyAMIBxyEEQiCEUEQCAXIBwQRCIIRQ0BCyAIKgIEID6RlSJAID2UIT0gQCA/lCE/CyADKAJgIgwgAygCWEYEQCADQdgAahByCyADKAJcIAxBGGxqIghBADoAFSAIIA46ABQgCCA9OAIQIAggPzgCDCAIIAk2AgggCCAeNgIEIAggLDYCACADIAxBAWo2AmALIBJBAWsiEg0ACwsgBCADKQI4NwIAIAQgAykCRDcCTCAEIAMpAlg3AmggBCAGNgIUIAQgFTYCECAEIBM2AgwgBCAPKQIANwIYIARBCGogA0FAaygCADYCACAEQdQAaiADQcwAaigCADYCACAEQfAAaiADQeAAaigCADYCACAEQSBqIA9BCGopAgA3AgAgBEEoaiAPQRBqKAIANgIAIAQgJ0EARzoAoAEgBEEANgKcASAEIBG+ICi+kjgCmAEgBCANviAkvpI4ApQBIAQgIjYCkAEgBCAdNgKMASAEIBk2AogBIAQgIDYChAEgBCAaNgKAASAEIBg2AnwgBCARNgJ4IAQgDTYCdCAEIBs2AmQgBCAUNgJgIAQgEDYCXCAEIAo2AlggBCAFNgJIIAQgCzYCRCAEIAU2AkAgBCArQQBHOgA9IAQgKkEARzoAPCAEQoCAgPSDgIDAPzcCNCAEQoCAvKHkzJnjPzcCLAwFCyADKAJUCyEFIARBgICAgHg2AgAgBCAFNgIEIAMoAlgiBEUNACADKAJcIARBGGxBBBC2AQsgAygCRCIERQ0AIAMoAkggBEEUbEEEELYBCyAHRQ0AIAsgB0EBELYBCyADKAI4IgRFDQAgAygCPCAEQQEQtgELIANB8ABqJAACQAJAIBYoAixBgICAgHhGBEAgH0EANgIIIB9CgICAgBA3AgAMAQsgFkHQAWoiGyAWQSxqQaQB/AoAACAWKAK8AiEHIBYoAsACIQlBACELQQAhDEEAIR0jAEHQBGsiBiQAIAZBGGoiCEEAOgAAIAZBEGoiDUIANwMAIAZCADcDCCAGQQA2AiQgBkKAgICAwAA3AhwgFkGQAmoiICgCFCIDBEAgA0EUbCEDICAoAhAhBEEEIRUDQAJAAkACQCAEQRBqIgUtAAAOBQACAgIBAgsgDSAEQQhqKQIANwMAIAggBSgCADYCACAGIAQpAgA3AwgMAQsgBkHgAmoiDyAFKAIANgIAIAZB2AJqIhEgBEEIaikCADcDACAGIAQpAgA3A9ACIAYoAhwgDEYEQCAGQRxqEG0gBigCICEVCyAVIAxBFGxqIgUgBikD0AI3AgAgBUEQaiAPKAIANgIAIAVBCGogESkDADcCACAGIAxBAWoiDDYCJAsgBEEUaiEEIANBFGsiAw0ACwsgFkHEAmohAyAbKAIMIQ0gGygCECEPIAZCBDcCOCAGQgA3AjAgBkKAgICAwAA3AiggCUEYbCEFQQAhBAJAAkAgCUHVqtUqSw0AAn8gBUUEQEEEIQhBAAwBC0EEIQQgBUEEELgBIghFDQEgCQshBCAFBEAgCCAHIAX8CgAACyANs0MAAHpEIA+zlZX8AUECaiESIAZB2ABqIANBGGopAgA3AwAgBkHQAGogA0EQaiIFKQIANwMAIAZByABqIANBCGopAgA3AwAgBiADKQIANwNAIAYgGyoCNDgCZCAFKgIAIj9DAAAAAFsgAyoCFCI9QwAAAABbcQ0BID9DAAAAAF4iAyA/QwAAAABdckUgPUMAAAAAXkVyRQRAQQRBBSADGyEdDAILID9DAAAAAF0iBSA/QwAAAABeIgMgPUMAAAAAXnJyIQcgPUMAAAAAXQRAQQIhHSAHRQ0CQQZBByADG0EBIAMgBXIbIR0MAgsgB0UNAUEAQQMgAxtBASADIAVyGyEdDAELIAQgBRCfAQALIBIEQCAGQTRqIRdDrkdhP0PNzEw/IBstAD0iAxshSEOF61E/QzMzMz8gAxshRyAGKgIMIksgBioCFJIhTCAGKgIIIk0gBioCEJIhSSAgKgIcIkQgICoCJJIhQyAgKgIYIkUgICoCIJIhRiAbKAIIIhMgEmshFSAbKAIEIQpBASEDQQAhBQNAIAUgAyEFIAQhDyAIIQ0gCUEYbCEHAkACQCALQQFxIg5FBEAgBkEANgI8AkACfwJAAkAgBigCNCAJSQRAIAZBNGpBACAJQQRBGBBTIAYoAjwhBAwBC0EAIQQgCUUNAQsgBEEYbCEMIA0hAwNAIAZBoAJqIgggA0EQaikCADcDACAGQZgCaiIJIANBCGopAgA3AwAgBiADKQIANwOQAiAGQZACaiAGQQhqEAUgBkHgAmoiECAIKQMANwMAIAZB2AJqIhQgCSkDADcDACAGIAYpA5ACNwPQAiAGKAI0IARGBEAgFxByCyADQRhqIQMgBigCOCAMaiIIIAYpA9ACNwIAIAhBEGogECkDADcCACAIQQhqIBQpAwA3AgAgBiAEQQFqIgQ2AjwgDEEYaiEMIAdBGGsiBw0AC0EAIQMCQCAEQdWq1SpLDQAgBigCOCEHIAxFBEBBBCEIQQAhDCAEDAMLQQQhAyAMQQQQuAEiCEUNACAEIQkMAwsgAyAMEJ8BAAtBBCEIIAYoAjghB0EAIQxBAAshCUEAIQQLIAwEQCAIIAcgDPwKAAALIA8NAQwCCyAGQQA2AjACQAJ/AkACQCAGKAIoIAlJBEAgBkEoakEAIAlBBEEYEFMgBigCMCEEDAELQQAhBCAJRQ0BCyAEQRhsIQwgDSEDA0AgBkGgAmoiCCADQRBqKQIANwMAIAZBmAJqIgkgA0EIaikCADcDACAGIAMpAgA3A5ACIAZBkAJqIAZBCGoQBSAGQeACaiIQIAgpAwA3AwAgBkHYAmoiFCAJKQMANwMAIAYgBikDkAI3A9ACIAYoAiggBEYEQCAGQShqEHILIANBGGohAyAGKAIsIAxqIgggBikD0AI3AgAgCEEQaiAQKQMANwIAIAhBCGogFCkDADcCACAGIARBAWoiBDYCMCAMQRhqIQwgB0EYayIHDQALQQAhAwJAIARB1arVKksNACAGKAIsIQcgDEUEQEEEIQhBACEMIAQMAwtBBCEDIAxBBBC4ASIIRQ0AIAQhCQwDCyADIAwQnwEAC0EEIQggBigCLCEHQQAhDEEACyEJQQAhBAsgDARAIAggByAM/AoAAAsgD0UNAQsgDSAPQRhsQQQQtgELQwAAgD8hPQJAIAYqAkAiQCBNYEUgQCBJX0VyDQAgBioCRCJCIEtgRSBCIExfRXINACAGKgJIIT4gBigCJCIDBEAgA0EUbCEHIAYoAiAhAyBCID6SIT8gQiA+kyFBIEAgPpIhSiBAID6TIU8DQAJAIE8gAyoCACJOYEUNACBKIE4gA0EIaioCAJJfRQ0AIEEgA0EEaioCACJOYEUNACA/IE4gA0EMaioCAJJfDQMLIANBFGohAyAHQRRrIgcNAAsLIAZBMGogBkE8aiAOGygCACIHRQRAQwAAgD9DAACAPxCWASE9DAELIAZBLGogBkE4aiAOGygCACIDIAdBGGxqIQ0gPkMAABZDkiFBQwAAAAAhPyADIQcDQAJAIAdBFWotAAANACAHQRRqLQAAQbMBRw0AIAcqAgAgQJMiPSA9lCAHQQRqKgIAIEKTIj0gPZSSIkogQSAHQQhqKgIAkiI9ID2UX0UNAEMAAAAAQwAAgD8gSpEgPZWTIj0gPUMAAAAAXRtDAAAQQZRDAACAP5IiPSA/ID0gP14bIT8LIAdBGGoiByANRw0AC0MAAAAAIT0gPkMAAMhCkiFBA0ACQCADQRVqLQAADQAgA0EUai0AAEHlAUcNACADKgIAIECTIj4gPpQgA0EEaioCACBCkyI+ID6UkiJKIEEgA0EIaioCAJIiPiA+lF9FDQBDAAAAAEMAAIA/IEqRID6VkyI+ID5DAAAAAF0bQwAAEEGUQwAAgD+SIj4gPSA9ID5dGyE9CyADQRhqIgMgDUcNAAsgR0MAAIA/ID9DAAAAAF4bIEhDAACAPyA9QwAAAABeGxCWASE9C0MAAAAAIT8gPSAGKgJMlCI9IUEgFWoiA0EASCADIBNPckUEQCADIApqLQAAIR0LAkACQAJAAkACQAJAAkACQCAdQf8BcUEBaw4HAAECAwQFBgcLQwAAAAAhQSA9IT8MBgsgPYwhP0MAAAAAIUEMBQsgPYwhQQwECyA9IT8MAwsgPYwhQSA9IT8MAgsgPYwhPwwBCyA9jCJBIT8LID8gBioCZCI+IAYqAlSUkiE/AkAgQSAGKgJQID6UkiJBiyI+ID1eRQRAID5DbxKDOl1FDQFDAAAAACFBDAELID1DAADAf0MAAIA/IEGYIEEgQVwblCFBCwJAID+LIj4gPV5FBEAgPkNvEoM6XUUNAUMAAAAAIT8MAQsgPUMAAMB/QwAAgD8gP5ggPyA/XBuUIT8LIAYgQTgCUCAGIEAgQZIiQDgCQCAGID84AlQgBiA/IAYqAkSSIj44AkQCQAJAIEAgBioCSCI9kyBFX0UEQCBAID2SIEZgRQ0CIAYgRiA9kzgCQCBBQwAAAABeRQ0CDAELIAYgRSA9kjgCQCBBQwAAAABdRQ0BCyAGQQA2AlALAkACQCA+ID2TIERfRQRAID4gPZIgQ2BFDQIgBiBDID2TOAJEID9DAAAAAF5FDQIMAQsgBiBEID2SOAJEID9DAAAAAF1FDQELIAZBADYCVAsgC0EBcyELIAUgBSASSSIHaiEDIAcNAAsLIBZB9AJqISggFkHkAmohJEEAIQcgBkEAOgB8IAZBADYCdCAGIBsoAhQiIjYCeCAGQegAaiEXQQAhEUEAIQUjAEEwayINJABBBCEMAkACQAJAAkAgBkH0AGoiCy0ACCISDQAgCygCBCIDIAsoAgAiD0kNACADIA9rIg5BAWoiEUUNASARQQxsIQNBACEPIA5BqdWq1QBLDQIgA0UEQEEAIREMAQtBBCEPIANBBBC4ASIMRQ0CCyANQQA2AhQgDSAMNgIQIA0gETYCDAJAIBINACALKAIAIgMgCygCBCIOSw0AAn8CQCAOIANrIgtBAWoiBQRAIAUgEUsNAUEADAILIA1BADYCKCANQQE2AhwgDUHglsAANgIYIA1CBDcCICANQRhqQfiWwAAQjQEACyANQQxqQQAgBUEEQQwQUyANKAIQIQwgDSgCFAshBQJAIAMgDk8NAAJAIAtBA3EiEUUEQCADIQ8MAQsgAyARaiEPIAUgEWogDCAFQQxsaiESA0AgEkKAgICAwAA3AgAgEkEIakEANgIAIBJBDGohEiARQQFrIhENAAshBQsgAyAOa0F8Sw0AIA4gD2shESAMIAVBDGxqIRIDQCASQoCAgIDAADcCACASQShqQgQ3AgAgEkEgakIANwIAIBJBGGpCgICAgMAANwIAIBJBEGpCBDcCACASQQhqQgA3AgAgEkEwaiESIAVBBGohBSARQQRrIhENAAsLIAwgBUEMbGoiA0EANgIIIANCgICAgMAANwIAIAVBAWohBQsgFyANKQIMNwIAIBdBCGogBTYCACANQTBqJAAMAgsgDUEANgIoIA1BATYCHCANQeCWwAA2AhggDUIENwIgIA1BGGpB6JbAABCNAQALIA8gAxCfAQALAkACQCAGKAJwBEAgBigCbCIDQQA2AgggAygCACAJSQRAIANBACAJQQRBGBBTIAMoAgghBwsgCUEYbCIFBEAgAygCBCAHQRhsaiAIIAX8CgAACyADIAcgCWo2AgggIg0BIAghESAEIRIMAgtBAEEAQYCOwAAQdAALQQEhBQJAA0AgBigCcCIDIAVNBEAgBSADQYiPwAAQdAALIAVBDGwiCyAGKAJsaiIHQQA2AggCQAJAIAcoAgAgCUkEQCAHQQAgCUEEQRgQUyAHKAIIIQwMAQtBACEMIAlFDQELIAxBGGwhDSAJQRhsIRUgCCEDA0AgBkGgAmoiCSADQRBqKQIANwMAIAZBmAJqIg8gA0EIaikCADcDACAGIAMpAgA3A5ACIAZBkAJqIAZBCGoQBSAGQeACaiIRIAkpAwA3AwAgBkHYAmoiEiAPKQMANwMAIAYgBikDkAI3A9ACIAcoAgAgDEYEQCAHEHILIANBGGohAyAHKAIEIA1qIgkgBikD0AI3AgAgCUEQaiARKQMANwIAIAlBCGogEikDADcCACAHIAxBAWoiDDYCCCANQRhqIQ0gFUEYayIVDQALCyAGKAJwIgMgBUsEQCAGKAJsIAtqIgsoAggiCUEYbCEDQQAhByAJQdWq1SpLDQIgCygCBCELAn8gA0UEQEEEIRFBAAwBC0EEIQcgA0EEELgBIhFFDQMgCQshEiADBEAgESALIAP8CgAACyAEBEAgCCAEQRhsQQQQtgELIAUgIk8NAyARIQggEiEEIAUgBSAiSWoiBSAiSw0DDAELCyAFIANBmI/AABB0AAsgByADEJ8BAAsgBigCcCIXQeABbCEDQQAhBwJAAkACQAJAAkACQCAXQaSSyQRLDQAgICoCJCFGICAqAhwhPyAgKgIgIUggICoCGCE9IAYoAmwhBAJ/IANFBEBBBCENQQAMAQtBBCEHIANBBBC4ASINRQ0BIBcLISYgFwRAID8gRkMAAAA/lJIhSyA9IEhDAAAAP5SSIUwgDSEDIBchBwNAIAYgRjgCnAIgBiBIOAKYAiAGIEs4ApQCIAYgTDgCkAIgBkHQAmohGiAGQZACaiEJQwAAAAAhPyMAQeABayIQJAACQAJAAkAgBCgCCCIIBEAgCEECdCIFQQQQuAEiC0UNAiAQQQA2AgwgECALNgIIIBAgCDYCBCAFQQQQuAEiC0UNAiAQQQA2AhggECALNgIUIBAgCDYCECAFQQQQuAEiC0UNAiAQQQA2AiQgECALNgIgIBAgCDYCHCAIQQEQuAEiCw0BQQEgCBCfAQALIBBBADYCDCAQQoCAgIDAADcCBCAQQQA2AhggEEKAgICAwAA3AhAgEEEANgIkIBBCgICAgMAANwIcQQEhCwsgEEEANgIwIBAgCzYCLCAQIAg2AiggEEE0aiEFAkACQAJAAkBBgIABQQQQuAEiCwRAQYAQQQQQuAEiD0UNAkGAEEEEELgBIg5FDQJBgBBBBBC4ASIMRQ0CQYAQQQQQuAEiE0UNAkGAEEEEELgBIhVFDQJBgBBBBBC4ASIKRQ0CQYAQQQQQuAEiFEUNAkGAwABBBBC4ASIYRQ0DQYDAAEEEELgBIhlFDQNBgMAAQQQQuAEiHkUNA0GAwABBBBC4ASIcRQ0DQYCAAkEEELgBIiNFDQEgBUEANgKYASAFICM2ApQBIAVCgICAgICAAjcCjAEgBSAcNgKIASAFQoCAgICAgAI3AoABIAUgHjYCfCAFQoCAgICAgAI3AnQgBSAZNgJwIAVCgICAgICAAjcCaCAFIBg2AmQgBUKAgICAgIACNwJcIAUgFDYCWCAFQoCAgICAwAA3AlAgBSAKNgJMIAVCgICAgIDAADcCRCAFIBU2AkAgBUKAgICAgMAANwI4IAUgEzYCNCAFQoCAgICAwAA3AiwgBSAMNgIoIAVCgICAgIDAADcCICAFIA42AhwgBUKAgICAgMAANwIUIAUgDzYCECAFQoCAgICAwAA3AgggBSALNgIEIAVBgAQ2AgAgBUGkAWogCUEIaikCADcCACAFIAkpAgA3ApwBDAQLQQRBgIABEJ8BAAtBBEGAgAIQnwEAC0EEQYAQEJ8BAAtBBEGAwAAQnwEACyAIBEAgCEEYbCEMIAQoAgQhCCAQQcQBaiEJA0AgCCoCACE9IBAoAgwiBSAQKAIERgRAIBBBBGoQcQsgECgCCCAFQQJ0aiA9OAIAIBAgBUEBajYCDCAIQQRqIgsqAgAhPSAQKAIYIgUgECgCEEYEQCAQQRBqEHELIBAoAhQgBUECdGogPTgCACAQIAVBAWo2AhggCEEIaiIPKgIAIT0gECgCJCIFIBAoAhxGBEAgEEEcahBxCyAQKAIgIAVBAnRqID04AgAgECAFQQFqNgIkIAhBFWoiDi0AACETIBAoAjAiBSAQKAIoRgRAIBBBKGoQbgsgECgCLCAFaiATOgAAIBAgBUEBajYCMCAOLQAARQRAIA8qAgAiPSA/XiEPIBAoAgxBAWshDiALKgIAIUAgCCoCACE+IBAoAswBIgsgECgCxAFGBEAjAEEQayIFJAAgBUEEaiAJKAIAIhMgCSgCBEEEIBNBAXQiEyATQQRNGyITQQRBEBBSIAUoAgRBAUYEQCAFKAIIIAUoAgwQnwEACyAFKAIIIRUgCSATNgIAIAkgFTYCBCAFQRBqJAALIBAoAsgBIAtBBHRqIgUgDjYCDCAFID04AgggBSBAOAIEIAUgPjgCACAQIAtBAWo2AswBID0gPyAPGyE/CyAIQRhqIQggDEEYayIMDQALC0EAIQhBACEOQQAhGSMAQeAAayIUJAAgEEE0aiIKQQA2AowBIApBADYCgAEgCkEANgJ0IApBADYCaCAKQQA2AgggCkEANgJcIApBADYCUCAKQQA2AkQgCkEANgI4IApBADYCLCAKQQA2AiAgCkEANgIUIAooApgBIhgEQCAKQQA2ApgBIAooApQBIQ8gCigCkAEhIyAKQoCAgIDAADcCkAEgCioCqAEhPiAKKgKgASE9IAoqAqQBIUIgCioCnAEhQAJAAkACQEGABEEEELgBIgwEQCAMQgA3AhAgDCA+QwAAAD+UIkEgPZIiPjgCDCAMIEJDAAAAP5QiRCBAkiJCOAIIIAwgPSBBkyJBOAIEIAwgQCBEkyJEOAIAIAxBGGpCADcCACAYQRFJDQEgGEEEdCEVIEEgPpJDAAAAP5QhPSBEIEKSQwAAAD+UIUACQAJAAkACQAJAAkACQAJAAkADQCAIIA9qIgVBBGoqAgAiTSAFQQhqIhMqAgAiQ5MhRSAFKgIAIkkgQ5IhRyBNIEOSID1eIQsCQAJAAn8CQAJAAkAgSSBDkyBAXSIJRQRAIEAgR10NASALDQZBACEJDAILIEAgR10NACALRQRAQQEhCQwCCyA9IEVeRQ0EDAULIAlFIQkgC0UNACA9IEVeDQFBASAJDQIaDAQLID0gRV4NAEEAIAkNARoMAwsgCUUNAiALRQtFDQELIA4gGE8NAiAPIA5BBHRqIgkpAgAhUCATKQIAIVEgCSAFKQIANwIAIAlBCGoiCSkCACFSIAkgUTcCACATIFI3AgAgBSBQNwIAIA5BAWohDgsgFSAIQRBqIghHDQALIA4gGEsNASAMIA42AhAgDCAYIA5rIic2AhggDkUNC0EAIQggDiELIA8hBQNAID0gBUEEaioCACAFQQhqIgkqAgCSYARAIAggDk8NBCAPIAhBBHRqIhMpAgAhUCAJKQIAIVEgEyAFKQIANwIAIBNBCGoiEykCACFSIBMgUTcCACAJIFI3AgAgBSBQNwIAIAhBAWohCAsgBUEQaiEFIAtBAWsiCw0ACyAIIA5LDQNBACELIAgEQCAIIQkgDyEFA0AgQCAFKgIAIAVBCGoiEyoCAJJgBEAgCCALTQ0HIA8gC0EEdGoiFSkCACFQIBMpAgAhUSAVIAUpAgA3AgAgFUEIaiIVKQIAIVIgFSBRNwIAIBMgUjcCACAFIFA3AgAgC0EBaiELCyAFQRBqIQUgCUEBayIJDQALIAggC0kNBgsgDiAIayETIA8gCEEEdGohFSAIIA5HBEAgEyEJIBUhBQNAIEAgBSoCACAFQQhqIh4qAgCSYARAIBMgGU0NCSAVIBlBBHRqIhwpAgAhUCAeKQIAIVEgHCAFKQIANwIAIBxBCGoiHCkCACFSIBwgUTcCACAeIFI3AgAgBSBQNwIAIBlBAWohGQsgBUEQaiEFIAlBAWsiCQ0ACyATIBlJDQgLQYAQQQQQuAEiBUUNCCAFQQA2AhwgBSA+OAIMIAUgQjgCCCAFIEE4AgQgBSBEOAIAIAUgJzYCGCAFIA42AhAgBUEBNgIUIBQgBTYCDCAUQcAANgIIIAVBIGpBAEGAAfwLACAUQQU2AhAgRCBBIEAgPSAPIAtBAUEAQQEgFEEIaiIFEAYgQCBBIEIgPSAPIAtBBHRqIAggC2tBASALQQIgBRAGIEQgPSBAID4gFSAZQQEgCEEDIAUQBiBAID0gQiA+IBUgGUEEdGogEyAZa0EBIAggGWpBBCAFEAYgFCgCECEFIBQoAgwhCCAUKAIIIQsgDEGABEEEELYBDAwLIA4gGEHcksAAEHQACyAUQQA2AhggFEEBNgIMIBRBlJLAADYCCCAUQgQ3AhAgFEEIakGcksAAEI0BAAsgCCAOQdySwAAQdAALIBRBADYCGCAUQQE2AgwgFEGUksAANgIIIBRCBDcCECAUQQhqQaySwAAQjQEACyALIAhB3JLAABB0AAsgFEEANgIYIBRBATYCDCAUQZSSwAA2AgggFEIENwIQIBRBCGpBvJLAABCNAQALIBkgE0HcksAAEHQACyAUQQA2AhggFEEBNgIMIBRBlJLAADYCCCAUQgQ3AhAgFEEIakHMksAAEI0BAAtBBEGAEBCfAQALQQRBgAQQnwEACyAMIBg2AhgLQQEhBUEQIQsgDCEICyAKKAIAIgkEQCAKKAIEIAlBBXRBBBC2AQsgCiAFNgIIIAogCDYCBCAKIAs2AgAgCigCDCAKKAIUIghrIAVJBEAgCkEMaiAIIAVBBEEEEFMgCigCCCEFCyAKKAIYIAooAiAiCGsgBUkEQCAKQRhqIAggBUEEQQQQUyAKKAIIIQULIAooAiQgCigCLCIIayAFSQRAIApBJGogCCAFQQRBBBBTIAooAgghBQsgCigCMCAKKAI4IghrIAVJBEAgCkEwaiAIIAVBBEEEEFMgCigCCCEFCyAKKAI8IAooAkQiCGsgBUkEQCAKQTxqIAggBUEEQQQQUyAKKAIIIQULIAooAkggCigCUCIIayAFSQRAIApByABqIAggBUEEQQQQUyAKKAIIIQULIAooAlQgCigCXCIIayAFSQRAIApB1ABqIAggBUEEQQQQUyAKKAIIIQULIAUEQCAKQdQAaiEJIApByABqIQ4gCkE8aiEMIApBMGohEyAKQSRqIRUgCkEYaiEZIApBDGohHiAFQQV0IQsgCigCBCEFA0AgBSoCACE9IAooAhQiCCAKKAIMRgRAIB4QcQsgCigCECAIQQJ0aiA9OAIAIAogCEEBajYCFCAFQQRqKgIAIT0gCigCICIIIAooAhhGBEAgGRBxCyAKKAIcIAhBAnRqID04AgAgCiAIQQFqNgIgIAVBCGoqAgAhPSAKKAIsIgggCigCJEYEQCAVEHELIAooAiggCEECdGogPTgCACAKIAhBAWo2AiwgBUEMaioCACE9IAooAjgiCCAKKAIwRgRAIBMQcQsgCigCNCAIQQJ0aiA9OAIAIAogCEEBajYCOCAFQRBqKAIAIRwgCigCRCIIIAooAjxGBEAgDBBxCyAKKAJAIAhBAnRqIBw2AgAgCiAIQQFqNgJEIAVBFGooAgAhHCAKKAJQIgggCigCSEYEQCAOEHELIAooAkwgCEECdGogHDYCACAKIAhBAWo2AlAgBUEYaigCACEcIAooAlwiCCAKKAJURgRAIAkQcQsgCigCWCAIQQJ0aiAcNgIAIAogCEEBajYCXCAFQSBqIQUgC0EgayILDQALCyAKQeAAaiEIIAooAmAgCigCaCIFayAYSQRAIAggBSAYQQRBBBBTCyAKQewAaiEJIAooAmwgCigCdCIFayAYSQRAIAkgBSAYQQRBBBBTCyAKQfgAaiELIAooAnggCigCgAEiBWsgGEkEQCALIAUgGEEEQQQQUwsgCkGEAWohDiAKKAKEASAKKAKMASIFayAYSQRAIA4gBSAYQQRBBBBTCyAPIBhBBHRqIRMgDyEFA0AgBUEMaigCACEVIAVBCGoqAgAhPSAFQQRqKgIAIUAgBSoCACE+IAooAmgiDCAKKAJgRgRAIAgQcQsgCigCZCAMQQJ0aiA+OAIAIAogDEEBajYCaCAKKAJ0IgwgCigCbEYEQCAJEHELIAooAnAgDEECdGogQDgCACAKIAxBAWo2AnQgCigCgAEiDCAKKAJ4RgRAIAsQcQsgCigCfCAMQQJ0aiA9OAIAIAogDEEBajYCgAEgCigCjAEiDCAKKAKEAUYEQCAOEHELIAooAogBIAxBAnRqIBU2AgAgCiAMQQFqNgKMASAFQRBqIgUgE0cNAAsgCigCkAEiBQRAIAooApQBIAVBBHRBBBC2AQsgCkEANgKYASAKIA82ApQBIAogIzYCkAELIBRB4ABqJAAgGiAQKQIENwIAIBogECkCEDcCDCAaIBApAhw3AhggGiAQKQIoNwIkIBpBCGogEEEMaigCADYCACAaQRRqIBBBGGooAgA2AgAgGkEgaiAQQSRqKAIANgIAIBpBLGogEEEwaigCADYCACAaQTBqIApBrAH8CgAAIBogPzgC3AEgEEHgAWokAAwBC0EEIAUQnwEACyADIBpB4AH8CgAAIANB4AFqIQMgBEEMaiEEIAdBAWsiBw0ACwsgBiAXNgKIASAGIA02AoQBIAYgJjYCgAFBgMb9FEEEELgBIgMEQCAGQQA2ApQBIAYgAzYCkAEgBkHAhD02AowBIAZBADoArAEgBiAiNgKoASAGQQA2AqQBIAZBmAFqIQtBACEFQQAhCCMAQeAAayIHJABBBCEEAkACQAJAAkAgBkGkAWoiAy0ACCINDQAgAygCBCIFIAMoAgAiCUkEQEEAIQUMAQsgBSAJayIPQQFqIgVFDQEgBUEYbCEJIA9B1KrVKksNAiAJRQRAQQAhBQwBC0EEIQggCUEEELgBIgRFDQILIAdBADYCFCAHIAQ2AhAgByAFNgIMIAdBFGoCfwJ/AkACQCANDQAgAygCBCIJIAMoAgAiA0kNACAJIANrIghBAWoiDQRAIAUgDUkNAkEADAMLIAdBADYCWCAHQQE2AkwgB0HglsAANgJIIAdCBDcCUCAHQcgAakH4lsAAEI0BAAtBAAwCCyAHQQxqQQAgDUEEQRgQUyAHKAIQIQQgBygCFAshBSADIAlJBEAgBSAJaiADayAEIAVBGGxqIQUgB0E4aiEJA0AgCUIANwIAIAlBCGpCADcCACAHQoCAgICAATcCMCAHQTBqQYCAARAPIAdBKGogB0FAaykCACJQNwMAIAdBIGogCSkCACJRNwMAIAcgBykCMCJSNwMYIAVBEGogUDcCACAFQQhqIFE3AgAgBSBSNwIAIAVBGGohBSAIQQFrIggNAAshBQsgB0HQAGoiCEIANwIAIAdB2ABqIglCADcCACAHQoCAgICAATcCSCAHQcgAakGAgAEQDyAEIAVBGGxqIgNBEGogCSkCADcCACADQQhqIAgpAgA3AgAgAyAHKQJINwIAIAVBAWoLIgM2AgAgC0EIaiADNgIAIAsgBykCDDcCACAHQeAAaiQADAILIAdBADYCWCAHQQE2AkwgB0HglsAANgJIIAdCBDcCUCAHQcgAakHolsAAEI0BAAsgCCAJEJ8BAAsgBigCoAEiAwRAIAYoApwBIgcgA0EYbGohCCAHQRhqIQQDQCAEIQUgByAHKAIMQQFqIgM2AgwgA0UEQAJAIAcoAggiA0UNACAHKAIEIgshBCADQQR0Ig1BEGsiCUHwAHFB8ABHBEBBACAJQQR2QQFqQQdxayEDA0AgBEEMakEANgIAIARBEGohBCADQQFqIgMNAAsLIAlB8ABJDQAgCyANaiEDA0AgBEH8AGpBADYCACAEQewAakEANgIAIARB3ABqQQA2AgAgBEHMAGpBADYCACAEQTxqQQA2AgAgBEEsakEANgIAIARBHGpBADYCACAEQQxqQQA2AgAgBEGAAWoiBCADRw0ACwsgB0EBNgIMCyAHQQA2AhQgBUEYQQAgBSAIRxtqIQQgBSIHIAhHDQALCyAGQQA2ArgBIAZCgICAgMAANwKwASAGIBsqAjAiPjgCvAEgJCoCACE/ICQqAgQhQiAGKgJAIT0gBioCRCFAIAYgGyoCGDgCwAEgBiAbKgIsIkE4AsQBIAYgGyoCHDgCyAEgBiAbKgIgOALMASAGIBsqAig4AtABIAYoAnAEQCA/ID2TIj8gP5QgQiBAkyI/ID+UkpFDAAAAACE/AkAgBigCbCIDQQhqKAIAIgVFDQAgA0EEaigCACIEIAVBGGxqIQMgPiAGKgJIlCFEA0ACQCAEQRVqLQAARQRAIAQqAgAgPZMiPiA+lCAEQQRqKgIAIECTIj4gPpSSIkMgRCAEQQhqKgIAkiI+ID6UXw0BCyAEQRhqIgQgA0cNAQwCC0MAAAAAQwAAgD8gQ5EgPpWTIj4gPkMAAAAAXRtDAAAQQZRDAACAP5IiPiA/ID4gP14bIT8gBEEYaiIEIANHDQALCyBBQwAAgD9DAAAAACA/QwAAAABeIgUblJIhPyAGKgJUIT4gBioCUCFCIAYoApQBIgQgBigCjAFGBEAgBkGMAWoQcAsgBigCkAEgBEEsbGoiAyAdOgAoIAMgBTYCJEEAIQcgA0EANgIgIAMgPzgCHCADID44AhggAyBCOAIUIAMgQDgCECADID04AgwgA0EANgIIIANCgICAgHA3AgAgBiAEQQFqNgKUASAGKAK4ASIDIAYoArABRgRAIAZBsAFqEHALIANBLGwiCCAGKAK0AWoiBCAdOgAoIAQgBTYCJCAEQQA2AiAgBCA/OAIcIAQgPjgCGCAEIEI4AhQgBCBAOAIQIAQgPTgCDCAEQQA2AgggBEKAgICAcDcCACAGIANBAWo2ArgBIAZB2AJqIgkgCCAGKAK0ASIFaiIEQQhqKQIANwMAIAZB4AJqIgggBEEQaikCADcDACAGQegCaiILIARBGGooAgA2AgAgBkGYAmoiDSAEQShqKAIANgIAIAYgBCkCADcD0AIgBiAEKQIgNwOQAiAEKgIcIT8CQCADRQ0AA0AgBSADQQFrIg9BAXYiB0EsbGoiBEEcaioCACA/XkUEQCADIQcMAgsgBSADQSxsaiIDIAQpAgA3AgAgA0EoaiAEQShqKAIANgIAIANBIGogBEEgaikCADcCACADQRhqIARBGGopAgA3AgAgA0EQaiAEQRBqKQIANwIAIANBCGogBEEIaikCADcCACAHIQMgD0EBSw0ACwsgBSAHQSxsaiIDIAYpA9ACNwIAIAMgPzgCHCADIAYpA5ACNwIgIANBGGogCygCADYCACADQRBqIAgpAwA3AgAgA0EIaiAJKQMANwIAIANBKGogDSgCADYCACAGQwAAgD8gGyoCOCI/lTgC1AEgBkMAAIA/ID8gP5KVOALYASAbLQA9IQMgBiAGQdgBajYC4AEgBiAGQdQBajYC3AEgBkHkAWogBkGwAWoQDCAGLQCMAkEIRgRAIAZBADYC2AIgBkKAgICAwAA3AtACDAYLIAZByABqIRxDrkdhP0PNzEw/IAMbIUtDhetRP0MzMzM/IAMbIUxB6AcgIkH0A2wiAyADQegHTRtBAWshJiAGQbQCaiEjIAZBsAJqIRAgBkGgAmohJyAGQZwCaiEqIAZBvARqIStBACEPQQAhCAJAAkADQCAGQbgCaiAGQYwCaigCADYCACAQIAZBhAJqKQIANwMAIAZBqAJqIAZB/AFqKQIANwMAIAZBoAJqIAZB9AFqKQIANwMAIAZBmAJqIAZB7AFqKQIAIlA3AwAgBiAGKQLkATcDkAIgUKciCiAiTw0HAkACQAJAIAYoAnAiAyAKSwRAIAogBigCiAEiA08NASAKQQFqIhMgA08NAiAGKAKEASEFQwAAgD8hQSAGKgKcAiI+IAYqAggiP2BFDQMgPiA/IAYqAhCSX0UNAyAGKgKgAiJCIAYqAgwiP2BFDQMgQiA/IAYqAhSSX0UNAyAGKAJsIAYqAkghQCAGKAIkIgMEQCADQRRsIQMgBigCICEEIEIgQJIhPyBCIECTIT0gPiBAkiFEID4gQJMhQwNAAkAgQyAEKgIAIkVgRQ0AIEQgRSAEQQhqKgIAkl9FDQAgPSAEQQRqKgIAIkVgRQ0AID8gRSAEQQxqKgIAkl8NBgsgBEEUaiEEIANBFGsiAw0ACwsgCkEMbGoiA0EIaigCACIHRQRAQwAAgD9DAACAPxCWASFBDAQLIANBBGooAgAiBCAHQRhsaiEHIEBDAAAWQ5IhQUMAAAAAIT8gBCEDA0ACQCADQRVqLQAADQAgA0EUai0AAEGzAUcNACADKgIAID6TIj0gPZQgA0EEaioCACBCkyI9ID2UkiJEIEEgA0EIaioCAJIiPSA9lF9FDQBDAAAAAEMAAIA/IESRID2VkyI9ID1DAAAAAF0bQwAAEEGUQwAAgD+SIj0gPyA9ID9eGyE/CyADQRhqIgMgB0cNAAtDAAAAACE9IEBDAADIQpIhQQNAAkAgBEEVai0AAA0AIARBFGotAABB5QFHDQAgBCoCACA+kyJAIECUIARBBGoqAgAgQpMiQCBAlJIiRCBBIARBCGoqAgCSIkAgQJRfRQ0AQwAAAABDAACAPyBEkSBAlZMiQCBAQwAAAABdG0MAABBBlEMAAIA/kiJAID0gPSBAXRshPQsgBEEYaiIEIAdHDQALIExDAACAPyA/QwAAAABeGyBLQwAAgD8gPUMAAAAAXhsQlgEhQQwDCyAKIANBoI7AABB0AAsgCiADQbCOwAAQdAALIBMgA0HAjsAAEHQACyAGIEEgBioCTJQ4AsACIAYgBioCpAIgBioCZCI/lDgCxAIgBiA/IAYqAqgClDgCyAIgBiATNgLMAkHAAkEIELgBIgMEQCAGQQA2ArwEIAYgAzYCuAQgBkEINgK0BCAGIBs2ArADIAYgJDYCpAMgBiAFIBNB4AFsajYCjAMgBiAFIApB4AFsajYCiAMgBiAgNgKAAyAGIBw2AvwCIAYgIzYC+AIgBiAQNgL0AiAGICc2AvACIAYgKjYC7AIgBiAGQdwBajYCtAMgBiAGQcQBajYCrAMgBiAGQcABajYCqAMgBiAGQYABajYCoAMgBiAGQeQAajYCnAMgBiAGQegAajYCmAMgBiAGQcwCajYClAMgBiAGQdABajYCkAMgBiAGQbwBajYChAMgBiAGQcgCajYC6AIgBiAGQcQCajYC5AIgBiAGQcgBajYC4AIgBiAGQcwBajYC3AIgBiAGQcACajYC2AIgBkHYjsAANgLUAiAGQdCOwAA2AtACIAYgAzYCyAQgBkEANgLEBCAGICs2AsAEIwBBEGsiCSQAIAZBwARqIgUoAgQhAyAFKAIAISwCQAJAIAZB0AJqIgQoAgAiByAEKAIEIgtHBEAgBCgCZCEMIAQoAmAhLSAEKAJcIS8gBCgCWCEwIAQoAlQhFyAEKAJQIRUgBCgCTCExIAQoAkghMiAEKAJEIRQgBCgCQCEYIAQoAjwhGiAEKAI4ITMgBCgCNCE0IAQoAjAhDSAEKAIsIRkgBCgCKCE1IAQoAiQhNiAEKAIgITcgBCgCHCE4IAQoAhghOSAEKAIUITogBCgCECE7IAQoAgwhPCAEKAIIIR0gCyAHayEeIAUoAgggA0EobGohBQNAIB0qAgAiQCFBQwAAAAAhPwJAAkACQAJAAkACQAJAAkAgBy0AACIEQQFrDgcAAQIDBAUGBwtDAAAAACFBIEAhPwwGCyBAjCE/QwAAAAAhQQwFCyBAjCFBDAQLIEAhPwwDCyBAjCFBIEAhPwwCCyBAjCE/DAELIECMIkEhPwsgPyA5KgIAkiE/AkAgQSA6KgIAkiJEiyI9IEBeRQRAID1DbxKDOl1FDQFDAAAAACFEDAELIEBDAADAf0MAAIA/IESYIEQgRFwblCFECyAEQQRJIQsCQCA/iyI9IEBeRQRAID1DbxKDOl1FDQFDAAAAACE/DAELIEBDAADAf0MAAIA/ID+YID8gP1wblCE/CyA8IDsgCxsgPyA3KgIAIkKSIUECQCANKgIYIj4gRCA4KgIAIkOSIkUgGSoCACI9k15FBEAgPiANKgIgkiI+IEUgPZJdRQ0BID4gPZMhRQwBCyA9ID6SIUULKgIAIU0CQCANKgIcIj4gQSA9k15FBEAgPiANKgIkkiI+IEEgPZJdRQ0BID4gPZMhQQwBCyA9ID6SIUELIAkgMyAaIEMgRZJDAAAAP5QgQiBBkkMAAAA/lCBFIEEgRCBElCA/ID+UkpFDzczMPZQgPSA0KgIAlJIiSRACIAktAAgiCyAJLQAJRyEOAn1DAAAAACAJKgIEIAkqAgAQlgEiPbxB/////wdxQYCAgPwHTw0AGiAYKgIAIj5DAABIQpQgPSA+lJNDAAAAAJIgPUMAAAAAXkUNABogPiA9QwAAgD+SlUMAAAAAkgshSCALIA5yIQsCQCAUKAIAQQFqIg4gMigCCE8NACAZKgIAIUYgMSoCACFCQwAAAAAhPSAdKgIAIj4hQwJAAkACQAJAAkACQAJAAkAgBEEBaw4HAAECAwQFBgcLQwAAAAAhQyA+IT0MBgsgPowhPUMAAAAAIUMMBQsgPowhQwwECyA+IT0MAwsgPowhQyA+IT0MAgsgPowhPQwBCyA+jCI9IUMLIEIgP5QgPZIhPQJAIEIgRJQgQ5IiQosiQyA+XkUEQCBDQ28SgzpdRQ0BQwAAAAAhQgwBCyA+QwAAwH9DAACAPyBCmCBCIEJcG5QhQgsCQCA9iyJDID5eRQRAIENDbxKDOl1FDQFDAAAAACE9DAELID5DAADAf0MAAIA/ID2YID0gPVwblCE9CyBBID2SIUcCQAJAIA0qAhgiPiBFIEKSIkMgRpNeRQRAID4gDSoCIJIiPiBGIEOSXUUNASA+IEaTIUNDAAAAACE+IEJDAAAAAF5FDQEMAgsgRiA+kiFDQwAAAAAhPiBCQwAAAABdDQELIEIhPgsCQAJAIA0qAhwiQiBHIEaTXkUEQCBCIA0qAiSSIkIgRiBHkl1FDQEgQiBGkyFHQwAAAAAhQiA9QwAAAABeRQ0BDAILIEYgQpIhR0MAAAAAIUIgPUMAAAAAXQ0BCyA9IUILIAkgQjgCDCAJID44AgggCSBHOAIEIAkgQzgCACAOIBUoAggiLk8NAyAJIBogFSgCBCAOQeABbGogRSAJKgIAIj2SQwAAAD+UIEEgCSoCBCI+kkMAAAA/lCA9ID4gSRACIAsgCS0ACCIOIAktAAlHIA5yciELIAkqAgQgCSoCABCWASI9vEH/////B3FB////+wdLDQAgGCoCACE+ID1DAAAAAF5FBEAgSCA+QwAAyEGUID4gPZRDAABAv5SSkiFIDAELIEggPkMAAEA/lCA9QwAAgD+SlZIhSAsgDEEEaigCACoCACE9IAwoAgAqAgAhPiAtKgIkIUIgFCgCACEOIC8qAgAhQyAwKgIAIUYgFyoCACFHIBcqAgQhSSA2KgIAIUogNSgCACEuIAVBJGogBDoAACAFQSBqIC4gC0EBcWoiBDYCACAFQRxqIEogQCBNlJIiQDgCACAFQRRqID84AgAgBUEQaiBEOAIAIAVBDGogQTgCACAFQQhqIEU4AgAgBUEYaiBIIEMgBLOUIEAgRiBHIEWTIkAgQJQgSSBBkyJAIECUkpGUkpIgQiAOs5SSkjgCACBBID6UEHYhQCAFQf//P0GBgEAgRSA+lBB2/AAiBCAEQYGAQEwbIgQgBEH//z9OG0H//z9qrUIrhkH//z9BgYBAIED8ACIEIARBgYBATBsiBCAEQf//P04bQf//P2qtQhaGhEH/B0GBeCA/ID2UEHb8ACIEIARBgXhMGyIEIARB/wdOG0H/B2qthEH/B0GBeCBEID2UEHb8ACIEIARBgXhMGyIEIARB/wdOG0H/B2qtQguGhDcDACAHQQFqIQcgBUEoaiEFIANBAWohAyAeQQFrIh4NAAsLICwgAzYCACAJQRBqJAAMAQsgDiAuQdydwAAQdAALIBMgBigCoAEiA08NByAIQQFqIQ4gBigCtAQhFCAGKAK4BCIFIAYoArwEQShsaiEZIAYoApwBIBNBGGxqIRcgBSELA0ACQAJAAkAgCyIDIBlGDQAgAy0AJCIYQQhGDQAgA0EoaiELIAMqAhghPyAXKAIMIR0gFygCBCEeIBcoAgghDEEAIRUgFygCECIHIAMpAwAiUEIhiCBQhULNmdbq/vrrqH9+IlFCIYggUYVC09iX1OG/rudEfiJRQiGIIFGFpyIacSINIQQDQCAEIAxPDQcgHiAEQQR0aiIJKAIMIB1HDQMgCSkDACBQUQ0CIARBAWogB3EhBCAVQQFqIhUgB00NAAsMAgsgFARAIAUgFEEobEEIELYBCyAIICZGDQsgBkHkAWogBkGwAWoQDCAOIQggBi0AjAJBCEcNBAwLCyAJKgIIID9fDQELIAMqAgghPSADKgIMIUAgAyoCECE+IAMqAhQhQiADKgIcIUEgAygCICEVIBcoAhRBCmxBCmogDEEHbE8EQCAXIAxBAXQQDyAXKAIIIQwgFygCECIHIBpxIQ0LAkACQCAMIA1LBEAgFygCDCEJQQAhBANAIBcoAgQgDUEEdGoiAygCDCAJRw0CIAMpAwAgUFENAyAHIARBAWoiBE8EfyANQQFqIAdxBSAXIAxBAXQQDyAXIBcoAgxBAWoiCTYCDCAXKAIIIQwgCUUEQAJAIAxFDQAgFygCBCIJIQQgDEEEdCINQRBrIgNB8ABxQfAARwRAQQAgA0EEdkEBakEHcWshBwNAIARBDGpBADYCACAEQRBqIQQgB0EBaiIHDQALCyADQfAASQ0AIAkgDWohAwNAIARB/ABqQQA2AgAgBEHsAGpBADYCACAEQdwAakEANgIAIARBzABqQQA2AgAgBEE8akEANgIAIARBLGpBADYCACAEQRxqQQA2AgAgBEEMakEANgIAIARBgAFqIgQgA0cNAAsLIBdBATYCDEEBIQkLQQAhBCAXQQA2AhQgFygCECIHIBpxCyINIAxJDQALCyANIAxByJDAABB0AAsgFyAXKAIUQQFqNgIUCyADIAk2AgwgAyA/OAIIIAMgUDcDACAGKAKQAiEJIAYoApQBIgMgBigCjAFGBEAgBkGMAWoQcAsgBigCkAEgA0EsbGoiBCAYOgAoIAQgFTYCJCAEIEE4AiAgBCA/OAIcIAQgQjgCGCAEID44AhQgBCBAOAIQIAQgPTgCDCAEIBM2AgggBCAJNgIEIAQgAzYCACAGIANBAWoiBDYClAEgAyAPSQ0EAkAgBigCkAEgD0EsbGoiBCgCCCIHIApLBEAgByATRw0BID8gBCoCHF1FDQELIAMhDwsgBigCuAEiByAGKAKwAUYEQCAGQbABahBwCyAHQSxsIg0gBigCtAFqIgQgGDoAKCAEIBU2AiQgBCBBOAIgIAQgPzgCHCAEIEI4AhggBCA+OAIUIAQgQDgCECAEID04AgwgBCATNgIIIAQgCTYCBCAEIAM2AgAgBiAHQQFqNgK4ASAGQdgCaiIMIAYoArQBIgkgDWoiA0EIaikCADcDACAGQeACaiIVIANBEGopAgA3AwAgBkHoAmoiGCADQRhqKAIANgIAIAZByARqIhogA0EoaigCADYCACAGIAMpAgA3A9ACIAYgAykCIDcDwAQgAyoCHCE/AkAgB0UEQEEAIQ0MAQsDQCAJIAdBAWsiHUEBdiINQSxsaiIDQRxqKgIAID9eRQRAIAchDQwCCyAJIAdBLGxqIgQgAykCADcCACAEQShqIANBKGooAgA2AgAgBEEgaiADQSBqKQIANwIAIARBGGogA0EYaikCADcCACAEQRBqIANBEGopAgA3AgAgBEEIaiADQQhqKQIANwIAIA0hByAdQQFLDQALCyAJIA1BLGxqIgMgBikD0AI3AgAgAyA/OAIcIAMgBikDwAQ3AiAgA0EYaiAYKAIANgIAIANBEGogFSkDADcCACADQQhqIAwpAwA3AgAgA0EoaiAaKAIANgIADAALAAsLQQhBwAIQnwEACyAEIAxBuJDAABB0AAsgDyAEQeiOwAAQdAALQQBBAEGQjsAAEHQAC0EEQYDG/RQQnwEACyAHIAMQnwEACyATIANB2I7AABB0AAtBACEHIAZBADYC2AIgBkKAgICAwAA3AtACIA9FDQBBZCEDA0AgDyAGKAKUASIETw0CIAYoApABIA9BLGxqIgQoAiQhCCAELQAoIQkgBCoCICE/IAQqAhghPSAEKgIUIUAgBCoCECE+IAQqAgwhQiAEKAIEIQ8gBigC0AIgB0YEQCMAQRBrIgQkACAEQQRqIAZB0AJqIgUoAgAiCyAFKAIEQQQgC0EBdCILIAtBBE0bIgtBBEEcEFIgBCgCBEEBRgRAIAQoAgggBCgCDBCfAQALIAQoAgghDSAFIAs2AgAgBSANNgIEIARBEGokAAsgBigC1AIgA2oiBEE0aiAJOgAAIARBMGogCDYCACAEQSxqID84AgAgBEEoaiA9OAIAIARBJGogQDgCACAEQSBqID44AgAgBEEcaiBCOAIAIAYgB0EBaiIHNgLYAiADQRxqIQMgDw0ACyAHQQJJDQAgBigC1AIhCCAHQQF2IQlBACEMA0AgCCAMaiIEKAAAIQcgBCADIAhqIgUoAAA2AAAgBSAHNgAAIAVBBGoiBygAACELIAcgBEEEaiIHKAAANgAAIAcgCzYAACAEQQhqIgcoAAAhCyAHIAVBCGoiBygAADYAACAHIAs2AAAgBUEMaiIHKAAAIQsgByAEQQxqIgcoAAA2AAAgByALNgAAIARBEGoiBygAACELIAcgBUEQaiIHKAAANgAAIAcgCzYAACAFQRRqIgcoAAAhCyAHIARBFGoiBygAADYAACAHIAs2AAAgBEEYaiIEKAAAIQcgBCAFQRhqIgQoAAA2AAAgBCAHNgAAIANBHGshAyAMQRxqIQwgCUEBayIJDQALCyAoIAYpAtACNwIAIChBCGogBkHYAmooAgA2AgAgBigCsAEiAwRAIAYoArQBIANBLGxBBBC2AQsgBigCnAEhBSAGKAKgASIDBEAgBSEEA0AgBCgCACIHBEAgBEEEaigCACAHQQR0QQgQtgELIARBGGohBCADQQFrIgMNAAsLIAYoApgBIgMEQCAFIANBGGxBBBC2AQsgBigCjAEiAwRAIAYoApABIANBLGxBBBC2AQsgBkGAAWoiAygCCCIEBEAgAygCBCEDA0AgAygCACIFBEAgA0EEaigCACAFQQJ0QQQQtgELIANBDGooAgAiBQRAIANBEGooAgAgBUECdEEEELYBCyADQRhqKAIAIgUEQCADQRxqKAIAIAVBAnRBBBC2AQsgA0EkaigCACIFBEAgA0EoaigCACAFQQEQtgELIANBMGooAgAiBQRAIANBNGooAgAgBUEFdEEEELYBCyADQTxqKAIAIgUEQCADQUBrKAIAIAVBAnRBBBC2AQsgA0HIAGooAgAiBQRAIANBzABqKAIAIAVBAnRBBBC2AQsgA0HUAGooAgAiBQRAIANB2ABqKAIAIAVBAnRBBBC2AQsgA0HgAGooAgAiBQRAIANB5ABqKAIAIAVBAnRBBBC2AQsgA0HsAGooAgAiBQRAIANB8ABqKAIAIAVBAnRBBBC2AQsgA0H4AGooAgAiBQRAIANB/ABqKAIAIAVBAnRBBBC2AQsgA0GEAWooAgAiBQRAIANBiAFqKAIAIAVBAnRBBBC2AQsgA0GQAWooAgAiBQRAIANBlAFqKAIAIAVBAnRBBBC2AQsgA0GcAWooAgAiBQRAIANBoAFqKAIAIAVBAnRBBBC2AQsgA0GoAWooAgAiBQRAIANBrAFqKAIAIAVBAnRBBBC2AQsgA0G0AWooAgAiBQRAIANBuAFqKAIAIAVBAnRBBBC2AQsgA0HAAWooAgAiBQRAIANBxAFqKAIAIAVBBHRBBBC2AQsgA0HgAWohAyAEQQFrIgQNAAsLIAYoAoABIgMEQCAGKAKEASADQeABbEEEELYBCyASBEAgESASQRhsQQQQtgELIAYoAnAiAwRAIAYoAmwhBANAIAQoAgAiBQRAIARBBGooAgAgBUEYbEEEELYBCyAEQQxqIQQgA0EBayIDDQALCyAGKAJoIgMEQCAGKAJsIANBDGxBBBC2AQsgBigCKCIDBEAgBigCLCADQRhsQQQQtgELIAYoAjQiAwRAIAYoAjggA0EYbEEEELYBCyAGKAIcIgMEQCAGKAIgIANBFGxBBBC2AQsgBkHQBGokAAwBCyAPIARB+I7AABB0AAsgFigC/AIiBARAIBYoAvgCIgshBSMAQRBrIgMkAAJAIARBHGwiBEEBELgBIgcEQCADQQA2AgwgAyAHNgIIIAMgBDYCBCAEIAVqIQ1BACEEA0AgBSgCACEHIAMoAgQgBGtBA00EQCADQQRqIARBBEEBQQEQUyADKAIMIQQLIAMoAgggBGogBzYAACADIARBBGoiBDYCDCAFQQRqKAIAIQcgAygCBCAEa0EDTQRAIANBBGogBEEEQQFBARBTIAMoAgwhBAsgAygCCCAEaiAHNgAAIAMgBEEEaiIENgIMIAVBCGooAgAhByADKAIEIARrQQNNBEAgA0EEaiAEQQRBAUEBEFMgAygCDCEECyADKAIIIARqIAc2AAAgAyAEQQRqIgQ2AgwgBUEMaigCACEHIAMoAgQgBGtBA00EQCADQQRqIARBBEEBQQEQUyADKAIMIQQLIAMoAgggBGogBzYAACADIARBBGoiBDYCDCAFQRBqKAIAIQcgAygCBCAEa0EDTQRAIANBBGogBEEEQQFBARBTIAMoAgwhBAsgAygCCCAEaiAHNgAAIAMgBEEEaiIJNgIMIAVBGGotAAAhDyADKAIEIAlGBEAjAEEQayIHJAAgB0EEaiADQQRqIggoAgAiESAIKAIEQQggEUEBdCIRIBFBCE0bIhEQYyAHKAIEQQFGBEAgBygCCCAHKAIMEJ8BAAsgBygCCCESIAggETYCACAIIBI2AgQgB0EQaiQACyADKAIIIAlqIA86AAAgAyAEQQVqIgQ2AgwgAygCBCAEa0ECTQRAIANBBGogBEEDQQFBARBTIAMoAgwhBAsgAygCCCAEaiIHQQA7AAAgB0ECakEAOgAAIAMgBEEDaiIENgIMIAVBFGooAgAhByADKAIEIARrQQNNBEAgA0EEaiAEQQRBAUEBEFMgAygCDCEECyADKAIIIARqIAc2AAAgAyAEQQRqIgQ2AgwgBUEcaiIFIA1HDQALIB8gAykCBDcCACAfQQhqIANBDGooAgA2AgAgA0EQaiQADAELQQEgBBCfAQALIBYoAvQCIgMEQCALIANBHGxBBBC2AQsgFkHQAWoQdSAWKAIsQYCAgIB4RgRAIBZBLGoQZgsCQCAWQRhqIgQoAgQiA0UNACADIANBA3QiBWpBEWoiA0UNACAEKAIAIAVrQQhrIANBCBC2AQsMAwsgFigC9AIiAwRAIBYoAvgCIANBHGxBBBC2AQsgFkHQAWoQdSAfQQA2AgggH0KAgICAEDcCACAWKAIsQYCAgIB4Rw0BCyAWQSxqEGYLIBYoAhwiA0UNACADIANBA3QiBGpBEWoiA0UNACAWKAIYIARrQQhrIANBCBC2AQsgFkGAA2okACACBEAgASACQQEQtgELIAAgACgCAEEBazYCACApICkoAgBBAWsiADYCACAARQRAICFBEGoQegsCQCAhKAIUIgIgISgCHCIATQRAICEoAhghAQwBCyAhKAIYIQMgAEUEQEEBIQEgAyACQQEQtgEMAQsgAyACQQEgABCwASIBRQ0ECyAlIAA2AgQgJSABNgIAICFBIGokAAwECxC6AQsACxC7AQALQQEgABCfAQALICUoAgAgJSgCBCAlQRBqJAALIQACQCABIAMQoAEEQCAAIAEgAyACELABIgANAQsACyAACy0AIABBHGpBACABKQIAQvz6r5TzyvmreYUgASkCCEKCvpP6u5zS869/hYRQGwsuACAAQRxqQQAgASkCAELtuq22zYXU9eMAhSABKQIIQviCmb2V7sbFuX+FhFAbCygBAX8gACgCACIBQYCAgIB4ckGAgICAeEcEQCAAKAIEIAFBARC2AQsLCgBBCCAAEMsBAAsaAQF/IAAoAgAiAQRAIAAoAgQgAUEBELYBCwsgACABIAAoAgAtAABBAnQiACgCuLhAIAAoAqS4QBCkAQsUACAAIAAgASAAIAFdGyABIAFcGwsfACAAQQhqQeiYwAApAgA3AgAgAEHgmMAAKQIANwIACx8AIABBCGpB+JjAACkCADcCACAAQfCYwAApAgA3AgALHwAgAEEIakGImcAAKQIANwIAIABBgJnAACkCADcCAAsfACAAQQhqQZiZwAApAgA3AgAgAEGQmcAAKQIANwIACx8AIABBCGpBzJzAACkCADcCACAAQcScwAApAgA3AgALHwAgAEEIakHcnMAAKQIANwIAIABB1JzAACkCADcCAAsfACAAQQhqQfyiwAApAgA3AgAgAEH0osAAKQIANwIACx8AIABBCGpBjKPAACkCADcCACAAQYSjwAApAgA3AgALRQAgAARAIAAgARDLAQALIwBBIGsiACQAIABBADYCGCAAQQE2AgwgAEGUusAANgIIIABCBDcCECAAQQhqQZy6wAAQjQEACxUAIAFpQQFGIABBgICAgHggAWtNcQsWACAAQbCZwAA2AgQgACABQRxqNgIACxYAIABB7JnAADYCBCAAIAFBHGo2AgALEAAgAQRAIAAgASACELYBCwsWACAAKAIAIAEgAiAAKAIEKAIMEQIACxQAIAAoAgAgASAAKAIEKAIQEQAAC5wHAQN/IwBB8ABrIgUkACAFIAM2AgwgBSACNgIIAn8CQAJAIAFBgQJPBEBB/QEhBgNAAkAgACAGaiIHQQNqLAAAQb9/TARAIAdBAmosAABBv39MDQEgBkECaiEGDAULIAZBA2ohBgwE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dGhyZWFkcy5ycwBDOlxVc2Vyc1xleG9cLnJ1c3R1cFx0b29sY2hhaW5zXHN0YWJsZS14ODZfNjQtcGMtd2luZG93cy1tc3ZjXGxpYi9ydXN0bGliL3NyYy9ydXN0XGxpYnJhcnkvc3RkL3NyYy9zeXMvc3luYy9vbmNlL25vX3RocmVhZHMucnMAQzpcVXNlcnNcZXhvXC5jYXJnb1xyZWdpc3RyeVxzcmNcaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2ZcYW55aG93LTEuMC4xMDBcc3JjXGVycm9yLnJzAGxpYnJhcnkvY29yZS9zcmMvbnVtL2RlYzJmbHQvZGVjaW1hbF9zZXEucnMAQzpcVXNlcnNcZXhvXC5ydXN0dXBcdG9vbGNoYWluc1xzdGFibGUteDg2XzY0LXBjLXdpbmRvd3MtbXN2Y1xsaWIvcnVzdGxpYi9zcmMvcnVzdFxsaWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAC9ydXN0Yy9kZWQ1YzA2Y2YyMWQyYjkzYmZmZDVkODg0YWE2ZTk2OTM0ZWU0MjM0L2xpYnJhcnkvY29yZS9zcmMvc3RyL3BhdHRlcm4ucnMAL3J1c3RjL2RlZDVjMDZjZjIxZDJiOTNiZmZkNWQ4ODRhYTZlOTY5MzRlZTQyMzQvbGlicmFyeS9jb3JlL3NyYy9vcHMvZnVuY3Rpb24ucnMAc3JjXHByb3RvY29sLnJzAGxpYnJhcnkvc3RkL3NyYy9zeW5jL2xhenlfbG9jay5ycwBDOlxVc2Vyc1xleG9cLnJ1c3R1cFx0b29sY2hhaW5zXHN0YWJsZS14ODZfNjQtcGMtd2luZG93cy1tc3ZjXGxpYi9ydXN0bGliL3NyYy9ydXN0XGxpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5ycwBDOlxVc2Vyc1xleG9cLmNhcmdvXHJlZ2lzdHJ5XHNyY1xpbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zlx3YXNtLWJpbmRnZW4tMC4yLjEwNlxzcmNcZXh0ZXJucmVmLnJzAGxpYnJhcnkvY29yZS9zcmMvbnVtL2RlYzJmbHQvcGFyc2UucnMAbGlicmFyeS9jb3JlL3NyYy91bmljb2RlL3ByaW50YWJsZS5ycwBzcmNccXVhZHRyZWUucnMAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5ycwBsaWJyYXJ5L3N0ZC9zcmMvYmFja3RyYWNlLnJzAC9ydXN0L2RlcHMvaGFzaGJyb3duLTAuMTUuNS9zcmMvcmF3L21vZC5ycwBsaWJyYXJ5L2NvcmUvc3JjL2ZtdC9tb2QucnMAbGlicmFyeS9zdGQvc3JjLy4uLy4uL2JhY2t0cmFjZS9zcmMvc3ltYm9saXplL21vZC5ycwBsaWJyYXJ5L2FsbG9jL3NyYy9yYXdfdmVjL21vZC5ycwBDOlxVc2Vyc1xleG9cLnJ1c3R1cFx0b29sY2hhaW5zXHN0YWJsZS14ODZfNjQtcGMtd2luZG93cy1tc3ZjXGxpYi9ydXN0bGliL3NyYy9ydXN0XGxpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnMAc3JjXGZpbmQucnMAQzpcVXNlcnNcZXhvXC5ydXN0dXBcdG9vbGNoYWluc1xzdGFibGUteDg2XzY0LXBjLXdpbmRvd3MtbXN2Y1xsaWIvcnVzdGxpYi9zcmMvcnVzdFxsaWJyYXJ5L2FsbG9jL3NyYy92ZWMvc3BlY19mcm9tX2l0ZXJfbmVzdGVkLnJzAC9ydXN0L2RlcHMvZGxtYWxsb2MtMC4yLjEwL3NyYy9kbG1hbGxvYy5ycwBsaWJyYXJ5L3N0ZC9zcmMvYWxsb2MucnMAL3J1c3QvZGVwcy9ydXN0Yy1kZW1hbmdsZS0wLjEuMjYvc3JjL2xpYi5ycwBzcmNcZGF0YS5ycwAvcnVzdC9kZXBzL3J1c3RjLWRlbWFuZ2xlLTAuMS4yNi9zcmMvdjAucnMAAMoFEAALAAAA+QIAABMAAADKBRAACwAAAB8DAAAjAAAAygUQAAsAAABXAwAALAAAAMoFEAALAAAAWAMAAC4AAADKBRAACwAAAFkDAAArAAAAAAECAwQFBgfKBRAACwAAACwEAAAuAAAAygUQAAsAAABFBAAAIQAAAMoFEAALAAAAVQQAABoAAADKBRAACwAAAP0CAAAXAAAAygUQAAsAAAD+AgAAHgAAAMoFEAALAAAAKQEAABkAAADKBRAACwAAAC0BAAAbAAAAygUQAAsAAAAvAQAAHgAAAMoFEAALAAAADgEAABkAAADKBRAACwAAAA4BAAApAAAAygUQAAsA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BgkDBAgBBAQFAwECBQUIAgAHBgYACQEDBAYHBAAHAgIGBQYCBQIJAQADCAMABAUGBwMDBwADBgEDAggBAgUBBAUFAQkBBQICCAMGBggFAQgABgYEAAYCBQcCBwUJBQcGAQQBCAMEAgUJAAMDAgADAQIFAwYDBwkHCAgABwAJAQcBAgkFAQYGAAEFBgIFAQgBCAkICQQAAwUEBQgFBgQHBQgDAAAHCAECBQkACQQJBAcAAQcHAgkCCAIDBwkBBQADCQAGAgUEBQQHBAcDBQAICAYEBgQBAQgJBQcFAQkFAwECBQICBwMHAwYHBQQEAwIDAgAFCQQHCAcFCQcGBQYCBQEBAwYIBggDBwcCAQYBBgACCQcDCQMHCQgIAggBAgUFBggEAwQBCAgGAAgACAABBAgGCQYICQkEAQQABgIFAggEAgEHAAkEAwAEAAQAAAcEAwQIBAQJBwAHAAMBAgUBBAIBAAgFBAcBBQIAAgAAAwcBBwQCAgQIBQMFAQUGAgUHAQAFBAIHAwUHBgABAAABCAUIBwEBAgQCBgcFBwgBAgUDBQUCBwEDBgcICAAABQAACQIJAwUFBgIBAwMHCAkABgIFAQcHBgMFBggDCQQAAAIFAAQGBAYHBwgBAAYGCAkEBQMBAgUICAgBBwgEAQkHAAABAgUCAwIDAwgJAAUDAwQEBwIGBQYCBQQEBAAICQIACQgFAAAGAgYBBgEGCQQFAgYGBwIDBgMCCAECBQICAgAEBAYABAkCBQADAQMACAAIBAcCBgMDAwYBCAEGBAAGAgUBAQEAAgIDAAIEBgIFAQUGBQQABAIDBgMBBgYIAAkACAIAAwECBQUFBQEBAQUBAgMBAgUHCAIHAAIBAQgBBQgDBAAEBQQBAAEFBgIFAgcHBQUFBwUGAQUGAggJAQMFAQAFCQAHCQEHAAICBwAFAAcIAQIFAQMIBwcHCAcIAAcIAQQEBQYHBQUCCQUDCQUIBQEBAwUCBQMJAAYCBQYJAwgICQMJAAMJAAcCAggDBwcGBAcGCQcJAgUFBgcGAgYJBQMBAgUDBAYJBAQGCQUBCQUDBgEEAQgICAIDCAQICQYCBwgDCAEDBAcGBQYCBQEHAwQHAgMEBwUJBwYIAAcACQQEAQEJAgQECAEDCQEJAAYHAwgCCAECBQgGBwMGAQcDBwkICAQAAwUEBwIABQkGAgIEAAYJ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"), A.n = 1, QI(g);
                            case 1:
                                EI = new _A("# PLAYER: 114\n# PELLET: 109\nAIBOT_ENEMY: 0\n# AIBOT_PROJECTILE: 1\n# BARRIER_DOME: 2\nBARRIER_ENEMY: 3\n# BLACK_HOLE_PROJECTILE: 4\nBLIND_ENEMY: 5\nBLOCKING_ENEMY: 6\n# BLOOM_PROJECTILE: 7\n# CACTUS_ENEMY: 8\nCHARGING_ENEMY: 9\nCONFECTIONER_ENEMY: 10\nCONFECTIONER_SWITCH_ENEMY: 11\nCORROSIVE_ENEMY: 12\nCORROSIVE_SNIPER_ENEMY: 13\nCORROSIVE_SNIPER_PROJECTILE: 14\n# CRUMBLE_PROJECTILE: 15\nCRUMBLING_ENEMY: 16\nCYBOT_ENEMY: 17\nCYBOT_RING_PROJECTILE: 18\nCYCLING_ENEMY: 19\nDABOT_ENEMY: 20\n# DABOT_PROJECTILE: 21\nDASHER_ENEMY: 22\nDASHER_SWITCH_ENEMY: 23\nDISABLING_ENEMY: 24\nDISABLING_GHOST_ENEMY: 25\nDISARMING_ENEMY: 26\nDORITO_ENEMY: 27\nDORITO_SWITCH_ENEMY: 28\nDRAINING_ENEMY: 29\nDRIPPING_ENEMY: 30\nEABOT_ENEMY: 31\n# EABOT_PROJECTILE: 32\n# ECHELON_PROJECTILE: 33\nELBOT_ENEMY: 34\n# ELBOT_PROJECTILE: 35\nELECTRICAL_ENEMY: 36\nELECTRICAL_ENEMY_PROJECTILE: 37\n# ENERGIZE_PROJECTILE: 38\nENLARGING_ENEMY: 39\nEXPERIENCE_DRAIN_ENEMY: 40\n# EXPLODIORB_ITEM: 41\n# FACTORB_EXPLOSION: 42\nFIBOT_ENEMY: 43\n# FIBOT_PROJECTILE: 44\nFIREFLY_ENEMY: 45\nFIRE_TRAIL_ENEMY: 46\nFLAMING_ENEMY: 47\n# FLASHLIGHT_ITEM: 48\nFLOWER_ENEMY: 49\n# FLOWER_PROJECTILE: 50\nFORCE_SNIPER_A_ENEMY: 51\nFORCE_SNIPER_A_PROJECTILE: 52\nFORCE_SNIPER_B_ENEMY: 53\nFORCE_SNIPER_B_PROJECTILE: 54\nFREEZING_ENEMY: 55\nFROST_GIANT_ENEMY: 56\n# FROST_GIANT_ICE_PROJECTILE: 57\nGLOWY_ENEMY: 58\nGRASS_ENEMY: 59\n# GRAVE_PROJECTILE: 60\nGRAVITY_ENEMY: 61\nGRAVITY_GHOST_ENEMY: 62\nHOMING_ENEMY: 63\nHOMING_SWITCH_ENEMY: 64\nICBOT_ENEMY: 65\nICE_GHOST_ENEMY: 66\nICE_SNIPER_ENEMY: 67\nICE_SNIPER_PROJECTILE: 68\nICICLE_ENEMY: 69\n# ICTOS_PROJECTILE: 70\n# IMAGE_BACKGROUND: 71\nIMMUNE_ENEMY: 72\n# INCINERATE_PROJECTILE: 73\nINFECTIOUS_ENEMY: 74\nINFINITY_ENEMY: 75\nINFINITY_SWITCH_ENEMY: 76\n# LATCH_PROJECTILE: 77\nLAVA_ENEMY: 78\nLEAD_SNIPER_ENEMY: 79\nLEAD_SNIPER_PROJECTILE: 80\n# LEAF_PROJECTILE: 81\nLIBOT_ENEMY: 82\n# LIBOT_PROJECTILE: 83\n# LIGHTNING_PROJECTILE: 84\n# LIGHT_REGION: 85\nLIQUID_ENEMY: 86\nLOST_SOUL_ENEMY: 87\nLOTUS_FLOWER_ENEMY: 88\nLUNGING_ENEMY: 89\nLURCHING_ENEMY: 90\nMAGNETIC_NULLIFICATION_ENEMY: 91\nMAGNETIC_REDUCTION_ENEMY: 92\nMEBOT_ENEMY: 93\n# MINIMIZE_PROJECTILE: 94\nMIST_ENEMY: 95\nMUTATING_ENEMY: 96\nNEGATIVE_MAGNETIC_GHOST_ENEMY: 97\nNEGATIVE_MAGNETIC_SNIPER_ENEMY: 98\nNEGATIVE_MAGNETIC_SNIPER_PROJECTILE: 99\nNETWORK_ERROR_ENEMY: 100\nNINJA_STAR_SNIPER_ENEMY: 101\nNINJA_STAR_SNIPER_PROJECTILE: 102\nNORMAL_ENEMY: 103\n# OBSCURE_PROJECTILE: 104\n# ORBIT_PROJECTILE: 105\nOSCILLATING_ENEMY: 106\nOSCILLATING_SWITCH_ENEMY: 107\n# PARTICLE_GENERATOR: 108\n# PELLET: 109\nPENNY_ENEMY: 110\nPENNY_SWITCH_ENEMY: 111\n# PETRIFY_PROJECTILE: 112\nPHANTOM_ENEMY: 113\n# PLAYER: 114\nPLBOT_ENEMY: 115\nPOISON_GHOST_ENEMY: 116\nPOISON_SNIPER_ENEMY: 117\nPOISON_SNIPER_PROJECTILE: 118\n# POLLINATE_PROJECTILE: 119\nPOSITIVE_MAGNETIC_GHOST_ENEMY: 120\nPOSITIVE_MAGNETIC_SNIPER_ENEMY: 121\nPOSITIVE_MAGNETIC_SNIPER_PROJECTILE: 122\nPOWERED_ENEMY: 123\nPREDICTION_SNIPER_ENEMY: 124\nPREDICTION_SNIPER_PROJECTILE: 125\nPUMPKIN_ENEMY: 126\nQUICKSAND_ENEMY: 127\nRADAR_ENEMY: 128\n# RADAR_PROJECTILE: 129\nRADIATING_BULLETS_ENEMY: 130\n# RADIATING_BULLETS_PROJECTILE: 131\n# RADIOACTIVE_GLOOP_PROJECTILE: 132\n# REANIMATE_PROJECTILE: 133\nREDUCING_ENEMY: 134\nREGEN_GHOST_ENEMY: 135\nREGEN_SNIPER_ENEMY: 136\nREGEN_SNIPER_PROJECTILE: 137\nREPELLING_ENEMY: 138\nREPELLING_GHOST_ENEMY: 139\nRESIDUE_ENEMY: 140\n# REVERSE_PROJECTILE: 141\nRING_SNIPER_ENEMY: 142\nRING_SNIPER_PROJECTILE: 143\nROBO_SCANNER_CORROSIVE_SNIPER_PROJECTILE: 144\nROBO_SCANNER_FIRE_TRAIL_PROJECTILE: 145\n# ROBO_SCANNER_FLOWER_PROJECTILE: 146\n# ROBO_SCANNER_FORCE_A_PROJECTILE: 147\n# ROBO_SCANNER_FORCE_B_PROJECTILE: 148\n# ROBO_SCANNER_FROST_GIANT_ICE_PROJECTILE: 149\nROBO_SCANNER_ICE_SNIPER_PROJECTILE: 150\nROBO_SCANNER_LEAD_SNIPER_PROJECTILE: 151\n# ROBO_SCANNER_LEAF_PROJECTILE: 152\nROBO_SCANNER_NEGATIVE_SNIPER_PROJECTILE: 153\nROBO_SCANNER_NINJA_STAR_SNIPER_PROJECTILE: 154\nROBO_SCANNER_POISON_SNIPER_PROJECTILE: 155\nROBO_SCANNER_POSITIVE_SNIPER_PROJECTILE: 156\nROBO_SCANNER_PREDICTION_SNIPER_PROJECTILE: 157\n# ROBO_SCANNER_RADAR_PROJECTILE: 158\n# ROBO_SCANNER_RADIATING_BULLETS_PROJECTILE: 159\nROBO_SCANNER_REGEN_SNIPER_PROJECTILE: 160\nROBO_SCANNER_RESIDUE: 161\nROBO_SCANNER_SNIPER_PROJECTILE: 162\nROBO_SCANNER_SOUR_CANDY_ITEM: 163\nROBO_SCANNER_SPARKING_PROJECTILE: 164\nROBO_SCANNER_SPEED_SNIPER_PROJECTILE: 165\nROBO_SCANNER_STALACTITE_PROJECTILE: 166\nROBO_SCANNER_SUMMONER_BLIND_ENEMY: 167\nROBO_SCANNER_VOID_SNIPER_PROJECTILE: 168\nROBO_SCANNER_VOID_SWARM_PROJECTILE: 169\nROBO_SCANNER_WIND_SNIPER_PROJECTILE: 170\nSANDROCK_ENEMY: 171\nSAND_ENEMY: 172\nSEEDLING_ENEMY: 173\n# SEEDLING_PROJECTILE: 174\n# SHADOW_PROJECTILE: 175\nSIZING_ENEMY: 176\nSLASHER_ENEMY: 177\nSLIPPERY_ENEMY: 178\nSLOWING_ENEMY: 179\nSNIPER_ENEMY: 180\nSNIPER_PROJECTILE: 181\nSNOWBALL_PROJECTILE: 182\nSNOWMAN_ENEMY: 183\n# SOUR_CANDY_ITEM: 184\nSPARKING_ENEMY: 185\nSPARKING_ENEMY_PROJECTILE: 186\n# SPARK_PROJECTILE: 187\nSPEED_GHOST_ENEMY: 188\nSPEED_SNIPER_ENEMY: 189\nSPEED_SNIPER_PROJECTILE: 190\nSPIRAL_ENEMY: 191\nSPIRAL_SWITCH_ENEMY: 192\nSTALACTITE_ENEMY: 193\nSTALACTITE_ENEMY_PROJECTILE: 194\nSTAR_ENEMY: 195\nSTATIC_ENEMY: 196\n# STREAM_PATH: 197\nSTUMBLING_ENEMY: 198\nSUMMONER_ENEMY: 199\nSUPERSTAR_ENEMY: 200\n# SWEET_TOOTH_ITEM: 201\nSWITCH_ENEMY: 202\nTELEPORTING_ENEMY: 203\nTHUNDERBOLT_ENEMY: 204\n# TORCH: 205\nTOXIC_ENEMY: 206\nTREE_ENEMY: 207\nTURNING_ENEMY: 208\nUMBREL_PROJECTILE: 209\n# VENGEANCE_PROJECTILE: 210\nVENGEFUL_SOUL_ENEMY: 211\nVOIDBORNE_DUMMY: 212\nVOID_CRAWLER_ENEMY: 213\nVOID_DRAIN_ENEMY: 214\nVOID_SNIPER_ENEMY: 215\nVOID_SNIPER_PROJECTILE: 216\nVOID_SWARM_ENEMY: 217\nVOID_SWARM_PROJECTILE: 218\nWABOT_ENEMY: 219\n# WABOT_PROJECTILE: 220\nWACKY_WALL_ENEMY: 221\nWALL: 222\nWALL_ENEMY: 223\nWAVY_ENEMY: 224\nWAVY_SWITCH_ENEMY: 225\nWIND_GHOST_ENEMY: 226\nWIND_SNIPER_ENEMY: 227\nWIND_SNIPER_PROJECTILE: 228\nWITHERING_ENEMY: 229\nZIGZAG_ENEMY: 230\nZIGZAG_SWITCH_ENEMY: 231\nZONING_ENEMY: 232\nZONING_SWITCH_ENEMY: 233\n", ""), console.log("TAS WASM Ready!"), A.n = 3;
                                break;
                            case 2:
                                A.p = 2, B = A.v, console.error("TAS WASM Init Error:", B), iI = !1;
                            case 3:
                                return A.a(2)
                        }
                    }, A, null, [
                        [0, 2]
                    ])
                }))())
        }()
    } catch (A) {
        console.error(A)
    }
    uA && JA && (JA.sequence || 0) !== pA && fA++, u(A)
});
var DI = function() {
    ! function() {
        if (IA && W && z && BA && k.viola_clone_auto_follow && IA.heroType == AA.Viola.id) {
            var A = Object.values(W.entities).filter(function(A) {
                return 167 == A.entityType
            })[0];
            if (A) {
                var I = Math.atan2(_[1] - e.innerHeight / 2, _[0] - e.innerWidth / 2),
                    g = IA.x + 10 * Math.cos(I),
                    B = IA.y + 10 * Math.sin(I);
                SA(Math.atan2(B - A.y, g - A.x))
            }
        }
    }(), f(DI)
};
f(DI);
var oI = function() {};
x("network_oriented_rendering", function(A) {
    A || e.requestAnimationFrame(oI)
}), O(e, "requestAnimationFrame", function(A, I, g) {
    if ("bound renderCanvas" != g[0].name || (oI = M.renderer = g[0], !k.network_oriented_rendering)) return A.apply(I, g)
}), e.WebSocket = function() {
    function A() {
        var I;
        o(this, A);
        for (var g = arguments.length, B = new Array(g), Q = 0; Q < g; Q++) B[Q] = arguments[Q];
        return I = N(this, A, [].concat(B)), O(I, "addEventListener", function(A, I, g) {
            return "message" == g[0] && (g[1] = m(g[1], function(A, I, g) {
                M.socket = I;
                var B = A.apply(I, g);
                return k.network_oriented_rendering && l(oI), B
            })), A.apply(I, g)
        }), I
    }
    return s(A, e.WebSocket), t(A)
}();
 
function wI() {
    return W && W.entities ? Object.values(W.entities) : []
}
 
function tI() {
    return W && W.entities ? Object.entries(W.entities).map(function(A) {
        var I = B(A, 2);
        return i({
            id: I[0]
        }, I[1])
    }) : []
}
 
function aI(A, I, g, B) {
    return A >= B.x && A <= B.x + B.width && I >= B.y && I <= B.y + B.height
}
 
function NI() {
    if (!IA || !j || !j.length) return {
        inActiveZone: !1,
        inSafeZone: !1,
        activeZone: null,
        safeZone: null,
        safeZoneIndex: -1
    };
    for (var A = !1, I = !1, g = null, B = null, Q = -1, C = 0; C < j.length; C++) {
        var E = j[C];
        E && (aI(IA.x, IA.y, IA.radius, E) && (0 === E.type && (A = !0, g = E), 4 === E.type && (I = !0, B = E, Q = C)))
    }
    return {
        inActiveZone: A,
        inSafeZone: I,
        activeZone: g,
        safeZone: B,
        safeZoneIndex: Q
    }
}
var sI = new Map;
var yI = new Map;
 
function nI(A, I, g, B, Q) {
    if (!j || !j.length) return {
        x: A + g,
        y: I + B,
        vx: g,
        vy: B
    };
    var C, E = null,
        i = G(j);
    try {
        for (i.s(); !(C = i.n()).done;) {
            var D = C.value;
            if (D && 0 === D.type && A >= D.x && A <= D.x + D.width && I >= D.y && I <= D.y + D.height) {
                E = D;
                break
            }
        }
    } catch (A) {
        i.e(A)
    } finally {
        i.f()
    }
    if (!E) return {
        x: A + g,
        y: I + B,
        vx: g,
        vy: B
    };
    var o = E.x + Q,
        w = E.x + E.width - Q,
        t = E.y + Q,
        a = E.y + E.height - Q,
        N = A + g,
        s = I + B,
        y = g,
        n = B;
    return N < o ? (N = o + (o - N), y = -y) : N > w && (N = w - (N - w), y = -y), s < t ? (s = t + (t - s), n = -n) : s > a && (s = a - (s - a), n = -n), {
        x: N = Math.max(o, Math.min(w, N)),
        y: s = Math.max(t, Math.min(a, s)),
        vx: y,
        vy: n
    }
}
var cI = new Map,
    RI = !1;
 
function GI(A, I) {
    if (k.overhead_chat && A && I) {
        var g = cI.get(A);
        g || (g = [], cI.set(A, g)), g.push({
            text: I,
            time: Date.now()
        }), g.length > 3 && g.shift()
    }
}
var hI = {
    startTime: null,
    isRunning: !1,
    displayTime: 0,
    lastAreaName: null,
    splits: []
};
 
function FI() {
    hI.startTime = null, hI.isRunning = !1, hI.displayTime = 0, hI.splits = []
}
 
function eI() {
    if (k.speedrun_timer && IA && j && j.length) {
        var A = X ? X.regionName + " " + X.name : "";
        hI.lastAreaName && A !== hI.lastAreaName && FI(), hI.lastAreaName = A;
        var I = NI(),
            g = I.inActiveZone,
            B = I.inSafeZone,
            Q = I.safeZoneIndex,
            C = function() {
                if (!j) return -1;
                for (var A = 0; A < j.length; A++)
                    if (j[A] && 4 === j[A].type) return A;
                return -1
            }(),
            E = function() {
                if (!X) return -1;
                var A = (X.name || "").match(/(\d+)$/);
                return A ? parseInt(A[1], 10) : -1
            }();
        if (hI.isRunning && B && Q === C && 1 === E) FI();
        else {
            if (hI.isRunning || !g || B || (hI.startTime = Date.now(), hI.isRunning = !0, hI.splits = []), hI.isRunning && B && Q !== C) hI.splits.some(function(A) {
                return A.zoneIdx === Q
            }) || hI.splits.push({
                zoneIdx: Q,
                time: Date.now() - hI.startTime
            });
            hI.isRunning && (hI.displayTime = Date.now() - hI.startTime)
        }
    }
}
var MI = !1;
var SI = null,
    kI = null,
    rI = 0;
 
function LI() {
    var A = Date.now();
    A - rI < 1e4 || (rI = A, fetch("https://evades.io/api/game/list").then(function(A) {
        return A.json()
    }).then(function(A) {
        kI = A,
            function() {
                if (!SI || !kI) return;
                var A = SI.querySelector(".servers");
                if (!A) return;
                for (var I = '<div style="margin-bottom:8px;color:#88ff88;">Total: '.concat(kI.connected, "/").concat(kI.capacity, "</div>"), g = 0, Q = Object.entries(kI.servers || {}); g < Q.length; g++) {
                    var C = B(Q[g], 2),
                        E = C[0],
                        i = C[1];
                    I += '<div style="font-weight:bold;margin-top:8px;">'.concat(E, "</div>");
                    for (var D = 0, o = Object.entries(i); D < o.length; D++) {
                        var w = B(o[D], 2),
                            t = (w[0], w[1]);
                        t.connected > 0 && (I += '<div style="padding:2px 0;border-bottom:1px solid rgba(255,255,255,0.1);">\n          <span style="color:#88ff88;">'.concat(t.connected, "</span>/").concat(t.capacity, "\n          ").concat(t.online && t.online.length > 0 ? " - ".concat(t.online.slice(0, 3).join(", ")).concat(t.online.length > 3 ? "..." : "") : "", "\n        </div>"))
                    }
                }
                A.innerHTML = I
            }()
    }).catch(function(A) {
        return console.error("Failed to fetch server list:", A)
    }))
}
 
function UI() {
    k.server_list_ui ? (SI || ((SI = document.createElement("div")).id = "xd-server-list", SI.style.cssText = "\n    position: fixed;\n    bottom: 10px;\n    right: 10px;\n    background: rgba(0, 0, 0, 0.85);\n    color: white;\n    padding: 12px;\n    border-radius: 8px;\n    font-family: Arial, sans-serif;\n    font-size: 12px;\n    max-height: 300px;\n    overflow-y: auto;\n    z-index: 9999;\n    display: none;\n    min-width: 200px;\n  ", SI.innerHTML = '<h3 style="margin:0 0 10px 0;font-size:14px;">Server List</h3><div class="servers">Loading...</div>', document.body.appendChild(SI)), SI.style.display = "block", LI()) : SI && (SI.style.display = "none")
}
 
function JI() {
    eI(),
        function() {
            if (k.zone_ui_hider) {
                if (IA && j) {
                    var A = NI().inActiveZone;
                    A && !MI ? (document.querySelectorAll("#leaderboard, #chat, .player-list").forEach(function(A) {
                        A && (A.style.display = "none")
                    }), MI = !0) : !A && MI && (document.querySelectorAll("#leaderboard, #chat, .player-list").forEach(function(A) {
                        A && (A.style.display = "")
                    }), MI = !1)
                }
            } else MI && (document.querySelectorAll("#leaderboard, #chat, .player-list").forEach(function(A) {
                A && (A.style.opacity = "1")
            }), MI = !1)
        }(),
        function() {
            if (k.pellet_collector && !k.tas && IA) {
                var A = wI();
                if (A.length) {
                    var I, g = null,
                        B = 1 / 0,
                        Q = G(A);
                    try {
                        for (Q.s(); !(I = Q.n()).done;) {
                            var C = I.value;
                            if (C && 109 === C.entityType) {
                                var E = Math.hypot(C.x - IA.x, C.y - IA.y);
                                E < B && (B = E, g = C)
                            }
                        }
                    } catch (A) {
                        Q.e(A)
                    } finally {
                        Q.f()
                    }
                    g && B > 5 && SA(Math.atan2(g.y - IA.y, g.x - IA.x))
                }
            }
        }(), UI(),
        function() {
            if (k.boundary_visualizer && QA && BA && j && j.length) {
                QA.save();
                var A, I = G(j);
                try {
                    for (I.s(); !(A = I.n()).done;) {
                        var g = A.value;
                        if (g) {
                            var B = BA.getX(g.x),
                                Q = BA.getY(g.y),
                                C = BA.toScale(g.width),
                                E = BA.toScale(g.height),
                                i = QA.canvas.width,
                                D = QA.canvas.height;
                            if (!(B + C < 0 || B > i || Q + E < 0 || Q > D)) {
                                var o = void 0,
                                    w = void 0,
                                    t = void 0;
                                switch (g.type) {
                                    case 0:
                                        o = "rgba(100, 150, 255, 0.8)", w = "rgba(100, 150, 255, 0.05)", t = "Active";
                                        break;
                                    case 4:
                                        o = "rgba(0, 255, 100, 0.8)", w = "rgba(0, 255, 100, 0.05)", t = "Safe";
                                        break;
                                    case 2:
                                        o = "rgba(255, 200, 0, 0.8)", w = "rgba(255, 200, 0, 0.05)", t = "Exit";
                                        break;
                                    case 6:
                                        o = "rgba(255, 215, 0, 0.8)", w = "rgba(255, 215, 0, 0.05)", t = "Victory";
                                        break;
                                    case 5:
                                        o = "rgba(200, 100, 255, 0.8)", w = "rgba(200, 100, 255, 0.05)", t = "Teleport";
                                        break;
                                    default:
                                        o = "rgba(128, 128, 128, 0.5)", w = "rgba(128, 128, 128, 0.02)", t = ""
                                }
                                QA.strokeStyle = o, QA.lineWidth = 2, QA.fillStyle = w, QA.fillRect(B, Q, C, E), QA.strokeRect(B, Q, C, E), t && (QA.fillStyle = o, QA.font = "bold 12px Arial", QA.fillText(t, B + 5, Q + 15))
                            }
                        }
                    }
                } catch (A) {
                    I.e(A)
                } finally {
                    I.f()
                }
                QA.restore()
            }
        }(),
        function() {
            if (k.star_predictor && QA && BA) {
                var A = tI();
                if (A.length) {
                    QA.save();
                    var I, g = G(A);
                    try {
                        for (g.s(); !(I = g.n()).done;) {
                            var Q = I.value;
                            if (Q && 195 === Q.entityType) {
                                var C = Q.id,
                                    E = Math.round(10 * Q.x) / 10,
                                    i = Math.round(10 * Q.y) / 10,
                                    D = "".concat(E, ",").concat(i),
                                    o = sI.get(C);
                                if (o || (o = {
                                        positions: new Set,
                                        pos1: null,
                                        pos2: null,
                                        lastPos: D
                                    }, sI.set(C, o)), o.positions.add(D), o.positions.size >= 2) {
                                    var w = Array.from(o.positions);
                                    o.pos1 = w[0], o.pos2 = w[1]
                                }
                                if (o.pos1 && o.pos2) {
                                    var t = B((D === o.pos1 ? o.pos2 : o.pos1).split(",").map(Number), 2),
                                        a = t[0],
                                        N = t[1],
                                        s = BA.getX(a),
                                        y = BA.getY(N),
                                        n = BA.toScale(Q.radius || 15);
                                    QA.beginPath(), QA.arc(s, y, n, 0, 2 * Math.PI), QA.fillStyle = "rgba(255, 215, 0, 0.2)", QA.fill(), QA.strokeStyle = "rgba(255, 215, 0, 0.6)", QA.lineWidth = 2, QA.setLineDash([4, 4]), QA.stroke(), QA.setLineDash([])
                                }
                                o.lastPos = D
                            }
                        }
                    } catch (A) {
                        g.e(A)
                    } finally {
                        g.f()
                    }
                    QA.restore()
                }
            }
        }(),
        function() {
            if (k.teleporting_enemy_predictor && QA && BA) {
                var A = tI();
                if (A.length) {
                    var I = Date.now();
                    QA.save();
                    var g, Q = G(A);
                    try {
                        for (Q.s(); !(g = Q.n()).done;) {
                            var C = g.value;
                            if (C && 203 === C.entityType) {
                                var E = C.id,
                                    i = C.radius || 15,
                                    D = yI.get(E);
                                D || (D = {
                                    lastX: C.x,
                                    lastY: C.y,
                                    lastTime: I,
                                    vx: 0,
                                    vy: 0,
                                    teleportCount: 0
                                }, yI.set(E, D));
                                var o = C.x - D.lastX,
                                    w = C.y - D.lastY;
                                if ((Math.abs(o) > 1 || Math.abs(w) > 1) && (D.vx = o, D.vy = w, D.teleportCount++), D.lastX = C.x, D.lastY = C.y, D.lastTime = I, D.teleportCount >= 1 && (Math.abs(D.vx) > .1 || Math.abs(D.vy) > .1)) {
                                    var t = nI(C.x, C.y, D.vx, D.vy, i),
                                        a = BA.getX(t.x),
                                        N = BA.getY(t.y),
                                        s = BA.toScale(i);
                                    QA.beginPath(), QA.arc(a, N, s, 0, 2 * Math.PI), QA.fillStyle = "rgba(238, 196, 239, 0.2)", QA.fill(), QA.strokeStyle = "rgba(238, 196, 239, 0.7)", QA.lineWidth = 2, QA.setLineDash([5, 5]), QA.stroke(), QA.setLineDash([]), QA.beginPath(), QA.moveTo(BA.getX(C.x), BA.getY(C.y)), QA.lineTo(a, N), QA.strokeStyle = "rgba(238, 196, 239, 0.4)", QA.lineWidth = 1, QA.stroke()
                                }
                            }
                        }
                    } catch (A) {
                        Q.e(A)
                    } finally {
                        Q.f()
                    }
                    QA.restore();
                    var y, n = G(yI);
                    try {
                        for (n.s(); !(y = n.n()).done;) {
                            var c = B(y.value, 2),
                                R = c[0];
                            I - c[1].lastTime > 5e3 && yI.delete(R)
                        }
                    } catch (A) {
                        n.e(A)
                    } finally {
                        n.f()
                    }
                }
            }
        }(),
        function() {
            if (k.overhead_chat && QA && BA) {
                var A = wI();
                if (A.length) {
                    var I = Date.now();
                    QA.save();
                    var g, B = G(A);
                    try {
                        for (B.s(); !(g = B.n()).done;) {
                            var Q = g.value;
                            if (Q && 114 === Q.entityType) {
                                var C = Q.username || Q.name;
                                if (C) {
                                    var E = cI.get(C);
                                    if (E && 0 !== E.length) {
                                        var i = E.filter(function(A) {
                                            return I - A.time < 5e3
                                        });
                                        if (0 !== i.length) {
                                            cI.set(C, i);
                                            var D = BA.getX(Q.x),
                                                o = BA.getY(Q.y),
                                                w = BA.toScale(Q.radius || 15);
                                            QA.font = "12px Arial", QA.textAlign = "center";
                                            for (var t = o - w - 35, a = i.length - 1; a >= 0; a--) {
                                                var N = i[a],
                                                    s = I - N.time,
                                                    y = Math.max(0, 1 - s / 5e3),
                                                    n = QA.measureText(N.text).width;
                                                QA.fillStyle = "rgba(0, 0, 0, ".concat(.7 * y, ")"), QA.fillRect(D - n / 2 - 4, t - 12, n + 8, 16), QA.fillStyle = "rgba(255, 255, 255, ".concat(y, ")"), QA.fillText(N.text, D, t), t -= 18
                                            }
                                        } else cI.delete(C)
                                    }
                                }
                            }
                        }
                    } catch (A) {
                        B.e(A)
                    } finally {
                        B.f()
                    }
                    QA.restore()
                }
            }
        }(),
        function() {
            if (k.speedrun_timer && QA) {
                var A = hI.displayTime,
                    I = Math.floor(A / 6e4),
                    g = Math.floor(A % 6e4 / 1e3),
                    B = Math.floor(A % 1e3 / 10),
                    Q = "".concat(I, ":").concat(g.toString().padStart(2, "0"), ".").concat(B.toString().padStart(2, "0"));
                QA.save();
                var C = QA.canvas.width - 10;
                QA.font = "bold 24px Arial", QA.textAlign = "right", QA.fillStyle = hI.isRunning ? "#00FF00" : "#AAAAAA", QA.strokeStyle = "#000000", QA.lineWidth = 3, QA.strokeText(Q, C, 30), QA.fillText(Q, C, 30);
                var E = 55;
                QA.font = "12px Arial";
                var i, D = G(hI.splits.slice(-5));
                try {
                    for (D.s(); !(i = D.n()).done;) {
                        var o = i.value,
                            w = Math.floor(o.time / 6e4),
                            t = Math.floor(o.time % 6e4 / 1e3),
                            a = "Zone ".concat(o.zoneIdx, ": ").concat(w, ":").concat(t.toString().padStart(2, "0"));
                        QA.strokeText(a, C, E), QA.fillText(a, C, E), E += 16
                    }
                } catch (A) {
                    D.e(A)
                } finally {
                    D.f()
                }
                QA.restore()
            }
        }()
}
var YI = function() {
    JI(), EA.push(YI)
};
 
function KI(A) {
    return A ? "-★-" : "☆"
}
 
function HI(A, I, g, B, Q) {
    B.push(["XD_" + I, I]);
    var C = KI(k.starred_settings[I]);
    return '<tr data-snake="'.concat(I, '"><td class="star">').concat(C, "</td><td>").concat(A, "</td><td>").concat(Q, "</td><td><h5>").concat(g, "</h5></td></tr>")
}
setTimeout(function() {
    EA.push(YI),
        function() {
            if (!RI) {
                var A = function() {
                    var I = document.getElementById("chat") || document.querySelector(".chat, .chat-container");
                    if (I) {
                        var g = I.querySelector(".messages, .chat-messages") || I;
                        new MutationObserver(function(A) {
                            var I, g = G(A);
                            try {
                                for (g.s(); !(I = g.n()).done;) {
                                    var B, Q = G(I.value.addedNodes);
                                    try {
                                        for (Q.s(); !(B = Q.n()).done;) {
                                            var C = B.value;
                                            if (1 === C.nodeType) {
                                                var E = C.textContent || "";
                                                if (E.includes(":")) {
                                                    var i = E.indexOf(":");
                                                    if (i > 0 && i < E.length - 1) {
                                                        var D = E.substring(0, i).trim(),
                                                            o = E.substring(i + 1).trim();
                                                        D && o && D.length < 30 && GI(D, o)
                                                    }
                                                }
                                            }
                                        }
                                    } catch (A) {
                                        Q.e(A)
                                    } finally {
                                        Q.f()
                                    }
                                }
                            } catch (A) {
                                g.e(A)
                            } finally {
                                g.f()
                            }
                        }).observe(g, {
                            childList: !0,
                            subtree: !0
                        }), RI = !0, console.log("sex")
                    } else setTimeout(A, 1e3)
                };
                A()
            }
        }()
}, 100), String.prototype.toSnake = function() {
    return this.toLowerCase().split(" ").filter(Boolean).join("_")
};
var lI = [];
var qI = [];
var dI = [];
 
function fI(A) {
    var I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        g = A.toSnake();
    if (void 0 === k[g]) throw new Error("No setting named ".concat(g));
    switch (k[g].constructor) {
        case Boolean:
            return function(A, I, g) {
                return HI(A, I, g, lI, '<input id="XD_'.concat(I, '" type="checkbox" ').concat(k[I] ? "checked" : "", ">"))
            }(A, g, I);
        case Object:
            return function(A, I, g) {
                return HI(A, I, g, qI, '<input id="XD_'.concat(I, '" type="range" min="').concat(k[I].min, '" max="').concat(k[I].max, '" step="').concat(k[I].step, '" value="').concat(k[I].value, '">'))
            }(A, g, I);
        case Array:
            return function(A, I, g) {
                return HI(A, I, g, dI, '<select id="XD_'.concat(I, '">').concat(k[I].slice(1).map(function(A, g) {
                    return '<option value="'.concat(g, '" ').concat(g == k[I][0] ? "selected" : "", ">").concat(A, "</option>")
                }), "</select>"))
            }(A, g, I);
        default:
            return ""
    }
}
var pI = document.createElement("div");
pI.id = "XD", pI.innerHTML = "\n<h1>XD Options</h1>\n<table>\n\t<thead>\n\t\t<th>Pin</th>\n\t\t<th>Name</th>\n\t\t<th>Value</th>\n\t\t<th>Notes</th>\n\t</thead>\n\t<tbody>\n\t\t".concat(fI("Spam first ability", "Will activate the first ability as soon as possible"), "\n\t\t").concat(fI("Spam second ability", "Same as above"), "\n\t\t").concat(fI("Spam third ability", "Same as above"), "\n\t\t").concat(fI("Ability priority", "If many abilities can be used, this decides the order of using them (for spam)"), "\n\t\t").concat(fI("Fast upgrades", "Will spend points very quickly while holding, like in sandbox"), "\n\t\t").concat(fI("Show body skin"), "\n\t\t").concat(fI("Show hat skin"), "\n\t\t").concat(fI("Show gem skin"), "\n\t\t").concat(fI("Show Stella balls", "Destroyed balls still exist. If you want to know if they are near you when you're about to use the ability again, turn this on"), "\n\t\t").concat(fI("Brighten dark areas", "Helpful in Burning Bunker, Mysterious Mansion, Restless Ridge Hard"), "\n\t\t").concat(fI("Spoof isDev", "With this you can press Period to see area info. Also lets you preview some staff-only content (but can't use it)"), "\n\t\t").concat(fI("Display old self when Chrono", "Does not account for lag"), "\n\t\t").concat(fI("Display full hero and not just a shadow", "Cool when playing solo, very distracting otherwise"), "\n\t\t").concat(fI("Network oriented rendering", "FPS down but TPS at 60? Try this"), "\n\t\t").concat(fI("Prevent kick", "Allows you to AFK indefinitely (as long as the tab is active)"), "\n\t\t").concat(fI("Viola clone auto follow", "The clone will automatically follow you"), "\n\t\t").concat(fI("ESC for settings"), "\n\t\t").concat(fI("Remove scrollbars from settings"), "\n\t\t").concat(fI("Warn before reload", "Show a confirmation box before reloading the page"), "\n\t\t").concat(fI("TAS", "Automatically compute a path towards the mouse and follow it"), "\n\t\t").concat(fI("Depth", "TAS depth, bigger = more accurate but exponentially slower"), "\n\t\t").concat(fI("Boundary visualizer", "Shows zone boundaries on the map"), "\n\t\t").concat(fI("Teleport indicator", "Shows Rime's teleport destination preview"), "\n\t\t").concat(fI("Star predictor", "Predicts where Star enemies will appear"), "\n\t\t").concat(fI("Teleporting enemy predictor", "Predicts teleporting enemy destinations"), "\n\t\t").concat(fI("Pellet collector", "Automatically collects pellets using pathfinding"), "\n\t\t").concat(fI("Overhead chat", "Displays chat messages above players"), "\n\t\t").concat(fI("Speedrun timer", "Tracks speedrun times"), "\n\t\t").concat(fI("Server list UI", "Displays server populations"), "\n\t\t").concat(fI("Zone UI hider", "Hides UI in danger zones"), "\n\t</tbody>\n</table>\n<button>Reset settings</button>\n");
var uI = document.createElement("style");
uI.innerHTML = '\n#XD {\n\tposition: fixed;\n\twidth: 600px;\n\theight: 600px;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tdisplay: none;\n\tbackground-color: #223;\n\tborder-top-left-radius: 1rem;\n\tborder-bottom-left-radius: 1rem;\n\tcolor: #fff;\n\tpadding: 0 1rem;\n\toverflow: auto;\n\tborder: 0.2rem solid #fff;\n\tborder-right: none;\n\tz-index: 99999;\n}\n\n#XD h1 {\n\ttext-align: center;\n\tmargin-bottom: 1.3rem;\n}\n\n#XD table {\n\twidth: 100%;\n\tmargin-bottom: 1rem;\n\tborder-collapse: collapse;\n}\n\n#XD table tbody tr td {\n\ttext-align: center;\n\tpadding-bottom: 0.5rem;\n}\n\n#XD table tbody tr td:first-child {\n\twidth: 10%;\n}\n\n#XD table tbody tr td:nth-child(2) {\n\twidth: 30%;\n}\n\n#XD table tbody tr td:nth-child(3) {\n\twidth: 20%;\n\tpadding: 0 0.5rem;\n}\n\n#XD table tbody tr td:last-child {\n\twidth: 40%;\n\tpadding: 0 0.5rem;\n}\n\n#XD table tbody tr td input[type="range"], #XD table tbody tr td select {\n\twidth: 90%;\n}\n\n#XD button {\n\tcolor: #f00;\n\tdisplay: block;\n\tcursor: pointer;\n\tpadding: 0.3rem;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-bottom: 1rem;\n\tborder-radius: 0.3rem;\n\tborder: 0.1rem solid #f00;\n\tbackground-color: transparent;\n}\n\n#XD td.star {\n\tcursor: pointer;\n\tfont-size: 1.5rem;\n}\n\n#XD table td > * {\n\tdisplay: inline-block;\n\twidth: auto !important;\n\tmax-width: max-content;\n\tmax-height: max-content;\n}\n';
var TI = !1;
var xI = !1;
e.onkeydown = function(A) {
    var I, g, Q, C, E;
    "`" == A.key ? (TI || (TI = !0, function() {
        document.body.appendChild(pI), document.body.appendChild(uI);
        for (var A = function() {
                var A = B(g[I], 2),
                    Q = A[0],
                    C = A[1],
                    E = document.getElementById(Q);
                E.addEventListener("change", function(A) {
                    k[C] = !!E.checked, Y(), "networkOrientedRendering" != C || k[C] || e.requestAnimationFrame(oI)
                })
            }, I = 0, g = lI; I < g.length; I++) A();
        for (var Q = function() {
                var A = B(E[C], 2),
                    I = A[0],
                    g = A[1],
                    Q = document.getElementById(I);
                Q.addEventListener("change", function(A) {
                    k[g].value = +Q.value, Y()
                })
            }, C = 0, E = qI; C < E.length; C++) Q();
        for (var i = function() {
                var A = B(o[D], 2),
                    I = A[0],
                    g = A[1],
                    Q = document.getElementById(I);
                Q.addEventListener("change", function(A) {
                    k[g][0] = Q.selectedIndex, Y()
                })
            }, D = 0, o = dI; D < o.length; D++) i();
        document.querySelector("#XD button").addEventListener("click", function(A) {
            k = S, Y(), e.location.reload()
        }), document.querySelectorAll("#XD td.star").forEach(function(A) {
            A.addEventListener("click", function() {
                var I = A.closest("tr").dataset.snake;
                k.starred_settings[I] = !k.starred_settings[I], A.textContent = KI(k.starred_settings[I]), Y()
            })
        })
    }(), I = !1, g = 0, Q = 0, C = 0, E = 0, pI.addEventListener("mousedown", function(A) {
        if (!A.target.closest("input, select, button, option, .star")) {
            A.preventDefault(), pI.focus();
            var B = pI.getBoundingClientRect();
            I = !0, g = A.clientX, Q = A.clientY, C = B.left, E = B.top, pI.style.transform = "none", pI.style.left = "".concat(C, "px"), pI.style.top = "".concat(E, "px")
        }
    }), document.addEventListener("mousemove", function(A) {
        if (I) {
            var B = A.clientX - g,
                i = A.clientY - Q,
                D = C + B,
                o = E + i,
                w = pI.getBoundingClientRect(),
                t = 50 - w.width,
                a = e.innerWidth - 50,
                N = 50 - w.height,
                s = e.innerHeight - 50;
            pI.style.left = "".concat(Math.min(Math.max(D, t), a), "px"), pI.style.top = "".concat(Math.min(Math.max(o, N), s), "px")
        }
    }), document.addEventListener("mouseup", function() {
        I = !1
    })), xI = !xI, pI.style.display = xI ? "block" : "none") : "Escape" == A.key && k.esc_for_settings && document.querySelector(".settings-launcher").click()
};
var bI = setInterval(function() {
    JA && !JA.initial && (console.log("In game"), clearInterval(bI), q(T))
}, 50);
