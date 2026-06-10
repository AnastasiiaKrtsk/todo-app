(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`#task-form`),t=document.querySelector(`.list`),n=document.querySelector(`#tag-select`),r=document.querySelector(`.filters`),i=`tasks`,a=e=>{localStorage.setItem(i,JSON.stringify(e))},o={tasks:JSON.parse(localStorage.getItem(i))||[],currentFilter:`all`,page:1},s=e=>{o.tasks.push(e),a(o.tasks)},c=e=>{o.tasks=o.tasks.filter(t=>t.id!==e),a(o.tasks)},l=e=>{let t=o.tasks.find(t=>t.id===e);t.completed=!t.completed,a(o.tasks)},u=e=>{console.log(e),console.log(o.tasks[0]),o.currentFilter=e},d=[{id:`other`,label:`Other`},{id:`work`,label:`Work`},{id:`health`,label:`Health`},{id:`personal`,label:`Personal`}],f={all:{label:`All`,fn:()=>!0,svg:`./assets/all.svg`},work:{label:`Work`,fn:e=>e.tag===`work`,svg:`./assets/work.svg`},health:{label:`Health`,fn:e=>e.tag===`health`,svg:`./assets/health.svg`},personal:{label:`Personal`,fn:e=>e.tag===`personal`,svg:`./assets/personal.svg`},completed:{label:`Completed`,fn:e=>e.completed,svg:`./assets/completed.svg`}};function p(){let e=f[o.currentFilter];return o.tasks.filter(t=>e.fn(t))}var m=()=>{t.innerHTML=``,t.innerHTML=h(p()),_()},h=e=>e.map(e=>{let t=e.completed?`done`:`active`;return`
    <li data-id=${e.id} data-tag=${e.tag} class="${t}">
    <span class="status ${t} ${e.tag}"></span>
    <span class="title ${t} ${e.tag}">${e.title}</span>
    <span class="tag ${e.tag}">${e.tag.toUpperCase()}</span>
    <span>${e.createdAt}</span>
    <button type="button" data-del>x</button>
    </li>
    `}).join(``),g=()=>{n.innerHTML=d.map(e=>`
    <option value="${e.id}">${e.label}</option>
    `)},_=()=>{r.innerHTML=Object.entries(f).map(([e,t])=>`
      <button data-filter="${e}" class="filter-btn ${o.currentFilter===e?`active`:`hidden`}">
        <img src="${t.svg}" alt="" />
        <span>${t.label}</span>
      </button>
    `).join(``)+`
    <button class="sort-btn" data-sort>
      <img src="./assets/select-arrow.svg" alt="" />
      <span>Sort</span>
    </button>
  `};function v(){m(),g()}v(),r.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.dataset.filter;u(n),v()}),e.addEventListener(`submit`,t=>{t.preventDefault();let r=t.target.elements.title.value.trim();if(!r)return;let i=n.value,a={id:Date.now(),title:r,tag:i,completed:!1,createdAt:new Date(Date.now()).toLocaleDateString()};console.log(`add!`,Date.now()),s(a),e.reset(),v()}),t.addEventListener(`click`,e=>{let t=e.target.closest(`li`);if(!t)return;let n=Number(t.dataset.id);e.target.closest(`[data-del]`)&&(console.log(`del!`,Date.now()),c(n),v()),e.target.closest(`.status`)&&(l(n),v())});