const textinput = document.querySelector("#textinput");
const todoList = document.querySelector("#todoList");
let add_btn = document.querySelector(".add_btn");
let form = document.querySelector(".form");
let add_todo = document.querySelector(".add_todo");
let todoBox = [];
let todoindex;

function setTime() {
  let time = new Date();
  let date = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();
  let min = time.getMinutes();
  let hour = time.getHours();

  var ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  min = min < 10 ? "0" + min : min;
  var strTime = hour + ":" + min + " " + ampm;

  let timeDate = `${strTime} / ${date}-${month}-${year}`;
  return timeDate;
}
function openTextBox() {
  form.style.display = "block";
  add_btn.style.display = "none";
}
function closeTextBox() {
  form.style.display = "none";
  add_btn.style.display = "block";
  console.log("done");
}

function showInHtml() {
  todoList.innerHTML = "";
  for (let index = 0; index < todoBox.length; index++) {
    todoList.innerHTML += `<div class="itemBox">
    <div class="note_text">
        <p>${todoBox[index].todo}</p>
    </div>
    <div>
        <div class="btn_box">
            <small>${todoBox[index].time}</small>
            <div>
                <button onclick="editTodo(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="deleteTodo(${index})"><i class="fa-solid fa-trash-arrow-up"></i></button>
            </div>
        </div>
    </div>
</div>`;
  }
}

function addTodo() {
  if (add_todo.innerHTML == "Add") {
    if (textinput.value == "") {
      alert("please write something...!");
    } else {
      let obj = {
        todo: textinput.value,
        time: setTime(),
      };
      todoBox.push(obj);
      showInHtml();
      textinput.value = "";
      form.style.display = "none";
      add_btn.style.display = "block";
    }
  } else {
    editSave();
  }
}

function deleteTodo(e) {
  todoBox.splice(e, 1);
  showInHtml();
}

function editTodo(e) {
  form.style.display = "block";
  add_btn.style.display = "none";
  textinput.value = todoBox[e].todo;
  todoindex = e;
  add_todo.innerHTML = "Save";
}

function editSave() {
  todoBox[todoindex] = {
    todo: textinput.value,
    time: setTime(),
  };
  form.style.display = "none";
  add_btn.style.display = "block";
  textinput.value = "";
  add_todo.innerHTML = "Add";

  showInHtml();
}

function removeAll() {
  todoBox = [];
  showInHtml();
}
