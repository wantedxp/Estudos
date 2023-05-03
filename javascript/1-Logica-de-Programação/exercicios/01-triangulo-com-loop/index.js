// Escreva um programa que faça sete chamadas a console.log() para retornar o seguinte triângulo:
'#'
'##'
'###'
'####'
'#####'
'######'
'#######'

let triangle = ''

for (let i = 0; i < 7; i++) {
    triangle += '#'
    console.log(triangle)
}
