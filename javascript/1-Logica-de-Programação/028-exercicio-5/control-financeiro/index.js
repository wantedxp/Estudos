let amount = Number(prompt('Informe o seu saldo inicial'));
let options = ''

do {
    let options = prompt('O saldo da sua conta é: ' + amount + '\n 1-Depósito' + '\n 2-Saque' + '\n 3-Sair');

    if (options === '1') {
        let deposit = Number(prompt('Informe o valor a ser depositado na conta'));
        amount += deposit;

    } else if (options === '2') {
        let withdraw = Number(prompt('Informe o valor a ser sacado na conta'));
        amount -= withdraw;

    } else {
        break
    }
} while (options != '3');

alert('Programa encerrado')