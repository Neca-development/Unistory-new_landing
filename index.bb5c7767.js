const e=document.querySelector(".slider"),l=e.querySelectorAll(".slide-block"),t=e.querySelector(".slider__controls_prev"),o=e.querySelector(".slider__controls_next"),s=e.querySelector(".slider__pagination");let c=l.length-1,n=0,d=l.length;function i(){c<1?(r(),t.disabled=!0,t.style.opacity=.5):c>l.length-2?(r(),o.disabled=!0,o.style.opacity=.5):(r(),t.disabled=!1,t.style.opacity=1,o.disabled=!1,o.style.opacity=1)}function r(){l.forEach(((e,l)=>{l==c?(e.classList.add("slide-block_active"),a()):(e.classList.remove("slide-block_active"),a())}))}function a(){l.forEach(((e,l)=>{l<c?(n=l+c.length,e.style.zIndex=n,console.log(n)):l==c?(n=l+d,e.style.zIndex=n,console.log(n)):l>c&&(n--,e.style.zIndex=n,console.log(n))}))}function y(){s.querySelectorAll("span").forEach(((e,l)=>{l==c?e.classList.add("slider__dot_active"):e.classList.remove("slider__dot_active")}))}i(),t.addEventListener("click",(()=>{c--,i(),y()})),o.addEventListener("click",(()=>{c++,i(),y()})),function(){const e=document.createElement("span");for(let t=0;t<l.length;t++)s.append(e.cloneNode(!0));s.querySelectorAll("span").forEach((e=>{e.classList.add("slider__dot"),console.log(e)})),y()}();
//# sourceMappingURL=index.bb5c7767.js.map