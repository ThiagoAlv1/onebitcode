const car1 = prompt('Nome do primeiro carro:')
const velocity1 = prompt('Velocidade do primeiro carro:')

const car2 = prompt('Nome do segundo carro:')
const velocity2 = prompt('Velocidade do segundo carro:')

if (velocity1 > velocity2) {
  alert(`A velocidade do carro ${car1} é maior`)
} else if (velocity1 < velocity2) {
  alert(`A velocidade do carro ${car2} é maior`)
} else alert('A velocidade dos dois carros são iguais.')
