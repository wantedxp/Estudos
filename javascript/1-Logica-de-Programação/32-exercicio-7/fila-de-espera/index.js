let pacients = ['Filipe', 'Thiago'];

do {
    let message = '';
    for (let i = 0; i < pacients.length; i++) {
        let name = pacients[i];
        message += `${i} ${name}\n`
    }

    userInput = prompt(
        `Bem vindo ao consultório
Fila de espera:
${message}
1-Adicionar paciente na fila
2-Consultar paciente
3-Sair`)

    if (userInput === '1') {
        let newPacient = prompt('Informe o nome do paciente')
        pacients.push(newPacient)
    } else if (userInput === '2') {
        const removedPacient = pacients.shift()
        alert(`O paciente ${removedPacient} entrou para a consulta`)
    }

} while (userInput !== '3');
