async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Digite numeros válidos')
    }
    return a + b
}

async function execute() {
    try {
        const result = await asyncSum(50, null)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

execute()