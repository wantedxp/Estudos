function exebirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["maça", "Banana", "laranja", "limão"]

for (let i = 0; i < lista.length; i++) {
    exebirElemento(lista[i], i, lista)
}

lista.forEach(exebirElemento)