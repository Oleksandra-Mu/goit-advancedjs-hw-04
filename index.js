import{a as m,i as d,S as v}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const g=async(o,e)=>{m.defaults.baseURL="https://pixabay.com";const r={key:"48208038-3c3ecca5e2ade6beba42f0ed3",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:e};return(await m.get("/api/",{params:r})).data};function y(o){return o.hits.map(e=>`
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
            </li>`).join("")}const L=document.querySelector(".form"),i=document.querySelector(".loader"),u=document.querySelector(".search-result"),a=document.querySelector(".js-load-more");L.addEventListener("submit",w);let l=1,p="",f,h;function w(o){o.preventDefault(),p=o.currentTarget.q.value.trim(),l=1,u.innerHTML="",i.classList.remove("loader-off"),g(p,l).then(e=>{if(a.classList.add("is-hidden"),e.hits.length===0){d.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topCenter"}),i.classList.add("loader-off");return}const r=y(e);u.insertAdjacentHTML("beforeend",r),h=Math.ceil(e.totalHits/15),h>1&&(a.classList.remove("is-hidden"),a.addEventListener("click",b),i.classList.add("loader-off")),f=new v(".search-result a",{captionsData:"alt",captionDelay:250}),f.refresh(),i.classList.add("loader-off")}).catch(e=>{console.error(e),d.show({message:`Error occured: ${e}`,position:"topRight"})}).finally(()=>L.reset())}const b=async o=>{try{i.classList.remove("loader-off"),a.classList.add("is-hidden"),l++;const e=await g(p,l),r=y(e);u.insertAdjacentHTML("beforeend",r),f.refresh(),l===h?(a.classList.add("is-hidden"),a.removeEventListener("click",b),setTimeout(()=>{d.show({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",color:"blue"})},300)):a.classList.remove("is-hidden"),S()}catch(e){console.log(e)}finally{i.classList.add("loader-off")}};function S(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
