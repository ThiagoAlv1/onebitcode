let money = prompt('Qual a sua quantidade de dinheiro?')
// Mudando o tipo da var money para Number.
money = parseFloat(money)
let option = ''

do {
  option = prompt(
    `Quantidade atual de dinheiro: ${money} reais. \nPara adicionar dinheiro, digite 1. \nPara sacar dinheiro, digite 2. \nPara encerrar, digite 3.`
  )

  switch (option) {
    case '1':
      money += parseFloat(prompt('Quantos reais você deseja adicionar?'))
      break

    case '2':
      money -= prompt('Quantos reais você deseja sacar?')
      break

    case '3':
      alert('Encerrando o programa.')
      break

    default:
      alert('Opção inválida. Escolha outra opção.')
  }
  //Enquanto a opção for DIFERENTE de 3
} while (option !== '3')
alert(`Quantidade atual de dinheiro: ${money} reais.`)
