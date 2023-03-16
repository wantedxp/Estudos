class Product {
    constructor(name, description, price, inStock) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}


const tv = new Product('Smart Tv', 'Smart tv, 59 Inches, Brand Sansung', 5600)

tv.addToStock(30)

console.log(tv)
console.log(tv.calculateDiscount(15))