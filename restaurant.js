// 1. Import mongerInventory (require fishMonger.js)

const { mongerInventory } = require("./fishMonger.js")

// 2. Define "fishMenu" function
const fishMenu = (maxPrice) => {
    
    // Create a variable to invoke mongerInventory in maxPrice
    const fishList = mongerInventory(maxPrice)
    
    // Define and set initial htmlString
    let htmlString = `
    <h1>Menu</h1>
    <article class="menu">
    `
    // Loop through inventory array and add data to html structure
    fishList.forEach(fish => {
        htmlString += `
        <h2>${fish.species}</h2>
        <section class="menu__item">${fish.species} Soup</section>
        <section class="menu__item">${fish.species} Sandwich</section>
        <section class="menu__item">Grilled ${fish.species}</section>
        `
    })
    // Add final htmlString
    htmlString += `</article>`
    
    //Return full htmlString
    return htmlString
}

// 3. export fishMenu as module's default function
module.exports = { fishMenu }
