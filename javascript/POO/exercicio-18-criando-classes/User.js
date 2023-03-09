class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if (this.email === email && this.password === password) {
            console.log("Login efetuado com sucesso")
        } else {
            console.log("Email ou senha incorretos")
        }
    }
}

const user1 = new User("Filipe", "flp.campos94@gmail.com", 'password123')

user1.login("flp.campos94@gmail.com", 'password123')

