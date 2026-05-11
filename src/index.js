import "./style.css";
import {todo} from "./Todo.js";
import {saveTodos} from "./Storage.js";
import { updateDOM } from "./DOM.js";
updateDOM();


const newTodoBtn = document.querySelector('.newTodoBtn');
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

newTodoBtn.addEventListener("click", ()=>{
    modal.classList.add("open-modal");
    overlay.classList.add("open-overlay")
})

const addTodoBtn = document.querySelector('.addTodoBtn');
addTodoBtn.addEventListener("click", ()=>{
     modal.classList.remove("open-modal")
     overlay.classList.remove("open-overlay")

})


const form = document.querySelector('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const ToDo1 = new todo(
        crypto.randomUUID(),
        formData.get("todoTitle"),
        formData.get("todoDescription"),
        formData.get("dueDate"),
        formData.get("priority")
    );
    saveTodos(ToDo1);
    updateDOM();
});

// const ToDo1 = new todo(1, "Workout", "Today", "High","P1")
// const ToDo2 = new todo(2, "Assignment", "Next Week", "Medium","P2")
// const ToDo3 = new todo(3, "Homework", "Today", "Low","P2")

// const todo2 = new todo (1, "big todo", "the biggest todo in my life");


