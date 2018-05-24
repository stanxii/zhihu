webpackJsonp([0], {
    1289 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.
    default = function(e, t, n) {
            return n && void 0 !== t && (e || !t)
        }
    },
    1290 : function(e, t, n) {
        "use strict";
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function r(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = n.selectedKey,
            i = void 0 === r ? "selectedProps": r,
            l = n.dropedKey,
            s = void 0 === l ? "dropedProps": l;
            return Object.keys(e).reduce(function(n, r) {
                var l = t.includes(r) ? i: s;
                return o({},
                n, a({},
                l, o({},
                n[l], a({},
                r, e[r]))))
            },
            {})
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        };
        t.selectPairs = r
    },
    1291 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.convertType = function(e) {
            return "article" === e ? "Post": "book_review" === e ? "BookReview": "" + e.slice(0, 1).toUpperCase() + e.slice(1)
        }
    },
    1670 : function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function r(e, t) {
            var n = {};
            for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
            return n
        }
        function o(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function l(e, t) {
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
        var s = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        },
        c = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        u = n(1),
        p = a(u),
        m = n(0),
        d = a(m),
        f = n(3),
        h = a(f),
        b = n(88),
        y = (a(b), n(29)),
        v = n(6),
        E = a(v),
        C = n(48),
        g = a(C),
        O = n(1671),
        w = a(O),
        _ = n(1672),
        k = a(_),
        P = n(1290),
        N = n(1291),
        T = n(1289),
        S = a(T),
        j = n(1674);
        a(j);
        n(1675);
        var R = {
            list: {
                title: "添加收藏",
                tips: function(e) {
                    return e ? "请选择你想添加的收藏夹": "你可以创建多个收藏夹，将答案分类收藏"
                }
            },
            add: {
                title: "创建新收藏夹"
            }
        },
        I = function(e) {
            function t() {
                var e, n, a, r;
                o(this, t);
                for (var l = arguments.length,
                s = Array(l), c = 0; c < l; c++) s[c] = arguments[c];
                return n = a = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))),
                M.call(a),
                r = n,
                i(a, r)
            }
            return l(t, e),
            c(t, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this.props,
                    n = t.shown,
                    a = t.items,
                    r = t.id,
                    o = t.type,
                    i = t.onFetchRelations,
                    l = e.items,
                    s = e.relations;
                    if (i && (l.length !== a.length && e.shown || l.length && !n && e.shown)) {
                        var c = (s ? l.filter(function(e) {
                            return ! {}.hasOwnProperty.call(s, e.id)
                        }) : l).map(function(e) {
                            return e.id
                        });
                        c.length && i(r, o, c)
                    }
                    l.length > a.length && this.setState({
                        status: "list"
                    })
                }
            },
            {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props,
                    n = t.id,
                    a = t.type,
                    r = t.shown,
                    o = t.zaEnabled;
                    r && !e.shown && this.container && o && E.
                default.setModule(this.container, {
                        module: "CollectionDialogue"
                    },
                    {
                        card: {
                            card_type: "Content",
                            content: {
                                type: (0, N.convertType)(a),
                                token: String(n)
                            }
                        }
                    })
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this,
                    t = this.state.status,
                    n = R[t],
                    a = n.title,
                    o = n.tips,
                    i = this.props,
                    l = i.shown,
                    c = i.defaultStatus,
                    u = i.relations,
                    p = i.onFavlistAdd,
                    m = i.onLoad,
                    f = i.isFetching,
                    b = i.isDrained,
                    v = i.items,
                    E = i.zaEnabled,
                    C = i.authRequired,
                    O = i.isUserActive,
                    _ = r(i, ["shown", "defaultStatus", "relations", "onFavlistAdd", "onLoad", "isFetching", "isDrained", "items", "zaEnabled", "authRequired", "isUserActive"]),
                    N = !(b && !v.length),
                    T = (0, P.selectPairs)(_, Object.keys(g.
                default.propTypes)),
                    S = T.selectedProps,
                    j = void 0;
                    return j = "list" === t ? N ? d.
                default.createElement(k.
                default, {
                        ref: function(t) {
                            e.container = t
                        },
                        items: v,
                        isFetching: f,
                        isDrained: b,
                        relations: u,
                        onAdd: this.handleAdd,
                        onUpdate: this.handleUpdate,
                        onLoad: m,
                        zaEnabled: E
                    }) : d.
                default.createElement(y.ModalButtonGroup, null, d.
                default.createElement(h.
                default, {
                        preset: "primary",
                        color: "blue",
                        onClick: this.handleAdd
                    },
                    "创建收藏夹"), d.
                default.createElement(h.
                default, {
                        onClick: this.handleCloseModal
                    },
                    "取消")) : d.
                default.createElement(w.
                default, {
                        onSubmit: p,
                        isActive: O,
                        onBack: "add" === c ? this.handleCloseModal: this.handleBack,
                        authRequired: C
                    }),
                    d.
                default.createElement(g.
                default, s({},
                    S, {
                        onClose: this.handleCloseModal,
                        title: a,
                        subtitle: o && o(N),
                        buttonGroupOnly: !N,
                        className: "FavlistsModal",
                        size: "large"
                    }), l && j)
                }
            }]),
            t
        } (m.Component);
        I.propTypes = {
            id: p.
        default.oneOfType([p.
        default.string, p.
        default.number]),
            type: p.
        default.oneOf(["answer", "article", "pin"]),
            relations: p.
        default.object,
            onUpdateFav: p.
        default.func.isRequired,
            onFavlistAdd: p.
        default.func.isRequired,
            onFetchRelations: p.
        default.func,
            onClose: p.
        default.func.isRequired,
            shown: p.
        default.bool,
            zaEnabled: p.
        default.bool,
            authRequired: p.
        default.func,
            isUserActive: p.
        default.number
        },
        I.defaultProps = {
            defaultStatus: "list",
            relations: {},
            authRequired: function(e) {
                return e
            }
        };
        var M = function() {
            var e = this;
            this.state = {
                status: this.props.defaultStatus
            },
            this.handleCloseModal = function() {
                e.props.onClose && e.props.onClose(),
                e.setState({
                    status: "list"
                })
            },
            this.handleUpdate = function(t, n) {
                var a = e.props,
                r = a.onUpdateFav,
                o = a.id,
                i = a.type,
                l = a.items,
                s = a.authRequired,
                c = a.isUserActive,
                u = l.find(function(e) {
                    return e.id === t
                }) || {},
                p = [t, o, i, u.isPublic];
                return ! n && (0, S.
            default)(u.isPublic, c, s) ? s(r).apply(void 0, p) : r.apply(void 0, p)
            },
            this.handleAdd = function() {
                return e.setState({
                    status: "add"
                })
            },
            this.handleBack = function() {
                return e.setState({
                    status: "list"
                })
            }
        };
        t.
    default = I
    },
    1671 : function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function r(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        s = n(1),
        c = a(s),
        u = n(0),
        p = a(u),
        m = n(3),
        d = a(m),
        f = n(50),
        h = a(f),
        b = n(789),
        y = a(b),
        v = n(29),
        E = n(1289),
        C = a(E),
        g = function(e) {
            function t() {
                r(this, t);
                var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.state = {
                    isPublic: !0,
                    title: "",
                    description: ""
                },
                e.handleSubmit = e.handleSubmit.bind(e),
                e
            }
            return i(t, e),
            l(t, [{
                key: "handleSubmit",
                value: function(e) {
                    e.preventDefault();
                    var t = this.state,
                    n = t.isPublic,
                    a = t.title,
                    r = t.description;
                    if (a) {
                        var o = this.props,
                        i = o.onSubmit,
                        l = o.onBack,
                        s = o.authRequired,
                        c = o.isActive,
                        u = {
                            title: a,
                            description: r,
                            isPublic: n
                        }; (0, C.
                    default)(n, c, s) ? s(i)(u) : (i(u), l())
                    }
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this,
                    t = this.state,
                    n = t.title,
                    a = t.description,
                    r = t.isPublic,
                    o = this.props.onBack,
                    i = !n;
                    return p.
                default.createElement("form", {
                        className: "Favlists-content",
                        onSubmit: this.handleSubmit
                    },
                    p.
                default.createElement("div", {
                        className: "Favlists-addItems"
                    },
                    p.
                default.createElement("div", {
                        className: "Favlists-addItem"
                    },
                    p.
                default.createElement(h.
                default, {
                        className: "Favlists-titleInput",
                        placeholder: "收藏标题",
                        onChange: function(t) {
                            var n = t.target.value;
                            e.setState({
                                title: n
                            })
                        }
                    }), p.
                default.createElement("div", {
                        className: "Favlists-inputTips"
                    },
                    p.
                default.createElement(y.
                default, {
                        name: "收藏标题",
                        current: n ? n.length: 0,
                        max: 20
                    }))), p.
                default.createElement("div", {
                        className: "Favlists-addItem"
                    },
                    p.
                default.createElement(h.
                default, {
                        multiline: !0,
                        className: "Favlists-descritionInput",
                        placeholder: "收藏描述（可选）",
                        onChange: function(t) {
                            var n = t.target.value;
                            e.setState({
                                description: n
                            })
                        },
                        rows: 5
                    }), p.
                default.createElement("div", {
                        className: "Favlists-inputTips"
                    },
                    p.
                default.createElement(y.
                default, {
                        name: "收藏描述",
                        current: a ? a.length: 0,
                        max: 60
                    }))), p.
                default.createElement("div", {
                        className: "Favlists-addItem"
                    },
                    p.
                default.createElement("label", {
                        className: "Favlists-privacyOption"
                    },
                    p.
                default.createElement("input", {
                        className: "Favlists-privacyOptionRadio",
                        name: "isPublic",
                        type: "radio",
                        value: "true",
                        checked: r,
                        onChange: function() {
                            return e.setState({
                                isPublic: !0
                            })
                        }
                    }), p.
                default.createElement("span", null, "公开"), p.
                default.createElement("span", {
                        className: "Favlists-privacyOptionTips"
                    },
                    "有其他人关注此收藏夹时不可设置为私密")), p.
                default.createElement("label", {
                        className: "Favlists-privacyOption"
                    },
                    p.
                default.createElement("input", {
                        className: "Favlists-privacyOptionRadio",
                        name: "isPublic",
                        type: "radio",
                        value: "false",
                        checked: !r,
                        onChange: function() {
                            return e.setState({
                                isPublic: !1
                            })
                        }
                    }), p.
                default.createElement("span", null, "私密"), p.
                default.createElement("span", {
                        className: "Favlists-privacyOptionTips"
                    },
                    "只有你自己可以查看这个收藏夹")))), p.
                default.createElement(v.ModalButtonGroup, {
                        direction: "horizontal",
                        className: ""
                    },
                    o && p.
                default.createElement(d.
                default, {
                        onClick: o
                    },
                    "返回"), p.
                default.createElement(d.
                default, {
                        color: "blue",
                        preset: "primary",
                        type: "submit",
                        disabled: i
                    },
                    "确认创建")))
                }
            }]),
            t
        } (u.Component);
        g.propTypes = {
            onSubmit: c.
        default.func.isRequired,
            onBack: c.
        default.func,
            authRequired: c.
        default.func
        },
        t.
    default = g
    },
    1672 : function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function r(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        },
        s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        c = n(1),
        u = a(c),
        p = n(0),
        m = a(p),
        d = n(3),
        f = a(d),
        h = n(141),
        b = a(h),
        y = n(745),
        v = a(y),
        E = n(6),
        C = a(E),
        g = n(1673),
        O = a(g),
        w = function(e) {
            function t() {
                var e, n, a, i;
                r(this, t);
                for (var l = arguments.length,
                s = Array(l), c = 0; c < l; c++) s[c] = arguments[c];
                return n = a = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))),
                a.items = {},
                a.handleFavlistItemChange = function(e, t) {
                    C.
                default.trackEvent(a.items[e], {
                        action: t ? "UnCollect": "Collect",
                        element: "Button",
                        is_intent: !1
                    }),
                    a.props.onUpdate(e, t)
                },
                i = n,
                o(a, i)
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    var e = this,
                    t = this.props,
                    n = t.relations,
                    a = t.items,
                    r = t.isFetching,
                    o = t.isDrained,
                    i = t.onAdd,
                    s = t.onLoad;
                    return m.
                default.createElement("div", {
                        className: "Favlists-content"
                    },
                    m.
                default.createElement(b.
                default, {
                        isLocal: !0,
                        isLoading: r,
                        isDrained: o,
                        onLoad: s,
                        placeholder: m.
                    default.createElement(v.
                    default, {
                            title: !0
                        }),
                        getContainer: function(e) {
                            return e
                        },
                        className: "Favlists-items"
                    },
                    a.map(function(t) {
                        return m.
                    default.createElement(O.
                    default, l({
                            key: t.id,
                            onChange: e.handleFavlistItemChange,
                            checked: n[t.id]
                        },
                        t, {
                            ref: function(n) {
                                e.items[t.id] = n
                            }
                        }))
                    })), !a.length && r || m.
                default.createElement("div", {
                        className: "Favlists-actions"
                    },
                    m.
                default.createElement(f.
                default, {
                        className: "Favlists-addButton",
                        onClick: i,
                        preset: "primary",
                        color: "blue"
                    },
                    "创建收藏夹")))
                }
            }]),
            t
        } (p.Component);
        w.propTypes = {
            isFecthing: u.
        default.bool,
            relations: u.
        default.object,
            onUpdate: u.
        default.func.isRequired,
            onAdd: u.
        default.func.isRequired,
            onLoad: u.
        default.func.isRequired,
            items: u.
        default.array.isRequired,
            isDrained: u.
        default.bool,
            authRequired: u.
        default.func
        },
        t.
    default = w
    },
    1673 : function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function r(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        },
        s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        c = n(0),
        u = a(c),
        p = n(11),
        m = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        } (p),
        d = n(3),
        f = a(d),
        h = n(6),
        b = a(h),
        y = function(e) {
            function t() {
                var e, n, a, i;
                r(this, t);
                for (var l = arguments.length,
                s = Array(l), c = 0; c < l; c++) s[c] = arguments[c];
                return n = a = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))),
                a.handleChange = function() {
                    var e = a.props; (0, e.onChange)(e.id, a.props.checked)
                },
                i = n,
                o(a, i)
            }
            return i(t, e),
            s(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props,
                    t = e.zaEnabled,
                    n = e.id;
                    t && b.
                default.setModule(this, {
                        module: "CollectionItem"
                    },
                    {
                        card: {
                            card_type: "Content",
                            content: {
                                type: "Collection",
                                token: String(n)
                            }
                        }
                    })
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.answerCount,
                    n = e.title,
                    a = e.isPublic,
                    r = e.checked,
                    o = void 0 !== r && r,
                    i = o ? {
                        preset: "primary",
                        color: "grey",
                        children: "已收藏"
                    }: {
                        color: "blue",
                        children: "收藏"
                    };
                    return u.
                default.createElement("div", {
                        className: "Favlists-item"
                    },
                    u.
                default.createElement("div", {
                        className: "Favlists-itemInner"
                    },
                    u.
                default.createElement("div", {
                        className: "Favlists-itemName"
                    },
                    u.
                default.createElement("span", {
                        className: "Favlists-itemNameText"
                    },
                    n), !1 === a && u.
                default.createElement("span", {
                        className: "Favlists-itemIcon"
                    },
                    u.
                default.createElement(m.Lock, {
                        size: 16
                    }))), u.
                default.createElement("div", {
                        className: "Favlists-itemContent"
                    },
                    t, " 条内容")), u.
                default.createElement(f.
                default, l({},
                    i, {
                        className: "Favlists-updateButton",
                        onClick: this.handleChange
                    })))
                }
            }]),
            t
        } (c.Component);
        t.
    default = y
    },
    1674 : function(e, t) {
        e.exports = {
            attributes: {
                width: "72px",
                height: "58px",
                viewBox: "0 0 72 58"
            },
            content: '<defs>         <path d="M0.00434937116,11.7604183 C0.0014585125,11.8367351 0,11.9134174 0,11.9904392 L0,52.0095608 C0,55.3137533 2.68603825,58 5.99943435,58 L66.0005656,58 C69.3089213,58 72,55.317989 72,52.0095608 L72,11.9904392 C72,8.68624675 69.3139617,6 66.0005656,6 L31.1520961,6 L30.2346555,3.7077864 C29.4154984,1.66113281 26.9585394,0 24.7478675,0 L6.18638069,0 C2.86742525,0 0.139552484,2.68348852 0.0902454792,5.99373937 L0.00434937116,11.7604183 Z" id="path-1"></path>         <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="72" height="58" fill="white">             <use xlink:href="#path-1"></use>         </mask>     </defs>     <g id="空状态" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">         <g id="collection" transform="translate(-39.000000, -30.000000)" stroke="#E7EAF1">             <g transform="translate(39.000000, 30.000000)" id="Group-7">                 <g>                     <use id="Combined-Shape" mask="url(#mask-2)" stroke-width="6" xlink:href="#path-1"></use>                     <path d="M36.4126782,38.4800003 L30.2669271,41.2927815 C29.7656337,41.522213 29.4096881,41.2718295 29.4738593,40.716584 L30.2498317,34.0024302 L25.6755762,29.0266708 C25.3024658,28.6208107 25.4306014,28.2049135 25.9785012,28.0943637 L32.6038296,26.7575697 L35.9225353,20.8696 C36.1932338,20.3893332 36.6283715,20.3826781 36.9028211,20.8696 L40.2215268,26.7575697 L46.8468552,28.0943637 C47.3872665,28.2034026 47.5280608,28.6151866 47.1497802,29.0266708 L42.5755247,34.0024302 L43.3514971,40.716584 C43.4147912,41.2642406 43.0666691,41.5253922 42.5584293,41.2927815 L36.4126782,38.4800003 Z" id="Star" stroke-width="3"></path>                 </g>             </g>         </g>     </g>'
        }
    },
    1675 : function(e, t) {},
    1676 : function(e, t) {},
    1677 : function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function r(e, t) {
            var n = {};
            for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
            return n
        }
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function i(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function l(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function s(e, t) {
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
        var c = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        },
        u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        p = n(1),
        m = a(p),
        d = n(0),
        f = a(d),
        h = n(6),
        b = a(h),
        y = n(31),
        v = n(48),
        E = a(v),
        C = n(1678),
        g = a(C),
        O = n(1290),
        w = n(1291),
        _ = n(53),
        k = "请选择举报理由",
        P = "举报",
        N = function(e) {
            return e && e.isBlocking
        },
        T = function(e) {
            function t() {
                i(this, t);
                var e = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.handleSubmit = function(t) {
                    var n = t.reason,
                    a = t.customReason,
                    r = e.props,
                    o = r.onClose,
                    i = r.urlToken,
                    l = r.type;
                    e.props.doReport(i, l, n, a),
                    o()
                },
                e.handleContentChange = function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k;
                    e.setState({
                        title: t,
                        subtitle: n
                    })
                },
                e.handleBlockUser = function(t) {
                    e.props.updateUserBlocking && e.props.updateUserBlocking(t, !0)
                },
                e.handleClose = function() {
                    e.props.zaEnabled && b.
                default.trackEvent(e.container, {
                        action: "Ok"
                    },
                    {
                        button: {
                            text: "知道了"
                        }
                    }),
                    e.props.onClose()
                },
                e.state = {
                    title: P,
                    subtitle: k
                },
                e
            }
            return s(t, e),
            u(t, [{
                key: "componentWillMount",
                value: function() {
                    var e = this.props,
                    t = e.talker,
                    n = e.talkerId;
                    n && (N(t) ? t.isBlocking || this.setState({
                        blockVisabled: !0
                    }) : this.props.loadProfile(n))
                }
            },
            {
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this.props.talker,
                    n = e.talker;
                    N(t) || !N(n) || n.isBlocking || this.setState({
                        blockVisabled: !0
                    })
                }
            },
            {
                key: "componentDidUpdate",
                value: function(e) {
                    if (!e.shown && this.props.shown) {
                        var t = this.props,
                        n = t.type,
                        a = t.id;
                        b.
                    default.setModule(this.container, {
                            module: "ReportDialog"
                        },
                        {
                            card: {
                                card_type: "Content",
                                content: o({
                                    type: (0, w.convertType)(n)
                                },
                                "comment" === n ? "id": "token", String(a))
                            }
                        })
                    }
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this,
                    t = (0, y.omit)(this.props, "onClose"),
                    n = t.shown,
                    a = r(t, ["shown"]),
                    o = this.state,
                    i = o.title,
                    l = o.subtitle,
                    s = o.blockVisabled,
                    u = (0, O.selectPairs)(a, Object.keys(E.
                default.propTypes)),
                    p = u.selectedProps,
                    m = u.dropedProps;
                    return f.
                default.createElement(E.
                default, c({
                        title: i,
                        subtitle: l,
                        onClose: this.handleClose,
                        className: "ReportModal"
                    },
                    p), n && f.
                default.createElement(g.
                default, c({
                        ref: function(t) {
                            e.container = t
                        },
                        onSubmit: this.handleSubmit,
                        blockVisabled: s,
                        onClose: this.handleClose,
                        onContentChange: this.handleContentChange
                    },
                    m)))
                }
            }]),
            t
        } (d.Component);
        T.propTypes = {
            onClose: m.
        default.func.isRequired,
            type: m.
        default.oneOf(_.ENTITY_TYPES).isRequired,
            urlToken: m.
        default.oneOfType([m.
        default.string, m.
        default.number]).isRequired,
            shown: m.
        default.bool.isRequired,
            talkerId: m.
        default.string,
            isColumnArticle: m.
        default.bool,
            isTipjarEnabled: m.
        default.bool,
            loadProfile: m.
        default.func,
            updateUserBlocking: m.
        default.func,
            doReport: m.
        default.func.isRequired,
            zaEnabled: m.
        default.bool
        },
        T.defaultTypes = {
            zaEnabled: !1
        },
        t.
    default = T
    },
    1678 : function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function o(e, t) {
            var n = {};
            for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
            return n
        }
        function i(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function l(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function s(e, t) {
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
        var c = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        },
        u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        p = n(1),
        m = a(p),
        d = n(0),
        f = a(d),
        h = n(1679),
        b = n(1680),
        y = a(b),
        v = function(e) {
            function t() {
                var e, n, a, r;
                i(this, t);
                for (var o = arguments.length,
                s = Array(o), c = 0; c < o; c++) s[c] = arguments[c];
                return n = a = l(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))),
                a.filterNodes = function(e, t, n) {
                    var a = e.filter(function(e) {
                        return - 1 != ["infringement", "repost", "oneself", "enterprise", "fake"].indexOf(e.reason) || 0 === e.id || ("question" !== t || -1 == ["closed", "suggested", "evaluated", "locked"].indexOf(n) || 0 === e.id) && ("member" !== t || -1 == ["ban", "hang"].indexOf(n) || "profile" === e.reason)
                    });
                    return 1 === a.length && 0 === a[0].id && (a = []),
                    a
                },
                r = n,
                l(a, r)
            }
            return s(t, e),
            u(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.type,
                    n = e.status,
                    a = o(e, ["type", "status"]),
                    i = void 0;
                    return i = "message" === t ? h.NODES_FOR_MESSAGE: "member" === t ? h.NODES_FOR_MEMBER: "favlist" === t ? h.NODES_FOR_FAVLIST: h.NODES.filter(function(e) {
                        return ! e.types || e.types.includes(t)
                    }),
                    i = this.filterNodes(i, t, n),
                    f.
                default.createElement(y.
                default, c({
                        nodes: i.reduce(function(e, t) {
                            return c({},
                            e, r({},
                            t.id, t))
                        },
                        {})
                    },
                    a, {
                        type: t
                    }))
                }
            }]),
            t
        } (d.Component);
        v.propTypes = {
            type: m.
        default.string.isRequired
        },
        t.
    default = v
    },
    1679 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.NODES = [{
            id: 0,
            text: "举报",
            childIds: [1, 2, 3, 4, 5, 21, 7]
        },
        {
            id: 1,
            text: "低质问题",
            types: ["question"],
            childIds: [23, 33, 34, 15, 35, 27, 22, 28]
        },
        {
            id: 2,
            text: "垃圾广告信息",
            reason: "spam",
            copywriter: {
                title: "举报说明",
                placeholder: "举报详细说明（选填）",
                isRequired: !1
            },
            disabled: !0
        },
        {
            id: 3,
            text: "不友善行为",
            types: ["answer", "comment", "article", "pin", "book_review", "favlist"],
            childIds: [40, 41]
        },
        {
            id: 4,
            text: "有害信息",
            childIds: [19, 30, 39, 26, 18]
        },
        {
            id: 5,
            text: "涉嫌侵权",
            childIds: [20, 29, 12],
            types: ["question", "answer", "comment", "article", "pin", "book_review"],
            reason: "infringement",
            disabled: !0
        },
        {
            id: 6,
            types: []
        },
        {
            id: 7,
            text: "其他",
            reason: "old",
            copywriter: {
                title: "举报说明",
                placeholder: "举报详细说明（必填）"
            },
            disabled: !0
        },
        {
            id: 8,
            reason: "direction"
        },
        {
            id: 9,
            reason: "tipjar"
        },
        {
            id: 10,
            reason: "mention"
        },
        {
            id: 11,
            reason: "privacy",
            disabled: !0
        },
        {
            id: 12,
            reason: "enterprise",
            disabled: !0
        },
        {
            id: 13,
            reason: "copy",
            copywriter: {
                title: "原文链接或出处",
                placeholder: "填写原文链接或描述内容出处（必填）"
            },
            disabled: !0
        },
        {
            id: 14,
            reason: "defamation",
            disabled: !0
        },
        {
            id: 15,
            reason: "abuse"
        },
        {
            id: 16,
            reason: "intention"
        },
        {
            id: 17,
            reason: "spam"
        },
        {
            id: 18,
            reason: "illegality",
            copywriter: {
                title: "举报说明",
                placeholder: "举报详细说明（必填）"
            },
            disabled: !0
        },
        {
            id: 19,
            reason: "politics"
        },
        {
            id: 20,
            reason: "repost",
            copywriter: {
                title: "举报说明",
                placeholder: "原文链接或补充说明（必填）"
            },
            types: ["answer", "article", "pin", "book_review"],
            disabled: !0
        },
        {
            id: 21,
            reason: "temptation",
            copywriter: {
                title: "举报说明",
                placeholder: "举报详细说明（必填）"
            },
            disabled: !0,
            types: ["answer", "comment", "article"]
        },
        {
            id: 22,
            reason: "personal"
        },
        {
            id: 23,
            reason: "ambiguity"
        },
        {
            id: 24,
            reason: "worthless"
        },
        {
            id: 25,
            reason: "rumour"
        },
        {
            id: 26,
            reason: "suicide",
            types: ["question", "answer", "article", "pin", "book_review", "comment"]
        },
        {
            id: 27,
            reason: "medicine"
        },
        {
            id: 28,
            reason: "superstition"
        },
        {
            id: 29,
            reason: "oneself",
            disabled: !0
        },
        {
            id: 30,
            reason: "porn"
        },
        {
            id: 31,
            reason: "pirate"
        },
        {
            id: 32,
            reason: "invalid"
        },
        {
            id: 33,
            reason: "subjective"
        },
        {
            id: 34,
            reason: "rumour"
        },
        {
            id: 35,
            reason: "provoke"
        },
        {
            id: 36,
            reason: "edit"
        },
        {
            id: 37,
            reason: "harassment"
        },
        {
            id: 38,
            reason: "hatred"
        },
        {
            id: 39,
            reason: "untruth",
            types: ["answer", "comment", "article", "pin", "book_review"],
            copywriter: {
                title: "举报说明",
                placeholder: "举报详细说明（必填）"
            },
            disabled: !0
        },
        {
            id: 40,
            reason: "abuse",
            text: "骚扰、辱骂、歧视等"
        },
        {
            id: 41,
            reason: "unfriendly",
            copywriter: {
                title: "举报说明",
                placeholder: "举报详细说明（必填）"
            },
            disabled: !0
        }],
        t.NODES_FOR_FAVLIST = [{
            id: 0,
            text: "举报",
            childIds: [1, 2, 3, 4]
        },
        {
            id: 1,
            text: "垃圾广告信息",
            reason: "spam"
        },
        {
            id: 2,
            text: "不友善行为",
            reason: "unkind"
        },
        {
            id: 3,
            text: "有害信息",
            reason: "imitation"
        },
        {
            id: 4,
            text: "其他",
            reason: "old",
            copywriter: {
                title: "举报说明",
                placeholder: "举报详细说明（必填）"
            },
            disabled: !0
        }],
        t.NODES_FOR_MESSAGE = [{
            id: 0,
            text: "举报",
            childIds: [1, 2, 3]
        },
        {
            id: 1,
            reason: "abuse"
        },
        {
            id: 2,
            reason: "harassment"
        },
        {
            id: 3,
            reason: "spam"
        }],
        t.NODES_FOR_MEMBER = [{
            id: 0,
            text: "举报",
            childIds: [1, 4, 6, 7]
        },
        {
            id: 1,
            text: "冒充我或他人",
            childIds: [8, 9],
            reason: "fake",
            disabled: !0
        },
        {
            id: 2,
            reason: "abuse",
            text: "发过辱骂我或他人的内容"
        },
        {
            id: 3,
            reason: "illegality",
            text: "发过违反法律法规的内容"
        },
        {
            id: 4,
            reason: "spam",
            text: "垃圾广告帐号"
        },
        {
            id: 5,
            reason: "politics",
            text: "发过政治敏感内容"
        },
        {
            id: 6,
            reason: "profile",
            copywriter: {
                title: "举报说明",
                placeholder: "举报详细说明（必填）"
            },
            disabled: !0
        },
        {
            id: 7,
            reason: "old",
            text: "其他",
            copywriter: {
                title: "举报说明",
                placeholder: "举报详细说明（必填）"
            },
            disabled: !0
        },
        {
            id: 8,
            text: "冒充我",
            reason: "oneself",
            disabled: !0
        },
        {
            id: 9,
            reason: "impersonate",
            copywriter: {
                title: "举报说明",
                placeholder: "举报详细说明（必填）"
            },
            text: "冒充他人",
            disabled: !0
        }]
    },
    1680 : function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function r(e, t) {
            var n = {};
            for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
            return n
        }
        function o(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function l(e, t) {
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
        var s = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        },
        c = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        u = n(1),
        p = a(u),
        m = n(0),
        d = a(m),
        f = n(2),
        h = a(f),
        b = n(3),
        y = a(b),
        v = n(29),
        E = n(6),
        C = a(E),
        g = n(33),
        O = a(g),
        w = n(298),
        _ = n(1681),
        k = a(_),
        P = n(1682),
        N = a(P),
        T = n(1683),
        S = a(T),
        j = n(1684);
        n(1685);
        var R = function(e) {
            function t(e) {
                o(this, t);
                var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.checkCustomReasonContent = function() {
                    var e = n.state,
                    t = e.activeId,
                    a = e.customReason,
                    r = n.props.nodes,
                    o = r[t].copywriter;
                    if ((14 === t || 24 === t || Boolean(o)) && a) {
                        var i = (0, j.isCustomReasonLegal)(a),
                        l = i.isLegal,
                        s = i.errorReason;
                        if (!l) return n.setState({
                            errorText: s
                        }),
                        !1
                    }
                    return ! 0
                },
                n.state = {
                    isBlock: !1,
                    blockChecked: !1,
                    activeId: 0,
                    parentId: null,
                    selectedId: null,
                    hasError: !1,
                    errorText: "",
                    isMobile: !1
                },
                n.menuItems = {},
                n.handleItemSelect = n.handleItemSelect.bind(n),
                n.handleSubMenuEnter = n.handleSubMenuEnter.bind(n),
                n.handleDetailInput = n.handleDetailInput.bind(n),
                n.handleBackClick = n.handleBackClick.bind(n),
                n.handleSubmit = n.handleSubmit.bind(n),
                n.handleSubmitAppeal = n.handleSubmitAppeal.bind(n),
                n
            }
            return l(t, e),
            c(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = (0, O.
                default)(navigator.userAgent);
                    this.setState({
                        isMobile:
                        e.Mobile
                    })
                }
            },
            {
                key: "componentWillUpdate",
                value: function(e, t) {
                    var n = this.state.activeId,
                    a = t.activeId,
                    r = this.props,
                    o = r.nodes,
                    i = r.onContentChange;
                    if (a !== n) {
                        var l = o[a],
                        s = l.reason,
                        c = l.text,
                        u = l.childIds,
                        p = l.copywriter;
                        i(c || w.ReportReasons[s], p && p.title || (u ? void 0 : ""))
                    }
                }
            },
            {
                key: "handleItemSelect",
                value: function(e) {
                    var t = this.selectedId === e ? null: e;
                    this.setState({
                        selectedId: t
                    }),
                    t && this.props.zaEnabled && C.
                default.trackEvent(this.menuItems[t], {
                        action: "Select",
                        element: "Menu"
                    },
                    {
                        report: {
                            id: e
                        }
                    })
                }
            },
            {
                key: "handleSubMenuEnter",
                value: function(e) {
                    this.setState(function(t) {
                        var n = t.activeId;
                        return {
                            activeId: e,
                            parentId: n,
                            selectedId: null
                        }
                    }),
                    this.props.zaEnabled && C.
                default.trackEvent(this.menuItems[e], {
                        action: "Expand",
                        element: "Menu"
                    },
                    {
                        report: {
                            id: e
                        }
                    })
                }
            },
            {
                key: "isSubmitEnabled",
                value: function() {
                    var e = this.state,
                    t = e.selectedId,
                    n = e.activeId,
                    a = e.customReason,
                    r = this.props.nodes;
                    return t || (Boolean(r[n].copywriter) || 14 === n || 24 === n) && (!1 === r[n].copywriter.isRequired || a)
                }
            },
            {
                key: "handleDetailInput",
                value: function(e) {
                    this.setState({
                        customReason: e,
                        errorText: ""
                    })
                }
            },
            {
                key: "handleBackClick",
                value: function() {
                    var e = this.props.nodes,
                    t = this.state.parentId,
                    n = Object.keys(e).find(function(n) {
                        var a = e[n].childIds;
                        return a && a.includes(t)
                    });
                    this.setState({
                        activeId: t,
                        parentId: n && Number(n),
                        selectedId: null,
                        hasWarning: !1,
                        customReason: "",
                        errorText: ""
                    }),
                    this.props.zaEnabled && C.
                default.trackEvent(this, {
                        action: "Back",
                        element: "Button"
                    },
                    {
                        report: {
                            id: this.state.activeId
                        }
                    })
                }
            },
            {
                key: "handleSubmitAppeal",
                value: function() {
                    var e = "",
                    t = this.state.activeId,
                    n = this.props,
                    a = n.type,
                    r = n.urlToken,
                    o = n.nodes;
                    "enterprise" === o[t].reason || 13 === t ? e = "org": "oneself" !== o[t].reason && 37 !== t || (e = "people"),
                    window.open("//www.zhihu.com/account/complaints/" + e + "/" + a + "/" + r)
                }
            },
            {
                key: "handleSubmit",
                value: function() {
                    var e = this.state,
                    t = e.selectedId,
                    n = e.customReason,
                    a = e.activeId,
                    r = e.blockChecked;
                    if (this.isSubmitEnabled() && this.checkCustomReasonContent()) {
                        var o = this.props,
                        i = o.nodes,
                        l = o.onBlockUser,
                        s = o.talkerToken,
                        c = o.onSubmit,
                        u = i[t || a],
                        p = u.reason,
                        m = u.id;
                        c({
                            reason: p,
                            customReason: n
                        }),
                        r && l(s),
                        this.props.zaEnabled && C.
                    default.trackEvent(this, {
                            action: "Report",
                            element: "Button"
                        },
                        {
                            report: {
                                id: m
                            }
                        })
                    }
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this,
                    t = this.props,
                    n = t.nodes,
                    a = r(t, ["nodes"]),
                    o = this.state,
                    i = o.activeId,
                    l = o.parentId,
                    c = o.selectedId,
                    u = o.blockVisibled,
                    p = o.blockChecked,
                    m = o.errorText,
                    f = o.isMobile,
                    b = n[i],
                    E = b.reason,
                    C = b.childIds,
                    g = b.copywriter,
                    O = Boolean(C),
                    w = 14 === i || 24 === i || Boolean(g),
                    _ = O && d.
                default.createElement("div", {
                        className: "ReportMenu-inner ReportMenu-options"
                    },
                    " ", C.map(function(e) {
                        return n[e]
                    }).filter(function(e) {
                        return e && (!e.shouldShow || e.shouldShow(a))
                    }).map(function(t) {
                        return d.
                    default.createElement(k.
                    default, s({
                            ref: function(n) {
                                e.menuItems[t.id] = n
                            },
                            key: t.id
                        },
                        t, {
                            isSelected: c === t.id,
                            onSubMenuEnter: e.handleSubMenuEnter,
                            onItemSelect: e.handleItemSelect
                        }))
                    }), " ") || w && d.
                default.createElement(S.
                default, {
                        onDetailInput: this.handleDetailInput,
                        copywriter: g,
                        errorText: m,
                        checkCustomReasonContent: this.checkCustomReasonContent
                    }) || d.
                default.createElement(N.
                default, {
                        isMobile: f,
                        reason: E
                    }),
                    P = O && u && d.
                default.createElement("label", {
                        className: "ReportMenu-check",
                        htmlFor: "block"
                    },
                    d.
                default.createElement("input", {
                        type: "checkbox",
                        name: "block",
                        checked: p,
                        onChange: function(t) {
                            return e.setState({
                                blockChecked: t.target.checked
                            })
                        }
                    }), "同时将此人屏蔽", " ");
                    return d.
                default.createElement("div", {
                        className: (0, h.
                    default)("ReportMenu", {
                            "ReportMenu-mobile": f
                        })
                    },
                    " ", _, " ", d.
                default.createElement(v.ModalButtonGroup, {
                        direction: "horizontal"
                    },
                    " ", P, " ", "number" == typeof l && d.
                default.createElement(y.
                default, {
                        onClick: this.handleBackClick
                    },
                    " 返回 "), " ", O || w ? d.
                default.createElement(y.
                default, {
                        className: "ReportMenu-button",
                        disabled: !this.isSubmitEnabled(),
                        onClick: this.handleSubmit,
                        color: "blue",
                        preset: "primary"
                    },
                    "举报", " ") : !f && d.
                default.createElement(y.
                default, {
                        onClick: this.handleSubmitAppeal,
                        preset: "primary",
                        color: "blue"
                    },
                    "进入诉求提交页面", " "), " "), " ")
                }
            }]),
            t
        } (m.Component);
        R.propTypes = {
            nodes: p.
        default.object.isRequired,
            onContentChange: p.
        default.func.isRequired,
            onSubmit: p.
        default.func.isRequired,
            talkerToken: p.
        default.string,
            isColumnArticle: p.
        default.bool,
            isTipjarEnabled: p.
        default.bool,
            errorText: p.
        default.string
        },
        t.
    default = R
    },
    1681 : function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function r(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        s = n(1),
        c = a(s),
        u = n(0),
        p = a(u),
        m = n(11),
        d = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e,
            t
        } (m),
        f = n(298),
        h = function(e) {
            function t() {
                r(this, t);
                var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.handleClick = e.handleClick.bind(e),
                e
            }
            return i(t, e),
            l(t, [{
                key: "handleClick",
                value: function() {
                    var e = this.props,
                    t = e.id,
                    n = e.reason,
                    a = e.disabled,
                    r = e.onSubMenuEnter,
                    o = e.onItemSelect;
                    n && !a ? o(t) : r(t)
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.reason,
                    n = e.text,
                    a = e.disabled,
                    r = e.isSelected,
                    o = e.id,
                    i = n || f.ReportReasons[t];
                    return Boolean(t && !a) ? p.
                default.createElement("label", {
                        className: "ReportMenu-item",
                        htmlFor: t
                    },
                    p.
                default.createElement("div", {
                        className: "ReportMenu-itemValue needsclick"
                    },
                    i), p.
                default.createElement("input", {
                        className: "ReportMenu-itemCheck",
                        type: "radio",
                        name: "report",
                        value: o,
                        id: t,
                        checked: r,
                        onChange: this.handleClick
                    }), p.
                default.createElement(d.CheckCircle, {
                        size: 18,
                        className: "ReportMenu-itemCheckIcon",
                        name: "checkRound"
                    })) : p.
                default.createElement("button", {
                        className: "ReportMenu-item",
                        onClick: this.handleClick
                    },
                    p.
                default.createElement("span", {
                        className: "ReportMenu-itemValue"
                    },
                    i), p.
                default.createElement(d.ArrowRight, {
                        size: 18
                    }))
                }
            }]),
            t
        } (u.Component);
        h.propTypes = {
            id: c.
        default.number.isRequired,
            reason: c.
        default.string,
            text: c.
        default.string,
            disabled: c.
        default.bool,
            isSelected: c.
        default.bool,
            onSubMenuEnter: c.
        default.func.isRequired,
            onItemSelect: c.
        default.func.isRequired
        },
        t.
    default = h
    },
    1682 : function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function r(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        s = n(1),
        c = a(s),
        u = n(0),
        p = a(u),
        m = function(e) {
            function t() {
                return r(this, t),
                o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return i(t, e),
            l(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.reason,
                    n = e.isMobile;
                    switch (t) {
                    case "oneself":
                        return p.
                    default.createElement("div", {
                            className: "ReportMenu-inner"
                        },
                        p.
                    default.createElement("div", {
                            className: "ReportMenu-paragraph"
                        },
                        "当您发现知乎上有关于您个人的侵权内容时，您可通过此渠道向知乎提交举报诉求。"), p.
                    default.createElement("div", {
                            className: "ReportMenu-paragraph"
                        },
                        "根据", p.
                    default.createElement("a", {
                            className: "ReportMenu-link",
                            href: "https://www.zhihu.com/terms#sec-report",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        "知乎侵权举报规范"), "，您需要向我们提交您的个人信息，其中包括身份证明。如您确认已准备齐全，", n ? p.
                    default.createElement("span", null, p.
                    default.createElement("strong", null, "请到桌面版网页进行诉求提交。")) : p.
                    default.createElement("span", null, "可点击下方按钮进入诉求提交页。")));
                    case "privacy":
                        return p.
                    default.createElement("div", {
                            className: "ReportMenu-inner"
                        },
                        p.
                    default.createElement("div", {
                            className: "ReportMenu-paragraph"
                        },
                        "您好，当您发现知乎上有泄漏您隐私的内容时，您可向知乎进行举报。 请您把以下内容通过邮件发送到 ", p.
                    default.createElement("a", {
                            className: "ReportMenu-link",
                            href: "mailto:i@zhihu.com"
                        },
                        "i@zhihu.com"), " 邮箱，我们会尽快处理。"), p.
                    default.createElement("ul", {
                            className: "ReportMenu-paragraph"
                        },
                        p.
                    default.createElement("li", null, "1. 您认为哪些内容泄露了您的隐私？（请在邮件中列出您举报的内容、链接地址，并给出简短的说明）"), p.
                    default.createElement("li", null, "2. 您是谁？（身份证明材料，可以是身份证或护照等证件）")), p.
                    default.createElement("div", {
                            className: "ReportMenu-paragraph ReportMenu-paragraph--light"
                        },
                        "邮件格式请参考", p.
                    default.createElement("a", {
                            className: "ReportMenu-link--light",
                            href: "https://www.zhihu.com/terms#sec-report",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        "这里"), "；"));
                    case "enterprise":
                        return p.
                    default.createElement("div", {
                            className: "ReportMenu-inner"
                        },
                        p.
                    default.createElement("div", {
                            className: "ReportMenu-paragraph"
                        },
                        "当您发现知乎上有关于您企业的侵权等内容时，知乎建议您先尝试与作者沟通解决问题。 如果您无法联系到作者，您也可通过此渠道向知乎提出诉求。"), p.
                    default.createElement("div", {
                            className: "ReportMenu-paragraph"
                        },
                        "根据", p.
                    default.createElement("a", {
                            className: "ReportMenu-link",
                            href: "https://www.zhihu.com/terms#sec-report",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        "知乎侵权举报规范"), "，您需要向我们提交您的个人信息，其中包括身份证明。如您确认已准备齐全，", n ? p.
                    default.createElement("span", null, p.
                    default.createElement("strong", null, "请到桌面版网页进行诉求提交。")) : p.
                    default.createElement("span", null, "可点击下方按钮进入诉求提交页。")));
                    case "defamation":
                        return p.
                    default.createElement("div", {
                            className: "ReportMenu-inner"
                        },
                        p.
                    default.createElement("div", {
                            className: "ReportMenu-paragraph"
                        },
                        "您好，当您发现知乎上有诽谤您的内容时，您可以向知乎进行举报。 请您把以下内容通过邮件发送到", p.
                    default.createElement("a", {
                            className: "ReportMenu-link",
                            href: "mailto:i@zhihu.com"
                        },
                        " ", "i@zhihu.com", " "), "邮箱，我们会尽快处理。"), p.
                    default.createElement("ul", {
                            className: "ReportMenu-paragraph"
                        },
                        p.
                    default.createElement("li", null, "1. 您举报的内容以及侵犯了您什么权益？（请在邮件中列出您举报的内容、链接地址，并给出简短的说明）"), p.
                    default.createElement("li", null, "2. 您是谁？（身份证明材料，可以是身份证或护照等证件）")), p.
                    default.createElement("div", {
                            className: "ReportMenu-paragraph ReportMenu-paragraph--light"
                        },
                        "邮件格式请参考 ", p.
                    default.createElement("a", {
                            className: "ReportMenu-link--light",
                            href: "https://www.zhihu.com/terms#sec-report",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        },
                        "这里"), " ；"));
                    default:
                        return null
                    }
                }
            }]),
            t
        } (u.Component);
        m.propTypes = {
            reason: c.
        default.string.isRequired
        },
        t.
    default = m
    },
    1683 : function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function r(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        s = n(1),
        c = a(s),
        u = n(0),
        p = a(u),
        m = n(50),
        d = a(m),
        f = function(e) {
            function t() {
                return r(this, t),
                o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return i(t, e),
            l(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.copywriter.placeholder,
                    n = e.onDetailInput,
                    a = e.errorText,
                    r = e.checkCustomReasonContent;
                    return p.
                default.createElement("div", {
                        className: "ReportMenu-inner"
                    },
                    p.
                default.createElement(d.
                default, {
                        multiline: !0,
                        grey: !0,
                        rows: 5,
                        className: "ReportMenu-textarea",
                        placeholder: t,
                        onChange: function(e) {
                            return n(e.target.value)
                        },
                        onBlur: r
                    }), p.
                default.createElement("div", {
                        className: "ReportMenu-errorText"
                    },
                    a))
                }
            }]),
            t
        } (u.Component);
        f.propTypes = {
            onDetailInput: c.
        default.func.isRequired,
            copywriter: c.
        default.object,
            errorText: c.
        default.string
        },
        t.
    default = f
    },
    1684 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isCustomReasonLegal = void 0;
        var a = n(298);
        t.isCustomReasonLegal = function(e) {
            var t = /[\u4e00-\u9fa5a-zA-Z0-9]/;
            return e.length > 150 ? {
                isLegal: !1,
                errorReason: a.ReportMessage.contentTooLong
            }: t.test(e) ? {
                isLegal: !0,
                errorReason: ""
            }: {
                isLegal: !1,
                errorReason: a.ReportMessage.contentIllegal
            }
        }
    },
    1685 : function(e, t) {},
    1686 : function(e, t) {},
    1687 : function(e, t) {},
    1688 : function(e, t) {},
    1689 : function(e, t) {},
    1690 : function(e, t) {},
    1714 : function(e, t) {},
    1715 : function(e, t) {},
    1716 : function(e, t) {},
    1717 : function(e, t) {},
    2146 : function(e, t, n) {
        "use strict";
        function a(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function o(e, t) {
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
        function i(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function l(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function s(e, t) {
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
        function c(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function u(e, t) {
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
        function m(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function d(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function f(e, t) {
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
        function h(e, t) {
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
        function E(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function C(e, t) {
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
        function g(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function O(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function w(e, t) {
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
        function _(e, t) {
            switch (e) {
            case "answer":
                return Object(te.i)(t);
            case "article":
                return Object(ne.b)(t);
            default:
                return null
            }
        }
        function k(e, t) {
            var n = t.parent,
            a = t.parent,
            r = a.type,
            o = a.id,
            i = t.status,
            l = t.order,
            s = t.byComment,
            c = t.commentPattern,
            u = e.entities,
            p = e.comments,
            m = r + "_" + o,
            d = p.parent,
            f = p.pagination;
            "reviewing" === i && (f = p.reviewing),
            "reverse" === l && "open" === i && (f = p.reverse);
            var h = [],
            b = p.collapsed[m] || {};
            b && b.ids && b.ids.length > 0 && (h = b.ids.map(function(e) {
                return u.comments[e]
            }));
            var y = f[m] || {
                isPrevDrained: !1,
                isFetching: !1,
                isDrained: !1,
                ids: []
            },
            v = y.isFetching,
            E = y.isPrevDrained,
            C = y.isDrained,
            g = y.ids,
            O = y.newIds,
            w = void 0 === O ? [] : O;
            return {
                isFetching: v,
                isPrevDrained: E,
                isDrained: C,
                totals: y.totals,
                comments: ("bottom" !== c ? g: w).map(function(e) {
                    return u.comments[e]
                }),
                collapsedInfo: b,
                collapsedComments: h,
                targetComment: u.comments[s],
                parent: it({},
                n, d[m])
            }
        }
        function P(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function N(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function T(e, t) {
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
        function S(e, t) {
            var n = t.commentId,
            a = e.entities.comments,
            r = e.comments.conversation,
            o = r[n] || {
                isFetching: !1,
                isDrained: !1,
                ids: []
            };
            return {
                isFetching: o.isFetching,
                isDrained: o.isDrained,
                comments: o.ids.map(function(e) {
                    return a[e]
                }),
                openComment: a[n]
            }
        }
        function j(e, t) {
            var n = {};
            for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
            return n
        }
        function R(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function I(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function M(e, t) {
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
        var L, B, x, A, q = n(1),
        F = n.n(q),
        D = n(0),
        U = n.n(D),
        z = n(5),
        W = n(2),
        K = n.n(W),
        V = n(294),
        H = n(959),
        Y = n(87),
        G = n(89),
        Q = n.n(G),
        Z = n(10),
        J = n(141),
        X = n(960),
        $ = n(36),
        ee = n(14),
        te = n(84),
        ne = n(260),
        ae = n(153),
        re = n(15),
        oe = n(3),
        ie = n(48),
        le = n.n(ie),
        se = (n(249), n(6)),
        ce = n.n(se),
        ue = n(265),
        pe = n.n(ue),
        me = n(272),
        de = n(38),
        fe = (n(252), n(1676), Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }),
        he = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        be = function(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        } (["回复", "", ""], ["回复", "", ""]),
        ye = (L = Object(z.connect)(function(e) {
            return {
                edition: Object(de.c)(e),
                referer: Object(de.h)(e),
                shouldOia: Object(de.i)(e)
            }
        }), Object(re.withRouter)(B = L((A = x = function(e) {
            function t(e, n) {
                a(this, t);
                var o = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return o.handleCommentShow = o.context.authRequired(function() {
                    o.setState({
                        shown: !0
                    }),
                    o.hiddenInput.focus()
                }),
                o.handleCommentHide = function() {
                    o.setState({
                        shown: !1
                    })
                },
                o.handleMobileComment = function() {
                    o.onSubmit(),
                    o.handleCommentHide()
                },
                o.onChange = o.handleChange.bind(o),
                o.onFocus = o.handleFocus.bind(o),
                o.onBlur = o.handleBlur.bind(o),
                o.onSubmit = o.context.authRequired(o.handleSubmit.bind(o), void 0, ee.c),
                o.state = {
                    active: e.defaultActive,
                    disabled: !0,
                    shown: !1
                },
                o
            }
            return o(t, e),
            he(t, [{
                key: "handleChange",
                value: function(e) {
                    this.setState({
                        disabled: e.isEmpty
                    })
                }
            },
            {
                key: "handleFocus",
                value: function() {
                    this.setState({
                        active: !0
                    })
                }
            },
            {
                key: "handleBlur",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        return e.setState({
                            active: !1
                        })
                    },
                    100)
                }
            },
            {
                key: "handleSubmit",
                value: function() {
                    var e = this.props,
                    t = e.replyTo,
                    n = e.onSubmit,
                    a = e.onCancel,
                    r = this.input.toHTML();
                    r && (n(r, t), ce.a.trackEvent(this, {
                        action: "Comment",
                        element: "Button"
                    }), this.input.reset(), a && a())
                }
            },
            {
                key: "renderInput",
                value: function(e) {
                    var t = this,
                    n = e.placeholder,
                    a = e.className,
                    r = this.props.autoFocus;
                    return U.a.createElement(me.a, {
                        className: K()("CommentEditor-input", a),
                        richtext: !0,
                        large: !0,
                        spread: !0,
                        allowMention: !0,
                        autoFocus: Boolean(!1) || r,
                        outputBlockType: "div",
                        onRef: function(e) {
                            t.input = e
                        },
                        placeholder: n,
                        onFocus: this.onFocus,
                        onBlur: this.onBlur,
                        onChange: this.onChange,
                        onSubmit: this.onSubmit,
                        minRows: 5
                    })
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.replyTo,
                    n = e.commentNeedsReview,
                    a = e.className,
                    r = e.onCancel,
                    o = e.ownerAuthorIsOrg,
                    i = e.ownerAuthorIsBrand,
                    l = (e.type, e.id, e.edition, e.shouldOia, e.location.query, e.referer, this.state),
                    s = l.active,
                    c = l.disabled,
                    u = o ? "机构": "作者";
                    if (t) {
                        var p = pe()(be, t.author.member.name, n ? "，评论由" + u + "筛选后公开": "");
                        return U.a.createElement("div", {
                            className: K()(a, "CommentEditor--inCommentItem", {
                                "CommentEditor--active": s
                            })
                        },
                        this.renderInput({
                            placeholder: p
                        }), U.a.createElement("div", {
                            className: "CommentEditor-actions"
                        },
                        U.a.createElement(oe.
                    default, {
                            preset: "plain",
                            onClick: r
                        },
                        "取消"), U.a.createElement(oe.
                    default, {
                            preset: "primary",
                            color: "blue",
                            onClick: this.onSubmit,
                            disabled: c
                        },
                        "评论")))
                    }
                    var m = "写下你的评论...";
                    n && (m = i ? "已开启预审评论，评论由品牌筛选后公开": o ? "已开启预审评论，评论由机构筛选后公开": "评论由作者筛选后显示");
                    var d = (K()(a, "CommentEditor--normal"), this.state.shown, {
                        preset: "primary",
                        color: "blue",
                        children: "评论",
                        disabled: c
                    });
                    return U.a.createElement("div", {
                        className: K()(a, "CommentEditor--normal", {
                            "CommentEditor--active": s
                        })
                    },
                    this.renderInput({
                        placeholder: m
                    }), U.a.createElement(oe.
                default, fe({},
                    d, {
                        className: "CommentEditor-singleButton",
                        onClick: this.onSubmit
                    })))
                }
            }]),
            t
        } (D.Component), x.contextTypes = {
            authRequired: F.a.func
        },
        B = A)) || B) || B);
        ye.defaultProps = {
            defaultActive: !1,
            replyTo: null,
            inCommentItem: !1,
            autoFocus: !0,
            ownerAuthorIsOrg: !1,
            ownerAuthorIsBrand: !1
        },
        ye.propTypes = {
            className: F.a.string,
            defaultActive: F.a.bool,
            replyTo: F.a.object,
            inCommentItem: F.a.bool,
            commentNeedsReview: F.a.bool,
            canComment: F.a.object,
            onCancel: F.a.func,
            onSubmit: F.a.func.isRequired
        };
        var ve, Ee, Ce, ge, Oe, we, _e, ke, Pe, Ne, Te, Se, je, Re, Ie, Me, Le, Be = ye,
        xe = (n(771), n(39), n(243)),
        Ae = n(13),
        qe = n(261),
        Fe = n(151),
        De = n(140),
        Ue = n(81),
        ze = n(746),
        We = (n(1686),
        function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } ()),
        Ke = (ve = Object(z.connect)(function(e) {
            return {
                edition: Object(de.c)(e),
                referer: Object(de.h)(e),
                isWechat: e.env.userAgent.Wechat
            }
        }), Object(re.withRouter)(Ee = ve((ge = Ce = function(e) {
            function t() {
                var e, n, a, r;
                i(this, t);
                for (var o = arguments.length,
                s = Array(o), c = 0; c < o; c++) s[c] = arguments[c];
                return n = a = l(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))),
                a.state = {
                    deleteModalShown: !1,
                    reportModalShown: !1,
                    isReplying: !1,
                    collapsed: !0,
                    guideShown: !1
                },
                a.getRedirectUrl = function() {
                    var e = a.props.parent;
                    switch (e.type) {
                    case "answer":
                        return "/question/" + e.question.id + "/answer/" + e.id;
                    case "article":
                        return "https://zhuanlan.zhihu.com/p/" + e.id;
                    default:
                        return ""
                    }
                },
                a.like = a.context.authRequired(function(e) {
                    var t = a.props; (0, t.onLike)(t.comment.id, e)
                },
                Ae.B.like, ee.c),
                a.dislike = a.context.authRequired(function() {
                    var e = a.props; (0, e.onDislike)(e.comment.id)
                },
                Ae.B.like, ee.c),
                a.delete = function() {
                    var e = a.props; (0, e.onDelete)(e.comment.id)
                },
                a.feature = function() {
                    var e = a.props; (0, e.onFeature)(e.comment.id)
                },
                a.collapse = function() {
                    var e = a.props; (0, e.onCollapse)(e.comment.id)
                },
                a.approve = function() {
                    var e = a.props; (0, e.onApprove)(e.comment.id)
                },
                a.showConversation = function() {
                    var e = a.props; (0, e.onShowConversation)(e.comment.id)
                },
                a.startReply = a.context.authRequired(function() {
                    a.setState({
                        isReplying: !0
                    })
                },
                void 0, ee.c),
                a.stopReply = function() {
                    a.setState({
                        isReplying: !1
                    })
                },
                a.openModal = function() {
                    a.setState({
                        deleteModalShown: !0
                    })
                },
                a.closeModal = function() {
                    a.setState({
                        deleteModalShown: !1
                    })
                },
                a.openReportModal = a.context.authRequired(function() {
                    a.setState({
                        reportModalShown: !0
                    })
                }),
                a.closeReportModal = function() {
                    a.setState({
                        reportModalShown: !1
                    })
                },
                a.handleExpand = function() {
                    a.setState({
                        collapsed: !1
                    })
                },
                a.handleToggleGuide = function() {
                    a.setState({
                        guideShown: !a.state.guideShown
                    })
                },
                r = n,
                l(a, r)
            }
            return s(t, e),
            We(t, [{
                key: "renderRoleInfo",
                value: function(e, t) {
                    return "normal" === e ? null: U.a.createElement("span", {
                        className: "CommentItem-roleInfo"
                    },
                    "ancestor" === e || "author" === e && "question" === t ? " (提问者) ": " (作者) ")
                }
            },
            {
                key: "renderReplyTo",
                value: function() {
                    var e = this.props.comment,
                    t = e.replyToAuthor,
                    n = e.resourceType;
                    if (!t) return null;
                    var a = t.member,
                    r = void 0 === a ? {}: a,
                    o = t.role;
                    return U.a.createElement("span", null, U.a.createElement("span", {
                        className: "CommentItem-reply"
                    },
                    "回复"), U.a.createElement(Ue.a, {
                        className: K()({
                            "CommentItem-userLink": !1
                        }),
                        noBadge: !0,
                        noHoverCard: !0,
                        user: r
                    }), this.renderRoleInfo(o, n))
                }
            },
            {
                key: "renderInner",
                value: function() {
                    var e = this.props,
                    t = e.comment,
                    n = t.isDelete,
                    a = t.collapsed,
                    r = e.isConversation,
                    o = e.ownerAuthorIsOrg;
                    e.edition;
                    if (n) return r ? U.a.createElement("div", {
                        className: "CommentItem-deletedContent"
                    },
                    "这里有一条已删除的评论") : null;
                    if (a && r && this.state.collapsed) return U.a.createElement("div", {
                        className: "CommentItem-deletedContent"
                    },
                    "这里有一条已折叠的评论，", U.a.createElement(oe.
                default, {
                        preset: "plain",
                        onClick: this.handleExpand
                    },
                    "查看"));
                    var i = this.state,
                    l = i.deleteModalShown,
                    s = i.reportModalShown,
                    c = i.isReplying,
                    u = this.props,
                    p = u.parent,
                    m = p.canComment;
                    m = void 0 === m ? {
                        status: !0
                    }: m;
                    var d = m.status,
                    f = p.questionType,
                    h = u.commentNeedsReview,
                    b = u.comment,
                    y = u.onReply,
                    v = u.status,
                    E = u.type,
                    C = u.canOperate,
                    g = u.commentPattern,
                    O = u.isMobile,
                    w = b.id,
                    _ = b.author,
                    k = b.content,
                    P = b.voteCount,
                    N = b.replyToAuthor,
                    T = b.isAuthor,
                    S = b.isParentAuthor,
                    j = b.createdTime,
                    R = b.featured,
                    I = b.voting,
                    M = b.reviewing,
                    L = b.disliked,
                    B = b.resourceType,
                    x = _ || {},
                    A = x.member,
                    q = x.role,
                    F = void 0;
                    return F = c ? U.a.createElement(Be, {
                        commentNeedsReview: h,
                        className: "CommentItem-editor",
                        defaultActive: !0,
                        replyTo: b,
                        onCancel: this.stopReply,
                        onSubmit: y
                    }) : "reviewing" === v ? U.a.createElement("div", {
                        className: "CommentItem-footer"
                    },
                    U.a.createElement(oe.
                default, {
                        preset: "plain",
                        onClick: this.approve
                    },
                    U.a.createElement(Z.a, {
                        left: !0,
                        name: "read"
                    }), "公开"), U.a.createElement(oe.
                default, {
                        className: K()({
                            "CommentItem-hoverBtn": !0
                        }),
                        preset: "plain",
                        onClick: this.openModal
                    },
                    U.a.createElement(Z.a, {
                        left: !0,
                        name: "trash"
                    }), "删除")) : U.a.createElement("div", {
                        className: K()("CommentItem-footer", {
                            "CommentItem-mobileFooter": !1
                        })
                    },
                    U.a.createElement(oe.
                default, {
                        className: K()("CommentItem-likeBtn", I && "is-liked"),
                        preset: "plain",
                        onClick: this.like,
                        disabled: T
                    },
                    U.a.createElement(Z.a, {
                        left: !0,
                        name: "like"
                    }), P > 0 ? P: "赞"), !r && N && U.a.createElement(oe.
                default, {
                        preset: "plain",
                        className: "CommentItem-talkBtn",
                        onClick: this.showConversation
                    },
                    U.a.createElement(Z.a, {
                        left: !0,
                        name: "comments",
                        width: 13
                    }), "查看对话"), !r && !T && d && !a && U.a.createElement(oe.
                default, {
                        preset: "plain",
                        className: K()({
                            "CommentItem-hoverBtn": !0
                        }),
                        onClick: this.startReply
                    },
                    U.a.createElement(Z.a, {
                        left: !0,
                        name: "reply"
                    }), "回复"), S && C && !O && U.a.createElement(oe.
                default, {
                        className: K()({
                            "CommentItem-hoverBtn": !T
                        }),
                        preset: "plain",
                        onClick: this.feature
                    },
                    U.a.createElement(Z.a, {
                        left: !0,
                        name: "recommend"
                    }), R ? "取消推荐": "推荐"), S && C && !O && U.a.createElement(oe.
                default, {
                        className: K()({
                            "CommentItem-hoverBtn": !T
                        }),
                        preset: "plain",
                        onClick: this.collapse
                    },
                    U.a.createElement(Z.a, {
                        left: !0,
                        name: "inconspicuous"
                    }), a ? "取消折叠": "折叠"), !S && !T && C && !O && U.a.createElement(oe.
                default, {
                        className: K()({
                            "CommentItem-hoverBtn": !0
                        }),
                        preset: "plain",
                        onClick: this.dislike
                    },
                    U.a.createElement(Z.a, {
                        left: !0,
                        name: "like",
                        style: {
                            transform: "rotate(180deg)"
                        }
                    }), L ? "取消踩": "踩"), T || U.a.createElement(qe.a, {
                        className: K()({
                            "CommentItem-hoverBtn": !0
                        }),
                        resourceType: E,
                        type: "comment",
                        id: w
                    }), (T || S && "question" !== E || S && "question" === E && "commercial" === f) && !0 && U.a.createElement(oe.
                default, {
                        className: K()({
                            "CommentItem-hoverBtn": !T
                        }),
                        preset: "plain",
                        onClick: this.openModal
                    },
                    U.a.createElement(Z.a, {
                        left: !0,
                        name: "trash"
                    }), "删除"), !1, !1),
                    U.a.createElement("div", null, U.a.createElement("div", {
                        className: "CommentItem-meta"
                    },
                    A && U.a.createElement(Ue.a, {
                        className: "CommentItem-avatar",
                        avatar: !0,
                        noHoverCard: "fixed" === g,
                        user: A
                    }), A && U.a.createElement(Ue.a, {
                        className: K()({
                            "CommentItem-userLink": !1
                        }),
                        noBadge: !0,
                        noHoverCard: !0,
                        user: A
                    }), this.renderRoleInfo(q, B), this.renderReplyTo(), M && U.a.createElement(Z.a, {
                        className: "CommentItem-reviewing",
                        name: "inconspicuous",
                        "data-tooltip": !1 === o ? "评论未公开，由作者筛选后显示": "已开启预审评论，评论由机构筛选后公开"
                    }), U.a.createElement("span", {
                        className: "CommentItem-time"
                    },
                    Object(xe.d)(j))), U.a.createElement(De.a, {
                        className: "CommentItem-content",
                        html: k
                    }), F, U.a.createElement(ze.a, {
                        title: "你确定要删除这条评论吗？",
                        shown: l,
                        onCancel: this.closeModal,
                        onSubmit: this.delete
                    }), U.a.createElement(Fe.a, {
                        resourceType: B,
                        type: "comment",
                        urlToken: w,
                        shown: s,
                        onClose: this.closeReportModal,
                        zaEnabled: !0
                    }))
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this.renderInner(),
                    t = this.props,
                    n = t.parent;
                    n.type,
                    n.id,
                    t.isWechat,
                    t.edition,
                    t.referer,
                    t.location.query;
                    return e && U.a.createElement("div", {
                        className: "CommentItem",
                        ref: this.props.onRef
                    },
                    e, !1)
                }
            }]),
            t
        } (D.PureComponent), Ce.propTypes = {
            comment: F.a.object.isRequired,
            parent: F.a.object.isRequired,
            commentNeedsReview: F.a.bool,
            type: F.a.string,
            isConversation: F.a.bool,
            onLike: F.a.func.isRequired,
            onShowConversation: F.a.func,
            onReply: F.a.func,
            onFeature: F.a.func,
            onDelete: F.a.func.isRequired,
            onCollapse: F.a.func,
            commentPattern: F.a.string,
            isMobile: F.a.bool
        },
        Ce.contextTypes = {
            currentUser: F.a.object,
            authRequired: F.a.func
        },
        Ee = ge)) || Ee) || Ee),
        Ve = Ke,
        He = n(91),
        Ye = (n(1687),
        function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } ()),
        Ge = function(e) {
            function t() {
                return c(this, t),
                u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return p(t, e),
            Ye(t, [{
                key: "render",
                value: function() {
                    var e = this.props.onRef;
                    return U.a.createElement("div", {
                        className: "Comments-pattern-loading",
                        ref: e
                    },
                    U.a.createElement(He.a, null))
                }
            }]),
            t
        } (D.PureComponent),
        Qe = n(830),
        Ze = n(790),
        Je = n(11),
        Xe = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        $e = {
            normal: {
                text: "默认排序",
                value: "reverse"
            },
            reverse: {
                text: "时间排序",
                value: "normal"
            }
        },
        et = (we = Oe = function(e) {
            function t() {
                var e, n, a, r;
                m(this, t);
                for (var o = arguments.length,
                i = Array(o), l = 0; l < o; l++) i[l] = arguments[l];
                return n = a = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))),
                a.state = {
                    text: "时间排序",
                    value: "normal"
                },
                a.switchType = function(e) {
                    var t = a.state.value,
                    n = a.props.onOrderChange,
                    r = $e[t],
                    o = r.text,
                    i = r.value;
                    a.setState({
                        text: o,
                        value: i
                    }),
                    n && n(i, e)
                },
                r = n,
                d(a, r)
            }
            return f(t, e),
            Xe(t, [{
                key: "render",
                value: function() {
                    var e = this.state.text,
                    t = this.props,
                    n = t.isConversation,
                    a = t.commentClosed;
                    return ! n && !a && U.a.createElement(oe.
                default, {
                        preset: "plain",
                        onClick: this.switchType,
                        icon: Je.Switch,
                        label: "切换为" + e
                    })
                }
            }]),
            t
        } (D.Component), Oe.propTypes = {
            isConversation: F.a.bool,
            commentClosed: F.a.bool,
            onOrderChange: F.a.func
        },
        we),
        tt = (n(1688),
        function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } ()),
        nt = (ke = _e = function(e) {
            function t() {
                return h(this, t),
                b(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return y(t, e),
            tt(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.commentPattern,
                    n = e.onNavBack;
                    return U.a.createElement("h2", {
                        className: "CommentTopbar-title"
                    },
                    "bottom" !== t ? U.a.createElement(oe.
                default, {
                        className: "CommentTopbar-back",
                        preset: "plain",
                        onClick: n
                    },
                    U.a.createElement(Z.a, {
                        className: "CommentTopbar-backIcon",
                        name: "arrowLeft",
                        left: !0,
                        width: 14,
                        height: 14
                    }), "返回评论") : U.a.createElement("div", null, "查看对话"))
                }
            }]),
            t
        } (D.Component), _e.propTypes = {
            commentPattern: F.a.string,
            onNavBack: F.a.func
        },
        ke),
        at = (n(1689),
        function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } ()),
        rt = (Ne = Pe = function(e) {
            function t() {
                return v(this, t),
                E(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return C(t, e),
            at(t, [{
                key: "renderTitle",
                value: function() {
                    var e = this.props,
                    t = e.commentCount,
                    n = e.commentClosed,
                    a = e.isConversation,
                    r = e.onNavBack,
                    o = e.targetLink,
                    i = e.isCommentReviewer,
                    l = e.reviewingCounts,
                    s = e.onStatusChange,
                    c = e.status,
                    u = e.commentPattern,
                    p = e.isOrg,
                    m = e.isMobile;
                    return a ? U.a.createElement(nt, {
                        commentPattern: u,
                        onNavBack: r
                    }) : i && !n ? U.a.createElement("div", {
                        className: "CommentTopbar-tabsWrapper"
                    },
                    U.a.createElement(Qe.b, {
                        className: "CommentTopbar-tabs"
                    },
                    U.a.createElement(Qe.a, {
                        className: "CommentTopbar-tab",
                        "aria-controls": "CommentTopbar-open",
                        meta: Object($.b)(t)
                    },
                    U.a.createElement(oe.
                default, {
                        className: K()("CommentTopbar-tabButton", {
                            "is-active": "open" === c
                        }),
                        onClick: function() {
                            return s("open")
                        }
                    },
                    "公开评论")), !m && U.a.createElement(Qe.a, {
                        className: "CommentTopbar-tab",
                        "aria-controls": "CommentTopbar-reviewing",
                        meta: void 0 === l ? null: Object($.b)(l)
                    },
                    U.a.createElement(oe.
                default, {
                        className: K()("CommentTopbar-tabButton", {
                            "is-active": "reviewing" === c
                        }),
                        onClick: function() {
                            return s("reviewing")
                        }
                    },
                    "待" + (p ? "审核": "筛选") + "评论"))), o) : U.a.createElement("h2", {
                        className: "CommentTopbar-title"
                    },
                    t && !n ? Object($.b)(t) + " 条评论": "还没有评论", o)
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.className,
                    n = e.isConversation,
                    a = e.commentCount,
                    r = e.commentClosed,
                    o = e.onOrderChange,
                    i = e.isMobile,
                    l = e.onRef,
                    s = e.status,
                    c = a && !r,
                    u = !i && Boolean(c) && "reviewing" !== s && U.a.createElement(et, {
                        isConversation: n,
                        onOrderChange: o,
                        commentClosed: r
                    });
                    return U.a.createElement(Ze.a, {
                        className: K()("CommentTopbar", t),
                        onRef: l,
                        header: this.renderTitle(),
                        options: u,
                        showOptions: !i
                    })
                }
            }]),
            t
        } (D.Component), Pe.propTypes = {
            commentCount: F.a.oneOfType([F.a.number, F.a.string]),
            isConversation: F.a.bool,
            onNavBack: F.a.func,
            isCommentReviewer: F.a.bool,
            onStatusChange: F.a.func,
            onOrderChange: F.a.func,
            status: F.a.string,
            reviewingCounts: F.a.oneOfType([F.a.number, F.a.string]),
            targetLink: F.a.string,
            commentClosed: F.a.bool,
            commentPattern: F.a.string,
            isOrg: F.a.bool,
            isMobile: F.a.bool
        },
        Ne),
        ot = (n(1690),
        function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } ()),
        it = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        },
        lt = (Se = Te = function(e) {
            function t(e, n) {
                g(this, t);
                var a = O(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return a.state = {
                    collapsed: !0,
                    current: 1,
                    packupButtonStatus: !1,
                    packupButtonLeft: 0
                },
                a.handleOpenCollapsed = function() {
                    a.setState({
                        collapsed: !1
                    }),
                    a.load(a.props, !1, !0)
                },
                a.createOnRef = Q()(function(e) {
                    return function(t) {
                        var n = a.props.byComment;
                        e === Number(n) && (a.targetCommentEl = t)
                    }
                }),
                a.handlePaginationClick = function(e) {
                    var t = a.props.onPaginationClick,
                    n = a.state.current;
                    t && t(n, e),
                    a.commentsElement.scrollIntoView(),
                    a.setState({
                        current: e
                    }),
                    a.loadByPagination(e)
                },
                a.renderComment = function(e) {
                    var t = a.props,
                    n = t.parent,
                    r = n.type,
                    o = n.author;
                    o = void 0 === o ? {
                        isOrg: !1
                    }: o;
                    var i = o.isOrg,
                    l = t.isMobile,
                    s = t.parent,
                    c = t.commentNeedsReview,
                    u = t.onShowConversation,
                    p = t.status,
                    m = t.onItemLike,
                    d = t.onItemDelete,
                    f = t.onItemCollapse,
                    h = t.onItemDislike,
                    b = t.onItemApprove,
                    y = t.canOperateItem,
                    v = t.commentPattern;
                    return U.a.createElement(Ve, {
                        key: e.id,
                        isMobile: l,
                        comment: e,
                        onRef: a.createOnRef(e.id),
                        status: p,
                        type: r,
                        parent: s,
                        canOperate: y,
                        commentNeedsReview: c,
                        onShowConversation: u,
                        ownerAuthorIsOrg: i,
                        onLike: m,
                        onReply: a.addComment,
                        onFeature: a.featureItem,
                        onDelete: d,
                        onCollapse: f,
                        onDislike: h,
                        onApprove: b,
                        commentPattern: v
                    })
                },
                a.renderNormalComments = function(e) {
                    var t = a.state.collapsed,
                    n = a.props.byComment,
                    r = [];
                    if (a.lastFeaturedIndex = 0, e.length > 0) {
                        var o = e[0].featured,
                        i = !1;
                        e.forEach(function(l, s) {
                            if (n || !l.collapsed) {
                                var c = e[s - 1];
                                if (!l.collapsed || (c && c.collapsed || r.push(a.renderCollapsedDivider()), !t)) {
                                    r.push(a.renderComment(l));
                                    var u = e[s + 1];
                                    o && !i && l.featured && (!u || !u.featured) && (i = !0, a.lastFeaturedIndex = s, r.push(U.a.createElement("div", {
                                        className: "CommentList-divider",
                                        key: "divider-featured"
                                    },
                                    U.a.createElement("div", {
                                        className: "CommentList-dividerLine"
                                    }), U.a.createElement("div", {
                                        className: "CommentList-dividerText"
                                    },
                                    "以上为精选评论", U.a.createElement(Z.a, {
                                        className: "CommentList-questionMark",
                                        name: "questionMark",
                                        "data-tooltip": "精选评论包含回答作者推荐的评论和部分高赞评论"
                                    })))))
                                }
                            }
                        })
                    }
                    return r
                },
                a.renderCollapsedComments = function() {
                    var e = [],
                    t = a.props.collapsedComments;
                    return a.state.collapsed || !t || t.length <= 0 ? [] : (e.push(t.map(function(e) {
                        return a.renderComment(e)
                    })), e)
                },
                a.renderComments = function(e) {
                    return e.map(a.renderComment)
                },
                a.load = a.load.bind(a),
                a.loadByPagination = a.loadByPagination.bind(a),
                a.addComment = a.addComment.bind(a),
                a.featureItem = a.featureItem.bind(a),
                a.handleScroll = a.handleScroll.bind(a),
                a
            }
            return w(t, e),
            ot(t, [{
                key: "componentDidMount",
                value: function() {
                    this.subscription = Object(Y.subscribe)("scroll", this.handleScroll);
                    var e = this.props,
                    t = e.byComment,
                    n = e.commentPattern,
                    a = e.parent.adminClosedComment,
                    r = this.state.current;
                    t && this.scrollToTarget(),
                    "bottom" !== n || a || (this.loadByPagination(r), this.commentsWithPaginationEl && this.setState({
                        packupButtonLeft: this.commentsWithPaginationEl.getBoundingClientRect().right - 16
                    }))
                }
            },
            {
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this.props,
                    n = t.order,
                    a = t.status,
                    r = t.targetComment,
                    o = t.commentPattern;
                    n === e.order && a === e.status || ("bottom" === o ? (this.setState({
                        current: 1
                    }), this.loadByPagination(1, e)) : this.load(e), this.setState({
                        collapsed: !0
                    }));
                    var i = e.targetComment; ! r && i && this.setState({
                        collapsed: !i.collapsed
                    })
                }
            },
            {
                key: "componentDidUpdate",
                value: function(e) { ! e.comments.length && this.props.comments.length && this.props.byComment && this.scrollToTarget()
                }
            },
            {
                key: "componentWillUnmount",
                value: function() {
                    this.props.dispatch(Object(ee.f)(ee.c)),
                    this.subscription && this.subscription.unsubscribe()
                }
            },
            {
                key: "load",
                value: function(e, t, n) {
                    if (!this.props.isFetching && !this.props.parent.adminClosedComment) {
                        var a = e || this.props,
                        r = a.order,
                        o = a.byComment,
                        i = a.status,
                        l = a.parent,
                        s = l.id,
                        c = l.type,
                        u = a.dispatch,
                        p = a.commentPattern;
                        if (a.needLoadCommentPermission && u(_(c, s)), n) {
                            u(Object(V.e)(c, s, {
                                order: r,
                                isPrevious: t,
                                byComment: o,
                                status: "collapsed",
                                commentPattern: p
                            },
                            !0))
                        } else u(Object(V.e)(c, s, {
                            order: r,
                            isPrevious: t,
                            byComment: o,
                            status: i,
                            commentPattern: p
                        }))
                    }
                }
            },
            {
                key: "addComment",
                value: function(e, t) {
                    var n = this.props,
                    a = n.parent,
                    r = a.id,
                    o = a.type,
                    i = n.dispatch,
                    l = [o, r, e];
                    t && (l[3] = t.id),
                    i(V.a.apply(void 0, l))
                }
            },
            {
                key: "featureItem",
                value: function(e) {
                    this.props.onItemFeature(e, this.lastFeaturedIndex)
                }
            },
            {
                key: "handleScroll",
                value: function() {
                    if (this.commentsElement && this.commentsWithPaginationEl) {
                        var e = window.innerHeight,
                        t = this.state.packupButtonStatus,
                        n = this.commentsWithPaginationEl.getBoundingClientRect(),
                        a = n.top,
                        r = n.bottom,
                        o = n.height; ! t && o > 500 && r > e && a < 0 ? this.setState({
                            packupButtonStatus: !0
                        }) : t && (o <= 500 || r <= e || a >= 0) && this.setState({
                            packupButtonStatus: !1
                        })
                    }
                }
            },
            {
                key: "scrollToTarget",
                value: function() {
                    var e = this.targetCommentEl,
                    t = this.listEl;
                    if (t && e) {
                        var n = e.getBoundingClientRect(),
                        a = n.top,
                        r = n.height,
                        o = t.getBoundingClientRect(),
                        i = o.top,
                        l = o.height;
                        this.listEl.scrollTop += a - i - (l - r) / 2,
                        e.classList.add("CommentItem--highlighted"),
                        setTimeout(function() {
                            return e.classList.remove("CommentItem--highlighted")
                        },
                        2e3),
                        e.tabIndex = -1,
                        e.focus()
                    }
                }
            },
            {
                key: "loadByPagination",
                value: function(e, t) {
                    var n = t || this.props,
                    a = n.order,
                    r = n.byComment,
                    o = n.status,
                    i = n.parent,
                    l = i.id,
                    s = i.type,
                    c = n.dispatch,
                    u = n.commentPattern;
                    n.needLoadCommentPermission && c(_(s, l)),
                    c(Object(V.e)(s, l, {
                        order: a,
                        isPrevious: !1,
                        byComment: r,
                        status: o,
                        commentPattern: u,
                        current: e
                    }))
                }
            },
            {
                key: "renderCollapsedDivider",
                value: function() {
                    var e = this.props,
                    t = e.isDrained,
                    n = e.parent.collapsedCounts;
                    return ! t || n <= 0 ? [] : this.state.collapsed ? U.a.createElement("div", {
                        className: "CommentList-action",
                        key: "collapsed"
                    },
                    U.a.createElement("div", {
                        className: "CommentList-expendCollapseButton"
                    },
                    U.a.createElement("span", {
                        onClick: this.handleOpenCollapsed
                    },
                    Object($.b)(n), " 条评论被折叠"), "（", U.a.createElement("a", {
                        href: "//www.zhihu.com/question/52029856/answer/128623557",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    },
                    "为什么？"), "）")) : U.a.createElement("div", {
                        className: "CommentList-divider",
                        key: "divider-collapsed"
                    },
                    U.a.createElement("div", {
                        className: "CommentList-dividerLine"
                    }), U.a.createElement("div", {
                        className: "CommentList-dividerText"
                    },
                    Object($.b)(n), " 条评论被折叠（", U.a.createElement("a", {
                        href: "//www.zhihu.com/question/52029856/answer/128623557",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    },
                    "为什么？"), "）"))
                }
            },
            {
                key: "renderCollapsedInfiLoader",
                value: function() {
                    var e = this,
                    t = this.state.collapsed;
                    if (t) return [];
                    var n = this.props.collapsedInfo;
                    n = void 0 === n ? {}: n;
                    var a = n.isFetching,
                    r = n.isPrevDrained,
                    o = n.isDrained;
                    return U.a.createElement(J.
                default, {
                        className: "CommentList",
                        onRef: function(t) {
                            e.listEl = t
                        },
                        isLocal: !0,
                        isLoading: a,
                        isPrevDrained: r,
                        isDrained: o,
                        onLoad: function(n) {
                            return e.load(e.props, n, !t)
                        },
                        placeholder: U.a.createElement(J.PlaceHolder, {
                            className: "CommentItem",
                            small: !0
                        })
                    },
                    this.renderCollapsedComments())
                }
            },
            {
                key: "renderPatternContent",
                value: function(e) {
                    var t = this,
                    n = this.props,
                    a = n.isFetching,
                    r = n.parent.adminClosedComment,
                    o = n.byComment,
                    i = n.status,
                    l = n.order,
                    s = n.totals,
                    c = n.handlePackupButton,
                    u = n.apps,
                    p = Math.ceil(s / 20),
                    m = this.state,
                    d = m.current,
                    f = m.packupButtonStatus,
                    h = m.packupButtonLeft;
                    return r ? null: a ? U.a.createElement(Ge, {
                        onRef: function(e) {
                            t.commentsWithPaginationEl = e
                        }
                    }) : U.a.createElement("div", {
                        ref: function(e) {
                            t.commentsWithPaginationEl = e
                        }
                    },
                    U.a.createElement("div", {
                        className: "CommentList"
                    },
                    "normal" === l && "open" === i ? this.renderNormalComments(e) : this.renderComments(e)), p > 1 && U.a.createElement(X.a, {
                        current: d,
                        className: "comments-pagination",
                        total: p,
                        clickCallback: this.handlePaginationClick
                    }), !o && this.renderCollapsedDivider(), !o && this.renderCollapsedInfiLoader(), U.a.createElement(H.CSSTransitionGroup, {
                        transitionName: "Comments-Packup-Button",
                        transitionEnterTimeout: 300,
                        transitionLeaveTimeout: 300
                    },
                    f && "column" !== u && U.a.createElement("button", {
                        onClick: c,
                        className: "Comments-Packup-Button",
                        style: {
                            left: h
                        }
                    },
                    "收起评论", U.a.createElement(Z.a, {
                        name: "arrow"
                    }))))
                }
            },
            {
                key: "renderModalContent",
                value: function(e) {
                    var t = this,
                    n = this.props,
                    a = n.collapsedInfo,
                    r = n.parent.adminClosedComment,
                    o = n.status,
                    i = n.order,
                    l = n.byComment,
                    s = this.state.collapsed,
                    c = s ? this.props: a,
                    u = c.isFetching,
                    p = c.isDrained,
                    m = c.isPrevDrained;
                    if (p && e.length <= 0 || r) return U.a.createElement("div", {
                        className: "Comments-empty"
                    },
                    U.a.createElement(ae.a, {
                        entityType: "comments"
                    }));
                    var d = {
                        getContainer: function(e) {
                            return e
                        }
                    };
                    return U.a.createElement(J.
                default, it({
                        className: "CommentList",
                        onRef: function(e) {
                            t.listEl = e
                        },
                        isLocal: !0,
                        isLoading: u,
                        isPrevDrained: m,
                        isDrained: p,
                        onLoad: function(e) {
                            return t.load(t.props, e, !s)
                        },
                        placeholder: U.a.createElement(J.PlaceHolder, {
                            className: "CommentItem",
                            small: !0
                        })
                    },
                    d), "normal" === i && "open" === o ? this.renderNormalComments(e) : this.renderComments(e), !l && this.renderCollapsedDivider(), !l && this.renderCollapsedComments())
                }
            },
            {
                key: "renderCommentEdit",
                value: function() {
                    var e = this.props,
                    t = e.parent,
                    n = t.canComment;
                    n = void 0 === n ? {
                        status: !0
                    }: n;
                    var a = n.status,
                    r = n.reason,
                    o = t.author;
                    o = void 0 === o ? {
                        isOrg: !1
                    }: o;
                    var i = o.isOrg,
                    l = t.type,
                    s = t.id,
                    c = t.adminClosedComment,
                    u = t.questionType,
                    p = e.byComment,
                    m = e.isAutoblur,
                    d = e.commentNeedsReview,
                    f = c ? "当前内容暂时无法评论": r,
                    h = m ? !m: !p;
                    return a && !c ? U.a.createElement(Be, {
                        className: "Comments-footer",
                        type: l,
                        id: s,
                        commentNeedsReview: d,
                        onSubmit: this.addComment,
                        autoFocus: h,
                        ownerAuthorIsOrg: i,
                        ownerAuthorIsBrand: "commercial" === u
                    }) : U.a.createElement("div", {
                        className: K()("Comments-disabledText", {
                            "Comments-disabledText--fixed": !1
                        })
                    },
                    U.a.createElement("div", {
                        className: "Comments-disabledReason"
                    },
                    f))
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this,
                    t = this.props,
                    n = t.className,
                    a = t.isAuthor,
                    r = t.comments,
                    o = t.commentPattern,
                    i = t.parent,
                    l = i.author;
                    l = void 0 === l ? {
                        isOrg: !1
                    }: l;
                    var s = l.isOrg,
                    c = i.commentPermission,
                    u = i.reviewingCounts,
                    p = i.commentCount,
                    m = i.adminClosedComment,
                    d = t.totals,
                    f = t.status,
                    h = t.order,
                    b = t.onStatusChange,
                    y = t.apps,
                    v = t.onOrderChange,
                    E = t.targetLink,
                    C = r.filter(function(e) {
                        return ! e.isDelete
                    }),
                    g = "censor" === c && a,
                    O = g ? {
                        isCommentReviewer: g,
                        onStatusChange: b,
                        status: f,
                        reviewingCounts: u
                    }: {
                        status: f
                    },
                    w = K()({
                        Comments: !0,
                        "Comments--withEditor": !0,
                        "Comments-withPagination": "bottom" === o
                    },
                    n);
                    return U.a.createElement("div", {
                        className: w,
                        ref: function(t) {
                            e.commentsElement = t
                        }
                    },
                    U.a.createElement(rt, it({
                        commentCount: void 0 !== p ? p: d,
                        commentClosed: m,
                        targetLink: E,
                        order: h,
                        onOrderChange: v,
                        commentPattern: o,
                        isOrg: s
                    },
                    O)), "column" === y && this.renderCommentEdit(), "bottom" === o ? this.renderPatternContent(C) : this.renderModalContent(C), "column" !== y && this.renderCommentEdit())
                }
            }]),
            t
        } (D.Component), Te.propTypes = {
            type: F.a.string,
            parent: F.a.object.isRequired,
            targetLink: F.a.node,
            commentNeedsReview: F.a.bool,
            byComment: F.a.oneOfType([F.a.number, F.a.string]),
            commentPattern: F.a.string,
            handlePackupButton: F.a.func,
            onPaginationClick: F.a.func,
            isAutoblur: F.a.bool
        },
        Te.contextTypes = {
            authRequired: F.a.func.isRequired
        },
        Te.defaultProps = {
            isAutoblur: !1
        },
        Se),
        st = Object(z.connect)(k)(lt),
        ct = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        ut = (Re = je = function(e) {
            function t(e, n) {
                P(this, t);
                var a = N(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return a.load = a.load.bind(a),
                a.addComment = n.authRequired(a.addComment.bind(a), void 0, ee.c),
                a
            }
            return T(t, e),
            ct(t, [{
                key: "componentDidMount",
                value: function() {
                    this.load()
                }
            },
            {
                key: "load",
                value: function() {
                    this.props.dispatch(Object(V.f)(this.props.commentId))
                }
            },
            {
                key: "addComment",
                value: function(e, t) {
                    var n = this.props,
                    a = n.type,
                    r = n.parent,
                    o = n.commentId,
                    i = n.dispatch,
                    l = [a, r.id, e, t.id, o];
                    i(V.a.apply(void 0, l))
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.onItemLike,
                    n = e.onItemDelete,
                    a = e.onItemFeature,
                    r = e.onItemApprove,
                    o = e.onItemCollapse,
                    i = e.onItemDislike,
                    l = e.onNavBack,
                    s = e.canOperateItem,
                    c = e.isFetching,
                    u = e.comments,
                    p = e.commentNeedsReview,
                    m = e.openComment.collapsed,
                    d = e.parent,
                    f = e.parent.canComment;
                    f = void 0 === f ? {
                        status: !0
                    }: f;
                    var h = f.status,
                    b = f.reason,
                    y = e.commentPattern,
                    v = this.context.currentUser,
                    E = Boolean(v && u.find(function(e) {
                        return e.author && e.author.member.urlToken === v.urlToken
                    })),
                    C = void 0,
                    g = void 0;
                    E && (C = u.filter(function(e) {
                        return e.author && e.author.member.urlToken !== v.urlToken
                    }), g = C[C.length - 1]);
                    var O = void 0;
                    return c && !u.length ? O = U.a.createElement(J.PlaceHolder, {
                        className: "CommentItem",
                        small: !0
                    }) : u.length && (O = u.map(function(e, l) {
                        return U.a.createElement(Ve, {
                            key: l,
                            isConversation: !0,
                            commentNeedsReview: p,
                            canOperate: s,
                            parent: d,
                            comment: e,
                            onLike: t,
                            onDelete: n,
                            onFeature: a,
                            onApprove: r,
                            onCollapse: o,
                            onDislike: i,
                            collapsedShown: m
                        })
                    })),
                    "bottom" === y ? U.a.createElement(le.a, {
                        size: "fullPage",
                        onClose: l
                    },
                    U.a.createElement("div", {
                        className: "Comments"
                    },
                    U.a.createElement(rt, {
                        isConversation: !0,
                        commentPattern: y
                    }), U.a.createElement("div", {
                        className: "CommentList"
                    },
                    O))) : U.a.createElement("div", {
                        className: "Comments"
                    },
                    U.a.createElement(rt, {
                        isConversation: !0,
                        onNavBack: l
                    }), U.a.createElement("div", {
                        className: "CommentList"
                    },
                    O), g && (h ? U.a.createElement(Be, {
                        className: "Comments-footer",
                        replyTo: g,
                        commentNeedsReview: p,
                        onSubmit: this.addComment
                    }) : U.a.createElement("div", {
                        className: "Comments-disabledText"
                    },
                    b)))
                }
            }]),
            t
        } (D.Component), je.propTypes = {
            commentId: F.a.number.isRequired,
            type: F.a.string,
            parent: F.a.object.isRequired,
            commentNeedsReview: F.a.bool
        },
        je.contextTypes = {
            currentUser: F.a.object,
            authRequired: F.a.func.isRequired
        },
        Re),
        pt = Object(z.connect)(S)(ut),
        mt = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        },
        dt = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        ft = (Me = Ie = function(e) {
            function t(e) {
                R(this, t);
                var n = I(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                Le.call(n);
                var a = e.parent,
                r = e.dispatch;
                return n.feature = function(e, t) {
                    return r(Object(V.i)(e, a.id, a.type, t))
                },
                n.delete = function(e) {
                    return r(Object(V.d)(e, a.type, a.id))
                },
                n.showConversation = function(e) {
                    return n.setState({
                        openedCommentId: e
                    })
                },
                n.showComments = function() {
                    return n.setState({
                        openedCommentId: null
                    })
                },
                n
            }
            return M(t, e),
            dt(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props.onMount;
                    e && e(this.domNode)
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this,
                    t = this.props,
                    n = t.parent,
                    a = t.commentPattern,
                    r = t.type,
                    o = t.parent,
                    i = o.commentPermission,
                    l = o.relationship,
                    s = void 0 === l ? {}: l,
                    c = o.author,
                    u = void 0 === c ? {}: c,
                    p = t.needLoadCommentPermission,
                    m = j(t, ["parent", "commentPattern", "type", "parent", "needLoadCommentPermission"]),
                    d = this.context.currentUser,
                    f = void 0 === s.isAuthor ? d && u.urlToken && d.urlToken === u.urlToken: s.isAuthor,
                    h = "censor" === i && !f,
                    b = "answer" === r || "article" === r,
                    y = this.state,
                    v = y.openedCommentId,
                    E = y.status,
                    C = y.order,
                    g = {
                        commentNeedsReview: h,
                        parent: n,
                        type: r,
                        canOperateItem: b,
                        onShowConversation: this.showConversation,
                        onItemLike: this.like,
                        onItemFeature: this.feature,
                        onItemDelete: this.delete,
                        onItemCollapse: this.collapse,
                        onItemDislike: this.dislike,
                        onItemApprove: this.approve
                    };
                    return U.a.createElement("div", {
                        className: "Comments-container",
                        ref: function(t) {
                            return e.domNode = t
                        }
                    },
                    U.a.createElement(st, mt({},
                    m, g, {
                        commentPattern: a,
                        className: K()({
                            "Comments--hidden": v && "bottom" !== a
                        }),
                        order: C,
                        status: E,
                        onStatusChange: this.handleStatusChange,
                        onOrderChange: this.handleOrderChange,
                        needLoadCommentPermission: p,
                        isAuthor: f
                    })), v && U.a.createElement(pt, mt({},
                    m, g, {
                        commentPattern: a,
                        commentId: v,
                        onNavBack: this.showComments
                    })))
                }
            }]),
            t
        } (D.Component), Ie.propTypes = {
            type: F.a.string.isRequired,
            parent: F.a.object.isRequired,
            onOrderChange: F.a.func,
            onItemLike: F.a.func,
            isAuthor: F.a.bool,
            onMount: F.a.func
        },
        Ie.defaultProps = {
            type: "answer"
        },
        Ie.contextTypes = {
            currentUser: F.a.object,
            authRequired: F.a.func.isRequired
        },
        Le = function() {
            var e = this;
            this.state = {
                openedCommentId: null,
                status: "open",
                order: "normal"
            },
            this.like = function(t, n) {
                var a = e.props,
                r = a.onItemLike,
                o = a.dispatch;
                r && r(t, n),
                o(Object(V.j)(t))
            },
            this.collapse = function(t) {
                var n = e.props,
                a = n.dispatch,
                r = n.parent;
                a(Object(V.g)(t, r.type, r.id))
            },
            this.dislike = function(t) {
                return e.props.dispatch(Object(V.h)(t))
            },
            this.approve = function(t) {
                var n = e.props,
                a = n.dispatch,
                r = n.parent,
                o = n.type;
                a(Object(V.b)(t, r.type || o, r.id))
            },
            this.handleStatusChange = function(t) {
                e.setState({
                    status: t
                })
            },
            this.handleOrderChange = function(t, n) {
                e.props.onOrderChange && e.props.onOrderChange(t, n),
                e.setState({
                    order: t
                })
            }
        },
        Me);
        t.
    default = Object(z.connect)()(ft)
    },
    2147 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.FavlistsModal = void 0;
        var a = n(1670),
        r = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (a);
        t.FavlistsModal = r.
    default
    },
    2148 : function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ReportModal = void 0;
        var a = n(1677),
        r = function(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        } (a);
        t.ReportModal = r.
    default
    },
    2149 : function(e, t, n) {
        "use strict";
        function a(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function o(e, t) {
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
        function i(e) {
            var t = e.length;
            return e.map(function(e, n) {
                return s.a.createElement("span", {
                    key: n
                },
                s.a.createElement(d.a, {
                    user: e,
                    noHoverCard: !0,
                    noBadge: !0
                }), n !== t - 1 && s.a.createElement("span", {
                    style: {
                        color: "rgb(62,122,194)"
                    }
                },
                "、"))
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(0),
        s = n.n(l),
        c = n(2),
        u = n.n(c),
        p = n(36),
        m = n(13),
        d = n(81),
        f = n(331),
        h = (n.n(f),
        function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } ()),
        b = "//www.zhihu.com",
        y = function(e) {
            function t() {
                return a(this, t),
                r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return o(t, e),
            h(t, [{
                key: "renderCommentButton",
                value: function(e, t) {
                    var n = this,
                    a = t.href,
                    r = t.byComment;
                    return s.a.createElement("a", {
                        href: a + (r ? "#comment-" + r: ""),
                        onClick: function(e) {
                            e.preventDefault(),
                            n.props.onCommentsModalOpen(t)
                        }
                    },
                    e)
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.item,
                    n = t.id,
                    a = t.actionCount,
                    r = t.actionName,
                    o = t.groupName,
                    l = t.operators,
                    c = t.target,
                    d = t.column,
                    f = t.answer,
                    h = t.isRead,
                    y = t.voteCount,
                    v = t.thankCount,
                    E = t.question,
                    C = t.comment,
                    g = e.onClickLink,
                    O = C && C.id,
                    w = r.includes("REPLY_IN"),
                    _ = void 0,
                    k = void 0,
                    P = void 0,
                    N = void 0;
                    switch (o) {
                    case "QUESTION":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 修改了问题 ");
                        var T = c.title,
                        S = c.id;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + S + "/log/self?group_id=" + n
                        },
                        T);
                        break;
                    case "ANSWER_SUMMARY":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 编辑了 ");
                        var j = c.id,
                        R = c.question,
                        I = R.title,
                        M = R.id;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + M + "/answer/" + j
                        },
                        I),
                        N = s.a.createElement("span", null, " 的回答总结");
                        break;
                    case "INVITE":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 邀请你回答 ");
                        var L = c.title,
                        B = c.id;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + B
                        },
                        L);
                        break;
                    case "QUESTION_CREATE":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 提出了问题 ");
                        var x = c.title,
                        A = c.id;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + A
                        },
                        x);
                        break;
                    case "QUESTION_ZHIHU_INVITE":
                    case "QUESTION_AUTO_INVITE":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 的提问等你来答 ");
                        var q = c.title,
                        F = c.id;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + F
                        },
                        q);
                        break;
                    case "QUESTION_NEWS_INVITE":
                        k = s.a.createElement("span", null, "邀请你回答：");
                        var D = c.title,
                        U = c.id;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + U
                        },
                        D);
                        break;
                    case "ANSWER":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 回答了 ");
                        var z = c.title,
                        W = c.id;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + W + (f ? "/answer/" + f.id: "?group_id=" + n)
                        },
                        z);
                        break;
                    case "QUESTION_COMMENT":
                        _ = i(l),
                        k = s.a.createElement("span", null, " ", w ? "回复了你在": "评论了", " ");
                        var K = c.title,
                        V = c.id;
                        P = this.renderCommentButton(K, {
                            type: "question",
                            href: b + "/question/" + V,
                            byComment: O,
                            target: c
                        }),
                        w && (N = s.a.createElement("span", null, " 下的评论"));
                        break;
                    case "ANSWER_COMMENT":
                    case "ANSWER_COMMENT_REPLY":
                        _ = i(l),
                        k = s.a.createElement("span", null, " ", w ? "回复了你在": "评论了", " ");
                        var H = c.question,
                        Y = H.title,
                        G = H.id,
                        Q = c.id;
                        P = this.renderCommentButton(Y, {
                            type: "answer",
                            href: b + "/question/" + G + "/answer/" + Q,
                            byComment: O,
                            target: c
                        }),
                        w && (N = s.a.createElement("span", null, " 下的评论"));
                        break;
                    case "FAVLIST_COMMENT":
                    case "FAVLIST_COMMENT_REPLY":
                        _ = i(l),
                        k = s.a.createElement("span", null, " ", w ? "回复了你在": "评论了", " ");
                        var Z = c.title,
                        J = c.id;
                        P = this.renderCommentButton(Z, {
                            type: "collection",
                            href: b + "/collection/" + J + "?group_id=" + n,
                            byComment: O,
                            target: c
                        }),
                        w && (N = s.a.createElement("span", null, " 下的评论"));
                        break;
                    case "ANSWER_MENTION":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 在 ");
                        var X = c.id,
                        $ = c.question,
                        ee = $.id,
                        te = $.title;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + ee + "/answer/" + X
                        },
                        te),
                        N = s.a.createElement("span", null, " 中提到了你");
                        break;
                    case "QCOMMENT_MENTION":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 在 ");
                        var ne = c.title,
                        ae = c.id;
                        P = this.renderCommentButton(ne, {
                            type: "question",
                            href: b + "/question/" + ae,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 中提到了你");
                        break;
                    case "ACOMMENT_MENTION":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 在 ");
                        var re = c.question,
                        oe = re.title,
                        ie = re.id,
                        le = c.id;
                        P = this.renderCommentButton(oe, {
                            type: "answer",
                            href: b + "/question/" + ie + "/answer/" + le,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 中提到了你");
                        break;
                    case "FCOMMENT_MENTION":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 在 ");
                        var se = c.title,
                        ce = c.id;
                        P = this.renderCommentButton(se, {
                            type: "answer",
                            href: b + "/collection/" + ce + "?group_id=" + n,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 中提到了你");
                        break;
                    case "ANSWER_COLLAPSE":
                        k = s.a.createElement("span", null, " 你在 ");
                        var ue = c.id,
                        pe = c.question,
                        me = pe.id,
                        de = pe.title;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + me + "/answer/" + ue
                        },
                        de),
                        N = s.a.createElement("span", null, " 下的回答被折叠");
                        break;
                    case "ANSWER_COLLAPSE_CANCEL":
                        k = s.a.createElement("span", null, " 你在 ");
                        var fe = c.id,
                        he = c.question,
                        be = he.id,
                        ye = he.title;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + be + "/answer/" + fe
                        },
                        ye),
                        N = s.a.createElement("span", null, " 下的回答已恢复正常");
                        break;
                    case "QUESTION_SUGGEST_EDIT":
                        k = s.a.createElement("span", null, " 问题 ");
                        var ve = c.title,
                        Ee = c.id;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + Ee
                        },
                        ve),
                        N = s.a.createElement("span", null, " 已被「建议修改」，请及时修改问题");
                        break;
                    case "QUESTION_CLOSE":
                        k = s.a.createElement("span", null, " 问题 ");
                        var Ce = c.title,
                        ge = c.id;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + ge
                        },
                        Ce),
                        N = s.a.createElement("span", null, " 已被「关闭」");
                        break;
                    case "QUESTION_EDIT_REJECT":
                        k = s.a.createElement("span", null, " 问题 ");
                        var Oe = c.title,
                        we = c.id;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + we
                        },
                        Oe),
                        N = s.a.createElement("span", null, "修改后仍然不符合", s.a.createElement("a", {
                            href: b + "/question/19806261"
                        },
                        "知乎提问规范"));
                        break;
                    case "QUESTION_NORMAL":
                        k = s.a.createElement("span", null, " 问题 ");
                        var _e = c.title,
                        ke = c.id;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + ke
                        },
                        _e),
                        N = s.a.createElement("span", null, " 已恢复正常");
                        break;
                    case "ANSWER_SUGGEST_EDIT":
                        k = s.a.createElement("span", null, " 你在 ");
                        var Pe = c.id,
                        Ne = c.question,
                        Te = Ne.id,
                        Se = Ne.title;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + Te + "/answer/" + Pe
                        },
                        Se),
                        N = s.a.createElement("span", null, " 下的回答已被「建议修改」，请及时修改问题");
                        break;
                    case "ANSWER_EDIT_EVALUATE_REJECT":
                        k = s.a.createElement("span", null, " 你在 ");
                        var je = c.id,
                        Re = c.question,
                        Ie = Re.title,
                        Me = Re.id;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + Me + "/answer/" + je
                        },
                        Ie),
                        N = s.a.createElement("span", null, " 下的回答修改后仍然不符合知乎内容规范，请及时修改");
                        break;
                    case "ANSWER_NORMAL":
                        k = s.a.createElement("span", null, " 你在 ");
                        var Le = c.id,
                        Be = c.question,
                        xe = Be.id,
                        Ae = Be.title;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + xe + "/answer/" + Le
                        },
                        Ae),
                        N = s.a.createElement("span", null, " 下的回答已恢复正常");
                        break;
                    case "COLUMN_FOLLOW":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 关注了 ");
                        var qe = c.title,
                        Fe = c.id;
                        P = s.a.createElement("a", {
                            href: m.h + "/" + Fe + "?group_id=" + n
                        },
                        qe);
                        break;
                    case "ARTICLE_CREATE":
                        _ = i(l);
                        var De = c.title,
                        Ue = c.id;
                        if (d) {
                            var ze = d.title,
                            We = d.id;
                            k = s.a.createElement("a", {
                                href: m.h + "/" + We
                            },
                            " 在" + ze + "中 ")
                        }
                        P = s.a.createElement("a", {
                            href: m.h + "/p/" + Ue
                        },
                        "发布了" + De);
                        break;
                    case "ARTICLE_MENTION":
                        _ = i(l);
                        var Ke = c.title,
                        Ve = c.excerptTitle,
                        He = c.id,
                        Ye = Ke || Ve || "无标题";
                        k = s.a.createElement("span", null, " 在 "),
                        P = s.a.createElement("a", {
                            href: m.h + "/p/" + He
                        },
                        "发布了" + Ye),
                        N = s.a.createElement("span", null, "提到了你");
                        break;
                    case "ARTICLE_COMMENT":
                    case "ARTCOMMENT_REPLY":
                    case "ARTCOMMENT_COLUMN":
                    case "ARTCOMMENT_REPLY_COLUMN":
                    case "ARTCOMMENT_COLLECTION":
                    case "ARTCOMMENT_REPLY_COLLECTION":
                        _ = i(l),
                        k = s.a.createElement("span", null, " ", w ? "回复了你在": "评论了", " ");
                        var Ge = c.title,
                        Qe = c.excerptTitle,
                        Ze = c.id,
                        Je = Ge || Qe || "无标题";
                        P = this.renderCommentButton(Je, {
                            type: "article",
                            href: m.h + "/p/" + Ze,
                            byComment: O,
                            target: c
                        }),
                        w && (N = s.a.createElement("span", null, " 下的评论"));
                        break;
                    case "COLUMN_INVITE_EDITOR":
                        _ = i(l);
                        var Xe = c.title,
                        $e = c.id;
                        k = s.a.createElement("span", null, " 邀请你成为 "),
                        P = s.a.createElement("a", {
                            href: m.h + "/" + $e
                        },
                        Xe),
                        N = s.a.createElement("span", null, " 的编辑");
                        break;
                    case "COLUMN_INVITE":
                    case "COLUMN_INVITE_CONTRIBUTOR":
                    case "COLUMN_INVITE_AUTHOR":
                        _ = i(l);
                        var et = c.title,
                        tt = c.id;
                        k = s.a.createElement("span", null, " 邀请你成为 "),
                        P = s.a.createElement("a", {
                            href: m.h + "/" + tt + "?group_id=" + n
                        },
                        et),
                        N = s.a.createElement("span", null, " 的作者");
                        break;
                    case "ARTCOMMENT_MENTION":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 在 ");
                        var nt = c.title,
                        at = c.id;
                        P = this.renderCommentButton(nt, {
                            type: "article",
                            href: m.h + "/p/" + at,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 下的评论中提到了你");
                        break;
                    case "ARTICLE_CONTRIBUTE":
                        _ = i(l);
                        var rt = c.id,
                        ot = c.title;
                        if (d) {
                            var it = d.title,
                            lt = d.id;
                            k = s.a.createElement("span", null, " ", "向", " ", s.a.createElement("a", {
                                href: m.h + "/" + lt + "?group_id=" + n
                            },
                            it), " ", "投稿了文章", " ")
                        } else k = s.a.createElement("span", null, " 投稿了文章 ");
                        P = s.a.createElement("a", {
                            href: m.h + "/p/" + rt + "?group_id=" + n
                        },
                        "" + ot);
                        break;
                    case "ARTICLE_CONTRIBUTE_ACCEPT":
                        var st = c.id,
                        ct = c.title;
                        if (d) {
                            var ut = d.title,
                            pt = d.id;
                            k = s.a.createElement("span", null, s.a.createElement("a", {
                                href: m.h + "/" + pt + "?group_id=" + n
                            },
                            ut), " ", "通过了你投稿的文章", " ")
                        } else k = s.a.createElement("span", null, "通过了你投稿的文章");
                        P = s.a.createElement("a", {
                            href: m.h + "/p/" + st + "?group_id=" + n
                        },
                        "" + ct);
                        break;
                    case "CANCEL_ARTICLE_CONTRIBUTE":
                        var mt = c.id,
                        dt = c.title;
                        if (d) {
                            var ft = d.title,
                            ht = d.id;
                            k = s.a.createElement("span", null, s.a.createElement("a", {
                                href: m.h + "/" + ht + "?group_id=" + n
                            },
                            ft), " ", "取消收录你的文章", " ")
                        } else k = s.a.createElement("span", null, " 取消收录你的文章 ");
                        P = s.a.createElement("a", {
                            href: m.h + "/p/" + mt + "?group_id=" + n
                        },
                        "" + dt);
                        break;
                    case "ARTICLE_APPLY_PUBLISH":
                        _ = i(l);
                        var bt = c.id,
                        yt = c.title,
                        vt = d.title,
                        Et = d.id;
                        k = s.a.createElement("span", null, " ", "申请向", " ", s.a.createElement("a", {
                            href: m.h + "/" + Et + "?group_id=" + n
                        },
                        vt), " ", "投稿", " "),
                        P = s.a.createElement("a", {
                            href: m.h + "/p/" + bt + "?group_id=" + n
                        },
                        "" + yt);
                        break;
                    case "ARTICLE_CANCEL_APPLY_PUBLISH":
                        var Ct = c.id,
                        gt = c.title,
                        Ot = d.title,
                        wt = d.id;
                        k = s.a.createElement("span", null, s.a.createElement("a", {
                            href: m.h + "/" + wt + "?group_id=" + n
                        },
                        Ot), " ", "取消收录", " "),
                        P = s.a.createElement("a", {
                            href: m.h + "/p/" + Ct + "?group_id=" + n
                        },
                        "" + gt);
                        break;
                    case "ARTICLE_PUBLISH":
                        _ = i(l);
                        var _t = c.id,
                        kt = c.title;
                        if (d) {
                            var Pt = d.title,
                            Nt = d.id;
                            k = s.a.createElement("span", null, " ", "在", " ", s.a.createElement("a", {
                                href: m.h + "/" + Nt + "?group_id=" + n
                            },
                            Pt), " ", "中发布了", " ")
                        } else k = s.a.createElement("span", null, " 发布了 ");
                        P = s.a.createElement("a", {
                            href: m.h + "/p/" + _t + "?group_id=" + n
                        },
                        "" + kt);
                        break;
                    case "ARTICLE_INVITE_REVIEW":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 邀请你预览 ");
                        var Tt = c.title,
                        St = c.id;
                        P = s.a.createElement("a", {
                            href: m.h + "/p/" + St + "/preview?group_id=" + n
                        },
                        Tt);
                        break;
                    case "ARTREVIEW_COMMENT":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 评论了草稿 ");
                        var jt = c.title,
                        Rt = c.id;
                        P = s.a.createElement("a", {
                            href: m.h + "/p/" + Rt + "/preview?group_id=" + n
                        },
                        jt);
                        break;
                    case "MODIFY_AUTHOR_ROLE_TO_AUTHOR":
                    case "MODIFY_AUTHOR_ROLE_TO_CONTRIBUTOR":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 变更你为 ");
                        var It = c.title,
                        Mt = c.id;
                        P = s.a.createElement("a", {
                            href: m.h + "/" + Mt + "?group_id=" + n
                        },
                        It),
                        N = s.a.createElement("span", null, " 的作者");
                        break;
                    case "MODIFY_AUTHOR_ROLE_TO_EDITOR":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 变更你为 ");
                        var Lt = c.title,
                        Bt = c.id;
                        P = s.a.createElement("a", {
                            href: m.h + "/" + Bt + "?group_id=" + n
                        },
                        Lt),
                        N = s.a.createElement("span", null, " 的编辑");
                        break;
                    case "ROUNDTABLE_COMMENT":
                    case "ROUNDTABLE_COMMENT_REPLY":
                        _ = i(l),
                        k = s.a.createElement("span", null, " ", w ? "回复了你在": "评论了", " ");
                        var xt = c.name,
                        At = c.id;
                        P = this.renderCommentButton(xt, {
                            type: "roundtable",
                            href: b + "/roundtable/" + At + "?group_id=" + n + "&expand=1",
                            byComment: O,
                            target: c
                        }),
                        w && (N = s.a.createElement("span", null, " 下的评论"));
                        break;
                    case "RTCOMMENT_MENTION":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 在 ");
                        var qt = c.name,
                        Ft = c.id;
                        P = this.renderCommentButton(qt, {
                            type: "roundtable",
                            href: b + "/roundtable/" + Ft + "?group_id=" + n + "&expand=1",
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 提到了你");
                        break;
                    case "EBOOK_PUBLISH":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 的电子书 ");
                        var Dt = c.title,
                        Ut = c.id;
                        P = s.a.createElement("a", {
                            href: b + "/pub/book/" + Ut + "?group_id=" + n
                        },
                        Dt),
                        N = s.a.createElement("span", null, " 已在知乎书店上架");
                        break;
                    case "EBOOK_VOTE":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 赞了你的电子书 ");
                        var zt = c.title,
                        Wt = c.id;
                        P = s.a.createElement("a", {
                            href: b + "/pub/book/" + Wt + "?group_id=" + n
                        },
                        zt);
                        break;
                    case "EBOOK_COMMENT":
                    case "EBOOK_COMMENT_REPLY":
                        _ = i(l),
                        k = s.a.createElement("span", null, " ", w ? "回复了你在": "评论了电子书", " ");
                        var Kt = c.type,
                        Vt = c.title,
                        Ht = c.id;
                        P = this.renderCommentButton(Vt, {
                            type: Kt,
                            href: b + "/pub/book/" + Ht + "?group_id=" + n,
                            byComment: O,
                            target: c
                        }),
                        w && (N = s.a.createElement("span", null, " 下的评论"));
                        break;
                    case "EBOOK_COMMENT_MENTION":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 在 ");
                        var Yt = c.type,
                        Gt = c.title,
                        Qt = c.id;
                        P = this.renderCommentButton(Gt, {
                            type: Yt,
                            href: b + "/pub/book/" + Qt + "?group_id=" + n,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 中提到了你");
                        break;
                    case "EBOOK_COMMENT_LIKE":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 赞了你在 ");
                        var Zt = c.title,
                        Jt = c.id;
                        P = this.renderCommentButton(Zt, {
                            type: "ebook",
                            href: b + "/pub/book/" + Jt + "?group_id=" + n,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 下的评论");
                        break;
                    case "EBOOK_REVIEW_LIKE":
                        _ = i(l);
                        var Xt = c.id,
                        $t = c.book;
                        k = s.a.createElement("span", null, " 赞了你在 "),
                        P = s.a.createElement("a", {
                            href: b + "/pub/book/" + $t.id + "/reviews/" + Xt + "?group_id=" + n
                        },
                        $t.title),
                        N = s.a.createElement("span", null, " 下的点评 ");
                        break;
                    case "EBOOK_REVIEW_COMMENT":
                        _ = i(l);
                        var en = c.id,
                        tn = c.book;
                        k = s.a.createElement("span", null, " 评论了你在 "),
                        P = s.a.createElement("a", {
                            href: b + "/pub/book/" + tn.id + "/reviews/" + en + "?group_id=" + n
                        },
                        tn.title),
                        N = s.a.createElement("span", null, " 下的点评 ");
                        break;
                    case "EBOOK_REVIEW_COMMENT_LIKE":
                        _ = i(l);
                        var nn = c.id,
                        an = c.book;
                        k = s.a.createElement("span", null, " 赞了你在 "),
                        P = this.renderCommentButton(an.title, {
                            type: "book_review",
                            href: b + "/pub/book/" + an.id + "/reviews/" + nn,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 下的评论 ");
                        break;
                    case "EBOOK_REVIEW_COMMENT_REPLY":
                        _ = i(l);
                        var rn = c.id,
                        on = c.book;
                        k = s.a.createElement("span", null, " 回复了你在 "),
                        P = this.renderCommentButton(on.title, {
                            type: "book_review",
                            href: b + "/pub/book/" + on.id + "/reviews/" + rn,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 下的评论 ");
                        break;
                    case "PROMOTION_COMMENT":
                    case "PROMOTION_COMMENT_REPLY":
                        _ = i(l),
                        k = s.a.createElement("span", null, " ", w ? "回复了你在": "评论了", " ");
                        var ln = c.title,
                        sn = c.id;
                        P = this.renderCommentButton(ln, {
                            type: "promotion",
                            href: m.v + "/p/" + sn,
                            byComment: O,
                            target: c
                        }),
                        w && (N = s.a.createElement("span", null, " 下的评论"));
                        break;
                    case "PROMOTION_COMMENT_MENTION":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 在 ");
                        var cn = c.title,
                        un = c.id;
                        P = this.renderCommentButton(cn, {
                            type: "promotion",
                            href: m.v + "/p/" + un,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 提到了你");
                        break;
                    case "ROUNDTABLE_QUESTION":
                        var pn = c.name,
                        mn = c.id,
                        dn = E.id,
                        fn = E.title;
                        _ = s.a.createElement("span", null, s.a.createElement("a", {
                            href: b + "/roundtable/" + mn + "?group_id=" + n
                        },
                        pn), " 圆桌新增了" + (a > 1 ? "": "问题") + " "),
                        P = s.a.createElement("a", {
                            href: b + "/question/" + dn + "?group_id=" + n
                        },
                        fn),
                        a > 1 && (N = s.a.createElement("span", null, " 等" + Object(p.b)(a) + "个问题"));
                        break;
                    case "ROUNDTABLE_ANSWER":
                        var hn = c.name,
                        bn = c.id,
                        yn = f.id,
                        vn = f.question,
                        En = vn.id,
                        Cn = vn.title;
                        _ = s.a.createElement("span", null, s.a.createElement("a", {
                            href: b + "/roundtable/" + bn + "?group_id=" + n
                        },
                        hn), " 圆桌新增了 ", i(l), (l.length > 1 ? " 等人": "") + " 关于"),
                        P = s.a.createElement("a", {
                            href: b + "/question/" + En + "/answer/" + yn
                        },
                        Cn),
                        N = s.a.createElement("span", null, " 的回答");
                        break;
                    case "MEMBER_FOLLOW_FAVLIST":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 关注了 ");
                        var gn = c.title,
                        On = c.id;
                        P = s.a.createElement("a", {
                            href: b + "/collection/" + On + "?group_id=" + n
                        },
                        gn);
                        break;
                    case "QCOMMENT_LIKE":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 赞了你在 ");
                        var wn = c.title,
                        _n = c.id;
                        P = this.renderCommentButton(wn, {
                            type: "question",
                            href: b + "/question/" + _n,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 下的评论");
                        break;
                    case "RTCOMMENT_LIKE":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 赞了你在 ");
                        var kn = c.name,
                        Pn = c.id;
                        P = this.renderCommentButton(kn, {
                            type: "promotion",
                            href: m.v + "/p/" + Pn,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 下的评论");
                        break;
                    case "ACOMMENT_LIKE":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 赞了你在 ");
                        var Nn = c.question,
                        Tn = Nn.title,
                        Sn = Nn.id,
                        jn = c.id;
                        P = this.renderCommentButton(Tn, {
                            type: "answer",
                            href: b + "/question/" + Sn + "/answer/" + jn,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 回答下的评论");
                        break;
                    case "FCOMMENT_LIKE":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 赞了你在 ");
                        var Rn = c.id,
                        In = c.title;
                        P = this.renderCommentButton(In, {
                            type: "collection",
                            href: b + "/collection/" + Rn + "?group_id=" + n,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 下的评论");
                        break;
                    case "ARTCOMMENT_LIKE":
                    case "ARTCOMMENT_LIKE_COLUMN":
                    case "ARTCOMMENT_LIKE_COLLECTION":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 赞了你在 ");
                        var Mn = c.title,
                        Ln = c.id;
                        P = this.renderCommentButton(Mn, {
                            type: "article",
                            href: m.h + "/p/" + Ln,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 下的评论");
                        break;
                    case "ARTICLE_VOTE":
                    case "ARTVOTE_COLUMN":
                    case "ARTVOTE_COLLECTION":
                        _ = i(l);
                        var Bn = c.title,
                        xn = c.excerptTitle,
                        An = c.id,
                        qn = Bn || xn || "无标题";
                        if (d) {
                            var Fn = d.id,
                            Dn = d.title;
                            k = s.a.createElement("span", null, " ", "赞了", " ", s.a.createElement("a", {
                                href: m.h + "/" + Fn + "?group_id=" + n
                            },
                            "" + Dn), " ", "中的文章", " ")
                        } else k = s.a.createElement("span", null, " 赞了文章 ");
                        P = s.a.createElement("a", {
                            href: m.h + "/p/" + An + "?group_id=" + n
                        },
                        "" + qn);
                        break;
                    case "ARTICLE_TIPJAR_SUCCESS":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 赞赏了 ");
                        var Un = c.title,
                        zn = c.excerptTitle,
                        Wn = c.id,
                        Kn = Un || zn || "无标题";
                        P = s.a.createElement("a", {
                            href: m.h + "/p/" + Wn + "?group_id=" + n
                        },
                        "" + Kn);
                        break;
                    case "ANSWER_REWARD":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 赞赏了 ");
                        var Vn = c.question,
                        Hn = Vn.id,
                        Yn = Vn.title,
                        Gn = c.id;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + Hn + "/answer/" + Gn
                        },
                        "" + Yn);
                        break;
                    case "PROMOTION_COMMENT_LIKE":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 赞了你在 ");
                        var Qn = c.title,
                        Zn = c.id;
                        P = this.renderCommentButton(Qn, {
                            type: "article",
                            href: m.v + "/p/" + Zn,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 下的评论");
                        break;
                    case "VOTE_THANK":
                        k = s.a.createElement("span", null, "获得" + (y ? " " + Object(p.b)(y) + " 次赞同": "") + (y && v ? "/": "") + (v ? " " + Object(p.b)(v) + " 次感谢 ": " "));
                        var Jn = c.question,
                        Xn = Jn.title,
                        $n = Jn.id,
                        ea = c.id;
                        P = s.a.createElement("a", {
                            href: b + "/question/" + $n + "/answer/" + ea
                        },
                        Xn),
                        N = s.a.createElement("span", null, " 来自 ", i(l));
                        break;
                    case "TOPIC_INDEX_THANK":
                        var ta = c.id,
                        na = c.name;
                        _ = i(l),
                        k = s.a.createElement("span", null, " 感谢了你参与编辑的 "),
                        P = s.a.createElement("a", {
                            href: b + "/topic/" + ta
                        },
                        na),
                        N = s.a.createElement("span", null, " 话题索引 ");
                        break;
                    case "PIN_LIKE":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 赞了你的想法 ");
                        var aa = c.excerptTitle,
                        ra = c.id;
                        P = s.a.createElement("a", {
                            href: b + "/pin/" + ra,
                            target: "_blank"
                        },
                        aa);
                        break;
                    case "PINCOMMENT_REPLY":
                    case "PIN_COMMENT":
                        _ = i(l),
                        k = s.a.createElement("span", null, " ", w ? "回复了你在": "评论了", " ");
                        var oa = c.excerptTitle,
                        ia = c.id;
                        P = this.renderCommentButton(oa, {
                            type: "pin",
                            href: b + "/pin/" + ia,
                            byComment: O,
                            target: c
                        }),
                        w && (N = s.a.createElement("span", null, " 下的评论"));
                        break;
                    case "PINCOMMENT_MENTION":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 在 ");
                        var la = c.excerptTitle,
                        sa = c.id;
                        P = this.renderCommentButton(la, {
                            type: "pin",
                            href: b + "/pin/" + sa,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 中提到了你");
                        break;
                    case "PINCOMMENT_LIKE":
                        _ = i(l),
                        k = s.a.createElement("span", null, " 赞了你在 ");
                        var ca = c.excerptTitle,
                        ua = c.id;
                        P = this.renderCommentButton(ca, {
                            type: "pin",
                            href: b + "/pin/" + ua,
                            byComment: O,
                            target: c
                        }),
                        N = s.a.createElement("span", null, " 下的评论")
                    }
                    return s.a.createElement("div", {
                        className: u()("PushNotifications-item", {
                            "PushNotifications-newItem": !h
                        })
                    },
                    s.a.createElement("span", {
                        onClick: g
                    },
                    _), k, s.a.createElement("span", {
                        onClick: g
                    },
                    P), N)
                }
            }]),
            t
        } (l.Component);
        t.
    default = y
    },
    2153 : function(e, t, n) {
        "use strict";
        function a(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function o(e, t) {
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
        function i(e, t) {
            return e ? t ? !0 === t ? "": t: e: ""
        }
        function l(e) {
            for (var t, n = e.length,
            a = e.chars,
            r = e.maskChar,
            o = [], l = 0; l < n; l += 1) t = a[l],
            o.push(C.a.createElement("span", {
                className: _()("TPassBox", {
                    "TPassBox-mask": t && Boolean(r)
                }),
                key: l
            },
            i(t, r)));
            return C.a.createElement("span", {
                className: "TPassBoxes"
            },
            o)
        }
        function s(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function c(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function u(e, t) {
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
        function p(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function m(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function d(e, t) {
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
        function f() {
            this.payments = {},
            this.chosePaymentName = null,
            this.codeUrl = "",
            this.qrLoaded = !1,
            this.need = null,
            this.passcode = "",
            this.needSMS = !1,
            this.smsTimer = 0,
            this.isInProgress = !1,
            this.error = null
        }
        function h(e, t) {
            return H && e && e !== H && t(new Error("A pay-sdk from different source has been load")),
            H = e,
            window.zhihu && window.zhihu.pay ? window.zhihu.pay.ready(t) : (Y || (Y = Object(V.a)(e)), Y.then(function() {
                return window.zhihu.pay.ready(t)
            },
            function(e) {
                t(e),
                Y = null
            }))
        }
        function b(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function y(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function v(e, t) {
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
        var E = n(0),
        C = n.n(E),
        g = n(1),
        O = n.n(g),
        w = n(2),
        _ = n.n(w),
        k = n(3),
        P = n(29),
        N = n(329),
        T = n.n(N),
        S = n(86),
        j = n(10),
        R = (n(1714),
        function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } ()),
        I = {
            backspace: 8,
            tab: 9,
            enter: 13,
            0 : 48,
            9 : 57
        },
        M = function(e) {
            function t(e) {
                a(this, t);
                var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.onInputFocus = n.onInputFocus.bind(n),
                n.onInputChange = n.onInputChange.bind(n),
                n.onKeyDown = n.onKeyDown.bind(n),
                n
            }
            return o(t, e),
            R(t, [{
                key: "onInputFocus",
                value: function(e) {
                    e.target.value = e.target.value,
                    this.props.onFocus()
                }
            },
            {
                key: "onInputChange",
                value: function(e) {
                    var t = String(e.target.value);
                    if (t) {
                        t = t[t.length - 1];
                        var n = this.props.chars,
                        a = this.props.length;
                        n.length === a ? n = n.replace(/.$/, t) : n += t,
                        this.props.onChange(n),
                        n.length === a && this.props.onFinish(n)
                    }
                }
            },
            {
                key: "onKeyDown",
                value: function(e) {
                    var t = e.keyCode;
                    if (!e.metaKey && !e.ctrlKey && t !== I.tab && t !== I.enter) {
                        var n = this.props.chars;
                        t === I.backspace ? (n = n.slice(0, -1), this.props.onChange(n)) : (t < I[0] || t > I[9]) && (e.preventDefault(), this.props.onError(e))
                    }
                }
            },
            {
                key: "focus",
                value: function() {
                    this.input.focus()
                }
            },
            {
                key: "blur",
                value: function() {
                    this.input.blur()
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this,
                    t = this.props,
                    n = t.length,
                    a = t.chars,
                    r = t.maskChar,
                    o = t.autoFocus,
                    i = t.className,
                    s = t.children,
                    c = a.length === n ? n - 1 : a.length,
                    u = a[c] || "";
                    return C.a.createElement("label", {
                        className: _()("TPass", i)
                    },
                    C.a.createElement("span", {
                        className: "TPass-wrapper"
                    },
                    C.a.createElement(l, {
                        length: n,
                        chars: a,
                        maskChar: r
                    }), C.a.createElement("input", {
                        className: "TPass-input",
                        value: u,
                        style: {
                            left: 60 * c
                        },
                        onFocus: this.onInputFocus,
                        onChange: this.onInputChange,
                        onKeyDown: this.onKeyDown,
                        onPaste: function(e) {
                            return e.preventDefault()
                        },
                        type: "number",
                        min: "0",
                        max: "9",
                        pattern: "[0-9]*",
                        autoFocus: o,
                        ref: function(t) {
                            e.input = t
                        }
                    })), s)
                }
            }]),
            t
        } (C.a.Component);
        M.defaultProps = {
            length: 6,
            chars: "",
            maskChar: !1,
            autoFocus: !1,
            onFocus: function() {},
            onChange: function() {},
            onError: function() {},
            onFinish: function() {}
        },
        M.propTypes = {
            length: O.a.number,
            chars: O.a.string,
            maskChar: O.a.oneOfType([O.a.bool, O.a.string]),
            autoFocus: O.a.bool,
            onFocus: O.a.func,
            onChange: O.a.func,
            onError: O.a.func,
            onFinish: O.a.func,
            className: O.a.string,
            children: O.a.node
        };
        var L, B, x = M,
        A = (n(1715),
        function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } ()),
        q = (B = L = function(e) {
            function t() {
                return s(this, t),
                c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return u(t, e),
            A(t, [{
                key: "render",
                value: function() {
                    var e = this.props;
                    return C.a.createElement("div", {
                        className: _()("Spinner", e)
                    },
                    C.a.createElement("i", {
                        className: "Spinner-loading"
                    }))
                }
            }]),
            t
        } (E.Component), L.propTypes = {
            className: O.a.string
        },
        B),
        F = n(90),
        D = (n(1716), Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }),
        U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        },
        z = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        W = function(e) {
            function t(e) {
                p(this, t);
                var n = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.onPasscodeFocus = function() {
                    n.state.error && (n.setState({
                        error: null
                    }), 6 === n.state.passcode.length && n.setState({
                        passcode: ""
                    }))
                },
                n.onPasscodeInput = function(e) {
                    "object" === (void 0 === e ? "undefined": U(e)) && (e = e.target.value),
                    n.setState({
                        passcode: e
                    })
                },
                n.onPasscodeFinish = function(e) {
                    n.tpass.blur(),
                    n.payWithBalance(e)
                },
                n.onSendSMSCode = function() {
                    n.props.trade.resendSMSCode(function() {
                        n.startSMSTimer(),
                        n.smsInput.focus()
                    },
                    function(e) {
                        n.setState({
                            error: e
                        })
                    })
                },
                n.onQrLoad = function() {
                    n.setState({
                        qrLoaded: !0
                    })
                },
                n.onBalanceFormSubmit = function(e) {
                    e.preventDefault(),
                    n.payWithBalance(n.state.passcode)
                },
                n.setPayments = function(e) {
                    n.setState({
                        payments: e
                    })
                },
                n.confirmPayment = function() {
                    var e = n.state,
                    t = e.choseName,
                    a = e.payments,
                    r = n.props.onConfirmPayment,
                    o = t;
                    t || (o = a.balance && a.balance.enable ? "balance": "wechat"),
                    r(!o),
                    n.setState({
                        chosePaymentName: o
                    }),
                    n.props.trade["wechat" === o ? "initWechatPay": "initBalancePay"]()
                },
                n.pid = 0,
                n.smsTimer = null,
                n.state = new f,
                n.isInWechat = e.ua.Wechat,
                n
            }
            return d(t, e),
            z(t, [{
                key: "componentWillMount",
                value: function() {
                    var e = this.props.trade;
                    this.getPaymentsList(e),
                    this.initListeners(e)
                }
            },
            {
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this;
                    e.trade !== this.props.trade && (this.setState(new f), setTimeout(function() {
                        t.getPaymentsList(e.trade)
                    },
                    300), this.initListeners(e.trade))
                }
            },
            {
                key: "componentWillUnmount",
                value: function() {
                    window.clearInterval(this.smsTimer),
                    this.props.trade.dispose()
                }
            },
            {
                key: "getPaymentsList",
                value: function(e) {
                    var t = this;
                    if (e) {
                        var n = this.pid += 1;
                        e.getPaymentsList(function(e) {
                            t.pid === n && t.setPayments(e)
                        })
                    }
                }
            },
            {
                key: "initListeners",
                value: function(e) {
                    var t = this;
                    e && e.on("payInited",
                    function(e, n) {
                        t.setState(D({},
                        n))
                    }).on("paySuccess",
                    function() {
                        t.setState({
                            isInProgress: !1,
                            error: null
                        }),
                        t.props.onSuccess()
                    }).on("payCancel",
                    function() {
                        t.setState({
                            isInProgress: !1,
                            chosePaymentName: null
                        })
                    }).on("payFail",
                    function(e) {
                        var n = e;
                        "object" !== (void 0 === e ? "undefined": U(e)) || e instanceof Error || (n = e.message),
                        t.setState({
                            isInProgress: !1,
                            error: n
                        }),
                        t.props.onFail(e)
                    }).on("needSMS",
                    function(e) {
                        t.setState({
                            isInProgress: !1,
                            error: null,
                            needSMS: e.message,
                            passcode: ""
                        })
                    }).on("needWechatCode",
                    function() {
                        t.props.onError("needWechatCode")
                    }).on("error",
                    function(e, n) {
                        t.props.onError(e, n)
                    })
                }
            },
            {
                key: "startSMSTimer",
                value: function() {
                    var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 60;
                    window.clearInterval(this.smsTimer),
                    this.setState({
                        smsTimer: t
                    }),
                    this.smsTimer = window.setInterval(function() {
                        t -= 1,
                        t <= 0 ? (window.clearInterval(e.smsTimer), e.smsTimer = null, e.setState({
                            smsTimer: 0
                        })) : e.setState({
                            smsTimer: t
                        })
                    },
                    1e3)
                }
            },
            {
                key: "payWithBalance",
                value: function(e) {
                    return 6 !== e.length ? (this.setState({
                        error: "请输入 6 位支付密码"
                    }), !1) : (this.setState({
                        isInProgress: !0,
                        error: null
                    }), this.props.trade.payWithBalance(e))
                }
            },
            {
                key: "renderPaymentsList",
                value: function() {
                    var e = this,
                    t = this.state,
                    n = t.payments,
                    a = t.chosePaymentName,
                    r = t.choseName,
                    o = this.props.trade;
                    if (a) return null;
                    var i = n.balance && n.balance.amount,
                    l = o.info.total,
                    s = n.wechat && n.wechat.enable,
                    c = n.balance && n.balance.enable,
                    u = n.balance && !n.balance.enable,
                    p = i >= l ? "使用余额（剩余 " + (i / 100).toFixed(2) + "）": "微信支付",
                    m = i >= l ? "wallet": "wechatPayment",
                    d = "PaymentItem-" + (i >= l ? "wallet": "wechatPayment");
                    r && (p = "wechat" === r ? "微信支付": "使用余额（剩余 " + (i / 100).toFixed(2) + "）", m = "wechat" === r ? "wechatPayment": "wallet", d = "PaymentItem-" + ("wechat" === r ? "wechatPayment": "wallet"));
                    var f = C.a.createElement("div", null, C.a.createElement(j.a, {
                        name: m,
                        className: d
                    }), C.a.createElement(k.
                default, {
                        className: "Payment-Popover"
                    },
                    p), C.a.createElement(j.a, {
                        className: "Select-arrow",
                        name: "select"
                    }));
                    return C.a.createElement("div", {
                        className: "PaymentsList"
                    },
                    C.a.createElement("span", {
                        className: "Payment-Topline"
                    }), C.a.createElement("span", {
                        className: "PaymentWay"
                    },
                    "支付方式"), C.a.createElement(F.a, {
                        placeholder: f
                    },
                    C.a.createElement(S.
                default, {
                        plain: !0,
                        className: "Payment-select",
                        listClassName: "Payment-select-list",
                        targetClassName: "Popover-targetContainer-verification",
                        text: i >= l ? "使用余额（剩余 " + (i / 100).toFixed(2) + "）": "微信支付",
                        menuToggler: f,
                        onChange: function(t) {
                            "disabled" !== t && e.setState({
                                choseName: t
                            })
                        }
                    },
                    c && C.a.createElement(S.Option, {
                        value: "balance",
                        className: "PaymentItem"
                    },
                    C.a.createElement(j.a, {
                        name: "wallet",
                        className: "PaymentItem-wallet"
                    }), "使用余额（剩余 " + (i / 100).toFixed(2) + "）"), u && C.a.createElement(S.Option, {
                        value: "disabled",
                        className: "PaymentItem PaymentItem--disabled"
                    },
                    C.a.createElement(j.a, {
                        name: "wallet",
                        className: "PaymentItem-wallet"
                    }), "使用余额（剩余 " + (i / 100).toFixed(2) + "）"), s && C.a.createElement(S.Option, {
                        value: "wechat",
                        className: "PaymentItem"
                    },
                    C.a.createElement(j.a, {
                        name: "wechatPayment",
                        className: "PaymentItem-wechatPayment"
                    }), "微信支付"))), C.a.createElement("span", {
                        className: "Payment-Bottomline"
                    }), C.a.createElement(k.
                default, {
                        className: "Payment-CheckedButton",
                        onClick: this.confirmPayment
                    },
                    "确认支付"))
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this,
                    t = this.props,
                    n = t.className,
                    a = t.trade,
                    r = this.state,
                    o = r.payments,
                    i = r.chosePaymentName,
                    l = r.codeUrl,
                    s = r.needSMS,
                    c = r.isInProgress;
                    return a ? C.a.createElement("div", {
                        className: _()("Payment", n)
                    },
                    Object.keys(o).length ? this.renderPaymentsList() : C.a.createElement("div", {
                        className: "Payment-placeholder"
                    },
                    C.a.createElement(q, null)), "wechat" === i && C.a.createElement("div", {
                        className: "Payment-wechatPay"
                    },
                    C.a.createElement("div", {
                        className: "Payment-wechatPayTitle"
                    },
                    C.a.createElement("i", {
                        className: "icon icon-ic_wechatpay PaymentIconWechat"
                    }), "微信支付"), !this.isInWechat && C.a.createElement("div", null, "使用微信扫描二维码完成支付"), this.state.qrLoaded ? C.a.createElement("span", {
                        className: "Payment-qrWrapper"
                    },
                    C.a.createElement("img", {
                        role: "presentation",
                        src: "//www.zhihu.com/qrcode?url=" + l,
                        width: "150",
                        height: "150"
                    })) : C.a.createElement("div", {
                        className: "Payment-qrPlaceholder"
                    },
                    C.a.createElement(q, null), !this.isInWechat && C.a.createElement("div", null, "正在生成二维码"), l && C.a.createElement("img", {
                        role: "presentation",
                        src: "//www.zhihu.com/qrcode?url=" + l,
                        width: "1",
                        height: "1",
                        onLoad: this.onQrLoad
                    }))), "balance" === i && C.a.createElement("form", {
                        onSubmit: this.onBalanceFormSubmit,
                        className: "Payment-balancePay"
                    },
                    C.a.createElement("div", {
                        className: "Payment-balancePayTitle"
                    },
                    C.a.createElement("i", {
                        className: "icon icon-wallet PaymentIconWallet"
                    }), "余额支付"), !s && C.a.createElement("div", null, C.a.createElement("div", {
                        className: "Payment-description"
                    },
                    "请输入 6 位数知乎支付密码，用于支付验证。"), C.a.createElement(x, {
                        chars: this.state.passcode,
                        onFocus: this.onPasscodeFocus,
                        onChange: this.onPasscodeInput,
                        maskChar: !0,
                        onFinish: this.onPasscodeFinish,
                        className: _()("Payment-tpass", {
                            "Payment-errorInput": this.state.error,
                            "Payment-progressing": c
                        }),
                        autoFocus: !0,
                        ref: function(t) {
                            e.tpass = t
                        }
                    },
                    c && C.a.createElement(q, {
                        className: "Payment-balancePaySpinner"
                    }))), Boolean(s) && C.a.createElement("div", {
                        className: "Payment-balancePaySms"
                    },
                    C.a.createElement("div", {
                        className: "Payment-balancePaySmsText"
                    },
                    String(s)), C.a.createElement("input", {
                        onChange: this.onPasscodeInput,
                        value: this.state.passcode,
                        className: _()("Payment-sms", "SimpleInput", {
                            "Payment-errorInput": this.state.error
                        }),
                        type: "text",
                        pattern: "\\d{6}",
                        minLength: "6",
                        maxLength: "6",
                        title: "验证码应为 6 位数字",
                        placeholder: "输入 6 位数验证码",
                        required: !0,
                        autoFocus: !0,
                        ref: function(t) {
                            e.smsInput = t
                        }
                    }), this.state.smsTimer ? C.a.createElement("button", {
                        className: "Payment-sendSms",
                        type: "button",
                        disabled: !0
                    },
                    this.state.smsTimer, " 秒后可重发") : C.a.createElement("button", {
                        onClick: this.onSendSMSCode,
                        className: "Payment-sendSms",
                        type: "button"
                    },
                    "发送验证码")), C.a.createElement("div", {
                        className: "Payment-balancePayFooter"
                    },
                    C.a.createElement("p", {
                        className: "Payment-errorTip",
                        style: {
                            visibility: this.state.error ? "visible": "hidden"
                        }
                    },
                    this.state.error), Boolean(s) && C.a.createElement(k.
                default, {
                        color: "blue",
                        disabled: c,
                        className: "Payment-balancePayConfirmBtn",
                        type: "submit"
                    },
                    "确认")), !s && C.a.createElement("div", {
                        className: "Payment-balancePayForget"
                    },
                    "如果忘记密码请邮件联系", " ", C.a.createElement("email", {
                        className: "Payment-email"
                    },
                    "i@zhihu.com")))) : C.a.createElement("div", {
                        className: _()("Payment", n)
                    },
                    C.a.createElement("div", {
                        className: "Payment-placeholder Payment-placehoder--empty"
                    },
                    C.a.createElement(q, null)))
                }
            }]),
            t
        } (C.a.Component);
        W.propTypes = {
            trade: O.a.object,
            autoChooseSinglePayment: O.a.bool,
            onSuccess: O.a.func.isRequired,
            onFail: O.a.func,
            onError: O.a.func,
            onConfirmPayment: O.a.func
        },
        W.defaultProps = {
            trade: null,
            onSuccess: function() {},
            onFail: function() {},
            onError: function() {},
            autoChooseSinglePayment: !0,
            className: ""
        };
        var K = W,
        V = n(293),
        H = "",
        Y = null,
        G = n(13);
        n(1717);
        n.d(t, "TipjarDialog",
        function() {
            return ee
        });
        var Q, Z, J = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        X = [200, 500, 1e3, 5e3, 1e4, 2e4],
        $ = 100,
        ee = (Z = Q = function(e) {
            function t(e) {
                b(this, t);
                var n = y(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.onConfirmPayment = function(e) {
                    n.setState({
                        chosePaymentName: e
                    })
                },
                n.onPaySuccess = function() {
                    n.props.onPaySuccess(),
                    n.setState({
                        chosePaymentName: !0,
                        colseTijarDialogStatus: !0,
                        trade: void 0,
                        currentAmount: "",
                        customButton: !1
                    })
                },
                n.handleCustomAmount = function() {
                    n.state.trade && n.state.trade.dispose(),
                    n.setState({
                        showCustom: !0
                    })
                },
                n.handleCustomChange = function(e) {
                    var t = e.target.value;
                    Number(t) ? n.setState({
                        customAmount: Number(t)
                    }) : t.length || n.setState({
                        customAmount: ""
                    })
                },
                n.handleCustomKeyUp = function(e) {
                    13 === e.keyCode && n.handleSubmitCustom()
                },
                n.handleSubmitCustom = function() {
                    var e = n.state.customAmount * $;
                    e > 0 && e < 5e4 && (n.setState({
                        customButton: !0,
                        showCustom: !1,
                        colseTijarDialogStatus: !1
                    }), n.createTrade(e))
                },
                n.closeModal = function() {
                    n.state.trade && n.state.trade.dispose(),
                    n.setState(n.getDefaultState())
                },
                n.handleAmountButton = function(e) {
                    n.createTrade(e.currentTarget.dataset.amount),
                    n.setState({
                        colseTijarDialogStatus: !1,
                        customButton: !1,
                        showCustom: !1
                    })
                },
                n.createTrade = function(e) {
                    n.setState({
                        tradeLoading: !0,
                        currentAmount: e
                    });
                    var t = n.props.ua;
                    n.props.addReward(e, t.Wechat ? "wechat": "normal"),
                    n.setState({
                        tradeLoading: !1
                    })
                },
                n.colseTijarDialog = function() {
                    n.setState({
                        chosePaymentName: !0,
                        colseTijarDialogStatus: !0,
                        trade: void 0,
                        currentAmount: ""
                    }),
                    n.props.colseTijarDialog()
                },
                n.state = n.getDefaultState(),
                n
            }
            return v(t, e),
            J(t, [{
                key: "componentDidMount",
                value: function() {
                    this.showTip()
                }
            },
            {
                key: "componentDidUpdate",
                value: function() {
                    var e = this.props,
                    t = e.tradeNumber,
                    n = e.type,
                    a = this.state,
                    r = a.trade,
                    o = a.colseTijarDialogStatus,
                    i = "article" === n ? 11 : 17;
                    if (t && (!r || t !== r.tradeNo) && !o) {
                        var l = new window.zhihu.pay.Trade(t, i);
                        this.setState({
                            trade: l
                        })
                    }
                }
            },
            {
                key: "componentWillUnmount",
                value: function() {
                    this.props.TipjarRender && this.props.removeTradeNumber()
                }
            },
            {
                key: "getDefaultState",
                value: function() {
                    return {
                        showCustom: !1,
                        customAmount: "",
                        currentAmount: "",
                        showTipModal: !1,
                        customButton: !1,
                        chosePaymentName: !0,
                        colseTijarDialogStatus: !1
                    }
                }
            },
            {
                key: "showTip",
                value: function() {
                    var e = this;
                    h("https://pay.zhihu.com/api/js",
                    function() {
                        e.setState({
                            showTipModal: !0
                        })
                    })
                }
            },
            {
                key: "renderAmountCustom",
                value: function() {
                    var e = this.state,
                    t = e.showCustom,
                    n = e.customAmount,
                    a = e.currentAmount,
                    r = e.customButton;
                    return C.a.createElement("div", {
                        className: "Reward-TipjarDialog-amountCustom"
                    },
                    t ? C.a.createElement("div", {
                        className: "Reward-TipjarDialog-amountInput"
                    },
                    C.a.createElement("input", {
                        name: "",
                        type: "text",
                        className: "SimpleInput",
                        placeholder: "你想赞赏的金额（不超过 500）",
                        value: n,
                        onChange: this.handleCustomChange,
                        onKeyUp: this.handleCustomKeyUp,
                        ref: function(e) {
                            e && e.focus()
                        }
                    }), C.a.createElement(k.
                default, {
                        disabled: n <= 0 || n > 500,
                        color: "blue",
                        preset: "primary",
                        onClick: this.handleSubmitCustom
                    },
                    "确定"), C.a.createElement("div", {
                        className: "Reward-TipjarDialog-error",
                        style: {
                            display: n > 500 ? "block": "none"
                        }
                    },
                    "不能超过 500 元")) : C.a.createElement(k.
                default, {
                        preset: "plain",
                        className: r ? "TipjarDialog-customButton-cheked": "TipjarDialog-customButton",
                        onClick: this.handleCustomAmount
                    },
                    r ? "自定义金额： ￥ " + a / $: "自定义金额"))
                }
            },
            {
                key: "renderTipjarDialog",
                value: function() {
                    var e = this,
                    t = this.props,
                    n = t.author,
                    a = n.name,
                    r = n.avatarUrl,
                    o = n.isOrg,
                    i = n.urlToken,
                    l = n.id,
                    s = t.tagline,
                    c = this.state.currentAmount;
                    return C.a.createElement("div", {
                        className: "Reward-TipjarDialog"
                    },
                    C.a.createElement("div", {
                        className: "Reward-TipjarDialog-user"
                    },
                    C.a.createElement("a", {
                        href: "/" + (o ? "org": "people") + "/" + (i || l),
                        className: "Reward-UserAvatar"
                    },
                    C.a.createElement("img", {
                        src: r.replace("_is", "_l"),
                        className: "Reward-Avatar",
                        alt: "当前用户"
                    })), a), C.a.createElement("div", {
                        className: "Reward-TipjarDialog-tagLine"
                    },
                    s), C.a.createElement("div", {
                        className: "Reward-TipjarDialog-selectAmount"
                    },
                    C.a.createElement("div", {
                        className: "Reward-TipjarDialog-amountList"
                    },
                    X.map(function(t) {
                        return C.a.createElement(k.
                    default, {
                            key: t,
                            "data-amount": t,
                            onClick: e.handleAmountButton,
                            color: "red",
                            className: _()({
                                "Reward-Button-checked": Number(c) === t
                            })
                        },
                        C.a.createElement("b", null, Number(c) === t ? t / $ + " 元": "￥ " + t / $))
                    })), this.renderAmountCustom()))
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.ua,
                    n = e.TipjarRender,
                    a = e.isMobile,
                    r = this.state,
                    o = r.showCustom,
                    i = r.tradeLoading,
                    l = r.showTipModal,
                    s = r.trade,
                    c = r.chosePaymentName,
                    u = a ? T.a: P.
                default,
                    p = a ? "small": "default";
                    return C.a.createElement(u, {
                        overlay: !0,
                        size: p,
                        onClose: this.colseTijarDialog,
                        className: "Reward-TipjarDialogModal"
                    },
                    n && C.a.createElement("div", null, l && c && this.renderTipjarDialog(), (s || i) && !o && C.a.createElement(K, {
                        trade: s,
                        ua: t,
                        onSuccess: this.onPaySuccess,
                        onConfirmPayment: this.onConfirmPayment
                    })))
                }
            }]),
            t
        } (E.Component), Q.propTypes = {
            author: O.a.object,
            tagline: O.a.string,
            colseTijarDialog: O.a.func,
            addReward: O.a.func,
            tradeNumber: O.a.number,
            removeTradeNumber: O.a.func,
            onPaySuccess: O.a.func,
            isMobile: O.a.bool,
            type: O.a.string
        },
        Q.defaultProps = {
            tagline: G.i
        },
        Z)
    },
    745 : function(e, t, n) {
        "use strict";
        function a(e) {
            var t = e.inline,
            n = e.title,
            a = e.icon,
            r = e.button,
            o = e.avatar,
            i = e.className,
            s = e.width,
            u = e.height,
            p = e.bottom,
            m = e.right,
            d = e.style,
            f = void 0 === d ? {}: d;
            return s && (f.width = s + "px"),
            u && (f.height = u + "px"),
            p && (f.marginBottom = p + "px"),
            m && (f.marginRight = m + "px"),
            l.a.createElement("div", {
                className: c()("Holder", i, {
                    "Holder--inline": t,
                    "Holder--title": n,
                    "Holder--icon": a,
                    "Holder--button": r,
                    "Holder--avatar": o
                }),
                style: f
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(1),
        o = n.n(r),
        i = n(0),
        l = n.n(i),
        s = n(2),
        c = n.n(s),
        u = n(781);
        n.n(u);
        a.propTypes = {
            inline: o.a.bool,
            title: o.a.bool,
            icon: o.a.bool,
            button: o.a.bool,
            avatar: o.a.bool,
            width: o.a.string,
            height: o.a.string,
            bottom: o.a.string,
            right: o.a.string,
            style: o.a.object
        },
        t.
    default = a
    },
    746 : function(e, t, n) {
        "use strict";
        function a(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function o(e, t) {
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
        var i = n(0),
        l = n.n(i),
        s = n(2),
        c = n.n(s),
        u = n(3),
        p = n(48),
        m = n.n(p),
        d = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        f = function(e) {
            function t() {
                var e, n, o, i;
                a(this, t);
                for (var l = arguments.length,
                s = Array(l), c = 0; c < l; c++) s[c] = arguments[c];
                return n = o = r(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))),
                o.handleSubmit = function() {
                    var e = o.props,
                    t = e.onSubmit; (0, e.onCancel)(),
                    t()
                },
                i = n,
                r(o, i)
            }
            return o(t, e),
            d(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.title,
                    n = e.subtitle,
                    a = e.shown,
                    r = e.onCancel,
                    o = e.className,
                    i = e.isMobile,
                    s = l.a.createElement(u.
                default, {
                        key: "confirm",
                        preset: "primary",
                        color: "blue",
                        onClick: this.handleSubmit
                    },
                    "确认"),
                    d = l.a.createElement(u.
                default, {
                        key: "cancel",
                        onClick: r
                    },
                    "取消"),
                    f = i ? [d, s] : [s, d];
                    return l.a.createElement(m.a, {
                        wrapperClassName: "ConfirmModal-wrapper",
                        className: c()("ConfirmModal", o),
                        title: t,
                        size: i ? "small": "default",
                        subtitle: n,
                        onClose: r,
                        closeButton: !1,
                        buttonGroupOnly: !0
                    },
                    a && l.a.createElement(p.ModalButtonGroup, {
                        direction: i ? "horizontal": "vertical"
                    },
                    f))
                }
            }]),
            t
        } (i.Component);
        t.a = f
    },
    758 : function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function r(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        s = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        },
        c = n(1),
        u = a(c),
        p = n(0),
        m = a(p),
        d = n(12),
        f = n(6),
        h = a(f),
        b = n(259),
        y = a(b),
        v = function(e, t, n, a) {
            return e ? {
                card: {
                    content: e
                }
            }: s({},
            t && {
                card: t
            },
            n && {
                list: n
            },
            a && {
                attached_info_bytes: a
            })
        },
        E = function(e) {
            function t() {
                var e, n, a, i;
                r(this, t);
                for (var l = arguments.length,
                c = Array(l), u = 0; u < l; u++) c[u] = arguments[u];
                return n = a = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))),
                a.handleViewed = function() {
                    var e = a.props.extra;
                    setTimeout(function() {
                        h.
                    default.trackCardShow(a, {},
                        e)
                    })
                },
                a.trackEvent = function(e, t, n) {
                    h.
                default.trackEvent(e, t, s({},
                    a.props.extra, n))
                },
                i = n,
                o(a, i)
            }
            return i(t, e),
            l(t, [{
                key: "componentDidMount",
                value: function() {
                    this.setModule()
                }
            },
            {
                key: "componentDidUpdate",
                value: function() {
                    this.setModule()
                }
            },
            {
                key: "setModule",
                value: function() {
                    var e = this.props,
                    t = e.module,
                    n = e.index,
                    a = e.isAd,
                    r = e.moduleName,
                    o = e.content,
                    i = e.list,
                    l = e.card,
                    s = e.attachedInfoBytes;
                    if (t) {
                        var c = (0, d.findDOMNode)(this);
                        c && h.
                    default.setModule(c, {
                            module: t,
                            index: n,
                            is_ad: a,
                            module_name: r
                        },
                        v(o, l, i, s))
                    }
                }
            },
            {
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.id,
                    n = e.trackCardShow,
                    a = e.children,
                    r = "string" == typeof a.type ? a: (0, p.cloneElement)(a, {
                        trackEvent: this.trackEvent
                    });
                    return n ? m.
                default.createElement(y.
                default, {
                        id: t,
                        onViewed: this.handleViewed
                    },
                    r) : r
                }
            }]),
            t
        } (p.Component);
        E.propTypes = {
            id: u.
        default.string,
            module: u.
        default.string,
            index: u.
        default.string,
            isAd: u.
        default.bool,
            content: u.
        default.object,
            extra: u.
        default.object,
            trackCardShow: u.
        default.bool,
            attachedInfoBytes: u.
        default.string
        },
        E.defaultProps = {
            id: null,
            module: null,
            index: null,
            isAd: !1,
            content: null,
            extra: null,
            attachedInfoBytes: null,
            trackCardShow: !1
        },
        t.
    default = E
    },
    771 : function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function r(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = Object.assign ||
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        },
        s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        },
        c = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        u = n(1),
        p = a(u),
        m = n(0),
        d = a(m),
        f = n(33),
        h = a(f),
        b = n(805),
        y = n(48),
        v = a(y),
        E = n(249),
        C = n(41);
        n(807);
        var g = {
            zhihu: "注册或登录",
            wechat: "使用微信快速登录",
            weibo: "使用微博快速登录",
            qq: "使用 QQ 快速登录"
        },
        O = {
            qq: "qqconn",
            weibo: "sina",
            wechat: "wechat_mp"
        },
        w = function(e) {
            function t() {
                var e, n, a, i;
                r(this, t);
                for (var l = arguments.length,
                c = Array(l), u = 0; u < l; u++) c[u] = arguments[u];
                return n = a = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))),
                a.jumpToOAuthUrl = function(e) {
                    var t = a.props,
                    n = t.redirectUrl,
                    r = void 0 === n ? location.href: n,
                    o = t.edition,
                    i = t.utm,
                    l = (0, C.extractSource)(r, o, i),
                    s = l.utmSource,
                    c = l.refSource,
                    u = (0, h.
                default)(navigator.userAgent),
                    p = u.isZhihu;
                    if ("zhihu" === e) return void(location.href = p ? "zhihu://signin?next=" + r: "https://www.zhihu.com/signin?next=" + r + (s ? "?utm_source=" + s: ""));
                    location.href = "https://www.zhihu.com/oauth/redirect/login/" + O[e] + "?next=/oauth/account_callback&from=" + encodeURIComponent(r) + "&utm_source=" + s + "&ref_source=" + c
                },
                a.renderSignButtons = function() {
                    var e = a.props.buttons;
                    return "string" == typeof e ? a.renderSingleSignButton({
                        name: e
                    }) : e.map(function(e) {
                        return "string" == typeof e ? a.renderSingleSignButton({
                            name: e
                        }) : "object" === (void 0 === e ? "undefined": s(e)) ? a.renderSingleSignButton(e) : null
                    })
                },
                a.renderSingleSignButton = function(e) {
                    var t = e.name,
                    n = e.text,
                    r = e.fill,
                    o = e.color,
                    i = "#fff" === r || "#ffffff" === r;
                    return - 1 === Object.keys(g).indexOf(t) ? null: d.
                default.createElement("button", {
                        className: "SignInModal-button-" + t,
                        key: t,
                        style: {
                            backgroundColor: r,
                            borderColor: i ? "#0f88eb": r,
                            color: i ? "#0f88eb": o
                        },
                        onClick: function() {
                            a.jumpToOAuthUrl(t)
                        }
                    },
                    n || g[t])
                },
                i = n,
                o(a, i)
            }
            return i(t, e),
            c(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.onClose,
                    n = e.utm,
                    a = e.edition,
                    r = a.yidianzixun,
                    o = a.baidu,
                    i = e.urlScheme,
                    s = this.props.title || (o || !i ? "": "打开 App 或") + "登录后继续操作";
                    return r && (s = "打开知乎 App 继续操作"),
                    d.
                default.createElement(v.
                default, {
                        size: "small",
                        className: "SignInModal",
                        title: s,
                        onClose: t
                    },
                    d.
                default.createElement(b.ZaModule, {
                        module: "SignForm",
                        moduleName: s,
                        trackCardShow: !0
                    },
                    d.
                default.createElement("div", {
                        className: "SignInModal-content"
                    },
                    i && !o && d.
                default.createElement(E.BaseOpenInAppButton, l({
                        className: "SignInModal-openInAppButton",
                        href: i
                    },
                    n), "立即打开", r ? "": " App"), !r && this.renderSignButtons())))
                }
            }]),
            t
        } (m.Component);
        w.propTypes = {
            onClose: p.
        default.func.isRequired,
            urlScheme: p.
        default.string,
            redirectUrl: p.
        default.string,
            edition: p.
        default.object,
            buttons: p.
        default.oneOfType([p.
        default.array, p.
        default.string])
        },
        w.defaultProps = {
            buttons: ["zhihu"],
            edition: {},
            utm: {}
        },
        t.
    default = w
    },
    781 : function(e, t) {},
    789 : function(e, t, n) {
        "use strict";
        function a(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function o(e, t) {
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
            return m
        });
        var i = n(0),
        l = n.n(i),
        s = n(2),
        c = n.n(s),
        u = n(856),
        p = (n.n(u),
        function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } ()),
        m = function(e) {
            function t() {
                return a(this, t),
                r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return o(t, e),
            p(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.current,
                    n = e.max,
                    a = e.className,
                    r = e.name,
                    o = void 0 === r ? "字数": r,
                    i = n - t;
                    return t > n ? l.a.createElement("span", {
                        className: c()(a, "MaxLength", "is-error")
                    },
                    o, "已超过 ", -i, " 个字") : l.a.createElement("span", {
                        className: c()(a, "MaxLength")
                    },
                    i <= 10 && "还可以输入 " + i + " 个字")
                }
            }]),
            t
        } (i.Component)
    },
    790 : function(e, t, n) {
        "use strict";
        var a = n(0),
        r = n.n(a),
        o = n(2),
        i = n.n(o),
        l = n(808);
        n.n(l);
        t.a = function(e) {
            var t = e.header,
            n = e.options,
            a = e.className,
            o = e.onRef,
            l = e.showOptions,
            s = void 0 === l || l;
            return r.a.createElement("div", {
                className: i()("Topbar", a, !1),
                ref: o
            },
            r.a.createElement("div", {
                className: "Topbar-title"
            },
            t), s && r.a.createElement("div", {
                className: "Topbar-options"
            },
            n))
        }
    },
    805 : function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ZaModule = t.zaModule = void 0;
        var r = n(758),
        o = a(r),
        i = n(806),
        l = a(i);
        t.zaModule = l.
    default,
        t.ZaModule = o.
    default
    },
    806 : function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function r(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
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
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.zaModule = void 0;
        var l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        s = n(0),
        c = a(s),
        u = n(758),
        p = a(u);
        t.zaModule = function(e) {
            return function(t) {
                var n, a;
                return a = n = function(n) {
                    function a() {
                        return r(this, a),
                        o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments))
                    }
                    return i(a, n),
                    l(a, [{
                        key: "render",
                        value: function() {
                            var n = "function" == typeof e ? e(this.props) : e;
                            return c.
                        default.createElement(p.
                        default, n, c.
                        default.createElement(t, this.props))
                        }
                    }]),
                    a
                } (s.Component),
                n.displayName = "ZaModule(" + (t.displayName || t.name || "Component") + ")",
                n.propTypes = t.propTypes,
                n.defaultProps = t.defaultProps,
                a
            }
        }
    },
    807 : function(e, t) {},
    808 : function(e, t) {},
    830 : function(e, t, n) {
        "use strict";
        function a(e) {
            if (Array.isArray(e)) {
                for (var t = 0,
                n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        function r(e, t) {
            var n = {};
            for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
            return n
        }
        function o(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return ! t || "object" != typeof t && "function" != typeof t ? e: t
        }
        function l(e, t) {
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
        function s() {
            return s = Object.assign ||
            function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            },
            s.apply(this, arguments)
        }
        function c(e) {
            var t = e.className,
            n = e.meta,
            o = e.children,
            i = r(e, ["className", "meta", "children"]),
            l = m.Children.only(o),
            c = l.type.displayName,
            u = {
                className: h()("Tabs-link", l.props.className)
            };
            return void 0 !== n && (u.children = [].concat(a(m.Children.toArray(l.props.children)), [d.a.createElement("span", {
                key: "meta",
                className: "Tabs-meta"
            },
            n)])),
            "Link" !== c && "IndexLink" !== c || (u.activeClassName = "is-active"),
            d.a.createElement("li", s({
                role: "tab",
                className: h()("Tabs-item", t, {
                    "Tabs-item--noMeta": void 0 === n
                })
            },
            i), Object(m.cloneElement)(l, u))
        }
        n.d(t, "a",
        function() {
            return c
        });
        var u = n(1),
        p = n.n(u),
        m = n(0),
        d = n.n(m),
        f = n(2),
        h = n.n(f),
        b = n(857),
        y = (n.n(b),
        function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } ()),
        v = function(e) {
            function t() {
                return o(this, t),
                i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return l(t, e),
            y(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.className,
                    n = e.onRef,
                    a = r(e, ["className", "onRef"]);
                    return d.a.createElement("ul", s({
                        ref: n,
                        role: "tablist",
                        className: h()("Tabs", t)
                    },
                    a))
                }
            }]),
            t
        } (m.Component);
        c.propTypes = {
            meta: p.a.node
        },
        t.b = v
    },
    856 : function(e, t) {},
    857 : function(e, t) {},
    959 : function(e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        var r = n(291),
        o = a(r),
        i = n(292),
        l = a(i);
        e.exports = {
            TransitionGroup: l.
        default,
            CSSTransitionGroup: o.
        default
        }
    },
    960 : function(e, t, n) {
        "use strict";
        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            return void 0 === t && e && (t = e, e = 0),
            Array(Math.floor((t - e) / n) + 1).fill().map(function(t, a) {
                return a * n + e
            })
        }
        function r(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function o(e, t) {
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
        function l(e, t) {
            if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        function s(e, t) {
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
        var u = n(1),
        p = n.n(u),
        m = n(0),
        d = n.n(m),
        f = n(2),
        h = n.n(f),
        b = n(3),
        y = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        v = function(e) {
            function t() {
                var e, n, a, i;
                r(this, t);
                for (var l = arguments.length,
                s = Array(l), c = 0; c < l; c++) s[c] = arguments[c];
                return n = a = o(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))),
                a.handleClick = function() {
                    var e = a.props; (0, e.clickCallback)(e.page)
                },
                i = n,
                o(a, i)
            }
            return i(t, e),
            y(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.text,
                    n = e.isCurrent,
                    a = e.className;
                    return d.a.createElement(b.
                default, {
                        preset: "plain",
                        className: h()("PaginationButton", {
                            "PaginationButton--current": n
                        },
                        a),
                        onClick: this.handleClick,
                        disabled: n
                    },
                    t)
                }
            }]),
            t
        } (m.Component);
        n(961);
        n.d(t, "a",
        function() {
            return O
        });
        var E, C, g = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        } (),
        O = (C = E = function(e) {
            function t() {
                return l(this, t),
                s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return c(t, e),
            g(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                    t = e.current,
                    n = e.total,
                    a = e.clickCallback,
                    r = e.className,
                    o = this.constructor.getPagerList(t, n);
                    return d.a.createElement("div", {
                        className: h()("Pagination", r)
                    },
                    1 !== t && 1 !== n && d.a.createElement(v, {
                        className: "PaginationButton-prev",
                        clickCallback: a,
                        text: "上一页",
                        page: t - 1
                    }), o.map(function(e, n) {
                        return Number(e) ? d.a.createElement(v, {
                            clickCallback: a,
                            text: e,
                            page: e,
                            key: n,
                            isCurrent: t === e
                        }) : d.a.createElement("span", {
                            key: n,
                            className: "PaginationButton PaginationButton--fake"
                        },
                        e)
                    }), t !== n && d.a.createElement(v, {
                        className: "PaginationButton-next",
                        clickCallback: a,
                        text: "下一页",
                        page: t + 1
                    }))
                }
            }], [{
                key: "getPagerList",
                value: function(e, t) {
                    return t < 6 ? a(1, t) : e >= t - 2 ? [1, "..."].concat(a(t - 3, t)) : e <= 3 ? a(1, 4).concat(["...", t]) : [1, "..."].concat(a(e - 1, e + 1)).concat(["...", t])
                }
            }]),
            t
        } (m.Component), E.propTypes = {
            current: p.a.number,
            total: p.a.number,
            clickCallback: p.a.func
        },
        E.defaultProps = {
            current: 1,
            total: 1,
            clickCallback: function() {}
        },
        C)
    },
    961 : function(e, t) {}
});