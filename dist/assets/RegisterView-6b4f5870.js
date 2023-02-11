import{a as v,w as g}from"./runtime-dom.esm-bundler-d846f7c9.js";import{c as k}from"./correctErrorText-1822bb20.js";import{g as x,K as V,M as b}from"./index-e5b3cc81-e712630f.js";import{u as U,a as C}from"./vue-router-920ae1c6.js";import{u as P}from"./vuex.esm-bundler-0c4770ad.js";import{d as S,a2 as y,h as N,l as R,o as E,a as A,e as a,x as u,j as n,t as I,n as D,a0 as p,w as T,f as c,p as B,k as M,a7 as G,_ as O}from"./_plugin-vue_export-helper-b66d6dea.js";const r=i=>(B("data-v-837c68c1"),i=i(),M(),i),j={class:"page-block flex flex_column flex_align-center"},z=r(()=>a("p",{class:"page-block__title second-white"},"CREATE YOUR ACCOUNT",-1)),K={class:"auth-form flex flex flex_column"},W={class:"auth-area"},Y=r(()=>a("label",{class:"auth-area__label second-white"},"Nickname:",-1)),q={class:"auth-area"},F=r(()=>a("label",{class:"auth-area__label second-white"},"Email Address:",-1)),H={class:"auth-area"},J=r(()=>a("label",{class:"auth-area__label second-white"},"Password:",-1)),L={class:"auth-area"},Q=r(()=>a("label",{class:"auth-area__label second-white"},"Repeat password:",-1)),X=["onClick"],Z={class:"auth-form__span second-white"},$=S({__name:"RegisterView",setup(i){U(),C(),P();const e=y({email:"",nickname:"",password:"",repeatedPassword:""});function m(){const l=x();V(l,e.email,e.password).then(()=>{b(l.currentUser,{displayName:e.nickname})}).catch(s=>{k(s,t)})}const t=N("");R(t,l=>{l.length&&setTimeout(()=>t.value="",1500)});function h(){e.password!=e.repeatedPassword?t.value="Passwords don`t match":e.nickname.length<4?t.value="Nickname to be a minimum of 4 characters":e.password.length?m():t.value="Missing password"}return(l,s)=>{const d=c("v-input"),_=c("v-password-input"),w=c("router-link"),f=G("focus");return E(),A("section",j,[z,a("form",K,[a("div",W,[Y,u(n(d,{class:"auth-area__input",modelValue:e.nickname,"onUpdate:modelValue":s[0]||(s[0]=o=>e.nickname=o),type:"text",maxlength:"12"},null,8,["modelValue"]),[[f]])]),a("div",q,[F,n(d,{class:"auth-area__input",modelValue:e.email,"onUpdate:modelValue":s[1]||(s[1]=o=>e.email=o),type:"email"},null,8,["modelValue"])]),a("div",H,[J,n(_,{class:"auth-area__input",modelValue:e.password,"onUpdate:modelValue":s[2]||(s[2]=o=>e.password=o),maxlength:"12"},null,8,["modelValue"])]),a("div",L,[Q,n(_,{class:"auth-area__input",modelValue:e.repeatedPassword,"onUpdate:modelValue":s[3]||(s[3]=o=>e.repeatedPassword=o),maxlength:"12"},null,8,["modelValue"])]),u(a("p",{class:"error-info"},I(t.value),513),[[v,t.value.length]]),a("button",{class:D(["page-block__bttn bttn bttn_buy",{shake:t.value.length}]),onClick:g(h,["prevent"])}," SIGN UP ",10,X),a("span",Z,[p(" Already have a GStore account? "),n(w,{to:"login",class:"main-white"},{default:T(()=>[p("Sign In")]),_:1})])])])}}});const ne=O($,[["__scopeId","data-v-837c68c1"]]);export{ne as default};
