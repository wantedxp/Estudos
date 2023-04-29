let options;

do {
    options = prompt('Menu interativo ' +
        '\n1-Saque' +
        '\n2-Depósito' +
        '\n3-Transferência' +
        '\n4-Pix' +
        '\n5-Encerrar');

    switch (options) {
        case '1':
            alert('Você seleciou a opçao Saque')
            break;
        case '2':
            alert('Você seleciou a opçao Depósito')
            break;
        case '3':
            alert('Você seleciou a opçao Transferência')
            break;
        case '4':
            alert('Você seleciou a opçao Pix')
            break;
        case '5':
            alert('Você seleciou a opçao Encerrar')
            break;
        default:
            alert('Informe uma opção válida')
            break;
    }
} while (options !== '5');

alert('Encerrando programa');