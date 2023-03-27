document.getElementById("addItem").addEventListener("click", addToDo);

function addToDo() {
  const toDoList = document.getElementById("listToComplete");
  let toDoOption = document.getElementById("toDoInput");
  let newToDo = document.createElement("li");
  newToDo.setAttribute("id", toDoOption.value);
  newToDo.appendChild(document.createTextNode(toDoOption.value));
  toDoList.appendChild(newToDo);
}
const listItems = document.querySelectorAll(".listToComplete li");
listItems.forEach(function (addToDo) {
  let toDoCheckbox = document.createElement("input:checkbox");
  toDoCheckbox.appendChild(toDoCheckbox);
});
