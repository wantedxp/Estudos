class Account {
    #password
    #balance = 6.456

    constructor(user) {
        this.email = user.email
        this.#password = user.password
    }

    getBalance(email, password) {
        if (this.#authenticate(email, password)) {
            return this.#balance
        } else {
            return `Senha ou email icorreto`
        }
    }

    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }
}

const user = {
    email: 'flp.campos@gmail.com',
    password: '1234'
}

const myAccount = new Account(user)

// console.log(myAccount)
// console.log(myAccount.getBalance('flp.campos@gmail.com', '1234'))

class Person {
    #name
    constructor(name, age, ocupation) {
        this.#name = name
        this.age = age
        this.ocupation = ocupation
    }

    getName() {
        return this.#name
    }
}

const person = new Person('Filipe', 29, 'Student')

console.log(person.getName())