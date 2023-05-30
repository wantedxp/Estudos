function climbPlayer() {
    const itemList = document.getElementById('team')
    const confirmation = confirm('Dejeja escalar esse jogador?')

    const playerName = document.getElementById('playerName').value
    const playerPosition = document.getElementById('playerPosition').value
    const playerNumber = document.getElementById('playerNumber').value

    if (confirmation === true) {
        const playerLi = document.createElement('li')
        playerLi.innerText = 'Nome: ' + playerName + ' ' + playerPosition + ' (' + playerNumber + ')'
        playerLi.id = 'playerItem-' + playerNumber
        itemList.appendChild(playerLi)

        document.getElementById('playerName').value = ''
        document.getElementById('playerPosition').value = ''
        document.getElementById('playerNumber').value = ''
    }
}

function removePlayer() {
    const number = document.getElementById('deletePlayer').value
    const playerToRemover = document.getElementById('playerItem-' + number)

    const confirmation = confirm('Deseja mesmo remover esse jogador?')

    if (confirmation === true) {
        document.getElementById('team').removeChild(playerToRemover)
        document.getElementById('deletePlayer'). value = ''
    }
}