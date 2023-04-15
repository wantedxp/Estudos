let opçao = prompt("Escolha uma das opções 1, 2, 3, 4, 5 ")

while (opçao == 1 || 2 || 3 || 4) {
    alert(`Você escolhei a opçao numero ${opçao}`)

    if (opçao == 5) {
        alert(`A opçao escolhida foi ${opçao} encerrando programa.`)
        break
    }
    
    opçao = prompt("Escolha uma das opções 1, 2, 3, 4, 5 ")
}