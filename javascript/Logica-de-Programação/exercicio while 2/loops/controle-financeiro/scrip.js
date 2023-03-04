let dinheiro = 5800.00

let transação = prompt(`O seu saldo atual é de: R$${dinheiro},00 gostaria de fazer um? (Deposito/Saque/Sair) `)


while (transação === "Deposito" || "Saque") {
    if (transação === "Deposito") {
        transação = Number(prompt("Digite a quantidade de valor a ser adicionado a conta"))
        dinheiro += transação
        alert(`Seu saldo atual é de R$${dinheiro},00`)
        transação = prompt(`O Seu saldo atual é de: R$${dinheiro},00 gostaria de fazer um? (Deposito/Saque/Sair)`)
    }


    else if (transação === "Saque") {
        transação = Number(prompt("Digite a quantidade de valor a ser sacado da conta"))
        dinheiro -= transação
        alert(`Seu saldo atual é de R$${dinheiro},00`)
        transação = prompt(`O Seu saldo atual é de: R$${dinheiro},00 gostaria de fazer um? (Deposito/Saque/Sair)`)
    }
    else if (transação ==="Sair"){
        alert("Encerando programa")
        break
    }

}
