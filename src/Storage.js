//a function to save todos to local storage
export function saveTodos(todo) {
    const existing = JSON.parse(localStorage.getItem("todos")) || [];
    existing.push(todo);
    localStorage.setItem("todos", JSON.stringify(existing));
}

//another function to get todos from local storage
export function loadTodos() {
    return JSON.parse(localStorage.getItem("todos"));
}

//function to save projects to local storage
export function saveProjects(project) {
    const existing = JSON.parse(localStorage.getItem("projects")) || [];
    existing.push(project);
    localStorage.setItem("projects", JSON.stringify(existing));
}

//function to get projects from local storage
export function loadProjects() {
    return JSON.parse(localStorage.getItem("projects"));
}