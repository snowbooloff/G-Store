function Ya(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Yr(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Te(s)?fm(s):Yr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Te(t))return t;if(ye(t))return t}}const um=/;(?![^(]*\))/g,hm=/:([^]+)/,dm=/\/\*.*?\*\//gs;function fm(t){const e={};return t.replace(dm,"").split(um).forEach(n=>{if(n){const s=n.split(hm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Jr(t){let e="";if(Te(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=Jr(t[n]);s&&(e+=s+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function CA(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Te(e)&&(t.class=Jr(e)),n&&(t.style=Yr(n)),t}const pm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_m=Ya(pm);function zh(t){return!!t||t===""}const IA=t=>Te(t)?t:t==null?"":V(t)||ye(t)&&(t.toString===Jh||!z(t.toString))?JSON.stringify(t,Gh,2):String(t),Gh=(t,e)=>e&&e.__v_isRef?Gh(t,e.value):cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Kh(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!V(e)&&!Qh(e)?String(e):e,ge={},ls=[],_t=()=>{},mm=()=>!1,gm=/^on[^a-z]/,Qr=t=>gm.test(t),Ja=t=>t.startsWith("onUpdate:"),De=Object.assign,Qa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ym=Object.prototype.hasOwnProperty,ee=(t,e)=>ym.call(t,e),V=Array.isArray,cs=t=>Xr(t)==="[object Map]",Kh=t=>Xr(t)==="[object Set]",z=t=>typeof t=="function",Te=t=>typeof t=="string",Xa=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",Yh=t=>ye(t)&&z(t.then)&&z(t.catch),Jh=Object.prototype.toString,Xr=t=>Jh.call(t),vm=t=>Xr(t).slice(8,-1),Qh=t=>Xr(t)==="[object Object]",Za=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ar=Ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Em=/-(\w)/g,Ot=Zr(t=>t.replace(Em,(e,n)=>n?n.toUpperCase():"")),bm=/\B([A-Z])/g,As=Zr(t=>t.replace(bm,"-$1").toLowerCase()),eo=Zr(t=>t.charAt(0).toUpperCase()+t.slice(1)),No=Zr(t=>t?`on${eo(t)}`:""),hi=(t,e)=>!Object.is(t,e),lr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Er=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},di=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ac;const wm=()=>Ac||(Ac=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let wt;class Cm{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=wt,!e&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){wt=this}off(){wt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function Im(t,e=wt){e&&e.active&&e.effects.push(t)}const el=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Xh=t=>(t.w&pn)>0,Zh=t=>(t.n&pn)>0,Tm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=pn},Sm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Xh(i)&&!Zh(i)?i.delete(t):e[n++]=i,i.w&=~pn,i.n&=~pn}e.length=n}},oa=new WeakMap;let Qs=0,pn=1;const aa=30;let ut;const xn=Symbol(""),la=Symbol("");class tl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Im(this,s)}run(){if(!this.active)return this.fn();let e=ut,n=ln;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ut,ut=this,ln=!0,pn=1<<++Qs,Qs<=aa?Tm(this):kc(this),this.fn()}finally{Qs<=aa&&Sm(this),pn=1<<--Qs,ut=this.parent,ln=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ut===this?this.deferStop=!0:this.active&&(kc(this),this.onStop&&this.onStop(),this.active=!1)}}function kc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ln=!0;const ed=[];function ks(){ed.push(ln),ln=!1}function Os(){const t=ed.pop();ln=t===void 0?!0:t}function tt(t,e,n){if(ln&&ut){let s=oa.get(t);s||oa.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=el()),td(i)}}function td(t,e){let n=!1;Qs<=aa?Zh(t)||(t.n|=pn,n=!Xh(t)):n=!t.has(ut),n&&(t.add(ut),ut.deps.push(t))}function Bt(t,e,n,s,i,r){const o=oa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t)){const l=di(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?Za(n)&&a.push(o.get("length")):(a.push(o.get(xn)),cs(t)&&a.push(o.get(la)));break;case"delete":V(t)||(a.push(o.get(xn)),cs(t)&&a.push(o.get(la)));break;case"set":cs(t)&&a.push(o.get(xn));break}if(a.length===1)a[0]&&ca(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ca(el(l))}}function ca(t,e){const n=V(t)?t:[...t];for(const s of n)s.computed&&Oc(s);for(const s of n)s.computed||Oc(s)}function Oc(t,e){(t!==ut||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Rm=Ya("__proto__,__v_isRef,__isVue"),nd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xa)),Am=nl(),km=nl(!1,!0),Om=nl(!0),Nc=Nm();function Nm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=se(this);for(let r=0,o=this.length;r<o;r++)tt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(se)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ks();const s=se(this)[e].apply(this,n);return Os(),s}}),t}function nl(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Gm:ad:e?od:rd).get(s))return s;const o=V(s);if(!t&&o&&ee(Nc,i))return Reflect.get(Nc,i,r);const a=Reflect.get(s,i,r);return(Xa(i)?nd.has(i):Rm(i))||(t||tt(s,"get",i),e)?a:He(a)?o&&Za(i)?a:a.value:ye(a)?t?ld(a):Ns(a):a}}const Pm=sd(),xm=sd(!0);function sd(t=!1){return function(n,s,i,r){let o=n[s];if(vs(o)&&He(o)&&!He(i))return!1;if(!t&&(!br(i)&&!vs(i)&&(o=se(o),i=se(i)),!V(n)&&He(o)&&!He(i)))return o.value=i,!0;const a=V(n)&&Za(s)?Number(s)<n.length:ee(n,s),l=Reflect.set(n,s,i,r);return n===se(r)&&(a?hi(i,o)&&Bt(n,"set",s,i):Bt(n,"add",s,i)),l}}function Dm(t,e){const n=ee(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Bt(t,"delete",e,void 0),s}function Mm(t,e){const n=Reflect.has(t,e);return(!Xa(e)||!nd.has(e))&&tt(t,"has",e),n}function Lm(t){return tt(t,"iterate",V(t)?"length":xn),Reflect.ownKeys(t)}const id={get:Am,set:Pm,deleteProperty:Dm,has:Mm,ownKeys:Lm},Fm={get:Om,set(t,e){return!0},deleteProperty(t,e){return!0}},Um=De({},id,{get:km,set:xm}),sl=t=>t,to=t=>Reflect.getPrototypeOf(t);function Ji(t,e,n=!1,s=!1){t=t.__v_raw;const i=se(t),r=se(e);n||(e!==r&&tt(i,"get",e),tt(i,"get",r));const{has:o}=to(i),a=s?sl:n?ol:fi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Qi(t,e=!1){const n=this.__v_raw,s=se(n),i=se(t);return e||(t!==i&&tt(s,"has",t),tt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Xi(t,e=!1){return t=t.__v_raw,!e&&tt(se(t),"iterate",xn),Reflect.get(t,"size",t)}function Pc(t){t=se(t);const e=se(this);return to(e).has.call(e,t)||(e.add(t),Bt(e,"add",t,t)),this}function xc(t,e){e=se(e);const n=se(this),{has:s,get:i}=to(n);let r=s.call(n,t);r||(t=se(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?hi(e,o)&&Bt(n,"set",t,e):Bt(n,"add",t,e),this}function Dc(t){const e=se(this),{has:n,get:s}=to(e);let i=n.call(e,t);i||(t=se(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Bt(e,"delete",t,void 0),r}function Mc(){const t=se(this),e=t.size!==0,n=t.clear();return e&&Bt(t,"clear",void 0,void 0),n}function Zi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=se(o),l=e?sl:t?ol:fi;return!t&&tt(a,"iterate",xn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function er(t,e,n){return function(...s){const i=this.__v_raw,r=se(i),o=cs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?sl:e?ol:fi;return!e&&tt(r,"iterate",l?la:xn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Kt(t){return function(...e){return t==="delete"?!1:this}}function Bm(){const t={get(r){return Ji(this,r)},get size(){return Xi(this)},has:Qi,add:Pc,set:xc,delete:Dc,clear:Mc,forEach:Zi(!1,!1)},e={get(r){return Ji(this,r,!1,!0)},get size(){return Xi(this)},has:Qi,add:Pc,set:xc,delete:Dc,clear:Mc,forEach:Zi(!1,!0)},n={get(r){return Ji(this,r,!0)},get size(){return Xi(this,!0)},has(r){return Qi.call(this,r,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:Zi(!0,!1)},s={get(r){return Ji(this,r,!0,!0)},get size(){return Xi(this,!0)},has(r){return Qi.call(this,r,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:Zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=er(r,!1,!1),n[r]=er(r,!0,!1),e[r]=er(r,!1,!0),s[r]=er(r,!0,!0)}),[t,n,e,s]}const[Hm,$m,jm,Wm]=Bm();function il(t,e){const n=e?t?Wm:jm:t?$m:Hm;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ee(n,i)&&i in s?n:s,i,r)}const Vm={get:il(!1,!1)},qm={get:il(!1,!0)},zm={get:il(!0,!1)},rd=new WeakMap,od=new WeakMap,ad=new WeakMap,Gm=new WeakMap;function Km(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ym(t){return t.__v_skip||!Object.isExtensible(t)?0:Km(vm(t))}function Ns(t){return vs(t)?t:rl(t,!1,id,Vm,rd)}function Jm(t){return rl(t,!1,Um,qm,od)}function ld(t){return rl(t,!0,Fm,zm,ad)}function rl(t,e,n,s,i){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Ym(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function us(t){return vs(t)?us(t.__v_raw):!!(t&&t.__v_isReactive)}function vs(t){return!!(t&&t.__v_isReadonly)}function br(t){return!!(t&&t.__v_isShallow)}function cd(t){return us(t)||vs(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function ud(t){return Er(t,"__v_skip",!0),t}const fi=t=>ye(t)?Ns(t):t,ol=t=>ye(t)?ld(t):t;function hd(t){ln&&ut&&(t=se(t),td(t.dep||(t.dep=el())))}function dd(t,e){t=se(t),t.dep&&ca(t.dep)}function He(t){return!!(t&&t.__v_isRef===!0)}function Qm(t){return fd(t,!1)}function Xm(t){return fd(t,!0)}function fd(t,e){return He(t)?t:new Zm(t,e)}class Zm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:se(e),this._value=n?e:fi(e)}get value(){return hd(this),this._value}set value(e){const n=this.__v_isShallow||br(e)||vs(e);e=n?e:se(e),hi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:fi(e),dd(this))}}function hs(t){return He(t)?t.value:t}const eg={get:(t,e,n)=>hs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return He(i)&&!He(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function pd(t){return us(t)?t:new Proxy(t,eg)}var _d;class tg{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[_d]=!1,this._dirty=!0,this.effect=new tl(e,()=>{this._dirty||(this._dirty=!0,dd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=se(this);return hd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}_d="__v_isReadonly";function ng(t,e,n=!1){let s,i;const r=z(t);return r?(s=t,i=_t):(s=t.get,i=t.set),new tg(s,i,r||!i,n)}function cn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){no(r,e,n)}return i}function it(t,e,n,s){if(z(t)){const r=cn(t,e,n,s);return r&&Yh(r)&&r.catch(o=>{no(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(it(t[r],e,n,s));return i}function no(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){cn(l,null,10,[t,o,a]);return}}sg(t,n,i,s)}function sg(t,e,n,s=!0){console.error(t)}let pi=!1,ua=!1;const Be=[];let It=0;const ds=[];let xt=null,An=0;const md=Promise.resolve();let al=null;function gd(t){const e=al||md;return t?e.then(this?t.bind(this):t):e}function ig(t){let e=It+1,n=Be.length;for(;e<n;){const s=e+n>>>1;_i(Be[s])<t?e=s+1:n=s}return e}function ll(t){(!Be.length||!Be.includes(t,pi&&t.allowRecurse?It+1:It))&&(t.id==null?Be.push(t):Be.splice(ig(t.id),0,t),yd())}function yd(){!pi&&!ua&&(ua=!0,al=md.then(Ed))}function rg(t){const e=Be.indexOf(t);e>It&&Be.splice(e,1)}function og(t){V(t)?ds.push(...t):(!xt||!xt.includes(t,t.allowRecurse?An+1:An))&&ds.push(t),yd()}function Lc(t,e=pi?It+1:0){for(;e<Be.length;e++){const n=Be[e];n&&n.pre&&(Be.splice(e,1),e--,n())}}function vd(t){if(ds.length){const e=[...new Set(ds)];if(ds.length=0,xt){xt.push(...e);return}for(xt=e,xt.sort((n,s)=>_i(n)-_i(s)),An=0;An<xt.length;An++)xt[An]();xt=null,An=0}}const _i=t=>t.id==null?1/0:t.id,ag=(t,e)=>{const n=_i(t)-_i(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ed(t){ua=!1,pi=!0,Be.sort(ag);const e=_t;try{for(It=0;It<Be.length;It++){const n=Be[It];n&&n.active!==!1&&cn(n,null,14)}}finally{It=0,Be.length=0,vd(),pi=!1,al=null,(Be.length||ds.length)&&Ed()}}function lg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ge;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ge;d&&(i=n.map(p=>Te(p)?p.trim():p)),h&&(i=n.map(di))}let a,l=s[a=No(e)]||s[a=No(Ot(e))];!l&&r&&(l=s[a=No(As(e))]),l&&it(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,it(c,t,6,i)}}function bd(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!z(t)){const l=c=>{const u=bd(c,e,!0);u&&(a=!0,De(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ye(t)&&s.set(t,null),null):(V(r)?r.forEach(l=>o[l]=null):De(o,r),ye(t)&&s.set(t,o),o)}function so(t,e){return!t||!Qr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,As(e))||ee(t,e))}let Fe=null,io=null;function wr(t){const e=Fe;return Fe=t,io=t&&t.type.__scopeId||null,e}function TA(t){io=t}function SA(){io=null}function cg(t,e=Fe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&zc(-1);const r=wr(e);let o;try{o=t(...i)}finally{wr(r),s._d&&zc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Po(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:m,inheritAttrs:g}=t;let T,I;const P=wr(t);try{if(n.shapeFlag&4){const F=i||s;T=Ct(u.call(F,F,h,r,p,d,m)),I=l}else{const F=e;T=Ct(F.length>1?F(r,{attrs:l,slots:a,emit:c}):F(r,null)),I=e.props?l:ug(l)}}catch(F){ni.length=0,no(F,t,1),T=Ve(ot)}let k=T;if(I&&g!==!1){const F=Object.keys(I),{shapeFlag:X}=k;F.length&&X&7&&(o&&F.some(Ja)&&(I=hg(I,o)),k=_n(k,I))}return n.dirs&&(k=_n(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),T=k,wr(P),T}const ug=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qr(n))&&((e||(e={}))[n]=t[n]);return e},hg=(t,e)=>{const n={};for(const s in t)(!Ja(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function dg(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Fc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!so(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Fc(s,o,c):!0:!!o;return!1}function Fc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!so(n,r))return!0}return!1}function fg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const pg=t=>t.__isSuspense;function _g(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):og(t)}function cr(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function rt(t,e,n=!1){const s=xe||Fe;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&z(e)?e.call(s.proxy):e}}function mg(t,e){return cl(t,null,{flush:"post"})}const tr={};function fs(t,e,n){return cl(t,e,n)}function cl(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ge){const a=xe;let l,c=!1,u=!1;if(He(t)?(l=()=>t.value,c=br(t)):us(t)?(l=()=>t,s=!0):V(t)?(u=!0,c=t.some(k=>us(k)||br(k)),l=()=>t.map(k=>{if(He(k))return k.value;if(us(k))return Nn(k);if(z(k))return cn(k,a,2)})):z(t)?e?l=()=>cn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),it(t,a,3,[d])}:l=_t,e&&s){const k=l;l=()=>Nn(k())}let h,d=k=>{h=I.onStop=()=>{cn(k,a,4)}},p;if(vi)if(d=_t,e?n&&it(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const k=ly();p=k.__watcherHandles||(k.__watcherHandles=[])}else return _t;let m=u?new Array(t.length).fill(tr):tr;const g=()=>{if(I.active)if(e){const k=I.run();(s||c||(u?k.some((F,X)=>hi(F,m[X])):hi(k,m)))&&(h&&h(),it(e,a,3,[k,m===tr?void 0:u&&m[0]===tr?[]:m,d]),m=k)}else I.run()};g.allowRecurse=!!e;let T;i==="sync"?T=g:i==="post"?T=()=>Ge(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),T=()=>ll(g));const I=new tl(l,T);e?n?g():m=I.run():i==="post"?Ge(I.run.bind(I),a&&a.suspense):I.run();const P=()=>{I.stop(),a&&a.scope&&Qa(a.scope.effects,I)};return p&&p.push(P),P}function gg(t,e,n){const s=this.proxy,i=Te(t)?t.includes(".")?wd(s,t):()=>s[t]:t.bind(s,s);let r;z(e)?r=e:(r=e.handler,n=e);const o=xe;Es(this);const a=cl(i,r.bind(s),n);return o?Es(o):Dn(),a}function wd(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Nn(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),He(t))Nn(t.value,e);else if(V(t))for(let n=0;n<t.length;n++)Nn(t[n],e);else if(Kh(t)||cs(t))t.forEach(n=>{Nn(n,e)});else if(Qh(t))for(const n in t)Nn(t[n],e);return t}function Cd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hl(()=>{t.isMounted=!0}),Ad(()=>{t.isUnmounting=!0}),t}const nt=[Function,Array],yg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nt,onEnter:nt,onAfterEnter:nt,onEnterCancelled:nt,onBeforeLeave:nt,onLeave:nt,onAfterLeave:nt,onLeaveCancelled:nt,onBeforeAppear:nt,onAppear:nt,onAfterAppear:nt,onAppearCancelled:nt},setup(t,{slots:e}){const n=yl(),s=Cd();let i;return()=>{const r=e.default&&ul(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const g of r)if(g.type!==ot){o=g;break}}const a=se(t),{mode:l}=a;if(s.isLeaving)return xo(o);const c=Uc(o);if(!c)return xo(o);const u=mi(c,a,s,n);gi(c,u);const h=n.subTree,d=h&&Uc(h);let p=!1;const{getTransitionKey:m}=c.type;if(m){const g=m();i===void 0?i=g:g!==i&&(i=g,p=!0)}if(d&&d.type!==ot&&(!kn(c,d)||p)){const g=mi(d,a,s,n);if(gi(d,g),l==="out-in")return s.isLeaving=!0,g.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},xo(o);l==="in-out"&&c.type!==ot&&(g.delayLeave=(T,I,P)=>{const k=Id(s,d);k[String(d.key)]=d,T._leaveCb=()=>{I(),T._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},vg=yg;function Id(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function mi(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:g,onAppear:T,onAfterAppear:I,onAppearCancelled:P}=e,k=String(t.key),F=Id(n,t),X=(W,re)=>{W&&it(W,s,9,re)},he=(W,re)=>{const ie=re[1];X(W,re),V(W)?W.every(Re=>Re.length<=1)&&ie():W.length<=1&&ie()},Ie={mode:r,persisted:o,beforeEnter(W){let re=a;if(!n.isMounted)if(i)re=g||a;else return;W._leaveCb&&W._leaveCb(!0);const ie=F[k];ie&&kn(t,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),X(re,[W])},enter(W){let re=l,ie=c,Re=u;if(!n.isMounted)if(i)re=T||l,ie=I||c,Re=P||u;else return;let M=!1;const _e=W._enterCb=Me=>{M||(M=!0,Me?X(Re,[W]):X(ie,[W]),Ie.delayedLeave&&Ie.delayedLeave(),W._enterCb=void 0)};re?he(re,[W,_e]):_e()},leave(W,re){const ie=String(t.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return re();X(h,[W]);let Re=!1;const M=W._leaveCb=_e=>{Re||(Re=!0,re(),_e?X(m,[W]):X(p,[W]),W._leaveCb=void 0,F[ie]===t&&delete F[ie])};F[ie]=t,d?he(d,[W,M]):M()},clone(W){return mi(W,e,n,s)}};return Ie}function xo(t){if(ro(t))return t=_n(t),t.children=null,t}function Uc(t){return ro(t)?t.children?t.children[0]:void 0:t}function gi(t,e){t.shapeFlag&6&&t.component?gi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ul(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ke?(o.patchFlag&128&&i++,s=s.concat(ul(o.children,e,a))):(e||o.type!==ot)&&s.push(a!=null?_n(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Td(t){return z(t)?{setup:t,name:t.name}:t}const ei=t=>!!t.type.__asyncLoader,ro=t=>t.type.__isKeepAlive;function Eg(t,e){Sd(t,"a",e)}function bg(t,e){Sd(t,"da",e)}function Sd(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(oo(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ro(i.parent.vnode)&&wg(s,e,n,i),i=i.parent}}function wg(t,e,n,s){const i=oo(e,t,s,!0);dl(()=>{Qa(s[e],i)},n)}function oo(t,e,n=xe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ks(),Es(n);const a=it(e,n,t,o);return Dn(),Os(),a});return s?i.unshift(r):i.push(r),r}}const jt=t=>(e,n=xe)=>(!vi||t==="sp")&&oo(t,(...s)=>e(...s),n),Cg=jt("bm"),hl=jt("m"),Ig=jt("bu"),Rd=jt("u"),Ad=jt("bum"),dl=jt("um"),Tg=jt("sp"),Sg=jt("rtg"),Rg=jt("rtc");function Ag(t,e=xe){oo("ec",t,e)}function RA(t,e){const n=Fe;if(n===null)return t;const s=co(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ge]=e[r];o&&(z(o)&&(o={mounted:o,updated:o}),o.deep&&Nn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function wn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ks(),it(l,n,8,[t.el,a,t,e]),Os())}}const fl="components",kg="directives";function AA(t,e){return pl(fl,t,!0,e)||t}const kd=Symbol();function kA(t){return Te(t)?pl(fl,t,!1)||t:t||kd}function OA(t){return pl(kg,t)}function pl(t,e,n=!0,s=!1){const i=Fe||xe;if(i){const r=i.type;if(t===fl){const a=ry(r,!1);if(a&&(a===e||a===Ot(e)||a===eo(Ot(e))))return r}const o=Bc(i[t]||r[t],e)||Bc(i.appContext[t],e);return!o&&s?r:o}}function Bc(t,e){return t&&(t[e]||t[Ot(e)]||t[eo(Ot(e))])}function NA(t,e,n,s){let i;const r=n&&n[s];if(V(t)||Te(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ye(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function PA(t,e,n={},s,i){if(Fe.isCE||Fe.parent&&ei(Fe.parent)&&Fe.parent.isCE)return e!=="default"&&(n.name=e),Ve("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),Bd();const o=r&&Od(r(n)),a=$d(Ke,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Od(t){return t.some(e=>Ir(e)?!(e.type===ot||e.type===Ke&&!Od(e.children)):!0)?t:null}const ha=t=>t?Vd(t)?co(t)||t.proxy:ha(t.parent):null,ti=De(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ha(t.parent),$root:t=>ha(t.root),$emit:t=>t.emit,$options:t=>_l(t),$forceUpdate:t=>t.f||(t.f=()=>ll(t.update)),$nextTick:t=>t.n||(t.n=gd.bind(t.proxy)),$watch:t=>gg.bind(t)}),Do=(t,e)=>t!==ge&&!t.__isScriptSetup&&ee(t,e),Og={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Do(s,e))return o[e]=1,s[e];if(i!==ge&&ee(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ee(c,e))return o[e]=3,r[e];if(n!==ge&&ee(n,e))return o[e]=4,n[e];da&&(o[e]=0)}}const u=ti[e];let h,d;if(u)return e==="$attrs"&&tt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ge&&ee(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ee(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Do(i,e)?(i[e]=n,!0):s!==ge&&ee(s,e)?(s[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ge&&ee(t,o)||Do(e,o)||(a=r[0])&&ee(a,o)||ee(s,o)||ee(ti,o)||ee(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let da=!0;function Ng(t){const e=_l(t),n=t.proxy,s=t.ctx;da=!1,e.beforeCreate&&Hc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:g,deactivated:T,beforeDestroy:I,beforeUnmount:P,destroyed:k,unmounted:F,render:X,renderTracked:he,renderTriggered:Ie,errorCaptured:W,serverPrefetch:re,expose:ie,inheritAttrs:Re,components:M,directives:_e,filters:Me}=e;if(c&&Pg(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const de in o){const ae=o[de];z(ae)&&(s[de]=ae.bind(n))}if(i){const de=i.call(n,n);ye(de)&&(t.data=Ns(de))}if(da=!0,r)for(const de in r){const ae=r[de],at=z(ae)?ae.bind(n,n):z(ae.get)?ae.get.bind(n,n):_t,bn=!z(ae)&&z(ae.set)?ae.set.bind(n):_t,lt=st({get:at,set:bn});Object.defineProperty(s,de,{enumerable:!0,configurable:!0,get:()=>lt.value,set:ze=>lt.value=ze})}if(a)for(const de in a)Nd(a[de],s,n,de);if(l){const de=z(l)?l.call(n):l;Reflect.ownKeys(de).forEach(ae=>{cr(ae,de[ae])})}u&&Hc(u,t,"c");function ve(de,ae){V(ae)?ae.forEach(at=>de(at.bind(n))):ae&&de(ae.bind(n))}if(ve(Cg,h),ve(hl,d),ve(Ig,p),ve(Rd,m),ve(Eg,g),ve(bg,T),ve(Ag,W),ve(Rg,he),ve(Sg,Ie),ve(Ad,P),ve(dl,F),ve(Tg,re),V(ie))if(ie.length){const de=t.exposed||(t.exposed={});ie.forEach(ae=>{Object.defineProperty(de,ae,{get:()=>n[ae],set:at=>n[ae]=at})})}else t.exposed||(t.exposed={});X&&t.render===_t&&(t.render=X),Re!=null&&(t.inheritAttrs=Re),M&&(t.components=M),_e&&(t.directives=_e)}function Pg(t,e,n=_t,s=!1){V(t)&&(t=fa(t));for(const i in t){const r=t[i];let o;ye(r)?"default"in r?o=rt(r.from||i,r.default,!0):o=rt(r.from||i):o=rt(r),He(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Hc(t,e,n){it(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Nd(t,e,n,s){const i=s.includes(".")?wd(n,s):()=>n[s];if(Te(t)){const r=e[t];z(r)&&fs(i,r)}else if(z(t))fs(i,t.bind(n));else if(ye(t))if(V(t))t.forEach(r=>Nd(r,e,n,s));else{const r=z(t.handler)?t.handler.bind(n):e[t.handler];z(r)&&fs(i,r,t)}}function _l(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Cr(l,c,o,!0)),Cr(l,e,o)),ye(e)&&r.set(e,l),l}function Cr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Cr(t,r,n,!0),i&&i.forEach(o=>Cr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=xg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xg={data:$c,props:Tn,emits:Tn,methods:Tn,computed:Tn,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:Tn,directives:Tn,watch:Mg,provide:$c,inject:Dg};function $c(t,e){return e?t?function(){return De(z(t)?t.call(this,this):t,z(e)?e.call(this,this):e)}:e:t}function Dg(t,e){return Tn(fa(t),fa(e))}function fa(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function Tn(t,e){return t?De(De(Object.create(null),t),e):e}function Mg(t,e){if(!t)return e;if(!e)return t;const n=De(Object.create(null),t);for(const s in e)n[s]=We(t[s],e[s]);return n}function Lg(t,e,n,s=!1){const i={},r={};Er(r,lo,1),t.propsDefaults=Object.create(null),Pd(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Jm(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Fg(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=se(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(so(t.emitsOptions,d))continue;const p=e[d];if(l)if(ee(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const m=Ot(d);i[m]=pa(l,a,m,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Pd(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!ee(e,h)&&((u=As(h))===h||!ee(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=pa(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ee(e,h))&&(delete r[h],c=!0)}c&&Bt(t,"set","$attrs")}function Pd(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ar(l))continue;const c=e[l];let u;i&&ee(i,u=Ot(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:so(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=se(n),c=a||ge;for(let u=0;u<r.length;u++){const h=r[u];n[h]=pa(i,l,h,c[h],t,!ee(c,h))}}return o}function pa(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ee(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&z(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Es(i),s=c[n]=l.call(null,e),Dn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===As(n))&&(s=!0))}return s}function xd(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!z(t)){const u=h=>{l=!0;const[d,p]=xd(h,e,!0);De(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ye(t)&&s.set(t,ls),ls;if(V(r))for(let u=0;u<r.length;u++){const h=Ot(r[u]);jc(h)&&(o[h]=ge)}else if(r)for(const u in r){const h=Ot(u);if(jc(h)){const d=r[u],p=o[h]=V(d)||z(d)?{type:d}:Object.assign({},d);if(p){const m=qc(Boolean,p.type),g=qc(String,p.type);p[0]=m>-1,p[1]=g<0||m<g,(m>-1||ee(p,"default"))&&a.push(h)}}}const c=[o,a];return ye(t)&&s.set(t,c),c}function jc(t){return t[0]!=="$"}function Wc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Vc(t,e){return Wc(t)===Wc(e)}function qc(t,e){return V(e)?e.findIndex(n=>Vc(n,t)):z(e)&&Vc(e,t)?0:-1}const Dd=t=>t[0]==="_"||t==="$stable",ml=t=>V(t)?t.map(Ct):[Ct(t)],Ug=(t,e,n)=>{if(e._n)return e;const s=cg((...i)=>ml(e(...i)),n);return s._c=!1,s},Md=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Dd(i))continue;const r=t[i];if(z(r))e[i]=Ug(i,r,s);else if(r!=null){const o=ml(r);e[i]=()=>o}}},Ld=(t,e)=>{const n=ml(e);t.slots.default=()=>n},Bg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),Er(e,"_",n)):Md(e,t.slots={})}else t.slots={},e&&Ld(t,e);Er(t.slots,lo,1)},Hg=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ge;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(De(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Md(e,i)),o=e}else e&&(Ld(t,e),o={default:1});if(r)for(const a in i)!Dd(a)&&!(a in o)&&delete i[a]};function Fd(){return{app:null,config:{isNativeTag:mm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $g=0;function jg(t,e){return function(s,i=null){z(s)||(s=Object.assign({},s)),i!=null&&!ye(i)&&(i=null);const r=Fd(),o=new Set;let a=!1;const l=r.app={_uid:$g++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:cy,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&z(c.install)?(o.add(c),c.install(l,...u)):z(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Ve(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,co(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function _a(t,e,n,s,i=!1){if(V(t)){t.forEach((d,p)=>_a(d,e&&(V(e)?e[p]:e),n,s,i));return}if(ei(s)&&!i)return;const r=s.shapeFlag&4?co(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ge?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Te(c)?(u[c]=null,ee(h,c)&&(h[c]=null)):He(c)&&(c.value=null)),z(l))cn(l,a,12,[o,u]);else{const d=Te(l),p=He(l);if(d||p){const m=()=>{if(t.f){const g=d?ee(h,l)?h[l]:u[l]:l.value;i?V(g)&&Qa(g,r):V(g)?g.includes(r)||g.push(r):d?(u[l]=[r],ee(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ee(h,l)&&(h[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Ge(m,n)):m()}}}const Ge=_g;function Wg(t){return Vg(t)}function Vg(t,e){const n=wm();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=_t,insertStaticContent:m}=t,g=(f,_,y,E=null,w=null,A=null,x=!1,S=null,O=!!_.dynamicChildren)=>{if(f===_)return;f&&!kn(f,_)&&(E=N(f),ze(f,w,A,!0),f=null),_.patchFlag===-2&&(O=!1,_.dynamicChildren=null);const{type:C,ref:B,shapeFlag:L}=_;switch(C){case ao:T(f,_,y,E);break;case ot:I(f,_,y,E);break;case ur:f==null&&P(_,y,E,x);break;case Ke:M(f,_,y,E,w,A,x,S,O);break;default:L&1?X(f,_,y,E,w,A,x,S,O):L&6?_e(f,_,y,E,w,A,x,S,O):(L&64||L&128)&&C.process(f,_,y,E,w,A,x,S,O,Z)}B!=null&&w&&_a(B,f&&f.ref,A,_||f,!_)},T=(f,_,y,E)=>{if(f==null)s(_.el=a(_.children),y,E);else{const w=_.el=f.el;_.children!==f.children&&c(w,_.children)}},I=(f,_,y,E)=>{f==null?s(_.el=l(_.children||""),y,E):_.el=f.el},P=(f,_,y,E)=>{[f.el,f.anchor]=m(f.children,_,y,E,f.el,f.anchor)},k=({el:f,anchor:_},y,E)=>{let w;for(;f&&f!==_;)w=d(f),s(f,y,E),f=w;s(_,y,E)},F=({el:f,anchor:_})=>{let y;for(;f&&f!==_;)y=d(f),i(f),f=y;i(_)},X=(f,_,y,E,w,A,x,S,O)=>{x=x||_.type==="svg",f==null?he(_,y,E,w,A,x,S,O):re(f,_,w,A,x,S,O)},he=(f,_,y,E,w,A,x,S)=>{let O,C;const{type:B,props:L,shapeFlag:H,transition:q,dirs:J}=f;if(O=f.el=o(f.type,A,L&&L.is,L),H&8?u(O,f.children):H&16&&W(f.children,O,null,E,w,A&&B!=="foreignObject",x,S),J&&wn(f,null,E,"created"),L){for(const le in L)le!=="value"&&!ar(le)&&r(O,le,null,L[le],A,f.children,E,w,D);"value"in L&&r(O,"value",null,L.value),(C=L.onVnodeBeforeMount)&&bt(C,E,f)}Ie(O,f,f.scopeId,x,E),J&&wn(f,null,E,"beforeMount");const fe=(!w||w&&!w.pendingBranch)&&q&&!q.persisted;fe&&q.beforeEnter(O),s(O,_,y),((C=L&&L.onVnodeMounted)||fe||J)&&Ge(()=>{C&&bt(C,E,f),fe&&q.enter(O),J&&wn(f,null,E,"mounted")},w)},Ie=(f,_,y,E,w)=>{if(y&&p(f,y),E)for(let A=0;A<E.length;A++)p(f,E[A]);if(w){let A=w.subTree;if(_===A){const x=w.vnode;Ie(f,x,x.scopeId,x.slotScopeIds,w.parent)}}},W=(f,_,y,E,w,A,x,S,O=0)=>{for(let C=O;C<f.length;C++){const B=f[C]=S?en(f[C]):Ct(f[C]);g(null,B,_,y,E,w,A,x,S)}},re=(f,_,y,E,w,A,x)=>{const S=_.el=f.el;let{patchFlag:O,dynamicChildren:C,dirs:B}=_;O|=f.patchFlag&16;const L=f.props||ge,H=_.props||ge;let q;y&&Cn(y,!1),(q=H.onVnodeBeforeUpdate)&&bt(q,y,_,f),B&&wn(_,f,y,"beforeUpdate"),y&&Cn(y,!0);const J=w&&_.type!=="foreignObject";if(C?ie(f.dynamicChildren,C,S,y,E,J,A):x||ae(f,_,S,null,y,E,J,A,!1),O>0){if(O&16)Re(S,_,L,H,y,E,w);else if(O&2&&L.class!==H.class&&r(S,"class",null,H.class,w),O&4&&r(S,"style",L.style,H.style,w),O&8){const fe=_.dynamicProps;for(let le=0;le<fe.length;le++){const Se=fe[le],ct=L[Se],Xn=H[Se];(Xn!==ct||Se==="value")&&r(S,Se,ct,Xn,w,f.children,y,E,D)}}O&1&&f.children!==_.children&&u(S,_.children)}else!x&&C==null&&Re(S,_,L,H,y,E,w);((q=H.onVnodeUpdated)||B)&&Ge(()=>{q&&bt(q,y,_,f),B&&wn(_,f,y,"updated")},E)},ie=(f,_,y,E,w,A,x)=>{for(let S=0;S<_.length;S++){const O=f[S],C=_[S],B=O.el&&(O.type===Ke||!kn(O,C)||O.shapeFlag&70)?h(O.el):y;g(O,C,B,null,E,w,A,x,!0)}},Re=(f,_,y,E,w,A,x)=>{if(y!==E){if(y!==ge)for(const S in y)!ar(S)&&!(S in E)&&r(f,S,y[S],null,x,_.children,w,A,D);for(const S in E){if(ar(S))continue;const O=E[S],C=y[S];O!==C&&S!=="value"&&r(f,S,C,O,x,_.children,w,A,D)}"value"in E&&r(f,"value",y.value,E.value)}},M=(f,_,y,E,w,A,x,S,O)=>{const C=_.el=f?f.el:a(""),B=_.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:H,slotScopeIds:q}=_;q&&(S=S?S.concat(q):q),f==null?(s(C,y,E),s(B,y,E),W(_.children,y,B,w,A,x,S,O)):L>0&&L&64&&H&&f.dynamicChildren?(ie(f.dynamicChildren,H,y,w,A,x,S),(_.key!=null||w&&_===w.subTree)&&Ud(f,_,!0)):ae(f,_,y,B,w,A,x,S,O)},_e=(f,_,y,E,w,A,x,S,O)=>{_.slotScopeIds=S,f==null?_.shapeFlag&512?w.ctx.activate(_,y,E,x,O):Me(_,y,E,w,A,x,O):Gt(f,_,O)},Me=(f,_,y,E,w,A,x)=>{const S=f.component=ey(f,E,w);if(ro(f)&&(S.ctx.renderer=Z),ty(S),S.asyncDep){if(w&&w.registerDep(S,ve),!f.el){const O=S.subTree=Ve(ot);I(null,O,_,y)}return}ve(S,f,_,y,w,A,x)},Gt=(f,_,y)=>{const E=_.component=f.component;if(dg(f,_,y))if(E.asyncDep&&!E.asyncResolved){de(E,_,y);return}else E.next=_,rg(E.update),E.update();else _.el=f.el,E.vnode=_},ve=(f,_,y,E,w,A,x)=>{const S=()=>{if(f.isMounted){let{next:B,bu:L,u:H,parent:q,vnode:J}=f,fe=B,le;Cn(f,!1),B?(B.el=J.el,de(f,B,x)):B=J,L&&lr(L),(le=B.props&&B.props.onVnodeBeforeUpdate)&&bt(le,q,B,J),Cn(f,!0);const Se=Po(f),ct=f.subTree;f.subTree=Se,g(ct,Se,h(ct.el),N(ct),f,w,A),B.el=Se.el,fe===null&&fg(f,Se.el),H&&Ge(H,w),(le=B.props&&B.props.onVnodeUpdated)&&Ge(()=>bt(le,q,B,J),w)}else{let B;const{el:L,props:H}=_,{bm:q,m:J,parent:fe}=f,le=ei(_);if(Cn(f,!1),q&&lr(q),!le&&(B=H&&H.onVnodeBeforeMount)&&bt(B,fe,_),Cn(f,!0),L&&G){const Se=()=>{f.subTree=Po(f),G(L,f.subTree,f,w,null)};le?_.type.__asyncLoader().then(()=>!f.isUnmounted&&Se()):Se()}else{const Se=f.subTree=Po(f);g(null,Se,y,E,f,w,A),_.el=Se.el}if(J&&Ge(J,w),!le&&(B=H&&H.onVnodeMounted)){const Se=_;Ge(()=>bt(B,fe,Se),w)}(_.shapeFlag&256||fe&&ei(fe.vnode)&&fe.vnode.shapeFlag&256)&&f.a&&Ge(f.a,w),f.isMounted=!0,_=y=E=null}},O=f.effect=new tl(S,()=>ll(C),f.scope),C=f.update=()=>O.run();C.id=f.uid,Cn(f,!0),C()},de=(f,_,y)=>{_.component=f;const E=f.vnode.props;f.vnode=_,f.next=null,Fg(f,_.props,E,y),Hg(f,_.children,y),ks(),Lc(),Os()},ae=(f,_,y,E,w,A,x,S,O=!1)=>{const C=f&&f.children,B=f?f.shapeFlag:0,L=_.children,{patchFlag:H,shapeFlag:q}=_;if(H>0){if(H&128){bn(C,L,y,E,w,A,x,S,O);return}else if(H&256){at(C,L,y,E,w,A,x,S,O);return}}q&8?(B&16&&D(C,w,A),L!==C&&u(y,L)):B&16?q&16?bn(C,L,y,E,w,A,x,S,O):D(C,w,A,!0):(B&8&&u(y,""),q&16&&W(L,y,E,w,A,x,S,O))},at=(f,_,y,E,w,A,x,S,O)=>{f=f||ls,_=_||ls;const C=f.length,B=_.length,L=Math.min(C,B);let H;for(H=0;H<L;H++){const q=_[H]=O?en(_[H]):Ct(_[H]);g(f[H],q,y,null,w,A,x,S,O)}C>B?D(f,w,A,!0,!1,L):W(_,y,E,w,A,x,S,O,L)},bn=(f,_,y,E,w,A,x,S,O)=>{let C=0;const B=_.length;let L=f.length-1,H=B-1;for(;C<=L&&C<=H;){const q=f[C],J=_[C]=O?en(_[C]):Ct(_[C]);if(kn(q,J))g(q,J,y,null,w,A,x,S,O);else break;C++}for(;C<=L&&C<=H;){const q=f[L],J=_[H]=O?en(_[H]):Ct(_[H]);if(kn(q,J))g(q,J,y,null,w,A,x,S,O);else break;L--,H--}if(C>L){if(C<=H){const q=H+1,J=q<B?_[q].el:E;for(;C<=H;)g(null,_[C]=O?en(_[C]):Ct(_[C]),y,J,w,A,x,S,O),C++}}else if(C>H)for(;C<=L;)ze(f[C],w,A,!0),C++;else{const q=C,J=C,fe=new Map;for(C=J;C<=H;C++){const Xe=_[C]=O?en(_[C]):Ct(_[C]);Xe.key!=null&&fe.set(Xe.key,C)}let le,Se=0;const ct=H-J+1;let Xn=!1,Tc=0;const $s=new Array(ct);for(C=0;C<ct;C++)$s[C]=0;for(C=q;C<=L;C++){const Xe=f[C];if(Se>=ct){ze(Xe,w,A,!0);continue}let Et;if(Xe.key!=null)Et=fe.get(Xe.key);else for(le=J;le<=H;le++)if($s[le-J]===0&&kn(Xe,_[le])){Et=le;break}Et===void 0?ze(Xe,w,A,!0):($s[Et-J]=C+1,Et>=Tc?Tc=Et:Xn=!0,g(Xe,_[Et],y,null,w,A,x,S,O),Se++)}const Sc=Xn?qg($s):ls;for(le=Sc.length-1,C=ct-1;C>=0;C--){const Xe=J+C,Et=_[Xe],Rc=Xe+1<B?_[Xe+1].el:E;$s[C]===0?g(null,Et,y,Rc,w,A,x,S,O):Xn&&(le<0||C!==Sc[le]?lt(Et,y,Rc,2):le--)}}},lt=(f,_,y,E,w=null)=>{const{el:A,type:x,transition:S,children:O,shapeFlag:C}=f;if(C&6){lt(f.component.subTree,_,y,E);return}if(C&128){f.suspense.move(_,y,E);return}if(C&64){x.move(f,_,y,Z);return}if(x===Ke){s(A,_,y);for(let L=0;L<O.length;L++)lt(O[L],_,y,E);s(f.anchor,_,y);return}if(x===ur){k(f,_,y);return}if(E!==2&&C&1&&S)if(E===0)S.beforeEnter(A),s(A,_,y),Ge(()=>S.enter(A),w);else{const{leave:L,delayLeave:H,afterLeave:q}=S,J=()=>s(A,_,y),fe=()=>{L(A,()=>{J(),q&&q()})};H?H(A,J,fe):fe()}else s(A,_,y)},ze=(f,_,y,E=!1,w=!1)=>{const{type:A,props:x,ref:S,children:O,dynamicChildren:C,shapeFlag:B,patchFlag:L,dirs:H}=f;if(S!=null&&_a(S,null,y,f,!0),B&256){_.ctx.deactivate(f);return}const q=B&1&&H,J=!ei(f);let fe;if(J&&(fe=x&&x.onVnodeBeforeUnmount)&&bt(fe,_,f),B&6)b(f.component,y,E);else{if(B&128){f.suspense.unmount(y,E);return}q&&wn(f,null,_,"beforeUnmount"),B&64?f.type.remove(f,_,y,w,Z,E):C&&(A!==Ke||L>0&&L&64)?D(C,_,y,!1,!0):(A===Ke&&L&384||!w&&B&16)&&D(O,_,y),E&&Qn(f)}(J&&(fe=x&&x.onVnodeUnmounted)||q)&&Ge(()=>{fe&&bt(fe,_,f),q&&wn(f,null,_,"unmounted")},y)},Qn=f=>{const{type:_,el:y,anchor:E,transition:w}=f;if(_===Ke){Yi(y,E);return}if(_===ur){F(f);return}const A=()=>{i(y),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:x,delayLeave:S}=w,O=()=>x(y,A);S?S(f.el,A,O):O()}else A()},Yi=(f,_)=>{let y;for(;f!==_;)y=d(f),i(f),f=y;i(_)},b=(f,_,y)=>{const{bum:E,scope:w,update:A,subTree:x,um:S}=f;E&&lr(E),w.stop(),A&&(A.active=!1,ze(x,f,_,y)),S&&Ge(S,_),Ge(()=>{f.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},D=(f,_,y,E=!1,w=!1,A=0)=>{for(let x=A;x<f.length;x++)ze(f[x],_,y,E,w)},N=f=>f.shapeFlag&6?N(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),U=(f,_,y)=>{f==null?_._vnode&&ze(_._vnode,null,null,!0):g(_._vnode||null,f,_,null,null,null,y),Lc(),vd(),_._vnode=f},Z={p:g,um:ze,m:lt,r:Qn,mt:Me,mc:W,pc:ae,pbc:ie,n:N,o:t};let Ee,G;return e&&([Ee,G]=e(Z)),{render:U,hydrate:Ee,createApp:jg(U,Ee)}}function Cn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ud(t,e,n=!1){const s=t.children,i=e.children;if(V(s)&&V(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=en(i[r]),a.el=o.el),n||Ud(o,a)),a.type===ao&&(a.el=o.el)}}function qg(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const zg=t=>t.__isTeleport,Ke=Symbol(void 0),ao=Symbol(void 0),ot=Symbol(void 0),ur=Symbol(void 0),ni=[];let dt=null;function Bd(t=!1){ni.push(dt=t?null:[])}function Gg(){ni.pop(),dt=ni[ni.length-1]||null}let yi=1;function zc(t){yi+=t}function Hd(t){return t.dynamicChildren=yi>0?dt||ls:null,Gg(),yi>0&&dt&&dt.push(t),t}function xA(t,e,n,s,i,r){return Hd(Wd(t,e,n,s,i,r,!0))}function $d(t,e,n,s,i){return Hd(Ve(t,e,n,s,i,!0))}function Ir(t){return t?t.__v_isVNode===!0:!1}function kn(t,e){return t.type===e.type&&t.key===e.key}const lo="__vInternal",jd=({key:t})=>t??null,hr=({ref:t,ref_key:e,ref_for:n})=>t!=null?Te(t)||He(t)||z(t)?{i:Fe,r:t,k:e,f:!!n}:t:null;function Wd(t,e=null,n=null,s=0,i=null,r=t===Ke?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jd(e),ref:e&&hr(e),scopeId:io,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Fe};return a?(gl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Te(n)?8:16),yi>0&&!o&&dt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&dt.push(l),l}const Ve=Kg;function Kg(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===kd)&&(t=ot),Ir(t)){const a=_n(t,e,!0);return n&&gl(a,n),yi>0&&!r&&dt&&(a.shapeFlag&6?dt[dt.indexOf(t)]=a:dt.push(a)),a.patchFlag|=-2,a}if(oy(t)&&(t=t.__vccOpts),e){e=Yg(e);let{class:a,style:l}=e;a&&!Te(a)&&(e.class=Jr(a)),ye(l)&&(cd(l)&&!V(l)&&(l=De({},l)),e.style=Yr(l))}const o=Te(t)?1:pg(t)?128:zg(t)?64:ye(t)?4:z(t)?2:0;return Wd(t,e,n,s,i,o,r,!0)}function Yg(t){return t?cd(t)||lo in t?De({},t):t:null}function _n(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Qg(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&jd(a),ref:e&&e.ref?n&&i?V(i)?i.concat(hr(e)):[i,hr(e)]:hr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_n(t.ssContent),ssFallback:t.ssFallback&&_n(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Jg(t=" ",e=0){return Ve(ao,null,t,e)}function DA(t="",e=!1){return e?(Bd(),$d(ot,null,t)):Ve(ot,null,t)}function Ct(t){return t==null||typeof t=="boolean"?Ve(ot):V(t)?Ve(Ke,null,t.slice()):typeof t=="object"?en(t):Ve(ao,null,String(t))}function en(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_n(t)}function gl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),gl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(lo in e)?e._ctx=Fe:i===3&&Fe&&(Fe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else z(e)?(e={default:e,_ctx:Fe},n=32):(e=String(e),s&64?(n=16,e=[Jg(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Jr([e.class,s.class]));else if(i==="style")e.style=Yr([e.style,s.style]);else if(Qr(i)){const r=e[i],o=s[i];o&&r!==o&&!(V(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function bt(t,e,n,s=null){it(t,e,7,[n,s])}const Xg=Fd();let Zg=0;function ey(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Xg,r={uid:Zg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xd(s,i),emitsOptions:bd(s,i),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:s.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=lg.bind(null,r),t.ce&&t.ce(r),r}let xe=null;const yl=()=>xe||Fe,Es=t=>{xe=t,t.scope.on()},Dn=()=>{xe&&xe.scope.off(),xe=null};function Vd(t){return t.vnode.shapeFlag&4}let vi=!1;function ty(t,e=!1){vi=e;const{props:n,children:s}=t.vnode,i=Vd(t);Lg(t,n,i,e),Bg(t,s);const r=i?ny(t,e):void 0;return vi=!1,r}function ny(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ud(new Proxy(t.ctx,Og));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?iy(t):null;Es(t),ks();const r=cn(s,t,0,[t.props,i]);if(Os(),Dn(),Yh(r)){if(r.then(Dn,Dn),e)return r.then(o=>{Gc(t,o,e)}).catch(o=>{no(o,t,0)});t.asyncDep=r}else Gc(t,r,e)}else qd(t,e)}function Gc(t,e,n){z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=pd(e)),qd(t,n)}let Kc;function qd(t,e,n){const s=t.type;if(!t.render){if(!e&&Kc&&!s.render){const i=s.template||_l(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=De(De({isCustomElement:r,delimiters:a},o),l);s.render=Kc(i,c)}}t.render=s.render||_t}Es(t),ks(),Ng(t),Os(),Dn()}function sy(t){return new Proxy(t.attrs,{get(e,n){return tt(t,"get","$attrs"),e[n]}})}function iy(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=sy(t))},slots:t.slots,emit:t.emit,expose:e}}function co(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(pd(ud(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ti)return ti[n](t)},has(e,n){return n in e||n in ti}}))}function ry(t,e=!0){return z(t)?t.displayName||t.name:t.name||e&&t.__name}function oy(t){return z(t)&&"__vccOpts"in t}const st=(t,e)=>ng(t,e,vi);function zd(t,e,n){const s=arguments.length;return s===2?ye(e)&&!V(e)?Ir(e)?Ve(t,null,[e]):Ve(t,e):Ve(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ir(n)&&(n=[n]),Ve(t,e,n))}const ay=Symbol(""),ly=()=>rt(ay),cy="3.2.45",uy="http://www.w3.org/2000/svg",On=typeof document<"u"?document:null,Yc=On&&On.createElement("template"),hy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?On.createElementNS(uy,t):On.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>On.createTextNode(t),createComment:t=>On.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>On.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Yc.innerHTML=s?`<svg>${t}</svg>`:t;const a=Yc.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function dy(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function fy(t,e,n){const s=t.style,i=Te(n);if(n&&!i){for(const r in n)ma(s,r,n[r]);if(e&&!Te(e))for(const r in e)n[r]==null&&ma(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Jc=/\s*!important$/;function ma(t,e,n){if(V(n))n.forEach(s=>ma(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=py(t,e);Jc.test(n)?t.setProperty(As(s),n.replace(Jc,""),"important"):t[s]=n}}const Qc=["Webkit","Moz","ms"],Mo={};function py(t,e){const n=Mo[e];if(n)return n;let s=Ot(e);if(s!=="filter"&&s in t)return Mo[e]=s;s=eo(s);for(let i=0;i<Qc.length;i++){const r=Qc[i]+s;if(r in t)return Mo[e]=r}return e}const Xc="http://www.w3.org/1999/xlink";function _y(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Xc,e.slice(6,e.length)):t.setAttributeNS(Xc,e,n);else{const r=_m(e);n==null||r&&!zh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function my(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=zh(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ss(t,e,n,s){t.addEventListener(e,n,s)}function gy(t,e,n,s){t.removeEventListener(e,n,s)}function yy(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=vy(e);if(s){const c=r[e]=wy(s,i);ss(t,a,c,l)}else o&&(gy(t,a,o,l),r[e]=void 0)}}const Zc=/(?:Once|Passive|Capture)$/;function vy(t){let e;if(Zc.test(t)){e={};let s;for(;s=t.match(Zc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):As(t.slice(2)),e]}let Lo=0;const Ey=Promise.resolve(),by=()=>Lo||(Ey.then(()=>Lo=0),Lo=Date.now());function wy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;it(Cy(s,n.value),e,5,[s])};return n.value=t,n.attached=by(),n}function Cy(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const eu=/^on[a-z]/,Iy=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?dy(t,s,i):e==="style"?fy(t,n,s):Qr(e)?Ja(e)||yy(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ty(t,e,s,i))?my(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),_y(t,e,s,i))};function Ty(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&eu.test(e)&&z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||eu.test(e)&&Te(n)?!1:e in t}function MA(t){const e=yl();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>ya(r,i))},s=()=>{const i=t(e.proxy);ga(e.subTree,i),n(i)};mg(s),hl(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),dl(()=>i.disconnect())})}function ga(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ga(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)ya(t.el,e);else if(t.type===Ke)t.children.forEach(n=>ga(n,e));else if(t.type===ur){let{el:n,anchor:s}=t;for(;n&&(ya(n,e),n!==s);)n=n.nextSibling}}function ya(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const Yt="transition",js="animation",Gd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Sy=De({},vg.props,Gd),In=(t,e=[])=>{V(t)?t.forEach(n=>n(...e)):t&&t(...e)},tu=t=>t?V(t)?t.some(e=>e.length>1):t.length>1:!1;function Ry(t){const e={};for(const M in t)M in Gd||(e[M]=t[M]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=Ay(i),g=m&&m[0],T=m&&m[1],{onBeforeEnter:I,onEnter:P,onEnterCancelled:k,onLeave:F,onLeaveCancelled:X,onBeforeAppear:he=I,onAppear:Ie=P,onAppearCancelled:W=k}=e,re=(M,_e,Me)=>{Zt(M,_e?u:a),Zt(M,_e?c:o),Me&&Me()},ie=(M,_e)=>{M._isLeaving=!1,Zt(M,h),Zt(M,p),Zt(M,d),_e&&_e()},Re=M=>(_e,Me)=>{const Gt=M?Ie:P,ve=()=>re(_e,M,Me);In(Gt,[_e,ve]),nu(()=>{Zt(_e,M?l:r),Pt(_e,M?u:a),tu(Gt)||su(_e,s,g,ve)})};return De(e,{onBeforeEnter(M){In(I,[M]),Pt(M,r),Pt(M,o)},onBeforeAppear(M){In(he,[M]),Pt(M,l),Pt(M,c)},onEnter:Re(!1),onAppear:Re(!0),onLeave(M,_e){M._isLeaving=!0;const Me=()=>ie(M,_e);Pt(M,h),Yd(),Pt(M,d),nu(()=>{M._isLeaving&&(Zt(M,h),Pt(M,p),tu(F)||su(M,s,T,Me))}),In(F,[M,Me])},onEnterCancelled(M){re(M,!1),In(k,[M])},onAppearCancelled(M){re(M,!0),In(W,[M])},onLeaveCancelled(M){ie(M),In(X,[M])}})}function Ay(t){if(t==null)return null;if(ye(t))return[Fo(t.enter),Fo(t.leave)];{const e=Fo(t);return[e,e]}}function Fo(t){return di(t)}function Pt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Zt(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function nu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ky=0;function su(t,e,n,s){const i=t._endId=++ky,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Kd(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=p=>{p.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function Kd(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${Yt}Delay`),r=s(`${Yt}Duration`),o=iu(i,r),a=s(`${js}Delay`),l=s(`${js}Duration`),c=iu(a,l);let u=null,h=0,d=0;e===Yt?o>0&&(u=Yt,h=o,d=r.length):e===js?c>0&&(u=js,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Yt:js:null,d=u?u===Yt?r.length:l.length:0);const p=u===Yt&&/\b(transform|all)(,|$)/.test(s(`${Yt}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:p}}function iu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>ru(n)+ru(t[s])))}function ru(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Yd(){return document.body.offsetHeight}const Jd=new WeakMap,Qd=new WeakMap,Oy={name:"TransitionGroup",props:De({},Sy,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=yl(),s=Cd();let i,r;return Rd(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Dy(i[0].el,n.vnode.el,o))return;i.forEach(Ny),i.forEach(Py);const a=i.filter(xy);Yd(),a.forEach(l=>{const c=l.el,u=c.style;Pt(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,Zt(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=se(t),a=Ry(o);let l=o.tag||Ke;i=r,r=e.default?ul(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&gi(u,mi(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];gi(u,mi(u,a,s,n)),Jd.set(u,u.el.getBoundingClientRect())}return Ve(l,null,r)}}},LA=Oy;function Ny(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Py(t){Qd.set(t,t.el.getBoundingClientRect())}function xy(t){const e=Jd.get(t),n=Qd.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function Dy(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=Kd(s);return i.removeChild(s),r}const ou=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>lr(e,n):e};function My(t){t.target.composing=!0}function au(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const FA={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=ou(i);const r=s||i.props&&i.props.type==="number";ss(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=di(a)),t._assign(a)}),n&&ss(t,"change",()=>{t.value=t.value.trim()}),e||(ss(t,"compositionstart",My),ss(t,"compositionend",au),ss(t,"change",au))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=ou(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&di(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Ly=["ctrl","shift","alt","meta"],Fy={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ly.some(n=>t[`${n}Key`]&&!e.includes(n))},UA=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Fy[e[i]];if(r&&r(n,e))return}return t(n,...s)},BA={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ws(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ws(t,!0),s.enter(t)):s.leave(t,()=>{Ws(t,!1)}):Ws(t,e))},beforeUnmount(t,{value:e}){Ws(t,e)}};function Ws(t,e){t.style.display=e?t._vod:"none"}const Uy=De({patchProp:Iy},hy);let lu;function By(){return lu||(lu=Wg(Uy))}const HA=(...t)=>{const e=By().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Hy(s);if(!i)return;const r=e._component;!z(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Hy(t){return Te(t)?document.querySelector(t):t}function $y(){return Xd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Xd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const jy=typeof Proxy=="function",Wy="devtools-plugin:setup",Vy="plugin:settings:set";let Zn,va;function qy(){var t;return Zn!==void 0||(typeof window<"u"&&window.performance?(Zn=!0,va=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Zn=!0,va=global.perf_hooks.performance):Zn=!1),Zn}function zy(){return qy()?va.now():Date.now()}class Gy{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return zy()}},n&&n.on(Vy,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Ky(t,e){const n=t,s=Xd(),i=$y(),r=jy&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(Wy,t,e);else{const o=r?new Gy(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Zd="store";function $A(t){return t===void 0&&(t=null),rt(t!==null?t:Zd)}function Ps(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Yy(t){return t!==null&&typeof t=="object"}function Jy(t){return t&&typeof t.then=="function"}function Qy(t,e){return function(){return t(e)}}function ef(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function tf(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;uo(t,n,[],t._modules.root,!0),vl(t,n,e)}function vl(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,r={};Ps(i,function(o,a){r[a]=Qy(o,t),Object.defineProperty(t.getters,a,{get:function(){return r[a]()},enumerable:!0})}),t._state=Ns({data:e}),t.strict&&nv(t),s&&n&&t._withCommit(function(){s.data=null})}function uo(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var a=El(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=s.state})}var c=s.context=Xy(t,o,n);s.forEachMutation(function(u,h){var d=o+h;Zy(t,d,u,c)}),s.forEachAction(function(u,h){var d=u.root?h:o+h,p=u.handler||u;ev(t,d,p,c)}),s.forEachGetter(function(u,h){var d=o+h;tv(t,d,u,c)}),s.forEachChild(function(u,h){uo(t,e,n.concat(h),u,i)})}function Xy(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,a){var l=Tr(r,o,a),c=l.payload,u=l.options,h=l.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,c)},commit:s?t.commit:function(r,o,a){var l=Tr(r,o,a),c=l.payload,u=l.options,h=l.type;(!u||!u.root)&&(h=e+h),t.commit(h,c,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return nf(t,e)}},state:{get:function(){return El(t.state,n)}}}),i}function nf(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Zy(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function ev(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return Jy(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function tv(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function nv(t){fs(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function El(t,e){return e.reduce(function(n,s){return n[s]},t)}function Tr(t,e,n){return Yy(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var sv="vuex bindings",cu="vuex:mutations",Uo="vuex:actions",es="vuex",iv=0;function rv(t,e){Ky({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[sv]},function(n){n.addTimelineLayer({id:cu,label:"Vuex Mutations",color:uu}),n.addTimelineLayer({id:Uo,label:"Vuex Actions",color:uu}),n.addInspector({id:es,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===es)if(s.filter){var i=[];af(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[of(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===es){var i=s.nodeId;nf(e,i),s.state=lv(uv(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===es){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(es),n.sendInspectorState(es),n.addTimelineEvent({layerId:cu,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=iv++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:Uo,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:Uo,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var uu=8702998,ov=6710886,av=16777215,sf={label:"namespaced",textColor:av,backgroundColor:ov};function rf(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function of(t,e){return{id:e||"root",label:rf(e),tags:t.namespaced?[sf]:[],children:Object.keys(t._children).map(function(n){return of(t._children[n],e+n+"/")})}}function af(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[sf]:[]}),Object.keys(e._children).forEach(function(i){af(t,e._children[i],n,s+i+"/")})}function lv(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=cv(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?rf(o):o,editable:!1,value:Ea(function(){return r[o]})}})}return i}function cv(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=Ea(function(){return t[n]})}else e[n]=Ea(function(){return t[n]})}),e}function uv(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Ea(t){try{return t()}catch(e){return e}}var vt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},lf={namespaced:{configurable:!0}};lf.namespaced.get=function(){return!!this._rawModule.namespaced};vt.prototype.addChild=function(e,n){this._children[e]=n};vt.prototype.removeChild=function(e){delete this._children[e]};vt.prototype.getChild=function(e){return this._children[e]};vt.prototype.hasChild=function(e){return e in this._children};vt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};vt.prototype.forEachChild=function(e){Ps(this._children,e)};vt.prototype.forEachGetter=function(e){this._rawModule.getters&&Ps(this._rawModule.getters,e)};vt.prototype.forEachAction=function(e){this._rawModule.actions&&Ps(this._rawModule.actions,e)};vt.prototype.forEachMutation=function(e){this._rawModule.mutations&&Ps(this._rawModule.mutations,e)};Object.defineProperties(vt.prototype,lf);var Kn=function(e){this.register([],e,!1)};Kn.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};Kn.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};Kn.prototype.update=function(e){cf([],this.root,e)};Kn.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new vt(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&Ps(n.modules,function(a,l){i.register(e.concat(l),a,s)})};Kn.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);i&&i.runtime&&n.removeChild(s)};Kn.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function cf(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;cf(t.concat(s),e.getChild(s),n.modules[s])}}function jA(t){return new Qe(t)}var Qe=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Kn(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(d,p){return l.call(o,d,p)},this.commit=function(d,p,m){return c.call(o,d,p,m)},this.strict=i;var u=this._modules.root.state;uo(this,u,[],this._modules.root),vl(this,u),s.forEach(function(h){return h(n)})},bl={state:{configurable:!0}};Qe.prototype.install=function(e,n){e.provide(n||Zd,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&rv(e,this)};bl.state.get=function(){return this._state.data};bl.state.set=function(t){};Qe.prototype.commit=function(e,n,s){var i=this,r=Tr(e,n,s),o=r.type,a=r.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(l,i.state)}))};Qe.prototype.dispatch=function(e,n){var s=this,i=Tr(e,n),r=i.type,o=i.payload,a={type:r,payload:o},l=this._actions[r];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,h){c.then(function(d){try{s._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,s.state)})}catch{}u(d)},function(d){try{s._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,s.state,d)})}catch{}h(d)})})}};Qe.prototype.subscribe=function(e,n){return ef(e,this._subscribers,n)};Qe.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return ef(s,this._actionSubscribers,n)};Qe.prototype.watch=function(e,n,s){var i=this;return fs(function(){return e(i.state,i.getters)},n,Object.assign({},s))};Qe.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Qe.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),uo(this,this.state,e,this._modules.get(e),s.preserveState),vl(this,this.state)};Qe.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=El(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),tf(this)};Qe.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Qe.prototype.hotUpdate=function(e){this._modules.update(e),tf(this,!0)};Qe.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Qe.prototype,bl);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const is=typeof window<"u";function hv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const oe=Object.assign;function Bo(t,e){const n={};for(const s in e){const i=e[s];n[s]=gt(i)?i.map(t):t(i)}return n}const si=()=>{},gt=Array.isArray,dv=/\/$/,fv=t=>t.replace(dv,"");function Ho(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=gv(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function pv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _v(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&bs(e.matched[s],n.matched[i])&&uf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function uf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mv(t[n],e[n]))return!1;return!0}function mv(t,e){return gt(t)?du(t,e):gt(e)?du(e,t):t===e}function du(t,e){return gt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function gv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Ei;(function(t){t.pop="pop",t.push="push"})(Ei||(Ei={}));var ii;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ii||(ii={}));function yv(t){if(!t)if(is){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fv(t)}const vv=/^[^#]+#/;function Ev(t,e){return t.replace(vv,"#")+e}function bv(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ho=()=>({left:window.pageXOffset,top:window.pageYOffset});function wv(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=bv(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function fu(t,e){return(history.state?history.state.position-e:-1)+t}const ba=new Map;function Cv(t,e){ba.set(t,e)}function Iv(t){const e=ba.get(t);return ba.delete(t),e}let Tv=()=>location.protocol+"//"+location.host;function hf(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),hu(l,"")}return hu(n,t)+s+i}function Sv(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const p=hf(t,location),m=n.value,g=e.value;let T=0;if(d){if(n.value=p,e.value=d,o&&o===m){o=null;return}T=g?d.position-g.position:0}else s(p);i.forEach(I=>{I(n.value,m,{delta:T,type:Ei.pop,direction:T?T>0?ii.forward:ii.back:ii.unknown})})};function l(){o=n.value}function c(d){i.push(d);const p=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(oe({},d.state,{scroll:ho()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function pu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?ho():null}}function Rv(t){const{history:e,location:n}=window,s={value:hf(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Tv()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=oe({},e.state,pu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=oe({},i.value,e.state,{forward:l,scroll:ho()});r(u.current,u,!0);const h=oe({},pu(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function WA(t){t=yv(t);const e=Rv(t),n=Sv(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=oe({location:"",base:t,go:s,createHref:Ev.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Av(t){return typeof t=="string"||t&&typeof t=="object"}function df(t){return typeof t=="string"||typeof t=="symbol"}const Jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ff=Symbol("");var _u;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_u||(_u={}));function ws(t,e){return oe(new Error,{type:t,[ff]:!0},e)}function Nt(t,e){return t instanceof Error&&ff in t&&(e==null||!!(t.type&e))}const mu="[^/]+?",kv={sensitive:!1,strict:!1,start:!0,end:!0},Ov=/[.+*?^${}()[\]/\\]/g;function Nv(t,e){const n=oe({},kv,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(Ov,"\\$&"),p+=40;else if(d.type===1){const{value:m,repeatable:g,optional:T,regexp:I}=d;r.push({name:m,repeatable:g,optional:T});const P=I||mu;if(P!==mu){p+=10;try{new RegExp(`(${P})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${m}" (${P}): `+F.message)}}let k=g?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(k=T&&c.length<2?`(?:/${k})`:"/"+k),T&&(k+="?"),i+=k,p+=20,T&&(p+=-8),g&&(p+=-20),P===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",m=r[d-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:g,optional:T}=p,I=m in c?c[m]:"";if(gt(I)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const P=gt(I)?I.join("/"):I;if(!P)if(T)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function Pv(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function xv(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Pv(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(gu(s))return 1;if(gu(i))return-1}return i.length-s.length}function gu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Dv={type:0,value:""},Mv=/[a-zA-Z0-9_]/;function Lv(t){if(!t)return[[]];if(t==="/")return[[Dv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:Mv.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function Fv(t,e,n){const s=Nv(Lv(t.path),n),i=oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Uv(t,e){const n=[],s=new Map;e=Eu({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const p=!d,m=Bv(u);m.aliasOf=d&&d.record;const g=Eu(e,u),T=[m];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of k)T.push(oe({},m,{components:d?d.record.components:m.components,path:F,aliasOf:d?d.record:m}))}let I,P;for(const k of T){const{path:F}=k;if(h&&F[0]!=="/"){const X=h.record.path,he=X[X.length-1]==="/"?"":"/";k.path=h.record.path+(F&&he+F)}if(I=Fv(k,h,g),d?d.alias.push(I):(P=P||I,P!==I&&P.alias.push(I),p&&u.name&&!vu(I)&&o(u.name)),m.children){const X=m.children;for(let he=0;he<X.length;he++)r(X[he],I,d&&d.children[he])}d=d||I,(I.record.components&&Object.keys(I.record.components).length||I.record.name||I.record.redirect)&&l(I)}return P?()=>{o(P)}:si}function o(u){if(df(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&xv(u,n[h])>=0&&(u.record.path!==n[h].record.path||!pf(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!vu(u)&&s.set(u.record.name,u)}function c(u,h){let d,p={},m,g;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw ws(1,{location:u});g=d.record.name,p=oe(yu(h.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),u.params&&yu(u.params,d.keys.map(P=>P.name))),m=d.stringify(p)}else if("path"in u)m=u.path,d=n.find(P=>P.re.test(m)),d&&(p=d.parse(m),g=d.record.name);else{if(d=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!d)throw ws(1,{location:u,currentLocation:h});g=d.record.name,p=oe({},h.params,u.params),m=d.stringify(p)}const T=[];let I=d;for(;I;)T.unshift(I.record),I=I.parent;return{name:g,path:m,params:p,matched:T,meta:$v(T)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function yu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Bv(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Hv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Hv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function vu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $v(t){return t.reduce((e,n)=>oe(e,n.meta),{})}function Eu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function pf(t,e){return e.children.some(n=>n===t||pf(t,n))}const _f=/#/g,jv=/&/g,Wv=/\//g,Vv=/=/g,qv=/\?/g,mf=/\+/g,zv=/%5B/g,Gv=/%5D/g,gf=/%5E/g,Kv=/%60/g,yf=/%7B/g,Yv=/%7C/g,vf=/%7D/g,Jv=/%20/g;function wl(t){return encodeURI(""+t).replace(Yv,"|").replace(zv,"[").replace(Gv,"]")}function Qv(t){return wl(t).replace(yf,"{").replace(vf,"}").replace(gf,"^")}function wa(t){return wl(t).replace(mf,"%2B").replace(Jv,"+").replace(_f,"%23").replace(jv,"%26").replace(Kv,"`").replace(yf,"{").replace(vf,"}").replace(gf,"^")}function Xv(t){return wa(t).replace(Vv,"%3D")}function Zv(t){return wl(t).replace(_f,"%23").replace(qv,"%3F")}function eE(t){return t==null?"":Zv(t).replace(Wv,"%2F")}function Sr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function tE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(mf," "),o=r.indexOf("="),a=Sr(o<0?r:r.slice(0,o)),l=o<0?null:Sr(r.slice(o+1));if(a in e){let c=e[a];gt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function bu(t){let e="";for(let n in t){const s=t[n];if(n=Xv(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(gt(s)?s.map(r=>r&&wa(r)):[s&&wa(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function nE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=gt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const sE=Symbol(""),wu=Symbol(""),fo=Symbol(""),Cl=Symbol(""),Ca=Symbol("");function Vs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function tn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ws(4,{from:n,to:e})):h instanceof Error?a(h):Av(h)?a(ws(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function $o(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(iE(a)){const c=(a.__vccOpts||a)[e];c&&i.push(tn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=hv(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&tn(d,n,s,r,o)()}))}}return i}function iE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Cu(t){const e=rt(fo),n=rt(Cl),s=st(()=>e.resolve(hs(t.to))),i=st(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(bs.bind(null,u));if(d>-1)return d;const p=Iu(l[c-2]);return c>1&&Iu(u)===p&&h[h.length-1].path!==p?h.findIndex(bs.bind(null,l[c-2])):d}),r=st(()=>i.value>-1&&lE(n.params,s.value.params)),o=st(()=>i.value>-1&&i.value===n.matched.length-1&&uf(n.params,s.value.params));function a(l={}){return aE(l)?e[hs(t.replace)?"replace":"push"](hs(t.to)).catch(si):Promise.resolve()}return{route:s,href:st(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const rE=Td({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Cu,setup(t,{slots:e}){const n=Ns(Cu(t)),{options:s}=rt(fo),i=st(()=>({[Tu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Tu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:zd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),oE=rE;function aE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lE(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!gt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Iu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Tu=(t,e,n)=>t??e??n,cE=Td({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=rt(Ca),i=st(()=>t.route||s.value),r=rt(wu,0),o=st(()=>{let c=hs(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=st(()=>i.value.matched[o.value]);cr(wu,st(()=>o.value+1)),cr(sE,a),cr(Ca,i);const l=Qm();return fs(()=>[l.value,a.value,t.name],([c,u,h],[d,p,m])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!bs(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Su(n.default,{Component:d,route:c});const p=h.props[u],m=p?p===!0?c.params:typeof p=="function"?p(c):p:null,T=zd(d,oe({},m,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Su(n.default,{Component:T,route:c})||T}}});function Su(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const uE=cE;function VA(t){const e=Uv(t.routes,t),n=t.parseQuery||tE,s=t.stringifyQuery||bu,i=t.history,r=Vs(),o=Vs(),a=Vs(),l=Xm(Jt);let c=Jt;is&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Bo.bind(null,b=>""+b),h=Bo.bind(null,eE),d=Bo.bind(null,Sr);function p(b,D){let N,U;return df(b)?(N=e.getRecordMatcher(b),U=D):U=b,e.addRoute(U,N)}function m(b){const D=e.getRecordMatcher(b);D&&e.removeRoute(D)}function g(){return e.getRoutes().map(b=>b.record)}function T(b){return!!e.getRecordMatcher(b)}function I(b,D){if(D=oe({},D||l.value),typeof b=="string"){const f=Ho(n,b,D.path),_=e.resolve({path:f.path},D),y=i.createHref(f.fullPath);return oe(f,_,{params:d(_.params),hash:Sr(f.hash),redirectedFrom:void 0,href:y})}let N;if("path"in b)N=oe({},b,{path:Ho(n,b.path,D.path).path});else{const f=oe({},b.params);for(const _ in f)f[_]==null&&delete f[_];N=oe({},b,{params:h(b.params)}),D.params=h(D.params)}const U=e.resolve(N,D),Z=b.hash||"";U.params=u(d(U.params));const Ee=pv(s,oe({},b,{hash:Qv(Z),path:U.path})),G=i.createHref(Ee);return oe({fullPath:Ee,hash:Z,query:s===bu?nE(b.query):b.query||{}},U,{redirectedFrom:void 0,href:G})}function P(b){return typeof b=="string"?Ho(n,b,l.value.path):oe({},b)}function k(b,D){if(c!==b)return ws(8,{from:D,to:b})}function F(b){return Ie(b)}function X(b){return F(oe(P(b),{replace:!0}))}function he(b){const D=b.matched[b.matched.length-1];if(D&&D.redirect){const{redirect:N}=D;let U=typeof N=="function"?N(b):N;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=P(U):{path:U},U.params={}),oe({query:b.query,hash:b.hash,params:"path"in U?{}:b.params},U)}}function Ie(b,D){const N=c=I(b),U=l.value,Z=b.state,Ee=b.force,G=b.replace===!0,f=he(N);if(f)return Ie(oe(P(f),{state:typeof f=="object"?oe({},Z,f.state):Z,force:Ee,replace:G}),D||N);const _=N;_.redirectedFrom=D;let y;return!Ee&&_v(s,U,N)&&(y=ws(16,{to:_,from:U}),bn(U,U,!0,!1)),(y?Promise.resolve(y):re(_,U)).catch(E=>Nt(E)?Nt(E,2)?E:at(E):de(E,_,U)).then(E=>{if(E){if(Nt(E,2))return Ie(oe({replace:G},P(E.to),{state:typeof E.to=="object"?oe({},Z,E.to.state):Z,force:Ee}),D||_)}else E=Re(_,U,!0,G,Z);return ie(_,U,E),E})}function W(b,D){const N=k(b,D);return N?Promise.reject(N):Promise.resolve()}function re(b,D){let N;const[U,Z,Ee]=hE(b,D);N=$o(U.reverse(),"beforeRouteLeave",b,D);for(const f of U)f.leaveGuards.forEach(_=>{N.push(tn(_,b,D))});const G=W.bind(null,b,D);return N.push(G),ts(N).then(()=>{N=[];for(const f of r.list())N.push(tn(f,b,D));return N.push(G),ts(N)}).then(()=>{N=$o(Z,"beforeRouteUpdate",b,D);for(const f of Z)f.updateGuards.forEach(_=>{N.push(tn(_,b,D))});return N.push(G),ts(N)}).then(()=>{N=[];for(const f of b.matched)if(f.beforeEnter&&!D.matched.includes(f))if(gt(f.beforeEnter))for(const _ of f.beforeEnter)N.push(tn(_,b,D));else N.push(tn(f.beforeEnter,b,D));return N.push(G),ts(N)}).then(()=>(b.matched.forEach(f=>f.enterCallbacks={}),N=$o(Ee,"beforeRouteEnter",b,D),N.push(G),ts(N))).then(()=>{N=[];for(const f of o.list())N.push(tn(f,b,D));return N.push(G),ts(N)}).catch(f=>Nt(f,8)?f:Promise.reject(f))}function ie(b,D,N){for(const U of a.list())U(b,D,N)}function Re(b,D,N,U,Z){const Ee=k(b,D);if(Ee)return Ee;const G=D===Jt,f=is?history.state:{};N&&(U||G?i.replace(b.fullPath,oe({scroll:G&&f&&f.scroll},Z)):i.push(b.fullPath,Z)),l.value=b,bn(b,D,N,G),at()}let M;function _e(){M||(M=i.listen((b,D,N)=>{if(!Yi.listening)return;const U=I(b),Z=he(U);if(Z){Ie(oe(Z,{replace:!0}),U).catch(si);return}c=U;const Ee=l.value;is&&Cv(fu(Ee.fullPath,N.delta),ho()),re(U,Ee).catch(G=>Nt(G,12)?G:Nt(G,2)?(Ie(G.to,U).then(f=>{Nt(f,20)&&!N.delta&&N.type===Ei.pop&&i.go(-1,!1)}).catch(si),Promise.reject()):(N.delta&&i.go(-N.delta,!1),de(G,U,Ee))).then(G=>{G=G||Re(U,Ee,!1),G&&(N.delta&&!Nt(G,8)?i.go(-N.delta,!1):N.type===Ei.pop&&Nt(G,20)&&i.go(-1,!1)),ie(U,Ee,G)}).catch(si)}))}let Me=Vs(),Gt=Vs(),ve;function de(b,D,N){at(b);const U=Gt.list();return U.length?U.forEach(Z=>Z(b,D,N)):console.error(b),Promise.reject(b)}function ae(){return ve&&l.value!==Jt?Promise.resolve():new Promise((b,D)=>{Me.add([b,D])})}function at(b){return ve||(ve=!b,_e(),Me.list().forEach(([D,N])=>b?N(b):D()),Me.reset()),b}function bn(b,D,N,U){const{scrollBehavior:Z}=t;if(!is||!Z)return Promise.resolve();const Ee=!N&&Iv(fu(b.fullPath,0))||(U||!N)&&history.state&&history.state.scroll||null;return gd().then(()=>Z(b,D,Ee)).then(G=>G&&wv(G)).catch(G=>de(G,b,D))}const lt=b=>i.go(b);let ze;const Qn=new Set,Yi={currentRoute:l,listening:!0,addRoute:p,removeRoute:m,hasRoute:T,getRoutes:g,resolve:I,options:t,push:F,replace:X,go:lt,back:()=>lt(-1),forward:()=>lt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Gt.add,isReady:ae,install(b){const D=this;b.component("RouterLink",oE),b.component("RouterView",uE),b.config.globalProperties.$router=D,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>hs(l)}),is&&!ze&&l.value===Jt&&(ze=!0,F(i.location).catch(Z=>{}));const N={};for(const Z in Jt)N[Z]=st(()=>l.value[Z]);b.provide(fo,D),b.provide(Cl,Ns(N)),b.provide(Ca,l);const U=b.unmount;Qn.add(b),b.unmount=function(){Qn.delete(b),Qn.size<1&&(c=Jt,M&&M(),M=null,l.value=Jt,ze=!1,ve=!1),U()}}};return Yi}function ts(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function hE(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>bs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>bs(c,l))||i.push(l))}return[n,s,i]}function qA(){return rt(fo)}function zA(){return rt(Cl)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw xs(e)},xs=function(t){return new Error("Firebase Database ("+Ef.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Il={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},wf=function(t){const e=bf(t);return Il.encodeByteArray(e,!0)},Rr=function(t){return wf(t).replace(/\./g,"")},Ar=function(t){try{return Il.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){return Cf(void 0,t)}function Cf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pE(n)||(t[n]=Cf(t[n],e[n]));return t}function pE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=()=>_E().__FIREBASE_DEFAULTS__,gE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ar(t[1]);return e&&JSON.parse(e)},po=()=>{try{return mE()||gE()||yE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},If=t=>{var e,n;return(n=(e=po())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Tf=t=>{const e=If(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},vE=()=>{var t;return(t=po())===null||t===void 0?void 0:t.config},Sf=t=>{var e;return(e=po())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Rr(JSON.stringify(n)),Rr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function EE(){var t;const e=(t=po())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Af(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wE(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kf(){return Ef.NODE_ADMIN===!0}function CE(){try{return typeof indexedDB=="object"}catch{return!1}}function IE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="FirebaseError";class Wt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=TE,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?SE(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Wt(i,a,s)}}function SE(t,e){return t.replace(RE,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const RE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){return JSON.parse(t)}function Ae(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=bi(Ar(r[0])||""),n=bi(Ar(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},AE=function(t){const e=Of(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kE=function(t){const e=Of(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ia(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Or(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ru(r)&&Ru(o)){if(!Or(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ru(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function NE(t,e){const n=new PE(t,e);return n.subscribe.bind(n)}class PE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");xE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=jo),i.error===void 0&&(i.error=jo),i.complete===void 0&&(i.complete=jo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jo(){}function Nf(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,R(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_o=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t){return t&&t._delegate?t._delegate:t}class mn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Tl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FE(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:LE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LE(t){return t===Sn?void 0:t}function FE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ME(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const BE={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},HE=ce.INFO,$E={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},jE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=$E[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rl{constructor(e){this.name=e,this._logLevel=HE,this._logHandler=jE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const WE=(t,e)=>e.some(n=>t instanceof n);let Au,ku;function VE(){return Au||(Au=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qE(){return ku||(ku=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pf=new WeakMap,Ta=new WeakMap,xf=new WeakMap,Wo=new WeakMap,Al=new WeakMap;function zE(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(un(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pf.set(n,t)}).catch(()=>{}),Al.set(e,t),e}function GE(t){if(Ta.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ta.set(t,e)}let Sa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ta.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KE(t){Sa=t(Sa)}function YE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Vo(this),e,...n);return xf.set(s,e.sort?e.sort():[e]),un(s)}:qE().includes(t)?function(...e){return t.apply(Vo(this),e),un(Pf.get(this))}:function(...e){return un(t.apply(Vo(this),e))}}function JE(t){return typeof t=="function"?YE(t):(t instanceof IDBTransaction&&GE(t),WE(t,VE())?new Proxy(t,Sa):t)}function un(t){if(t instanceof IDBRequest)return zE(t);if(Wo.has(t))return Wo.get(t);const e=JE(t);return e!==t&&(Wo.set(t,e),Al.set(e,t)),e}const Vo=t=>Al.get(t);function QE(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=un(o);return s&&o.addEventListener("upgradeneeded",l=>{s(un(o.result),l.oldVersion,l.newVersion,un(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const XE=["get","getKey","getAll","getAllKeys","count"],ZE=["put","add","delete","clear"],qo=new Map;function Ou(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qo.get(e))return qo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ZE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||XE.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return qo.set(e,r),r}KE(t=>({...t,get:(e,n,s)=>Ou(e,n)||t.get(e,n,s),has:(e,n)=>!!Ou(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function tb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ra="@firebase/app",Nu="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Rl("@firebase/app"),nb="@firebase/app-compat",sb="@firebase/analytics-compat",ib="@firebase/analytics",rb="@firebase/app-check-compat",ob="@firebase/app-check",ab="@firebase/auth",lb="@firebase/auth-compat",cb="@firebase/database",ub="@firebase/database-compat",hb="@firebase/functions",db="@firebase/functions-compat",fb="@firebase/installations",pb="@firebase/installations-compat",_b="@firebase/messaging",mb="@firebase/messaging-compat",gb="@firebase/performance",yb="@firebase/performance-compat",vb="@firebase/remote-config",Eb="@firebase/remote-config-compat",bb="@firebase/storage",wb="@firebase/storage-compat",Cb="@firebase/firestore",Ib="@firebase/firestore-compat",Tb="firebase",Sb="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="[DEFAULT]",Rb={[Ra]:"fire-core",[nb]:"fire-core-compat",[ib]:"fire-analytics",[sb]:"fire-analytics-compat",[ob]:"fire-app-check",[rb]:"fire-app-check-compat",[ab]:"fire-auth",[lb]:"fire-auth-compat",[cb]:"fire-rtdb",[ub]:"fire-rtdb-compat",[hb]:"fire-fn",[db]:"fire-fn-compat",[fb]:"fire-iid",[pb]:"fire-iid-compat",[_b]:"fire-fcm",[mb]:"fire-fcm-compat",[gb]:"fire-perf",[yb]:"fire-perf-compat",[vb]:"fire-rc",[Eb]:"fire-rc-compat",[bb]:"fire-gcs",[wb]:"fire-gcs-compat",[Cb]:"fire-fst",[Ib]:"fire-fst-compat","fire-js":"fire-js",[Tb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new Map,ka=new Map;function Ab(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bn(t){const e=t.name;if(ka.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;ka.set(e,t);for(const n of Nr.values())Ab(n,t);return!0}function mo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hn=new Di("app","Firebase",kb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=Sb;function Nb(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Aa,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw hn.create("bad-app-name",{appName:String(i)});if(n||(n=vE()),!n)throw hn.create("no-options");const r=Nr.get(i);if(r){if(Or(n,r.options)&&Or(s,r.config))return r;throw hn.create("duplicate-app",{appName:i})}const o=new UE(i);for(const l of ka.values())o.addComponent(l);const a=new Ob(n,s,o);return Nr.set(i,a),a}function kl(t=Aa){const e=Nr.get(t);if(!e&&t===Aa)return Nb();if(!e)throw hn.create("no-app",{appName:t});return e}function Rt(t,e,n){var s;let i=(s=Rb[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(a.join(" "));return}Bn(new mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="firebase-heartbeat-database",xb=1,wi="firebase-heartbeat-store";let zo=null;function Df(){return zo||(zo=QE(Pb,xb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wi)}}}).catch(t=>{throw hn.create("idb-open",{originalErrorMessage:t.message})})),zo}async function Db(t){try{return(await Df()).transaction(wi).objectStore(wi).get(Mf(t))}catch(e){if(e instanceof Wt)Un.warn(e.message);else{const n=hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function Pu(t,e){try{const s=(await Df()).transaction(wi,"readwrite");return await s.objectStore(wi).put(e,Mf(t)),s.done}catch(n){if(n instanceof Wt)Un.warn(n.message);else{const s=hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(s.message)}}}function Mf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=1024,Lb=30*24*60*60*1e3;class Fb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Lb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xu(),{heartbeatsToSend:n,unsentEntries:s}=Ub(this._heartbeatsCache.heartbeats),i=Rr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xu(){return new Date().toISOString().substring(0,10)}function Ub(t,e=Mb){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Du(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Du(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Bb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CE()?IE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Db(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Du(t){return Rr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t){Bn(new mn("platform-logger",e=>new eb(e),"PRIVATE")),Bn(new mn("heartbeat",e=>new Fb(e),"PRIVATE")),Rt(Ra,Nu,t),Rt(Ra,Nu,"esm2017"),Rt("fire-js","")}Hb("");function Ol(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Lf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $b=Lf,Ff=new Di("auth","Firebase",Lf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=new Rl("@firebase/auth");function dr(t,...e){Mu.logLevel<=ce.ERROR&&Mu.error(`Auth (${Ms}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,...e){throw Nl(t,...e)}function At(t,...e){return Nl(t,...e)}function jb(t,e,n){const s=Object.assign(Object.assign({},$b()),{[e]:n});return new Di("auth","Firebase",s).create(e,{appName:t.name})}function Nl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ff.create(t,...e)}function $(t,e,...n){if(!t)throw Nl(e,...n)}function Dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dr(e),new Error(e)}function Ht(t,e){t||Dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new Map;function Mt(t){Ht(t instanceof Function,"Expected a class definition");let e=Lu.get(t);return e?(Ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lu.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(t,e){const n=mo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Or(r,e??{}))return i;yt(i,"already-initialized")}return n.initialize({options:e})}function Vb(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qb(){return Fu()==="http:"||Fu()==="https:"}function Fu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qb()||bE()||"connection"in navigator)?navigator.onLine:!0}function Gb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=Sl()||Af()}get(){return zb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=new Mi(3e4,6e4);function Ls(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yn(t,e,n,s,i={}){return Bf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ds(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Uf.fetch()(Hf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Bf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Kb),e);try{const i=new Jb(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw nr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw nr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw nr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw nr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw jb(t,u,c);yt(t,u)}}catch(i){if(i instanceof Wt)throw i;yt(t,"network-request-failed")}}async function Li(t,e,n,s,i={}){const r=await Yn(t,e,n,s,i);return"mfaPendingCredential"in r&&yt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Hf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Pl(t.config,i):`${t.config.apiScheme}://${i}`}class Jb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(At(this.auth,"network-request-failed")),Yb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=At(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qb(t,e){return Yn(t,"POST","/v1/accounts:delete",e)}async function Xb(t,e){return Yn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zb(t,e=!1){const n=we(t),s=await n.getIdToken(e),i=xl(s);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ri(Go(i.auth_time)),issuedAtTime:ri(Go(i.iat)),expirationTime:ri(Go(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Go(t){return Number(t)*1e3}function xl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return dr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ar(n);return i?JSON.parse(i):(dr("Failed to decode base64 JWT payload"),null)}catch(i){return dr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ew(t){const e=xl(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Wt&&tw(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function tw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Hn(t,Xb(n,{idToken:s}));$(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?rw(r.providerUserInfo):[],a=iw(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new $f(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function sw(t){const e=we(t);await Pr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iw(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function rw(t){return t.map(e=>{var{providerId:n}=e,s=Ol(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ow(t,e){const n=await Bf(t,{},async()=>{const s=Ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Hf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Uf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ew(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await ow(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ci;return s&&($(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&($(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ci,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ol(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new $f(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Hn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zb(this,e)}reload(){return sw(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Pr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hn(this,Qb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:F,isAnonymous:X,providerData:he,stsTokenManager:Ie}=n;$(k&&Ie,e,"internal-error");const W=Ci.fromJSON(this.name,Ie);$(typeof k=="string",e,"internal-error"),Qt(h,e.name),Qt(d,e.name),$(typeof F=="boolean",e,"internal-error"),$(typeof X=="boolean",e,"internal-error"),Qt(p,e.name),Qt(m,e.name),Qt(g,e.name),Qt(T,e.name),Qt(I,e.name),Qt(P,e.name);const re=new Mn({uid:k,auth:e,email:d,emailVerified:F,displayName:h,isAnonymous:X,photoURL:m,phoneNumber:p,tenantId:g,stsTokenManager:W,createdAt:I,lastLoginAt:P});return he&&Array.isArray(he)&&(re.providerData=he.map(ie=>Object.assign({},ie))),T&&(re._redirectEventId=T),re}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ci;i.updateFromServerResponse(n);const r=new Mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Pr(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jf.type="NONE";const Uu=jf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=fr(this.userKey,i.apiKey,r),this.fullPersistenceKey=fr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ps(Mt(Uu),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Mt(Uu);const o=fr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Mn._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ps(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ps(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gf(e))return"Blackberry";if(Kf(e))return"Webos";if(Dl(e))return"Safari";if((e.includes("chrome/")||Vf(e))&&!e.includes("edge/"))return"Chrome";if(zf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Wf(t=$e()){return/firefox\//i.test(t)}function Dl(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vf(t=$e()){return/crios\//i.test(t)}function qf(t=$e()){return/iemobile/i.test(t)}function zf(t=$e()){return/android/i.test(t)}function Gf(t=$e()){return/blackberry/i.test(t)}function Kf(t=$e()){return/webos/i.test(t)}function go(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aw(t=$e()){var e;return go(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lw(){return wE()&&document.documentMode===10}function Yf(t=$e()){return go(t)||zf(t)||Kf(t)||Gf(t)||/windows phone/i.test(t)||qf(t)}function cw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t,e=[]){let n;switch(t){case"Browser":n=Bu($e());break;case"Worker":n=`${Bu($e())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ms}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hu(this),this.idTokenSubscription=new Hu(this),this.beforeStateQueue=new uw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ff,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?we(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Di("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Fi(t){return we(t)}class Hu{constructor(e){this.auth=e,this.observer=null,this.addObserver=NE(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function dw(t,e,n){const s=Fi(t);$(s._canInitEmulator,s,"emulator-config-failed"),$(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Qf(e),{host:o,port:a}=fw(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||pw()}function Qf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fw(t){const e=Qf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:$u(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:$u(o)}}}function $u(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dt("not implemented")}_getIdTokenResponse(e){return Dt("not implemented")}_linkToIdToken(e,n){return Dt("not implemented")}_getReauthenticationResolver(e){return Dt("not implemented")}}async function Xf(t,e){return Yn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _w(t,e){return Li(t,"POST","/v1/accounts:signInWithPassword",Ls(t,e))}async function mw(t,e){return Yn(t,"POST","/v1/accounts:sendOobCode",Ls(t,e))}async function gw(t,e){return mw(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(t,e){return Li(t,"POST","/v1/accounts:signInWithEmailLink",Ls(t,e))}async function vw(t,e){return Li(t,"POST","/v1/accounts:signInWithEmailLink",Ls(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Ml{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ii(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ii(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return _w(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yw(e,{email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Xf(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vw(e,{idToken:n,email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t,e){return Li(t,"POST","/v1/accounts:signInWithIdp",Ls(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="http://localhost";class $n extends Ml{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ol(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new $n(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,_s(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:Ew,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ds(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ww(t){const e=Xs(Zs(t)).link,n=e?Xs(Zs(e)).deep_link_id:null,s=Xs(Zs(t)).deep_link_id;return(s?Xs(Zs(s)).link:null)||s||n||e||t}class Ll{constructor(e){var n,s,i,r,o,a;const l=Xs(Zs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=bw((i=l.mode)!==null&&i!==void 0?i:null);$(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ww(e);try{return new Ll(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return Ii._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ll.parseLink(n);return $(s,"argument-error"),Ii._fromEmailAndCode(e,s.code,s.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends Zf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Ui{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return sn.credential(n,s)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Ui{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Ui{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return on.credential(n,s)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(t,e){return Li(t,"POST","/v1/accounts:signUp",Ls(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Mn._fromIdTokenResponse(e,s,i),o=ju(s);return new jn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=ju(s);return new jn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function ju(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Wt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,xr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new xr(e,n,s,i)}}function ep(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?xr._fromErrorAndOperation(t,r,e,s):r})}async function Iw(t,e,n=!1){const s=await Hn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Hn(t,ep(s,i,e,t),n);$(r.idToken,s,"internal-error");const o=xl(r.idToken);$(o,s,"internal-error");const{sub:a}=o;return $(t.uid===a,s,"user-mismatch"),jn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&yt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tp(t,e,n=!1){const s="signIn",i=await ep(t,s,e),r=await jn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Sw(t,e){return tp(Fi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(t,e,n){var s;$(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),$(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&($(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&($(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(t,e,n){const s=we(t),i={requestType:"PASSWORD_RESET",email:e};n&&Rw(s,i,n),await gw(s,i)}async function KA(t,e,n){const s=Fi(t),i=await Cw(s,{returnSecureToken:!0,email:e,password:n}),r=await jn._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function YA(t,e,n){return Sw(we(t),Fs.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(t,e){return Yn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=we(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Hn(s,Aw(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function QA(t,e){return np(we(t),e,null)}function XA(t,e){return np(we(t),null,e)}async function np(t,e,n){const{auth:s}=t,r={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(r.email=e),n&&(r.password=n);const o=await Hn(t,Xf(s,r));await t._updateTokensIfNecessary(o,!0)}function kw(t,e,n,s){return we(t).onIdTokenChanged(e,n,s)}function Ow(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function ZA(t,e,n,s){return we(t).onAuthStateChanged(e,n,s)}function ek(t){return we(t).signOut()}const Dr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dr,"1"),this.storage.removeItem(Dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(){const t=$e();return Dl(t)||go(t)}const Pw=1e3,xw=10;class ip extends sp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Nw()&&cw(),this.fallbackToPolling=Yf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);lw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xw):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Pw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ip.type="LOCAL";const Dw=ip;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp extends sp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rp.type="SESSION";const op=rp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new yo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Mw(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Fl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function Fw(t){kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function Uw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Hw(){return ap()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="firebaseLocalStorageDb",$w=1,Mr="firebaseLocalStorage",cp="fbase_key";class Bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vo(t,e){return t.transaction([Mr],e?"readwrite":"readonly").objectStore(Mr)}function jw(){const t=indexedDB.deleteDatabase(lp);return new Bi(t).toPromise()}function Na(){const t=indexedDB.open(lp,$w);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Mr,{keyPath:cp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Mr)?e(s):(s.close(),await jw(),e(await Na()))})})}async function Wu(t,e,n){const s=vo(t,!0).put({[cp]:e,value:n});return new Bi(s).toPromise()}async function Ww(t,e){const n=vo(t,!1).get(e),s=await new Bi(n).toPromise();return s===void 0?null:s.value}function Vu(t,e){const n=vo(t,!0).delete(e);return new Bi(n).toPromise()}const Vw=800,qw=3;class up{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Na(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>qw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ap()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yo._getInstance(Hw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Uw(),!this.activeServiceWorker)return;this.sender=new Lw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Na();return await Wu(e,Dr,"1"),await Vu(e,Dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Wu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Ww(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=vo(i,!1).getAll();return new Bi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}up.type="LOCAL";const zw=up;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Kw(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=At("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Gw().appendChild(s)})}function Yw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Mi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t,e){return e?Mt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends Ml{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qw(t){return tp(t.auth,new Ul(t),t.bypassAuthState)}function Xw(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Tw(n,new Ul(t),t.bypassAuthState)}async function Zw(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Iw(n,new Ul(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qw;case"linkViaPopup":case"linkViaRedirect":return Zw;case"reauthViaPopup":case"reauthViaRedirect":return Xw;default:yt(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=new Mi(2e3,1e4);class rs extends hp{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=Fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,eC.get())};e()}}rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC="pendingRedirect",pr=new Map;class nC extends hp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=pr.get(this.auth._key());if(!e){try{const s=await sC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}pr.set(this.auth._key(),e)}return this.bypassAuthState||pr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sC(t,e){const n=oC(e),s=rC(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function iC(t,e){pr.set(t._key(),e)}function rC(t){return Mt(t._redirectPersistence)}function oC(t){return fr(tC,t.config.apiKey,t.name)}async function aC(t,e,n=!1){const s=Fi(t),i=Jw(s,e),o=await new nC(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=10*60*1e3;class cC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!dp(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(At(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lC&&this.cachedEventUids.clear(),this.cachedEventUids.has(qu(e))}saveEventToCache(e){this.cachedEventUids.add(qu(e)),this.lastProcessedEventTime=Date.now()}}function qu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(t,e={}){return Yn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fC=/^https?/;async function pC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hC(t);for(const n of e)try{if(_C(n))return}catch{}yt(t,"unauthorized-domain")}function _C(t){const e=Oa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!fC.test(n))return!1;if(dC.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=new Mi(3e4,6e4);function zu(){const t=kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gC(t){return new Promise((e,n)=>{var s,i,r;function o(){zu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zu(),n(At(t,"network-request-failed"))},timeout:mC.get()})}if(!((i=(s=kt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=kt().gapi)===null||r===void 0)&&r.load)o();else{const a=Yw("iframefcb");return kt()[a]=()=>{gapi.load?o():n(At(t,"network-request-failed"))},Kw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw _r=null,e})}let _r=null;function yC(t){return _r=_r||gC(t),_r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=new Mi(5e3,15e3),EC="__/auth/iframe",bC="emulator/auth/iframe",wC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IC(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pl(e,bC):`https://${t.config.authDomain}/${EC}`,s={apiKey:e.apiKey,appName:t.name,v:Ms},i=CC.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ds(s).slice(1)}`}async function TC(t){const e=await yC(t),n=kt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:IC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wC,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=At(t,"network-request-failed"),a=kt().setTimeout(()=>{r(o)},vC.get());function l(){kt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RC=500,AC=600,kC="_blank",OC="http://localhost";class Gu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NC(t,e,n,s=RC,i=AC){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},SC),{width:s.toString(),height:i.toString(),top:r,left:o}),c=$e().toLowerCase();n&&(a=Vf(c)?kC:n),Wf(c)&&(e=e||OC,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(aw(c)&&a!=="_self")return PC(e||"",a),new Gu(null);const h=window.open(e||"",a,u);$(h,t,"popup-blocked");try{h.focus()}catch{}return new Gu(h)}function PC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="__/auth/handler",DC="emulator/auth/handler";function Ku(t,e,n,s,i,r){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ms,eventId:i};if(e instanceof Zf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ia(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Ui){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${MC(t)}?${Ds(a).slice(1)}`}function MC({config:t}){return t.emulator?Pl(t,DC):`https://${t.authDomain}/${xC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="webStorageSupport";class LC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=op,this._completeRedirectFn=aC,this._overrideRedirectResult=iC}async _openPopup(e,n,s,i){var r;Ht((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Ku(e,n,s,Oa(),i);return NC(e,o,Fl())}async _openRedirect(e,n,s,i){return await this._originValidation(e),Fw(Ku(e,n,s,Oa(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await TC(e),s=new cC(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ko,{type:Ko},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ko];o!==void 0&&n(!!o),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yf()||Dl()||go()}}const FC=LC;var Yu="@firebase/auth",Ju="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function HC(t){Bn(new mn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{$(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jf(t)},u=new hw(a,l,c);return Vb(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Bn(new mn("auth-internal",e=>{const n=Fi(e.getProvider("auth").getImmediate());return(s=>new UC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(Yu,Ju,BC(t)),Rt(Yu,Ju,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=5*60,jC=Sf("authIdTokenMaxAge")||$C;let Qu=null;const WC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>jC)return;const i=n==null?void 0:n.token;Qu!==i&&(Qu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tk(t=kl()){const e=mo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wb(t,{popupRedirectResolver:FC,persistence:[zw,Dw,op]}),s=Sf("authTokenSyncURL");if(s){const r=WC(s);Ow(n,r,()=>r(n.currentUser)),kw(n,o=>r(o))}const i=If("auth");return i&&dw(n,`http://${i}`),n}HC("Browser");function fp(t,e){return function(){return t.apply(e,arguments)}}const{toString:pp}=Object.prototype,{getPrototypeOf:Bl}=Object,Hl=(t=>e=>{const n=pp.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),qt=t=>(t=t.toLowerCase(),e=>Hl(e)===t),Eo=t=>e=>typeof e===t,{isArray:Us}=Array,Ti=Eo("undefined");function VC(t){return t!==null&&!Ti(t)&&t.constructor!==null&&!Ti(t.constructor)&&Wn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const _p=qt("ArrayBuffer");function qC(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&_p(t.buffer),e}const zC=Eo("string"),Wn=Eo("function"),mp=Eo("number"),$l=t=>t!==null&&typeof t=="object",GC=t=>t===!0||t===!1,mr=t=>{if(Hl(t)!=="object")return!1;const e=Bl(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},KC=qt("Date"),YC=qt("File"),JC=qt("Blob"),QC=qt("FileList"),XC=t=>$l(t)&&Wn(t.pipe),ZC=t=>{const e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||pp.call(t)===e||Wn(t.toString)&&t.toString()===e)},eI=qt("URLSearchParams"),tI=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Hi(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let s,i;if(typeof t!="object"&&(t=[t]),Us(t))for(s=0,i=t.length;s<i;s++)e.call(null,t[s],s,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(s=0;s<o;s++)a=r[s],e.call(null,t[a],a,t)}}function gp(t,e){e=e.toLowerCase();const n=Object.keys(t);let s=n.length,i;for(;s-- >0;)if(i=n[s],e===i.toLowerCase())return i;return null}const yp=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),vp=t=>!Ti(t)&&t!==yp;function Pa(){const{caseless:t}=vp(this)&&this||{},e={},n=(s,i)=>{const r=t&&gp(e,i)||i;mr(e[r])&&mr(s)?e[r]=Pa(e[r],s):mr(s)?e[r]=Pa({},s):Us(s)?e[r]=s.slice():e[r]=s};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&Hi(arguments[s],n);return e}const nI=(t,e,n,{allOwnKeys:s}={})=>(Hi(e,(i,r)=>{n&&Wn(i)?t[r]=fp(i,n):t[r]=i},{allOwnKeys:s}),t),sI=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),iI=(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},rI=(t,e,n,s)=>{let i,r,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),r=i.length;r-- >0;)o=i[r],(!s||s(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Bl(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},oI=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return s!==-1&&s===n},aI=t=>{if(!t)return null;if(Us(t))return t;let e=t.length;if(!mp(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},lI=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Bl(Uint8Array)),cI=(t,e)=>{const s=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=s.next())&&!i.done;){const r=i.value;e.call(t,r[0],r[1])}},uI=(t,e)=>{let n;const s=[];for(;(n=t.exec(e))!==null;)s.push(n);return s},hI=qt("HTMLFormElement"),dI=t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,s,i){return s.toUpperCase()+i}),Xu=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),fI=qt("RegExp"),Ep=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};Hi(n,(i,r)=>{e(i,r,t)!==!1&&(s[r]=i)}),Object.defineProperties(t,s)},pI=t=>{Ep(t,(e,n)=>{if(Wn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=t[n];if(Wn(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_I=(t,e)=>{const n={},s=i=>{i.forEach(r=>{n[r]=!0})};return Us(t)?s(t):s(String(t).split(e)),n},mI=()=>{},gI=(t,e)=>(t=+t,Number.isFinite(t)?t:e),yI=t=>{const e=new Array(10),n=(s,i)=>{if($l(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[i]=s;const r=Us(s)?[]:{};return Hi(s,(o,a)=>{const l=n(o,i+1);!Ti(l)&&(r[a]=l)}),e[i]=void 0,r}}return s};return n(t,0)},v={isArray:Us,isArrayBuffer:_p,isBuffer:VC,isFormData:ZC,isArrayBufferView:qC,isString:zC,isNumber:mp,isBoolean:GC,isObject:$l,isPlainObject:mr,isUndefined:Ti,isDate:KC,isFile:YC,isBlob:JC,isRegExp:fI,isFunction:Wn,isStream:XC,isURLSearchParams:eI,isTypedArray:lI,isFileList:QC,forEach:Hi,merge:Pa,extend:nI,trim:tI,stripBOM:sI,inherits:iI,toFlatObject:rI,kindOf:Hl,kindOfTest:qt,endsWith:oI,toArray:aI,forEachEntry:cI,matchAll:uI,isHTMLForm:hI,hasOwnProperty:Xu,hasOwnProp:Xu,reduceDescriptors:Ep,freezeMethods:pI,toObjectSet:_I,toCamelCase:dI,noop:mI,toFiniteNumber:gI,findKey:gp,global:yp,isContextDefined:vp,toJSONObject:yI};function te(t,e,n,s,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),i&&(this.response=i)}v.inherits(te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const bp=te.prototype,wp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{wp[t]={value:t}});Object.defineProperties(te,wp);Object.defineProperty(bp,"isAxiosError",{value:!0});te.from=(t,e,n,s,i,r)=>{const o=Object.create(bp);return v.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),te.call(o,t.message,e,n,s,i),o.cause=t,o.name=t.name,r&&Object.assign(o,r),o};var vI=typeof self=="object"?self.FormData:window.FormData;const EI=vI;function xa(t){return v.isPlainObject(t)||v.isArray(t)}function Cp(t){return v.endsWith(t,"[]")?t.slice(0,-2):t}function Zu(t,e,n){return t?t.concat(e).map(function(i,r){return i=Cp(i),!n&&r?"["+i+"]":i}).join(n?".":""):e}function bI(t){return v.isArray(t)&&!t.some(xa)}const wI=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function CI(t){return t&&v.isFunction(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator]}function bo(t,e,n){if(!v.isObject(t))throw new TypeError("target must be an object");e=e||new(EI||FormData),n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,T){return!v.isUndefined(T[g])});const s=n.metaTokens,i=n.visitor||u,r=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&CI(e);if(!v.isFunction(i))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(v.isDate(m))return m.toISOString();if(!l&&v.isBlob(m))throw new te("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(m)||v.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,g,T){let I=m;if(m&&!T&&typeof m=="object"){if(v.endsWith(g,"{}"))g=s?g:g.slice(0,-2),m=JSON.stringify(m);else if(v.isArray(m)&&bI(m)||v.isFileList(m)||v.endsWith(g,"[]")&&(I=v.toArray(m)))return g=Cp(g),I.forEach(function(k,F){!(v.isUndefined(k)||k===null)&&e.append(o===!0?Zu([g],F,r):o===null?g:g+"[]",c(k))}),!1}return xa(m)?!0:(e.append(Zu(T,g,r),c(m)),!1)}const h=[],d=Object.assign(wI,{defaultVisitor:u,convertValue:c,isVisitable:xa});function p(m,g){if(!v.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+g.join("."));h.push(m),v.forEach(m,function(I,P){(!(v.isUndefined(I)||I===null)&&i.call(e,I,v.isString(P)?P.trim():P,g,d))===!0&&p(I,g?g.concat(P):[P])}),h.pop()}}if(!v.isObject(t))throw new TypeError("data must be an object");return p(t),e}function eh(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function jl(t,e){this._pairs=[],t&&bo(t,this,e)}const Ip=jl.prototype;Ip.append=function(e,n){this._pairs.push([e,n])};Ip.toString=function(e){const n=e?function(s){return e.call(this,s,eh)}:eh;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function II(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Tp(t,e,n){if(!e)return t;const s=n&&n.encode||II,i=n&&n.serialize;let r;if(i?r=i(e,n):r=v.isURLSearchParams(e)?e.toString():new jl(e,n).toString(s),r){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+r}return t}class TI{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(s){s!==null&&e(s)})}}const th=TI,Sp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},SI=typeof URLSearchParams<"u"?URLSearchParams:jl,RI=FormData,AI=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),kI=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Tt={isBrowser:!0,classes:{URLSearchParams:SI,FormData:RI,Blob},isStandardBrowserEnv:AI,isStandardBrowserWebWorkerEnv:kI,protocols:["http","https","file","blob","url","data"]};function OI(t,e){return bo(t,new Tt.classes.URLSearchParams,Object.assign({visitor:function(n,s,i,r){return Tt.isNode&&v.isBuffer(n)?(this.append(s,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function NI(t){return v.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function PI(t){const e={},n=Object.keys(t);let s;const i=n.length;let r;for(s=0;s<i;s++)r=n[s],e[r]=t[r];return e}function Rp(t){function e(n,s,i,r){let o=n[r++];const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&v.isArray(i)?i.length:o,l?(v.hasOwnProp(i,o)?i[o]=[i[o],s]:i[o]=s,!a):((!i[o]||!v.isObject(i[o]))&&(i[o]=[]),e(n,s,i[o],r)&&v.isArray(i[o])&&(i[o]=PI(i[o])),!a)}if(v.isFormData(t)&&v.isFunction(t.entries)){const n={};return v.forEachEntry(t,(s,i)=>{e(NI(s),i,n,0)}),n}return null}const xI={"Content-Type":void 0};function DI(t,e,n){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(t)}const wo={transitional:Sp,adapter:["xhr","http"],transformRequest:[function(e,n){const s=n.getContentType()||"",i=s.indexOf("application/json")>-1,r=v.isObject(e);if(r&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return i&&i?JSON.stringify(Rp(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(s.indexOf("application/x-www-form-urlencoded")>-1)return OI(e,this.formSerializer).toString();if((a=v.isFileList(e))||s.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return bo(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return r||i?(n.setContentType("application/json",!1),DI(e)):e}],transformResponse:[function(e){const n=this.transitional||wo.transitional,s=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&v.isString(e)&&(s&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?te.from(a,te.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Tt.classes.FormData,Blob:Tt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};v.forEach(["delete","get","head"],function(e){wo.headers[e]={}});v.forEach(["post","put","patch"],function(e){wo.headers[e]=v.merge(xI)});const Wl=wo,MI=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),LI=t=>{const e={};let n,s,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),s=o.substring(i+1).trim(),!(!n||e[n]&&MI[n])&&(n==="set-cookie"?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)}),e},nh=Symbol("internals");function qs(t){return t&&String(t).trim().toLowerCase()}function gr(t){return t===!1||t==null?t:v.isArray(t)?t.map(gr):String(t)}function FI(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}function UI(t){return/^[-_a-zA-Z]+$/.test(t.trim())}function sh(t,e,n,s){if(v.isFunction(s))return s.call(this,e,n);if(v.isString(e)){if(v.isString(s))return e.indexOf(s)!==-1;if(v.isRegExp(s))return s.test(e)}}function BI(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,s)=>n.toUpperCase()+s)}function HI(t,e){const n=v.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+n,{value:function(i,r,o){return this[s].call(this,e,i,r,o)},configurable:!0})})}class Co{constructor(e){e&&this.set(e)}set(e,n,s){const i=this;function r(a,l,c){const u=qs(l);if(!u)throw new Error("header name must be a non-empty string");const h=v.findKey(i,u);(!h||i[h]===void 0||c===!0||c===void 0&&i[h]!==!1)&&(i[h||l]=gr(a))}const o=(a,l)=>v.forEach(a,(c,u)=>r(c,u,l));return v.isPlainObject(e)||e instanceof this.constructor?o(e,n):v.isString(e)&&(e=e.trim())&&!UI(e)?o(LI(e),n):e!=null&&r(n,e,s),this}get(e,n){if(e=qs(e),e){const s=v.findKey(this,e);if(s){const i=this[s];if(!n)return i;if(n===!0)return FI(i);if(v.isFunction(n))return n.call(this,i,s);if(v.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=qs(e),e){const s=v.findKey(this,e);return!!(s&&(!n||sh(this,this[s],s,n)))}return!1}delete(e,n){const s=this;let i=!1;function r(o){if(o=qs(o),o){const a=v.findKey(s,o);a&&(!n||sh(s,s[a],a,n))&&(delete s[a],i=!0)}}return v.isArray(e)?e.forEach(r):r(e),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const n=this,s={};return v.forEach(this,(i,r)=>{const o=v.findKey(s,r);if(o){n[o]=gr(i),delete n[r];return}const a=e?BI(r):String(r).trim();a!==r&&delete n[r],n[a]=gr(i),s[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return v.forEach(this,(s,i)=>{s!=null&&s!==!1&&(n[i]=e&&v.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach(i=>s.set(i)),s}static accessor(e){const s=(this[nh]=this[nh]={accessors:{}}).accessors,i=this.prototype;function r(o){const a=qs(o);s[a]||(HI(i,o),s[a]=!0)}return v.isArray(e)?e.forEach(r):r(e),this}}Co.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);v.freezeMethods(Co.prototype);v.freezeMethods(Co);const Ft=Co;function Yo(t,e){const n=this||Wl,s=e||n,i=Ft.from(s.headers);let r=s.data;return v.forEach(t,function(a){r=a.call(n,r,i.normalize(),e?e.status:void 0)}),i.normalize(),r}function Ap(t){return!!(t&&t.__CANCEL__)}function $i(t,e,n){te.call(this,t??"canceled",te.ERR_CANCELED,e,n),this.name="CanceledError"}v.inherits($i,te,{__CANCEL__:!0});const $I=null;function jI(t,e,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):e(new te("Request failed with status code "+n.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const WI=Tt.isStandardBrowserEnv?function(){return{write:function(n,s,i,r,o,a){const l=[];l.push(n+"="+encodeURIComponent(s)),v.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),v.isString(r)&&l.push("path="+r),v.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const s=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function VI(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function qI(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function kp(t,e){return t&&!VI(e)?qI(t,e):e}const zI=Tt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let s;function i(r){let o=r;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=i(window.location.href),function(o){const a=v.isString(o)?i(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}();function GI(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function KI(t,e){t=t||10;const n=new Array(t),s=new Array(t);let i=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=s[r];o||(o=c),n[i]=l,s[i]=c;let h=r,d=0;for(;h!==i;)d+=n[h++],h=h%t;if(i=(i+1)%t,i===r&&(r=(r+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function ih(t,e){let n=0;const s=KI(50,250);return i=>{const r=i.loaded,o=i.lengthComputable?i.total:void 0,a=r-n,l=s(a),c=r<=o;n=r;const u={loaded:r,total:o,progress:o?r/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-r)/l:void 0,event:i};u[e?"download":"upload"]=!0,t(u)}}const YI=typeof XMLHttpRequest<"u",JI=YI&&function(t){return new Promise(function(n,s){let i=t.data;const r=Ft.from(t.headers).normalize(),o=t.responseType;let a;function l(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}v.isFormData(i)&&(Tt.isStandardBrowserEnv||Tt.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let c=new XMLHttpRequest;if(t.auth){const p=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(p+":"+m))}const u=kp(t.baseURL,t.url);c.open(t.method.toUpperCase(),Tp(u,t.params,t.paramsSerializer),!0),c.timeout=t.timeout;function h(){if(!c)return;const p=Ft.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),g={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:p,config:t,request:c};jI(function(I){n(I),l()},function(I){s(I),l()},g),c=null}if("onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(s(new te("Request aborted",te.ECONNABORTED,t,c)),c=null)},c.onerror=function(){s(new te("Network Error",te.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let m=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const g=t.transitional||Sp;t.timeoutErrorMessage&&(m=t.timeoutErrorMessage),s(new te(m,g.clarifyTimeoutError?te.ETIMEDOUT:te.ECONNABORTED,t,c)),c=null},Tt.isStandardBrowserEnv){const p=(t.withCredentials||zI(u))&&t.xsrfCookieName&&WI.read(t.xsrfCookieName);p&&r.set(t.xsrfHeaderName,p)}i===void 0&&r.setContentType(null),"setRequestHeader"in c&&v.forEach(r.toJSON(),function(m,g){c.setRequestHeader(g,m)}),v.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),o&&o!=="json"&&(c.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&c.addEventListener("progress",ih(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ih(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=p=>{c&&(s(!p||p.type?new $i(null,t,c):p),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const d=GI(u);if(d&&Tt.protocols.indexOf(d)===-1){s(new te("Unsupported protocol "+d+":",te.ERR_BAD_REQUEST,t));return}c.send(i||null)})},yr={http:$I,xhr:JI};v.forEach(yr,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const QI={getAdapter:t=>{t=v.isArray(t)?t:[t];const{length:e}=t;let n,s;for(let i=0;i<e&&(n=t[i],!(s=v.isString(n)?yr[n.toLowerCase()]:n));i++);if(!s)throw s===!1?new te(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(v.hasOwnProp(yr,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!v.isFunction(s))throw new TypeError("adapter is not a function");return s},adapters:yr};function Jo(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new $i(null,t)}function rh(t){return Jo(t),t.headers=Ft.from(t.headers),t.data=Yo.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),QI.getAdapter(t.adapter||Wl.adapter)(t).then(function(s){return Jo(t),s.data=Yo.call(t,t.transformResponse,s),s.headers=Ft.from(s.headers),s},function(s){return Ap(s)||(Jo(t),s&&s.response&&(s.response.data=Yo.call(t,t.transformResponse,s.response),s.response.headers=Ft.from(s.response.headers))),Promise.reject(s)})}const oh=t=>t instanceof Ft?t.toJSON():t;function Is(t,e){e=e||{};const n={};function s(c,u,h){return v.isPlainObject(c)&&v.isPlainObject(u)?v.merge.call({caseless:h},c,u):v.isPlainObject(u)?v.merge({},u):v.isArray(u)?u.slice():u}function i(c,u,h){if(v.isUndefined(u)){if(!v.isUndefined(c))return s(void 0,c,h)}else return s(c,u,h)}function r(c,u){if(!v.isUndefined(u))return s(void 0,u)}function o(c,u){if(v.isUndefined(u)){if(!v.isUndefined(c))return s(void 0,c)}else return s(void 0,u)}function a(c,u,h){if(h in e)return s(c,u);if(h in t)return s(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>i(oh(c),oh(u),!0)};return v.forEach(Object.keys(t).concat(Object.keys(e)),function(u){const h=l[u]||i,d=h(t[u],e[u],u);v.isUndefined(d)&&h!==a||(n[u]=d)}),n}const Op="1.2.4",Vl={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Vl[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const ah={};Vl.transitional=function(e,n,s){function i(r,o){return"[Axios v"+Op+"] Transitional option '"+r+"'"+o+(s?". "+s:"")}return(r,o,a)=>{if(e===!1)throw new te(i(o," has been removed"+(n?" in "+n:"")),te.ERR_DEPRECATED);return n&&!ah[o]&&(ah[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};function XI(t,e,n){if(typeof t!="object")throw new te("options must be an object",te.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let i=s.length;for(;i-- >0;){const r=s[i],o=e[r];if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new te("option "+r+" must be "+l,te.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new te("Unknown option "+r,te.ERR_BAD_OPTION)}}const Da={assertOptions:XI,validators:Vl},Xt=Da.validators;class Lr{constructor(e){this.defaults=e,this.interceptors={request:new th,response:new th}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Is(this.defaults,n);const{transitional:s,paramsSerializer:i,headers:r}=n;s!==void 0&&Da.assertOptions(s,{silentJSONParsing:Xt.transitional(Xt.boolean),forcedJSONParsing:Xt.transitional(Xt.boolean),clarifyTimeoutError:Xt.transitional(Xt.boolean)},!1),i!==void 0&&Da.assertOptions(i,{encode:Xt.function,serialize:Xt.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=r&&v.merge(r.common,r[n.method]),o&&v.forEach(["delete","get","head","post","put","patch","common"],m=>{delete r[m]}),n.headers=Ft.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(l=l&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const c=[];this.interceptors.response.forEach(function(g){c.push(g.fulfilled,g.rejected)});let u,h=0,d;if(!l){const m=[rh.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,c),d=m.length,u=Promise.resolve(n);h<d;)u=u.then(m[h++],m[h++]);return u}d=a.length;let p=n;for(h=0;h<d;){const m=a[h++],g=a[h++];try{p=m(p)}catch(T){g.call(this,T);break}}try{u=rh.call(this,p)}catch(m){return Promise.reject(m)}for(h=0,d=c.length;h<d;)u=u.then(c[h++],c[h++]);return u}getUri(e){e=Is(this.defaults,e);const n=kp(e.baseURL,e.url);return Tp(n,e.params,e.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(e){Lr.prototype[e]=function(n,s){return this.request(Is(s||{},{method:e,url:n,data:(s||{}).data}))}});v.forEach(["post","put","patch"],function(e){function n(s){return function(r,o,a){return this.request(Is(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Lr.prototype[e]=n(),Lr.prototype[e+"Form"]=n(!0)});const vr=Lr;class ql{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const s=this;this.promise.then(i=>{if(!s._listeners)return;let r=s._listeners.length;for(;r-- >0;)s._listeners[r](i);s._listeners=null}),this.promise.then=i=>{let r;const o=new Promise(a=>{s.subscribe(a),r=a}).then(i);return o.cancel=function(){s.unsubscribe(r)},o},e(function(r,o,a){s.reason||(s.reason=new $i(r,o,a),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new ql(function(i){e=i}),cancel:e}}}const ZI=ql;function eT(t){return function(n){return t.apply(null,n)}}function tT(t){return v.isObject(t)&&t.isAxiosError===!0}const Ma={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ma).forEach(([t,e])=>{Ma[e]=t});const nT=Ma;function Np(t){const e=new vr(t),n=fp(vr.prototype.request,e);return v.extend(n,vr.prototype,e,{allOwnKeys:!0}),v.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return Np(Is(t,i))},n}const Oe=Np(Wl);Oe.Axios=vr;Oe.CanceledError=$i;Oe.CancelToken=ZI;Oe.isCancel=Ap;Oe.VERSION=Op;Oe.toFormData=bo;Oe.AxiosError=te;Oe.Cancel=Oe.CanceledError;Oe.all=function(e){return Promise.all(e)};Oe.spread=eT;Oe.isAxiosError=tT;Oe.mergeConfig=Is;Oe.AxiosHeaders=Ft;Oe.formToJSON=t=>Rp(v.isHTMLForm(t)?new FormData(t):t);Oe.HttpStatusCode=nT;Oe.default=Oe;const nk=Oe;var sT="firebase",iT="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(sT,iT,"app");const lh="@firebase/database",ch="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pp="";function rT(t){Pp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:bi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new oT(e)}}catch{}return new aT},Pn=xp("localStorage"),La=xp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Rl("@firebase/database"),lT=function(){let t=1;return function(){return t++}}(),Dp=function(t){const e=DE(t),n=new OE;n.update(e);const s=n.digest();return Il.encodeByteArray(s)},ji=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ji.apply(null,s):typeof s=="object"?e+=Ae(s):e+=s,e+=" "}return e};let Ln=null,uh=!0;const cT=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ms.logLevel=ce.VERBOSE,Ln=ms.log.bind(ms),e&&La.set("logging_enabled",!0)):typeof t=="function"?Ln=t:(Ln=null,La.remove("logging_enabled"))},Ue=function(...t){if(uh===!0&&(uh=!1,Ln===null&&La.get("logging_enabled")===!0&&cT(!0)),Ln){const e=ji.apply(null,t);Ln(e)}},Wi=function(t){return function(...e){Ue(t,...e)}},Fa=function(...t){const e="FIREBASE INTERNAL ERROR: "+ji(...t);ms.error(e)},$t=function(...t){const e=`FIREBASE FATAL ERROR: ${ji(...t)}`;throw ms.error(e),new Error(e)},et=function(...t){const e="FIREBASE WARNING: "+ji(...t);ms.warn(e)},uT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Mp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},hT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ts="[MIN_NAME]",Vn="[MAX_NAME]",Bs=function(t,e){if(t===e)return 0;if(t===Ts||e===Vn)return-1;if(e===Ts||t===Vn)return 1;{const n=hh(t),s=hh(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},dT=function(t,e){return t===e?0:t<e?-1:1},zs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ae(e))},zl=function(t){if(typeof t!="object"||t===null)return Ae(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ae(e[s]),n+=":",n+=zl(t[e[s]]);return n+="}",n},Lp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Fp=function(t){R(!Mp(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},fT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _T(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const mT=new RegExp("^-?(0*)\\d{1,10}$"),gT=-2147483648,yT=2147483647,hh=function(t){if(mT.test(t)){const e=Number(t);if(e>=gT&&e<=yT)return e}return null},Vi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw et("Exception was thrown by user callback.",n),e},Math.floor(0))}},vT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ue("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class gs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}gs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="5",Up="v",Bp="s",Hp="r",$p="f",jp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wp="ls",Vp="p",Ua="ac",qp="websocket",zp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,n,s,i,r=!1,o="",a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function wT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Kp(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let s;if(e===qp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===zp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wT(t)&&(n.ns=t.namespace);const i=[];return Je(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(){this.counters_={}}incrementCounter(e,n=1){Vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return fE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo={},Xo={};function Kl(t){const e=t.toString();return Qo[e]||(Qo[e]=new CT),Qo[e]}function IT(t,e){const n=t.toString();return Xo[n]||(Xo[n]=e()),Xo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Vi(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="start",ST="close",RT="pLPCommand",AT="pRTLPCB",Yp="id",Jp="pw",Qp="ser",kT="cb",OT="seg",NT="ts",PT="d",xT="dframe",Xp=1870,Zp=30,DT=Xp-Zp,MT=25e3,LT=3e4;class os{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wi(e),this.stats_=Kl(n),this.urlFn=l=>(this.appCheckToken&&(l[Ua]=this.appCheckToken),Kp(n,zp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new TT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(LT)),hT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===dh)this.id=a,this.password=l;else if(o===ST)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[dh]="t",s[Qp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[kT]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Up]=Gl,this.transportSessionId&&(s[Bp]=this.transportSessionId),this.lastSessionId&&(s[Wp]=this.lastSessionId),this.applicationId&&(s[Vp]=this.applicationId),this.appCheckToken&&(s[Ua]=this.appCheckToken),typeof location<"u"&&location.hostname&&jp.test(location.hostname)&&(s[Hp]=$p);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){os.forceAllow_=!0}static forceDisallow(){os.forceDisallow_=!0}static isAvailable(){return os.forceAllow_?!0:!os.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fT()&&!pT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=wf(n),i=Lp(s,DT);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[xT]="t",s[Yp]=e,s[Jp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Yl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lT(),window[RT+this.uniqueCallbackIdentifier]=e,window[AT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Yl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ue("frame writing exception"),a.stack&&Ue(a.stack),Ue(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ue("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yp]=this.myID,e[Jp]=this.myPW,e[Qp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zp+s.length<=Xp;){const o=this.pendingSegs.shift();s=s+"&"+OT+i+"="+o.seg+"&"+NT+i+"="+o.ts+"&"+PT+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(MT)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ue("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=16384,UT=45e3;let Fr=null;typeof MozWebSocket<"u"?Fr=MozWebSocket:typeof WebSocket<"u"&&(Fr=WebSocket);class ht{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wi(this.connId),this.stats_=Kl(n),this.connURL=ht.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Up]=Gl,typeof location<"u"&&location.hostname&&jp.test(location.hostname)&&(o[Hp]=$p),n&&(o[Bp]=n),s&&(o[Wp]=s),i&&(o[Ua]=i),r&&(o[Vp]=r),Kp(e,qp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pn.set("previous_websocket_failure",!0);try{let s;kf(),this.mySock=new Fr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Fr!==null&&!ht.forceDisallow_}static previouslyFailed(){return Pn.isInMemoryStorage||Pn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=bi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Lp(n,FT);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(UT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ht.responsesRequiredToBeHealthy=2;ht.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[os,ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ht&&ht.isAvailable();let s=n&&!ht.previouslyFailed();if(e.webSocketOnly&&(n||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ht];else{const i=this.transports_=[];for(const r of Si.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Si.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Si.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=6e4,HT=5e3,$T=10*1024,jT=100*1024,Zo="t",fh="d",WT="s",ph="r",VT="e",_h="o",mh="a",gh="n",yh="p",qT="h";class zT{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wi("c:"+this.id+":"),this.transportManager_=new Si(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=oi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$T?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zo in e){const n=e[Zo];n===mh?this.upgradeIfSecondaryHealthy_():n===ph?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===_h&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zs("t",e),s=zs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zs("t",e),s=zs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zs(Zo,e);if(fh in e){const s=e[fh];if(n===qT)this.onHandshake_(s);else if(n===gh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===WT?this.onConnectionShutdown_(s):n===ph?this.onReset_(s):n===VT?Fa("Server Error: "+s):n===_h?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fa("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Gl!==s&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),oi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(BT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends t_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ur}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=32,Eh=768;class ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ne(){return new ue("")}function Q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function gn(t){return t.pieces_.length-t.pieceNum_}function pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function n_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function GT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function s_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function i_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function ke(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ue)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ue(n,0)}function Y(t){return t.pieceNum_>=t.pieces_.length}function qe(t,e){const n=Q(t),s=Q(e);if(n===null)return e;if(n===s)return qe(pe(t),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function r_(t,e){if(gn(t)!==gn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ft(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(gn(t)>gn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class KT{constructor(e,n){this.errorPrefix_=n,this.parts_=s_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_o(this.parts_[s]);o_(this)}}function YT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_o(e),o_(t)}function JT(t){const e=t.parts_.pop();t.byteLength_-=_o(e),t.parts_.length>0&&(t.byteLength_-=1)}function o_(t){if(t.byteLength_>Eh)throw new Error(t.errorPrefix_+"has a key path longer than "+Eh+" bytes ("+t.byteLength_+").");if(t.parts_.length>vh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vh+") or object contains a cycle "+Rn(t))}function Rn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends t_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Jl}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=1e3,QT=60*5*1e3,bh=30*1e3,XT=1.3,ZT=3e4,eS="server_kill",wh=3;class Ut extends e_{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ut.nextPersistentConnectionId_++,this.log_=Wi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gs,this.maxReconnectDelay_=QT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!kf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ur.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ae(r)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Tl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ut.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Vt(e,"w")){const s=Cs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=AE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ae(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fa("Unrecognized action received from server: "+Ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ZT&&(this.reconnectDelay_=Gs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*XT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ut.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ue("getToken() completed but was canceled"):(Ue("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new zT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{et(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(eS)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&et(h),l())}}}interrupt(e){Ue("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ue("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ia(this.interruptReasons_)&&(this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>zl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ue(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ue("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wh&&(this.reconnectDelay_=bh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ue("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Pp.replace(/\./g,"-")]=1,Sl()?e["framework.cordova"]=1:Af()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ur.getInstance().currentlyOnline();return Ia(this.interruptReasons_)&&e}}Ut.nextPersistentConnectionId_=0;Ut.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new K(Ts,e),i=new K(Ts,n);return this.compare(s,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr;class a_ extends Io{static get __EMPTY_NODE(){return sr}static set __EMPTY_NODE(e){sr=e}compare(e,n){return Bs(e.name,n.name)}isDefinedOn(e){throw xs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(Vn,sr)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,sr)}toString(){return".key"}}const ys=new a_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Pe.RED,this.left=i??Ye.EMPTY_NODE,this.right=r??Ye.EMPTY_NODE}copy(e,n,s,i,r){return new Pe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ye.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pe.RED=!0;Pe.BLACK=!1;class tS{copy(e,n,s,i,r){return this}insert(e,n,s){return new Pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ye{constructor(e,n=Ye.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ye(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Pe.BLACK,null,null))}remove(e){return new Ye(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ir(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ir(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ir(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ir(this.root_,null,this.comparator_,!0,e)}}Ye.EMPTY_NODE=new tS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t,e){return Bs(t.name,e.name)}function Ql(t,e){return Bs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba;function sS(t){Ba=t}const l_=function(t){return typeof t=="number"?"number:"+Fp(t):"string:"+t},c_=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vt(e,".sv"),"Priority must be a string or number.")}else R(t===Ba||t.isEmpty(),"priority of unexpected type.");R(t===Ba||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ch;class Ne{constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),c_(this.priorityNode_)}static set __childrenNodeConstructor(e){Ch=e}static get __childrenNodeConstructor(){return Ch}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:Q(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Q(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(R(s!==".priority"||gn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+l_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Fp(this.value_):e+=this.value_,this.lazyHash_=Dp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ne.VALUE_TYPE_ORDER.indexOf(n),r=Ne.VALUE_TYPE_ORDER.indexOf(s);return R(i>=0,"Unknown leaf type: "+n),R(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u_,h_;function iS(t){u_=t}function rS(t){h_=t}class oS extends Io{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Bs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(Vn,new Ne("[PRIORITY-POST]",h_))}makePost(e,n){const s=u_(e);return new K(n,new Ne("[PRIORITY-POST]",s))}toString(){return".priority"}}const be=new oS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=Math.log(2);class lS{constructor(e){const n=r=>parseInt(Math.log(r)/aS,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Br=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Pe(d,h.node,Pe.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=i(l,p),g=i(p+1,c);return h=t[p],d=n?n(h):h,new Pe(d,h.node,Pe.BLACK,m,g)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,g){const T=h-m,I=h;h-=m;const P=i(T+1,I),k=t[T],F=n?n(k):k;p(new Pe(F,k.node,g,null,P))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const g=l.nextBitIsOne(),T=Math.pow(2,l.count-(m+1));g?d(T,Pe.BLACK):(d(T,Pe.BLACK),d(T,Pe.RED))}return u},o=new lS(t.length),a=r(o);return new Ye(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea;const ns={};class Lt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(ns&&be,"ChildrenNode.ts has not been loaded"),ea=ea||new Lt({".priority":ns},{".priority":be}),ea}get(e){const n=Cs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ye?n:null}hasIndex(e){return Vt(this.indexSet_,e.toString())}addIndex(e,n){R(e!==ys,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(K.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Br(s,e.getCompare()):a=ns;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Lt(u,c)}addToIndexes(e,n){const s=kr(this.indexes_,(i,r)=>{const o=Cs(this.indexSet_,r);if(R(o,"Missing index implementation for "+r),i===ns)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(K.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Br(a,o.getCompare())}else return ns;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new K(e.name,a))),l.insert(e,e.node)}});return new Lt(s,this.indexSet_)}removeFromIndexes(e,n){const s=kr(this.indexes_,i=>{if(i===ns)return i;{const r=n.get(e.name);return r?i.remove(new K(e.name,r)):i}});return new Lt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks;class j{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&c_(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ks||(Ks=new j(new Ye(Ql),null,Lt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ks}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ks:n}}getChild(e){const n=Q(e);return n===null?this:this.getImmediateChild(n).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new K(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ks:this.priorityNode_;return new j(i,o,r)}}updateChild(e,n){const s=Q(e);if(s===null)return n;{R(Q(e)!==".priority"||gn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(pe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(be,(o,a)=>{n[o]=a.val(e),s++,r&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+l_(this.getPriority().val())+":"),this.forEachChild(be,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Dp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new K(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qi?-1:0}withIndex(e){if(e===ys||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ys||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(be),i=n.getIterator(be);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ys?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cS extends j{constructor(){super(new Ye(Ql),j.EMPTY_NODE,Lt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const qi=new cS;Object.defineProperties(K,{MIN:{value:new K(Ts,j.EMPTY_NODE)},MAX:{value:new K(Vn,qi)}});a_.__EMPTY_NODE=j.EMPTY_NODE;Ne.__childrenNodeConstructor=j;sS(qi);rS(qi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=!0;function Le(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,Le(e))}if(!(t instanceof Array)&&uS){const n=[];let s=!1;if(Je(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Le(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new K(o,l)))}}),n.length===0)return j.EMPTY_NODE;const r=Br(n,nS,o=>o.name,Ql);if(s){const o=Br(n,be.getCompare());return new j(r,Le(e),new Lt({".priority":o},{".priority":be}))}else return new j(r,Le(e),Lt.Default)}else{let n=j.EMPTY_NODE;return Je(t,(s,i)=>{if(Vt(t,s)&&s.substring(0,1)!=="."){const r=Le(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Le(e))}}iS(Le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS extends Io{constructor(e){super(),this.indexPath_=e,R(!Y(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Bs(e.name,n.name):r}makePost(e,n){const s=Le(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,s);return new K(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,qi);return new K(Vn,e)}toString(){return s_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS extends Io{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Bs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const s=Le(e);return new K(n,s)}toString(){return".value"}}const fS=new dS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t){return{type:"value",snapshotNode:t}}function Ss(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ri(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ai(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function pS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ri(n,a)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ss(n,s)):o.trackChildChange(Ai(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(be,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ri(i,r))}),n.isLeafNode()||n.forEachChild(be,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ai(i,r,o))}else s.trackChildChange(Ss(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.indexedFilter_=new Xl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ki.getStartPost_(e),this.endPost_=ki.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new K(n,s))||(s=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const r=this;return n.forEachChild(be,(o,a)=>{r.matches(new K(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ki(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new K(n,s))||(s=j.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;R(a.numChildren()===this.limit_,"");const l=new K(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Ai(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ri(n,h));const g=a.updateImmediateChild(n,j.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Ss(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ri(c.name,c.node)),r.trackChildChange(Ss(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ts}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===be}copy(){const e=new Zl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function mS(t){return t.loadsAllData()?new Xl(t.getIndex()):t.hasLimit()?new _S(t):new ki(t)}function Ih(t){const e={};if(t.isDefault())return e;let n;if(t.index_===be?n="$priority":t.index_===fS?n="$value":t.index_===ys?n="$key":(R(t.index_ instanceof hS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ae(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ae(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ae(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ae(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Th(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==be&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends e_{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Wi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Hr.getListenId_(e,s),a={};this.listens_[o]=a;const l=Ih(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Cs(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Hr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ih(e._queryParams),s=e._path.toString(),i=new Tl;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ds(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=bi(a.responseText)}catch{et("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&et("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(){return{value:null,children:new Map}}function f_(t,e,n){if(Y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Q(e);t.children.has(s)||t.children.set(s,$r());const i=t.children.get(s);e=pe(e),f_(i,e,n)}}function Ha(t,e,n){t.value!==null?n(e,t.value):yS(t,(s,i)=>{const r=new ue(e.toString()+"/"+s);Ha(i,r,n)})}function yS(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=10*1e3,ES=30*1e3,bS=5*60*1e3;class wS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new vS(e);const s=Sh+(ES-Sh)*Math.random();oi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Je(e,(i,r)=>{r>0&&Vt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),oi(this.reportStats_.bind(this),Math.floor(Math.random()*2*bS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pt||(pt={}));function p_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ec(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=pt.ACK_USER_WRITE,this.source=p_()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(e));return new jr(ne(),n,this.revert)}}else return R(Q(this.path)===e,"operationForChild called for unrelated child."),new jr(pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this.source=e,this.path=n,this.type=pt.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new Oi(this.source,ne()):new Oi(this.source,pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=pt.OVERWRITE}operationForChild(e){return Y(this.path)?new qn(this.source,ne(),this.snap.getImmediateChild(e)):new qn(this.source,pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=pt.MERGE}operationForChild(e){if(Y(this.path)){const n=this.children.subtree(new ue(e));return n.isEmpty()?null:n.value?new qn(this.source,ne(),n.value):new Ni(this.source,ne(),n)}else return R(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ni(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const n=Q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function IS(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(pS(o.childName,o.snapshotNode))}),Ys(t,i,"child_removed",e,s,n),Ys(t,i,"child_added",e,s,n),Ys(t,i,"child_moved",r,s,n),Ys(t,i,"child_changed",e,s,n),Ys(t,i,"value",e,s,n),i}function Ys(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>SS(t,a,l)),o.forEach(a=>{const l=TS(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function TS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function SS(t,e,n){if(e.childName==null||n.childName==null)throw xs("Should only compare child_ events.");const s=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t,e){return{eventCache:t,serverCache:e}}function ai(t,e,n,s){return To(new yn(e,n,s),t.serverCache)}function __(t,e,n,s){return To(t.eventCache,new yn(e,n,s))}function Wr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function zn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta;const RS=()=>(ta||(ta=new Ye(dT)),ta);class me{constructor(e,n=RS()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return Je(e,(s,i)=>{n=n.set(new ue(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ne(),value:this.value};if(Y(e))return null;{const s=Q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(pe(e),n);return r!=null?{path:ke(new ue(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const n=Q(e),s=this.children.get(n);return s!==null?s.subtree(pe(e)):new me(null)}}set(e,n){if(Y(e))return new me(n,this.children);{const s=Q(e),r=(this.children.get(s)||new me(null)).set(pe(e),n),o=this.children.insert(s,r);return new me(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=Q(e),s=this.children.get(n);if(s){const i=s.remove(pe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new me(null):new me(this.value,r)}else return this}}get(e){if(Y(e))return this.value;{const n=Q(e),s=this.children.get(n);return s?s.get(pe(e)):null}}setTree(e,n){if(Y(e))return n;{const s=Q(e),r=(this.children.get(s)||new me(null)).setTree(pe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new me(this.value,o)}}fold(e){return this.fold_(ne(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ke(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ne(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Y(e))return null;{const r=Q(e),o=this.children.get(r);return o?o.findOnPath_(pe(e),ke(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ne(),n)}foreachOnPath_(e,n,s){if(Y(e))return this;{this.value&&s(n,this.value);const i=Q(e),r=this.children.get(i);return r?r.foreachOnPath_(pe(e),ke(n,i),s):new me(null)}}foreach(e){this.foreach_(ne(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ke(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.writeTree_=e}static empty(){return new mt(new me(null))}}function li(t,e,n){if(Y(e))return new mt(new me(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=qe(i,e);return r=r.updateChild(o,n),new mt(t.writeTree_.set(i,r))}else{const i=new me(n),r=t.writeTree_.setTree(e,i);return new mt(r)}}}function Rh(t,e,n){let s=t;return Je(n,(i,r)=>{s=li(s,ke(e,i),r)}),s}function Ah(t,e){if(Y(e))return mt.empty();{const n=t.writeTree_.setTree(e,new me(null));return new mt(n)}}function $a(t,e){return Jn(t,e)!=null}function Jn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(qe(n.path,e)):null}function kh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(be,(s,i)=>{e.push(new K(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new K(s,i.value))}),e}function dn(t,e){if(Y(e))return t;{const n=Jn(t,e);return n!=null?new mt(new me(n)):new mt(t.writeTree_.subtree(e))}}function ja(t){return t.writeTree_.isEmpty()}function Rs(t,e){return m_(ne(),t.writeTree_,e)}function m_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(R(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=m_(ke(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ke(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t,e){return E_(e,t)}function AS(t,e,n,s,i){R(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=li(t.visibleWrites,e,n)),t.lastWriteId=s}function kS(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function OS(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&NS(a,s.path)?i=!1:ft(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return PS(t),!0;if(s.snap)t.visibleWrites=Ah(t.visibleWrites,s.path);else{const a=s.children;Je(a,l=>{t.visibleWrites=Ah(t.visibleWrites,ke(s.path,l))})}return!0}else return!1}function NS(t,e){if(t.snap)return ft(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ft(ke(t.path,n),e))return!0;return!1}function PS(t){t.visibleWrites=g_(t.allWrites,xS,ne()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function xS(t){return t.visible}function g_(t,e,n){let s=mt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)ft(n,o)?(a=qe(n,o),s=li(s,a,r.snap)):ft(o,n)&&(a=qe(o,n),s=li(s,ne(),r.snap.getChild(a)));else if(r.children){if(ft(n,o))a=qe(n,o),s=Rh(s,a,r.children);else if(ft(o,n))if(a=qe(o,n),Y(a))s=Rh(s,ne(),r.children);else{const l=Cs(r.children,Q(a));if(l){const c=l.getChild(pe(a));s=li(s,ne(),c)}}}else throw xs("WriteRecord should have .snap or .children")}}return s}function y_(t,e,n,s,i){if(!s&&!i){const r=Jn(t.visibleWrites,e);if(r!=null)return r;{const o=dn(t.visibleWrites,e);if(ja(o))return n;if(n==null&&!$a(o,ne()))return null;{const a=n||j.EMPTY_NODE;return Rs(o,a)}}}else{const r=dn(t.visibleWrites,e);if(!i&&ja(r))return n;if(!i&&n==null&&!$a(r,ne()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ft(c.path,e)||ft(e,c.path))},a=g_(t.allWrites,o,e),l=n||j.EMPTY_NODE;return Rs(a,l)}}}function DS(t,e,n){let s=j.EMPTY_NODE;const i=Jn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(be,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=dn(t.visibleWrites,e);return n.forEachChild(be,(o,a)=>{const l=Rs(dn(r,new ue(o)),a);s=s.updateImmediateChild(o,l)}),kh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=dn(t.visibleWrites,e);return kh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function MS(t,e,n,s,i){R(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ke(e,n);if($a(t.visibleWrites,r))return null;{const o=dn(t.visibleWrites,r);return ja(o)?i.getChild(n):Rs(o,i.getChild(n))}}function LS(t,e,n,s){const i=ke(e,n),r=Jn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=dn(t.visibleWrites,i);return Rs(o,s.getNode().getImmediateChild(n))}else return null}function FS(t,e){return Jn(t.visibleWrites,e)}function US(t,e,n,s,i,r,o){let a;const l=dn(t.visibleWrites,e),c=Jn(l,ne());if(c!=null)a=c;else if(n!=null)a=Rs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function BS(){return{visibleWrites:mt.empty(),allWrites:[],lastWriteId:-1}}function Vr(t,e,n,s){return y_(t.writeTree,t.treePath,e,n,s)}function nc(t,e){return DS(t.writeTree,t.treePath,e)}function Oh(t,e,n,s){return MS(t.writeTree,t.treePath,e,n,s)}function qr(t,e){return FS(t.writeTree,ke(t.treePath,e))}function HS(t,e,n,s,i,r){return US(t.writeTree,t.treePath,e,n,s,i,r)}function sc(t,e,n){return LS(t.writeTree,t.treePath,e,n)}function v_(t,e){return E_(ke(t.treePath,e),t.writeTree)}function E_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ai(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ri(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ss(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ai(s,e.snapshotNode,i.oldSnap));else throw xs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const b_=new jS;class ic{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new yn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return sc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:zn(this.viewCache_),r=HS(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t){return{filter:t}}function VS(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qS(t,e,n,s,i){const r=new $S;let o,a;if(n.type===pt.OVERWRITE){const c=n;c.source.fromUser?o=Wa(t,e,c.path,c.snap,s,i,r):(R(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Y(c.path),o=zr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===pt.MERGE){const c=n;c.source.fromUser?o=GS(t,e,c.path,c.children,s,i,r):(R(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Va(t,e,c.path,c.children,s,i,a,r))}else if(n.type===pt.ACK_USER_WRITE){const c=n;c.revert?o=JS(t,e,c.path,s,i,r):o=KS(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===pt.LISTEN_COMPLETE)o=YS(t,e,n.path,s,r);else throw xs("Unknown operation type: "+n.type);const l=r.getChanges();return zS(e,o,l),{viewCache:o,changes:l}}function zS(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Wr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(d_(Wr(e)))}}function w_(t,e,n,s,i,r){const o=e.eventCache;if(qr(s,n)!=null)return e;{let a,l;if(Y(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=zn(e),u=c instanceof j?c:j.EMPTY_NODE,h=nc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Vr(s,zn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Q(n);if(c===".priority"){R(gn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Oh(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=pe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Oh(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=sc(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return ai(e,a,o.isFullyInitialized()||Y(n),t.filter.filtersNodes())}}function zr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Y(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=Q(n);if(!l.isCompleteForPath(n)&&gn(n)>1)return e;const m=pe(n),T=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),T):c=u.updateChild(l.getNode(),p,T,m,b_,null)}const h=__(e,c,l.isFullyInitialized()||Y(n),u.filtersNodes()),d=new ic(i,h,r);return w_(t,h,n,i,d,a)}function Wa(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new ic(i,e,r);if(Y(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ai(e,c,!0,t.filter.filtersNodes());else{const h=Q(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ai(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=pe(n),p=a.getNode().getImmediateChild(h);let m;if(Y(d))m=s;else{const g=u.getCompleteChild(h);g!=null?n_(d)===".priority"&&g.getChild(i_(d)).isEmpty()?m=g:m=g.updateChild(d,s):m=j.EMPTY_NODE}if(p.equals(m))l=e;else{const g=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=ai(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Nh(t,e){return t.eventCache.isCompleteForChild(e)}function GS(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ke(n,l);Nh(e,Q(u))&&(a=Wa(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ke(n,l);Nh(e,Q(u))||(a=Wa(t,a,u,c,i,r,o))}),a}function Ph(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Va(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Y(n)?c=s:c=new me(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=Ph(t,p,d);l=zr(t,l,new ue(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),g=Ph(t,m,d);l=zr(t,l,new ue(h),g,i,r,o,a)}}),l}function KS(t,e,n,s,i,r,o){if(qr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return zr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(Y(n)){let c=new me(null);return l.getNode().forEachChild(ys,(u,h)=>{c=c.set(new ue(u),h)}),Va(t,e,n,c,i,r,a,o)}else return e}else{let c=new me(null);return s.foreach((u,h)=>{const d=ke(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Va(t,e,n,c,i,r,a,o)}}function YS(t,e,n,s,i){const r=e.serverCache,o=__(e,r.getNode(),r.isFullyInitialized()||Y(n),r.isFiltered());return w_(t,o,n,s,b_,i)}function JS(t,e,n,s,i,r){let o;if(qr(s,n)!=null)return e;{const a=new ic(s,e,i),l=e.eventCache.getNode();let c;if(Y(n)||Q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Vr(s,zn(e));else{const h=e.serverCache.getNode();R(h instanceof j,"serverChildren would be complete if leaf node"),u=nc(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Q(n);let h=sc(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,pe(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,j.EMPTY_NODE,pe(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Vr(s,zn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||qr(s,ne())!=null,ai(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Xl(s.getIndex()),r=mS(s);this.processor_=WS(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(j.EMPTY_NODE,a.getNode(),null),u=new yn(l,o.isFullyInitialized(),i.filtersNodes()),h=new yn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=To(h,u),this.eventGenerator_=new CS(this.query_)}get query(){return this.query_}}function XS(t){return t.viewCache_.serverCache.getNode()}function ZS(t){return Wr(t.viewCache_)}function eR(t,e){const n=zn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Y(e)&&!n.getImmediateChild(Q(e)).isEmpty())?n.getChild(e):null}function xh(t){return t.eventRegistrations_.length===0}function tR(t,e){t.eventRegistrations_.push(e)}function Dh(t,e,n){const s=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Mh(t,e,n,s){e.type===pt.MERGE&&e.source.queryId!==null&&(R(zn(t.viewCache_),"We should always have a full cache before handling merges"),R(Wr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=qS(t.processor_,i,e,n,s);return VS(t.processor_,r.viewCache),R(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,C_(t,r.changes,r.viewCache.eventCache.getNode(),null)}function nR(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(be,(r,o)=>{s.push(Ss(r,o))}),n.isFullyInitialized()&&s.push(d_(n.getNode())),C_(t,s,n.getNode(),e)}function C_(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return IS(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr;class I_{constructor(){this.views=new Map}}function sR(t){R(!Gr,"__referenceConstructor has already been defined"),Gr=t}function iR(){return R(Gr,"Reference.ts has not been loaded"),Gr}function rR(t){return t.views.size===0}function rc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return R(r!=null,"SyncTree gave us an op for an invalid query."),Mh(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Mh(o,e,n,s));return r}}function T_(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Vr(n,i?s:null),l=!1;a?l=!0:s instanceof j?(a=nc(n,s),l=!1):(a=j.EMPTY_NODE,l=!1);const c=To(new yn(a,l,!1),new yn(s,i,!1));return new QS(e,c)}return o}function oR(t,e,n,s,i,r){const o=T_(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),tR(o,n),nR(o,n)}function aR(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=vn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Dh(c,n,s)),xh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Dh(l,n,s)),xh(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!vn(t)&&r.push(new(iR())(e._repo,e._path)),{removed:r,events:o}}function S_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function fn(t,e){let n=null;for(const s of t.views.values())n=n||eR(s,e);return n}function R_(t,e){if(e._queryParams.loadsAllData())return Ro(t);{const s=e._queryIdentifier;return t.views.get(s)}}function A_(t,e){return R_(t,e)!=null}function vn(t){return Ro(t)!=null}function Ro(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr;function lR(t){R(!Kr,"__referenceConstructor has already been defined"),Kr=t}function cR(){return R(Kr,"Reference.ts has not been loaded"),Kr}let uR=1;class Lh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=BS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hR(t,e,n,s,i){return AS(t.pendingWriteTree_,e,n,s,i),i?Gi(t,new qn(p_(),e,n)):[]}function as(t,e,n=!1){const s=kS(t.pendingWriteTree_,e);if(OS(t.pendingWriteTree_,e)){let r=new me(null);return s.snap!=null?r=r.set(ne(),!0):Je(s.children,o=>{r=r.set(new ue(o),!0)}),Gi(t,new jr(s.path,r,n))}else return[]}function zi(t,e,n){return Gi(t,new qn(ec(),e,n))}function dR(t,e,n){const s=me.fromObject(n);return Gi(t,new Ni(ec(),e,s))}function fR(t,e){return Gi(t,new Oi(ec(),e))}function pR(t,e,n){const s=oc(t,n);if(s){const i=ac(s),r=i.path,o=i.queryId,a=qe(r,e),l=new Oi(tc(o),a);return lc(t,r,l)}else return[]}function k_(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||A_(o,e))){const l=aR(o,e,n,s);rR(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,p)=>vn(p));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=yR(d);for(let m=0;m<p.length;++m){const g=p[m],T=g.query,I=D_(t,g);t.listenProvider_.startListening(ci(T),Pi(t,T),I.hashFn,I.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ci(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(Ao(d));t.listenProvider_.stopListening(ci(d),p)}))}vR(t,c)}return a}function O_(t,e,n,s){const i=oc(t,s);if(i!=null){const r=ac(i),o=r.path,a=r.queryId,l=qe(o,e),c=new qn(tc(a),l,n);return lc(t,o,c)}else return[]}function _R(t,e,n,s){const i=oc(t,s);if(i){const r=ac(i),o=r.path,a=r.queryId,l=qe(o,e),c=me.fromObject(n),u=new Ni(tc(a),l,c);return lc(t,o,u)}else return[]}function mR(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const m=qe(d,i);r=r||fn(p,m),o=o||vn(p)});let a=t.syncPointTree_.get(i);a?(o=o||vn(a),r=r||fn(a,ne())):(a=new I_,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,m)=>{const g=fn(m,ne());g&&(r=r.updateImmediateChild(p,g))}));const c=A_(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ao(e);R(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=ER();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=So(t.pendingWriteTree_,i);let h=oR(a,e,n,u,r,l);if(!c&&!o&&!s){const d=R_(a,e);h=h.concat(bR(t,e,d))}return h}function N_(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=qe(o,e),c=fn(a,l);if(c)return c});return y_(i,e,r,n,!0)}function gR(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=qe(c,n);s=s||fn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||fn(i,ne()):(i=new I_,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new yn(s,!0,!1):null,a=So(t.pendingWriteTree_,e._path),l=T_(i,e,a,r?o.getNode():j.EMPTY_NODE,r);return ZS(l)}function Gi(t,e){return P_(e,t.syncPointTree_,null,So(t.pendingWriteTree_,ne()))}function P_(t,e,n,s){if(Y(t.path))return x_(t,e,n,s);{const i=e.get(ne());n==null&&i!=null&&(n=fn(i,ne()));let r=[];const o=Q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=v_(s,o);r=r.concat(P_(a,l,c,u))}return i&&(r=r.concat(rc(i,t,s,n))),r}}function x_(t,e,n,s){const i=e.get(ne());n==null&&i!=null&&(n=fn(i,ne()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=v_(s,o),u=t.operationForChild(o);u&&(r=r.concat(x_(u,a,l,c)))}),i&&(r=r.concat(rc(i,t,s,n))),r}function D_(t,e){const n=e.query,s=Pi(t,n);return{hashFn:()=>(XS(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?pR(t,n._path,s):fR(t,n._path);{const r=_T(i,n);return k_(t,n,null,r)}}}}function Pi(t,e){const n=Ao(e);return t.queryToTagMap.get(n)}function Ao(t){return t._path.toString()+"$"+t._queryIdentifier}function oc(t,e){return t.tagToQueryMap.get(e)}function ac(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function lc(t,e,n){const s=t.syncPointTree_.get(e);R(s,"Missing sync point for query tag that we're tracking");const i=So(t.pendingWriteTree_,e);return rc(s,n,i,null)}function yR(t){return t.fold((e,n,s)=>{if(n&&vn(n))return[Ro(n)];{let i=[];return n&&(i=S_(n)),Je(s,(r,o)=>{i=i.concat(o)}),i}})}function ci(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(cR())(t._repo,t._path):t}function vR(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ao(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function ER(){return uR++}function bR(t,e,n){const s=e._path,i=Pi(t,e),r=D_(t,n),o=t.listenProvider_.startListening(ci(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)R(!vn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!Y(c)&&u&&vn(u))return[Ro(u).query];{let d=[];return u&&(d=d.concat(S_(u).map(p=>p.query))),Je(h,(p,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ci(u),Pi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new cc(n)}node(){return this.node_}}class uc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ke(this.path_,e);return new uc(this.syncTree_,n)}node(){return N_(this.syncTree_,this.path_)}}const wR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fh=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return CR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return IR(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},CR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},IR=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&R(!1,"Unexpected increment value: "+s);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},TR=function(t,e,n,s){return hc(e,new uc(n,t),s)},SR=function(t,e,n){return hc(t,new cc(e),n)};function hc(t,e,n){const s=t.getPriority().val(),i=Fh(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Fh(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ne(a,Le(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ne(i))),o.forEachChild(be,(a,l)=>{const c=hc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function fc(t,e){let n=e instanceof ue?e:new ue(e),s=t,i=Q(n);for(;i!==null;){const r=Cs(s.node.children,i)||{children:{},childCount:0};s=new dc(i,s,r),n=pe(n),i=Q(n)}return s}function Hs(t){return t.node.value}function M_(t,e){t.node.value=e,qa(t)}function L_(t){return t.node.childCount>0}function RR(t){return Hs(t)===void 0&&!L_(t)}function ko(t,e){Je(t.node.children,(n,s)=>{e(new dc(n,t,s))})}function F_(t,e,n,s){n&&!s&&e(t),ko(t,i=>{F_(i,e,!0,s)}),n&&s&&e(t)}function AR(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ki(t){return new ue(t.parent===null?t.name:Ki(t.parent)+"/"+t.name)}function qa(t){t.parent!==null&&kR(t.parent,t.name,t)}function kR(t,e,n){const s=RR(n),i=Vt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,qa(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,qa(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=/[\[\].#$\/\u0000-\u001F\u007F]/,NR=/[\[\].#$\u0000-\u001F\u007F]/,na=10*1024*1024,U_=function(t){return typeof t=="string"&&t.length!==0&&!OR.test(t)},B_=function(t){return typeof t=="string"&&t.length!==0&&!NR.test(t)},PR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),B_(t)},H_=function(t,e,n){const s=n instanceof ue?new KT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Rn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Rn(s)+" with contents = "+e.toString());if(Mp(e))throw new Error(t+"contains "+e.toString()+" "+Rn(s));if(typeof e=="string"&&e.length>na/3&&_o(e)>na)throw new Error(t+"contains a string greater than "+na+" utf8 bytes "+Rn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Je(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!U_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Rn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);YT(s,o),H_(t,a,s),JT(s)}),i&&r)throw new Error(t+' contains ".value" child '+Rn(s)+" in addition to actual children.")}},$_=function(t,e,n,s){if(!(s&&n===void 0)&&!B_(n))throw new Error(Nf(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},xR=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$_(t,e,n,s)},DR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!U_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!PR(n))throw new Error(Nf(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function LR(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!r_(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function En(t,e,n){LR(t,n),FR(t,s=>ft(s,e)||ft(e,s))}function FR(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(UR(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function UR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ln&&Ue("event: "+n.toString()),Vi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR="repo_interrupt",HR=25;class $R{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new MR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$r(),this.transactionQueueTree_=new dc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function jR(t,e,n){if(t.stats_=Kl(t.repoInfo_),t.forceRestClient_||vT())t.server_=new Hr(t.repoInfo_,(s,i,r,o)=>{Uh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Bh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ae(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ut(t.repoInfo_,e,(s,i,r,o)=>{Uh(t,s,i,r,o)},s=>{Bh(t,s)},s=>{VR(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=IT(t.repoInfo_,()=>new wS(t.stats_,t.server_)),t.infoData_=new gS,t.infoSyncTree_=new Lh({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=zi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),pc(t,"connected",!1),t.serverSyncTree_=new Lh({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);En(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function WR(t){const n=t.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function j_(t){return wR({timestamp:WR(t)})}function Uh(t,e,n,s,i){t.dataUpdateCount++;const r=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=kr(n,c=>Le(c));o=_R(t.serverSyncTree_,r,l,i)}else{const l=Le(n);o=O_(t.serverSyncTree_,r,l,i)}else if(s){const l=kr(n,c=>Le(c));o=dR(t.serverSyncTree_,r,l)}else{const l=Le(n);o=zi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=gc(t,r)),En(t.eventQueue_,a,o)}function Bh(t,e){pc(t,"connected",e),e===!1&&GR(t)}function VR(t,e){Je(e,(n,s)=>{pc(t,n,s)})}function pc(t,e,n){const s=new ue("/.info/"+e),i=Le(n);t.infoData_.updateSnapshot(s,i);const r=zi(t.infoSyncTree_,s,i);En(t.eventQueue_,s,r)}function qR(t){return t.nextWriteId_++}function zR(t,e,n){const s=gR(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Le(i).withIndex(e._queryParams.getIndex());mR(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=zi(t.serverSyncTree_,e._path,r);else{const a=Pi(t.serverSyncTree_,e);o=O_(t.serverSyncTree_,e._path,r,a)}return En(t.eventQueue_,e._path,o),k_(t.serverSyncTree_,e,n,null,!0),r},i=>(_c(t,"get for query "+Ae(e)+" failed: "+i),Promise.reject(new Error(i))))}function GR(t){_c(t,"onDisconnectEvents");const e=j_(t),n=$r();Ha(t.onDisconnect_,ne(),(i,r)=>{const o=TR(i,r,t.serverSyncTree_,e);f_(n,i,o)});let s=[];Ha(n,ne(),(i,r)=>{s=s.concat(zi(t.serverSyncTree_,i,r));const o=QR(t,i);gc(t,o)}),t.onDisconnect_=$r(),En(t.eventQueue_,ne(),s)}function KR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(BR)}function _c(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ue(n,...e)}function W_(t,e,n){return N_(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function mc(t,e=t.transactionQueueTree_){if(e||Oo(t,e),Hs(e)){const n=q_(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&YR(t,Ki(e),n)}else L_(e)&&ko(e,n=>{mc(t,n)})}function YR(t,e,n){const s=n.map(c=>c.currentWriteId),i=W_(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];R(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=qe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{_c(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(as(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Oo(t,fc(t.transactionQueueTree_,e)),mc(t,t.transactionQueueTree_),En(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Vi(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{et("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}gc(t,e)}},o)}function gc(t,e){const n=V_(t,e),s=Ki(n),i=q_(t,n);return JR(t,i,s),s}function JR(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=qe(n,l.path);let u=!1,h;if(R(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(as(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=HR)u=!0,h="maxretry",i=i.concat(as(t.serverSyncTree_,l.currentWriteId,!0));else{const d=W_(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){H_("transaction failed: Data returned ",p,l.path);let m=Le(p);typeof p=="object"&&p!=null&&Vt(p,".priority")||(m=m.updatePriority(d.getPriority()));const T=l.currentWriteId,I=j_(t),P=SR(m,d,I);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=P,l.currentWriteId=qR(t),o.splice(o.indexOf(T),1),i=i.concat(hR(t.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),i=i.concat(as(t.serverSyncTree_,T,!0))}else u=!0,h="nodata",i=i.concat(as(t.serverSyncTree_,l.currentWriteId,!0))}En(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Oo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Vi(s[a]);mc(t,t.transactionQueueTree_)}function V_(t,e){let n,s=t.transactionQueueTree_;for(n=Q(e);n!==null&&Hs(s)===void 0;)s=fc(s,n),e=pe(e),n=Q(e);return s}function q_(t,e){const n=[];return z_(t,e,n),n.sort((s,i)=>s.order-i.order),n}function z_(t,e,n){const s=Hs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ko(e,i=>{z_(t,i,n)})}function Oo(t,e){const n=Hs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,M_(e,n.length>0?n:void 0)}ko(e,s=>{Oo(t,s)})}function QR(t,e){const n=Ki(V_(t,e)),s=fc(t.transactionQueueTree_,e);return AR(s,i=>{sa(t,i)}),sa(t,s),F_(s,i=>{sa(t,i)}),n}function sa(t,e){const n=Hs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(as(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?M_(e,void 0):n.length=r+1,En(t.eventQueue_,Ki(e),i);for(let o=0;o<s.length;o++)Vi(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ZR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):et(`Invalid query segment '${n}' in query '${t}'`)}return e}const Hh=function(t,e){const n=e0(t),s=n.namespace;n.domain==="firebase.com"&&$t(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&$t("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||uT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Gp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ue(n.pathString)}},e0=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=XR(t.substring(u,h)));const d=ZR(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ae(this.snapshot.exportVal())}}class n0{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Y(this._path)?null:n_(this._path)}get ref(){return new zt(this._repo,this._path)}get _queryIdentifier(){const e=Th(this._queryParams),n=zl(e);return n==="{}"?"default":n}get _queryObject(){return Th(this._queryParams)}isEqual(e){if(e=we(e),!(e instanceof yc))return!1;const n=this._repo===e._repo,s=r_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+GT(this._path)}}class zt extends yc{constructor(e,n){super(e,n,new Zl,!1)}get parent(){const e=i_(this._path);return e===null?null:new zt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class xi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ue(e),s=za(this.ref,e);return new xi(this._node.getChild(n),s,be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new xi(i,za(this.ref,s),be)))}hasChild(e){const n=new ue(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function sk(t,e){return t=we(t),t._checkNotDeleted("ref"),e!==void 0?za(t._root,e):t._root}function za(t,e){return t=we(t),Q(t._path)===null?xR("child","path",e,!1):$_("child","path",e,!1),new zt(t._repo,ke(t._path,e))}function ik(t){t=we(t);const e=new s0(()=>{}),n=new vc(e);return zR(t._repo,t,n).then(s=>new xi(s,new zt(t._repo,t._path),t._queryParams.getIndex()))}class vc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new t0("value",this,new xi(e.snapshotNode,new zt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new n0(this,e,n):null}matches(e){return e instanceof vc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}sR(zt);lR(zt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="FIREBASE_DATABASE_EMULATOR_HOST",Ga={};let r0=!1;function o0(t,e,n,s){t.repoInfo_=new Gp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),s&&(t.authTokenProvider_=s)}function a0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||$t("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ue("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Hh(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[i0]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Hh(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new gs(gs.OWNER):new bT(t.name,t.options,e);DR("Invalid Firebase Database URL",o),Y(o.path)||$t("Database URL must point to the root of a Firebase Database (not including a child path).");const h=c0(a,t,u,new ET(t.name,n));return new u0(h,t)}function l0(t,e){const n=Ga[e];(!n||n[t.key]!==t)&&$t(`Database ${e}(${t.repoInfo_}) has already been deleted.`),KR(t),delete n[t.key]}function c0(t,e,n,s){let i=Ga[e.name];i||(i={},Ga[e.name]=i);let r=i[t.toURLString()];return r&&$t("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new $R(t,r0,n,s),i[t.toURLString()]=r,r}class u0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(jR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zt(this._repo,ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(l0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$t("Cannot call "+e+" on a deleted database.")}}function rk(t=kl(),e){const n=mo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Tf("database");s&&h0(n,...s)}return n}function h0(t,e,n,s={}){t=we(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&$t("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&$t('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new gs(gs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Rf(s.mockUserToken,t.app.options.projectId);r=new gs(o)}o0(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t){rT(Ms),Bn(new mn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return a0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Rt(lh,ch,t),Rt(lh,ch,"esm2017")}Ut.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ut.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};d0();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="firebasestorage.googleapis.com",K_="storageBucket",f0=2*60*1e3,p0=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends Wt{constructor(e,n,s=0){super(ia(e),`Firebase Storage: ${n} (${ia(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ia(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ia(t){return"storage/"+t}function Ec(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce("unknown",t)}function _0(t){return new Ce("object-not-found","Object '"+t+"' does not exist.")}function m0(t){return new Ce("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g0(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce("unauthenticated",t)}function y0(){return new Ce("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v0(t){return new Ce("unauthorized","User does not have permission to access '"+t+"'.")}function E0(){return new Ce("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function b0(){return new Ce("canceled","User canceled the upload/download.")}function w0(t){return new Ce("invalid-url","Invalid URL '"+t+"'.")}function C0(t){return new Ce("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function I0(){return new Ce("no-default-bucket","No default bucket found. Did you set the '"+K_+"' property when initializing the app?")}function T0(){return new Ce("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function S0(){return new Ce("no-download-url","The given file does not have any download URLs.")}function R0(t){return new Ce("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ka(t){return new Ce("invalid-argument",t)}function Y_(){return new Ce("app-deleted","The Firebase app was deleted.")}function A0(t){return new Ce("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ui(t,e){return new Ce("invalid-format","String does not match format '"+t+"': "+e)}function Js(t){throw new Ce("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Ze.makeFromUrl(e,n)}catch{return new Ze(e,"")}if(s.path==="")return s;throw C0(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(F){F.path_=decodeURIComponent(F.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},g=n===G_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",I=new RegExp(`^https?://${g}/${i}/${T}`,"i"),k=[{regex:a,indices:l,postModify:r},{regex:p,indices:m,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let F=0;F<k.length;F++){const X=k[F],he=X.regex.exec(e);if(he){const Ie=he[X.indices.bucket];let W=he[X.indices.path];W||(W=""),s=new Ze(Ie,W),X.postModify(s);break}}if(s==null)throw w0(e);return s}}class k0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...T){c||(c=!0,e.apply(null,T))}function h(T){i=setTimeout(()=>{i=null,t(p,l())},T)}function d(){r&&clearTimeout(r)}function p(T,...I){if(c){d();return}if(T){d(),u.call(null,T,...I);return}if(l()||o){d(),u.call(null,T,...I);return}s<64&&(s*=2);let k;a===1?(a=2,k=0):k=(s+Math.random())*1e3,h(k)}let m=!1;function g(T){m||(m=!0,d(),!c&&(i!==null?(T||(a=2),clearTimeout(i),h(0)):T||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,g(!0)},n),g}function N0(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(t){return t!==void 0}function x0(t){return typeof t=="object"&&!Array.isArray(t)}function bc(t){return typeof t=="string"||t instanceof String}function $h(t){return wc()&&t instanceof Blob}function wc(){return typeof Blob<"u"&&!EE()}function jh(t,e,n,s){if(s<e)throw Ka(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Ka(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function J_(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Fn||(Fn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new rr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Fn.NO_ERROR,l=r.getStatus();if(!a||D0(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Fn.ABORT;s(!1,new rr(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new rr(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());P0(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Ec();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Y_():b0();o(l)}else{const l=E0();o(l)}};this.canceled_?n(!1,new rr(!1,null,!0)):this.backoffId_=O0(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&N0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class rr{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function L0(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function F0(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function U0(t,e){e&&(t["X-Firebase-GMPID"]=e)}function B0(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function H0(t,e,n,s,i,r,o=!0){const a=J_(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return U0(c,e),L0(c,n),F0(c,r),B0(c,s),new M0(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function j0(...t){const e=$0();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(wc())return new Blob(t);throw new Ce("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function W0(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(t){if(typeof atob>"u")throw R0("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ra{constructor(e,n){this.data=e,this.contentType=n||null}}function q0(t,e){switch(t){case St.RAW:return new ra(Q_(e));case St.BASE64:case St.BASE64URL:return new ra(X_(t,e));case St.DATA_URL:return new ra(G0(e),K0(e))}throw Ec()}function Q_(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function z0(t){let e;try{e=decodeURIComponent(t)}catch{throw ui(St.DATA_URL,"Malformed data URL.")}return Q_(e)}function X_(t,e){switch(t){case St.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw ui(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case St.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw ui(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=V0(e)}catch(i){throw i.message.includes("polyfill")?i:ui(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class Z_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ui(St.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Y0(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function G0(t){const e=new Z_(t);return e.base64?X_(St.BASE64,e.rest):z0(e.rest)}function K0(t){return new Z_(t).contentType}function Y0(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n){let s=0,i="";$h(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if($h(this.data_)){const s=this.data_,i=W0(s,e,n);return i===null?null:new an(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new an(s,!0)}}static getBlob(...e){if(wc()){const n=e.map(s=>s instanceof an?s.data_:s);return new an(j0.apply(null,n))}else{const n=e.map(o=>bc(o)?q0(St.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new an(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t){let e;try{e=JSON.parse(t)}catch{return null}return x0(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Q0(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function tm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(t,e){return e}class je{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||X0}}let or=null;function Z0(t){return!bc(t)||t.length<2?t:tm(t)}function nm(){if(or)return or;const t=[];t.push(new je("bucket")),t.push(new je("generation")),t.push(new je("metageneration")),t.push(new je("name","fullPath",!0));function e(r,o){return Z0(o)}const n=new je("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new je("size");return i.xform=s,t.push(i),t.push(new je("timeCreated")),t.push(new je("updated")),t.push(new je("md5Hash",null,!0)),t.push(new je("cacheControl",null,!0)),t.push(new je("contentDisposition",null,!0)),t.push(new je("contentEncoding",null,!0)),t.push(new je("contentLanguage",null,!0)),t.push(new je("contentType",null,!0)),t.push(new je("metadata","customMetadata",!0)),or=t,or}function eA(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new Ze(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function tA(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return eA(s,t),s}function sm(t,e,n){const s=em(e);return s===null?null:tA(t,s,n)}function nA(t,e,n,s){const i=em(e);if(i===null||!bc(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=Cc(d,n,s),m=J_({alt:"media",token:c});return p+m})[0]}function sA(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class im{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t){if(!t)throw Ec()}function iA(t,e){function n(s,i){const r=sm(t,i,e);return rm(r!==null),r}return n}function rA(t,e){function n(s,i){const r=sm(t,i,e);return rm(r!==null),nA(r,i,t.host,t._protocol)}return n}function om(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=y0():i=g0():n.getStatus()===402?i=m0(t.bucket):n.getStatus()===403?i=v0(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function oA(t){const e=om(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=_0(t.path)),r.serverResponse=i.serverResponse,r}return n}function aA(t,e,n){const s=e.fullServerUrl(),i=Cc(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new im(i,r,rA(t,n),o);return a.errorHandler=oA(e),a}function lA(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function cA(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=lA(null,e)),s}function uA(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let F=0;F<2;F++)k=k+Math.random().toString().slice(2);return k}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=cA(e,s,i),u=sA(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=an.getBlob(h,s,d);if(p===null)throw T0();const m={name:c.fullPath},g=Cc(r,t.host,t._protocol),T="POST",I=t.maxUploadRetryTime,P=new im(g,T,iA(t,n),I);return P.urlParams=m,P.headers=o,P.body=p.uploadData(),P.errorHandler=om(e),P}class hA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Fn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Fn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Fn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Js("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Js("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Js("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Js("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Js("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class dA extends hA{initXhr(){this.xhr_.responseType="text"}}function am(){return new dA}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n){this._service=e,n instanceof Ze?this._location=n:this._location=Ze.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Gn(e,n)}get root(){const e=new Ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tm(this._location.path)}get storage(){return this._service}get parent(){const e=J0(this._location.path);if(e===null)return null;const n=new Ze(this._location.bucket,e);return new Gn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw A0(e)}}function fA(t,e,n){t._throwIfRoot("uploadBytes");const s=uA(t.storage,t._location,nm(),new an(e,!0),n);return t.storage.makeRequestWithTokens(s,am).then(i=>({metadata:i,ref:t}))}function pA(t){t._throwIfRoot("getDownloadURL");const e=aA(t.storage,t._location,nm());return t.storage.makeRequestWithTokens(e,am).then(n=>{if(n===null)throw S0();return n})}function _A(t,e){const n=Q0(t._location.path,e),s=new Ze(t._location.bucket,n);return new Gn(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){return/^[A-Za-z]+:\/\//.test(t)}function gA(t,e){return new Gn(t,e)}function lm(t,e){if(t instanceof Ic){const n=t;if(n._bucket==null)throw I0();const s=new Gn(n,n._bucket);return e!=null?lm(s,e):s}else return e!==void 0?_A(t,e):t}function yA(t,e){if(e&&mA(e)){if(t instanceof Ic)return gA(t,e);throw Ka("To use ref(service, url), the first argument must be a Storage instance.")}else return lm(t,e)}function Wh(t,e){const n=e==null?void 0:e[K_];return n==null?null:Ze.makeFromBucketSpec(n,t)}function vA(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Rf(i,t.app.options.projectId))}class Ic{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=G_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=f0,this._maxUploadRetryTime=p0,this._requests=new Set,i!=null?this._bucket=Ze.makeFromBucketSpec(i,this._host):this._bucket=Wh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ze.makeFromBucketSpec(this._url,e):this._bucket=Wh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){jh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){jh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Gn(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new k0(Y_());{const o=H0(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Vh="@firebase/storage",qh="0.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="storage";function ok(t,e,n){return t=we(t),fA(t,e,n)}function ak(t){return t=we(t),pA(t)}function lk(t,e){return t=we(t),yA(t,e)}function ck(t=kl(),e){t=we(t);const s=mo(t,cm).getImmediate({identifier:e}),i=Tf("storage");return i&&EA(s,...i),s}function EA(t,e,n,s={}){vA(t,e,n,s)}function bA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ic(n,s,i,e,Ms)}function wA(){Bn(new mn(cm,bA,"PUBLIC").setMultipleInstances(!0)),Rt(Vh,qh,""),Rt(Vh,qh,"esm2017")}wA();export{KA as $,ZA as A,ek as B,nk as C,jA as D,PA as E,Ke as F,RA as G,FA as H,Qg as I,BA as J,qA as K,Nb as L,rk as M,ck as N,HA as O,Jg as P,rt as Q,VA as R,WA as S,LA as T,MA as U,Ns as V,OA as W,cr as X,sk as Y,ik as Z,za as _,xA as a,JA as a0,YA as a1,GA as a2,lk as a3,ok as a4,ak as a5,QA as a6,XA as a7,CA as a8,Yg as a9,DA as b,$d as c,Td as d,Wd as e,AA as f,st as g,Qm as h,Ad as i,Ve as j,UA as k,$A as l,SA as m,Jr as n,Bd as o,TA as p,fs as q,kA as r,NA as s,IA as t,hs as u,zA as v,cg as w,ud as x,hl as y,tk as z};
