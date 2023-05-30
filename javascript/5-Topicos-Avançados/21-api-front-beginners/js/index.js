import { getUsers, createUser } from '/js/api.js'

function displayUsers(users) {
    users.forEach((user) => {
        const userList = document.querySelector('#userList')
        const userCard = document.createElement('div')
        const userName = document.createElement('p')
        const userEmail = document.createElement('p')
        const userAvatar = document.createElement('img')

        userName.innerText = `${user.first_name} ${user.last_name}`
        userEmail.innerText = user.email
        userAvatar.src = user.avatar

        userCard.append(userAvatar, userName, userEmail)
        userList.appendChild(userCard)

    })
}


function displayCreatedUser(data) {
    console.log(data); // Verifique o conteúdo do objeto data no console

    const userCard = document.createElement('div');
    const userName = document.createElement('p');
    const userJob = document.createElement('p');
    const userId = document.createElement('p');
    const userCreatedAt = document.createElement('p');

    userName.innerText = `Nome: ${data.name}`;
    userJob.innerText = `Trabalho: ${data.job}`;
    userId.innerText = `ID: ${data.id}`;
    userCreatedAt.innerText = `Data de Criação: ${data.createdAt}`;

    userCard.append(userName, userJob, userId, userCreatedAt);

    const userList = document.querySelector('#userList');
    userList.appendChild(userCard);

    // Limpa os campos de entrada
    document.querySelector('#nameInput').value = '';
    document.querySelector('#jobInput').value = '';
}

function initApp() {

    const createUserBtn = document.querySelector('#createUserBtn')

    createUserBtn.addEventListener('click', () => {
        const nameInput = document.querySelector('#nameInput').value
        const jobInput = document.querySelector('#jobInput').value

        console.log(nameInput, jobInput)

        createUser({name: nameInput, job: jobInput})
            .then((data) => displayCreatedUser(data))
            .catch((error) => console.log(error))
    })

    getUsers()
        .then((users) => displayUsers(users))
        .catch((error) => console.log(error))

   
}

initApp()