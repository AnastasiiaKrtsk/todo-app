import { loadTasks, saveTasks } from './storage.js';

export const state = {
  tasks: loadTasks(),
  currentFilter: 'all',
};

export const addTaskAction = (data) => {
  state.tasks.push(data);
  saveTasks(state.tasks);
};

export const deleteTaskAction = (id) => {
  state.tasks = state.tasks.filter((task) => task.id !== id);
  saveTasks(state.tasks);
};

export const setTaskActiveAction = (id) => {
  const task = state.tasks.find((task) => task.id === id);
  task.completed = !task.completed;
  saveTasks(state.tasks);
};
