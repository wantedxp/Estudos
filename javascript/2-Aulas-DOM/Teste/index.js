const titleElement = document.querySelector('#title')
titleElement.style.color = 'blue'

const ulList = document.createElement('ul')

let itemList1 = document.createElement('li')
itemList1.textContent = 'Its Free'

let itemList2 = document.createElement('li')
itemList2.textContent = 'Its awesome'

ulList.appendChild(itemList1)
ulList.appendChild(itemList2)

document.body.appendChild(ulList)

let button = document.createElement('button');

button.setAttribute('id', 'btn')

button.textContent = 'Click Here'

document.body.appendChild(button)

button.addEventListener('click', () => {
    alert('Thank you')
})