const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("tasks");

function constructElement(content) {
  let _li = document.createElement("li");
  _li.classList.add("todo-item");
  let _contentSpan = document.createElement("span");
  _contentSpan.innerText = content;
  _li.appendChild(_contentSpan);
  let deleteSpan = document.createElement("span");
  deleteSpan.classList.add("todo-delete");
  deleteSpan.innerText = "❌";
  deleteSpan.onclick = () => {
    _li.parentElement.removeChild(_li);
  };

  _li.appendChild(deleteSpan);

  return _li;
}

taskInput.addEventListener("keyup", ({ key }) => {
  if (key === "Enter") {
    let value = taskInput.value.trim();

    if (value !== "") {
      addTask(value);
      taskInput.value = "";
    }
  }
});

function addTask(content) {
  console.log(content);

  let _element = constructElement(content);
  console.log(_element);
  taskList.appendChild(_element);
}
