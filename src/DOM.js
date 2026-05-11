import {loadTodos} from "./Storage.js";
const todoList = document.querySelector('.todoList');


export function updateDOM() {
    const currentTodos = loadTodos() || [];
    todoList.innerHTML = "";
    currentTodos.forEach(todo => {

    const card = document.createElement('section');
    card.classList.add('todoCard');
    card.dataset.todoId = todo.id;

    const titleDiv = document.createElement('div');
    titleDiv.textContent = todo.title;
    titleDiv.classList.add('todo-title');

    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = todo.description;
    descriptionDiv.classList.add('todo-description');

    const dueDateDiv = document.createElement('div');
    dueDateDiv.textContent = `Due: ${todo.dueDate}`;
    dueDateDiv.classList.add('todo-dueDate');

    const priorityDiv = document.createElement('div');
    priorityDiv.textContent = `Priority: ${todo.priority}`;
    priorityDiv.classList.add('todo-priority');

    card.append(titleDiv, descriptionDiv, dueDateDiv, priorityDiv);
    todoList.appendChild(card);
});
}