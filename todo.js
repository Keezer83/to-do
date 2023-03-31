document.getElementById("addItem").addEventListener("click", addToDo);
const toDoList = document.querySelector(".listToComplete");
let toDoOption = document.querySelector(".toDoInput");

function addToDo() {
  const listItem = document.createElement("li");
  listItem.textContent = toDoOption.value;
  const listCheckbox = document.createElement("input");
  listCheckbox.setAttribute("type", "checkbox");
  listCheckbox.addEventListener("change", function () {
    if (listCheckbox.checked === true) {
      listItem.setAttribute("class", "itemCompleted");
    } else {
      listItem.setAttribute("class", "");
    }
    console.log(listCheckbox.checked);
  });
  toDoOption.value = "";
  toDoList.appendChild(listItem);
  listItem.appendChild(listCheckbox);

  // toDoList.innerHTML += `<li id="${toDoOption.value}"><input type="checkbox" class="pending" id="${toDoOption.value}"/>${toDoOption.value}</li>`;
  // toDoOption.value = "";

  //   Array.from(
  //     document
  //       .querySelectorAll(".pending")
  //       .addEventListener("change", completeToDo)
  //   );
  //   function completeToDo() {
  //     const completedItem = document.querySelectorAll("li");
  //     const chkCompletedItem = Array.from(
  //       document.getElementsByClassName("input")
  //     );
  //   }
}
