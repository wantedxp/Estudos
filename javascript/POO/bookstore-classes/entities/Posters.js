module.exports = Produts = require("./Product");

module.exports = class Poster extends Produts {
    constructor(name, description, height, width, price, inStock = 0) {
        super(name, description, price, inStock)
        this.height = height
        this.width = width
    }
}