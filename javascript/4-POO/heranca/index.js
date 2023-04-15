class Person {
    constructor(first, last, age, gender, interest) {
        this.name = {
            first,
            last
        }
        this.age = age
        this.gender = gender
        this.interest = interest
    }

    greeting() {
        console.log(`Olá! Eu me chamo ${this.name.first}`)
    }

    firewell() {
        console.log(`${this.name.first} has left the building. Bye for now!`)
    }
}


class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests)

        this.subject = subject
        this.grade = grade
    }

}

const teacher = new Teacher('Severus', 'Snape', 58, 'male', ['potions', 'poison'], 'Dark arts', 5)

teacher.greeting()
console.log(teacher)
teacher.firewell()