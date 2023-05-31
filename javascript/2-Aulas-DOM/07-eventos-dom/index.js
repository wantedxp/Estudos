const btn = document.querySelector('#register-button')


btn.addEventListener('click', (n1, n2) => {
    n1 = Number(prompt('Digite um numero'))
    n2 = Number(prompt('Digite poutro numero'))
    alert(n1 + n2)
})