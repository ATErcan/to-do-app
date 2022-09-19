const taskBox = document.querySelector(".task");
const dateInput = document.querySelector(".input-date");
const toDoUl = document.querySelector(".to-do-list ul");
const addBtn = document.querySelector(".add-btn");
const taskList = [];

const addToArray = () => {
  taskList.push(`${taskBox.value}`);
};
let counter = 0;
addBtn.addEventListener("click", () => {
  if (dateInput.value === "") {
    alert("Please enter date.");
  } else if (taskBox.value === "") {
    alert("No task written.");
  } else if (taskBox.value === " ") {
    alert("No task written.");
  } else {
    addToArray();
    counter += 1;
    toDoUl.innerHTML += `<li class="p-0 list-item">
      <div class="row tasks align-items-center">
        <div class="col-1">
          <input type="checkbox" name="task-check" id="task-check">
        </div>
        <div class="col-2 date d-flex align-items-center">
          ${dateInput.value}
        </div>
        <div class="col-8 d-flex align-items-center">
          <div class="task-out">${taskBox.value}</div>          
        </div>
        <div class="col-1">
          <i class="fa-regular fa-trash-can trash"></i>
        </div>
      </div>
    </li>`;
    dateInput.value = "";
    taskBox.value = "";
  }

  const trashBin = document.querySelectorAll(".trash");
  for (let item of trashBin) {
    item.addEventListener("click", () => {
      document
        .querySelector(".incompleted")
        .appendChild(
          item.parentElement.parentElement.parentElement.childNodes[0]
        );
    });
  }
});
