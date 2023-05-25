let menuOption

const menu = () => {
    menuOption = prompt(`Vagas de emprego
    Selecione um da opções a seguir: 
    1 Listar uma vaga
    2 Criar uma vaga
    3 Visualizar umavaga
    4 Inscrever um candidato em uma vaga
    5 Excluir uma vaga
    6 Sair`)
}

let vacancies = []

const createVacant = (name, description, date) => {
    const vacancy = {
        name,
        description,
        date
    }
    vacancy.name = prompt('Informe o nome da vaga')
    vacancy.description = prompt('Informe a descrição da vaga')
    vacancy.date = Date(prompt('Informe a data limite para inscrição'))
    const confirmation = confirm(`Confirme os dados
     Nome: ${vacancy.name}
     Descrição: ${vacancy.description}
     Data de expiração: ${vacancy.date}`)

    if (confirmation === true) {
        vacancies.push(vacancy)
    }
    
    console.log(vacancies)

}


do {
    menu()

    switch (menuOption) {
        case '1':

            break;
        case '2':
            createVacant()
            break;
        case '3':

            break;
        case '4':

            break;
        case '5':

            break;

        default:
            break;
    }

} while (menuOption !== '6')





