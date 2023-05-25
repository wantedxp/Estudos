const person = {
    name: 'Filipe',
    age: 29,
    sayHello() {
        console.log('Olá, mundo! meu nome é ' + this.name + ' e tenho ' + this.age + ' anos')
    }
}

person.sayHello()