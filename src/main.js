import './style.css';
import { addTask, countOpenTasks, toggleTask } from './tasks.js';

const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const list = document.querySelector('#task-list');
const summary = document.querySelector('#task-summary');
const emptyMessage = document.querySelector('#empty-message');

let tasks = [];

function renderTasks() {
  list.replaceChildren();

  tasks.forEach((task, index) => {
    const item = document.createElement('li');
    item.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.setAttribute('aria-label', `Mark ${task.title} as complete`);
    checkbox.addEventListener('change', () => {
      tasks = toggleTask(tasks, index);
      renderTasks();
    });

    const title = document.createElement('span');
    title.className = task.completed ? 'task-title is-complete' : 'task-title';
    title.textContent = task.title;

    item.append(checkbox, title);
    list.append(item);
  });

  const openCount = countOpenTasks(tasks);
  summary.textContent = `${openCount} ${openCount === 1 ? 'task' : 'tasks'} left`;
  emptyMessage.hidden = tasks.length > 0;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  tasks = addTask(tasks, input.value);
  input.value = '';
  renderTasks();
  input.focus();
});

renderTasks();
