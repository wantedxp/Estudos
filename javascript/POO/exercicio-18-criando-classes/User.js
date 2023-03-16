class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if (this.email === email &&
            this.password === password) {
            console.log('Login efetuado com sucesso')
        } else {
            console.log('Erro nas suas credenciais')
        }
    }
}

const user = new User('Filipe Campos', 'flp.campos94@gmail.com', 1234)

user.login('flp.campos94@gmail.com', 1234)

console.log(user)

const user2 = new User('Roberto Carlos', 'robertin@gmail.com', 1234)

user2.login('robertin@gmail.com', 14526)

console.log(user2)