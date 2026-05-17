import {loadTodos,loadProjects,deleteTodo,deleteProject} from "./Storage.js";
const todoList = document.querySelector('.todoList');
const currentProjects = document.querySelector('.currentProjects')



export function updateDOM(currentProjectId) {
    const currentTodos = loadTodos() || [];
    const currentProjectsData = loadProjects() || [];

    todoList.innerHTML = "";
    currentProjects.innerHTML = "";


      currentProjectsData.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.dataset.projectId = project.id;

        const projectButton = document.createElement('button');
        projectButton.type = 'button';
        projectButton.textContent = project.title ||  'Untitled Project';
        projectButton.classList.add('project-button');
        projectButton.dataset.projectId = project.id;
        projectButton.dataset.projectTitle = project.title || 'Untitled Project';

        const projectDeleteButton = document.createElement('button');
        projectDeleteButton.type = 'button';
        projectDeleteButton.textContent = '✕';
        projectDeleteButton.classList.add('projectDeleteButton');
        projectDeleteButton.dataset.projectId = project.id;
        projectDeleteButton.setAttribute('aria-label', 'Delete project');

        projectItem.append(projectButton, projectDeleteButton);
        currentProjects.appendChild(projectItem);
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

        const todoDeleteButton = document.createElement('button');
        todoDeleteButton.textContent = 'Delete'
        todoDeleteButton.classList.add('todoDeleteButton')
        todoDeleteButton.dataset.id = todo.id;

        card.append(titleDiv, descriptionDiv, dueDateDiv, priorityDiv,todoDeleteButton);
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

        const todoDeleteButton = document.createElement('button');
        todoDeleteButton.textContent = 'Delete';
        todoDeleteButton.classList.add('todoDeleteButton');
        todoDeleteButton.dataset.id = todo.id;

        card.append(titleDiv, descriptionDiv, dueDateDiv, priorityDiv,todoDeleteButton);
        todoList.appendChild(card);
    })
    }
}


