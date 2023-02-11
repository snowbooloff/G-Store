import{a as D}from"./runtime-dom.esm-bundler-d846f7c9.js";import{g as C,r as E,u as P,a as A,U as B}from"./index.esm2017-426fdacd.js";import{c as h}from"./correctErrorText-1822bb20.js";import{g as c,M as x,P as R,Q as $}from"./index-e5b3cc81-e712630f.js";import{u as j}from"./vuex.esm-bundler-0c4770ad.js";import{d as F,g as U,h as L,l as z,a2 as T,o as p,a as G,e as s,j as M,x as O,t as m,u as v,c as w,n as g,b as I,f as Q,p as q,k as H,_ as J}from"./_plugin-vue_export-helper-b66d6dea.js";const u=r=>(q("data-v-f04b673b"),r=r(),H(),r),K={class:"page-block flex flex_column flex_align-center"},W={class:"profile-avatar"},X={class:"user-info flex flex_column"},Y={class:"details flex flex_align-center"},Z=u(()=>s("h3",{class:"datails__item main-white"},"Nickname:",-1)),ee={class:"details flex flex_align-center"},te=u(()=>s("h3",{class:"datails__item main-white"},"Email Address:",-1)),se={class:"details flex flex_align-center"},ae=u(()=>s("h3",{class:"datails__item main-white"},"Password:",-1)),ne=u(()=>s("ins",null,"Change Password",-1)),ie=[ne],oe={class:"details flex flex_align-center"},le=u(()=>s("h3",{class:"datails__item main-white"},"Registration Date:",-1)),ue={class:"datails__text main-blue"},re=F({__name:"UserView",setup(r){const l=j(),d=U(()=>l.state.user.userInfo),b=U(()=>new Date(d.value.registrationDate).toLocaleDateString("en-GB")),i=L("");z(i,a=>{a.length&&setTimeout(()=>i.value="",1500)});const t=T({nicknameInput:{isShow:!1,value:""},emailInput:{isShow:!1,value:""},passwordInput:{isShow:!1,value:""}});function f(a){a.isShow=!a.isShow;const e=Object.values(t);for(let o=0;o<e.length;o++)e[o]!=a&&(e[o].isShow=!1,e[o].value="")}function S(a){if(a){const e=c(),o=C(),n=E(o,`userAvatars/${e.currentUser.uid}/avatar`);P(n,a).then(()=>{A(n).then(k=>{x(e.currentUser,{photoURL:k}),l.commit("user/setUserImage",k),l.commit("notification/pushNotification","Profile image successfully uploaded")})})}}function N(){if(t.nicknameInput.value.length<4)i.value="Nickname to be a minimum of 4 characters";else{const a=c();x(a.currentUser,{displayName:t.nicknameInput.value}).then(()=>{l.commit("user/setUserNickname",t.nicknameInput.value),l.commit("notification/pushNotification","Nickname successfully updated"),_()}).catch(e=>{h(e,i)})}}function y(){const a=c();R(a.currentUser,t.emailInput.value).then(()=>{l.commit("user/setUserEmail",t.emailInput.value),l.commit("notification/pushNotification","Email Address successfully updated"),_()}).catch(e=>{h(e,i)})}function V(){const a=c();$(a.currentUser,t.passwordInput.value).then(()=>{l.commit("notification/pushNotification","Password successfully updated"),_()}).catch(e=>{h(e,i)})}function _(){t.nicknameInput.value="",t.nicknameInput.isShow=!1,t.emailInput.value="",t.emailInput.isShow=!1,t.passwordInput.value="",t.passwordInput.isShow=!1}return(a,e)=>{const o=Q("v-input-submit");return p(),G("section",K,[s("div",W,[M(B,{size:"200px"}),s("input",{class:"profile-avatar__input cursor-pointer",type:"file",accept:"image/png, image/jpeg",onInput:e[0]||(e[0]=n=>S(n.target.files[0]))},null,32)]),O(s("p",{class:"page-block__error"},m(i.value),513),[[D,i.value.length]]),s("div",X,[s("div",Y,[Z,s("h3",{class:"datails__text main-blue cursor-pointer",onClick:e[1]||(e[1]=n=>f(t.nicknameInput))},[s("ins",null,m(v(d).nickname),1)])]),t.nicknameInput.isShow?(p(),w(o,{key:0,modelValue:t.nicknameInput.value,"onUpdate:modelValue":e[2]||(e[2]=n=>t.nicknameInput.value=n),submitFunc:N,class:g({shake:i.value.length}),type:"text",maxlength:"12",placeholder:"New Nickname"},null,8,["modelValue","class"])):I("",!0),s("div",ee,[te,s("h3",{class:"datails__text main-blue cursor-pointer",onClick:e[3]||(e[3]=n=>f(t.emailInput))},[s("ins",null,m(v(d).email),1)])]),t.emailInput.isShow?(p(),w(o,{key:1,class:g({shake:i.value.length}),modelValue:t.emailInput.value,"onUpdate:modelValue":e[4]||(e[4]=n=>t.emailInput.value=n),type:"email",placeholder:"New Email Address",submitFunc:y},null,8,["class","modelValue"])):I("",!0),s("div",se,[ae,s("h3",{class:"datails__text main-blue cursor-pointer",onClick:e[5]||(e[5]=n=>f(t.passwordInput))},ie)]),t.passwordInput.isShow?(p(),w(o,{key:2,class:g({shake:i.value.length}),modelValue:t.passwordInput.value,"onUpdate:modelValue":e[6]||(e[6]=n=>t.passwordInput.value=n),type:"text",maxlength:"12",placeholder:"New Password",submitFunc:V},null,8,["class","modelValue"])):I("",!0),s("div",oe,[le,s("h3",ue,m(v(b)),1)])])])}}});const he=J(re,[["__scopeId","data-v-f04b673b"]]);export{he as default};