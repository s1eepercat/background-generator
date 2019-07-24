bg = document.querySelector("#background");
color1 = document.querySelector("#color1");
color2 = document.querySelector("#color2");
colorName = document.querySelector("#color-name");
button = document.querySelector("#button");

function colorInfo() {
  colorName.textContent = bg.style.background;
}

function setColor() {
    bg.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    colorInfo();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

color1.addEventListener("input",setColor);
color2.addEventListener("input",setColor);

button.addEventListener("click",function(){
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setColor();
})
