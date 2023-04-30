const word = prompt('Digite uma palavra para verificarmos se é um palíndromo');

let isPalindrome = true;

for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    alert(word + ' é um palíndromo')
} else {
    alert(word + ' não é uma palíndromo')
}