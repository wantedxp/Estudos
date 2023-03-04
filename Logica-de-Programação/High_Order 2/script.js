const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// map
//const nomes = []

//for (let i = 0; i < personagens.length; i++) {
//  nomes.push(personagens[i].nome)
//}
//console.log(nomes)

const nomes = personagens.map(function (personagem) {
    return personagem.nome
})

//console.log(nomes)




// filter
const orcs = personagens.filter(function (personagem) {
    return personagem.raca === "Orc"
})

//console.log(orcs)

// reduce

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel
}, 0)

//console.log(nivelTotal)

const raças = personagens.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
}, {})
//console.log(raças)



// sort
// oderdem alfabética
personagens.sort((a, b) => a.nome.localeCompare(b.nome))
console.log(personagens)

// oderdem por nivel
personagens.sort(function (a, b) {
    return a.nome - b.nome
})
console.log(personagens)