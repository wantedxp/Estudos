
function multiplicar(a, b) {
    return a * b
}

let operação = multiplicar
console.log(operação(4, 2))

operação = function (a, b) {
    return a / b
}

console.log(operação(4, 2))