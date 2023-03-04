const a = 0
const b = null
const c = "Teste"

console.log(a || b || c)

// o null coalescing está verificando se a variável é null ou undefined 
console.log(a ?? b ?? c)

