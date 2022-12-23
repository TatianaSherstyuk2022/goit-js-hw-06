const refs = {
  sub: document.querySelector(".increment"),
  add: document.querySelector(".decrement"),
  span: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  refs.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  refs.span.textContent = counterValue;
};

refs.sub.addEventListener("click", increment);
refs.add.addEventListener("click", decrement);
