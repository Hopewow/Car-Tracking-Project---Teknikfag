!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).markerClusterer={})}(this,(function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=i(t);if(e){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(t,e)||l(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(t){if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},m=function(t){return t&&t.Math==Math&&t},d=m("object"==typeof globalThis&&globalThis)||m("object"==typeof window&&window)||m("object"==typeof self&&self)||m("object"==typeof h&&h)||function(){return this}()||Function("return this")(),g={},v=function(t){try{return!!t()}catch(t){return!0}},y=!v((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),b=!v((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),w=b,k=Function.prototype.call,O=w?k.bind(k):function(){return k.apply(k,arguments)},S={},x={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor,P=M&&!x.call({1:2},1);S.f=P?function(t){var e=M(this,t);return!!e&&e.enumerable}:x;var E,j,C=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},_=b,L=Function.prototype,T=L.bind,I=L.call,A=_&&T.bind(I,I),N=_?function(t){return t&&A(t)}:function(t){return t&&function(){return I.apply(t,arguments)}},z=N,R=z({}.toString),F=z("".slice),Z=function(t){return F(R(t),8,-1)},D=N,G=v,V=Z,B=d.Object,U=D("".split),W=G((function(){return!B("z").propertyIsEnumerable(0)}))?function(t){return"String"==V(t)?U(t,""):B(t)}:B,q=d.TypeError,X=function(t){if(null==t)throw q("Can't call method on "+t);return t},H=W,$=X,J=function(t){return H($(t))},K=function(t){return"function"==typeof t},Y=K,Q=function(t){return"object"==typeof t?null!==t:Y(t)},tt=d,et=K,rt=function(t){return et(t)?t:void 0},nt=function(t,e){return arguments.length<2?rt(tt[t]):tt[t]&&tt[t][e]},ot=N({}.isPrototypeOf),it=d,st=nt("navigator","userAgent")||"",at=it.process,ut=it.Deno,ct=at&&at.versions||ut&&ut.version,ft=ct&&ct.v8;ft&&(j=(E=ft.split("."))[0]>0&&E[0]<4?1:+(E[0]+E[1])),!j&&st&&(!(E=st.match(/Edge\/(\d+)/))||E[1]>=74)&&(E=st.match(/Chrome\/(\d+)/))&&(j=+E[1]);var lt=j,pt=lt,ht=v,mt=!!Object.getOwnPropertySymbols&&!ht((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&pt&&pt<41})),dt=mt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,gt=nt,vt=K,yt=ot,bt=dt,wt=d.Object,kt=bt?function(t){return"symbol"==typeof t}:function(t){var e=gt("Symbol");return vt(e)&&yt(e.prototype,wt(t))},Ot=d.String,St=K,xt=function(t){try{return Ot(t)}catch(t){return"Object"}},Mt=d.TypeError,Pt=function(t){if(St(t))return t;throw Mt(xt(t)+" is not a function")},Et=Pt,jt=O,Ct=K,_t=Q,Lt=d.TypeError,Tt={exports:{}},It=d,At=Object.defineProperty,Nt=function(t,e){try{At(It,t,{value:e,configurable:!0,writable:!0})}catch(r){It[t]=e}return e},zt=Nt,Rt="__core-js_shared__",Ft=d[Rt]||zt(Rt,{}),Zt=Ft;(Tt.exports=function(t,e){return Zt[t]||(Zt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.2",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE",source:"https://github.com/zloirock/core-js"});var Dt=X,Gt=d.Object,Vt=function(t){return Gt(Dt(t))},Bt=Vt,Ut=N({}.hasOwnProperty),Wt=Object.hasOwn||function(t,e){return Ut(Bt(t),e)},qt=N,Xt=0,Ht=Math.random(),$t=qt(1..toString),Jt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+$t(++Xt+Ht,36)},Kt=d,Yt=Tt.exports,Qt=Wt,te=Jt,ee=mt,re=dt,ne=Yt("wks"),oe=Kt.Symbol,ie=oe&&oe.for,se=re?oe:oe&&oe.withoutSetter||te,ae=function(t){if(!Qt(ne,t)||!ee&&"string"!=typeof ne[t]){var e="Symbol."+t;ee&&Qt(oe,t)?ne[t]=oe[t]:ne[t]=re&&ie?ie(e):se(e)}return ne[t]},ue=O,ce=Q,fe=kt,le=function(t,e){var r=t[e];return null==r?void 0:Et(r)},pe=function(t,e){var r,n;if("string"===e&&Ct(r=t.toString)&&!_t(n=jt(r,t)))return n;if(Ct(r=t.valueOf)&&!_t(n=jt(r,t)))return n;if("string"!==e&&Ct(r=t.toString)&&!_t(n=jt(r,t)))return n;throw Lt("Can't convert object to primitive value")},he=ae,me=d.TypeError,de=he("toPrimitive"),ge=function(t,e){if(!ce(t)||fe(t))return t;var r,n=le(t,de);if(n){if(void 0===e&&(e="default"),r=ue(n,t,e),!ce(r)||fe(r))return r;throw me("Can't convert object to primitive value")}return void 0===e&&(e="number"),pe(t,e)},ve=ge,ye=kt,be=function(t){var e=ve(t,"string");return ye(e)?e:e+""},we=Q,ke=d.document,Oe=we(ke)&&we(ke.createElement),Se=function(t){return Oe?ke.createElement(t):{}},xe=Se,Me=!y&&!v((function(){return 7!=Object.defineProperty(xe("div"),"a",{get:function(){return 7}}).a})),Pe=y,Ee=O,je=S,Ce=C,_e=J,Le=be,Te=Wt,Ie=Me,Ae=Object.getOwnPropertyDescriptor;g.f=Pe?Ae:function(t,e){if(t=_e(t),e=Le(e),Ie)try{return Ae(t,e)}catch(t){}if(Te(t,e))return Ce(!Ee(je.f,t,e),t[e])};var Ne={},ze=y&&v((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Re=d,Fe=Q,Ze=Re.String,De=Re.TypeError,Ge=function(t){if(Fe(t))return t;throw De(Ze(t)+" is not an object")},Ve=y,Be=Me,Ue=ze,We=Ge,qe=be,Xe=d.TypeError,He=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,Je="enumerable",Ke="configurable",Ye="writable";Ne.f=Ve?Ue?function(t,e,r){if(We(t),e=qe(e),We(r),"function"==typeof t&&"prototype"===e&&"value"in r&&Ye in r&&!r.writable){var n=$e(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:Ke in r?r.configurable:n.configurable,enumerable:Je in r?r.enumerable:n.enumerable,writable:!1})}return He(t,e,r)}:He:function(t,e,r){if(We(t),e=qe(e),We(r),Be)try{return He(t,e,r)}catch(t){}if("get"in r||"set"in r)throw Xe("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var Qe=Ne,tr=C,er=y?function(t,e,r){return Qe.f(t,e,tr(1,r))}:function(t,e,r){return t[e]=r,t},rr={exports:{}},nr=K,or=Ft,ir=N(Function.toString);nr(or.inspectSource)||(or.inspectSource=function(t){return ir(t)});var sr,ar,ur,cr=or.inspectSource,fr=K,lr=cr,pr=d.WeakMap,hr=fr(pr)&&/native code/.test(lr(pr)),mr=Tt.exports,dr=Jt,gr=mr("keys"),vr=function(t){return gr[t]||(gr[t]=dr(t))},yr={},br=hr,wr=d,kr=N,Or=Q,Sr=er,xr=Wt,Mr=Ft,Pr=vr,Er=yr,jr="Object already initialized",Cr=wr.TypeError,_r=wr.WeakMap;if(br||Mr.state){var Lr=Mr.state||(Mr.state=new _r),Tr=kr(Lr.get),Ir=kr(Lr.has),Ar=kr(Lr.set);sr=function(t,e){if(Ir(Lr,t))throw new Cr(jr);return e.facade=t,Ar(Lr,t,e),e},ar=function(t){return Tr(Lr,t)||{}},ur=function(t){return Ir(Lr,t)}}else{var Nr=Pr("state");Er[Nr]=!0,sr=function(t,e){if(xr(t,Nr))throw new Cr(jr);return e.facade=t,Sr(t,Nr,e),e},ar=function(t){return xr(t,Nr)?t[Nr]:{}},ur=function(t){return xr(t,Nr)}}var zr={set:sr,get:ar,has:ur,enforce:function(t){return ur(t)?ar(t):sr(t,{})},getterFor:function(t){return function(e){var r;if(!Or(e)||(r=ar(e)).type!==t)throw Cr("Incompatible receiver, "+t+" required");return r}}},Rr=y,Fr=Wt,Zr=Function.prototype,Dr=Rr&&Object.getOwnPropertyDescriptor,Gr=Fr(Zr,"name"),Vr=Gr&&"something"===function(){}.name,Br=Gr&&(!Rr||Rr&&Dr(Zr,"name").configurable),Ur=d,Wr=K,qr=Wt,Xr=er,Hr=Nt,$r=cr,Jr={EXISTS:Gr,PROPER:Vr,CONFIGURABLE:Br}.CONFIGURABLE,Kr=zr.get,Yr=zr.enforce,Qr=String(String).split("String");(rr.exports=function(t,e,r,n){var o,i=!!n&&!!n.unsafe,s=!!n&&!!n.enumerable,a=!!n&&!!n.noTargetGet,u=n&&void 0!==n.name?n.name:e;Wr(r)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!qr(r,"name")||Jr&&r.name!==u)&&Xr(r,"name",u),(o=Yr(r)).source||(o.source=Qr.join("string"==typeof u?u:""))),t!==Ur?(i?!a&&t[e]&&(s=!0):delete t[e],s?t[e]=r:Xr(t,e,r)):s?t[e]=r:Hr(e,r)})(Function.prototype,"toString",(function(){return Wr(this)&&Kr(this).source||$r(this)}));var tn={},en=Math.ceil,rn=Math.floor,nn=function(t){var e=+t;return e!=e||0===e?0:(e>0?rn:en)(e)},on=nn,sn=Math.max,an=Math.min,un=function(t,e){var r=on(t);return r<0?sn(r+e,0):an(r,e)},cn=nn,fn=Math.min,ln=function(t){return t>0?fn(cn(t),9007199254740991):0},pn=function(t){return ln(t.length)},hn=J,mn=un,dn=pn,gn=function(t){return function(e,r,n){var o,i=hn(e),s=dn(i),a=mn(n,s);if(t&&r!=r){for(;s>a;)if((o=i[a++])!=o)return!0}else for(;s>a;a++)if((t||a in i)&&i[a]===r)return t||a||0;return!t&&-1}},vn={includes:gn(!0),indexOf:gn(!1)},yn=Wt,bn=J,wn=vn.indexOf,kn=yr,On=N([].push),Sn=function(t,e){var r,n=bn(t),o=0,i=[];for(r in n)!yn(kn,r)&&yn(n,r)&&On(i,r);for(;e.length>o;)yn(n,r=e[o++])&&(~wn(i,r)||On(i,r));return i},xn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Mn=Sn,Pn=xn.concat("length","prototype");tn.f=Object.getOwnPropertyNames||function(t){return Mn(t,Pn)};var En={};En.f=Object.getOwnPropertySymbols;var jn=nt,Cn=tn,_n=En,Ln=Ge,Tn=N([].concat),In=jn("Reflect","ownKeys")||function(t){var e=Cn.f(Ln(t)),r=_n.f;return r?Tn(e,r(t)):e},An=Wt,Nn=In,zn=g,Rn=Ne,Fn=v,Zn=K,Dn=/#|\.prototype\./,Gn=function(t,e){var r=Bn[Vn(t)];return r==Wn||r!=Un&&(Zn(e)?Fn(e):!!e)},Vn=Gn.normalize=function(t){return String(t).replace(Dn,".").toLowerCase()},Bn=Gn.data={},Un=Gn.NATIVE="N",Wn=Gn.POLYFILL="P",qn=Gn,Xn=d,Hn=g.f,$n=er,Jn=rr.exports,Kn=Nt,Yn=function(t,e,r){for(var n=Nn(e),o=Rn.f,i=zn.f,s=0;s<n.length;s++){var a=n[s];An(t,a)||r&&An(r,a)||o(t,a,i(e,a))}},Qn=qn,to=function(t,e){var r,n,o,i,s,a=t.target,u=t.global,c=t.stat;if(r=u?Xn:c?Xn[a]||Kn(a,{}):(Xn[a]||{}).prototype)for(n in e){if(i=e[n],o=t.noTargetGet?(s=Hn(r,n))&&s.value:r[n],!Qn(u?n:a+(c?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Yn(i,o)}(t.sham||o&&o.sham)&&$n(i,"sham",!0),Jn(r,n,i,t)}},eo=Pt,ro=b,no=N(N.bind),oo=Z,io=Array.isArray||function(t){return"Array"==oo(t)},so={};so[ae("toStringTag")]="z";var ao="[object z]"===String(so),uo=d,co=ao,fo=K,lo=Z,po=ae("toStringTag"),ho=uo.Object,mo="Arguments"==lo(function(){return arguments}()),go=co?lo:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=ho(t),po))?r:mo?lo(e):"Object"==(n=lo(e))&&fo(e.callee)?"Arguments":n},vo=N,yo=v,bo=K,wo=go,ko=cr,Oo=function(){},So=[],xo=nt("Reflect","construct"),Mo=/^\s*(?:class|function)\b/,Po=vo(Mo.exec),Eo=!Mo.exec(Oo),jo=function(t){if(!bo(t))return!1;try{return xo(Oo,So,t),!0}catch(t){return!1}},Co=function(t){if(!bo(t))return!1;switch(wo(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Eo||!!Po(Mo,ko(t))}catch(t){return!0}};Co.sham=!0;var _o=!xo||yo((function(){var t;return jo(jo.call)||!jo(Object)||!jo((function(){t=!0}))||t}))?Co:jo,Lo=d,To=io,Io=_o,Ao=Q,No=ae("species"),zo=Lo.Array,Ro=function(t){var e;return To(t)&&(e=t.constructor,(Io(e)&&(e===zo||To(e.prototype))||Ao(e)&&null===(e=e[No]))&&(e=void 0)),void 0===e?zo:e},Fo=function(t,e){return new(Ro(t))(0===e?0:e)},Zo=function(t,e){return eo(t),void 0===e?t:ro?no(t,e):function(){return t.apply(e,arguments)}},Do=W,Go=Vt,Vo=pn,Bo=Fo,Uo=N([].push),Wo=function(t){var e=1==t,r=2==t,n=3==t,o=4==t,i=6==t,s=7==t,a=5==t||i;return function(u,c,f,l){for(var p,h,m=Go(u),d=Do(m),g=Zo(c,f),v=Vo(d),y=0,b=l||Bo,w=e?b(u,v):r||s?b(u,0):void 0;v>y;y++)if((a||y in d)&&(h=g(p=d[y],y,m),t))if(e)w[y]=h;else if(h)switch(t){case 3:return!0;case 5:return p;case 6:return y;case 2:Uo(w,p)}else switch(t){case 4:return!1;case 7:Uo(w,p)}return i?-1:n||o?o:w}},qo={forEach:Wo(0),map:Wo(1),filter:Wo(2),some:Wo(3),every:Wo(4),find:Wo(5),findIndex:Wo(6),filterReject:Wo(7)},Xo=v,Ho=lt,$o=ae("species"),Jo=function(t){return Ho>=51||!Xo((function(){var e=[];return(e.constructor={})[$o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Ko=qo.map;function Yo(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}to({target:"Array",proto:!0,forced:!Jo("map")},{map:function(t){return Ko(this,t,arguments.length>1?arguments[1]:void 0)}});var Qo=Pt,ti=Vt,ei=W,ri=pn,ni=d.TypeError,oi=function(t){return function(e,r,n,o){Qo(r);var i=ti(e),s=ei(i),a=ri(i),u=t?a-1:0,c=t?-1:1;if(n<2)for(;;){if(u in s){o=s[u],u+=c;break}if(u+=c,t?u<0:a<=u)throw ni("Reduce of empty array with no initial value")}for(;t?u>=0:a>u;u+=c)u in s&&(o=r(o,s[u],u,i));return o}},ii={left:oi(!1),right:oi(!0)},si=v,ai=function(t,e){var r=[][t];return!!r&&si((function(){r.call(null,e||function(){return 1},1)}))},ui="process"==Z(d.process),ci=ii.left,fi=lt,li=ui;to({target:"Array",proto:!0,forced:!ai("reduce")||!li&&fi>79&&fi<83},{reduce:function(t){var e=arguments.length;return ci(this,t,e,e>1?arguments[1]:void 0)}});var pi=go,hi=ao?{}.toString:function(){return"[object "+pi(this)+"]"},mi=ao,di=rr.exports,gi=hi;mi||di(Object.prototype,"toString",gi,{unsafe:!0});var vi=qo.filter;to({target:"Array",proto:!0,forced:!Jo("filter")},{filter:function(t){return vi(this,t,arguments.length>1?arguments[1]:void 0)}});var yi=function(){function t(r){var n=r.markers,o=r.position;e(this,t),this.markers=n,o&&(o instanceof google.maps.LatLng?this._position=o:this._position=new google.maps.LatLng(o))}return n(t,[{key:"bounds",get:function(){if(0!==this.markers.length||this._position)return this.markers.reduce((function(t,e){return t.extend(e.getPosition())}),new google.maps.LatLngBounds(this._position,this._position))}},{key:"position",get:function(){return this._position||this.bounds.getCenter()}},{key:"count",get:function(){return this.markers.filter((function(t){return t.getVisible()})).length}},{key:"push",value:function(t){this.markers.push(t)}},{key:"delete",value:function(){this.marker&&(this.marker.setMap(null),delete this.marker),this.markers.length=0}}]),t}(),bi=function(t,e,r,n){var o=wi(t.getBounds(),e,n);return r.filter((function(t){return o.contains(t.getPosition())}))},wi=function(t,e,r){var n=Oi(t,e),o=n.northEast,i=n.southWest,s=Si({northEast:o,southWest:i},r);return xi(s,e)},ki=function(t,e){var r=(e.lat-t.lat)*Math.PI/180,n=(e.lng-t.lng)*Math.PI/180,o=Math.sin(r/2)*Math.sin(r/2)+Math.cos(t.lat*Math.PI/180)*Math.cos(e.lat*Math.PI/180)*Math.sin(n/2)*Math.sin(n/2);return 6371*(2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)))},Oi=function(t,e){return{northEast:e.fromLatLngToDivPixel(t.getNorthEast()),southWest:e.fromLatLngToDivPixel(t.getSouthWest())}},Si=function(t,e){var r=t.northEast,n=t.southWest;return r.x+=e,r.y-=e,n.x-=e,n.y+=e,{northEast:r,southWest:n}},xi=function(t,e){var r=t.northEast,n=t.southWest,o=new google.maps.LatLngBounds;return o.extend(e.fromDivPixelToLatLng(r)),o.extend(e.fromDivPixelToLatLng(n)),o},Mi=function(){function t(r){var n=r.maxZoom,o=void 0===n?16:n;e(this,t),this.maxZoom=o}return n(t,[{key:"noop",value:function(t){var e=t.markers;return Ei(e)}}]),t}(),Pi=function(t){o(i,t);var r=u(i);function i(t){var n;e(this,i);var o=t.viewportPadding,s=void 0===o?60:o,a=Yo(t,["viewportPadding"]);return(n=r.call(this,a)).viewportPadding=60,n.viewportPadding=s,n}return n(i,[{key:"calculate",value:function(t){var e=t.markers,r=t.map,n=t.mapCanvasProjection;return r.getZoom()>=this.maxZoom?{clusters:this.noop({markers:e,map:r,mapCanvasProjection:n}),changed:!1}:{clusters:this.cluster({markers:bi(r,n,e,this.viewportPadding),map:r,mapCanvasProjection:n})}}}]),i}(Mi),Ei=function(t){return t.map((function(t){return new yi({position:t.getPosition(),markers:[t]})}))},ji=Se("span").classList,Ci=ji&&ji.constructor&&ji.constructor.prototype,_i=Ci===Object.prototype?void 0:Ci,Li=qo.forEach,Ti=d,Ii={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Ai=_i,Ni=ai("forEach")?[].forEach:function(t){return Li(this,t,arguments.length>1?arguments[1]:void 0)},zi=er,Ri=function(t){if(t&&t.forEach!==Ni)try{zi(t,"forEach",Ni)}catch(e){t.forEach=Ni}};for(var Fi in Ii)Ii[Fi]&&Ri(Ti[Fi]&&Ti[Fi].prototype);Ri(Ai);var Zi=O;to({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return Zi(URL.prototype.toString,this)}});var Di=function(t){o(i,t);var r=u(i);function i(t){var n;e(this,i);var o=t.maxDistance,s=void 0===o?4e4:o,a=t.gridSize,u=void 0===a?40:a,c=Yo(t,["maxDistance","gridSize"]);return(n=r.call(this,c)).clusters=[],n.maxDistance=s,n.gridSize=u,n}return n(i,[{key:"cluster",value:function(t){var e=this,r=t.markers,n=t.map,o=t.mapCanvasProjection;return this.clusters=[],r.forEach((function(t){e.addToClosestCluster(t,n,o)})),this.clusters}},{key:"addToClosestCluster",value:function(t,e,r){for(var n=this.maxDistance,o=null,i=0;i<this.clusters.length;i++){var s=this.clusters[i],a=ki(s.bounds.getCenter().toJSON(),t.getPosition().toJSON());a<n&&(n=a,o=s)}if(o&&wi(o.bounds,r,this.gridSize).contains(t.getPosition()))o.push(t);else{var u=new yi({markers:[t]});this.clusters.push(u)}}}]),i}(Pi),Gi=function(t){o(i,t);var r=u(i);function i(t){e(this,i);var n=Yo(t,[]);return r.call(this,n)}return n(i,[{key:"calculate",value:function(t){var e=t.markers,r=t.map,n=t.mapCanvasProjection;return{clusters:this.cluster({markers:e,map:r,mapCanvasProjection:n}),changed:!1}}},{key:"cluster",value:function(t){return this.noop(t)}}]),i}(Mi),Vi=Sn,Bi=xn,Ui=Object.keys||function(t){return Vi(t,Bi)},Wi=y,qi=N,Xi=O,Hi=v,$i=Ui,Ji=En,Ki=S,Yi=Vt,Qi=W,ts=Object.assign,es=Object.defineProperty,rs=qi([].concat),ns=!ts||Hi((function(){if(Wi&&1!==ts({b:1},ts(es({},"a",{enumerable:!0,get:function(){es(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach((function(t){e[t]=t})),7!=ts({},t)[r]||$i(ts({},e)).join("")!=n}))?function(t,e){for(var r=Yi(t),n=arguments.length,o=1,i=Ji.f,s=Ki.f;n>o;)for(var a,u=Qi(arguments[o++]),c=i?rs($i(u),i(u)):$i(u),f=c.length,l=0;f>l;)a=c[l++],Wi&&!Xi(s,u,a)||(r[a]=u[a]);return r}:ts;to({target:"Object",stat:!0,forced:Object.assign!==ns},{assign:ns});var os={exports:{}};!function(t,e){t.exports=function(){function t(r,n,o,i,s,a){if(!(s-i<=o)){var u=i+s>>1;e(r,n,u,i,s,a%2),t(r,n,o,i,u-1,a+1),t(r,n,o,u+1,s,a+1)}}function e(t,n,o,i,s,a){for(;s>i;){if(s-i>600){var u=s-i+1,c=o-i+1,f=Math.log(u),l=.5*Math.exp(2*f/3),p=.5*Math.sqrt(f*l*(u-l)/u)*(c-u/2<0?-1:1);e(t,n,o,Math.max(i,Math.floor(o-c*l/u+p)),Math.min(s,Math.floor(o+(u-c)*l/u+p)),a)}var h=n[2*o+a],m=i,d=s;for(r(t,n,i,o),n[2*s+a]>h&&r(t,n,i,s);m<d;){for(r(t,n,m,d),m++,d--;n[2*m+a]<h;)m++;for(;n[2*d+a]>h;)d--}n[2*i+a]===h?r(t,n,i,d):r(t,n,++d,s),d<=o&&(i=d+1),o<=d&&(s=d-1)}}function r(t,e,r,o){n(t,r,o),n(e,2*r,2*o),n(e,2*r+1,2*o+1)}function n(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function o(t,e,r,n,o,i,s){for(var a,u,c=[0,t.length-1,0],f=[];c.length;){var l=c.pop(),p=c.pop(),h=c.pop();if(p-h<=s)for(var m=h;m<=p;m++)a=e[2*m],u=e[2*m+1],a>=r&&a<=o&&u>=n&&u<=i&&f.push(t[m]);else{var d=Math.floor((h+p)/2);a=e[2*d],u=e[2*d+1],a>=r&&a<=o&&u>=n&&u<=i&&f.push(t[d]);var g=(l+1)%2;(0===l?r<=a:n<=u)&&(c.push(h),c.push(d-1),c.push(g)),(0===l?o>=a:i>=u)&&(c.push(d+1),c.push(p),c.push(g))}}return f}function i(t,e,r,n,o,i){for(var a=[0,t.length-1,0],u=[],c=o*o;a.length;){var f=a.pop(),l=a.pop(),p=a.pop();if(l-p<=i)for(var h=p;h<=l;h++)s(e[2*h],e[2*h+1],r,n)<=c&&u.push(t[h]);else{var m=Math.floor((p+l)/2),d=e[2*m],g=e[2*m+1];s(d,g,r,n)<=c&&u.push(t[m]);var v=(f+1)%2;(0===f?r-o<=d:n-o<=g)&&(a.push(p),a.push(m-1),a.push(v)),(0===f?r+o>=d:n+o>=g)&&(a.push(m+1),a.push(l),a.push(v))}}return u}function s(t,e,r,n){var o=t-r,i=e-n;return o*o+i*i}var a=function(t){return t[0]},u=function(t){return t[1]},c=function(e,r,n,o,i){void 0===r&&(r=a),void 0===n&&(n=u),void 0===o&&(o=64),void 0===i&&(i=Float64Array),this.nodeSize=o,this.points=e;for(var s=e.length<65536?Uint16Array:Uint32Array,c=this.ids=new s(e.length),f=this.coords=new i(2*e.length),l=0;l<e.length;l++)c[l]=l,f[2*l]=r(e[l]),f[2*l+1]=n(e[l]);t(c,f,o,0,c.length-1,0)};return c.prototype.range=function(t,e,r,n){return o(this.ids,this.coords,t,e,r,n,this.nodeSize)},c.prototype.within=function(t,e,r){return i(this.ids,this.coords,t,e,r,this.nodeSize)},c}()}(os);var is=os.exports;const ss={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:t=>t},as=Math.fround||(us=new Float32Array(1),t=>(us[0]=+t,us[0]));var us;class cs{constructor(t){this.options=vs(Object.create(ss),t),this.trees=new Array(this.options.maxZoom+1)}load(t){const{log:e,minZoom:r,maxZoom:n,nodeSize:o}=this.options;e&&console.time("total time");const i=`prepare ${t.length} points`;e&&console.time(i),this.points=t;let s=[];for(let e=0;e<t.length;e++)t[e].geometry&&s.push(ls(t[e],e));this.trees[n+1]=new is(s,ys,bs,o,Float32Array),e&&console.timeEnd(i);for(let t=n;t>=r;t--){const r=+Date.now();s=this._cluster(s,t),this.trees[t]=new is(s,ys,bs,o,Float32Array),e&&console.log("z%d: %d clusters in %dms",t,s.length,+Date.now()-r)}return e&&console.timeEnd("total time"),this}getClusters(t,e){let r=((t[0]+180)%360+360)%360-180;const n=Math.max(-90,Math.min(90,t[1]));let o=180===t[2]?180:((t[2]+180)%360+360)%360-180;const i=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)r=-180,o=180;else if(r>o){const t=this.getClusters([r,n,180,i],e),s=this.getClusters([-180,n,o,i],e);return t.concat(s)}const s=this.trees[this._limitZoom(e)],a=s.range(ms(r),ds(i),ms(o),ds(n)),u=[];for(const t of a){const e=s.points[t];u.push(e.numPoints?ps(e):this.points[e.index])}return u}getChildren(t){const e=this._getOriginId(t),r=this._getOriginZoom(t),n="No cluster with the specified id.",o=this.trees[r];if(!o)throw new Error(n);const i=o.points[e];if(!i)throw new Error(n);const s=this.options.radius/(this.options.extent*Math.pow(2,r-1)),a=o.within(i.x,i.y,s),u=[];for(const e of a){const r=o.points[e];r.parentId===t&&u.push(r.numPoints?ps(r):this.points[r.index])}if(0===u.length)throw new Error(n);return u}getLeaves(t,e,r){e=e||10,r=r||0;const n=[];return this._appendLeaves(n,t,e,r,0),n}getTile(t,e,r){const n=this.trees[this._limitZoom(t)],o=Math.pow(2,t),{extent:i,radius:s}=this.options,a=s/i,u=(r-a)/o,c=(r+1+a)/o,f={features:[]};return this._addTileFeatures(n.range((e-a)/o,u,(e+1+a)/o,c),n.points,e,r,o,f),0===e&&this._addTileFeatures(n.range(1-a/o,u,1,c),n.points,o,r,o,f),e===o-1&&this._addTileFeatures(n.range(0,u,a/o,c),n.points,-1,r,o,f),f.features.length?f:null}getClusterExpansionZoom(t){let e=this._getOriginZoom(t)-1;for(;e<=this.options.maxZoom;){const r=this.getChildren(t);if(e++,1!==r.length)break;t=r[0].properties.cluster_id}return e}_appendLeaves(t,e,r,n,o){const i=this.getChildren(e);for(const e of i){const i=e.properties;if(i&&i.cluster?o+i.point_count<=n?o+=i.point_count:o=this._appendLeaves(t,i.cluster_id,r,n,o):o<n?o++:t.push(e),t.length===r)break}return o}_addTileFeatures(t,e,r,n,o,i){for(const s of t){const t=e[s],a=t.numPoints;let u,c,f;if(a)u=hs(t),c=t.x,f=t.y;else{const e=this.points[t.index];u=e.properties,c=ms(e.geometry.coordinates[0]),f=ds(e.geometry.coordinates[1])}const l={type:1,geometry:[[Math.round(this.options.extent*(c*o-r)),Math.round(this.options.extent*(f*o-n))]],tags:u};let p;a?p=t.id:this.options.generateId?p=t.index:this.points[t.index].id&&(p=this.points[t.index].id),void 0!==p&&(l.id=p),i.features.push(l)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(Math.floor(+t),this.options.maxZoom+1))}_cluster(t,e){const r=[],{radius:n,extent:o,reduce:i,minPoints:s}=this.options,a=n/(o*Math.pow(2,e));for(let n=0;n<t.length;n++){const o=t[n];if(o.zoom<=e)continue;o.zoom=e;const u=this.trees[e+1],c=u.within(o.x,o.y,a),f=o.numPoints||1;let l=f;for(const t of c){const r=u.points[t];r.zoom>e&&(l+=r.numPoints||1)}if(l>f&&l>=s){let t=o.x*f,s=o.y*f,a=i&&f>1?this._map(o,!0):null;const p=(n<<5)+(e+1)+this.points.length;for(const r of c){const n=u.points[r];if(n.zoom<=e)continue;n.zoom=e;const c=n.numPoints||1;t+=n.x*c,s+=n.y*c,n.parentId=p,i&&(a||(a=this._map(o,!0)),i(a,this._map(n)))}o.parentId=p,r.push(fs(t/l,s/l,p,l,a))}else if(r.push(o),l>1)for(const t of c){const n=u.points[t];n.zoom<=e||(n.zoom=e,r.push(n))}}return r}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,e){if(t.numPoints)return e?vs({},t.properties):t.properties;const r=this.points[t.index].properties,n=this.options.map(r);return e&&n===r?vs({},n):n}}function fs(t,e,r,n,o){return{x:as(t),y:as(e),zoom:1/0,id:r,parentId:-1,numPoints:n,properties:o}}function ls(t,e){const[r,n]=t.geometry.coordinates;return{x:as(ms(r)),y:as(ds(n)),zoom:1/0,index:e,parentId:-1}}function ps(t){return{type:"Feature",id:t.id,properties:hs(t),geometry:{type:"Point",coordinates:[(e=t.x,360*(e-.5)),gs(t.y)]}};var e}function hs(t){const e=t.numPoints,r=e>=1e4?Math.round(e/1e3)+"k":e>=1e3?Math.round(e/100)/10+"k":e;return vs(vs({},t.properties),{cluster:!0,cluster_id:t.id,point_count:e,point_count_abbreviated:r})}function ms(t){return t/360+.5}function ds(t){const e=Math.sin(t*Math.PI/180),r=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return r<0?0:r>1?1:r}function gs(t){const e=(180-360*t)*Math.PI/180;return 360*Math.atan(Math.exp(e))/Math.PI-90}function vs(t,e){for(const r in e)t[r]=e[r];return t}function ys(t){return t.x}function bs(t){return t.y}var ws=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,o,i;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(o=n;0!=o--;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(i=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;0!=o--;){var s=i[o];if(!t(e[s],r[s]))return!1}return!0}return e!=e&&r!=r},ks=function(t){o(i,t);var r=u(i);function i(t){var n;e(this,i);var o=t.maxZoom,s=t.radius,a=void 0===s?60:s,u=Yo(t,["maxZoom","radius"]);return(n=r.call(this,{maxZoom:o})).superCluster=new cs(Object.assign({maxZoom:n.maxZoom,radius:a},u)),n.state={zoom:null},n}return n(i,[{key:"calculate",value:function(t){var e=!1;if(!ws(t.markers,this.markers)){e=!0,this.markers=f(t.markers);var r=this.markers.map((function(t){return{type:"Feature",geometry:{type:"Point",coordinates:[t.getPosition().lng(),t.getPosition().lat()]},properties:{marker:t}}}));this.superCluster.load(r)}var n={zoom:t.map.getZoom()};return e||this.state.zoom>this.maxZoom&&n.zoom>this.maxZoom||(e=e||!ws(this.state,n)),this.state=n,e&&(this.clusters=this.cluster(t)),{clusters:this.clusters,changed:e}}},{key:"cluster",value:function(t){var e=t.map;return this.superCluster.getClusters([-180,-90,180,90],Math.round(e.getZoom())).map(this.transformCluster.bind(this))}},{key:"transformCluster",value:function(t){var e=c(t.geometry.coordinates,2),r=e[0],n=e[1],o=t.properties;if(o.cluster)return new yi({markers:this.superCluster.getLeaves(o.cluster_id,1/0).map((function(t){return t.properties.marker})),position:new google.maps.LatLng({lat:n,lng:r})});var i=o.marker;return new yi({markers:[i],position:i.getPosition()})}}]),i}(Mi),Os={},Ss=y,xs=ze,Ms=Ne,Ps=Ge,Es=J,js=Ui;Os.f=Ss&&!xs?Object.defineProperties:function(t,e){Ps(t);for(var r,n=Es(e),o=js(e),i=o.length,s=0;i>s;)Ms.f(t,r=o[s++],n[r]);return t};var Cs,_s=nt("document","documentElement"),Ls=Ge,Ts=Os,Is=xn,As=yr,Ns=_s,zs=Se,Rs=vr("IE_PROTO"),Fs=function(){},Zs=function(t){return"<script>"+t+"</"+"script>"},Ds=function(t){t.write(Zs("")),t.close();var e=t.parentWindow.Object;return t=null,e},Gs=function(){try{Cs=new ActiveXObject("htmlfile")}catch(t){}var t,e;Gs="undefined"!=typeof document?document.domain&&Cs?Ds(Cs):((e=zs("iframe")).style.display="none",Ns.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Zs("document.F=Object")),t.close(),t.F):Ds(Cs);for(var r=Is.length;r--;)delete Gs.prototype[Is[r]];return Gs()};As[Rs]=!0;var Vs=Object.create||function(t,e){var r;return null!==t?(Fs.prototype=Ls(t),r=new Fs,Fs.prototype=null,r[Rs]=t):r=Gs(),void 0===e?r:Ts.f(r,e)},Bs=Ne,Us=ae("unscopables"),Ws=Array.prototype;null==Ws[Us]&&Bs.f(Ws,Us,{configurable:!0,value:Vs(null)});var qs=vn.includes,Xs=function(t){Ws[Us][t]=!0};to({target:"Array",proto:!0},{includes:function(t){return qs(this,t,arguments.length>1?arguments[1]:void 0)}}),Xs("includes");var Hs=Q,$s=Z,Js=ae("match"),Ks=function(t){var e;return Hs(t)&&(void 0!==(e=t[Js])?!!e:"RegExp"==$s(t))},Ys=d.TypeError,Qs=go,ta=d.String,ea=function(t){if("Symbol"===Qs(t))throw TypeError("Cannot convert a Symbol value to a string");return ta(t)},ra=ae("match"),na=to,oa=function(t){if(Ks(t))throw Ys("The method doesn't accept regular expressions");return t},ia=X,sa=ea,aa=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[ra]=!1,"/./"[t](e)}catch(t){}}return!1},ua=N("".indexOf);na({target:"String",proto:!0,forced:!aa("includes")},{includes:function(t){return!!~ua(sa(ia(this)),sa(oa(t)),arguments.length>1?arguments[1]:void 0)}});var ca=to,fa=vn.indexOf,la=ai,pa=N([].indexOf),ha=!!pa&&1/pa([1],1,-0)<0,ma=la("indexOf");ca({target:"Array",proto:!0,forced:ha||!ma},{indexOf:function(t){var e=arguments.length>1?arguments[1]:void 0;return ha?pa(this,t,e)||0:fa(this,t,e)}});var da=be,ga=Ne,va=C,ya=to,ba=d,wa=un,ka=nn,Oa=pn,Sa=Vt,xa=Fo,Ma=function(t,e,r){var n=da(e);n in t?ga.f(t,n,va(0,r)):t[n]=r},Pa=Jo("splice"),Ea=ba.TypeError,ja=Math.max,Ca=Math.min,_a=9007199254740991,La="Maximum allowed length exceeded";ya({target:"Array",proto:!0,forced:!Pa},{splice:function(t,e){var r,n,o,i,s,a,u=Sa(this),c=Oa(u),f=wa(t,c),l=arguments.length;if(0===l?r=n=0:1===l?(r=0,n=c-f):(r=l-2,n=Ca(ja(ka(e),0),c-f)),c+r-n>_a)throw Ea(La);for(o=xa(u,n),i=0;i<n;i++)(s=f+i)in u&&Ma(o,i,u[s]);if(o.length=n,r<n){for(i=f;i<c-n;i++)a=i+r,(s=i+n)in u?u[a]=u[s]:delete u[a];for(i=c;i>c-n+r;i--)delete u[i-1]}else if(r>n)for(i=c-n;i>f;i--)a=i+r-1,(s=i+n-1)in u?u[a]=u[s]:delete u[a];for(i=0;i<r;i++)u[i+f]=arguments[i+2];return u.length=c-n+r,o}});var Ta=d,Ia=K,Aa=Ta.String,Na=Ta.TypeError,za=N,Ra=Ge,Fa=function(t){if("object"==typeof t||Ia(t))return t;throw Na("Can't set "+Aa(t)+" as a prototype")},Za=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=za(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return Ra(r),Fa(n),e?t(r,n):r.__proto__=n,r}}():void 0),Da=K,Ga=Q,Va=Za,Ba=N(1..valueOf),Ua=X,Wa=ea,qa=N("".replace),Xa="[\t\n\v\f\r                　\u2028\u2029\ufeff]",Ha=RegExp("^"+Xa+Xa+"*"),$a=RegExp(Xa+Xa+"*$"),Ja=function(t){return function(e){var r=Wa(Ua(e));return 1&t&&(r=qa(r,Ha,"")),2&t&&(r=qa(r,$a,"")),r}},Ka={start:Ja(1),end:Ja(2),trim:Ja(3)},Ya=y,Qa=d,tu=N,eu=qn,ru=rr.exports,nu=Wt,ou=function(t,e,r){var n,o;return Va&&Da(n=e.constructor)&&n!==r&&Ga(o=n.prototype)&&o!==r.prototype&&Va(t,o),t},iu=ot,su=kt,au=ge,uu=v,cu=tn.f,fu=g.f,lu=Ne.f,pu=Ba,hu=Ka.trim,mu="Number",du=Qa.Number,gu=du.prototype,vu=Qa.TypeError,yu=tu("".slice),bu=tu("".charCodeAt),wu=function(t){var e=au(t,"number");return"bigint"==typeof e?e:ku(e)},ku=function(t){var e,r,n,o,i,s,a,u,c=au(t,"number");if(su(c))throw vu("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=hu(c),43===(e=bu(c,0))||45===e){if(88===(r=bu(c,2))||120===r)return NaN}else if(48===e){switch(bu(c,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+c}for(s=(i=yu(c,2)).length,a=0;a<s;a++)if((u=bu(i,a))<48||u>o)return NaN;return parseInt(i,n)}return+c};if(eu(mu,!du(" 0o1")||!du("0b1")||du("+0x1"))){for(var Ou,Su=function(t){var e=arguments.length<1?0:du(wu(t)),r=this;return iu(gu,r)&&uu((function(){pu(r)}))?ou(Object(e),r,Su):e},xu=Ya?cu(du):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),Mu=0;xu.length>Mu;Mu++)nu(du,Ou=xu[Mu])&&!nu(Su,Ou)&&lu(Su,Ou,fu(du,Ou));Su.prototype=gu,gu.constructor=Su,ru(Qa,mu,Su)}var Pu=n((function t(r,n){e(this,t),this.markers={sum:r.length};var o=n.map((function(t){return t.count})),i=o.reduce((function(t,e){return t+e}),0);this.clusters={count:n.length,markers:{mean:i/n.length,sum:i,min:Math.min.apply(Math,f(o)),max:Math.max.apply(Math,f(o))}}})),Eu=function(){function t(){e(this,t)}return n(t,[{key:"render",value:function(t,e){var r=t.count,n=t.position,o=r>Math.max(10,e.clusters.markers.mean)?"#ff0000":"#0000ff",i=window.btoa('\n  <svg fill="'.concat(o,'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">\n    <circle cx="120" cy="120" opacity=".6" r="70" />\n    <circle cx="120" cy="120" opacity=".3" r="90" />\n    <circle cx="120" cy="120" opacity=".2" r="110" />\n  </svg>'));return new google.maps.Marker({position:n,icon:{url:"data:image/svg+xml;base64,".concat(i),scaledSize:new google.maps.Size(45,45)},label:{text:String(r),color:"rgba(255,255,255,0.9)",fontSize:"12px"},title:"Cluster of ".concat(r," markers"),zIndex:Number(google.maps.Marker.MAX_ZINDEX)+r})}}]),t}();var ju,Cu=n((function t(){e(this,t),function(t,e){for(var r in e.prototype)t.prototype[r]=e.prototype[r]}(t,google.maps.OverlayView)}));t.MarkerClustererEvents=void 0,(ju=t.MarkerClustererEvents||(t.MarkerClustererEvents={})).CLUSTERING_BEGIN="clusteringbegin",ju.CLUSTERING_END="clusteringend",ju.CLUSTER_CLICK="click";var _u=function(t,e,r){r.fitBounds(e.bounds)},Lu=function(r){o(s,r);var i=u(s);function s(t){var r,n=t.map,o=t.markers,a=void 0===o?[]:o,u=t.algorithm,c=void 0===u?new ks({}):u,l=t.renderer,p=void 0===l?new Eu:l,h=t.onClusterClick,m=void 0===h?_u:h;return e(this,s),(r=i.call(this)).markers=f(a),r.clusters=[],r.algorithm=c,r.renderer=p,r.onClusterClick=m,n&&r.setMap(n),r}return n(s,[{key:"addMarker",value:function(t,e){this.markers.includes(t)||(this.markers.push(t),e||this.render())}},{key:"addMarkers",value:function(t,e){var r=this;t.forEach((function(t){r.addMarker(t,!0)})),e||this.render()}},{key:"removeMarker",value:function(t,e){var r=this.markers.indexOf(t);return-1!==r&&(t.setMap(null),this.markers.splice(r,1),e||this.render(),!0)}},{key:"removeMarkers",value:function(t,e){var r=this,n=!1;return t.forEach((function(t){n=r.removeMarker(t,!0)||n})),n&&!e&&this.render(),n}},{key:"clearMarkers",value:function(t){this.markers.length=0,t||this.render()}},{key:"render",value:function(){var e=this.getMap();if(e instanceof google.maps.Map&&this.getProjection()){google.maps.event.trigger(this,t.MarkerClustererEvents.CLUSTERING_BEGIN,this);var r=this.algorithm.calculate({markers:this.markers,map:e,mapCanvasProjection:this.getProjection()}),n=r.clusters,o=r.changed;(o||null==o)&&(this.reset(),this.clusters=n,this.renderClusters()),google.maps.event.trigger(this,t.MarkerClustererEvents.CLUSTERING_END,this)}}},{key:"onAdd",value:function(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}},{key:"onRemove",value:function(){google.maps.event.removeListener(this.idleListener),this.reset()}},{key:"reset",value:function(){this.markers.forEach((function(t){return t.setMap(null)})),this.clusters.forEach((function(t){return t.delete()})),this.clusters=[]}},{key:"renderClusters",value:function(){var e=this,r=new Pu(this.markers,this.clusters),n=this.getMap();this.clusters.forEach((function(o){1===o.markers.length?o.marker=o.markers[0]:(o.marker=e.renderer.render(o,r),e.onClusterClick&&o.marker.addListener("click",(function(r){google.maps.event.trigger(e,t.MarkerClustererEvents.CLUSTER_CLICK,o),e.onClusterClick(r,o,n)}))),o.marker.setMap(n)}))}}]),s}(Cu);t.AbstractAlgorithm=Mi,t.AbstractViewportAlgorithm=Pi,t.Cluster=yi,t.ClusterStats=Pu,t.DefaultRenderer=Eu,t.GridAlgorithm=Di,t.MarkerClusterer=Lu,t.NoopAlgorithm=Gi,t.SuperClusterAlgorithm=ks,t.defaultOnClusterClickHandler=_u,t.distanceBetweenPoints=ki,t.extendBoundsToPaddedViewport=wi,t.extendPixelBounds=Si,t.filterMarkersToPaddedViewport=bi,t.noop=Ei,t.pixelBoundsToLatLngBounds=xi,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map