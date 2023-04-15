let baralho = []
opção = ""

do {
    let cartas = ""
    for (let i = 0; i < baralho.length; i++) {
        cartas =+ baralho[i]
    }
    opçao = prompt(`Baralho:\n${baralho}\n\n1.Adcionar carta\n2.Puxar carta\n3.Sair`)

    switch (opçao) {
        case "1":
            const novaCarta = prompt("Qual carta você quer adicionar?")
            baralho.push(novaCarta)
            break
        case "2":
            const consultarCarta = baralho.pop()
            alert(`${consultarCarta} Foi removido do baralho`)
            break
        case "3":
            alert("Encerando")
            break
        default:
            alert("Selecione uma opão valida")

    }
} while (opçao !== 3)