let palavra = prompt("Digite uma palavra")
let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i]
}
if (palavra == palavraInvertida) {
    alert(`A palavra ${palavra} é um Palimotro`)
} else {
    alert(`A palavra ${palavra} é diferente de ${palavraInvertida}`)
}