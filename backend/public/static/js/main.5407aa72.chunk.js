(this.webpackJsonpdelicious = this.webpackJsonpdelicious || []).push([
    [0], {
        1035: function(e, t, n) {},
        1036: function(e, t, n) {
            "use strict";
            n.r(t);
            var c = n(2),
                A = n(0),
                r = n.n(A),
                a = n(14),
                s = n.n(a),
                i = n(43),
                o = n(25),
                l = n(31),
                u = n(48),
                j = n(53),
                d = n(20);
            n(412);
            var p = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA+UlEQVQ4jZXSsUoDQRSF4Y8UIhKChYWVlU9gYSU+QJ5ArESsrXwLK7FKISKpgkVKESsR8QFS2AVErBZBFAsRicXM4jLsTtwDwxR37j9n5lz+tIERnlHgHgfo+If28Y1XDDHABDNcYTHXvBmbb7Cc1A4j5CQHGEfLaXOpM3xhpQlQ4DxzwXZ00a8rdoT3vWUA73HvNgGmwj80qaxNmw4cRYu7NbVVIdaJTJwLeBCSOBbmYR17eIrwQcYh6An5/8SGcj0KHzzDi5BIdibWsBNv36rYLirQ63mQOg0TZ60hXdwlkLkjnqpXA7loAyid3FYAH20BsIRLfOL0F372Qkr1l1aRAAAAAElFTkSuQmCC";

            function h(e) {
                var t = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                            n = Object(A.useState)(e),
                            c = Object(l.a)(n, 2),
                            r = c[0],
                            a = c[1];
                        return Object(A.useEffect)((function() { t(r) }), [r]), [r, function(e) {
                            var t = "number" === e.target.type ? +e.target.value : e.target.value;
                            a(Object(d.a)(Object(d.a)({}, r), {}, Object(j.a)({}, e.target.name, t)))
                        }]
                    }({ term: "" }, e.onSetFilter),
                    n = Object(l.a)(t, 2),
                    r = n[0],
                    a = n[1],
                    s = r.term;
                return Object(c.jsx)("form", { className: "node-filter", children: Object(c.jsxs)("form", { className: "flex", onSubmit: a, children: [Object(c.jsx)("input", { name: "term", placeholder: "Free Search", value: s, type: "text", onChange: a }), Object(c.jsx)("img", { onClick: a, src: p, alt: "" })] }) })
            }
            n(413);

            function b(e) {
                var t = e.node,
                    n = e.onSelectBitnode;
                return t && Object(c.jsxs)("li", { className: "node-preview flex column align-center hover-pointer", onClick: function(e) { e.stopPropagation(), n(t._id) }, children: [Object(c.jsx)("div", { className: "node-img-container", children: Object(c.jsx)("img", { src: t.imgUrl, alt: "" }) }), Object(c.jsxs)("div", { className: "contant flex column", children: [Object(c.jsx)("div", { className: "title-container", children: Object(c.jsx)("h3", { children: t.title }) }), "Author:", Object(c.jsx)("h3", { children: t.author.name })] })] })
            }
            n(414);

            function m(e) {
                var t = e.nodes,
                    n = e.onSelectBitnode;
                return console.log(t), t.length ? Object(c.jsx)("ul", { className: "node-list clean-list flex wrap auto-center ", children: t.map((function(e) { return Object(c.jsx)(b, { onSelectBitnode: n, node: e }, e._id) })) }) : Object(c.jsx)("div", { className: "node-list-default", children: "There is no nodes" })
            }
            var x = n(18),
                f = n.n(x),
                O = n(24);
            var g = {
                    store: function(e, t) { localStorage[e] = JSON.stringify(t) },
                    load: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = localStorage[e] || t;
                        return JSON.parse(n)
                    },
                    remove: function(e) { localStorage.removeItem(e) }
                },
                v = n(385),
                I = "/api/",
                w = n.n(v).a.create({ withCredentials: !0 }),
                E = function(e, t) { return Q(e, "GET", t) },
                y = function(e, t) { return Q(e, "POST", t) },
                R = function(e, t) { return Q(e, "PUT", t) },
                C = function(e, t) { return Q(e, "DELETE", t) };

            function Q(e) { return N.apply(this, arguments) }

            function N() {
                return (N = Object(O.a)(f.a.mark((function e(t) {
                    var n, c, A, r = arguments;
                    return f.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = r.length > 1 && void 0 !== r[1] ? r[1] : "get", c = r.length > 2 && void 0 !== r[2] ? r[2] : null, console.log(t), console.log(n), console.log(c), e.prev = 5, e.next = 8, w({ url: "".concat(I).concat(t), method: n, data: c });
                            case 8:
                                return A = e.sent, console.log(A.data), e.abrupt("return", A.data);
                            case 13:
                                throw e.prev = 13, e.t0 = e.catch(5), console.log("bad"), 401 === e.t0.response.status && console.log("err 401", e.t0), console.log("Had issues ".concat(n, "ing to server"), e.t0), e.t0;
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [5, 13]
                    ])
                })))).apply(this, arguments)
            }
            var S = { query: function() { return k.apply(this, arguments) }, getById: function(e) { return E("node/".concat(e)) }, remove: function(e) { return C("node/".concat(e)) }, save: function(e) { return e._id ? function(e) { return e.updatedAt = Date.now(), R("node/".concat(e._id), e) }(e) : function(e) { return e.createdAt = Date.now(), y("node", e) }(e) }, getEmptyBitnode: function() { return { title: "", description: "", ingredients: [], time: 0, calories: 0, servings: 0, tags: [], author: { name: "" }, imgUrl: "https://getquicktech.com.au/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png" } } };
            g.load("RECIPES") && g.load("RECIPES");

            function k() {
                return (k = Object(O.a)(f.a.mark((function e() {
                    var t, n, c = arguments;
                    return f.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = c.length > 0 && void 0 !== c[0] ? c[0] : null, e.next = 3, E("node");
                            case 3:
                                return n = e.sent, t && t.term && (n = B(t.term, n)), e.abrupt("return", Promise.resolve(n));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function B(e, t) { return e = e.toLocaleLowerCase(), t.filter((function(t) { return t.title.toLocaleLowerCase().includes(e) || t.description.toLocaleLowerCase().includes(e) })) }

            function P(e) {
                return function() {
                    var t = Object(O.a)(f.a.mark((function t(n) {
                        var c;
                        return f.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, S.query(e);
                                case 2:
                                    c = t.sent, console.log(c), n({ type: "SET_RECIPES", nodes: c });
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) { return t.apply(this, arguments) }
                }()
            }

            function D(e) {
                return function() {
                    var t = Object(O.a)(f.a.mark((function t(n) {
                        var c;
                        return f.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, S.save(e);
                                case 3:
                                    c = t.sent, n({ type: "UPDATE_RECIPE", node: c }), t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7, t.t0 = t.catch(0), console.log("ERROR!");
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })));
                    return function(e) { return t.apply(this, arguments) }
                }()
            }
            var H = n(390);
            n(433);

            function F(e) {
                var t = Object(A.useState)(null),
                    n = Object(l.a)(t, 2),
                    r = n[0],
                    a = n[1],
                    s = Object(u.d)((function(e) { return e.nodeReducer.nodes }));
                if (console.log(e.location.search), e.location.search) {
                    var o = e.location.search.substring(1).split("="),
                        j = o[0],
                        d = o[1];
                    if ("term" === j) {
                        var p = d.toLocaleLowerCase();
                        s = s.filter((function(e) { return e.title.toLocaleLowerCase().includes(p) || e.description.toLocaleLowerCase().includes(p) }))
                    } else s = s.filter((function(e) { return console.log(e[j]), "author" === j ? e[j].name === d.replace("%20", " ") : e[j].includes(d) }))
                }
                var b = Object(u.c)();
                Object(A.useEffect)((function() { console.log("effect"), b(P(r)) }), [r]);
                return Object(c.jsxs)("div", { className: "node-app flex column align-center", children: [Object(c.jsx)(i.b, { className: "add-btn btn", to: "/node/edit", children: Object(c.jsx)("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPRSURBVFhH3VhLTxNRFJ5El/ozfCQm6j9wo33QUlcmEI00JuJSRR4LTNwI7UwLCxagCZjgkoWPqGGhPDSQzkzZKIkgJIgSNHEjdKYYQsl4vnobZDwwt3QgyJd8Sds595zTufe8rnJgcUEbOxtWM3ei6exgNG3MhzQ9H0xmCiA+R9PmZzyj7w0hLXNaLNtdxNSxo+Gk3hxJmwuxzqxV/3j2192XPxx1JOd0ZVad7myhSHzGb6307AbJxDqyFtZUqXrTuXsjR4Q6/0BKD4eSemNYM6z4o+l8+5sl58HEujR7iG1DS068d8oOa7oV1DIN0CnUV4ZA2/jJKs2Yvfxw0kq/s1kHymHqre3U9kxakZQxHVTHTggzO0OVpl8k56zmZ9/WOWOVEDrDqm4H1UxMmCsPoYR+LZI28snhHGvADyaGl51IylwJJ/Srwqwcim8uZeT92FIvYsthS/pNijNntQ8tswp3g7BFTlqeZxKRFU2ZMy3Pv/t+5rxIZ7JAgTO1bXQjlSBaOQVedIOT8WJtzwcrpOq3hTubgQRKW5vb6blzg5PxIs5jOGXk4ItwawMh1WhBEuYWytANTkaG8d5pm0plo3BrA7T/C8j23CIZusHJyLCNqhT58kW49QeBhH4m1jFhoSRxi2ToBicjQ/iA2h1MGqeEe4qCrgRFnVsgSzc4GVle759doYC9JdxTlGhndhBdCScsSzc4GVmiC6pOm6+Ee+Qg9W7J0cpKmhucjCxRXqk9mxPuYYv1fJe+ygqX6Dc4GyWin0RbJtxTFHTB3WaBFS7Rb3A2Suw21xxK2GvCvf/AwX2/xdST7e8gQZpBaHPCsnSDk5Fl6wtXmtmPiZp8uincK5U6094vpa66I2tvKnUAFeivKNTcIhm6wcnI8P7rnw4Vjnnh1gbQ4sT7pm1ukQzd4GRkWEezc4COnHBrA2gSEdpoGrmFXnSDk/GiNmpRetmiYQUw8WOo5hZ70Q1OZjvi7NX0vKfB6a/gcAMDC+XET81PF/d8aGp6slgcmi4NDBwS7vDA6IeJf6/HTtgMtxvHhRvbA0M0humdnsdyWPbgXkIoadThWmI33yRmoIhmroQSmSvCbHkIqONRGkXtJp/PJAKCdBZwgxFM6BFhbmc4r2aO4fBiqE6NVr7lGm1pDemKpoyP0C3MVAZENyZ+DNXxvikbFaecsghZVAgkYehAKoFOod4/IIHiGhelCKMhijq6ILRHxStganpBfMZveFbfP7NSvAKmlg5XK1smYb+BYo7REG1RNJ2dK15Gikt0+hM2/Yk5PIPMP4X/4EBRfgMZf0kSNetpswAAAABJRU5ErkJggg==" }) }), Object(c.jsxs)("section", { className: "filter text-center flex column auto-center", children: [Object(c.jsx)("h1", { children: "Bitnodes" }), Object(c.jsx)(h, { onSetFilter: function(e) { a(e) } }), Object(c.jsxs)("section", { className: "nav-btns flex auto-center", children: [Object(c.jsx)("button", { onClick: function() { return e.history.push("/node?tags=Quick") }, children: "Quick" }), Object(c.jsx)("button", { onClick: function() { return e.history.push("/node?tags=Vegetarian") }, children: "Vegeterian" }), Object(c.jsx)("button", { onClick: function() { return e.history.push("/node?tags=Dinner") }, children: "Dinner" }), Object(c.jsx)("button", { onClick: function() { return e.history.push("/node") }, children: "Show All" })] }), Object(c.jsx)(H.a, { className: "nav-btns-mobile", onChange: function(t) { "Show All" === t.value ? e.history.push("/node") : e.history.push("/node?tags=".concat(t.value)) }, options: [{ value: "Quick", label: "Quick" }, { value: "Vegetarian", label: "Vegetarian" }, { value: "Dinner", label: "Dinner" }, { value: "Show All", label: "Show All" }] })] }), s && Object(c.jsx)(m, { onSelectBitnode: function(t) { e.history.push("/node/".concat(t)) }, nodes: s })] })
            }
            var T = n(109),
                M = n(110),
                L = n(114),
                W = n(113),
                V = {
                    on: function(e, t) {
                        var n = function(e) { var n = e.detail; return t(n) };
                        return window.addEventListener(e, n),
                            function() { return window.removeEventListener(e, n) }
                    },
                    emit: function(e, t) { window.dispatchEvent(new CustomEvent(e, { detail: t })) }
                };
            n(453);
            var z, X = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAVISURBVFiFzZhdbFRFFMf/M3O3u3u3e9ttSwptMRTWGuQzYHgg0YBJhQKlkNgY48cjJJIADzzIh7gGLJpgNDFo7JuJPChRKB+lYLDGmD4ZI90UoWwbYvqN3e977y57Z8YHuusCW1ra7sL/bc7eM/e3Z87MnHuAZ1xkpo47jrQvERyv2mxskwRWci6qCJEUAKQkgjE6RAm5nkqlrlhC/nLpk239eQds9nUWJ7mxixFlDwUqy8rLiKe0VHWqTtgddpCJ6SQkkmYSRsJEKBTWg+NBSMgRYclT5j3aevXkJn1OATf4OhUtZeylIL7SMg+tqa52lZS4n+D/SUTCUQwODcZDoYgAxNGwop761bfRmjXgzoOX6mBjF1xOdUHdC8+7nU7nNKFyyzQN3Lp1O6brxpAFq/Hi8cbbMwZsPNTewCj5fnFtrXP+gvkKmXHGPigpgaGhQevOnX9MKXhzW8u2K08MuOPwpXcoZV+vWLHcVewunhuyhxSLxeD39xgScve5Yw3fTRuw6fDlnYyy06tWr3Cq6uyWdCrphoHuv7oTkPKNn443nJ8ScOeRi0sl2B+rVi5Xi93uvMKlFY1G4fff0Anna86e2Nqb/RvNHmzwdSqSKOdqa2vthYIDAE3TsGjRcw4orK25+Qc2KaAnldhb7FKrq6rmMxRYVVVVTFWdC606955se2aJXztwxaXa+fCatavdTqdaaD4AgK4buH69O2KxVNUFX6MBZEXQ4bR2e8o89GnBAYDLpUIr0RhLsV1pWwZQIcq+6poa13QnW7fYPtd8AICFNTXFhNF96TEFgO2HLq+klJRp09wY670OvFLnyAugpmlghFU0HWx/MQNIidxcXlE+rZtivdeB9d78RA8ACAHKyz2MUrn5f0DKNmqaNmVI8g2XllaiOalStBHI5CBZqk6xOQoFBwCqqkJKsQwAFADgUlQ47EWTOqxbbM8Jd2BzyaxATnZEctrtdjukEPMygBDCwZTcZ3MhI5cWYwxCSgcwscSSSEDm3iEKzWkumCgAEEKSnOcubn/rTaArkCwoFOcclNAEMLHEjLKxRPLeomKbLadDVyABhT56OE+WQ7NVMpkEYWQMyEQQvYZpPNapkJE0DAMAuQlMAFrc6oiEI+ZUjl2BwkCGIxFDcKsDSG8SQa8Fg0E+Hed8Q0oJhMbDQnJcywCeb2noFlyMR6PRaU2ST8hYNAohxd22E1tuZAABgAvROjg0/PhEzFJXIJEPPgwMDRmSi9b0OANYZNlOjY+PTyTo05GuGwgGQzJhk1+lbRnAM5/WRyDJsb5AX+zp4AGBQF9MCnx02bclk2sP3BOVd+d9FteN0dGRMVFouOHhEaEb+nC0yPF5tv0BwNbWl1JSpLYH+voS8Xi8YHDRWAz9/XdMpHjjw/2aR27as8e3/c25fMvv74knEvnZCNkyzQR6/D26lOLNh7+JASBnCdP7++mbdS+/PTI6NlrvKfXYioomL8Vmo3g8jm6/3+CWeK+tZcuZXM88tshvOtL+OgH51uv1Oior581pXTM6MiYC/f0JCP7uuY+3/jjZc1N+hTR+0LFMgTzvdrsrvd4lrtm23wzDQF+gT4/G9WFpiab0gTxjQOB+S6SEm/uJJB96PKW0pqZa1TTticAi0RgGBgb0cCgsCXA0pDi+nJMGZraafZ3FKcvcTSnbzxRWUuYps5do7qJ0C1hh98s1i6eQNJMwTRORaOzeeDCY5BYPc2F9kUgq38x5CziXdrx/ca1krN5mY/VSSC8XokIIoQKQlFKTUvovpSSQsqyrQvCfL7Q0/jnTdz3T+g9dK0F6xOWAegAAAABJRU5ErkJggg==",
                Z = n(189),
                J = n(242),
                q = n.n(J),
                U = n(1079),
                G = (n(483), { setup: function() { console.log("setUp"), z = q()("/") }, terminate: function() { console.log("terminate"), z = null }, on: function(e, t) { console.log("on"), z.on(e, t) }, off: function(e, t) { console.log("Off"), z.off(e, t) }, emit: function(e, t) { console.log("emit", t), z.emit(e, t) } });

            function Y(e) {
                var t = e.nodeId,
                    n = Object(A.useState)({ message: "", name: "" }),
                    r = Object(l.a)(n, 2),
                    a = r[0],
                    s = r[1],
                    i = Object(A.useState)("MyTopic"),
                    o = Object(l.a)(i, 2),
                    u = (o[0], o[1], Object(A.useState)("")),
                    p = Object(l.a)(u, 2),
                    h = p[0],
                    b = p[1],
                    m = Object(A.useState)([]),
                    x = Object(l.a)(m, 2),
                    f = x[0],
                    O = x[1];
                Object(A.useEffect)((function() { G.emit("chat topic", t) }), []), Object(A.useEffect)((function() {
                    G.on("chat newMsg", (function(e) {
                        var t = e.name,
                            n = e.message;
                        O([{ name: t, message: n }].concat(Object(Z.a)(f))), console.log("chat", f)
                    }))
                }));
                var g = function(e) { s(Object(d.a)(Object(d.a)({}, a), {}, Object(j.a)({}, e.target.name, e.target.value))) };
                return Object(c.jsxs)("div", {
                    className: "chat-app mb15",
                    children: [Object(c.jsx)("h2", { className: "title-chat text-center", children: "Live Chat:" }), Object(c.jsxs)("div", {
                        className: "content flex column align-center",
                        children: [Object(c.jsxs)("div", {
                            className: "main-chat",
                            children: [0 === f.length && Object(c.jsx)("p", { className: "text-center", children: "Here you can share and just talk." }), f.length > 0 && f.map((function(e, t) {
                                var n = e.name,
                                    A = e.message;
                                return Object(c.jsx)("div", { className: "msg", children: Object(c.jsxs)("h4", { children: [n, ": ", Object(c.jsx)("span", { children: A })] }) }, t)
                            }))]
                        }), Object(c.jsxs)("form", {
                            className: "flex column auto-center",
                            onSubmit: function(e) {
                                e.preventDefault();
                                var t = a.name,
                                    n = a.message;
                                if (console.log({ name: t, message: n }), "" === t && (t = "Guest"), "" === n) return b("Invalid massage"), void setTimeout((function() { b("") }), 3e3);
                                G.emit("chat newMsg", { name: t, message: n }), s({ message: "", name: t })
                            },
                            children: [Object(c.jsx)("div", { className: "name-field mb15", children: Object(c.jsx)(U.a, { name: "name", onChange: function(e) { return g(e) }, value: a.name, label: "Name" }) }), Object(c.jsx)("div", { children: Object(c.jsx)(U.a, { className: "input-msg mb15", name: "message", onChange: function(e) { return g(e) }, value: a.message, id: "outlined-multiline-static", variant: "outlined", label: "Message" }) }), Object(c.jsx)("button", { className: "btn", children: "Send Message" }), Object(c.jsx)("p", { children: h })]
                        })]
                    })]
                })
            }
            G.setup();
            var K = n(386),
                _ = n.n(K),
                $ = function(e) {
                    Object(L.a)(n, e);
                    var t = Object(W.a)(n);

                    function n() {
                        var e;
                        Object(T.a)(this, n);
                        for (var c = arguments.length, A = new Array(c), r = 0; r < c; r++) A[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(A))).state = { node: null, errMsg: "", review: { from: "", txt: "" } }, e.handleChange = function(t) {
                            var n = t.target,
                                c = n.name,
                                A = "number" === n.type ? +n.value : n.value;
                            console.log(A), e.setState((function(e) { return { review: Object(d.a)(Object(d.a)({}, e.review), {}, Object(j.a)({}, c, A)) } }))
                        }, e.addReview = function() {
                            var t = Object(O.a)(f.a.mark((function t(n) {
                                var c, A;
                                return f.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (n.preventDefault(), (c = Object(d.a)({}, e.props.node)).reviews || (c.reviews = []), "" === (A = Object(d.a)({}, e.state.review)).from && (A.from = "Guest"), "" !== A.txt) { t.next = 9; break }
                                            return e.setState({ errMsg: "Invalid review" }), setTimeout((function() { e.setState({ errMsg: "" }) }), 3e3), t.abrupt("return");
                                        case 9:
                                            return A.createdAt = Date.now(), c.reviews.push(Object(d.a)({}, A)), e.setState({ node: Object(d.a)({}, c) }), t.next = 14, e.props.updateBitnode(c);
                                        case 14:
                                            return t.next = 16, e.loadBitnode();
                                        case 16:
                                            e.setState({ review: { from: "", txt: "" } });
                                        case 17:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) { return t.apply(this, arguments) }
                        }(), e
                    }
                    return Object(M.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(O.a)(f.a.mark((function e() {
                                return f.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.loadBitnode();
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()
                    }, { key: "componentDidUpdate", value: function(e, t) { e.match.params.id !== this.props.match.params.id && this.loadBitnode() } }, {
                        key: "loadBitnode",
                        value: function() {
                            var e = Object(O.a)(f.a.mark((function e() {
                                return f.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.props.getById(this.props.match.params.id);
                                        case 2:
                                            console.log(this.props.node);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.node,
                                n = this.state,
                                A = n.errMsg,
                                r = n.review;
                            return t ? Object(c.jsxs)("div", {
                                className: "node-details flex column align-center",
                                children: [Object(c.jsxs)("section", { className: "btns flex justify-center", children: [Object(c.jsx)("button", { className: "btn", onClick: function(t) { t.stopPropagation(), e.props.history.goBack() }, children: Object(c.jsx)("img", { src: X, alt: "" }) }), Object(c.jsx)("button", { className: "btn", onClick: function() { return e.props.history.push("/node/edit/" + t._id) }, children: Object(c.jsx)("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAUySURBVHhe7dzbbxRVHAfwPhmNlyd9MPo/+Gp8MSZ2ZgXivSYqlItEI0pMfDDBqJUWmNm2WgoGaAvegGrAC7UXBUwXwZ1ZbAtNt4W2Yu0NpUC1Kgrbdnv8/WbP2Z4up+10tz445/dNvmlDd85kPpk9M9NyNo9CoVD+58kva7/ZtNxXDMs9Bl9HDNtJwNcB6H7Tjpr8ZRRVTMt5EMB+MW2XzVrLObKsvPV2vglFJN92VgLQBCKtqulk2767zL44M84aepOstv0fVtI4zB55t0Ug9oY2H7+Db0rJt6M1hu0mEefNukHWeG6KNSn6WWeCFVZ1eIjwFv+Gb653EM87q6DrPu5RwslFxEcrWvlbWvM5UcbDhqBlRy8o4eRubBhObQMXFj6UfpHxdkaG2e4T530j7jv1t/daeBv38+H0ilHqrJfxfh6b8uoXsb5n0nsd9CofUp/g1RbOnMlMvIUg4jzoAcJ9Ih9Wj8yHJzoD8dvrESuPXeKATjMfOvjx5jzLmZoPT7TmuBoRb3FWVse9nxmWs54PH+zkW061d8b4xBNVIb5xaEDgDT35jnMT30VwA49mLwu8F96Psz4F1FyVEV/a2+19D50wwrEH+C6CGzhLCsWc91BpzDv44rqfskbkTZrh2Aq+i+BGxsMb32p3jC0tP5kV4o7moTRgKOzu4rsIbjLxxAUgG0TC43jZIBJeBp7oDMRDakSt8Yobh5RwcudCFHg4Hl7F+S6CG7wqLgRPVIUo42lxtc0WT1RGfH5P6pel3hML4fkvIor7RKwWc95i4WFxe23xNjYsDh6OB3jr+C6Cm/8KT7s5bzHx8BaI7yK4CVnucsLLMoSXQ2S8t3PEE3+OJLwsSngKFL8lPAWK3xKeAsVvZTz8kybfRXBDeDnECDvPpvHqCW9BWUy8YsJTw/gp4SlQ/FbGMy13Fd9FcEN4OYTwcgjh5RB4EniG8LLMYuLhmg3Cy7IynmG7q/kughsZr+irQSWK3xKeAsVvCU+B4reEp0DxW8JToPhtGs92klrgmVZ0u1hK8BbhLSweHhww4WURwsshhJdDCC+HyHj4WQKfdyWUMH46A8+KruG7CG7MTS13mmE3gQddUJla/v7cni4lznzVDg8DB1uCB73hQA/rHBlnBdtSiDujvyuRZmtJU2oJlVZ4BUWdN8ABe5+tcvjMmLcsoPzrfg8CF+S9+FE3OxC/pgSTqyUeBp40CvHA1+7uSK+rOHr2D/bap91sWVnqf7s/VtHqfdaKCg6rLR7GtNyTePD73AtpQNH4rwn2au1ZD2dFVceceFhcx8uH1SMhO3YvHvjjW1tY7+jkdYDYnsuT7KntqTlxa+TSrHiGHf2AD6tP4OzbjwdfcXhAiSda2piaE7HLd3WwvW1XCA9vXWDOSuCClLbhq0o4UZwTt9T3saffO+WBLeFzo7Z4GLh4HESADQd7lWiqnhtNstXV7YQHty634BUTEeo6RpVYmW3u+ZO9Dtja42FMy9khIHBBXtfFcSXaj3Bhqf1hZHrRXqoT8Nj3IR9Kz8Db9y8JJIUITyAC7vT5a6zyyCB7gj/WYQ3bvQjdDFfuu/kweiYUjq2R8UQRsSH+m/c2XRKeXuloWG4b/jbl/qLIjXwIvQO3Ln0ynLKWMw5n6Scwz93HN6NgDCt2jxKMF860JDxNfLl0k3MX34Qix9jiRFRwcMZdybedqlBl0238pZTMyLcuojC/9QPeWv4SylyZvnVxkgAZwbcz/xHFT+CicBoRHw5/fyv/JwqFQglu8vL+BeEONeumFVdnAAAAAElFTkSuQmCC" }) })] }), Object(c.jsx)("h1", { className: "title mb15 text-center", children: t.title }), Object(c.jsxs)("div", { className: "contant flex align-center", children: [Object(c.jsxs)("section", { className: "left mr10 flex column align-center", children: [Object(c.jsx)("h2", { children: "Description:" }), Object(c.jsx)("p", { className: "text-center mb15", children: t.description }), Object(c.jsx)("h2", { children: "Ingredients:" }), Object(c.jsx)("ul", { className: "node-list ingredients ", children: t.ingredients.map((function(e, t) { return Object(c.jsx)("li", { className: "ingredient", children: e }, t) })) }), Object(c.jsxs)("section", { className: "extra-details flex", children: [Object(c.jsxs)("div", { className: "summary-item-wrapper flex align-center", children: [Object(c.jsxs)("div", { className: "node-summery-item flex column text-center", children: [Object(c.jsx)("span", { children: t.ingredients.length }), Object(c.jsx)("span", { children: "Ingredients" })] }), Object(c.jsxs)("div", { className: "node-summery-item flex column text-center", children: [Object(c.jsx)("span", { children: t.time }), Object(c.jsx)("span", { children: "Minutes" })] }), Object(c.jsxs)("div", { className: "node-summery-item flex column text-center", children: [Object(c.jsx)("span", { children: t.calories }), Object(c.jsx)("span", { children: "Calories" })] }), Object(c.jsxs)("div", { className: "node-summery-item flex column text-center", children: [Object(c.jsx)("span", { children: t.servings }), Object(c.jsx)("span", { children: "Servings" })] })] }), Object(c.jsxs)("div", { className: "tags-container flex column align-center", children: [Object(c.jsx)("h2", { children: "Tags:" }), Object(c.jsx)("ul", { className: "clean-list mb15 tags flex auto-center wrap", children: t.tags.map((function(e, t) { return Object(c.jsx)("p", { className: "tag", children: e }, t) })) })] })] })] }), Object(c.jsxs)("section", { className: "right flex column auto-center", children: [Object(c.jsx)("img", { className: "node-img mb15", src: t.imgUrl, alt: "" }), Object(c.jsx)("div", { className: "chat-app-desktop", children: Object(c.jsx)(Y, { nodeId: t._id }) })] })] }), Object(c.jsxs)("section", {
                                    className: "funcs flex column align-center",
                                    children: [Object(c.jsxs)("section", {
                                        className: "reviews flex column auto-center",
                                        children: [Object(c.jsx)("h2", { className: "mb15 text-center", children: "Reviews:" }), Object(c.jsxs)("section", {
                                            className: "reviews-container flex justify-center",
                                            children: [Object(c.jsxs)("div", { className: "add-review", children: [Object(c.jsx)("h4", { className: "mb15 text-center", children: "Add Review" }), Object(c.jsxs)("form", { onSubmit: this.addReview, className: "add-review-form flex column align-center", children: [Object(c.jsx)(U.a, { className: "input-from", label: "Enter your name", type: "text", name: "from", value: r.from, onChange: this.handleChange }), Object(c.jsx)(U.a, { className: "input-msg", id: "outlined-multiline-static", variant: "outlined", label: "Enter your review", type: "text", name: "txt", value: r.txt, onChange: this.handleChange }), Object(c.jsx)("button", { className: "btn", onClick: this.addReview, children: "Add review" })] }), Object(c.jsx)("p", { children: A })] }), t.reviews && t.reviews.length > 0 ? Object(c.jsx)("div", {
                                                className: "review-list flex wrap mb15",
                                                children: t.reviews.map((function(e, t) {
                                                    var n = e.from,
                                                        A = e.txt,
                                                        r = e.createdAt;
                                                    return Object(c.jsxs)("div", { className: "review", children: [Object(c.jsxs)("h4", { children: [n, ": ", Object(c.jsx)("span", { className: "review-txt", children: A })] }), Object(c.jsx)("h5", { children: Object(c.jsx)(_.a, { fromNow: !0, children: r }) })] }, t)
                                                }))
                                            }) : Object(c.jsx)("div", { className: "default-review-list flex auto-center", children: Object(c.jsx)("h1", { children: "No reviews yet, be the first!" }) })]
                                        })]
                                    }), Object(c.jsx)("div", { className: "chat-app-mobile", children: Object(c.jsx)(Y, { nodeId: t._id }) })]
                                })]
                            }) : Object(c.jsx)("div", { children: "Loading..." })
                        }
                    }]), n
                }(A.Component);
            var ee = {
                    getById: function(e) {
                        return function() {
                            var t = Object(O.a)(f.a.mark((function t(n) {
                                var c;
                                return f.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, S.getById(e);
                                        case 2:
                                            c = t.sent, n({ type: "SET_RECIPE", node: c });
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) { return t.apply(this, arguments) }
                        }()
                    },
                    updateBitnode: D
                },
                te = Object(u.b)((function(e) { return { node: e.nodeReducer.currBitnode } }), ee)($),
                ne = (n(485), n(486), n(141));
            n(734);
            var ce = Object(o.f)((function(e) {
                Object(A.useEffect)((function() { console.log("effect"), V.on("details mounted", (function() { console.log("Details is now mounted") })) }), []);
                var t = Object(A.useState)("none"),
                    n = Object(l.a)(t, 2),
                    r = n[0],
                    a = n[1],
                    s = Object(A.useState)(""),
                    o = Object(l.a)(s, 2),
                    u = o[0],
                    j = o[1],
                    d = 0,
                    h = !1;
                document.addEventListener("scroll", (function(e) {
                    d = window.scrollY, h || (window.requestAnimationFrame((function() {
                        var e;
                        (e = d) > 125 && a("flex"), e < 125 && a("none"), h = !1
                    })), h = !0)
                }));
                var b = function(t) { t.preventDefault(), e.history.push("/node?term=".concat(u)) };
                return Object(c.jsxs)("section", {
                    className: "app-header flex space-between align-center full",
                    children: [Object(c.jsx)("p", { className: "hover-pointer logo", onClick: function() { e.history.push("/") }, children: "delicious" }), Object(c.jsxs)("form", {
                        className: r + " filter align-center",
                        onSubmit: b,
                        children: [Object(c.jsx)("input", {
                            name: "term",
                            placeholder: "Free Search",
                            value: u,
                            type: "text",
                            onChange: function(e) {
                                var t = e.target;
                                j(t.value)
                            }
                        }), Object(c.jsx)("img", { onClick: b, src: p, alt: "" })]
                    }), Object(c.jsxs)("nav", { className: "main-nav flex", children: [Object(c.jsx)(i.c, { to: "/node/edit", children: "Add Bitnode!" }), Object(c.jsx)(i.c, { exact: !0, to: "/node", children: "Bitnodes List" })] }), Object(c.jsx)(ne.Dropdown, { className: "main-nav-mobile", menu: Object(c.jsxs)(ne.Dropdown.Menu, { children: [Object(c.jsx)(ne.Dropdown.Item, { children: Object(c.jsx)(i.c, { exact: !0, to: "/node", children: "Bitnodes List" }) }), Object(c.jsx)(ne.Dropdown.Item, { children: Object(c.jsx)(i.c, { to: "/node/edit", children: "Add Bitnode!" }) })] }), children: Object(c.jsx)("span", { className: "el-dropdown-link", children: Object(c.jsx)("i", { className: "el-icon-caret-bottom el-icon--right" }) }) })]
                })
            }));
            n(735), n.p;

            function Ae(e) {
                var t = Object(A.useState)(""),
                    n = Object(l.a)(t, 2),
                    r = n[0],
                    a = n[1],
                    s = Object(u.d)((function(e) { return e.nodeReducer.nodes })),
                    o = Object(u.c)();
                Object(A.useEffect)((function() { console.log("effect"), o(P()) }), []);

                function j(e) { return s.filter((function(t) { return t.tags.includes(e) })).splice(0, 3) }
                s.slice(0, 3);
                var d = function(t) { e.history.push("/node/".concat(t)) },
                    h = function(t) { t.preventDefault(), e.history.push("/node?term=".concat(r)) };
                return Object(c.jsxs)("section", {
                    className: "home-page flex column align-center full",
                    children: [Object(c.jsx)("div", {
                        className: "img-container mb15",
                        children: Object(c.jsxs)("section", {
                            className: "contant flex column auto-center text-center",
                            children: [Object(c.jsxs)("section", { className: "hero-text flex column auto-center text-center mb15", children: [Object(c.jsx)("h2", { children: "Welcome To Delecious" }), Object(c.jsx)("h4", { children: "Let's create the right meal for you and those around you" })] }), Object(c.jsxs)("form", {
                                className: "flex",
                                onSubmit: h,
                                children: [Object(c.jsx)("input", {
                                    type: "text",
                                    placeholder: "Find a node",
                                    name: "term",
                                    value: r,
                                    onChange: function(e) {
                                        var t = e.target,
                                            n = (t.name, "number" === t.type ? +t.value : t.value);
                                        console.log(n), a(n)
                                    }
                                }), Object(c.jsx)("img", { onClick: h, src: p, alt: "" })]
                            }), Object(c.jsxs)("section", { className: "nav-btns flex wrap auto-center", children: [Object(c.jsx)("button", { onClick: function() { return e.history.push("/node?tags=Quick") }, children: "Quick" }), Object(c.jsx)("button", { onClick: function() { return e.history.push("/node?tags=Vegetarian") }, children: "Vegeterian" }), Object(c.jsx)("button", { onClick: function() { return e.history.push("/node?tags=Dinner") }, children: "Dinner" }), Object(c.jsx)("button", { onClick: function() { return e.history.push("/node") }, children: "Show All" })] })]
                        })
                    }), Object(c.jsxs)("section", { className: "previews", children: [Object(c.jsxs)("section", { className: "nav-contant flex align-center space-between", children: [Object(c.jsx)("h3", { children: "Dinner" }), Object(c.jsx)("h3", { children: Object(c.jsx)(i.b, { to: "/node", children: "Show All" }) })] }), Object(c.jsx)("div", { className: "contant flex column", children: j("Dinner") && Object(c.jsx)(m, { onSelectBitnode: d, nodes: j("Dinner") }) })] }), Object(c.jsxs)("section", { className: "previews", children: [Object(c.jsxs)("section", { className: "nav-contant flex align-center space-between", children: [Object(c.jsx)("h3", { children: "Vegetarian" }), Object(c.jsx)("h3", { children: Object(c.jsx)(i.b, { to: "/node", children: "Show All" }) })] }), Object(c.jsx)("div", { className: "contant flex column", children: j("Vegetarian") && Object(c.jsx)(m, { onSelectBitnode: d, nodes: j("Vegetarian") }) })] })]
                })
            }
            n(736), n(12);
            var re = n(1075),
                ae = n(111),
                se = n(1069),
                ie = n(1080),
                oe = n(1081),
                le = n(1074),
                ue = n(1082),
                je = n(1076),
                de = n(1077),
                pe = Object(re.a)((function(e) { return { formControl: { margin: e.spacing(1), minWidth: 120, maxWidth: 300 }, chips: { display: "flex", flexWrap: "wrap" }, chip: { margin: 2 }, noLabel: { marginTop: e.spacing(3) } } })),
                he = { PaperProps: { style: { maxHeight: 224, width: 250 } } };

            function be(e) {
                var t = e.currValues,
                    n = e.values,
                    A = e.change,
                    a = pe(),
                    s = (Object(ae.a)(), r.a.useState([])),
                    i = Object(l.a)(s, 2),
                    o = i[0],
                    u = i[1];
                return Object(c.jsx)("div", { children: Object(c.jsxs)(le.a, { className: a.formControl, children: [Object(c.jsx)(ie.a, { id: "demo-mutiple-checkbox-label", children: "Tag" }), Object(c.jsx)(je.a, { labelId: "demo-mutiple-checkbox-label", id: "demo-mutiple-checkbox", multiple: !0, name: "tags", value: o, onChange: function(e) { 0 === o.length && u(t), u(e.target.value), A(e) }, input: Object(c.jsx)(se.a, {}), renderValue: function(e) { return e.join(", ") }, MenuProps: he, children: t && n.map((function(e) { return Object(c.jsxs)(oe.a, { value: e, children: [Object(c.jsx)(de.a, { checked: o.indexOf(e) > -1 || t.indexOf(e) > -1 }), Object(c.jsx)(ue.a, { primary: e })] }, e) })) })] }) })
            }
            var me = n(183),
                xe = n(391),
                fe = function(e) {
                    var t = e.value,
                        n = e.onChange,
                        A = e.type,
                        r = void 0 === A ? "text" : A;
                    return Object(c.jsx)("input", { type: r, value: t, onChange: function(e) { return n(e.target.value) } })
                },
                Oe = function(e) {
                    Object(L.a)(n, e);
                    var t = Object(W.a)(n);

                    function n(e) { var c; return Object(T.a)(this, n), (c = t.call(this, e)).getProps = function() { console.log(c.props.values), c.setState({ value: c.props.value }) }, c.getProps = c.getProps.bind(Object(me.a)(c)), console.log("props", c.props), c.state = { value: [], isReady: !1 }, c }
                    return Object(M.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(O.a)(f.a.mark((function e() {
                                var t, n;
                                return f.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(t = this.props.id)) { e.next = 7; break }
                                            return e.next = 4, S.getById(t);
                                        case 4:
                                            e.t0 = e.sent, e.next = 10;
                                            break;
                                        case 7:
                                            return e.next = 9, S.getEmptyBitnode();
                                        case 9:
                                            e.t0 = e.sent;
                                        case 10:
                                            n = e.t0, this.setState({ value: n.ingredients, isReady: !0 });
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()
                    }, {
                        key: "Item",
                        value: function(e) {
                            var t = e.decorateHandle,
                                n = e.removable,
                                A = e.onChange,
                                r = e.onRemove,
                                a = e.value;
                            return Object(c.jsxs)("div", { children: [t(Object(c.jsx)("span", { style: { cursor: "move" }, children: "+" })), Object(c.jsx)("span", { onClick: n ? r : function(e) { return e }, style: { cursor: n ? "pointer" : "not-allowed", color: n ? "black" : "gray" }, children: "X" }), Object(c.jsx)(fe, { value: a, onChange: A })] })
                        }
                    }, {
                        key: "StagingItem",
                        value: function(e) {
                            var t = e.value,
                                n = e.onAdd,
                                A = e.canAdd,
                                r = (e.add, e.onChange);
                            return Object(c.jsxs)("div", { children: [Object(c.jsx)("span", { onClick: A ? n : void 0, style: { color: A ? "black" : "gray", cursor: A ? "pointer" : "not-allowed" }, children: "Add" }), Object(c.jsx)(fe, { value: t, onChange: r })] })
                        }
                    }, { key: "handleChange", value: function(e) { console.log("ev", e) } }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state,
                                n = t.value,
                                A = t.isReady;
                            return Object(c.jsx)("div", {
                                children: A ? Object(c.jsx)(xe.a, {
                                    name: "ingredients",
                                    initialStagingValue: "",
                                    onChange: function() {
                                        var t = Object(O.a)(f.a.mark((function t(n) {
                                            return f.a.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 2, e.setState({ value: n });
                                                    case 2:
                                                        console.log(e.state.value), e.props.change({ target: { name: "ingredients", value: n } });
                                                    case 4:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function(e) { return t.apply(this, arguments) }
                                    }(),
                                    maxItems: 30,
                                    minItems: 2,
                                    ItemComponent: this.Item,
                                    StagingComponent: this.StagingItem,
                                    value: n
                                }) : "Loading..."
                            })
                        }
                    }]), n
                }(r.a.Component),
                ge = function(e) {
                    Object(L.a)(n, e);
                    var t = Object(W.a)(n);

                    function n() {
                        var e;
                        Object(T.a)(this, n);
                        for (var c = arguments.length, A = new Array(c), a = 0; a < c; a++) A[a] = arguments[a];
                        return (e = t.call.apply(t, [this].concat(A))).elInput = r.a.createRef(), e.state = { node: { title: "", description: "" }, errMsg: "", tagsList: ["Low Calorie", "Browning", "Dinner", "Quick", "Lunch", "Desert", "Vegetarian"] }, e.handleChange = function() {
                            var t = Object(O.a)(f.a.mark((function t(n) {
                                var c, A, r, a;
                                return f.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (c = n.target, console.log("change", c.name), "author" !== c.name) { t.next = 9; break }
                                            return A = c.value, t.next = 6, e.setState((function(e) { return { node: Object(d.a)(Object(d.a)({}, e.node), {}, Object(j.a)({}, c.name, { name: A })) } }));
                                        case 6:
                                            console.log(e.state.node), t.next = 14;
                                            break;
                                        case 9:
                                            return r = c.name, a = "number" === c.type ? +c.value : c.value, t.next = 13, e.setState((function(e) { return { node: Object(d.a)(Object(d.a)({}, e.node), {}, Object(j.a)({}, r, a)) } }));
                                        case 13:
                                            console.log(e.state.node);
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) { return t.apply(this, arguments) }
                        }(), e.onSaveBitnode = function() {
                            var t = Object(O.a)(f.a.mark((function t(n) {
                                var c;
                                return f.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (n.preventDefault(), "" !== (c = e.state.node).title && "" !== c.description) { t.next = 6; break }
                                            return e.setState({ errMsg: "Please fill all the above filled" }), setTimeout((function() { e.setState({ errMsg: "" }) }), 2500), t.abrupt("return");
                                        case 6:
                                            if (!c._id) { t.next = 11; break }
                                            return t.next = 9, e.props.updateBitnode(c);
                                        case 9:
                                            t.next = 13;
                                            break;
                                        case 11:
                                            return t.next = 13, e.props.addBitnode(c);
                                        case 13:
                                            e.props.history.push("/node");
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) { return t.apply(this, arguments) }
                        }(), e.onRemoveBitnode = Object(O.a)(f.a.mark((function t() {
                            return f.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.props.removeBitnode(e.state.node._id);
                                    case 2:
                                        e.props.history.push("/node");
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), e
                    }
                    return Object(M.a)(n, [{ key: "componentWillReceiveProps", value: function(e) { e.node && this.setState({ node: e.node }) } }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(O.a)(f.a.mark((function e() {
                                var t, n;
                                return f.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(t = this.props.match.params.id)) { e.next = 7; break }
                                            return e.next = 4, S.getById(t);
                                        case 4:
                                            e.t0 = e.sent, e.next = 10;
                                            break;
                                        case 7:
                                            return e.next = 9, S.getEmptyBitnode();
                                        case 9:
                                            e.t0 = e.sent;
                                        case 10:
                                            (n = e.t0) ? this.setState({ node: n }): this.setState({ errMsg: "Bitnode Not Found!" }), console.log(n), this.elInput.current.focus();
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state.node,
                                n = t.title,
                                A = t.description,
                                r = t.tags,
                                a = t.imgUrl,
                                s = t.ingredients,
                                i = t.time,
                                o = t.servings,
                                l = t.calories,
                                u = t.author,
                                j = this.state.tagsList;
                            return this.state.node && Object(c.jsxs)("section", { className: "node-edit flex column align-center ", children: [Object(c.jsxs)("section", { className: "btns flex space-between", children: [Object(c.jsx)("button", { className: "btn back-btn", onClick: function() { return e.props.history.goBack() }, children: Object(c.jsx)("img", { src: X, alt: "" }) }), this.state.node._id && Object(c.jsx)("button", { className: "btn", onClick: this.onRemoveBitnode, children: Object(c.jsx)("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAH0SURBVGhD7Ze/LgRxFIX3PXTCu4gaT8ADSHY3Og1vMCj86SU0lppadumtCi3BC4yZzRHX8Zt7JXNmIzJfcrPFt+s7NhTTaWlpafk/ZN3h5k5vlHtXvgdv/1v8ZvznTf2XGBzdL54djJ8Gh+N8Gle2zvfHC8jX5+xw/JgKNXoHdw/I1ycZmMIhX5/UD5/GIa8j9Q/ZxCGnJxVr4pDTk4o1ccjpScWaOOT0pGJNHHJ6OLS1epX3Vy7y7eI15XrL55Or8lWfRU4Ph8px3aXB5LXKRT7lkNPDoc+B5Xku8uyQ08Mhb4R1kWeHnB4OeSOsizw75PRwyBthXeTZIaeHQ94I6yLPDjk9HPJGWBd5dsjp4ZA3wrrIs0NOD4e8EdZFnh1yejjkjbAu8uyQ08Mhb4R1kWeHnB4OeSOsizw75PRwyBthXeTZIaeHQ94I6yLPDjk9HPJGWBd5dsjp4ZA3wrrIs0NOD4e8EdZFnh1yejjkjbAu8uyQ08Mhb4R1kWeHnB4OfT0W/hzx/ZGy2qcccno4tLV6mfeLIdtrqYf2y8nI8qp81WeR08Ohpg45PVl39J4Kiu8NOT1Zd3iaCIpveIKcnr3ezXzWGz2nw/Wv+IJedjeuZ5Frhr3125kidlzcm43XueJP87X85rON0RwyLS0tv6LT+QA6Jpa/dI3jeQAAAABJRU5ErkJggg==", alt: "" }) })] }), Object(c.jsxs)("form", { className: "flex column auto-center", onSubmit: this.onSaveBitnode, children: [Object(c.jsx)("label", { children: "Title" }), Object(c.jsx)("input", { autoFocus: !0, type: "text", ref: this.elInput, name: "title", value: n, onChange: this.handleChange }), Object(c.jsx)("label", { children: "Description" }), Object(c.jsx)("textarea", { rows: "5", cols: "40", type: "text", name: "description", value: A, onChange: this.handleChange }), Object(c.jsx)("label", { children: "Time (seconds)" }), Object(c.jsx)("input", { type: "number", name: "time", value: i, onChange: this.handleChange }), Object(c.jsx)("label", { children: "Calories" }), Object(c.jsx)("input", { type: "number", name: "calories", value: l, onChange: this.handleChange }), Object(c.jsx)("label", { children: "Number of servings" }), Object(c.jsx)("input", { type: "number", name: "servings", value: o, onChange: this.handleChange }), Object(c.jsx)("label", { children: "Author name" }), Object(c.jsx)("input", { type: "text", name: "author", value: u ? u.name : " ", onChange: this.handleChange }), r && Object(c.jsxs)("label", { children: ["Tags:", Object(c.jsx)("br", {})] }), r && Object(c.jsx)("ul", { className: "clean-list text-center", children: r.map((function(e) { return Object(c.jsx)("li", { children: e }) })) }), Object(c.jsx)(be, { currValues: r, values: j, change: this.handleChange }), Object(c.jsx)(Oe, { id: this.props.match.params.id, values: s, change: this.handleChange }), Object(c.jsx)("label", { children: "Picture" }), Object(c.jsx)("input", { type: "img", name: "imgUrl", value: a, onChange: this.handleChange }), Object(c.jsx)("img", { className: "node-img", src: a }), Object(c.jsx)("button", { className: "btn save-btn", children: Object(c.jsx)("img", { src: "data:image/png;base64,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" }) }), Object(c.jsx)("span", { className: "err-msg", children: this.state.errMsg })] })] })
                        }
                    }]), n
                }(A.Component),
                ve = {
                    addBitnode: function(e) {
                        return function() {
                            var t = Object(O.a)(f.a.mark((function t(n) {
                                var c;
                                return f.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, S.save(e);
                                        case 3:
                                            c = t.sent, console.log("savedBitnode", c), n({ type: "ADD_RECIPE", node: c }), t.next = 11;
                                            break;
                                        case 8:
                                            t.prev = 8, t.t0 = t.catch(0), console.log("ERROR!");
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 8]
                                ])
                            })));
                            return function(e) { return t.apply(this, arguments) }
                        }()
                    },
                    updateBitnode: D,
                    removeBitnode: function(e) {
                        return function() {
                            var t = Object(O.a)(f.a.mark((function t(n) {
                                return f.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, S.remove(e);
                                        case 3:
                                            n({ type: "REMOVE_RECIPE", nodeId: e }), t.next = 9;
                                            break;
                                        case 6:
                                            t.prev = 6, t.t0 = t.catch(0), console.log("ERROR!");
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 6]
                                ])
                            })));
                            return function(e) { return t.apply(this, arguments) }
                        }()
                    }
                },
                Ie = Object(u.b)(null, ve)(ge);
            n(1035);

            function we() { return Object(c.jsx)("footer", { className: "flex auto-center full", children: Object(c.jsx)("small", { children: "Copyright \xa9 2020 by Nadav Komornik" }) }) }

            function Ee() { return Object(c.jsx)("div", { className: "App main-container", children: Object(c.jsxs)(i.a, { children: [Object(c.jsx)(ce, {}), Object(c.jsxs)(o.c, { children: [Object(c.jsx)(o.a, { path: "/node/edit/:id?", component: Ie }), Object(c.jsx)(o.a, { path: "/node/:id", component: te }), Object(c.jsx)(o.a, { path: "/node", component: F }), Object(c.jsx)(o.a, { path: "/", component: Ae })] }), Object(c.jsx)(we, {})] }) }) }
            var ye = function(e) {
                    e && e instanceof Function && n.e(3).then(n.bind(null, 1084)).then((function(t) {
                        var n = t.getCLS,
                            c = t.getFID,
                            A = t.getFCP,
                            r = t.getLCP,
                            a = t.getTTFB;
                        n(e), c(e), A(e), r(e), a(e)
                    }))
                },
                Re = n(99),
                Ce = n(389),
                Qe = { nodes: [], currBitnode: null };
            var Ne = Object(Re.c)({
                    nodeReducer: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qe,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case "SET_RECIPES":
                                return Object(d.a)(Object(d.a)({}, e), {}, { nodes: t.nodes });
                            case "SET_RECIPE":
                                return Object(d.a)(Object(d.a)({}, e), {}, { currBitnode: t.node });
                            case "REMOVE_RECIPE":
                                return Object(d.a)(Object(d.a)({}, e), {}, { nodes: e.nodes.filter((function(e) { return e._id !== t.nodeId })) });
                            case "ADD_RECIPE":
                                return Object(d.a)(Object(d.a)({}, e), {}, { nodes: [].concat(Object(Z.a)(e.nodes), [t.node]) });
                            case "UPDATE_RECIPE":
                                return Object(d.a)(Object(d.a)({}, e), {}, { nodes: e.nodes.map((function(e) { return e._id === t.node._id ? t.node : e })) });
                            default:
                                return e
                        }
                    }
                }),
                Se = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Re.d,
                ke = Object(Re.e)(Ne, Se(Object(Re.a)(Ce.a)));
            s.a.render(Object(c.jsx)(r.a.StrictMode, { children: Object(c.jsx)(u.a, { store: ke, children: Object(c.jsx)(Ee, {}) }) }), document.getElementById("root")), ye()
        },
        412: function(e, t, n) {},
        413: function(e, t, n) {},
        414: function(e, t, n) {},
        433: function(e, t, n) {},
        453: function(e, t, n) {},
        483: function(e, t, n) {},
        485: function(e, t, n) {},
        486: function(e, t, n) {},
        735: function(e, t, n) {},
        736: function(e, t, n) {}
    },
    [
        [1036, 1, 2]
    ]
]);
//# sourceMappingURL=main.5407aa72.chunk.js.map