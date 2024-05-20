const inputEl = document.querySelector("input#name-input");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  const value = event.currentTarget.value.trim();
  if (value === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = value;
  }
}

const outputEl = document.querySelector("span#name-output");
