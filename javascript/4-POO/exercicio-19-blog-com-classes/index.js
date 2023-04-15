const Author = require('./Author')

const john = new Author('John Doe')

const post = john.writePost('Titulo do post', 'Lorem ipsum dolor sic.')

post.addCommnet('Filipe Campos', 'Isso ae!')
post.addCommnet('Matheus', 'Brabo dms')

console.log(john)
console.log(post)