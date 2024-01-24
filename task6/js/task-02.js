const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

const ingredientsItems = ingredients.map((e) => {
  const listItem = document.createElement("li");
  listItem.textContent = e;
  listItem.className = "list";
  listItem.style.fontSize = "30px"
  if(listItem.textContent.length % 2 === 0){
    listItem.style.color ="red"
    listItem.textContent = `${listItem.textContent} (my length is even!)`
  }
  return listItem
});

ingredientsList.append(...ingredientsItems)