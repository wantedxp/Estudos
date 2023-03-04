/* ## Sistema de Vagas de Emprego

Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
    - Listar vagas disponíveis
    - Criar um nova vaga
    - Visualizar uma vaga
    - Inscrever um candidato em uma vaga
    - Excluir uma vaga
    - Sair
- A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
- A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
- A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
- A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
- A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções. */

const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        textoFinal += indice + 1 + ". " // + 1 para vaga startar no indice 1 não no indice 0 para melhorar a visualização
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " canditados)\n"
        return textoFinal
    }, "")
    if (vagas == 0) {
        alert("Ainda não temos nenhuma vaga cadastrada.")

    } else { alert(vagasEmTexto) } // Condicional para caso não haja nenhuma vaga cadastrada



}

function novaVaga() {
    const nome = prompt("Informe o nome da vaga:")
    const descricao = prompt("Informe a descriçao da vaga:")
    const dataLimite = prompt("Informe data limite para cadastrar na vaga (dd/mm/aaaa) ")

    const confirma = confirm(`cadastra as seguintes informaçoes?
    Nome da vaga: ${nome}
    Descrição da vaga: ${descricao}
    Data limite: ${dataLimite}`)

    if (confirma) {
        const novaVaga = {
            nome,
            descricao,
            dataLimite,
            candidatos: []
        }
        vagas.push(novaVaga)
        alert("Vaga criada com sucesso!")
    } else {
        alert("Cancelando cadastro da vaga...")
    }
}

function exibirVaga() {
    const indice = parseInt(prompt("Informe o indice da vaga."))

    if (indice >= vagas.length || indice < 0) {
        alert("Indice inválido")
        return  // foi usando o return inves de else para ele retornar caso a condicição seja falsa deixando o código mais limpo
    }
    const vaga = vagas[indice]

    const candidatoEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")

    alert(`Vaga N° ${indice}
    Nome: ${vaga.nome}
    Descrição: ${vaga.descricao}
    Data lmite: ${vaga.dataLimite}
    Quantidade de candidatos: ${vaga.candidatos.length}
    Candidatos inscritos: ${candidatoEmTexto}`)
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do candidato(a)")
    const indice = parseFloat(prompt("Informe o indice da vaga que o candidato(a) deseja se inscrever."))

    if (indice >= vagas.length || indice < 0) {
        alert("Indice inválido.")
        return
    }
    const vaga = vagas[indice]

    const confirmar = confirm(`Deseja cadastrar o candidato?
    Nome do candidato: ${candidato}
    Na vaga: ${indice} 
    Nome da vaga: ${vaga.nome}
    Descrição: ${vaga.descricao}
    Data limite: ${vaga.dataLimite}`)

    if (confirmar) {
        vaga.candidatos.push(candidato)
        alert("Cadastro efetuado com sucesso. Boa sorte!")
    }
}

function excluirVaga() {
    const indice = parseInt(prompt("Informe o indice da vaga que deseja excluir."))

    if (indice >= vagas.length || indice < 0) {
        alert("Digite um indice válido")
        return
    }

    const vaga = vagas[indice]

    const confirmar = confirm(`Tem certeza que deseja excluir está vaga?
    ${indice}
    Nome da vaga: ${vaga.nome}
    Descrição: ${vaga.descricao}
    Data limite: ${vaga.dataLimite}`)

    if (confirmar) {
        vagas.splice(indice, 1)
        alert("Vaga excluida")
    }
}

function exebirMenu() {
    const opcao = prompt(`
    Cadastro de vagas de Emprego
    Escolha uma das opções
    1. Listar vagas disponiveis
    2. Criar nova vaga
    3. Visualizar vaga
    4. Inscrever um(a) candidato(a)
    5. Excluir uma vaga
    6. Sair`)

    return opcao
}

function executar() {
    let opcao = ""
    do {
        opcao = exebirMenu()

        switch (opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo..")
                break
            default:
                alert("Opção invalida, tente novamente.")
        }
    } while (opcao !== "6")
}
executar()