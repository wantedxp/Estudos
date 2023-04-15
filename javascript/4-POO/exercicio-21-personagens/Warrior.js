const Character = require("./Character");

class Warrior extends Character {
    constructor(name, health, power, armor, shieldPoints) {
        super(name, health, power, armor)

        this.shieldPoints = shieldPoints
        this.position = 'attack'
    };

    attack(enemy) {
        if (this.attackPosition === 'attack') {
            const damage = this.power - enemy.armor
            enemy.health -= damage
        }
    }

    switchPosition() {
        if (this.position === 'attack') {
            this.position = 'defense'
            this.armor += this.shieldPoints
        } else {
            this.position = 'attack'
            this.armor -= this.shieldPoints
        }
    }
}

module.exports = Warrior