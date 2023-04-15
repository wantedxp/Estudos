const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const dante = new Warrior('Dante', 200, 14, 12, 4)
const vergil = new Thief('Vergil', 140, 22, 8)
const v = new Mage('V', 90, 4, 2, 14)

console.table({ dante, vergil, v })

dante.switchPosition()
v.attack(dante)
vergil.attack(v)
console.table({ dante, vergil, v })

