const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
        name: "Mary",
        address: {
            street: "Some Street",
            number: 89
        }
    }],
    age: 42,
    phone: {
        countryCode: "+55",
        ddd: "22",
        number: "998745432"
    }
}
// sem encadeamento opcional
//console.log(user.friends[0].phone.ddd)

// com encadeamento opcional, usamos os "?." para o js fazer a verificação
console.log(user?.friends[0]?.phone?.ddd)

console.log(user.brothers?.[5].name)
