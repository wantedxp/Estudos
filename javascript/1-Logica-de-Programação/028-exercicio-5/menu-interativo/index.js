let options = prompt('Informe a opção desejada: ' + '\n 1-Saque ' + '\n2-Depósito ' + '\n 3-ransferência ' + '\n 4-Pix' + '\n5-Encerrar')

do {
    alert('A opção selecionada foi de ' + options)

    options = prompt('Selecione outra opçao' + '\n 1-Saque ' + '\n2-Depósito ' + '\n 3-ransferência ' + '\n 4-Pix' + '\n5-Encerrar')
} while (options != '5')

alert('O programa foi ecerrado opção ' + options)