const userNameInput = document.querySelector("#validation-input");
const validValue = userNameInput.getAttribute("data-length");

userNameInput.addEventListener("blur", (event) => {
  if (
    validValue > userNameInput.value.length ||
    userNameInput.value.length === 0 ||
    validValue < userNameInput.value.length
  ) {
    userNameInput.classList.remove("valid");
    userNameInput.classList.add("invalid");
  }
  if (parseInt(validValue) === userNameInput.value.length) {
    userNameInput.classList.remove("invalid");
    userNameInput.classList.add("valid");
  }
});

/*
console.log(userNameInputEl.value.length);
console.log(parseInt(userNameInputEl.getAttribute("data-length")));
*/
