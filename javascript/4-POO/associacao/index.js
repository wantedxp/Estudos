const Address = require("./Address")
const Person = require("./Person")

const addr = new Address('Das Acacias', 91, 'Centro', 'Contagem', 'MG')

const john = new Person('John Doe', addr)

console.log(john)
console.log(john.address.fullAddress())