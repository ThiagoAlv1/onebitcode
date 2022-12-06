const measure = prompt('Insira uma medida em metros: ')

const unity = prompt(
  'Para qual unidade de medida deseja converter?' +
    '\n1. Milímetros(mm)' +
    '\n2. Centímetros(cm)' +
    '\n3. Decímetros(dm)' +
    '\n4. Decâmetros(dam)' +
    '\n5. Hectômetros(hm)' +
    '\n6. Quilômetros(km)'
)

switch (unity) {
  case '1':
    alert('Resultado: ' + measure + 'm = ' + measure * 1000 + 'mm')
    break
  case '2':
    alert('Resultado: ' + measure + 'm = ' + measure * 100 + 'cm')
    break
  case '3':
    alert('Resultado: ' + measure + 'm = ' + measure * 10 + 'dm')
    break
  case '4':
    alert('Resultado: ' + measure + 'm = ' + measure / 10 + 'dam')
    break
  case '5':
    alert('Resultado: ' + measure + 'm = ' + measure / 100 + 'hm')
    break
  case '6':
    alert('Resultado: ' + measure + 'm = ' + measure / 1000 + 'km')
    break
  default:
    alert('Opção Inválida.')
}
