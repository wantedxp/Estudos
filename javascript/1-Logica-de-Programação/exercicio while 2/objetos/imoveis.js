let imoveis = []
let opção = ""

do {
    opçao = prompt(`Cadastro de imovéis\n
    Atualmente temos ${imoveis.length} cadastrados.\n Digite 1 para cadastrar novo imovel\n Digite 2 Para listar imovéis.\n Digite 3 para sair.`)


    switch (opçao) {
        case "1":
            const info = {}
            info.proprietario = prompt("Informe o nome do propriétario")
            info.numeroDeQuartos = Number(prompt("Informe a quantidade de quartos."))
            info.numeroDebanheiros = Number(prompt("Informe a quantidade de banheiros"))
            info.possuiGaragem = prompt("Informe se o imovel possui garagem")

            const confirma = confirm(`Deseja salvar as informações?\n
            Nome do propriétario: ${info.proprietario}\n
            Quantidade de quartos: ${info.numeroDeQuartos}\n
            Quantidade de banheiros: ${info.numeroDebanheiros}\n
            Possui garagem? ${info.possuiGaragem}`)
            if (confirma === true) {
                imoveis.push(info)
            } else {
                alert("Voltando ao menu")
            }
            console.log(info)
            console.log(imoveis)
            break
        case "2":

            for (let i = 0; i < imoveis.length; i++) {
                alert(`Imovel ${i + 1}\n
                Propriétario${imoveis[i].proprietario}\n
                Quartos: ${imoveis[i].numeroDeQuartos}\n
                Banheiros: ${imoveis[i].numeroDebanheiros}\n
                Garagem: ${imoveis[i].possuiGaragem}`)
            }
        case "3":
            alert("Cadastro finalizado...")
            break
        default:
            alert("Selecione uma opçao válida.")
    }
} while (opção !== "2")