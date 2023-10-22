(()=>{
    "use strict";
    const e = "__brackets-ld-highlight"
      , t = {
        "background-color": "rgba(0, 162, 255, 0.5)",
        opacity: 0
    }
      , o = {
        "background-color": "rgb(106, 171, 233)",
        opacity: .6
    }
      , n = {
        "background-color": "rgb(156, 221, 156)"
    }
      , r = {
        "background-color": "rgb(255 ,177 ,95)"
    }
      , i = "rgba(21, 165, 255, 0.85)"
      , s = !0;
    function a(e) {
        return e.offsetTop + (e.offsetParent ? a(e.offsetParent) : 0)
    }
    function l() {}
    let d, c;
    const p = function(e) {
        d && (window.cancelAnimationFrame(d),
        window.clearTimeout(c)),
        d = window.requestAnimationFrame(l),
        c = setTimeout((function() {
            window.cancelAnimationFrame(d),
            d = null
        }
        ), 1e3 * e)
    };
    class f {
        constructor(e) {
            this.elements = [],
            this.selector = '[data-highlight="true"]',
            this.trigger = !!e
        }
        elementExists(e) {
            let t;
            for (t in this.elements)
                if (this.elements[t] === e)
                    return !0;
            return !1
        }
        makeHighlightDiv(a, l) {
            const d = a.getBoundingClientRect()
              , c = window.document.createElement("div")
              , f = window.getComputedStyle(a)
              , u = parseFloat(f.getPropertyValue("transition-duration"))
              , g = parseFloat(f.getPropertyValue("animation-duration"));
            if (u && p(u),
            g && p(g),
            0 === d.width && 0 === d.height)
                return;
            const h = {
                right: f.getPropertyValue("border-right-width"),
                left: f.getPropertyValue("border-left-width"),
                top: f.getPropertyValue("border-top-width"),
                bottom: f.getPropertyValue("border-bottom-width")
            }
              , m = "border-box" === f.boxSizing;
            let y = parseFloat(f.width)
              , w = parseFloat(f.height)
              , b = w
              , v = y;
            m || (y += parseFloat(f.paddingLeft) + parseFloat(f.paddingRight),
            w += parseFloat(f.paddingTop) + parseFloat(f.paddingBottom),
            v = y + parseFloat(h.right) + parseFloat(h.left),
            b = w + parseFloat(h.bottom) + parseFloat(h.top));
            const x = {
                horizontal: "left, right",
                vertical: "top, bottom"
            }
              , F = function(e) {
                const t = {};
                return x.horizontal.indexOf(e) >= 0 ? (t.width = f.getPropertyValue("padding-" + e),
                t.height = w + "px",
                t.top = 0,
                m && (t.height = w - parseFloat(h.top) - parseFloat(h.bottom) + "px")) : (t.height = f.getPropertyValue("padding-" + e),
                t.width = y + "px",
                t.left = 0,
                m && (t.width = y - parseFloat(h.left) - parseFloat(h.right) + "px")),
                t[e] = 0,
                t.position = "absolute",
                t
            }
              , P = function(e) {
                const t = {}
                  , o = [];
                return o.right = parseFloat(f.getPropertyValue("margin-right")),
                o.top = parseFloat(f.getPropertyValue("margin-top")),
                o.bottom = parseFloat(f.getPropertyValue("margin-bottom")),
                o.left = parseFloat(f.getPropertyValue("margin-left")),
                x.horizontal.indexOf(e) >= 0 ? (t.width = f.getPropertyValue("margin-" + e),
                t.height = b + o.top + o.bottom + "px",
                t.top = "-" + (o.top + parseFloat(h.top)) + "px") : (t.height = f.getPropertyValue("margin-" + e),
                t.width = v + "px",
                t.left = "-" + h.left),
                t[e] = "-" + (o[e] + parseFloat(h[e])) + "px",
                t.position = "absolute",
                t
            }
              , S = function(e) {
                !s || parseInt(e.height, 10) <= 0 || parseInt(e.width, 10) <= 0 ? e.display = "none" : e.display = "block"
            }
              , E = [F("top"), F("right"), F("bottom"), F("left")]
              , k = function(e, t) {
                let o;
                for (o = 0; o < e.length; o++) {
                    S(e[o]),
                    e[o].transform = "none";
                    const n = window.document.createElement("div");
                    I(Object.assign({}, t, e[o]), n.style),
                    c.appendChild(n)
                }
            };
            k([P("top"), P("right"), P("bottom"), P("left")], r),
            k(E, n),
            c.className = e,
            function(e) {
                const t = e.getBoundingClientRect()
                  , o = window.document.body;
                let n, r;
                if ("static" === window.getComputedStyle(o).position)
                    r = t.left + window.pageXOffset,
                    n = t.top + window.pageYOffset;
                else {
                    const e = o.getBoundingClientRect();
                    r = t.left - e.left,
                    n = t.top - e.top
                }
            }(a);
            let T = a
              , O = 0
              , C = 0;
            do {
                O += T.offsetLeft,
                C += T.offsetTop,
                T = T.offsetParent
            } while (T);
            const H = {
                left: O + "px",
                top: C + "px",
                width: y + "px",
                height: w + "px",
                "z-index": 2e6,
                margin: 0,
                padding: 0,
                position: "absolute",
                "pointer-events": "none",
                "box-shadow": "0 0 1px #fff",
                "box-sizing": f.getPropertyValue("box-sizing"),
                "border-right": f.getPropertyValue("border-right"),
                "border-left": f.getPropertyValue("border-left"),
                "border-top": f.getPropertyValue("border-top"),
                "border-bottom": f.getPropertyValue("border-bottom"),
                transform: f.getPropertyValue("transform"),
                "transform-origin": f.getPropertyValue("transform-origin"),
                "border-color": i
            }
              , V = Object.assign({}, H)
              , L = t
              , M = o;
            function I(e, t) {
                let o;
                for (o in e)
                    t.setProperty(o, e[o])
            }
            I(V, c.style),
            I(l ? L : M, c.style),
            l && (I({
                "transition-property": "opacity, background-color, transform",
                "transition-duration": "300ms, 2.3s"
            }, c.style),
            window.setTimeout((function() {
                I(M, c.style)
            }
            ), 20)),
            window.document.body.appendChild(c)
        }
        add(e, t) {
            if (!this.elementExists(e) && e !== window.document) {
                if (this.trigger,
                (!window.event || window.event instanceof MessageEvent) && !function(e) {
                    const t = e.getBoundingClientRect()
                      , o = window.document.documentElement;
                    return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || o.clientHeight) && t.right <= (window.innerWidth || o.clientWidth)
                }(e)) {
                    let t = a(e);
                    t && (t -= window.innerHeight / 2,
                    window.scrollTo(0, t))
                }
                this.elements.push(e),
                this.makeHighlightDiv(e, t)
            }
        }
        clear() {
            let t;
            const o = window.document.querySelectorAll("." + e)
              , n = window.document.body;
            for (t = 0; t < o.length; t++)
                n.removeChild(o[t]);
            if (this.trigger)
                for (t = 0; t < this.elements.length; t++)
                    this.elements[t];
            this.elements = []
        }
        redraw() {
            let e, t;
            for (t = this.selector ? window.document.querySelectorAll(this.selector) : this.elements.slice(0),
            this.clear(),
            e = 0; e < t.length; e++)
                this.add(t[e], !1)
        }
    }
    var u = function(e, t, o, n) {
        return new (o || (o = Promise))((function(r, i) {
            function s(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function l(e) {
                var t;
                e.done ? r(e.value) : (t = e.value,
                t instanceof o ? t : new o((function(e) {
                    e(t)
                }
                ))).then(s, a)
            }
            l((n = n.apply(e, t || [])).next())
        }
        ))
    };
    let g;
    const h = !!document.body && document.body.hasAttribute("data-server-no-reload");
    h && console.info("[Five Server] Reload disabled due to 'data-server-no-reload' attribute on BODY element"),
    "WebSocket"in window && !h && window.addEventListener("load", (()=>{
        console.log("[Five Server] connecting...");
        const e = document.querySelector('[data-id="five-server"]')
          , t = ("fsws",
        `${o = `${"http:" === window.location.protocol ? "ws://" : "wss://"}${new URL(e.src).host}`,
        o.replace(/\/+$/g, "")}/${(e=>e.replace(/^\/+/g, ""))("fsws")}`);
        var o;
        const n = e.getAttribute("data-inject-body");
        n && "true" === n.toString() && (g = document.body ? document.body.cloneNode(!0) : void 0);
        let r = null;
        const i = new f(!0);
        i.redraw(),
        window.addEventListener("resize", (()=>{
            i.redraw()
        }
        ));
        const s = "[Five Server] connected.";
        let a, l = 1e3, d = 0, c = "";
        const p = (e,t,o={})=>{
            const n = JSON.stringify({
                message: e,
                type: t,
                options: o
            });
            if (c === n && "css updated" !== e)
                return;
            c = n;
            let i = document.getElementById("fiveserver-info-wrapper");
            i && i.remove();
            const {time: s=3, animation: a=!0} = o;
            i = document.createElement("div"),
            i.id = "fiveserver-info-wrapper",
            i.classList.add(`fiveserver-info-wrapper_ ${t}`),
            i.style.zIndex = "100",
            i.style.display = "flex",
            i.style.justifyContent = "center",
            i.style.position = "fixed",
            i.style.top = "flex",
            i.style.left = "50%",
            i.style.transform = "translateX(-50%)",
            i.style.width = "100%",
            i.style.maxWidth = "80%";
            const l = document.createElement("div");
            l.id = "fiveserver-info",
            l.style.fontSize = "16px",
            l.style.fontFamily = "Arial, Helvetica, sans-serif",
            l.style.color = "white",
            l.style.backgroundColor = "black",
            l.style.padding = "4px 12px",
            l.style.borderRadius = "4px",
            l.style.whiteSpace = "pre-wrap",
            i.appendChild(l),
            document.body.appendChild(i),
            r && (clearTimeout(r),
            r = null),
            r = setTimeout((()=>{
                i && i.isConnected && i.remove()
            }
            ), 1e3 * s),
            "error" === t ? (i.style.top = "4px",
            i.style.animation = "",
            l.style.color = "black",
            l.style.backgroundColor = "red") : a ? (i.style.top = "-40px",
            i.style.animation = `fiveserverInfoPopup ${s}s forwards`) : (i.style.top = "4px",
            i.style.animation = ""),
            "success" === t ? (l.style.color = "#498d76",
            l.style.backgroundColor = "#00ffa9") : "info" === t && (l.style.color = "#d2e1f0",
            l.style.backgroundColor = "#2996ff"),
            l.innerHTML = e.replace(/</gm, "&lt;")
        }
          , h = (e,...t)=>{
            a && 1 === (null == a ? void 0 : a.readyState) && a.send(JSON.stringify({
                console: {
                    type: e,
                    message: t
                }
            }))
        }
          , m = e=>{
            const t = document.getElementsByTagName("head")[0];
            let o = Array.from(document.getElementsByTagName("link"));
            o = o.filter((e=>/\.css/gm.test(e.href) || "stylesheet" == e.rel.toLowerCase()));
            for (let e = 0; e < o.length; ++e) {
                const n = o[e]
                  , r = n.cloneNode(!0)
                  , i = r.href.replace(/(&|\?)_cacheOverride=\d+/, "");
                r.href = `${i}${i.indexOf("?") >= 0 ? "&" : "?"}_cacheOverride=${(new Date).valueOf()}`,
                r.onload = ()=>{
                    setTimeout((()=>n.remove()), 0)
                }
                ,
                t.appendChild(r)
            }
            o.length > 0 && e && p("css updated", "info")
        }
        ;
        let y, w = "";
        const b = new DOMParser;
        let v = !1;
        const x = e=>{
            if ("HIDE" === e || "HIDE_MESSAGE" === e || "HIDE_MESSAGES" === e) {
                const e = document.getElementById("fiveserver-info-wrapper");
                e && e.remove()
            } else
                p(e, "info", {
                    animation: !1
                })
        }
          , F = ()=>{
            a = new WebSocket(t),
            a.onmessage = function(t) {
                if (l = 1e3,
                d = 0,
                "reload" === t.data)
                    window.location.reload();
                else if ("refreshcss" === t.data)
                    m(!0);
                else if ("refreshcss-silent" === t.data)
                    m(!1);
                else if ("connected" === t.data) {
                    console.log(s);
                    const e = document.querySelector('[data-id="five-server"]');
                    e && e.dispatchEvent(new Event("connected"))
                } else if ("initRemoteLogs" === t.data)
                    (()=>{
                        const e = console.log;
                        console.log = function(...t) {
                            t[0] === s ? p("connected", "success") : h("log", ...t),
                            e.apply(console, t)
                        }
                        ;
                        const t = console.warn;
                        console.warn = function(...e) {
                            h("warn", ...e),
                            t.apply(console, e)
                        }
                        ;
                        const o = console.error;
                        console.error = function(...e) {
                            h("error", ...e),
                            o.apply(console, e)
                        }
                    }
                    )();
                else {
                    const n = JSON.parse(t.data);
                    n.navigate && window.location.replace(n.navigate),
                    n.body && n.hot ? (t=>{
                        u(void 0, void 0, void 0, (function*() {
                            if ("" === w && (yield(w = "loading",
                            new Promise((t=>{
                                const o = `//${new URL(e.src).host}/fiveserver/scripts/diffDOM.js`
                                  , n = document.createElement("script");
                                n.type = "text/javascript",
                                n.src = o,
                                n.onload = ()=>{
                                    setTimeout((()=>{
                                        y = new diffDOM.DiffDOM,
                                        w = "ready",
                                        t()
                                    }
                                    ))
                                }
                                ,
                                document.getElementsByTagName("head")[0].appendChild(n)
                            }
                            )))),
                            "ready" === w)
                                try {
                                    const e = g
                                      , o = b.parseFromString(t, "text/html").querySelector("body")
                                      , n = document.createElement("body");
                                    if (n.innerHTML = t,
                                    o && o.attributes.length > 0)
                                        for (let e = 0; e < o.attributes.length; e++) {
                                            const t = o.attributes.item(e);
                                            if (t) {
                                                const e = document.createAttribute(t.name);
                                                e.value = t.value,
                                                n.attributes.setNamedItem(e)
                                            }
                                        }
                                    const r = y.diff(e, n)
                                      , i = document.body.cloneNode(!0);
                                    if (y.apply(i, r) && y.apply(document.body, r)) {
                                        g = n,
                                        v && (v = !1,
                                        x("HIDE"));
                                        const e = document.querySelector('[data-highlight="true"]');
                                        if (e) {
                                            const t = e=>e.offsetTop + (e.offsetParent ? t(e.offsetParent) : 0)
                                              , o = t(e) - window.innerHeight / 2;
                                            window.scrollTo(0, o)
                                        }
                                    }
                                } catch (e) {
                                    v = !0,
                                    x("Having issues parsing the DOM.\nPlease verify that your HTML is valid...")
                                }
                        }
                        ))
                    }
                    )(n.body) : n.body && (o = n.body,
                    document.body.innerHTML = o),
                    n.messages && (e=>{
                        x(e.join("\n\n"))
                    }
                    )(n.messages),
                    n.message && x(n.message),
                    n.body && i.redraw()
                }
                var o
            }
            ,
            a.onopen = function() {
                if (d > 0)
                    return void window.location.reload();
                const e = document.querySelectorAll("script");
                for (let t = 0; t < e.length; t++) {
                    const o = e[t];
                    o.dataset && o.dataset.file && a.send(JSON.stringify({
                        file: o.dataset.file
                    }))
                }
                const t = document.createElement("style");
                t.innerHTML = '      \n      /* Injected by five-server */\n      /*[data-highlight="true"] {\n        border: 1px rgb(90,170,255) solid !important;\n        background-color: rgba(155,215,255,0.5);\n        animation: fadeOutHighlight 1s forwards 0.5s;\n      }\n      img[data-highlight="true"] {\n        filter: sepia(100%) hue-rotate(180deg) saturate(200%);\n        animation: fadeOutHighlightIMG 0.5s forwards 0.5s;\n      }*/\n      @keyframes fadeOutHighlight {\n        from {background-color: rgba(155,215,255,0.5);}\n        to {background-color: rgba(155,215,255,0);}\n      }      \n      @keyframes fadeOutHighlightIMG {\n        0% {filter: sepia(100%) hue-rotate(180deg) saturate(200%);}\n        33% {filter: sepia(66%) hue-rotate(180deg) saturate(100%);}\n        50% {filter: sepia(50%) hue-rotate(90deg) saturate(50%);}\n        66% {filter: sepia(33%) hue-rotate(0deg) saturate(100%);}\n        100% {filter: sepia(0%) hue-rotate(0deg) saturate(100%);}\n      }\n      @keyframes fiveserverInfoPopup {\n        0%   {top:-40px;}\n        15%  {top:4px;}\n        85%  {top:4px;}\n        100% {top:-40px;}\n      }\n      /*smaller*/\n      @media (max-width: 640px) {\n        #fiveserver-info-wrapper {\n          max-width: 98%;\n        }\n        #fiveserver-info {\n          border-radius: 0px;\n        }      \n      }\n\n      ',
                document.head.appendChild(t)
            }
            ,
            a.onclose = function(e) {
                setTimeout((function() {
                    p("lost connection to dev server", "error")
                }
                ), 300),
                0 === d && console.log("Socket is closed. Reconnect will be attempted in 1 second.", e.reason),
                setTimeout((function() {
                    d++,
                    d > 1 && console.log("connecting..."),
                    d <= 25 && F(),
                    l = Math.floor(1.1 * l)
                }
                ), l)
            }
            ,
            a.onerror = function(e) {
                a.close()
            }
        }
        ;
        let P = 0;
        const S = ()=>{
            if (P > 10)
                return console.error("[Five Server] status check failed"),
                console.log("[Five Server] browser reloads in 5 seconds"),
                void setTimeout((()=>{
                    window.location.reload()
                }
                ), 5e3);
            console.log("[Five Server] status check..."),
            setTimeout((()=>{
                E()
            }
            ), 1e3)
        }
          , E = ()=>u(void 0, void 0, void 0, (function*() {
            P++;
            const t = `${new URL(e.src).protocol}//${new URL(e.src).host}/fiveserver/status`;
            try {
                const e = yield fetch(t)
                  , o = yield e.json();
                o && o.status && "online" === o.status ? (F(),
                P = 0) : S()
            } catch (e) {
                S()
            }
        }
        ));
        E()
    }
    ))
}
)();
