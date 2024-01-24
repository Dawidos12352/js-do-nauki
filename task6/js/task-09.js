const body = document.querySelector("body");
const bgColor = document.querySelector(".color");
const btn = document.querySelector(".change-color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//1

const btnHandler = ()=> {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  bgColor.textContent = getRandomHexColor();
}

btn.addEventListener("click", btnHandler)

// 2

// btn.addEventListener("click" , () => {
//   body.style.backgroundColor = `${getRandomHexColor()}`;
//   bgColor.textContent = getRandomHexColor();
// })