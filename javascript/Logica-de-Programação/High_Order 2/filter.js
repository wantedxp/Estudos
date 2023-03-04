const notas = [7.1, 6.2, 5.4, 9.0, 8.8, 10.0]

function aprovado(nota){
    return nota >= 7
}

const resultado = notas.filter(aprovado)
console.log(resultado)