const person = prompt('Qual o seu nome?')
const atackDamage = prompt('Qual o dano do seu ataque?')

const enemyPerson = prompt('Qual o nome do seu inimigo?')
let lifePoints = prompt('Qual o HP do seu inimigo?')
const defensePower = prompt('Qual os pontos de defesa do seu inimigo?')
const enemyShield = prompt('O inimigo possui um escudo?')

let damageCaused = 0

if (atackDamage > defensePower && enemyShield === 'Não') {
  damageCaused = atackDamage - defensePower
} else if (atackDamage > defensePower && enemyShield === 'Sim') {
  damageCaused = (atackDamage - defensePower) / 2
}

lifePoints -= damageCaused

alert(
  `O atacante ${person} causou ${damageCaused} pontos de dano em ${enemyPerson}`
)
alert(`Atacante ${person} 
Poder de ataque: ${atackDamage}


Inimigo ${enemyPerson} 
Pontos de vida: ${lifePoints}
Poder de defesa: ${defensePower} 
Possui escudo? ${enemyShield}`)
