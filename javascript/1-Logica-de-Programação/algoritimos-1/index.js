const form = document.querySelector('form')
const input1 = document.getElementById('lado1')
const input2 = document.getElementById('lado2')
const input3 = document.getElementById('lado3')
const resultadoElement = document.getElementById('resultado')

form.addEventListener('submit', function (ev) {
    ev.preventDefault()

    const lado1 = input1.value
    const lado2 = input2.value
    const lado3 = input3.value

    let EQ = lado1 == lado2 && lado2 == lado3
    let ES = lado1 != lado2 && lado2 != lado3 && lado1 != lado3

    if (EQ === true) {
        resultadoElement.textContent = `Os três lados do triângulo são iguais: ${EQ}`
    } else if (ES === true) {
        resultadoElement.textContent = `Os lados do triângulo são diferentes: ${ES}`
    } else {
        resultadoElement.textContent = `O triângulo possui dois lados iguais e um diferente.`
    }
})
