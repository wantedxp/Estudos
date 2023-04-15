let velocidade = 200

while (velocidade > 0) {
    alert(`Velocidade atual é de ${velocidade} Km/h`)
    velocidade -= 20
    alert(`Reduzindo 20Km/h`)

    if (velocidade === 60) {
        alert(`Já pode passar no radar velocidade atua é ${velocidade} Km/h`)
        break
    }
}
alert("Desligando frenagem automatica.")