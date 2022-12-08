//Funções anonimas são funções que não possuem um nome

const somar = function(a, b) {
  return a + b
}

const subtrair = function(a, b) {
  return a - b
}

const calculadora = {}
calculadora.somar = somar
calculadora.subtrair = subtrair
calculadora.multiplicar = function(a, b) {
  return a * b
}

console.log(calculadora.multiplicar(20, 10))