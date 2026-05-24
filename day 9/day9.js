// Todo save karo
let todos = ["JS seekhna", "React seekhna", "Job lena"];

// Array ko JSON string mein badlo
localStorage.setItem("todos", JSON.stringify(todos));

// Wapas nikalo
let savedTodos = JSON.parse(localStorage.getItem("todos"));

console.log(savedTodos);
console.log(savedTodos[0]);
console.log(savedTodos[1]);