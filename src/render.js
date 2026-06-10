//render.js
import { list, tagSelect, filters } from './dom';
import { state } from './state';
import { TAGS, FILTERS } from './constants';

function getFilteredTasks() {
  const matchFilter = FILTERS[state.currentFilter];
  return state.tasks.filter((task) => matchFilter.fn(task));
}

export const render = () => {
  list.innerHTML = '';
  const filteredTasks = getFilteredTasks();

  const tasks = renderTasks(filteredTasks);
  list.innerHTML = tasks;

  renderFilters();
};

export const renderTasks = (tasks) => {
  return tasks
    .map((task) => {
      const statusClass = task.completed ? 'done' : 'active';
      return `
    <li data-id=${task.id} data-tag=${task.tag} class="${statusClass}">
    <span class="status ${statusClass} ${task.tag}"></span>
    <span class="title ${statusClass} ${task.tag}">${task.title}</span>
    <span class="tag ${task.tag}">${task.tag.toUpperCase()}</span>
    <span>${task.createdAt}</span>
    <button type="button" data-del>x</button>
    </li>
    `;
    })
    .join('');
};

export const renderTags = () => {
  tagSelect.innerHTML = TAGS.map((tag) => {
    return `
    <option value="${tag.id}">${tag.label}</option>
    `;
  });
};

export const renderFilters = () => {
  const filtersHTML = Object.entries(FILTERS)
    .map(
      ([id, filter]) => `
      <button data-filter="${id}" class="filter-btn ${state.currentFilter === id ? 'active' : 'hidden'}">
        <img src="${filter.svg}" alt="" />
        <span>${filter.label}</span>
      </button>
    `,
    )
    .join('');

  const sortHTML = `
    <button class="sort-btn" data-sort>
      <img src="./assets/select-arrow.svg" alt="" />
      <span>Sort</span>
    </button>
  `;

  filters.innerHTML = filtersHTML + sortHTML;
};
