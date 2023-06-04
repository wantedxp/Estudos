const registeredSpaceships = []

function createSpaceship(name: string, pilot: string, crewLimit: number,) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false,
    }

    registeredSpaceships.push(spaceship)
}

function findSpaceship(name: string) {
    let spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[]
        inMission: boolean
    }

    spaceship = registeredSpaceships.find(ship => ship.name === name)

    return spaceship
}



function addMemberCrew(member: string, spaceship: { name: string, crewLimit: number, crew: string[] }) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`O membro ${member} não pode ser incluso a expedição, limite máximo atingido.`)
    } else {
        spaceship.crew.push(member)
        alert(`O membro ${member} foi adicionado a ${spaceship.name}`)
    }
}

function sendInMission(spaceship: { name: string, crewLimit: number, crew: string[], inMission: boolean }) {
    if (spaceship.inMission === true) {
        alert(`A ${spaceship.name} não pode ser enviada pois já está em missão`)
    } else if (spaceship.crew.length <= Math.floor(spaceship.crewLimit / 3)) {
        alert(`A nave ${spaceship.name} não pode ser enviada para missão, tripulação insuficiente`)
    } else {
        spaceship.inMission = true
        alert(`A nave ${spaceship.name} foi enviada para a missão`)
    }
}

const firstMenuOption = () => {
    const name = prompt('Qual o nome da nave a ser registrada?')
    const pilot = prompt(`Qual o nome do pilodo da ${name} ?`)
    const crewLimit = Number(prompt(`Qual a quantidade máxima de tripulantes a ${name} suporta?`))

    const confirmation = confirm(`Confirma o registro da nave: ${name}. 
    Piloto: ${pilot}. 
    Limite da tripulação: ${crewLimit}`)

    if (confirmation === true) {
      createSpaceship(name, pilot, crewLimit)
    } else {
        firstMenuOption()
    }
}

const secondMenuOption = () => {
    const member = prompt(`Qual o nome do tripulante?`)
    const spaceshipName = prompt(`Para qual nave o tripulante ${member} será designado?`)

    const spaceship = findSpaceship(spaceshipName)

    if (spaceship) {
        const confirmation = confirm(`Confirma o ingresso de ${member} em ${spaceship.name}?`)

        if (confirmation === true) {
            addMemberCrew(member, spaceship)
        }
    }
    else {
        secondMenuOption()
    }
    
}

const thirdMenuOption = () => {
    const spaceshipName = prompt('Infome o nome da nave')
    const spaceship = findSpaceship(spaceshipName)

    if (spaceship) {
        const confirmation = confirm(`Deseja enviar ${spaceship.name} em missão?`)

        if (confirmation === true) {
            sendInMission(spaceship)
        }
    } else {
        thirdMenuOption()
    }
}

const fourtMenuOption = () => {
    for (const spaceship of registeredSpaceships) {
        alert(`Informações das naves registradas.
          Nome: ${spaceship.name}.
          Piloto: ${spaceship.pilot}. 
          Tripulação: ${spaceship.crew}. 
          Limite máximo de tripulantes: ${spaceship.crewLimit}`)
    }
}


firstMenuOption()
secondMenuOption()
thirdMenuOption()
fourtMenuOption()

