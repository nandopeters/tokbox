/*!
 * OpenTok JavaScript Library v2.0.0
 * http://www.tokbox.com/
 *
 * Copyright (c) 2011 TokBox, Inc.
 *
 * Date: November 05 15:14:55 2012
 *//*
 *	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
 * 	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
 * 	
 * 	Permission is hereby granted, free of charge, to any person obtaining a copy
 * 	of this software and associated documentation files (the "Software"), to deal
 * 	in the Software without restriction, including without limitation the rights
 * 	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * 	copies of the Software, and to permit persons to whom the Software is
 * 	furnished to do so, subject to the following conditions:
 * 	
 * 	The above copyright notice and this permission notice shall be included in
 * 	all copies or substantial portions of the Software
 */var swfobject = function() {
    var aq = "undefined"
    ,aD="object"
    ,ab="Shockwave Flash"
    ,X="ShockwaveFlash.ShockwaveFlash"
    ,aE="application/x-shockwave-flash"
    ,ac="SWFObjectExprInst"
    ,ax="onreadystatechange"
    ,af=window
    ,aL=document
    ,aB=navigator
    ,aa=false
    ,Z=[aN]
    ,aG=[]
    ,ag=[]
    ,al=[],aJ,ad,ap,at
    ,ak=false
    ,aU=false,aH,an
    ,aI=true
    ,ah=function() {
        var a = typeof aL.getElementById != aq && typeof aL.getElementsByTagName != aq && typeof aL.createElement != aq
        ,e=aB.userAgent.toLowerCase()
        ,c=aB.platform.toLowerCase()
        ,h=c?/win/.test(c):/win/.test(e)
        ,j=c?/mac/.test(c):/mac/.test(e)
        ,g=/webkit/.test(e)?parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false
        ,d= !  + "\v1"
        ,f=[0,0,0]
        ,k=null;
        if(typeof aB.plugins != aq && typeof aB.plugins[ab] == aD) {
            k = aB.plugins[ab].description;
            if(k &&  ! (typeof aB.mimeTypes != aq && aB.mimeTypes[aE] &&  ! aB.mimeTypes[aE].enabledPlugin)) {
                aa = true;
                d = false;
                k = k.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
                f[0] = parseInt(k.replace(/^(.*)\..*$/,"$1"),10);
                f[1] = parseInt(k.replace(/^.*\.(.*)\s.*$/,"$1"),10);
                f[2] = /[a-zA-Z]/.test(k)?parseInt(k.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0
            }
        } else {
            if(typeof af.ActiveXObject != aq) {
                try {
                    var i = new ActiveXObject(X);
                    if(i) {
                        k = i.GetVariable("$version");
                        if(k) {
                            d = true;
                            k = k.split(" ")[1].split(",");
                            f = [parseInt(k[0],10),parseInt(k[1],10),parseInt(k[2],10)]
                        }
                    }
                } catch(b) {}
            }
        }
        return {
            w3:a
            ,pv:f
            ,wk:g
            ,ie:d
            ,win:h
            ,mac:j
        }
    }
    ()
    ,aK=function() {
        if( ! ah.w3) {
            return
        }
        if((typeof aL.readyState != aq && aL.readyState == "complete") || (typeof aL.readyState == aq && (aL.getElementsByTagName("body")[0] || aL.body))) {
            aP()
        }
        if( ! ak) {
            if(typeof aL.addEventListener != aq) {
                aL.addEventListener("DOMContentLoaded",aP,false)
            }
            if(ah.ie && ah.win) {
                aL.attachEvent(ax,function() {
                    if(aL.readyState == "complete") {
                        aL.detachEvent(ax,arguments.callee);
                        aP()
                    }
                });
                if(af == top) {
                    (function() {
                        if(ak) {
                            return
                        }
                        try {
                            aL.documentElement.doScroll("left")
                        } catch(a) {
                            setTimeout(arguments.callee,0);
                            return
                        }
                        aP()
                    })()
                }
            }
            if(ah.wk) {
                (function() {
                    if(ak) {
                        return
                    }
                    if( ! /loaded|complete/.test(aL.readyState)) {
                        setTimeout(arguments.callee,0);
                        return
                    }
                    aP()
                })()
            }
            aC(aP)
        }
    }
    ();
    function aP() {
        if(ak) {
            return
        }
        try {
            var b = aL.getElementsByTagName("body")[0].appendChild(ar("span"));
            b.parentNode.removeChild(b)
        } catch(a) {
            return
        }
        ak = true;
        var d = Z.length;
        for(var c=0;c<d;c++) {
            Z[c]()
        }
    }
    function aj(a) {
        if(ak) {
            a()
        } else {
            Z[Z.length] = a
        }
    }
    function aC(a) {
        if(typeof af.addEventListener != aq) {
            af.addEventListener("load",a,false)
        } else {
            if(typeof aL.addEventListener != aq) {
                aL.addEventListener("load",a,false)
            } else {
                if(typeof af.attachEvent != aq) {
                    aM(af,"onload",a)
                } else {
                    if(typeof af.onload == "function") {
                        var b = af.onload;
                        af.onload = function() {
                            b();
                            a()
                        }
                    } else {
                        af.onload = a
                    }
                }
            }
        }
    }
    function aN() {
        if(aa) {
            Y()
        } else {
            am()
        }
    }
    function Y() {
        var d = aL.getElementsByTagName("body")[0];
        var b = ar(aD);
        b.setAttribute("type",aE);
        var a = d.appendChild(b);
        if(a) {
            var c = 0;
            (function() {
                if(typeof a.GetVariable != aq) {
                    var e = a.GetVariable("$version");
                    if(e) {
                        e = e.split(" ")[1].split(",");
                        ah.pv = [parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)]
                    }
                } else {
                    if(c < 10) {
                        c++;
                        setTimeout(arguments.callee,10);
                        return
                    }
                }
                d.removeChild(b);
                a = null;
                am()
            })()
        } else {
            am()
        }
    }
    function am() {
        var g = aG.length;
        if(g > 0) {
            for(var h=0;h<g;h++) {
                var c = aG[h].id;
                var m = aG[h].callbackFn;
                var a =  {
                    success:false
                    ,id:c
                };
                if(ah.pv[0] > 0) {
                    var i = aS(c);
                    if(i) {
                        if(ao(aG[h].swfVersion) &&  ! (ah.wk && ah.wk < 312)) {
                            ay(c,true);
                            if(m) {
                                a.success = true;
                                a.ref = av(c);
                                m(a)
                            }
                        } else {
                            if(aG[h].expressInstall && au()) {
                                var e =  {};
                                e.data = aG[h].expressInstall;
                                e.width = i.getAttribute("width") || "0";
                                e.height = i.getAttribute("height") || "0";
                                if(i.getAttribute("class")) {
                                    e.styleclass = i.getAttribute("class")
                                }
                                if(i.getAttribute("align")) {
                                    e.align = i.getAttribute("align")
                                }
                                var f =  {};
                                var d = i.getElementsByTagName("param");
                                var k = d.length;
                                for(var j=0;j<k;j++) {
                                    if(d[j].getAttribute("name").toLowerCase() != "movie") {
                                        f[d[j].getAttribute("name")] = d[j].getAttribute("value")
                                    }
                                }
                                ae(e,f,c,m)
                            } else {
                                aF(i);
                                if(m) {
                                    m(a)
                                }
                            }
                        }
                    }
                } else {
                    ay(c,true);
                    if(m) {
                        var b = av(c);
                        if(b && typeof b.SetVariable != aq) {
                            a.success = true;
                            a.ref = b
                        }
                        m(a)
                    }
                }
            }
        }
    }
    function av(b) {
        var d = null;
        var c = aS(b);
        if(c && c.nodeName == "OBJECT") {
            if(typeof c.SetVariable != aq) {
                d = c
            } else {
                var a = c.getElementsByTagName(aD)[0];
                if(a) {
                    d = a
                }
            }
        }
        return d
    }
    function au() {
        return  ! aU && ao("6.0.65") && (ah.win || ah.mac) &&  ! (ah.wk && ah.wk < 312)
    }
    function ae(f,d,h,e) {
        aU = true;
        ap = e || null;
        at =  {
            success:false
            ,id:h
        };
        var a = aS(h);
        if(a) {
            if(a.nodeName == "OBJECT") {
                aJ = aO(a);
                ad = null
            } else {
                aJ = a;
                ad = h
            }
            f.id = ac;
            if(typeof f.width == aq || ( ! /%$/.test(f.width) && parseInt(f.width,10) < 310)) {
                f.width = "310"
            }
            if(typeof f.height == aq || ( ! /%$/.test(f.height) && parseInt(f.height,10) < 137)) {
                f.height = "137"
            }
            aL.title = aL.title.slice(0,47) + " - Flash Player Installation";
            var b = ah.ie && ah.win?"ActiveX":"PlugIn"
            ,c="MMredirectURL=" + af.location.toString().replace(/&/g,"%26") + "&MMplayerType=" + b + "&MMdoctitle=" + aL.title;
            if(typeof d.flashvars != aq) {
                d.flashvars += "&" + c
            } else {
                d.flashvars = c
            }
            if(ah.ie && ah.win && a.readyState != 4) {
                var g = ar("div");
                h += "SWFObjectNew";
                g.setAttribute("id",h);
                a.parentNode.insertBefore(g,a);
                a.style.display = "none";
                (function() {
                    if(a.readyState == 4) {
                        a.parentNode.removeChild(a)
                    } else {
                        setTimeout(arguments.callee,10)
                    }
                })()
            }
            aA(f,d,h)
        }
    }
    function aF(a) {
        if(ah.ie && ah.win && a.readyState != 4) {
            var b = ar("div");
            a.parentNode.insertBefore(b,a);
            b.parentNode.replaceChild(aO(a),b);
            a.style.display = "none";
            (function() {
                if(a.readyState == 4) {
                    a.parentNode.removeChild(a)
                } else {
                    setTimeout(arguments.callee,10)
                }
            })()
        } else {
            a.parentNode.replaceChild(aO(a),a)
        }
    }
    function aO(b) {
        var d = ar("div");
        if(ah.win && ah.ie) {
            d.innerHTML = b.innerHTML
        } else {
            var e = b.getElementsByTagName(aD)[0];
            if(e) {
                var a = e.childNodes;
                if(a) {
                    var f = a.length;
                    for(var c=0;c<f;c++) {
                        if( ! (a[c].nodeType == 1 && a[c].nodeName == "PARAM") &&  ! (a[c].nodeType == 8)) {
                            d.appendChild(a[c].cloneNode(true))
                        }
                    }
                }
            }
        }
        return d
    }
    function aA(e,g,c) {
        var d
        ,a=aS(c);
        if(ah.wk && ah.wk < 312) {
            return d
        }
        if(a) {
            if(typeof e.id == aq) {
                e.id = c
            }
            if(ah.ie && ah.win) {
                var f = "";
                for(var i in e) {
                    if(e[i] != Object.prototype[i]) {
                        if(i.toLowerCase() == "data") {
                            g.movie = e[i]
                        } else {
                            if(i.toLowerCase() == "styleclass") {
                                f += ' class="' + e[i] + '"'
                            } else {
                                if(i.toLowerCase() != "classid") {
                                    f += " " + i + '="' + e[i] + '"'
                                }
                            }
                        }
                    }
                }
                var h = "";
                for(var j in g) {
                    if(g[j] != Object.prototype[j]) {
                        h += '<param name="' + j + '" value="' + g[j] + '" />'
                    }
                }
                a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + f + ">" + h + "</object>";
                ag[ag.length] = e.id;
                d = aS(e.id)
            } else {
                var b = ar(aD);
                b.setAttribute("type",aE);
                for(var k in e) {
                    if(e[k] != Object.prototype[k]) {
                        if(k.toLowerCase() == "styleclass") {
                            b.setAttribute("class",e[k])
                        } else {
                            if(k.toLowerCase() != "classid") {
                                b.setAttribute(k,e[k])
                            }
                        }
                    }
                }
                for(var m in g) {
                    if(g[m] != Object.prototype[m] && m.toLowerCase() != "movie") {
                        aQ(b,m,g[m])
                    }
                }
                a.parentNode.replaceChild(b,a);
                d = b
            }
        }
        return d
    }
    function aQ(b,d,c) {
        var a = ar("param");
        a.setAttribute("name",d);
        a.setAttribute("value",c);
        b.appendChild(a)
    }
    function aw(a) {
        var b = aS(a);
        if(b && b.nodeName == "OBJECT") {
            if(ah.ie && ah.win) {
                b.style.display = "none";
                (function() {
                    if(b.readyState == 4) {
                        aT(a)
                    } else {
                        setTimeout(arguments.callee,10)
                    }
                })()
            } else {
                b.parentNode.removeChild(b)
            }
        }
    }
    function aT(a) {
        var b = aS(a);
        if(b) {
            for(var c in b) {
                if(typeof b[c] == "function") {
                    b[c] = null
                }
            }
            b.parentNode.removeChild(b)
        }
    }
    function aS(a) {
        var c = null;
        try {
            c = aL.getElementById(a)
        } catch(b) {}
        return c
    }
    function ar(a) {
        return aL.createElement(a)
    }
    function aM(a,c,b) {
        a.attachEvent(c,b);
        al[al.length] = [a,c,b]
    }
    function ao(a) {
        var b = ah.pv
        ,c=a.split(".");
        c[0] = parseInt(c[0],10);
        c[1] = parseInt(c[1],10) || 0;
        c[2] = parseInt(c[2],10) || 0;
        return(b[0] > c[0] || (b[0] == c[0] && b[1] > c[1]) || (b[0] == c[0] && b[1] == c[1] && b[2] >= c[2]))?true:false
    }
    function az(b,f,a,c) {
        if(ah.ie && ah.mac) {
            return
        }
        var e = aL.getElementsByTagName("head")[0];
        if( ! e) {
            return
        }
        var g = (a && typeof a == "string")?a:"screen";
        if(c) {
            aH = null;
            an = null
        }
        if( ! aH || an != g) {
            var d = ar("style");
            d.setAttribute("type","text/css");
            d.setAttribute("media",g);
            aH = e.appendChild(d);
            if(ah.ie && ah.win && typeof aL.styleSheets != aq && aL.styleSheets.length > 0) {
                aH = aL.styleSheets[aL.styleSheets.length - 1]
            }
            an = g
        }
        if(ah.ie && ah.win) {
            if(aH && typeof aH.addRule == aD) {
                aH.addRule(b,f)
            }
        } else {
            if(aH && typeof aL.createTextNode != aq) {
                aH.appendChild(aL.createTextNode(b + " {" + f + "}"))
            }
        }
    }
    function ay(a,c) {
        if( ! aI) {
            return
        }
        var b = c?"visible":"hidden";
        if(ak && aS(a)) {
            aS(a).style.visibility = b
        } else {
            az("#" + a,"visibility:" + b)
        }
    }
    function ai(b) {
        var a = /[\\\"<>\.;]/;
        var c = a.exec(b) != null;
        return c && typeof encodeURIComponent != aq?encodeURIComponent(b):b
    }
    var aR = function() {
        if(ah.ie && ah.win) {
            window.attachEvent("onunload",function() {
                var a = al.length;
                for(var b=0;b<a;b++) {
                    al[b][0].detachEvent(al[b][1],al[b][2])
                }
                var d = ag.length;
                for(var c=0;c<d;c++) {
                    aw(ag[c])
                }
                for(var e in ah) {
                    ah[e] = null
                }
                ah = null;
                for(var f in swfobject) {
                    swfobject[f] = null
                }
                swfobject = null
            })
        }
    }
    ();
    return {
        registerObject:function(a,e,c,b) {
            if(ah.w3 && a && e) {
                var d =  {};
                d.id = a;
                d.swfVersion = e;
                d.expressInstall = c;
                d.callbackFn = b;
                aG[aG.length] = d;
                ay(a,false)
            } else {
                if(b) {
                    b({
                        success:false
                        ,id:a
                    })
                }
            }
        }
        ,getObjectById:function(a) {
            if(ah.w3) {
                return av(a)
            }
        }
        ,embedSWF:function(k,e,h,f,c,a,b,i,g,j) {
            var d =  {
                success:false
                ,id:e
            };
            if(ah.w3 &&  ! (ah.wk && ah.wk < 312) && k && e && h && f && c) {
                ay(e,false);
                aj(function() {
                    h += "";
                    f += "";
                    var r =  {};
                    if(g && typeof g === aD) {
                        for(var p in g) {
                            r[p] = g[p]
                        }
                    }
                    r.data = k;
                    r.width = h;
                    r.height = f;
                    var o =  {};
                    if(i && typeof i === aD) {
                        for(var q in i) {
                            o[q] = i[q]
                        }
                    }
                    if(b && typeof b === aD) {
                        for(var m in b) {
                            if(typeof o.flashvars != aq) {
                                o.flashvars += "&" + m + "=" + b[m]
                            } else {
                                o.flashvars = m + "=" + b[m]
                            }
                        }
                    }
                    if(ao(c)) {
                        var n = aA(r,o,e);
                        if(r.id == e) {
                            ay(e,true)
                        }
                        d.success = true;
                        d.ref = n
                    } else {
                        if(a && au()) {
                            r.data = a;
                            ae(r,o,e,j);
                            return
                        } else {
                            ay(e,true)
                        }
                    }
                    if(j) {
                        j(d)
                    }
                })
            } else {
                if(j) {
                    j(d)
                }
            }
        }
        ,switchOffAutoHideShow:function() {
            aI = false
        }
        ,ua:ah
        ,getFlashPlayerVersion:function() {
            return {
                major:ah.pv[0]
                ,minor:ah.pv[1]
                ,release:ah.pv[2]
            }
        }
        ,hasFlashPlayerVersion:ao
        ,createSWF:function(a,b,c) {
            if(ah.w3) {
                return aA(a,b,c)
            } else {
                return undefined
            }
        }
        ,showExpressInstall:function(b,a,d,c) {
            if(ah.w3 && au()) {
                ae(b,a,d,c)
            }
        }
        ,removeSWF:function(a) {
            if(ah.w3) {
                aw(a)
            }
        }
        ,createCSS:function(b,a,c,d) {
            if(ah.w3) {
                az(b,a,c,d)
            }
        }
        ,addDomLoadEvent:aj
        ,addLoadEvent:aC
        ,getQueryParamValue:function(b) {
            var a = aL.location.search || aL.location.hash;
            if(a) {
                if(/\?/.test(a)) {
                    a = a.split("?")[1]
                }
                if(b == null) {
                    return ai(a)
                }
                var c = a.split("&");
                for(var d=0;d<c.length;d++) {
                    if(c[d].substring(0,c[d].indexOf("=")) == b) {
                        return ai(c[d].substring((c[d].indexOf("=") + 1)))
                    }
                }
            }
            return""
        }
        ,expressInstallCallback:function() {
            if(aU) {
                var a = aS(ac);
                if(a && aJ) {
                    a.parentNode.replaceChild(aJ,a);
                    if(ad) {
                        ay(ad,true);
                        if(ah.ie && ah.win) {
                            aJ.style.display = "block"
                        }
                    }
                    if(ap) {
                        ap(at)
                    }
                }
                aU = false
            }
        }
    }
}
();
(function() {
    var w = this;
    var j = w._;
    var E =  {};
    var D = Array.prototype
    ,f=Object.prototype
    ,r=Function.prototype;
    var n = D.slice
    ,A=D.unshift
    ,c=f.toString
    ,h=f.hasOwnProperty;
    var M = D.forEach
    ,q=D.map
    ,F=D.reduce
    ,b=D.reduceRight
    ,a=D.filter
    ,B=D.every
    ,o=D.some
    ,m=D.indexOf
    ,k=D.lastIndexOf
    ,t=Array.isArray
    ,e=Object.keys
    ,G=r.bind;
    var N = function(p) {
        return new u(p)
    };
    if(typeof exports !== "undefined") {
        if(typeof module !== "undefined" && module.exports) {
            exports = module.exports = N
        }
        exports._ = N
    } else {
        w._ = N
    }
    N.VERSION = "1.3.3";
    var J = N.each = N.forEach = function(S,R,Q) {
        if(S == null) {
            return
        }
        if(M && S.forEach === M) {
            S.forEach(R,Q)
        } else {
            if(S.length ===  + S.length) {
                for(var P=0,p=S.length;P<p;P++) {
                    if(P in S && R.call(Q,S[P],P,S) === E) {
                        return
                    }
                }
            } else {
                for(var O in S) {
                    if(N.has(S,O)) {
                        if(R.call(Q,S[O],O,S) === E) {
                            return
                        }
                    }
                }
            }
        }
    };
    N.map = N.collect = function(Q,P,O) {
        var p = [];
        if(Q == null) {
            return p
        }
        if(q && Q.map === q) {
            return Q.map(P,O)
        }
        J(Q,function(T,R,S) {
            p[p.length] = P.call(O,T,R,S)
        });
        if(Q.length ===  + Q.length) {
            p.length = Q.length
        }
        return p
    };
    N.reduce = N.foldl = N.inject = function(R,Q,p,P) {
        var O = arguments.length > 2;
        if(R == null) {
            R = []
        }
        if(F && R.reduce === F) {
            if(P) {
                Q = N.bind(Q,P)
            }
            return O?R.reduce(Q,p):R.reduce(Q)
        }
        J(R,function(U,S,T) {
            if( ! O) {
                p = U;
                O = true
            } else {
                p = Q.call(P,p,U,S,T)
            }
        });
        if( ! O) {
            throw new TypeError("Reduce of empty array with no initial value")
        }
        return p
    };
    N.reduceRight = N.foldr = function(R,Q,p,P) {
        var O = arguments.length > 2;
        if(R == null) {
            R = []
        }
        if(b && R.reduceRight === b) {
            if(P) {
                Q = N.bind(Q,P)
            }
            return O?R.reduceRight(Q,p):R.reduceRight(Q)
        }
        var S = N.toArray(R).reverse();
        if(P &&  ! O) {
            Q = N.bind(Q,P)
        }
        return O?N.reduce(S,Q,p,P):N.reduce(S,Q)
    };
    N.find = N.detect = function(Q,P,O) {
        var p;
        z(Q,function(T,R,S) {
            if(P.call(O,T,R,S)) {
                p = T;
                return true
            }
        });
        return p
    };
    N.filter = N.select = function(Q,P,O) {
        var p = [];
        if(Q == null) {
            return p
        }
        if(a && Q.filter === a) {
            return Q.filter(P,O)
        }
        J(Q,function(T,R,S) {
            if(P.call(O,T,R,S)) {
                p[p.length] = T
            }
        });
        return p
    };
    N.reject = function(Q,P,O) {
        var p = [];
        if(Q == null) {
            return p
        }
        J(Q,function(T,R,S) {
            if( ! P.call(O,T,R,S)) {
                p[p.length] = T
            }
        });
        return p
    };
    N.every = N.all = function(Q,P,O) {
        var p = true;
        if(Q == null) {
            return p
        }
        if(B && Q.every === B) {
            return Q.every(P,O)
        }
        J(Q,function(T,R,S) {
            if( ! (p = p && P.call(O,T,R,S))) {
                return E
            }
        });
        return  !  ! p
    };
    var z = N.some = N.any = function(Q,P,O) {
        P || (P = N.identity);
        var p = false;
        if(Q == null) {
            return p
        }
        if(o && Q.some === o) {
            return Q.some(P,O)
        }
        J(Q,function(T,R,S) {
            if(p || (p = P.call(O,T,R,S))) {
                return E
            }
        });
        return  !  ! p
    };
    N.include = N.contains = function(P,O) {
        var p = false;
        if(P == null) {
            return p
        }
        if(m && P.indexOf === m) {
            return P.indexOf(O) !=  - 1
        }
        p = z(P,function(Q) {
            return Q === O
        });
        return p
    };
    N.invoke = function(O,P) {
        var p = n.call(arguments,2);
        return N.map(O,function(Q) {
            return(N.isFunction(P)?P || Q:Q[P]).apply(Q,p)
        })
    };
    N.pluck = function(O,p) {
        return N.map(O,function(P) {
            return P[p]
        })
    };
    N.max = function(Q,P,O) {
        if( ! P && N.isArray(Q) && Q[0] ===  + Q[0]) {
            return Math.max.apply(Math,Q)
        }
        if( ! P && N.isEmpty(Q)) {
            return  - Infinity
        }
        var p =  {
            computed: - Infinity
        };
        J(Q,function(U,R,T) {
            var S = P?P.call(O,U,R,T):U;
            S >= p.computed && (p =  {
                value:U
                ,computed:S
            })
        });
        return p.value
    };
    N.min = function(Q,P,O) {
        if( ! P && N.isArray(Q) && Q[0] ===  + Q[0]) {
            return Math.min.apply(Math,Q)
        }
        if( ! P && N.isEmpty(Q)) {
            return Infinity
        }
        var p =  {
            computed:Infinity
        };
        J(Q,function(U,R,T) {
            var S = P?P.call(O,U,R,T):U;
            S < p.computed && (p =  {
                value:U
                ,computed:S
            })
        });
        return p.value
    };
    N.shuffle = function(P) {
        var p = []
        ,O;J(P,function(S,Q,R) {
            O = Math.floor(Math.random() * (Q + 1));
            p[Q] = p[O];
            p[O] = S
        });
        return p
    };
    N.sortBy = function(P,Q,p) {
        var O = N.isFunction(Q)?Q:function(R) {
            return R[Q]
        };
        return N.pluck(N.map(P,function(T,R,S) {
            return {
                value:T
                ,criteria:O.call(p,T,R,S)
            }
        }).sort(function(U,T) {
            var S = U.criteria
            ,R=T.criteria;
            if(S === void 0) {
                return 1
            }
            if(R === void 0) {
                return  - 1
            }
            return S < R? - 1:S > R?1:0
        }),"value")
    };
    N.groupBy = function(P,Q) {
        var p =  {};
        var O = N.isFunction(Q)?Q:function(R) {
            return R[Q]
        };
        J(P,function(T,R) {
            var S = O(T,R);
            (p[S] || (p[S] = [])).push(T)
        });
        return p
    };
    N.sortedIndex = function(S,R,P) {
        P || (P = N.identity);
        var p = 0
        ,Q=S.length;
        while(p < Q) {
            var O = (p + Q) >> 1;
            P(S[O]) < P(R)?p = O + 1:Q = O
        }
        return p
    };
    N.toArray = function(p) {
        if( ! p) {
            return[]
        }
        if(N.isArray(p)) {
            return n.call(p)
        }
        if(N.isArguments(p)) {
            return n.call(p)
        }
        if(p.toArray && N.isFunction(p.toArray)) {
            return p.toArray()
        }
        return N.values(p)
    };
    N.size = function(p) {
        return N.isArray(p)?p.length:N.keys(p).length
    };
    N.first = N.head = N.take = function(P,O,p) {
        return(O != null) &&  ! p?n.call(P,0,O):P[0]
    };
    N.initial = function(P,O,p) {
        return n.call(P,0,P.length - ((O == null) || p?1:O))
    };
    N.last = function(P,O,p) {
        if((O != null) &&  ! p) {
            return n.call(P,Math.max(P.length - O,0))
        } else {
            return P[P.length - 1]
        }
    };
    N.rest = N.tail = function(P,p,O) {
        return n.call(P,(p == null) || O?1:p)
    };
    N.compact = function(p) {
        return N.filter(p,function(O) {
            return  !  ! O
        })
    };
    N.flatten = function(O,p) {
        return N.reduce(O,function(P,Q) {
            if(N.isArray(Q)) {
                return P.concat(p?Q:N.flatten(Q))
            }
            P[P.length] = Q;
            return P
        }
        ,[])
    };
    N.without = function(p) {
        return N.difference(p,n.call(arguments,1))
    };
    N.uniq = N.unique = function(R,Q,P) {
        var p = P?N.map(R,P):R;
        var O = [];
        if(R.length < 3) {
            Q = true
        }
        N.reduce(p,function(S,U,T) {
            if(Q?N.last(S) !== U ||  ! S.length: ! N.include(S,U)) {
                S.push(U);
                O.push(R[T])
            }
            return S
        }
        ,[]);
        return O
    };
    N.union = function() {
        return N.uniq(N.flatten(arguments,true))
    };
    N.intersection = N.intersect = function(O) {
        var p = n.call(arguments,1);
        return N.filter(N.uniq(O),function(P) {
            return N.every(p,function(Q) {
                return N.indexOf(Q,P) >= 0
            })
        })
    };
    N.difference = function(O) {
        var p = N.flatten(n.call(arguments,1),true);
        return N.filter(O,function(P) {
            return  ! N.include(p,P)
        })
    };
    N.zip = function() {
        var p = n.call(arguments);
        var Q = N.max(N.pluck(p,"length"));
        var P = new Array(Q);
        for(var O=0;O<Q;O++) {
            P[O] = N.pluck(p,"" + O)
        }
        return P
    };
    N.indexOf = function(R,P,Q) {
        if(R == null) {
            return  - 1
        }
        var O
        ,p;if(Q) {
            O = N.sortedIndex(R,P);
            return R[O] === P?O: - 1
        }
        if(m && R.indexOf === m) {
            return R.indexOf(P)
        }
        for(O=0,p=R.length;O<p;O++) {
            if(O in R && R[O] === P) {
                return O
            }
        }
        return  - 1
    };
    N.lastIndexOf = function(P,O) {
        if(P == null) {
            return  - 1
        }
        if(k && P.lastIndexOf === k) {
            return P.lastIndexOf(O)
        }
        var p = P.length;
        while(p--) {
            if(p in P && P[p] === O) {
                return p
            }
        }
        return  - 1
    };
    N.range = function(S,Q,R) {
        if(arguments.length <= 1) {
            Q = S || 0;
            S = 0
        }
        R = arguments[2] || 1;
        var O = Math.max(Math.ceil((Q - S)/R),0);
        var p = 0;
        var P = new Array(O);
        while(p < O) {
            P[p++] = S;
            S += R
        }
        return P
    };
    var H = function() {};
    N.bind = function d(Q,O) {
        var P
        ,p;if(Q.bind === G && G) {
            return G.apply(Q,n.call(arguments,1))
        }
        if( ! N.isFunction(Q)) {
            throw new TypeError
        }
        p = n.call(arguments,2);
        return P = function() {
            if( ! (this instanceof P)) {
                return Q.apply(O,p.concat(n.call(arguments)))
            }
            H.prototype = Q.prototype;
            var S = new H;
            var R = Q.apply(S,p.concat(n.call(arguments)));
            if(Object(R) === R) {
                return R
            }
            return S
        }
    };
    N.bindAll = function(O) {
        var p = n.call(arguments,1);
        if(p.length == 0) {
            p = N.functions(O)
        }
        J(p,function(P) {
            O[P] = N.bind(O[P],O)
        });
        return O
    };
    N.memoize = function(P,O) {
        var p =  {};
        O || (O = N.identity);
        return function() {
            var Q = O.apply(this,arguments);
            return N.has(p,Q)?p[Q]:(p[Q] = P.apply(this,arguments))
        }
    };
    N.delay = function(O,P) {
        var p = n.call(arguments,2);
        return setTimeout(function() {
            return O.apply(null,p)
        }
        ,P)
    };
    N.defer = function(p) {
        return N.delay.apply(N,[p,1].concat(n.call(arguments,1)))
    };
    N.throttle = function(P,Q) {
        var O,S,T,U,R
        ,V;var p = N.debounce(function() {
            R = U = false
        }
        ,Q);
        return function() {
            O = this;
            S = arguments;
            var W = function() {
                T = null;
                if(R) {
                    P.apply(O,S)
                }
                p()
            };
            if( ! T) {
                T = setTimeout(W,Q)
            }
            if(U) {
                R = true
            } else {
                V = P.apply(O,S)
            }
            p();
            U = true;
            return V
        }
    };
    N.debounce = function(O,Q,p) {
        var P;
        return function() {
            var T = this
            ,S=arguments;
            var R = function() {
                P = null;
                if( ! p) {
                    O.apply(T,S)
                }
            };
            if(p &&  ! P) {
                O.apply(T,S)
            }
            clearTimeout(P);
            P = setTimeout(R,Q)
        }
    };
    N.once = function(P) {
        var p = false
        ,O;return function() {
            if(p) {
                return O
            }
            p = true;
            return O = P.apply(this,arguments)
        }
    };
    N.wrap = function(p,O) {
        return function() {
            var P = [p].concat(n.call(arguments,0));
            return O.apply(this,P)
        }
    };
    N.compose = function() {
        var p = arguments;
        return function() {
            var O = arguments;
            for(var P=p.length-1;P>=0;P--) {
                O = [p[P].apply(this,O)]
            }
            return O[0]
        }
    };
    N.after = function(O,p) {
        if(O <= 0) {
            return p()
        }
        return function() {
            if(--O < 1) {
                return p.apply(this,arguments)
            }
        }
    };
    N.keys = e || function(P) {
        if(P !== Object(P)) {
            throw new TypeError("Invalid object")
        }
        var O = [];
        for(var p in P) {
            if(N.has(P,p)) {
                O[O.length] = p
            }
        }
        return O
    };
    N.values = function(p) {
        return N.map(p,N.identity)
    };
    N.functions = N.methods = function(P) {
        var O = [];
        for(var p in P) {
            if(N.isFunction(P[p])) {
                O.push(p)
            }
        }
        return O.sort()
    };
    N.extend = function(p) {
        J(n.call(arguments,1),function(O) {
            for(var P in O) {
                p[P] = O[P]
            }
        });
        return p
    };
    N.pick = function(O) {
        var p =  {};
        J(N.flatten(n.call(arguments,1)),function(P) {
            if(P in O) {
                p[P] = O[P]
            }
        });
        return p
    };
    N.defaults = function(p) {
        J(n.call(arguments,1),function(O) {
            for(var P in O) {
                if(p[P] == null) {
                    p[P] = O[P]
                }
            }
        });
        return p
    };
    N.clone = function(p) {
        if( ! N.isObject(p)) {
            return p
        }
        return N.isArray(p)?p.slice():N.extend({}
        ,p)
    };
    N.tap = function(O,p) {
        p(O);
        return O
    };
    function K(Q,P,O) {
        if(Q === P) {
            return Q !== 0 || 1/Q==1/P
        }
        if(Q == null || P == null) {
            return Q === P
        }
        if(Q._chain) {
            Q = Q._wrapped
        }
        if(P._chain) {
            P = P._wrapped
        }
        if(Q.isEqual && N.isFunction(Q.isEqual)) {
            return Q.isEqual(P)
        }
        if(P.isEqual && N.isFunction(P.isEqual)) {
            return P.isEqual(Q)
        }
        var T = c.call(Q);
        if(T != c.call(P)) {
            return false
        }
        switch(T) {
            case"[object String]":return Q == String(P);
            case"[object Number]":return Q !=  + Q?P !=  + P:(Q == 0?1/Q==1/P:Q ==  + P);
            case"[object Date]":case"[object Boolean]":return  + Q ==  + P;
            case"[object RegExp]":return Q.source == P.source && Q.global == P.global && Q.multiline == P.multiline && Q.ignoreCase == P.ignoreCase
        }
        if(typeof Q != "object" || typeof P != "object") {
            return false
        }
        var U = O.length;
        while(U--) {
            if(O[U] == Q) {
                return true
            }
        }
        O.push(Q);
        var S = 0
        ,p=true;
        if(T == "[object Array]") {
            S = Q.length;
            p = S == P.length;
            if(p) {
                while(S--) {
                    if( ! (p = S in Q == S in P && K(Q[S],P[S],O))) {
                        break
                    }
                }
            }
        } else {
            if("constructor" in Q != "constructor" in P || Q.constructor != P.constructor) {
                return false
            }
            for(var R in Q) {
                if(N.has(Q,R)) {
                    S++;
                    if( ! (p = N.has(P,R) && K(Q[R],P[R],O))) {
                        break
                    }
                }
            }
            if(p) {
                for(R in P) {
                    if(N.has(P,R) &&  ! (S--)) {
                        break
                    }
                }
                p =  ! S
            }
        }
        O.pop();
        return p
    }
    N.isEqual = function(O,p) {
        return K(O,p,[])
    };
    N.isEmpty = function(O) {
        if(O == null) {
            return true
        }
        if(N.isArray(O) || N.isString(O)) {
            return O.length === 0
        }
        for(var p in O) {
            if(N.has(O,p)) {
                return false
            }
        }
        return true
    };
    N.isElement = function(p) {
        return  !  ! (p && p.nodeType == 1)
    };
    N.isArray = t || function(p) {
        return c.call(p) == "[object Array]"
    };
    N.isObject = function(p) {
        return p === Object(p)
    };
    N.isArguments = function(p) {
        return c.call(p) == "[object Arguments]"
    };
    if( ! N.isArguments(arguments)) {
        N.isArguments = function(p) {
            return  !  ! (p && N.has(p,"callee"))
        }
    }
    N.isFunction = function(p) {
        return c.call(p) == "[object Function]"
    };
    N.isString = function(p) {
        return c.call(p) == "[object String]"
    };
    N.isNumber = function(p) {
        return c.call(p) == "[object Number]"
    };
    N.isFinite = function(p) {
        return N.isNumber(p) && isFinite(p)
    };
    N.isNaN = function(p) {
        return p !== p
    };
    N.isBoolean = function(p) {
        return p === true || p === false || c.call(p) == "[object Boolean]"
    };
    N.isDate = function(p) {
        return c.call(p) == "[object Date]"
    };
    N.isRegExp = function(p) {
        return c.call(p) == "[object RegExp]"
    };
    N.isNull = function(p) {
        return p === null
    };
    N.isUndefined = function(p) {
        return p === void 0
    };
    N.has = function(O,p) {
        return h.call(O,p)
    };
    N.noConflict = function() {
        w._ = j;
        return this
    };
    N.identity = function(p) {
        return p
    };
    N.times = function(Q,P,O) {
        for(var p=0;p<Q;p++) {
            P.call(O,p)
        }
    };
    N.escape = function(p) {
        return("" + p).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")
    };
    N.result = function(p,P) {
        if(p == null) {
            return null
        }
        var O = p[P];
        return N.isFunction(O)?O.call(p):O
    };
    N.mixin = function(p) {
        J(N.functions(p),function(O) {
            x(O,N[O] = p[O])
        })
    };
    var y = 0;
    N.uniqueId = function(p) {
        var O = y++;
        return p?p + O:O
    };
    N.templateSettings =  {
        evaluate:/<%([\s\S]+?)%>/g
        ,interpolate:/<%=([\s\S]+?)%>/g
        ,escape:/<%-([\s\S]+?)%>/g
    };
    var v = /.^/;
    var g =  {
        "\\":"\\","'":"'"
        ,r:"\r"
        ,n:"\n"
        ,t:"\t"
        ,u2028:"\u2028"
        ,u2029:"\u2029"
    };
    for(var I in g) {
        g[g[I]] = I
    }
    var i = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    var C = /\\(\\|'|r|n|t|u2028|u2029)/g;
    var L = function(p) {
        return p.replace(C,function(O,P) {
            return g[P]
        })
    };
    N.template = function(S,R,P) {
        P = N.defaults(P ||  {}
        ,N.templateSettings);
        var Q = "__p+='" + S.replace(i,function(T) {
            return"\\" + g[T]
        }).replace(P.escape || v,function(T,U) {
            return"'+\n_.escape(" + L(U) + ")+\n'"
        }).replace(P.interpolate || v,function(T,U) {
            return"'+\n(" + L(U) + ")+\n'"
        }).replace(P.evaluate || v,function(T,U) {
            return"';\n" + L(U) + "\n;__p+='"
        }) + "';\n";
        if( ! P.variable) {
            Q = "with(obj||{}){\n" + Q + "}\n"
        }
        Q = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + Q + "return __p;\n";
        var O = new Function(P.variable || "obj","_",Q);
        if(R) {
            return O(R,N)
        }
        var p = function(T) {
            return O.call(this,T,N)
        };
        p.source = "function(" + (P.variable || "obj") + "){\n" + Q + "}";
        return p
    };
    N.chain = function(p) {
        return N(p).chain()
    };
    var u = function(p) {
        this._wrapped = p
    };
    N.prototype = u.prototype;
    var s = function(O,p) {
        return p?N(O).chain():O
    };
    var x = function(p,O) {
        u.prototype[p] = function() {
            var P = n.call(arguments);
            A.call(P,this._wrapped);
            return s(O.apply(N,P),this._chain)
        }
    };
    N.mixin(N);
    J(["pop","push","reverse","shift","sort","splice","unshift"],function(p) {
        var O = D[p];
        u.prototype[p] = function() {
            var P = this._wrapped;
            O.apply(P,arguments);
            var Q = P.length;
            if((p == "shift" || p == "splice") && Q === 0) {
                delete P[0]
            }
            return s(P,this._chain)
        }
    });
    J(["concat","join","slice"],function(p) {
        var O = D[p];
        u.prototype[p] = function() {
            return s(O.apply(this._wrapped,arguments),this._chain)
        }
    });
    u.prototype.chain = function() {
        this._chain = true;
        return this
    };
    u.prototype.value = function() {
        return this._wrapped
    }
}).call(this);
/*
 * This is a modified version of Robert Kieffer awesome uuid.js library.
 * The only modifications we've made are to remove the Node.js specific
 * parts of the code and the UUID version 1 generator (which we don't
 * use). The original copyright notice is below.
 *
 * node-uuid/uuid.js
 *
 * Copyright (c) 2010 Robert Kieffer
 * Dual licensed under the MIT and GPL licenses.
 * Documentation and details at https://github.com/broofa/node-uuid
 */(function() {
    var n = this;
    var f
    ,e;var q = new Array(16);
    f = function() {
        var u
        ,s=q
        ,t=0;
        for(t=0;t<16;t++) {
            if((t & 3) === 0) {
                u = Math.random() * 4294967296
            }
            s[t] = u >>> ((t & 3) << 3) & 255
        }
        return s
    };
    if(n.crypto && crypto.getRandomValues) {
        var b = new Uint32Array(4);
        e = function() {
            crypto.getRandomValues(b);
            for(var i=0;i<16;i++) {
                q[i] = b[i >> 2] >>> ((i & 3) * 8) & 255
            }
            return q
        }
    }
    var d = e || f;
    var m = typeof(Buffer) == "function"?Buffer:Array;
    var p = [];
    var j =  {};
    for(var h=0;h<256;h++) {
        p[h] = (h + 256).toString(16).substr(1);
        j[p[h]] = h
    }
    function g(v,r,w) {
        var t = (r && w) || 0
        ,u=0;
        r = r || [];
        v.toLowerCase().replace(/[0-9a-f]{2}/g,function(i) {
            if(u < 16) {
                r[t + u++] = j[i]
            }
        });
        while(u < 16) {
            r[t + u++] = 0
        }
        return r
    }
    function k(r,t) {
        var s = t || 0
        ,u=p;
        return u[r[s++]] + u[r[s++]] + u[r[s++]] + u[r[s++]] + "-" + u[r[s++]] + u[r[s++]] + "-" + u[r[s++]] + u[r[s++]] + "-" + u[r[s++]] + u[r[s++]] + "-" + u[r[s++]] + u[r[s++]] + u[r[s++]] + u[r[s++]] + u[r[s++]] + u[r[s++]]
    }
    function o(s,r,w) {
        var t = r && w || 0;
        if(typeof(s) == "string") {
            r = s == "binary"?new m(16):null;
            s = null
        }
        s = s ||  {};
        var v = s.random || (s.rng || d)();
        v[6] = (v[6] & 15)|64;
        v[8] = (v[8] & 63)|128;
        if(r) {
            for(var u=0;u<16;u++) {
                r[t + u] = v[u]
            }
        }
        return r || k(v)
    }
    var a = o;
    a.v4 = o;
    a.parse = g;
    a.unparse = k;
    a.BufferClass = m;
    a.mathRNG = f;
    a.whatwgRNG = e;
    var c = n.uuid;
    a.noConflict = function() {
        n.uuid = c;
        return a
    };
    n.uuid = a
}
());
(function(c) {
    if( ! navigator.getUserMedia) {
        navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
    }
    if( ! c.URL) {
        c.URL = c.webkitURL
    }
    var a = 0,b
    ,e=document.location.hash
    ,f;var d =  {
        initSession:function(g) {
            if( ! this.sessions[g]) {
                this.sessions[g] = new d.Session(g)
            }
            return this.sessions[g]
        }
        ,initPublisher:function(j,g,h) {
            d.debug("TB.initPublisher(" + g + ")");
            var i = new d.rtc.Publisher();
            i.publish(g,h);
            return i
        }
        ,checkSystemRequirements:function() {
            d.debug("TB.checkSystemRequirements()");
            var g = d.$.supportsWebSockets() && d.$.supportsWebRTC()?this.HAS_REQUIREMENTS:this.NOT_HAS_REQUIREMENTS;
            d.checkSystemRequirements = function() {
                d.debug("TB.checkSystemRequirements()");
                return g
            };
            return g
        }
        ,upgradeSystemRequirements:function() {
            d.onLoad(function() {
                var g = "_upgradeFlash";
                document.body.appendChild((function() {
                    var h = document.createElement("iframe");
                    h.id = g;
                    h.style.position = "absolute";
                    h.style.position = "fixed";
                    h.style.height = "100%";
                    h.style.width = "100%";
                    h.style.top = "0px";
                    h.style.left = "0px";
                    h.style.right = "0px";
                    h.style.bottom = "0px";
                    h.style.zIndex = 1000;
                    h.style.backgroundColor = "rgba(0,0,0,0.2)";
                    h.src = d.BUILD_PROPERTIES.widgetURL + "/html/upgradeFlash.html#" + encodeURIComponent(document.location.href);
                    return h
                })());
                if(b) {
                    clearInterval(b)
                }
                b = setInterval(function() {
                    var i = document.location.hash
                    ,h=/^#?\d+&/;
                    if(i !== e && h.test(i)) {
                        e = i;
                        if(i.replace(h,"") === "close_window") {
                            document.body.removeChild(document.getElementById(g));
                            document.location.hash = ""
                        }
                    }
                }
                ,100)
            })
        }
        ,reportIssue:function() {
            d.warn("ToDo: haven't yet implemented TB.reportIssue")
        }
        ,components: {}
        ,sessions: {}
        ,rtc: {}
        ,behaviours: {}
        ,APIKEY:(function() {
            var h = (function() {
                var i = document.getElementsByTagName("script");
                i = i[i.length - 1];
                i = i.getAttribute("src") || i.src;
                return i
            })();
            var g = h.match(/[\?\&]apikey=([^&]+)/i);
            return g?g[1]:""
        })()
        ,HAS_REQUIREMENTS:1
        ,NOT_HAS_REQUIREMENTS:0
    };
    d._ = _.noConflict();
    c.OT = d;
    c.TB = d
})(window);
OT.BUILD_PROPERTIES =  {
    apiURL:"http://anvil.opentok.com"
    ,messagingServer:"staging.tokbox.com"
    ,loggingURL:"http://hlg.tokbox.com/prod"
    ,widgetURL:"http://static.opentok.com/webrtc/v2.0.0"
};
if(true && window.location.protocol.indexOf("https") >= 0) {
    OT.BUILD_PROPERTIES.widgetURL = "https://swww.tokbox.com/webrtc/v2.0.0";
    OT.BUILD_PROPERTIES.loggingURL = "https://api.opentok.com/hl";
    OT.BUILD_PROPERTIES.apiURL = "https://anvil.opentok.com"
}
OT.BUILD_PROPERTIES.configURL = OT.BUILD_PROPERTIES.widgetURL + "/js/dynamic_config.min.js";
OT.BUILD_PROPERTIES.cssURL = OT.BUILD_PROPERTIES.widgetURL + "/css";
(function(a) {
    OT.eventing = function(c) {
        var f =  {};
        function b(h,g) {
            if( ! h) {
                return
            }
            h.apply(null,g.slice())
        }
        function e(g,i,h,k) {
            if( ! g || g.length === 0) {
                return
            }
            var j = g.length
            ,m=j;
            g.forEach(function(o,n) {
                setTimeout(function() {
                    try {
                        o.apply(null,i)
                    }
                    finally {
                        m--;
                        if(m === 0) {
                            b(k,i)
                        }
                    }
                }
                ,1)
            })
        }
        function d(g) {
            if(f[g]) {
                delete f[g]
            }
        }
        c.dispatchEvent = function(h,g) {
            if( ! h.type) {
                OT.error("OT.Eventing.dispatchEvent: Event has no type");
                OT.error(h);
                throw new Error("OT.Eventing.dispatchEvent: Event has no type")
            }
            if( ! h.target) {
                h.target = this
            }
            if( ! f[h.type] || f[h.type].length === 0) {
                b(g,[h]);
                return
            }
            e(f[h.type],[h],h.type,g);
            return this
        };
        c.trigger = function(g) {
            if( ! f[g] || f[g].length === 0) {
                return
            }
            var h = Array.prototype.slice.call(arguments);
            h.shift();
            e(f[g],h,g);
            return this
        };
        c.on = function(g,i) {
            if(typeof(g) === "string" && i) {
                this.addEventListener(g,i)
            } else {
                for(var h in g) {
                    if(g.hasOwnProperty(h)) {
                        this.addEventListener(h,g[h])
                    }
                }
            }
            return this
        };
        c.off = function(g,i) {
            if(typeof(g) === "string") {
                if(i) {
                    this.removeEventListener(g,i)
                } else {
                    d(g)
                }
            } else {
                for(var h in g) {
                    if(g.hasOwnProperty(h)) {
                        this.removeEventListener(h,g[h])
                    }
                }
            }
            return this
        };
        c.addEventListener = function(g,h) {
            if( ! f[g]) {
                f[g] = []
            }
            f[g].push(h)
        };
        c.removeEventListener = function(g,h) {
            if(f[g]) {
                f[g] = OT._.without(f[g],h)
            }
        };
        return c
    };
    OT.eventing(OT)
})(window);
(function(a) {
    OT.Event = function(e,c) {
        this.type = e;
        this.cancelable = c !== undefined?c:true;
        var d = false
        ,b=null;
        this.preventDefault = function() {
            if(this.cancelable) {
                d = true
            } else {
                OT.warn("Event.preventDefault :: Trying to preventDefault on an Event that isn't cancelable")
            }
        };
        this.isDefaultPrevented = function() {
            return d
        };
        Object.defineProperty(this,"target", {
            set:function(f) {
                b = f
            }
            ,get:function() {
                return b
            }
        })
    };
    OT.Event.names =  {
        ACTIVE:"active"
        ,INACTIVE:"inactive"
        ,UNKNOWN:"unknown"
        ,PER_SESSION:"perSession"
        ,PER_STREAM:"perStream"
        ,EXCEPTION:"exception"
        ,ISSUE_REPORTED:"issueReported"
        ,SESSION_CONNECTED:"sessionConnected"
        ,SESSION_DISCONNECTED:"sessionDisconnected"
        ,STREAM_CREATED:"streamCreated"
        ,STREAM_DESTROYED:"streamDestroyed"
        ,CONNECTION_CREATED:"connectionCreated"
        ,CONNECTION_DESTROYED:"connectionDestroyed"
        ,SIGNAL_RECEIVED:"signalReceived"
        ,STREAM_PROPERTY_CHANGED:"streamPropertyChanged"
        ,MICROPHONE_LEVEL_CHANGED:"microphoneLevelChanged"
        ,ARCHIVE_CREATED:"archiveCreated"
        ,ARCHIVE_CLOSED:"archiveClosed"
        ,ARCHIVE_LOADED:"archiveLoaded"
        ,ARCHIVE_SAVED:"archiveSaved"
        ,SESSION_RECORDING_STARTED:"sessionRecordingStarted"
        ,SESSION_RECORDING_STOPPED:"sessionRecordingStopped"
        ,SESSION_RECORDING_IN_PROGRESS:"sessionRecordingInProgress"
        ,STREAM_RECORDING_IN_PROGRESS:"streamRecordingInProgress"
        ,SESSION_NOT_RECORDING:"sessionNotRecording"
        ,STREAM_NOT_RECORDING:"streamNotRecording"
        ,STREAM_RECORDING_STARTED:"streamRecordingStarted"
        ,STREAM_RECORDING_STOPPED:"streamRecordingStopped"
        ,PLAYBACK_STARTED:"playbackStarted"
        ,PLAYBACK_PAUSED:"playbackPaused"
        ,PLAYBACK_STOPPED:"playbackStopped"
        ,RECORDING_STARTED:"recordingStarted"
        ,RECORDING_STOPPED:"recordingStopped"
        ,RESIZE:"resize"
        ,SETTINGS_BUTTON_CLICK:"settingsButtonClick"
        ,DEVICE_INACTIVE:"deviceInactive"
        ,INVALID_DEVICE_NAME:"invalidDeviceName"
        ,ACCESS_ALLOWED:"accessAllowed"
        ,ACCESS_DENIED:"accessDenied"
        ,ACCESS_DIALOG_OPENED:"accessDialogOpened"
        ,ACCESS_DIALOG_CLOSED:"accessDialogClosed"
        ,ECHO_CANCELLATION_MODE_CHANGED:"echoCancellationModeChanged"
        ,DEVICES_DETECTED:"devicesDetected"
        ,DEVICES_SELECTED:"devicesSelected"
        ,CLOSE_BUTTON_CLICK:"closeButtonClick"
        ,MICLEVEL:"microphoneActivityLevel"
        ,MICGAINCHANGED:"microphoneGainChanged"
        ,DYNAMIC_CONFIG_CHANGED:"dynamicConfigChanged"
        ,DYNAMIC_CONFIG_LOAD_FAILED:"dynamicConfigLoadFailed"
        ,ENV_LOADED:"envLoaded"
    };
    OT.ValueEvent = function(b,c) {
        OT.Event.call(this,b);
        this.value = c
    };
    OT.ExceptionCodes =  {
        JS_EXCEPTION:2000
        ,AUTHENTICATION_ERROR:1004
        ,INVALID_SESSION_ID:1005
        ,CONNECT_FAILED:1006
        ,CONNECT_REJECTED:1007
        ,CONNECTION_TIMEOUT:1008
        ,P2P_CONNECTION_FAILED:1013
        ,API_RESPONSE_FAILURE:1014
        ,UNABLE_TO_PUBLISH:1500
        ,UNABLE_TO_SIGNAL:1510
        ,UNABLE_TO_FORCE_DISCONNECT:1520
        ,UNABLE_TO_FORCE_UNPUBLISH:1530
    };
    OT.ExceptionEvent = function(c,e,f,d,b) {
        OT.Event.call(this,c);
        this.message = e;
        this.title = f;
        this.code = d;
        this.component = b
    };
    OT.IssueReportedEvent = function(b,c) {
        OT.Event.call(this,b);
        this.issueId = c
    };
    OT.EnvLoadedEvent = function(b) {
        OT.Event.call(this,b)
    };
    OT.DynamicConfigChangedEvent = function(b) {
        OT.Event.call(this,b)
    };
    OT.DynamicConfigLoadFailedEvent = function(b) {
        OT.Event.call(this,b)
    };
    OT.ConnectionEvent = function(c,b,d) {
        OT.Event.call(this,c);
        this.connections = b;
        this.reason = d
    };
    OT.StreamEvent = function(c,e,d,b) {
        OT.Event.call(this,c,b);
        this.streams = e;
        this.reason = d
    };
    OT.SessionConnectEvent = function(d,c,e,b) {
        OT.Event.call(this,d);
        this.connections = c;
        this.streams = e;
        this.archives = b;
        this.groups = []
    };
    OT.SessionDisconnectEvent = function(c,d,b) {
        OT.Event.call(this,c,b);
        this.reason = d
    };
    OT.VolumeEvent = function(b,d,c) {
        OT.Event.call(this,b);
        this.streamId = d;
        this.volume = c
    };
    OT.DeviceEvent = function(c,b,d) {
        OT.Event.call(this,c);
        this.camera = b;
        this.microphone = d
    };
    OT.DeviceStatusEvent = function(e,b,d,c,f) {
        OT.Event.call(this,e);
        this.cameras = b;
        this.microphones = d;
        this.selectedCamera = c;
        this.selectedMicrophone = f
    };
    OT.ResizeEvent = function(c,d,b,f,e) {
        OT.Event.call(this,c);
        this.widthFrom = d;
        this.widthTo = b;
        this.heightFrom = f;
        this.heightTo = e
    };
    OT.StreamPropertyChangedEvent = function(c,e,f,b,d) {
        OT.Event.call(this,c);
        this.type = c;
        this.stream = e;
        this.changedProperty = f;
        this.oldValue = b;
        this.newValue = d
    };
    OT.ArchiveEvent = function(c,b) {
        OT.Event.call(this,c);
        this.archives = b
    };
    OT.ArchiveStreamEvent = function(c,b,d) {
        OT.Event.call(this,c);
        this.archive = b;
        this.streams = d
    };
    OT.StateChangedEvent = function(b,c) {
        OT.Event.call(this,b);
        this.changedValues = c
    };
    OT.ChangeFailedEvent = function(b,e,c,d) {
        OT.Event.call(this,b);
        this.reasonCode = e;
        this.reason = c;
        this.failedValues = d
    }
})(window);
(function(a) {
    OT.Config = (function() {
        var j = 4000
        ,n=false
        ,h= {}
        ,c= {}
        ,e
        ,f=document.head || document.getElementsByTagName("head")[0],m
        ,k=function() {
            if(m) {
                clearTimeout(m);
                m = null
            }
        }
        ,b=function() {
            k();
            if(e) {
                e.onload = e.onreadystatechange = null;
                if(f && e.parentNode) {
                    f.removeChild(e)
                }
                e = undefined
            }
        }
        ,d=function() {
            if(e.readyState &&  ! /loaded|complete/.test(e.readyState)) {
                return
            }
            k();
            if( ! n) {
                g._onLoadTimeout()
            }
        }
        ,i=function(o,p) {
            if(p && c[p] && c[p][o]) {
                return c[p][o]
            }
            return h[o]
        }
        ,g= {
            load:function() {
                n = false;
                setTimeout(function() {
                    e = document.createElement("script");
                    e.async = "async";
                    e.src = OT.BUILD_PROPERTIES.configURL;
                    e.onload = e.onreadystatechange = OT._.bind(d,this);
                    f.appendChild(e)
                }
                ,1);
                m = setTimeout(function() {
                    g._onLoadTimeout()
                }
                ,j)
            }
            ,_onLoadTimeout:function() {
                b();
                OT.warn("TB DynamicConfig failed to load in " + j + " ms");
                this.dispatchEvent(new OT.DynamicConfigLoadFailedEvent(OT.Event.names.DYNAMIC_CONFIG_LOAD_FAILED))
            }
            ,isLoaded:function() {
                return n
            }
            ,reset:function() {
                b();
                n = false;
                h =  {};
                c =  {}
            }
            ,replaceWith:function(o) {
                b();
                if( ! o) {
                    o =  {}
                }
                h = o.global ||  {};
                c = o.partners ||  {};
                if( ! n) {
                    n = true
                }
                this.dispatchEvent(new OT.DynamicConfigChangedEvent(OT.Event.names.DYNAMIC_CONFIG_CHANGED))
            }
            ,get:function(o,q,r) {
                var p = i(o,r);
                return p?p[q]:null
            }
        };
        OT.eventing(g);
        return g
    })()
})(window);
(function(c) {
    function b() {
        var d = false
        ,f=false
        ,i=function() {
            return f && d
        }
        ,g=function() {
            if(i()) {
                OT.dispatchEvent(new OT.EnvLoadedEvent(OT.Event.names.ENV_LOADED))
            }
        }
        ,j=function() {
            f = true;
            OT.Config.load();
            g()
        }
        ,e=function() {
            d = true;
            OT.Config.off(OT.Event.names.DYNAMIC_CONFIG_CHANGED,e);
            OT.Config.off(OT.Event.names.DYNAMIC_CONFIG_LOAD_FAILED,h);
            g()
        }
        ,h=function() {
            e()
        };
        swfobject.addDomLoadEvent(j);
        OT.Config.on(OT.Event.names.DYNAMIC_CONFIG_CHANGED,e);
        OT.Config.on(OT.Event.names.DYNAMIC_CONFIG_LOAD_FAILED,h);
        this.onLoad = function(k) {
            if(i()) {
                k();
                return
            }
            OT.on(OT.Event.names.ENV_LOADED,k)
        }
    }
    var a = new b();
    OT.onLoad = function(d) {
        a.onLoad(d)
    }
})(window);
(function(a) {
    OT.WebSocketMessageType =  {
        CONNECTED_TO_WEBSOCKET_SERVER:1000
        ,CONNECT_TO_SESSION:1001
        ,SIGNAL:1002
        ,CONNECTION_CREATED:1003
        ,CONNECTION_DESTROYED:1004
        ,CONNECTION_COUNT_CHANGED:1005
        ,STREAM_CREATED:1006
        ,STREAM_MODIFIED:1007
        ,STREAM_DESTROYED:1008
        ,FORCE_DISCONNECT:1009
        ,FORCE_UNPUBLISH:1010
        ,JSEP_OFFER:1011
        ,JSEP_ANSWER:1012
        ,JSEP_PRANSWER:1013
        ,JSEP_CANDIDATE:1014
        ,JSEP_SUBSCRIBE:1015
        ,JSEP_UNSUBSCRIBE:1016
        ,WEBSOCKET_PING:1017
        ,WEBSOCKET_PONG:1018
        ,SESSION_CONNECT_FAILED:1100
        ,PUBLISH_FAILED:1101
        ,SUBSCRIBE_FAILED:1102
        ,FORCEDISCONNECT_FAILED:1103
        ,FORCEUNPUBLISH_FAILED:1104
    }
})(window);
(function(a) {
    OT.WebSocketMessage = function(b,c) {
        this.type = b;
        this.payload = c;
        this.toString = function() {
            return JSON.stringify(this)
        }
    };
    OT.WebSocketMessage.connectToSessionMessage = function(f,e,c,d,b) {
        return {
            type:OT.WebSocketMessageType.CONNECT_TO_SESSION
            ,payload: {
                sessionId:f
                ,apiKey:e
                ,token:c
                ,supportsWebRTC:OT.$.supportsWebRTC()
                ,connectionObjects:d
                ,p2pEnabled:b
            }
        }
    };
    OT.WebSocketMessage.signalMessage = function(b,d,c) {
        return {
            type:OT.WebSocketMessageType.SIGNAL
            ,payload: {
                fromAddress:b
                ,toAddresses:d
                ,messagePayload:c
            }
        }
    };
    OT.WebSocketMessage.createStream = function(f,e,g,i,b,d,c) {
        var h =  {
            type:OT.WebSocketMessageType.STREAM_CREATED
            ,payload: {
                publisherId:f
                ,name:e
                ,orientation: {
                    videoOrientation:g
                    ,width:i
                    ,height:b
                }
                ,hasAudio:d
                ,hasVideo:c
            }
        };
        return h
    };
    OT.WebSocketMessage.modifyStream = function(e,b,d) {
        var c =  {
            type:OT.WebSocketMessageType.STREAM_MODIFIED
            ,payload: {
                streamId:e
                ,key:b
                ,value:d
            }
        };
        return c
    };
    OT.WebSocketMessage.destroyStream = function(b) {
        return {
            type:OT.WebSocketMessageType.STREAM_DESTROYED
            ,payload: {
                streamId:b
            }
        }
    };
    OT.WebSocketMessage.jsepMessage = function(d,f,b,e) {
        e.fromAddress = d;
        e.toAddresses = f;
        var c =  {
            type:b
            ,payload:e
        };
        return c
    };
    OT.WebSocketMessage.forceDisconnect = function(b) {
        return {
            type:OT.WebSocketMessageType.FORCE_DISCONNECT
            ,payload: {
                connectionId:b
            }
        }
    };
    OT.WebSocketMessage.forceUnpublish = function(b) {
        return {
            type:OT.WebSocketMessageType.FORCE_UNPUBLISH
            ,payload: {
                streamId:b
            }
        }
    };
    OT.WebSocketMessage.pingMessage = function(b) {
        return {
            type:OT.WebSocketMessageType.WEBSOCKET_PING
            ,payload: {
                message:b
            }
        }
    };
    OT.WebSocketMessage.pongMessage = function(b) {
        return {
            type:OT.WebSocketMessageType.WEBSOCKET_PONG
            ,payload: {
                message:b
            }
        }
    }
})(window);
(function(a) {
    OT.Messenger = function(f,b) {
        var q =  {};
        q[OT.WebSocketMessageType.CONNECT_TO_SESSION] = "SessionConnected";
        q[OT.WebSocketMessageType.SESSION_CONNECT_FAILED] = "SessionConnectFailed";
        q[OT.WebSocketMessageType.CONNECTION_CREATED] = "ConnectionCreated";
        q[OT.WebSocketMessageType.CONNECTION_DESTROYED] = "ConnectionDestroyed";
        q[OT.WebSocketMessageType.STREAM_CREATED] = "StreamCreated";
        q[OT.WebSocketMessageType.STREAM_MODIFIED] = "StreamModified";
        q[OT.WebSocketMessageType.STREAM_DESTROYED] = "StreamDestroyed";
        q[OT.WebSocketMessageType.JSEP_OFFER] = "JSEPMessageReceived";
        q[OT.WebSocketMessageType.JSEP_ANSWER] = "JSEPMessageReceived";
        q[OT.WebSocketMessageType.JSEP_PRANSWER] = "JSEPMessageReceived";
        q[OT.WebSocketMessageType.JSEP_CANDIDATE] = "JSEPMessageReceived";
        q[OT.WebSocketMessageType.JSEP_SUBSCRIBE] = "JSEPMessageReceived";
        q[OT.WebSocketMessageType.JSEP_UNSUBSCRIBE] = "JSEPMessageReceived";
        q[OT.WebSocketMessageType.SIGNAL] = "SignalReceived";
        var e = 8081;
        OT.eventing(this);
        this.onSessionConnected = null;
        this.onConnectionClosed = null;
        this.webSocket = null;
        this.connectionId = null;
        var h,j,d,o
        ,g=false
        ,n=new OT.Analytics();
        this.connect = function(v,t,u) {
            h = v;
            j = t;
            d = u;
            _webSocketUrl = "ws://" + f + ":" + e + "/rumorwebsockets";
            n.logEvent({
                action:"webSocketConnection"
                ,variation:"Attempt"
                ,payload_type:"webSocketServerUrl"
                ,payload:_webSocketUrl
                ,session_id:h
                ,partner_id:d.partnerId
                ,widget_id:d.widgetId
            });
            this.webSocket = new WebSocket(_webSocketUrl);
            this.webSocket.onopen = s;
            this.webSocket.onclose = c;
            this.webSocket.onerror = p;
            this.webSocket.onmessage = i;
            o = setTimeout(function() {
                n.logEvent({
                    action:"webSocketConnection"
                    ,variation:"Failure"
                    ,payload_type:"webSocketServerUrl"
                    ,payload:"Connection to the server timed out waiting to receive connected message."
                    ,session_id:h
                    ,partner_id:d.partnerId
                    ,widget_id:d.widgetId
                });
                r.trigger("exception","Connection to the server timed out.",OT.ExceptionCodes.CONNECTION_TIMEOUT)
            }
            ,15000)
        };
        this.disconnect = function() {
            g = true;
            if(this.webSocket) {
                this.webSocket.close();
                this.webSocket = null
            }
        };
        this.sendMessage = function(t) {
            this.webSocket.send(JSON.stringify(t))
        };
        function s() {
            OT.debug("WebSocket connected");
            clearTimeout(o);
            o = setTimeout(function() {
                n.logEvent({
                    action:"webSocketConnection"
                    ,variation:"Failure"
                    ,payload_type:"reason"
                    ,payload:"Connection to the server timed out waiting to receive connected message."
                    ,session_id:h
                    ,partner_id:d.partnerId
                    ,widget_id:d.widgetId
                });
                r.trigger("exception","Connection to the server timed out waiting to receive connected message.",OT.ExceptionCodes.CONNECTION_TIMEOUT)
            }
            ,15000)
        }
        function p() {
            r.trigger("exception","TB.Socket Error :: The socket to " + f + " received an error.",OT.ExceptionCodes.CONNECT_FAILED)
        }
        function c() {
            r.trigger("ConnectionClosed", {
                reason:g?"":"networkDisconnected"
            })
        }
        function i(t) {
            m(t.data)
        }
        function m(v) {
            var t = JSON.parse(v);
            switch(t.type) {
                case OT.WebSocketMessageType.WEBSOCKET_PING:r.sendMessage(OT.WebSocketMessage.pongMessage("pong!"));
                break;
                case OT.WebSocketMessageType.CONNECTED_TO_WEBSOCKET_SERVER:k(t.payload);
                break;
                case OT.WebSocketMessageType.CONNECT_TO_SESSION:clearTimeout(o);
                default:if(q.hasOwnProperty(t.type)) {
                    var u = q[t.type];
                    OT.debug("Received " + u);
                    r.trigger(u,b.wrangle(t.payload))
                } else {
                    OT.debug("Message type " + t.type + " was not handled.")
                }
                break
            }
        }
        function k(t) {
            r.connectionId = t.connectionId;
            n.logEvent({
                action:"webSocketConnection"
                ,variation:"Success"
                ,payload_type:"webSocketServerUrl"
                ,payload:_webSocketUrl
                ,session_id:h
                ,partner_id:d.partnerId
                ,widget_id:d.widgetId
                ,connectionId:t.connectionId
            });
            clearTimeout(o);
            o = setTimeout(function() {
                n.logEvent({
                    action:"webSocketConnection"
                    ,variation:"Success"
                    ,payload_type:"webSocketServerUrl"
                    ,payload:"Connection to the server timed out waiting to receive connected message."
                    ,session_id:h
                    ,partner_id:d.partnerId
                    ,widget_id:d.widgetId
                });
                r.trigger("exception","Connection to the server timed out fetching the session state.",OT.ExceptionCodes.CONNECTION_TIMEOUT)
            }
            ,15000);
            r.sendMessage(OT.WebSocketMessage.connectToSessionMessage(h,OT.APIKEY,j,d.requireConnectionObjects,d.p2pEnabled))
        }
        var r = this
    }
})(window);
(function(a) {
    OT.log = function(b) {
        console.log(b)
    };
    OT.debug = function(b) {
        console.log(b)
    };
    OT.info = function(b) {
        console.info(b)
    };
    OT.warn = function(b) {
        console.warn(b)
    };
    OT.error = function(b) {
        console.error(b)
    };
    OT.setLogLevel = function(b) {
        OT.warn("ToDo: Haven't yet implemented TB.setLogLevel")
    }
})(window);
(function(a) {
    OT.$ = function(b) {
        return document.getElementById(b)
    };
    OT.$.noop = function() {};
    OT.$.supportsWebSockets = function() {
        return"WebSocket" in a
    };
    OT.$.browser = function() {
        var c = a.navigator.userAgent.toLowerCase(),d
        ,b="Unknown";
        if(c.indexOf("firefox") >  - 1) {
            b = "Firefox"
        }
        if(c.indexOf("opera") >  - 1) {
            b = "Opera"
        } else {
            if(c.indexOf("msie") >  - 1) {
                b = "IE"
            } else {
                if(c.indexOf("chrome") >  - 1) {
                    b = "Chrome"
                }
            }
        }
        if((d = a.navigator.vendor) && d.toLowerCase().indexOf("apple") >  - 1) {
            b = "Safari"
        }
        c = null;
        OT.$.browser = function() {
            return b
        };
        return b
    };
    OT.$.moreInfoLink = function(c) {
        var d = c?c.apiKey:OT.APIKEY
        ,b=["http://www.tokbox.com/opentok/info"];
        b[0] += "?guid=a80c00ad22a3e7dcee262f5f7c549c94c794d663";
        if(c) {
            b.push("session_id=" + c.id);
            if(c.connected) {
                b.push("connection_id=" + c.connection.id)
            }
        }
        b.push("partner_id=" + d);
        b.push("utm_source=" + d);
        b.push("utm_medium=" + OT.$.browser());
        if(OT.BUILD_PROPERTIES.widgetURL.indexOf("static") >  - 1) {
            b.push("utm_campaign=static")
        } else {
            b.push("utm_campaign=staging")
        }
        return b.join("&")
    };
    OT.$.deepClone = function(d) {
        if( ! OT._.isObject(d)) {
            return d
        }
        var b = OT._.isArray(d)?[]: {};
        for(var c in d) {
            if( ! d.hasOwnProperty(c)) {
                continue
            }
            if(OT._.isObject(d[c])) {
                b[c] = this.deepClone(d[c])
            } else {
                b[c] = d[c]
            }
        }
        return b
    };
    OT.$.JSONify = (JSON && JSON.stringify)?JSON.stringify:function(c) {
        var b = "{ ";
        for(var d in c) {
            if(typeof(c[d]) == "boolean") {
                b += '"' + d + '":' + c[d] + ", "
            } else {
                b += '"' + d + '":"' + c[d].toString() + '", '
            }
        }
        if(b.length > 1) {
            b = b.substring(0,b.length - 2) + " }"
        } else {
            b = "{}"
        }
        return b
    };
    OT.$.tbAlert = function(e,c) {
        var b = new OT.Modal(e,"<div>" + c + "</div>");
        OT.$.addClass(b.el,"OT_tbalert");
        var d = OT.$.createElement("input", {
            className:"OT_closeButton"
            ,type:"button"
            ,value:"close"
        });
        b.el.appendChild(d);
        d.onclick = function() {
            if(b) {
                b.close()
            }
            b = null
        }
    };
    if( ! Object.create) {
        Object.create = function(c) {
            if(arguments.length > 1) {
                throw new Error("Object.create implementation only accepts the first parameter.")
            }
            function b() {}
            b.prototype = c;
            return new b()
        }
    }
})(window);
(function(a) {
    OT.$.castToBoolean = function(c,b) {
        if(c === undefined) {
            return b
        }
        return c === "true" || c === true
    }
})(window);
(function(a) {
    OT.$.supportsClassList = function() {
        var b = typeof(document !== "undefined") && ("classList" in document.createElement("a"));
        OT.$.supportsClassList = function() {
            return b
        };
        return b
    };
    OT.$.removeElement = function(b) {
        if(b && b.parentNode) {
            b.parentNode.removeChild(b)
        }
    };
    OT.$.removeElementById = function(b) {
        this.removeElement(OT.$(b))
    };
    OT.$.removeElementsByType = function(b,c) {
        if( ! b) {
            return
        }
        var d = b.getElementsByTagName(c);
        while(d.length) {
            b.removeChild(d[0])
        }
    };
    OT.$.createElement = function(h,b,g) {
        var e = document.createElement(h);
        for(var d in b) {
            if(typeof(b[d]) === "object") {
                if( ! e[d]) {
                    e[d] =  {}
                }
                var c = b[d];
                for(var f in c) {
                    e[d][f] = c[f]
                }
            } else {
                if(d === "className") {
                    e.className = b[d]
                } else {
                    e.setAttribute(d,b[d])
                }
            }
        }
        if(g) {
            e.innerHTML = g
        }
        return e
    };
    OT.$.createButton = function(f,b,e) {
        var d = OT.$.createElement("button",b,f);
        if(e) {
            for(var c in e) {
                if(e.hasOwnProperty(c)) {
                    OT.$.on(d,c,e[c])
                }
            }
            d._boundEvents = e
        }
        return d
    };
    OT.$.on = function(d,b,e) {
        if(d.addEventListener) {
            d.addEventListener(b,e,false)
        } else {
            if(d.attachEvent) {
                d.attachEvent("on" + b,e)
            } else {
                var c = d["on" + b];
                d["on" + b] = function() {
                    e.apply(this,arguments);
                    if(c) {
                        c.apply(this,arguments)
                    }
                }
            }
        }
    }
})(window);
(function(c) {
    OT.$.addClass = function(e,f) {
        if(e.nodeType !== 1) {
            return
        }
        var h = f.trim().split(/\s+/)
        ,d;if(OT.$.supportsClassList()) {
            for(d=0,l=h.length;d<l;++d) {
                e.classList.add(h[d])
            }
            return
        }
        if( ! e.className && h.length === 1) {
            e.className = f
        } else {
            var g = " " + e.className + " ";
            for(d=0,l=h.length;d<l;++d) {
                if( !  ~ g.indexOf(" " + h[d] + " ")) {
                    g += h[d] + " "
                }
            }
            e.className = g.trim()
        }
        return this
    };
    OT.$.removeClass = function(e,g) {
        if( ! g) {
            return
        }
        if(e.nodeType !== 1) {
            return
        }
        var h = g.trim().split(/\s+/)
        ,d;if(OT.$.supportsClassList()) {
            for(d=0,l=h.length;d<l;++d) {
                e.classList.remove(h[d])
            }
            return
        }
        var f = (" " + e.className + " ").replace(/[\s+]/," ");
        for(d=0,l=h.length;d<l;++d) {
            f = f.replace(" " + h[d] + " "," ")
        }
        e.className = f.trim();
        return this
    };
    var a = function(d) {
        if(d.offsetWidth > 0) {
            return d.offsetWidth + "px"
        }
        return OT.$.css(d,"width")
    }
    ,b=function(d) {
        if(d.offsetHeight > 0) {
            return d.offsetHeight + "px"
        }
        return OT.$.css(d,"height")
    };
    OT.$.width = function(d) {
        if(d.offsetWidth !== 0) {
            return a(d)
        } else {
            return OT.$.makeVisibleAndYield(d,function() {
                return a(d)
            })
        }
    };
    OT.$.height = function(d) {
        if(d.offsetHeight !== 0) {
            return b(d)
        } else {
            return OT.$.makeVisibleAndYield(d,function() {
                return b(d)
            })
        }
    };
    OT.$.centerElement = function(e,f,d) {
        if( ! f) {
            f = parseInt(OT.$.width(e),10)
        }
        if( ! d) {
            d = parseInt(OT.$.height(e),10)
        }
        var h =  - 0.5 * f + "px";
        var g =  - 0.5 * d + "px";
        OT.$.css(e,"margin",g + " 0 0 " + h);
        OT.$.addClass(e,"OT_centered")
    }
})(window);
(function(a) {
    var b =  {};
    OT.$.show = function(c) {
        var d = c.style.display;
        if(d === "" || d === "none") {
            c.style.display = b[c] || "";
            delete b[c]
        }
        return this
    };
    OT.$.hide = function(c) {
        if(c.style.display === "none") {
            return
        }
        b[c] = OT.$.css(c,"display");
        c.style.display = "none";
        return this
    };
    OT.$.css = function(e,j,h) {
        if(typeof(j) !== "string") {
            var g = e.style;
            for(var i in j) {
                g[i] = j[i]
            }
            return this
        } else {
            if(h) {
                e.style[j] = h;
                return this
            } else {
                var d = j.replace(/([A-Z]|^ms)/g,"-$1").toLowerCase()
                ,c=e.ownerDocument.defaultView.getComputedStyle(e,null)
                ,f=c.getPropertyValue(d);
                if(f === "") {
                    f = e.style[d]
                }
                return f
            }
        }
    };
    OT.$.applyCSS = function(e,g,h) {
        var f =  {}
        ,d
        ,c;for(d in g) {
            if(g.hasOwnProperty(d)) {
                f[d] = OT.$.css(e,d);
                OT.$.css(e,d,g[d])
            }
        }
        c = h();
        for(d in g) {
            if(g.hasOwnProperty(d)) {
                OT.$.css(e,d,f[d])
            }
        }
        return c
    };
    OT.$.makeVisibleAndYield = function(c,d) {
        return OT.$.applyCSS(c, {
            display:"block"
            ,visibility:"hidden"
        }
        ,d)
    }
})(window);
(function(b) {
    function a(c) {
        Object.defineProperty(c.prototype,"firstElementChild", {
            get:function() {
                var d = this;
                d = d.firstChild;
                while(d && d.nodeType != 1) {
                    d = d.nextSibling
                }
                return d
            }
        });
        Object.defineProperty(c.prototype,"lastElementChild", {
            get:function() {
                var d = this;
                d = d.lastChild;
                while(d && d.nodeType != 1) {
                    d = d.previousSibling
                }
                return d
            }
        });
        Object.defineProperty(c.prototype,"nextElementSibling", {
            get:function() {
                var d = this;
                while(d = d.nextSibling) {
                    if(d.nodeType == 1) {
                        break
                    }
                }
                return d
            }
        });
        Object.defineProperty(c.prototype,"previousElementSibling", {
            get:function() {
                var d = this;
                while(d = d.previousSibling) {
                    if(d.nodeType == 1) {
                        break
                    }
                }
                return d
            }
        })
    }
    OT.$.parseXML = function(e) {
        var c
        ,d;if(b.DOMParser) {
            d = (new DOMParser()).parseFromString(e,"text/xml")
        } else {
            d = new ActiveXObject("Microsoft.XMLDOM");
            d.async = "false";
            d.loadXML(e);
            a(d)
        }
        c = d.documentElement;
        if( ! c ||  ! c.nodeName || c.nodeName === "parsererror") {
            return null
        }
        return d
    }
})(window);
(function(a) {
    OT.$.getXML = function(d,c) {
        var e = c && c.success
        ,f=function(i) {
            var h = i.target.responseXML
            ,g;if(h) {
                g = h.documentElement;
                if( ! g ||  ! g.nodeName || g.nodeName === "parsererror") {
                    h = null
                }
            }
            if(h === null) {
                if(c && c.error) {
                    c.error(i,i.target)
                }
                return
            }
            if(e) {
                e(h,i,i.target)
            }
        };
        var b = OT._.extend(c.headers ||  {}
        , {
            "Content-Type":"application/xml"
        });
        OT.$.get(d,OT._.extend(c ||  {}
        , {
            success:f
            ,headers:b
        }))
    };
    OT.$.getJSON = function(c,b) {
        var d = b && b.success
        ,e=function(g) {
            var f;
            try {
                f = JSON.parse(g.target.responseText)
            } catch(h) {
                if(b && b.error) {
                    b.error(g,g.target)
                }
                return
            }
            if(d) {
                d(f,g,g.target)
            }
        };
        OT.$.get(c,OT._.extend(b ||  {}
        , {
            success:e
            ,headers: {
                "Content-Type":"application/json"
            }
        }))
    };
    OT.$.get = function(e,d) {
        var f = new XMLHttpRequest()
        ,b=d ||  {};
        if(b.success) {
            f.addEventListener("load",b.success,false)
        }
        if(b.error) {
            f.addEventListener("error",b.error,false)
        }
        if(b.process) {
            f.addEventListener("progress",b.progress,false)
        }
        if(b.cancelled) {
            f.addEventListener("abort",b.cancelled,false)
        }
        f.open("GET",e,true);
        if( ! b.headers) {
            b.headers =  {}
        }
        for(var c in b.headers) {
            f.setRequestHeader(c,b.headers[c])
        }
        f.send()
    };
    OT.$.getJSONP = function(c,o) {
        var k = 30000,f
        ,h=document.head || document.getElementsByTagName("head")[0],j
        ,g=c
        ,n=OT._.extend(o ||  {}
        , {
            callbackParameter:"callback"
        })
        ,m=function() {
            if(j) {
                clearTimeout(j);
                j = null
            }
        }
        ,b=function() {
            m();
            if(f) {
                f.onload = f.onreadystatechange = null;
                OT.$.removeElement(f);
                f = undefined
            }
        }
        ,d=function() {
            if(f.readyState &&  ! /loaded|complete/.test(f.readyState)) {
                return
            }
            m()
        }
        ,e=function() {
            b();
            OT.error("The JSONP request to " + g + " timed out after " + k + "ms.");
            if(n.error) {
                n.error("The JSONP request to " + c + " timed out after " + k + "ms.",g,n)
            }
        }
        ,i=function() {
            return"jsonp_callback_" + ( + new Date())
        };
        n.callbackName = i();
        this.jsonp_callbacks[n.callbackName] = function(p) {
            b();
            if(n.success) {
                n.success(p)
            }
        };
        g += ((/\?/).test(g)?"&":"?") + n.callbackParameter + "=" + n.callbackName;
        f = OT.$.createElement("script", {
            async:"async"
            ,src:g
            ,onload:d
            ,onreadystatechange:d
        });
        h.appendChild(f);
        j = setTimeout(function() {
            _this._onLoadTimeout()
        }
        ,k)
    }
})(window);
(function(c) {
    var e =  {};
    e[MediaError.MEDIA_ERR_ABORTED] = "The fetching process for the media resource was aborted by the user agent at the user's request.";
    e[MediaError.MEDIA_ERR_NETWORK] = "A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.";
    e[MediaError.MEDIA_ERR_DECODE] = "An error of some description occurred while decoding the media resource, after the resource was established to be usable.";
    e[MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED] = "The media resource indicated by the src attribute was not suitable. ";
    OT.VideoOrientation =  {
        ROTATED_NORMAL:"OTVideoOrientationRotatedNormal"
        ,ROTATED_LEFT:"OTVideoOrientationRotatedLeft"
        ,ROTATED_RIGHT:"OTVideoOrientationRotatedRight"
        ,ROTATED_UPSIDE_DOWN:"OTVideoOrientationRotatedUpsideDown"
    };
    function a(m,o,i,j,h) {
        m.src = c.URL.createObjectURL(o);
        var n = 50
        ,g=0
        ,k;function f() {
            g++;
            if(o.videoTracks.length === 0 || m.currentTime > 0) {
                i()
            } else {
                if(g < n) {
                    k = setTimeout(f,100)
                } else {
                    j("Timed out while waiting for the Video to load the stream. This could be because someone is behind a Firewall or Symmetric NAT.")
                }
            }
        }
        f()
    }
    var b = 4/3;function d(h,j,f){if(!j){j=parseInt(OT.$.width(h.parentNode),10)}else{j=parseInt(j,10)}if(!f){f=parseInt(OT.$.height(h.parentNode),10)}else{f=parseInt(f,10)}var m=(j+0)/f,k,g,i
    ,n;if(b == m) {
        g = k = "100%"
    } else {
        if(m > b) {
            k = "100";
            g = (m/b) * 100;
            n = (g - 100)/2;
            i = 0
        } else {
            g = "100%";
            k = (b/m) * 100;
            i = (k - 100)/2;
            n = 0
        }
    }
    OT.$.css(h, {
        width:k + "%"
        ,height:g + "%"
        ,marginLeft:"-" + i + "%"
        ,marginTop:"-" + n + "%"
    })
}
OT.$.createVideoElement = function(g,h,k,f,j) {
    var i = document.createElement("video");
    i.addEventListener("error",f,false);
    i.setAttribute("autoplay","");
    i.innerHTML = j || "Sorry, Web RTC is not available in your browser";
    a(i,g,h,k);
    return i
};
OT.$.getOrCreateWidgetContainerById = function(i,g) {
    var f = OT.$(i)
    ,h=document.createElement("div");
    if( ! f) {
        f = OT.$.createElement("div", {
            id:i
        });
        f.style.backgroundColor = "#000000";
        document.body.appendChild(f)
    }
    if(g) {
        f.style.width = g.width?(g.width + "px"):"264px";
        f.style.height = g.height?(g.height + "px"):"198px";
        f.style.overflow = "hidden";
        if(g.mirror === undefined || g.mirror) {
            OT.$.addClass(f,"OT_mirrored")
        }
    }
    if(g.classNames) {
        OT.$.addClass(f,g.classNames)
    }
    OT.$.addClass(h,"OT_video-container");
    h.style.width = f.style.width;
    h.style.height = f.style.height;
    f.appendChild(h);
    d(h,f.style.width,f.style.height);
    f.videoContainer = h;
    return f
};
OT.$.videoElementErrorCodeToStr = function(f) {
    return e[parseInt(f,10)] || "An unknown error occurred."
};
OT.$.imgDataFromVideo = function(g) {
    var f = OT.$.createElement("canvas", {
        width:g.videoWidth
        ,height:g.videoHeight
        ,style: {
            display:"none"
        }
    });
    document.body.appendChild(f);
    f.getContext("2d").drawImage(g,0,0);
    var h = f.toDataURL("image/png");
    OT.$.removeElement(f);
    return h.replace("data:image/png;base64,","").trim()
}
})(window);
(function(a) {
OT.$.supportsWebRTC = function() {
    return typeof(webkitRTCPeerConnection) === "function" && webkitRTCPeerConnection.prototype.addStream && typeof(navigator.getUserMedia) === "function"
};
OT.$.getUserMedia = function(h,m,d,c,b) {
    var f = null
    ,g=function() {
        if(f) {
            clearTimeout(f)
        } else {
            b()
        }
    }
    ,n=function() {
        f = null;
        c()
    }
    ,k=function() {
        g();
        m.apply(null,arguments)
    }
    ,i=function(e) {
        g();
        d.apply(null,arguments)
    };
    try {
        navigator.getUserMedia(h,k,i)
    } catch(j) {
        OT.error("Couldn't get UserMedia: " + j.toString());
        throw j
    }
    if(location.protocol.indexOf("https") ===  - 1) {
        setTimeout(n,100)
    } else {
        f = setTimeout(n,500)
    }
}
})(window);
(function(a) {
OT.Modal = function(e,b,d) {
    var c = " <header> <h1><%= title %></h1> </header> <div class='OT_dialog-body'> <%= body %> </div> ";
    this.el = OT.$.createElement("section", {
        className:"OT_root OT_dialog OT_modal"
    }
    ,OT._.template(c, {
        title:e
        ,body:b
    }));
    this.el.style.display = "none";
    document.body.appendChild(this.el);
    OT.$.centerElement(this.el);
    OT.$.show(this.el);
    this.close = function() {
        OT.$.removeElement(this.el);
        this.el = null;
        return this
    }
}
})(window);
(function(d) {
var c =  {
    1000:"Failed To Load"
    ,1004:"Authentication error"
    ,1005:"Invalid Session ID"
    ,1006:"Connect Failed"
    ,1007:"Connect Rejected"
    ,1008:"Connect Time-out"
    ,1009:"Security Error"
    ,1010:"Not Connected"
    ,1011:"Invalid Parameter"
    ,1012:"Peer-to-peer Stream Play Failed"
    ,1013:"Peer-to-peer Connection Failed"
    ,1014:"API Response Failure"
    ,1500:"Unable to Publish"
    ,1510:"Unable to Signal"
    ,1520:"Unable to Force Disconnect"
    ,1530:"Unable to Force Unpublish"
    ,1540:"Unable to record archive"
    ,1550:"Unable to play back archive"
    ,1560:"Unable to create archive"
    ,1570:"Unable to load archive"
    ,2000:"Internal Error"
    ,2001:"Embed Failed"
    ,3000:"Archive load exception"
    ,3001:"Archive create exception"
    ,3002:"Playback stop exception"
    ,3003:"Playback start exception"
    ,3004:"Record start exception"
    ,3005:"Record stop exception"
    ,3006:"Archive load exception"
    ,3007:"Session recording in progress"
    ,3008:"Archive recording internal failure"
    ,4000:"WebSocket Connection Failed"
    ,4001:"WebSocket Network Disconnected"
};
var b;
function a(e,k,i,f) {
    var j = c[i]
    ,g=f?OT._.clone(f): {};
    OT.error("TB.exception :: title: " + j + " (" + i + ") msg: " + k);
    if( ! g.partnerId) {
        g.partnerId = OT.APIKEY
    }
    try {
        if( ! b) {
            b = new OT.Analytics()
        }
        b.logError(i,"tb.exception",j, {
            details:k
        }
        ,g);
        OT.dispatchEvent(new OT.ExceptionEvent(OT.Event.names.EXCEPTION,k,j,i,e))
    } catch(h) {
        OT.error("TB.exception :: Failed to dispatch exception - " + h.toString())
    }
}
OT.handleJsException = function(h,g,e) {
    if(e &&  ! e.target) {
        e.target = null
    }
    var f
    ,i=e.session;
    if(i) {
        f =  {
            sessionId:i.sessionId
        };
        if(i.connected) {
            f.connectionId = i.connection.connectionId
        }
    } else {
        if(e.sessionId) {
            f =  {
                sessionId:e.sessionId
            }
        }
    }
    a(e.target,h,g,f)
};
OT.exceptionHandler = function(f,j,e,i,g) {
    var h;
    if(f) {
        h = OT.components[f];
        if( ! h) {
            OT.warn("Could not find the component with component ID " + f)
        }
    }
    a(h,j,i,g)
}
})(window);
(function(a) {
OT.ConnectionCapabilities = function(d) {
    var b = function(e) {
        e.supportsWebRTC = OT.$.castToBoolean(e.supportsWebRTC);
        return e
    };
    var c = b(d);
    this.supportsWebRTC = c.supportsWebRTC
}
})(window);
(function(a) {
OT.Connection = function(e,b,d,c) {
    this.id = this.connectionId = e;
    this.creationTime = Number(b);
    this.data = d;
    this.capabilities = new OT.ConnectionCapabilities(c);
    this.quality = null;
    OT.eventing(this)
}
})(window);
(function(a) {
OT.Stream = function(e,f,b,j,n,k,m,h,d,i,g,o,c,p) {
    this.id = this.streamId = e;
    this.sessionId = i;
    this.connection = f;
    this.name = b;
    this.data = j;
    this.type = n || "basic";
    this.creationTime = Number(k);
    this.hasAudio = OT.$.castToBoolean(m,true);
    this.hasVideo = OT.$.castToBoolean(h,true);
    this.orientation = d;
    this.peerId = g;
    this.quality = o;
    this.videoDimensions =  {
        width:c
        ,height:p
    };
    OT.eventing(this);
    this.update = function(q,r) {
        switch(q) {
            case"hasAudio":case"hasVideo":this[q] = OT.$.castToBoolean(r,true);
            break;
            case"quality":case"name":case"videoDimensions":case"orientation":this[q] = r
        }
    };
    this.startRecording = function(q) {
        OT.debug("OT.Stream.startRecording");
        throw new Error("OT.Stream.startRecording: Is not implemented yet.")
    };
    this.stopRecording = function(q) {
        OT.debug("OT.Stream.stopRecording");
        throw new Error("OT.Stream.stopRecording: Is not implemented yet.")
    }
}
})(window);
(function(a) {
OT.DOMComponentCleanup = (function() {
    var e =  {}
    ,d= {};
    var c = function(f) {
        OT.$.on(f,"unload",function() {
            return b(f)
        })
    }
    ,b=function(f) {
        if( ! d[f] || d[f].length === 0) {
            return
        }
        d[f].slice().forEach(function(g) {
            g.destroy()
        });
        delete d[f]
    };
    return {
        add:function(f) {
            if(f.targetElement && f.id) {
                var g = f.targetElement.ownerDocument.defaultView;
                e[f.id] = g;
                if( ! d.hasOwnProperty(g)) {
                    d[g] = [];
                    c(g)
                }
                d[g].push(f)
            }
        }
        ,remove:function(g) {
            if( ! g.id ||  ! e[g.id]) {
                return
            }
            var h = e[g.id]
            ,f;if((f = OT._.indexOf(d[h],g)) !=  - 1) {
                d[h].splice(f,1)
            }
        }
    }
})()
})(window);
(function(d) {
var c = function(f,h,g) {
    return function(i) {
        OT.debug("IceCandidateForwarder: Ice Candidate for " + g.id);
        if(i.candidate) {
            f.sendJSEPMessage(g,OT.WebSocketMessageType.JSEP_CANDIDATE, {
                streamId:h.id
                ,candidate:i.candidate
            })
        }
    }
};
var a = function() {
    var g = []
    ,f=null;
    Object.defineProperty(this,"peerConnection", {
        set:function(h) {
            f = h
        }
    });
    this.process = function(i) {
        var h = new RTCIceCandidate(i.candidate);
        if(f) {
            f.addIceCandidate(h)
        } else {
            g.push(h)
        }
    };
    this.processPending = function() {
        while(g.length) {
            f.addIceCandidate(g.shift())
        }
    }
};
var b = function(f,k,m,g) {
    var j = function(n) {
        return function(o) {
            if(g) {
                g(n,o)
            }
        }
    }
    ,i=function(n) {
        f.setLocalDescription(n,function() {
            m(n)
        }
        ,j("Error while setting LocalDescription"))
    }
    ,h=function(n) {
        f.createAnswer(i,j("Error while setting createAnswer"))
    };
    f.setRemoteDescription(k,h,j("Error while setting RemoteDescription"))
};
var e = function(f,j,g) {
    var i = function(k) {
        return function(m) {
            if(g) {
                g(k,m)
            }
        }
    }
    ,h=function(k) {
        f.setLocalDescription(k,function() {
            j(k)
        }
        ,i("Error while setting LocalDescription"))
    };
    f.createOffer(h,i("Error while creating Offer"))
};
OT.rtc.PeerConnection = function(x,f,o,p,k,m,G,t) {
    var r
    ,h=new a(),C
    ,y=[],A,I
    ,v= {
        iceServers:[ {
            url:"stun:stun.l.google.com:19302"
        }
        ]
    }
    ,D="new"
    ,s=true
    ,j=true;
    var B = function() {
        if( ! r) {
            try {
                OT.debug('Creating peer connection config "' + JSON.stringify(v) + '".');
                r = new webkitRTCPeerConnection(v)
            } catch(J) {
                OT.error("Failed to create PeerConnection, exception: " + J.message);
                return null
            }
            h.peerConnection = r;
            r.onicecandidate = c(f,o,x);
            r.onaddstream = H;
            r.onremovestream = q;
            r.onstatechange = n
        }
        return r
    }
    ,n=function(J) {
        if(J.target.readyState.toLowerCase() !== D) {
            D = J.target.readyState.toLowerCase();
            OT.debug("PeerConnection.stateChange: " + D);
            switch(D) {
                case"new":break;
                case"open":case"active":case"stable":w(J);
                break;
                case"closed":h.peerConnection = null;
                r = null;
                if(k) {
                    k()
                }
                break
            }
        }
    }
    ,u=function(K,J) {
        return OT._.bind(function(L) {
            g.call(this,"PeerConnection." + K + ": " + J + ": " + L)
        }
        ,this)
    }
    ,w=function(J) {
        OT.debug("PeerConnection.onPeerOpened");
        if(p) {
            p()
        }
    }
    ,H=function(J) {
        OT.debug("PeerConnection.onRemoteStreamAdded");
        y.push(J.stream);
        if(m) {
            m(J.stream)
        }
    }
    ,q=function(J) {
        OT.debug("PeerConnection.onRemoteStreamRemoved");
        y.remove(J.stream);
        if(G) {
            G(J.stream)
        }
    }
    ,F=function(K,J) {
        f.sendJSEPMessage(x,K, {
            streamId:o.id
            ,sdp:J
        })
    }
    ,z=function(L) {
        var K = new RTCSessionDescription(L.sdp)
        ,J=function(N) {
            F(OT.WebSocketMessageType.JSEP_ANSWER,N)
        }
        ,M=function(O,N) {
            g("PeerConnection.offerProcessor " + O + ": " + N)
        };
        B();
        _remoteDescriptionType = K.type;
        _remoteDescription = K;
        b(r,K,J,M)
    }
    ,E=function(J) {
        if( ! J.sdp) {
            OT.error("PeerConnection.processMessage: Weird message, no SDP.");
            return
        }
        I = new RTCSessionDescription(J.sdp);
        _remoteDescriptionType = I.type;
        _remoteDescription = I;
        r.setRemoteDescription(I);
        h.processPending()
    }
    ,i=function(J) {
        OT.debug("PeerConnection.processSubscribe: Sending offer to subscriber.");
        B();
        e(r,function(K) {
            A = K;
            F(OT.WebSocketMessageType.JSEP_OFFER,A)
        }
        ,function(L,K) {
            g("PeerConnection.suscribeProcessor " + L + ": " + K)
        })
    }
    ,g=function(J) {
        OT.error(J);
        if(t) {
            t(J)
        }
    };
    this.addLocalStream = function(J) {
        C = J;
        B();
        if(C.audioTracks.length > 0) {
            C.audioTracks[0].enabled = s
        }
        if(C.videoTracks.length > 0) {
            C.videoTracks[0].enabled = j
        }
        r.addStream(J)
    };
    this.disconnect = function() {
        if(r) {
            r = null
        }
        y = []
    };
    this.processMessage = function(J,K) {
        OT.debug("PeerConnection.processMessage: Received " + J + " from " + K.fromAddress);
        OT.debug(K);
        switch(J) {
            case OT.WebSocketMessageType.JSEP_SUBSCRIBE:i.call(this,K);
            break;
            case OT.WebSocketMessageType.JSEP_OFFER:z.call(this,K);
            break;
            case OT.WebSocketMessageType.JSEP_ANSWER:E.call(this,K);
            break;
            case OT.WebSocketMessageType.JSEP_CANDIDATE:h.process(K);
            break;
            default:OT.debug("PeerConnection.processMessage: Received an unexpected message of type " + J + " from " + K.fromAddress + ": " + JSON.stringify(K))
        }
        return this
    };
    this.audioEnabled = function(J) {
        s = J;
        if(C) {
            if(C.audioTracks.length > 0) {
                C.audioTracks[0].enabled = s
            }
        }
    };
    this.videoEnabled = function(J) {
        j = J;
        if(C) {
            if(C.videoTracks.length > 0) {
                C.videoTracks[0].enabled = j
            }
        }
    };
    Object.defineProperty(this,"remoteStreams", {
        get:function() {
            return y
        }
    })
}
})(window);
(function(b) {
var a =  {};
OT.rtc.PeerConnections =  {
    add:function(k,g,j,e,c,h,f) {
        var i = k.id + "_" + j.id
        ,d=a[i];
        if( ! d) {
            d = a[i] =  {
                count:0
                ,pc:new OT.rtc.PeerConnection(k,g,j,e,c,h,f)
            }
        }
        d.count += 1;
        return d.pc
    }
    ,remove:function(f,e) {
        var c = f.id + "_" + e.id
        ,d=a[c];
        if(d) {
            d.count -= 1;
            if(d.count === 0) {
                d.pc.disconnect();
                delete a[c]
            }
        }
    }
}
})(window);
(function(a) {
OT.rtc.PublisherPeerConnection = function(i,g,h,d) {
    var b;
    var c = function() {
        this.trigger("connected",this)
    }
    ,f=function() {
        this.trigger("disconnected",this);
        this.destroy()
    }
    ,e=function(j) {
        this.trigger("error",null,j,this);
        this.destroy()
    };
    OT.eventing(this);
    this.destroy = function() {
        if(b) {
            OT.rtc.PeerConnections.remove(i,h)
        }
        b = null
    };
    this.processMessage = function(j,k) {
        b.processMessage(j,k)
    };
    this.publishAudio = function(j) {
        b.audioEnabled(j)
    };
    this.publishVideo = function(j) {
        b.videoEnabled(j)
    };
    b = OT.rtc.PeerConnections.add(i,g,h,OT._.bind(c,this),OT._.bind(f,this),null,null,OT._.bind(e,this));
    b.addLocalStream(d);
    Object.defineProperty(this,"remoteConnection", {
        value:i
    })
}
})(window);
(function(a) {
OT.rtc.SubscriberPeerConnection = function(t,o,q) {
    var r,j,s
    ,c=false;
    var d = function() {
        c = true;
        if(j) {
            this.trigger("connected",this)
        }
    }
    ,g=function() {
        c = false;
        this.trigger("disconnected",this);
        this.destroy()
    }
    ,b=function(i) {
        j = i;
        s = OT.$.createVideoElement(i,OT._.bind(m,this),OT._.bind(k,this),OT._.bind(h,this));
        this.trigger("remoteStreamAdded",j,s,this)
    }
    ,n=function(i) {
        j = null;
        this.trigger("remoteStreamRemoved",i,this)
    }
    ,m=function() {
        if(c) {
            this.trigger("connected",this)
        }
    }
    ,k=function(i) {
        this.trigger("error",OT.ExceptionCodes.P2P_CONNECTION_FAILED,i,this)
    }
    ,h=function(i) {
        var u = "There was an unexpected problem with the Video Stream: " + OT.$.videoElementErrorCodeToStr(i.target.error.code);
        this.trigger("error",null,u,this)
    }
    ,p=function(i) {
        c = false;
        this.trigger("error",null,i,this)
    };
    OT.eventing(this);
    this.destroy = function() {
        if(o && q) {
            o.sendJSEPMessage(q.connection,OT.WebSocketMessageType.JSEP_UNSUBSCRIBE, {
                streamId:q.id
            })
        }
        if(r) {
            OT.rtc.PeerConnections.remove(t,q)
        }
        j = null;
        c = false;
        r = null;
        if(s) {
            OT.$.removeElement(s)
        }
    };
    this.processMessage = function(i,u) {
        r.processMessage(i,u)
    };
    this.subscribeToAudio = function(i) {};
    this.subscribeToVideo = function(i) {};
    r = OT.rtc.PeerConnections.add(t,o,q,OT._.bind(d,this),OT._.bind(g,this),OT._.bind(b,this),OT._.bind(n,this),OT._.bind(p,this));
    if(r.remoteStreams.length > 0) {
        for(var e=0,f=r.remoteStreams.length;e<f;++e) {
            b.call(this,r.remoteStreams[e])
        }
    } else {
        o.sendJSEPMessage(t,OT.WebSocketMessageType.JSEP_SUBSCRIBE, {
            streamId:q.id
        })
    }
}
})(window);
(function(a) {
OT.Chrome = function(d) {
    var e = false
    ,c= {}
    ,b=function(f,g) {
        g.parent = this;
        g.appendTo(d.parent);
        c[f] = g;
        Object.defineProperty(this,f, {
            get:function() {
                return c[f]
            }
        })
    };
    if( ! d.parent) {
        return
    }
    OT.eventing(this);
    this.destroy = function() {
        this.hide();
        for(var f in c) {
            c[f].destroy()
        }
    };
    this.show = function() {
        e = true;
        for(var f in c) {
            c[f].show()
        }
    };
    this.hide = function() {
        e = false;
        for(var f in c) {
            c[f].hide()
        }
    };
    this.set = function(g,h) {
        if(typeof(g) === "string" && h) {
            b.call(this,g,h)
        } else {
            for(var f in g) {
                if(g.hasOwnProperty(f)) {
                    b.call(this,f,g[f])
                }
            }
        }
        return this
    }
}
})(window);
(function(a) {
if( ! OT.Chrome.Behaviour) {
    OT.Chrome.Behaviour =  {}
}
OT.Chrome.Behaviour.Widget = function(f,c) {
    var b = c ||  {}
    ,e
    ,d;f.setDisplayMode = function(h) {
        var g = h || "auto";
        if(e === g) {
            return
        }
        OT.$.removeClass(this.domElement,"OT_mode-" + e);
        OT.$.addClass(this.domElement,"OT_mode-" + g);
        d = e;
        e = g
    };
    f.show = function() {
        this.setDisplayMode(d);
        if(b.onShow) {
            b.onShow()
        }
        return this
    };
    f.hide = function() {
        this.setDisplayMode("off");
        if(b.onHide) {
            b.onHide()
        }
        return this
    };
    f.destroy = function() {
        if(b.onDestroy) {
            b.onDestroy(this.domElement)
        }
        if(this.domElement) {
            OT.$.removeElement(this.domElement)
        }
        return f
    };
    f.appendTo = function(g) {
        this.domElement = OT.$.createElement(b.nodeName || "div",b.htmlAttributes,b.htmlContent);
        if(b.onCreate) {
            b.onCreate(this.domElement)
        }
        f.setDisplayMode("on");
        g.appendChild(this.domElement);
        setTimeout(function() {
            f.setDisplayMode(b.mode)
        }
        ,2000);
        return f
    }
}
})(window);
(function(a) {
OT.Chrome.NamePanel = function(c) {
    var b = c.name;
    if( ! b || b.trim().length === "") {
        b = null;
        c.mode = "off"
    }
    var d;
    this.__defineGetter__("domElement",function() {
        return d
    });
    this.__defineSetter__("domElement",function(e) {
        d = e
    });
    OT.Chrome.Behaviour.Widget(this, {
        mode:c.mode
        ,nodeName:"h1"
        ,htmlContent:b
        ,htmlAttributes: {
            className:"OT_name"
        }
    });
    this.__defineSetter__("name",OT._.bind(function(e) {
        if( ! b) {
            this.setDisplayMode("auto")
        }
        b = e;
        d.innerHTML = b
    }
    ,this))
}
})(window);
(function(a) {
OT.Chrome.MuteButton = function(d) {
    var f
    ,c=d.muted || false;
    var g;
    this.__defineGetter__("domElement",function() {
        return g
    });
    this.__defineSetter__("domElement",function(i) {
        g = i
    });
    var e = function(i) {
        f = OT._.bind(h,this);
        i.addEventListener("click",f,false)
    }
    ,b=function(i) {
        f = null;
        i.removeEventListener("click",f,false)
    }
    ,h=function(i) {
        c =  ! c;
        if(c) {
            OT.$.addClass(g,"active");
            this.parent.trigger("muted",this)
        } else {
            OT.$.removeClass(g,"active");
            this.parent.trigger("unmuted",this)
        }
        return false
    };
    OT.Chrome.Behaviour.Widget(this, {
        mode:d.mode
        ,nodeName:"button"
        ,htmlContent:"Mute"
        ,htmlAttributes: {
            className:"OT_mute"
        }
        ,onCreate:OT._.bind(e,this)
        ,onDestroy:OT._.bind(b,this)
    })
}
})(window);
(function(a) {
OT.Chrome.MicVolume = function(d) {
    var f
    ,c=d.muted || false;
    var g;
    this.__defineGetter__("domElement",function() {
        return g
    });
    this.__defineSetter__("domElement",function(i) {
        g = i
    });
    var e = function(i) {
        f = OT._.bind(h,this);
        i.addEventListener("click",f,false)
    }
    ,b=function(i) {
        f = null;
        i.removeEventListener("click",f,false)
    }
    ,h=function(i) {
        c =  ! c;
        if(c) {
            OT.$.addClass(g,"active");
            this.parent.trigger("muted",this)
        } else {
            OT.$.removeClass(g,"active");
            this.parent.trigger("unmuted",this)
        }
        return false
    };
    OT.Chrome.Behaviour.Widget(this, {
        mode:d.mode
        ,nodeName:"button"
        ,htmlContent:"Mute"
        ,htmlAttributes: {
            className:"OT_mic-volume"
        }
        ,onCreate:OT._.bind(e,this)
        ,onDestroy:OT._.bind(b,this)
    })
}
})(window);
(function(a) {
OT.Chrome.SettingsPanelButton = function(c) {
    var e;
    var d = function(h) {
        e = OT._.bind(g,this);
        h.addEventListener("click",e,false)
    }
    ,b=function(h) {
        e = null;
        h.removeEventListener("click",e,false)
    }
    ,g=function(h) {
        this.parent.trigger("SettingsPanel:open",this);
        return false
    };
    var f;
    this.__defineGetter__("domElement",function() {
        return f
    });
    this.__defineSetter__("domElement",function(h) {
        f = h
    });
    OT.Chrome.Behaviour.Widget(this, {
        mode:c.mode
        ,nodeName:"button"
        ,htmlContent:"Settings"
        ,htmlAttributes: {
            className:"OT_settings-panel"
        }
        ,onCreate:OT._.bind(d,this)
        ,onDestroy:OT._.bind(b,this)
    })
}
})(window);
(function(a) {
OT.Chrome.SettingsPanel = function(e) {
    if( ! e.stream) {
        return
    }
    var d = e.stream;
    var f;
    this.__defineGetter__("domElement",function() {
        return f
    });
    this.__defineSetter__("domElement",function(h) {
        f = h
    });
    var c = function() {
        var j = d.videoTracks.length?d.videoTracks[0].label:"None"
        ,i=d.audioTracks.length?d.audioTracks[0].label:"None";
        f.innerHTML = "<dl> <dt>Cam</dt> <dd>" + j + "</dd> <dt>Mic</dt> <dd>" + i + "</dd> </dl>";
        var h = OT.$.createButton("Close", {
            className:"OT_close"
        }
        , {
            click:OT._.bind(b,this)
        });
        f.appendChild(h)
    }
    ,g=function() {
        c.call(this)
    }
    ,b=function() {
        this.parent.trigger("SettingsPanel:close",this);
        return false
    };
    OT.Chrome.Behaviour.Widget(this, {
        mode:e.mode
        ,nodeName:"section"
        ,htmlContent:"Settings"
        ,htmlAttributes: {
            className:"OT_settings-panel"
        }
        ,onCreate:OT._.bind(c,this)
        ,onShow:OT._.bind(g,this)
    })
}
})(window);
(function(a) {
OT.Chrome.OpenTokButton = function(b) {
    if( ! b ||  ! b.infoHref) {
        return false
    }
    var c;
    this.__defineGetter__("domElement",function() {
        return c
    });
    this.__defineSetter__("domElement",function(d) {
        c = d
    });
    OT.Chrome.Behaviour.Widget(this, {
        mode:b?b.mode:null
        ,nodeName:"a"
        ,htmlContent:"OpenTok"
        ,htmlAttributes: {
            className:"OT_opentok"
            ,title:"more info"
            ,href:b.infoHref
            ,target:"_blank"
        }
    });
    this.__defineSetter__("infoHref",function(d) {
        b.infoHref = d;
        c.setAttribute("href",d)
    })
}
})(window);
(function(b) {
OT.rtc.StylableComponent = function(f,d) {
    if( ! f.trigger) {
        throw new Error("OT.rtc.StylableComponent is dependent on the mixin OT.eventing. Ensure that this is included in the object before StylableComponent.")
    }
    var e = function(h,i,g) {
        if(g) {
            f.trigger("styleValueChanged",h,i,g)
        } else {
            f.trigger("styleValueChanged",h,i)
        }
    };
    var c = new a(d,e);
    f.getStyle = function(g) {
        return c.get(g)
    };
    f.setStyle = function(i,h,g) {
        if(typeof(i) !== "string") {
            c.setAll(i,g)
        } else {
            c.set(i,h)
        }
        return this
    }
};
var a = function(d,f) {
    var e = ["showMicButton","showSpeakerButton","showSettingsButton","showCameraToggleButton","nameDisplayMode","buttonDisplayMode","showSaveButton","showRecordButton","showRecordStopButton","showReRecordButton","showPauseButton","showPlayButton","showPlayStopButton","showStopButton","backgroundImageURI","showControlPanel","showRecordCounter","showPlayCounter","showControlBar","showPreviewTime"]
    ,i= {
        buttonDisplayMode:["auto","off","on"]
        ,nameDisplayMode:["auto","off","on"]
        ,showSettingsButton:[true,false]
        ,showMicButton:[true,false]
        ,showCameraToggleButton:[true,false]
        ,showSaveButton:[true,false]
        ,backgroundImageURI:null
        ,showControlBar:[true,false]
        ,showPlayCounter:[true,false]
        ,showRecordCounter:[true,false]
        ,showPreviewTime:[true,false]
    }
    ,c= {}
    ,g=function(j,k) {
        return j === "backgroundImageURI" || (i.hasOwnProperty(j) && OT._.include(i[j],k))
    }
    ,h=function(j) {
        switch(j) {
            case"true":return true;
            case"false":return false;
            default:return j
        }
    };
    this.getAll = function() {
        var k = OT._.clone(c);
        for(var j in k) {
            if(e.indexOf(j) < 0) {
                delete k[j]
            }
        }
        return k
    };
    this.get = function(j) {
        if(j) {
            return c[j]
        }
        return this.getAll()
    };
    this.setAll = function(n,j) {
        var k
        ,o;for(var m in n) {
            o = h(n[m]);
            if(g(m,o)) {
                k = c[m];
                if(o !== k) {
                    c[m] = o;
                    if( ! j) {
                        f(m,o,k)
                    }
                }
            } else {
                OT.warn("Style.setAll::Invalid style property passed " + m + " : " + o)
            }
        }
        return this
    };
    this.set = function(k,m) {
        OT.debug("Publisher.setStyle: " + k.toString());
        var n = h(m)
        ,j;if( ! g(k,n)) {
            OT.warn("Style.set::Invalid style property passed " + k + " : " + n);
            return this
        }
        j = c[k];
        if(n !== j) {
            c[k] = n;
            f(k,m,j)
        }
        return this
    };
    if(d) {
        this.setAll(d,true)
    }
}
})(window);
(function(a) {
OT.rtc.Publisher = function() {
    if( ! OT.checkSystemRequirements()) {
        OT.upgradeSystemRequirements();
        return
    }
    var h = OT.rtc.Publisher.nextId(),y,k,t,r,p,C
    ,n= {}
    ,e=false,u,g
    ,d=false,D
    ,v=new OT.Analytics();
    OT.eventing(this);
    OT.rtc.StylableComponent(this, {
        showMicButton:true
        ,showSettingsButton:true
        ,showCameraToggleButton:true
        ,nameDisplayMode:"auto"
        ,buttonDisplayMode:"auto"
        ,backgroundImageURI:null
    });
    var f = function(G,E,F,H) {
        v.logEvent({
            action:G
            ,variation:E
            ,payload_type:F
            ,payload:H
            ,session_id:C?C.sessionId:null
            ,connection_id:C && C.connected?C.connection.connectionId:null
            ,partner_id:C?C.apiKey:OT.APIKEY
            ,widget_id:h
        })
    }
    ,b=function() {
        OT.debug("OT.rtc.Publisher.onLoaded");
        f("publish","Success","streamType","WebRTC");
        setInterval(this.recordQOS,30000);
        OT.$.removeClass(k,"loading");
        s.call(this);
        e = true;
        this.trigger("loaded",this)
    }
    ,c=function(E) {
        f("publish","Failure","reason","Publisher PeerConnection Error: " + E);
        OT.handleJsException("Publisher PeerConnection Error: " + E,OT.ExceptionCodes.P2P_CONNECTION_FAILED, {
            session:C
            ,target:this
        })
    }
    ,A=function(E) {
        OT.debug("OT.rtc.Publisher.onStreamAvailable");
        this.dispatchEvent(new OT.Event(OT.Event.names.ACCESS_ALLOWED));
        p = E;
        t = OT.$.createVideoElement(p,OT._.bind(b,this),OT._.bind(c,this),OT._.bind(m,this));
        k.videoContainer.appendChild(t);
        OT.DOMComponentCleanup.add(this,t)
    }
    ,x=function(E) {
        switch(E.code) {
            case 1:OT.error("OT.rtc.Publisher.onStreamAvailableError Permission Denied");
            f("publish","Failure","reason","Publisher Access Denied: " + reason);
            this.dispatchEvent(new OT.Event(OT.Event.names.ACCESS_DENIED));
            break;
            default:OT.error("OT.rtc.Publisher.onStreamAvailableError Unknown Error");
            f("publish","Failure","reason","Publisher failed to access camera/mic: " + reason);
            OT.handleJsException("Publisher failed to access camera/mic: " + E.code,2000, {
                session:C
                ,target:this
            })
        }
    }
    ,j=function() {
        this.dispatchEvent(new OT.Event(OT.Event.names.ACCESS_DIALOG_OPENED))
    }
    ,q=function() {
        this.dispatchEvent(new OT.Event(OT.Event.names.ACCESS_DIALOG_CLOSED))
    }
    ,m=function(E) {
        OT.error("OT.rtc.Publisher.onVideoError");
        f("stream",null,"reason","Publisher while playing stream: " + E.code);
        OT.handleJsException("Publisher error playing stream: " + E.code,2000, {
            session:C
            ,target:this
        })
    }
    ,i=function() {
        OT.debug("OT.rtc.Subscriber has been disconnected from the Publisher's PeerConnection")
    }
    ,w=function(F,G,E) {
        f("publish","Failure","reason","Publisher PeerConnection with connection " + E.remoteConnection.id + " failed: " + G);
        OT.handleJsException("Publisher PeerConnection Error: " + G,2000, {
            session:C
            ,target:this
        })
    }
    ,z=function(F) {
        var E = n[F.id];
        if( ! E) {
            E = n[F.id] = new OT.rtc.PublisherPeerConnection(F,C,r,p);
            E.on({
                disconnected:OT._.bind(i,this)
                ,error:OT._.bind(w,this)
            })
        }
        return E
    }
    ,B=function(F) {
        if(F === false) {
            return"off"
        }
        var E = this.getStyle("buttonDisplayMode");
        if(E === false) {
            return"on"
        }
        return E
    }
    ,o=function(F,G,E) {
        if( ! D) {
            return
        }
        switch(F) {
            case"nameDisplayMode":D.name.setDisplayMode(G);
            break;
            case"buttonDisplayMode":case"showMicButton":case"showSettingsButton":
        }
    }
    ,s=function() {
        D = new OT.Chrome({
            parent:k
        }).set({
            name:new OT.Chrome.NamePanel({
                name:u.name
                ,mode:this.getStyle("nameDisplayMode")
            })
            ,opentokButton:new OT.Chrome.OpenTokButton({
                infoHref:OT.$.moreInfoLink(C)
            })
        }).on({
            muted:function() {}
            ,unmuted:function() {}
        })
    };
    this.publish = function(F,E) {
        OT.debug("OT.rtc.Publisher: publish");
        if(y) {
            this.unpublish()
        }
        y = F || uuid();
        u = OT._.defaults(E ||  {}
        , {
            publishAudio:true
            ,publishVideo:true
            ,mirror:true
        });
        if(u.style) {
            this.setStyle(u.style,null,true)
        }
        u.classNames = "OT_root OT_publisher OT_loading";
        OT.onLoad(OT._.bind(function() {
            k = OT.$.getOrCreateWidgetContainerById(y,u);
            OT.$.getUserMedia({
                audio:u.publishAudio
                ,video:u.publishVideo
            }
            ,OT._.bind(A,this),OT._.bind(x,this),OT._.bind(j,this),OT._.bind(q,this))
        }
        ,this));
        return this
    };
    this.publishAudio = function(E) {
        u.publishAudio = E;
        if(C) {
            C.sendMessage(OT.WebSocketMessage.modifyStream(r.streamId,"hasAudio",E))
        }
        for(var F in n) {
            if(n.hasOwnProperty(F)) {
                n[F].publishAudio(E)
            }
        }
    };
    this.publishVideo = function(E) {
        u.publishVideo = E;
        if(C) {
            C.sendMessage(OT.WebSocketMessage.modifyStream(r.streamId,"hasVideo",E))
        }
        for(var F in n) {
            if(n.hasOwnProperty(F)) {
                n[F].publishVideo(E)
            }
        }
    };
    this.recordQOS = function() {
        if(d) {
            v.logQOS({
                widget_type:"Publisher"
                ,stream_type:"WebRTC"
                ,sessionId:C?C.sessionId:null
                ,connectionId:C && C.connected?C.connection.connectionId:null
                ,partnerId:C?C.apiKey:OT.APIKEY
                ,streamId:r?r.id:null
                ,widgetId:h
                ,version:"92"
                ,media_server_name:C.sessionInfo.mediaServer
                ,duration:new Date().getTime() - g.getTime()
            })
        }
    };
    this.destroy = function() {
        OT.DOMComponentCleanup.remove(this);
        if(D) {
            D.destroy();
            D = null
        }
        this.disconnect();
        if(p) {
            p.stop();
            p = null
        }
        if(k) {
            OT.$.removeElement(k);
            k = null;
            t = null
        }
        if(this.session) {
            this._.unpublishFromSession(this.session)
        }
        d = false;
        y = null;
        r = null;
        e = false;
        C = null;
        _properties = null;
        this.trigger("destroyed",this);
        return this
    };
    this.disconnect = function() {
        for(var E in n) {
            if(n.hasOwnProperty(E)) {
                n[E].destroy();
                delete n[E]
            }
        }
    };
    this.cleanupSubscriber = function(F) {
        var E = n[F];
        if(E) {
            E.destroy();
            delete n[F]
        }
    };
    this.processMessage = function(F,H,G) {
        OT.debug("OT.rtc.Publisher.processMessage: Received " + F + " from " + H.id);
        OT.debug(G);
        switch(F) {
            case OT.WebSocketMessageType.JSEP_UNSUBSCRIBE:this.cleanupSubscriber(H.id);
            break;
            default:var E = z.call(this,H);
            E.processMessage(F,G)
        }
    };
    this.getImgData = function() {
        if( ! e) {
            OT.error("OT.rtc.Publisher.getImgData: Cannot getImgData before the Publisher is publishing.");
            return null
        }
        return OT.$.imgDataFromVideo(t)
    };
    this._ =  {
        publishToSession:OT._.bind(function(F) {
            this.session = F;
            if(D) {
                D.opentokButton.infoHref = OT.$.moreInfoLink(C)
            }
            var E = function() {
                F.sendMessage(OT.WebSocketMessage.createStream(this.guid,u && u.name?u.name:"",OT.VideoOrientation.ROTATED_NORMAL,640,480,u.publishAudio,u.publishVideo))
            };
            if(e) {
                E.call(this)
            } else {
                this.on("loaded",OT._.bind(E,this))
            }
            f("publish","Attempt","streamType","WebRTC");
            return this
        }
        ,this)
        ,unpublishFromSession:OT._.bind(function(E) {
            if( ! this.session || E.id !== this.session.id) {
                OT.warn("The publisher " + this.guid + " is trying to unpublish from a session " + E.id + " it is not attached to");
                return this
            }
            if(E.connected && this.stream) {
                E.sendMessage(OT.WebSocketMessage.destroyStream(this.stream.id))
            }
            this.session = null;
            return this
        }
        ,this)
        ,publishedToSessionHandler:OT._.bind(function() {
            g = new Date();
            d = true
        }
        ,this)
    };
    this.detectDevices = function() {
        OT.warn("Fixme: Haven't implemented detectDevices")
    };
    this.detectMicActivity = function() {
        OT.warn("Fixme: Haven't implemented detectMicActivity")
    };
    this.getEchoCancellationMode = function() {
        OT.warn("Fixme: Haven't implemented getEchoCancellationMode");
        return"fullDuplex"
    };
    this.setMicrophoneGain = function(E) {
        OT.warn("Fixme: Haven't implemented setMicrophoneGain")
    };
    this.getMicrophoneGain = function() {
        OT.warn("Fixme: Haven't implemented getMicrophoneGain");
        return 0.5
    };
    this.setCamera = function(E) {
        OT.warn("Fixme: Haven't implemented setCamera")
    };
    this.setMicrophone = function(E) {
        OT.warn("Fixme: Haven't implemented setMicrophone")
    };
    this.on("styleValueChanged",OT._.bind(o,this));
    this.__defineGetter__("id",function() {
        return y
    });
    this.__defineGetter__("guid",function() {
        return h
    });
    this.__defineGetter__("stream",function() {
        return r
    });
    this.__defineSetter__("stream",function(E) {
        r = E
    });
    this.__defineGetter__("streamId",function() {
        if( ! r) {
            return null
        }
        return r.id
    });
    this.__defineGetter__("targetElement",function() {
        return t
    });
    this.__defineGetter__("domId",function() {
        return y
    });
    this.__defineGetter__("session",function() {
        return C
    });
    this.__defineSetter__("session",function(E) {
        C = E
    });
    this.__defineGetter__("isWebRTC",function() {
        return true
    })
};
OT.rtc.Publisher.nextId = uuid
})(window);
(function(a) {
OT.rtc.Subscriber = function(i,f) {
    var c = uuid()
    ,w=i || c,j,p,z,n,v,h
    ,y=f.session
    ,d=false,u,e
    ,q=OT._.clone(f)
    ,r=new OT.Analytics();
    if( ! y) {
        OT.handleJsException("Subscriber must be passed a session option",2000, {
            session:y
            ,target:this
        });
        return
    }
    OT.eventing(this);
    OT.rtc.StylableComponent(this, {
        nameDisplayMode:"auto"
        ,buttonDisplayMode:"auto"
        ,backgroundImageURI:null
    });
    var b = function() {
        if(d) {
            return
        }
        OT.debug("OT.rtc.Subscriber.onLoaded");
        d = true;
        u = new Date();
        e = setInterval(this.recordQOS,30000);
        OT.$.removeClass(j,"loading");
        o.call(this);
        this.trigger("loaded",this);
        r.logEvent({
            action:"subscribe"
            ,variation:"Success"
            ,payload_type:"streamId"
            ,payload:n.id
            ,stream_id:n.id
            ,session_id:y.sessionId
            ,connection_id:y.connection.connectionId
            ,partner_id:y.sessionInfo.partnerId
            ,widget_id:c
        })
    }
    ,t=function() {
        OT.debug("OT.rtc.Subscriber has been disconnected from the Publisher's PeerConnection");
        d = false
    }
    ,s=function(A,B) {
        this.disconnect();
        r.logEvent({
            action:"subscribe"
            ,variation:"Failure"
            ,payload_type:"reason"
            ,payload:"Subscriber PeerConnection Error: " + B
            ,stream_id:n.id
            ,session_id:y.sessionId
            ,connection_id:y.connection.connectionId
            ,partner_id:y.sessionInfo.partnerId
            ,widget_id:c
        });
        OT.handleJsException("Subscriber PeerConnection Error: " + B,OT.ExceptionCodes.P2P_CONNECTION_FAILED, {
            session:y
            ,target:this
        });
        m.call(this,B)
    }
    ,x=function(B,A) {
        OT.debug("OT.rtc.Subscriber.onRemoteStreamAdded");
        v = B;
        p = A;
        j.videoContainer.appendChild(p);
        OT.DOMComponentCleanup.add(this,p);
        this.streamOrientationDidChange(n.orientation.width,n.orientation.height,n.orientation.videoOrientation);
        this.trigger("streamAdded",this)
    }
    ,g=function(A) {
        OT.debug("OT.rtc.Subscriber.onStreamRemoved");
        v = null;
        if(p) {
            OT.$.removeElement(p);
            p = null
        }
        this.trigger("streamRemoved",this)
    }
    ,k=function(B,C,A) {
        if( ! z) {
            return
        }
        switch(B) {
            case"nameDisplayMode":z.name.setDisplayMode(C);
            break;
            case"buttonDisplayMode":
        }
    }
    ,o=function() {
        z = new OT.Chrome({
            parent:j
        }).set({
            name:new OT.Chrome.NamePanel({
                name:q.name
                ,mode:this.getStyle("nameDisplayMode")
            })
            ,opentokButton:new OT.Chrome.OpenTokButton({
                infoHref:OT.$.moreInfoLink(y)
            })
        }).on({
            muted:function() {}
            ,unmuted:function() {}
        })
    }
    ,m=function(A) {
        if(j) {
            j.innerHTML = "<p>" + A + "<p>"
        }
        OT.$.addClass(j,"OT_subscriber_error")
    };
    this.recordQOS = function() {
        if(d) {
            r.logQOS({
                widget_type:"Subscriber"
                ,stream_type:"WebRTC"
                ,session_id:y.sessionId
                ,connectionId:y.connection.connectionId
                ,media_server_name:y.sessionInfo.mediaServer
                ,partner_id:y.apiKey
                ,stream_id:n.id
                ,widget_id:c
                ,version:"92"
                ,duration:new Date().getTime() - u.getTime()
            })
        }
    };
    this.subscribe = function(A) {
        OT.debug("OT.rtc.Subscriber: subscribe to " + A.id);
        if(d) {
            OT.error("OT.rtc.Subscriber.Subscribe: Cannot subscribe, already subscribing.");
            return false
        }
        if( ! A) {
            OT.error("OT.rtc.Subscriber: No stream parameter.");
            return false
        }
        if(n) {
            OT.error("OT.rtc.Subscriber: Already subscribed");
            return false
        }
        n = A;
        w = i || uuid();
        q.name = n.name;
        q.classNames = "OT_root OT_subscriber OT_loading";
        if(q.style) {
            this.setStyle(q.style,null,true)
        }
        j = OT.$.getOrCreateWidgetContainerById(w,q);
        h = new OT.rtc.SubscriberPeerConnection(n.connection,y,n);
        h.on({
            connected:OT._.bind(b,this)
            ,disconnected:OT._.bind(t,this)
            ,error:OT._.bind(s,this)
            ,remoteStreamAdded:OT._.bind(x,this)
            ,remoteStreamRemoved:OT._.bind(g,this)
        });
        r.logEvent({
            action:"subscribe"
            ,variation:"Attempt"
            ,payload_type:"streamId"
            ,payload:n.id
            ,stream_id:n.id
            ,session_id:y.sessionId
            ,connection_id:y.connection.connectionId
            ,partner_id:y.sessionInfo.partnerId
            ,widget_id:c
        });
        return this
    };
    this.destroy = function() {
        OT.DOMComponentCleanup.remove(this);
        if(z) {
            z.destroy();
            z = null
        }
        w = null;
        n = null;
        this.disconnect();
        if(j) {
            OT.$.removeElement(j);
            j = null;
            p = null
        }
        clearInterval(e);
        y = null;
        q = null;
        this.trigger("destroyed",this);
        return this
    };
    this.disconnect = function() {
        if(h) {
            h.destroy();
            h = null
        }
        d = false
    };
    this.processMessage = function(A,C,B) {
        OT.debug("OT.rtc.Subscriber.processMessage: Received " + A + " message from " + C.id);
        OT.debug(B);
        if(h) {
            h.processMessage(A,B)
        }
    };
    this.getImgData = function() {
        if( ! this.subscribing) {
            OT.error("OT.rtc.Subscriber.getImgData: Cannot getImgData before the Subscriber is subscribing.");
            return null
        }
        return OT.$.imgDataFromVideo(p)
    };
    this.setAudioVolume = function(A) {
        OT.warn("Fixme: Haven't implemented setAudioVolume")
    };
    this.getAudioVolume = function() {
        OT.warn("Fixme: Haven't implemented getAudioVolume");
        return 0.5
    };
    this.subscribeToAudio = function(A) {
        for(var B in _peerConnections) {
            if(_peerConnections.hasOwnProperty(B)) {
                _peerConnections[B].publishAudio(A)
            }
        }
    };
    this.subscribeToVideo = function(A) {
        OT.warn("Fixme: Haven't implemented subscribeToVideo")
    };
    this.streamOrientationDidChange = function(C,A,B) {
        if(B == OT.VideoOrientation.ROTATED_NORMAL) {
            p.style.webkitTransform = "rotate(0deg)"
        } else {
            if(B == OT.VideoOrientation.ROTATED_LEFT) {
                p.style.webkitTransform = "rotate(90deg)"
            } else {
                if(B == OT.VideoOrientation.ROTATED_RIGHT) {
                    p.style.webkitTransform = "rotate(-90deg)"
                } else {
                    if(B == OT.VideoOrientation.ROTATED_UPSIDE_DOWN) {
                        p.style.webkitTransform = "rotate(180deg)"
                    } else {
                        p.style.webkitTransform = "rotate(0deg)"
                    }
                }
            }
        }
    };
    this.on("styleValueChanged",OT._.bind(k,this));
    this.__defineGetter__("id",function() {
        return w
    });
    this.__defineGetter__("stream",function() {
        return n
    });
    this.__defineGetter__("targetElement",function() {
        return p
    });
    this.__defineGetter__("subscribing",function() {
        return d
    });
    this.__defineGetter__("isWebRTC",function() {
        return true
    })
}
})(window);
(function(a) {
OT.TokenPermissions = function(e) {
    var c = null;
    this.sessionId = null;
    this.partnerId = null;
    this.connectionData = "";
    this.validToken = true;
    this.capabilities =  {
        forceUnpublish:0
        ,playback:0
        ,publish:0
        ,publishH264:0
        ,record:0
        ,subscribe:0
    };
    if(e.documentElement && e.documentElement.firstElementChild !== null) {
        c = e.documentElement.firstElementChild
    }
    OT.log("ValidateTokenResponse:");
    OT.log(e);
    if(c !== null && c.localName.toLowerCase() == "token") {
        var d = c.firstElementChild;
        do {
            switch(d.localName) {
                case"session_id":this.sessionId = d.textContent;
                break;
                case"partner_id":this.partnerId = d.textContent;
                break;
                case"permissions":var b = d.firstElementChild;
                do {
                    switch(b.tagName) {
                        case"forceunpublish":this.capabilities.forceUnpublish = 1;
                        break;
                        case"forcedisconnect":this.capabilities.forceDisconnect = 1;
                        break;
                        case"playback":this.capabilities.playback = 1;
                        break;
                        case"publish":this.capabilities.publish = 1;
                        break;
                        case"publishH264":this.capabilities.publishH264 = 1;
                        break;
                        case"record":this.capabilities.record = 1;
                        break;
                        case"subscribe":this.capabilities.subscribe = 1;
                        break
                    }
                }
                while(b = b.nextElementSibling);
                OT.debug("Capabilities:" + JSON.stringify(this.capabilities));
                break;
                case"connection_data":this.connectionData = d.textContent;
                OT.log("ConnectionData: " + this.connectionData);
                break;
                case"invalid":OT.error("Token Invalid " + d.firstChild.textContent);
                this.validToken = false;
                break;
                default:break
            }
        }
        while(d = d.nextElementSibling)
    } else {
        this.validToken = false
    }
}
})(window);
(function(a) {
var b =  {};
b["404"] = OT.ExceptionCodes.INVALID_SESSION_ID;
b["403"] = OT.ExceptionCodes.AUTHENTICATION_ERROR;
OT.SessionInfo = function(h) {
    var c = null;
    this.sessionId = null;
    this.partnerId = null;
    this.sessionStatus = null;
    this.p2pEnabled = false;
    this.mediaServer = null;
    this.p2pServer = null;
    this.messagingServer = null;
    this.validSession = true;
    OT.log("SessionInfo Response:");
    OT.log(h);
    if(h && h.documentElement && h.documentElement.firstElementChild !== null) {
        c = h.documentElement.firstElementChild
    }
    if(c !== null && c.localName.toLowerCase() === "session") {
        var d = c.firstElementChild;
        do {
            switch(d.localName) {
                case"session_id":this.sessionId = d.textContent;
                break;
                case"partner_id":this.partnerId = d.textContent;
                break;
                case"session_status":this.sessionStatus = d.textContent;
                break;
                case"p2p_server_url":this.p2pServer = d.textContent;
                break;
                case"media_server_hostname":this.mediaServer = d.textContent;
                break;
                case"messaging_server_url":this.messagingServer = d.textContent;
                break;
                case"properties":var g = d.firstElementChild;
                if(g != null) {
                    do {
                        switch(g.localName) {
                            case"p2p":if(g.firstElementChild != null) {
                                this.p2pEnabled = (g.firstElementChild.textContent == "enabled")
                            }
                            break;
                            default:break
                        }
                    }
                    while(g = g.nextElementSibling)
                }
                break;
                case"error":var f = d.attributes.getNamedItem("code").nodeValue
                ,e=d.firstElementChild.attributes.getNamedItem("message").nodeValue;
                OT.error("SessionInfo Error " + f + ": " + e);
                OT.handleJsException("SessionInfo Error " + f + ": " + e,b[f], {
                    sessionId:this.sessionId
                });
                break;
                default:break
            }
        }
        while(d = d.nextElementSibling)
    } else {
        this.validSession = false;
        this.errorMessage = "";
        if(c && c.localName.toLowerCase() === "error" && c.firstElementChild) {
            this.errorMessage = c.firstElementChild.nodeName + " " + c.firstElementChild.getAttribute("message")
        }
    }
}
})(window);
(function(c) {
var a = []
,b=false;
OT.Analytics = function() {
    var o = OT.BUILD_PROPERTIES.loggingURL + "/logging/ClientEvent"
    ,i=OT.BUILD_PROPERTIES.loggingURL + "/logging/ClientQos"
    ,k="opentok-logging-frame"
    ,f= {}
    ,h= {
        payloadType:"payload_type"
        ,streamId:"stream_id"
        ,sessionId:"session_id"
        ,connectionId:"connection_id"
        ,widgetType:"widget_type"
        ,widgetId:"widget_id"
    }
    ,p=swfobject?swfobject.getFlashPlayerVersion():null
    ,g=p?[p.major,p.minor,p.release].join("."):"none"
    ,j=function(u,r) {
        var t = document.getElementById("opentok_analytics_logging");
        if(t) {
            OT.$.removeElement(t)
        }
        t = OT.$.createElement("form", {
            id:"opentok_analytics_logging"
            ,action:r?i:o
            ,method:"post"
            ,target:k
            ,style:"display:none;"
        });
        for(var s in u) {
            if(u.hasOwnProperty(s)) {
                e(t,s,u[s])
            }
        }
        document.body.appendChild(t);
        return t
    }
    ,m=function(u,t,v) {
        if( ! v) {
            return false
        }
        var r = [v,t,u].join("_")
        ,s=100;
        if(s === null || s === undefined) {
            return false
        }
        return(f[r] || 0) <= s
    }
    ,e=function(t,s,u) {
        var r = document.createElement("textarea");
        r.setAttribute("name",s);
        r.value = u;
        r.style.display = "none";
        t.appendChild(r)
    }
    ,q=function(w,v,t) {
        if( ! t) {
            t =  {}
        }
        var r = false
        ,u=function() {
            if(r) {
                return
            }
            r = true;
            if(t.onSubmit && v) {
                if(v.addEventListener) {
                    v.addEventListener("submit",t.onSubmit(),false)
                } else {
                    if(element.attachEvent) {
                        v.attachEvent("onsubmit",t.onSubmit())
                    }
                }
            }
            v.submit();
            setTimeout(function() {
                var x = document.getElementById(w);
                if(x) {
                    x.parentNode.removeChild(x)
                }
                if(t.removeFormOnComplete === true && v.parentNode) {
                    v.parentNode.removeChild(v)
                }
                if(t.onComplete) {
                    t.onComplete()
                }
            }
            ,1000)
        };
        v.setAttribute("target",w);
        if( ! document.getElementById(w)) {
            var s = OT.$.createElement("iframe", {
                id:w
                ,name:w
                ,style:"display:none;width:0;height:0;"
            });
            s.onload = u;
            document.body.appendChild(s);
            if(s.attachEvent) {
                s.attachEvent("onload",u)
            }
        } else {
            u()
        }
    }
    ,n=function() {
        if( ! b && a.length > 0) {
            b = true;
            var s = a[0];
            if(s) {
                var r = j(s.data,s.isQos);
                q(k,r, {
                    removeFormOnComplete:true
                    ,onComplete:function() {
                        s.onComplete();
                        setTimeout(function() {
                            a.shift();
                            b = false;
                            n()
                        }
                        ,50)
                    }
                })
            }
        }
    }
    ,d=function(s,t,r) {
        a.push({
            data:s
            ,onComplete:t
            ,isQos:r
        });
        n()
    };
    this.logError = function(w,u,v,t,s) {
        if( ! s) {
            s =  {}
        }
        var y = s.partnerId;
        if(OT.Config.get("exceptionLogging","enabled",y) !== true) {
            return
        }
        if(m(w,u,y)) {
            return
        }
        var r = [y,u,w].join("_")
        ,x=this.escapePayload(OT._.extend(t ||  {}
        , {
            message:x
            ,userAgent:navigator.userAgent
            ,flashVersion:g
        }));
        f[r] = typeof(f[r]) !== "undefined"?f[r] + 1:1;
        return this.logEvent(OT._.extend(s, {
            action:u + "." + w
            ,payloadType:x[0]
            ,payload:x[1]
        }))
    };
    this.logEvent = function(r) {
        var v = r.partnerId;
        if( ! r) {
            r =  {}
        }
        var t = OT._.extend({
            variation:""
            ,guid:r.connectionId
            ,widget_id:""
            ,session_id:""
            ,connection_id:""
            ,stream_id:""
            ,partner_id:v
            ,source:c.location.href
            ,section:""
            ,build:""
        }
        ,r)
        ,u=function() {};
        for(var s in h) {
            if(h.hasOwnProperty(s) && t[s]) {
                t[h[s]] = t[s];
                delete t[s]
            }
        }
        d(t,u,false)
    };
    this.logQOS = function(r) {
        var v = r.partnerId;
        if( ! r) {
            r =  {}
        }
        var t = OT._.extend({
            guid:r.connectionId
            ,widget_id:""
            ,session_id:""
            ,connection_id:""
            ,stream_id:""
            ,partner_id:v
            ,source:c.location.href
            ,build:""
            ,duration:0
        }
        ,r)
        ,u=function() {};
        for(var s in h) {
            if(h.hasOwnProperty(s) && t[s]) {
                t[h[s]] = t[s];
                delete t[s]
            }
        }
        d(t,u,true)
    };
    this.escapePayload = function(u) {
        var t = []
        ,r=[];
        for(var s in u) {
            if(u.hasOwnProperty(s) && u[s] !== null && u[s] !== undefined) {
                t.push(u[s]?u[s].toString().replace("|","\\|"):"");
                r.push(s.toString().replace("|","\\|"))
            }
        }
        return[r.join("|"),t.join("|")]
    }
}
})(window);
(function(a) {
OT.Session = function(G) {
    if( ! OT.checkSystemRequirements()) {
        OT.upgradeSystemRequirements();
        return
    }
    var e
    ,g=false
    ,E=false,m
    ,z= {}
    ,M= {}
    ,T= {}
    ,O= {}
    ,L,n
    ,r=G
    ,R=false,f
    ,d= {}
    ,x=uuid()
    ,V= {}
    ,p=new OT.Analytics();
    OT.eventing(this);
    function u(X) {
        for(var Y in M) {
            var W = M[Y];
            if(X === W.streamId) {
                return W
            }
        }
        return null
    }
    function A(W) {
        if( ! W.connection ||  ! z[W.connection.connectionId]) {
            OT.warn("Received a stream for a connection that doesn't exist");
            OT.debug(W);
            return false
        }
        return true
    }
    function q(W) {
        return O[W]
    }
    function S(W) {
        W.forEach(J)
    }
    function J(W) {
        O[W.id] = W
    }
    function k(W) {
        delete O[W]
    }
    function o(Z,X,Y) {
        var aa = q(Z)
        ,W=aa[X];
        aa.update(X,Y);
        return W
    }
    var w = function(W) {
        g = true;
        E = false;
        m = W.connectionId;
        d = W.permissions;
        if(OT.$.supportsWebRTC()) {
            d.push("supportsWebRTC")
        }
        W.connections.forEach(function(X) {
            z[X.connectionId] = X
        });
        W.streams = OT._.filter(W.streams,function(X) {
            return A(X)
        });
        S(W.streams);
        this.trigger("sessionConnected",W)
    }
    ,c=function(W) {
        g = false;
        E = false;
        console.error(W.reason);
        this.trigger("sessionConnectFailed",W.reason);
        switch(W.code) {
            case 409:TB.handleJsException("TB.SessionConnectionFailed :: The P2P session already has two participants.",OT.ExceptionCodes.CONNECT_REJECTED, {
                session:this
            });
            break;
            case 410:TB.handleJsException("TB.SessionConnectionFailed :: The session already has four participants.",OT.ExceptionCodes.CONNECT_REJECTED, {
                session:this
            });
            break;
            default:TB.handleJsException("TB.SessionConnectionFailed :: The session failed to connect.",OT.ExceptionCodes.CONNECT_FAILED, {
                session:this
            });
            break
        }
    }
    ,B=function(X,W) {
        TB.handleJsException(X,W, {
            session:this
        })
    }
    ,U=function(Y) {
        var X = new OT.SessionDisconnectEvent("sessionDisconnected",Y.reason);
        F.call(this);
        C.call(this);
        var W = function() {
            if( ! X.isDefaultPrevented()) {
                h.call(this)
            }
        };
        this.dispatchEvent(X,OT._.bind(W,this))
    }
    ,K=function(W) {
        z[W.connection.connectionId] = W.connection;
        W.connections = [W.connection];
        delete W.connection;
        this.trigger("connectionCreated",W)
    }
    ,D=function(X) {
        if(m !== X.connection.connectionId) {
            delete z[X.connection.connectionId]
        }
        for(var W in M) {
            M[W].cleanupSubscriber(X.connection.connectionId)
        }
        X.connections = [X.connection];
        delete X.connection;
        this.trigger("connectionDestroyed",X)
    }
    ,v=function(W) {
        W.streams = OT._.filter(W.streams,A);
        OT.debug(W.streams);
        if(W.streams.length > 0) {
            S(W.streams);
            W.streams.forEach(function(Y) {
                var X = u(Y.id);
                if(X) {
                    X._.publishedToSessionHandler()
                }
            });
            this.trigger("streamCreated",W)
        }
    }
    ,s=function(Y) {
        OT.debug(Y);
        var aa =  {
            orientation:"videoDimensions"
            ,hasAudio:"hasAudio"
            ,hasVideo:"hasVideo"
        };
        var ac = Y.key.split("/")
        ,ad=q(Y.streamId),ae,ab,Z
        ,X=Y.value
        ,W;ac = ac.length > 0?ac[ac.length - 1]:null;
        if( ! ac ||  ! aa[ac]) {
            OT.warn("Unknown stream property was modified.");
            return
        }
        ab = aa[ac];
        W = o(Y.streamId,ab,Y.value);
        if(ac === "orientation") {
            ae = T[Y.streamId];
            if(ae) {
                ae.streamOrientationDidChange(Y.value.width,Y.value.height,Y.value.videoOrientation)
            }
            X =  {
                width:X.width
                ,height:X.height
            }
        }
        Z =  {
            type:"streamPropertyChanged"
            ,changedProperty:ab
            ,stream:ad
            ,newValue:X
            ,oldValue:W
        };
        this.trigger("streamPropertyChanged",Z)
    }
    ,b=function(Y) {
        if(Y.streams.length <= 0) {
            return
        }
        Y.streams = OT._.filter(Y.streams,function(Z) {
            return A(Z)
        });
        var X = new OT.StreamEvent("streamDestroyed",Y.streams);
        var W = function() {
            var Z =  ! X.isDefaultPrevented();
            Y.streams.forEach(function(ad) {
                var ab = u(ad.id);
                if(ab) {
                    ab.disconnect();
                    if(Z) {
                        t(ab)
                    }
                    delete M[ab.guid]
                }
                for(var ac in T) {
                    if(ac === ad.id) {
                        var aa = T[ac];
                        aa.disconnect();
                        if(Z) {
                            this.unsubscribe(aa)
                        }
                        delete T[ac]
                    }
                }
                k(ad.id)
            }
            ,this)
        };
        this.dispatchEvent(X,OT._.bind(W,this))
    }
    ,i=function(X) {
        console.log("jsepMessageHandler: " + JSON.stringify(X));
        if( ! z[X.fromAddress]) {
            OT.warn("OT.Session.onMessage: Received peerConnectionData from an unknown connection.");
            return
        }
        if(X.hasOwnProperty("streamId")) {
            var W = null;
            if(X.type == OT.WebSocketMessageType.JSEP_SUBSCRIBE) {
                W = u(X.streamId,true)
            } else {
                W = u(X.streamId,true) || T[X.streamId]
            }
            if( ! W) {
                OT.warn("OT.Session.onMessage: Received peerConnectionData for an unknown publisher.");
                return
            }
            W.processMessage(X.type,z[X.fromAddress],X)
        }
    }
    ,j=function(X) {
        var W = new OT.SignalEvent("signalReceived",z[X.fromAddress]);
        this.dispatchEvent(W)
    }
    ,F=function() {
        L = null;
        n = null;
        m = null;
        g = false;
        d = null;
        z =  {};
        O =  {};
        V =  {}
    }
    ,C=function() {
        for(var W in M) {
            M[W].disconnect()
        }
        for(var X in T) {
            T[X].disconnect()
        }
    }
    ,t=function(W) {
        if(V[W.guid]) {
            W.off("destroyed",V[W.guid]);
            delete V[W.guid]
        }
        W.destroy()
    }
    ,h=function() {
        for(var W in M) {
            t(M[W])
        }
        M =  {};
        for(var X in T) {
            T[X].destroy()
        }
        T =  {}
    }
    ,I=function(W) {
        V[W.guid] = OT._.bind(function() {
            this.unpublish(W)
        }
        ,this);
        W.on("destroyed",V[W.guid])
    }
    ,P=function() {
        if(R) {
            console.log("connectToMessenger");
            var W = function(X) {
                return function(Y) {
                    return function() {
                        return Y.apply(X,arguments)
                    }
                }
            }
            (this);
            f = new OT.Messenger(this.sessionInfo.messagingServer,new OT.SessionMessageWrangler(this)).on({
                SessionConnected:W(w)
                ,SessionConnectFailed:W(c)
                ,ConnectionClosed:W(U)
                ,ConnectionCreated:W(K)
                ,ConnectionDestroyed:W(D)
                ,StreamCreated:W(v)
                ,StreamModified:W(s)
                ,StreamDestroyed:W(b)
                ,JSEPMessageReceived:W(i)
                ,SignalReceived:W(j)
                ,exception:W(B)
            });
            f.connect(r,n, {
                requireConnectionObjects:this.properties.requireConnectionObjects
                ,p2pEnabled:this.sessionInfo.p2pEnabled
                ,widgetId:x
                ,partnerId:L
            })
        }
    }
    ,N=function() {
        if( ! E) {
            return
        }
        setTimeout(function() {
            p.logEvent({
                action:"getSessionInfo"
                ,variation:"Attempt"
                ,payload_type:"api_url"
                ,payload:OT.BUILD_PROPERTIES.apiURL
                ,session_id:r
                ,partner_id:L
                ,widget_id:x
            })
        }
        ,0);
        var W = OT.BUILD_PROPERTIES.apiURL + "/session/" + r + "?extended=true";
        OT.$.getXML(W, {
            headers: {
                "X-TB-TOKEN-AUTH":n,"X-TB-VERSION":1
            }
            ,success:OT._.bind(Q,this)
            ,error:OT._.bind(H,this)
        })
    }
    ,Q=function(W) {
        if( ! E) {
            return
        }
        this.sessionInfo = new OT.SessionInfo(W);
        if(this.sessionInfo.validSession) {
            this.properties =  {
                requireConnectionObjects:true
            };
            if(this.sessionInfo && this.sessionInfo.partnerId) {
                L = this.sessionInfo.partnerId
            }
            p.logEvent({
                action:"getSessionInfo"
                ,variation:"Success"
                ,payload_type:"api_url"
                ,payload:OT.BUILD_PROPERTIES.apiURL
                ,session_id:r
                ,partner_id:L
                ,widget_id:x
            });
            if(this.sessionInfo.partnerId !== null && this.sessionInfo.sessionStatus !== null) {
                R = true
            }
            P.call(this)
        } else {
            TB.handleJsException("TB.SessionInfoError :: Unable to get session info " + this.sessionInfo.errorMessage,OT.ExceptionCodes.INVALID_SESSION_ID, {
                session:this
            });
            p.logError({
                action:"getSessionInfo"
                ,variation:"Failure"
                ,payload_type:"errorMessage"
                ,payload:"TB.SessionInfoError :: Unable to get session info " + this.sessionInfo.errorMessage
                ,session_id:r
                ,partner_id:L
                ,widget_id:x
            })
        }
    }
    ,H=function(W) {
        E = false;
        p.logEvent({
            action:"getSessionInfo"
            ,variation:"Failure"
            ,payload_type:"api_url"
            ,payload:OT.BUILD_PROPERTIES.apiURL
            ,session_id:r
            ,partner_id:L
            ,widget_id:x
        });
        TB.handleJsException("TB.SessionInfoError :: There was an error while getting the session info.",OT.ExceptionCodes.API_RESPONSE_FAILURE, {
            session:this
        })
    }
    ,y=function(Y) {
        for(var X in d) {
            var W = d[X];
            if(W.toLowerCase() == Y.toLowerCase()) {
                return true
            }
        }
        return false
    };
    this.connect = function(Y,X,W) {
        if(g) {
            OT.warn("OT.Session: Cannot connect, already connected.");
            return
        }
        if(E) {
            OT.warn("OT.Session: Cannot connect, already connecting.");
            return
        }
        E = true;
        F.call(this);
        L = Y.toString();
        if(OT.APIKEY.length === 0) {
            OT.APIKEY = L
        }
        n = X;
        N.call(this)
    };
    this.disconnect = function() {
        E = false;
        if(f) {
            f.disconnect();
            f = null;
            R = false
        }
    };
    this.publish = function(Y,W) {
        var X;
        if( ! g) {
            p.logError(1010,"tb.exception","We need to be connected before you can publish",null, {
                action:"publish"
                ,variation:"Failure"
                ,payload_type:"reason"
                ,payload:"We need to be connected before you can publish"
                ,session_id:r
                ,partner_id:L
                ,widgetId:x
            });
            X = "We need to be connected before you can publish";
            OT.error(X);
            throw new Error(X)
        }
        if( ! y("publish")) {
            p.logEvent({
                action:"publish"
                ,variation:"Failure"
                ,payload_type:"reason"
                ,payload:"This token does not allow publishing. The role must be at least `publisher` to enable this functionality"
                ,session_id:r
                ,partner_id:L
                ,widgetId:x
            });
            TB.handleJsException("This token does not allow publishing. The role must be at least `publisher` to enable this functionality",OT.ExceptionCodes.UNABLE_TO_PUBLISH, {
                session:this
            });
            return null
        }
        if( ! Y || typeof(Y) === "string") {
            Y = OT.initPublisher(this.apiKey,Y,W)
        } else {
            if(Y instanceof OT.rtc.Publisher || Y instanceof OT.flash.Publisher) {
                if("session" in Y && Y.session && "sessionId" in Y.session) {
                    if(Y.session.sessionId === this.sessionId) {
                        OT.warn("Cannot publish " + Y.guid + " again to " + this.sessionId + ". Please call session.unpublish(publisher) first.")
                    } else {
                        OT.warn("Cannot publish " + Y.guid + " publisher already attached to " + Y.session.sessionId + ". Please call session.unpublish(publisher) first.")
                    }
                }
            } else {
                X = "Session.publish :: First parameter passed in is neither a string nor an instance of the Publisher";
                OT.error(X);
                throw new Error(X)
            }
        }
        M[Y.guid] = Y;
        Y._.publishToSession(this);
        I.call(this,Y);
        return Y
    };
    this.unpublish = function(W) {
        if( ! W) {
            OT.error("OT.Session.unpublish: publisher parameter missing.");
            return
        }
        W._.unpublishFromSession(this)
    };
    this.modifyStream = function(Y,W,X) {
        if( ! Y ||  ! W ||  ! X) {
            OT.error("OT.Session.modifyStream: must provide streamId, key and value to modify a stream property.")
        }
        f.sendMessage(OT.WebSocketMessage.modifyStream(Y,W,X))
    };
    this.subscribe = function(aa,W,X) {
        var Z;
        if( ! this.connection ||  ! this.connection.connectionId) {
            Z = "Session.subscribe :: Connection required to subscribe";
            OT.error(Z);
            throw new Error(Z)
        }
        if( ! aa) {
            Z = "Session.subscribe :: stream cannot be null";
            OT.error(Z);
            throw new Error(Z)
        }
        if( ! aa.hasOwnProperty("streamId")) {
            Z = "Session.subscribe :: invalid stream object";
            OT.error(Z);
            throw new Error(Z)
        }
        var Y = new OT.rtc.Subscriber(W,OT._.extend(X ||  {}
        , {
            session:this
        }));
        T[aa.streamId] = Y;
        Y.subscribe(aa);
        return Y
    };
    this.unsubscribe = function(W) {
        if( ! W) {
            var X = "OT.Session.unsubscribe: subscriber cannot be null";
            OT.error(X);
            throw new Error(X)
        }
        if( ! W.stream) {
            OT.warn("OT.Session.unsubscribe:: tried to unsubscribe a subscriber that had no stream");
            return false
        }
        OT.debug("OT.Session.unsubscribe: subscriber " + W.id);
        delete T[W.stream.id];
        W.destroy();
        return true
    };
    this.getSubscribersForStream = function(W) {
        return[T[W.id]]
    };
    this.getPublisherForStream = function(X) {
        var W;
        if(typeof(X) == "string") {
            W = X
        } else {
            if(typeof(X) == "object" && X && X.hasOwnProperty("id")) {
                W = X.id
            } else {
                errorMsg = "Session.getPublisherForStream :: Invalid stream type";
                OT.error(errorMsg);
                throw new Error(errorMsg)
            }
        }
        return u(W)
    };
    this.sendMessage = function() {
        return f.sendMessage.apply(f,arguments)
    };
    this.sendJSEPMessage = function(Y,W,X) {
        if(f && f.connectionId) {
            f.sendMessage(OT.WebSocketMessage.jsepMessage(f.connectionId,[Y.connectionId],W,X))
        } else {
            OT.warn("Session.sendJSEPMessage :: Tried to send a message without a _messenger")
        }
    };
    this.forceDisconnect = function(W) {
        if(y("forceDisconnect")) {
            f.sendMessage(OT.WebSocketMessage.forceDisconnect(W))
        } else {
            TB.handleJsException("This token does not allow forceDisconnect. The role must be at least `moderator` to enable this functionality",OT.ExceptionCodes.UNABLE_TO_FORCE_DISCONNECT, {
                session:this
            })
        }
    };
    this.forceUnpublish = function(W) {
        if(y("forceUnpublish")) {
            f.sendMessage(OT.WebSocketMessage.forceUnpublish(W))
        } else {
            TB.handleJsException("This token does not allow forceUnpublish. The role must be at least `moderator` to enable this functionality",OT.ExceptionCodes.UNABLE_TO_FORCE_UNPUBLISH, {
                session:this
            })
        }
    };
    this.getStateManager = function() {
        OT.warn("Fixme: Have not implemented session.getStateManager")
    };
    this.__defineGetter__("apiKey",function() {
        return L
    });
    this.__defineGetter__("token",function() {
        return n
    });
    this.__defineGetter__("connected",function() {
        return g
    });
    this.__defineGetter__("connection",function() {
        return z[m]
    });
    this.__defineSetter__("connection",function(W) {
        if(W.hasOwnProperty("connectionId")) {
            m = W.connectionId;
            z[m] = W
        }
    });
    this.__defineGetter__("capabilities",function() {
        return d
    });
    this.__defineGetter__("sessionId",function() {
        return r
    });
    this.__defineGetter__("id",function() {
        return r
    });
    this.__defineGetter__("connections",function() {
        return z
    });
    this.__defineGetter__("publishers",function() {
        return M
    })
}
})(window);
(function(a) {
OT.SessionMessageWrangler = function(f) {
    var d = function(g) {
        return new OT.Connection(g.connectionId,g.creationTime,g.data, {
            supportsWebRTC:g.supportsWebRTC
        })
    }
    ,e=function(g) {
        return Object.keys(g).map(function(h) {
            return d(g[h])
        })
    }
    ,b=function(i,g) {
        function j(o) {
            if(f.connections[i.connection.connectionId]) {
                return f.connections[i.connection.connectionId]
            } else {
                if(g) {
                    for(var m=0,n=g.length;m<n;++m) {
                        if(o === g[m].id) {
                            return g[m]
                        }
                    }
                }
            }
            return null
        }
        var k = new OT.Stream(i.streamId,j(i.connection.connectionId),i.name,i.streamData,i.type,i.creationTime,i.hasAudio,i.hasVideo,i.orientation?i.orientation: {
            videoOrientation:"OTVideoOrientationRotatedNormal"
            ,width:640
            ,height:480
        }
        ,f.id,i.peerId,i.quality,i.orientation?i.orientation.width:640,i.orientation?i.orientation.height:480);
        var h;
        if(i.publisherId) {
            h = f.publishers[i.publisherId]
        } else {
            h = f.getPublisherForStream(k.id)
        }
        if(h) {
            h.stream = k
        }
        return k
    }
    ,c=function(i,h) {
        var k = [];
        for(var g in i) {
            if(i.hasOwnProperty(g)) {
                var j = b(i[g],h);
                if(j) {
                    k.push(j)
                }
            }
        }
        return k
    };
    this.wrangle = function(g) {
        if(g.sessionState) {
            if(g.sessionState.CONNECTIONS) {
                g.connections = e(g.sessionState.CONNECTIONS)
            }
            if(g.sessionState.STREAMS) {
                g.streams = c(g.sessionState.STREAMS,g.connections)
            }
        } else {
            if(g.streams) {
                g.streams = c(g.streams,g.connections)
            }
            if(g.connection) {
                g.connection = d(g.connection)
            }
        }
        return g
    }
}
})(window);
(function(a) {
OT.onLoad(function() {
    var b = document.createElement("link");
    b.type = "text/css";
    b.media = "screen";
    b.rel = "stylesheet";
    b.href = OT.BUILD_PROPERTIES.cssURL + "/ot.css";
    document.head.appendChild(b)
})
})(window);

