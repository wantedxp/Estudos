class Wallet {
    #amount
    #userName
    constructor() {
        this.#amount = 100.99 * 100
    }

    get amount() {
        return this.#amount / 100
    }

    set username(newUserName) {
        if (typeof newUserName === 'string') {
            this.#userName = newUserName
        } else {
            console.log('Error ')
        }
    }
}

const user = new Wallet()

console.log(user.amount)