const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

const handleInput = () => {
  // console.log(spanRef.style.fontSize);
  spanRef.style.fontSize = `${inputRef.value}px`;
};

inputRef.addEventListener("input", handleInput);
