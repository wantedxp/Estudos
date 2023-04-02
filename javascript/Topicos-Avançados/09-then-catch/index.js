function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promisse está sendo executada..')

        setTimeout(() => {
            console.log('Resolvendo a promisse..')
            resolve(42)
        }, 1000 * 2)
    })
}

const p = execute()

p.then((result) => {
    console.log(`o resultado foi ${result}`)
}).catch((err) => {
    console.log(`A promisse foi rejeitada ${err}`)
}).finally(() => {
    console.log('A promisse foi finalizada')
})
