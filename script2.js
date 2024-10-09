class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }

    // Existing scout method
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    // New duel method
    duel(opponent) {
        console.log(`${this.name} is dueling ${opponent.name}!`);

        while (this.health > 50 && opponent.health > 50) {
            // Roll for both adventurers
            const myRoll = this.roll();
            const opponentRoll = opponent.roll();

            console.log(`${this.name} rolled: ${myRoll}`);
            console.log(`${opponent.name} rolled: ${opponentRoll}`);

            // Determine the winner of the round
            if (myRoll > opponentRoll) {
                opponent.health -= 1; // Opponent loses health
                console.log(`${opponent.name} loses 1 health! Current health: ${opponent.health}`);
            } else if (myRoll < opponentRoll) {
                this.health -= 1; // This adventurer loses health
                console.log(`${this.name} loses 1 health! Current health: ${this.health}`);
            } else {
                console.log("It's a tie! No health lost.");
            }

            // Log current health
            console.log(`Current health - ${this.name}: ${this.health}, ${opponent.name}: ${opponent.health}`);
        }

        // Determine and log the winner
        if (this.health > 50) {
            console.log(`${this.name} wins the duel!`);
        } else {
            console.log(`${opponent.name} wins the duel!`);
        }
    }
}

// Define items
const item1 = new Item('Healing Potion', 'potion', 'restores 5 health points');
const item2 = new Item('Magic Wand', 'equipment', 'casting spells');

// Create adventurers and give them inventories
const adventurer1 = new Adventurer('Robin', 'Fighter');
const adventurer2 = new Adventurer('Lia', 'Wizard');
adventurer1.inventory = new Inventory();
adventurer2.inventory = new Inventory();

adventurer1.inventory.addItem(item1);
adventurer2.inventory.addItem(item2);

// Interaction example: Adventurers vs. Dragon and Monster
function battle(adventurer, creature) {
    console.log(`A battle begins: ${adventurer.name} vs. ${creature.name}`);

    while (adventurer.health > 0 && creature.health > 0) {
        // Adventurer attacks
        const attackRoll = adventurer.roll();
        console.log(`${adventurer.name} attacks with a roll of ${attackRoll}!`);
        creature.health -= attackRoll; // Damage equal to roll
        console.log(`${creature.name} takes ${attackRoll} damage. Health left: ${creature.health}`);

        if (creature.health <= 0) {
            console.log(`${creature.name} has been defeated!`);
            break;
        }

        // Creature attacks
        if (creature instanceof Dragon) {
            creature.useFireBreath(adventurer);
        } else if (creature instanceof Monster) {
            creature.attack(adventurer);
        }

        if (adventurer.health <= 0) {
            console.log(`${adventurer.name} has been defeated!`);
            break;
        }

        // Allow adventurer to use an item (example: healing potion)
        if (adventurer.inventory.includes(item1) && adventurer.health < 100) {
            console.log(`${adventurer.name} uses a ${item1.name}.`);
            adventurer.health += 5; // Restore health
            adventurer.inventory.removeItem(item1); // Remove the used item
            console.log(`${adventurer.name} restores 5 health points. Current health: ${adventurer.health}`);
        }
    }
}

// Example creatures
const dragon = new Dragon('Fire Drake', 30);
const monster = new Monster('Goblin', 20);

// Start a battle
battle(adventurer1, dragon);
battle(adventurer2, monster);

