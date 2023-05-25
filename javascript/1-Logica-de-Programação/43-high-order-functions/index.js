function showElements(element, index, array) {
    console.log({
        element,
        index,
        array
    })
}

const lista = ['Arroz', 'Feijão', 'Carne', 'Macarrão']



//lista.forEach(showElements)

// lista.forEach(function (item, index, arr) {
    //console.log({
   // item,
       // index,
       // arr
//})
//})

lista.forEach((itens, index, arr) => {
    console.log({
        itens,
        index,
        arr
    })
})