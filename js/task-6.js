function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    elements.push(divEl);
  }

  const containerEl = document.querySelector("#boxes");

  containerEl.innerHTML = "";
  containerEl.append(...elements);
}

function destroyBoxes() {
  const containerEl = document.querySelector("#boxes");
  containerEl.innerHTML = "";
}

const createButtonEl = document.querySelector("[data-create]");
createButtonEl.addEventListener("click", onCreateButtonClick);
function onCreateButtonClick(event) {
  event.preventDefault();

  const inputEl = document.querySelector('input[type="number"]');

  const value = Number(inputEl.value);

  if (value < 1 || value > 100) {
    return;
  }

  createBoxes(value);

  inputEl.value = "";
}

const destroyButtonEl = document.querySelector("[data-destroy]");
destroyButtonEl.addEventListener("click", onDestroyButtonClick);
function onDestroyButtonClick(event) {
  event.preventDefault();
  destroyBoxes();
}
