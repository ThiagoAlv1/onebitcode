let ring = [
  'Frodo',
  'Sam',
  'Merry',
  'Pippin',
  'Gandalf',
  'Aragorn',
  'Legolas',
  'Gimli'
]
console.log(ring)

// O metodo push adiciona um elemento no final da lista.
// Irá retornar também o tamanho da lista.
let tamanho1 = ring.push('Boromir')
console.log(ring)
console.log(tamanho1)

// O metodo unshift adiciona um elemento no inicio da lista.
// Irá retornar também o tamanho da lista.
let tamanho2 = ring.unshift('Boromir')
console.log(ring)
console.log(tamanho2)

// O metodo pop remove o ultimo elemento de uma lista
// Irá retornar também o elemento retirado da lista.
const ultimoElemento1 = ring.pop()
console.log(ring)
console.log(ultimoElemento1)

// O metodo shift remove o primeiro elemento de uma lista.
// Irá retornar também o elemento retirado da lista.
const ultimoElemento2 = ring.shift()
console.log(ring)
console.log(ultimoElemento2)

// O metodo includes pesquisa por um elemento dentro de uma array.
const inclui = ring.includes('Gandalf')
console.log(inclui)
//Irá retornar true pois Gandalf existe dentro do array ring.

// O metodo indexOf mostra a posição do elemento dentro do array
const indice = ring.indexOf('Gandalf')
console.log(indice)

// O metodo slice serve para "cortar" elementos do array e guardar as informações em um novo array
const hobbits = ring.slice(0, 4)
console.log(hobbits)
// Também conseguimos "cortar" pela posição contrária
const outros = ring.slice(-4)
console.log(outros)
// O metodo slice não modifica o array original.

// O metodo concat serve para concatenar arrays com outras arrays
const sociedade = ring.concat(hobbits, 'Boromir')
console.log(sociedade)

// O metodo splice remove um elemento e substitui por outro
const elementosRemovidos = ring.splice(indice, 1, 'Gandalf, o Cinzento')
console.log(elementosRemovidos)

// Iterar sobre os elementos
for (indice = 0; indice < sociedade.lenght; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + 'se encontra na posição' + indice)
}
