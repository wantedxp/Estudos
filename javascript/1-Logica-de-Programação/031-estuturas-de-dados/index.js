const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli", "Mordor"]

const arr2 = ['Volvo', 'Lexus']

const indice = arr.indexOf('Legolas')
const inclui = arr.includes('Aragorn')


const hobbits = arr.slice(0, 4)


const others = arr.slice(-5)


const misturado = arr.concat
    (arr2, 'Bmw')



for (let i = 0; i < misturado.length; i++) {
    element = misturado[i]
    console.log(`O elemento ${element} está na posição ${i}`)
}

