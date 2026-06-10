(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`#task-form`),t=document.querySelector(`.list`),n=document.querySelector(`#tag-select`),r=document.querySelector(`.filters`),i=`tasks`,a=e=>{localStorage.setItem(i,JSON.stringify(e))},o={tasks:JSON.parse(localStorage.getItem(i))||[],currentFilter:`all`,page:1,sort:`newest`},s=e=>{o.tasks.push(e),a(o.tasks)},c=e=>{o.tasks=o.tasks.filter(t=>t.id!==e),a(o.tasks)},l=e=>{let t=o.tasks.find(t=>t.id===e);t.completed=!t.completed,a(o.tasks)},u=e=>{o.currentFilter=e},d=e=>{o.sort=e},f=[{id:`other`,label:`Other`},{id:`work`,label:`Work`},{id:`health`,label:`Health`},{id:`personal`,label:`Personal`}],p={all:{label:`All`,fn:()=>!0,svg:`./assets/all.svg`},work:{label:`Work`,fn:e=>e.tag===`work`,svg:`./assets/work.svg`},health:{label:`Health`,fn:e=>e.tag===`health`,svg:`./assets/health.svg`},personal:{label:`Personal`,fn:e=>e.tag===`personal`,svg:`./assets/personal.svg`},completed:{label:`Completed`,fn:e=>e.completed,svg:`./assets/completed.svg`}},m=[{id:`newest`,label:`Newest first`,fn:(e,t)=>t.createdAt-e.createdAt},{id:`oldest`,label:`Oldest first`,fn:(e,t)=>e.createdAt-t.createdAt},{id:`az`,label:`A → Z`,fn:(e,t)=>e.title.localeCompare(t.title)},{id:`za`,label:`Z → A`,fn:(e,t)=>t.title.localeCompare(e.title)}];function h(){let e=p[o.currentFilter];return o.tasks.filter(t=>e.fn(t))}function g(e){let t=[...e],n=m.find(e=>e.id===o.sort);return n?t.sort(n.fn):t}var _=()=>{t.innerHTML=v(g(h())),b(),x()},v=e=>e.map(e=>{let t=e.completed?`done`:`active`;return`
    <li data-id=${e.id} data-tag=${e.tag} class="${t}">
    <span class="status ${t} ${e.tag}"></span>
    <span class="title ${t} ${e.tag}">${e.title}</span>
    <span class="tag ${e.tag}">${e.tag.toUpperCase()}</span>
    <span class="time">${e.createdAt}</span>
    <button type="button" data-del>x</button>
    </li>
    `}).join(``),y=()=>{n.innerHTML=f.map(e=>`
    <option value="${e.id}">${e.label}</option>
    `)},b=()=>{r.innerHTML=Object.entries(p).map(([e,t])=>`
      <button data-filter="${e}" class="filter-btn ${o.currentFilter===e?`active`:`hidden`}">
        <img src="${t.svg}" alt="" />
        <span>${t.label}</span>
      </button>
    `).join(``)+`
    <select name="sort" id="sort-select"></select>
  `},x=()=>{let e=document.querySelector(`#sort-select`);e.innerHTML=m.map(e=>`
    <option value="${e.id}">${e.label}</option>
    `),e.value=o.sort};function S(){_(),y()}S(),r.addEventListener(`change`,e=>{let t=e.target.closest(`#sort-select`);t&&(d(t.value),S())}),r.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.dataset.filter;u(n),S()}),e.addEventListener(`submit`,t=>{t.preventDefault();let r=t.target.elements.title.value.trim();if(!r)return;let i=n.value,a={id:Date.now(),title:r,tag:i,completed:!1,createdAt:Date.now()};console.log(`add!`,Date.now()),s(a),e.reset(),S()}),t.addEventListener(`click`,e=>{let t=e.target.closest(`li`);if(!t)return;let n=Number(t.dataset.id);e.target.closest(`[data-del]`)&&(console.log(`del!`,Date.now()),c(n),S()),e.target.closest(`.status`)&&(l(n),S())});