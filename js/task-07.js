const inputRangeRef = document.querySelector("#font-size-control");
const inputTextRef = document.querySelector("#text");

const handleInput = () => {
    console.log(inputTextRef.style.fontSize);
  inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
};

inputRangeRef.addEventListener("input", handleInput);