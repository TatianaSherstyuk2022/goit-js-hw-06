const userNameInputEl = document.querySelector("#name-input");
const userNameOutputEl = document.querySelector("#name-output");

const changeInput = (event) => {
  userNameOutputEl.textContent = event.currentTarget.value;
  if (!event.currentTarget.value) {
    userNameOutputEl.textContent = "Anonymous";
  }
};

userNameInputEl.addEventListener("input", changeInput);
