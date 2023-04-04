async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        Promise.reject('Digite um numero válido')
    }
    return a + b
}

async function asyncSubtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        Promise.reject('Digite um numero válido')
    }
    return a - b
}
const sumResult = asyncSum(50, 83)
const subtractResult = asyncSubtract(50, null)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(error => {
    console.log(error)
})
