console.log("Connected Script...");

let hours = document.querySelector("#hours");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let start = document.querySelector("#start");

let h = 00;
let m = 00;
let s = 00;

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
