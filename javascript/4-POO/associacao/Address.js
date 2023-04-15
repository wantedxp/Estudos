class Address {
    constructor(name, number, neighborhood, city, state) {
        this.name = name
        this.number = number
        this.neighborhood = neighborhood
        this.city = city
        this.state = state
    }

    fullAddress() {
        return `Rua ${this.name}, Nº${this.number}. ${this.neighborhood}, ${this.city}/${this.state}`
    }
}

module.exports = Address