let literal: 'Hello'
let pi: 3.14

const test = 5

// A | é como se fosse o operador lógico "ou" dizendo que a variável pode ter um valor ou o outro no caso Yes, No ou Maybe //
let option: 'Yes' | "No" | "Maybe"
option = "No"

let opt: number | boolean

type Planets = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

let planet: Planets


type greetigCAllback = (name: string) => void

function greet(callbackfn: greetigCAllback) {
    let name = "Filipe"
    callbackfn(name)
}







type User = {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}

type APIResponse = {
    data: User[]
}

const fetchUsers = () => {
    return fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(data => data.data)
}

const displayUsers = () => {
    fetchUsers()
        .then(users => {
            users.forEach((user: { first_name: any }) => {
                console.log(user.first_name)
            })
        })
}

displayUsers()