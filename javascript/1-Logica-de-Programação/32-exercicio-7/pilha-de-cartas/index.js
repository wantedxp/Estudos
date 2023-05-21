
let deck = ['Copas', 'Espadas', 'Ouros', 'Paus', 'Ás', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Valete', 'Dama', 'Rei']

for (let i = 0; i < deck.length; i++) {
}

do {
    option = prompt('O total de cartas do deck é ' + deck.length + '\n1 Adicionar carta' + '\n2 Puxar carta' + '\n3 Sair')

    if (option === '1') {
        let newCard = prompt('Informe qual carta deseja adicionar ao deck')

        deck.push(newCard)

        alert(newCard)
    } else if (option === '2') {
        removeCard = deck.pop()

        alert(removeCard)
    }

} while (option !== '3')