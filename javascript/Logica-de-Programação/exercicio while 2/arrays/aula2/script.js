let arr = ["320i", "X8", "X11", "Z3", "Punto", "Cobalt", "Coverte", "Gallardo"]
console.log(arr)

// Adicionar ao final do array
arr.push("Aventador")
console.log(arr)

//adicionar ao inicio do array
arr.unshift("M3")
console.log(arr)

// Remover no final
arr.pop()
console.log(arr)

//Remover no inicio
arr.shift()
console.log(arr)

//Pegar somente os 4 primeiros
BMW = arr.slice(0, 4)
console.log(BMW)

let lambo = ["Aventador", "Mucielago", "diablo"]

console.log(arr)

let carros = arr.concat(lambo, "Cetenario")
console.log(carros)

for (let i = 0; i < carros.length; i++) {
    const elemento = carros[i]
    console.log(`${elemento} Se encontra na posição ${i}`)
}