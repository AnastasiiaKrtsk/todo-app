//render.js
import { list, tagSelect } from './dom';
import { state } from './state';
import { TAGS } from './constants';
export const render = () => {
  list.innerHTML = '';
  const tasks = renderTasks();
  list.innerHTML = tasks;
};

export const renderTasks = () => {
  return state.tasks
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
