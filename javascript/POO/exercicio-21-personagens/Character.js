class Character {
    constructor(name, health, power, armor) {
        this.name = name
        this.health = health
        this.armor = armor
        this.power = power
    }

    attack(enemy) {
        const damage = this.power - enemy.armor
        enemy.health -= damage
    }
}

module.exports = Character