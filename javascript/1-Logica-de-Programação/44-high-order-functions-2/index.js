const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]




// for (let i = 0; i < personagens.length; i++) {
//  names.push(personagens[i].nome)
//}

//console.log(names)

//const classes = []

//personagens.forEach((characters) => {
//  classes.push(characters.classe)
//})

//console.log(classes)

//personagens.forEach ((character) => {
// orcs.filter(character.raca === 'Orc')
//})

//console.log(orcs)

// Map

const names = personagens.map((character) => {
  return character.nome
})

//console.log(names)

const orcs = personagens.filter((character) => {
  return character.raca === 'Orc'
})


// console.log(orcs)


// Reduce

const totalLevel = personagens.reduce((value, character) => {
  return value + character.nivel
}, 0)


// console.log(totalLevel)

const breeds = personagens.reduce((value, character) => {
  if (value[character.raca]) {
    value[character.raca].push(character)
  } else {
    value[character.raca] = [character]
  }
  return value
}, {})

//console.log(breeds)

const personagensPorRaca = {};

personagens.forEach((personagem) => {
  const { raca } = personagem;
  
  if (!personagensPorRaca[raca]) {
    personagensPorRaca[raca] = [];
  }
  
  personagensPorRaca[raca].push(personagem);
});

//console.log(personagensPorRaca);

// Sort 

personagens.sort((a, b) => {
  return  a.nivel - b.nivel
})

console.log(personagens)




const raiz = Math.exp(2)

console.log(raiz)