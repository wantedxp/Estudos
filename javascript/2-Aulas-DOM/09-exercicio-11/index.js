const addNewTechBtn = document.querySelector('#addNewTech')
const devList = document.querySelector('#devList')
const devNameInput = document.querySelector('#devName')
let devArr = []


addNewTechBtn.addEventListener('click', () => {
    const form = document.createElement('form')

    const registerDev = document.createElement('div')

    const devName = document.querySelector('#devName').value
    const devNameParagraph = document.createElement('p')
    devNameParagraph.innerText = `Nome: ${devName}`

    const techLabel = document.createElement('label')
    techLabel.innerText = 'Nome da tecnologia: '
    techLabel.setAttribute('for', 'techName')
    const techInput = document.createElement('input')
    techInput.type = 'text'
    techInput.name = 'techName'


    const radioLabel = document.createElement('label')
    radioLabel.textContent = 'Tecnologias'
    radioLabel.setAttribute('for', 'techs')
    const radioInput = document.createElement('radio')
    radioInput.type = 'radio'


    registerDev.append(devNameParagraph, techLabel, techInput)
    devList.appendChild(registerDev)

})