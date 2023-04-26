/* ## Teste de Velocidade

Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)

## Cálculo de Dano */

const car1 = prompt('Informe o nome do primeiro carro')
const car1Speed = Number(prompt('Informe a velocidade do primeiro carro'))

const car2 = prompt('Informe o nome do segundo carro')
const car2Speed = Number(prompt('Informe a velocidade do segundo carro'))

if (car1Speed < car2Speed) {
    alert(car2 + ' é mais veloz que ' + car1)
} else if (car1Speed > car2Speed) {
    alert(car1 + ' é mais veloz que ' + car2)
} else {
    alert('A velocidade de ' + car1 + ' e ' + car2 + ' são iguais')
}