const { boatInventory } = require("./fishingBoat.js")

// Define and export the mongerInventory function
const mongerInventory = (maxPrice) => {

    // Create an empty array to store the purchased fish
    const purchasedFish = [];
    
    // Create a variable to invoke boatInventory
    const inventory = boatInventory()

    // Loop through the inventory array and add the inexpensive fish to the purchasedFish array
    inventory.forEach((fish) => {
        if (fish.price <= 7.5 && fish.amount >= 10) {
            fish.amount = 10
            purchasedFish.push(fish);
        }

    });

    // Filter the purchasedFish array to only include fish that meet the price constraint of the restaurant chef
    const filteredFish = purchasedFish.filter((fish) => {
        return fish.price <= maxPrice;
    })

    // Return the final array of fish that meet the chef's price constraint
    return filteredFish;
};

// 4. export "mongerInventory" as module's default function

module.exports = { mongerInventory }