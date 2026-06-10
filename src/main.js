//main.js
import { render, renderTags, renderTasks } from './render';
import { addTaskAction, deleteTaskAction, setTaskActiveAction } from './state';
import { form, list, tagSelect } from './dom';

function bootstrap() {
  render();
  renderTags();
}

bootstrap();

const formSubmitHandler = (e) => {
  e.preventDefault();

  const taskTitle = e.target.elements.title.value.trim();
  if (!taskTitle) return;

  const taskTag = tagSelect.value;

  const newTask = {
    id: Date.now(),
    title: taskTitle,
    tag: taskTag,
    completed: false,
    createdAt: new Date(Date.now()).toLocaleDateString(),
  };

  console.log('add!', Date.now());

  addTaskAction(newTask);
  form.reset();
  bootstrap();
};

const listClickHandler = (e) => {
  const li = e.target.closest('li');
  if (!li) return;

  const id = Number(li.dataset.id);

  if (e.target.closest('[data-del]')) {
    console.log('del!', Date.now());

    deleteTaskAction(id);
    bootstrap();
  }

  const status = e.target.closest('.status');
  if (status) {
    setTaskActiveAction(id);
    bootstrap();
  }
};

form.addEventListener('submit', formSubmitHandler);
list.addEventListener('click', listClickHandler);
