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

adventurer['companion'] = { name: 'Leo', type: 'cat' };
//console.log(adventurer);

adventurer.companion.companion = { name: 'Frank', type: 'Flea', belongings: ['hat', 'sunglasses'] };
//console.log(adventurer);

//adventurer = {
//    roll(mod = 0) {
//        const result = Math.floor(Math.random() * 20) + 1 + mod;
//        console.log(`${this.name} rolled a ${result}.`);
//    }
//}

adventurer.roll = function (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
}

//console.log(adventurer);
//console.log(adventurer.roll(2));
console.log(adventurer.roll(12));
//console.log(adventurer.roll(22));
//console.log(adventurer.roll(34));
//console.log(adventurer.roll(5));


//#########Part 2: Class Fantasy###########
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
}
//attributes inside cnstructor might be specific to a chracter, but that not all characters have same, 

const robin = new Character('Robin');
robin.inventory = ['sword', 'potion', 'artifact'];
robin.companion = new Character('Leo');
robin.companion.type = 'cat';
robin.companion.companion = new Character('Frank');
robin.companion.companion.type = 'Flea';
robin.companion.companion.inventory = ['small hat', 'sunglasses'];
console.log(robin);


//#############Part 3: Class Features#######
class Adventurer extends Character {
    constructor(name, role) {
        //this.name = name;
        //this.role = role;
        super(name);
        this.role = role;
        this.inventory.push('bedroll', '50 gold coins');
        this.skillPoints = 0;
        this.level = 1;

    }
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    explore() {
        console.log(`${this.name} is exploring the area... `)
        const rollResult = this.roll(10);
        this.skillPoints += rollResult;
    }
    checkLevelUp() {
        if (this.skillPoints >= 100) {
            level++;
            this.skillPoints -= 100;
            console.log(`${this.name} leveled up to level ${level}`);
        }
    }
}

class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
        //this.health =100;
        this.loyalty = 100;
        //this.inventory = [];
        this.companion = null;
    }

    ally(adventurer) {
        console.log(`${this.name} the ${this.type} is being an ally to ${adventurer.name}!`);
        const allyRoll = this.roll();
        if (allyRoll > 10) {
            console.log(`${this.name}'s companionship was helpful!`);
            this.loyalty += 5;
        } else {
            console.log(`${this.name}'s companionship wasn't very effective...`);
            this.loyalty -= 2;
        }
    }
    checkLoyalty() {
        `${this.name}'s loyalty is currently at ${this.loyalty} points.`
    }

}

const robin1 = new Adventurer('robin1', 'Wanderer');
robin1.inventory.push = ('sword', 'potion', 'artifact');

const leo = new Companion('Leo', 'cat');
robin1.companion = leo;

const frank = new Companion('Frank', 'Flea');
frank.inventory = ['small hat', 'sunglasses'];
leo.companion = frank;

console.log(`############`)

console.log(robin1);
console.log(leo);
console.log(frank);


