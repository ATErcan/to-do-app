const taskBox = document.querySelector(".task");
const dateInput = document.querySelector(".input-date");
const toDoUl = document.querySelector(".to-do-list ul");
const addBtn = document.querySelector(".add-btn");
const compCount = document.querySelector(".completed .title p");
const totalTasks = document.querySelector(".total");

const taskList = [];
let checkbox = [null];
let totalCounter = 0;
let compCounter = 0;
compCount.textContent = `Number of completed: ${compCounter}`;
totalTasks.textContent = `Number of tasks: ${totalCounter}`;

/* const addToArray = () => {
  taskList.push(`${taskBox.value}`);
}; */

// Add li elements to main list
let count = 0;
let remove = 0;
const createLi = () => {
  count++;
  remove++;
  totalCounter++;
  toDoUl.innerHTML += `<li class="p-0 list-item">
      <div class="row tasks align-items-center">
        <div class="col-1">
          <input type="checkbox" name="task-check" id="task-check" class="task-check" data-check="${count}">
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
  totalTasks.textContent = `Number of tasks: ${totalCounter}`;
};

let counter = 0;

// Add tasks
addBtn.addEventListener("click", () => {
  if (!dateInput.value) {
    alert("Please enter date.");
  } else if (taskBox.value.trim() === "") {
    alert("No task written.");
  } else {
    /*    addToArray(); */

    // Call the function to create li elements
    createLi();

    counter += 1;
    // toDoUl.innerHTML += dateInput.value = "";
    // taskBox.value = "";
  }

  // Trash icon events
  const trashBin = document.querySelectorAll(".trash");
  const uncompleted = document.querySelector(".uncomp-list");
  const completed = document.querySelector(".comp-list");
  checkbox = document.querySelectorAll(".task-check");

  checkbox.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.checked) {
        completed.appendChild(item.parentElement.parentElement.parentElement);
        compCounter++;
        compCount.textContent = `Number of completed: ${compCounter}`;
      } else if (!e.target.checked) {
        uncompleted.appendChild(item.parentElement.parentElement.parentElement);
        compCounter--;
        compCount.textContent = `Number of completed: ${compCounter}`;
      }
    });
  });
  for (let item of trashBin) {
    item.addEventListener("click", () => {
      uncompleted.appendChild(item.parentElement.parentElement.parentElement);
      item.classList.add("uncomp-trash");
      const uncompTrash = document.querySelectorAll(".uncomp-trash");
      for (let item of uncompTrash) {
        item.addEventListener("click", () => {
          item.parentElement.parentElement.parentElement.remove();
          totalCounter--;
          totalTasks.textContent = `Number of tasks: ${totalCounter}`;
        });
      }
    });
  }

  /*   trashBin.forEach((i) => {
    i.addEventListener("click", () => {
      checkbox.forEach((item) => {
        if (item.checked) {
          uncompleted.appendChild(i.parentElement.parentElement.parentElement);
          item.checked = false;
          compCounter--;
          compCount.textContent = `Number of completed: ${compCounter}`;
          i.classList.add("uncomp-trash");
        } else {
          // console.log(totalCounter);
          uncompleted.appendChild(i.parentElement.parentElement.parentElement);
          i.classList.add("uncomp-trash");
        }
      });
    });
  }); */
});
/*     i.addEventListener("click", () => {
      uncompleted.appendChild(item.parentElement.parentElement.parentElement);


    } ) */
