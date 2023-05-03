
const number = parseInt(prompt('Informe um numero'));
let result = '';

for (let i = 1; i <= 20; i++) {
    result += number + ' x ' + i + ' = ' + (number * i) + '\n';
};

alert(result);