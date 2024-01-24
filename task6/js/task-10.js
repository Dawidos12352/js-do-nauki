function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const boxes = document.querySelector("#boxes")
const input = document.querySelector("input")
const btnCreate = document.querySelector(`button[data-create=""]`)
const btnDestroy = document.querySelector(`button[data-destroy=""]`)
console.log(boxes)
console.log(input)
console.log(btnCreate)
console.log(btnDestroy)


function createBoxes(number){
  let boxWidth = 30;
  let boxHeight = 30;

  for( let i = 0; i < number; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${i * 10 + boxWidth}px`;
    box.style.height = `${i * 10 + boxHeight}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    boxes.prepend(box);
  };
};

function destroyBoxes() {
  boxes.textContent = "";
}

btnCreate.addEventListener("click" ,() => createBoxes(input.value))
btnDestroy.addEventListener("click" , () => destroyBoxes())