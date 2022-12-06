//Caso você queira usar uma variavel criada dentro da função, você precisa deixar ela "sair", com o return.
function criarProdutos(nome, preço) {
  return produto = {
    nome,
    preço,
    estoque: 1
  }
  
} 

console.log(criarProdutos("Acer aspire 3", 2500))

function familia(nome, idade, sexo) {
  return membros = {
    nome,
    idade,
    sexo,
  }
}

console.log(familia("Thiago", 24, "Masculino"))