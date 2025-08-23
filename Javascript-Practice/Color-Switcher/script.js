let randonBtn = document.querySelector(".randomBtn");
let colorInput = document.querySelector("#colorInput");
let applyBtn = document.querySelector(".applyBtn");
let currentColorValue = document.querySelector(".currentColorValue");
let container = document.querySelector(".container");

const colorArray = ['red','blue','green', 'yellow', 'brown', 'purple','aqua','white','black','cyan']

const generateRandomColor = ()=> {
  const randomNumber = Math.floor(Math.random()*colorArray.length)
  return colorArray[randomNumber]
}

let color = generateRandomColor();
console.log(color)

const changeColor = (color) => {
  container.style.backgroundColor = color;
  currentColorValue.innerText = color
};

const handleRandomBtnClick = () => {
  let color = generateRandomColor();
  changeColor(color);
};
const handleApplyBtnClick = () => {
  const color = colorInput.value;
  changeColor(color)
};

randonBtn.addEventListener("click", handleRandomBtnClick);
applyBtn.addEventListener("click", handleApplyBtnClick);

