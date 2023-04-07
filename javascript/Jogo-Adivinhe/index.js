let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();


function checkGuess() {
    const userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = 'Palpites anteriores: '
    }
    guesses.textContent += `${userGuess} `;

    if (userGuess === randomNumber) {
        lastResult.textContent = `Parabéns! Você acertou. Resultado: ${randomNumber}`
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        gameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'GAME OVER';
        lowOrHi.textContent = '';
        gameOver()
    } else {
        lastResult.textContent = 'Errado!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Seu palpite está muito abaixo'
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Seu palpite está muito alto!'
        }

        guessCount++;
        guessField.value = '';
        guessField.focus();

    }

}
guessSubmit.addEventListener('click', checkGuess);

function gameOver() {
    guessField.disable = true;
    guessSubmit.disable = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Iniciar novo jogo'
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    const resultParas = document.querySelector('.resultParas');
    for (let i = 0; i < resultParas.length; i++) {
        resultParas[i].textContent = ''
    }

    resetButton.parentNode.removeChild(resetButton)
    guesses.textContent = ''
    guessField.disable = false;
    guessSubmit.disable = false;
    guessField.value = '';
    guessField.focus()
    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
