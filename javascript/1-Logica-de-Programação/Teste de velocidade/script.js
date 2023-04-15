let carro1 = parseInt(prompt("Digite a velocidade do primeiro carro"))

let carro2 = parseInt(prompt("Digite a velocidade dp segundo carro"))

if (carro1 > carro2) {
    alert(`O primeiro carro é mais veloz sua velocidade maxima é de ${carro1} e do segundo carro foi ${carro2}`)
} else if (carro1 < carro2){
    alert(`O segundo carro é mais veloz, sua velocidade maxima é ${carro2} e o do primeiro carro foi de ${carro1}`)
} else {
    alert("A velocidade dos dois carros são iguais")
}
