//const Movie = {
//   title: "Sinister",
//  director: {
//       name: "Clarán Foy",
//      age: "44"
//  },
//  originalTitle: "Sinister",
//  inStock: 1,
//  ageGroup: 14,
//  alreadyWatched: true,
//  tags: ["terror", "paranormal", "violence"],
//   addOnStock(quantity) {
//       this.inStock += quantity
//   }
//}

// Movie.addOnStock(50)

// funções construtoras

function Movie(title, director, ageGroup) {
    this.title = title
    this.director = director
    this.ageGroup = ageGroup
    this.addOnStock = function addOnStock(quantity) {
        this.inStock += quantity
    }
    this.save = function () {
        // salva no banco de dados
    }
}

const autor = { name: "Clarán Foy" }
const tags = ["Terror, Paranamormal, Violence"]

const Sinister2 = new Movie("Sinister 2", "Clarán Foy", 14)

console.log(Sinister2)