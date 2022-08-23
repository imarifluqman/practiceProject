var color_generate = document.getElementById("color_generate");
for (let j = 1; j <= 1000; j++) {
  const color_code = "0123456789abcdef";
  let color = "#";
  const lenght = 6;
  for (var i = 0; i < lenght; i++) {
    let abc = Math.floor(Math.random() * color_code.length);
    color += color_code.substring(abc, abc + 1);
  }

  //   ===================

  var box = document.createElement("p");
  box.classList.add("box");
  box.innerText = color;
  box.style.background = color;
  color_generate.appendChild(box);
  box.setAttribute("onclick", "copy(this)");
}

function copy(e) {
  let input = document.createElement("input");
  e.appendChild(input);
  input.value = e.innerText;
  input.select();
  document.execCommand("copy");
  input.remove();
  let copied = document.createElement("p");
  copied.innerText = "Copied";
  e.appendChild(copied);
  copied.setAttribute("class", "copied");
  setTimeout(function () {
    copied.remove();
  }, 1000);
  console.log(input.value);
}
