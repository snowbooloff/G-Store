import{a as m,w as h}from"./runtime-dom.esm-bundler-d846f7c9.js";import{c as f}from"./correctErrorText-1822bb20.js";import{g as v,O as E}from"./index-e5b3cc81-e712630f.js";import{u as b}from"./vuex.esm-bundler-0c4770ad.js";import{d as g,h as c,l as w,o as x,a as S,e as t,x as i,j as R,t as k,n as T,f as V,p as y,k as I,a7 as O,_ as A}from"./_plugin-vue_export-helper-b66d6dea.js";const l=s=>(y("data-v-09eeb55d"),s=s(),I(),s),C={class:"page-block flex flex_column flex_align-center"},D=l(()=>t("p",{class:"page-block__title second-white"},"FORGET PASSWORD? ENTER YOUR EMAIL TO RESET IT",-1)),N={class:"auth-form flex flex flex_column"},P={class:"auth-area"},B=l(()=>t("label",{class:"auth-area__label second-white"},"Email Address:",-1)),U=["onClick"],M=g({__name:"ResetView",setup(s){const r=b(),n=c("");function _(){const o=v();E(o,n.value).then(()=>{r.commit("notification/pushNotification","Password recovery instructions have been sent to the registered email address")}).catch(a=>{f(a,e)})}const e=c("");return w(e,o=>{o.length&&setTimeout(()=>e.value="",1500)}),(o,a)=>{const u=V("v-input"),d=O("focus");return x(),S("section",C,[D,t("form",N,[t("div",P,[B,i(R(u,{class:"auth-area__input",modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=p=>n.value=p),type:"email"},null,8,["modelValue"]),[[d]])]),i(t("p",{class:"error-info"},k(e.value),513),[[m,e.value.length]]),t("button",{class:T(["auth-form__bttn bttn bttn_buy",{shake:e.value.length}]),onClick:h(_,["prevent"])}," RESET PASSWORD ",10,U)])])}}});const L=A(M,[["__scopeId","data-v-09eeb55d"]]);export{L as default};
