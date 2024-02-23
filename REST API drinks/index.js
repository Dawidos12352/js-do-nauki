const API_PATH = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
const POSSIBLE_INGREDIENTS_AMOUNT = 15;

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

            const ingridientsArray =[]
            for (let i = 1; i <= POSSIBLE_INGREDIENTS_AMOUNT; i++){
               console.log(`${el[`strIngredient${i}`]}`)

               const ing = el[`strIngredient${i}`]
               const mes = el[`strMeasure${i}`]
               if(ing || mes) {
                ingridientsArray.push(`${mes || ""} - ${ing || ""}`)
               }
               
            }
            console.log(ingridientsArray)

            
            const listRecipe = el.strInstructions.split(". ").map((e) => `<li>${e}</li>`).join("")

            drinksRecipes.insertAdjacentHTML("beforeend" , `
                <div>
                    <h2 class="drink-title">${el.strDrink}</h2>
                    <div class="drink-box">
                        <img src="${el.strDrinkThumb}" alt="${el.strDrink}" width="600px" class="image" />
                        <div>
                            <h3>Ingredients</h3>
                            <ul class="description">${ingridientsArray.map((e) => 
                                `<li>${e}</li>`
                            ).join(" ")
                        }</ul>
                            <h3>Preparation</h3>
                            <ol class="description">${listRecipe}</ol>
                        <div>
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






