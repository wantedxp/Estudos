let number = parseInt(prompt('Informe um numero para ser multiplicado'));
let i;
let result = '';


for (let i = 1; i < 20; i++) {
    result += number + ' x ' + i + ' = ' + (number * i) + '\n'
};
console.log(result);
alert(result);