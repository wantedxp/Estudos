const word = prompt('Informe uma palavra').toLowerCase();
let reverseWord = '';

for (i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
};

if (reverseWord === word) {
    alert('A palavra ' + word + ' é um palíndromo');
} else {
    alert('A palavra não é um palíndromo ' + reverseWord);
};
