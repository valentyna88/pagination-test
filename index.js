import{a as c,P as p}from"./assets/vendor-NU1TQ4iR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const u="uHSLi07StIOlriMPxJGxUbSYsHDs6AFx";c.defaults.baseURL="https://app.ticketmaster.com/discovery/v2/";async function f(s){const t={params:{apikey:u,page:s}};return(await c.get("events.json",t)).data}const d={totalItems:0,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},i=new p("pagination",d),g=i.getCurrentPage();function m(s){i.reset(s)}i.on("afterMove",s=>{const t=s.page;console.log(t),l(t)});const y=document.querySelector(".gallery-events"),P=s=>{const t=s.map(({name:n})=>`<li>
        <p>${n}</p>
    </li>`).join("");y.innerHTML=t};async function l(s){const t=await f(s);s===1&&m(t.page.totalElements),P(t._embedded.events)}l(g);
//# sourceMappingURL=index.js.map
