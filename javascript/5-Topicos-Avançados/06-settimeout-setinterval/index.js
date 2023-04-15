// console.log('Programa incidado');

// const timeOutId = setTimeout(() => {
 // console.log('Pasaram 3 segs depois que o programa foi inciado')
// }, 1000 * 3);

// clearTimeout(timeOutId)

let seconds = 0

const intervalId = setInterval(() => {
    seconds += 2
    console.log(`Se passaram ${seconds} segundos`)
    if(seconds > 10) {
        clearInterval(intervalId)
        console.log('Tempo esgotado')
    }
}, 1000 * 3)



