const number1 = prompt(
  'Olá, eu sou o robô da tabuada! \nInforme o número que você deseja calcular a tabuada: '
)

let resultado = ''

for (i = 1; i <= 10; i++) {
  resultado += ' => ' + number1 + ' x ' + i + ' = ' + number1 * i + '\n'
}

alert('Resultado da tabuada de ' + number1 + ':\n\n ' + resultado)
