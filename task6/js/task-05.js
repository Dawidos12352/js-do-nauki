const input = document.querySelector("input");
const output = document.querySelector("span");
console.log(input)
console.log(output)

//first way

const inputHandler = (e => {
    if(!e.currentTarget.value) {
        output.textContent = "Anonymus"
    } else output.textContent = e.currentTarget.value
})

input.addEventListener("input" , inputHandler)

//second way

// input.addEventListener("input", e => {
//     if(!e.currentTarget.value) {
//         output.textContent = "Anonymus"
//     } else output.textContent = e.currentTarget.value
// });

