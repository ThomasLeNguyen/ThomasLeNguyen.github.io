google.maps.__gjsload__('search_impl', function(_) {
    var oab = function(a) {
            _.F(this, a, 4)
        },
        qab = function(a) {
            pab || (pab = {
                N: "sssM",
                Z: ["ss"]
            });
            var b = pab;
            return _.Jh.g(a.qb(), b)
        },
        rab = function(a, b) {
            a.H[0] = b
        },
        sab = function(a, b) {
            a.H[2] = b
        },
        X$ = function(a) {
            _.F(this, a, 3)
        },
        tab = function() {
            var a = _.cj,
                b = _.oi;
            this.h = _.ne;
            this.g = _.Xj(_.oq, a, _.Qq + "/maps/api/js/LayersService.GetFeature", b)
        },
        wab = function(a, b, c) {
            var d = _.Tz(new tab);
            c.op = (0, _.La)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.GBa(c, _.SG(b));
            var e = [];
            e.push(_.L.addListener(c, "click", (0, _.La)(uab, null, a)));
            _.Va(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.L.addListener(c, f, (0, _.La)(vab, null, a, f)))
            });
            e.push(_.L.addListener(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.h = e
        },
        uab = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.bk(e, 1) ? new _.$e(_.ae(e.getLocation(), 0), _.ae(e.getLocation(), 1)) : null;
                f.fields = {};
                for (var g = 0, h = _.je(e, 2); g < h; ++g) {
                    var k = new _.YG(_.ge(e, 2, g));
                    f.fields[k.getKey()] = _.H(k, 1)
                }
            }
            _.L.trigger(a, "click", b, c, d, f)
        },
        vab =
        function(a, b, c, d, e, f, g) {
            var h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.L.trigger(a, b, c, d, e, h, g)
        },
        xab = function() {},
        pab;
    _.D(oab, _.E);
    oab.prototype.getParameter = function(a) {
        return new _.YG(_.ge(this, 3, a))
    };
    _.D(X$, _.E);
    X$.prototype.getStatus = function() {
        return _.$d(this, 0, -1)
    };
    X$.prototype.getLocation = function() {
        return new _.ol(this.H[1])
    };
    tab.prototype.load = function(a, b) {
        function c(g) {
            g = new X$(g);
            b(g)
        }
        var d = new oab;
        rab(d, a.layerId.split("|")[0]);
        d.H[1] = a.g;
        sab(d, _.ke(_.me(this.h)));
        for (var e in a.parameters) {
            var f = new _.YG(_.fe(d, 3));
            f.H[0] = e;
            f.H[1] = a.parameters[e]
        }
        a = qab(d);
        this.g(a, c, c);
        return a
    };
    tab.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    xab.prototype.Hs = function(a) {
        if (_.rh[15]) {
            var b = a.Qd,
                c = a.Qd = a.getMap();
            b && a.g && (a.i ? (b = b.__gm.g, b.set(b.get().qf(a.g))) : a.g && _.bCa(a.g, b) && (_.Va(a.h || [], _.L.removeListener), a.h = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer");
                b = new _.cl;
                d = d.split("|");
                b.layerId = d[0];
                for (var k = 1; k < d.length; ++k) {
                    var l = d[k].split(":");
                    b.parameters[l[0]] = l[1]
                }
                e && (b.spotlightDescription = new _.mo(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.fl(g));
                h && (b.mapsApiLayer = new _.hk(h));
                a.g = b;
                a.i = a.get("renderOnBaseMap");
                a.i ? (a = c.__gm.g, a.set(a.get().De(b))) : wab(a, c, b);
                _.O(c, "Lg")
            }
        }
    };
    _.pf("search_impl", new xab);
});
