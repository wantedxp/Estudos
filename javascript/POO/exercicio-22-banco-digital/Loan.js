const Installment = require("./Installment")

module.exports = class Loan {
    static #rateFees = 1.05

    constructor(value, installments) {
        this.value = value
        this.installments = installments = []
        for (let i = 1; i <= installments; i++)
            this.installments.push(new Installment(value * Loan.#rateFees) / installments, i)

        this.date = new Date()
    }

    static get getRate() {
        return Loan.#rateFees
    }

    static set changeRate(rate) {
        Loan.#rateFees = 1 + (rate / 100)
    }
}


