webpackJsonp([1], {
    1292 : function(e, t) {},
    1293 : function(e, t) {},
    1691 : function(e, t) {},
    2150 : function(e, t, n) {
        "use strict";
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function r(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function c(e) {
            var t = e.active;
            return {
                sendDigitsError: t.sendDigitsError,
                activeConfirmSucceeded: t.activeConfirmSucceeded,
                activeConfirmError: t.activeConfirmError
            }
        }
        function u(e, t) {
            var n = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function s(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function l(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function p(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function f(e, t) {
            var n = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function d(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function h(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function m(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function b(e, t) {
            var n = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function y(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function v(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function g(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var E, w, C, O, P, N, S, _, k, T, j = n(1),
        B = n.n(j),
        D = n(0),
        I = n.n(D),
        R = n(5),
        q = n(3),
        A = n(324),
        F = n(34),
        U = n(44),
        M = n(61),
        x = n(105),
        V = (n(1292),
        function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        } ()),
        z = (E = Object(R.connect)(c, {
            getUnlockTicketAndDigits: A.c,
            activeUserByEmail: A.a,
            validateAndActiveUserByDigits: A.d,
            activeUser: F.b
        }))((O = C = function(e) {
            function t(e) {
                r(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.checkUserAccountType = function(e) {
                    return e.email ? "email": "noInfo"
                },
                n.handleChange = function(e, t) {
                    n.setState(o({},
                    e, t))
                },
                n.handleChangeSmsType = function() {
                    n.setState(function(e) {
                        var t = e.smsType;
                        return {
                            smsType: "text" === t ? "voice": "text",
                            smsBackUpName: "text" === t ? "短信": "语音",
                            reStartTime: Date.now()
                        }
                    })
                },
                n.handleCountDownEndEvent = function() {
                    n.setState({
                        smsBackUpDisplay: !0
                    })
                },
                n.handleSendDigits = function() {
                    var e = n.props.getUnlockTicketAndDigits,
                    t = n.state,
                    o = t.selectedCountry.code,
                    r = t.phoneNo,
                    a = t.smsType;
                    n.setState({
                        manualError: null
                    },
                    function() {
                        if (r) return e({
                            newPhoneNo: "" + o + r,
                            smsType: a
                        }),
                        void n.setState({
                            smsBackUpDisplay: !1
                        });
                        n.setState({
                            manualError: "请输入手机号",
                            smsInputInterceptTime: Date.now()
                        })
                    })
                },
                n.handleSubmit = function(e) {
                    var t = n.props,
                    o = t.email,
                    r = t.activeUserByEmail,
                    a = t.validateAndActiveUserByDigits,
                    i = t.onClose,
                    c = n.state,
                    u = c.accountType,
                    s = c.selectedCountry.code,
                    l = e.username,
                    p = e.digits;
                    "email" === u ? (r({
                        email: o
                    }), "function" == typeof i && i()) : a({
                        newPhoneNo: "" + s + l,
                        digits: p
                    })
                },
                n.parseServerError = function() {
                    var e = n.props,
                    t = e.activeConfirmError,
                    o = e.sendDigitsError,
                    r = t || {},
                    a = r.username,
                    i = r.digits,
                    c = o || {},
                    u = c.username;
                    return {
                        usernameServerError: a || u,
                        digitsServerError: i
                    }
                },
                n.renderAccountInfo = function() {
                    var e = n.props.email,
                    t = n.state,
                    o = t.accountType,
                    r = t.manualError,
                    a = n.parseServerError(),
                    i = a.usernameServerError;
                    return "noInfo" !== o ? I.a.createElement("div", {
                        className: "SignFlowActive-account"
                    },
                    e, "email" === o && I.a.createElement("a", {
                        target: "_blank",
                        href: "/settings/account",
                        className: "SignFlowActive-editEmail"
                    },
                    "修改邮箱")) : I.a.createElement(M.a, {
                        type: "digits",
                        supportedCountriesShown: !0,
                        manualValidateError: i || r,
                        onSelect: function(e) {
                            return n.handleChange("selectedCountry", e)
                        },
                        onChange: function(e) {
                            return n.handleChange("phoneNo", e)
                        }
                    })
                },
                n.state = {
                    accountType: n.checkUserAccountType(e),
                    selectedCountry: {
                        code: "+86",
                        name: "中国"
                    },
                    phoneNo: null,
                    smsInputInterceptTime: -1,
                    manualError: null,
                    smsType: "text",
                    smsBackUpName: "语音",
                    smsBackUpDisplay: !0,
                    reStartTime: -1
                },
                n
            }
            return i(t, e),
            V(t, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this.props,
                    n = t.sendDigitsError,
                    o = t.onClose,
                    r = t.activeUser,
                    a = e.activeConfirmSucceeded,
                    i = e.sendDigitsError;
                    a ? (o(), r()) : !n && i && (this.setState({
                        smsInputInterceptTime: Date.now()
                    }), this.handleCountDownEndEvent())
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this.state,
                    t = e.accountType,
                    n = e.smsInputInterceptTime,
                    o = e.smsType,
                    r = e.smsBackUpName,
                    a = e.smsBackUpDisplay,
                    i = e.reStartTime,
                    c = this.parseServerError(),
                    u = c.digitsServerError;
                    return I.a.createElement(U.b, {
                        className: "SignFlowActive SignFlow",
                        onSubmit: this.handleSubmit
                    },
                    this.renderAccountInfo(), "email" !== t && [I.a.createElement(x.a, {
                        key: "sms-input",
                        manualValidateError: u,
                        interceptTime: n,
                        countDownEvent: this.handleSendDigits,
                        countDownEndEvent: this.handleCountDownEndEvent,
                        smsType: o,
                        reStartTime: i
                    }), a && I.a.createElement("div", {
                        key: "smsBackUp-button",
                        className: "SignFlowActive-options"
                    },
                    I.a.createElement(q.
                default, {
                        preset: "plain",
                        className: "SignFlowActive-cutSmsType",
                        onClick: this.handleChangeSmsType
                    },
                    "接收" + r + "验证码"))], I.a.createElement(q.
                default, {
                        className: "email" === t ? "SignFlowActive-sendEmail": "SignFlowActive-sendDigits",
                        preset: "primary",
                        color: "blue",
                        type: "submit"
                    },
                    "email" === t ? "发送激活邮件": "激活"))
                }
            }]),
            t
        } (D.Component), C.propTypes = {
            email: B.a.string,
            sendDigitsError: B.a.object,
            getUnlockTicketAndDigits: B.a.func,
            activeUserByEmail: B.a.func,
            validateAndActiveUserByEmail: B.a.func,
            activeConfirmSucceeded: B.a.bool,
            activeConfirmError: B.a.object,
            onClose: B.a.func
        },
        w = O)) || w,
        W = z,
        H = n(29),
        L = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        K = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        } (),
        Y = (N = P = function(e) {
            function t() {
                var e, n, o, r;
                s(this, t);
                for (var a = arguments.length,
                i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                return n = o = l(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                o.state = {
                    snackbar: null
                },
                o.handleSetSnackbar = function(e) {
                    return o.setState({
                        snackbar: e
                    })
                },
                r = n,
                l(o, r)
            }
            return p(t, e),
            K(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.shown,
                    n = e.onClose,
                    o = u(e, ["shown", "onClose"]);
                    return I.a.createElement(H.
                default, {
                        className: "SignFlow-modal",
                        title: "激活帐号",
                        subtitle: "为了正常使用知乎的提问、回答、评论和编辑功能，请绑定你的手机",
                        onClose: n,
                        maskClosable: !1,
                        footer: this.state.snackbar
                    },
                    t && I.a.createElement(W, L({
                        onClose: n,
                        onSetSnackbar: this.handleSetSnackbar
                    },
                    o)))
                }
            }]),
            t
        } (D.Component), P.propTypes = {
            shown: B.a.bool.isRequired,
            onClose: B.a.func.isRequired
        },
        N),
        G = Y,
        Z = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        J = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        } (),
        $ = (_ = S = function(e) {
            function t() {
                return d(this, t),
                h(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return m(t, e),
            J(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.isInModal,
                    n = e.shown,
                    o = e.onClose,
                    r = f(e, ["isInModal", "shown", "onClose"]);
                    return I.a.createElement("div", null, t ? I.a.createElement(G, Z({
                        onClose: o,
                        shown: n
                    },
                    r)) : I.a.createElement(W, r))
                }
            }]),
            t
        } (D.Component), S.propTypes = {
            isInModal: B.a.bool,
            shown: B.a.bool,
            onClose: B.a.func
        },
        S.defaultProps = {
            isInModal: !1
        },
        _),
        Q = $,
        X = (n(332), Q),
        ee = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        te = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        } (),
        ne = (T = k = function(e) {
            function t() {
                return y(this, t),
                v(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return g(t, e),
            te(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.type,
                    n = b(e, ["type"]),
                    o = ee({
                        isInModal: !0
                    },
                    n);
                    return I.a.createElement("div", {
                        className: "SignFlowModal"
                    },
                    I.a.createElement(X, ee({},
                    o, {
                        shown: "active" === t
                    })))
                }
            }]),
            t
        } (D.Component), k.propTypes = {
            type: B.a.oneOf(["initial", "active"]),
            onClose: B.a.func.isRequired
        },
        T);
        t.
    default = ne
    },
    2151 : function(e, t, n) {
        "use strict";
        function o(e) {
            if (Array.isArray(e)) {
                for (var t = 0,
                n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        function r(e, t) {
            var n = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
            return n
        }
        function a(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function c(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function s(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function l(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function p(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function f(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function d(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function h(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function m(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function b(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function y(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function v(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function g(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function E(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function w(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function C(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function O(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function P(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function N(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function S(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var _, k, T, j, B, D, I, R, q, A, F, U, M, x, V = n(1),
        z = n.n(V),
        W = n(0),
        H = n.n(W),
        L = n(5),
        K = n(328),
        Y = n(3),
        G = n(48),
        Z = n.n(G),
        J = n(6),
        $ = n.n(J),
        Q = n(44),
        X = n(61),
        ee = n(321),
        te = n(322),
        ne = n(45),
        oe = (n(1691), Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }),
        re = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        } (),
        ae = function(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        } (["", "s 后可重发"], ["", "s 后可重发"]),
        ie = (_ = Object(L.connect)(function(e) {
            return {
                isIOS: e.env.userAgent.iOS
            }
        }))((j = T = function(e) {
            function t() {
                return a(this, t),
                i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return c(t, e),
            re(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.countDownEvent,
                    n = e.startAtOnce,
                    a = e.interceptTime,
                    i = e.resetText,
                    c = e.manualValidateError,
                    u = e.onChange,
                    s = e.validations,
                    l = e.countDownEndEvent,
                    p = e.reStartTime,
                    f = e.isIOS,
                    d = r(e, ["countDownEvent", "startAtOnce", "interceptTime", "resetText", "manualValidateError", "onChange", "validations", "countDownEndEvent", "reStartTime", "isIOS"]);
                    return H.a.createElement("div", {
                        className: "SignFlow SignFlow-smsBindPhoneInputContainer"
                    },
                    H.a.createElement(ne.a, oe({
                        name: "digits",
                        className: "SignFlow-smsBindPhoneInput",
                        type: f ? "tel": "number",
                        errorMessageClassName: "SignFlow-smsBindPhoneInputErrorMask",
                        placeholder: "输入 6 位验证码",
                        manualValidateError: c,
                        onChange: u,
                        validations: [{
                            type: "required",
                            message: "请填写验证码",
                            className: "SignFlow-smsInputBindPhoneRequiredErrorMask"
                        }].concat(o(s || []))
                    },
                    d)), H.a.createElement(ee.a, {
                        className: "SignFlow-smsBindPhoneInputButton",
                        preset: "plain",
                        initialText: "发送验证码",
                        resetText: i,
                        countingText: Object(te.a)(ae, "count"),
                        startAtOnce: n,
                        event: t,
                        countDownEndEvent: l,
                        interceptTime: a,
                        reStartTime: p
                    }))
                }
            }]),
            t
        } (W.Component), T.propTypes = {
            countDownEvent: z.a.func.isRequired,
            startAtOnce: z.a.bool,
            interceptTime: z.a.number,
            resetText: z.a.string,
            manualValidateError: z.a.string
        },
        T.defaultProps = {
            startAtOnce: !1,
            resetText: "重发验证码"
        },
        k = j)) || k,
        ce = ie,
        ue = n(13),
        se = (n(1292), n(1293),
        function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        } ()),
        le = (D = B = function(e) {
            function t() {
                var e, n, o, r;
                s(this, t);
                for (var a = arguments.length,
                i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                return n = o = l(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                o.state = {
                    selectedCountry: {
                        code: "+86",
                        name: "中国"
                    },
                    phoneNo: null,
                    smsInputInterceptTime: -1,
                    manualError: null,
                    showFooter: !1,
                    sendValidationCodeButtonText: "发送验证码",
                    identifyingCodeError: null
                },
                o.testPhoneNo = function() {
                    var e = o.state,
                    t = e.selectedCountry.code,
                    n = e.phoneNo,
                    r = /^\d{11}$/;
                    return "+86" !== t || r.test(n)
                },
                o.handleChange = function(e) {
                    return function(t) {
                        o.setState(u({},
                        e, t))
                    }
                },
                o.handleSendDigits = function(e) {
                    var t = o.props.requestPhoneVerificationCode,
                    n = o.state,
                    r = n.selectedCountry.code,
                    a = n.phoneNo,
                    i = n.manualError;
                    if ($.a.trackEvent(e.target, {
                        action: "GetCaptcha"
                    }), o.testPhoneNo()) return t("" + r + a).then(function() {
                        o.setState({
                            manualError: null
                        })
                    }).
                    catch(function(e) {
                        var t = e.payload;
                        t = void 0 === t ? {}: t;
                        var n = t.message;
                        return o.setState({
                            manualError: n,
                            smsInputInterceptTime: Date.now()
                        })
                    });
                    return o.setState({
                        manualError: "请输入正确的手机号" === i ? " 请输入正确的手机号": "请输入正确的手机号",
                        smsInputInterceptTime: Date.now()
                    })
                },
                o.handleSubmit = function(e) {
                    var t = e.phoneNo,
                    n = e.digits,
                    r = o.props,
                    a = r.updatePhoneNumber,
                    i = r.onSuccess,
                    c = r.onNeedUnbind,
                    u = o.state,
                    s = u.selectedCountry.code,
                    l = u.identifyingCodeError;
                    a("" + s + t, n).then(function(e) {
                        var n = e.payload,
                        o = n.data;
                        if (n.success) return i();
                        var r = o.bindedAccountFullname,
                        a = o.requestAccountFullname;
                        return c({
                            phoneNumber: t,
                            bindName: r,
                            requiredName: a
                        })
                    }).
                    catch(function(e) {
                        var t = e.payload;
                        t = void 0 === t ? {}: t;
                        var n = t.code,
                        r = t.message;
                        n === ue.m && o.setState({
                            identifyingCodeError: l === r ? " " + r: r
                        })
                    })
                },
                o.handleZaOK = function(e) {
                    $.a.trackEvent(e.target, {
                        action: "Ok"
                    })
                },
                o.renderContent = function() {
                    var e = o.state,
                    t = e.smsInputInterceptTime,
                    n = e.manualError,
                    r = e.sendValidationCodeButtonText,
                    a = e.identifyingCodeError;
                    return H.a.createElement("div", {
                        ref: function(e) {
                            o.container = e
                        }
                    },
                    H.a.createElement(Q.b, {
                        className: "SignFlowActive SignFlow BindPhoneForm",
                        onSubmit: o.handleSubmit
                    },
                    !1, H.a.createElement(X.a, {
                        type: "register",
                        supportedCountriesShown: !0,
                        manualValidateError: n,
                        onSelect: o.handleChange("selectedCountry"),
                        onChange: o.handleChange("phoneNo")
                    }), H.a.createElement(ce, {
                        key: "sms-input",
                        resetText: r,
                        interceptTime: t,
                        countDownEvent: o.handleSendDigits,
                        manualValidateError: a
                    }), H.a.createElement("div", {
                        className: "BindPhone-helpWrapper"
                    },
                    H.a.createElement(Y.
                default, {
                        className: "BindPhone-helpText",
                        preset: "link",
                        onClick: function() {
                            o.setState({
                                showFooter: !0
                            })
                        }
                    },
                    "需要帮助？")), H.a.createElement(Y.
                default, {
                        className: "SignFlowActive-sendDigits",
                        preset: "primary",
                        color: "blue",
                        type: "submit",
                        onClick: o.handleZaOK
                    },
                    "确认")))
                },
                r = n,
                l(o, r)
            }
            return p(t, e),
            se(t, [{
                key: "componentDidMount",
                value: function() {
                    $.a.setModule(this.container, {
                        module: "BindPhoneForm"
                    }),
                    $.a.trackCardShow(this.container)
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this.props.onClose,
                    t = this.state.showFooter;
                    return H.a.createElement(Z.a, {
                        title: "设置手机号",
                        subtitle: "绑定手机后，你就可以使用知乎的提问、回答、评论等功能。",
                        footer: t ? "如需要帮助，请联系 i@zhihu.com，我们会尽快帮你解决": null,
                        onClose: e,
                        size: "default"
                    },
                    this.renderContent())
                }
            }]),
            t
        } (W.Component), B.propTypes = {
            requestPhoneVerificationCode: z.a.func.isRequired,
            updatePhoneNumber: z.a.func.isRequired,
            onClose: z.a.func.isRequired,
            onSuccess: z.a.func.isRequired,
            onNeedUnbind: z.a.func.isRequired
        },
        D),
        pe = n(49),
        fe = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        } (),
        de = (R = I = function(e) {
            function t() {
                var e, n, o, r;
                f(this, t);
                for (var a = arguments.length,
                i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                return n = o = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                o.zaKnowMore = function(e) {
                    $.a.trackEvent(e.target, {
                        action: "OpenUrl",
                        name: "了解更多"
                    })
                },
                o.toBindPhone = function(e) {
                    var t = o.props.onBindPhone;
                    $.a.trackEvent(e.target, {
                        action: "OpenUrl",
                        name: "去绑定手机"
                    }),
                    t()
                },
                o.handleClose = function(e) {
                    var t = o.props,
                    n = t.onClose,
                    r = t.config.canWrite;
                    $.a.trackEvent(e.target, {
                        action: "Cancel",
                        name: r ? "暂不绑定": "取消"
                    }),
                    n()
                },
                o.renderContent = function() {
                    var e = o.props.config,
                    t = e.tip,
                    n = e.canWrite;
                    return H.a.createElement("div", {
                        ref: function(e) {
                            o.container = e
                        }
                    },
                    H.a.createElement("p", null, t, H.a.createElement(pe.a, {
                        preset: "link",
                        target: "_blank",
                        href: "https://zhuanlan.zhihu.com/p/27257715",
                        onClick: o.zaKnowMore
                    },
                    "了解更多")), H.a.createElement("div", {
                        className: "BindPhone-buttonSection"
                    },
                    H.a.createElement(pe.a, {
                        className: "BindPhone-button",
                        onClick: o.handleClose
                    },
                    n ? "暂不绑定": "取消"), H.a.createElement(Y.
                default, {
                        className: "BindPhone-button",
                        preset: "primary",
                        color: "blue",
                        onClick: o.toBindPhone
                    },
                    "去绑定手机")))
                },
                r = n,
                d(o, r)
            }
            return h(t, e),
            fe(t, [{
                key: "componentDidMount",
                value: function() {
                    $.a.setModule(this.container, {
                        module: "BindPhoneForm"
                    }),
                    $.a.trackCardShow(this.container)
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this.props.onClose;
                    return H.a.createElement(Z.a, {
                        className: !1,
                        title: "绑定手机",
                        onClose: e,
                        size: "default"
                    },
                    this.renderContent())
                }
            }]),
            t
        } (W.Component), I.propTypes = {
            config: z.a.object,
            onClose: z.a.func,
            onBindPhone: z.a.func
        },
        R),
        he = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        } (),
        me = (A = q = function(e) {
            function t() {
                var e, n, o, r;
                m(this, t);
                for (var a = arguments.length,
                i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                return n = o = b(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                o.handleCancel = function(e) {
                    var t = o.props.onClose;
                    $.a.trackEvent(e.target, {
                        action: "Cancel",
                        name: "不绑定"
                    }),
                    t()
                },
                r = n,
                b(o, r)
            }
            return y(t, e),
            he(t, [{
                key: "componentDidMount",
                value: function() {
                    $.a.setModule(this.container, {
                        module: "BindMailForm"
                    }),
                    $.a.trackCardShow(this.container)
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this,
                    t = this.props.onClose;
                    return H.a.createElement(Z.a, {
                        className: !1,
                        title: "手机号绑定成功",
                        onClose: t,
                        size: "default"
                    },
                    H.a.createElement("div", {
                        ref: function(t) {
                            e.container = t
                        }
                    },
                    H.a.createElement("p", null, "由于你此前绑定的邮箱未经验证，未来请使用手机号登录知乎。"), H.a.createElement(Y.
                default, {
                        className: "BindPhone-remindLoginWithPhoneButton",
                        onClick: this.handleCancel,
                        preset: "primary",
                        color: "blue"
                    },
                    "知道了")))
                }
            }]),
            t
        } (W.Component), q.propTypes = {
            onClose: z.a.func
        },
        A),
        be = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        } (),
        ye = (U = F = function(e) {
            function t() {
                var e, n, o, r;
                v(this, t);
                for (var a = arguments.length,
                i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                return n = o = g(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                o.handleCancel = function(e) {
                    var t = o.props.onCancel;
                    $.a.trackEvent(e.target, {
                        action: "Click",
                        name: "暂不绑定"
                    }),
                    t()
                },
                o.handleConfirm = function(e) {
                    var t = o.props.onConfirm;
                    $.a.trackEvent(e.target, {
                        action: "Click",
                        name: "确认解绑"
                    }),
                    t()
                },
                r = n,
                g(o, r)
            }
            return E(t, e),
            be(t, [{
                key: "componentDidMount",
                value: function() {
                    $.a.setModule(this.container, {
                        module: "BindPhoneFailForm"
                    }),
                    $.a.trackCardShow(this.container)
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this,
                    t = this.props,
                    n = t.onClose,
                    o = t.phoneNumber,
                    r = t.bindName,
                    a = t.requiredName;
                    return H.a.createElement(Z.a, {
                        className: !1,
                        title: "绑定失败",
                        onClose: n,
                        size: "default"
                    },
                    H.a.createElement("div", {
                        ref: function(t) {
                            e.container = t
                        }
                    },
                    H.a.createElement("p", null, "你所输入的手机号 ", o, " 已经被绑定到帐号「", r, "」。"), !1, H.a.createElement("p", null, "你可以选择将该手机号从该帐号中解绑，并绑定至当前帐号「", a, "」。"), !1, H.a.createElement("p", null, H.a.createElement("b", null, "解绑后，你将无法再通过手机号登录原帐号「", r, "」。")), H.a.createElement("div", {
                        className: "BindPhone-buttonSection"
                    },
                    H.a.createElement(Y.
                default, {
                        className: "BindPhone-button",
                        onClick: this.handleConfirm
                    },
                    "确认解绑"), H.a.createElement(Y.
                default, {
                        className: "BindPhone-button",
                        preset: "primary",
                        color: "blue",
                        onClick: this.handleCancel
                    },
                    "暂不绑定"))))
                }
            }]),
            t
        } (W.Component), F.propTypes = {
            onClose: z.a.func.isRequired,
            onCancel: z.a.func.isRequired,
            onConfirm: z.a.func.isRequired,
            phoneNumber: z.a.string.isRequired,
            bindName: z.a.string.isRequired,
            requiredName: z.a.string.isRequired
        },
        U),
        ve = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        } (),
        ge = (x = M = function(e) {
            function t() {
                var e, n, o, r;
                w(this, t);
                for (var a = arguments.length,
                i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                return n = o = C(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                o.handleUnbind = function(e) {
                    var t = o.props,
                    n = t.onSuccess,
                    r = t.monopolizePhoneNumber,
                    a = t.showNotification;
                    $.a.trackEvent(e.target, {
                        action: "Click",
                        name: "确认解绑"
                    }),
                    r().then(function() {
                        return a("绑定成功！", "white"),
                        n()
                    })
                },
                o.handleCancel = function(e) {
                    var t = o.props.onCancel;
                    $.a.trackEvent(e.target, {
                        action: "Click",
                        name: "暂不绑定"
                    }),
                    t()
                },
                r = n,
                C(o, r)
            }
            return O(t, e),
            ve(t, [{
                key: "componentDidMount",
                value: function() {
                    $.a.setModule(this.container, {
                        module: "BindPhoneVerifyForm"
                    }),
                    $.a.trackCardShow(this.container)
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this,
                    t = this.props,
                    n = t.onClose,
                    o = t.bindName;
                    return H.a.createElement(Z.a, {
                        className: !1,
                        title: "解绑手机",
                        onClose: n,
                        size: "default"
                    },
                    H.a.createElement("div", {
                        ref: function(t) {
                            e.container = t
                        }
                    },
                    H.a.createElement("p", null, H.a.createElement("b", null, "解绑操作无法撤销。")), !1, H.a.createElement("p", null, "如果你没有其他登录方式，你将无法再使用帐号「", o, "」。"), H.a.createElement("div", {
                        className: "BindPhone-buttonSection"
                    },
                    H.a.createElement(Y.
                default, {
                        className: "BindPhone-button",
                        onClick: this.handleUnbind
                    },
                    "确认解绑"), H.a.createElement(Y.
                default, {
                        className: "BindPhone-button",
                        preset: "primary",
                        color: "blue",
                        onClick: this.handleCancel
                    },
                    "暂不绑定"))))
                }
            }]),
            t
        } (W.Component), M.propTypes = {
            onClose: z.a.func.isRequired,
            onSuccess: z.a.func.isRequired,
            onCancel: z.a.func.isRequired,
            bindName: z.a.string.isRequired,
            showNotification: z.a.func.isRequired,
            monopolizePhoneNumber: z.a.string.isRequired
        },
        x),
        Ee = n(160),
        we = n(14);
        n.d(t, "default",
        function() {
            return je
        });
        var Ce, Oe, Pe, Ne, Se = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        } (),
        _e = "LOGIN_WITH_PHONE",
        ke = "NEED_UNBIND",
        Te = function(e) {
            var t = e.account,
            n = e.entities,
            o = n.users[e.currentUser],
            r = o.isActive,
            a = o.email;
            return {
                account: t,
                hasActiveEmail: r && a,
                needShowLoginWithPhoneNumber: !r && !!a,
                config: ue.x,
                isWindow: ue.x.isWindow
            }
        },
        je = (Ce = Object(L.connect)(Te, {
            requestPhoneVerificationCode: Ee.g,
            updatePhoneNumber: Ee.k,
            monopolizePhoneNumber: Ee.e,
            showNotification: we.h,
            getUnlockRequest: Ee.c,
            unlockTicketByDigits: Ee.i,
            requestUnlockTicket: Ee.h,
            unlockTicketByPassword: Ee.j
        }))((Ne = Pe = function(e) {
            function t() {
                var e, n, o, r;
                P(this, t);
                for (var a = arguments.length,
                i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                return n = o = N(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                o.state = {},
                o.handleBindPhoneSuccess = function() {
                    var e = o.props,
                    t = e.needShowLoginWithPhoneNumber,
                    n = e.showNotification,
                    r = e.onToggle;
                    return t ? o.goToStep(_e)() : (n("绑定成功！", "white"), setTimeout(function() {
                        return location.reload()
                    },
                    2e3), r())
                },
                o.handleNeedUnbind = function(e) {
                    var t = e.bindName,
                    n = e.phoneNumber,
                    r = e.requiredName;
                    return o.setState({
                        bindName: t,
                        phoneNumber: n,
                        requiredName: r,
                        step: ke
                    })
                },
                o.goToStep = function(e) {
                    return function() {
                        return o.setState({
                            step: e
                        })
                    }
                },
                o.handleCloseWithReload = function() {
                    return location.reload()
                },
                r = n,
                N(o, r)
            }
            return S(t, e),
            Se(t, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this.props,
                    n = t.getUnlockRequest,
                    o = t.hasActiveEmail,
                    r = t.shown,
                    a = t.isWindow,
                    i = t.account,
                    c = i.errorStatus,
                    u = i.challenge,
                    s = document.querySelector(".VerificationDialogModalHeader");
                    if (e.shown && !r) {
                        a || n();
                        var l = "";
                        l = o ? "CONFIRM_BIND_PHONE": !a && c && !s && u && u.length ? "SAFETY_VERIFICATION": "BIND_PHONE",
                        this.setState({
                            step: l
                        })
                    }
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.shown,
                    n = e.requestPhoneVerificationCode,
                    o = e.updatePhoneNumber,
                    r = e.monopolizePhoneNumber,
                    a = e.showNotification,
                    i = e.config,
                    c = e.account,
                    u = e.isWindow,
                    s = e.unlockTicketByDigits,
                    l = e.requestUnlockTicket,
                    p = e.unlockTicketByPassword,
                    f = e.onToggle,
                    d = this.state,
                    h = d.step,
                    m = d.bindName,
                    b = d.phoneNumber,
                    y = d.requiredName;
                    return t ? "CONFIRM_BIND_PHONE" === h ? H.a.createElement(de, {
                        onBindPhone: this.goToStep(u ? "BIND_PHONE": "SAFETY_VERIFICATION"),
                        onClose: f,
                        config: i
                    }) : "BIND_PHONE" === h ? H.a.createElement(le, {
                        onClose: f,
                        onSuccess: this.handleBindPhoneSuccess,
                        onNeedUnbind: this.handleNeedUnbind,
                        requestPhoneVerificationCode: n,
                        updatePhoneNumber: o
                    }) : h === _e ? H.a.createElement(me, {
                        onClose: this.handleCloseWithReload
                    }) : h === ke ? H.a.createElement(ye, {
                        onClose: f,
                        onCancel: this.goToStep("BIND_PHONE"),
                        onConfirm: this.goToStep("CONFIRM_UNBIND"),
                        bindName: m,
                        phoneNumber: b,
                        requiredName: y
                    }) : "CONFIRM_UNBIND" === h ? H.a.createElement(ge, {
                        onClose: f,
                        onSuccess: this.handleBindPhoneSuccess,
                        onCancel: this.goToStep("BIND_PHONE"),
                        bindName: m,
                        monopolizePhoneNumber: r,
                        showNotification: a
                    }) : "SAFETY_VERIFICATION" === h ? H.a.createElement(K.VerificationModal, {
                        account: c,
                        unlockTicketByDigits: s,
                        requestUnlockTicket: l,
                        unlockTicketByPassword: p,
                        onClose: f,
                        onSuccess: this.goToStep("BIND_PHONE"),
                        zaModuleName: "BindMailForm"
                    }) : null: null
                }
            }]),
            t
        } (W.Component), Pe.propTypes = {
            shown: z.a.bool.isRequired,
            onToggle: z.a.func.isRequired,
            needShowLoginWithPhoneNumber: z.a.bool.isRequired,
            config: z.a.object.isRequired,
            requestPhoneVerificationCode: z.a.func.isRequired,
            updatePhoneNumber: z.a.func.isRequired,
            monopolizePhoneNumber: z.a.func.isRequired
        },
        Oe = Ne)) || Oe
    },
    724 : function(e, t, n) {
        "use strict";
        function o(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        n.d(t, "default",
        function() {
            return p
        });
        var i = n(0),
        c = n.n(i),
        u = n(29),
        s = n(319),
        l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        } (),
        p = function(e) {
            function t() {
                return o(this, t),
                r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return a(t, e),
            l(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.onClose,
                    n = e.signType;
                    return c.a.createElement(u.
                default, {
                        className: "signFlowModal",
                        onClose: t
                    },
                    c.a.createElement(s.a, {
                        signType: n
                    }))
                }
            }]),
            t
        } (i.Component)
    }
});