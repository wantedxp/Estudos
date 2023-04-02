// const p = new Promise((resolve, reject) => {
// console.log('Executando a promisse')

//  setTimeout(() => {
// if (true) {
//     reject(false)
// }
//     console.log('Resolvendo a promise')
//     resolve(true)
//  }, 1000 * 2)
//})

// console.log(p)

// setTimeout(() => {
//   console.log(p)
// }, 1000 * 3)

function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promisse está sendo executada..')

        setTimeout(() => {
            console.log('Resolvendo a promisse..')
            resolve('Resultado')
        }, 1000)
    })
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 1000 * 2)