function double(x) {
    alert(`O dobro de ${x} é igual a ${x * 2}`)
}

function sayHello(name = 'Informe seu nome') {
    alert(`Olá, ${name}`)
}

function createUser(name, email, password, type = 'admin') {
    const user = {
        name,
        email,
        password,
        type
    }
    console.log(user)
}

// createUser('Filipe', 'flp.campos94@gmail.com', '1234')
// createUser('Laleska', 'laleskaraysa@gmail.com', 1234, 'usuario')


function newUser(user) {
  return  user
}

const userData = {
   name: 'Fiipe',
   tel: '999999999',
   email: 'flp.campos@gmail.com', 
   
}

console.log(newUser(userData))