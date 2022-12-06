function ola() {
  console.log("Olá, Mundo!")
}



//Parâmetros

//O que são parâmetros? é como se fosse uma "variável" que fica disponível dentro da função, que é informada na hora que a gente chama a função
  
function dobro(x)  {
  alert("O dobro de " + x + " é igual a " + (x * 2))
}

dobro(5)

//Quando a function tem um parâmetro, e não declaramos na hora de chamar, ela retorna undefined. Porém, podemos definir um valor padrão, como veremos a seguir:

function dizerOla(nome = "mundo") {
  alert("Olá, " + nome + "!")
}

dizerOla()

//Uma função, pode ter quantos parâmetros quiser, sempre separados por vírgula. EX:
function soma (a, b) {
  alert("O resultado da soma é " + (a + b))
}

soma(5, 5)


// Os resultados dos parâmetros devem ser declarado na mesma ordem
// Os parâmetros que tem um valor definido tem que sempre ficar para o FINAL.
function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome, // mesmo que nome: nome,
    email,
    senha,
    tipo
  }
  console.log(usuario)
}

criarUsuario("Thiago", "thiago@gmail.com", "1234")


//Caso você tenha uma função com vários parâmetros, podemos reduzir ele usando um objeto. Ex:
function muitosParametros(nome, telefone, endereço, aniversario, email, senha){
  //....
}

// Ao invés de usar o modelo acima, podemos usar:

function objetoComoParametro(usuario) {
  usuario.nome
  usuario.telefone
  usuario.endereço
  usuario.aniversario
  usuario.email
  usuario.senha
}

const dadosUsuario = {
  nome: "",
  telefone: "",
  endereço: "",
  aniversario: "",
  email: "",
  senha: ""
}

dados(dadosUsuario)