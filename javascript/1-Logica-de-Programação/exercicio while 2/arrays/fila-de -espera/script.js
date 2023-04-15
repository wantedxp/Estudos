let fila = []
let opção = ""

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + "° - " + fila[i] + "\n"
    }
    opção = prompt(`Pacientes:\n${pacientes}\nEscolha uma ação:\n1.Novo paciente\n2.Consultar paciente\n3.Sair`)

    switch (opção) {
        case "1":
            const novoPAciente = prompt("Qual é o nome do novo paciente?")
            fila.push(novoPAciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            alert(`${pacienteConsultado} Foi removido da fila`)
            
        case "3":
            alert("Encerando")
            break
        default:
            alert("Opção invalida")
    }
} while (opção !== "3")
