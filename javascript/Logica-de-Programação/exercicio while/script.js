let turista = prompt("Qual é o seu nome?")

let cidades = ""
let quantidade = 0
let visitou = prompt("Já visitou alguma cidade? (Sim/Não)")

while (visitou === "Sim") {
    let cidade = prompt("Qual o nome da cidade que você visitou?")
    cidades += cidade
    quantidade++
    visitou = prompt("ja visitou mais alguma outra cidade? (Sim/Não)")
}
alert(`${turista},  ${quantidade} , ${cidades}  `)