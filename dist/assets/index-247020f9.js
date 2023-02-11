import{w as H,T as q,v as O,a as K,c as J}from"./runtime-dom.esm-bundler-d846f7c9.js";import{d as p,o as c,c as h,w as k,a as l,r as S,b as f,e as a,t as b,f as $,_ as r,g as M,h as g,i as R,j as d,u as x,n as I,p as Q,k as X,l as z,F as U,m as F,q as Y,s as ee,v as E,x as B,y as N}from"./_plugin-vue_export-helper-b66d6dea.js";import{U as P,g as te}from"./index.esm2017-426fdacd.js";import{u as A,c as ne}from"./vuex.esm-bundler-0c4770ad.js";import{_ as L,a as oe,k as se,r as ce}from"./index-152d9d33.js";import{u as ae,a as ie}from"./vue-router-920ae1c6.js";import{g as T,o as le,s as re,r as ue,i as _e}from"./index-e5b3cc81-e712630f.js";import{l as y}from"./index-770713f3.js";import{g as de}from"./index.esm2017-53faf82b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const me={key:0,class:"link__span"},pe=p({__name:"LinkIcon",props:{text:null,route:null,firstIcon:null,secondIcon:null},setup(e){return(t,s)=>{const n=$("router-link");return c(),h(n,{to:e.route,class:"link main-black flex flex_align-center"},{default:k(()=>[e.firstIcon?(c(),l("span",me,[(c(),h(S(t.$route.path!==e.route?e.firstIcon:e.secondIcon?e.secondIcon:e.firstIcon),{class:"link__icon"}))])):f("",!0),a("span",null,b(e.text),1)]),_:1},8,["to"])}}});const m=r(pe,[["__scopeId","data-v-9e28d555"]]),ve=e=>(Q("data-v-d10f24d8"),e=e(),X(),e),he={class:"header container flex flex_space-between flex_align-center"},fe=ve(()=>a("p",{class:"logo__title no-copy"},[a("strong",null,"GSTORE")],-1)),ge={key:0,class:"nav-bar flex flex_align-center no-copy"},we={class:"user__text"},xe={key:1,class:"burger-menu flex flex_align-center"},$e={class:"user flex flex_align-center cursor-pointer main-black"},Ve={class:"user__text"},ye=p({__name:"CustomHeader",setup(e){const t=A(),s=M(()=>t.state.user.userInfo.nickname),n=M(()=>t.state.user.isAuth),o=M(()=>n.value?s.value:"Profile"),i=g(!1),u=g(window.innerWidth<=600),_=g(!1);function w(){window.innerWidth<=600?u.value=!0:(u.value=!1,_.value=!1)}return window.addEventListener("resize",w),R(()=>{window.removeEventListener("resize",w)}),(C,v)=>{const G=$("icon-logo"),W=$("icon-arrow"),D=$("v-modal-window");return c(),l("div",he,[a("div",{class:"logo flex flex_align-center main-black cursor-pointer",onClick:v[0]||(v[0]=V=>C.$router.push("/"))},[d(G,{class:"logo__icon icon"}),fe]),u.value?f("",!0):(c(),l("nav",ge,[d(m,{text:"Discover",route:"/",firstIcon:"icon-discover",secondIcon:"icon-discover-active"}),d(m,{text:"Explore",route:"/explore",firstIcon:"icon-explore",secondIcon:"icon-explore-active"}),d(m,{text:"Favorites",route:"/favorites",firstIcon:"icon-like",secondIcon:"icon-like-active"}),d(m,{text:"Shopping",route:"/shopping",firstIcon:"icon-cart",secondIcon:"icon-cart-active"}),a("div",{class:"user flex flex_align-center cursor-pointer main-black",onClick:v[3]||(v[3]=H(V=>i.value=!i.value,["stop"]))},[d(P,{size:"30px",class:"user_pic"}),a("p",we,b(x(o)),1),d(W,{class:I(["user__arrow icon",{icon_active:i.value}])},null,8,["class"]),d(D,{class:"user__menu flex flex_column",isVisible:i.value,"onUpdate:isVisible":v[2]||(v[2]=V=>i.value=V)},{default:k(()=>[x(n)?f("",!0):(c(),h(m,{key:0,text:"Sign Up",route:"/register"})),x(n)?f("",!0):(c(),h(m,{key:1,text:"Sign In",route:"/login"})),x(n)?(c(),h(m,{key:2,text:"My Profile",route:"/user",firstIcon:"icon-user"})):f("",!0),x(n)?(c(),h(m,{key:3,text:"Sign Out",route:"/login",onClick:v[1]||(v[1]=V=>C.$store.dispatch("user/signOut"))})):f("",!0)]),_:1},8,["isVisible"])])])),u.value?(c(),l("div",xe,[(c(),h(S(_.value?"icon-cross":"icon-burger"),{class:"burger-menu__link icon main-black cursor-pointer",onClick:v[4]||(v[4]=H(V=>_.value=!_.value,["stop"]))})),d(D,{class:"burger-menu__content flex flex_column no-copy",isVisible:_.value,"onUpdate:isVisible":v[6]||(v[6]=V=>_.value=V)},{default:k(()=>[a("div",$e,[d(P,{size:"30px",class:"user_pic"}),a("p",Ve,b(x(o)),1)]),x(n)?(c(),h(m,{key:0,text:"My Profile",route:"/user",firstIcon:"icon-user"})):f("",!0),d(m,{text:"Discover",route:"/",firstIcon:"icon-discover",secondIcon:"icon-discover-active"}),d(m,{text:"Explore",route:"/explore",firstIcon:"icon-explore",secondIcon:"icon-explore-active"}),d(m,{text:"Favorites",route:"/favorites",firstIcon:"icon-like",secondIcon:"icon-like-active"}),d(m,{text:"Shopping",route:"/shopping",firstIcon:"icon-cart",secondIcon:"icon-cart-active"}),x(n)?f("",!0):(c(),h(m,{key:1,text:"Sign Up",route:"/register"})),x(n)?f("",!0):(c(),h(m,{key:2,text:"Sign In",route:"/login"})),x(n)?(c(),h(m,{key:3,text:"Sign Out",route:"/login",onClick:v[5]||(v[5]=V=>C.$store.dispatch("user/signOut"))})):f("",!0)]),_:1},8,["isVisible"])])):f("",!0)])}}});const Ie=r(ye,[["__scopeId","data-v-d10f24d8"]]),be={class:"notification"},ke=p({__name:"Notification",props:{delay:null},setup(e){const t=e,s=A(),n=M(()=>s.state.notification.notificationList);let o=0;return z(n.value,()=>{o<n.value.length&&setTimeout(()=>s.commit("notification/removeNotification"),t.delay),o=n.value.length}),(i,u)=>(c(),l("div",be,[d(q,{name:"list"},{default:k(()=>[(c(!0),l(U,null,F(x(n),_=>(c(),l("div",{class:"notification__item main-white",key:_},b(_),1))),128))]),_:1})]))}});const Ae=r(ke,[["__scopeId","data-v-b2d4348e"]]),Ce=(e,t)=>{const s=e[t];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((n,o)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+t)))})},Le=p({__name:"AppLayout",setup(e){const t=g(),s=ae();return z(()=>{var n;return(n=s.meta)==null?void 0:n.layout},async n=>{try{const o=n&&await Ce(Object.assign({"./AppLayout.vue":()=>L(()=>import("./AppLayout-17b3655e.js"),["assets/AppLayout-17b3655e.js","assets/runtime-dom.esm-bundler-d846f7c9.js","assets/_plugin-vue_export-helper-b66d6dea.js","assets/index.esm2017-426fdacd.js","assets/vuex.esm-bundler-0c4770ad.js","assets/index-e5b3cc81-e712630f.js","assets/index-9edc3537.css","assets/index-152d9d33.js","assets/vue-router-920ae1c6.js","assets/index-150629b7.css","assets/index-770713f3.js","assets/index.esm2017-53faf82b.js"]),"./AuthLayout.vue":()=>L(()=>import("./AuthLayout-dd84a554.js"),["assets/AuthLayout-dd84a554.js","assets/vuex.esm-bundler-0c4770ad.js","assets/_plugin-vue_export-helper-b66d6dea.js","assets/vue-router-920ae1c6.js","assets/AuthLayout-c0bef7aa.css"]),"./DefaultLayout.vue":()=>L(()=>import("./DefaultLayout-a796362c.js"),["assets/DefaultLayout-a796362c.js","assets/_plugin-vue_export-helper-b66d6dea.js","assets/vuex.esm-bundler-0c4770ad.js","assets/DefaultLayout-62effe9d.css"]),"./UserLayout.vue":()=>L(()=>import("./UserLayout-de054ef7.js"),["assets/UserLayout-de054ef7.js","assets/_plugin-vue_export-helper-b66d6dea.js"])}),`./${n}.vue`);t.value=Y(o==null?void 0:o.default)}catch{}},{immediate:!0}),z(s,()=>{window.scrollTo(0,0)}),(n,o)=>{const i=$("router-view");return c(),h(S(t.value),{class:I([n.$route.name!=="game"?"container page_padding":"","page"])},{default:k(()=>[d(i)]),_:1},8,["class"])}}});const Me=p({__name:"App",setup(e){const t=A();return ee(()=>{t.dispatch("genres/fetchGenres"),t.dispatch("user/checkAuth")}),(s,n)=>(c(),l(U,null,[d(Ae,{delay:2500}),a("header",null,[d(Ie)]),a("main",null,[d(Le)])],64))}});const He={namespaced:!0,state:()=>({isAuth:!1,userInfo:{nickname:"",email:"",image:"",registrationDate:""}}),mutations:{setAuth(e,t){e.isAuth=t},setUserNickname(e,t){e.userInfo.nickname=t},setUserEmail(e,t){e.userInfo.email=t},setUserImage(e,t){e.userInfo.image=t},setUserRegDate(e,t){e.userInfo.registrationDate=t}},actions:{checkAuth({state:e,commit:t}){const s=T();le(s,n=>{n&&(t("setAuth",!0),t("setUserNickname",n.displayName),t("setUserImage",n.photoURL),t("setUserEmail",n.email),t("setUserRegDate",n.metadata.creationTime))})},signOut({state:e,commit:t}){const s=T();re(s).then(()=>{t("setAuth",!1),t("setUserNickname",""),t("setUserImage",""),t("setUserEmail",""),t("setUserRegDate","")})}}},Se={namespaced:!0,state:()=>({notificationList:[]}),mutations:{pushNotification(e,t){e.notificationList.push(t)},removeNotification(e){e.notificationList.splice(0,1)}}},ze={namespaced:!0,state:()=>({isLoading:!1}),mutations:{setLoading(e,t){e.isLoading=t}}},Be={namespaced:!0,state:()=>({genresList:[]}),mutations:{setGenresList(e,t){e.genresList=t}},actions:{async fetchGenres({state:e,commit:t}){try{const s=await oe.get("https://api.rawg.io/api/genres?",{params:{key:se,page_size:12}});t("setGenresList",s.data.results)}catch(s){console.warn(s)}}}},Ue=ne({modules:{user:He,notification:Se,loading:ze,genres:Be}}),Ee={class:"checkbox cursor-pointer no copy"},Ne=["value"],Ze=p({__name:"Vcheckbox",props:{modelValue:null,value:null},emits:["update:modelValue"],setup(e,{emit:t}){const s=e;function n(){const o=[...s.modelValue];o.includes(s.value)?o.splice(o.indexOf(s.value),1):o.push(s.value),t("update:modelValue",o)}return(o,i)=>(c(),l("label",Ee,[a("span",{class:I(["checkbox__title",e.modelValue.includes(e.value)?"main-white":"second-white"])},[E(o.$slots,"default",{},void 0,!0)],2),a("span",{class:I(["checkbox__checkmark",`checkbox__checkmark_${e.modelValue.includes(e.value)?"selected":"deselected"}`])},null,2),a("input",{class:"checkbox__input",type:"checkbox",value:e.value,onChange:n},null,40,Ne)]))}});const De=r(Ze,[["__scopeId","data-v-9ed043c9"]]),Oe=["value"],Pe={class:"second-white",value:""},Te=["value"],Re=p({__name:"Vselect",props:{modelValue:null,options:null},emits:["update:modelValue"],setup(e,{emit:t}){function s(n){t("update:modelValue",n.target.value)}return(n,o)=>(c(),l("select",{class:"select main-white",value:e.modelValue,onChange:s},[a("option",Pe,[E(n.$slots,"default",{},void 0,!0)]),(c(!0),l(U,null,F(e.options,i=>(c(),l("option",{key:i.value,value:i.value},b(i.name),9,Te))),128))],40,Oe))}});const Fe=r(Re,[["__scopeId","data-v-3fcbae56"]]),je=["src","alt"],Ge=p({__name:"VlazyImage",props:{imgSrc:null,submitFunc:null,alt:null},setup(e){const t="https://i.ibb.co/VB2G77Q/s.jpg";return(s,n)=>(c(),l("img",{class:"lazy-image__img",src:e.imgSrc||t,alt:e.alt,loading:"lazy"},null,8,je))}});const We=r(Ge,[["__scopeId","data-v-9e489bb2"]]),qe={class:"range-slider"},Ke=["min","max","step","value"],Je=["min","max","step","value"],Qe=p({__name:"VrangeSlider",props:{modelValue:null,minValue:null,maxValue:null,stepValue:null},emits:["update:modelValue"],setup(e,{emit:t}){const s=e,n=g(null),o=g(null);function i(){let u;u=[n.value.value,o.value.value],u.sort((_,w)=>+_-+w),u[0]==u[1]&&(u[0]=s.minValue,u[1]=s.maxValue),t("update:modelValue",u)}return(u,_)=>(c(),l("section",qe,[a("input",{ref_key:"rangeInput1",ref:n,type:"range",min:e.minValue,max:e.maxValue,step:e.stepValue,value:e.modelValue[0],onChange:i},null,40,Ke),a("input",{ref_key:"rangeInput2",ref:o,type:"range",min:e.minValue,max:e.maxValue,step:e.stepValue,value:e.modelValue[1],onChange:i},null,40,Je),B(a("input",{class:"range-slider__input range-slider__input_1 main-white",placeholder:"Min","onUpdate:modelValue":_[0]||(_[0]=w=>e.modelValue[0]=w),onChange:i},null,544),[[O,e.modelValue[0]]]),B(a("input",{class:"range-slider__input range-slider__input_2 main-white",placeholder:"Max","onUpdate:modelValue":_[1]||(_[1]=w=>e.modelValue[1]=w),onChange:i},null,544),[[O,e.modelValue[1]]])]))}});const Xe=r(Qe,[["__scopeId","data-v-0856df11"]]),Ye=["onClick"],et=p({__name:"VmodalWindow",props:{isVisible:{type:Boolean,default:!1}},emits:["update:isVisible"],setup(e,{emit:t}){const s=g(null);function n(o){o.target!=s.value&&t("update:isVisible",!1)}return document.addEventListener("click",n),R(()=>{document.removeEventListener("click",n)}),(o,i)=>e.isVisible?(c(),l("div",{key:0,ref_key:"modalWindow",ref:s,class:"modal-window",onClick:H(n,["stop"])},[E(o.$slots,"default",{},void 0,!0)],8,Ye)):f("",!0)}});const tt=r(et,[["__scopeId","data-v-3cd9d727"]]),nt=["value"],ot=p({__name:"Vinput",props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:t}){function s(n){t("update:modelValue",n.target.value)}return(n,o)=>(c(),l("input",{class:"input main-black",value:e.modelValue,onInput:s},null,40,nt))}});const st=r(ot,[["__scopeId","data-v-b44fa244"]]),ct={class:"search"},at=p({__name:"VsearchInput",props:{modelValue:null},emits:["update:modelValue"],setup(e,{emit:t}){let s;const n=g(""),o=i=>{s&&clearTimeout(s),s=window.setTimeout(()=>{n.value=i.target.value,t("update:modelValue",n.value)},800)};return(i,u)=>{const _=$("v-input"),w=$("icon-search");return c(),l("div",ct,[d(_,N({class:"search__input main-black",modelValue:e.modelValue,value:e.modelValue,onInput:o},i.$attrs),null,16,["modelValue","value"]),d(w,{class:"search__icon main-black"})])}}});const it=r(at,[["__scopeId","data-v-eed45918"]]),lt={class:"input"},rt=p({__name:"VinputSubmit",props:{modelValue:null,submitFunc:null,funcArguments:null},setup(e){return(t,s)=>{const n=$("v-input");return c(),l("div",lt,[d(n,N({class:"input_text",modelValue:e.modelValue},t.$attrs),null,16,["modelValue"]),B(a("input",{class:"input__submit cursos-pointer",type:"submit",value:"SUBMIT",onClick:s[0]||(s[0]=H(o=>e.submitFunc(e.funcArguments),["stop"]))},null,512),[[K,e.modelValue.length]])])}}});const ut=r(rt,[["__scopeId","data-v-5c311baa"]]),_t={class:"password"},dt=p({__name:"VpasswordInput",props:["modelValue"],setup(e){const t=g(!1);return(s,n)=>{const o=$("v-input"),i=$("icon-eye");return c(),l("div",_t,[d(o,N({class:"password__input",modelValue:e.modelValue,type:t.value?"text":"password"},s.$attrs),null,16,["modelValue","type"]),d(i,{class:I(["password__icon",t.value?"main-blue":"main-black"]),onClick:n[0]||(n[0]=u=>t.value=!t.value)},null,8,["class"])])}}});const mt=r(dt,[["__scopeId","data-v-eb0bfa6c"]]),pt=p({__name:"VlikeButton",props:{gameId:null,gameName:null},setup(e){const t=e,s=A();function n(){return y.checkItem(y.favorites,t.gameId)}const o=g(n()?"icon-like-active":"icon-like");function i(){const u=y.placeItem(y.favorites,t.gameId);let _="";u?(o.value="icon-like-active",_="added to favorite games"):(o.value="icon-like",_="removed from favorite games"),s.commit("notification/pushNotification",`${t.gameName} ${_}`)}return(u,_)=>(c(),l("button",{class:I(["bttn",n()?"bttn_like-active":"bttn_like"]),onClick:i},[(c(),h(S(o.value),{class:"bttn__icon"}))],2))}});const vt=r(pt,[["__scopeId","data-v-c8819163"]]),ht=p({__name:"VpriceButton",props:{price:null,gameId:null,gameName:null},setup(e){const t=e,s=ie(),n=A(),o=y.checkItem(y.shopping,t.gameId),i=g(o?"Added to cart":t.price==0?"Free":"$"+t.price),u=g(o?"bttn_buy-active":"bttn_buy");function _(){i.value!="Added to cart"?(i.value="Added to cart",u.value="bttn_buy-active",y.placeItem(y.shopping,t.gameId),n.commit("notification/pushNotification",`${t.gameName}: added to shopping cart`)):s.push("/shopping")}return(w,C)=>(c(),l("button",{class:I(["bttn",u.value]),onClick:_},b(i.value),3))}});const ft=r(ht,[["__scopeId","data-v-9e15b059"]]),gt=[{name:"v-checkbox",component:De},{name:"v-select",component:Fe},{name:"v-input",component:st},{name:"v-search-input",component:it},{name:"v-password-input",component:mt},{name:"v-input-submit",component:ut},{name:"v-lazy-image",component:We},{name:"v-range-slider",component:Xe},{name:"v-modal-window",component:tt},{name:"v-like-button",component:vt},{name:"v-price-button",component:ft}],wt={},xt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor"},$t=a("path",{d:"M471.486,107.389c-19.107-33.968-53.075-53.075-91.29-53.075H127.557c-38.214,0-72.183,19.107-91.29,53.075  c-23.353,42.46-36.091,89.167-36.091,137.996c0,116.766,46.706,212.302,106.151,212.302c31.845,0,57.322-29.722,76.429-91.29  c2.123-8.492,10.615-14.861,21.23-14.861h104.028c8.492,0,16.984,6.369,21.23,14.861c19.107,61.568,44.583,91.29,76.429,91.29  c59.445,0,106.151-95.536,106.151-212.302C507.578,196.555,494.84,149.849,471.486,107.389z M191.248,224.155h-21.23v21.23  c0,12.738-8.492,21.23-21.23,21.23s-21.23-8.492-21.23-21.23v-21.23h-21.23c-12.738,0-21.23-8.492-21.23-21.23  c0-12.738,8.492-21.23,21.23-21.23h21.23v-21.23c0-12.738,8.492-21.23,21.23-21.23s21.23,8.492,21.23,21.23v21.23h21.23  c12.738,0,21.23,8.492,21.23,21.23C212.478,215.663,203.986,224.155,191.248,224.155z M331.367,266.615  c-16.984,0-31.845-14.861-31.845-31.845s14.861-31.845,31.845-31.845c16.984,0,31.845,14.861,31.845,31.845  S346.228,266.615,331.367,266.615z M392.935,202.925c-14.861,0-31.845-14.861-31.845-31.845s16.984-31.845,31.845-31.845  s31.845,14.861,31.845,31.845S409.919,202.925,392.935,202.925z"},null,-1),Vt=[$t];function yt(e,t){return c(),l("svg",xt,Vt)}const It=r(wt,[["render",yt]]),bt={},kt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},At=a("path",{d:"M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"},null,-1),Ct=[At];function Lt(e,t){return c(),l("svg",kt,Ct)}const Mt=r(bt,[["render",Lt]]),Ht={},St={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},zt=a("path",{d:"M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z"},null,-1),Bt=a("path",{d:"M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z"},null,-1),Ut=[zt,Bt];function Et(e,t){return c(),l("svg",St,Ut)}const Nt=r(Ht,[["render",Et]]),Zt={},Dt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},Ot=a("polygon",{points:"24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061"},null,-1),Pt=[Ot];function Tt(e,t){return c(),l("svg",Dt,Pt)}const Rt=r(Zt,[["render",Tt]]),Ft={},jt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},Gt=a("path",{d:"M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"},null,-1),Wt=[Gt];function qt(e,t){return c(),l("svg",jt,Wt)}const Kt=r(Ft,[["render",qt]]),Jt={},Qt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},Xt=a("path",{d:"M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,18a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,18Z"},null,-1),Yt=a("circle",{cx:"12",cy:"12",r:"4"},null,-1),en=[Xt,Yt];function tn(e,t){return c(),l("svg",Qt,en)}const nn=r(Jt,[["render",tn]]),on={},sn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},cn=a("rect",{y:"10.5",width:"24",height:"3"},null,-1),an=a("rect",{y:"3.5",width:"24",height:"3"},null,-1),ln=a("rect",{y:"17.5",width:"24",height:"3"},null,-1),rn=[cn,an,ln];function un(e,t){return c(),l("svg",sn,rn)}const _n=r(on,[["render",un]]),dn={},mn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},pn=a("path",{d:"M11.24,24a2.262,2.262,0,0,1-.948-.212,2.18,2.18,0,0,1-1.2-2.622L10.653,16H6.975A3,3,0,0,1,4.1,12.131l3.024-10A2.983,2.983,0,0,1,10,0h3.693a2.6,2.6,0,0,1,2.433,3.511L14.443,8H17a3,3,0,0,1,2.483,4.684l-6.4,10.3A2.2,2.2,0,0,1,11.24,24ZM10,2a1,1,0,0,0-.958.71l-3.024,10A1,1,0,0,0,6.975,14H12a1,1,0,0,1,.957,1.29L11.01,21.732a.183.183,0,0,0,.121.241A.188.188,0,0,0,11.4,21.9l6.4-10.3a1,1,0,0,0,.078-1.063A.979.979,0,0,0,17,10H13a1,1,0,0,1-.937-1.351l2.19-5.84A.6.6,0,0,0,13.693,2Z"},null,-1),vn=[pn];function hn(e,t){return c(),l("svg",mn,vn)}const fn=r(dn,[["render",hn]]),gn={},wn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},xn=a("path",{d:"M11.24,24a2.262,2.262,0,0,1-.948-.212,2.18,2.18,0,0,1-1.2-2.622L10.653,16H6.975A3,3,0,0,1,4.1,12.131l3.024-10A2.983,2.983,0,0,1,10,0h3.693a2.6,2.6,0,0,1,2.433,3.511L14.443,8H17a3,3,0,0,1,2.483,4.684l-6.4,10.3A2.2,2.2,0,0,1,11.24,24Z"},null,-1),$n=[xn];function Vn(e,t){return c(),l("svg",wn,$n)}const yn=r(gn,[["render",Vn]]),In={},bn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},kn=a("path",{d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM22,12a9.938,9.938,0,0,1-1.662,5.508l-1.192-1.193A.5.5,0,0,1,19,15.962V15a3,3,0,0,0-3-3H13a1,1,0,0,1-1-1v-.5a.5.5,0,0,1,.5-.5A2.5,2.5,0,0,0,15,7.5v-1a.5.5,0,0,1,.5-.5h1.379a2.516,2.516,0,0,0,1.767-.732l.377-.377A9.969,9.969,0,0,1,22,12Zm-19.951.963,3.158,3.158A2.978,2.978,0,0,0,7.329,17H10a1,1,0,0,1,1,1v3.949A10.016,10.016,0,0,1,2.049,12.963ZM13,21.949V18a3,3,0,0,0-3-3H7.329a1,1,0,0,1-.708-.293L2.163,10.249A9.978,9.978,0,0,1,17.456,3.63l-.224.224A.507.507,0,0,1,16.879,4H15.5A2.5,2.5,0,0,0,13,6.5v1a.5.5,0,0,1-.5.5A2.5,2.5,0,0,0,10,10.5V11a3,3,0,0,0,3,3h3a1,1,0,0,1,1,1v.962a2.516,2.516,0,0,0,.732,1.767l1.337,1.337A9.971,9.971,0,0,1,13,21.949Z"},null,-1),An=[kn];function Cn(e,t){return c(),l("svg",bn,An)}const Ln=r(In,[["render",Cn]]),Mn={},Hn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},Sn=a("path",{d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.5,20.975V19.69A4.19,4.19,0,0,0,8.31,15.5H8.3a3.143,3.143,0,0,1-2.223-.921L3.024,11.524A8.985,8.985,0,0,1,17.016,4.532a1.548,1.548,0,0,1-.913.3H14.669A1.555,1.555,0,0,0,13.114,6.39V7.432a1.555,1.555,0,0,1-1.555,1.555h0A1.555,1.555,0,0,0,10,10.542v1.042a1.555,1.555,0,0,0,1.555,1.555h4.156a1.555,1.555,0,0,1,1.555,1.555v1.52a1.555,1.555,0,0,0,.456,1.1l.833.833A8.964,8.964,0,0,1,12.5,20.975Z"},null,-1),zn=[Sn];function Bn(e,t){return c(),l("svg",Hn,zn)}const Un=r(Mn,[["render",Bn]]),En={},Nn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},Zn=a("path",{d:"M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917ZM12,20.846c-3.253-2.43-10-8.4-10-12.879a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,7.967h2a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,7.967C22,12.448,15.253,18.416,12,20.846Z"},null,-1),Dn=[Zn];function On(e,t){return c(),l("svg",Nn,Dn)}const Pn=r(En,[["render",On]]),Tn={},Rn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},Fn=a("path",{d:"M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917Z"},null,-1),jn=[Fn];function Gn(e,t){return c(),l("svg",Rn,jn)}const Wn=r(Tn,[["render",Gn]]),qn={},Kn={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},Jn=a("path",{d:"M24,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H0V2H1.222a1,1,0,0,1,.993.883L3.8,16.351A3,3,0,0,0,6.778,19H20V17H6.778a1,1,0,0,1-.993-.884L5.654,15H21.836ZM20.164,13H5.419L4.478,5H21.607Z"},null,-1),Qn=a("circle",{cx:"7",cy:"22",r:"2"},null,-1),Xn=a("circle",{cx:"17",cy:"22",r:"2"},null,-1),Yn=[Jn,Qn,Xn];function eo(e,t){return c(),l("svg",Kn,Yn)}const to=r(qn,[["render",eo]]),no={},oo={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},so=a("path",{d:"M24,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H0V2H1.222a1,1,0,0,1,.993.883L3.8,16.351A3,3,0,0,0,6.778,19H20V17H6.778a1,1,0,0,1-.993-.884L5.654,15H21.836Z"},null,-1),co=a("circle",{cx:"7",cy:"22",r:"2"},null,-1),ao=a("circle",{cx:"17",cy:"22",r:"2"},null,-1),io=[so,co,ao];function lo(e,t){return c(),l("svg",oo,io)}const ro=r(no,[["render",lo]]),uo={},_o={viewBox:"0 0 16 18",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},mo=a("path",{d:"M1.168 5.86H1.12c-.614 0-1.115.482-1.115 1.07v4.665c0 .59.5 1.071 1.115 1.071h.049c.614 0 1.115-.482 1.115-1.071V6.93c0-.589-.502-1.072-1.116-1.072zm1.65 7.535c0 .541.46.983 1.025.983h1.095v2.519c0 .591.503 1.073 1.116 1.073h.048c.615 0 1.116-.482 1.116-1.073v-2.52H8.75v2.52c0 .591.504 1.073 1.117 1.073h.047c.615 0 1.116-.482 1.116-1.073v-2.52h1.096c.564 0 1.025-.44 1.025-.982V6.03H2.818v7.364zm7.739-11.83l.87-1.29a.173.173 0 00-.054-.246.188.188 0 00-.256.052l-.902 1.335A6.092 6.092 0 007.985 1a6.1 6.1 0 00-2.232.416L4.853.08a.19.19 0 00-.257-.05.173.173 0 00-.055.246l.871 1.29c-1.57.739-2.628 2.131-2.628 3.729 0 .098.006.195.015.29H13.17c.009-.095.014-.192.014-.29 0-1.598-1.059-2.99-2.628-3.73zM5.58 3.875a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478.277 0 .5.213.5.478a.489.489 0 01-.5.48zm4.809 0a.489.489 0 01-.5-.48c0-.265.224-.478.5-.478s.498.213.498.478a.488.488 0 01-.498.48zm4.458 1.985h-.046c-.614 0-1.117.482-1.117 1.07v4.665c0 .59.503 1.071 1.117 1.071h.047c.615 0 1.115-.482 1.115-1.071V6.93c0-.589-.501-1.072-1.116-1.072z"},null,-1),po=[mo];function vo(e,t){return c(),l("svg",_o,po)}const ho=r(uo,[["render",vo]]),fo={},go={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 11 18",fill:"currentColor"},wo=a("path",{d:"M9.538 0H1.651C.896 0 .287.587.287 1.31v15.368c0 .723.61 1.31 1.364 1.31h7.887c.754 0 1.364-.587 1.364-1.31V1.31c0-.723-.61-1.31-1.364-1.31zm-5.89.796h3.894c.098 0 .178.14.178.315 0 .174-.08.316-.178.316H3.648c-.099 0-.177-.142-.177-.316 0-.174.078-.315.177-.315zm1.947 15.898c-.48 0-.87-.375-.87-.836 0-.462.39-.835.87-.835s.87.373.87.835c0 .461-.39.836-.87.836zM9.88 13.83H1.31V2.21h8.57v11.62z"},null,-1),xo=[wo];function $o(e,t){return c(),l("svg",go,xo)}const Vo=r(fo,[["render",$o]]),yo={},Io={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21 16",fill:"currentColor"},bo=a("path",{"fill-rule":"evenodd",d:"M8 0h5a8 8 0 110 16H8A8 8 0 118 0zm-.135 1.935a6.065 6.065 0 000 12.13h5.12a6.065 6.065 0 000-12.13h-5.12zm-1.33 2.304h2.401l3.199 5.175V4.24h2.346v7.495H12.18L8.864 6.537v5.201H6.53l.005-7.499z"},null,-1),ko=[bo];function Ao(e,t){return c(),l("svg",Io,ko)}const Co=r(yo,[["render",Ao]]),Lo={},Mo={viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},Ho=a("path",{d:"M0 13.772l6.545.902V8.426H0zM0 7.62h6.545V1.296L0 2.198zm7.265 7.15l8.704 1.2V8.425H7.265zm0-13.57v6.42h8.704V0z"},null,-1),So=[Ho];function zo(e,t){return c(),l("svg",Mo,So)}const Bo=r(Lo,[["render",zo]]),Uo={},Eo={viewBox:"0 0 21 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},No=a("path",{d:"M11.112 16L8 14.654V0s6.764 1.147 7.695 3.987c.931 2.842-.52 4.682-1.03 4.736-1.42.15-1.96-.748-1.96-.748V3.39l-1.544-.648L11.112 16zM12 14.32V16s7.666-2.338 8.794-3.24c1.128-.9-2.641-3.142-4.666-2.704 0 0-2.152.099-4.102.901-.019.008 0 1.51 0 1.51l4.948-1.095 1.743.73L12 14.32zm-5.024-.773s-.942.476-3.041.452c-2.1-.024-3.959-.595-3.935-1.833C.024 10.928 3.476 9.571 6.952 9v1.738l-3.693.952s-.632.786.217.81A11.934 11.934 0 007 12.046l-.024 1.5z"},null,-1),Zo=[No];function Do(e,t){return c(),l("svg",Eo,Zo)}const Oo=r(Uo,[["render",Do]]),Po={},To={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor"},Ro=a("path",{d:"M3.564 1.357l-.022.02c.046-.048.11-.1.154-.128C4.948.435 6.396 0 8 0c1.502 0 2.908.415 4.11 1.136.086.052.324.215.446.363C11.4.222 7.993 2.962 7.993 2.962c-1.177-.908-2.26-1.526-3.067-1.746-.674-.185-1.14-.03-1.362.141zm10.305 1.208c-.035-.04-.074-.076-.109-.116-.293-.322-.653-.4-.978-.378-.295.092-1.66.584-3.342 2.172 0 0 1.894 1.841 3.053 3.723 1.159 1.883 1.852 3.362 1.426 5.415A7.969 7.969 0 0016 7.999a7.968 7.968 0 00-2.13-5.434zM10.98 8.77a55.416 55.416 0 00-2.287-2.405 52.84 52.84 0 00-.7-.686l-.848.854c-.614.62-1.411 1.43-1.853 1.902-.787.84-3.043 3.479-3.17 4.958 0 0-.502-1.174.6-3.88.72-1.769 2.893-4.425 3.801-5.29 0 0-.83-.913-1.87-1.544l-.007-.002s-.011-.009-.03-.02c-.5-.3-1.047-.53-1.573-.56a1.391 1.391 0 00-.878.431A8 8 0 0013.92 13.381c0-.002-.169-1.056-1.245-2.57-.253-.354-1.178-1.46-1.696-2.04z"},null,-1),Fo=[Ro];function jo(e,t){return c(),l("svg",To,Fo)}const Go=r(Po,[["render",jo]]),Wo=[{name:"icon-logo",component:It},{name:"icon-arrow",component:Mt},{name:"icon-user",component:Nt},{name:"icon-cross",component:Rt},{name:"icon-search",component:Kt},{name:"icon-eye",component:nn},{name:"icon-burger",component:_n},{name:"icon-discover",component:fn},{name:"icon-discover-active",component:yn},{name:"icon-explore",component:Ln},{name:"icon-explore-active",component:Un},{name:"icon-like",component:Pn},{name:"icon-like-active",component:Wn},{name:"icon-cart",component:to},{name:"icon-cart-active",component:ro},{name:"icon-android",component:ho},{name:"icon-ios",component:Vo},{name:"icon-nintendo",component:Co},{name:"icon-pc",component:Bo},{name:"icon-playstation",component:Oo},{name:"icon-xbox",component:Go}],qo={mounted(e,t){const s={rootMargin:"0px",threshold:1};function n(i,u){i[0].isIntersecting&&(t.value(),console.log(t))}new IntersectionObserver(n,s).observe(e)}},Ko={mounted(e){e.focus()}};var Jo="firebase",Qo="9.16.0";/**
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
 */ue(Jo,Qo,"app");const Xo={apiKey:"AIzaSyDraHn-WZ632cl6lPtJlsinpvEPj4qIxxo",authDomain:"gstore-buy-4d273.firebaseapp.com",projectId:"gstore-buy-4d273",storageBucket:"gstore-buy-4d273.appspot.com",messagingSenderId:"658773696495",appId:"1:658773696495:web:4a63ff491da071945be01a",databaseURL:"https://gstore-buy-4d273-default-rtdb.europe-west1.firebasedatabase.app/"},j=_e(Xo);de(j);te(j);const Z=J(Me);gt.forEach(e=>{Z.component(e.name,e.component)});Wo.forEach(e=>{Z.component(e.name,e.component)});Z.directive("intersection",qo).directive("focus",Ko).use(Ue).use(ce).mount("#app");export{Le as _};
