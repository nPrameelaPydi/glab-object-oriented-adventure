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
