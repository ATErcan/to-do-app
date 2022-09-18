const taskBox = document.querySelector(".task");
const dateInput = document.querySelector(".input-date");
const toDoUl = document.querySelector(".to-do-list ul");
const addBtn = document.querySelector(".add-btn");
const taskList = [];

const addToDo = () => {
  taskList.push(`<li>
    <div>
    <input type="checkbox" name="to-do-check" id="to-do-check"/>
    ${taskBox.value} <i class="far fa-trash-can"></i>
    </div>
    </li>`);
};
let counter = 0;
addBtn.addEventListener("click", () => {
  addToDo();
  toDoUl.innerHTML = `${dateInput.value} ${taskList}`;
});
