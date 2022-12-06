let option = ''

do {
  option = prompt(
    'Escolha uma opção: \nOpção 1 \nOpção 2 \nOpção 3 \nOpção 4 \nOpção 5 (Encerrar) \n(Digite de 1 a 5)'
  )

  switch (option) {
    case '1':
      alert('Opção 1 escolhida')
      break

    case '2':
      alert('Opção 2 escolhida')
      break

    case '3':
      alert('Opção 3 escolhida')
      break

    case '4':
      alert('Opção 4 escolhida')
      break

    case '5':
      alert('Opção 5 escolhida')
      alert('Encerrando...')
      break

    default:
      alert('Opção inválida. Digite outra opção.')
  }

  //Enquanto a opção for DIFERENTE de 5
} while (option !== '5')

//Começar a estrutura pelo do while.
