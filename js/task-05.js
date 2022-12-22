const userNameInputEl = document.querySelector("#name-input");
const userNameOutputEl = document.querySelector("#name-output");

userNameInputEl.addEventListener("input", (event) => {
  if (userNameInputEl.value === "") {
    userNameOutputEl.innerHTML = "Anonymous";
  } else {
    userNameOutputEl.innerHTML = "userNameInputEl.value";
  }
  userNameOutputEl.textContent = event.currentTarget.value;
});
