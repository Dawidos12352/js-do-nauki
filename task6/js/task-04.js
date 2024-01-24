const decrementBtn = document.querySelector(`[data-action="decrement"]`)
const incrementBtn = document.querySelector(`[data-action="increment"]`)
const counterValue = document.querySelector('#value')

let counter = 0

// first way with handler


const handleDecrement = () => {
    counterValue.textContent = counter -= 1
}

const handleIncrement = () => {
    counterValue.textContent = counter += 1
}

decrementBtn.addEventListener("click", handleDecrement)
incrementBtn.addEventListener("click", handleIncrement)

//second way without handler


// decrementBtn.addEventListener("click", () => {
//     counterValue.textContent = counter -= 1
// })
// incrementBtn.addEventListener("click", () => {
//     counterValue.textContent = counter += 1
// })