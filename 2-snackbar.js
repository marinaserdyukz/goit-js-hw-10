import"./assets/styles-B8TCDbXy.js";import{i as s}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector("button"),c=document.querySelector(".first-input"),n=document.querySelector(".form");r.addEventListener("click",t=>{t.preventDefault(),new Promise((e,l)=>{let o=Number(c.value);const i=n.state.value;setTimeout(()=>{i==="fulfilled"?e(`✅ Fulfilled promise in ${o}ms`):l(`❌ Rejected promise in ${o}ms`)},o)}).then(e=>{s.show({message:e,messageColor:"white",backgroundColor:"green",position:"topRight",close:!1,closeOnClick:!1}),console.log("Promise fulfilled")}).catch(e=>{s.show({message:e,messageColor:"white",backgroundColor:"coral",position:"topRight",close:!1,closeOnClick:!1}),console.log("Promise rejected")})});
//# sourceMappingURL=2-snackbar.js.map
