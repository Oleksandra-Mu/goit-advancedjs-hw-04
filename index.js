import{a as m,i as d,S as w}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const g=async(o,e)=>{m.defaults.baseURL="https://pixabay.com";const r={key:"48208038-3c3ecca5e2ade6beba42f0ed3",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:e};return(await m.get("/api/",{params:r})).data};function y(o){return o.hits.map(e=>`
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
            </li>`).join("")}const b=document.querySelector(".form"),i=document.querySelector(".loader"),p=document.querySelector(".search-result"),a=document.querySelector(".js-load-more");b.addEventListener("submit",v);let c=1,u="",h,f;function v(o){o.preventDefault(),u=o.currentTarget.q.value.trim(),i.classList.remove("loader-off"),g(u,c).then(e=>{if(p.innerHTML="",a.classList.add("is-hidden"),e.hits.length===0){d.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),i.classList.add("loader-off");return}const r=y(e);p.insertAdjacentHTML("beforeend",r),f=parseInt(e.totalHits/15),f>1&&(a.classList.remove("is-hidden"),a.addEventListener("click",L),i.classList.add("loader-off")),h=new w(".search-result a",{captionsData:"alt",captionDelay:250}),h.refresh(),i.classList.add("loader-off")}).catch(e=>{console.error(e),d.show({message:`Error occured: ${e}`,position:"topRight"})}).finally(()=>b.reset())}const L=async o=>{try{c++;const e=await g(u,c),r=y(e);p.insertAdjacentHTML("beforeend",r),h.refresh(),c===f&&(a.classList.add("is-hidden"),a.removeEventListener("click",L),d.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue"})),S()}catch(e){console.log(e)}};function S(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
