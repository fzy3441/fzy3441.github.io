/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e, t) {
    function n(e) {
        var t = e.length,
        n = lt.type(e);
        return lt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e) {
        var t = Nt[e] = {};
        return lt.each(e.match(ht) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function i(e, n, r, i) {
        if (lt.acceptData(e)) {
            var s, o, u = lt.expando,
            a = e.nodeType,
            f = a ? lt.cache: e,
            l = a ? e[u] : e[u] && u;
            if (l && f[l] && (i || f[l].data) || r !== t || "string" != typeof n) return l || (l = a ? e[u] = tt.pop() || lt.guid++:u),
            f[l] || (f[l] = a ? {}: {
                toJSON: lt.noop
            }),
            ("object" == typeof n || "function" == typeof n) && (i ? f[l] = lt.extend(f[l], n) : f[l].data = lt.extend(f[l].data, n)),
            o = f[l],
            i || (o.data || (o.data = {}), o = o.data),
            r !== t && (o[lt.camelCase(n)] = r),
            "string" == typeof n ? (s = o[n], null == s && (s = o[lt.camelCase(n)])) : s = o,
            s
        }
    }
    function s(e, t, n) {
        if (lt.acceptData(e)) {
            var r, i, s = e.nodeType,
            o = s ? lt.cache: e,
            a = s ? e[lt.expando] : lt.expando;
            if (o[a]) {
                if (t && (r = n ? o[a] : o[a].data)) {
                    lt.isArray(t) ? t = t.concat(lt.map(t, lt.camelCase)) : t in r ? t = [t] : (t = lt.camelCase(t), t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    while (i--) delete r[t[i]];
                    if (n ? !u(r) : !lt.isEmptyObject(r)) return
                } (n || (delete o[a].data, u(o[a]))) && (s ? lt.cleanData([e], !0) : lt.support.deleteExpando || o != o.window ? delete o[a] : o[a] = null)
            }
        }
    }
    function o(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(kt, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null: +r + "" === r ? +r: Ct.test(r) ? lt.parseJSON(r) : r
                } catch(s) {}
                lt.data(e, n, r)
            } else r = t
        }
        return r
    }
    function u(e) {
        var t;
        for (t in e) if (("data" !== t || !lt.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function a() {
        return ! 0
    }
    function f() {
        return ! 1
    }
    function l() {
        try {
            return Q.activeElement
        } catch(e) {}
    }
    function c(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function h(e, t, n) {
        if (lt.isFunction(t)) return lt.grep(e,
        function(e, r) {
            return !! t.call(e, r, e) !== n
        });
        if (t.nodeType) return lt.grep(e,
        function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Ut.test(t)) return lt.filter(t, e, n);
            t = lt.filter(t, e)
        }
        return lt.grep(e,
        function(e) {
            return lt.inArray(e, t) >= 0 !== n
        })
    }
    function p(e) {
        var t = Vt.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n
    }
    function d(e, t) {
        return lt.nodeName(e, "table") && lt.nodeName(1 === t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function v(e) {
        return e.type = (null !== lt.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function m(e) {
        var t = sn.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function g(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) lt._data(n, "globalEval", !t || lt._data(t[r], "globalEval"))
    }
    function y(e, t) {
        if (1 === t.nodeType && lt.hasData(e)) {
            var n, r, i, s = lt._data(e),
            o = lt._data(t, s),
            u = s.events;
            if (u) {
                delete o.handle,
                o.events = {};
                for (n in u) for (r = 0, i = u[n].length; i > r; r++) lt.event.add(t, n, u[n][r])
            }
            o.data && (o.data = lt.extend({},
            o.data))
        }
    }
    function b(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !lt.support.noCloneEvent && t[lt.expando]) {
                i = lt._data(t);
                for (r in i.events) lt.removeEvent(t, r, i.handle);
                t.removeAttribute(lt.expando)
            }
            "script" === n && t.text !== e.text ? (v(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), lt.support.html5Clone && e.innerHTML && !lt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function w(e, n) {
        var r, i, s = 0,
        o = typeof e.getElementsByTagName !== J ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== J ? e.querySelectorAll(n || "*") : t;
        if (!o) for (o = [], r = e.childNodes || e; null != (i = r[s]); s++) ! n || lt.nodeName(i, n) ? o.push(i) : lt.merge(o, w(i, n));
        return n === t || n && lt.nodeName(e, n) ? lt.merge([e], o) : o
    }
    function E(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }
    function S(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = Nn.length;
        while (i--) if (t = Nn[i] + n, t in e) return t;
        return r
    }
    function x(e, t) {
        return e = t || e,
        "none" === lt.css(e, "display") || !lt.contains(e.ownerDocument, e)
    }
    function T(e, t) {
        var n, r, i, s = [],
        o = 0,
        u = e.length;
        for (; u > o; o++) r = e[o],
        r.style && (s[o] = lt._data(r, "olddisplay"), n = r.style.display, t ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && x(r) && (s[o] = lt._data(r, "olddisplay", L(r.nodeName)))) : s[o] || (i = x(r), (n && "none" !== n || !i) && lt._data(r, "olddisplay", i ? n: lt.css(r, "display"))));
        for (o = 0; u > o; o++) r = e[o],
        r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "": "none"));
        return e
    }
    function N(e, t, n) {
        var r = yn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function C(e, t, n, r, i) {
        var s = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0,
        o = 0;
        for (; 4 > s; s += 2)"margin" === n && (o += lt.css(e, n + Tn[s], !0, i)),
        r ? ("content" === n && (o -= lt.css(e, "padding" + Tn[s], !0, i)), "margin" !== n && (o -= lt.css(e, "border" + Tn[s] + "Width", !0, i))) : (o += lt.css(e, "padding" + Tn[s], !0, i), "padding" !== n && (o += lt.css(e, "border" + Tn[s] + "Width", !0, i)));
        return o
    }
    function k(e, t, n) {
        var r = !0,
        i = "width" === t ? e.offsetWidth: e.offsetHeight,
        s = cn(e),
        o = lt.support.boxSizing && "border-box" === lt.css(e, "boxSizing", !1, s);
        if (0 >= i || null == i) {
            if (i = hn(e, t, s), (0 > i || null == i) && (i = e.style[t]), bn.test(i)) return i;
            r = o && (lt.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + C(e, t, n || (o ? "border": "content"), r, s) + "px"
    }
    function L(e) {
        var t = Q,
        n = En[e];
        return n || (n = A(e, t), "none" !== n && n || (ln = (ln || lt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ln[0].contentWindow || ln[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = A(e, t), ln.detach()), En[e] = n),
        n
    }
    function A(e, t) {
        var n = lt(t.createElement(e)).appendTo(t.body),
        r = lt.css(n[0], "display");
        return n.remove(),
        r
    }
    function O(e, t, n, r) {
        var i;
        if (lt.isArray(t)) lt.each(t,
        function(t, i) {
            n || kn.test(e) ? r(e, i) : O(e + "[" + ("object" == typeof i ? t: "") + "]", i, n, r)
        });
        else if (n || "object" !== lt.type(t)) r(e, t);
        else for (i in t) O(e + "[" + i + "]", t[i], n, r)
    }
    function M(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
            s = t.toLowerCase().match(ht) || [];
            if (lt.isFunction(n)) while (r = s[i++])"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function _(e, n, r, i) {
        function s(a) {
            var f;
            return o[a] = !0,
            lt.each(e[a] || [],
            function(e, a) {
                var l = a(n, r, i);
                return "string" != typeof l || u || o[l] ? u ? !(f = l) : t: (n.dataTypes.unshift(l), s(l), !1)
            }),
            f
        }
        var o = {},
        u = e === Wn;
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }
    function D(e, n) {
        var r, i, s = lt.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((s[i] ? e: r || (r = {}))[i] = n[i]);
        return r && lt.extend(!0, e, r),
        e
    }
    function P(e, n, r) {
        var i, s, o, u, a = e.contents,
        f = e.dataTypes;
        while ("*" === f[0]) f.shift(),
        s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
        if (s) for (u in a) if (a[u] && a[u].test(s)) {
            f.unshift(u);
            break
        }
        if (f[0] in r) o = f[0];
        else {
            for (u in r) {
                if (!f[0] || e.converters[u + " " + f[0]]) {
                    o = u;
                    break
                }
                i || (i = u)
            }
            o = o || i
        }
        return o ? (o !== f[0] && f.unshift(o), r[o]) : t
    }
    function H(e, t, n, r) {
        var i, s, o, u, a, f = {},
        l = e.dataTypes.slice();
        if (l[1]) for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s) if (e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift()) if ("*" === s) s = a;
        else if ("*" !== a && a !== s) {
            if (o = f[a + " " + s] || f["* " + s], !o) for (i in f) if (u = i.split(" "), u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]])) {
                o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                break
            }
            if (o !== !0) if (o && e["throws"]) t = o(t);
            else try {
                t = o(t)
            } catch(c) {
                return {
                    state: "parsererror",
                    error: o ? c: "No conversion from " + a + " to " + s
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function B() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function j() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function F() {
        return setTimeout(function() {
            Zn = t
        }),
        Zn = lt.now()
    }
    function I(e, t, n) {
        var r, i = (sr[t] || []).concat(sr["*"]),
        s = 0,
        o = i.length;
        for (; o > s; s++) if (r = i[s].call(n, t, e)) return r
    }
    function q(e, t, n) {
        var r, i, s = 0,
        o = ir.length,
        u = lt.Deferred().always(function() {
            delete a.elem
        }),
        a = function() {
            if (i) return ! 1;
            var t = Zn || F(),
            n = Math.max(0, f.startTime + f.duration - t),
            r = n / f.duration || 0,
            s = 1 - r,
            o = 0,
            a = f.tweens.length;
            for (; a > o; o++) f.tweens[o].run(s);
            return u.notifyWith(e, [f, s, n]),
            1 > s && a ? n: (u.resolveWith(e, [f]), !1)
        },
        f = u.promise({
            elem: e,
            props: lt.extend({},
            t),
            opts: lt.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: Zn || F(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = lt.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0,
                r = t ? f.tweens.length: 0;
                if (i) return this;
                for (i = !0; r > n; n++) f.tweens[n].run(1);
                return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]),
                this
            }
        }),
        l = f.props;
        for (R(l, f.opts.specialEasing); o > s; s++) if (r = ir[s].call(f, e, l, f.opts)) return r;
        return lt.map(l, I, f),
        lt.isFunction(f.opts.start) && f.opts.start.call(e, f),
        lt.fx.timer(lt.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function R(e, t) {
        var n, r, i, s, o;
        for (n in e) if (r = lt.camelCase(n), i = t[r], s = e[n], lt.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = lt.cssHooks[r], o && "expand" in o) {
            s = o.expand(s),
            delete e[r];
            for (n in s) n in e || (e[n] = s[n], t[n] = i)
        } else t[r] = i
    }
    function U(e, t, n) {
        var r, i, s, o, u, a, f = this,
        l = {},
        c = e.style,
        h = e.nodeType && x(e),
        p = lt._data(e, "fxshow");
        n.queue || (u = lt._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
            u.unqueued || a()
        }), u.unqueued++, f.always(function() {
            f.always(function() {
                u.unqueued--,
                lt.queue(e, "fx").length || u.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [c.overflow, c.overflowX, c.overflowY], "inline" === lt.css(e, "display") && "none" === lt.css(e, "float") && (lt.support.inlineBlockNeedsLayout && "inline" !== L(e.nodeName) ? c.zoom = 1 : c.display = "inline-block")),
        n.overflow && (c.overflow = "hidden", lt.support.shrinkWrapBlocks || f.always(function() {
            c.overflow = n.overflow[0],
            c.overflowX = n.overflow[1],
            c.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], tr.exec(i)) {
            if (delete t[r], s = s || "toggle" === i, i === (h ? "hide": "show")) continue;
            l[r] = p && p[r] || lt.style(e, r)
        }
        if (!lt.isEmptyObject(l)) {
            p ? "hidden" in p && (h = p.hidden) : p = lt._data(e, "fxshow", {}),
            s && (p.hidden = !h),
            h ? lt(e).show() : f.done(function() {
                lt(e).hide()
            }),
            f.done(function() {
                var t;
                lt._removeData(e, "fxshow");
                for (t in l) lt.style(e, t, l[t])
            });
            for (r in l) o = I(h ? p[r] : 0, r, f),
            r in p || (p[r] = o.start, h && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function z(e, t, n, r, i) {
        return new z.prototype.init(e, t, n, r, i)
    }
    function W(e, t) {
        var n, r = {
            height: e
        },
        i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Tn[i],
        r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function X(e) {
        return lt.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
    }
    var V, $, J = typeof t,
    K = e.location,
    Q = e.document,
    G = Q.documentElement,
    Y = e.jQuery,
    Z = e.$,
    et = {},
    tt = [],
    nt = "1.10.2",
    rt = tt.concat,
    it = tt.push,
    st = tt.slice,
    ot = tt.indexOf,
    ut = et.toString,
    at = et.hasOwnProperty,
    ft = nt.trim,
    lt = function(e, t) {
        return new lt.fn.init(e, t, $)
    },
    ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ht = /\S+/g,
    pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    dt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    vt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    mt = /^[\],:{}\s]*$/,
    gt = /(?:^|:|,)(?:\s*\[)+/g,
    yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    wt = /^-ms-/,
    Et = /-([\da-z])/gi,
    St = function(e, t) {
        return t.toUpperCase()
    },
    xt = function(e) { (Q.addEventListener || "load" === e.type || "complete" === Q.readyState) && (Tt(), lt.ready())
    },
    Tt = function() {
        Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", xt, !1), e.removeEventListener("load", xt, !1)) : (Q.detachEvent("onreadystatechange", xt), e.detachEvent("onload", xt))
    };
    lt.fn = lt.prototype = {
        jquery: nt,
        constructor: lt,
        init: function(e, n, r) {
            var i, s;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : dt.exec(e), !i || !i[1] && n) return ! n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof lt ? n[0] : n, lt.merge(this, lt.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n: Q, !0)), vt.test(i[1]) && lt.isPlainObject(n)) for (i in n) lt.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (s = Q.getElementById(i[2]), s && s.parentNode) {
                    if (s.id !== i[2]) return r.find(e);
                    this.length = 1,
                    this[0] = s
                }
                return this.context = Q,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : lt.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), lt.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return st.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = lt.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return lt.each(this, e, t)
        },
        ready: function(e) {
            return lt.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(st.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(lt.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: it,
        sort: [].sort,
        splice: [].splice
    },
    lt.fn.init.prototype = lt.fn,
    lt.extend = lt.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {},
        a = 1,
        f = arguments.length,
        l = !1;
        for ("boolean" == typeof u && (l = u, u = arguments[1] || {},
        a = 2), "object" == typeof u || lt.isFunction(u) || (u = {}), f === a && (u = this, --a); f > a; a++) if (null != (s = arguments[a])) for (i in s) e = u[i],
        r = s[i],
        u !== r && (l && r && (lt.isPlainObject(r) || (n = lt.isArray(r))) ? (n ? (n = !1, o = e && lt.isArray(e) ? e: []) : o = e && lt.isPlainObject(e) ? e: {},
        u[i] = lt.extend(l, o, r)) : r !== t && (u[i] = r));
        return u
    },
    lt.extend({
        expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === lt && (e.$ = Z),
            t && e.jQuery === lt && (e.jQuery = Y),
            lt
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? lt.readyWait++:lt.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--lt.readyWait: !lt.isReady) {
                if (!Q.body) return setTimeout(lt.ready);
                lt.isReady = !0,
                e !== !0 && --lt.readyWait > 0 || (V.resolveWith(Q, [lt]), lt.fn.trigger && lt(Q).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === lt.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === lt.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return ! isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? et[ut.call(e)] || "object": typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== lt.type(e) || e.nodeType || lt.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !at.call(e, "constructor") && !at.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(r) {
                return ! 1
            }
            if (lt.support.ownLast) for (n in e) return at.call(e, n);
            for (n in e);
            return n === t || at.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1),
            t = t || Q;
            var r = vt.exec(e),
            i = !n && [];
            return r ? [t.createElement(r[1])] : (r = lt.buildFragment([e], t, i), i && lt(i).remove(), lt.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n: "string" == typeof n && (n = lt.trim(n), n && mt.test(n.replace(yt, "@").replace(bt, "]").replace(gt, ""))) ? Function("return " + n)() : (lt.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch(s) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || lt.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && lt.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(wt, "ms-").replace(Et, St)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, s = 0,
            o = e.length,
            u = n(e);
            if (r) {
                if (u) {
                    for (; o > s; s++) if (i = t.apply(e[s], r), i === !1) break
                } else for (s in e) if (i = t.apply(e[s], r), i === !1) break
            } else if (u) {
                for (; o > s; s++) if (i = t.call(e[s], s, e[s]), i === !1) break
            } else for (s in e) if (i = t.call(e[s], s, e[s]), i === !1) break;
            return e
        },
        trim: ft && !ft.call("\ufeff\u00a0") ?
        function(e) {
            return null == e ? "": ft.call(e)
        }: function(e) {
            return null == e ? "": (e + "").replace(pt, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? lt.merge(r, "string" == typeof e ? [e] : e) : it.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (ot) return ot.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n: 0; r > n; n++) if (n in t && t[n] === e) return n
            }
            return - 1
        },
        merge: function(e, n) {
            var r = n.length,
            i = e.length,
            s = 0;
            if ("number" == typeof r) for (; r > s; s++) e[i++] = n[s];
            else while (n[s] !== t) e[i++] = n[s++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [],
            s = 0,
            o = e.length;
            for (n = !!n; o > s; s++) r = !!t(e[s], s),
            n !== r && i.push(e[s]);
            return i
        },
        map: function(e, t, r) {
            var i, s = 0,
            o = e.length,
            u = n(e),
            a = [];
            if (u) for (; o > s; s++) i = t(e[s], s, r),
            null != i && (a[a.length] = i);
            else for (s in e) i = t(e[s], s, r),
            null != i && (a[a.length] = i);
            return rt.apply([], a)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, s;
            return "string" == typeof n && (s = e[n], n = e, e = s),
            lt.isFunction(e) ? (r = st.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(st.call(arguments)))
            },
            i.guid = e.guid = e.guid || lt.guid++, i) : t
        },
        access: function(e, n, r, i, s, o, u) {
            var a = 0,
            f = e.length,
            l = null == r;
            if ("object" === lt.type(r)) {
                s = !0;
                for (a in r) lt.access(e, n, a, r[a], !0, o, u)
            } else if (i !== t && (s = !0, lt.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
                return l.call(lt(e), n)
            })), n)) for (; f > a; a++) n(e[a], r, u ? i: i.call(e[a], a, n(e[a], r)));
            return s ? e: l ? n.call(e) : f ? n(e[0], r) : o
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s],
            e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t) e.style[s] = o[s];
            return i
        }
    }),
    lt.ready.promise = function(t) {
        if (!V) if (V = lt.Deferred(), "complete" === Q.readyState) setTimeout(lt.ready);
        else if (Q.addEventListener) Q.addEventListener("DOMContentLoaded", xt, !1),
        e.addEventListener("load", xt, !1);
        else {
            Q.attachEvent("onreadystatechange", xt),
            e.attachEvent("onload", xt);
            var n = !1;
            try {
                n = null == e.frameElement && Q.documentElement
            } catch(r) {}
            n && n.doScroll &&
            function i() {
                if (!lt.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(e) {
                        return setTimeout(i, 50)
                    }
                    Tt(),
                    lt.ready()
                }
            } ()
        }
        return V.promise(t)
    },
    lt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        et["[object " + t + "]"] = t.toLowerCase()
    }),
    $ = lt(Q),
    function(e, t) {
        function n(e, t, n, r) {
            var i, s, o, u, a, f, l, c, d, v;
            if ((t ? t.ownerDocument || t: q) !== _ && M(t), t = t || _, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (u = t.nodeType) && 9 !== u) return [];
            if (P && !r) {
                if (i = bt.exec(e)) if (o = i[1]) {
                    if (9 === u) {
                        if (s = t.getElementById(o), !s || !s.parentNode) return n;
                        if (s.id === o) return n.push(s),
                        n
                    } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && F(t, s) && s.id === o) return n.push(s),
                    n
                } else {
                    if (i[2]) return et.apply(n, t.getElementsByTagName(e)),
                    n;
                    if ((o = i[3]) && x.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(o)),
                    n
                }
                if (x.qsa && (!H || !H.test(e))) {
                    if (c = l = I, d = t, v = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                        f = h(e),
                        (l = t.getAttribute("id")) ? c = l.replace(St, "\\$&") : t.setAttribute("id", c),
                        c = "[id='" + c + "'] ",
                        a = f.length;
                        while (a--) f[a] = c + p(f[a]);
                        d = pt.test(e) && t.parentNode || t,
                        v = f.join(",")
                    }
                    if (v) try {
                        return et.apply(n, d.querySelectorAll(v)),
                        n
                    } catch(m) {} finally {
                        l || t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(ft, "$1"), t, n, r)
        }
        function r() {
            function e(n, r) {
                return t.push(n += " ") > N.cacheLength && delete e[t.shift()],
                e[n] = r
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[I] = !0,
            e
        }
        function s(e) {
            var t = _.createElement("div");
            try {
                return !! e(t)
            } catch(n) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            var n = e.split("|"),
            r = e.length;
            while (r--) N.attrHandle[n[r]] = t
        }
        function u(e, t) {
            var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || K) - (~e.sourceIndex || K);
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function f(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, r) {
                    var i, s = e([], n.length, t),
                    o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c() {}
        function h(e, t) {
            var r, i, s, o, u, a, f, l = W[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e,
            a = [],
            f = N.preFilter;
            while (u) { (!r || (i = ct.exec(u))) && (i && (u = u.slice(i[0].length) || u), a.push(s = [])),
                r = !1,
                (i = ht.exec(u)) && (r = i.shift(), s.push({
                    value: r,
                    type: i[0].replace(ft, " ")
                }), u = u.slice(r.length));
                for (o in N.filter) ! (i = gt[o].exec(u)) || f[o] && !(i = f[o](i)) || (r = i.shift(), s.push({
                    value: r,
                    type: o,
                    matches: i
                }), u = u.slice(r.length));
                if (!r) break
            }
            return t ? u.length: u ? n.error(e) : W(e, a).slice(0)
        }
        function p(e) {
            var t = 0,
            n = e.length,
            r = "";
            for (; n > t; t++) r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir,
            i = n && "parentNode" === r,
            s = U++;
            return t.first ?
            function(t, n, s) {
                while (t = t[r]) if (1 === t.nodeType || i) return e(t, n, s)
            }: function(t, n, o) {
                var u, a, f, l = R + " " + s;
                if (o) {
                    while (t = t[r]) if ((1 === t.nodeType || i) && e(t, n, o)) return ! 0
                } else while (t = t[r]) if (1 === t.nodeType || i) if (f = t[I] || (t[I] = {}), (a = f[r]) && a[0] === l) {
                    if ((u = a[1]) === !0 || u === T) return u === !0
                } else if (a = f[r] = [l], a[1] = e(t, n, o) || T, a[1] === !0) return ! 0
            }
        }
        function v(e) {
            return e.length > 1 ?
            function(t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return ! 1;
                return ! 0
            }: e[0]
        }
        function m(e, t, n, r, i) {
            var s, o = [],
            u = 0,
            a = e.length,
            f = null != t;
            for (; a > u; u++)(s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
            return o
        }
        function g(e, t, n, r, s, o) {
            return r && !r[I] && (r = g(r)),
            s && !s[I] && (s = g(s, o)),
            i(function(i, o, u, a) {
                var f, l, c, h = [],
                p = [],
                d = o.length,
                v = i || w(t || "*", u.nodeType ? [u] : u, []),
                g = !e || !i && t ? v: m(v, h, e, u, a),
                y = n ? s || (i ? e: d || r) ? [] : o: g;
                if (n && n(g, y, u, a), r) {
                    f = m(y, p),
                    r(f, [], u, a),
                    l = f.length;
                    while (l--)(c = f[l]) && (y[p[l]] = !(g[p[l]] = c))
                }
                if (i) {
                    if (s || e) {
                        if (s) {
                            f = [],
                            l = y.length;
                            while (l--)(c = y[l]) && f.push(g[l] = c);
                            s(null, y = [], f, a)
                        }
                        l = y.length;
                        while (l--)(c = y[l]) && (f = s ? nt.call(i, c) : h[l]) > -1 && (i[f] = !(o[f] = c))
                    }
                } else y = m(y === o ? y.splice(d, y.length) : y),
                s ? s(null, o, y, a) : et.apply(o, y)
            })
        }
        function y(e) {
            var t, n, r, i = e.length,
            s = N.relative[e[0].type],
            o = s || N.relative[" "],
            u = s ? 1 : 0,
            a = d(function(e) {
                return e === t
            },
            o, !0),
            f = d(function(e) {
                return nt.call(t, e) > -1
            },
            o, !0),
            l = [function(e, n, r) {
                return ! s && (r || n !== A) || ((t = n).nodeType ? a(e, n, r) : f(e, n, r))
            }];
            for (; i > u; u++) if (n = N.relative[e[u].type]) l = [d(v(l), n)];
            else {
                if (n = N.filter[e[u].type].apply(null, e[u].matches), n[I]) {
                    for (r = ++u; i > r; r++) if (N.relative[e[r].type]) break;
                    return g(u > 1 && v(l), u > 1 && p(e.slice(0, u - 1).concat({
                        value: " " === e[u - 2].type ? "*": ""
                    })).replace(ft, "$1"), n, r > u && y(e.slice(u, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                }
                l.push(n)
            }
            return v(l)
        }
        function b(e, t) {
            var r = 0,
            s = t.length > 0,
            o = e.length > 0,
            u = function(i, u, a, f, l) {
                var c, h, p, d = [],
                v = 0,
                g = "0",
                y = i && [],
                b = null != l,
                w = A,
                E = i || o && N.find.TAG("*", l && u.parentNode || u),
                S = R += null == w ? 1 : Math.random() || .1;
                for (b && (A = u !== _ && u, T = r); null != (c = E[g]); g++) {
                    if (o && c) {
                        h = 0;
                        while (p = e[h++]) if (p(c, u, a)) {
                            f.push(c);
                            break
                        }
                        b && (R = S, T = ++r)
                    }
                    s && ((c = !p && c) && v--, i && y.push(c))
                }
                if (v += g, s && g !== v) {
                    h = 0;
                    while (p = t[h++]) p(y, d, u, a);
                    if (i) {
                        if (v > 0) while (g--) y[g] || d[g] || (d[g] = Y.call(f));
                        d = m(d)
                    }
                    et.apply(f, d),
                    b && !i && d.length > 0 && v + t.length > 1 && n.uniqueSort(f)
                }
                return b && (R = S, A = w),
                y
            };
            return s ? i(u) : u
        }
        function w(e, t, r) {
            var i = 0,
            s = t.length;
            for (; s > i; i++) n(e, t[i], r);
            return r
        }
        function E(e, t, n, r) {
            var i, s, o, u, a, f = h(e);
            if (!r && 1 === f.length) {
                if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && x.getById && 9 === t.nodeType && P && N.relative[s[1].type]) {
                    if (t = (N.find.ID(o.matches[0].replace(xt, Tt), t) || [])[0], !t) return n;
                    e = e.slice(s.shift().value.length)
                }
                i = gt.needsContext.test(e) ? 0 : s.length;
                while (i--) {
                    if (o = s[i], N.relative[u = o.type]) break;
                    if ((a = N.find[u]) && (r = a(o.matches[0].replace(xt, Tt), pt.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(i, 1), e = r.length && p(s), !e) return et.apply(n, r),
                        n;
                        break
                    }
                }
            }
            return L(e, f)(r, t, !P, n, pt.test(e)),
            n
        }
        var S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I = "sizzle" + -(new Date),
        q = e.document,
        R = 0,
        U = 0,
        z = r(),
        W = r(),
        X = r(),
        V = !1,
        $ = function(e, t) {
            return e === t ? (V = !0, 0) : 0
        },
        J = typeof t,
        K = 1 << 31,
        Q = {}.hasOwnProperty,
        G = [],
        Y = G.pop,
        Z = G.push,
        et = G.push,
        tt = G.slice,
        nt = G.indexOf ||
        function(e) {
            var t = 0,
            n = this.length;
            for (; n > t; t++) if (this[t] === e) return t;
            return - 1
        },
        rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        it = "[\\x20\\t\\r\\n\\f]",
        st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ot = st.replace("w", "w#"),
        ut = "\\[" + it + "*(" + st + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ot + ")|)|)" + it + "*\\]",
        at = ":(" + st + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ut.replace(3, 8) + ")*)|.*)\\)|)",
        ft = RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
        ct = RegExp("^" + it + "*," + it + "*"),
        ht = RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
        pt = RegExp(it + "*[+~]"),
        dt = RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"),
        vt = RegExp(at),
        mt = RegExp("^" + ot + "$"),
        gt = {
            ID: RegExp("^#(" + st + ")"),
            CLASS: RegExp("^\\.(" + st + ")"),
            TAG: RegExp("^(" + st.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + ut),
            PSEUDO: RegExp("^" + at),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
            bool: RegExp("^(?:" + rt + ")$", "i"),
            needsContext: RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
        },
        yt = /^[^{]+\{\s*\[native \w/,
        bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        wt = /^(?:input|select|textarea|button)$/i,
        Et = /^h\d$/i,
        St = /'|\\/g,
        xt = RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
        Tt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t: 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            et.apply(G = tt.call(q.childNodes), q.childNodes),
            G[q.childNodes.length].nodeType
        } catch(Nt) {
            et = {
                apply: G.length ?
                function(e, t) {
                    Z.apply(e, tt.call(t))
                }: function(e, t) {
                    var n = e.length,
                    r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        k = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        },
        x = n.support = {},
        M = n.setDocument = function(e) {
            var n = e ? e.ownerDocument || e: q,
            r = n.defaultView;
            return n !== _ && 9 === n.nodeType && n.documentElement ? (_ = n, D = n.documentElement, P = !k(n), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload",
            function() {
                M()
            }), x.attributes = s(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }), x.getElementsByTagName = s(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = s(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }), x.getById = s(function(e) {
                return D.appendChild(e).id = I,
                !n.getElementsByName || !n.getElementsByName(I).length
            }), x.getById ? (N.find.ID = function(e, t) {
                if (typeof t.getElementById !== J && P) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            N.filter.ID = function(e) {
                var t = e.replace(xt, Tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete N.find.ID, N.filter.ID = function(e) {
                var t = e.replace(xt, Tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== J && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), N.find.TAG = x.getElementsByTagName ?
            function(e, n) {
                return typeof n.getElementsByTagName !== J ? n.getElementsByTagName(e) : t
            }: function(e, t) {
                var n, r = [],
                i = 0,
                s = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = s[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return s
            },
            N.find.CLASS = x.getElementsByClassName &&
            function(e, n) {
                return typeof n.getElementsByClassName !== J && P ? n.getElementsByClassName(e) : t
            },
            B = [], H = [], (x.qsa = yt.test(n.querySelectorAll)) && (s(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || H.push("\\[" + it + "*(?:value|" + rt + ")"),
                e.querySelectorAll(":checked").length || H.push(":checked")
            }), s(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("t", ""),
                e.querySelectorAll("[t^='']").length && H.push("[*^$]=" + it + "*(?:''|\"\")"),
                e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                H.push(",.*:")
            })), (x.matchesSelector = yt.test(j = D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && s(function(e) {
                x.disconnectedMatch = j.call(e, "div"),
                j.call(e, "[s!='']:x"),
                B.push("!=", at)
            }), H = H.length && RegExp(H.join("|")), B = B.length && RegExp(B.join("|")), F = yt.test(D.contains) || D.compareDocumentPosition ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !!r && 1 === r.nodeType && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
            }: function(e, t) {
                if (t) while (t = t.parentNode) if (t === e) return ! 0;
                return ! 1
            },
            $ = D.compareDocumentPosition ?
            function(e, t) {
                if (e === t) return V = !0,
                0;
                var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return r ? 1 & r || !x.sortDetached && t.compareDocumentPosition(e) === r ? e === n || F(q, e) ? -1 : t === n || F(q, t) ? 1 : O ? nt.call(O, e) - nt.call(O, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }: function(e, t) {
                var r, i = 0,
                s = e.parentNode,
                o = t.parentNode,
                a = [e],
                f = [t];
                if (e === t) return V = !0,
                0;
                if (!s || !o) return e === n ? -1 : t === n ? 1 : s ? -1 : o ? 1 : O ? nt.call(O, e) - nt.call(O, t) : 0;
                if (s === o) return u(e, t);
                r = e;
                while (r = r.parentNode) a.unshift(r);
                r = t;
                while (r = r.parentNode) f.unshift(r);
                while (a[i] === f[i]) i++;
                return i ? u(a[i], f[i]) : a[i] === q ? -1 : f[i] === q ? 1 : 0
            },
            n) : _
        },
        n.matches = function(e, t) {
            return n(e, null, null, t)
        },
        n.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== _ && M(e), t = t.replace(dt, "='$1']"), !(!x.matchesSelector || !P || B && B.test(t) || H && H.test(t))) try {
                var r = j.call(e, t);
                if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch(i) {}
            return n(t, _, null, [e]).length > 0
        },
        n.contains = function(e, t) {
            return (e.ownerDocument || e) !== _ && M(e),
            F(e, t)
        },
        n.attr = function(e, n) { (e.ownerDocument || e) !== _ && M(e);
            var r = N.attrHandle[n.toLowerCase()],
            i = r && Q.call(N.attrHandle, n.toLowerCase()) ? r(e, n, !P) : t;
            return i === t ? x.attributes || !P ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value: null: i
        },
        n.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        },
        n.uniqueSort = function(e) {
            var t, n = [],
            r = 0,
            i = 0;
            if (V = !x.detectDuplicates, O = !x.sortStable && e.slice(0), e.sort($), V) {
                while (t = e[i++]) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1)
            }
            return e
        },
        C = n.getText = function(e) {
            var t, n = "",
            r = 0,
            i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += C(t);
            return n
        },
        N = n.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: gt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xt, Tt),
                    e[3] = (e[4] || e[5] || "").replace(xt, Tt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return gt.CHILD.test(e[0]) ? null: (e[3] && e[4] !== t ? e[2] = e[4] : r && vt.test(r) && (n = h(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xt, Tt).toLowerCase();
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && z(e,
                    function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== J && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, r) {
                    return function(i) {
                        var s = n.attr(i, e);
                        return null == s ? "!=" === t: t ? (s += "", "=" === t ? s === r: "!=" === t ? s !== r: "^=" === t ? r && 0 === s.indexOf(r) : "*=" === t ? r && s.indexOf(r) > -1 : "$=" === t ? r && s.slice( - r.length) === r: "~=" === t ? (" " + s + " ").indexOf(r) > -1 : "|=" === t ? s === r || s.slice(0, r.length + 1) === r + "-": !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var s = "nth" !== e.slice(0, 3),
                    o = "last" !== e.slice( - 4),
                    u = "of-type" === t;
                    return 1 === r && 0 === i ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling": "previousSibling",
                        m = t.parentNode,
                        g = u && t.nodeName.toLowerCase(),
                        y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v]) if (u ? c.nodeName.toLowerCase() === g: 1 === c.nodeType) return ! 1;
                                    d = v = "only" === e && !d && "nextSibling"
                                }
                                return ! 0
                            }
                            if (d = [o ? m.firstChild: m.lastChild], o && y) {
                                l = m[I] || (m[I] = {}),
                                f = l[e] || [],
                                p = f[0] === R && f[1],
                                h = f[0] === R && f[2],
                                c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) if (1 === c.nodeType && ++h && c === t) {
                                    l[e] = [R, p, h];
                                    break
                                }
                            } else if (y && (f = (t[I] || (t[I] = {}))[e]) && f[0] === R) h = f[1];
                            else while (c = ++p && c && c[v] || (h = p = 0) || d.pop()) if ((u ? c.nodeName.toLowerCase() === g: 1 === c.nodeType) && ++h && (y && ((c[I] || (c[I] = {}))[e] = [R, h]), c === t)) break;
                            return h -= i,
                            h === r || 0 === h % r && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var r, s = N.pseudos[e] || N.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return s[I] ? s(t) : s.length > 1 ? (r = [e, e, "", t], N.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                        var r, i = s(e, t),
                        o = i.length;
                        while (o--) r = nt.call(e, i[o]),
                        e[r] = !(n[r] = i[o])
                    }) : function(e) {
                        return s(e, 0, r)
                    }) : s
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                    n = [],
                    r = L(e.replace(ft, "$1"));
                    return r[I] ? i(function(e, t, n, i) {
                        var s, o = r(e, null, i, []),
                        u = e.length;
                        while (u--)(s = o[u]) && (e[u] = !(t[u] = s))
                    }) : function(e, i, s) {
                        return t[0] = e,
                        r(t, null, s, n),
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(t) {
                        return n(e, t).length > 0
                    }
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return mt.test(e || "") || n.error("unsupported lang: " + e),
                    e = e.replace(xt, Tt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                        if (n = P ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
                        n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === D
                },
                focus: function(e) {
                    return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! N.pseudos.empty(e)
                },
                header: function(e) {
                    return Et.test(e.nodeName)
                },
                input: function(e) {
                    return wt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: l(function(e, t) {
                    var n = 0;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    var n = 1;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    var r = 0 > n ? n + t: n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    var r = 0 > n ? n + t: n;
                    for (; t > ++r;) e.push(r);
                    return e
                })
            }
        },
        N.pseudos.nth = N.pseudos.eq;
        for (S in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) N.pseudos[S] = a(S);
        for (S in {
            submit: !0,
            reset: !0
        }) N.pseudos[S] = f(S);
        c.prototype = N.filters = N.pseudos,
        N.setFilters = new c,
        L = n.compile = function(e, t) {
            var n, r = [],
            i = [],
            s = X[e + " "];
            if (!s) {
                t || (t = h(e)),
                n = t.length;
                while (n--) s = y(t[n]),
                s[I] ? r.push(s) : i.push(s);
                s = X(e, b(i, r))
            }
            return s
        },
        x.sortStable = I.split("").sort($).join("") === I,
        x.detectDuplicates = V,
        M(),
        x.sortDetached = s(function(e) {
            return 1 & e.compareDocumentPosition(_.createElement("div"))
        }),
        s(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width",
        function(e, n, r) {
            return r ? t: e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }),
        x.attributes && s(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value",
        function(e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t: e.defaultValue
        }),
        s(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(rt,
        function(e, n, r) {
            var i;
            return r ? t: (i = e.getAttributeNode(n)) && i.specified ? i.value: e[n] === !0 ? n.toLowerCase() : null
        }),
        lt.find = n,
        lt.expr = n.selectors,
        lt.expr[":"] = lt.expr.pseudos,
        lt.unique = n.uniqueSort,
        lt.text = n.getText,
        lt.isXMLDoc = n.isXML,
        lt.contains = n.contains
    } (e);
    var Nt = {};
    lt.Callbacks = function(e) {
        e = "string" == typeof e ? Nt[e] || r(e) : lt.extend({},
        e);
        var n, i, s, o, u, a, f = [],
        l = !e.once && [],
        c = function(t) {
            for (i = e.memory && t, s = !0, u = a || 0, a = 0, o = f.length, n = !0; f && o > u; u++) if (f[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                i = !1;
                break
            }
            n = !1,
            f && (l ? l.length && c(l.shift()) : i ? f = [] : h.disable())
        },
        h = {
            add: function() {
                if (f) {
                    var t = f.length; (function r(t) {
                        lt.each(t,
                        function(t, n) {
                            var i = lt.type(n);
                            "function" === i ? e.unique && h.has(n) || f.push(n) : n && n.length && "string" !== i && r(n)
                        })
                    })(arguments),
                    n ? o = f.length: i && (a = t, c(i))
                }
                return this
            },
            remove: function() {
                return f && lt.each(arguments,
                function(e, t) {
                    var r;
                    while ((r = lt.inArray(t, f, r)) > -1) f.splice(r, 1),
                    n && (o >= r && o--, u >= r && u--)
                }),
                this
            },
            has: function(e) {
                return e ? lt.inArray(e, f) > -1 : !!f && !!f.length
            },
            empty: function() {
                return f = [],
                o = 0,
                this
            },
            disable: function() {
                return f = l = i = t,
                this
            },
            disabled: function() {
                return ! f
            },
            lock: function() {
                return l = t,
                i || h.disable(),
                this
            },
            locked: function() {
                return ! l
            },
            fireWith: function(e, t) {
                return ! f || s && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? l.push(t) : c(t)),
                this
            },
            fire: function() {
                return h.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! s
            }
        };
        return h
    },
    lt.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", lt.Callbacks("once memory"), "resolved"], ["reject", "fail", lt.Callbacks("once memory"), "rejected"], ["notify", "progress", lt.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return lt.Deferred(function(n) {
                        lt.each(t,
                        function(t, s) {
                            var o = s[0],
                            u = lt.isFunction(e[t]) && e[t];
                            i[s[1]](function() {
                                var e = u && u.apply(this, arguments);
                                e && lt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? lt.extend(e, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            lt.each(t,
            function(e, s) {
                var o = s[2],
                u = s[3];
                r[s[1]] = o.add,
                u && o.add(function() {
                    n = u
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r: this, arguments),
                    this
                },
                i[s[0] + "With"] = o.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0,
            n = st.call(arguments),
            r = n.length,
            i = 1 !== r || e && lt.isFunction(e.promise) ? r: 0,
            s = 1 === i ? e: lt.Deferred(),
            o = function(e, t, n) {
                return function(r) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? st.call(arguments) : r,
                    n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                }
            },
            u,
            a,
            f;
            if (r > 1) for (u = Array(r), a = Array(r), f = Array(r); r > t; t++) n[t] && lt.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i;
            return i || s.resolveWith(f, n),
            s.promise()
        }
    }),
    lt.support = function(t) {
        var n, r, i, s, o, u, a, f, l, c = Q.createElement("div");
        if (c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = c.getElementsByTagName("*") || [], r = c.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        s = Q.createElement("select"),
        u = s.appendChild(Q.createElement("option")),
        i = c.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        t.getSetAttribute = "t" !== c.className,
        t.leadingWhitespace = 3 === c.firstChild.nodeType,
        t.tbody = !c.getElementsByTagName("tbody").length,
        t.htmlSerialize = !!c.getElementsByTagName("link").length,
        t.style = /top/.test(r.getAttribute("style")),
        t.hrefNormalized = "/a" === r.getAttribute("href"),
        t.opacity = /^0.5/.test(r.style.opacity),
        t.cssFloat = !!r.style.cssFloat,
        t.checkOn = !!i.value,
        t.optSelected = u.selected,
        t.enctype = !!Q.createElement("form").enctype,
        t.html5Clone = "<:nav></:nav>" !== Q.createElement("nav").cloneNode(!0).outerHTML,
        t.inlineBlockNeedsLayout = !1,
        t.shrinkWrapBlocks = !1,
        t.pixelPosition = !1,
        t.deleteExpando = !0,
        t.noCloneEvent = !0,
        t.reliableMarginRight = !0,
        t.boxSizingReliable = !0,
        i.checked = !0,
        t.noCloneChecked = i.cloneNode(!0).checked,
        s.disabled = !0,
        t.optDisabled = !u.disabled;
        try {
            delete c.test
        } catch(h) {
            t.deleteExpando = !1
        }
        i = Q.createElement("input"),
        i.setAttribute("value", ""),
        t.input = "" === i.getAttribute("value"),
        i.value = "t",
        i.setAttribute("type", "radio"),
        t.radioValue = "t" === i.value,
        i.setAttribute("checked", "t"),
        i.setAttribute("name", "t"),
        o = Q.createDocumentFragment(),
        o.appendChild(i),
        t.appendChecked = i.checked,
        t.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked,
        c.attachEvent && (c.attachEvent("onclick",
        function() {
            t.noCloneEvent = !1
        }), c.cloneNode(!0).click());
        for (l in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c.setAttribute(a = "on" + l, "t"),
        t[l + "Bubbles"] = a in e || c.attributes[a].expando === !1;
        c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === c.style.backgroundClip;
        for (l in lt(t)) break;
        return t.ownLast = "0" !== l,
        lt(function() {
            var n, r, i, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            o = Q.getElementsByTagName("body")[0];
            o && (n = Q.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(n).appendChild(c), c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = c.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", f = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = f && 0 === i[0].offsetHeight, c.innerHTML = "", c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", lt.swap(o, null != o.style.zoom ? {
                zoom: 1
            }: {},
            function() {
                t.boxSizing = 4 === c.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(c, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(c, null) || {
                width: "4px"
            }).width, r = c.appendChild(Q.createElement("div")), r.style.cssText = c.style.cssText = s, r.style.marginRight = r.style.width = "0", c.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof c.style.zoom !== J && (c.innerHTML = "", c.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === c.offsetWidth, c.style.display = "block", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== c.offsetWidth, t.inlineBlockNeedsLayout && (o.style.zoom = 1)), o.removeChild(n), n = c = i = r = null)
        }),
        n = s = o = u = r = i = null,
        t
    } ({});
    var Ct = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    kt = /([A-Z])/g;
    lt.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? lt.cache[e[lt.expando]] : e[lt.expando],
            !!e && !u(e)
        },
        data: function(e, t, n) {
            return i(e, t, n)
        },
        removeData: function(e, t) {
            return s(e, t)
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return s(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return ! 1;
            var t = e.nodeName && lt.noData[e.nodeName.toLowerCase()];
            return ! t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    lt.fn.extend({
        data: function(e, n) {
            var r, i, s = null,
            u = 0,
            a = this[0];
            if (e === t) {
                if (this.length && (s = lt.data(a), 1 === a.nodeType && !lt._data(a, "parsedAttrs"))) {
                    for (r = a.attributes; r.length > u; u++) i = r[u].name,
                    0 === i.indexOf("data-") && (i = lt.camelCase(i.slice(5)), o(a, i, s[i]));
                    lt._data(a, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function() {
                lt.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                lt.data(this, e, n)
            }) : a ? o(a, e, lt.data(a, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                lt.removeData(this, e)
            })
        }
    }),
    lt.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = lt._data(e, n), r && (!i || lt.isArray(r) ? i = lt._data(e, n, lt.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = lt.queue(e, t),
            r = n.length,
            i = n.shift(),
            s = lt._queueHooks(e, t),
            o = function() {
                lt.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)),
            !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return lt._data(e, n) || lt._data(e, n, {
                empty: lt.Callbacks("once memory").add(function() {
                    lt._removeData(e, t + "queue"),
                    lt._removeData(e, n)
                })
            })
        }
    }),
    lt.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--),
            r > arguments.length ? lt.queue(this[0], e) : n === t ? this: this.each(function() {
                var t = lt.queue(this, e, n);
                lt._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && lt.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                lt.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = lt.fx ? lt.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
            s = lt.Deferred(),
            o = this,
            u = this.length,
            a = function() {--i || s.resolveWith(o, [o])
            };
            "string" != typeof e && (n = e, e = t),
            e = e || "fx";
            while (u--) r = lt._data(o[u], e + "queueHooks"),
            r && r.empty && (i++, r.empty.add(a));
            return a(),
            s.promise(n)
        }
    });
    var Lt, At, Ot = /[\t\r\n\f]/g,
    Mt = /\r/g,
    _t = /^(?:input|select|textarea|button|object)$/i,
    Dt = /^(?:a|area)$/i,
    Pt = /^(?:checked|selected)$/i,
    Ht = lt.support.getSetAttribute,
    Bt = lt.support.input;
    lt.fn.extend({
        attr: function(e, t) {
            return lt.access(this, lt.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                lt.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return lt.access(this, lt.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = lt.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch(n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, s, o = 0,
            u = this.length,
            a = "string" == typeof e && e;
            if (lt.isFunction(e)) return this.each(function(t) {
                lt(this).addClass(e.call(this, t, this.className))
            });
            if (a) for (t = (e || "").match(ht) || []; u > o; o++) if (n = this[o], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ot, " ") : " ")) {
                s = 0;
                while (i = t[s++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = lt.trim(r)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, s, o = 0,
            u = this.length,
            a = 0 === arguments.length || "string" == typeof e && e;
            if (lt.isFunction(e)) return this.each(function(t) {
                lt(this).removeClass(e.call(this, t, this.className))
            });
            if (a) for (t = (e || "").match(ht) || []; u > o; o++) if (n = this[o], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ot, " ") : "")) {
                s = 0;
                while (i = t[s++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                n.className = e ? lt.trim(r) : ""
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : lt.isFunction(e) ? this.each(function(n) {
                lt(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0,
                    i = lt(this),
                    s = e.match(ht) || [];
                    while (t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                } else(n === J || "boolean" === n) && (this.className && lt._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": lt._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
            n = 0,
            r = this.length;
            for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ot, " ").indexOf(t) >= 0) return ! 0;
            return ! 1
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (arguments.length) return i = lt.isFunction(e),
            this.each(function(n) {
                var s;
                1 === this.nodeType && (s = i ? e.call(this, n, lt(this).val()) : e, null == s ? s = "": "number" == typeof s ? s += "": lt.isArray(s) && (s = lt.map(s,
                function(e) {
                    return null == e ? "": e + ""
                })), r = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, s, "value") !== t || (this.value = s))
            });
            if (s) return r = lt.valHooks[s.type] || lt.valHooks[s.nodeName.toLowerCase()],
            r && "get" in r && (n = r.get(s, "value")) !== t ? n: (n = s.value, "string" == typeof n ? n.replace(Mt, "") : null == n ? "": n)
        }
    }),
    lt.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = lt.find.attr(e, "value");
                    return null != t ? t: e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                    i = e.selectedIndex,
                    s = "select-one" === e.type || 0 > i,
                    o = s ? null: [],
                    u = s ? i + 1 : r.length,
                    a = 0 > i ? u: s ? i: 0;
                    for (; u > a; a++) if (n = r[a], !(!n.selected && a !== i || (lt.support.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && lt.nodeName(n.parentNode, "optgroup"))) {
                        if (t = lt(n).val(), s) return t;
                        o.push(t)
                    }
                    return o
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                    s = lt.makeArray(t),
                    o = i.length;
                    while (o--) r = i[o],
                    (r.selected = lt.inArray(lt(r).val(), s) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    s
                }
            }
        },
        attr: function(e, n, r) {
            var i, s, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === J ? lt.prop(e, n, r) : (1 === o && lt.isXMLDoc(e) || (n = n.toLowerCase(), i = lt.attrHooks[n] || (lt.expr.match.bool.test(n) ? At: Lt)), r === t ? i && "get" in i && null !== (s = i.get(e, n)) ? s: (s = lt.find.attr(e, n), null == s ? t: s) : null !== r ? i && "set" in i && (s = i.set(e, r, n)) !== t ? s: (e.setAttribute(n, r + ""), r) : (lt.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
            s = t && t.match(ht);
            if (s && 1 === e.nodeType) while (n = s[i++]) r = lt.propFix[n] || n,
            lt.expr.match.bool.test(n) ? Bt && Ht || !Pt.test(n) ? e[r] = !1 : e[lt.camelCase("default-" + n)] = e[r] = !1 : lt.attr(e, n, ""),
            e.removeAttribute(Ht ? n: r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!lt.support.radioValue && "radio" === t && lt.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return o = 1 !== u || !lt.isXMLDoc(e),
            o && (n = lt.propFix[n] || n, s = lt.propHooks[n]),
            r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i: e[n] = r: s && "get" in s && null !== (i = s.get(e, n)) ? i: e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = lt.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : _t.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    At = {
        set: function(e, t, n) {
            return t === !1 ? lt.removeAttr(e, n) : Bt && Ht || !Pt.test(n) ? e.setAttribute(!Ht && lt.propFix[n] || n, n) : e[lt.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    lt.each(lt.expr.match.bool.source.match(/\w+/g),
    function(e, n) {
        var r = lt.expr.attrHandle[n] || lt.find.attr;
        lt.expr.attrHandle[n] = Bt && Ht || !Pt.test(n) ?
        function(e, n, i) {
            var s = lt.expr.attrHandle[n],
            o = i ? t: (lt.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return lt.expr.attrHandle[n] = s,
            o
        }: function(e, n, r) {
            return r ? t: e[lt.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }),
    Bt && Ht || (lt.attrHooks.value = {
        set: function(e, n, r) {
            return lt.nodeName(e, "input") ? (e.defaultValue = n, t) : Lt && Lt.set(e, n, r)
        }
    }),
    Ht || (Lt = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
            i.value = n += "",
            "value" === r || n === e.getAttribute(r) ? n: t
        }
    },
    lt.expr.attrHandle.id = lt.expr.attrHandle.name = lt.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t: (i = e.getAttributeNode(n)) && "" !== i.value ? i.value: null
    },
    lt.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value: t
        },
        set: Lt.set
    },
    lt.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Lt.set(e, "" === t ? !1 : t, n)
        }
    },
    lt.each(["width", "height"],
    function(e, n) {
        lt.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })),
    lt.support.hrefNormalized || lt.each(["href", "src"],
    function(e, t) {
        lt.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    lt.support.style || (lt.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    lt.support.optSelected || (lt.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    lt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        lt.propFix[this.toLowerCase()] = this
    }),
    lt.support.enctype || (lt.propFix.enctype = "encoding"),
    lt.each(["radio", "checkbox"],
    function() {
        lt.valHooks[this] = {
            set: function(e, n) {
                return lt.isArray(n) ? e.checked = lt.inArray(lt(e).val(), n) >= 0 : t
            }
        },
        lt.support.checkOn || (lt.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on": e.value
        })
    });
    var jt = /^(?:input|select|textarea)$/i,
    Ft = /^key/,
    It = /^(?:mouse|contextmenu)|click/,
    qt = /^(?:focusinfocus|focusoutblur)$/,
    Rt = /^([^.]*)(?:\.(.+)|)$/;
    lt.event = {
        global: {},
        add: function(e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, v, m, g = lt._data(e);
            if (g) {
                r.handler && (f = r, r = f.handler, s = f.selector),
                r.guid || (r.guid = lt.guid++),
                (u = g.events) || (u = g.events = {}),
                (c = g.handle) || (c = g.handle = function(e) {
                    return typeof lt === J || e && lt.event.triggered === e.type ? t: lt.event.dispatch.apply(c.elem, arguments)
                },
                c.elem = e),
                n = (n || "").match(ht) || [""],
                a = n.length;
                while (a--) o = Rt.exec(n[a]) || [],
                d = m = o[1],
                v = (o[2] || "").split(".").sort(),
                d && (l = lt.event.special[d] || {},
                d = (s ? l.delegateType: l.bindType) || d, l = lt.event.special[d] || {},
                h = lt.extend({
                    type: d,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: s,
                    needsContext: s && lt.expr.match.needsContext.test(s),
                    namespace: v.join(".")
                },
                f), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, l.setup && l.setup.call(e, i, v, c) !== !1 || (e.addEventListener ? e.addEventListener(d, c, !1) : e.attachEvent && e.attachEvent("on" + d, c))), l.add && (l.add.call(e, h), h.handler.guid || (h.handler.guid = r.guid)), s ? p.splice(p.delegateCount++, 0, h) : p.push(h), lt.event.global[d] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = lt.hasData(e) && lt._data(e);
            if (m && (l = m.events)) {
                t = (t || "").match(ht) || [""],
                f = t.length;
                while (f--) if (u = Rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort(), p) {
                    c = lt.event.special[p] || {},
                    p = (r ? c.delegateType: c.bindType) || p,
                    h = l[p] || [],
                    u = u[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                    a = s = h.length;
                    while (s--) o = h[s],
                    !i && v !== o.origType || n && n.guid !== o.guid || u && !u.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                    a && !h.length && (c.teardown && c.teardown.call(e, d, m.handle) !== !1 || lt.removeEvent(e, p, m.handle), delete l[p])
                } else for (p in l) lt.event.remove(e, p + t[f], n, r, !0);
                lt.isEmptyObject(l) && (delete m.handle, lt._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, s) {
            var o, u, a, f, l, c, h, p = [i || Q],
            d = at.call(n, "type") ? n.type: n,
            v = at.call(n, "namespace") ? n.namespace.split(".") : [];
            if (a = c = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !qt.test(d + lt.event.triggered) && (d.indexOf(".") >= 0 && (v = d.split("."), d = v.shift(), v.sort()), u = 0 > d.indexOf(":") && "on" + d, n = n[lt.expando] ? n: new lt.Event(d, "object" == typeof n && n), n.isTrigger = s ? 2 : 3, n.namespace = v.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : lt.makeArray(r, [n]), l = lt.event.special[d] || {},
            s || !l.trigger || l.trigger.apply(i, r) !== !1)) {
                if (!s && !l.noBubble && !lt.isWindow(i)) {
                    for (f = l.delegateType || d, qt.test(f + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a),
                    c = a;
                    c === (i.ownerDocument || Q) && p.push(c.defaultView || c.parentWindow || e)
                }
                h = 0;
                while ((a = p[h++]) && !n.isPropagationStopped()) n.type = h > 1 ? f: l.bindType || d,
                o = (lt._data(a, "events") || {})[n.type] && lt._data(a, "handle"),
                o && o.apply(a, r),
                o = u && a[u],
                o && lt.acceptData(a) && o.apply && o.apply(a, r) === !1 && n.preventDefault();
                if (n.type = d, !s && !n.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), r) === !1) && lt.acceptData(i) && u && i[d] && !lt.isWindow(i)) {
                    c = i[u],
                    c && (i[u] = null),
                    lt.event.triggered = d;
                    try {
                        i[d]()
                    } catch(m) {}
                    lt.event.triggered = t,
                    c && (i[u] = c)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = lt.event.fix(e);
            var n, r, i, s, o, u = [],
            a = st.call(arguments),
            f = (lt._data(this, "events") || {})[e.type] || [],
            l = lt.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                u = lt.event.handlers.call(this, e, f),
                n = 0;
                while ((s = u[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = s.elem,
                    o = 0;
                    while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((lt.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return l.postDispatch && l.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var r, i, s, o, u = [],
            a = n.delegateCount,
            f = e.target;
            if (a && f.nodeType && (!e.button || "click" !== e.type)) for (; f != this; f = f.parentNode || this) if (1 === f.nodeType && (f.disabled !== !0 || "click" !== e.type)) {
                for (s = [], o = 0; a > o; o++) i = n[o],
                r = i.selector + " ",
                s[r] === t && (s[r] = i.needsContext ? lt(r, this).index(f) >= 0 : lt.find(r, this, null, [f]).length),
                s[r] && s.push(i);
                s.length && u.push({
                    elem: f,
                    handlers: s
                })
            }
            return n.length > a && u.push({
                elem: this,
                handlers: n.slice(a)
            }),
            u
        },
        fix: function(e) {
            if (e[lt.expando]) return e;
            var t, n, r, i = e.type,
            s = e,
            o = this.fixHooks[i];
            o || (this.fixHooks[i] = o = It.test(i) ? this.mouseHooks: Ft.test(i) ? this.keyHooks: {}),
            r = o.props ? this.props.concat(o.props) : this.props,
            e = new lt.Event(s),
            t = r.length;
            while (t--) n = r[t],
            e[n] = s[n];
            return e.target || (e.target = s.srcElement || Q),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            o.filter ? o.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, s, o = n.button,
                u = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || Q, s = i.documentElement, r = i.body, e.pageX = n.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)),
                !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement: u),
                e.which || o === t || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== l() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return lt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return lt.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = lt.extend(new lt.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? lt.event.trigger(i, null, t) : lt.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    lt.removeEvent = Q.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === J && (e[r] = null), e.detachEvent(r, n))
    },
    lt.Event = function(e, n) {
        return this instanceof lt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a: f) : this.type = e, n && lt.extend(this, n), this.timeStamp = e && e.timeStamp || lt.now(), this[lt.expando] = !0, t) : new lt.Event(e, n)
    },
    lt.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = a,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = a,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = a,
            this.stopPropagation()
        }
    },
    lt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(e, t) {
        lt.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                i = e.relatedTarget,
                s = e.handleObj;
                return (!i || i !== r && !lt.contains(r, i)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    lt.support.submitBubbles || (lt.event.special.submit = {
        setup: function() {
            return lt.nodeName(this, "form") ? !1 : (lt.event.add(this, "click._submit keypress._submit",
            function(e) {
                var n = e.target,
                r = lt.nodeName(n, "input") || lt.nodeName(n, "button") ? n.form: t;
                r && !lt._data(r, "submitBubbles") && (lt.event.add(r, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), lt._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && lt.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return lt.nodeName(this, "form") ? !1 : (lt.event.remove(this, "._submit"), t)
        }
    }),
    lt.support.changeBubbles || (lt.event.special.change = {
        setup: function() {
            return jt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (lt.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), lt.event.add(this, "click._change",
            function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                lt.event.simulate("change", this, e, !0)
            })), !1) : (lt.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                jt.test(t.nodeName) && !lt._data(t, "changeBubbles") && (lt.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || lt.event.simulate("change", this.parentNode, e, !0)
                }), lt._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return lt.event.remove(this, "._change"),
            !jt.test(this.nodeName)
        }
    }),
    lt.support.focusinBubbles || lt.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = 0,
        r = function(e) {
            lt.event.simulate(t, e.target, lt.event.fix(e), !0)
        };
        lt.event.special[t] = {
            setup: function() {
                0 === n++&&Q.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && Q.removeEventListener(e, r, !0)
            }
        }
    }),
    lt.fn.extend({
        on: function(e, n, r, i, s) {
            var o, u;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (o in e) this.on(o, n, r, e[o], s);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = f;
            else if (!i) return this;
            return 1 === s && (u = i, i = function(e) {
                return lt().off(e),
                u.apply(this, arguments)
            },
            i.guid = u.guid || (u.guid = lt.guid++)),
            this.each(function() {
                lt.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
            lt(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
            this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t),
            r === !1 && (r = f),
            this.each(function() {
                lt.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                lt.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? lt.event.trigger(e, n, r, !0) : t
        }
    });
    var Ut = /^.[^:#\[\.,]*$/,
    zt = /^(?:parents|prev(?:Until|All))/,
    Wt = lt.expr.match.needsContext,
    Xt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    lt.fn.extend({
        find: function(e) {
            var t, n = [],
            r = this,
            i = r.length;
            if ("string" != typeof e) return this.pushStack(lt(e).filter(function() {
                for (t = 0; i > t; t++) if (lt.contains(r[t], this)) return ! 0
            }));
            for (t = 0; i > t; t++) lt.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? lt.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e: e,
            n
        },
        has: function(e) {
            var t, n = lt(e, this),
            r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (lt.contains(this, n[t])) return ! 0
            })
        },
        not: function(e) {
            return this.pushStack(h(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(h(this, e || [], !1))
        },
        is: function(e) {
            return !! h(this, "string" == typeof e && Wt.test(e) ? lt(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0,
            i = this.length,
            s = [],
            o = Wt.test(e) || "string" != typeof e ? lt(e, t || this.context) : 0;
            for (; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (o ? o.index(n) > -1 : 1 === n.nodeType && lt.find.matchesSelector(n, e))) {
                n = s.push(n);
                break
            }
            return this.pushStack(s.length > 1 ? lt.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? lt.inArray(this[0], lt(e)) : lt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? lt(e, t) : lt.makeArray(e && e.nodeType ? [e] : e),
            r = lt.merge(this.get(), n);
            return this.pushStack(lt.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    lt.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return lt.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return lt.dir(e, "parentNode", n)
        },
        next: function(e) {
            return c(e, "nextSibling")
        },
        prev: function(e) {
            return c(e, "previousSibling")
        },
        nextAll: function(e) {
            return lt.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return lt.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return lt.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return lt.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return lt.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return lt.sibling(e.firstChild)
        },
        contents: function(e) {
            return lt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: lt.merge([], e.childNodes)
        }
    },
    function(e, t) {
        lt.fn[e] = function(n, r) {
            var i = lt.map(this, t, n);
            return "Until" !== e.slice( - 5) && (r = n),
            r && "string" == typeof r && (i = lt.filter(r, i)),
            this.length > 1 && (Xt[e] || (i = lt.unique(i)), zt.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    }),
    lt.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? lt.find.matchesSelector(r, e) ? [r] : [] : lt.find.matches(e, lt.grep(t,
            function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = [],
            s = e[n];
            while (s && 9 !== s.nodeType && (r === t || 1 !== s.nodeType || !lt(s).is(r))) 1 === s.nodeType && i.push(s),
            s = s[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    $t = / jQuery\d+="(?:null|\d+)"/g,
    Jt = RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
    Kt = /^\s+/,
    Qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Gt = /<([\w:]+)/,
    Yt = /<tbody/i,
    Zt = /<|&#?\w+;/,
    en = /<(?:script|style|link)/i,
    tn = /^(?:checkbox|radio)$/i,
    nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rn = /^$|\/(?:java|ecma)script/i,
    sn = /^true\/(.*)/,
    on = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    un = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: lt.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    an = p(Q),
    fn = an.appendChild(Q.createElement("div"));
    un.optgroup = un.option,
    un.tbody = un.tfoot = un.colgroup = un.caption = un.thead,
    un.th = un.td,
    lt.fn.extend({
        text: function(e) {
            return lt.access(this,
            function(e) {
                return e === t ? lt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(e))
            },
            null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? lt.filter(e, this) : this,
            i = 0;
            for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || lt.cleanData(w(n)),
            n.parentNode && (t && lt.contains(n.ownerDocument, n) && g(w(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && lt.cleanData(w(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && lt.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e: t,
            this.map(function() {
                return lt.clone(this, e, t)
            })
        },
        html: function(e) {
            return lt.access(this,
            function(e) {
                var n = this[0] || {},
                r = 0,
                i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace($t, "") : t;
                if (! ("string" != typeof e || en.test(e) || !lt.support.htmlSerialize && Jt.test(e) || !lt.support.leadingWhitespace && Kt.test(e) || un[(Gt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Qt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {},
                        1 === n.nodeType && (lt.cleanData(w(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch(s) {}
                }
                n && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var e = lt.map(this,
            function(e) {
                return [e.nextSibling, e.parentNode]
            }),
            t = 0;
            return this.domManip(arguments,
            function(n) {
                var r = e[t++],
                i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), lt(this).remove(), i.insertBefore(n, r))
            },
            !0),
            t ? this: this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = rt.apply([], e);
            var r, i, s, o, u, a, f = 0,
            l = this.length,
            c = this,
            h = l - 1,
            p = e[0],
            d = lt.isFunction(p);
            if (d || !(1 >= l || "string" != typeof p || lt.support.checkClone) && nn.test(p)) return this.each(function(r) {
                var i = c.eq(r);
                d && (e[0] = p.call(this, r, i.html())),
                i.domManip(e, t, n)
            });
            if (l && (a = lt.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = a.firstChild, 1 === a.childNodes.length && (a = r), r)) {
                for (o = lt.map(w(a, "script"), v), s = o.length; l > f; f++) i = a,
                f !== h && (i = lt.clone(i, !0, !0), s && lt.merge(o, w(i, "script"))),
                t.call(this[f], i, f);
                if (s) for (u = o[o.length - 1].ownerDocument, lt.map(o, m), f = 0; s > f; f++) i = o[f],
                rn.test(i.type || "") && !lt._data(i, "globalEval") && lt.contains(u, i) && (i.src ? lt._evalUrl(i.src) : lt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(on, "")));
                a = r = null
            }
            return this
        }
    }),
    lt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        lt.fn[e] = function(e) {
            var n, r = 0,
            i = [],
            s = lt(e),
            o = s.length - 1;
            for (; o >= r; r++) n = r === o ? this: this.clone(!0),
            lt(s[r])[t](n),
            it.apply(i, n.get());
            return this.pushStack(i)
        }
    }),
    lt.extend({
        clone: function(e, t, n) {
            var r, i, s, o, u, a = lt.contains(e.ownerDocument, e);
            if (lt.support.html5Clone || lt.isXMLDoc(e) || !Jt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (fn.innerHTML = e.outerHTML, fn.removeChild(s = fn.firstChild)), !(lt.support.noCloneEvent && lt.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || lt.isXMLDoc(e))) for (r = w(s), u = w(e), o = 0; null != (i = u[o]); ++o) r[o] && b(i, r[o]);
            if (t) if (n) for (u = u || w(e), r = r || w(s), o = 0; null != (i = u[o]); o++) y(i, r[o]);
            else y(e, s);
            return r = w(s, "script"),
            r.length > 0 && g(r, !a && w(e, "script")),
            r = u = i = null,
            s
        },
        buildFragment: function(e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length,
            h = p(t),
            d = [],
            v = 0;
            for (; c > v; v++) if (s = e[v], s || 0 === s) if ("object" === lt.type(s)) lt.merge(d, s.nodeType ? [s] : s);
            else if (Zt.test(s)) {
                u = u || h.appendChild(t.createElement("div")),
                a = (Gt.exec(s) || ["", ""])[1].toLowerCase(),
                l = un[a] || un._default,
                u.innerHTML = l[1] + s.replace(Qt, "<$1></$2>") + l[2],
                i = l[0];
                while (i--) u = u.lastChild;
                if (!lt.support.leadingWhitespace && Kt.test(s) && d.push(t.createTextNode(Kt.exec(s)[0])), !lt.support.tbody) {
                    s = "table" !== a || Yt.test(s) ? "<table>" !== l[1] || Yt.test(s) ? 0 : u: u.firstChild,
                    i = s && s.childNodes.length;
                    while (i--) lt.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                }
                lt.merge(d, u.childNodes),
                u.textContent = "";
                while (u.firstChild) u.removeChild(u.firstChild);
                u = h.lastChild
            } else d.push(t.createTextNode(s));
            u && h.removeChild(u),
            lt.support.appendChecked || lt.grep(w(d, "input"), E),
            v = 0;
            while (s = d[v++]) if ((!r || -1 === lt.inArray(s, r)) && (o = lt.contains(s.ownerDocument, s), u = w(h.appendChild(s), "script"), o && g(u), n)) {
                i = 0;
                while (s = u[i++]) rn.test(s.type || "") && n.push(s)
            }
            return u = null,
            h
        },
        cleanData: function(e, t) {
            var n, r, i, s, o = 0,
            u = lt.expando,
            a = lt.cache,
            f = lt.support.deleteExpando,
            l = lt.event.special;
            for (; null != (n = e[o]); o++) if ((t || lt.acceptData(n)) && (i = n[u], s = i && a[i])) {
                if (s.events) for (r in s.events) l[r] ? lt.event.remove(n, r) : lt.removeEvent(n, r, s.handle);
                a[i] && (delete a[i], f ? delete n[u] : typeof n.removeAttribute !== J ? n.removeAttribute(u) : n[u] = null, tt.push(i))
            }
        },
        _evalUrl: function(e) {
            return lt.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    lt.fn.extend({
        wrapAll: function(e) {
            if (lt.isFunction(e)) return this.each(function(t) {
                lt(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = lt(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return lt.isFunction(e) ? this.each(function(t) {
                lt(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = lt(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = lt.isFunction(e);
            return this.each(function(n) {
                lt(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                lt.nodeName(this, "body") || lt(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var ln, cn, hn, pn = /alpha\([^)]*\)/i,
    dn = /opacity\s*=\s*([^)]*)/,
    vn = /^(top|right|bottom|left)$/,
    mn = /^(none|table(?!-c[ea]).+)/,
    gn = /^margin/,
    yn = RegExp("^(" + ct + ")(.*)$", "i"),
    bn = RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
    wn = RegExp("^([+-])=(" + ct + ")", "i"),
    En = {
        BODY: "block"
    },
    Sn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    xn = {
        letterSpacing: 0,
        fontWeight: 400
    },
    Tn = ["Top", "Right", "Bottom", "Left"],
    Nn = ["Webkit", "O", "Moz", "ms"];
    lt.fn.extend({
        css: function(e, n) {
            return lt.access(this,
            function(e, n, r) {
                var i, s, o = {},
                u = 0;
                if (lt.isArray(n)) {
                    for (s = cn(e), i = n.length; i > u; u++) o[n[u]] = lt.css(e, n[u], !1, s);
                    return o
                }
                return r !== t ? lt.style(e, n, r) : lt.css(e, n)
            },
            e, n, arguments.length > 1)
        },
        show: function() {
            return T(this, !0)
        },
        hide: function() {
            return T(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                x(this) ? lt(this).show() : lt(this).hide()
            })
        }
    }),
    lt.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = hn(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": lt.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, o, u, a = lt.camelCase(n),
                f = e.style;
                if (n = lt.cssProps[a] || (lt.cssProps[a] = S(f, a)), u = lt.cssHooks[n] || lt.cssHooks[a], r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s: f[n];
                if (o = typeof r, "string" === o && (s = wn.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(lt.css(e, n)), o = "number"), !(null == r || "number" === o && isNaN(r) || ("number" !== o || lt.cssNumber[a] || (r += "px"), lt.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (f[n] = "inherit"), u && "set" in u && (r = u.set(e, r, i)) === t))) try {
                    f[n] = r
                } catch(l) {}
            }
        },
        css: function(e, n, r, i) {
            var s, o, u, a = lt.camelCase(n);
            return n = lt.cssProps[a] || (lt.cssProps[a] = S(e.style, a)),
            u = lt.cssHooks[n] || lt.cssHooks[a],
            u && "get" in u && (o = u.get(e, !0, r)),
            o === t && (o = hn(e, n, i)),
            "normal" === o && n in xn && (o = xn[n]),
            "" === r || r ? (s = parseFloat(o), r === !0 || lt.isNumeric(s) ? s || 0 : o) : o
        }
    }),
    e.getComputedStyle ? (cn = function(t) {
        return e.getComputedStyle(t, null)
    },
    hn = function(e, n, r) {
        var i, s, o, u = r || cn(e),
        a = u ? u.getPropertyValue(n) || u[n] : t,
        f = e.style;
        return u && ("" !== a || lt.contains(e.ownerDocument, e) || (a = lt.style(e, n)), bn.test(a) && gn.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)),
        a
    }) : Q.documentElement.currentStyle && (cn = function(e) {
        return e.currentStyle
    },
    hn = function(e, n, r) {
        var i, s, o, u = r || cn(e),
        a = u ? u[n] : t,
        f = e.style;
        return null == a && f && f[n] && (a = f[n]),
        bn.test(a) && !vn.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = "fontSize" === n ? "1em": a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)),
        "" === a ? "auto": a
    }),
    lt.each(["height", "width"],
    function(e, n) {
        lt.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && mn.test(lt.css(e, "display")) ? lt.swap(e, Sn,
                function() {
                    return k(e, n, i)
                }) : k(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && cn(e);
                return N(e, t, r ? C(e, n, r, lt.support.boxSizing && "border-box" === lt.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    lt.support.opacity || (lt.cssHooks.opacity = {
        get: function(e, t) {
            return dn.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            r = e.currentStyle,
            i = lt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            s = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === lt.trim(s.replace(pn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = pn.test(s) ? s.replace(pn, i) : s + " " + i)
        }
    }),
    lt(function() {
        lt.support.reliableMarginRight || (lt.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? lt.swap(e, {
                    display: "inline-block"
                },
                hn, [e, "marginRight"]) : t
            }
        }),
        !lt.support.pixelPosition && lt.fn.position && lt.each(["top", "left"],
        function(e, n) {
            lt.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = hn(e, n), bn.test(r) ? lt(e).position()[n] + "px": r) : t
                }
            }
        })
    }),
    lt.expr && lt.expr.filters && (lt.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !lt.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || lt.css(e, "display"))
    },
    lt.expr.filters.visible = function(e) {
        return ! lt.expr.filters.hidden(e)
    }),
    lt.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        lt.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                i = {},
                s = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Tn[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        },
        gn.test(e) || (lt.cssHooks[e + t].set = N)
    });
    var Cn = /%20/g,
    kn = /\[\]$/,
    Ln = /\r?\n/g,
    An = /^(?:submit|button|image|reset|file)$/i,
    On = /^(?:input|select|textarea|keygen)/i;
    lt.fn.extend({
        serialize: function() {
            return lt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = lt.prop(this, "elements");
                return e ? lt.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !lt(this).is(":disabled") && On.test(this.nodeName) && !An.test(e) && (this.checked || !tn.test(e))
            }).map(function(e, t) {
                var n = lt(this).val();
                return null == n ? null: lt.isArray(n) ? lt.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ln, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ln, "\r\n")
                }
            }).get()
        }
    }),
    lt.param = function(e, n) {
        var r, i = [],
        s = function(e, t) {
            t = lt.isFunction(t) ? t() : null == t ? "": t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = lt.ajaxSettings && lt.ajaxSettings.traditional), lt.isArray(e) || e.jquery && !lt.isPlainObject(e)) lt.each(e,
        function() {
            s(this.name, this.value)
        });
        else for (r in e) O(r, e[r], n, s);
        return i.join("&").replace(Cn, "+")
    },
    lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        lt.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    lt.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Mn, _n, Dn = lt.now(),
    Pn = /\?/,
    Hn = /#.*$/,
    Bn = /([?&])_=[^&]*/,
    jn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Fn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    In = /^(?:GET|HEAD)$/,
    qn = /^\/\//,
    Rn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Un = lt.fn.load,
    zn = {},
    Wn = {},
    Xn = "*/".concat("*");
    try {
        _n = K.href
    } catch(Vn) {
        _n = Q.createElement("a"),
        _n.href = "",
        _n = _n.href
    }
    Mn = Rn.exec(_n.toLowerCase()) || [],
    lt.fn.load = function(e, n, r) {
        if ("string" != typeof e && Un) return Un.apply(this, arguments);
        var i, s, o, u = this,
        a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)),
        lt.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"),
        u.length > 0 && lt.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function(e) {
            s = arguments,
            u.html(i ? lt("<div>").append(lt.parseHTML(e)).find(i) : e)
        }).complete(r &&
        function(e, t) {
            u.each(r, s || [e.responseText, t, e])
        }),
        this
    },
    lt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        lt.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    lt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _n,
            type: "GET",
            isLocal: Fn.test(Mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=gbk",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": lt.parseJSON,
                "text xml": lt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? D(D(e, lt.ajaxSettings), t) : D(lt.ajaxSettings, e)
        },
        ajaxPrefilter: M(zn),
        ajaxTransport: M(Wn),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var s, c, y, b, E, x = n;
                2 !== w && (w = 2, a && clearTimeout(a), l = t, u = i || "", S.readyState = e > 0 ? 4 : 0, s = e >= 200 && 300 > e || 304 === e, r && (b = P(h, S, r)), b = H(h, b, S, s), s ? (h.ifModified && (E = S.getResponseHeader("Last-Modified"), E && (lt.lastModified[o] = E), E = S.getResponseHeader("etag"), E && (lt.etag[o] = E)), 204 === e || "HEAD" === h.type ? x = "nocontent": 304 === e ? x = "notmodified": (x = b.state, c = b.data, y = b.error, s = !y)) : (y = x, (e || !x) && (x = "error", 0 > e && (e = 0))), S.status = e, S.statusText = (n || x) + "", s ? v.resolveWith(p, [c, x, S]) : v.rejectWith(p, [S, x, y]), S.statusCode(g), g = t, f && d.trigger(s ? "ajaxSuccess": "ajaxError", [S, h, s ? c: y]), m.fireWith(p, [S, x]), f && (d.trigger("ajaxComplete", [S, h]), --lt.active || lt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t),
            n = n || {};
            var i, s, o, u, a, f, l, c, h = lt.ajaxSetup({},
            n),
            p = h.context || h,
            d = h.context && (p.nodeType || p.jquery) ? lt(p) : lt.event,
            v = lt.Deferred(),
            m = lt.Callbacks("once memory"),
            g = h.statusCode || {},
            y = {},
            b = {},
            w = 0,
            E = "canceled",
            S = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!c) {
                            c = {};
                            while (t = jn.exec(u)) c[t[1].toLowerCase()] = t[2]
                        }
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? u: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = b[n] = b[n] || e, y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return w || (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > w) for (t in e) g[t] = [g[t], e[t]];
                    else S.always(e[S.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || E;
                    return l && l.abort(t),
                    r(0, t),
                    this
                }
            };
            if (v.promise(S).complete = m.add, S.success = S.done, S.error = S.fail, h.url = ((e || h.url || _n) + "").replace(Hn, "").replace(qn, Mn[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = lt.trim(h.dataType || "*").toLowerCase().match(ht) || [""], null == h.crossDomain && (i = Rn.exec(h.url.toLowerCase()), h.crossDomain = !(!i || i[1] === Mn[1] && i[2] === Mn[2] && (i[3] || ("http:" === i[1] ? "80": "443")) === (Mn[3] || ("http:" === Mn[1] ? "80": "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = lt.param(h.data, h.traditional)), _(zn, h, n, S), 2 === w) return S;
            f = h.global,
            f && 0 === lt.active++&&lt.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !In.test(h.type),
            o = h.url,
            h.hasContent || (h.data && (o = h.url += (Pn.test(o) ? "&": "?") + h.data, delete h.data), h.cache === !1 && (h.url = Bn.test(o) ? o.replace(Bn, "$1_=" + Dn++) : o + (Pn.test(o) ? "&": "?") + "_=" + Dn++)),
            h.ifModified && (lt.lastModified[o] && S.setRequestHeader("If-Modified-Since", lt.lastModified[o]), lt.etag[o] && S.setRequestHeader("If-None-Match", lt.etag[o])),
            (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && S.setRequestHeader("Content-Type", h.contentType),
            S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Xn + "; q=0.01": "") : h.accepts["*"]);
            for (s in h.headers) S.setRequestHeader(s, h.headers[s]);
            if (!h.beforeSend || h.beforeSend.call(p, S, h) !== !1 && 2 !== w) {
                E = "abort";
                for (s in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) S[s](h[s]);
                if (l = _(Wn, h, n, S)) {
                    S.readyState = 1,
                    f && d.trigger("ajaxSend", [S, h]),
                    h.async && h.timeout > 0 && (a = setTimeout(function() {
                        S.abort("timeout")
                    },
                    h.timeout));
                    try {
                        w = 1,
                        l.send(y, r)
                    } catch(x) {
                        if (! (2 > w)) throw x;
                        r( - 1, x)
                    }
                } else r( - 1, "No Transport");
                return S
            }
            return S.abort()
        },
        getJSON: function(e, t, n) {
            return lt.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return lt.get(e, t, n, "script")
        }
    }),
    lt.each(["get", "post"],
    function(e, n) {
        lt[n] = function(e, r, i, s) {
            return lt.isFunction(r) && (s = s || i, i = r, r = t),
            lt.ajax({
                url: e,
                type: n,
                dataType: s,
                data: r,
                success: i
            })
        }
    }),
    lt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return lt.globalEval(e),
                e
            }
        }
    }),
    lt.ajaxPrefilter("script",
    function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    lt.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var n, r = Q.head || lt("head")[0] || Q.documentElement;
            return {
                send: function(t, i) {
                    n = Q.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    },
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var $n = [],
    Jn = /(=)\?(?=&|$)|\?\?/;
    lt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $n.pop() || lt.expando + "_" + Dn++;
            return this[e] = !0,
            e
        }
    }),
    lt.ajaxPrefilter("json jsonp",
    function(n, r, i) {
        var s, o, u, a = n.jsonp !== !1 && (Jn.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Jn.test(n.data) && "data");
        return a || "jsonp" === n.dataTypes[0] ? (s = n.jsonpCallback = lt.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Jn, "$1" + s) : n.jsonp !== !1 && (n.url += (Pn.test(n.url) ? "&": "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
            return u || lt.error(s + " was not called"),
            u[0]
        },
        n.dataTypes[0] = "json", o = e[s], e[s] = function() {
            u = arguments
        },
        i.always(function() {
            e[s] = o,
            n[s] && (n.jsonpCallback = r.jsonpCallback, $n.push(s)),
            u && lt.isFunction(o) && o(u[0]),
            u = o = t
        }), "script") : t
    });
    var Kn, Qn, Gn = 0,
    Yn = e.ActiveXObject &&
    function() {
        var e;
        for (e in Kn) Kn[e](t, !0)
    };
    lt.ajaxSettings.xhr = e.ActiveXObject ?
    function() {
        return ! this.isLocal && B() || j()
    }: B,
    Qn = lt.ajaxSettings.xhr(),
    lt.support.cors = !!Qn && "withCredentials" in Qn,
    Qn = lt.support.ajax = !!Qn,
    Qn && lt.ajaxTransport(function(n) {
        if (!n.crossDomain || lt.support.cors) {
            var r;
            return {
                send: function(i, s) {
                    var o, u, a = n.xhr();
                    if (n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async), n.xhrFields) for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType),
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch(f) {}
                    a.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || 4 === a.readyState)) if (r = t, o && (a.onreadystatechange = lt.noop, Yn && delete Kn[o]), i) 4 !== a.readyState && a.abort();
                            else {
                                c = {},
                                u = a.status,
                                f = a.getAllResponseHeaders(),
                                "string" == typeof a.responseText && (c.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch(h) {
                                    l = ""
                                }
                                u || !n.isLocal || n.crossDomain ? 1223 === u && (u = 204) : u = c.text ? 200 : 404
                            }
                        } catch(p) {
                            i || s( - 1, p)
                        }
                        c && s(u, l, c, f)
                    },
                    n.async ? 4 === a.readyState ? setTimeout(r) : (o = ++Gn, Yn && (Kn || (Kn = {},
                    lt(e).unload(Yn)), Kn[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Zn, er, tr = /^(?:toggle|show|hide)$/,
    nr = RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
    rr = /queueHooks$/,
    ir = [U],
    sr = {
        "*": [function(e, t) {
            var n = this.createTween(e, t),
            r = n.cur(),
            i = nr.exec(t),
            s = i && i[3] || (lt.cssNumber[e] ? "": "px"),
            o = (lt.cssNumber[e] || "px" !== s && +r) && nr.exec(lt.css(n.elem, e)),
            u = 1,
            a = 20;
            if (o && o[3] !== s) {
                s = s || o[3],
                i = i || [],
                o = +r || 1;
                do u = u || ".5",
                o /= u,
                lt.style(n.elem, e, o + s);
                while (u !== (u = n.cur() / r) && 1 !== u && --a)
            }
            return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]),
            n
        }]
    };
    lt.Animation = lt.extend(q, {
        tweener: function(e, t) {
            lt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
            i = e.length;
            for (; i > r; r++) n = e[r],
            sr[n] = sr[n] || [],
            sr[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? ir.unshift(e) : ir.push(e)
        }
    }),
    lt.Tween = z,
    z.prototype = {
        constructor: z,
        init: function(e, t, n, r, i, s) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = s || (lt.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = z.propHooks[this.prop];
            return e && e.get ? e.get(this) : z.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = z.propHooks[this.prop];
            return this.pos = t = this.options.duration ? lt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : z.propHooks._default.set(this),
            this
        }
    },
    z.prototype.init.prototype = z.prototype,
    z.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = lt.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                lt.fx.step[e.prop] ? lt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[lt.cssProps[e.prop]] || lt.cssHooks[e.prop]) ? lt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    z.propHooks.scrollTop = z.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    lt.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = lt.fn[t];
        lt.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
        }
    }),
    lt.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = lt.isEmptyObject(e),
            s = lt.speed(t, n, r),
            o = function() {
                var t = q(this, lt.extend({},
                e), s); (i || lt._data(this, "finish")) && t.stop(!0)
            };
            return o.finish = o,
            i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                n = null != e && e + "queueHooks",
                s = lt.timers,
                o = lt._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else for (n in o) o[n] && o[n].stop && rr.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem !== this || null != e && s[n].queue !== e || (s[n].anim.stop(r), t = !1, s.splice(n, 1)); (t || !r) && lt.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = lt._data(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                s = lt.timers,
                o = r ? r.length: 0;
                for (n.finish = !0, lt.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    lt.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        lt.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    lt.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? lt.extend({},
        e) : {
            complete: n || !n && t || lt.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !lt.isFunction(t) && t
        };
        return r.duration = lt.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in lt.fx.speeds ? lt.fx.speeds[r.duration] : lt.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            lt.isFunction(r.old) && r.old.call(this),
            r.queue && lt.dequeue(this, r.queue)
        },
        r
    },
    lt.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    lt.timers = [],
    lt.fx = z.prototype.init,
    lt.fx.tick = function() {
        var e, n = lt.timers,
        r = 0;
        for (Zn = lt.now(); n.length > r; r++) e = n[r],
        e() || n[r] !== e || n.splice(r--, 1);
        n.length || lt.fx.stop(),
        Zn = t
    },
    lt.fx.timer = function(e) {
        e() && lt.timers.push(e) && lt.fx.start()
    },
    lt.fx.interval = 13,
    lt.fx.start = function() {
        er || (er = setInterval(lt.fx.tick, lt.fx.interval))
    },
    lt.fx.stop = function() {
        clearInterval(er),
        er = null
    },
    lt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    lt.fx.step = {},
    lt.expr && lt.expr.filters && (lt.expr.filters.animated = function(e) {
        return lt.grep(lt.timers,
        function(t) {
            return e === t.elem
        }).length
    }),
    lt.fn.offset = function(e) {
        if (arguments.length) return e === t ? this: this.each(function(t) {
            lt.offset.setOffset(this, e, t)
        });
        var n, r, i = {
            top: 0,
            left: 0
        },
        s = this[0],
        o = s && s.ownerDocument;
        if (o) return n = o.documentElement,
        lt.contains(n, s) ? (typeof s.getBoundingClientRect !== J && (i = s.getBoundingClientRect()), r = X(o), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i
    },
    lt.offset = {
        setOffset: function(e, t, n) {
            var r = lt.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = lt(e),
            s = i.offset(),
            o = lt.css(e, "top"),
            u = lt.css(e, "left"),
            a = ("absolute" === r || "fixed" === r) && lt.inArray("auto", [o, u]) > -1,
            f = {},
            l = {},
            c,
            h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0),
            lt.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (f.top = t.top - s.top + c),
            null != t.left && (f.left = t.left - s.left + h),
            "using" in t ? t.using.call(e, f) : i.css(f)
        }
    },
    lt.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
                return "fixed" === lt.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), lt.nodeName(e[0], "html") || (n = e.offset()), n.top += lt.css(e[0], "borderTopWidth", !0), n.left += lt.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - lt.css(r, "marginTop", !0),
                    left: t.left - n.left - lt.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || G;
                while (e && !lt.nodeName(e, "html") && "static" === lt.css(e, "position")) e = e.offsetParent;
                return e || G
            })
        }
    }),
    lt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, n) {
        var r = /Y/.test(n);
        lt.fn[e] = function(i) {
            return lt.access(this,
            function(e, i, s) {
                var o = X(e);
                return s === t ? o ? n in o ? o[n] : o.document.documentElement[i] : e[i] : (o ? o.scrollTo(r ? lt(o).scrollLeft() : s, r ? s: lt(o).scrollTop()) : e[i] = s, t)
            },
            e, i, arguments.length, null)
        }
    }),
    lt.each({
        Height: "height",
        Width: "width"
    },
    function(e, n) {
        lt.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        },
        function(r, i) {
            lt.fn[i] = function(i, s) {
                var o = arguments.length && (r || "boolean" != typeof i),
                u = r || (i === !0 || s === !0 ? "margin": "border");
                return lt.access(this,
                function(n, r, i) {
                    var s;
                    return lt.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? lt.css(n, r, u) : lt.style(n, r, i, u)
                },
                n, o ? i: t, o, null)
            }
        })
    }),
    lt.fn.size = function() {
        return this.length
    },
    lt.fn.andSelf = lt.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = lt: (e.jQuery = e.$ = lt, "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return lt
    }))
})(window);