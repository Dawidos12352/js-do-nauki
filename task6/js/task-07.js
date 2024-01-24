const input = document.querySelector("input");
const text = document.querySelector("#text");

//1

const inputHandler = (e => {
    text.style.fontSize = `${e.currentTarget.value}px`
})

input.addEventListener("input" , inputHandler)

//2

// input.addEventListener("input" , e => {
//     text.style.fontSize = `${e.currentTarget.value}px`
// })