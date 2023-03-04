const nome = prompt("Nome do seu personagem")
const poder = prompt("Pontos de poder")

const inimigo = prompt("Digite o nome do seu adversario")
let vida = prompt("Pontos de vida do adversario")
const defesa = prompt("Digite o valor da defesa de seu adversario")

let possuiEscudo = prompt("Adversario possui um escudo: (Sim/Não)")

danoCausado = 0

if (poder > defesa && possuiEscudo === "Não"){
    danoCausado = poder - defesa
} else if (poder > defesa && possuiEscudo === "Sim") {
    danoCausado = (poder - defesa) / 2
}

vida -= danoCausado

alert(`O Personagem ${nome} causou ${danoCausado} em seu adversario ${inimigo}`)

alert(`${nome}:
 Nivel do poder ${poder}  
  ${inimigo}: 
  Pontos de defesa: ${defesa}
  Pontos de vida: ${vida}
  Dano causado ${danoCausado}`)
