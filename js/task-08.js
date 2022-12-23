const submitBtn = document.querySelector("button");
const inputRefs = document.querySelector("input");
const formRefs = document.querySelector(".login-form");

formRefs.addEventListener("submit", getAllValues);

function getAllValues(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (!email.value || !password.value) {
    alert(`Всі поля повинні бути заповнені!`);
    return;
  }

  const dataObj = {
    email: email.value,
    password: password.value,
  };

  console.log(dataObj);
}
