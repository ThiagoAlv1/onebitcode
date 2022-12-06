const word = prompt('Informe uma palavra: ')
let invertedWord = ''

/* Inicialização: (word.lenght -1) pegará a letra após a ultima letra. EX: Macarrão. Pegará a letra após a ultima letra, que seria depois do O.
 Condição: Até quando o i for maior ou igual a 0, ele vai continuar executando.
 O i-- diminuirá 1 letra de cada vez da variavel word, até chegar na primeira.*/
for (i = word.length - 1; i >= 0; i--) {
  // A palavra invertida vai receber a ultima letra, até chegar na primeira, sendo feita da direita para a esquerda. tornando assim, a palavra da variavel word, a pala ao contrária.
  invertedWord += word[i]
}

if (word === invertedWord) {
  alert(`${word} é um palíndromo!`)
} else {
  alert(`${word} não é um palíndromo!\n\n ${word} !== ${invertedWord}`)
}
