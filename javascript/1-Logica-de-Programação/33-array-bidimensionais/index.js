// Arrays podem receber qualquer tipo da dado, inclusive outros arrays
const arr = [
    "1º Nível",
    ["2º nível", 42, true],
    [
        ["3º nível, 1º item", "Olá, mundo!"],
        ["3º nível, 2º item", "Oi, mundo!"],
    ],
    []
]


const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        element = matriz[i][j]
        console.log(`${i}, ${j}, ${element}`)
    }
}