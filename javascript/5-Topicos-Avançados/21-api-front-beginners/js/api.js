export async function getUsers() {
    return fetch('https://reqres.in/api/users')
        .then((res) => res.json())
        .then((data) => data.data)
        .catch((error) => console.log(error))
}

export async function registerUser(newUser) {
    return fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newUser)
    })
        .then((res) => res.json())
        .catch((error) => console.log(error))
}

export async function createUser(newUser) {

    return fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then((res) => res.json())
        .catch((error) => console.log(error))
}