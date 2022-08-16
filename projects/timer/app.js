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
  if (h == 0 && m == 0 && s == 0) {
    reset();
    timeOver.innerHTML = "Time is Over";
  } else if (s != 0) {
    s--;
    inputDisabled(false);
    timeOver.innerHTML = "";
  } else if (m != 0 && s == 0) {
    s = 59;
    m--;
  } else if (h != 0 && m == 0) {
    m = 60;
    h--;
  }

  showhour.innerHTML = h;
  showmin.innerHTML = m;
  showsec.innerHTML = s;
}

function starttimer(e) {
  if (hour.value == 0 && minute.value == 0 && sec.value == 0) {
    clearInterval(interval);
    start.removeAttribute("disabled");
    timeOver.innerHTML = "Please set time";
  } else {
    e.setAttribute("disabled", "disabled");
    h = hour.value;
    m = minute.value;
    s = sec.value;
    interval = setInterval(setValue, 1000);
  }
}

function reset() {
  clearInterval(interval);
  start.removeAttribute("disabled");
  inputDisabled(true);
  hour.value = 0;
  minute.value = 0;
  sec.value = 0;
  showhour.innerHTML = hour.value;
  showmin.innerHTML = minute.value;
  showsec.innerHTML = sec.value;
}

function inputDisabled(anable) {
  if (anable) {
    hour.removeAttribute("disabled");
    minute.removeAttribute("disabled");
    sec.removeAttribute("disabled");
  } else {
    hour.setAttribute("disabled", "disabled");
    minute.setAttribute("disabled", "disabled");
    sec.setAttribute("disabled", "disabled");
  }
}
