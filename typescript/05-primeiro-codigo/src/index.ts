function sendSpaceship(name: string, captain: string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceship.name} com o Comandante: ${spaceship.captain} foi enviada em uma missão.`)

    return spaceship
}

function accelerate(targetSpeed: number, spaceship: { name: string, speed: number }) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}`)
    } else if (spaceship.speed < targetSpeed) {
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`)
    } else {
        alert(`Matendo a velocidade da ${spaceship.name}`)
    }
}

const spaceshipName = prompt('Informe o nome da nave a ser envidada')
const spaceshipCaptain = prompt('Informe o nome do capitão da nava')

const currentSpaceship = sendSpaceship(spaceshipName, spaceshipCaptain)
const speed = Number(prompt('Informe a velocidade da nave'))

accelerate(speed, currentSpaceship)