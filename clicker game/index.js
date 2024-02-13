





// UI and HANDLERS
window.addEventListener("load", () => {

    resourceCounter = {
        metal: document.querySelector("#metalCounter"),
        wood: document.querySelector("#woodCounter"),
        gold: document.querySelector("#goldCounter"),
    }
    
    buldings = {
        mine: document.querySelector("#mine"),
        sawmill: document.querySelector("#sawmill")
    }
    
    const buyButtons = document.querySelectorAll(".buy");
    const mineButtons = document.querySelectorAll(".mine");
    const save = document.querySelector("#save");
    const stop = document.querySelector("#stop")
    const start = document.querySelector("#start")

    mineButtons.forEach(e => {
        e.addEventListener("click", mineResource)
    })

    buyButtons.forEach(e => {
        e.addEventListener("click" , buyBuilding)
    })

    loadGame()
    startInterval()
    save.addEventListener("click", saveGame)
    stop.addEventListener("click", stopIntervals)
    start.addEventListener("click", startIntervals)

})
