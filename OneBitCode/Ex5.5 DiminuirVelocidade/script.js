let velocity = 100
while (velocity > 0) {
  alert(`O carro está a ${velocity} k/ms por hora!`)

  //Diminuirá a variavel velocity em 20
  velocity -= 20

  alert('Diminuindo 20 km/s.')

  if (velocity === 60) {
    alert('A velocidade no limite da pista!')
  } else if (velocity === 40) {
    alert('Cuidado, escola a frente!')
  }
}

alert('O carro parou.')
