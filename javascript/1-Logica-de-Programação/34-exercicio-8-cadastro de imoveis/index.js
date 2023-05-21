let propertys = []

do {
    options = prompt('Total de imóveis cadastrados ' + propertys.length + '\n1 Cadastrar novo imóvel ' + '\n2 Mostrar todos os imóveis ' + '\n3 Sair')

    if (options === '1') {
        let property = {}
        property.name = prompt('Informe o nome do proprietário')
        property.rooms = prompt('Informe a quantidade de quartos')
        property.bathroom = prompt('Informe a quantidade de banheiros')
        property.garage = prompt('Informe se o imóvel possui garagem')

        propertys.push(property)
    } else if (options === '2') {
        let message = 'Imóveis cadastrados:\n\n'
        for (let i = 0; i < propertys.length; i++) {
            const property = propertys[i]
            message += 'Proprietário: ' + property.name + '\n'
            message += 'Quartos: ' + property.rooms + '\n'
            message += 'Banheiros: ' + property.bathroom + '\n'
            message += 'Garagem: ' + property.garage + '\n\n'
        }
        alert(message)
    }


} while (options !== '3')

