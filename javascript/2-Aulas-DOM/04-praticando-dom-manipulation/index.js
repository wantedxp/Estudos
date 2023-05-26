let contatoCount = 1

function addContact() {
    const contectSection = document.getElementById('contacts-list')

    const listTitle = document.createElement('h3')
    listTitle.innerText = 'Contato ' + contatoCount
    contatoCount++

    const ulList = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome: '
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameInput.className = 'name-input'
    nameLi.appendChild(nameInput)
    ulList.appendChild(nameLi)


    const phoneLi = document.createElement('li')
    phoneLi.innerText = 'Telefone: '
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'fullname'
    phoneInput.className = 'name-input'
    phoneLi.appendChild(phoneInput)
    ulList.appendChild(phoneLi)

    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="address">Endereço: </label>'
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'
    addressLi.appendChild(addressInput)
    ulList.appendChild(addressLi)


    contectSection.append(listTitle, ulList)
}

function removeContact() {
    const contactSection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}