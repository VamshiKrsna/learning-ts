const input = document.querySelector("task-input");
const addButton = document.querySelector("add-task");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click",addTodo);

function addTodo(){
    const task = input.value.trim();
    if(task === ""){
        alert("Please enter a task to add !");
        return;
    }
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${task}</span>
        <span class= "remove"> X </span>
    `;
    todoList.appendChild(li);
    input.value = "";

    li.querySelector(".remove").addEventListener("click",()=>{
        removeTask(li);
    });
}

function removeTask(taskElement){
    todoList.removeChild(taskElement);
}

const initialTasks = [
    "Learn JS",
    "Watch Anime",
    "Play games"
]

for(const task in initialTasks){
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${task}</span>
        <span class = "remove"> X </span>
    `;
    todoList.appendChild(li);
    li.querySelector(".remove").addEventListener("click",()=>{
        removeTask(li);
    });
}