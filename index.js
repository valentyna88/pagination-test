import{a as c}from"./assets/vendor-CR7N1gwd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a="uHSLi07StIOlriMPxJGxUbSYsHDs6AFx";c.defaults.baseURL="https://app.ticketmaster.com/discovery/v2/";async function l(s){const r={params:{apikey:a,page:s}};return(await c.get("events.json",r)).data}const u=document.querySelector(".gallery-events"),d=s=>{const r=s.map(({name:o})=>`<li>
        <p>${o}</p>
    </li>`).join("");u.innerHTML=r};async function f(s){const r=await l(s);d(r._embedded.events)}f(1);
//# sourceMappingURL=index.js.map
