//session storage
document.getElementById('sessionBtn').addEventListener('click', function () {
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSesssion').addEventListener('click', function () {
    const info = sessionStorage.getItem('info')
    alert(`O valor é ${info}`)
})


// local storage
document.getElementById('localBtn').addEventListener('click', function () {
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function () {
    const text = localStorage.getItem('text')
    alert(`A informação do local storage é ${text}`)
})


// cookies
document.getElementById('cookieBtn').addEventListener('click', function () {
    // sintaxe basica: cookieName = value; expires=UTCStringDate: path=/
    const input = document.getElementById('cookie')
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2023, 2, 25) + ';'
    const path = 'path=/'
    document.cookie = cookie + expiration + path
    input.value = ''
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
    const input = document.getElementById('cookie2')
    const cookie = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date(2023, 4, 25) + ';'
    const path = 'path=/'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})