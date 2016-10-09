/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
function ReedSolomon(e) {
    this.logger = null,
    this.n_ec_bytes = e,
    this.n_degree_max = 2 * e,
    this.syndroms = [],
    this.gen_poly = null,
    this.initGaloisTables()
}
function QREncode() {
    this.image = null,
    this.nModules = 0,
    this.version = 0,
    this.functionalGrade = 0,
    this.ECLevel = 0,
    this.mask = 0,
    this.maskPattern = [],
    this.nDataCodewords = 0,
    this.nBlockEcWords = 0,
    this.blockIndices = [],
    this.blockDataLengths = []
}
function QRDecode() {
    this.image = null,
    this.imageTop = 0,
    this.imageBottom = 0,
    this.imageLeft = 0,
    this.imageRight = 0,
    this.nModules = 0,
    this.moduleSize = 0,
    this.version = 0,
    this.functionalGrade = 0,
    this.ECLevel = 0,
    this.mask = 0,
    this.maskPattern = [],
    this.nBlockEcWords = 0,
    this.blockIndices = [],
    this.blockDataLengths = []
}
function queryUrl(e, t) {
    e = e.replace(/^[^?=]*\?/ig, "").split("#")[0];
    var n = {};
    return e.replace(/(^|&)([^&=]+)=([^&]*)/g,
    function(e, t, r, i) {
        try {
            r = decodeURIComponent(r)
        } catch(s) {}
        try {
            i = decodeURIComponent(i)
        } catch(s) {}
        r in n ? n[r] instanceof Array ? n[r].push(i) : n[r] = [n[r], i] : n[r] = /\[\]$/.test(r) ? [i] : i
    }),
    t ? n[t] : n
} !
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e: e(jQuery)
} (function(e) {
    function t(t) {
        var o = t || window.event,
        u = a.call(arguments, 1),
        f = 0,
        c = 0,
        h = 0,
        p = 0,
        d = 0,
        v = 0;
        if (t = e.event.fix(o), t.type = "mousewheel", "detail" in o && (h = -1 * o.detail), "wheelDelta" in o && (h = o.wheelDelta), "wheelDeltaY" in o && (h = o.wheelDeltaY), "wheelDeltaX" in o && (c = -1 * o.wheelDeltaX), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (c = -1 * h, h = 0), f = 0 === h ? c: h, "deltaY" in o && (h = -1 * o.deltaY, f = h), "deltaX" in o && (c = o.deltaX, 0 === h && (f = -1 * c)), 0 !== h || 0 !== c) {
            if (1 === o.deltaMode) {
                var m = e.data(this, "mousewheel-line-height");
                f *= m,
                h *= m,
                c *= m
            } else if (2 === o.deltaMode) {
                var g = e.data(this, "mousewheel-page-height");
                f *= g,
                h *= g,
                c *= g
            }
            if (p = Math.max(Math.abs(h), Math.abs(c)), (!s || s > p) && (s = p, r(o, p) && (s /= 40)), r(o, p) && (f /= 40, c /= 40, h /= 40), f = Math[f >= 1 ? "floor": "ceil"](f / s), c = Math[c >= 1 ? "floor": "ceil"](c / s), h = Math[h >= 1 ? "floor": "ceil"](h / s), l.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                d = t.clientX - y.left,
                v = t.clientY - y.top
            }
            return t.deltaX = c,
            t.deltaY = h,
            t.deltaFactor = s,
            t.offsetX = d,
            t.offsetY = v,
            t.deltaMode = 0,
            u.unshift(t, f, c, h),
            i && clearTimeout(i),
            i = setTimeout(n, 200),
            (e.event.dispatch || e.event.handle).apply(this, u)
        }
    }
    function n() {
        s = null
    }
    function r(e, t) {
        return l.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
    }
    var i, s, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    u = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    a = Array.prototype.slice;
    if (e.event.fixHooks) for (var f = o.length; f;) e.event.fixHooks[o[--f]] = e.event.mouseHooks;
    var l = e.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener) for (var n = u.length; n;) this.addEventListener(u[--n], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", l.getLineHeight(this)),
            e.data(this, "mousewheel-page-height", l.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener) for (var n = u.length; n;) this.removeEventListener(u[--n], t, !1);
            else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"),
            e.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(t) {
            var n = e(t),
            r = n["offsetParent" in e.fn ? "offsetParent": "parent"]();
            return r.length || (r = e("body")),
            parseInt(r.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
        },
        getPageHeight: function(t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}),
window.Modernizr = function(e, t, n) {
    function r(e) {
        m.cssText = e
    }
    function i(e, t) {
        return r(b.join(e + ";") + (t || ""))
    }
    function s(e, t) {
        return typeof e === t
    }
    function o(e, t) {
        return !! ~ ("" + e).indexOf(t)
    }
    function u(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!o(i, "-") && m[i] !== n) return t == "pfx" ? i: !0
        }
        return ! 1
    }
    function a(e, t, r) {
        for (var i in e) {
            var o = t[e[i]];
            if (o !== n) return r === !1 ? e[i] : s(o, "function") ? o.bind(r || t) : o
        }
        return ! 1
    }
    function f(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1),
        i = (e + " " + E.join(r + " ") + r).split(" ");
        return s(t, "string") || s(t, "undefined") ? u(i, t) : (i = (e + " " + S.join(r + " ") + r).split(" "), a(i, t, n))
    }
    var l = "2.8.3",
    c = {},
    h = !0,
    p = t.documentElement,
    d = "modernizr",
    v = t.createElement(d),
    m = v.style,
    g,
    y = {}.toString,
    b = " -webkit- -moz- -o- -ms- ".split(" "),
    w = "Webkit Moz O ms",
    E = w.split(" "),
    S = w.toLowerCase().split(" "),
    x = {},
    T = {},
    N = {},
    C = [],
    k = C.slice,
    L,
    A = {}.hasOwnProperty,
    O; ! s(A, "undefined") && !s(A.call, "undefined") ? O = function(e, t) {
        return A.call(e, t)
    }: O = function(e, t) {
        return t in e && s(e.constructor.prototype[t], "undefined")
    },
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if (typeof t != "function") throw new TypeError;
        var n = k.call(arguments, 1),
        r = function() {
            if (this instanceof r) {
                var i = function() {};
                i.prototype = t.prototype;
                var s = new i,
                o = t.apply(s, n.concat(k.call(arguments)));
                return Object(o) === o ? o: s
            }
            return t.apply(e, n.concat(k.call(arguments)))
        };
        return r
    }),
    x.rgba = function() {
        return r("background-color:rgba(150,255,150,.5)"),
        o(m.backgroundColor, "rgba")
    },
    x.backgroundsize = function() {
        return f("backgroundSize")
    },
    x.borderradius = function() {
        return f("borderRadius")
    },
    x.boxshadow = function() {
        return f("boxShadow")
    },
    x.opacity = function() {
        return i("opacity:.55"),
        /^0.55$/.test(m.opacity)
    },
    x.cssanimations = function() {
        return f("animationName")
    },
    x.csstransforms = function() {
        return !! f("transform")
    },
    x.csstransitions = function() {
        return f("transition")
    };
    for (var M in x) O(x, M) && (L = M.toLowerCase(), c[L] = x[M](), C.push((c[L] ? "": "no-") + L));
    return c.addTest = function(e, t) {
        if (typeof e == "object") for (var r in e) O(e, r) && c.addTest(r, e[r]);
        else {
            e = e.toLowerCase();
            if (c[e] !== n) return c;
            t = typeof t == "function" ? t() : t,
            typeof h != "undefined" && h && (p.className += " " + (t ? "": "no-") + e),
            c[e] = t
        }
        return c
    },
    r(""),
    v = g = null,
    function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
            r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>",
            r.insertBefore(n.lastChild, r.firstChild)
        }
        function r() {
            var e = y.elements;
            return typeof e == "string" ? e.split(" ") : e
        }
        function i(e) {
            var t = m[e[d]];
            return t || (t = {},
            v++, e[d] = v, m[v] = t),
            t
        }
        function s(e, n, r) {
            n || (n = t);
            if (g) return n.createElement(e);
            r || (r = i(n));
            var s;
            return r.cache[e] ? s = r.cache[e].cloneNode() : h.test(e) ? s = (r.cache[e] = r.createElem(e)).cloneNode() : s = r.createElem(e),
            s.canHaveChildren && !c.test(e) && !s.tagUrn ? r.frag.appendChild(s) : s
        }
        function o(e, n) {
            e || (e = t);
            if (g) return e.createDocumentFragment();
            n = n || i(e);
            var s = n.frag.cloneNode(),
            o = 0,
            u = r(),
            a = u.length;
            for (; o < a; o++) s.createElement(u[o]);
            return s
        }
        function u(e, t) {
            t.cache || (t.cache = {},
            t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()),
            e.createElement = function(n) {
                return y.shivMethods ? s(n, e, t) : t.createElem(n)
            },
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g,
            function(e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }) + ");return n}")(y, t.frag)
        }
        function a(e) {
            e || (e = t);
            var r = i(e);
            return y.shivCSS && !p && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            g || u(e, r),
            e
        }
        var f = "3.7.0",
        l = e.html5 || {},
        c = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        p, d = "_html5shiv",
        v = 0,
        m = {},
        g; (function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                p = "hidden" in e,
                g = e.childNodes.length == 1 ||
                function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                } ()
            } catch(n) {
                p = !0,
                g = !0
            }
        })();
        var y = {
            elements: l.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: f,
            shivCSS: l.shivCSS !== !1,
            supportsUnknownElements: g,
            shivMethods: l.shivMethods !== !1,
            type: "default",
            shivDocument: a,
            createElement: s,
            createDocumentFragment: o
        };
        e.html5 = y,
        a(t)
    } (this, t),
    c._version = l,
    c._prefixes = b,
    c._domPrefixes = S,
    c._cssomPrefixes = E,
    c.testProp = function(e) {
        return u([e])
    },
    c.testAllProps = f,
    p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + C.join(" ") : ""),
    c
} (this, this.document),
function(e, t, n) {
    function r(e) {
        return "[object Function]" == d.call(e)
    }
    function i(e) {
        return "string" == typeof e
    }
    function s() {}
    function o(e) {
        return ! e || "loaded" == e || "complete" == e || "uninitialized" == e
    }
    function u() {
        var e = v.shift();
        m = 1,
        e ? e.t ? h(function() { ("c" == e.t ? k.injectCss: k.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        },
        0) : (e(), u()) : m = 0
    }
    function a(e, n, r, i, s, a, f) {
        function l(t) {
            if (!d && o(c.readyState) && (w.r = d = 1, !m && u(), c.onload = c.onreadystatechange = null, t)) {
                "img" != e && h(function() {
                    b.removeChild(c)
                },
                50);
                for (var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload()
            }
        }
        var f = f || k.errorTimeout,
        c = t.createElement(e),
        d = 0,
        g = 0,
        w = {
            t: r,
            s: n,
            e: s,
            a: a,
            x: f
        };
        1 === T[n] && (g = 1, T[n] = []),
        "object" == e ? c.data = n: (c.src = n, c.type = e),
        c.width = c.height = "0",
        c.onerror = c.onload = c.onreadystatechange = function() {
            l.call(this, g)
        },
        v.splice(i, 0, w),
        "img" != e && (g || 2 === T[n] ? (b.insertBefore(c, y ? null: p), h(l, f)) : T[n].push(c))
    }
    function f(e, t, n, r, s) {
        return m = 0,
        t = t || "j",
        i(e) ? a("c" == t ? E: w, e, t, this.i++, n, r, s) : (v.splice(this.i++, 0, e), 1 == v.length && u()),
        this
    }
    function l() {
        var e = k;
        return e.loader = {
            load: f,
            i: 0
        },
        e
    }
    var c = t.documentElement,
    h = e.setTimeout,
    p = t.getElementsByTagName("script")[0],
    d = {}.toString,
    v = [],
    m = 0,
    g = "MozAppearance" in c.style,
    y = g && !!t.createRange().compareNode,
    b = y ? c: p.parentNode,
    c = e.opera && "[object Opera]" == d.call(e.opera),
    c = !!t.attachEvent && !c,
    w = g ? "object": c ? "script": "img",
    E = c ? "script": w,
    S = Array.isArray ||
    function(e) {
        return "[object Array]" == d.call(e)
    },
    x = [],
    T = {},
    N = {
        timeout: function(e, t) {
            return t.length && (e.timeout = t[0]),
            e
        }
    },
    C,
    k;
    k = function(e) {
        function t(e) {
            var e = e.split("!"),
            t = x.length,
            n = e.pop(),
            r = e.length,
            n = {
                url: n,
                origUrl: n,
                prefixes: e
            },
            i,
            s,
            o;
            for (s = 0; s < r; s++) o = e[s].split("="),
            (i = N[o.shift()]) && (n = i(n, o));
            for (s = 0; s < t; s++) n = x[s](n);
            return n
        }
        function o(e, i, s, o, u) {
            var a = t(e),
            f = a.autoCallback;
            a.url.split(".").pop().split("?").shift(),
            a.bypass || (i && (i = r(i) ? i: i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), a.instead ? a.instead(e, i, s, o, u) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c": n, a.noexec, a.attrs, a.timeout), (r(i) || r(f)) && s.load(function() {
                l(),
                i && i(a.origUrl, u, o),
                f && f(a.origUrl, u, o),
                T[a.url] = 2
            })))
        }
        function u(e, t) {
            function n(e, n) {
                if (e) {
                    if (i(e)) n || (f = function() {
                        var e = [].slice.call(arguments);
                        l.apply(this, e),
                        c()
                    }),
                    o(e, f, t, 0, u);
                    else if (Object(e) === e) for (p in h = function() {
                        var t = 0,
                        n;
                        for (n in e) e.hasOwnProperty(n) && t++;
                        return t
                    } (), e) e.hasOwnProperty(p) && (!n && !--h && (r(f) ? f = function() {
                        var e = [].slice.call(arguments);
                        l.apply(this, e),
                        c()
                    }: f[p] = function(e) {
                        return function() {
                            var t = [].slice.call(arguments);
                            e && e.apply(this, t),
                            c()
                        }
                    } (l[p])), o(e[p], f, t, p, u))
                } else ! n && c()
            }
            var u = !!e.test,
            a = e.load || e.both,
            f = e.callback || s,
            l = f,
            c = e.complete || s,
            h, p;
            n(u ? e.yep: e.nope, !!a),
            a && n(a)
        }
        var a, f, c = this.yepnope.loader;
        if (i(e)) o(e, 0, c, 0);
        else if (S(e)) for (a = 0; a < e.length; a++) f = e[a],
        i(f) ? o(f, 0, c, 0) : S(f) ? k(f) : Object(f) === f && u(f, c);
        else Object(e) === e && u(e, c)
    },
    k.addPrefix = function(e, t) {
        N[e] = t
    },
    k.addFilter = function(e) {
        x.push(e)
    },
    k.errorTimeout = 1e4,
    null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", C = function() {
        t.removeEventListener("DOMContentLoaded", C, 0),
        t.readyState = "complete"
    },
    0)),
    e.yepnope = l(),
    e.yepnope.executeStack = u,
    e.yepnope.injectJs = function(e, n, r, i, a, f) {
        var l = t.createElement("script"),
        c,
        d,
        i = i || k.errorTimeout;
        l.src = e;
        for (d in r) l.setAttribute(d, r[d]);
        n = f ? u: n || s,
        l.onreadystatechange = l.onload = function() { ! c && o(l.readyState) && (c = 1, n(), l.onload = l.onreadystatechange = null)
        },
        h(function() {
            c || (c = 1, n(1))
        },
        i),
        a ? l.onload() : p.parentNode.insertBefore(l, p)
    },
    e.yepnope.injectCss = function(e, n, r, i, o, a) {
        var i = t.createElement("link"),
        f,
        n = a ? u: n || s;
        i.href = e,
        i.rel = "stylesheet",
        i.type = "text/css";
        for (f in r) i.setAttribute(f, r[f]);
        o || (p.parentNode.insertBefore(i, p), h(n, 0))
    }
} (this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
},
"use strict",
ReedSolomon.prototype = {
    encode: function(e) {
        this.gen_poly == null && (this.gen_poly = this.genPoly(this.n_ec_bytes));
        var t = new Array(this.n_ec_bytes + 1),
        n;
        for (n = 0; n < this.n_ec_bytes + 1; n++) t[n] = 0;
        for (n = 0; n < e.length; n++) {
            var r = e[n] ^ t[this.n_ec_bytes - 1],
            i;
            for (i = this.n_ec_bytes - 1; i > 0; i--) t[i] = t[i - 1] ^ this.gmult(this.gen_poly[i], r);
            t[0] = this.gmult(this.gen_poly[0], r)
        }
        var s = [];
        for (n = this.n_ec_bytes - 1; n >= 0; n--) s.push(t[n]);
        return s
    },
    decode: function(e) {
        this.bytes_in = e,
        this.bytes_out = e.slice();
        var t = this.calculateSyndroms();
        return t > 0 ? this.correctErrors() : this.corrected = !0,
        this.bytes_out.slice(0, this.bytes_out.length - this.n_ec_bytes)
    },
    genPoly: function(e) {
        var t, n, r;
        n = this.zeroPoly(),
        n[0] = 1;
        var i;
        for (i = 0; i < e; i++) t = this.zeroPoly(),
        t[0] = this.gexp[i],
        t[1] = 1,
        r = this.multPolys(t, n),
        n = this.copyPoly(r);
        return this.logger && this.logger.debug("RS genPoly: " + r.join(",")),
        r
    },
    calculateSyndroms: function() {
        this.syndroms = [];
        var e, t = 0,
        n, r;
        for (r = 0; r < this.n_ec_bytes; r++) {
            e = 0;
            for (n = 0; n < this.bytes_in.length; n++) e = this.bytes_in[n] ^ this.gmult(this.gexp[r], e);
            this.syndroms.push(e),
            e > 0 && t++
        }
        return this.logger && (t > 0 ? this.logger.debug("RS calculateSyndroms: <b>Errors found!</b> syndroms = " + this.syndroms.join(",")) : this.logger.debug("RS calculateSyndroms: <b>No errors</b>")),
        t
    },
    correctErrors: function() {
        this.berlekampMassey(),
        this.findRoots(),
        this.corrected = !1;
        if (2 * this.n_errors > this.n_ec_bytes) {
            this.uncorrected_reason = "too many errors",
            this.logger && this.logger.debug("RS correctErrors: <b>" + this.uncorrected_reason + "</b>");
            return
        }
        var e;
        for (e = 0; e < this.n_errors; e++) if (this.error_locs[e] >= this.bytes_in.length) {
            this.uncorrected_reason = "corrections out of scope",
            this.logger && this.logger.debug("RS correctErrors: <b>" + this.uncorrected_reason + "</b>");
            return
        }
        if (this.n_errors === 0) {
            this.uncorrected_reason = "could not identify errors",
            this.logger && this.logger.debug("RS correctErrors: <b>" + this.uncorrected_reason + "</b>");
            return
        }
        var t;
        for (t = 0; t < this.n_errors; t++) {
            var n = this.error_locs[t],
            r = 0,
            i;
            for (i = 0; i < this.n_degree_max; i++) r ^= this.gmult(this.omega[i], this.gexp[(255 - n) * i % 255]);
            var s = 0;
            for (i = 0; i < this.n_degree_max; i += 2) s ^= this.gmult(this.psi[i], this.gexp[(255 - n) * i % 255]);
            var o = this.gmult(r, this.ginv(s));
            this.logger && this.logger.debug("RS correctErrors: loc=" + (this.bytes_out.length - n - 1) + "  err = 0x0" + o.toString(16) + " = bin " + o.toString(2)),
            this.bytes_out[this.bytes_out.length - n - 1] ^= o
        }
        this.corrected = !0
    },
    berlekampMassey: function() {
        var e = this.zeroPoly();
        e[0] = 1;
        var t = this.copyPoly(e);
        this.mulZPoly(t),
        this.psi = this.copyPoly(e);
        var n = new Array(this.n_degree_max),
        r = -1,
        i = 0,
        s,
        o;
        for (o = 0; o < this.n_ec_bytes; o++) {
            var u = this.computeDiscrepancy(this.psi, this.syndroms, i, o);
            if (u !== 0) {
                for (s = 0; s < this.n_degree_max; s++) n[s] = this.psi[s] ^ this.gmult(u, t[s]);
                if (i < o - r) {
                    var a = o - r;
                    r = o - i;
                    for (s = 0; s < this.n_degree_max; s++) t[s] = this.gmult(this.psi[s], this.ginv(u));
                    i = a
                }
                this.psi = this.copyPoly(n)
            }
            this.mulZPoly(t)
        }
        this.logger && this.logger.debug("RS berlekampMassey: psi = " + this.psi.join(","));
        var f = this.multPolys(this.psi, this.syndroms);
        this.omega = this.zeroPoly();
        for (s = 0; s < this.n_ec_bytes; s++) this.omega[s] = f[s];
        this.logger && this.logger.debug("RS berlekampMassey: omega = " + this.omega.join(","))
    },
    findRoots: function() {
        this.n_errors = 0,
        this.error_locs = [];
        var e, t;
        for (t = 1; t < 256; t++) {
            e = 0;
            var n;
            for (n = 0; n < this.n_ec_bytes + 1; n++) e ^= this.gmult(this.gexp[n * t % 255], this.psi[n]);
            e === 0 && (this.error_locs.push(255 - t), this.n_errors++)
        }
        this.logger && this.logger.debug("RS findRoots: errors=<b>" + this.n_errors + "</b> locations = " + this.error_locs.join(","))
    },
    computeDiscrepancy: function(e, t, n, r) {
        var i = 0,
        s;
        for (s = 0; s <= n; s++) i ^= this.gmult(e[s], t[r - s]);
        return i
    },
    copyPoly: function(e) {
        var t = new Array(this.n_degree_max),
        n;
        for (n = 0; n < this.n_degree_max; n++) t[n] = e[n];
        return t
    },
    zeroPoly: function() {
        var e = new Array(this.n_degree_max),
        t;
        for (t = 0; t < this.n_degree_max; t++) e[t] = 0;
        return e
    },
    mulZPoly: function(e) {
        var t;
        for (t = this.n_degree_max - 1; t > 0; t--) e[t] = e[t - 1];
        e[0] = 0
    },
    multPolys: function(e, t) {
        var n = new Array(this.n_degree_max),
        r = new Array(this.n_degree_max * 2),
        i;
        for (i = 0; i < this.n_degree_max * 2; i++) n[i] = 0;
        for (i = 0; i < this.n_degree_max; i++) {
            var s;
            for (s = this.n_degree_max; s < this.n_degree_max * 2; s++) r[s] = 0;
            for (s = 0; s < this.n_degree_max; s++) r[s] = this.gmult(t[s], e[i]);
            for (s = this.n_degree_max * 2 - 1; s >= i; s--) r[s] = r[s - i];
            for (s = 0; s < i; s++) r[s] = 0;
            for (s = 0; s < this.n_degree_max * 2; s++) n[s] ^= r[s]
        }
        return n
    },
    initGaloisTables: function() {
        var e = 0,
        t = 1,
        n = 0,
        r = 0,
        i = 0,
        s = 0,
        o = 0,
        u = 0,
        a = 0;
        this.gexp = new Array(512),
        this.glog = new Array(256),
        this.gexp[0] = 1,
        this.gexp[255] = this.gexp[0],
        this.glog[0] = 0;
        var f;
        for (f = 1; f < 256; f++) e = a,
        a = u,
        u = o,
        o = s,
        s = i ^ e,
        i = r ^ e,
        r = n ^ e,
        n = t,
        t = e,
        this.gexp[f] = t + n * 2 + r * 4 + i * 8 + s * 16 + o * 32 + u * 64 + a * 128,
        this.gexp[f + 255] = this.gexp[f];
        for (f = 1; f < 256; f++) {
            var l;
            for (l = 0; l < 256; l++) if (this.gexp[l] === f) {
                this.glog[f] = l;
                break
            }
        }
    },
    gmult: function(e, t) {
        if (e === 0 || t === 0) return 0;
        var n = this.glog[e],
        r = this.glog[t];
        return this.gexp[n + r]
    },
    ginv: function(e) {
        return this.gexp[255 - this.glog[e]]
    }
};
var QRBase = {
    MODE: {
        Numeric: 1,
        AlphaNumeric: 2,
        EightBit: 4,
        Terminator: 0
    },
    ERROR_CORRECTION_LEVEL: {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    },
    errorThrow: function(e) {
        if (!this._isError) {
            if (!this._errorThrow) throw e;
            this._errorThrow(e),
            this._isError = !0
        }
    },
    setBlocks: function(e) {
        var t = this.nCodewords[e.version],
        n = this.nECCodewords[e.version][e.ECLevel],
        r = this.ECBlocks[e.version][e.ECLevel],
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c = 0;
        e.nDataCodewords = t - n,
        r.length === 1 ? (s = r[0], o = 0, i = s, u = e.nDataCodewords / i, a = 0) : (s = r[0], o = r[1], i = s + o, u = Math.floor(e.nDataCodewords / i), a = u + 1),
        e.nBlockEcWords = n / i,
        e.blockDataLengths = [];
        for (l = 0; l < s; l++) e.blockDataLengths[l] = u;
        for (l = s; l < i; l++) e.blockDataLengths[l] = a;
        e.blockIndices = [];
        for (l = 0; l < i; l++) e.blockIndices[l] = [];
        for (f = 0; f < u; f++) for (l = 0; l < i; l++) e.blockIndices[l].push(c),
        c++;
        for (l = s; l < i; l++) e.blockIndices[l].push(c),
        c++;
        for (f = 0; f < e.nBlockEcWords; f++) for (l = 0; l < i; l++) e.blockIndices[l].push(c),
        c++
    },
    setFunctionalPattern: function(e) {
        function t(e, t, n, r, i) {
            var s, o;
            for (s = t; s < t + r; s++) for (o = n; o < n + i; o++) e.functionalPattern[s][o] = !0
        }
        function n(e, n) {
            var r = n.alignmentPatterns[e.version].length,
            i,
            s;
            for (i = 0; i < r; i++) for (s = 0; s < r; s++) {
                if (i === 0 && s === 0 || i === 0 && s === r - 1 || i === r - 1 && s === 0) continue;
                t(e, n.alignmentPatterns[e.version][i] - 2, n.alignmentPatterns[e.version][s] - 2, 5, 5)
            }
        }
        e.functionalPattern = [];
        var r, i;
        for (r = 0; r < e.nModules; r++) {
            e.functionalPattern[r] = [];
            for (i = 0; i < e.nModules; i++) e.functionalPattern[r][i] = !1
        }
        t(e, 0, 0, 9, 9),
        t(e, e.nModules - 8, 0, 8, 9),
        t(e, 0, e.nModules - 8, 9, 8),
        t(e, 8, 6, e.nModules - 8 - 8, 1),
        t(e, 6, 8, 1, e.nModules - 8 - 8),
        n(e, this),
        e.version >= 7 && (t(e, 0, e.nModules - 11, 6, 3), t(e, e.nModules - 11, 0, 3, 6))
    },
    nCountBits: function(e, t) {
        if (e === this.MODE.EightBit) return t < 10 ? 8 : 16;
        if (e === this.MODE.AlphaNumeric) return t < 10 ? 9 : t < 27 ? 11 : 13;
        if (e === this.MODE.Numeric) return t < 10 ? 10 : t < 27 ? 12 : 14;
        this.errorThrow("Internal error: Unknown mode: " + e)
    },
    nModulesFromVersion: function(e) {
        return 17 + 4 * e
    },
    unicodeToUtf8: function(e) {
        var t = "",
        n = e.length,
        r, i;
        for (r = 0; r < n; r++) i = e.charCodeAt(r),
        i >= 1 && i <= 127 ? t += e.charAt(r) : i > 2047 ? (t += String.fromCharCode(224 | i >> 12 & 15), t += String.fromCharCode(128 | i >> 6 & 63), t += String.fromCharCode(128 | i >> 0 & 63)) : (t += String.fromCharCode(192 | i >> 6 & 31), t += String.fromCharCode(128 | i >> 0 & 63));
        return t
    },
    utf8Tounicode: function(e) {
        var t = "",
        n = e.length,
        r = 0,
        i, s, o, u;
        while (r < n) s = e.charCodeAt(r++),
        i = s >> 4,
        i <= 7 ? t += e.charAt(r - 1) : i === 12 || i === 13 ? (o = e.charCodeAt(r++), t += String.fromCharCode((s & 31) << 6 | o & 63)) : i === 14 && (o = e.charCodeAt(r++), u = e.charCodeAt(r++), t += String.fromCharCode((s & 15) << 12 | (o & 63) << 6 | (u & 63) << 0));
        return t
    },
    setErrorThrow: function(e) {
        typeof e == "function" && (this._errorThrow = e)
    },
    alignmentPatterns: [null, [], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
    versionInfo: [null, null, null, null, null, null, null, 31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017],
    formatInfo: [21522, 20773, 24188, 23371, 17913, 16590, 20375, 19104, 30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245],
    nCodewords: [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706],
    nECCodewords: [null, [10, 7, 17, 13], [16, 10, 28, 22], [26, 15, 44, 36], [36, 20, 64, 52], [48, 26, 88, 72], [64, 36, 112, 96], [72, 40, 130, 108], [88, 48, 156, 132], [110, 60, 192, 160], [130, 72, 224, 192], [150, 80, 264, 224], [176, 96, 308, 260], [198, 104, 352, 288], [216, 120, 384, 320], [240, 132, 432, 360], [280, 144, 480, 408], [308, 168, 532, 448], [338, 180, 588, 504], [364, 196, 650, 546], [416, 224, 700, 600], [442, 224, 750, 644], [476, 252, 816, 690], [504, 270, 900, 750], [560, 300, 960, 810], [588, 312, 1050, 870], [644, 336, 1110, 952], [700, 360, 1200, 1020], [728, 390, 1260, 1050], [784, 420, 1350, 1140], [812, 450, 1440, 1200], [868, 480, 1530, 1290], [924, 510, 1620, 1350], [980, 540, 1710, 1440], [1036, 570, 1800, 1530], [1064, 570, 1890, 1590], [1120, 600, 1980, 1680], [1204, 630, 2100, 1770], [1260, 660, 2220, 1860], [1316, 720, 2310, 1950], [1372, 750, 2430, 2040]],
    ECBlocks: [[], [[1], [1], [1], [1]], [[1], [1], [1], [1]], [[1], [1], [2], [2]], [[2], [1], [4], [2]], [[2], [1], [2, 2], [2, 2]], [[4], [2], [4], [4]], [[4], [2], [4, 1], [2, 4]], [[2, 2], [2], [4, 2], [4, 2]], [[3, 2], [2], [4, 4], [4, 4]], [[4, 1], [2, 2], [6, 2], [6, 2]], [[1, 4], [4], [3, 8], [4, 4]], [[6, 2], [2, 2], [7, 4], [4, 6]], [[8, 1], [4], [12, 4], [8, 4]], [[4, 5], [3, 1], [11, 5], [11, 5]], [[5, 5], [5, 1], [11, 7], [5, 7]], [[7, 3], [5, 1], [3, 13], [15, 2]], [[10, 1], [1, 5], [2, 17], [1, 15]], [[9, 4], [5, 1], [2, 19], [17, 1]], [[3, 11], [3, 4], [9, 16], [17, 4]], [[3, 13], [3, 5], [15, 10], [15, 5]], [[17], [4, 4], [19, 6], [17, 6]], [[17], [2, 7], [34], [7, 16]], [[4, 14], [4, 5], [16, 14], [11, 14]], [[6, 14], [6, 4], [30, 2], [11, 16]], [[8, 13], [8, 4], [22, 13], [7, 22]], [[19, 4], [10, 2], [33, 4], [28, 6]], [[22, 3], [8, 4], [12, 28], [8, 26]], [[3, 23], [3, 10], [11, 31], [4, 31]], [[21, 7], [7, 7], [19, 26], [1, 37]], [[19, 10], [5, 10], [23, 25], [15, 25]], [[2, 29], [13, 3], [23, 28], [42, 1]], [[10, 23], [17], [19, 35], [10, 35]], [[14, 21], [17, 1], [11, 46], [29, 19]], [[14, 23], [13, 6], [59, 1], [44, 7]], [[12, 26], [12, 7], [22, 41], [39, 14]], [[6, 34], [6, 14], [2, 64], [46, 10]], [[29, 14], [17, 4], [24, 46], [49, 10]], [[13, 32], [4, 18], [42, 32], [48, 14]], [[40, 7], [20, 4], [10, 67], [43, 22]], [[18, 31], [19, 6], [20, 61], [34, 34]]]
};
QREncode.prototype = {
    encodeToPix: function(e, t, n, r) {
        var i = QRBase.nModulesFromVersion(n),
        s = {},
        o;
        this.nModules = i,
        s.width = i,
        s.height = i,
        s.arr = [];
        for (o = 0; o < i; o++) s.arr[o] = [];
        return s.setBackground = function() {
            for (o = 0; o < i; o++) {
                var e;
                for (e = 0; e < i; e++) this.arr[o][e] = !1
            }
        },
        s.setDark = function(e, t) {
            if (e > i - 1 || t > i - 1) return;
            this.arr[e][t] = !0
        },
        s.isDark = function(e, t) {
            return e > i - 1 || t > i - 1 ? !1 : s.arr[e][t]
        },
        this.encodeInit(n, r, s),
        this.encodeAddText(e, t),
        this.encode(),
        s.arr
    },
    setErrorThrow: function(e) {
        QRBase.setErrorThrow(e)
    },
    encodeInit: function(e, t, n) {
        this.version = e,
        this.ECLevel = t,
        this.image = n,
        this.image.setBackground(),
        this.bitIdx = 0,
        QRBase.setBlocks(this),
        this.data = [];
        var r;
        for (r = 0; r < this.nDataCodewords; r++) this.data[r] = 0;
        this.pixels = [];
        for (r = 0; r < this.nModules; r++) this.pixels[r] = []
    },
    encodeAddText: function(e, t) {
        this.addTextImplementation(e, t)
    },
    encode: function() {
        this.addTextImplementation(QRBase.MODE.Terminator, null),
        this.appendPadding(),
        this.addErrorCorrection(),
        this.encodeBestMask(),
        this.pixelsToImage()
    },
    addTextImplementation: function(e, t) {
        function n(e, t, n, r) {
            var i = t >>> 3,
            s = 24 - (t & 7) - n,
            o = r << s;
            e[i + 2] = o & 255,
            o >>>= 8,
            e[i + 1] = o & 255,
            o >>>= 8,
            e[i] += o & 255
        }
        function r(e, t) {
            return t = t.toUpperCase(),
            e.alphanumRev.hasOwnProperty(t) || QRBase.errorThrow("Invalid character for Alphanumeric encoding [" + t + "]"),
            e.alphanumRev[t]
        }
        function i(e, t) {
            var i = t.length,
            s = QRBase.nCountBits(QRBase.MODE.AlphaNumeric, e.version),
            o,
            u;
            n(e.data, e.bitIdx, s, i),
            e.bitIdx += s;
            for (o = 0; o < i - 1; o += 2) u = 45 * r(e, t[o]) + r(e, t[o + 1]),
            n(e.data, e.bitIdx, 11, u),
            e.bitIdx += 11;
            i % 2 && (n(e.data, e.bitIdx, 6, r(e, t[i - 1])), e.bitIdx += 6)
        }
        function s(e, t) {
            var r = QRBase.nCountBits(QRBase.MODE.EightBit, e.version),
            i;
            n(e.data, e.bitIdx, r, t.length),
            e.bitIdx += r;
            for (i = 0; i < t.length; i++) n(e.data, e.bitIdx, 8, t[i].charCodeAt()),
            e.bitIdx += 8
        }
        function o(e, t) {
            var r = t.length,
            i = QRBase.nCountBits(QRBase.MODE.Numeric, e.version),
            s = [],
            o,
            u,
            a;
            n(e.data, e.bitIdx, i, r),
            e.bitIdx += i;
            for (u = 0; u < r; u++) a = t[u].charCodeAt() - 48,
            (a < 0 || a > 9) && QRBase.errorThrow("Invalid character for Numeric encoding [" + t[u] + "]"),
            s.push(a);
            for (u = 0; u < r - 2; u += 3) o = 100 * s[u] + 10 * s[u + 1] + s[u + 2],
            n(e.data, e.bitIdx, 10, o),
            e.bitIdx += 10;
            r % 3 === 1 ? (o = s[r - 1], n(e.data, e.bitIdx, 4, o), e.bitIdx += 4) : r % 3 === 2 && (o = 10 * s[r - 2] + s[r - 1], n(e.data, e.bitIdx, 7, o), e.bitIdx += 7)
        }
        n(this.data, this.bitIdx, 4, e),
        this.bitIdx += 4;
        if (e === QRBase.MODE.AlphaNumeric) i(this, t);
        else if (e === QRBase.MODE.EightBit) s(this, QRBase.unicodeToUtf8(t));
        else if (e === QRBase.MODE.Numeric) o(this, t);
        else {
            if (e === QRBase.MODE.Terminator) return;
            QRBase.errorThrow("Unsupported ECI mode: " + e)
        }
        this.bitIdx / 8 > this.nDataCodewords && QRBase.errorThrow("Text too long for this EC version")
    },
    appendPadding: function() {
        var e;
        for (e = Math.floor((this.bitIdx - 1) / 8) + 1; e < this.nDataCodewords; e += 2) this.data[e] = 236,
        this.data[e + 1] = 17
    },
    addErrorCorrection: function() {
        var e = new ReedSolomon(this.nBlockEcWords),
        t = [],
        n = 0,
        r,
        i,
        s,
        o,
        u;
        for (r = 0; r < this.blockDataLengths.length; r++) {
            s = this.blockDataLengths[r],
            o = this.data.slice(n, n + s),
            n += s;
            for (i = 0; i < s; i++) t[this.blockIndices[r][i]] = o[i];
            u = e.encode(o);
            for (i = 0; i < u.length; i++) t[this.blockIndices[r][s + i]] = u[i]
        }
        this.bytes = t
    },
    calculatePenalty: function() {
        function e(e) {
            var t = 0,
            n, r, i, s, o;
            for (n = 0; n < e.nModules; n++) {
                i = [0, 0],
                s = [0, 0];
                for (o = 0; o <= 1; o++) {
                    for (r = 0; r < e.nModules; r++) e.pixels[o * n + (1 - o) * r][(1 - o) * n + o * r] ? (s[o] > 5 && (t += 3 + s[o] - 5), s[o] = 0, i[o]++) : (i[o] > 5 && (t += 3 + i[o] - 5), s[o]++, i[o] = 0);
                    s[o] > 5 && (t += 3 + s[o] - 5),
                    i[o] > 5 && (t += 3 + i[o] - 5)
                }
            }
            return t
        }
        function t(e) {
            var t = 0,
            n, r, i;
            for (n = 0; n < e.nModules - 1; n++) for (r = 0; r < e.nModules - 1; r++) {
                i = 0,
                e.pixels[n][r] && i++,
                e.pixels[n + 1][r] && i++,
                e.pixels[n][r + 1] && i++,
                e.pixels[n + 1][r + 1] && i++;
                if (i === 0 || i === 4) t += 3
            }
            return t
        }
        function n(e) {
            var t = 0,
            n = 1488,
            r = 2047,
            i = r << 4,
            s = 32767,
            o, u, a, f;
            for (o = 0; o < e.nModules - 1; o++) {
                a = [0, 0];
                for (u = 0; u < e.nModules - 1; u++) for (f = 0; f <= 1; f++) a[f] = a[f] << 1 & s,
                e.pixels[f * o + (1 - f) * u][(1 - f) * o + f * u] && a[f]++,
                u >= 11 && ((a[f] & r) === n ? t += 40 : u < e.nModules - 4 - 7 && (a[f] & i) === n && (t += 40))
            }
            return t
        }
        function r(e) {
            var t = 0,
            n, r;
            for (n = 0; n < e.nModules - 1; n++) for (r = 0; r < e.nModules - 1; r++) e.pixels[n][r] && t++;
            return 10 * Math.floor(Math.abs(t / (e.nModule * e.nModules) - .5) / .05)
        }
        var i = e(this),
        s = t(this),
        o = n(this),
        u = r(this),
        a = i + s + o + u;
        return a
    },
    encodeBestMask: function() {
        var e = 0,
        t = 999999,
        n, r, i, s;
        QRBase.setFunctionalPattern(this);
        for (n = 0; n < 8; n++) {
            for (r = 0; r < this.nModules; r++) for (i = 0; i < this.nModules; i++) this.pixels[r][i] = !1;
            this.encodeFunctionalPatterns(n),
            this.encodeData(n),
            s = this.calculatePenalty(n),
            s < t && (t = s, e = n)
        }
        this.mask = e;
        if (this.mask !== 7) {
            for (r = 0; r < this.nModules; r++) for (i = 0; i < this.nModules; i++) this.pixels[r][i] = !1;
            this.encodeFunctionalPatterns(this.mask),
            this.encodeData(this.mask)
        }
    },
    encodeFunctionalPatterns: function(e) {
        function t(e, t, n) {
            var r, i;
            for (r = 0; r <= 5; r++) e.pixels[t + r][n] = !0,
            e.pixels[t + 6][n + r] = !0,
            e.pixels[t + 6 - r][n + 6] = !0,
            e.pixels[t][n + 6 - r] = !0;
            for (r = 2; r <= 4; r++) for (i = 2; i <= 4; i++) e.pixels[t + r][n + i] = !0
        }
        function n(e) {
            var t = QRBase.versionInfo[e.version],
            n,
            r;
            for (r = 0; r < 6; r++) for (n = e.nModules - 11; n < e.nModules - 11 + 3; n++) t & 1 && (e.pixels[n][r] = !0),
            t /= 2
        }
        function r(e) {
            var t = QRBase.versionInfo[e.version],
            n,
            r;
            for (n = 0; n < 6; n++) for (r = e.nModules - 11; r < e.nModules - 11 + 3; r++) t & 1 && (e.pixels[n][r] = !0),
            t /= 2
        }
        function i(e, t) {
            var n;
            for (n = 8; n < e.nModules - 8; n += 2) t ? e.pixels[n][6] = !0 : e.pixels[6][n] = !0
        }
        function s(e, t, n) {
            var r;
            for (r = 0; r <= 3; r++) e.pixels[t + r][n] = !0,
            e.pixels[t + 4][n + r] = !0,
            e.pixels[t + 4 - r][n + 4] = !0,
            e.pixels[t][n + 4 - r] = !0;
            e.pixels[t + 2][n + 2] = !0
        }
        function o(e) {
            var t = QRBase.alignmentPatterns[e.version].length,
            n,
            r;
            for (n = 0; n < t; n++) for (r = 0; r < t; r++) {
                if (n === 0 && r === 0 || n === 0 && r === t - 1 || n === t - 1 && r === 0) continue;
                s(e, QRBase.alignmentPatterns[e.version][n] - 2, QRBase.alignmentPatterns[e.version][r] - 2)
            }
        }
        function u(e, t) {
            var n = 8,
            r;
            for (r = 0; r <= 5; r++) t & 1 && (e.pixels[n][r] = !0),
            t /= 2;
            t & 1 && (e.pixels[8][7] = !0),
            t /= 2,
            t & 1 && (e.pixels[8][8] = !0),
            t /= 2,
            t & 1 && (e.pixels[7][8] = !0),
            t /= 2,
            r = 8;
            for (n = 5; n >= 0; n--) t & 1 && (e.pixels[n][r] = !0),
            t /= 2
        }
        function a(e, t) {
            var n = 8,
            r;
            for (r = e.nModules - 1; r > e.nModules - 1 - 8; r--) t & 1 && (e.pixels[r][n] = !0),
            t /= 2;
            r = 8;
            for (n = e.nModules - 7; n < e.nModules - 1; n++) t & 1 && (e.pixels[r][n] = !0),
            t /= 2
        }
        t(this, 0, 0),
        t(this, 0, this.nModules - 7),
        t(this, this.nModules - 7, 0),
        this.version >= 7 && (n(this), r(this)),
        i(this, !0),
        i(this, !1),
        this.version > 1 && o(this);
        var f = QRBase.formatInfo[e + 8 * this.ECLevel];
        u(this, f),
        a(this, f)
    },
    encodeData: function(e) {
        function t(e, t, n, r, i) {
            var s;
            switch (t) {
            case 0:
                s = (r + n) % 2;
                break;
            case 1:
                s = r % 2;
                break;
            case 2:
                s = n % 3;
                break;
            case 3:
                s = (r + n) % 3;
                break;
            case 4:
                s = (Math.floor(r / 2) + Math.floor(n / 3)) % 2;
                break;
            case 5:
                s = r * n % 2 + r * n % 3;
                break;
            case 6:
                s = (r * n % 2 + r * n % 3) % 2;
                break;
            case 7:
                s = ((r + n) % 2 + r * n % 3) % 2
            }
            s === 0 ? e[n][r] = !i: e[n][r] = i
        }
        var n = !0,
        r = 0,
        i = this.bytes[r],
        s = 0,
        o = 128,
        u,
        a,
        f,
        l;
        for (a = this.nModules - 1; a > 0; a -= 2) {
            a === 6 && a--;
            for (f = 0; f < this.nModules; f++) {
                u = n ? this.nModules - 1 - f: f;
                for (l = 0; l < 2; l++) this.functionalPattern[a - l][u] || (t(this.pixels, e, a - l, u, i & o), o >>>= 1, s++, s === 8 && (s = 0, o = 128, r++, i = this.bytes[r]))
            }
            n ^= !0
        }
    },
    pixelsToImage: function() {
        var e, t;
        for (e = 0; e < this.nModules; e++) for (t = 0; t < this.nModules; t++) this.pixels[e][t] && this.setDark(e, t)
    },
    getDataCapacity: function(e, t, n) {
        var r = QRBase.nCodewords[e],
        i = QRBase.nECCodewords[e][t],
        s = r - i,
        o = 8 * s,
        u = 0;
        return o -= 4,
        o -= QRBase.nCountBits(n, e),
        n === QRBase.MODE.AlphaNumeric ? (u = Math.floor(o / 11) * 2, o >= u / 2 * 11 + 6 && u++) : n === QRBase.MODE.EightBit ? u = Math.floor(o / 8) : n === QRBase.MODE.Numeric ? (u = Math.floor(o / 10) * 3, o >= u / 3 * 10 + 4 && (o >= u / 3 * 10 + 7 && u++, u++)) : QRBase.errorThrow("Unsupported ECI mode: " + n),
        u
    },
    getVersionFromLength: function(e, t, n) {
        var r, i = QRBase.unicodeToUtf8(n).length;
        for (r = 1; r <= 40; r++) if (this.getDataCapacity(r, e, t) >= i) return r;
        QRBase.errorThrow("Text is too long, even for a version 40 QR Code")
    },
    setDark: function(e, t) {
        this.image.setDark(e, t)
    },
    alphanumRev: {
        0 : 0,
        1 : 1,
        2 : 2,
        3 : 3,
        4 : 4,
        5 : 5,
        6 : 6,
        7 : 7,
        8 : 8,
        9 : 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        G: 16,
        H: 17,
        I: 18,
        J: 19,
        K: 20,
        L: 21,
        M: 22,
        N: 23,
        O: 24,
        P: 25,
        Q: 26,
        R: 27,
        S: 28,
        T: 29,
        U: 30,
        V: 31,
        W: 32,
        X: 33,
        Y: 34,
        Z: 35,
        " ": 36,
        $: 37,
        "%": 38,
        "*": 39,
        "+": 40,
        "-": 41,
        ".": 42,
        "/": 43,
        ":": 44
    }
},
QRDecode.prototype = {
    decodePix: function(e) {
        return this.decodeImage(e)
    },
    decodeImageData: function(e, t, n) {
        return this.setImageData(e, t, n),
        this.decode()
    },
    decodeImageDataInsideBordersWithMaxVersion: function(e, t, n, r, i, s, o, u) {
        return this.setImageData(e, t, n),
        this.imageLeft = r,
        this.imageRight = i,
        this.imageTop = s,
        this.imageBottom = o,
        this.imageSize = (this.imageRight - this.imageLeft + 1 + (this.imageBottom - this.imageTop + 1)) / 2,
        this.maxVersion = u,
        this.decodeInsideBordersWithMaxVersion()
    },
    setImageData: function(e, t, n) {
        e.minCol = 255,
        e.maxCol = 0;
        var r = 0,
        i, s, o, u;
        for (i = 0; i < t; i++) for (s = 0; s < n; s++) o = i * 4 + s * t * 4,
        u = .3 * e.data[o] + .59 * e.data[o + 1] + .11 * e.data[o + 2],
        r += u,
        u < e.minCol && (e.minCol = u),
        u > e.maxCol && (e.maxCol = u);
        if (e.maxCol - e.minCol < 25.5) throw "Image does not have enough contrast (this.image_data.min_col=" + e.minCol + " this.image_data.max_col=" + e.maxCol + ")";
        e.threshold = r / (t * n),
        e.getGray = function(e, t, n) {
            var r = 0,
            i, s, o;
            for (i = e; i < e + n; i++) for (s = t; s < t + n; s++) o = i * 4 + s * this.width * 4,
            r = r + .3 * this.data[o] + .59 * this.data[o + 1] + .11 * this.data[o + 2];
            return r / n / n
        },
        e.isDark = function(e, t, n) {
            var r = this.getGray(e, t, n);
            return r < this.threshold
        },
        this.image = e
    },
    decodeImage: function(e) {
        return this.image = e,
        this.decode()
    },
    decode: function() {
        return this.findImageBorders(),
        this.maxVersion = 40,
        this.decodeInsideBordersWithMaxVersion(),
        this.data
    },
    decodeInsideBordersWithMaxVersion: function() {
        return this.findModuleSize(),
        QRBase.setFunctionalPattern(this),
        this.extractCodewords(),
        QRBase.setBlocks(this),
        this.correctErrors(),
        this.extractData(),
        this.data
    },
    findImageBorders: function() {
        var e, t, n, r = 7,
        i = 2;
        for (e = 0; e < this.image.width; e++) {
            n = 0;
            for (t = 0; t < this.image.height; t++) n += this.image.isDark(e, t, 1);
            if (n >= r) break
        }
        this.imageLeft = e;
        for (e = this.image.width - 1; e >= 0; e--) {
            n = 0;
            for (t = 0; t < this.image.height; t++) n += this.image.isDark(e, t, 1);
            if (n >= r) break
        }
        this.imageRight = e;
        for (t = 0; t < this.image.height; t++) {
            n = 0;
            for (e = 0; e < this.image.width; e++) n += this.image.isDark(e, t, 1);
            if (n >= r) break
        }
        this.imageTop = t;
        for (t = this.image.height - 1; t >= 0; t--) {
            n = 0;
            for (e = 0; e < this.image.width; e++) n += this.image.isDark(e, t, 1);
            if (n >= r) break
        }
        this.imageBottom = t;
        if (this.imageRight - this.imageLeft + 1 < 21 || this.imageBottom - this.imageTop + 1 < 21) throw "Found no image data to decode";
        if (Math.abs(this.imageRight - this.imageLeft - (this.imageBottom - this.imageTop)) > i) throw "Image data is not rectangular";
        this.imageSize = (this.imageRight - this.imageLeft + 1 + (this.imageBottom - this.imageTop + 1)) / 2
    },
    findModuleSize: function() {
        function e(e, t, n, r, i, s) {
            var o, u, a = 0;
            for (o = 0; o <= 5; o++) e.isDarkWithSize(t + o, n, s) && (a += 1),
            e.isDarkWithSize(t + 6, n + o, s) && (a += 1),
            e.isDarkWithSize(t + 6 - o, n + 6, s) && (a += 1),
            e.isDarkWithSize(t, n + 6 - o, s) && (a += 1);
            for (o = 0; o <= 3; o++) e.isDarkWithSize(t + o + 1, n + 1, s) || (a += 1),
            e.isDarkWithSize(t + 5, n + o + 1, s) || (a += 1),
            e.isDarkWithSize(t + 5 - o, n + 5, s) || (a += 1),
            e.isDarkWithSize(t + 1, n + 5 - o, s) || (a += 1);
            for (o = 0; o <= 2; o++) for (u = 0; u <= 2; u++) e.isDarkWithSize(3 + t, 3 + n, s) && (a += 1);
            for (o = 0; o <= 6; o++) e.isDarkWithSize(t + r, n + o, s) || (a += 1),
            e.isDarkWithSize(t + o, n + i, s) || (a += 1);
            return e.isDarkWithSize(t + r, n + i, s) || (a += 1),
            a
        }
        function t(e, t, n, r) {
            var i = 0,
            s = 6,
            o = 8,
            u = 0,
            a = 1,
            f = 5,
            l = [],
            c,
            h = !0,
            p,
            d,
            v,
            m;
            t && (s = 8, o = 6, u = 1, a = 0);
            for (c = 0; c < f; c++) l.push(1);
            for (p = 0; p < n - 8 - 8; p++) {
                d = s + p * u,
                v = o + p * a,
                h === e.isDarkWithSize(d, v, r) ? (i++, l.push(1)) : l.push(0),
                h = !h,
                m = 0;
                for (c = l.length - f; c < l.length - 1; c++) l[c] && (m += 1);
                if (m < 3) return 0
            }
            return i
        }
        function n(e, t, n, r) {
            var i = 0,
            s;
            for (s = 0; s <= 3; s++) e.isDarkWithSize(t + s, n, r) && (i += 1),
            e.isDarkWithSize(t + 4, n + s, r) && (i += 1),
            e.isDarkWithSize(t + 4 - s, n + 4, r) && (i += 1),
            e.isDarkWithSize(t, n + 4 - s, r) && (i += 1);
            for (s = 0; s <= 1; s++) e.isDarkWithSize(t + s + 1, n + 1, r) || (i += 1),
            e.isDarkWithSize(t + 3, n + s + 1, r) || (i += 1),
            e.isDarkWithSize(t + 3 - s, n + 3, r) || (i += 1),
            e.isDarkWithSize(t + 1, n + 3 - s, r) || (i += 1);
            return e.isDarkWithSize(t + 2, n + 2, r) && (i += 1),
            i
        }
        function r(e, t, r) {
            var i = 0,
            s = QRBase.alignmentPatterns[t].length,
            o,
            u,
            a;
            for (o = 0; o < s; o++) for (u = 0; u < s; u++) {
                if (o === 0 && u === 0 || o === 0 && u === s - 1 || o === s - 1 && u === 0) continue;
                a = n(e, QRBase.alignmentPatterns[t][o] - 2, QRBase.alignmentPatterns[t][u] - 2, r),
                a > 24 && i++
            }
            return i
        }
        function i(e, t) {
            var n, r;
            for (n = 7; n <= 40; n++) {
                r = e.hammingDistance(t, QRBase.versionInfo[n]);
                if (r <= 3) return [n, r]
            }
            return [0, 4]
        }
        function s(e, t, n) {
            var r = 1,
            s = 0,
            o, u;
            for (u = 0; u < 6; u++) for (o = t - 11; o < t - 11 + 3; o++) e.isDarkWithSize(o, u, n) && (s += r),
            r *= 2;
            return i(e, s)
        }
        function o(e, t, n) {
            var r = 1,
            s = 0,
            o, u;
            for (o = 0; o < 6; o++) for (u = t - 11; u < t - 11 + 3; u++) e.isDarkWithSize(o, u, n) && (s += r),
            r *= 2;
            return i(e, s)
        }
        function u(e, t) {
            var n, r;
            for (n = 0; n < 32; n++) {
                r = e.hammingDistance(t, QRBase.formatInfo[n]);
                if (r <= 3) return [n, r]
            }
            return [0, 4]
        }
        function a(e, t, n) {
            var r = 1,
            i = 0,
            s = 8,
            o;
            for (o = 0; o <= 5; o++) e.isDarkWithSize(s, o, n) && (i += r),
            r *= 2;
            e.isDarkWithSize(8, 7, n) && (i += r),
            r *= 2,
            e.isDarkWithSize(8, 8, n) && (i += r),
            r *= 2,
            e.isDarkWithSize(7, 8, n) && (i += r),
            r *= 2,
            o = 8;
            for (s = 5; s >= 0; s--) e.isDarkWithSize(s, o, n) && (i += r),
            r *= 2;
            return u(e, i)
        }
        function f(e, t, n) {
            var r = 1,
            i = 0,
            s, o = 8;
            for (s = t - 1; s > t - 1 - 8; s--) e.isDarkWithSize(s, o, n) && (i += r),
            r *= 2;
            s = 8;
            for (o = t - 7; o < t - 1; o++) e.isDarkWithSize(s, o, n) && (i += r),
            r *= 2;
            return u(e, i)
        }
        function l(e) {
            var t = 4,
            n;
            for (n = 0; n < 3; n++) t -= 64 - e[n];
            return t < 0 && (t = 0),
            t
        }
        function c(e, t) {
            var n = (e[0] + e[1]) / (2 * t);
            return n = 1 - n,
            n >= .14 ? 0 : n >= .11 ? 1 : n >= .07 ? 2 : n >= 1e-5 ? 3 : 4
        }
        function h(e, t) {
            var n = e / t;
            return n = 1 - n,
            n >= .3 ? 0 : n >= .2 ? 1 : n >= .1 ? 2 : n >= 1e-5 ? 3 : 4
        }
        function p(n, i) {
            var u, p = [],
            d = QRBase.nModulesFromVersion(i),
            v = n.imageSize / d,
            m = [0, 0, 0],
            g = [0, 0],
            y = [0, 0],
            b = [0, 0],
            w = -3,
            E = 0,
            S,
            x,
            T,
            N,
            C,
            k = 4,
            L;
            m[0] = e(n, 0, 0, 7, 7, v);
            if (m[0] < 61) return [i, 0];
            m[1] = e(n, 0, d - 7, 7, -1, v);
            if (m[0] + m[1] < 125) return [i, 0];
            m[2] = e(n, d - 7, 0, -1, 7, v),
            u = l(m);
            if (u < 1) return [i, 0];
            p.push(u);
            if (i >= 7) {
                g = s(n, d, v),
                y = o(n, d, v),
                S = i,
                g[1] < y[1] ? g[1] < 4 && (S = g[0]) : y[1] < 4 && (S = y[0]),
                S !== i && (i = S),
                d = QRBase.nModulesFromVersion(i),
                v = n.imageSize / d,
                u = Math.round((4 - g[1] + (4 - y[1])) / 2);
                if (u < 1) return [i, 0];
                p.push(u)
            }
            b[0] = t(n, !0, d, v),
            b[1] = t(n, !1, d, v),
            u = c(b, d - 8 - 8);
            if (u < 1) return [i, 0];
            p.push(u),
            i > 1 && (w = r(n, i, v)),
            u = h(w, QRBase.alignmentPatterns[i].length * QRBase.alignmentPatterns[i].length - 3);
            if (u < 1) return [i, 0];
            p.push(u),
            x = a(n, d, v),
            T = f(n, d, v),
            x[1] < T[1] ? E = x[0] : E = T[0],
            N = Math.floor(E / 8),
            C = E % 8,
            u = Math.round((4 - x[1] + (4 - T[1])) / 2);
            if (u < 1) return [i, 0];
            p.push(u);
            for (L = 0; L < p.length; L++) p[L] < k && (k = p[L]);
            return [i, k, N, C]
        }
        var d = [0, 0],
        v,
        m;
        for (v = 1; v <= this.maxVersion; v++) {
            m = p(this, v),
            m[1] > d[1] && (d = m);
            if (m[1] === 4) break
        }
        this.version = d[0],
        this.nModules = QRBase.nModulesFromVersion(this.version),
        this.moduleSize = this.imageSize / this.nModules,
        this.functionalGrade = d[1],
        this.ECLevel = d[2],
        this.mask = d[3];
        if (this.functionalGrade < 1) throw "Unable to decode a function pattern"
    },
    extractCodewords: function() {
        function e(e, t, n) {
            var r, i;
            switch (e.mask) {
            case 0:
                r = (n + t) % 2;
                break;
            case 1:
                r = n % 2;
                break;
            case 2:
                r = t % 3;
                break;
            case 3:
                r = (n + t) % 3;
                break;
            case 4:
                r = (Math.floor(n / 2) + Math.floor(t / 3)) % 2;
                break;
            case 5:
                r = n * t % 2 + n * t % 3;
                break;
            case 6:
                r = (n * t % 2 + n * t % 3) % 2;
                break;
            case 7:
                r = ((n + t) % 2 + n * t % 3) % 2
            }
            return r === 0 ? i = !e.isDark(t, n) : i = e.isDark(t, n),
            i
        }
        this.codewords = [];
        var t = !0,
        n = 0,
        r = 128,
        i = 0,
        s, o, u, a;
        for (o = this.nModules - 1; o > 0; o -= 2) {
            o === 6 && o--;
            for (a = 0; a < this.nModules; a++) {
                s = t ? this.nModules - 1 - a: a;
                for (u = 0; u < 2; u++) this.functionalPattern[o - u][s] || (e(this, o - u, s) && (n += r), r /= 2, r < 1 && (this.codewords.push(n), i = 0, r = 128, n = 0))
            }
            t ^= !0
        }
    },
    extractData: function() {
        function e(e, t, n, r) {
            var i = 24 - (n & 7) - r,
            s = (1 << r) - 1,
            o = n >>> 3;
            return (t[o] << 16 | t[++o] << 8 | t[++o]) >> i & s
        }
        function t(t, n) {
            var r = QRBase.nCountBits(QRBase.MODE.EightBit, t.version),
            i = e(t, n, t.bitIdx, r),
            s = "",
            o,
            u;
            t.bitIdx += r;
            for (o = 0; o < i; o++) u = e(t, n, t.bitIdx, 8),
            s += String.fromCharCode(u),
            t.bitIdx += 8;
            return QRBase.utf8Tounicode(s)
        }
        function n(t, n) {
            var r = QRBase.nCountBits(QRBase.MODE.AlphaNumeric, t.version),
            i = e(t, n, t.bitIdx, r),
            s = "",
            o,
            u;
            t.bitIdx += r;
            for (o = 0; o < Math.floor(i / 2); o++) u = e(t, n, t.bitIdx, 11),
            s += t.alphanum[Math.floor(u / 45)],
            s += t.alphanum[u % 45],
            t.bitIdx += 11;
            return i % 2 && (s += t.alphanum[e(t, n, t.bitIdx, 6)], t.bitIdx += 6),
            s
        }
        function r(t, n) {
            var r = QRBase.nCountBits(QRBase.MODE.Numeric, t.version),
            i = e(t, n, t.bitIdx, r),
            s = "",
            o,
            u,
            a,
            f,
            l;
            t.bitIdx += r;
            for (l = 0; l < Math.floor(i / 3); l++) o = e(t, n, t.bitIdx, 10),
            t.bitIdx += 10,
            u = Math.floor(o / 100),
            a = Math.floor(o % 100 / 10),
            f = o % 10,
            s += String.fromCharCode(48 + u, 48 + a, 48 + f);
            return i % 3 === 1 ? (o = e(t, n, t.bitIdx, 4), t.bitIdx += 4, s += String.fromCharCode(48 + o)) : i % 3 === 2 && (o = e(t, n, t.bitIdx, 7), t.bitIdx += 7, u = Math.floor(o / 10), a = o % 10, s += String.fromCharCode(48 + u, 48 + a)),
            s
        }
        var i = this.bytes,
        s = i.length * 8,
        o, u;
        for (o = 0; o < 4; o++) i.push(0);
        this.data = "",
        this.bitIdx = 0;
        while (this.bitIdx < s - 4) {
            u = e(this, i, this.bitIdx, 4),
            this.bitIdx += 4;
            if (u === QRBase.MODE.Terminator) break;
            if (u === QRBase.MODE.AlphaNumeric) this.data += n(this, i);
            else if (u === QRBase.MODE.EightBit) this.data += t(this, i);
            else {
                if (u !== QRBase.MODE.Numeric) throw "Unsupported ECI mode: " + u;
                this.data += r(this, i)
            }
        }
    },
    correctErrors: function() {
        var e = new ReedSolomon(this.nBlockEcWords),
        t = [],
        n = [],
        r,
        i,
        s,
        o;
        for (r = 0; r < this.blockIndices.length; r++) {
            i = [];
            for (o = 0; o < this.blockIndices[r].length; o++) i.push(this.codewords[this.blockIndices[r][o]]);
            s = e.decode(i);
            if (!e.corrected) throw this.errorGrade = 0,
            "Unable to correct errors (" + e.uncorrected_reason + ")";
            n = n.concat(s),
            t.push(e.n_errors)
        }
        this.errors = t,
        this.bytes = n,
        this.errorGrade = this.gradeErrors(t)
    },
    gradeErrors: function(e) {
        var t = this.nBlockEcWords,
        n = 0,
        r = 4,
        i;
        for (i = 0; i < e.length; i++) e[i] > n && (n = e[i]);
        return n > t / 2 - 1 ? r = 0 : n > t / 2 - 2 ? r = 1 : n > t / 2 - 3 ? r = 2 : n > t / 2 - 4 && (r = 3),
        r
    },
    hammingDistance: function(e, t) {
        function n(e) {
            var t;
            for (t = 0; e; t++) e &= e - 1;
            return t
        }
        var r = e ^ t;
        return n(r)
    },
    isDarkWithSize: function(e, t, n) {
        return this.image.isDark(Math.round(this.imageLeft + e * n), Math.round(this.imageTop + t * n), Math.round(n))
    },
    isDark: function(e, t) {
        return this.isDarkWithSize(e, t, this.moduleSize)
    },
    alphanum: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"]
},
function(e, t, n, r) {
    e.qrcode = {
        config: {
            text: "75Team",
            render: "canvas",
            bgColor: "#FFF",
            moduleColor: "#000",
            moduleSize: 5,
            mode: 4,
            ECLevel: 2,
            margin: 4,
            logo: "",
            error: function(e) {
                alert(e)
            }
        },
        Render: []
    };
    var i = function(t, n) {
        var r = this;
        return r.config = t,
        e.extend(r, {
            _init: function() {
                r.qr = new QREncode,
                r.qr.setErrorThrow(function(e) {
                    t.error(e)
                }),
                t.logo && (t.ECLevel = 2),
                r.version = r.qr.getVersionFromLength(t.ECLevel, t.mode, t.text),
                r.pixArr = r.qr.encodeToPix(t.mode, t.text, r.version, t.ECLevel),
                e.qrcode.Render[t.render](r, n)
            }
        }),
        r._init()
    };
    e.fn.qrcode = function(t) {
        var n = e(this),
        r = n.length,
        s,
        o = {};
        typeof t == "string" ? o.text = t: o = t,
        o = e.extend({},
        e.qrcode.config, o),
        new i(o,
        function(e) {
            for (s = 0; s < r; s++) n.eq(s).empty().append(e)
        })
    }
} (window.jQuery || $, window, document),
function(e, t, n, r) {
    "use strict";
    if (!e.qrcode) return;
    e.qrcode.Render.canvas = function(t, r) {
        var i = t.config,
        s = i.margin,
        o = i.margin,
        u = i.moduleSize,
        a = t.pixArr.length,
        f = 2 * i.margin + a,
        l = n.createElement("canvas"),
        c = l.getContext("2d"),
        h = function(e) {
            var t, n, r;
            e.indexOf("#") === 0 && (e = e.substr(1));
            if (e.length === 6) t = e.substr(0, 2),
            n = e.substr(2, 2),
            r = e.substr(4, 2);
            else {
                if (e.length !== 3) throw "error color";
                t = e.substr(0, 1),
                t += t,
                n = e.substr(1, 1),
                n += n,
                r = e.substr(2, 1),
                r += r
            }
            return "rgb(" + parseInt(t, 16) + ", " + parseInt(n, 16) + ", " + parseInt(r, 16) + ")"
        },
        p = function() {
            var e = i.margin * 2 + t.pixArr.length;
            l.width = e * u,
            l.height = e * u,
            c.fillStyle = h(i.bgColor),
            c.fillRect(0, 0, l.width, l.height)
        },
        d = function(e, t) {
            c.fillStyle = h(i.moduleColor),
            c.fillRect(e * u, t * u, u, u)
        },
        v = function(t) {
            var n = new Image;
            n.src = i.logo,
            n.onload = function() {
                var r = n.width,
                i = n.height,
                s = Math.max(r, i),
                o;
                s > a * u * .3 && (o = a * u * .3 / s, r *= o, i *= o),
                c.drawImage(n, (f * u - r) / 2, (f * u - i) / 2, r, i),
                e.isFunction(t) && t()
            }
        };
        p();
        for (; s < t.pixArr.length + i.margin; s++) {
            o = i.margin;
            for (; o < t.pixArr.length + i.margin; o++) t.pixArr[s - i.margin][o - i.margin] && d(s, o, h(i.moduleColor))
        }
        i.logo ? v(function() {
            e.isFunction(r) && r(l)
        }) : e.isFunction(r) && r(l)
    }
} (window.jQuery || $, window, document),
function(e, t, n, r) {
    "use strict";
    if (!e.qrcode) return;
    e.qrcode.Render.table = function(t, n) {
        var r = t.config,
        i = r.moduleSize,
        s = r.margin * i,
        o = t.pixArr.length,
        u = 2 * r.margin + o,
        a = e('<div style="position: relative;"></div>'),
        f,
        l = 0,
        c = 0,
        h = "<style>.qrtable, .qrtable tr, .qrtable td{border: 0;border-collapse: collapse;}</style>",
        p = function() {
            var t = '<table class="qrtable">',
            n = 0,
            r = 0;
            for (; n < o; n++) {
                r = 0,
                t += "<tr>";
                for (; r < o; r++) t += "<td></td>";
                t += "</td>"
            }
            t += "</table>",
            f = e(t),
            f.css({
                width: o * i,
                height: o * i
            })
        },
        d = function(e, t, n) {
            f.find("tr:nth-child(" + (t + 1) + ")").find("td:nth-child(" + (e + 1) + ")").css("backgroundColor", n)
        },
        v = function(t) {
            var n = new Image;
            n.src = r.logo,
            n.onload = function() {
                var s = n.width,
                a = n.height,
                f = Math.max(s, a),
                l,
                c;
                f > o * i * .3 && (l = o * i * .3 / f, s *= l, a *= l),
                c = e('<img src="' + r.logo + '" height="' + a + '" width="' + s + '"/>'),
                c.css({
                    position: "absolute",
                    top: (u * i - a) / 2,
                    left: (u * i - s) / 2
                }),
                e.isFunction(t) && t(c)
            }
        };
        p();
        for (; l < t.pixArr.length; l++) {
            c = 0;
            for (; c < t.pixArr.length; c++) t.pixArr[l][c] && d(l, c, r.moduleColor)
        }
        a.css({
            width: o * i,
            height: o * i,
            backgroundColor: r.bgcolor,
            padding: s
        }).append(h, f),
        r.logo ? v(function(t) {
            a.append(t),
            e.isFunction(n) && n(a)
        }) : e.isFunction(n) && n(a)
    }
} (window.jQuery || $, window, document),
function(e, t, n, r) {
    var i = function(t) {
        var n = this,
        r;
        n.text = "",

        e.extend(n, {
            _init: function(e) {
                var t = new QRDecode,
                r = t.decodeImageData(e, n.width, n.height);
                return r
            },
            getImageData: function(t) {
                var r;
                if (t.nodeName.toLowerCase() !== "canvas") {
                    if (!e(t).find("canvas").length) return ! 1;
                    t = e(t).find("canvas")[0]
                }
                return r = t.getContext("2d"),
                n.width = t.width,
                n.height = t.height,
                r.getImageData(0, 0, t.width, t.height)
            }
        }),
        r = n.getImageData(t),
        r && (n.text = n._init(r))
    };
    e.fn.qrdecode = function() {
        var t = e(this),
        n = t.length,
        r = "";
        return n && (r = (new i(t[0])).text),
        r
    }
} (window.jQuery || $, window, document);
var iOSReg = /;.*i[^\d]*((?:\d+_)*\d+).*Mac OS X/gi,
androidReg = /android/gi,
ua = navigator.userAgent,
isiOS = iOSReg.test(ua),
isAndroid = androidReg.test(ua),
isPhone = !1;
if (isiOS || isAndroid) isPhone = !0;
var FrameAnimation = function(e) {
    var t = this;
    t.$animElem = e.$animElem,
    t.isBackRun = e.isBackRun || !1,
    t.step = e.step || 5,
    t.space = e.space || 92,
    t.speed = e.speed || 100,
    t.bgTop = e.bgTop || 0,
    t.times = e.times || 1,
    t.interval = e.interval || e.speed,
    t.forwardRun = e.forwardRun,
    t.timeOut = {},
    t.count = 0,
    t.intervalCount = 0,
    t.init(),
    t.loop = e.loop || !1,
    t.end = e.end
};
FrameAnimation.prototype = {
    init: function() {
        var e = this;
        typeof e.forwardRun == "function" && e.forwardRun(),
        e.run()
    },
    run: function() {
        var e = this;
        e.$animElem.css({
            backgroundPosition: -e.space * e.count + "px " + e.bgTop + "px"
        }),
        e.count++,
        clearTimeout(e.timeOut);
        if (e.count < e.step) e.timeOut = setTimeout(function() {
            e.run()
        },
        e.speed);
        else { ! e.loop && e.times--,
            e.end && e.end();
            if (e.isBackRun) e.timeOut = setTimeout(function() {
                e.backRun()
            },
            e.interval);
            else if (e.times > 0 || e.loop) e.count = 0,
            e.timeOut = setTimeout(function() {
                e.init()
            },
            e.interval)
        }
    },
    backRun: function() {
        var e = this;
        e.count--,
        e.$animElem.css({
            backgroundPosition: -e.space * e.count + "px " + e.bgTop + "px"
        }),
        clearTimeout(e.timeOut);
        if (e.count > 0) e.timeOut = setTimeout(function() {
            e.backRun()
        },
        e.speed);
        else if (e.times > 0 || e.loop) e.timeOut = setTimeout(function() {
            e.init()
        },
        e.interval)
    },
    stop: function() {
        clearTimeout(this.timeOut)
    }
},
$(document).ready(function() {
    var e = function() {
        var e = {},
        t = Array.prototype.slice;
        return {
            publish: function() {
                var n = t.call(arguments),
                r = n.shift() || "",
                i = e[r] || [],
                s = i.length;
                while (s) i[--s].apply(this, n)
            },
            subscribe: function(t, n) {
                if (!t || typeof n != "function") return;
                e[t] || (e[t] = []),
                e[t].push(n)
            }
        }
    } (),
    t = function(e, t, n) {
        return Math.min(Math.max(e, t), n)
    },
    n = $("html").hasClass("csstransforms"),
    r = $("html").hasClass("cssanimations"),
    i = $("html").hasClass("backgroundsize"),
    s = $("html").hasClass("borderradius"),
    o = $(".dot"),
    u = $(".stage"),
    a = $(document),
    f = $(window),
    l = $(".container"),
    c = $(".layer .downloads"),
    h = document.body.clientHeight,
    p = document.body.clientWidth,
    d = u.length,
    v = [],
    m = 0,
    g = 0,
    y,
    b = !1,
    w = 0;
    window.innerWidth < 768 && (window.isPhone = !0),
    s && !isPhone && $(".dots").show(),
    r && !isPhone && $(".mouse").show(),
    isiOS ? $(".downloads").addClass("ios-mode") : isAndroid && $(".downloads").addClass("android-mode"),
    i || $(".stage").height(h),
    e.subscribe("setStage",
    function() {
        v = [];
        var t;
        isPhone ? (t = window.innerHeight, u.addClass("active")) : t = h,
        u.each(function(e, n) {
            e == 0 && (w = u.eq(0).offset().top),
            $(this).height(t),
            v.push( - t * e)
        }),
        window.isPhone || e.publish("setPosition", m)
    }),
    e.subscribe("setTop",
    function(e) {
        n ? (l.css("transform", "translateY(" + e + "px)"), l.css("transform", "translate3d(0," + e + "px,0)")) : l.animate({
            top: e
        },
        100)
    }),
    e.subscribe("activeDot",
    function(e) {
        o.removeClass("active"),
        o.eq(e).addClass("active")
    });
    var E, S;
    e.subscribe("setPosition",
    function(t) {
        var n = $(".stage.active").index();
        n != t && e.publish("leave.stage" + n),
        u.removeClass("active prev next"),
        u.eq(t).addClass("active"),
        S = t == 0 ? d - 1 : t - 1,
        E = t == d - 1 ? 0 : t + 1,
        t == 0 ? (u.last().addClass("prev"), u.not(u.first()).not(u.last()).addClass("next")) : t == d - 1 ? (u.first().addClass("next"), u.not(u.first()).not(u.eq(t)).addClass("prev")) : u.each(function(e, n) {
            e > t ? $(this).addClass("next") : e < t && $(this).addClass("prev")
        }),
        e.publish("active.stage" + t)
    }),
    e.subscribe("active.stage0",
    function() {}),
    
    e.subscribe("leave.stage0",
    function() {});
    var x = $(".stage-two"),
    T = $(".more-information", x),
    N;
    e.subscribe("active.stage1",
    function() {
        var t = new Image;
        t.src = "https://p.ssl.qhimg.com/t017372de28e985cd98.png",
        t.onload = function() {
            setTimeout(function() {
                e.publish("animateStage2", T)
            },
            1e3)
        }
    }),
    e.subscribe("animateStage2",
    function(e) {
        if (e.hasClass("animate")) return;
        e.addClass("animate"),
        N = new FrameAnimation({
            $animElem: e,
            step: 36,
            space: 204,
            speed: 100,
            end: function() {
                e.removeClass("animate").attr("style", "")
            }
        })
    }),
    e.subscribe("leave.stage1",
    function() {
        N.stop(),
        T.removeClass("animate").attr("style", "")
    }),
    e.subscribe("active.stage2",
    function() {}),
    e.subscribe("leave.stage2",
    function() {});
    var C;
    e.subscribe("active.stage3",
    function() {
        C = setInterval(function() {
            e.publish("moveFourItems")
        },
        2e3)
    }),
    e.subscribe("leave.stage3",
    function() {
        clearInterval(C)
    }),
    e.subscribe("activeStage",
    function(t) {
        e.publish("setPosition", t),
        e.publish("activeDot", t),
        m = t,
        t > 0 ? c.addClass("show") : c.removeClass("show")
    }),
    e.publish("setStage"),
    u.show(),
    $(".dot").click(function() {
        index = $(this).index(".dot"),
        e.publish("activeStage", index)
    }),
    $("#qrcode").qrcode({
        text: "http://www.chessgame.mobi/share/1/app.html" + location.search,
        logo: "http://www.chessgame.mobi/share/1/style/img/logo.png",
        moduleSize: 14
    }),
    !isPhone && i && $("body").on("mousewheel",
    function(t) {
        if ($(".extra").hasClass("show")) return;
        b || (b = !0, t.deltaY < 0 ? e.publish("activeStage", m == d - 1 ? 0 : m + 1) : e.publish("activeStage", m == 0 ? 0 : m - 1), setTimeout(function() {
            b = !1
        },
        1200))
    }),
    !isPhone && !i && $("#qrcode").qrcode({
        text: "http://m.haosou.com/app" + location.search,
        logo: "https://p.ssl.qhimg.com/t0103048b72eb9f152d.png",
        moduleSize: 7,
        margin: 3,
        render: "table"
    }),
    $("body").on("keyup",
    function(t) {
        if ($(".extra").hasClass("show")) return;
        t.keyCode == 40 || t.keyCode == 74 ? e.publish("activeStage", m == d - 1 ? 0 : m + 1) : (t.keyCode == 38 || t.keyCode == 75) && e.publish("activeStage", m == 0 ? 0 : m - 1)
    }),
    r || (e.subscribe("scaleCircle",
    function() {
        $(".circle").attr("style", "").animate({
            width: 500,
            height: 500,
            marginLeft: -250,
            marginTop: -250,
            opacity: 0
        },
        5e3),
        $(".circle2").attr("style", "").delay(2500).animate({
            width: 500,
            height: 500,
            marginLeft: -250,
            marginTop: -250,
            opacity: 0
        },
        5e3)
    }), e.publish("scaleCircle"), setInterval(function() {
        e.publish("scaleCircle")
    },
    7600));
    var k = $(".stage-four"),
    L = $(".gupiao,.kuaidi,.chuxing,.yaohao,.tianqi", k),
    A = L.eq(0),
    O = L.eq(1),
    M = L.eq(2),
    _ = L.eq(3),
    D = L.eq(4),
    P = [],
    H = 1e3,
    B = 100;
    e.subscribe("setFourItems",
    function() {
        P = [],
        L.each(function(e, t) {
            $(this).attr("style", ""),
            $(this).css({
                position: "absolute",
                left: $(this).offset().left,
                top: $(this).offset().top - k.offset().top,
                margin: "initial"
            }),
            P.push($(this).offset().left)
        })
    });
    var j = $(".search-items"),
    F = 6,
    I = 160,
    q;
    time = 0;
    var P = [ - 140];
    j.children().each(function(e, t) {
        P.push(~~$(this).css("left").replace(/px/, ""))
    });
    var R = P.pop(),
    U,
    z,
    W,
    X,
    V = $(".show-item"),
    J;
    e.subscribe("moveFourItems",
    function() {
        j.children().each(function(e, t) {
            var n = e - time % 6;
            n = n < 0 ? 6 + n: n;
            var r = P[n];
            n == 5 && (X = e + 1 > 5 ? 0 : e + 1, X = j.children().eq(X).attr("index"), $(this).removeClass("img-" + $(this).attr("index")).addClass("img-" + X), $(this).attr("index", X)),
            $(this).animate({
                left: r
            },
            500,
            function() {
                n == 0 && $(this).css("left", R)
            })
        }),
        J = ~~V.attr("index"),
        V.removeClass("show-item-" + J).animate({
            opacity: 0
        },
        500,
        function() {
            V.addClass("show-item-" + (J + 1) % 5).attr("index", (J + 1) % 5).animate({
                opacity: 1
            },
            500)
        }),
        time++
    });
    var K = $(".extra");
    $(".download.qrcode").click(function(e) {
        K.addClass("show")
    }),
    K.click(function(e) {
        $(this).removeClass("show")
    });
    var Q;
    $(window).resize(function(t) {
        if (isPhone) return;
        Q = setTimeout(function() {
            clearTimeout(Q),
            p = document.body.clientWidth,
            middleLine = p / 2,
            window.innerWidth > 768 && (h = document.body.clientHeight),
            e.publish("setStage")
        },
        1e3)
    }),
    isPhone && (e.publish("active.stage0"), e.publish("active.stage1"), e.publish("active.stage2"), e.publish("active.stage3"))
}),
function() {
    if (!window.isPhone) return;
    var e = document.createElement("div");
    e.className = "tipLayer",
    e.id = "tipLayer1",
    e.innerHTML = '<style>.tipLayer p {margin:0;padding:0}.tipLayer{background:#fff url(https://p.ssl.qhimg.com/d/inn/ea5438d7/arrow.png) no-repeat right top;background-size:40px 39px;line-height:24px;font-size:16px;color:#333;position:fixed;top:0;left:0;right:0;padding-left:10px;border:10px solid #fff;display:none;-webkit-transform:tanslateZ(0);z-index:99;}.tipLayer .close{position:absolute;right:0;bottom:0;width:20px;height:20px;background:url(https://p.ssl.qhimg.com/d/inn/2049823c/clo.png) no-repeat;background-size:20px 20px}.tipLayer span{color:#f07226}</style><p>\u597d\u65e0\u5948\uff0c\u5fae\u4fe1\u541b\u4e0d\u8ba9\u76f4\u63a5\u4e0b\u8f7d\uff0c</p><p>\u522b\u62c5\u5fc3\uff0c\u70b9\u51fb<span>\u53f3\u4e0a\u89d2</span>\uff0c</p><p>\u9009\u62e9\u201c<span>\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00</span>\u201d\u5c31\u80fd\u4e0b\u8f7d\u5566~</p><span class="close"></span>',
    document.body.insertBefore(e, document.body.firstChild)
} (),
$(function() {
    function e() {
        if (/micromessenger/i.test(navigator.userAgent)) return ! 0
    }
    if (window.isPhone) {
        var t = {
            
        },
        n = queryUrl(location.href, "frm") || "default",
        r = t[n];
        r || (n.indexOf("haosou_") == 0 ? r = ["http://down.360safe.com/haosou/" + n + ".apk", "auto"] : r = t["default"]),
        r[0] == "default" && n.indexOf("haosou_") == 0 && (r[0] = "http://down.360safe.com/haosou/" + n + ".apk", r[1] = "auto");
        var i = $("a.preview"),
        s = $("a.android"),
        o = $("a.ios"),
        u = i.attr("href"),
        a = $("#tipLayer1"),
        f = $(".close", a);
        f.click(function() {
            a.hide()
        }),
        n != "default" && (i.hide(), $(".downloads .text").css("marginTop", "60px"), typeof r[2] != undefined && s.find(".icon-text").text(r[2]));
        var l = function(t) {
            var n = "\u597d\u641c",
            r = "https://p.ssl.qhimg.com/t010c5082e6033d68ef.png",
            i = {
                url: t,
                name: n,
                logo: r
            };
            return e() && (isiOS || isAndroid) ? a.show() : location.href = i.url,
            !1
        };
        i.click(function() {
            return l(u + "?" + +(new Date)),
            !1
        }),
        s.click(function() {
            var e = r[0] + "?" + +(new Date);
            return l(e),
            !1
        }),
        o.click(function() {
            e() && a.show()
        }),
        window.isAndroid && r[1] === "auto" && setTimeout(function() {
            var e = r[0] + "?" + +(new Date);
            l(e)
        },
        1500)
    }
}),
function() {
    var e = queryUrl(location.href, "frm"),
    t = "http://m.so.com/mhtml/app_v3.html";
    e && (t += "?frm=" + e),
    isiOS ? t += "&phone=ios": t += "&phone=android",
    monitor.setUrl(t),
    monitor.setProject("360_mso_app").getTrack().getClickAndKeydown()
} ();