//Usando objeto no lugar de passar vários parâmetros para simplificar o código
const dadosDoUsuario = {
  nome: "Thiago",
  email: "thiago@email.com",
  endereço: "serra do apodi",
  sexo: "homem"

}

function objetoComoParametro(dadosDoUsuario) {
  console.log(dadosDoUsuario)
}



objetoComoParametro(dadosDoUsuario)

