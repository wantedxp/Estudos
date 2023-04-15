const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

//console.log(towns)

// Operador Spread 
//console.log(...towns)
//console.log(...towns[0])

// clonando objetos
const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

//console.log({ towns, townsCopy })

townsClone = [...towns]
townsClone.push('Aldebaran')

console.log({ towns, townsCopy, townsClone })