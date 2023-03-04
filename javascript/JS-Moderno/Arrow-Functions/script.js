
// let n1 = Number(prompt('Digite um numero'))
// let n2 = Number(prompt('Digite outro numero para somar'))
const soma = (n1, n2) => n1 + n2

// console.log(`A soma entre ${n1} e ${n2} é igual á: ${soma(n1, n2)}`)

// arrow function sintaxe com apenas um parametro
const double = n => `O dobro de ${n} é ${n * 2}`
// console.log(double(7))


const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')

console.log(`As cidades que começam com P neste array são: ${startingWithP}`)