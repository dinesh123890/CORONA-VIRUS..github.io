(function(g) {
    var window = this;
    'use strict';
    var rWa = function(a, b) {
            return g.Te(a, b)
        },
        sWa = function(a, b) {
            b = b instanceof g.Uf ? b : g.cg(b, /^data:image\//i.test(b));
            a.src = g.Vf(b)
        },
        Y6 = function(a) {
            g.Xk(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Sa()).toString(36));
            return a
        },
        Z6 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.jl(a.u, b, c)
        },
        tWa = function(a) {
            if (a === g.bp) throw Error("ES6 Iteration protocol does NOT adjust control flow when StopIteration is thrown from callback helper functions. If your code relies on this behavior, consider throwing a different error and catching it to terminate iteration.");
            throw a;
        },
        uWa = function(a) {
            if (a instanceof g.$o) return a;
            if ("function" == typeof a.Og) return a.Og(!1);
            if (g.Ma(a)) {
                var b = 0,
                    c = new g.$o;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.k2;
                        if (b in a) return g.ap(a[b++]);
                        b++
                    }
                };
                var d = c.next;
                c.Lj = function() {
                    return g.cp(d.call(c))
                };
                return c
            }
            throw Error("Not implemented");
        },
        vWa = function(a, b, c) {
            if (g.Ma(a)) try {
                g.uc(a, b, c)
            } catch (e) {
                tWa(e)
            } else
                for (a = uWa(a);;) {
                    var d = void 0;
                    try {
                        d = a.Lj()
                    } catch (e) {
                        if (e === g.bp) break;
                        throw e;
                    }
                    try {
                        b.call(c, d, void 0, a)
                    } catch (e) {
                        tWa(e)
                    }
                }
        },
        wWa = function(a, b) {
            var c = [];
            vWa(b, function(d) {
                try {
                    var e = g.Ur.prototype.u.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.Kfa(e) && c.push(d)
            }, a);
            return c
        },
        xWa = function(a, b) {
            wWa(a, b).forEach(function(c) {
                g.Ur.prototype.remove.call(this, c)
            }, a)
        },
        yWa = function(a) {
            if (a.xa) {
                if (a.xa.locationOverrideToken) return {
                    locationOverrideToken: a.xa.locationOverrideToken
                };
                if (null != a.xa.latitudeE7 && null != a.xa.longitudeE7) return {
                    latitudeE7: a.xa.latitudeE7,
                    longitudeE7: a.xa.longitudeE7
                }
            }
            return null
        },
        zWa = function(a, b) {
            g.Zb(a, b) || a.push(b)
        },
        $6 = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        AWa = function(a) {
            try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        a7 = function(a) {
            if (g.C.JSON) try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            return AWa(a)
        },
        BWa = function(a, b, c, d) {
            var e = new g.Pk(null, void 0);
            a && g.Qk(e, a);
            b && g.Rk(e, b);
            c && g.Sk(e, c);
            d && (e.K = d);
            return e
        },
        b7 = function(a, b) {
            g.ev[a] = !0;
            var c = g.cv();
            c && c.publish.apply(c, arguments);
            g.ev[a] = !1
        },
        c7 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.Cr;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username =
                a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", CWa(this, a.capabilities || ""), DWa(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "",
                this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        CWa = function(a, b) {
            a.capabilities.clear();
            g.Cp(b.split(","), g.Ra(rWa, EWa)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        DWa = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        d7 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        e7 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        FWa = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        GWa = function(a) {
            return new d7(a)
        },
        HWa = function(a) {
            return Array.isArray(a) ? g.on(a, GWa) : []
        },
        f7 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        g7 = function(a) {
            return Array.isArray(a) ? "[" + g.on(a, f7).join(",") + "]" : "null"
        },
        h7 = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        IWa = function(a) {
            return g.on(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        i7 = function(a, b) {
            return g.Vb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        j7 = function(a, b) {
            return g.Vb(a, function(c) {
                return e7(c, b)
            })
        },
        JWa = function() {
            var a = (0, g.ky)();
            a && xWa(a, a.i.Og(!0))
        },
        k7 = function() {
            var a = g.ny("yt-remote-connected-devices") || [];
            g.rc(a);
            return a
        },
        KWa = function(a) {
            if (g.ac(a)) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.on(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        LWa = function(a) {
            g.my("yt-remote-connected-devices", a, 86400)
        },
        m7 = function() {
            if (l7) return l7;
            var a = g.ny("yt-remote-device-id");
            a || (a = h7(), g.my("yt-remote-device-id", a, 31536E3));
            for (var b = k7(), c = 1, d = a; g.Zb(b, d);) c++, d = a + "#" + c;
            return l7 = d
        },
        n7 = function() {
            var a = k7(),
                b = m7();
            g.Zb(a, b);
            g.py() && g.tc(a, b);
            a = KWa(a);
            if (g.ac(a)) try {
                g.cja("remote_sid")
            } catch (c) {} else try {
                g.gu("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        MWa = function() {
            return g.ny("yt-remote-session-browser-channel")
        },
        NWa = function() {
            return g.ny("yt-remote-local-screens") || []
        },
        OWa = function() {
            g.my("yt-remote-lounge-token-expiration", !0, 86400)
        },
        PWa = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.on(NWa(), function(d) {
                    return d.loungeToken
                }),
                c = g.on(a, function(d) {
                    return d.loungeToken
                });
            g.pn(c, function(d) {
                return !g.Zb(b, d)
            }) && OWa();
            g.my("yt-remote-local-screens", a, 31536E3)
        },
        QWa = function(a, b) {
            g.my("yt-remote-session-browser-channel", a);
            g.my("yt-remote-session-screen-id", b);
            a = k7();
            b = m7();
            g.Zb(a, b) || a.push(b);
            LWa(a);
            n7()
        },
        o7 = function(a) {
            a || (g.oy("yt-remote-session-screen-id"), g.oy("yt-remote-session-video-id"));
            n7();
            a = k7();
            g.dc(a, m7());
            LWa(a)
        },
        RWa = function() {
            if (!p7) {
                var a = g.cs();
                a && (p7 = new g.Rr(a))
            }
        },
        SWa = function() {
            RWa();
            return p7 ? !!p7.get("yt-remote-use-staging-server") : !1
        },
        q7 = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        TWa = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        UWa = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        r7 = function(a) {
            a.length ? VWa(a.shift(), function() {
                r7(a)
            }) : s7()
        },
        WWa = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        VWa = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.jk(d, g.Hr(a));
            (document.head || document.documentElement).appendChild(d)
        },
        XWa = function() {
            var a = q7(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        s7 = function() {
            var a = UWa();
            a && a(!1, "No cast extension found")
        },
        t7 = function() {
            if (YWa) {
                var a = 2,
                    b = UWa(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                VWa("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", s7, c)
            }
        },
        ZWa = function() {
            t7();
            var a = XWa();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            r7(a)
        },
        aXa = function() {
            t7();
            var a = XWa();
            a.push.apply(a, g.u($Wa.map(WWa)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            r7(a)
        },
        u7 = function(a, b, c) {
            g.H.call(this);
            this.J = null != c ? (0, g.E)(a, c) : a;
            this.Zf = b;
            this.D = (0, g.E)(this.VQ, this);
            this.i = !1;
            this.u = 0;
            this.B = this.Pb = null;
            this.C = []
        },
        v7 = function(a, b, c) {
            g.H.call(this);
            this.C = null != c ? a.bind(c) : a;
            this.Zf = b;
            this.B = null;
            this.i = !1;
            this.u = 0;
            this.Pb = null
        },
        w7 = function(a) {
            a.Pb = g.bi(function() {
                a.Pb = null;
                a.i && !a.u && (a.i = !1, w7(a))
            }, a.Zf);
            var b = a.B;
            a.B = null;
            a.C.apply(null, b)
        },
        x7 = function() {},
        y7 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.C.setTimeout(function() {
                a()
            }, b)
        },
        A7 = function(a) {
            z7.dispatchEvent(new bXa(z7, a))
        },
        bXa = function(a, b) {
            g.ye.call(this, "statevent", a);
            this.stat = b
        },
        B7 = function(a, b, c, d) {
            this.i = a;
            this.B = b;
            this.S = c;
            this.K = d || 1;
            this.u = 45E3;
            this.C = new g.kl(this);
            this.J = new g.ai;
            this.J.setInterval(250)
        },
        dXa = function(a, b, c) {
            a.Vt = 1;
            a.jn = Y6(b.clone());
            a.Cq = c;
            a.D = !0;
            cXa(a, null)
        },
        C7 = function(a, b, c, d, e) {
            a.Vt = 1;
            a.jn = Y6(b.clone());
            a.Cq = null;
            a.D = c;
            e && (a.dO = !1);
            cXa(a, d)
        },
        cXa = function(a, b) {
            a.Ht = Date.now();
            D7(a);
            a.Oo = a.jn.clone();
            Z6(a.Oo, "t", a.K);
            a.MB = 0;
            a.Of = a.i.KD(a.i.zx() ? b : null);
            0 < a.zC && (a.bB = new v7((0, g.E)(a.eP, a, a.Of), a.zC));
            a.C.Ra(a.Of, "readystatechange", a.WQ);
            b = a.hp ? g.$e(a.hp) : {};
            a.Cq ? (a.KB = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.Of.send(a.Oo, a.KB, a.Cq, b)) : (a.KB = "GET", a.dO && !g.ch && (b.Connection = "close"), a.Of.send(a.Oo, a.KB, null, b));
            a.i.Mj(1)
        },
        fXa = function(a, b) {
            var c = a.MB,
                d = b.indexOf("\n", c);
            if (-1 == d) return E7;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return eXa;
            d += 1;
            if (d + c > b.length) return E7;
            b = b.substr(d, c);
            a.MB = d + c;
            return b
        },
        hXa = function(a, b) {
            a.Ht = Date.now();
            D7(a);
            var c = b ? window.location.hostname : "";
            a.Oo = a.jn.clone();
            g.Xk(a.Oo, "DOMAIN", c);
            g.Xk(a.Oo, "t", a.K);
            try {
                a.Zj = new ActiveXObject("htmlfile")
            } catch (m) {
                F7(a);
                a.Ym = 7;
                A7(22);
                G7(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in H7) f = H7[f];
                        else if (f in gXa) f = H7[f] = gXa[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                H7[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            c = g.rg(g.Mf("b/12014412"), d);
            a.Zj.open();
            a.Zj.write(g.ng(c));
            a.Zj.close();
            a.Zj.parentWindow.m = (0, g.E)(a.WW, a);
            a.Zj.parentWindow.d = (0, g.E)(a.nN, a, !0);
            a.Zj.parentWindow.rpcClose = (0, g.E)(a.nN, a, !1);
            c = a.Zj.createElement("DIV");
            a.Zj.parentWindow.document.body.appendChild(c);
            d = g.bg(a.Oo.toString());
            d = g.Ig(g.Vf(d));
            d = g.rg(g.Mf("b/12014412"), '<iframe src="' + d + '"></iframe>');
            g.tg(c, d);
            a.i.Mj(1)
        },
        D7 = function(a) {
            a.EH = Date.now() +
                a.u;
            iXa(a, a.u)
        },
        iXa = function(a, b) {
            if (null != a.pu) throw Error("WatchDog timer not null");
            a.pu = y7((0, g.E)(a.dX, a), b)
        },
        I7 = function(a) {
            a.pu && (g.C.clearTimeout(a.pu), a.pu = null)
        },
        G7 = function(a) {
            a.i.xf() || a.Ap || a.i.qy(a)
        },
        F7 = function(a) {
            I7(a);
            g.ve(a.bB);
            a.bB = null;
            a.J.stop();
            g.ml(a.C);
            if (a.Of) {
                var b = a.Of;
                a.Of = null;
                b.abort();
                b.dispose()
            }
            a.Zj && (a.Zj = null)
        },
        J7 = function(a, b) {
            try {
                a.i.gN(a, b), a.i.Mj(4)
            } catch (c) {}
        },
        kXa = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                jXa(a, b, function(h) {
                    h ? c(!0) : g.C.setTimeout(function() {
                        kXa(a, b, c, d, f)
                    }, f)
                })
            }
        },
        jXa = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    K7(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    K7(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    K7(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    K7(d), c(!1)
                } catch (e) {}
            };
            g.C.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            sWa(d, a)
        },
        K7 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        lXa = function(a) {
            this.i = a;
            this.u = new x7
        },
        mXa = function(a) {
            var b = L7(a.i, a.Wu, "/mail/images/cleardot.gif");
            Y6(b);
            kXa(b.toString(), 5E3, (0, g.E)(a.KR, a), 3, 2E3);
            a.Mj(1)
        },
        N7 = function(a) {
            var b = a.i.X;
            if (null != b) A7(5), b ? (A7(11), M7(a.i, a, !1)) : (A7(12), M7(a.i, a, !0));
            else if (a.rh = new B7(a, void 0, void 0, void 0), a.rh.hp = a.AC, b = a.i, b = L7(b, b.zx() ? a.Nu : null, a.BC), A7(5), !g.Kc || g.Dc(10)) Z6(b, "TYPE", "xmlhttp"), C7(a.rh, b, !1, a.Nu, !1);
            else {
                Z6(b, "TYPE", "html");
                var c = a.rh;
                a = !!a.Nu;
                c.Vt = 3;
                c.jn = Y6(b.clone());
                hXa(c, a)
            }
        },
        O7 = function(a, b, c) {
            this.i = 1;
            this.u = [];
            this.C = [];
            this.D = new x7;
            this.S = a || null;
            this.X = null != b ? b : null;
            this.J = c || !1
        },
        nXa = function(a, b) {
            this.i = a;
            this.map = b;
            this.context = null
        },
        oXa = function(a, b, c, d) {
            g.ye.call(this, "timingevent", a);
            this.size = b;
            this.mx = d
        },
        pXa = function(a) {
            g.ye.call(this, "serverreachability", a)
        },
        sXa = function(a) {
            qXa(a);
            if (3 == a.i) {
                var b = a.Cw++,
                    c = a.fz.clone();
                g.Xk(c, "SID", a.B);
                g.Xk(c, "RID", b);
                g.Xk(c, "TYPE", "terminate");
                P7(a, c);
                b = new B7(a, a.B, b, void 0);
                b.Vt = 2;
                b.jn = Y6(c.clone());
                sWa(new Image, b.jn.toString());
                b.Ht = Date.now();
                D7(b)
            }
            rXa(a)
        },
        tXa = function(a) {
            a.mS(1, 0);
            a.fz = L7(a, null, a.CC);
            Q7(a)
        },
        qXa = function(a) {
            a.vn && (a.vn.abort(), a.vn = null);
            a.Ne && (a.Ne.cancel(), a.Ne = null);
            a.Nl && (g.C.clearTimeout(a.Nl), a.Nl = null);
            R7(a);
            a.Yg && (a.Yg.cancel(), a.Yg = null);
            a.Hn && (g.C.clearTimeout(a.Hn), a.Hn = null)
        },
        uXa = function(a, b) {
            if (0 == a.i) throw Error("Invalid operation: sending map when state is closed");
            a.u.push(new nXa(a.XT++, b));
            2 != a.i && 3 != a.i || Q7(a)
        },
        vXa = function(a) {
            var b = 0;
            a.Ne && b++;
            a.Yg && b++;
            return b
        },
        Q7 = function(a) {
            a.Yg || a.Hn || (a.Hn = y7((0, g.E)(a.lN, a), 0), a.Cs = 0)
        },
        xXa = function(a, b) {
            if (1 == a.i) {
                if (!b) {
                    a.Cw = Math.floor(1E5 * Math.random());
                    b = a.Cw++;
                    var c = new B7(a, "", b, void 0);
                    c.hp = a.pk;
                    var d = S7(a),
                        e = a.fz.clone();
                    g.Xk(e, "RID", b);
                    g.Xk(e, "CVER", "1");
                    P7(a, e);
                    dXa(c, e, d);
                    a.Yg = c;
                    a.i = 2
                }
            } else 3 == a.i && (b ? wXa(a, b) : 0 == a.u.length || a.Yg || wXa(a))
        },
        wXa = function(a, b) {
            if (b)
                if (6 < a.Bp) {
                    a.u = a.C.concat(a.u);
                    a.C.length = 0;
                    var c = a.Cw - 1;
                    b = S7(a)
                } else c = b.S, b = b.Cq;
            else c = a.Cw++, b = S7(a);
            var d = a.fz.clone();
            g.Xk(d, "SID", a.B);
            g.Xk(d, "RID", c);
            g.Xk(d, "AID", a.Xs);
            P7(a, d);
            c = new B7(a, a.B, c, a.Cs + 1);
            c.hp = a.pk;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Yg = c;
            dXa(c, d, b)
        },
        P7 = function(a, b) {
            a.Pf && (a = a.Pf.GK()) && g.He(a, function(c, d) {
                g.Xk(b, d, c)
            })
        },
        S7 = function(a) {
            var b = Math.min(a.u.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Bp && 0 < b) {
                var d = a.u[0].i;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    gr: e.gr
                }, f++) {
                e.gr = a.u[f].i;
                var h = a.u[f].map;
                e.gr = 6 >= a.Bp ? f : e.gr - d;
                try {
                    g.He(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.gr + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.gr + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.C = a.C.concat(a.u.splice(0, b));
            return c.join("&")
        },
        yXa = function(a) {
            a.Ne || a.Nl || (a.K = 1, a.Nl = y7((0, g.E)(a.kN, a), 0), a.Wr = 0)
        },
        T7 = function(a) {
            if (a.Ne || a.Nl || 3 <= a.Wr) return !1;
            a.K++;
            a.Nl = y7((0, g.E)(a.kN, a), zXa(a, a.Wr));
            a.Wr++;
            return !0
        },
        M7 = function(a, b, c) {
            a.IB = c;
            a.qk = b.El;
            a.J || tXa(a)
        },
        R7 = function(a) {
            null != a.Jp && (g.C.clearTimeout(a.Jp), a.Jp = null)
        },
        zXa = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        U7 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Pf && (c = null);
                var d = (0, g.E)(a.hY, a);
                c || (c = new g.Pk("//www.google.com/images/cleardot.gif"), Y6(c));
                jXa(c.toString(), 1E4, d)
            } else A7(2);
            AXa(a, b)
        },
        AXa = function(a, b) {
            a.i = 0;
            a.Pf && a.Pf.TJ(b);
            rXa(a);
            qXa(a)
        },
        rXa = function(a) {
            a.i = 0;
            a.qk = -1;
            if (a.Pf)
                if (0 == a.C.length && 0 == a.u.length) a.Pf.wD();
                else {
                    g.hc(a.C);
                    var b = g.hc(a.u);
                    a.C.length = 0;
                    a.u.length = 0;
                    a.Pf.wD(b)
                }
        },
        L7 = function(a, b, c) {
            var d = g.Yk(c);
            if ("" != d.i) b && g.Rk(d, b + "." + d.i), g.Sk(d, d.B);
            else {
                var e = window.location;
                d = BWa(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.Dv && g.He(a.Dv, function(f, h) {
                g.Xk(d, h, f)
            });
            g.Xk(d, "VER", a.Bp);
            P7(a, d);
            return d
        },
        BXa = function() {},
        CXa = function() {
            this.i = [];
            this.u = []
        },
        DXa = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        V7 = function(a, b) {
            g.H.call(this);
            this.i = new g.K(this.NW, 0, this);
            g.I(this, this.i);
            this.Zf = 5E3;
            this.u = 0;
            if ("function" === typeof a) b && (a = (0, g.E)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.E)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.B = a
        },
        W7 = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.xa = a;
            this.J = b;
            this.B = new g.Qr;
            this.u = new V7(this.IX, this);
            this.i = null;
            this.Z = !1;
            this.D = null;
            this.X = "";
            this.S = this.C = 0;
            this.K = [];
            this.Aa = c;
            this.oa = d;
            this.Ba = e
        },
        EXa = function(a) {
            return {
                firstTestResults: [""],
                secondTestResults: !a.i.IB,
                sessionId: a.i.B,
                arrayId: a.i.Xs
            }
        },
        FXa = function(a, b) {
            a.S = b || 0;
            a.u.stop();
            X7(a);
            a.i && (3 == a.i.getState() && xXa(a.i), sXa(a.i));
            a.S = 0
        },
        Y7 = function(a) {
            return !!a.i && 3 == a.i.getState()
        },
        X7 = function(a) {
            if (a.i) {
                var b = a.oa(),
                    c = a.i.pk || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.i.pk = c
            }
        },
        Z7 = function(a) {
            this.port = this.domain = "";
            this.i = "/api/lounge";
            this.u = !0;
            a = a || document.location.href;
            var b = Number(g.Ni(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Oi(a) || "";
            a = g.vb();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.ub(a, "10.0") && (this.u = !1))
        },
        $7 = function(a, b) {
            var c = a.i;
            a.u && (c = "https://" + a.domain + a.port + a.i);
            return g.Zi(c + b, {})
        },
        a8 = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Ra(a.C, d, !0),
                onError: g.Ra(a.B, e),
                onTimeout: g.Ra(a.D, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.Gt(b, a)
        },
        JXa = function() {
            var a = GXa;
            HXa();
            b8.push(a);
            IXa()
        },
        c8 = function(a, b) {
            HXa();
            var c = KXa(a, String(b));
            g.ac(b8) ? LXa(c) : (IXa(), g.uc(b8, function(d) {
                d(c)
            }))
        },
        HXa = function() {
            b8 || (b8 = g.Ia("yt.mdx.remote.debug.handlers_") || [], g.Ha("yt.mdx.remote.debug.handlers_", b8, void 0))
        },
        LXa = function(a) {
            var b = (d8 + 1) % 50;
            d8 = b;
            e8[b] = a;
            f8 || (f8 = 49 == b)
        },
        IXa = function() {
            var a = b8;
            if (e8[0]) {
                var b = f8 ? d8 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = e8[b];
                    g.uc(a, function(d) {
                        d(c)
                    })
                } while (b != d8);
                e8 = Array(50);
                d8 = -1;
                f8 = !1
            }
        },
        KXa = function(a, b) {
            var c = (Date.now() - MXa) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        g8 = function(a) {
            g.Ax.call(this);
            this.J = a;
            this.screens = []
        },
        NXa = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        OXa = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.Cp(a.screens, function(f) {
                return !!i7(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = NXa(a, b[d]) || c;
            return c
        },
        PXa = function(a, b) {
            var c = a.screens.length;
            a.screens = g.Cp(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        h8 = function(a, b, c, d, e) {
            g.Ax.call(this);
            this.B = a;
            this.K = b;
            this.C = c;
            this.J = d;
            this.D = e;
            this.u = 0;
            this.i = null;
            this.Pb = NaN
        },
        j8 = function(a) {
            g8.call(this, "LocalScreenService");
            this.u = a;
            this.i = NaN;
            i8(this);
            this.info("Initializing with " + g7(this.screens))
        },
        QXa = function(a) {
            if (a.screens.length) {
                var b = g.on(a.screens, function(d) {
                        return d.id
                    }),
                    c = $7(a.u, "/pairing/get_lounge_token_batch");
                a8(a.u, c, {
                    screen_ids: b.join(",")
                }, (0, g.E)(a.NS, a), (0, g.E)(a.MS, a))
            }
        },
        i8 = function(a) {
            if (g.P("deprecate_pair_servlet_enabled")) return OXa(a, []);
            var b = HWa(NWa());
            b = g.Cp(b, function(c) {
                return !c.uuid
            });
            return OXa(a, b)
        },
        k8 = function(a, b) {
            PWa(g.on(a.screens, FWa));
            b && OWa()
        },
        m8 = function(a, b) {
            g.Ax.call(this);
            this.J = b;
            b = (b = g.ny("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.J(), e = 0, f = d.length; e < f; ++e) {
                var h = d[e].id;
                c[h] = g.Zb(b, h)
            }
            this.i = c;
            this.D = a;
            this.B = this.C = NaN;
            this.u = null;
            l8("Initialized with " + g.Ei(this.i))
        },
        n8 = function(a, b, c) {
            var d = $7(a.D, "/pairing/get_screen_availability");
            a8(a.D, d, {
                lounge_token: b.token
            }, (0, g.E)(function(e) {
                e = e.screens || [];
                for (var f = 0, h = e.length; f < h; ++f)
                    if (e[f].loungeToken == b.token) {
                        c("online" == e[f].status);
                        return
                    }
                c(!1)
            }, a), (0, g.E)(function() {
                c(!1)
            }, a))
        },
        o8 = function(a, b) {
            a: if ($6(b) != $6(a.i)) var c = !1;
                else {
                    c = g.Re(b);
                    for (var d = 0, e = c.length; d < e; ++d)
                        if (!a.i[c[d]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (l8("Updated online screens: " + g.Ei(a.i)), a.i = b, a.ea("screenChange"));RXa(a)
        },
        p8 = function(a) {
            isNaN(a.B) || g.Ct(a.B);
            a.B = g.At((0, g.E)(a.vG, a), 0 < a.C && a.C < g.Sa() ? 2E4 : 1E4)
        },
        l8 = function(a) {
            c8("OnlineScreenService", a)
        },
        SXa = function(a) {
            var b = {};
            g.uc(a.J(), function(c) {
                c.token ? b[c.token] = c.id : this.qe("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        RXa = function(a) {
            a = g.Re(g.Ie(a.i, function(b) {
                return b
            }));
            g.rc(a);
            a.length ? g.my("yt-remote-online-screen-ids", a.join(","), 60) : g.oy("yt-remote-online-screen-ids")
        },
        q8 = function(a, b) {
            b = void 0 === b ? !1 : b;
            g8.call(this, "ScreenService");
            this.C = a;
            this.K = b;
            this.i = this.u = null;
            this.B = [];
            this.D = {};
            TXa(this)
        },
        VXa = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]);
            var h = a.Hh(),
                l = c ? j7(h, c) : null;
            c && (a.K || l) || (l = j7(h, b));
            if (l) {
                l.uuid = b;
                var m = r8(a, l);
                n8(a.i, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? UXa(a, c, (0, g.E)(function(n) {
                var p = r8(this, new d7({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                n8(this.i, p, function(r) {
                    e(r ? p : null)
                })
            }, a), f) : e(null)
        },
        WXa = function(a, b) {
            for (var c = 0, d = a.screens.length; c < d; ++c)
                if (a.screens[c].name == b) return a.screens[c];
            return null
        },
        XXa = function(a, b, c) {
            n8(a.i, b, c)
        },
        UXa = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.Gt($7(a.C, "/pairing/get_lounge_token_batch"), e)
        },
        YXa = function(a) {
            a.screens = a.u.Hh();
            var b = a.D,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = 0;
            for (d = a.screens.length; b < d; ++b) {
                var e = a.screens[b];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + g7(a.screens))
        },
        TXa = function(a) {
            s8(a);
            a.u = new j8(a.C);
            a.u.subscribe("screenChange", (0, g.E)(a.XS, a));
            YXa(a);
            a.K || (a.B = HWa(g.ny("yt-remote-automatic-screen-cache") || []));
            s8(a);
            a.info("Initializing automatic screens: " + g7(a.B));
            a.i = new m8(a.C, (0, g.E)(a.Hh, a, !0));
            a.i.subscribe("screenChange", (0, g.E)(function() {
                this.ea("onlineScreenChange")
            }, a))
        },
        r8 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = j7(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.K || ZXa(a));
            s8(a);
            a.D[b.uuid] = b.id;
            g.my("yt-remote-device-id-map", a.D, 31536E3);
            return b
        },
        ZXa = function(a) {
            a = g.Cp(a.B, function(b) {
                return "shortLived" != b.idType
            });
            g.my("yt-remote-automatic-screen-cache", g.on(a, FWa))
        },
        s8 = function(a) {
            a.D = g.ny("yt-remote-device-id-map") || {}
        },
        t8 = function(a, b, c) {
            g.Ax.call(this);
            this.Ba = c;
            this.B = a;
            this.i = b;
            this.C = null
        },
        u8 = function(a, b) {
            a.C = b;
            a.ea("sessionScreen", a.C)
        },
        $Xa = function(a, b) {
            a.C && (a.C.token = b, r8(a.B, a.C));
            a.ea("sessionScreen", a.C)
        },
        v8 = function(a, b) {
            c8(a.Ba, b)
        },
        w8 = function(a, b, c) {
            t8.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.u = null;
            this.oa = (0, g.E)(this.bR, this);
            this.Aa = (0, g.E)(this.hX, this);
            this.Z = g.At(function() {
                aYa(d, null)
            }, 12E4);
            this.K = this.D = this.J = this.S = 0;
            this.xa = !1;
            this.X = "unknown"
        },
        x8 = function(a, b) {
            g.Ct(a.K);
            a.K = 0;
            0 == b ? bYa(a) : a.K = g.At(function() {
                bYa(a)
            }, b)
        },
        bYa = function(a) {
            cYa(a, "getLoungeToken");
            g.Ct(a.D);
            a.D = g.At(function() {
                dYa(a, null)
            }, 3E4)
        },
        cYa = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Ei(void 0));
            var c = {};
            c.type = b;
            a.u ? a.u.sendMessage("urn:x-cast:com.google.youtube.mdx", c, g.Ja, (0, g.E)(function() {
                v8(this, "Failed to send message: " + b + ".")
            }, a)) : v8(a, "Sending yt message without session: " + g.Ei(c))
        },
        y8 = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.getScreen() && a.getScreen().id == b || a.TK(b, function(c) {
                u8(a, c)
            }, function() {
                return a.Cg()
            }, 5)) : a.Cg(Error("Waiting for session status timed out."))
        },
        fYa = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new d7(b);
            eYa(a, d, function(e) {
                e ? (a.xa = !0, r8(a.B, d), u8(a, d), a.X = "unknown", x8(a, c)) : (g.ht(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Cg())
            }, 5)
        },
        aYa = function(a, b) {
            g.Ct(a.Z);
            a.Z = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? fYa(a, {
                name: a.i.friendlyName,
                screenId: b.screenId,
                loungeToken: b.loungeToken,
                dialId: b.deviceId,
                screenIdType: "shortLived"
            }, b.loungeTokenRefreshIntervalMs) : (g.ht(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), y8(a, b.screenId))) : (g.ht(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) +
                ".")), y8(a, b.screenId)) : y8(a, b.screenId) : a.Cg(Error("Waiting for session status timed out."))
        },
        dYa = function(a, b) {
            g.Ct(a.D);
            a.D = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.X = c, x8(a, 3E4)) : ($Xa(a, b.loungeToken), a.xa = !1, a.X = "unknown", x8(a, b.loungeTokenRefreshIntervalMs))
        },
        eYa = function(a, b, c, d) {
            g.Ct(a.J);
            a.J = 0;
            XXa(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.At(function() {
                    eYa(a, b, c, d - 1)
                }, 300)
            })
        },
        gYa = function(a) {
            g.Ct(a.S);
            a.S = 0;
            g.Ct(a.J);
            a.J = 0;
            g.Ct(a.Z);
            a.Z = 0;
            g.Ct(a.D);
            a.D = 0;
            g.Ct(a.K);
            a.K = 0
        },
        z8 = function(a, b, c, d) {
            t8.call(this, a, b, "DialSession");
            this.config_ = d;
            this.u = this.S = null;
            this.Aa = "";
            this.La = c;
            this.Ka = null;
            this.Z = g.Ja;
            this.X = NaN;
            this.Ia = (0, g.E)(this.cR, this);
            this.D = g.Ja;
            this.K = this.J = 0;
            this.oa = !1;
            this.xa = "unknown"
        },
        A8 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.u) ? 0 : b.getDialAppInfo))
        },
        hYa = function(a) {
            a.D = a.B.II(a.Aa, a.i.label, a.i.friendlyName, A8(a), function(b, c) {
                a.D = g.Ja;
                a.oa = !0;
                u8(a, b);
                "shortLived" == b.idType && 0 < c && B8(a, c)
            }, function(b) {
                a.D = g.Ja;
                a.Cg(b)
            })
        },
        iYa = function(a) {
            var b = {};
            b.pairingCode = a.Aa;
            b.theme = a.La;
            SWa() && (b.env_useStageMdx = 1);
            return g.Xi(b)
        },
        C8 = function(a) {
            return new Promise(function(b) {
                a.Aa = h7();
                if (a.Ka) {
                    var c = new chrome.cast.DialLaunchResponse(!0, iYa(a));
                    b(c);
                    hYa(a)
                } else a.Z = function() {
                    g.Ct(a.X);
                    a.Z = function() {};
                    a.X = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, iYa(a));
                    b(d);
                    hYa(a)
                }, a.X = g.At(function() {
                    a.Z()
                }, 100)
            })
        },
        kYa = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new d7(b);
            return (new Promise(function(e) {
                jYa(a, d, function(f) {
                    f ? (a.oa = !0, r8(a.B, d), u8(a, d), B8(a, c)) : g.ht(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : C8(a)
            })
        },
        lYa = function(a, b) {
            var c = a.S.receiver.label,
                d = a.i.friendlyName;
            return (new Promise(function(e) {
                VXa(a.B, c, b, d, function(f) {
                    f && f.token && u8(a, f);
                    e(f)
                }, function(f) {
                    v8(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : C8(a)
            })
        },
        jYa = function(a, b, c, d) {
            g.Ct(a.J);
            a.J = 0;
            XXa(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.At(function() {
                    jYa(a, b, c, d - 1)
                }, 300)
            })
        },
        B8 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            A8(a) && (g.Ct(a.K), a.K = 0, 0 == b ? mYa(a) : a.K = g.At(function() {
                mYa(a)
            }, b))
        },
        mYa = function(a) {
            A8(a) && a.u.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.xa = c, B8(a, 3E4)) : (a.oa = !1, a.xa = "unknown", $Xa(a, b.loungeToken), B8(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.xa = "noLoungeTokenResponse";
                B8(a, 3E4)
            })
        },
        nYa = function(a) {
            g.Ct(a.J);
            a.J = 0;
            g.Ct(a.K);
            a.K = 0;
            a.D();
            a.D = function() {};
            g.Ct(a.X)
        },
        D8 = function(a, b) {
            t8.call(this, a, b, "ManualSession");
            this.u = g.At((0, g.E)(this.Ys, this, null), 150)
        },
        E8 = function(a, b) {
            g.Ax.call(this);
            this.config_ = b;
            this.u = a;
            this.S = b.appId || "233637DE";
            this.C = b.theme || "cl";
            this.X = b.disableCastApi || !1;
            this.J = b.forceMirroring || !1;
            this.i = null;
            this.K = !1;
            this.B = [];
            this.D = (0, g.E)(this.ZV, this)
        },
        oYa = function(a, b) {
            return b ? g.Vb(a.B, function(c) {
                return e7(b, c.label)
            }, a) : null
        },
        F8 = function(a) {
            c8("Controller", a)
        },
        GXa = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        G8 = function(a) {
            return a.K || !!a.B.length || !!a.i
        },
        H8 = function(a, b, c) {
            b != a.i && (g.ve(a.i), (a.i = b) ? (c ? a.ea("yt-remote-cast2-receiver-resumed",
                b.i) : a.ea("yt-remote-cast2-receiver-selected", b.i), b.subscribe("sessionScreen", (0, g.E)(a.jN, a, b)), b.subscribe("sessionFailed", function() {
                return pYa(a, b)
            }), b.getScreen() ? a.ea("yt-remote-cast2-session-change", b.getScreen()) : c && a.i.Ys(null)) : a.ea("yt-remote-cast2-session-change", null))
        },
        pYa = function(a, b) {
            a.i == b && a.ea("yt-remote-cast2-session-failed")
        },
        qYa = function(a) {
            var b = a.u.HI(),
                c = a.i && a.i.i;
            a = g.on(b, function(d) {
                c && e7(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = oYa(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        vYa = function(a, b, c, d) {
            d.disableCastApi ? I8("Cannot initialize because disabled by Mdx config.") : rYa() ? sYa(b, d) && (J8(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? tYa(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? tYa(a, c) : (K8("Failed to load cast API: " + f), L8(!1), J8(!1), g.oy("yt-remote-cast-available"), g.oy("yt-remote-cast-receiver"),
                    uYa(), c(!1))
            }, d.loadCastApiSetupScript ? g.qy("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= q7() && ZWa() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? s7() : 89 <= q7() ? aXa() : (t7(), r7($Wa.map(WWa))))) : I8("Cannot initialize because not running Chrome")
        },
        uYa = function() {
            I8("dispose");
            var a = M8();
            a && a.dispose();
            g.Ha("yt.mdx.remote.cloudview.instance_", null, void 0);
            wYa(!1);
            g.hv(N8);
            N8.length = 0
        },
        O8 = function() {
            return !!g.ny("yt-remote-cast-installed")
        },
        xYa = function() {
            var a = g.ny("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        yYa = function() {
            I8("clearCurrentReceiver");
            g.oy("yt-remote-cast-receiver")
        },
        zYa = function() {
            return O8() ? M8() ? M8().getCastSession() : (K8("getCastSelector: Cast is not initialized."), null) : (K8("getCastSelector: Cast API is not installed!"), null)
        },
        Q8 = function() {
            O8() ? M8() ? P8() ? (I8("Requesting cast selector."), M8().requestSession()) : (I8("Wait for cast API to be ready to request the session."), N8.push(g.gv("yt-remote-cast2-api-ready", Q8))) : K8("requestCastSelector: Cast is not initialized.") : K8("requestCastSelector: Cast API is not installed!")
        },
        R8 =
        function(a, b) {
            P8() ? M8().setConnectedScreenStatus(a, b) : K8("setConnectedScreenStatus called before ready.")
        },
        rYa = function() {
            var a = 0 <= g.vb().search(/ (CrMo|Chrome|CriOS)\//);
            return g.Nz || a
        },
        AYa = function(a, b) {
            M8().init(a, b)
        },
        sYa = function(a, b) {
            var c = !1;
            M8() || (a = new E8(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.my("yt-remote-cast-available", d);
                b7("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                I8("onReceiverSelected: " + d.friendlyName);
                g.my("yt-remote-cast-receiver", d);
                b7("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                I8("onReceiverResumed: " + d.friendlyName);
                g.my("yt-remote-cast-receiver", d);
                b7("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                I8("onSessionChange: " + f7(d));
                d || g.oy("yt-remote-cast-receiver");
                b7("yt-remote-cast2-session-change", d)
            }), g.Ha("yt.mdx.remote.cloudview.instance_", a, void 0), c = !0);
            I8("cloudview.createSingleton_: " + c);
            return c
        },
        M8 = function() {
            return g.Ia("yt.mdx.remote.cloudview.instance_")
        },
        tYa = function(a, b) {
            L8(!0);
            J8(!1);
            AYa(a, function(c) {
                c ? (wYa(!0), g.iv("yt-remote-cast2-api-ready")) : (K8("Failed to initialize cast API."), L8(!1), g.oy("yt-remote-cast-available"), g.oy("yt-remote-cast-receiver"), uYa());
                b(c)
            })
        },
        I8 = function(a) {
            c8("cloudview", a)
        },
        K8 = function(a) {
            c8("cloudview", a)
        },
        L8 = function(a) {
            I8("setCastInstalled_ " + a);
            g.my("yt-remote-cast-installed", a)
        },
        P8 = function() {
            return !!g.Ia("yt.mdx.remote.cloudview.apiReady_")
        },
        wYa = function(a) {
            I8("setApiReady_ " + a);
            g.Ha("yt.mdx.remote.cloudview.apiReady_", a, void 0)
        },
        J8 = function(a) {
            g.Ha("yt.mdx.remote.cloudview.initializing_", a, void 0)
        },
        S8 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.J = this.K = 0;
            this.trackData = null;
            this.hasNext = this.Tk = !1;
            this.S = this.D = this.i = this.C = 0;
            this.B = NaN;
            this.u = !1;
            this.reset(a)
        },
        T8 = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.Tk = !1;
            a.hasNext = !1;
            a.K = 0;
            a.J = g.Sa();
            a.C = 0;
            a.i = 0;
            a.D = 0;
            a.S = 0;
            a.B = NaN;
            a.u = !1
        },
        U8 = function(a) {
            return a.Ic() ? (g.Sa() - a.J) / 1E3 : 0
        },
        V8 = function(a, b) {
            a.K = b;
            a.J = g.Sa()
        },
        W8 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Sa() - a.J) / 1E3 + a.K;
                case -1E3:
                    return 0
            }
            return a.K
        },
        X8 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && T8(a)
        },
        Y8 = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.af(a.trackData);
            b.hasPrevious = a.Tk;
            b.hasNext = a.hasNext;
            b.playerTime = a.K;
            b.playerTimeAt = a.J;
            b.seekableStart = a.C;
            b.seekableEnd = a.i;
            b.duration = a.D;
            b.loadedTime = a.S;
            b.liveIngestionTime = a.B;
            return b
        },
        $8 = function(a, b) {
            g.Ax.call(this);
            this.B = 0;
            this.C = a;
            this.J = [];
            this.D = new CXa;
            this.u = this.i = null;
            this.X = (0, g.E)(this.HU, this);
            this.K = (0, g.E)(this.Lw, this);
            this.S = (0, g.E)(this.GU, this);
            this.Z = (0, g.E)(this.OU, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.LG, this), BYa(this))) : c = 3;
            0 != c && (b ? this.LG(c) : g.At((0, g.E)(function() {
                this.LG(c)
            }, this), 0));
            (a = zYa()) && Z8(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.Z)
        },
        a9 = function(a) {
            return new S8(a.C.getPlayerContextData())
        },
        BYa = function(a) {
            g.uc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.J.push(this.C.subscribe(b, g.Ra(this.XV, b), this))
            }, a)
        },
        CYa = function(a) {
            g.uc(a.J, function(b) {
                this.C.unsubscribeByKey(b)
            }, a);
            a.J.length = 0
        },
        b9 = function(a) {
            return 1 == a.getState()
        },
        c9 = function(a, b) {
            var c = a.D;
            50 > c.i.length + c.u.length && a.D.u.push(b)
        },
        e9 = function(a, b, c) {
            var d = a9(a);
            V8(d, c); - 1E3 != d.playerState && (d.playerState = b);
            d9(a, d)
        },
        f9 = function(a, b, c) {
            a.C.sendMessage(b, c)
        },
        d9 = function(a, b) {
            CYa(a);
            a.C.setPlayerContextData(Y8(b));
            BYa(a)
        },
        Z8 = function(a, b) {
            a.u && (a.u.removeUpdateListener(a.X), a.u.removeMediaListener(a.K), a.Lw(null));
            a.u = b;
            a.u && (c8("CP", "Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.X), a.u.addMediaListener(a.K), a.u.media.length && a.Lw(a.u.media[0]))
        },
        DYa = function(a) {
            var b = a.i.media,
                c = a.i.customData;
            if (b && c) {
                var d = a9(a);
                b.contentId != d.videoId && c8("CP", "Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                V8(d, a.i.getEstimatedTime());
                d9(a, d)
            } else c8("CP", "No cast media video. Ignoring state update.")
        },
        g9 = function(a, b, c) {
            return (0, g.E)(function(d) {
                this.qe("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.qe("Retrying " + b + " using MDx browser channel."), f9(this, b, c))
            }, a)
        },
        h9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.Ax.call(this);
            this.D = NaN;
            this.xa = !1;
            this.S = this.K = this.Z = this.oa = NaN;
            this.X = [];
            this.C = this.J = this.B = this.xc = this.i = null;
            this.Ia = a;
            this.Ba = d;
            this.X.push(g.Lu(window, "beforeunload", (0, g.E)(this.IS, this)));
            this.u = [];
            this.xc = new S8;
            this.Ka = b.id;
            this.Aa = b.idType;
            this.i = EYa(this, c);
            this.i.subscribe("handlerOpened", this.LU, this);
            this.i.subscribe("handlerClosed", this.IU, this);
            this.i.subscribe("handlerError", this.JU, this);
            this.i.subscribe("handlerMessage", this.KU, this);
            this.i.nB(b.token);
            this.subscribe("remoteQueueChange",
                function() {
                    var e = this.xc.videoId;
                    g.py() && g.my("yt-remote-session-video-id", e)
                }, this)
        },
        FYa = function(a) {
            return g.Vb(a.u, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        i9 = function(a) {
            c8("conn", a)
        },
        EYa = function(a, b) {
            return new W7($7(a.Ia, "/bc"), b, !1, function() {
                return a.MI()
            }, "shortLived" == a.Aa)
        },
        j9 = function(a, b) {
            a.ea("proxyStateChange", b)
        },
        GYa = function(a) {
            a.D = g.At((0, g.E)(function() {
                i9("Connecting timeout");
                this.ys(1)
            }, a), 2E4)
        },
        k9 = function(a) {
            g.Ct(a.D);
            a.D = NaN
        },
        l9 = function(a) {
            g.Ct(a.oa);
            a.oa = NaN
        },
        HYa = function(a) {
            m9(a);
            a.Z = g.At((0, g.E)(function() {
                n9(this, "getNowPlaying")
            }, a), 2E4)
        },
        m9 = function(a) {
            g.Ct(a.Z);
            a.Z = NaN
        },
        JYa = function(a, b) {
            var c = null;
            if (b) {
                var d = FYa(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ha("yt.mdx.remote.remoteClient_", c, void 0);
            b && (k9(a), l9(a));
            c = Y7(a.i) && isNaN(a.D);
            b == c ? b && (j9(a, 1), n9(a, "getSubtitlesTrack")) : b ? (a.SK() && a.xc.reset(), j9(a, 1), n9(a, "getNowPlaying"), IYa(a)) : a.ys(1)
        },
        KYa = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.xc.videoId && (g.We(b.params) ? a.xc.trackData = null : a.xc.trackData = b.params, a.ea("remotePlayerChange"))
        },
        LYa = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.xc.listId = b.params.listId || a.xc.listId;
            X8(a.xc, d, e);
            a.ea("remoteQueueChange", c)
        },
        NYa = function(a, b) {
            b.params = b.params || {};
            LYa(a, b, "NOW_PLAYING_MAY_CHANGE");
            MYa(a, b);
            a.ea("autoplayDismissed")
        },
        MYa = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            V8(a.xc, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.xc.playerState && (c = -1E3);
            a.xc.playerState = c;
            c = Number(b.params.loadedTime);
            a.xc.S = isNaN(c) ? 0 : c;
            a.xc.Vj(Number(b.params.duration));
            c = a.xc;
            var d = Number(b.params.liveIngestionTime);
            c.B = d;
            c.u = isNaN(d) ? !1 : !0;
            c = a.xc;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.C = isNaN(d) ? 0 : d;
            c.i = isNaN(b) ? 0 : b;
            1 == a.xc.playerState ? HYa(a) : m9(a);
            a.ea("remotePlayerChange")
        },
        OYa = function(a, b) {
            if (-1E3 != a.xc.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.xc.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                V8(a.xc, isNaN(b) ? 0 : b);
                a.ea("remotePlayerChange")
            }
        },
        PYa = function(a, b) {
            var c = "true" == b.params.muted;
            a.xc.volume = parseInt(b.params.volume, 10);
            a.xc.muted = c;
            a.ea("remotePlayerChange")
        },
        QYa = function(a, b) {
            a.J = b.params.videoId;
            a.ea("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        RYa = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.xc.Tk = "true" == b.params.hasPrevious;
            a.xc.hasNext = c;
            a.ea("previousNextChange")
        },
        IYa = function(a) {
            g.Ct(a.S);
            a.S = g.At((0, g.E)(a.ys, a, 1), 864E5)
        },
        n9 = function(a, b, c) {
            c ? i9("Sending: action=" + b + ", params=" + g.Ei(c)) : i9("Sending: action=" + b);
            a.i.sendMessage(b, c)
        },
        o9 = function(a) {
            g8.call(this, "ScreenServiceProxy");
            this.Ve = a;
            this.i = [];
            this.i.push(this.Ve.$_s("screenChange", (0, g.E)(this.gR, this)));
            this.i.push(this.Ve.$_s("onlineScreenChange", (0, g.E)(this.EV, this)))
        },
        VYa = function(a, b) {
            RWa();
            if (!p7 || !p7.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.O("MDX_CONFIG") || b;
                JWa();
                n7();
                p9 || (p9 = new Z7(b ? b.loungeApiHost : void 0), SWa() && (p9.i = "/api/loungedev"));
                q9 || (q9 = g.Ia("yt.mdx.remote.deferredProxies_") || [], g.Ha("yt.mdx.remote.deferredProxies_", q9, void 0));
                SYa();
                var c = r9();
                if (!c) {
                    var d = new q8(p9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ha("yt.mdx.remote.screenService_", d, void 0);
                    c = r9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ha("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1, void 0);
                    vYa(a, d, function(f) {
                        f ? s9() && R8(s9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            b7("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Ia("yt.mdx.remote.initialized_") && (g.Ha("yt.mdx.remote.initialized_", !0, void 0), t9("Initializing: " +
                        g.Ei(b)), u9.push(g.gv("yt-remote-cast2-api-ready", function() {
                        b7("yt-remote-api-ready")
                    })), u9.push(g.gv("yt-remote-cast2-availability-change", function() {
                        b7("yt-remote-receiver-availability-change")
                    })), u9.push(g.gv("yt-remote-cast2-receiver-selected", function() {
                        v9(null);
                        b7("yt-remote-auto-connect", "cast-selector-receiver")
                    })), u9.push(g.gv("yt-remote-cast2-receiver-resumed", function() {
                        b7("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), u9.push(g.gv("yt-remote-cast2-session-change", TYa)), u9.push(g.gv("yt-remote-connection-change", function(f) {
                        f ? R8(s9(), "YouTube TV") : w9() || (R8(null, null), yYa())
                    })), u9.push(g.gv("yt-remote-cast2-session-failed", function() {
                        b7("yt-remote-connection-failed")
                    })), a = x9(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.P("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), t9(" -- with channel params: " + g.Ei(a)), a ? (g.my("yt-remote-session-app", a.app), g.my("yt-remote-session-name", a.name)) : (g.oy("yt-remote-session-app"), g.oy("yt-remote-session-name")), g.Ha("yt.mdx.remote.channelParams_", a, void 0), c.start(), s9() || UYa())
            }
        },
        WYa = function() {
            var a = r9().Ve.$_gos();
            var b = y9();
            b && z9() && (i7(a, b) || a.push(b));
            return IWa(a)
        },
        A9 = function() {
            var a = XYa();
            !a && O8() && xYa() && (a = {
                key: "cast-selector-receiver",
                name: xYa()
            });
            return a
        },
        XYa = function() {
            var a = WYa(),
                b = y9();
            b || (b = w9());
            return g.Vb(a, function(c) {
                return b && e7(b, c.key) ? !0 : !1
            })
        },
        y9 = function() {
            var a = s9();
            if (!a) return null;
            var b = r9().Hh();
            return j7(b, a)
        },
        TYa = function(a) {
            t9("remote.onCastSessionChange_: " + f7(a));
            if (a) {
                var b = y9();
                if (b && b.id == a.id) {
                    if (R8(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) B9 && (B9.token = a), (b = z9()) && b.nB(a)
                } else b && C9(), D9(a, 1)
            } else z9() && C9()
        },
        C9 = function() {
            P8() ? M8().stopSession() : K8("stopSession called before API ready.");
            var a = z9();
            a && (a.disconnect(1), E9(null))
        },
        F9 = function() {
            var a = z9();
            return !!a && 3 != a.getProxyState()
        },
        t9 = function(a) {
            c8("remote", a)
        },
        r9 = function() {
            if (!G9) {
                var a = g.Ia("yt.mdx.remote.screenService_");
                G9 = a ? new o9(a) : null
            }
            return G9
        },
        s9 = function() {
            return g.Ia("yt.mdx.remote.currentScreenId_")
        },
        YYa = function(a) {
            g.Ha("yt.mdx.remote.currentScreenId_", a, void 0)
        },
        ZYa = function() {
            return g.Ia("yt.mdx.remote.connectData_")
        },
        v9 = function(a) {
            g.Ha("yt.mdx.remote.connectData_", a, void 0)
        },
        z9 = function() {
            return g.Ia("yt.mdx.remote.connection_")
        },
        E9 = function(a) {
            var b = z9();
            v9(null);
            a || YYa("");
            g.Ha("yt.mdx.remote.connection_", a, void 0);
            q9 && (g.uc(q9, function(c) {
                c(a)
            }), q9.length = 0);
            b && !a ? b7("yt-remote-connection-change", !1) : !b && a && b7("yt-remote-connection-change", !0)
        },
        w9 = function() {
            var a = g.py();
            if (!a) return null;
            var b = r9();
            if (!b) return null;
            b = b.Hh();
            return j7(b, a)
        },
        D9 = function(a, b) {
            s9();
            y9() && y9();
            if (H9) B9 = a;
            else {
                YYa(a.id);
                var c = g.Ia("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new h9(p9, a, x9(), c);
                a.connect(b, ZYa());
                a.subscribe("beforeDisconnect", function(d) {
                    b7("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    z9() && (z9(), E9(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = y9();
                    d && "shortLived" == d.idType && (P8() ? M8().handleBrowserChannelAuthError() : K8("refreshLoungeToken called before API ready."))
                });
                E9(a)
            }
        },
        UYa = function() {
            var a = w9();
            a ? (t9("Resume connection to: " + f7(a)), D9(a, 0)) : (o7(), yYa(), t9("Skipping connecting because no session screen found."))
        },
        SYa = function() {
            var a = x9();
            if (g.We(a)) {
                a = m7();
                var b = g.ny("yt-remote-session-name") || "",
                    c = g.ny("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                g.Ha("yt.mdx.remote.channelParams_", a, void 0)
            }
        },
        x9 = function() {
            return g.Ia("yt.mdx.remote.channelParams_") || {}
        },
        I9 = function(a, b, c) {
            g.H.call(this);
            var d = this;
            this.u = a;
            this.I = b;
            this.Wb = c;
            this.events = new g.DC(this);
            this.Z = this.events.T(this.I, "onVolumeChange", function(e) {
                $Ya(d, e)
            });
            this.D = !1;
            this.J = new g.nJ(64);
            this.i = new g.K(this.qO, 500, this);
            this.B = new g.K(this.rO, 1E3, this);
            this.S = new u7(this.AY, 0, this);
            this.C = {};
            this.X = new g.K(this.WO, 1E3, this);
            this.K = new v7(this.seekTo, 1E3, this);
            this.oa = g.Ja;
            g.I(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.oV);
            this.events.T(b, "captionschanged", this.EU);
            this.events.T(b, "captionssettingschanged", this.wO);
            this.events.T(b, "videoplayerreset", this.GA);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Wb.pK()
            });
            a = this.Wb;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.fN, this);
            a.subscribe("remotePlayerChange", this.Pw, this);
            a.subscribe("remoteQueueChange", this.GA, this);
            a.subscribe("previousNextChange", this.cN, this);
            a.subscribe("nowAutoplaying", this.WM, this);
            a.subscribe("autoplayDismissed", this.yM, this);
            g.I(this, this.i);
            g.I(this, this.B);
            g.I(this, this.S);
            g.I(this, this.X);
            g.I(this, this.K);
            this.wO();
            this.GA();
            this.Pw()
        },
        $Ya = function(a, b) {
            if (J9(a)) {
                a.Wb.unsubscribe("remotePlayerChange", a.Pw, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = a9(a.Wb);
                if (c !== d.volume || b !== d.muted) a.Wb.setVolume(c, b), a.X.start();
                a.Wb.subscribe("remotePlayerChange", a.Pw, a)
            }
        },
        aZa = function(a) {
            a.Ub(0);
            a.i.stop();
            a.Xb(new g.nJ(64))
        },
        K9 = function(a, b) {
            if (J9(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.I.getSubtitlesUserSettings()
                }, g.cf(c, b));
                a.Wb.LI(a.I.getVideoData(1).videoId, c);
                a.C = a9(a.Wb).trackData
            }
        },
        L9 = function(a, b) {
            var c = a.I.getPlaylist();
            if (null === c || void 0 === c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.I.getVideoData(1);
            a.Wb.playVideo(c.videoId, b, d, e, c.playerParams, c.Za, yWa(c));
            a.Xb(new g.nJ(1))
        },
        bZa = function(a, b) {
            if (b) {
                var c = a.I.getOption("captions", "tracklist", {
                    qL: 1
                });
                c && c.length ? (a.I.setOption("captions", "track", b), a.D = !1) : (a.I.loadModule("captions"), a.D = !0)
            } else a.I.setOption("captions", "track", {})
        },
        J9 = function(a) {
            return a9(a.Wb).videoId === a.I.getVideoData(1).videoId
        },
        M9 = function() {
            g.W.call(this, {
                G: "div",
                L: "ytp-mdx-popup-dialog",
                W: {
                    role: "dialog"
                },
                U: [{
                    G: "div",
                    L: "ytp-mdx-popup-dialog-inner-content",
                    U: [{
                        G: "div",
                        L: "ytp-mdx-popup-title",
                        va: "You're signed out"
                    }, {
                        G: "div",
                        L: "ytp-mdx-popup-description",
                        va: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        G: "div",
                        L: "ytp-mdx-privacy-popup-buttons",
                        U: [{
                            G: "button",
                            Ja: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            va: "Cancel"
                        }, {
                            G: "button",
                            Ja: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            va: "Confirm"
                        }]
                    }]
                }]
            });
            this.i = new g.TK(this, 250);
            this.cancelButton = this.Fa("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Fa("ytp-mdx-privacy-popup-confirm");
            g.I(this, this.i);
            this.T(this.cancelButton, "click", this.u);
            this.T(this.confirmButton, "click", this.B)
        },
        N9 = function(a) {
            g.W.call(this, {
                G: "div",
                L: "ytp-remote",
                U: [{
                    G: "div",
                    L: "ytp-remote-display-status",
                    U: [{
                        G: "div",
                        L: "ytp-remote-display-status-icon",
                        U: [g.zwa()]
                    }, {
                        G: "div",
                        L: "ytp-remote-display-status-text",
                        va: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.i = new g.TK(this, 250);
            g.I(this, this.i);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            cZa(this, a.Ab())
        },
        cZa = function(a, b) {
            if (3 === a.api.getPresentingPlayerType()) {
                var c = {
                    RECEIVER_NAME: a.api.getOption("remote", "currentReceiver").name
                };
                b = g.T(b, 128) ? g.vH("Error on $RECEIVER_NAME", c) : b.Ic() || g.T(b, 4) ? g.vH("Playing on $RECEIVER_NAME", c) : g.vH("Connected to $RECEIVER_NAME", c);
                a.Qa("statustext", b);
                a.i.show()
            } else a.i.hide()
        },
        O9 = function(a, b) {
            g.zP.call(this, "Play on", 0, a, b);
            this.I = a;
            this.Lo = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        P9 = function(a) {
            g.BM.call(this, a);
            this.al = {
                key: h7(),
                name: "This computer"
            };
            this.ri = null;
            this.subscriptions = [];
            this.jG = this.Wb = null;
            this.Lo = [this.al];
            this.zn = this.al;
            this.Ed = new g.nJ(64);
            this.OL = 0;
            this.Bf = -1;
            this.Xw = !1;
            this.Vw = this.Ct = null;
            if (!g.nE(this.player.V()) && !g.oE(this.player.V())) {
                a = this.player;
                var b = g.eM(a);
                b && (b = b.Pn()) && (b = new O9(a, b), g.I(this, b));
                b = new N9(a);
                g.I(this, b);
                g.oM(a, b.element, 4);
                this.Ct = new M9;
                g.I(this, this.Ct);
                g.oM(a, this.Ct.element, 4);
                this.Xw = !!w9()
            }
        },
        Q9 = function(a) {
            a.Vw && (a.player.removeEventListener("presentingplayerstatechange",
                a.Vw), a.Vw = null)
        },
        dZa = function(a, b, c) {
            a.Ed = c;
            a.player.ea("presentingplayerstatechange", new g.eH(c, b))
        },
        R9 = function(a, b) {
            if (b.key !== a.zn.key)
                if (b.key === a.al.key) C9();
                else {
                    var c;
                    (c = !a.player.V().N("mdx_enable_privacy_disclosure_ui")) || (c = ((c = g.O("PLAYER_CONFIG")) && c.args && void 0 !== c.args.authuser ? !0 : !(!g.O("SESSION_INDEX") && !g.O("LOGGED_IN"))) || a.Xw || !a.Ct);
                    (c ? 0 : g.DE(a.player.V()) || g.GE(a.player.V())) && eZa(a);
                    a.zn = b;
                    if (!a.player.V().N("disable_mdx_connection_in_mdx_module_for_music_web") || !g.oE(a.player.V())) {
                        var d = a.player.getPlaylistId();
                        c = a.player.getVideoData(1);
                        var e = c.videoId;
                        if (!d && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.V().N("should_clear_video_data_on_player_cued_unstarted")) a =
                            null;
                        else {
                            var f = a.player.getPlaylist();
                            if (f) {
                                var h = [];
                                for (var l = 0; l < f.length; l++) h[l] = g.vM(f, l).videoId
                            } else h = [e];
                            f = a.player.getCurrentTime(1);
                            a = {
                                videoIds: h,
                                listId: d,
                                videoId: e,
                                playerParams: c.playerParams,
                                clickTrackingParams: c.Za,
                                index: Math.max(a.player.getPlaylistIndex(), 0),
                                currentTime: 0 === f ? void 0 : f
                            };
                            (c = yWa(c)) && (a.locationInfo = c)
                        }
                        t9("Connecting to: " + g.Ei(b));
                        "cast-selector-receiver" == b.key ? (v9(a || null), b = a || null, P8() ? M8().setLaunchParams(b) : K8("setLaunchParams called before ready.")) : !a && F9() &&
                            s9() == b.key ? b7("yt-remote-connection-change", !0) : (C9(), v9(a || null), a = r9().Hh(), (b = j7(a, b.key)) && D9(b, 1))
                    }
                }
        },
        eZa = function(a) {
            a.player.Ab().Ic() ? a.player.pauseVideo() : (a.Vw = function(b) {
                !a.Xw && g.gH(b, 8) && (a.player.pauseVideo(), Q9(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.Vw));
            a.Ct && a.Ct.jd();
            z9() || (H9 = !0)
        },
        gXa = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        H7 = {
            "'": "\\'"
        },
        EWa = {
            WZ: "atp",
            Aaa: "ska",
            g$: "que",
            X7: "mus",
            zaa: "sus",
            Z3: "dsp",
            E$: "seq",
            A7: "mic",
            S2: "dpa",
            l_: "cds",
            V7: "mlm",
            P2: "dsdtr"
        };
    c7.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    };
    var p7, l7 = "",
        YWa = TWa("loadCastFramework") || TWa("loadCastApplicationFramework"),
        $Wa = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    g.Ta(u7, g.H);
    g.k = u7.prototype;
    g.k.UQ = function(a) {
        this.C = arguments;
        this.i = !1;
        this.Pb ? this.B = g.Sa() + this.Zf : this.Pb = g.bi(this.D, this.Zf)
    };
    g.k.stop = function() {
        this.Pb && (g.C.clearTimeout(this.Pb), this.Pb = null);
        this.B = null;
        this.i = !1;
        this.C = []
    };
    g.k.pause = function() {
        ++this.u
    };
    g.k.resume = function() {
        this.u && (--this.u, !this.u && this.i && (this.i = !1, this.J.apply(null, this.C)))
    };
    g.k.ya = function() {
        this.stop();
        u7.pe.ya.call(this)
    };
    g.k.VQ = function() {
        this.Pb && (g.C.clearTimeout(this.Pb), this.Pb = null);
        this.B ? (this.Pb = g.bi(this.D, this.B - g.Sa()), this.B = null) : this.u ? this.i = !0 : (this.i = !1, this.J.apply(null, this.C))
    };
    g.w(v7, g.H);
    g.k = v7.prototype;
    g.k.GI = function(a) {
        this.B = arguments;
        this.Pb || this.u ? this.i = !0 : w7(this)
    };
    g.k.stop = function() {
        this.Pb && (g.C.clearTimeout(this.Pb), this.Pb = null, this.i = !1, this.B = null)
    };
    g.k.pause = function() {
        this.u++
    };
    g.k.resume = function() {
        this.u--;
        this.u || !this.i || this.Pb || (this.i = !1, w7(this))
    };
    g.k.ya = function() {
        g.H.prototype.ya.call(this);
        this.stop()
    };
    x7.prototype.stringify = function(a) {
        return g.C.JSON.stringify(a, void 0)
    };
    x7.prototype.parse = function(a) {
        return g.C.JSON.parse(a, void 0)
    };
    var z7 = new g.vf;
    g.w(bXa, g.ye);
    g.k = B7.prototype;
    g.k.hp = null;
    g.k.Pm = !1;
    g.k.pu = null;
    g.k.EH = null;
    g.k.Ht = null;
    g.k.Vt = null;
    g.k.jn = null;
    g.k.Oo = null;
    g.k.Cq = null;
    g.k.Of = null;
    g.k.MB = 0;
    g.k.Zj = null;
    g.k.KB = null;
    g.k.Ym = null;
    g.k.Mu = -1;
    g.k.dO = !0;
    g.k.Ap = !1;
    g.k.zC = 0;
    g.k.bB = null;
    var eXa = {},
        E7 = {};
    g.k = B7.prototype;
    g.k.setTimeout = function(a) {
        this.u = a
    };
    g.k.WQ = function(a) {
        a = a.target;
        var b = this.bB;
        b && 3 == g.lj(a) ? b.GI() : this.eP(a)
    };
    g.k.eP = function(a) {
        try {
            if (a == this.Of) a: {
                var b = g.lj(this.Of),
                    c = this.Of.u,
                    d = this.Of.getStatus();
                if (g.Kc && !g.Dc(10) || g.ch && !g.Cc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.qj(this.Of)) break a;this.Ap || 4 != b || 7 == c || (8 == c || 0 >= d ? this.i.Mj(3) : this.i.Mj(2));I7(this);
                var e = this.Of.getStatus();this.Mu = e;
                var f = g.qj(this.Of);
                if (this.Pm = 200 == e) {
                    4 == b && F7(this);
                    if (this.D) {
                        for (a = !0; !this.Ap && this.MB < f.length;) {
                            var h = fXa(this, f);
                            if (h == E7) {
                                4 == b && (this.Ym = 4, A7(15), a = !1);
                                break
                            } else if (h == eXa) {
                                this.Ym = 4;
                                A7(16);
                                a = !1;
                                break
                            } else J7(this, h)
                        }
                        4 == b && 0 == f.length && (this.Ym = 1, A7(17), a = !1);
                        this.Pm = this.Pm && a;
                        a || (F7(this), G7(this))
                    } else J7(this, f);
                    this.Pm && !this.Ap && (4 == b ? this.i.qy(this) : (this.Pm = !1, D7(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Ym = 3, A7(13)) : (this.Ym = 0, A7(14)),
                F7(this),
                G7(this)
            }
        } catch (l) {
            this.Of && g.qj(this.Of)
        } finally {}
    };
    g.k.WW = function(a) {
        y7((0, g.E)(this.VW, this, a), 0)
    };
    g.k.VW = function(a) {
        this.Ap || (I7(this), J7(this, a), D7(this))
    };
    g.k.nN = function(a) {
        y7((0, g.E)(this.UW, this, a), 0)
    };
    g.k.UW = function(a) {
        this.Ap || (F7(this), this.Pm = a, this.i.qy(this), this.i.Mj(4))
    };
    g.k.cancel = function() {
        this.Ap = !0;
        F7(this)
    };
    g.k.dX = function() {
        this.pu = null;
        var a = Date.now();
        0 <= a - this.EH ? (2 != this.Vt && this.i.Mj(3), F7(this), this.Ym = 2, A7(18), G7(this)) : iXa(this, this.EH - a)
    };
    g.k.getLastError = function() {
        return this.Ym
    };
    g.k = lXa.prototype;
    g.k.AC = null;
    g.k.rh = null;
    g.k.cB = !1;
    g.k.sO = null;
    g.k.ez = null;
    g.k.eF = null;
    g.k.BC = null;
    g.k.ji = null;
    g.k.El = -1;
    g.k.Nu = null;
    g.k.Wu = null;
    g.k.connect = function(a) {
        this.BC = a;
        a = L7(this.i, null, this.BC);
        A7(3);
        this.sO = Date.now();
        var b = this.i.S;
        null != b ? (this.Nu = b[0], (this.Wu = b[1]) ? (this.ji = 1, mXa(this)) : (this.ji = 2, N7(this))) : (Z6(a, "MODE", "init"), this.rh = new B7(this, void 0, void 0, void 0), this.rh.hp = this.AC, C7(this.rh, a, !1, null, !0), this.ji = 0)
    };
    g.k.KR = function(a) {
        if (a) this.ji = 2, N7(this);
        else {
            A7(4);
            var b = this.i;
            b.qk = b.vn.El;
            U7(b, 9)
        }
        a && this.Mj(2)
    };
    g.k.KD = function(a) {
        return this.i.KD(a)
    };
    g.k.abort = function() {
        this.rh && (this.rh.cancel(), this.rh = null);
        this.El = -1
    };
    g.k.xf = function() {
        return !1
    };
    g.k.gN = function(a, b) {
        this.El = a.Mu;
        if (0 == this.ji)
            if (b) {
                try {
                    var c = this.u.parse(b)
                } catch (d) {
                    a = this.i;
                    a.qk = this.El;
                    U7(a, 2);
                    return
                }
                this.Nu = c[0];
                this.Wu = c[1]
            } else a = this.i, a.qk = this.El, U7(a, 2);
        else if (2 == this.ji)
            if (this.cB) A7(7), this.eF = Date.now();
            else if ("11111" == b) {
            if (A7(6), this.cB = !0, this.ez = Date.now(), a = this.ez - this.sO, !g.Kc || g.Dc(10) || 500 > a) this.El = 200, this.rh.cancel(), A7(12), M7(this.i, this, !0)
        } else A7(8), this.ez = this.eF = Date.now(), this.cB = !1
    };
    g.k.qy = function() {
        this.El = this.rh.Mu;
        if (this.rh.Pm) 0 == this.ji ? this.Wu ? (this.ji = 1, mXa(this)) : (this.ji = 2, N7(this)) : 2 == this.ji && ((!g.Kc || g.Dc(10) ? !this.cB : 200 > this.eF - this.ez) ? (A7(11), M7(this.i, this, !1)) : (A7(12), M7(this.i, this, !0)));
        else {
            0 == this.ji ? A7(9) : 2 == this.ji && A7(10);
            var a = this.i;
            this.rh.getLastError();
            a.qk = this.El;
            U7(a, 2)
        }
    };
    g.k.zx = function() {
        return this.i.zx()
    };
    g.k.isActive = function() {
        return this.i.isActive()
    };
    g.k.Mj = function(a) {
        this.i.Mj(a)
    };
    g.k = O7.prototype;
    g.k.pk = null;
    g.k.Dv = null;
    g.k.Yg = null;
    g.k.Ne = null;
    g.k.CC = null;
    g.k.fz = null;
    g.k.EJ = null;
    g.k.sy = null;
    g.k.Cw = 0;
    g.k.XT = 0;
    g.k.Pf = null;
    g.k.Hn = null;
    g.k.Nl = null;
    g.k.Jp = null;
    g.k.vn = null;
    g.k.IB = null;
    g.k.Xs = -1;
    g.k.NL = -1;
    g.k.qk = -1;
    g.k.Cs = 0;
    g.k.Wr = 0;
    g.k.Bp = 8;
    g.Ta(oXa, g.ye);
    g.Ta(pXa, g.ye);
    g.k = O7.prototype;
    g.k.connect = function(a, b, c, d, e) {
        A7(0);
        this.CC = b;
        this.Dv = c || {};
        d && void 0 !== e && (this.Dv.OSID = d, this.Dv.OAID = e);
        this.J ? (y7((0, g.E)(this.ZJ, this, a), 100), tXa(this)) : this.ZJ(a)
    };
    g.k.ZJ = function(a) {
        this.vn = new lXa(this);
        this.vn.AC = this.pk;
        this.vn.u = this.D;
        this.vn.connect(a)
    };
    g.k.xf = function() {
        return 0 == this.i
    };
    g.k.getState = function() {
        return this.i
    };
    g.k.lN = function(a) {
        this.Hn = null;
        xXa(this, a)
    };
    g.k.kN = function() {
        this.Nl = null;
        this.Ne = new B7(this, this.B, "rpc", this.K);
        this.Ne.hp = this.pk;
        this.Ne.zC = 0;
        var a = this.EJ.clone();
        g.Xk(a, "RID", "rpc");
        g.Xk(a, "SID", this.B);
        g.Xk(a, "CI", this.IB ? "0" : "1");
        g.Xk(a, "AID", this.Xs);
        P7(this, a);
        if (!g.Kc || g.Dc(10)) g.Xk(a, "TYPE", "xmlhttp"), C7(this.Ne, a, !0, this.sy, !1);
        else {
            g.Xk(a, "TYPE", "html");
            var b = this.Ne,
                c = !!this.sy;
            b.Vt = 3;
            b.jn = Y6(a.clone());
            hXa(b, c)
        }
    };
    g.k.gN = function(a, b) {
        if (0 != this.i && (this.Ne == a || this.Yg == a))
            if (this.qk = a.Mu, this.Yg == a && 3 == this.i)
                if (7 < this.Bp) {
                    try {
                        var c = this.D.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.Nl) {
                                if (this.Ne)
                                    if (this.Ne.Ht + 3E3 < this.Yg.Ht) R7(this), this.Ne.cancel(), this.Ne = null;
                                    else break a;
                                T7(this);
                                A7(19)
                            }
                        }
                    else this.NL = a[1], 0 < this.NL - this.Xs && 37500 > a[2] && this.IB && 0 == this.Wr && !this.Jp && (this.Jp = y7((0, g.E)(this.BU, this), 6E3));
                    else U7(this, 11)
                } else null != b && U7(this, 11);
        else if (this.Ne ==
            a && R7(this), !g.gb(b))
            for (a = this.D.parse(b), b = 0; b < a.length; b++) c = a[b], this.Xs = c[0], c = c[1], 2 == this.i ? "c" == c[0] ? (this.B = c[1], this.sy = c[2], c = c[3], null != c ? this.Bp = c : this.Bp = 6, this.i = 3, this.Pf && this.Pf.VJ(), this.EJ = L7(this, this.zx() ? this.sy : null, this.CC), yXa(this)) : "stop" == c[0] && U7(this, 7) : 3 == this.i && ("stop" == c[0] ? U7(this, 7) : "noop" != c[0] && this.Pf && this.Pf.UJ(c), this.Wr = 0)
    };
    g.k.BU = function() {
        null != this.Jp && (this.Jp = null, this.Ne.cancel(), this.Ne = null, T7(this), A7(20))
    };
    g.k.qy = function(a) {
        if (this.Ne == a) {
            R7(this);
            this.Ne = null;
            var b = 2
        } else if (this.Yg == a) this.Yg = null, b = 1;
        else return;
        this.qk = a.Mu;
        if (0 != this.i)
            if (a.Pm)
                if (1 == b) {
                    b = Date.now() - a.Ht;
                    var c = z7;
                    c.dispatchEvent(new oXa(c, a.Cq ? a.Cq.length : 0, b, this.Cs));
                    Q7(this);
                    this.C.length = 0
                } else yXa(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.qk)) {
                if (d = 1 == b) this.Yg || this.Hn || 1 == this.i || 2 <= this.Cs ? d = !1 : (this.Hn = y7((0, g.E)(this.lN, this, a), zXa(this, this.Cs)), this.Cs++, d = !0);
                d = !(d || 2 == b && T7(this))
            }
            if (d) switch (c) {
                case 1:
                    U7(this,
                        5);
                    break;
                case 4:
                    U7(this, 10);
                    break;
                case 3:
                    U7(this, 6);
                    break;
                case 7:
                    U7(this, 12);
                    break;
                default:
                    U7(this, 2)
            }
        }
    };
    g.k.mS = function(a) {
        if (!g.Zb(arguments, this.i)) throw Error("Unexpected channel state: " + this.i);
    };
    g.k.hY = function(a) {
        a ? A7(2) : (A7(1), AXa(this, 8))
    };
    g.k.KD = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.fj;
        a.S = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Pf && this.Pf.isActive(this)
    };
    g.k.Mj = function(a) {
        var b = z7;
        b.dispatchEvent(new pXa(b, a))
    };
    g.k.zx = function() {
        return !(!g.Kc || g.Dc(10))
    };
    g.k = BXa.prototype;
    g.k.VJ = function() {};
    g.k.UJ = function() {};
    g.k.TJ = function() {};
    g.k.wD = function() {};
    g.k.GK = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = CXa.prototype;
    g.k.isEmpty = function() {
        return 0 === this.i.length && 0 === this.u.length
    };
    g.k.clear = function() {
        this.i = [];
        this.u = []
    };
    g.k.contains = function(a) {
        return g.Zb(this.i, a) || g.Zb(this.u, a)
    };
    g.k.remove = function(a) {
        var b = this.i;
        var c = (0, g.sQa)(b, a);
        0 <= c ? (g.cc(b, c), b = !0) : b = !1;
        return b || g.dc(this.u, a)
    };
    g.k.Di = function() {
        for (var a = [], b = this.i.length - 1; 0 <= b; --b) a.push(this.i[b]);
        var c = this.u.length;
        for (b = 0; b < c; ++b) a.push(this.u[b]);
        return a
    };
    g.Ta(V7, g.H);
    g.k = V7.prototype;
    g.k.NW = function() {
        this.Zf = Math.min(3E5, 2 * this.Zf);
        this.B();
        this.u && this.start()
    };
    g.k.start = function() {
        var a = this.Zf + 15E3 * Math.random();
        g.or(this.i, a);
        this.u = Date.now() + a
    };
    g.k.stop = function() {
        this.i.stop();
        this.u = 0
    };
    g.k.isActive = function() {
        return this.i.isActive()
    };
    g.k.reset = function() {
        this.i.stop();
        this.Zf = 5E3
    };
    g.Ta(W7, BXa);
    g.k = W7.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.B.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.B.unsubscribe(a, b, c)
    };
    g.k.hg = function(a) {
        return this.B.hg(a)
    };
    g.k.ea = function(a, b) {
        return this.B.ea.apply(this.B, arguments)
    };
    g.k.dispose = function() {
        this.Z || (this.Z = !0, g.ve(this.B), FXa(this), g.ve(this.u), this.u = null, this.oa = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.Z
    };
    g.k.connect = function(a, b, c) {
        if (!this.i || 2 != this.i.getState()) {
            this.X = "";
            this.u.stop();
            this.D = a || null;
            this.C = b || 0;
            a = this.xa + "/test";
            b = this.xa + "/bind";
            var d = new O7(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Aa),
                e = this.i;
            e && (e.Pf = null);
            d.Pf = this;
            this.i = d;
            X7(this);
            if (this.i) {
                d = g.O("ID_TOKEN");
                var f = this.i.pk || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.i.pk = f
            }
            e ? (3 != e.getState() && 0 == vXa(e) || e.getState(), this.i.connect(a, b, this.J, e.B, e.Xs)) : c ? this.i.connect(a,
                b, this.J, c.sessionId, c.arrayId) : this.i.connect(a, b, this.J)
        }
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.cf(a, b);
        this.u.isActive() || 2 == (this.i ? this.i.getState() : 0) ? this.K.push(a) : Y7(this) && (X7(this), uXa(this.i, a))
    };
    g.k.VJ = function() {
        this.u.reset();
        this.D = null;
        this.C = 0;
        if (this.K.length) {
            var a = this.K;
            this.K = [];
            for (var b = 0, c = a.length; b < c; ++b) uXa(this.i, a[b])
        }
        this.ea("handlerOpened")
    };
    g.k.TJ = function(a) {
        var b = 2 == a && 401 == this.i.qk;
        4 == a || b || this.u.start();
        this.ea("handlerError", a, b)
    };
    g.k.wD = function(a) {
        if (!this.u.isActive()) this.ea("handlerClosed");
        else if (a)
            for (var b = 0, c = a.length; b < c; ++b) {
                var d = a[b].map;
                d && this.K.push(d)
            }
    };
    g.k.GK = function() {
        var a = {
            v: 2
        };
        this.X && (a.gsessionid = this.X);
        0 != this.C && (a.ui = "" + this.C);
        0 != this.S && (a.ui = "" + this.S);
        this.D && g.cf(a, this.D);
        return a
    };
    g.k.UJ = function(a) {
        "S" == a[0] ? this.X = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), sXa(this.i)) : this.ea("handlerMessage", new DXa(a[0], a[1]))
    };
    g.k.nB = function(a) {
        (this.J.loungeIdToken = a) || this.u.stop();
        if (this.Ba && this.i) {
            var b = this.i.pk || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.i.pk = b
        }
    };
    g.k.IX = function() {
        this.u.isActive();
        0 == vXa(this.i) && this.connect(this.D, this.C)
    };
    Z7.prototype.C = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    Z7.prototype.B = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    Z7.prototype.D = function(a) {
        a(Error("request timed out"))
    };
    var MXa = Date.now(),
        b8 = null,
        e8 = Array(50),
        d8 = -1,
        f8 = !1;
    g.Ta(g8, g.Ax);
    g8.prototype.Hh = function() {
        return this.screens
    };
    g8.prototype.contains = function(a) {
        return !!i7(this.screens, a)
    };
    g8.prototype.get = function(a) {
        return a ? j7(this.screens, a) : null
    };
    g8.prototype.info = function(a) {
        c8(this.J, a)
    };
    g.w(h8, g.Ax);
    g.k = h8.prototype;
    g.k.start = function() {
        !this.i && isNaN(this.Pb) && this.xN()
    };
    g.k.stop = function() {
        this.i && (this.i.abort(), this.i = null);
        isNaN(this.Pb) || (g.Ct(this.Pb), this.Pb = NaN)
    };
    g.k.ya = function() {
        this.stop();
        g.Ax.prototype.ya.call(this)
    };
    g.k.xN = function() {
        this.Pb = NaN;
        this.i = g.Gt($7(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.K
            },
            timeout: 5E3,
            onSuccess: (0, g.E)(this.YQ, this),
            onError: (0, g.E)(this.XQ, this),
            onTimeout: (0, g.E)(this.ZQ, this)
        })
    };
    g.k.YQ = function(a, b) {
        this.i = null;
        a = b.screen || {};
        a.dialId = this.C;
        a.name = this.J;
        b = -1;
        this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.ea("pairingComplete", new d7(a), b)
    };
    g.k.XQ = function(a) {
        this.i = null;
        a.status && 404 == a.status ? this.u >= fZa.length ? this.ea("pairingFailed", Error("DIAL polling timed out")) : (a = fZa[this.u], this.Pb = g.At((0, g.E)(this.xN, this), a), this.u++) : this.ea("pairingFailed", Error("Server error " + a.status))
    };
    g.k.ZQ = function() {
        this.i = null;
        this.ea("pairingFailed", Error("Server not responding"))
    };
    var fZa = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Ta(j8, g8);
    g.k = j8.prototype;
    g.k.start = function() {
        i8(this) && this.ea("screenChange");
        !g.ny("yt-remote-lounge-token-expiration") && QXa(this);
        g.Ct(this.i);
        this.i = g.At((0, g.E)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        i8(this);
        NXa(this, a);
        k8(this, !1);
        this.ea("screenChange");
        b(a);
        a.token || QXa(this)
    };
    g.k.remove = function(a, b) {
        var c = i8(this);
        PXa(this, a) && (k8(this, !1), c = !0);
        b(a);
        c && this.ea("screenChange")
    };
    g.k.GB = function(a, b, c, d) {
        var e = i8(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, k8(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.ea("screenChange")
    };
    g.k.ya = function() {
        g.Ct(this.i);
        j8.pe.ya.call(this)
    };
    g.k.NS = function(a) {
        i8(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        k8(this, !b);
        b && c8(this.J, "Missed " + b + " lounge tokens.")
    };
    g.k.MS = function(a) {
        c8(this.J, "Requesting lounge tokens failed: " + a)
    };
    g.w(m8, g.Ax);
    g.k = m8.prototype;
    g.k.start = function() {
        var a = parseInt(g.ny("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.Sa() - 144E5 < a ? 0 : a) ? p8(this): (this.C = g.Sa() + 3E5, g.my("yt-remote-fast-check-period", this.C), this.vG())
    };
    g.k.isEmpty = function() {
        return g.We(this.i)
    };
    g.k.update = function() {
        l8("Updating availability on schedule.");
        var a = this.J(),
            b = g.Ie(this.i, function(c, d) {
                return c && !!j7(a, d)
            }, this);
        o8(this, b)
    };
    g.k.ya = function() {
        g.Ct(this.B);
        this.B = NaN;
        this.u && (this.u.abort(), this.u = null);
        g.Ax.prototype.ya.call(this)
    };
    g.k.vG = function() {
        g.Ct(this.B);
        this.B = NaN;
        this.u && this.u.abort();
        var a = SXa(this);
        if ($6(a)) {
            var b = $7(this.D, "/pairing/get_screen_availability");
            this.u = a8(this.D, b, {
                lounge_token: g.Re(a).join(",")
            }, (0, g.E)(this.rW, this, a), (0, g.E)(this.qW, this))
        } else o8(this, {}), p8(this)
    };
    g.k.rW = function(a, b) {
        this.u = null;
        var c = g.Re(SXa(this));
        if (g.sc(c, g.Re(a))) {
            b = b.screens || [];
            c = {};
            for (var d = 0, e = b.length; d < e; ++d) c[a[b[d].loungeToken]] = "online" == b[d].status;
            o8(this, c);
            p8(this)
        } else this.qe("Changing Screen set during request."), this.vG()
    };
    g.k.qW = function(a) {
        this.qe("Screen availability failed: " + a);
        this.u = null;
        p8(this)
    };
    g.k.qe = function(a) {
        c8("OnlineScreenService", a)
    };
    g.Ta(q8, g8);
    g.k = q8.prototype;
    g.k.start = function() {
        this.u.start();
        this.i.start();
        this.screens.length && (this.ea("screenChange"), this.i.isEmpty() || this.ea("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.u.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.u.remove(a, b, c);
        this.i.update()
    };
    g.k.GB = function(a, b, c, d) {
        this.u.contains(a) ? this.u.GB(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, c8(this.J, a), d(Error(a)))
    };
    g.k.Hh = function(a) {
        return a ? this.screens : g.gc(this.screens, g.Cp(this.B, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.HI = function() {
        return g.Cp(this.Hh(!0), function(a) {
            return !!this.i.i[a.id]
        }, this)
    };
    g.k.II = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new h8(this.C, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.ve(l);
            e(r8(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.ve(l);
            f(m)
        });
        l.start();
        return (0, g.E)(l.stop, l)
    };
    g.k.aR = function(a, b, c, d) {
        g.Gt($7(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.E)(function(e, f) {
                e = new d7(f.screen || {});
                if (!e.name || WXa(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); WXa(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(r8(this, e))
            }, this),
            onError: (0, g.E)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.E)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.ya = function() {
        g.ve(this.u);
        g.ve(this.i);
        q8.pe.ya.call(this)
    };
    g.k.XS = function() {
        YXa(this);
        this.ea("screenChange");
        this.i.update()
    };
    q8.prototype.dispose = q8.prototype.dispose;
    g.Ta(t8, g.Ax);
    g.k = t8.prototype;
    g.k.getScreen = function() {
        return this.C
    };
    g.k.Cg = function(a) {
        this.isDisposed() || (a && (v8(this, "" + a), this.ea("sessionFailed")), this.C = null, this.ea("sessionScreen", null))
    };
    g.k.info = function(a) {
        c8(this.Ba, a)
    };
    g.k.JI = function() {
        return null
    };
    g.k.KG = function(a) {
        var b = this.i;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.E)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.E)(function() {
            v8(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.ya = function() {
        this.KG("");
        t8.pe.ya.call(this)
    };
    g.w(w8, t8);
    g.k = w8.prototype;
    g.k.JG = function(a) {
        if (this.u) {
            if (this.u == a) return;
            v8(this, "Overriding cast session with new session object");
            gYa(this);
            this.xa = !1;
            this.X = "unknown";
            this.u.removeUpdateListener(this.oa);
            this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa)
        }
        this.u = a;
        this.u.addUpdateListener(this.oa);
        this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa);
        cYa(this, "getMdxSessionStatus")
    };
    g.k.Ys = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Ei(a))
    };
    g.k.stop = function() {
        this.u ? this.u.stop((0, g.E)(function() {
            this.Cg()
        }, this), (0, g.E)(function() {
            this.Cg(Error("Failed to stop receiver app."))
        }, this)) : this.Cg(Error("Stopping cast device without session."))
    };
    g.k.KG = function() {};
    g.k.ya = function() {
        this.info("disposeInternal");
        gYa(this);
        this.u && (this.u.removeUpdateListener(this.oa), this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa));
        this.u = null;
        t8.prototype.ya.call(this)
    };
    g.k.hX = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = a7(b), g.Na(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Ei(b)), a) {
                    case "mdxSessionStatus":
                        aYa(this, b);
                        break;
                    case "loungeToken":
                        dYa(this, b);
                        break;
                    default:
                        v8(this, "Unknown youtube message: " + a)
                } else v8(this, "Unable to parse message.");
                else v8(this, "No data in message.")
    };
    g.k.TK = function(a, b, c, d) {
        g.Ct(this.S);
        this.S = 0;
        VXa(this.B, this.i.label, a, this.i.friendlyName, (0, g.E)(function(e) {
            e ? b(e) : 0 <= d ? (v8(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.S = g.At((0, g.E)(this.TK, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.JI = function() {
        return this.u
    };
    g.k.bR = function(a) {
        this.isDisposed() || a || (v8(this, "Cast session died."), this.Cg())
    };
    g.w(z8, t8);
    g.k = z8.prototype;
    g.k.JG = function(a) {
        this.u = a;
        this.u.addUpdateListener(this.Ia)
    };
    g.k.Ys = function(a) {
        this.Ka = a;
        this.Z()
    };
    g.k.stop = function() {
        nYa(this);
        this.u ? this.u.stop((0, g.E)(this.Cg, this, null), (0, g.E)(this.Cg, this, "Failed to stop DIAL device.")) : this.Cg()
    };
    g.k.ya = function() {
        nYa(this);
        this.u && this.u.removeUpdateListener(this.Ia);
        this.u = null;
        t8.prototype.ya.call(this)
    };
    g.k.cR = function(a) {
        this.isDisposed() || a || (v8(this, "DIAL session died."), this.D(), this.D = g.Ja, this.Cg())
    };
    g.w(D8, t8);
    D8.prototype.stop = function() {
        this.Cg()
    };
    D8.prototype.JG = function() {};
    D8.prototype.Ys = function() {
        g.Ct(this.u);
        this.u = NaN;
        var a = j7(this.B.Hh(), this.i.label);
        a ? u8(this, a) : this.Cg(Error("No such screen"))
    };
    D8.prototype.ya = function() {
        g.Ct(this.u);
        this.u = NaN;
        t8.prototype.ya.call(this)
    };
    g.w(E8, g.Ax);
    g.k = E8.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.S, [chrome.cast.Capability.AUDIO_OUT]);
        this.X || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.J ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.E)(this.cW, this);
        c = new chrome.cast.ApiConfig(c, (0, g.E)(this.hN, this), e, d, a);
        c.customDialLaunchCallback = (0, g.E)(this.WU, this);
        chrome.cast.initialize(c, (0, g.E)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.D), JXa(), this.u.subscribe("onlineScreenChange", (0, g.E)(this.KI, this)), this.B = qYa(this), chrome.cast.setCustomReceivers(this.B, g.Ja, (0, g.E)(function(f) {
                this.qe("Failed to set initial custom receivers: " + g.Ei(f))
            }, this)), this.ea("yt-remote-cast2-availability-change", G8(this)), b(!0))
        }, this), (0, g.E)(function(f) {
            this.qe("Failed to initialize API: " + g.Ei(f));
            b(!1)
        }, this))
    };
    g.k.MX = function(a, b) {
        F8("Setting connected screen ID: " + a + " -> " + b);
        if (this.i) {
            var c = this.i.getScreen();
            if (!a || c && c.id != a) F8("Unsetting old screen status: " + this.i.i.friendlyName), H8(this, null)
        }
        if (a && b) {
            if (!this.i) {
                c = j7(this.u.Hh(), a);
                if (!c) {
                    F8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    F8("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = oYa(this, c);
                a || (F8("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, g.Ja, (0, g.E)(function(d) {
                    this.qe("Failed to set initial custom receivers: " + g.Ei(d))
                }, this)));
                F8("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                H8(this, new D8(this.u, a), !0)
            }
            this.i.KG(b)
        } else F8("setConnectedScreenStatus: no screen.")
    };
    g.k.OX = function(a) {
        this.isDisposed() ? this.qe("Setting connection data on disposed cast v2") : this.i ? this.i.Ys(a) : this.qe("Setting connection data without a session")
    };
    g.k.eR = function() {
        this.isDisposed() ? this.qe("Stopping session on disposed cast v2") : this.i ? (this.i.stop(), H8(this, null)) : F8("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.E)(this.hN, this), (0, g.E)(this.uW, this))
    };
    g.k.ya = function() {
        this.u.unsubscribe("onlineScreenChange", (0, g.E)(this.KI, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D);
        var a = GXa,
            b = g.Ia("yt.mdx.remote.debug.handlers_");
        g.dc(b || [], a);
        g.ve(this.i);
        g.Ax.prototype.ya.call(this)
    };
    g.k.qe = function(a) {
        c8("Controller", a)
    };
    g.k.jN = function(a, b) {
        this.i == a && (b || H8(this, null), this.ea("yt-remote-cast2-session-change", b))
    };
    g.k.ZV = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), F8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.i)
                        if (this.i.i.label != a.label) F8("onReceiverAction_: Stopping active receiver: " + this.i.i.friendlyName), this.i.stop();
                        else {
                            F8("onReceiverAction_: Casting to active receiver.");
                            this.i.getScreen() && this.ea("yt-remote-cast2-session-change", this.i.getScreen());
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            H8(this,
                                new D8(this.u, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            H8(this, new z8(this.u, a, this.C, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            H8(this, new w8(this.u, a, this.config_));
                            break;
                        default:
                            this.qe("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.i && this.i.i.label == a.label ? this.i.stop() : this.qe("Stopping receiver w/o session: " + a.friendlyName)
            } else this.qe("onReceiverAction_ called without receiver.")
    };
    g.k.WU = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.qe("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.i ? this.i.i : null;
        if (!c || c.label != b.label) return this.qe("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.i.getScreen()) return F8("Reselecting dial screen."),
                this.ea("yt-remote-cast2-session-change", this.i.getScreen()), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.qe('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            H8(this, new z8(this.u, b, this.C, this.config_))
        }
        b = this.i;
        b.S = a;
        b.S.appState == chrome.cast.DialAppState.RUNNING ? (a = b.S.extraData || {}, c = a.screenId || null, A8(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = kYa(b, {
            name: b.i.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.S.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.ht(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = lYa(b, c)) : a = lYa(b, c)) : a = C8(b);
        return a
    };
    g.k.hN = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.J) {
            F8("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.i)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) F8("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), H8(this, new w8(this.u, c, this.config_), !0);
                    else {
                        this.qe("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.i.i,
                    e = j7(this.u.Hh(),
                        d.label);
                e && e7(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (F8("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.ve(this.i), this.i = new w8(this.u, c, this.config_), this.i.subscribe("sessionScreen", (0, g.E)(this.jN, this, this.i)), this.i.subscribe("sessionFailed", function() {
                    return pYa(b, b.i)
                }), this.i.Ys(null));
                this.i.JG(a)
            }
        }
    };
    g.k.dR = function() {
        return this.i ? this.i.JI() : null
    };
    g.k.uW = function(a) {
        this.isDisposed() || (this.qe("Failed to estabilish a session: " + g.Ei(a)), a.code != chrome.cast.ErrorCode.CANCEL && H8(this, null), this.ea("yt-remote-cast2-session-failed"))
    };
    g.k.cW = function(a) {
        F8("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = G8(this);
            this.K = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            G8(this) != b && this.ea("yt-remote-cast2-availability-change", G8(this))
        }
    };
    g.k.KI = function() {
        this.isDisposed() || (this.B = qYa(this), F8("Updating custom receivers: " + g.Ei(this.B)), chrome.cast.setCustomReceivers(this.B, g.Ja, (0, g.E)(function() {
            this.qe("Failed to set custom receivers.")
        }, this)), this.ea("yt-remote-cast2-availability-change", G8(this)))
    };
    E8.prototype.setLaunchParams = E8.prototype.OX;
    E8.prototype.setConnectedScreenStatus = E8.prototype.MX;
    E8.prototype.stopSession = E8.prototype.eR;
    E8.prototype.getCastSession = E8.prototype.dR;
    E8.prototype.requestSession = E8.prototype.requestSession;
    E8.prototype.init = E8.prototype.init;
    E8.prototype.dispose = E8.prototype.dispose;
    var N8 = [];
    g.k = S8.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        T8(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Tk = a.hasPrevious, this.hasNext = a.hasNext, this.K = a.playerTime, this.J = a.playerTimeAt, this.C = a.seekableStart, this.i = a.seekableEnd, this.D = a.duration, this.S = a.loadedTime, this.B = a.liveIngestionTime, this.u = !isNaN(this.B))
    };
    g.k.Ic = function() {
        return 1 == this.playerState
    };
    g.k.isAdPlaying = function() {
        return 1081 == this.playerState
    };
    g.k.Vj = function(a) {
        this.D = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.u ? this.D + U8(this) : this.D
    };
    g.k.clone = function() {
        return new S8(Y8(this))
    };
    g.w($8, g.Ax);
    g.k = $8.prototype;
    g.k.getState = function() {
        return this.B
    };
    g.k.play = function() {
        b9(this) ? (this.i ? this.i.play(null, g.Ja, g9(this, "play")) : f9(this, "play"), e9(this, 1, W8(a9(this))), this.ea("remotePlayerChange")) : c9(this, this.play)
    };
    g.k.pause = function() {
        b9(this) ? (this.i ? this.i.pause(null, g.Ja, g9(this, "pause")) : f9(this, "pause"), e9(this, 2, W8(a9(this))), this.ea("remotePlayerChange")) : c9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (b9(this)) {
            if (this.i) {
                var b = a9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.Ic() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.i.seek(c, g.Ja, g9(this, "seekTo", {
                    newTime: a
                }))
            } else f9(this, "seekTo", {
                newTime: a
            });
            e9(this, 3, a);
            this.ea("remotePlayerChange")
        } else c9(this, g.Ra(this.seekTo, a))
    };
    g.k.stop = function() {
        if (b9(this)) {
            this.i ? this.i.stop(null, g.Ja, g9(this, "stopVideo")) : f9(this, "stopVideo");
            var a = a9(this);
            a.index = -1;
            a.videoId = "";
            T8(a);
            d9(this, a);
            this.ea("remotePlayerChange")
        } else c9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (b9(this)) {
            var c = a9(this);
            if (this.u) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.u.setReceiverVolumeLevel(d, (0, g.E)(function() {
                        c8("CP", "set receiver volume: " + d)
                    }, this), (0, g.E)(function() {
                        this.qe("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.u.setReceiverMuted(b, (0, g.E)(function() {
                    c8("CP", "set receiver muted: " + b)
                }, this), (0, g.E)(function() {
                    this.qe("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                f9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            d9(this, c)
        } else c9(this, g.Ra(this.setVolume, a, b))
    };
    g.k.LI = function(a, b) {
        if (b9(this)) {
            var c = a9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Ei(b.style), g.cf(a, c.trackData));
            f9(this, "setSubtitlesTrack", a);
            d9(this, c)
        } else c9(this, g.Ra(this.LI, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        b9(this) ? (b = b.getLanguageInfo().getId(), f9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = a9(this), a.audioTrackId = b, d9(this, a)) : c9(this, g.Ra(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = a9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        X8(l, a, c || 0);
        void 0 !== b && (V8(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Ei(h));
        f9(this, "setPlaylist", m);
        d || d9(this, l)
    };
    g.k.UA = function(a, b) {
        if (b9(this)) {
            if (a && b) {
                var c = a9(this);
                X8(c, a, b);
                d9(this, c)
            }
            f9(this, "previous")
        } else c9(this, g.Ra(this.UA, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (b9(this)) {
            if (a && b) {
                var c = a9(this);
                X8(c, a, b);
                d9(this, c)
            }
            f9(this, "next")
        } else c9(this, g.Ra(this.nextVideo, a, b))
    };
    g.k.Zr = function() {
        if (b9(this)) {
            f9(this, "clearPlaylist");
            var a = a9(this);
            a.reset();
            d9(this, a);
            this.ea("remotePlayerChange")
        } else c9(this, this.Zr)
    };
    g.k.pK = function() {
        b9(this) ? f9(this, "dismissAutoplay") : c9(this, this.pK)
    };
    g.k.dispose = function() {
        if (3 != this.B) {
            var a = this.B;
            this.B = 3;
            this.ea("proxyStateChange", a, this.B)
        }
        g.Ax.prototype.dispose.call(this)
    };
    g.k.ya = function() {
        CYa(this);
        this.C = null;
        this.D.clear();
        Z8(this, null);
        g.Ax.prototype.ya.call(this)
    };
    g.k.LG = function(a) {
        if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) {
            var b = this.B;
            this.B = a;
            this.ea("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.isEmpty();) b = a = this.D, 0 === b.i.length && (b.i = b.u, b.i.reverse(), b.u = []), a.i.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.XV = function(a, b) {
        this.ea(a, b)
    };
    g.k.HU = function(a) {
        if (!a) this.Lw(null), Z8(this, null);
        else if (this.u.receiver.volume) {
            a = this.u.receiver.volume;
            var b = a9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) c8("CP", "Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, d9(this, b)
        }
    };
    g.k.Lw = function(a) {
        c8("CP", "Cast media: " + !!a);
        this.i && this.i.removeUpdateListener(this.S);
        if (this.i = a) this.i.addUpdateListener(this.S), DYa(this), this.ea("remotePlayerChange")
    };
    g.k.GU = function(a) {
        a ? (DYa(this), this.ea("remotePlayerChange")) : this.Lw(null)
    };
    g.k.gH = function() {
        f9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.OU = function() {
        var a = zYa();
        a && Z8(this, a)
    };
    g.k.qe = function(a) {
        c8("CP", a)
    };
    g.w(h9, g.Ax);
    g.k = h9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Ba && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.xc.listId = c);
            this.xc.videoId = d;
            this.xc.index = l || 0;
            this.xc.state = 3;
            V8(this.xc,
                n);
            this.C = "UNSUPPORTED";
            c = this.Ba ? "setInitialState" : "setPlaylist";
            i9("Connecting with " + c + " and params: " + g.Ei(m));
            this.i.connect({
                method: c,
                params: g.Ei(m)
            }, a, MWa())
        } else i9("Connecting without params"), this.i.connect({}, a, MWa());
        GYa(this)
    };
    g.k.nB = function(a) {
        this.i.nB(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Ha("yt.mdx.remote.remoteClient_", null, void 0), this.ea("beforeDispose"), j9(this, 3));
        g.Ax.prototype.dispose.call(this)
    };
    g.k.ya = function() {
        k9(this);
        m9(this);
        l9(this);
        g.Ct(this.K);
        this.K = NaN;
        g.Ct(this.S);
        this.S = NaN;
        this.B = null;
        g.Mu(this.X);
        this.X.length = 0;
        this.i.dispose();
        g.Ax.prototype.ya.call(this);
        this.C = this.J = this.u = this.xc = this.i = null
    };
    g.k.IS = function() {
        this.ys(2)
    };
    g.k.LU = function() {
        i9("Channel opened");
        this.xa && (this.xa = !1, l9(this), this.oa = g.At((0, g.E)(function() {
            i9("Timing out waiting for a screen.");
            this.ys(1)
        }, this), 15E3));
        QWa(EXa(this.i), this.Ka)
    };
    g.k.IU = function() {
        i9("Channel closed");
        isNaN(this.D) ? o7(!0) : o7();
        this.dispose()
    };
    g.k.JU = function(a, b) {
        o7();
        isNaN(this.Sv()) ? (b && "shortLived" == this.Aa && this.ea("browserChannelAuthError", a), i9("Channel error: " + a + " without reconnection"), this.dispose()) : (this.xa = !0, i9("Channel error: " + a + " with reconnection in " + this.Sv() + " ms"), j9(this, 2))
    };
    g.k.yL = function(a) {
        if (!this.u || 0 === this.u.length) return !1;
        for (var b = g.q(this.u), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.KU = function(a) {
        a.params ? i9("Received: action=" + a.action + ", params=" + g.Ei(a.params)) : i9("Received: action=" + a.action + " {}");
        switch (a.action) {
            case "loungeStatus":
                a = a7(a.params.devices);
                this.u = g.on(a, function(c) {
                    return new c7(c)
                });
                a = !!g.Vb(this.u, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                JYa(this, a);
                a = this.yL("mlm");
                this.ea("multiStateLoopEnabled", a);
                break;
            case "loungeScreenDisconnected":
                g.ec(this.u, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                JYa(this, !1);
                break;
            case "remoteConnected":
                var b = new c7(a7(a.params.device));
                g.Vb(this.u, function(c) {
                    return c.equals(b)
                }) || zWa(this.u, b);
                break;
            case "remoteDisconnected":
                b = new c7(a7(a.params.device));
                g.ec(this.u, function(c) {
                    return c.equals(b)
                });
                break;
            case "gracefulDisconnect":
                break;
            case "playlistModified":
                LYa(this, a, "QUEUE_MODIFIED");
                break;
            case "nowPlaying":
                NYa(this, a);
                break;
            case "onStateChange":
                MYa(this, a);
                break;
            case "onAdStateChange":
                OYa(this, a);
                break;
            case "onVolumeChanged":
                PYa(this, a);
                break;
            case "onSubtitlesTrackChanged":
                KYa(this, a);
                break;
            case "nowAutoplaying":
                QYa(this, a);
                break;
            case "autoplayDismissed":
                this.ea("autoplayDismissed");
                break;
            case "autoplayUpNext":
                this.J = a.params.videoId || null;
                this.ea("autoplayUpNext", this.J);
                break;
            case "onAutoplayModeChanged":
                this.C =
                    a.params.autoplayMode;
                this.ea("autoplayModeChange", this.C);
                "DISABLED" == this.C && this.ea("autoplayDismissed");
                break;
            case "onHasPreviousNextChanged":
                RYa(this, a);
                break;
            case "requestAssistedSignIn":
                this.ea("assistedSignInRequested", a.params.authCode);
                break;
            case "onLoopModeChanged":
                this.ea("loopModeChange", a.params.loopMode);
                break;
            default:
                i9("Unrecognized action: " + a.action)
        }
    };
    g.k.CX = function() {
        if (this.B) {
            var a = this.B;
            this.B = null;
            this.xc.videoId != a && n9(this, "getNowPlaying")
        }
    };
    g.k.ES = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.Sv()) ? Y7(this.i) && isNaN(this.D) && (a = 1) : a = 2);
        return a
    };
    g.k.ys = function(a) {
        i9("Disconnecting with " + a);
        g.Ha("yt.mdx.remote.remoteClient_", null, void 0);
        k9(this);
        this.ea("beforeDisconnect", a);
        1 == a && o7();
        FXa(this.i, a);
        this.dispose()
    };
    g.k.CS = function() {
        var a = this.xc;
        this.B && (a = this.xc.clone(), X8(a, this.B, a.index));
        return Y8(a)
    };
    g.k.PX = function(a) {
        var b = new S8(a);
        b.videoId && b.videoId != this.xc.videoId && (this.B = b.videoId, g.Ct(this.K), this.K = g.At((0, g.E)(this.CX, this), 5E3));
        var c = [];
        this.xc.listId == b.listId && this.xc.videoId == b.videoId && this.xc.index == b.index || c.push("remoteQueueChange");
        this.xc.playerState == b.playerState && this.xc.volume == b.volume && this.xc.muted == b.muted && W8(this.xc) == W8(b) && g.Ei(this.xc.trackData) == g.Ei(b.trackData) || c.push("remotePlayerChange");
        this.xc.reset(a);
        g.uc(c, function(d) {
            this.ea(d)
        }, this)
    };
    g.k.SK = function() {
        var a = this.i.J.id,
            b = g.Vb(this.u, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.Sv = function() {
        var a = this.i;
        return a.u.isActive() ? a.u.u - Date.now() : NaN
    };
    g.k.zS = function() {
        return this.C || "UNSUPPORTED"
    };
    g.k.AS = function() {
        return this.J || ""
    };
    g.k.fR = function() {
        if (!isNaN(this.Sv())) {
            var a = this.i.u;
            g.pr(a.i);
            a.start()
        }
    };
    g.k.LX = function(a, b) {
        n9(this, a, b);
        IYa(this)
    };
    g.k.MI = function() {
        var a = g.hu("SID", "") || "",
            b = g.hu("SAPISID", "") || "",
            c = g.hu("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.Gc(g.db(a), 2);
        b = g.Gc(g.db(b), 2);
        c = g.Gc(g.db(c), 2);
        return g.Gc(g.db(a + "," + b + "," + c), 2)
    };
    h9.prototype.subscribe = h9.prototype.subscribe;
    h9.prototype.unsubscribeByKey = h9.prototype.hg;
    h9.prototype.getProxyState = h9.prototype.ES;
    h9.prototype.disconnect = h9.prototype.ys;
    h9.prototype.getPlayerContextData = h9.prototype.CS;
    h9.prototype.setPlayerContextData = h9.prototype.PX;
    h9.prototype.getOtherConnectedRemoteId = h9.prototype.SK;
    h9.prototype.getReconnectTimeout = h9.prototype.Sv;
    h9.prototype.getAutoplayMode = h9.prototype.zS;
    h9.prototype.getAutoplayVideoId = h9.prototype.AS;
    h9.prototype.reconnect = h9.prototype.fR;
    h9.prototype.sendMessage = h9.prototype.LX;
    h9.prototype.getXsrfToken = h9.prototype.MI;
    h9.prototype.isCapabilitySupportedOnConnectedDevices = h9.prototype.yL;
    g.w(o9, g8);
    g.k = o9.prototype;
    g.k.Hh = function(a) {
        return this.Ve.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.Ve.$_c(a)
    };
    g.k.get = function(a) {
        return this.Ve.$_g(a)
    };
    g.k.start = function() {
        this.Ve.$_st()
    };
    g.k.add = function(a, b, c) {
        this.Ve.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.Ve.$_r(a, b, c)
    };
    g.k.GB = function(a, b, c, d) {
        this.Ve.$_un(a, b, c, d)
    };
    g.k.ya = function() {
        for (var a = 0, b = this.i.length; a < b; ++a) this.Ve.$_ubk(this.i[a]);
        this.i.length = 0;
        this.Ve = null;
        g8.prototype.ya.call(this)
    };
    g.k.gR = function() {
        this.ea("screenChange")
    };
    g.k.EV = function() {
        this.ea("onlineScreenChange")
    };
    q8.prototype.$_st = q8.prototype.start;
    q8.prototype.$_gspc = q8.prototype.aR;
    q8.prototype.$_gsppc = q8.prototype.II;
    q8.prototype.$_c = q8.prototype.contains;
    q8.prototype.$_g = q8.prototype.get;
    q8.prototype.$_a = q8.prototype.add;
    q8.prototype.$_un = q8.prototype.GB;
    q8.prototype.$_r = q8.prototype.remove;
    q8.prototype.$_gs = q8.prototype.Hh;
    q8.prototype.$_gos = q8.prototype.HI;
    q8.prototype.$_s = q8.prototype.subscribe;
    q8.prototype.$_ubk = q8.prototype.hg;
    var B9 = null,
        H9 = !1,
        p9 = null,
        q9 = null,
        G9 = null,
        u9 = [];
    g.w(I9, g.H);
    g.k = I9.prototype;
    g.k.ya = function() {
        g.H.prototype.ya.call(this);
        this.i.stop();
        this.B.stop();
        this.S.stop();
        this.oa();
        var a = this.Wb;
        a.unsubscribe("proxyStateChange", this.fN, this);
        a.unsubscribe("remotePlayerChange", this.Pw, this);
        a.unsubscribe("remoteQueueChange", this.GA, this);
        a.unsubscribe("previousNextChange", this.cN, this);
        a.unsubscribe("nowAutoplaying", this.WM, this);
        a.unsubscribe("autoplayDismissed", this.yM, this);
        this.Wb = this.u = null
    };
    g.k.Ej = function(a) {
        var b = g.Ba.apply(1, arguments);
        if (2 != this.Wb.B)
            if (J9(this)) {
                var c = a;
                if (!a9(this.Wb).isAdPlaying() || "control_seek" !== c) switch (c) {
                    case "control_toggle_play_pause":
                        a9(this.Wb).Ic() ? this.Wb.pause() : this.Wb.play();
                        break;
                    case "control_play":
                        this.Wb.play();
                        break;
                    case "control_pause":
                        this.Wb.pause();
                        break;
                    case "control_seek":
                        this.K.GI(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        K9(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.I.getCurrentTime();
                    L9(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    L9(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    K9(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.EU = function(a) {
        this.S.UQ(a)
    };
    g.k.AY = function(a) {
        this.Ej("control_subtitles_set_track", g.We(a) ? null : a)
    };
    g.k.wO = function() {
        var a = this.I.getOption("captions", "track");
        g.We(a) || K9(this, a)
    };
    g.k.Ub = function(a) {
        this.u.Ub(a, this.I.getVideoData().lengthSeconds)
    };
    g.k.oV = function() {
        g.We(this.C) || bZa(this, this.C);
        this.D = !1
    };
    g.k.fN = function(a, b) {
        this.B.stop();
        2 === b && this.rO()
    };
    g.k.Pw = function() {
        if (J9(this)) {
            this.i.stop();
            var a = a9(this.Wb);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.u.Bf = 1;
                    break;
                case 1082:
                case 1083:
                    this.u.Bf = 0;
                    break;
                default:
                    this.u.Bf = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Xb(new g.nJ(8));
                    this.qO();
                    break;
                case 1085:
                case 3:
                    this.Xb(new g.nJ(9));
                    break;
                case 1083:
                case 0:
                    this.Xb(new g.nJ(2));
                    this.K.stop();
                    this.Ub(this.I.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Xb(new g.nJ(4));
                    break;
                case 2:
                    this.Xb(new g.nJ(4));
                    this.Ub(W8(a));
                    break;
                case -1:
                    this.Xb(new g.nJ(64));
                    break;
                case -1E3:
                    this.Xb(new g.nJ(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback."
                    }))
            }
            a = a9(this.Wb).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, bZa(this, a));
            a = a9(this.Wb); - 1 === a.volume || Math.round(this.I.getVolume()) === a.volume && this.I.isMuted() === a.muted || this.X.isActive() || this.WO()
        } else aZa(this)
    };
    g.k.cN = function() {
        this.I.ea("mdxpreviousnextchange")
    };
    g.k.GA = function() {
        J9(this) || aZa(this)
    };
    g.k.WM = function(a) {
        isNaN(a) || this.I.ea("mdxnowautoplaying", a)
    };
    g.k.yM = function() {
        this.I.ea("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        J9(this) && this.Wb.setAudioTrack(this.I.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === a9(this.Wb).playerState ? L9(this, a) : b && this.Wb.seekTo(a)
    };
    g.k.WO = function() {
        var a = this;
        if (J9(this)) {
            var b = a9(this.Wb);
            this.events.yc(this.Z);
            b.muted ? this.I.mute() : this.I.unMute();
            this.I.setVolume(b.volume);
            this.Z = this.events.T(this.I, "onVolumeChange", function(c) {
                $Ya(a, c)
            })
        }
    };
    g.k.qO = function() {
        this.i.stop();
        if (!this.Wb.isDisposed()) {
            var a = a9(this.Wb);
            a.Ic() && this.Xb(new g.nJ(8));
            this.Ub(W8(a));
            this.i.start()
        }
    };
    g.k.rO = function() {
        this.B.stop();
        this.i.stop();
        var a = this.Wb.C.getReconnectTimeout();
        2 == this.Wb.B && !isNaN(a) && this.B.start()
    };
    g.k.Xb = function(a) {
        this.B.stop();
        var b = this.J;
        if (!g.sJ(b, a)) {
            var c = g.T(a, 2);
            c !== g.T(this.J, 2) && this.I.Nt(c);
            this.J = a;
            dZa(this.u, b, a)
        }
    };
    g.w(M9, g.W);
    M9.prototype.jd = function() {
        this.i.show()
    };
    M9.prototype.Db = function() {
        this.i.hide()
    };
    M9.prototype.u = function() {
        b7("mdx-privacy-popup-cancel");
        this.Db()
    };
    M9.prototype.B = function() {
        b7("mdx-privacy-popup-confirm");
        this.Db()
    };
    g.w(N9, g.W);
    N9.prototype.onStateChange = function(a) {
        cZa(this, a.state)
    };
    g.w(O9, g.zP);
    O9.prototype.D = function() {
        var a = this.I.getOption("remote", "receivers");
        a && 1 < a.length && !this.I.getOption("remote", "quickCast") ? (this.Lo = g.vc(a, this.i, this), g.AP(this, g.on(a, this.i)), a = this.I.getOption("remote", "currentReceiver"), a = this.i(a), this.options[a] && this.gi(a), this.enable(!0)) : this.enable(!1)
    };
    O9.prototype.i = function(a) {
        return a.key
    };
    O9.prototype.vj = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.Lo[a].name
    };
    O9.prototype.Gf = function(a) {
        g.zP.prototype.Gf.call(this, a);
        this.I.setOption("remote", "currentReceiver", this.Lo[a]);
        this.vb.Db()
    };
    g.w(P9, g.BM);
    g.k = P9.prototype;
    g.k.create = function() {
        var a = this.player.V(),
            b = g.lE(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token")
        };
        VYa(b, a);
        this.subscriptions.push(g.gv("yt-remote-before-disconnect", this.DU, this));
        this.subscriptions.push(g.gv("yt-remote-connection-change", this.dW, this));
        this.subscriptions.push(g.gv("yt-remote-receiver-availability-change", this.eN,
            this));
        this.subscriptions.push(g.gv("yt-remote-auto-connect", this.bW, this));
        this.subscriptions.push(g.gv("yt-remote-receiver-resumed", this.aW, this));
        this.subscriptions.push(g.gv("mdx-privacy-popup-confirm", this.rX, this));
        this.subscriptions.push(g.gv("mdx-privacy-popup-cancel", this.qX, this));
        this.eN()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.BM.prototype.load.call(this);
        this.ri = new I9(this, this.player, this.Wb);
        var a = (a = ZYa()) ? a.currentTime : 0;
        var b = F9() ? new $8(z9(), void 0) : null;
        0 == a && b && (a = W8(a9(b)));
        0 !== a && this.Ub(a);
        dZa(this, this.Ed, this.Ed);
        this.player.ol(6)
    };
    g.k.unload = function() {
        this.player.ea("mdxautoplaycanceled");
        this.zn = this.al;
        (0, g.we)(this.ri, this.Wb);
        this.Wb = this.ri = null;
        g.BM.prototype.unload.call(this);
        this.player.ol(5);
        Q9(this)
    };
    g.k.ya = function() {
        g.hv(this.subscriptions);
        g.BM.prototype.ya.call(this)
    };
    g.k.bl = function(a) {
        var b = g.Ba.apply(1, arguments);
        this.loaded && this.ri.Ej.apply(this.ri, [a].concat(g.u(b)))
    };
    g.k.getAdState = function() {
        return this.Bf
    };
    g.k.Tk = function() {
        return this.Wb ? a9(this.Wb).Tk : !1
    };
    g.k.hasNext = function() {
        return this.Wb ? a9(this.Wb).hasNext : !1
    };
    g.k.Ub = function(a, b) {
        this.OL = a || 0;
        this.player.ea("progresssync", a, b);
        this.player.Pa("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.OL
    };
    g.k.getProgressState = function() {
        var a = a9(this.Wb),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: this.player.V().N("web_player_mdx_allow_seeking_change_killswitch") ? this.player.yf() : !a.isAdPlaying() && this.player.yf(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.B + U8(a) : a.B,
            isAtLiveHead: 1 >= (a.u ? a.i + U8(a) : a.i) - this.getCurrentTime(),
            loaded: a.S,
            seekableEnd: a.u ? a.i + U8(a) : a.i,
            seekableStart: 0 <
                a.C ? a.C + U8(a) : a.C
        }
    };
    g.k.nextVideo = function() {
        this.Wb && this.Wb.nextVideo()
    };
    g.k.UA = function() {
        this.Wb && this.Wb.UA()
    };
    g.k.DU = function(a) {
        1 === a && (this.jG = this.Wb ? a9(this.Wb) : null)
    };
    g.k.dW = function() {
        var a = F9() ? new $8(z9(), void 0) : null;
        if (a) {
            var b = this.zn;
            this.loaded && this.unload();
            this.Wb = a;
            this.jG = null;
            b.key !== this.al.key && (this.zn = b, this.load())
        } else(0, g.ve)(this.Wb), this.Wb = null, this.loaded && (this.unload(), (a = this.jG) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, W8(a)));
        this.player.ea("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.eN = function() {
        var a = [this.al],
            b = a.concat,
            c = WYa();
        O8() && g.ny("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Lo = b.call(a, c);
        a = A9() || this.al;
        R9(this, a);
        this.player.Pa("onMdxReceiversChange")
    };
    g.k.bW = function() {
        var a = A9();
        R9(this, a)
    };
    g.k.aW = function() {
        this.zn = A9()
    };
    g.k.rX = function() {
        this.Xw = !0;
        Q9(this);
        H9 = !1;
        B9 && D9(B9, 1);
        B9 = null
    };
    g.k.qX = function() {
        this.Xw = !1;
        Q9(this);
        R9(this, this.al);
        this.zn = this.al;
        H9 = !1;
        B9 = null;
        this.player.playVideo()
    };
    g.k.rf = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Lo;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? Q8() : R9(this, b)), this.loaded ? this.zn : this.al;
            case "quickCast":
                return 2 === this.Lo.length && "cast-selector-receiver" === this.Lo[1].key ? (b && Q8(), !0) : !1
        }
    };
    g.k.gH = function() {
        this.Wb.gH()
    };
    g.k.Yi = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.AM("remote", P9);
})(_yt_player);