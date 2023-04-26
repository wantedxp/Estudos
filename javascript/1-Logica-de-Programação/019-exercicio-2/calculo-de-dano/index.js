/* ## Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens. */

const attackerName = prompt('Informe o nome do personagem atacante')
const attackerPower = Number(prompt('informe o seu poder de ataque'))

const defenderName = prompt('Informe o nome do personagem defensor')
let defenderHealth = Number(prompt('Informe a quantidade de pontos de vida do personagem defensor'))
const defenderArmor = Number(prompt('Informe os pontos de defesa do personagem'))
const defenderShield = confirm('O personagem possui escudo? Ok para sim/Cancelar para não')

let damage = 0

if (attackerPower > defenderArmor && defenderShield === false) {
    damage = attackerPower - defenderArmor
} else if (attackerPower > defenderArmor && defenderShield === true) {
    damage = (attackerPower - defenderArmor) / 2
} else {
    alert('A defesar de ' + defenderName + ' é maior que o poder de ataque de ' + attackerName)
}

defenderHealth -= damage

alert('O personagem ' + attackerName + ' causou ' + damage + ' de dano em ' + defenderName)
alert('Atacante: ' + attackerName + '\nPoder de ataque: ' + attackerPower + '\nDefensor: ' + defenderName + '\nPontos de vida: ' + defenderHealth + '\nPontos de defesa: ' + defenderArmor + '\nPossui escudo? ' + defenderShield)