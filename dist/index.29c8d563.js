const e=document.querySelector(".slider"),t=e.querySelectorAll(".slide-block"),l=e.querySelector(".slider__controls_prev"),s=e.querySelector(".slider__controls_next"),c=e.querySelector(".slider__pagination");let o=t.length-1,d=0,i=t.length;function n(){o<1?(r(),l.disabled=!0,l.style.opacity=.5):o>t.length-2?(r(),s.disabled=!0,s.style.opacity=.5):(r(),l.disabled=!1,l.style.opacity=1,s.disabled=!1,s.style.opacity=1)}function r(){t.forEach(((e,t)=>{t==o?(e.classList.add("slide-block_active"),a()):(e.classList.remove("slide-block_active"),a())}))}function a(){t.forEach(((e,t)=>{t<o?(d=t+o.length,e.style.zIndex=d):t==o?(d=t+i,e.style.zIndex=d):t>o&&(d--,e.style.zIndex=d)}))}function y(){c.querySelectorAll("span").forEach(((e,t)=>{t==o?e.classList.add("slider__dot_active"):e.classList.remove("slider__dot_active")}))}n(),l.addEventListener("click",(()=>{o--,n(),y()})),s.addEventListener("click",(()=>{o++,n(),y()})),function(){const e=document.createElement("span");for(let l=0;l<t.length;l++)c.append(e.cloneNode(!0));c.querySelectorAll("span").forEach((e=>{e.classList.add("slider__dot")})),y()}();
//# sourceMappingURL=index.29c8d563.js.map
