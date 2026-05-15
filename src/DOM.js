import {loadTodos} from "./Storage.js";
const todoList = document.querySelector('.todoList');

import {loadProjects} from "./Storage.js"
const currentProjects = document.querySelector('.currentProjects')


export function updateDOM(currentProjectId) {
    const currentTodos = loadTodos() || [];
    const currentProjectsData = loadProjects() || [];

    todoList.innerHTML = "";
    currentProjects.innerHTML = "";


      currentProjectsData.forEach(project => {
        const projectButton = document.createElement('button');
        projectButton.type = 'button';
        projectButton.textContent = project.title || project.name || 'Untitled Project';
        projectButton.classList.add('project-button');
        projectButton.dataset.projectId = project.id;
        projectButton.dataset.projectTitle = project.title
        currentProjects.appendChild(projectButton);
    });

    // it detects if there is a project selected or not
    if (currentProjectId === null) {
        
    currentTodos.filter(todo => todo.projectId === null).forEach(todo => {
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
    } else{
        // it shows only the todos that's under the current project
        const filteredTodos = currentTodos.filter(todo => todo.projectId === currentProjectId)
        filteredTodos.forEach(todo => {
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
    })
    }
}
