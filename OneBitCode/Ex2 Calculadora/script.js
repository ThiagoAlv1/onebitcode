const number1 = prompt('Digite um número:')
const number2 = prompt('Digite outro número:')

// Mudando tipo de string para número
const x = parseFloat(number1)
const y = parseFloat(number2)

let sum = x + y
let subtract = x - y
let multiply = x * y
let division = x / y

alert(
  'Resultado das operações:\n' +
    'Adição: ' +
    sum +
    '\nSubtração: ' +
    subtract +
    '\nMultiplicação: ' +
    multiply +
    '\nDivisão: ' +
    division
)
