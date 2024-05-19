const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("All form fields must be filled in");
  } else {
    console.log({ email: email.value, password: password.value });
    event.currentTarget.reset();
  }
}
