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