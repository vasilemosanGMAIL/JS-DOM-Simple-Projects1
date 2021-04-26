const button = document.getElementById("button");

button.addEventListener("click", runEvent);

function runEvent(e) {
  e.preventDefault();
  let randomColor = [
    "yellow",
    "red",
    "green",
    "blue",
    "black",
    "orange",
    "pink.",
  ];
  let randomNum = Math.floor(Math.random() * randomColor.length);
  document.body.style.backgroundColor = randomColor[randomNum];
}
