console.log(`GLAB - Object Oriented Adventure Game`);

/*********Part 1: Humble Beginnings********/
console.log(`*****Part 1: Humble Beginnings****`)
//Let’s model a simple adventurer with basic properties such as health and an inventory. 
//We will call the adventurer “Robin.”

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"]
}

//create a loop that logs each item in Robin’s inventory.
//for (const key in adventurer) {
//    if (adventurer[key] == `inventory`) {
//        for (let i = 0; i < inventory.length; i++) {
//            console.log(adventurer[key][i]);
//        }
//    }
//}
for (let i = 0; i < adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i]);
}

//const adventurer = {
//    name: "Robin",
//    health: 10,
//    inventory: ["sword", "potion", "artifact"],
//    companion: {
//        name: "Leo",
//        type: "Cat"
//    }
//}

