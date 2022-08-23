console.log("Script connected");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

function addTodo() {
  todoList.innerHTML += `<div class="list">
  <p>${todoInput.value}</p>
  <div>
  <button onclick="editTodo(this)"><i class="fa-solid fa-pen-to-square"></i></button>
  <button onclick="deleteTodo(this)"><i class="fa-solid fa-trash-arrow-up"></i></button>
  </div>
  </div>`;
  todoInput.value = "";
}

function deleteTodo(e) {
  e.parentNode.parentNode.remove();
}

function editTodo(e) {
  //   console.log(e.parentNode.parentNode.childNodes[1].innerHTML);
  todoInput.value = e.parentNode.parentNode.childNodes[1].innerHTML;
  e.parentNode.parentNode.remove();
}

function removeAll() {
  todoList.innerHTML = "";
}
