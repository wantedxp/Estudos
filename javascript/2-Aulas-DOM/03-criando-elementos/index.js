function addInput() {
    const ul = document.getElementById('inputs')

   const newLi = 04-praticando-criacao-de-elemetnosdocument.createElement('li')
   newLi.className = 'item-list'
   newLi.innerText = 'Nono input: '

   const newInput = document.createElement('input')
   newInput.type = 'text'
   newInput.name = 'input'

   ul.appendChild(newLi)
   newLi.appendChild(newInput)
}
