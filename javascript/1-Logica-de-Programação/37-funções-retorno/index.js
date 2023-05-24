function media(a, b) {
    const media = (a + b) / 2
    return media
}

// resultado = media(10, 10)
// console.log(resultado)

function createProduct(name, price) {
    const product = {
        name,
        price,
        stock: 1
    }
    return product
}

console.log(createProduct('Pc', 2500))


function rectangularArea(height, width) {
    return height * width
}

function squareArea(side) {
    return rectangularArea(side, side)
}

// console.log(squareArea(9))


function ofGreater(age) {
    if (age < 18) {
        return 'Menor de idade'
    } else {
        return 'Maior de idade'
    }
}

console.log(ofGreater(33))