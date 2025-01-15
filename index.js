import{a as m,i as d,S as v}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const g=async(s,e)=>{m.defaults.baseURL="https://pixabay.com";const r={key:"48208038-3c3ecca5e2ade6beba42f0ed3",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:e};return(await m.get("/api/",{params:r})).data};function y(s){return s.hits.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}" > 
              <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"/> 
            </a>
            <ul class="statistics">
                <li class="photo-stat">
                <p><b>Likes</b></p>
                <p>${e.likes}</p>
                </li>
                <li class="photo-stat">
                <p><b>Views</b></p> 
                <p>${e.views}</p>
                </li>
                <li class="photo-stat">
                <p><b>Comments</b></p> 
                <p>${e.comments}</p>
                </li>
                <li class="photo-stat">
                <p><b>Downloads</b></p> 
                <p>${e.downloads}</p>
                </li>
            </ul>
            </li>`).join("")}const L=document.querySelector(".form"),a=document.querySelector(".loader"),u=document.querySelector(".search-result"),i=document.querySelector(".js-load-more");L.addEventListener("submit",w);let l=1,p="",f,h;function w(s){s.preventDefault(),p=s.currentTarget.q.value.trim(),l=1,a.classList.remove("loader-off"),g(p,l).then(e=>{if(u.innerHTML="",i.classList.add("is-hidden"),e.hits.length===0){d.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topCenter"}),a.classList.add("loader-off");return}const r=y(e);u.insertAdjacentHTML("beforeend",r),h=Math.ceil(e.totalHits/15),h>1&&(i.classList.remove("is-hidden"),i.addEventListener("click",b),a.classList.add("loader-off")),f=new v(".search-result a",{captionsData:"alt",captionDelay:250}),f.refresh(),a.classList.add("loader-off")}).catch(e=>{console.error(e),d.show({message:`Error occured: ${e}`,position:"topRight"})}).finally(()=>L.reset())}const b=async s=>{try{a.classList.remove("loader-off"),l++;const e=await g(p,l),r=y(e);u.insertAdjacentHTML("beforeend",r),f.refresh(),l===h&&(i.classList.add("is-hidden"),i.removeEventListener("click",b),setTimeout(()=>{d.show({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",color:"blue"})},300)),S()}catch(e){console.log(e)}finally{a.classList.add("loader-off")}};function S(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
