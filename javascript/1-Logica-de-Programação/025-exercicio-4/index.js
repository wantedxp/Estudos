const touristName = prompt('Informe o nome do turista')
let citiesVisited = ''
let total = 0

let option = prompt('O turista ja visitou alguma cidade? (Sim/Não)')

while (option === 'Sim') {
    let newCity = prompt('Informe o nome da cidade visitada')
    citiesVisited += newCity + ', '
    total++

    option = prompt('O turista ja visitou mais alguma outra cidade? (Sim/Não)')
}

alert('O turista ' + touristName + ' visitou um total de ' + total + ' cidades ' + '\n Cidades visitadas ' + citiesVisited)