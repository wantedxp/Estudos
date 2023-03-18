const Character = require("./Character")

class Thief extends Character {
    constructor(name, health, power, armor) {
        super(name, health, power, armor)
    }

    attack(enemy) {
        const damage = (this.power - enemy.armor) * 2
        enemy.health -= damage
    }
}

module.exports = Thief