const API_PATH = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'

const form = document.querySelector("form")
const drinksRecipes = document.querySelector("#drinks")

const inputValue = form.elements.drinks.value

const getURL = (drinkName) => {
 return `${API_PATH}?s=${drinkName}`
}
console.log(getURL(inputValue))

const respsnse = fetch(getURL(inputValue))

respsnse.then((data) => {
    if(!data.ok){
        console.log("API ERROR", data.status)
    } else {
       data.json()
       .then(({drinks}) => {
        console.log(drinks)
        drinksRecipes.innerHTML = "";
        drinks.forEach((el) => {
            console.log()
            drinksRecipes.insertAdjacentHTML("beforeend" , `
                <div>
                    <h2 class="drink-title">${el.strDrink}</h2>
                    <div class="drink-box">
                        <img src="${el.strDrinkThumb}" alt="${el.strDrink}" width="600px" class="image" />
                        <p class="description">${el.strInstructions}</p>
                    </div>
                </div>
            `)
        })
       })
    }
})
.catch((e) => {
    console.log(e)
})


