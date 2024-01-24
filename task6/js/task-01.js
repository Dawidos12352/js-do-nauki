const mainUl = document.querySelector('#categories')
const listItem = document.querySelectorAll(".item");

const listCount = mainUl.childElementCount
console.log(`Number of categories: ${listCount}`);

const secondListCount = listItem.length
console.log(`(Second way) Number of categories: ${listCount}`);


listItem.forEach((e) => {
    console.log(`Category:${e.firstElementChild.textContent}`)
    console.log(`Elements:${e.lastElementChild.childElementCount}`)
})