(function(g) {
    var window = this;
    'use strict';
    var sVa = function(a, b) {
            var c = (b - a.i) / (a.u - a.i);
            if (0 >= c) return 0;
            if (1 <= c) return 1;
            for (var d = 0, e = 1, f = 0, h = 0; 8 > h; h++) {
                f = g.Mr(a, c);
                var l = (g.Mr(a, c + 1E-6) - f) / 1E-6;
                if (1E-6 > Math.abs(f - b)) return c;
                if (1E-6 > Math.abs(l)) break;
                else f < b ? d = c : e = c, c -= (f - b) / l
            }
            for (h = 0; 1E-6 < Math.abs(f - b) && 8 > h; h++) f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = g.Mr(a, c);
            return c
        },
        G5 = function() {
            return {
                G: "svg",
                W: {
                    height: "100%",
                    version: "1.1",
                    viewBox: "0 0 110 26",
                    width: "100%"
                },
                U: [{
                    G: "path",
                    Fb: !0,
                    L: "ytp-svg-fill",
                    W: {
                        d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
                    }
                }]
            }
        },
        H5 = function(a) {
            g.H.call(this);
            this.callback = a;
            this.B = new g.Lr(0, 0, .4, 0, .2, 1, 1, 1);
            this.delay = new g.mr(this.next, window, this);
            this.startTime = this.duration = this.u = this.i = NaN;
            g.I(this, this.delay)
        },
        I5 = function(a) {
            g.W.call(this, {
                G: "div",
                L: "ytp-related-on-error-overlay"
            });
            var b = this;
            this.api = a;
            this.D = this.i = 0;
            this.C = new g.DC(this);
            this.B = [];
            this.suggestionData = [];
            this.containerWidth = 0;
            this.title = new g.W({
                G: "h2",
                L: "ytp-related-title",
                va: "{{title}}"
            });
            this.previous = new g.W({
                G: "button",
                Ja: ["ytp-button", "ytp-previous"],
                W: {
                    "aria-label": "Show previous suggested videos"
                },
                U: [g.oK()]
            });
            this.S = new H5(function(f) {
                b.suggestions.element.scrollLeft = -f
            });
            this.tileWidth = this.u = 0;
            this.J = !0;
            this.next = new g.W({
                G: "button",
                Ja: ["ytp-button", "ytp-next"],
                W: {
                    "aria-label": "Show more suggested videos"
                },
                U: [g.pK()]
            });
            g.I(this, this.C);
            a = a.V();
            this.K = a.i;
            g.I(this, this.title);
            this.title.Da(this.element);
            this.suggestions = new g.W({
                G: "div",
                L: "ytp-suggestions"
            });
            g.I(this, this.suggestions);
            this.suggestions.Da(this.element);
            g.I(this, this.previous);
            this.previous.Da(this.element);
            this.previous.Ra("click", this.GQ, this);
            g.I(this, this.S);
            for (var c = {
                    dr: 0
                }; 16 > c.dr; c = {
                    dr: c.dr
                },
                c.dr++) {
                var d = new g.W({
                    G: "a",
                    L: "ytp-suggestion-link",
                    W: {
                        href: "{{link}}",
                        target: a.J,
                        "aria-label": "{{aria_label}}"
                    },
                    U: [{
                        G: "div",
                        L: "ytp-suggestion-image",
                        U: [{
                            G: "div",
                            W: {
                                "data-is-live": "{{is_live}}"
                            },
                            L: "ytp-suggestion-duration",
                            va: "{{duration}}"
                        }]
                    }, {
                        G: "div",
                        L: "ytp-suggestion-title",
                        W: {
                            title: "{{hover_title}}"
                        },
                        va: "{{title}}"
                    }, {
                        G: "div",
                        L: "ytp-suggestion-author",
                        va: "{{views_or_author}}"
                    }]
                });
                g.I(this, d);
                d.Da(this.suggestions.element);
                var e = d.Fa("ytp-suggestion-link");
                g.Em(e, "transitionDelay", c.dr / 20 + "s");
                this.C.T(e, "click", function(f) {
                    return function(h) {
                        var l = b.suggestionData[f.dr],
                            m = l.sessionData;
                        g.YM(h, b.api, b.K, m || void 0) && b.api.dk(l.videoId, m, l.playlistId)
                    }
                }(c));
                this.B.push(d)
            }
            g.I(this, this.next);
            this.next.Da(this.element);
            this.next.Ra("click", this.FQ, this);
            this.C.T(this.api, "videodatachange", this.onVideoDataChange);
            this.resize(this.api.bb().getPlayerSize());
            this.onVideoDataChange();
            this.show()
        },
        J5 = function(a) {
            a.next.element.style.bottom = a.D + "px";
            a.previous.element.style.bottom = a.D + "px";
            var b = a.u,
                c = a.containerWidth - a.suggestionData.length * (a.tileWidth + a.i);
            g.N(a.element, "ytp-scroll-min", 0 <= b);
            g.N(a.element, "ytp-scroll-max", b <= c)
        },
        tVa = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.B[b],
                    e = c.shortViewCount ? c.shortViewCount : c.author,
                    f = c.Sk();
                g.fE(a.api.V()) && (f = g.Zi(f, g.WL("emb_rel_err")));
                d.element.style.display = "";
                var h = d.Fa("ytp-suggestion-title");
                g.Jr.test(c.title) ? h.dir = "rtl" : g.BQa.test(c.title) && (h.dir = "ltr");
                h = d.Fa("ytp-suggestion-author");
                g.Jr.test(e) ? h.dir = "rtl" : g.BQa.test(e) && (h.dir = "ltr");
                h = c.isLivePlayback ? "Live" : c.lengthSeconds ? g.gL(c.lengthSeconds) : "";
                d.update({
                    views_or_author: e,
                    duration: h,
                    link: f,
                    hover_title: c.title,
                    title: c.title,
                    aria_label: c.Ml || null,
                    is_live: c.isLivePlayback
                });
                d = d.Fa("ytp-suggestion-image");
                c = c.Pe();
                d.style.backgroundImage =
                    c ? "url(" + c + ")" : ""
            }
            for (; b < a.B.length; b++) a.B[b].element.style.display = "none";
            J5(a)
        },
        K5 = function(a) {
            g.cN.call(this, a);
            var b = this,
                c = a.V(),
                d = {
                    G: "svg",
                    W: {
                        fill: "#fff",
                        height: "100%",
                        viewBox: "0 0 24 24",
                        width: "100%"
                    },
                    U: [{
                        G: "path",
                        W: {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }
                    }, {
                        G: "path",
                        W: {
                            d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
                        }
                    }]
                };
            g.qE(c) && (d = {
                G: "svg",
                W: {
                    fill: "none",
                    height: "100%",
                    viewBox: "0 0 25 25",
                    width: "100%"
                },
                U: [{
                        G: "g",
                        W: {
                            "clip-path": "url(#clip0)",
                            fill: "#fff"
                        },
                        U: [{
                            G: "path",
                            W: {
                                d: "M12.57.98C6.21.98 1.05 6.14 1.05 12.5c0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52C24.09 6.14 18.93.98 12.57.98zm0 18.34c-3.77 0-6.82-3.05-6.82-6.82 0-3.77 3.05-6.82 6.82-6.82 3.77 0 6.82 3.05 6.82 6.82 0 3.77-3.05 6.82-6.82 6.82z"
                            }
                        }, {
                            G: "path",
                            W: {
                                d: "M12.57 6.52c-3.29 0-5.98 2.68-5.98 5.98 0 3.3 2.68 5.98 5.98 5.98 3.3 0 5.98-2.68 5.98-5.98 0-3.3-2.69-5.98-5.98-5.98zm-2.25 9.38V9.1l5.88 3.4-5.88 3.4z"
                            }
                        }]
                    },
                    {
                        G: "defs",
                        U: [{
                            G: "clipPath",
                            W: {
                                id: "clip0"
                            },
                            U: [{
                                G: "path",
                                W: {
                                    d: "M0 0h24v24H0z",
                                    fill: "#fff",
                                    transform: "translate(.57 .5)"
                                }
                            }]
                        }]
                    }
                ]
            });
            c = new g.W({
                G: "a",
                L: "ytp-small-redirect",
                W: {
                    href: g.NE(c),
                    target: c.J,
                    "aria-label": "Visit YouTube to search for more videos"
                },
                U: [d]
            });
            c.Da(this.element);
            g.I(this, c);
            this.i = new I5(a);
            this.i.Da(this.element);
            g.I(this, this.i);
            this.T(a, "videodatachange", function() {
                b.show()
            });
            this.resize(this.api.bb().getPlayerSize())
        },
        uVa = function(a, b) {
            a.Fa("ytp-error-content").style.paddingTop = "0px";
            var c = a.Fa("ytp-error-content"),
                d = c.clientHeight;
            a.i.resize(b, b.height - d);
            c.style.paddingTop = (b.height - a.i.element.clientHeight) / 2 - d / 2 + "px"
        },
        vVa = function(a, b) {
            var c, d, e, f, h;
            b.reason && (L5(b.reason) ? h = g.Xy(b.reason) : h = g.dN(g.Wy(b.reason)), a.ud(h, "content"));
            var l;
            b.subreason && (L5(b.subreason) ? l = g.Xy(b.subreason) : l = g.dN(g.Wy(b.subreason)), a.ud(l, "subreason"));
            if (b.proceedButton && b.proceedButton.buttonRenderer && (a = a.Fa("ytp-error-content-wrap-subreason"), h = b.proceedButton.buttonRenderer, b = g.hh("A"), h.text && h.text.simpleText)) {
                l = h.text.simpleText;
                b.textContent = l;
                a: {
                    for (var m = g.Ug("A", a), n = 0; n < m.length; n++)
                        if (m[n].textContent === l) {
                            l = !0;
                            break a
                        }
                    l = !1
                }
                l || (l = null === (d = null ===
                    (c = null === h || void 0 === h ? void 0 : h.navigationEndpoint) || void 0 === c ? void 0 : c.urlEndpoint) || void 0 === d ? void 0 : d.url, h = null === (f = null === (e = null === h || void 0 === h ? void 0 : h.navigationEndpoint) || void 0 === e ? void 0 : e.urlEndpoint) || void 0 === f ? void 0 : f.target, l && b.setAttribute("href", l), h && b.setAttribute("target", h), h = g.hh("DIV"), h.appendChild(b), a.appendChild(h))
            }
        },
        L5 = function(a) {
            if (a.runs)
                for (var b = 0; b < a.runs.length; b++)
                    if (a.runs[b].navigationEndpoint) return !0;
            return !1
        },
        M5 = function(a, b) {
            g.W.call(this, {
                G: "a",
                Ja: ["ytp-impression-link"],
                W: {
                    target: "{{target}}",
                    href: "{{url}}",
                    "aria-label": "Watch on YouTube"
                },
                U: [{
                    G: "div",
                    L: "ytp-impression-link-content",
                    W: {
                        "aria-hidden": "true"
                    },
                    U: [{
                        G: "div",
                        L: "ytp-impression-link-text",
                        va: "Watch on"
                    }, {
                        G: "div",
                        L: "ytp-impression-link-logo",
                        U: [G5()]
                    }]
                }]
            });
            this.api = a;
            this.u = b;
            this.Qa("target", a.V().J);
            this.api.Eb(this.element, this, 96714);
            this.T(this.api, "presentingplayerstatechange", this.Qh);
            this.T(this.api, "videoplayerreset", this.i);
            this.T(this.element, "click", this.onClick);
            this.i()
        },
        N5 = function(a) {
            g.W.call(this, {
                G: "div",
                L: "ytp-muted-autoplay-endscreen-overlay",
                U: [{
                    G: "div",
                    L: "ytp-muted-autoplay-end-panel",
                    U: [{
                        G: "div",
                        L: "ytp-muted-autoplay-end-text",
                        va: "{{text}}"
                    }]
                }]
            });
            this.api = a;
            this.B = this.Fa("ytp-muted-autoplay-end-panel");
            this.i = new g.WM(this.api);
            g.I(this, this.i);
            this.i.Da(this.B, 0);
            this.api.Eb(this.element, this, 52428);
            this.T(this.api, "presentingplayerstatechange", this.u);
            this.Ra("click", this.onClick);
            this.hide()
        },
        O5 = function(a) {
            g.W.call(this, {
                G: "div",
                L: "ytp-muted-autoplay-overlay",
                U: [{
                    G: "div",
                    L: "ytp-muted-autoplay-bottom-buttons",
                    U: [{
                        G: "button",
                        Ja: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                        U: [{
                            G: "div",
                            Ja: ["ytp-muted-autoplay-equalizer-icon"],
                            U: [{
                                G: "svg",
                                W: {
                                    height: "100%",
                                    version: "1.1",
                                    viewBox: "-4 -4 24 24",
                                    width: "100%"
                                },
                                U: [{
                                    G: "g",
                                    W: {
                                        fill: "#fff"
                                    },
                                    U: [{
                                        G: "rect",
                                        L: "ytp-equalizer-bar-left",
                                        W: {
                                            height: "9",
                                            width: "4",
                                            x: "1",
                                            y: "7"
                                        }
                                    }, {
                                        G: "rect",
                                        L: "ytp-equalizer-bar-middle",
                                        W: {
                                            height: "14",
                                            width: "4",
                                            x: "6",
                                            y: "2"
                                        }
                                    }, {
                                        G: "rect",
                                        L: "ytp-equalizer-bar-right",
                                        W: {
                                            height: "12",
                                            width: "4",
                                            x: "11",
                                            y: "4"
                                        }
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            });
            this.api = a;
            this.bottomButtons = this.Fa("ytp-muted-autoplay-bottom-buttons");
            this.Fa("ytp-muted-autoplay-equalizer");
            this.B = new g.K(this.u, 4E3, this);
            a.Eb(this.element, this, 39306);
            this.T(a, "presentingplayerstatechange", this.i);
            this.T(a, "onMutedAutoplayStarts", this.i);
            this.Ra("click", this.onClick);
            this.hide()
        },
        P5 = function(a, b) {
            g.W.call(this, {
                G: "div",
                L: "ytp-pause-overlay"
            });
            var c = this;
            this.api = a;
            this.J = b;
            this.i = new g.DC(this);
            this.C = new g.TK(this, 1E3, !1, 100);
            this.B = [];
            this.suggestionData = [];
            this.containerWidth = 0;
            this.D = !1;
            this.Z = 0;
            this.title = new g.W({
                G: "h2",
                L: "ytp-related-title",
                va: "{{title}}"
            });
            this.previous = new g.W({
                G: "button",
                Ja: ["ytp-button", "ytp-previous"],
                W: {
                    "aria-label": "Show previous suggested videos"
                },
                U: [g.oK()]
            });
            this.S = new H5(function(f) {
                c.suggestions.element.scrollLeft = -f
            });
            this.X = this.tileWidth = this.u = 0;
            this.next = new g.W({
                G: "button",
                Ja: ["ytp-button", "ytp-next"],
                W: {
                    "aria-label": "Show more suggested videos"
                },
                U: [g.pK()]
            });
            this.expandButton = new g.W({
                G: "button",
                Ja: ["ytp-button", "ytp-expand"],
                va: "More videos"
            });
            g.I(this, this.i);
            g.I(this, this.C);
            b = a.V();
            "0" === b.controlsType && g.M(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
            this.K = b.i;
            g.I(this, this.title);
            this.title.Da(this.element);
            this.suggestions = new g.W({
                G: "div",
                L: "ytp-suggestions"
            });
            g.I(this, this.suggestions);
            this.suggestions.Da(this.element);
            g.I(this, this.previous);
            this.previous.Da(this.element);
            this.previous.Ra("click", this.IQ, this);
            g.I(this, this.S);
            for (a = {
                    er: 0
                }; 16 > a.er; a = {
                    er: a.er
                }, a.er++) {
                var d = new g.W({
                    G: "a",
                    L: "ytp-suggestion-link",
                    W: {
                        href: "{{link}}",
                        target: b.J,
                        "aria-label": "{{aria_label}}"
                    },
                    U: [{
                        G: "div",
                        L: "ytp-suggestion-image"
                    }, {
                        G: "div",
                        L: "ytp-suggestion-overlay",
                        W: {
                            style: "{{blink_rendering_hack}}",
                            "aria-hidden": "{{aria_hidden}}"
                        },
                        U: [{
                            G: "div",
                            L: "ytp-suggestion-title",
                            va: "{{title}}"
                        }, {
                            G: "div",
                            L: "ytp-suggestion-author",
                            va: "{{author_and_views}}"
                        }, {
                            G: "div",
                            W: {
                                "data-is-live": "{{is_live}}"
                            },
                            L: "ytp-suggestion-duration",
                            va: "{{duration}}"
                        }]
                    }]
                });
                g.I(this, d);
                d.Da(this.suggestions.element);
                var e = d.Fa("ytp-suggestion-link");
                g.Em(e, "transitionDelay", a.er / 20 + "s");
                this.i.T(e, "click", function(f) {
                    return function(h) {
                        var l = f.er;
                        if (1E3 > (0, g.Q)() - c.Z) g.Ru(h), document.activeElement.blur();
                        else {
                            l = c.suggestionData[l];
                            var m = l.sessionData;
                            g.YM(h, c.api, c.K, m || void 0) && c.api.dk(l.videoId, m, l.playlistId)
                        }
                    }
                }(a));
                this.B.push(d)
            }
            g.I(this, this.next);
            this.next.Da(this.element);
            this.next.Ra("click", this.HQ, this);
            b = new g.W({
                G: "button",
                Ja: ["ytp-button", "ytp-collapse"],
                W: {
                    "aria-label": "Hide more videos"
                },
                U: [{
                    G: "svg",
                    W: {
                        height: "100%",
                        viewBox: "0 0 16 16",
                        width: "100%"
                    },
                    U: [{
                        G: "path",
                        W: {
                            d: "M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",
                            fill: "#fff"
                        }
                    }]
                }]
            });
            g.I(this, b);
            b.Da(this.element);
            b.Ra("click", this.MU, this);
            g.I(this, this.expandButton);
            this.expandButton.Da(this.element);
            this.expandButton.Ra("click", this.NU,
                this);
            this.i.T(this.api, "appresize", this.zb);
            this.i.T(this.api, "fullscreentoggled", this.Cm);
            this.i.T(this.api, "presentingplayerstatechange", this.Qc);
            this.i.T(this.api, "videodatachange", this.onVideoDataChange);
            this.zb(this.api.bb().getPlayerSize());
            this.onVideoDataChange()
        },
        Q5 = function(a) {
            var b = a.J.We() ? 32 : 16;
            b = a.X / 2 + b;
            a.next.element.style.bottom = b + "px";
            a.previous.element.style.bottom = b + "px";
            b = a.u;
            var c = a.containerWidth - a.suggestionData.length * (a.tileWidth + 8);
            g.N(a.element, "ytp-scroll-min", 0 <= b);
            g.N(a.element, "ytp-scroll-max", b <= c)
        },
        wVa = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.B[b],
                    e = c.shortViewCount ? c.author + " \u2022 " + c.shortViewCount : c.author;
                d.element.style.display = "";
                g.AQa.test(c.title) && (d.Fa("ytp-suggestion-title").dir = "rtl");
                g.AQa.test(e) && (d.Fa("ytp-suggestion-author").dir = "rtl");
                var f = c.isLivePlayback ? "Live" : c.lengthSeconds ? g.gL(c.lengthSeconds) : "";
                var h = c.Sk();
                g.fE(a.api.V()) && (h = g.Zi(h, g.WL("emb_rel_pause")));
                d.update({
                    author_and_views: e,
                    duration: f,
                    link: h,
                    title: c.title,
                    aria_label: c.Ml || null,
                    is_live: c.isLivePlayback,
                    aria_hidden: !(!c.Ml || a.api.V().N("embeds_rv_aria_hidden_killswitch")),
                    blink_rendering_hack: g.Nz || g.dE ? "will-change: opacity" : void 0
                });
                d = d.Fa("ytp-suggestion-image");
                c = c.Pe();
                d.style.backgroundImage = c ? "url(" + c + ")" : ""
            }
            for (; b < a.B.length; b++) a.B[b].element.style.display = "none";
            Q5(a)
        },
        R5 = function(a) {
            var b = a.V();
            g.W.call(this, {
                G: "a",
                Ja: ["ytp-watermark", "yt-uix-sessionlink"],
                W: {
                    target: b.J,
                    href: "{{url}}",
                    "aria-label": g.vH("Watch on $WEBSITE", {
                        WEBSITE: g.zE(b)
                    }),
                    "data-sessionlink": "feature=player-watermark"
                },
                U: [G5()]
            });
            this.api = a;
            this.i = null;
            this.u = !1;
            this.state = a.Ab();
            a.Eb(this.element, this, 76758);
            this.T(a, "videodatachange", this.BH);
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.T(a, "appresize", this.zb);
            b = this.state;
            this.state !== b && (this.state =
                b);
            this.BH();
            this.onVideoDataChange();
            this.zb(a.bb().getPlayerSize())
        },
        S5 = function(a) {
            g.BM.call(this, a);
            this.I = a;
            this.u = new g.DC(this);
            g.I(this, this.u);
            this.load()
        };
    g.w(H5, g.H);
    H5.prototype.start = function(a, b, c) {
        this.i = a;
        this.u = b;
        this.duration = c;
        this.startTime = (0, g.Q)();
        this.next()
    };
    H5.prototype.next = function() {
        var a = (0, g.Q)() - this.startTime;
        var b = this.B;
        a = sVa(b, a / this.duration);
        if (0 == a) b = b.K;
        else if (1 == a) b = b.S;
        else {
            var c = g.zg(b.K, b.D, a),
                d = g.zg(b.D, b.J, a);
            b = g.zg(b.J, b.S, a);
            c = g.zg(c, d, a);
            d = g.zg(d, b, a);
            b = g.zg(c, d, a)
        }
        b = g.xg(b, 0, 1);
        this.callback((this.u - this.i) * b + this.i);
        1 > b && this.delay.start()
    };
    g.w(I5, g.W);
    g.k = I5.prototype;
    g.k.hide = function() {
        this.J = !0;
        g.W.prototype.hide.call(this)
    };
    g.k.show = function() {
        this.J = !1;
        g.W.prototype.show.call(this)
    };
    g.k.isHidden = function() {
        return this.J
    };
    g.k.FQ = function() {
        this.scrollTo(this.u - this.containerWidth)
    };
    g.k.GQ = function() {
        this.scrollTo(this.u + this.containerWidth)
    };
    g.k.resize = function(a, b) {
        var c = this.api.V(),
            d = 16 / 9,
            e = 650 <= a.width,
            f = 480 > a.width || 290 > a.height,
            h = Math.min(this.suggestionData.length, this.B.length);
        if (150 >= Math.min(a.width, a.height) || 0 === h || !c.tb) this.hide();
        else {
            var l;
            if (e) {
                var m = l = 28;
                this.i = 16
            } else this.i = m = l = 8;
            if (f) {
                var n = 6;
                e = 14;
                var p = 12;
                f = 24;
                c = 12
            } else n = 8, e = 18, p = 16, f = 36, c = 16;
            a = a.width - (48 + l + m);
            l = Math.ceil(a / 150);
            l = Math.min(3, l);
            l = a / l - this.i;
            m = Math.floor(l / d);
            b && m + 100 > b && 50 < l && (m = Math.max(b, 50 / d), l = Math.ceil(a / (d * (m - 100) + this.i)), l = a / l - this.i,
                m = Math.floor(l / d));
            50 > l || g.lM(this.api) ? this.hide() : this.show();
            for (b = 0; b < h; b++) {
                d = this.B[b];
                var r = d.Fa("ytp-suggestion-image");
                r.style.width = l + "px";
                r.style.height = m + "px";
                d.Fa("ytp-suggestion-title").style.width = l + "px";
                d.Fa("ytp-suggestion-author").style.width = l + "px";
                d = d.Fa("ytp-suggestion-duration");
                d.style.display = d && 100 > l ? "none" : ""
            }
            h = e + n + p + 4;
            this.D = h + c + (m - f) / 2;
            this.suggestions.element.style.height = m + h + "px";
            this.tileWidth = l;
            this.containerWidth = a;
            this.u = 0;
            this.suggestions.element.scrollLeft = -0;
            J5(this)
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.V();
        this.K = a.D ? !1 : b.i;
        a.suggestions ? this.suggestionData = g.Cp(a.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        tVa(this);
        a.D ? this.title.update({
            title: g.vH("More videos from $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: a.author
            })
        }) : this.title.update({
            title: "More videos on YouTube"
        })
    };
    g.k.scrollTo = function(a) {
        a = g.xg(a, this.containerWidth - this.suggestionData.length * (this.tileWidth + this.i), 0);
        this.S.start(this.u, a, 1E3);
        this.u = a;
        J5(this)
    };
    g.w(K5, g.cN);
    K5.prototype.show = function() {
        g.cN.prototype.show.call(this);
        uVa(this, this.api.bb().getPlayerSize())
    };
    K5.prototype.resize = function(a) {
        g.cN.prototype.resize.call(this, a);
        uVa(this, a);
        g.N(this.element, "related-on-error-overlay-visible", !this.i.isHidden())
    };
    K5.prototype.u = function(a) {
        g.cN.prototype.u.call(this, a);
        var b = this.api.getVideoData();
        if (b.zF || b.playerErrorMessageRenderer)(a = b.zF) ? vVa(this, a) : b.playerErrorMessageRenderer && vVa(this, b.playerErrorMessageRenderer);
        else {
            var c;
            a.Ci && (b.Uq ? L5(b.Uq) ? c = g.Xy(b.Uq) : c = g.dN(g.Wy(b.Uq)) : c = g.dN(a.Ci), this.ud(c, "subreason"))
        }
    };
    g.w(M5, g.W);
    M5.prototype.Qh = function() {
        this.api.Ab().isCued() || (this.hide(), this.api.gb(this.element, !1))
    };
    M5.prototype.i = function() {
        var a = this.api.getVideoData(),
            b = this.api.V(),
            c = this.api.getVideoData().D,
            d = b.xb,
            e = !b.tb,
            f = this.u.Af();
        b = g.qE(b);
        d || f || c || e || b || !a.videoId ? (this.hide(), this.api.gb(this.element, !1)) : (a = g.Zi(this.api.getVideoUrl(), g.WL("emb_imp_woyt")), this.Qa("url", a), this.show())
    };
    M5.prototype.onClick = function(a) {
        var b = g.Zi(this.api.getVideoUrl(), g.WL("emb_imp_woyt"));
        g.ZM(b, this.api, a);
        this.api.Bb(this.element)
    };
    M5.prototype.show = function() {
        this.api.Ab().isCued() && (g.W.prototype.show.call(this), this.api.ew(this.element) && this.api.gb(this.element, !0))
    };
    g.w(N5, g.W);
    N5.prototype.u = function() {
        var a = this.api.Ab(),
            b = this.api.getVideoData();
        this.api.V().N("embeds_enable_muted_autoplay") && b.mutedAutoplay && (g.T(a, 2) && !this.yb ? (this.show(), this.i.show(), a = this.api.getVideoData(), this.Qa("text", a.QI), g.N(this.element, "ytp-muted-autoplay-show-end-panel", !0), this.api.gb(this.element, this.yb), this.api.Pa("onMutedAutoplayEnds")) : this.hide())
    };
    N5.prototype.onClick = function() {
        var a = this.api.getVideoData(),
            b = this.api.getCurrentTime();
        a.mutedAutoplay = !1;
        a.endSeconds = NaN;
        g.CF(a);
        this.api.loadVideoById(a.videoId, b);
        this.api.Bb(this.element);
        this.hide()
    };
    g.w(O5, g.W);
    O5.prototype.i = function() {
        var a = this.api.Ab(),
            b = this.api.getVideoData();
        this.api.V().N("embeds_enable_muted_autoplay") && b.mutedAutoplay && !g.T(a, 2) ? this.yb || (g.W.prototype.show.call(this), this.B.start(), this.api.gb(this.element, this.yb)) : this.hide()
    };
    O5.prototype.u = function() {
        g.N(this.element, "ytp-muted-autoplay-hide-watermark", !0)
    };
    O5.prototype.onClick = function() {
        var a = this.api.getVideoData(),
            b = this.api.getCurrentTime();
        a.mutedAutoplay = !1;
        a.endSeconds = NaN;
        g.CF(a);
        this.api.loadVideoById(a.videoId, b);
        this.api.Bb(this.element)
    };
    g.w(P5, g.W);
    g.k = P5.prototype;
    g.k.hide = function() {
        g.wr(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.W.prototype.hide.call(this)
    };
    g.k.MU = function() {
        this.D = !0;
        g.wr(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.expandButton.focus()
    };
    g.k.NU = function() {
        this.D = !1;
        g.M(this.api.getRootNode(), "ytp-expand-pause-overlay")
    };
    g.k.HQ = function() {
        this.scrollTo(this.u - this.containerWidth)
    };
    g.k.IQ = function() {
        this.scrollTo(this.u + this.containerWidth)
    };
    g.k.Cm = function() {
        this.zb(this.api.bb().getPlayerSize())
    };
    g.k.Qc = function(a) {
        if (!(g.T(a.state, 1) || g.T(a.state, 16) || g.T(a.state, 32))) {
            var b = !this.api.V().N("embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch") && g.T(a.state, 1024);
            !g.T(a.state, 4) || g.T(a.state, 2) || b ? this.C.hide() : this.suggestionData.length && (this.D || (g.M(this.api.getRootNode(), "ytp-expand-pause-overlay"), Q5(this)), this.C.show(), this.Z = (0, g.Q)())
        }
    };
    g.k.zb = function(a) {
        var b = 16 / 9,
            c = this.J.We();
        a = a.width - (c ? 112 : 58);
        c = Math.ceil(a / (c ? 320 : 192));
        c = (a - 8 * c) / c;
        b = Math.floor(c / b);
        for (var d = 0; d < this.B.length; d++) {
            var e = this.B[d].Fa("ytp-suggestion-image");
            e.style.width = c + "px";
            e.style.height = b + "px"
        }
        this.suggestions.element.style.height = b + "px";
        this.tileWidth = c;
        this.X = b;
        this.containerWidth = a;
        this.u = 0;
        this.suggestions.element.scrollLeft = -0;
        Q5(this)
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.V(),
            b = this.api.getVideoData();
        this.K = b.D ? !1 : a.i;
        b.suggestions ? this.suggestionData = g.Cp(b.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        wVa(this);
        b.D ? this.title.update({
            title: g.vH("More videos from $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: b.author
            })
        }) : this.title.update({
            title: "More videos"
        })
    };
    g.k.scrollTo = function(a) {
        a = g.xg(a, this.containerWidth - this.suggestionData.length * (this.tileWidth + 8), 0);
        this.S.start(this.u, a, 1E3);
        this.u = a;
        Q5(this)
    };
    g.w(R5, g.W);
    g.k = R5.prototype;
    g.k.BH = function() {
        var a = this.api.getVideoData(),
            b = this.api.getVideoData(1).D,
            c = this.api.V();
        a = (a.mutedAutoplay || c.xb && !g.T(this.state, 2)) && !(b && c.pfpChazalUi);
        g.jK(this, a);
        this.api.gb(this.element, a)
    };
    g.k.onStateChange = function(a) {
        a = a.state;
        this.state !== a && (this.state = a);
        this.BH()
    };
    g.k.onVideoDataChange = function() {
        if (this.api.getVideoData().videoId) {
            var a = this.api.getVideoUrl(!0, !1, !1, !0);
            this.Qa("url", a);
            this.i || (this.i = this.Ra("click", this.onClick))
        } else this.i && (this.Qa("url", null), this.yc(this.i), this.i = null)
    };
    g.k.onClick = function(a) {
        var b = this.api.getVideoUrl(!g.hL(a), !1, !0, !0);
        g.ZM(b, this.api, a);
        this.api.Bb(this.element)
    };
    g.k.zb = function(a) {
        if ((a = 480 > a.width) && !this.u || !a && this.u) {
            var b = new g.W(G5()),
                c = this.Fa("ytp-watermark");
            g.N(c, "ytp-watermark-small", a);
            g.jh(c);
            b.Da(c);
            this.u = a
        }
    };
    g.w(S5, g.BM);
    g.k = S5.prototype;
    g.k.Yi = function() {
        return !1
    };
    g.k.create = function() {
        var a, b = this.I.V(),
            c = g.eM(this.I),
            d = null === (a = this.I.getVideoData()) || void 0 === a ? void 0 : a.clientPlaybackNonce;
        d && g.tz("cpn", d);
        b.tb && !b.dd && (this.D = new P5(this.I, c), g.I(this, this.D), g.oM(this.I, this.D.element, 4));
        b.N("embeds_enable_muted_autoplay") && (this.i = new O5(this.I), g.I(this, this.i), g.oM(this.I, this.i.element, 4), this.C = new N5(this.I), g.I(this, this.C), g.oM(this.I, this.C.element, 4));
        if (b.xb || this.i) this.watermark = new R5(this.I), g.I(this, this.watermark), g.oM(this.I, this.watermark.element,
            8);
        this.B = new M5(this.I, c);
        g.I(this, this.B);
        g.oM(this.I, this.B.element, 8);
        this.u.T(this.I, "appresize", this.zb);
        this.u.T(this.I, "presentingplayerstatechange", this.Qh);
        this.u.T(this.I, "videodatachange", this.DY);
        this.u.T(this.I, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
        this.Xb(this.I.Ab());
        this.player.Td("embed")
    };
    g.k.zb = function() {
        var a = this.I.bb().getPlayerSize();
        this.He && this.He.resize(a)
    };
    g.k.Qh = function(a) {
        this.Xb(a.state)
    };
    g.k.Xb = function(a) {
        g.T(a, 128) ? (this.He || (this.He = new K5(this.I), g.I(this, this.He), g.oM(this.I, this.He.element, 4)), this.He.u(a.getData()), this.He.show(), g.M(this.I.getRootNode(), "ytp-embed-error")) : this.He && (this.He.dispose(), this.He = null, g.wr(this.I.getRootNode(), "ytp-embed-error"))
    };
    g.k.onMutedAutoplayStarts = function() {
        this.I.getVideoData().mutedAutoplay && this.i && this.watermark && this.watermark.Da(this.i.bottomButtons, 0)
    };
    g.k.DY = function() {
        var a = this.I.getVideoData();
        this.watermark && this.i && !a.mutedAutoplay && g.nh(this.i.element, this.watermark.element) && g.oM(this.I, this.watermark.element, 8)
    };
    g.AM("embed", S5);
})(_yt_player);