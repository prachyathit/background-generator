var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.querySelector("#gradient");
var randBtn = document.querySelector("#rand");

function updateDisplay() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background;
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


color1.addEventListener("input", updateDisplay);
color2.addEventListener("input", updateDisplay);
randBtn.addEventListener("click", function() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  updateDisplay();
})
updateDisplay();