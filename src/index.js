import "./style.css";
import {todo} from "./Todo.js";
import {project} from "./Projct.js"
import {saveProjects,loadProjects} from "./Storage.js"


const ToDo1 = new todo(1, "Workout", "Today", "High","P1")
const ToDo2 = new todo(2, "Assignment", "Next Week", "Medium","P2")
const ToDo3 = new todo(3, "Homework", "Today", "Low","P2")


const project2 = new project (1, "big project", "the biggest projct in my life");

saveProjects(ToDo3)
console.log(loadProjects());
