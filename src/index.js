import "./style.css";
import {todo} from "./Todo.js";
import {project} from "./Projct.js";
import {saveTodos, saveProjects, deleteTodo, deleteProject} from "./Storage.js";
import { updateDOM } from "./DOM.js";


let currentProjectId = null;
let currentProjectTitle = null;

const newTodoBtn = document.querySelector('.newTodoBtn');
const modal = document.querySelector("#modal");
const overlay = document.querySelector(".overlay");
const addProjectBtn = document.querySelector('.addProjectBtn');
const projectModal = document.querySelector("#projectModal");

// the "Add new todo" button that opens the form
newTodoBtn.addEventListener("click", ()=>{
    modal.classList.add("open-modal");
    overlay.classList.add("open-overlay")
})


const addTodoBtn = document.querySelector('.addTodoBtn');
// the "Add Todo" button that submits the form and closes it
addTodoBtn.addEventListener("click", ()=>{
     modal.classList.remove("open-modal")
     overlay.classList.remove("open-overlay")
})


// the "+ Add Project" button that opens the form
addProjectBtn.addEventListener("click", ()=>{
    projectModal.classList.add("open-modal");
    overlay.classList.add("open-overlay")
})


const closeProjectModal = () => {
    projectModal.classList.remove("open-modal")
    overlay.classList.remove("open-overlay")
}
// the "Add Project" button that submits the form and closes it
const addProjectBtnForm = document.querySelector('.addProjectBtnForm');
addProjectBtnForm.addEventListener("click", ()=>{
    closeProjectModal();
})



const form = document.querySelector('#modal form');
const projectForm = document.querySelector('#projectModal form');
// the event listener that takes the data from the todo form and save into local storage
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const ToDo1 = new todo(
        crypto.randomUUID(),
        formData.get("todoTitle"),
        formData.get("todoDescription"),
        formData.get("dueDate"),
        formData.get("priority"),
        currentProjectId
    );
    saveTodos(ToDo1);
    updateDOM(currentProjectId);
    form.reset();
});

// the event listener that takes the data from the project form and save into local storage
projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(projectForm);
    const newProject = new project(
        crypto.randomUUID(),
        formData.get("projectTitle"),
        formData.get("projectDescription")
    );
    saveProjects(newProject);
    closeProjectModal();
    projectForm.reset();
    updateDOM(currentProjectId);
});

const todoList = document.querySelector('.todoList');
const currentHeading = document.querySelector('.currentHeading');
const inbox = document.querySelector('.inbox');

// Changes the current heading to inbox, and shows the todos that is not assigned to a project
inbox.addEventListener("click", ()=>{
currentHeading.textContent = "Inbox";
currentProjectId = null;
currentProjectTitle = null;
updateDOM(currentProjectId);
})

// Changes the current heading to the current project, and saves the id of the current project
const currentProjects = document.querySelector('.currentProjects');
currentProjects.addEventListener("click", (e) => {
    if (e.target.classList.contains("project-button")) {
         currentProjectId = e.target.dataset.projectId;
         currentProjectTitle = e.target.dataset.projectTitle
        currentHeading.textContent = `${currentProjectTitle}`
        updateDOM(currentProjectId);
    }
});

// the recursive function that updates the DOM 
updateDOM(currentProjectId);

//the event listener that deletes todos 
const todoDeleteButton = document.querySelector('.todoDeleteButton');
todoList.addEventListener("click", (e)=>{
    if (e.target.classList.contains("todoDeleteButton")) {
        const currentId = e.target.dataset.id
        deleteTodo(currentId)
        updateDOM(currentProjectId)
    }
})

//the event listener that deletes projects
currentProjects.addEventListener("click", (e)=>{
    if (e.target.classList.contains("projectDeleteButton")) {
        const currentId = e.target.dataset.projectId;
        deleteProject(currentId);
        if (currentProjectId === currentId) {
            currentProjectId = null;
            currentProjectTitle = null;
            currentHeading.textContent = "Inbox";
        }
        updateDOM(currentProjectId);
    }
})
