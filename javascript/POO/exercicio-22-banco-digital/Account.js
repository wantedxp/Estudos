const Deposit = require("./Deposit")
const Loan = require("./Loan")

module.exports = class Account {
    #balance
    constructor(user) {
        this.owner = user
        this.#balance = 0
        this.deposit = []
        this.loans = []
        this.tranfers = []
    }

    get balance() {
        return this.#balance
    }

    addDeposit(deposit) {
        this.#balance + deposit.value
        this.deposit.push(deposit)
    }

    addLoan(loan) {
        this.#balance += loan.value
        this.loans.push(loan)
    }

    addTransfer(transfer) {
        if (transfer.sender.email === this.owner.email) {
            this.#balance += transfer.value
            this.tranfers.push(transfer)
        } else if (transfer.addressee.email === this.owner.email) {
            this.#balance -= transfer.value
            this.tranfers.push(transfer)
        }
    }
}