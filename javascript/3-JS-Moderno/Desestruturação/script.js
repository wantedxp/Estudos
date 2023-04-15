const person = {
    name: "Carl Jhonson",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}

// sintaxe comum 
//const Parents = person.parents
//console.log(Parentes)


// desestruturação
const { job, name, parents } = person
console.log(job, name)


const [father, mother] = parents
console.log(father, mother)


const createUser = ({ name, job, parents }) => {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}
const Carl = createUser(person)
console.log(Carl)
