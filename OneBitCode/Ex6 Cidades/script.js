const turista = prompt('Qual o seu nome?')

//variavel cidades vazia p/ preencher
let cidades = ''
let contagem = 0

let continuar = prompt('Você visitou alguma cidade? (Sim/Não)')

while (continuar === 'Sim') {
  let cidade = prompt('Qual é o nome da cidade visitada?')
  // += serve para concatenar strings
  cidades += ' - ' + cidade + '\n'
  contagem++
  continuar = prompt('Você visitou alguma outra cidade? (Sim/Não)')
}

alert(
  `Turista: ${turista}
  Quantidade de cidades visitadas: ${contagem}
  Cidades visitadas:\n ${cidades}`
)
