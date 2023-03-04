const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
    input.value = input.value == '' ? 'Olá, mundo' : ''
})

document.getElementById('type').addEventListener('click', function () {
    input.type = input.type !== 'radio' ? 'radio' : 'text'
})

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = input.placeholder == '' ? 'Digite algo' : ''
})

document.getElementById('disable').addEventListener('click', function () {
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function () {
    const data = input.dataset.something
    console.log('O valor do atributo data-something e: ' + data)

    input.dataset.something = 'Algum outro valor'
    console.log('O atributo do data-something agora é: ' + input.dataset.something)
})