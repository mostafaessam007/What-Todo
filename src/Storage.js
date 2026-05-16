//a function to save todos to local storage
export function saveTodos(todo) {
    const existing = JSON.parse(localStorage.getItem("todos")) || [];
    existing.push(todo);
    localStorage.setItem("todos", JSON.stringify(existing));
}

//function to get todos from local storage
export function loadTodos() {
    return JSON.parse(localStorage.getItem("todos"));
}

//function to remove a todo from local storage
export function deleteTodo(id) {
    const currentTodos = loadTodos() || [];
    const updated = currentTodos.filter(todo => todo.id !== id);
    localStorage.setItem("todos",JSON.stringify(updated))
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

//function to remove a project from local storage
export function deleteProject(projectId) {
    const currentProjectsData = loadProjects() || [];
    const updated = currentProjectsData.filter(project => project.id !== projectId);
    localStorage.setItem("projects",JSON.stringify(updated))
}