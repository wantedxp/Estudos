const squares = document.querySelectorAll('td')
const currentPlayerText = document.getElementById('currentPlayer')
const restartBtn = document.getElementById('restartBtn')
const player1Input = document.getElementById('player1')
const player2Input = document.getElementById('player2')

let currentPlayer = 'X'
let isGameActive = true
let TurnCount = 0
let player1Name = ''
let player2Name = ''

// declaring click function
function handleClick(ev) {
    const square = ev.target
    const squareIndex = square.id.split('-'[1])

    if (square.textContent || !isGameActive) {
        return
    }

    square.textContent = currentPlayer
    square.classList.add(`player${currentPlayer}`)
    TurnCount++

    if (checkWin()) {
        currentPlayerText.textContent = `${currentPlayer === 'X' ? player1Name : player2Name} wins!`
        isGameActive = false
        highlightWinningSquare()
    } else if (TurnCount === 9) {
        currentPlayerText.textContent = 'Tie!'
        isGameActive = false
        document.querySelector('table').classList.add('tie')
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        currentPlayerText.textContent = `${currentPlayer === 'X' ? player1Name : player2Name}'s turn`
    }
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    return winningCombinations.some(combination => {
        return combination.every(index => {
            return squares[index].textContent === currentPlayer
        })
    })
}

function highlightWinningSquare() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    winningCombinations.forEach(combination => {
        if (combination.every(index => squares[index].classList.contains(`player${currentPlayer}`))) {
            combination.forEach(index => squares[index].classList.add('winner')
            )
        }
    })
}

function resetGame() {
    squares.forEach(square => {
        square.textContent = ''
        square.classList.remove('playerX', 'playerO', 'winner')
    })
    document.querySelector('table').classList.remove('tie')
    currentPlayer = 'X'
    isGameActive = true
    TurnCount = 0
    currentPlayerText.textContent = `${player1Name}'s turn` // Set the text content to the first player's name
}


function startGame() {
    player1Name = player1Input.value
    player2Name = player2Input.value
    resetGame()
    currentPlayerText.textContent = `${player1Name}'s turn` // Set the text content to the first player's name
}

squares.forEach(cell => {
    cell.addEventListener('click', handleClick)
})

restartBtn.addEventListener('click', startGame)