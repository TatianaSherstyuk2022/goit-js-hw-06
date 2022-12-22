const userNameInputEl = document.querySelector("#validation-input");

userNameInputEl.addEventListener("blur", (event) => {
  if (
    userNameInputEl.getAttribute("data-length") >
      userNameInputEl.value.length ||
    userNameInputEl.value.length === 0 ||
    userNameInputEl.getAttribute("data-length") < userNameInputEl.value.length
  ) {
    userNameInputEl.classList.remove("valid");
    userNameInputEl.classList.add("invalid");
  } if (
    parseInt(userNameInputEl.getAttribute("data-length")) === userNameInputEl.value.length
  ) {
    userNameInputEl.classList.remove("invalid");
    userNameInputEl.classList.add("valid");
  }
});


/*
console.log(userNameInputEl.value.length);
console.log(parseInt(userNameInputEl.getAttribute("data-length")));
*/

