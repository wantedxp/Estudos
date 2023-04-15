const Character = require("./Character");

class Mage extends Character {
    constructor(name, health, power, armor, inteligence) {
        super(name, health, power, armor)

        this.inteligence = inteligence
    }

    attack(enemy) {
        const damage = (this.power + this.inteligence) - enemy.power
        enemy.health -= damage
    }

    bless(target) {
        const healing = this.inteligence * 2
        target.health += healing
    }
}

module.exports = Mage
