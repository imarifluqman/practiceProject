let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let sec = document.querySelector("#sec");
let h;
let m;
let s;
let interval;
let start = document.querySelector("#start");
let timeOver = document.querySelector("#timeOver");

// ============Show Timer=====================
let showhour = document.querySelector("#showhour");
let showmin = document.querySelector("#showmin");
let showsec = document.querySelector("#showsec");

function setValue() {
  if (m < 0 && s < 0 && h < 0) {
    clearInterval(interval);
    start.removeAttribute("disabled");
    h = 0;
    m = 0;
    s = 0;
  }
  s--;
  if (s === 0) {
    m--;
    s = 60;
  }
  if (m === 0) {
    h--;
    m = 60;
  }
  if (s === 0 && m === 0 && h === 0) {
    clearInterval(interval);
    start.removeAttribute("disabled");
    timeOver.innerHTML = "Time is Over";
  }
  showhour.innerHTML = h;
  showmin.innerHTML = m;
  showsec.innerHTML = s;
}

function starttimer(e) {
  e.setAttribute("disabled", "disabled");
  h = hour.value;
  m = minute.value;
  s = sec.value;

  interval = setInterval(setValue, 1000);
}

function reset() {
  clearInterval(interval);
  start.removeAttribute("disabled");
  hour.value = 00;
  minute.value = 00;
  sec.value = 00;
  showhour.innerHTML = hour.value;
  showmin.innerHTML = minute.value;
  showsec.innerHTML = sec.value;
}
