function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector("button.change-color");
buttonEl.addEventListener("click", onButtonClick);
function onButtonClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  const colorEl = document.querySelector("span.color");
  colorEl.textContent = color;
}
