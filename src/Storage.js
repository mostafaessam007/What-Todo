//a function to save todos and projects to local storage
export function saveProjects(project) {
    const existing = JSON.parse(localStorage.getItem("projects")) || [];
    existing.push(project);
    localStorage.setItem("projects",JSON.stringify(existing))
}



//another function to get the todos and projects from local storage
export function loadProjects(project) {
return JSON.parse(localStorage.getItem("projects"))
}