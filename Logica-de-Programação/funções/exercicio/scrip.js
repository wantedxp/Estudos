function areaTringulho() {
    const base = parseFloat(prompt("Digite a base do triângulho"))
    const altura = parseFloat(prompt("Digite a altura do triângulho"))
    return base * altura / 2
}

function areaRetangulho() {
    const base = parseFloat(prompt("Digite a base do retângulho"))
    const altura = parseFloat(prompt("Digite a altura do retângulho"))
    return base * altura
}

function areaQuadrado() {
    const area = parseFloat(prompt("Digite a área do quadrado"))
    return area * area
}

function areaTrapezio() {
    const baseMaior = parseFloat(prompt("Digite a base maior do trapézio."))
    const baseMenor = parseFloat(prompt("Digite a base menor do trapézio."))
    const altura = parseFloat(prompt("Digite a altura do trapézio."))
    return (baseMaior + baseMenor) * altura / 2
}

function areaQuadrado() {
    const base = parseFloat(prompt("Digite a área do circulo."))
    return base * base
}

function areaCirculo() {
    const raio = parseFloat(prompt("Digite o raio do circulo."))
    return 3.14 * raio * raio
}

function menu() {
    return prompt(`Escolha uma das opções a seguir:
    1. Caclular área do triângulho.
    2. Calcular área do retângulho.
    3. Calcular área do quadrado.
    4. Calcular área trapézio.
    5. Calcular área do circulo.
    6. Sair`)
}

function executar() {
    opção = ""
    do {
        opção = menu()
        let resultado

        switch (opção) {
            case "1":
                resultado = areaTringulho()
                break
            case "2":
                resultado = areaRetangulho()
                break
            case "3":
                resultado = areaQuadrado()
                break
            case "4":
                resultado = areaTrapezio()
                break
            case "5":
                resultado = areaCirculo()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Digite uma opção válida.")
                break
        }
        if (resultado) {
            alert(`O resultado é: ${resultado}`)
        }
    } while (opção !== "6")
}
executar()