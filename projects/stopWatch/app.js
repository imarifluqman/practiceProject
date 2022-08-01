let hours = document.querySelector("#hours");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let start = document.querySelector("#start");
let setDay = document.querySelector("#day");
let setDate = document.querySelector("#date");
let setTime = document.querySelector("#time");

let h = 00;
let m = 00;
let s = 00;

function current_time() {
  let now = new Date();
  let day = now.getDay();
  let date = now.getDate();
  let year = now.getFullYear();
  let month = now.getMonth();
  let hour = now.getHours();
  let mints = now.getMinutes();
  let second = now.getSeconds();
  let dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12
  date = date < 10 ? "0" + date : date;
  setDay.innerHTML = dayName[day];
  setDate.innerHTML = `${date}/${monthName[month]}/${year}`;
  setTime.innerHTML = `${hour}:${mints}:${second} ${ampm}`;
}

setInterval(current_time, 1000);

let interval;

let timer = () => {
  s++;

  if (s === 60) {
    m++;
    s = 0;
  } else if (m === 60) {
    h++;
    m = 0;
  }
  hours.innerHTML = h < 10 ? "0" + h : h;
  min.innerHTML = m < 10 ? "0" + m : m;
  sec.innerHTML = s < 10 ? "0" + s : s;
};

function startTime(e) {
  interval = setInterval(timer, 1000);
  e.setAttribute("disabled", "disabled");
}

function pauseTimer() {
  clearInterval(interval);
  start.removeAttribute("disabled");
  hours.innerHTML = h < 10 ? "0" + h : h;
  min.innerHTML = m < 10 ? "0" + m : m;
  sec.innerHTML = s < 10 ? "0" + s : s;
}

function restartTimer() {
  clearInterval(interval);
  h = 00;
  m = 00;
  s = 00;
  hours.innerHTML = h < 10 ? "0" + h : h;
  min.innerHTML = m < 10 ? "0" + m : m;
  sec.innerHTML = s < 10 ? "0" + s : s;
  start.removeAttribute("disabled");
}
