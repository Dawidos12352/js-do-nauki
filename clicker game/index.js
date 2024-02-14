

const TICK_INTERVAL = 100;
const SAVE_INTERVAL = 10 * 1000;

const COSTS = {
    mine : 10, 
    sawmill : 20,
};

let gameStatus = {
    resources : {
        wood : 0,
        metal : 0,
        gold : 0,
    },
    buildings : {
        mine: {resource : "metal", increment: 0.1, count: 0},
        sawmill: {resource : "wood", increment: 0.1, count: 0},
    },
    baselineResourceGrowth : {
        wood : 0.5,
        metal : 0.5,
        gold: 0,
    },
    bselineClickGrowth : {
        wood : 10,
        metal : 15,
        gold : 10, 
    },
};

let resourceCounters;
let buildings;

function saveGame() {
    gameStatus.timestamp = new Date().getTime();
    localStorage.setItem(("save"), JSON.stringify(gameStatus));
    console.log(`Game saved at ${new Date.getTime()}`)
}

function loadGame() {
    const save = localStorage.getItem("save");
    if(save) {
        gameStatus = JSON.parse(save);
        const preCatchup = {...gameStatus.resources};
        if(gameStatus.timestamp){
            const missedTicks = Math.floor((new Date().getTime() - gameStatus.timestamp) / TICK_INTERVAL);
            for( let i = 0; i < missedTicks; i ++) {
                gameTick();
            }
            console.log(`You have been gone for ${missedTicks} ticks`)
            Object.keys(preCatchup).forEach((rKey) => {
                console.log(`You've made ${Math.ceil(
                    gameStatus.resources[rKey] - preCatchup[rKey]
                  )} ${rKey}, since you've been gone`)
            });
            saveGame();
        }
    }
}

function addResources() {
    Object.values(gameStatus.buildings).forEach((building) => {
        gameStatus.resources[building.resource] += building.increment * building.count
    });
    Object.entries(gameStatus.baselineResourceGrowth).forEach(([resourceKey, resourceGrowthValue]) => {
    gameStatus.resources[resourceKey] += resourceGrowthValue
    })
}


function refreshCounters() {
    Object.entries(gameStatus.resources).forEach(
        ([resourceKey, resourceValue]) => {
            resourceCounters[resourceKey].value = Math.floor(resourceValue)
        }
    )
}

function generateBuildings(buildingName) {
    const element = document.createElement('div');
    element.classList.add("building", buildingName)
    return element
}

function drawBuildings(){
    Object.keys(buildings).forEach((bKey) => {
        const parentElement = buildings[bkey];
        const toRender = gameStatus.buildings[bKey].count - parentElement.children.length

        if(!toRender) {
            return
        }

        const elements = [];
        for(let i = 0; i < toRender; i++){
            elements.push(generateBuildings(bKey))
        }
        parentElement.append(...elements)
    });

};

function gameTick() {
    addResources();
    refreshCounters();
    drawBuildings();
}

function mineResource() {
    const {resourceName} = this.dataset;

    gameStatus.resources[resourceName] += gameStatus.baselineClickGrowth[resourceName];

}

function buyBuilding() {
    const {buildingName} = this.dataset
    const cost = COSTS[buildingName];
    const diff = gameStatus.resources.gold - cost;
    if(diff < 0) {
        console.log(`You are short ${Math.abs(diff)} gold`)
        return
    }
    gameStatus.buildings[buildingName].count += 1
    gameStatus.resources.gold -= cost
}

let gameInterval;
let saveInterval;

function startIntervals(){
    if(!gameInterval) {
        gameInterval = setInterval(gameTick, TICK_INTERVAL)
    }
    if(!saveInterval) {
        saveInterval = setInterval(saveGame, SAVE_INTERVAL)
    }
}

function stopIntervals(){
clearInterval(gameInterval);
gameInterval = null;
clearInterval(saveInterval)
saveInterval = null;
}



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
