function t(r,a){const c=new RegExp(/[^\x2F][a-z,-]+(?=\x29)/g);let e=r.message.match(c)[0];e=e.replace(/-/g," "),e=e.replace(e[0],e[0].toUpperCase()),a.value=e}export{t as c};
