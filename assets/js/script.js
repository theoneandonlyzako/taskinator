// assigns the button element object representation to a variable in the file 
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// dynamically creates the task item
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  }

// adds the DOM object reference to the task list
buttonEl.addEventListener("click", createTaskHandler);


