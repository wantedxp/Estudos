/* Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

- o primeiro nome
- o sobrenome
- o campo de estudo
- o ano de nascimento

Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento). */
const year = 2023
const name = prompt('Informe o seu nome')
const lastName = prompt('Informe seu sobrenome')
const studyCamp = prompt('Informe o seu campo de estudo')
const yearOfBirth = prompt('Informe o seu ano de nascimento')
const age =  year - yearOfBirth
alert('Dados do recruta \n Nome Completo: ' + name +' ' + lastName + '\n Campo de estudo: ' + studyCamp + '\n Idade: ' + age)