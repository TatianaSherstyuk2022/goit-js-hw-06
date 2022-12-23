
const sub = document.querySelector(".increment");
const add = document.querySelector(".decrement");
const span = document.querySelector("#value");


let counterValue = 0;
const increment = () => {
  counterValue += 1;

  span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  span.textContent = counterValue;
};

sub.addEventListener("click", increment);
add.addEventListener("click", decrement);
