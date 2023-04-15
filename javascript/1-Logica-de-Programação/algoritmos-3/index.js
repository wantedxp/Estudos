let maiorPeso = 0
let nomeMaiorPeso = ''


function heightCalculate() {
    const nome = prompt(`Digite o seu nome`)
    const peso = prompt('Digite o seu peso')

    if (peso > maiorPeso) {
        maiorPeso = peso
        nomeMaiorPeso = nome
    } else {
        
    }
    alert(`O peso de ${nome} é ${peso}Kg`)
    alert(`O maior peso até agora é o de ${nomeMaiorPeso}, ${maiorPeso} `)
}

for (let i = 0; i < 5; i++) {
    heightCalculate();
}
