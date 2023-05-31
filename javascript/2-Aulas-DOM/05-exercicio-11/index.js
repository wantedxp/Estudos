function climbPlayer() {
    const playerList = document.querySelector('#playerList')

    const confirmation = confirm('Deseja escalar um novo jogador?')

    if (confirmation === true) {
        const newPlayer = document.createElement('li')
        const playerPostion = document.querySelector('#playerPosition').value
        const playerName = document.querySelector('#playerName').value
        const playerNumber = document.querySelector('#playerNumber').value
        newPlayer.id = 'playerId' + playerNumber

        newPlayer.innerText = `${playerName} ${playerPostion} (${playerNumber})`

        playerList.appendChild(newPlayer)

        console.log(`${playerNumber}`)

        document.querySelector('#playerPosition').value = ''
        document.querySelector('#playerName').value = ''
        document.querySelector('#playerNumber').value = ''
    }
}

function removePlayer() {
    const playerNumber = document.querySelector('#playerToRemove').value

    const playerToRemove = document.querySelector('#playerId' + playerNumber)

    const confirmation = confirm('Deseja remover este jogador?')
    if (confirmation === true) {
        const playerList = document.querySelector('#playerList').removeChild(playerToRemove)

        document.querySelector('#playerToRemove').value = ''
    }
}