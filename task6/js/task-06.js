const input = document.querySelector('#validation-input')

console.log(input)
console.log(input.dataset)

const parsedLength = parseInt(input.dataset.length)
console.log(parsedLength)

//1

const inputHandler = (e) => {
    if (e.currentTarget.value.length !== parsedLength){
e.currentTarget.setAttribute("class" , "invalid")
    } else e.currentTarget.setAttribute("class" ,"valid")
};

input.addEventListener("blur", inputHandler)

//2

// input.addEventListener("blur", (e) => {
//     if(e.currentTarget.value.length !== parsedLength) {
//         e.currentTarget.setAttribute("class", "invalid")
//        } else e.currentTarget.setAttribute("class" ,"valid")
// })