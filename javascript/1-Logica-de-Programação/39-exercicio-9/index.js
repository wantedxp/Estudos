let options

function triangleArea() {
    const triangleBase = Number(prompt('Informe a base do triângulho'))
    const triangleHeight = Number(prompt('Informe a altura do triângulho'))
    return alert((triangleBase * triangleHeight) / 2)
}

function rectangleArea() {
    const rectangleBase = Number(prompt('Informe a base do retângulho'))
    const rectangleHeigth = Number(prompt('Informe a altura do retângulho'))
    return alert(rectangleBase * rectangleHeigth)
}

function square() {
    const side = Number(prompt('Informe o lado do quadrado'))
    return alert(side * side)
}

function trapezeArea() {
    const biggerBase = Number(prompt('Informe a base maior do trapézio'))
    const smallBase = Number(prompt('Informe a base menor do trapézio'))
    const trapezeHeight = Number(prompt('Informe a altura do triângulho'))
    return alert((biggerBase + smallBase) * trapezeHeight / 2)
}

function circleArea() {
    const ray = Number(prompt('Informe a área do circulo'))
    return alert(ray * 3.14)
}

do {
    options = prompt('Escolha uma opção' + '\n1 Área do triângulho' + '\n2 Área do retângulho' + '\n3 Área do quadrado' + '\n4 Área do trapézio' + '\n5 Área do círculo' + '\n6 Sair')

    switch (options) {
        case '1':
            triangleArea()
            break;
        case '2':
            rectangleArea()
            break
        case '3':
            square()
            break
        case '4':
            trapezeArea()
            break
        case '5':
            circleArea()
            break
        case '6':
            alert('Encerrando programa')
            break
        default:
            alert('Digite uma opção válida em numeros. Ex (1)')
            break;
    }

} while (options !== '6')