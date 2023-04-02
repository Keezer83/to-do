document.getElementById("addItem").addEventListener("click", addToDo);
const toDoList = document.querySelector(".listToComplete");
let toDoOption = document.querySelector(".toDoInput");

function addToDo() {
  const listItem = document.createElement("li");
  listItem.textContent = toDoOption.value;
  const listCheckbox = document.createElement("input");
  listCheckbox.setAttribute("type", "checkbox");
  const deleteItem = document.createElement("button");
  deleteItem.setAttribute("type", "submit");
  deleteItem.innerText = "X";
  deleteItem.setAttribute("class", "hidden");
  listCheckbox.addEventListener("change", function () {
    if (listCheckbox.checked === true) {
      listItem.setAttribute("class", "itemCompleted");
      deleteItem.setAttribute("class", "");
    } else {
      listItem.setAttribute("class", "");
      deleteItem.setAttribute("class", "hidden");
    }
  });
  deleteItem.addEventListener("click", function removeToDo() {
    listItem.remove();
  });
  toDoOption.value = "";
  listItem.appendChild(deleteItem);
  toDoList.appendChild(listItem);
  listItem.appendChild(listCheckbox);
}
