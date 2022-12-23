function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const spanRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");

function onChangeColor(event) {
  const getRandomColor = getRandomHexColor();
  spanRef.textContent = `${getRandomColor}`;
  bodyRef.style.backgroundColor = `${getRandomColor}`;
}

buttonRef.addEventListener("click", onChangeColor);
