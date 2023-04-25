/* Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

Após calcular os resultados o programa deve exibi-los na tela.*/

const number1 = Number(prompt('Digite o primeiro numero'))
const number2 = Number(prompt('Digite o segundo numero'))

const sumResult = number1 + number2
const subResult = number1 - number2
const multResult = number1 * number2
const divResult = number1 / number2

alert('A soma entre ' + number1 + ' e ' + number2 + ' é igual a: ' + sumResult)
alert('A subtração entre ' + number1 + ' e ' + number2 + ' é igual a: ' + subResult)
alert('A multiplicação entra ' + number1 + ' e ' + number2 + ' é igual a: ' + multResult)
alert('A divisão entre ' + number1 + ' e ' + number2 + ' é igual a: ' + divResult)