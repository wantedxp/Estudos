class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0

    }

    addOnSctock(quantity) {
        this.inStock += quantity
    }

    calculateDiscout(percent) {
        return this.price * ((100 - percent) / 100)
    }
}

const ring = new Product("Ring", "...", 80)

const priceWithDiscout = ring.calculateDiscout(15)

console.log(ring)
console.log(priceWithDiscout)